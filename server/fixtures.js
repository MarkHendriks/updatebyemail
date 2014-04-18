// Inserts update for when the database is empty
if (Updates.find().count() === 0) {
  var now = new Date().getTime();
  Updates.insert({
    subject: 'Introducing Update by Email',
    from: 'Mark Hendriks',
    message: 'A simple test update, when no data is present.',
    time: now - 7 * 3600 * 1000
  });
}
