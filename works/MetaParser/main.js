function loadJSON(path, success, error){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function timestampToDate(ts) {
	
    return formattedTime;
}

const arraySparseJson = [0,1,2,3,4,5,6,7];
const arraySparseJson_week = [8,9,10,11,12,13,14,15];
const arraySparseJson_month = [30,31,32,33,34,35,36,37];
//------------------------------- fb main stat + (members count in proc.)   ----------------------------------------------------------------------------------------------
arraySparseJson.forEach(function(element){
	
	var dateJson  = new Date;
	dateJson.setDate(dateJson.getDate()-element);
	var ts_for_link = Math.round(dateJson.getTime() / 1000);
	//console.log(ts_for_link);
	var dateJson_2 = new Date;
	dateJson_2.setDate(dateJson_2.getDate()+1-element);
	var ts_for_link_2 = Math.round(dateJson_2.getTime() / 1000);

	/*page_impressions---------------------------------------------------*/
		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_unique_'+element).innerHTML = page_impressions_unique;

					    let dateJson_day  = new Date;
						dateJson_day.setDate(dateJson_day.getDate()-element-1);
						let ts_for_link_day = Math.round(dateJson_day.getTime() / 1000);
						let dateJson_2_day = new Date;
						dateJson_2_day.setDate(dateJson_2_day.getDate()-element);
						let ts_for_link_2_day = Math.round(dateJson_2_day.getTime() / 1000);
						//day
					    loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_day+'&until='+ts_for_link_2_day+'&metric=page_impressions_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_day = data.data[0].values[0].value;
						     	let page_impressions_unique_day_diff = Math.round(100*(page_impressions_unique-page_impressions_unique_day)/page_impressions_unique);
							    document.getElementById('page_impressions_unique_'+element+'_day').innerHTML = page_impressions_unique_day_diff + "%";

						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

						let dateJson_week  = new Date;
						dateJson_week.setDate(dateJson_week.getDate()-element-7);
						let ts_for_link_week = Math.round(dateJson_week.getTime() / 1000);
						let dateJson_2_week = new Date;
						dateJson_2_week.setDate(dateJson_2_week.getDate()-element-6);
						let ts_for_link_2_week = Math.round(dateJson_2_week.getTime() / 1000);
 						//week
 						loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_week+'&until='+ts_for_link_2_week+'&metric=page_impressions_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_week = data.data[0].values[0].value;
						     	let page_impressions_unique_week_diff = Math.round(100*(page_impressions_unique - page_impressions_unique_week)/page_impressions_unique);
							    document.getElementById('page_impressions_unique_'+element+'_week').innerHTML = page_impressions_unique_week_diff + "%";

						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

						let dateJson_month  = new Date;
						dateJson_month.setDate(dateJson_month.getDate()-element-30);
						let ts_for_link_month = Math.round(dateJson_month.getTime() / 1000);
						let dateJson_2_month = new Date;
						dateJson_2_month.setDate(dateJson_2_month.getDate()-element-29);
						let ts_for_link_2_month = Math.round(dateJson_2_month.getTime() / 1000);
						//month
						loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_month+'&until='+ts_for_link_2_month+'&metric=page_impressions_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_month = data.data[0].values[0].value;
						     	let page_impressions_unique_month_diff = Math.round(100*(page_impressions_unique - page_impressions_unique_month)/page_impressions_unique);
							    document.getElementById('page_impressions_unique_'+element+'_month').innerHTML = page_impressions_unique_month_diff + "%";
						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);
				
				    },
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_paid_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_paid_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_paid_unique_'+element).innerHTML = page_impressions_paid_unique;

					    let dateJson_day  = new Date;
						dateJson_day.setDate(dateJson_day.getDate()-element-1);
						let ts_for_link_day = Math.round(dateJson_day.getTime() / 1000);
						let dateJson_2_day = new Date;
						dateJson_2_day.setDate(dateJson_2_day.getDate()-element);
						let ts_for_link_2_day = Math.round(dateJson_2_day.getTime() / 1000);
						//day
					    loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_day+'&until='+ts_for_link_2_day+'&metric=page_impressions_paid_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_day = data.data[0].values[0].value;
						     	let page_impressions_unique_day_diff = Math.round(100*(page_impressions_paid_unique-page_impressions_unique_day)/page_impressions_paid_unique);
							    document.getElementById('page_impressions_paid_unique_'+element+'_day').innerHTML = page_impressions_unique_day_diff + "%";

						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

						let dateJson_week  = new Date;
						dateJson_week.setDate(dateJson_week.getDate()-element-7);
						let ts_for_link_week = Math.round(dateJson_week.getTime() / 1000);
						let dateJson_2_week = new Date;
						dateJson_2_week.setDate(dateJson_2_week.getDate()-element-6);
						let ts_for_link_2_week = Math.round(dateJson_2_week.getTime() / 1000);
 						//week
 						loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_week+'&until='+ts_for_link_2_week+'&metric=page_impressions_paid_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_week = data.data[0].values[0].value;
						     	let page_impressions_unique_week_diff = Math.round(100*(page_impressions_paid_unique - page_impressions_unique_week)/page_impressions_paid_unique) ;
							    document.getElementById('page_impressions_paid_unique_'+element+'_week').innerHTML = page_impressions_unique_week_diff + "%";
						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

						let dateJson_month  = new Date;
						dateJson_month.setDate(dateJson_month.getDate()-element-30);
						let ts_for_link_month = Math.round(dateJson_month.getTime() / 1000);
						let dateJson_2_month = new Date;
						dateJson_2_month.setDate(dateJson_2_month.getDate()-element-29);
						let ts_for_link_2_month = Math.round(dateJson_2_month.getTime() / 1000);
						//month
						loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_month+'&until='+ts_for_link_2_month+'&metric=page_impressions_paid_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_month = data.data[0].values[0].value;
						     	let page_impressions_unique_month_diff = Math.round(100*(page_impressions_paid_unique-page_impressions_unique_month)/page_impressions_paid_unique);
							    document.getElementById('page_impressions_paid_unique_'+element+'_month').innerHTML = page_impressions_unique_month_diff + "%";
						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

				    },
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_organic_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_organic_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_organic_unique_'+element).innerHTML = page_impressions_organic_unique;

					    let dateJson_day  = new Date;
						dateJson_day.setDate(dateJson_day.getDate()-element-1);
						let ts_for_link_day = Math.round(dateJson_day.getTime() / 1000);
						let dateJson_2_day = new Date;
						dateJson_2_day.setDate(dateJson_2_day.getDate()-element);
						let ts_for_link_2_day = Math.round(dateJson_2_day.getTime() / 1000);
						//day
					    loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_day+'&until='+ts_for_link_2_day+'&metric=page_impressions_organic_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_day = data.data[0].values[0].value;
						     	let page_impressions_unique_day_diff = Math.round(100*(page_impressions_organic_unique-page_impressions_unique_day)/page_impressions_organic_unique);
							    document.getElementById('page_impressions_organic_unique_'+element+'_day').innerHTML = page_impressions_unique_day_diff + "%";

						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

						let dateJson_week  = new Date;
						dateJson_week.setDate(dateJson_week.getDate()-element-7);
						let ts_for_link_week = Math.round(dateJson_week.getTime() / 1000);
						let dateJson_2_week = new Date;
						dateJson_2_week.setDate(dateJson_2_week.getDate()-element-6);
						let ts_for_link_2_week = Math.round(dateJson_2_week.getTime() / 1000);
 						//week
 						loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_week+'&until='+ts_for_link_2_week+'&metric=page_impressions_organic_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_week = data.data[0].values[0].value;
						     	let page_impressions_unique_week_diff = Math.round(100*(page_impressions_organic_unique-page_impressions_unique_week)/page_impressions_organic_unique);
							    document.getElementById('page_impressions_organic_unique_'+element+'_week').innerHTML = page_impressions_unique_week_diff + "%";
						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

						let dateJson_month  = new Date;
						dateJson_month.setDate(dateJson_month.getDate()-element-30);
						let ts_for_link_month = Math.round(dateJson_month.getTime() / 1000);
						let dateJson_2_month = new Date;
						dateJson_2_month.setDate(dateJson_2_month.getDate()-element-29);
						let ts_for_link_2_month = Math.round(dateJson_2_month.getTime() / 1000);
						//month
						loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_month+'&until='+ts_for_link_2_month+'&metric=page_impressions_organic_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_month = data.data[0].values[0].value;
						     	let page_impressions_unique_month_diff = Math.round(100*(page_impressions_organic_unique-page_impressions_unique_month)/page_impressions_organic_unique);
							    document.getElementById('page_impressions_organic_unique_'+element+'_month').innerHTML = page_impressions_unique_month_diff + "%";
						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

				    }, 
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

	/*page_post_engagements-----------------------------------------*/
		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_post_engagements&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_post_engagements = data.data[0].values[0].value;
					    document.getElementById('page_post_engagements_'+element).innerHTML = page_post_engagements;

					    let dateJson_day  = new Date;
						dateJson_day.setDate(dateJson_day.getDate()-element-1);
						let ts_for_link_day = Math.round(dateJson_day.getTime() / 1000);
						let dateJson_2_day = new Date;
						dateJson_2_day.setDate(dateJson_2_day.getDate()-element);
						let ts_for_link_2_day = Math.round(dateJson_2_day.getTime() / 1000);
						//day
					    loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_day+'&until='+ts_for_link_2_day+'&metric=page_post_engagements&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_day = data.data[0].values[0].value;
						     	let page_impressions_unique_day_diff = Math.round(100*(page_post_engagements-page_impressions_unique_day)/page_post_engagements);
							    document.getElementById('page_post_engagements_'+element+'_day').innerHTML = page_impressions_unique_day_diff + "%";

						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

						let dateJson_week  = new Date;
						dateJson_week.setDate(dateJson_week.getDate()-element-7);
						let ts_for_link_week = Math.round(dateJson_week.getTime() / 1000);
						let dateJson_2_week = new Date;
						dateJson_2_week.setDate(dateJson_2_week.getDate()-element-6);
						let ts_for_link_2_week = Math.round(dateJson_2_week.getTime() / 1000);
 						//week
 						loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_week+'&until='+ts_for_link_2_week+'&metric=page_post_engagements&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_week = data.data[0].values[0].value;
						     	let page_impressions_unique_week_diff = Math.round(100*(page_post_engagements-page_impressions_unique_week)/page_post_engagements);
							    document.getElementById('page_post_engagements_'+element+'_week').innerHTML = page_impressions_unique_week_diff + "%";
						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);

						let dateJson_month  = new Date;
						dateJson_month.setDate(dateJson_month.getDate()-element-30);
						let ts_for_link_month = Math.round(dateJson_month.getTime() / 1000);
						let dateJson_2_month = new Date;
						dateJson_2_month.setDate(dateJson_2_month.getDate()-element-29);
						let ts_for_link_2_month = Math.round(dateJson_2_month.getTime() / 1000);
						//month
						loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link_month+'&until='+ts_for_link_2_month+'&metric=page_post_engagements&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						    function(data) { 
						     	let page_impressions_unique_month = data.data[0].values[0].value;
						     	let page_impressions_unique_month_diff = Math.round(100*(page_post_engagements-page_impressions_unique_month)/page_post_engagements);
							    document.getElementById('page_post_engagements_'+element+'_month').innerHTML = page_impressions_unique_month_diff + "%";
						    },
						    function(xhr) {
						    	console.error(xhr);
						    }
						);
				    }, 
				    function(xhr) {
				    	console.error(xhr);
				    }
			);
});

