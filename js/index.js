var newRandomArticle = function(){
	window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
};
document.getElementById('random').addEventListener("click", function() {
	newRandomArticle();
});

var
	target = document.getElementById('target');
	search = "&search=cake";
	limitInput = document.getElementById('limit');
	searchText = document.getElementById('search');
	limit;
	limit = "limit=5";

let url;

limitInput.addEventListener('change', function() {
	limit = "limit=" + limitInput.value;
});

searchText.addEventListener('change', function() {
		search = "&search=" + searchText.value;
		url = 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=%2A' + search + "&" + limit + "&format=json";
		console.log(url);
		getVal();
});

function getVal() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.send();

	xhr.addEventListener('readystatechange', gotData, false);

	function gotData() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// console.log("it's time to party");
			const data = JSON.parse(xhr.responseText);

			let header = data.shift();

			let dataInfo = data[0].map(function(item, index){
    		return '<h1>' + item + '</h1><br><p>' + data[1][index] + '</p><br><a href="' + data[2][index] + '">wikipedia page</a>';
  		});
			console.log(dataInfo);

		}
		searchText.value = '';
	};
};

// $('#search').on('focus', function() {
// 	$('#limit').show('slow');
// })


	//request string
var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=bee&limit=5&format=json"



	//var limit = "limit=5"; // I want the user to be able to change the limit of results
	/* if(limit === undefined) {limit = "limit=5"}*/
