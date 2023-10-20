const mongoose = requires("mangoose");
const Schema = mongoose.Schema;

const Todo = new Schema({
    title: {
        type: String,
        require: true,
    }, 
    isCompleted: {
        type: Boolean,
        require: true,
    }, 
    dateTime: {
        type: Date,
        require: true,
        default: new Date(),
    },
    username: {
        type: String,
        require: true
    },
});

module.export = mongoose.model("todos", Todo)