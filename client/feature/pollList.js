Template.list.onCreated(function(){
  Meteor.subscribe('polls');
});
Template.list.helpers({
  polls: function(){
    var polls = Polls.find();
    polls.forEach(function(item){
      item.choices.forEach(function(it){
        if(!it.vote==0){
          it.percentage = it.vote * 100 / item.total;
        }else{
          it.percentage=0;
        }
      });
    });
    return polls;
  }
});
Template.list.events({
  'click .vote': function(event){
    $('a.list-group-item:hover');
    var index = $(event.currentTarget).parent().parent().find('.active').data('choice-id');
    var pollId = $(event.currentTarget).closest('.question').data('pollid');
    $('.list-group-item').removeClass('active');
    $(event.target).addClass('disabled');
    if(index!=undefined) {
      Meteor.call('updatePoll', pollId, index);
    }
  }
});
