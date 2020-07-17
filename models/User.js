const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validator: {
                $of: [
                  {email: {$regex: /@mongodb\.com$/}}
                ]
              },
        thoughts:[
         {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
      ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User'
            }
        ]
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', UserSchema);

module.exports = User;