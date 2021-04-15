import { ChatEngine } from "react-chat-engine";
import "./App.css";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const projectID = "86fc23e0-d37e-4a81-ab18-ab6d38a86368";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
