//Init Github
const github = new GitHub();

//Search input
const searchUser = document.getElementById("searchUser");

// Search unput event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        // Show profile
      }
    });
  }
});
