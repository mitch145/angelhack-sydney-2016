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
			var oxford = require('project-oxford'),
				client = new oxford.Client('59e8effcb05b4ab5b37dc2e0f3290315');
			client.emotion.analyzeEmotion({
				url: data_uri,
			}).then(function (response) {
				console.log(response);
			});
		} );
	}

	$scope.takePhoto = function(){
		take_snapshot();
	};
});