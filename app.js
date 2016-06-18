var teleNex = angular.module('teleNex', []);
teleNex.controller("MainController", function($scope){
	$scope.randomEntry = function(){
		console.log("test");
		happiness.y.push(Math.random()*10);
		sadness.y.push(Math.random()*10);
		fear.y.push(Math.random()*10);
		anger.y.push(Math.random()*10);
		neutral.y.push(Math.random()*10);
		var data = [happiness, sadness, fear, anger, neutral];
		Plotly.newPlot('myDiv', data, layout);
	};

	var happiness = {
		y: [0, 0],
		name: 'Happiness',
		type: 'scatter'
	};

	var sadness = {
		y: [0, 0],
		name: 'Sadness',
		type: 'scatter'
	};

	var fear = {
		y: [0, 0],
		name: 'Fear',
		type: 'scatter'
	};

	var anger = {
		y: [0, 0],
		name: 'Anger',
		type: 'scatter'
	};

	var neutral = {
		y: [0, 0],
		name: 'Neutral',
		type: 'scatter'
	};

	var layout = {
		title: 'Emotion Graph',
		xaxis: {
			title: 'Time'
		},
		yaxis: {
			title: 'Emotions'
		}
	};
	
	var data = [happiness, sadness, fear, anger, neutral];
	Plotly.newPlot('myDiv', data, layout);

	Webcam.set({
		width: 320,
		height: 240,
		image_format: 'jpeg',
		jpeg_quality: 90
	});
	Webcam.attach( '#my_camera' );

	function take_snapshot() {
		// take snapshot and get image data
		Webcam.snap( function(data_uri) {
			$(function() {
				var params = {
					// Request parameters
				};
				$.ajax({
					url: "https://api.projectoxford.ai/emotion/v1.0/recognize?" + $.param(params),
					beforeSend: function(xhrObj){
						// Request headers
						xhrObj.setRequestHeader("Content-Type","application/json");
						xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","f7dccdcb0cfa42dba28d5c8d85a380a8");
					},
					type: "POST",
					// Request body
					data: data_uri,
				})
				.done(function(data) {
					alert("success");
				})
				.fail(function() {
					alert("error");
				});
			});
		} );
	}

	$scope.takePhoto = function(){
		take_snapshot();
	};
});