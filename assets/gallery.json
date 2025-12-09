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