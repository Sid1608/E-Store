import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import {userRequest} from "../../requestMethods"
export default function WidgetSm() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    
    const getUsers=async ()=>{
        try{
          const res=await userRequest.get("users/?new=true");
          setUsers(res.data);
          console.log(res.data);
        }catch{

        }
    };
    getUsers();
    
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user=>(
            <li className="widgetSmListItem" key={user.id}>
              <img
                src={users.img||"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
                alt=""
                className="widgetSmImg"
              />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
        ))}
        
        
      </ul>
    </div>
  );
}
