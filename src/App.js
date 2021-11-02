import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Route ,Switch} from 'react-router-dom';
import Main from './components/main/main';
import Header from './components/header/header';
import Section from './components/section/section';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Footer from './components/footer/footer';
import Forget from './components/forgetPass/forgetPass';
import SignUp from './components/signup/signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
     

<Route path="/forgetpass" component={Forget}></Route>
<Route path="/signup" component={SignUp}></Route>
<div>
  <Main/>
<Header/>
<Section/>
<Section1/>
<Section2/>
<Section3/>
<Footer/>
</div>
</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