/*
arraySparseJson_week.forEach(function(element){
	
	var dateJson  = new Date;
	dateJson.setDate(dateJson.getDate()-element);
	var ts_for_link = Math.round(dateJson.getTime() / 1000);
	//console.log(ts_for_link);
	var dateJson_2 = new Date;
	dateJson_2.setDate(dateJson_2.getDate()+1-element);
	var ts_for_link_2 = Math.round(dateJson_2.getTime() / 1000);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_unique_'+element+'_day').innerHTML = page_impressions_unique;
				    },
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_paid_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_paid_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_paid_unique_'+element+'_day').innerHTML = page_impressions_paid_unique;
				    },
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_organic_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_paid_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_organic_unique_'+element+'_day').innerHTML = page_impressions_paid_unique;
				    }, 
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_post_engagements&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_post_engagements = data.data[0].values[0].value;
					    document.getElementById('page_post_engagements_'+element).innerHTML = page_post_engagements;
				    }, 
				    function(xhr) {
				    	console.error(xhr);
				    }
			);
});

arraySparseJson_month.forEach(function(element){
	
	var dateJson  = new Date;
	dateJson.setDate(dateJson.getDate()-element);
	var ts_for_link = Math.round(dateJson.getTime() / 1000);
	//console.log(ts_for_link);
	var dateJson_2 = new Date;
	dateJson_2.setDate(dateJson_2.getDate()+1-element);
	var ts_for_link_2 = Math.round(dateJson_2.getTime() / 1000);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_unique_'+element).innerHTML = page_impressions_unique;
				    },
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_paid_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_paid_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_paid_unique_'+element).innerHTML = page_impressions_paid_unique;
				    },
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_impressions_organic_unique&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_impressions_paid_unique = data.data[0].values[0].value;
					    document.getElementById('page_impressions_organic_unique_'+element).innerHTML = page_impressions_paid_unique;
				    }, 
				    function(xhr) {
				    	console.error(xhr);
				    }
			);

		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_post_engagements&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) { 
				     	var page_post_engagements = data.data[0].values[0].value;
					    document.getElementById('page_post_engagements_'+element).innerHTML = page_post_engagements;
				    }, 
				    function(xhr) {
				    	console.error(xhr);
				    }
			);
});
*/

