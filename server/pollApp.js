Meteor.publish('polls', function(){
  console.log(this.userId);
  return Polls.find();
});

Meteor.methods({
    'updatePoll': function(pollid, index){
      console.log('server updatePoll ' + pollid + '  ' + index + ' ' + this.userId);
      Polls.update(
        {_id: pollid, 'choices.key': index},
        {
          $inc:{'total': 1, 'choices.$.vote': 1},
          $addToSet: {'users': this.userId}
        }
      );
    },
    'insertPoll': function(poll){
      poll.users = [];
      Polls.insert(poll);
    }
});
