const {
  // eslint-disable-next-line max-len
  addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deletetNoteByIdHandler,
} = require('./handler');

/* eslint-disable linebreak-style */
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deletetNoteByIdHandler,
  },
];

module.exports = routes;
