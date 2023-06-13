import axios from "axios";

const fetchBreeds=async(setBreeds)=>{
    const options = {
        method: 'GET',
        url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
        headers: {
          'X-RapidAPI-Key': 'c7d76f028amsh866edfc2a6eec90p1c3382jsnbe5eb8052945',
          'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          localStorage.setItem("breeds", JSON.stringify(response.data));
          setBreeds(response.data)
      } catch (error) {
          console.error(error);
      }
}


export default fetchBreeds