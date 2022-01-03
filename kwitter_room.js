

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUOZq0BQSDdOniOQ4gfDE2hlDFJsXrlow",
  authDomain: "lets-chat-web-app-19656.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-19656-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-19656",
  storageBucket: "lets-chat-web-app-19656.appspot.com",
  messagingSenderId: "663536653319",
  appId: "1:663536653319:web:4d3ea21742efce985d46a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
              //End code
        });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}