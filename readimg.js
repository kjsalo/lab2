 $(document).on("pageinit", function(){ 
	$("button").click(function() {
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
	});

function onSuccess(imageURI) {
    $("#myimg").attr("src", imageURI);
}

function onFail(message) {
    var msg = 'An error occurred during capture: ' + message;
    navigator.notification.alert(msg, alerting, 'Not good', 'Done');
}

function alerting(){
}

});