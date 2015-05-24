Template.updateItem.helpers({
  time: function() {
    return moment(this.time).format('hh:mm a');
  }
});