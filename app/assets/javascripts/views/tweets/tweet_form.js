BackboneDemo.Views.TweetForm = Backbone.View.extend({
  template: JST["tweets/form"],

  events: {
    'click .close': 'remove',
    'click .m-backdrop': 'remove',
    'submit form': 'createTweet',
  },

  createTweet: function (e) {
    e.preventDefault();
    this.model.set("body", this.$('textarea').val());
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model);
        this.remove();
      }.bind(this),
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});
