// Iron-router
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'updatesList'});

Router.route('/inbound', function() {
  // Request email contents
  var update = this.request.body;
  // Parse senders full name
  var received_from = parse(update.from);
  for(var i=0;i<received_from.length;i++){
      var from = received_from[i];
  }
  var now = new Date().getTime();
  // Add update to timelime
  Updates.insert({
    subject: update.subject,
    from: from.name,
    message: update["body-plain"],
    time: now - 7 * 3600 * 1000
  });
  // Tells server message has been succesfully received
  return [200, "Success"];
}, {where: 'server'});
