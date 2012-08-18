$(document).ready(function(){
FB.init({
    appId  : '456943801012883',
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
	//$("#popList").listview('refresh');
}

	$(function(){
		$('#getInfo').click(function() {
			getInfo();
		});
		
		
		$('.btnLogout').click(function() {
			FB.logout(function(response){
				console.log('user logged out' , response);
			});
		});
			
	});
	var hasRun = false;
});
	