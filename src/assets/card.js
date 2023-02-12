document.querySelector('.copyCat').addEventListener('click', function(e) {
    const copy = document.querySelector('.outline').cloneNode(true);
   document.body.appendChild(copy);
  });
  
  document.querySelector('#del').addEventListener('click', function(e) {
   let checkDel = confirm("Delete it?");
    if (checkDel) {
      if (document.querySelector('.outline:last-child') !== document.querySelector('.outline')) {    document.querySelector('.outline:last-child').remove();      
      }
      else {
        alert("No can do");
      }
    }
  });
    document.querySelector('.btnCT').addEventListener('click', function(e) {
      let title = prompt("I think it needs a better title, don't you?");
    if (title) {
      document.querySelector('.outline h2').innerText = title;
    }
  });
  
  document.querySelector('.btnDet').addEventListener('click', function(e) {
    const detail = document.querySelector('.details')
    if (detail.style.display === "none"){
      detail.style.display = "block"
    } else {
      detail.style.display = "none";
    }
  });
  document.querySelector('.btnBG').addEventListener("click", (e) => { 
     color = ("Green");
     document.querySelector('.lecard').style.backgroundColor = color; 
  });