function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    var target, elParent, elGrandparent;
    target = getTarget();














  if ( target.nodeName.toLowerCase() =="a" ) {
      elListItem = target.parentNode;
      elList =elListItem.parentNode;
      elList.removeChild(elListItem);
  }
  if ( target.nodeName.toLowerCase() =="em" ) {
      elListItem = target.parentNode.parentNode;
      elList = elListItem.parentNode;
      elList.removeChild(elListItem);
  }


  if (e.preventDefault) {
     e.preventDefault();
  } else {
      e.retuenValue = false;
  }
}


var el  = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function (e) {
        itemDone(e);
    },false);
} else {
    el.attachEvent('onclick', function (e) {
        itemDone(e);
    });
}