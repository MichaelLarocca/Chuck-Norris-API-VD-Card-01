const displayJoke = document.getElementById("display-joke");

async function fetchJoke() {
	const errorMessage = `"DO NOT DISTURB!" Chuck Norris is currently entertaining guests in his hotel room.`;

	try {
		const results = await fetch(`https://api.chucknorris.io/jokes/random`);

		if (!results.ok) {
			displayJoke.textContent = errorMessage;
			throw new Error("Request failed.");
		}

		const data = await results.json();
		displayJoke.textContent = data.value;
	} catch (error) {
		displayJoke.textContent = errorMessage;
		console.error(error);
	}
}
