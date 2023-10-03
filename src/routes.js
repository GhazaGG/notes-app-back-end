const { addNoteHandler } = require('./handler');

const route = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = route;
