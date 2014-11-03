 $(document).on("pageinit", function(){ 
	$("button").click(function() {
		//navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL });
	});
	/*function captureSuccess(mediaFiles) {
		$("#myimg").attr("src",mediaFiles[0].fullPath);    
	}

	function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
	}	
	
	*/

	function onSuccess(imageData) {
		$("#myimg").attr("src","data:image/jpeg;base64," + imageData);
	}

	function onFail(message) {
		alert('Failed because: ' + message);
	}
});