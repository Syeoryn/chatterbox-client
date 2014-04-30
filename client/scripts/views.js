var MessageView = Backbone.View.extend({
  initialize: function(){

  },
  tagName: 'li',
  className: 'message',
  render: function(){
    var username = this.model.get('username');
    var html = '<span class="username ' + username + '"> ' + username + '</span>: ' +
                this.model.get('text');
    return this.$el.html(html);
  }
});

var MessageListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add', this.addOne, this);
  },
  tagName: 'ul',
  addOne: function(message) {
    var newMessageView = new MessageView({model: message});
    console.log(newMessageView);
    newMessageView.render();
    this.$el.append(newMessageView.$el);
  },
  render: function() {
    this.collection.each(this.addOne);
    return this.$el;
  }
});

var userView = Backbone.View.extend({
  initialize: function(){

  },
  render: function(){

  }
});

var roomView = Backbone.View.extend({
  initialize: function(){

  },
  render: function(){

  }
});
