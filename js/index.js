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

var url;

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
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.send();

	xhr.addEventListener('readystatechange', gotData, false);

	function gotData(i) {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log("it's time to party");
			var data = JSON.parse(xhr.responseText);
			data[1].forEach(function(i, index) {
				console.log(i);
				var
					head = i;
					body = data[2][index];
					link = data[3][index];
					text = (
						'<div class="callout large primary"><h1>' + head + '</h1><br><p>' + body + '</p><br><a href=' + link + ' target="_blank">link</a></div>'
					);
				searchText.value = '';
			});
		}
	};
};

// $('#search').on('focus', function() {
// 	$('#limit').show('slow');
// })


	//request string
var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=bee&limit=5&format=json"



	//var limit = "limit=5"; // I want the user to be able to change the limit of results
	/* if(limit === undefined) {limit = "limit=5"}*/