arraySparseJson.forEach(function(element){
	
	var dateJson  = new Date;
	dateJson.setDate(dateJson.getDate()-element);
	var ts_for_link = Math.round(dateJson.getTime() / 1000);
	//console.log(ts_for_link);
	var dateJson_2 = new Date;
	dateJson_2.setDate(dateJson_2.getDate()+1-element);
	var ts_for_link_2 = Math.round(dateJson_2.getTime() / 1000);
	/*page_actions_post_reactions_total-----------------------------------------*/	
		loadJSON('https://graph.facebook.com/v6.0/1824390074483299/insights?pretty=0&since='+ts_for_link+'&until='+ts_for_link_2+'&metric=page_actions_post_reactions_total&period=day&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
				    function(data) {

				     	//var page_actions_post_reactions_total = data.data[0].values[0].value.like+data.data[0].values[0].value.love+data.data[0].values[0].value.wow+data.data[0].values[0].value.haha+data.data[0].values[0].value.anger+data.data[0].values[0].value.sorry;
					    var page_actions_post_reactions_like = data.data[0].values[0].value.like;
					    var page_actions_post_reactions_love = data.data[0].values[0].value.love;
					    var page_actions_post_reactions_wow = data.data[0].values[0].value.wow;
					    var page_actions_post_reactions_haha = data.data[0].values[0].value.haha;
					    var page_actions_post_reactions_sorry = data.data[0].values[0].value.sorry;
					    var page_actions_post_reactions_anger = data.data[0].values[0].value.anger;
					    if (page_actions_post_reactions_like == null) page_actions_post_reactions_like = 0;
						if (page_actions_post_reactions_love == null) page_actions_post_reactions_love = 0;
						if (page_actions_post_reactions_wow == null) page_actions_post_reactions_wow = 0;
						if (page_actions_post_reactions_haha == null) page_actions_post_reactions_haha = 0;
						if (page_actions_post_reactions_sorry == null) page_actions_post_reactions_sorry = 0;
						if (page_actions_post_reactions_anger == null) page_actions_post_reactions_anger = 0;

					    var page_actions_post_reactions_total = page_actions_post_reactions_like + page_actions_post_reactions_love + page_actions_post_reactions_wow + page_actions_post_reactions_anger + page_actions_post_reactions_haha + page_actions_post_reactions_sorry;
					    
					    document.getElementById('page_actions_post_reactions_total_'+element).innerHTML = page_actions_post_reactions_total;
				    	document.getElementById('page_actions_post_reactions_like_'+element).innerHTML = page_actions_post_reactions_like;
						document.getElementById('page_actions_post_reactions_love_'+element).innerHTML = page_actions_post_reactions_love;
				    	document.getElementById('page_actions_post_reactions_wow_'+element).innerHTML = page_actions_post_reactions_wow;
				    	document.getElementById('page_actions_post_reactions_haha_'+element).innerHTML = page_actions_post_reactions_haha;
				    	document.getElementById('page_actions_post_reactions_sorry_'+element).innerHTML = page_actions_post_reactions_sorry;
				    	document.getElementById('page_actions_post_reactions_anger_'+element).innerHTML = page_actions_post_reactions_anger;
				    }, 
				    function(xhr) {
				    	console.error(xhr);
				    }
			);
});

