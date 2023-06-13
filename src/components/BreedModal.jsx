import { Link, Modal, Stack, Typography } from "@mui/material";
import { useGlobalContext } from "../context";
const BreedModal = () => {
  const { openModal, setOpenModal, selectedBreed } = useGlobalContext();
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Modal open={openModal} onClose={handleClose}>
      <Stack sx={{margin: '100px auto', width: '70vw', backgroundColor: 'primary.main'}} alignItems={'center'}padding={'20px'} spacing={'20px'}>
        <img width={'60%'} src={selectedBreed.img}/>
        <Typography>{selectedBreed.breed}</Typography>
        <Link sx={{color: 'white'}} href={selectedBreed.url}>Find more about breed</Link>
        <Typography>Origin: {selectedBreed.origin}</Typography>
      </Stack>
    </Modal>
  );
};
export default BreedModal;
