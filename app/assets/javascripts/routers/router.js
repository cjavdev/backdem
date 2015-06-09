BackboneDemo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'tweets/:id': 'show'
  },

  index: function () {
    // get either a model or collection
    // initialize a view with that model or collection
    // render the view
    var tweets = new BackboneDemo.Collections.Tweets();
    tweets.fetch();
    var view = new BackboneDemo.Views.TweetsIndex({
      collection: tweets
    });
    this.$rootEl.html(view.render().$el);
  },

  show: function (id) {
    var tweet = new BackboneDemo.Models.Tweet({ id: id });
    tweet.fetch();

    var view = new BackboneDemo.Views.TweetShow({
      model: tweet
    });
    this.$rootEl.html(view.render().$el);
  },
});