//------------------------------- fb top post   ----------------------------------------------------------------------------------------------

function top_post(post_num){
	
	'use strict';

	document.getElementById('top_post_table').innerHTML = `
	    <table class="table_sort">
							<thead><tr>
								<th>Type</th>
								<th>Date posted</th>
								<th>Message</th>
								<th>Times watched</th>
								<th>Total clicks</th>
								<th>Total reactions</th>
								<th>Likes</th>
								<th>Comments</th>
								<th>Reposts</th>
							</thead></tr>
							<tbody id="feed">

							</tbody>
						</table>
	  	`;

	var feed = document.getElementById('feed');
	//let table = document.getElementById('top_fb');
	//table.setAttribute("class", "table_sort");
	let rows = post_num;
	for (let i = 0; i < rows; i++) {

		let tr = document.createElement('tr');
		feed.append(tr);
		let td = document.createElement('td');
		let td0 = document.createElement('td');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');
		let td5 = document.createElement('td');
		let td6 = document.createElement('td');
		let td7 = document.createElement('td');
		let photo_caption = document.createElement('img');
		let feed_link = document.createElement('a');
		feed_link.setAttribute("id", "feed_link_" + i);

		photo_caption.setAttribute("id", "feed_photo_post_" + i);
		photo_caption.style.width = '150px';
		td.setAttribute("id", "feed_photo_" + i);
		let media_type = document.createElement('p');
		media_type.setAttribute("id", "media_type_" + i);
		td.append(media_type);
		td.append(photo_caption);
		td0.setAttribute("id", "feed_time_" + i);
		td1.setAttribute("id", "feed_message_" + i);
		td1.append(feed_link);
		td2.setAttribute("id", "post_engagements_" + i);
		td3.setAttribute("id", "post_engaged_users_" + i);
		td4.setAttribute("id", "post_reactions_total_" + i);		
		td5.setAttribute("id", "post_likes_total_" + i);
		td6.setAttribute("id", "post_comments_total_" + i);
		td7.setAttribute("id", "post_shares_total_" + i);
		tr.append(td);
		tr.append(td0);
		tr.append(td1);
		tr.append(td2);
		tr.append(td3);
		tr.append(td4);
		tr.append(td5);
		tr.append(td6);
		tr.append(td7);
	}

	//1824390074483299/feed?fields=comments.limit(0).summary(true).filter(stream),likes.limit(0).summary(true).filter(stream),shares
	
	loadJSON('https://graph.facebook.com/v6.0/1824390074483299/feed?pretty=0&fields=full_picture, created_time, message, id, permalink_url, attachments{media_type},comments.limit(0).summary(true).filter(stream),likes.limit(0).summary(true).filter(stream),shares&limit='+ post_num +'&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
		    
		    function(data) {
			    for (i = 0; i < post_num; i++) {
			    	var feed_photo = data.data[i].full_picture;
				    var feed_time = data.data[i].created_time;
			     	var feed_id = data.data[i].id;
			     	var feed_message = data.data[i].message;
			     	var feed_link = data.data[i].permalink_url;
			     	//likes, comments, shares
			     	var feed_likes = data.data[i].likes.summary.total_count;
			     	var feed_comments = data.data[i].comments.summary.total_count;
			     	let feed_shares;
			     	if(data.data[i].hasOwnProperty('shares')) feed_shares = data.data[i].shares.count;
			     	if (feed_likes == null) feed_likes = 0;
					if (feed_comments == null) feed_comments = 0;
					if (feed_shares == null) feed_shares = 0;
					document.getElementById('post_likes_total_' + i).innerHTML = feed_likes;
					document.getElementById('post_comments_total_' + i).innerHTML = feed_comments;
					document.getElementById('post_shares_total_' + i).innerHTML = feed_shares;
			     	
			     	feed_message = feed_message.substring(0, 160)+'...';
					let feed_type;
					if(data.data[i].hasOwnProperty('attachments')) feed_type = data.data[i].attachments.data[0].media_type;
			     	if (feed_type == null) feed_type = 0;
			     	document.getElementById('media_type_' + i).innerHTML = feed_type; // feed_type
			     	var photo_cap = document.getElementById('feed_photo_post_' + i); //photo_cap
			     	if(feed_photo!=null){
			     		photo_cap.src = feed_photo; // feed_photo
			     	}
			     	else{photo_cap.src = 'nophoto.png';}

					document.getElementById('feed_time_' + i).innerHTML = feed_time; // feed_time
				    var feed_link_a = document.getElementById('feed_link_' + i);
				    feed_link_a.innerHTML = feed_message; //feed_message
				    feed_link_a.href = feed_link; //feed_link
				    feed_link_a.target = "_blank";
				   
				    var data_ret = $.ajax({
						type: 'GET',
						url: 'https://graph.facebook.com/v6.0/'+ feed_id +'/insights?pretty=0&metric=post_impressions, post_engaged_users, post_reactions_by_type_total&access_token=EAAJDXieY5t8BAPLBuBwUZAwuQxKBJ6xxJ2ZAKA00sQVevBKJrVpJCpqqpWgNfjH8E2T0QEhNnlGY4ZB5YCRhoZA6wZBxvZC68A8FKycYtD1NwaNID2ZAK5GPWS2HJiAPxLQ3RuNlvkEigfmHJEpSeRZBq28hC0VdWLraafMwqddcZC0Iv3BuDmC3gh69Y0WhrywAZD',
						async: false,
						dataType: 'json',
						done: function(results) {
					        JSON.parse(results);
					        return results;
					    },
					    fail: function( jqXHR, textStatus, errorThrown ) {
					        console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
					    }
						}).responseJSON;

				    var post_engagements = data_ret.data[0].values[0].value;
			     	var post_engaged_users = data_ret.data[1].values[0].value;
			     	var post_reactions_like = data_ret.data[2].values[0].value.like;
				    var post_reactions_love = data_ret.data[2].values[0].value.love;
				    var post_reactions_wow = data_ret.data[2].values[0].value.wow;
				    var post_reactions_haha = data_ret.data[2].values[0].value.haha;
				    var post_reactions_sorry = data_ret.data[2].values[0].value.sorry;
				    var post_reactions_anger = data_ret.data[2].values[0].value.anger;
				    if (post_reactions_like == null) post_reactions_like = 0;
					if (post_reactions_love == null) post_reactions_love = 0;
					if (post_reactions_wow == null) post_reactions_wow = 0;
					if (post_reactions_haha == null) post_reactions_haha = 0;
					if (post_reactions_sorry == null) post_reactions_sorry = 0;
					if (post_reactions_anger == null) post_reactions_anger = 0;
					var post_reactions_total = post_reactions_like + post_reactions_love + post_reactions_wow + post_reactions_haha + post_reactions_sorry + post_reactions_anger;
				    document.getElementById('post_engagements_'+i).innerHTML = post_engagements;
					document.getElementById('post_engaged_users_'+i).innerHTML = post_engaged_users;
					document.getElementById('post_reactions_total_'+i).innerHTML = post_reactions_total;
				};
		    },
		    function(xhr) {
		    	console.error(xhr);
		    }

		);
};

