Meteor.subscribe('updatepoll');
Template.poll.helpers({
  getPercentage: function(total){
    return (this.vote * 100 )/total + '%';
  }
});
Template.list.events({
  'click .list-group-item': function(event){
    $('.list-group-item').removeClass('active');
    $(event.target).parent().addClass('active');
    $(event.target).closest('.question').find('button').removeClass('disabled');
  }
})
