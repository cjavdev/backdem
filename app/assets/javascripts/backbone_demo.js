window.BackboneDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var tweets = new BackboneDemo.Collections.Tweets();

    var router = new BackboneDemo.Routers.Router({
      $rootEl: $('#main'),
      tweets: tweets
    });

    var navbar = new BackboneDemo.Views.Navbar({
      router: router,
      collection: tweets
    });

    $('#navbar').html(navbar.render().$el);

    Backbone.history.start();
  }
};

$(BackboneDemo.initialize);
