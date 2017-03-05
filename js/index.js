const newRandomArticle = function(){
	window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
};
document.getElementById('random').addEventListener("click", function() {
	newRandomArticle();
});

let
	target = document.getElementById('target');
	head = document.getElementById('head');
	search = "&search=cake";
	limitInput = document.getElementById('limit');
	searchText = document.getElementById('search');
	limit;
	limit = "limit=5";
	url = "";

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

			// both the header and the main body of text are cleared out every time got data is called
			head.innerHTML = "";
			target.innerHTML = "";

			//header, this is the search term used
			let firstItem = data.shift();
			let header = firstItem.replace(/\b\w/g, l => l.toUpperCase());
			head.innerHTML = '<h1>You searched for ' + header + '</h1>';

			//map function to map over the data recieved from the JSON parse
			let dataMapped = data[0].map(function(item, index){
    		let particle = '<div id="listitem" ><h3>' + item + '</h3><br><p>' + data[1][index] + '</p><br><a href="' + data[2][index] + '" target="_blank" class="button" >More About ' + item + '</a><hr></div>';
				target.innerHTML += particle;
  		});

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
