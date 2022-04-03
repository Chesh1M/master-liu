import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18next';
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading ~~~</div>)}>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </Suspense>    
  </React.StrictMode>,
  document.getElementById('root')
);

