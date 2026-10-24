import Messenger from "./components/massenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/context/AccountProvider";


function App() {
  const clientId='679415777366-b5i8gepif9pl68bk5nl9l65r8dlnhv48.apps.googleusercontent.com';


  return (

    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
     <Messenger/>
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
