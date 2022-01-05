import { BrowserRouter, Route , Routes} from "react-router-dom";
import LoginForm from './Components/loginform';
import SignUp from './Components/register';
import Buttons from './Components/buttons';


function App() {
  return (
    <div className="App d-flex justify-content-center">
    <BrowserRouter>
    <Buttons />
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,

    </div>
  );
}

export default App;
