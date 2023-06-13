import { Box, Stack } from "@mui/material";
import Banner from "../components/Banner";
import Breeds from "../components/Breeds";
import PaginationComponent from "../components/PaginationComponent";
import BreedModal from "../components/BreedModal";

const Home = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#85FFBD",
        backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        width: "100%",
      }}
    >
      <BreedModal />
      <Banner />
      <Breeds />
      <PaginationComponent />
    </Stack>
  );
};
export default Home;
