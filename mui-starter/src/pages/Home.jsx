import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import TypoButtons from "../components/TypoButtons";

const Home = () => {
  return (
    <>
    <CssBaseline />
      <Navbar />
      <TypoButtons />
      <TextField />
    </>
  );
};

export default Home;
