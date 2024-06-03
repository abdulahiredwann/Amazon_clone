import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './Components/StateProvider/StateProvider';
import reducer, { initialState } from './Components/Reducer/Reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
);
