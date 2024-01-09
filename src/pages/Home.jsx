import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/payouts");
    // document.title = "Home - Dukaan";
  }, []);
  return <div>Home</div>;
};

export default Home;