function clicktable(post_num){
	top_post(post_num);
	listener_table();
}

clicktable(5);


//------------------------------- vk main stat + members count  ---------------------------------------------------------------------------------------
/* IP Server troubleshooting  
$.ajax({
	url: 'https://oauth.vk.com/authorize?client_id=7345362&display=page&redirect_uri=&scope=stats,groups,offline&response_type=token&v=5.103&state=123456', //55cd748fa25962ce2e fd6c9119088001ab6b 6ba39e5145dc3ff476 9ec24f05af303ab880 5115968f14af936395 642821319fd5105514 a59e83ce33c86f1869// 
	method: 'GET',
	dataType: 'JSONP',
	success: function(data){ console.log(data); }
	});
*/

function getUrl(method, params, token_num){
	if (!method) throw new Error('method not indeed');
	if (!params) throw new Error('params not indeed');
	var access_token = ['bb89356c91d8f8a180fed7f359da5110a6ed19263c2cf459c07615deb06a46938dd7fd9fd30befc0a61f9', '9df1449a6e184eed0e455e7b48f22433df4ee171740a6eb58233207608ac99764f5b0aa5ba71c560537de', '9858c3fdcc13da6ea8a0486578d1501cc7e3d90ed61dbc8077b0080e379806f54815c633990310aecb43c'];
	return 'https://api.vk.com/method/'+ method +'?' + params + '&access_token='+ access_token[token_num] +'&v=5.103'
}

function sendRequest(method, params, token_num, func){
	$.ajax({
	url: getUrl(method, params, token_num),
	method: 'GET',
	dataType: 'JSONP',
	success: func
	});
}

