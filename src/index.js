import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'
import './styles/app.scss'
import './globals.js';

// make api call to back end to replace data. just get trainers at first.
// right now, data is recieved from globals.js


render(<App data={data}/>, document.getElementById('app'));
