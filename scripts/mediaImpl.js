document.addEventListener("deviceready", onDeviceReady, false);
var my_media = null;
var mediaList = ["1.mp3", "2.mp3", "3.mp3"];
var pos = 0;

function onDeviceReady() {
	$("#media").html(mediaList[0]);
    autoPlay();
    $("#buttonPlayAudio").click(function() {
		playAudio();
	});
	$("#buttonStopAudio").click(function() {
		stopAudio();
	});
	$("#buttonPrevAudio").click(function() {
		prevAudio();
	});
	$("#buttonNextAudio").click(function() {
		nextAudio();
	});
}

var autoPlay = function () {
	my_media = new Media("media/1.mp3", onSuccess, onError);
    if(my_media){
		my_media.play();
		$('#buttonPlayAudio').prop('disabled', true);
		$('#buttonPrevAudio').prop('disabled', true);
		$('#buttonNextAudio').prop('disabled', true);
	}
};

// Audio player
var playAudio = function () {
	url = "media/" + mediaList[pos];
    my_media = new Media(url, onSuccess, onError);
    if(my_media){
		my_media.play();
		$('#buttonPlayAudio').prop('disabled', true);
		$('#buttonPrevAudio').prop('disabled', true);
		$('#buttonNextAudio').prop('disabled', true);
	}
};

var stopAudio = function () {
	if(my_media) {
		my_media.stop(); 
		$('#buttonPlayAudio').prop('disabled', false);
		$('#buttonPrevAudio').prop('disabled', false);
		$('#buttonNextAudio').prop('disabled', false);
	}
};

var prevAudio = function () {
	len = mediaList.length;
	if(pos == 0) {
		pos = len - 1;
	}else {
		pos = pos - 1;
	}
	$("#media").html(mediaList[pos]);
};

var nextAudio = function () {
	len = mediaList.length;
	if(pos == len-1) {
		pos = 0;
	}else {
		pos = pos + 1;
	}
	$("#media").html(mediaList[pos]);
};

// onSuccess Callback
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback 
function onError(error) {
    alert('code: ' + error.code + '\n' + 
          'message: ' + error.message + '\n');
}