import { Button, Stack, Typography } from "@mui/material";
import { useGlobalContext } from "../context";
const Breeds = () => {
  const { showBreeds, setOpenModal, setSelectedBreed } = useGlobalContext();
  return (
    <Stack direction={'row'} flexWrap={'wrap'} gap={'50px'} justifyContent={'center'} padding={'50px'}>
      {showBreeds.map((breed) => {
        return (
          <Stack key={breed.id} sx={{backgroundColor: 'rgba(0,0,0,0.2)'}} overflow={'hidden'} paddingBottom={'20px'} spacing={'20px'} borderRadius={'20px'} width={'300px'} >
            <Button sx={{padding: '0px'}} onClick={()=>{
              setSelectedBreed(breed);
              setOpenModal(true)
            }}>
            <img width={'300px'} height={'200px'} src={breed.img} alt={breed.breed}/>

            </Button>
            <Typography sx={{fontSize: '18px', textAlign: 'center', fontWeight: '500', letterSpacing: '3px', padding: '10px',}}>{breed.breed}</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
export default Breeds;
