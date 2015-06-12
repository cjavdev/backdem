BackboneDemo.Views.Navbar = Backbone.View.extend({
  template: JST['navbar'],
  initialize: function (options) {
    this.router = options.router;
    this.listenTo(this.router, 'route', this.markActive);
    this.listenTo(this.collection, 'sync', this.updateTweetCount);
  },

  updateTweetCount: function () {
    this.$('.tweet-count').html(this.collection.length);
  },

  markActive: function (route) {
    this.$('.active').removeClass("active");
    this.$('.' + route).addClass("active");
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});
