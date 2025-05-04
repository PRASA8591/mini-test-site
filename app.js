function saveToFirebase() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    const userRef = database.ref('users/' + username);
    userRef.set({
      username: username,
      password: password
    }).then(() => {
      alert("Data saved successfully!");
    }).catch((error) => {
      alert("Error: " + error.message);
    });
  } else {
    alert("Please fill in both fields.");
  }
}
