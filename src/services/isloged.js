export default function isLoged(){
    if (localStorage.getItem("user") === null) {
        return false
      }else{
         return true
      }
     
  };