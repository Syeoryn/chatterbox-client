var app = {};

app.init = function(){
  // First half of window.location.search is always the same,
  // second half contains username
  app.username = window.location.search.slice(10);
  app.roomname = 'lobby';
  app.messages = new MessageList();
  app.messageListView = new MessageListView({collection: app.messages});
  $('.chatDisplay').append(app.messageListView.render());
  $('button').on('click',function(e){
    e.preventDefault();
    var message = $('input').val();
    console.log('it',message);
    app.send(message);
    $('input').val('');
  });
  $('input').on('keypress',function(e){
    if(e.which === 13){
      e.preventDefault();
      $('button').trigger('click');
    }
  });
  app.fetch();
};

app.convertMessage = function(text){
  var messageObject = {};
  messageObject.username = app.username;
  messageObject.roomname = app.roomname;
  messageObject.text = text;
  return messageObject;
};

app.send = function(messageObject){
  // if the messageObject passed is not an object,
  // convert it to the correct format, then send it to server.
  if(typeof messageObject !== 'object'){
    messageObject = app.convertMessage(messageObject);
  }
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
  setTimeout(app.fetch,500);
};

app.createMessages = function(data){
  var messageObjects = data.results;
  for(var i = 0; i < messageObjects.length; i++){
    var newMessage = new Message(messageObjects[i]);
    app.messages.add(newMessage);
    // Could use collection.create?
  }
};

$(function(){app.init()});
