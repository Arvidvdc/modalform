// When html page is loaded, then check sessionStorage: if ageVerified is false or not existing then show Modal Form 
$(document).ready(function() {
    let ageVerified = JSON.parse(sessionStorage.getItem("ageVerified"));
    if(!ageVerified){
        ageVerified = false;
        sessionStorage.setItem("ageVerified", JSON.stringify(ageVerified));
        $('#staticBackdrop').modal('show');
    }
});

//Change sessionStorage:ageVerified to true // sessionStorage wil be cleared after browser restarts
$(document).on("click", "#ageVerified5", function(){
    ageVerified = true;
    sessionStorage.setItem("ageVerified", JSON.stringify(ageVerified));
});