import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';




//Si un valor lo estás mando en js pero en html no se mueve entonces toca cambiar en el index.//

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FirstApp value={1}/> 
  </React.StrictMode>
);

