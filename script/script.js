function disassembleCube() {
  // Get the cube element
  const cube = document.querySelector('.cube');

  // Check if the cube has the 'distance' class
  if (cube.classList.value.includes('distance')) {
    // Remove the 'distance' class
    cube.classList.remove('distance');
  } else {
    // Add the 'distance' class
    cube.classList.add('distance');
  }
}

