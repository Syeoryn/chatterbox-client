var MessageList = Backbone.Collection.extend({
  comparator: 'createdAt',
  model: Message
});

var UserList = Backbone.Collection.extend({
  model: User
});

var RoomList = Backbone.Collection.extend({
  model: Room
});
