const hereElements = document.getElementsByClassName('samesame');

for (let i = 0; i < hereElements.length; i++) {
  const element = hereElements[i];
  
  if (element.textContent.toLowerCase().includes("here")) {
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
  }
}
