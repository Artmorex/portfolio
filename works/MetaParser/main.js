async function loadJSON(path, success, error){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = async function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    await success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    await error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function makeRequest(method = "GET", url) {
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		xhr.send();
	});
}

const arraySparseJson = [0,1,2,3,4,5,6,7];
const arraySparseJson_week = [8,9,10,11,12,13,14,15];
const arraySparseJson_month = [30,31,32,33,34,35,36,37];

async function getYoutubeIDbyHandle(handle){

	var myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");

	var checked_channel_id = '';

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	let response = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8&forHandle=${handle}&part=id`, requestOptions)
	response = await response.json();
	if (response?.pageInfo?.totalResults != 0) {
		checked_channel_id = response.items[0].id
	} else if (channel_id.includes('UC')) {
		checked_channel_id = handle
	} else {
		throw new Error('channel_id or channel name is not defined!');
	}
	return checked_channel_id
}

async function getArrayOfVideosIDs(youtube_video_num, checked_channel_id, order_type) {

	var myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	
	let response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8&channelId=${checked_channel_id}&part=id&order=${order_type}&maxResults=${youtube_video_num}`, requestOptions)
	response = await response.json();
	if (response?.items.length === 0) {
		throw new Error('channel_id or channel name does not have any videos');
	}

	let arrayWithVideoIDs = []

	for (let index = 0; index < response?.items.length; index++) {
		const element = response?.items[index];
		arrayWithVideoIDs.push(element.id.videoId);
	}

	return arrayWithVideoIDs
}

//-----------------------------  YouTube main stat + members count (in proc.)  ----------------------------------------------------------------------------------------------
//Basic statistics
async function post_channel_info(channel_id) {
	document.getElementById('channel_button').style.display = 'block';
	console.log(channel_id)
	let checked_channel_id = await getYoutubeIDbyHandle(channel_id)
	console.log(checked_channel_id);
	
	loadJSON(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,localizations&id=${checked_channel_id}&maxResults=5&key=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8`,
		function(data) { 

			var youtube_all_views = data.items[0].statistics.viewCount;
			var youtube_all_videos = data.items[0].statistics.videoCount;
			var youtube_all_subs = data.items[0].statistics.subscriberCount;
			var youtube_channel_title = data.items[0].snippet.title;
			var youtube_desc = data.items[0].snippet.description;
			var country = data.items[0].snippet.country;
			
			document.getElementById('youtube_all_views').innerHTML = youtube_all_views;
			document.getElementById('youtube_all_videos').innerHTML = youtube_all_videos;
			document.getElementById('youtube_all_subs').innerHTML = youtube_all_subs;
			document.getElementById('youtube_channel_title').innerHTML = youtube_channel_title;
			document.getElementById('youtube_desc').innerHTML = youtube_desc;
			if(country){
				document.getElementById("country").src = `https://flagsapi.com/${country}/shiny/32.png`;
			}
			else {
				document.getElementById("country").src = `not_found.png`;
			}
		},
		function(xhr) {
			console.error(xhr);
		}
	);
}
//-----------------------------  YouTube top video  ----------------------------------------------------------------------------------------------

