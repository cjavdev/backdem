window.BackboneDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new BackboneDemo.Routers.Router({
      $rootEl: $('#main')
    });

    Backbone.history.start();
  }
};

$(BackboneDemo.initialize);
