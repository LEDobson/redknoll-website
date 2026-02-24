async function loadGallery(jsonPath, containerId) {
  const response = await fetch(jsonPath);
  const data = await response.json();
  const gallery = document.getElementById(containerId);
  gallery.innerHTML = "";

  data.images.forEach((img) => {
    const link = document.createElement("a");
    link.href = img.full; // e.g., the PNG
    link.target = "_blank"; // optional: open in new tab

    const el = document.createElement("img");
    el.src = img.src; // the JPEG thumbnail
    el.alt = img.alt;
    el.width = 200;
    el.className = "gallery-item";

    link.appendChild(el);
    gallery.appendChild(link);
  });
}
