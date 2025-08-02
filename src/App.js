import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* <UserState>
        <NoteState> */}
          <Router>
            <Navbar />
            {/* <Alert alert={alert} /> */}
            <div className="container">
              <Routes>
                {/* <Route path="/" element={<Home showAlert={showAlert} />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login showAlert={showAlert} />} />
                <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
                <Route path="/userdetails" element={<UserDetails showAlert={showAlert} />} /> */}
              </Routes>
            </div>
          </Router>
        {/* </NoteState>
      </UserState> */}
    </>
  );
}

export default App;
