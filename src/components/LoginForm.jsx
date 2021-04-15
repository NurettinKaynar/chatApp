import { useState } from "react";
import axios from "axios";

const projectID = "86fc23e0-d37e-4a81-ab18-ab6d38a86368";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Hatalı Giriş Bilgileri");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Sohbet Uygulaması</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Kullanıcı Adınız"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Şifreniz"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Sohbete Başla</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
