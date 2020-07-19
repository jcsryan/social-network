const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema(
    {
        username:{
            type:String,
            unique: true,
            required: 'You must provide a unique username',
            trim: true

        },
        email:{
            type: String,
            required: 'You must provide a unique email address',
            unique: true,
            match:[/(.+)@(.+){2,}\.(.+){2,}/,'Please provide a valid email']
        },
        thoughts:[{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }]
        ,
        friends:[{
            type: Schema.Types.ObjectId,
            ref:'User'
        }]
    },
    {
        toJSON: {
           virtuals: true,
           getters: true
        }
     }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', UserSchema);

module.exports = User;