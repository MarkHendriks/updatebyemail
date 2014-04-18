Template.updateItem.helpers({
  time: function() {
    return new Date(this.time).toUTCString();
  }
});