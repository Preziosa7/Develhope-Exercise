const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser() {
  localStorage.setItem("user", JSON.stringify(user));
}
 
function getUser() {
  const savedUser = localStorage.getItem("user");   // returns a string
  const parsedUser = JSON.parse(savedUser);         // convert string → object
  console.log(parsedUser);
}
