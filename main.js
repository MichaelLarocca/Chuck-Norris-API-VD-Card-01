const displayJoke = document.getElementById("display-joke");

async function fetchJoke() {
	const results = await fetch(`https://api.chucknorris.io/jokes/random`);
	const data = await results.json();
	// console.log(data.value);
	displayJoke.textContent = data.value;
}
