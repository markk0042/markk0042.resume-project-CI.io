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

}