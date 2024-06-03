import React from "react";
import Header from "./component/Header";
import FlowersOption from "./component/FlowersOption";
import Banners from "./component/Banners";
import BlogPosts from "./component/BlogPosts ";
import Footer from "./component/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Header />
      <FlowersOption />
      <Banners />
      <BlogPosts/>
      <Footer/>

    </div>
  );
};

export default App;
