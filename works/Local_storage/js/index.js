function visitLink(path) {
	const mainStorage = window.localStorage;
	let countLink = mainStorage.getItem(path);
	countLink = countLink || 0;
	countLink++;
	mainStorage.setItem(path, countLink);
}

function viewResults() {
	const mainStorage = window.localStorage;
	const $getContent = document.getElementById('content');
	const $divResult = document.createElement('div');
	if($getContent.lastChild.nodeName==='DIV'){
		$getContent.removeChild($getContent.lastChild);
	}
	let outputLink1 = mainStorage.getItem('Page1') || 0;
	let outputLink2 = mainStorage.getItem('Page2') || 0;
	let outputLink3 = mainStorage.getItem('Page3') || 0;
	let $node1 = document.createTextNode('● You visited Page1 '+ outputLink1 + ' time(s)');
	let $node2 = document.createTextNode('● You visited Page2 '+ outputLink2 + ' time(s)');
	let $node3 = document.createTextNode('● You visited Page3 '+ outputLink3 + ' time(s)');

	$divResult.appendChild($node1);
	$divResult.appendChild(document.createElement('br'));
	$divResult.appendChild($node2);
	$divResult.appendChild(document.createElement('br'));
	$divResult.appendChild($node3);
	$divResult.appendChild(document.createElement('br'));

	$getContent.appendChild($divResult);

	mainStorage.clear();
}
