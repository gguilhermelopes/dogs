import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../userContext";
import Error404 from "../Error404";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </section>
  );
};

export default User;
