const inp = document.querySelector("input");
const btn = document.getElementById("login");
const btnL = document.getElementById("logout");
const h1 = document.querySelector(".ha");
const sp = document.querySelector("span");
let inpv = inp.value;
function under(params) {
  if (inp.value) {
    inp.classList.add("under");
  } else {
    inp.classList.remove("under");
  }
}
function val(params) {
  let status = localStorage.getItem("token");

  if (status) {
    btnL.classList.remove("logoutBtn");
    inp.remove();
  }
}

window.addEventListener("load", () => {
  // alert("lol")
  // localStorage.removeItem("token")

  let status = localStorage.getItem("token");
  if (status) {
    btnL.classList.remove("logoutBtn");
    let feth = "welcome  " + status;
    inp.remove();
    btn.style.visibility = "hidden";
    // let welcome = "welcome " + inp.value
    var i = 0;
    var speed = 105;

    function typeWriter() {
      if (i < feth.length) {
        document.getElementById("demo").innerHTML += feth.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  } else {
    h1.innerHTML = "Please login";
  }
});

btn.onclick = (e) => {
  e.preventDefault();

  if (inp.value) {
    // * first letter capz

    localStorage.setItem("token", inp.value);
    h1.innerHTML = "";
    let welcome = "welcome " + inp.value;
    var i = 0;
    var speed = 105;

    function typeWriter() {
      if (i < welcome.length) {
        document.getElementById("demo").innerHTML += welcome.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    btn.style.visibility = "hidden";
  } else if (inp.value == "") {
    sp.innerText = "Please Enter your name";

    inp.focus();
    setTimeout(() => {
      sp.innerText = "";
    }, 2000);
  }
  val();
  typeWriter();
};

btnL.onclick = () => {
  // console.log(e.getBoundingClientRect());
  localStorage.clear();
  location.reload();
};
