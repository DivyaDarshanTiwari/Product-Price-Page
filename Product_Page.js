function show() {
    let body = document.getElementById("hidden");
    body.classList.toggle("d-none");
    let readMoreText = document.getElementById("read-more-text");
    readMoreText.textContent = body.classList.contains("d-none") ? "Read More" : "Read Less";
  }
  
  function show2() {
    let x = document.getElementById("hidden1");
    x.classList.toggle("d-none");
    let readMoreText2 = document.getElementById("read-more-text2");
    readMoreText2.textContent = x.classList.contains("d-none") ? "Read More" : "Read Less";
  }