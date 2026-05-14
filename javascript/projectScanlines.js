document.querySelectorAll(".project").forEach(project => {

    // Find the FIRST image link only
    const imageLink = project.querySelector("a:has(img)");

    if (!imageLink) return;

    const image = imageLink.querySelector("img");

    if (!image) return;

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.classList.add("projectImageWrapper");

    // Create overlay
    const overlay = document.createElement("img");
    overlay.src = "assets/images/scanlines.png";
    overlay.classList.add("projectOverlay");

    // Insert wrapper
    imageLink.parentNode.insertBefore(wrapper, imageLink);

    // Move image link inside wrapper
    wrapper.appendChild(imageLink);

    // Add overlay
    wrapper.appendChild(overlay);
});