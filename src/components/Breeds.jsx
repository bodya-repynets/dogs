import { Button, Stack, Typography } from "@mui/material";
import { useGlobalContext } from "../context";
const Breeds = () => {
  const { showBreeds, setOpenModal, setSelectedBreed } = useGlobalContext();
  return (
    <Stack
      flexDirection={"row"}
      width={"100%"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={"20px"}
      padding={"40px"}
    >
      {showBreeds.map((breed) => {
        return (
          <Stack
            key={breed.id}
            sx={{
              backgroundColor: "rgba(255,255,255,0.7)",
              height: "250px",
            }}
            borderRadius={"10px"}
            overflow={"hidden"}
            position={"relative"}
          >
            <Button
              sx={{ padding: 0, display: "flex", flexDirection: "column" }}
              onClick={() => {
                setSelectedBreed(breed);
                setOpenModal(true);
              }}
            >
              <img
                height={"200px"}
                className="image"
                src={breed.img}
                alt={breed.breed}
              />
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#1e293b",
                  alignItems: "center",
                  fontSize: "14px",
                  height: "50px",
                  paddingX: "10px",
                  textAlign: "center",
                  fontWeight: "600",
                  letterSpacing: "3px",
                  width: "100%",
                  fontStyle: "italic",
                }}
              >
                {breed.breed}
              </Typography>
            </Button>
          </Stack>
        );
      })}
    </Stack>
  );
};
export default Breeds;
