import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import TypoButtons from "../components/TypoButtons";
import CardComp from "../components/CardComp";

const Home = () => {
  return (
    <>
    <CssBaseline />
      <Navbar />

      <CardComp />
      
      <TypoButtons />
      <TextField />
    </>
  );
};

export default Home;
