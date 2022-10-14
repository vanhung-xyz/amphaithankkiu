var itemTow = document.getElementById('tow');
var elText = itemTow.firstChild.nodeValue;
elText = elText.replace('pine nuts', 'kale');
itemTow.firstChild.nodeValue = elText;