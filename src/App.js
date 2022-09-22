import { Provider } from 'react-redux';
import rootReducers from './state/Index';
import { createStore } from 'redux';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Details from './components/Details';
const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
