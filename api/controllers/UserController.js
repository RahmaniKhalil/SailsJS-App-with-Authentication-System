/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    'register' : function(req, res){
        res.view();
    },

    'login' : function(req, res){

        res.locals.flash = _.clone(req.session.flash);
        // console.log(res.locals.flash);
        res.view();
        req.session.flash = {};
    },

    create : function (req, res, next) {
                
                // Create a user with the params from the register form (register.ejs)
                    User.create(req.params.all(), function userCreated(err, user) {
                        //if ther is an error
                        if (err) {
                            //console.log(err);
                            req.session.flash = {
                                err : err
                            };   
                            return res.redirect('user/register');
                        }

                        //after successfull creation of the user
                        //redirect to the login page
                        //res.json(user);
                       
                        req.session.flash = {
                            username : user.username
                        };
                        return res.redirect('user/login');
                    });    
                
        
            
           
            
        
    },

    dashboard : function (req, res, next) {
        // console.log(req.allParams());
        User.findOne({username:req.allParams().username, password:req.allParams().password}, function foundUser(err, user) {
            if (err){ return next(err);}
            if (!user){ return next();}
            res.view({
                user : user
            });
        });
    }
};



