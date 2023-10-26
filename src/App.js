import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import {UserProvider} from './Context/UserContext'
function App() {
  return (
    <UserProvider>
      <Navbar/>
      <Footer/>
    </UserProvider>
  );
}

export default App;