sendRequest('groups.getById', 'group_id=135581099&fields=members_count', 1 , function(data){
	//console.log(data);
	var vk_members_count = data.response[0].members_count;
	document.getElementById('vk_members_count').innerHTML = vk_members_count;

	for(let element = 0; element < 8; element++){

		setTimeout(() => { 
				let alco = document.getElementById('vk_subs_diff_' + element).innerHTML;
				vk_members_count = vk_members_count - Number(alco);
				el_vk = element+1;
				if((el_vk)!=8) document.getElementById('vk_members_count_'+el_vk).innerHTML = vk_members_count;
			}, 3000);

		var dateJson  = new Date;
		dateJson.setDate(dateJson.getDate()-1-element);
		var ts_for_link = Math.round(dateJson.getTime() / 1000);

		var dateJson_2 = new Date;
		dateJson_2.setDate(dateJson_2.getDate()-element);
		var ts_for_link_2 = Math.round(dateJson_2.getTime() / 1000);

		sendRequest('stats.get', 'group_id=135581099&timestamp_from='+ ts_for_link + '&timestamp_to='+ ts_for_link_2 +'&interval=day', 1 , function(data){
			//console.log(data);
			let vk_subs = data.response[1].activity.subscribed;
			let vk_unsubs = data.response[1].activity.unsubscribed;
			if(vk_subs == null) vk_subs = 0;
			if (vk_unsubs == null) vk_unsubs = 0;
			let vk_subs_diff = vk_subs - vk_unsubs;
			let vk_comments = data.response[1].activity.comments;
			let vk_likes = data.response[1].activity.likes;
			let vk_copies = data.response[1].activity.copies;
			let vk_views = data.response[1].visitors.views;
			let vk_visitors = data.response[1].visitors.visitors;
			let vk_reach = data.response[1].reach.reach;
			let vk_mobile_reach = data.response[1].reach.mobile_reach;
			let reach_subscribers = data.response[1].reach.reach_subscribers;

			if (vk_comments == null) vk_comments = 0;
			if (vk_likes == null) vk_likes = 0;
			if (vk_views == null) vk_views = 0;
			if (vk_visitors == null) vk_visitors = 0;
			if(vk_subs_diff>=0) document.getElementById('vk_subs_diff_' + element).innerHTML = '+'+vk_subs_diff;
			else document.getElementById('vk_subs_diff_' + element).innerHTML = '-'+vk_subs_diff;
			//охват
			document.getElementById('vk_reach_'+element).innerHTML = vk_reach;
			document.getElementById('vk_mobile_reach_'+element).innerHTML = vk_mobile_reach;
			document.getElementById('reach_subscribers_'+element).innerHTML = reach_subscribers;
			//реакции
			document.getElementById('vk_comments_'+element).innerHTML = vk_comments;
			document.getElementById('vk_likes_'+element).innerHTML = vk_likes;
			document.getElementById('vk_copies_'+element).innerHTML = vk_copies;
			//вовлеченность
			document.getElementById('vk_views_'+element).innerHTML = vk_views;
			document.getElementById('vk_visitors_'+element).innerHTML = vk_visitors;
			
		});
	};
});


//----------------------------- vk top post  ----------------------------------------------------------------------------------------------

