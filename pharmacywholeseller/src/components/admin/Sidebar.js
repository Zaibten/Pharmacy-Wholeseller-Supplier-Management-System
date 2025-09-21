import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../../Redux/reduxStore";
import { addAuth } from "../../Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { professionalLogOut } from "../../Redux/Slices/professionalRedux";
import { message } from "antd";

const Sidebar = () => {
  const imgPath =
    "https://res.cloudinary.com/dh7kv5dzy/image/upload/v1758281172/logo_bnqsez.png";
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, context] = message.useMessage();

  const sendMessage = (varient, messageText) => {
    messageApi.open({ type: varient, content: messageText });
  };

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        sendMessage("success", "Professional SignOut !!!");
        setTimeout(() => {
          navigate("/");
          dispatch(professionalLogOut());
        }, 1200);
      })
      .catch((err) => {
        sendMessage("error", err.message);
      });

    setTimeout(() => {
      store.dispatch(addAuth.deleteState(null));
    }, 2000);
  };

  return (
    <div
     
    >
      {context}
    </div>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <Link
    to={to}
    style={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "#ff69b4",
      color: "white",
      padding: "10px 14px",
      margin: "12px 0",
      borderRadius: "12px",
      fontWeight: "600",
      textDecoration: "none",
      transition: "transform 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <span className="material-icons-outlined" style={{ marginRight: "10px" }}>
      {icon}
    </span>
    {label}
  </Link>
);

export default Sidebar;
