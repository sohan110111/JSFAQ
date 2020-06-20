document.getElementById('first').addEventListener('click', function(event){
    console.log('first item clicked');
    event.stopPropagation();
})
document.getElementById('myList').addEventListener('click', function(event){
    console.log('Ul clicked');
})
document.getElementById('container').addEventListener('click', function(event){
    console.log('Container clicked');
})