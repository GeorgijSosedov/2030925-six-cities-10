import WelcomeScreen from "../../pages/welcome-screen";
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import 

type AppScreenProps = {
  errorsCount: number;
};

function App ({errorsCount}: AppScreenProps) {
return ( 
  <WelcomeScreen errorsCount = {errorsCount} />
  );
}
export default App;



