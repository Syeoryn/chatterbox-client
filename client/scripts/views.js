var messageView = Backbone.View.extend({
  initialize: function(){

  },
  render: function(){
    var username = this.model.get('username');
    var html =  '<li class="message">' +
                '<span class="username ' + username + '"> ' + username + '</span>: ' +
                this.model.get('text') +
                '</li>';
    return this.$el.html(html);
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
