let changeSectionOne = document.getElementById("first");
// let navCreation = document.getElementById("creaButton");
// document.body.style.background = ("black");

// document.body.navCreation.addEventListener("click", function() {
//     document.body.style.background = "black";
// });
//iquand creation button enclenché alors chnage background.
//quand button nav enclenché 

// changeSectionOne.innerHTML= `
// dsfs
// ddsdfd

// `;

let TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};



window.onload = function() {
  let elements = document.getElementsByClassName('txt-rotate');
  for (let i=0; i<elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-rotate');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

function changeCreation(color) {
    document.body.style.background = color;
    changeSectionOne.innerHTML = `
    <section id="secSecond" class="container-fluid">
        <div id="SECOND" class="row m-5  row-cols-1 row-cols-md-5 ">
            <div class="col ">
              <div class="card main-bg ">
                <img src="assets/IMG/LDESIGN.png" class="rounded-0 card-img-top" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title">Card title</h5>

                </div>
              </div>
            </div>
            <div class="col">
              <div class="card main-bg">
                <img src="assets/IMG/LDESIGN.png" class="rounded-0 card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>

                </div>
              </div>
            </div>
            <div class="col">
              <div class="card main-bg">
                <img src="assets/IMG/LDESIGN.png" class="rounded-0 card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>

                </div>
              </div>
            </div>
            <div class="col">
              <div class="card main-bg">
                <img src="assets/IMG/LDESIGN.png" class="rounded-0 card-img-top img-fluid" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card main-bg">
                <img src="assets/IMG/LDESIGN.png" class="rounded-0 card-img-top img-fluid" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
        </div>
    </section>

    `;
}

function goHome() {
    window.location.href = "index.html"
}