function top_post_vk(vk_post_num){
	
	'use strict';

	document.getElementById('top_post_vk_table').innerHTML = `
	    <table class="table_sort">
							<thead><tr>
								<th>Type</th>
								<th>Date posted</th>
								<th>Message</th>
								<th>Times watched</th>
								<th>Total clicks</th>
								<th>Total reactions</th>
								<th>Likes</th>
								<th>Comments</th>
								<th>Reposts</th>
							</thead></tr>
							<tbody id="vk_feed">

							</tbody>
						</table>
	  	`;

	var feed = document.getElementById('vk_feed');
	//let table = document.getElementById('top_fb');
	//table.setAttribute("class", "table_sort");
	let rows = vk_post_num;
	for (let i = 0; i < rows; i++) {

		let tr = document.createElement('tr');
		feed.append(tr);
		let td0 = document.createElement('td');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');
		let td5 = document.createElement('td');
		let td6 = document.createElement('td');
		let vk_photo_caption = document.createElement('img');
		vk_photo_caption.setAttribute("id", "vk_feed_photo_post_" + i);
		vk_photo_caption.style.width = '150px';

		let vk_feed_link = document.createElement('a');
		vk_feed_link.setAttribute("id", "vk_feed_link_" + i);

		
		let vk_post_type = document.createElement('p');
		vk_post_type.setAttribute("id", "vk_post_type_" + i);
		td0.append(vk_post_type);
		td0.append(vk_photo_caption);
		td1.setAttribute("id", "vk_feed_time_" + i);
		td2.setAttribute("id", "vk_feed_message_" + i);
		td2.append(vk_feed_link);	
		td3.setAttribute("id", "vk_post_views_total_" + i);
		td4.setAttribute("id", "vk_post_likes_total_" + i);
		td5.setAttribute("id", "vk_post_comments_total_" + i);
		td6.setAttribute("id", "vk_post_shares_total_" + i);
		tr.append(td0);
		tr.append(td1);
		tr.append(td2);
		tr.append(td3);
		tr.append(td4);
		tr.append(td5);
		tr.append(td6);
	}

	sendRequest('wall.get', 'owner_id=-135581099&count=25555&offset=0', 2 , function(data){
		//console.log(data);
		//console.log(data.response.items[0].id);
		for (i = 0; i < vk_post_num; i++) {
					//console.log(data.response.items[i].attachments[0].photo.sizes[3].url);
					if(data.response.items[i].hasOwnProperty('attachments')){
						if(data.response.items[i].attachments[0].hasOwnProperty('photo')){
			    			var vk_feed_photo = data.response.items[i].attachments[0].photo.sizes[3].url;
			    		}
			    		else if(data.response.items[i].attachments[0].hasOwnProperty('video')){
			    			vk_feed_photo = data.response.items[i].attachments[0].video.image[3].url;
			    		}
			    		else{
			    			vk_feed_photo = null;
			    		}
			    	}
			    	else{
			    		vk_feed_photo = null;
			    	}

			    	var vk_post_type = data.response.items[i].post_type;
					if (vk_post_type == null) vk_post_type = 0;
					if(data.response.items[i].hasOwnProperty('attachments')){
						if(data.response.items[i].attachments[0].hasOwnProperty('video')){
							document.getElementById('vk_post_type_' + i).innerHTML = vk_post_type + ' video'		
						}
						else{
							document.getElementById('vk_post_type_' + i).innerHTML = vk_post_type; // vk_post_type
						}
					}
					else{
						document.getElementById('vk_post_type_' + i).innerHTML = vk_post_type; // vk_post_type
					}
			     	
			    	var vk_photo_cap = document.getElementById('vk_feed_photo_post_' + i); //vk_photo_cap
			    	if(vk_feed_photo!=null){
			     		vk_photo_cap.src = vk_feed_photo; // vk_feed_photo
			     	}else{
			     		vk_photo_cap.src = 'nophoto.png';
			     	}
				    var vk_feed_time = data.response.items[i].date;
			     	var vk_feed_id = data.response.items[i].id;
			     	var vk_feed_message = data.response.items[i].text;
			     	var vk_feed_link = 'https://vk.com/openworld.global?w=wall-135581099_'+data.response.items[i].id;
			     	//likes, comments, shares, views
			     	var vk_feed_likes = data.response.items[i].likes.count;
			     	var vk_feed_comments = data.response.items[i].comments.count;
			     	var vk_feed_shares = data.response.items[i].reposts.count; 
			     	var vk_feed_views = data.response.items[i].views.count;

			     	if (vk_feed_likes == null) vk_feed_likes = 0;
					if (vk_feed_comments == null) vk_feed_comments = 0;
					if (vk_feed_shares == null) vk_feed_shares = 0;
					if (vk_feed_views == null) vk_feed_views = 0;

					document.getElementById('vk_post_likes_total_' + i).innerHTML = vk_feed_likes;
					document.getElementById('vk_post_comments_total_' + i).innerHTML = vk_feed_comments;
					document.getElementById('vk_post_shares_total_' + i).innerHTML = vk_feed_shares;
			     	document.getElementById('vk_post_views_total_' + i).innerHTML = vk_feed_views;

			     	vk_feed_message = vk_feed_message.substring(0, 160)+'...';
			     	
			     	var vk_feed_date = timestampToDate(vk_feed_time);
					document.getElementById('vk_feed_time_' + i).innerHTML = vk_feed_date; // feed_time
				    var vk_feed_link_a = document.getElementById('vk_feed_link_' + i);
				    vk_feed_link_a.innerHTML = vk_feed_message; //vk_feed_message
				    vk_feed_link_a.href = vk_feed_link; //vk_feed_link
				    vk_feed_link_a.target = "_blank";
				    
				};
	});
};

function clicktable_vk(vk_post_num){
	top_post_vk(vk_post_num);
	listener_table();
};

clicktable_vk(5);

//-----------------------------  YouTube main stat + members count (in proc.)  ----------------------------------------------------------------------------------------------
var youtube_token = 'ya29.0Ae4lvC3h4kBseYfzvDSBptqt5CYfuDvDnND2u3q-pehNdSucuUZSdOzcdtcoYHCc1g12XKAifveenC7yKtvjfeTq7QC1vFJ0YJG8FbrXuEOVmWyXvi2__oq_aaahySvUcpsdqQlMUSPYgLzm221-Y9pjJrnwXlCxw7VS';
var refresh_token = '1//04Odo8xvwNkY0CgYIARAAGAQSNwF-L9Irt13ZD41paO9zFlgtZvxvlQPw0OH3TTAp-d1ty6Dim6cSY9vn7TK0PIVslygkDiU7erw';

var if_token_worked = $.ajax({
	type: 'GET',
	url: 'https://youtubeanalytics.googleapis.com/v2/reports?dimensions=day&endDate=2020-03-20&ids=channel%3D%3DMINE&metrics=comments&sort=day&startDate=2020-03-19&access_token='+youtube_token,
	async: false,
	dataType: 'json',
	done: function(results) {
	    JSON.parse(results);
	    console.log('token worked');
	    return results;
	},
	fail: function( jqXHR, textStatus, errorThrown ) {
	    console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
	}
}).responseJSON;

var markers = [{ "client_id": "http://734433196319-tpaf59d232ethh3mn66pfbbha1cegk1p.apps.googleusercontent.com"},
               { "client_secret": "POTbeSPFBg7BKFh1YhSAFpD7"},
               { "refresh_token": refresh_token},
               { "grant_type": "refresh_token"}];

