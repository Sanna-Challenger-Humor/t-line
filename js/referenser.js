// LINK TO LARGE IMAGE CONTAINER * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let referenser = document.getElementsByClassName("referenser-DOCLINK");
let modalImg = document.getElementById("referenser_large");

referenser[0].onclick = function(){
  modal.style.display = "block";
  modalImg.src = "img/referenser/sverige_referenser.svg";

}
referenser[1].onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/referenser/norge_referenser.svg";
  }
  referenser[2].onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/referenser/danmark_referenser.svg";  
  }

// Get the <span> element that closes the modal
let close_this = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close_this.onclick = function() { 
  modal.style.display = "none";
}


  