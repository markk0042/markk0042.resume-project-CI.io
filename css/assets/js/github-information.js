function fetchGitHubInformation(event){

var username = $("#gh-username").val();
if (!username) {
    $("#gh-user-data").html(`<h2> Please enter a Github Username</h2>`);
return;
    } 

$("#gh-user-data").html(
`<div id= "loader">
   <img src = "css/assets/js/loader.gif" alt= "...loading" />
</div>`);

$.when(
    $.getJSON(`http://api.github.com/users/${username}`)
    ).then(
   function(response){
   var userData = response;
   $("#gh-user-data").html(userInformationHtml(userData));
   },  function (errorResponse){
        if (errorResponse.status === 404) {
       $("#hg-user-data").html(`
       <h2> No information found on User ${username}</h2>`)
       
        } else {
        console.log(errorResponse);
        $("#gh-user-data").html (
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
        }
   });

}

