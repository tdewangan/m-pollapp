Router.route('/', function () {
  this.render('list');
},{
  name:"home"
});
Router.route('/list', function () {
  this.render('list');
});
Router.route('/new', function () {
  this.render('new');
});
Router.route('/login', function () {
  this.render('login');
});
Router.route('/register', function () {
  this.render('register');
});
Router.route('/reset-password', function () {
  this.render('ResetPassword');
});
Router.route('/ForgotPassword', function () {
  this.render('ForgotPassword');
});
Router.configure({layoutTemplate: 'layoutTemplate'});
