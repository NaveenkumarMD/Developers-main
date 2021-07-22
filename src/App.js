import './Styles/App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Routers';
import { Provider } from 'react-redux';

//redux
import { PersistGate } from 'redux-persist/integration/react'
import {persistor,store} from './store'

//firebase
import firebase from 'firebase'
import { firebaseConfig} from './Components/Config/fbconfig' 

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
  firebase.analytics()
}
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
