// Get ALL elements with class "samesame" (returns a collection)
const hereElements = document.getElementsByClassName('samesame');

// Loop through each element
for (let i = 0; i < hereElements.length; i++) {
  const element = hereElements[i];
  
  // Check if element's text includes "here" (case-insensitive)
  if (element.textContent.toLowerCase().includes("here")) {
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
  }
}