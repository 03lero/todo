const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plannerSchema = new Schema({
  username: { type: String, required: true },
  text: { type: String, required: true },
  completed: {type: Boolean, required: true},
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Planner = mongoose.model('Planner', plannerSchema);

module.exports = Planner;
