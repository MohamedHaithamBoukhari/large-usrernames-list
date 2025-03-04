import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  return (
    <>
      <div class="bg-primary d-flex justify-content-center mb-2">
        <h1 class="text-white">Large User List</h1>
      </div>
    </>
  );
};

export default Navbar;
