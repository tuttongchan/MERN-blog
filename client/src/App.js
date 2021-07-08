import './index.css';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import TopBar from './components/topbar/TopBar';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <TopBar />
      <Login />
      {/* <Settings /> */}
      {/* <Write /> */}
      {/* <Single /> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
