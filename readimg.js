 $(document).on("pageinit", function(){ 
	$("button").click(function() {
		//navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
	});
	/*function captureSuccess(mediaFiles) {
		$("#myimg").attr("src",mediaFiles[0].fullPath);    
	}

	function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
	}	
	
	*/
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