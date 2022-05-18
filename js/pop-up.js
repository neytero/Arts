function myFunction() {
    var pop = document.getElementsByClassName('pop-up')[0];

    // Get the <span> element that closes the modal
    var checkbox = document.getElementById('close');

    if (checkbox.checked == true){
        pop.style.display = "none";
    }
}