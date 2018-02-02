/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	
	schema: true,
  attributes: {
		fullname: {
		  type: 'string',
		  required: true
		},
		username: {
		  type: 'string',
		  required: true
		},
		email: {
		  type: 'string',
			required: true,
			email: true,
			unique: true
    },
		position: {
		  type: 'string',
		  required: true
    },
		password: {
		  type: 'string',
		  required: true
		},
		secretkey: {
		  type: 'string',
			required: true
		},
		// prevente some Data from going back via the API to the client
		toJSON: function(){
			const obj = this.toObject();
			delete obj.password;
			delete obj.email;
			delete obj._csrf;
			delete obj.secretkey;
			return obj;
		}
	},
	
	connection: 'mongodb'
};

