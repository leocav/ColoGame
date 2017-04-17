
// Tasks publication. Here, all tasks are publicated.
Meteor.publish('tasks', function() {
	return Tasks.find();
});

// Publication of the "points" field of the users. Now we have to subscribe (on the client side, profile.js) to this publication 
Meteor.publish('userPoints', function () {
  if (this.userId) {
    return Meteor.users.find({}, {
      fields: { username: 1, points: 1 }
    });
  } else {
    this.ready();
  }
});