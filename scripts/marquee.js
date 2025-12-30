[...document.querySelectorAll(".marqueescroll")] // get everything we want to marquee
.map((div) => div.children[0]) // turn all of them into their first child that actually holds all the images
.forEach((innerDiv) => { // run a function on all of these...
  let follower = innerDiv.cloneNode(true); // that copies the image container
  follower.classList.add("follower"); // makes the new one a follower
  innerDiv.parentElement.appendChild(follower); // and puts the follower right after the original
  follower.classList.add("play"); // and makes them both play
  innerDiv.classList.add("play");
})