var horItems = document.querySelectorAll('li.hot');
if (horItems.length > 0) {

    for (var i = 0; i < horItems.length; i++) {
        horItems[i].className = 'cool';
    }
}