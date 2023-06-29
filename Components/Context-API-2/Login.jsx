import {useContext,useState} from 'react';
import { AuthContext } from './CustomProvider';

function Login(props) {
    const [user,setUser] = useState({
        username:"",
        password:""
    })
    const {login} = useContext(AuthContext)
    var style = {
        width:"300px",
        padding:"30px",
        textAlign:"center",
        margin:"50px auto 20px",
        backgroundColor: "pink",
        borderRadius:"10px"
    }
    const handleAuthentication = ()=>{
        if(user.username==="Bhoomi" && user.password==="Bhoomi@13"){
            login()
        }else{
            alert("Enter Proper Credentials")
        }
    }
    return (
        <div style={style}>
            <h2 style={{color:"purple"}}>Login Form</h2>
            <div>
                <input style={{width:"200px", height:"20px", fontSize:"15px"}} type="text" placeholder='username' onChange={(e)=>{setUser({
                    ...user,
                    username:e.target.value
                })}} />
            </div><br></br>
            <div>
                <input style={{width:"200px", height:"20px", fontSize:"15px"}} type="password" placeholder='password' onChange={(e)=>{setUser({
                    ...user,
                    password:e.target.value
                })}}/>
            </div><br></br>
            <div>
                <input style={{color:"white", background:"green", border:"none", fontWeight:"bolder", padding:"8px", fontSize:"15px", borderRadius:"5px"}} type="button" value="Login" onClick={handleAuthentication} />
            </div>
        </div>
    );
}

export default Login;