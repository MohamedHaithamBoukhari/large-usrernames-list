import React, { useState } from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NameList from "../components/NameList";

const { Content, Sider } = Layout;

const Home = () => {
  const [selectedLetter, setSelectedLetter] = useState("A");

  return (
    <div class="container">
      <div class="container rounded-3 bg-primary p-3 mb-2 mt-1 fixed-top">
          <Navbar />
          <Sidebar onSelectLetter={setSelectedLetter} />
      </div>
      <div style={{marginTop:"170px"}}>
        <NameList selectedLetter={selectedLetter} />
      </div>
    </div>
  );
};

export default Home;
