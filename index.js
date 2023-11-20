const firebaseConfig = {
  apiKey: "AIzaSyDVWUHpIaFce7KEvDywjkXXUaY-BFKc4n4",
  authDomain: "led-project-b3eac.firebaseapp.com",
  databaseURL: "https://led-project-b3eac-default-rtdb.firebaseio.com",
  projectId: "led-project-b3eac",
  storageBucket: "led-project-b3eac.appspot.com",
  messagingSenderId: "422406057050",
  appId: "1:422406057050:web:3a5b12049d2ae7f0f6fc63",
  measurementId: "G-TWCHXGKM90"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const refrence = database.ref('LIGHT-ON-OFF');
refrence.on('value', (snapshot) => {
  const data = snapshot.val()

  alert("user id changed database value="+data.key1);
});


function change() {

  const newData = {
    key1: '1',
  }
  refrence.set(newData, (error) => {
    if (error) {
      console.error('Data could not be saved.', error);
    } else {
      console.log('Data saved successfully.');
    }
  });
}

function side() {
  alert("Do You Went To Trun OFF LED")
  const newData = {
    key1: '0'
  }
  refrence.set(newData, (error) => {
    if (error) {
      console.error('Data could not be saved.', error);
    } else {
      console.log('Data saved successfully.');
    }
  });

};


// let data=fetch('https://led-light-on-off-218e2-default-rtdb.firebaseio.com/');
// data.then((value)=>{
//   console.log(value)
// },(error)=>{
//   console.log(error)
// })