async function top_post_youtube(youtube_video_num, order_type){

	'use strict';
	let channelID = document.getElementById('channel_id').value;
	let checked_channel_id = await getYoutubeIDbyHandle(channelID)
	console.log(checked_channel_id);

	document.getElementById('top_video_youtube').innerHTML = `
	    <table class="table_sort">
							<thead><tr>
								<th>Preview</th>
								<th>Published at</th>
								<th>Title</th>
								<th>Views</th>
								<th>Likes</th>
								<th>Comments</th>
								<th>Duration</th>
								<th>License</th>
							</thead></tr>
							<tbody id="youtube_video">

							</tbody>
						</table>
	  	`;

	var youtube_video = document.getElementById('youtube_video');

	let rows = youtube_video_num;

	for (let i = 0; i < rows; i++) {

		let tr = document.createElement('tr');
		youtube_video.append(tr);
		let td0 = document.createElement('td');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');
		let td5 = document.createElement('td');
		let td6 = document.createElement('td');
		let td7 = document.createElement('td');
		let td8 = document.createElement('td');
		let youtube_preview = document.createElement('img');

		let youtube_video_link = document.createElement('a');
		youtube_video_link.setAttribute("id", "youtube_video_link_" + i);

		youtube_preview.setAttribute("id", "youtube_preview_" + i);
		youtube_preview.style.width = '150px';

		td0.setAttribute("id", "youtube_preview_p_" + i);
		td0.append(youtube_preview);
		td1.setAttribute("id", "youtube_posted_time_" + i);
		td2.setAttribute("id", "youtube_title_" + i);
		td2.append(youtube_video_link);
		td3.setAttribute("id", "youtube_views_" + i);
		td4.setAttribute("id", "youtube_likes_" + i);		
		td5.setAttribute("id", "youtube_comments_" + i);
		td6.setAttribute("id", "youtube_duration_" + i);
		td7.setAttribute("id", "youtube_license_" + i);
		tr.append(td0);
		tr.append(td1);
		tr.append(td2);
		tr.append(td3);
		tr.append(td4);
		tr.append(td5);
		tr.append(td6);
		tr.append(td7);
	}

	let arrayIDs = await getArrayOfVideosIDs(youtube_video_num, checked_channel_id, order_type);
	
	loadJSON(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8&part=contentDetails,id,snippet,statistics,player,localizations,status,topicDetails&id=${arrayIDs.toString()}`,
    	function(data) { 
			//console.log(data)
			for (let i = 0; i < data.items.length; i++) {
				let element = data.items[i];

				var youtube_video_id = element.id;
				var youtube_viewCount = element.statistics.viewCount;
				var youtube_likeCount = element.statistics.likeCount;
				var youtube_commentCount = element.statistics.commentCount;
				var youtube_duration = element.contentDetails.duration
				document.getElementById("youtube_duration_" + i).innerHTML = youtube_duration;

				var youtube_license = element.status.license
				document.getElementById("youtube_license_" + i).innerHTML = youtube_license;

				var youtube_preview_thumbnails = element.snippet.thumbnails.medium.url;
				var youtube_preview_src = document.getElementById('youtube_preview_' + i);
				youtube_preview_src.src = youtube_preview_thumbnails;

				//posted_time
				var youtube_posted_time = element.snippet.publishedAt;
				document.getElementById("youtube_posted_time_" + i).innerHTML = youtube_posted_time;

				//youtube_title //title_link
				var youtube_title = element.snippet.title;
				var youtube_a = document.getElementById("youtube_video_link_" + i);
				youtube_a.innerHTML = youtube_title;
				console.log(youtube_video_id)
				youtube_a.href = 'https://www.youtube.com/watch?v=' + youtube_video_id;
				youtube_a.target = "_blank";

				document.getElementById('youtube_views_'+i).innerHTML = youtube_viewCount;
				document.getElementById('youtube_likes_'+i).innerHTML = youtube_likeCount;
				document.getElementById('youtube_comments_' + i).innerHTML = youtube_commentCount;
			}
		},
    	function(xhr) {
			    console.error(xhr);
			}    
	);
}

function clicktable_youtube(youtube_video_num){

	let e_order_type = document.getElementById("order_type");
	let order_type = e_order_type.options[e_order_type.selectedIndex].value;
	switch (order_type) {
			  case '0':
			  	top_post_youtube(youtube_video_num, 'date');
			    break;

			  case '1':
			    top_post_youtube(youtube_video_num, 'title');
			    break;

			  case '2':
			    top_post_youtube(youtube_video_num, 'rating');
			    break;

			  case '3':
			    top_post_youtube(youtube_video_num, 'relevance');
			    break;
				
			  case '4':
			    top_post_youtube(youtube_video_num, 'viewCount');
			    break;

			  case '5':
			    top_post_youtube(youtube_video_num, 'videoCount');
			    break;

			  default:
			  	//top_post_youtube(youtube_video_num, '-estimatedMinutesWatched');
			  	console.log("bad req");
			    break;
			}

	//top_post_youtube_2(youtube_video_num);
	listener_table();
}

clicktable_youtube(5);

//-----------------------------  YOUTUBE end --------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------  listener sort  -------------------------------------------------------------------------------
function listener_table(){
	//document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    
}