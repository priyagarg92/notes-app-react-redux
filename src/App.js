import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import NotesList from './Components/NotesList';
import './style.css';

export default function App() {
  return (
    <Provider store={store}>
      <NotesList />
    </Provider>
  );
}
