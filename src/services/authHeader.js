

const checkStorage = key => {
    const storedData = localStorage.getItem(key);
    if (!storedData) console.log('Local storage is empty');
 }


  export default function isAdmin(){
    if (localStorage.getItem("user") === null) {
        return false
      }else{
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("name", user);
        if(user.role === "admin"){
            return true
        }else{
            return false
        }
      }
     
  }