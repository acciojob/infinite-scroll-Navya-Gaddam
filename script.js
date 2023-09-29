//your code here!
const scrollContainer = document.getElementById("infi-list");

scrollContainer.addEventListener("scroll", () => {
	const scrollTop = scrollContainer.scrollTop;
	const containerHeight = scrollContainer.clientHeight;
	const scrollHeight = scrollContainer.scrollHeight;
	const maximumScrollableHeight = scrollHeight - containerHeight;

	const threshold = Math.abs((scrollTop) - maximumScrollableHeight);

	if(threshold <= 5){
		const div = document.createElement("div");
		div.innerHTML = `
		  <li>Item 1</li>
		  <li>Item 2</li>
		  <li>Item 3</li>
		  <li>Item 4</li>
		  <li>Item 5</li>
		  <li>Item 6</li>
		  <li>Item 7</li>
		  <li>Item 8</li>
		  <li>Item 9</li>
		  <li>Item 10</li>
		  <li>Item 11</li>
		  <li>Item 12</li>
		  <li>Item 13</li>
		  <li>Item 14</li>
		  <li>Item 15</li>
		  <li>Item 1</li>
		  <li>Item 2</li>
		  <li>Item 3</li>
		  <li>Item 4</li>
		  <li>Item 5</li>
		  <li>Item 6</li>
		  <li>Item 7</li>
		  <li>Item 8</li>
		  <li>Item 9</li>
		  <li>Item 10</li>
		  <li>Item 11</li>
		  <li>Item 12</li>
		  <li>Item 13</li>
		  <li>Item 14</li>
		  <li>Item 15</li>`;
		scrollContainer.appendChild(div);
	}
});


