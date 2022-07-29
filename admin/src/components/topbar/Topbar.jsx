import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { LogoutIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

export default function Topbar() {
  

  const dispatch=useDispatch();
    const handleLogout=()=>{
        logout(dispatch)
    }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">E-STORE</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <LogoutIcon
              onClick={handleLogout}
            />
          </div>
          <img src="https://digitechmax.com/resources/image/person-man.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