if(if_token_worked.hasOwnProperty("error")){
	if(if_token_worked.error.code=='401'){
		var new_token = $.ajax({
		type: 'POST',
		url: 'https://oauth2.googleapis.com/token',
		data: JSON.stringify({ Markers: markers }),
		//url: 'https://oauth2.googleapis.com/token?client_id=http://734433196319-tpaf59d232ethh3mn66pfbbha1cegk1p.apps.googleusercontent.com&client_secret=POTbeSPFBg7BKFh1YhSAFpD7&refresh_token='+refresh_token+'&grant_type=refresh_token',
		async: false,
		contentType: "application/x-www-form-urlencoded",
		dataType: 'json',
		done: function(results) {
		    JSON.parse(results);
		    return results;
		},
		fail: function( jqXHR, textStatus, errorThrown ) {
		    console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
		}
		}).responseJSON;
		console.log(new_token);
		//youtube_token = new_token;
	};
};

loadJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=TrioMandili&maxResults=5&pageToken=AIzaSyDliCuU37EuUgxuZ5ErJXNfwWglqbbK4ro&key=AIzaSyDliCuU37EuUgxuZ5ErJXNfwWglqbbK4ro',
    function(data) { 

     	var youtube_all_views = data.items[0].statistics.viewCount;
		var youtube_all_videos = data.items[0].statistics.videoCount;
		var youtube_all_subs = data.items[0].statistics.subscriberCount;
     	
     	document.getElementById('youtube_all_views').innerHTML = youtube_all_views;
		document.getElementById('youtube_all_videos').innerHTML = youtube_all_videos;
	    document.getElementById('youtube_all_subs').innerHTML = youtube_all_subs;

	},
	function(xhr) {
	   	console.error(xhr);
	}
);

	//date_perform for end date
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-'+ mm + '-' + dd;

	//declare youtube params and vars
	var youtube_end_date = today;
    var youtube_start_date = '2020-03-20';

loadJSON('https://youtubeanalytics.googleapis.com/v2/reports?dimensions=day&endDate='+youtube_end_date+'&ids=channel%3D%3DMINE&metrics=comments%2Cshares%2Clikes%2Cdislikes%2Cviews%2CestimatedMinutesWatched%2CaverageViewDuration%2CsubscribersGained%2CsubscribersLost&sort=day'+'&startDate='+youtube_start_date+'&access_token='+youtube_token,
    function(data) {
    	for (let i = 0; i < 8; i++) {

	    		var youtube_names = ''+data.rows[i]+'';
				var youtube_nameArr = youtube_names.split(',');

	    		var youtube_date = youtube_nameArr[0];
	    		var youtube_comments = youtube_nameArr[1];
				var youtube_shares = youtube_nameArr[2];
				var youtube_likes = youtube_nameArr[3];
				var youtube_dislikes = youtube_nameArr[4];
				var youtube_views = youtube_nameArr[5];
				var youtube_estimatedMinutesWatched = youtube_nameArr[6];
				var youtube_averageViewDuration = youtube_nameArr[7];
				var youtube_subscribersGained = youtube_nameArr[8];
				var youtube_subscribersLost = youtube_nameArr[9];
									     	
				document.getElementById('youtube_comments_day_'+i).innerHTML = youtube_comments;
				document.getElementById('youtube_shares_day_'+i).innerHTML = youtube_shares;
				document.getElementById('youtube_likes_day_'+i).innerHTML = youtube_likes;
				document.getElementById('youtube_dislikes_day_'+i).innerHTML = youtube_dislikes;
				document.getElementById('youtube_views_day_'+i).innerHTML = youtube_views;
				document.getElementById('youtube_estimatedMinutesWatched_day_'+i).innerHTML = youtube_estimatedMinutesWatched;
				document.getElementById('youtube_averageViewDuration_day_'+i).innerHTML = youtube_averageViewDuration;
		}

	},
	function(xhr) {
	   	console.error(xhr);
	}
);


//-----------------------------  YouTube top post  ----------------------------------------------------------------------------------------------

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
	var youtube_channel_id = 'channel%3D%3DMINE';
	var youtube_maxResults = '100';
	var youtube_dimensions = 'video';
	var youtube_metrics = 'estimatedMinutesWatched%2Cviews%2Clikes%2Cdislikes%2Ccomments%2Cshares%2CsubscribersGained%2CsubscribersLost%2CaverageViewDuration';
	//Общее количество просмотренных минут, просмотров, лайков, дизлайков, комментариев, репостов, подписались, отписались, среднее время просмотра
	var youtube_params = 'dimensions='+youtube_dimensions+'&endDate='+ youtube_end_date +'&ids='+ youtube_channel_id +'&maxResults='+youtube_maxResults+'&metrics='+youtube_metrics;
	//var youtube_sort = '-estimatedMinutesWatched'; //order_type
	var youtube_start_date = '2015-01-01';
	
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

				loadJSON('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+youtube_video_id+'&key=AIzaSyDliCuU37EuUgxuZ5ErJXNfwWglqbbK4ro',
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
	
	loadJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C%20snippet&channelId=TrioMandili&order='+order_type+'&maxResults='+youtube_video_num+'&pageToken=AIzaSyDliCuU37EuUgxuZ5ErJXNfwWglqbbK4ro&key=AIzaSyDliCuU37EuUgxuZ5ErJXNfwWglqbbK4ro',
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
				
				loadJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id='+youtube_video_id+'&maxResults=1&key=AIzaSyDliCuU37EuUgxuZ5ErJXNfwWglqbbK4ro',
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