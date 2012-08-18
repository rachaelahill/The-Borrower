$(document).ready(function(){

FB.init({
    appId  : '275468342566427',
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
    xfbml  : true, // parse XFBML
    oauth  : true // enable OAuth 2.0
  });

loginFace = function(){
	if(hasRun){
		return false;
	}else{
		hasRun = true;
	};
	FB.api('/me', function(response) {
  	
		localStorage.setItem('fb_me', JSON.stringify(response));
		console.log('**User Info stored locally', response);
	});
	FB.api('/me/photos', function(response) {
	  
	 	localStorage.setItem('fb_friends', JSON.stringify(response));
	 	console.log('**Friends Info stored locally', response);
	});
	$.mobile.changePage('#explore');
};

	$(function(){
		$('#getInfo').click(function() {
			getInfo();
		});
		
		
		$('#logoutFace').click(function() {
			FB.logout(function(response){
				console.log('user logged out' , response);
			});
		});
			
	});
	var hasRun = false;
	
	/*
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    $.mobile.changePage('#explore');
   
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
  } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
  } else {
    // the user isn't logged in to Facebook.
  }
 });
*/
});
	