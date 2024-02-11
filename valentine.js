document.getElementById('button1').addEventListener('mouseover', function() {
    this.classList.add('move');
    document.getElementById('button2').classList.remove('move');
});

document.getElementById('button2').addEventListener('mouseover', function() {
    this.classList.add('move');
    document.getElementById('button1').classList.remove('move');
});

document.getElementById('button1').addEventListener('click', function(e) {
    e.preventDefault();
});

document.getElementById('button2').addEventListener('click', function(e) {
    e.preventDefault();
});
