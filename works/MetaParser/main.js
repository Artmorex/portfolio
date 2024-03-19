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

async function getYoutubeIDbyHandle(hangle){

	var myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	let response = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8&forHandle=${hangle}&part=id`, requestOptions)
	response = await response.json();
	return response
}

//-----------------------------  YouTube main stat + members count (in proc.)  ----------------------------------------------------------------------------------------------
//Basic statistics
async function post_channel_info(channel_id) {
	document.getElementById('channel_button').style.display = 'block';
	console.log(channel_id)
	var checked_channel_id = '';
	let result = await getYoutubeIDbyHandle(channel_id)
	console.log(result);
	if (result?.pageInfo?.totalResults != 0){
		checked_channel_id = result.items[0].id
	} else if (channel_id.includes('UC')) {
		checked_channel_id = channel_id
	} else {
		throw new Error('channel_id or channel name is not defined!');
	}
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

function top_post_youtube(youtube_video_num, order_type){

	'use strict';

	document.getElementById('top_video_youtube').innerHTML = `
	    <table class="table_sort">
							<thead><tr>
								<th>Preview</th>
								<th>Created date</th>
								<th>Name</th>
								<th>Views</th>
								<th>Likes</th>
								<th>Dislikes</th>
								<th>Comments</th>
								<th>Sharings</th>
								<th>Total views time</th>
								<th>Avarage view time</th>
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
		let td9 = document.createElement('td');
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
		td6.setAttribute("id", "youtube_dislikes_" + i);
		td7.setAttribute("id", "youtube_shares_" + i);
		td8.setAttribute("id", "youtube_est_time_" + i);
		td9.setAttribute("id", "youtube_avg_time_" + i);
		tr.append(td0);
		tr.append(td1);
		tr.append(td2);
		tr.append(td3);
		tr.append(td4);
		tr.append(td5);
		tr.append(td6);
		tr.append(td7);
		tr.append(td8);
		tr.append(td9);
	}

	//var e_order_type = document.getElementById("order_type");
	//var order_type = e_order_type.options[e_order_type.selectedIndex].value;
	
	//date_perform for end date
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-'+ mm + '-' + dd;

	//declare youtube params and vars
	var youtube_end_date = today;
	//var youtube_channel_id = 'channel%3D%3DMINE';
	var youtube_channel_id = 'channel==NatGeo';
	var youtube_maxResults = '100';
	var youtube_dimensions = 'video';
	var youtube_metrics = 'estimatedMinutesWatched%2Cviews%2Clikes%2Cdislikes%2Ccomments%2Cshares%2CsubscribersGained%2CsubscribersLost%2CaverageViewDuration';
	//Общее количество просмотренных минут, просмотров, лайков, дизлайков, комментариев, репостов, подписались, отписались, среднее время просмотра
	var youtube_params = 'dimensions='+youtube_dimensions+'&endDate='+ youtube_end_date +'&ids='+ youtube_channel_id +'&maxResults='+youtube_maxResults+'&metrics='+youtube_metrics;
	//var youtube_sort = '-estimatedMinutesWatched'; //order_type
	var youtube_start_date = '2015-01-01';
	/*
	loadJSON('https://youtubeanalytics.googleapis.com/v2/reports?'+youtube_params+'&sort='+order_type+'&startDate='+youtube_start_date+'&access_token='+youtube_token,
    	function(data) { 
	    	for (let i = 0; i < youtube_video_num; i++) {

	    		var youtube_names = ''+data.rows[i]+'';
				var youtube_nameArr = youtube_names.split(',');

	    		var youtube_video_id = youtube_nameArr[0];
	    		var youtube_est_time = youtube_nameArr[1];
				var youtube_viewCount = youtube_nameArr[2];
				var youtube_likeCount = youtube_nameArr[3];
				var youtube_dislikeCount = youtube_nameArr[4];
				var youtube_commentCount = youtube_nameArr[5];
				var youtube_sharesCount = youtube_nameArr[6];
				var youtube_sub = youtube_nameArr[7];
				var youtube_unsub = youtube_nameArr[8];
				var youtube_avg_time = youtube_nameArr[9];

				document.getElementById('youtube_views_'+i).innerHTML = youtube_viewCount;
				document.getElementById('youtube_likes_'+i).innerHTML = youtube_likeCount;
				document.getElementById('youtube_comments_'+i).innerHTML = youtube_dislikeCount;
				document.getElementById('youtube_dislikes_'+i).innerHTML = youtube_commentCount;
				document.getElementById('youtube_shares_'+i).innerHTML = youtube_sharesCount;
				document.getElementById('youtube_est_time_'+i).innerHTML = youtube_est_time;
				document.getElementById('youtube_avg_time_'+i).innerHTML = youtube_avg_time;

				loadJSON('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+youtube_video_id+'&key=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8',
					    function(data) {
					     	var youtube_preview_thumbnails = data.items[0].snippet.thumbnails.medium.url;
							var youtube_preview_src = document.getElementById('youtube_preview_' + i);
							youtube_preview_src.src = youtube_preview_thumbnails;
							
							//posted_time
							var youtube_posted_time = data.items[0].snippet.publishedAt;
							document.getElementById("youtube_posted_time_" + i).innerHTML = youtube_posted_time;
							
							//youtube_title //title_link
							var youtube_title = data.items[0].snippet.title;
							var youtube_a = document.getElementById("youtube_video_link_" + i);
							youtube_a.innerHTML = youtube_title;
							youtube_a.href = 'https://www.youtube.com/watch?v='+youtube_video_id;
							youtube_a.target = "_blank";
					    },
					    function(xhr) {
					    	console.error(xhr);
					    }    
					);
			}
		},
    	function(xhr) {
			    console.error(xhr);
			}    
	);
	*/
}

