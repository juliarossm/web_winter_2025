//alert('This is a test')

function askQuestion() {
    var p = prompt('How much wood could a wood chuck chuck if a wood chuck could chuck wood');
    if (p != null) {
        document.getElementById('question').innerHTML = 'Yikes! '+ p +' is a lot of wood!';
    }
}