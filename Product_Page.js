function myFunction() {
    var moreText = document.getElementById("hidden");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
  function show2() {
    let x = document.getElementById("hidden1");
    x.classList.toggle("d-none");
    let readMoreText2 = document.getElementById("read-more-text2");
    readMoreText2.textContent = x.classList.contains("d-none") ? "Read More" : "Read Less";
  }