var Message = Backbone.Model.extend({
  initialize: function(messageObject){
    this.set({
      username: messageObject.username,
      text: messageObject.text,
      roomname: messageObject.roomname,
      time: messageObject.createdAt,
      id: messageObject.objectId
    });
  },
});

var User = Backbone.Model.extend({
  initialize: function(username){
    this.set({
      username: username,
      friends: {}
    });
  },
});

var Room = Backbone.Model.extend({
  initialize: function(roomname){
    this.set({
      roomname: roomname
    });
  },
});
