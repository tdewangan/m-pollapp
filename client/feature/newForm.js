Template.new.onCreated(function(){
  Meteor.subscribe('polls');
});
Template.new.events({
  'submit form': function(event){
    event.preventDefault();
    Meteor.call('insertPoll', $(event.target).serializeObject());
    event.target.reset();
    Router.go('/list');
  }
});
