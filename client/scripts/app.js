var app = {};

app.init = function(){
  app.messages = new MessageList();
};

app.send = function(messageObject){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(messageObject),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.fetch = function(){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: {order: '-createdAt'},
    contentType: 'application/json',
    success: app.createMessages,
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.createMessages = function(data){
  console.log('chatterbox: Messages fetched');
  console.log(data);
  var messageObjects = data.results;
  for(var i = 0; i < messageObjects.length; i++){
    var newMessage = new Message(messageObjects[i]);
    app.messages.add(newMessage);
  }
};

$(function(){app.init()});
