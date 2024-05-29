import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) { //if user does not exist render the autentication page
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else { //if user deos exist render the chat page
    return <ChatsPage user={user} />; 
  }
}

export default App;