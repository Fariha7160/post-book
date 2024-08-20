const handleLogin = ()=> {

 const userIdinput = document.getElementById("user-id");
  const passwordinput = document.getElementById("password");

 const userId = userIdinput.value;
 const password = passwordinput.value;

 const user ={
    userId : userId,
    password : password,
 };
  //console.log(user);
  fetchuserInfo(user);
 };
 const fetchuserInfo = async(user) => {
    let data;
    try{
    const res =await fetch("http://localhost:5000/getUserInfo",{
method: "POST",
headers:{
    "content-type": "application/json",
},
body : JSON.stringify(user),
});

data = await res.json();
    }catch(err){
        console.log("error connecting to the server",err);
    }finally{
        console.log("user info from server: ",data);
    }
};
 