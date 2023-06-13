import {
  Stack,
  Autocomplete,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useGlobalContext } from "../context";
import backgroundPhoto from "../assets/background.jpg";

const Banner = () => {
  const { selectedBreed, setSelectedBreed, breeds, setOpenModal } =
    useGlobalContext();
  const handleAutocomplete = (e, newValue) => {
    if (newValue) {
      setSelectedBreed(newValue);
    }
  };
  const handleInput = (e) => {
    if (e?.target?.value) {
      setSelectedBreed(e.target.value);
    } else {
      setSelectedBreed("");
    }
  };
  const handleClick = () => {
    if (selectedBreed !== "") {
      setOpenModal(true);
    }
  };
  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundImage: `url(${backgroundPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"20px"}
    >
      <Stack width={'100%'} height={'100%'} alignItems={"center"}
      justifyContent={"center"} sx={{backgroundColor: 'rgba(0,0,0,0.3)'}}>

      <Stack alignItems={"center"}
      justifyContent={"center"}
      spacing={"20px"}
      padding={'20px'}
      borderRadius={'10px'}
      sx={{backgroundColor: 'rgba(255,255,255,0.4)'}}>

      <Autocomplete
        options={breeds}
        onChange={handleAutocomplete}
        onInputChange={handleInput}
        getOptionLabel={(option) => {
          if (option) {
            return option.breed;
          } else {
            return "";
          }
        }}
        renderInput={(params) => (
          <TextField
          sx={{ width: "400px" }}
          {...params}
          label="Breed name"
          variant="outlined"
          />
          )}
          />
      <Button onClick={handleClick} variant="contained">
        Get info
      </Button>
          </Stack>
          </Stack>
    </Stack>
  );
};
export default Banner;
