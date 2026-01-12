
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const rootElement = document.getElementById('root');
// if (!rootElement) {
//   throw new Error("Could not find root element to mount to");
// }

// const root = ReactDOM.createRoot(rootElement);
// root.render(
//   <div><App /></div>
// );


import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
