var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
  });

var newTodo = new Todo({
  text: 'Cook dinner'
});

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
//   mongoose.disconnect();
// }, (e) => {
//   console.log('Unable to save todo:', e)
// });

var otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
  mongoose.disconnect();
}, (e) => {
  console.log('Unable to save', e);
});

// User
// email - require it - trim it - set type - set min length of 1
var User = mongoose.model('User', {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    }
  });
  
  var user = new User({
    email: 'andrew@example.com   '
  });
  
  user.save().then((doc) => {
    console.log('User saved', doc);
  }, (e) => {
    console.log('Unable to save user', e);
  });
  
