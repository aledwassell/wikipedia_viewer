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

limitInput.addEventListener('change', function() {
	limit = "limit=" + limitInput.value;
	console.log(limit);
});

searchText.addEventListener('change', function() {
		getVal();
});

function getVal() {

	search = "&search=" + searchText.value;

	var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=%2A' + search + "&" + limit + "&format=json";

	console.log(url);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.send();

	xhr.readystatechange = httpRequest;

	httpRequest(data, function(data) {
		data[1].forEach(function(i, index) {
			var
				head = i;
				body = data[2][index];
				link = data[3][index];
				text = (
					'<div class="callout large primary"><h1>' + head + '</h1><br><p>' + body + '</p><br><a href=' + link + ' target="_blank">link</a></div>'
				);
			console.log(data);
			target.prepend(text);
			searchText.value = '';
		});
	});
};

// $('#search').on('focus', function() {
// 	$('#limit').show('slow');
// })


	//request string
var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=bee&limit=5&format=json"



	//var limit = "limit=5"; // I want the user to be able to change the limit of results
	/* if(limit === undefined) {limit = "limit=5"}*/
