/*
async function loadGallery(jsonPath, containerId) {
  const response = await fetch(jsonPath);
  console.log("Fetch status:", response.status); // 👀 check if 200
  const data = await response.json();
  console.log("Loaded data:", data); // 👀 see structure
  const gallery = document.getElementById(containerId);
  gallery.innerHTML = "";

  if (data.images) {
    data.images.forEach(img => {
      const el = document.createElement('img');
      el.src = img.src;
      el.alt = img.alt;
      el.className = "gallery-item";
      gallery.appendChild(el);
    });
  } else {
    gallery.innerHTML = "<p>No images found in JSON</p>";
  }
}
*/

async function loadGallery(jsonPath, containerId) {
  const response = await fetch(jsonPath);
  const data = await response.json();
  const gallery = document.getElementById(containerId);
  gallery.innerHTML = "";

  data.images.forEach(img => {
    const el = document.createElement('img');
    el.src = img.src;
    el.alt = img.alt;
    el.className = "gallery-item";
    gallery.appendChild(el);
  });
}
