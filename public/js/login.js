const loginHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#login-username').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  if(!(username && password)) {
    alert("Please enter username and password");
    return;
  }

  if(username && password) {
    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: {"Content-Type": "application/json"}
    });
    console.log(res);

    if(res.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Invalid username or password: " + res.statusText)
    }
  }
}

const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signup-username').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  const confirmPassword = document.querySelector('#signup-confirm').value.trim();

  if(!(password === confirmPassword)) {
    alert("Passwords don't match");
  }
  console.log(username, password);

  if(username && password) {
    const res = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: {"Content-Type": "application/json"}
    });
    console.log(res);

    if(res.ok) {
      document.location.replace("/");
    } else {
      console.log(res);
    }
  }
}

document.querySelector('#login-form').addEventListener('click', loginHandler);
document.querySelector('#signup-form').addEventListener('click', signupHandler);