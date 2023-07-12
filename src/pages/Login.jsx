import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const onClickLogIn = () => {};

  const onClickToggle = () => {};

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button>Log In</button>
      <br />
      <button>Log Out</button>
      <br />
      <button>Toggle Moderator status</button>
    </div>
  );
};

export default Login;
