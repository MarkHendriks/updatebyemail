Meteor.publish('updates', function() {
  return Updates.find({}, {sort: {time: -1}});
});