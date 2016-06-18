var oxford = require('project-oxford'),
    client = new oxford.Client('59e8effcb05b4ab5b37dc2e0f3290315');

client.emotion.analyzeEmotion({
    url: 'http://newsrescue.com/wp-content/uploads/2015/04/happy-person.jpg',
}).then(function (response) {
    console.log(response);
});