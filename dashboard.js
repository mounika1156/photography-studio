
function show(id, btn){

  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".btn").forEach(b=>{
    b.classList.remove("active");
  });

  btn.classList.add("active");

  document.getElementById("title").innerText =
    id.charAt(0).toUpperCase() + id.slice(1);
}

function toggleTheme(){
  document.body.classList.toggle("light");
}