function top_post_youtube_2(youtube_video_num, order_type){

	'use strict';

	document.getElementById('top_video_youtube').innerHTML = `
	    <table class="table_sort">
							<thead><tr>
							<th>Preview</th>
							<th>Created date</th>
							<th>Name</th>
							<th>Views</th>
							<th>Likes</th>
							<th>Dislikes</th>
							<th>Comments</th>
							<th>Sharings</th>
							<th>Total views time</th>
							<th>Avarage view time</th>
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
		let td9 = document.createElement('td');
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
		td6.setAttribute("id", "youtube_dislikes_" + i);
		td7.setAttribute("id", "youtube_shares_" + i);
		td8.setAttribute("id", "youtube_est_time_" + i);
		td9.setAttribute("id", "youtube_avg_time_" + i);
		tr.append(td0);
		tr.append(td1);
		tr.append(td2);
		tr.append(td3);
		tr.append(td4);
		tr.append(td5);
		tr.append(td6);
		tr.append(td7);
		tr.append(td8);
		tr.append(td9);
	}

	//var e_order_type = document.getElementById("order_type");
	//var order_type = e_order_type.options[e_order_type.selectedIndex].value;
	//var order_type = 'date';

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-'+ mm + '-' + dd;
	var youtube_end_date = today;
	var youtube_params= 'dimensions=video&endDate='+ youtube_end_date;
	
	loadJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C%20snippet&channelId=TrioMandili&order='+order_type+'&maxResults='+youtube_video_num+'&pageToken=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8&key=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8',
		function(data) {

			for (let i = 0; i < youtube_video_num; i++) {
				var youtube_video_id = data.items[i].id.videoId;
				//preview
				var youtube_preview_thumbnails = data.items[i].snippet.thumbnails.medium.url;
				var youtube_preview_src = document.getElementById('youtube_preview_' + i);
				youtube_preview_src.src = youtube_preview_thumbnails;
				
				//posted_time
				var youtube_posted_time = data.items[i].snippet.publishedAt;
				document.getElementById("youtube_posted_time_" + i).innerHTML = youtube_posted_time;
				
				//youtube_title //title_link
				var youtube_title = data.items[i].snippet.title;
				var youtube_a = document.getElementById("youtube_video_link_" + i);
				youtube_a.innerHTML = youtube_title;
				youtube_a.href = 'https://www.youtube.com/watch?v='+youtube_video_id;
				youtube_a.target = "_blank";
				
				loadJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id='+youtube_video_id+'&maxResults=1&key=AIzaSyCx-Av3jyP6h0jIcppzbThxtNfMelRwaU8',
				    function(data) { 
					     	var youtube_viewCount = data.items[0].statistics.viewCount;
							var youtube_likeCount = data.items[0].statistics.likeCount;
							var youtube_dislikeCount = data.items[0].statistics.dislikeCount;
							var youtube_commentCount = data.items[0].statistics.commentCount;
					     	document.getElementById('youtube_views_'+i).innerHTML = youtube_viewCount;
							document.getElementById('youtube_likes_'+i).innerHTML = youtube_likeCount;
							document.getElementById('youtube_comments_'+i).innerHTML = youtube_dislikeCount;
							document.getElementById('youtube_dislikes_'+i).innerHTML = youtube_commentCount;
				    },
				    function(xhr) {
				    	console.error(xhr);
				    }    
				);

				let youtube_filters = youtube_video_id+'&ids=channel%3D%3DMINE&maxResults=1&metrics=shares%2CestimatedMinutesWatched%2CaverageViewDuration&sort=-estimatedMinutesWatched&startDate=2015-03-11';
				
				loadJSON('https://youtubeanalytics.googleapis.com/v2/reports?'+youtube_params+'&filters=video%3D%3D'+youtube_filters+'&access_token='+youtube_token,
			    	function(data) {
			    			console.log(data);
    			    		var youtube_names = ''+data.rows[0]+'';
							var youtube_nameArr = youtube_names.split(',');

				    		var youtube_sharesCount = youtube_nameArr[1];
				    		var youtube_est_time = youtube_nameArr[2];
							var youtube_avg_time = youtube_nameArr[3];
							document.getElementById('youtube_shares_'+i).innerHTML = youtube_sharesCount;
							document.getElementById('youtube_est_time_'+i).innerHTML = youtube_est_time;
							document.getElementById('youtube_avg_time_'+i).innerHTML = youtube_avg_time;
							
						},
				    	function(xhr) {
							    console.error(xhr);
							}    
				);

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
			  	top_post_youtube(youtube_video_num, '-estimatedMinutesWatched');
			    break;

			  case '1':
			    top_post_youtube(youtube_video_num, '-averageViewDuration');
			    break;

			  case '2':
			    top_post_youtube(youtube_video_num, '-subscribersGained');
			    break;

			  case '3':
			    top_post_youtube_2(youtube_video_num, 'viewcount');
			    break;

			  case '4':
			    top_post_youtube_2(youtube_video_num, 'date');
			    break;

			  case '5':
			    top_post_youtube_2(youtube_video_num, 'relevance');
			    break;

			  case '6':
			    top_post_youtube_2(youtube_video_num, 'title');
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