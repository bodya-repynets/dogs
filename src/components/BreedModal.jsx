import { Link, Modal, Stack, Typography } from "@mui/material";
import { useGlobalContext } from "../context";
const BreedModal = () => {
  const { openModal, setOpenModal, selectedBreed } = useGlobalContext();
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Modal open={openModal} onClose={handleClose}>
      <Stack
        sx={{
          margin: "100px auto",
          width: { xs: "50%", md: "30%", xl: "20%" },
          backgroundColor: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
          borderRadius: "20px",
        }}
        alignItems={"center"}
        padding={"20px"}
        spacing={"20px"}
      >
        <img width={"100%"} src={selectedBreed.img} />
        <Typography sx={{ color: "#1e293b", letterSpacing: "3px" }}>
          {selectedBreed.breed}
        </Typography>
        <Link
          sx={{
            color: "grey",
            fontWeight: 700,
            letterSpacing: "3px",
            textDecoration: "none",
          }}
          href={selectedBreed.url}
        >
          Find more about breed
        </Link>
        <Typography sx={{ color: "#1e293b", letterSpacing: "3px" }}>
          Origin: {selectedBreed.origin}
        </Typography>
      </Stack>
    </Modal>
  );
};
export default BreedModal;
