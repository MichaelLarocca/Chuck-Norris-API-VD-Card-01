const displayJoke = document.getElementById("display-joke");

async function fetchJoke() {
	const results = await fetch(`https://api.chucknorris.io/jokes/random`);
	const data = await results.json();

	if (!results.ok) {
		displayJoke.textContent = `"DO NOT DISTURB!" Chuck Norris is currently entertaining guests in his hotel room.`;
		throw new Error("Request failed.");
	}
	displayJoke.textContent = data.value;
}
