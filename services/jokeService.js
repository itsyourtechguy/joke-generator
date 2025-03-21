import axios from 'axios';

export async function getJoke() {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        const joke = response.data;
        
        return joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`;
    } catch (error) {
        console.error("Error fetching joke:", error);
        throw new Error("Joke API request failed");
    }
}
