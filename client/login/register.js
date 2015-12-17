/**
 * Created by Tribhuwan on 26-Nov-15.
 */
Template.register.events({
    'submit form': function(){
        event.preventDefault();
        var fname = $('[name=fname]').val();
        var lname = $('[name=lname]').val();
        var company = $('[name=company]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var city = $('[name=city]').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
              fname: fname,
              lname: lname,
              company: company,
              city: city
            }
        }, function(error){
            if(error){
                Toast.error(error.reason); // Output error if registration fails
            } else {
                Router.go("home"); // Redirect user if registration succeeds
                Toast.success('Registration is success. Welcome!');
            }
        });
        Router.go('/');
    }
});
