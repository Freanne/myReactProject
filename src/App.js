
import './App.css';

import Banner from './components/Banner';
import logo from './assets/logo.png'
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList'
import QuestionForm from './components/QuestionForm';
import Footer from './components/Footer';
import './styles/Layout.css'

function App() {
  return (
    <div>
      <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
      <div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
      {/* <QuestionForm/> */}
      <Footer/>
    </div>
  );
}

export default App;
