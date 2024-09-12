import {useState, useEffect} from "react";
import useBreedList from "./useBreedList"
import Results from "./Results"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]


const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const [pets, setPets] = useState([])
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input 
                    onChange={e => setLocation(e.target.value)} 
                    placeholder="Location" 
                    id="location" 
                    value={location} />
                </label>
                <label htmlFor="animal">
                Animal
                    <select 
                    placeholder="Animal" 
                    id="animal" 
                    value={animal} 
                    onChange={e => setAnimal(e.target.value)}
                    >
                        <option value="">Select an animal</option>
                        {ANIMALS.map(animal => (
                            <option key={animal} value={animal}>{animal}</option>
                            ))}
                    </select>
                </label>
                <label htmlFor="breed">
                Breed
                    <select 
                    disabled={breeds.length === 0}
                    placeholder="Breed" 
                    id="breed" 
                    value={breed} 
                    onChange={e => setBreed(e.target.value)}
                    >
                        <option value="">Select an animal</option>
                        {breeds.map(breed => (
                            <option key={breed} value={breed}>{breed}</option>
                            ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />

        </div>

    )
}

export default SearchParams;