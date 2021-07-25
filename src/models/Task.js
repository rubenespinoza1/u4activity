const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    description: {type: String, required: true},
    state: { type: String, required: true},
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    requester: { 
        type: Schema.Types.ObjectId,
        ref: 'User' 
    }
})

module.exports = model('Task', TaskSchema);