//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyA7ah_nTHe7o3Epp92MsfIYP5qEIk28pC4",
  authDomain: "kwitter-project-b9cd7.firebaseapp.com",
  databaseURL: "https://kwitter-project-b9cd7-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-b9cd7",
  storageBucket: "kwitter-project-b9cd7.appspot.com",
  messagingSenderId: "64450735037",
  appId: "1:64450735037:web:f15754f30f58e5becc40d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    
    
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
    
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      room = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= room;
    
    
      //End code
      });});}
    getData();
    
    function redirectToRoomName(name) {
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
    }
    
    
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
    }
    
    