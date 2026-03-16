const rangevalue = document.getElementById("rangeValue");
const range = document.getElementById("range");

if (range && rangevalue) {
  range.addEventListener("input", () => {
    rangevalue.textContent = range.value;
  });
}

const items = document.querySelectorAll(".min_ls ul li");

let n = 0;

if (items.length > 0) {
  items[n].classList.add("active");

  setInterval(() => {
    items[n].classList.remove("active");
    n = (n + 1) % items.length;
    items[n].classList.add("active");
  }, 2200);
}

//--------------------------- fetch car ------------------------

async function getcars() {
   try {
        const response = await fetch('https://rentcar.stepprojects.ge/api/Car');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


function createCarCard(cars, containerId) {

  const carContainer = document.getElementById(containerId);
    cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('popular');

          card.innerHTML = `
            <div class="cars">
              <div class="cars_main">
                  <div class="cars_1">
                      <div class="cars_1_1">
                          <h3>${car.brand}</h3>
                          <p>${car.model} / ${car.year}</p>
                      </div>
                      <i class="fa-solid fa-heart" style="color: rgb(105, 105, 105);"></i>
                  </div>
                  <div class="cars_2"></div>
                  <div class="cars_3">
                      <div class="cars_3_1">
                          <i class="fa-solid fa-gas-pump" style="color: rgb(59, 131, 109);"></i>
                          <p>${car.fuelCapacity}ლ</p>
                      </div>
                      <div class="cars_3_2">
                          <svg  fill="#000000" version="1.1" id="Layer_1" viewBox="0 0 32 32" xml:space="preserve">
                          <path id="steering--wheel_1_" d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16S7.53,0.64,16,0.64S31.36,7.53,31.36,16  S24.47,31.36,16,31.36z M16,1.36C7.927,1.36,1.36,7.927,1.36,16c0,8.072,6.567,14.64,14.64,14.64c8.072,0,14.64-6.567,14.64-14.64  S24.072,1.36,16,1.36z M16,28.36C9.185,28.36,3.64,22.815,3.64,16S9.185,3.64,16,3.64S28.36,9.185,28.36,16S22.815,28.36,16,28.36z   M16.36,20.346v7.289c6.133-0.188,11.087-5.142,11.275-11.275h-7.289C20.172,18.478,18.478,20.172,16.36,20.346z M4.366,16.36  c0.187,6.133,5.141,11.087,11.274,11.275v-7.289c-2.118-0.174-3.812-1.868-3.985-3.986H4.366z M16,12.36  c-2.007,0-3.64,1.633-3.64,3.64s1.633,3.64,3.64,3.64s3.64-1.633,3.64-3.64S18.007,12.36,16,12.36z M20.346,15.64h7.289  C27.444,9.387,22.298,4.36,16,4.36S4.556,9.387,4.366,15.64h7.289c0.184-2.236,2.062-4,4.345-4S20.162,13.404,20.346,15.64z"/>
                          <rect id="_Transparent_Rectangle" style="fill:none;" width="6" height="6"/>
                          </svg>
                          <p>${car.transmission}</p>
                      </div>
                      <div class="cars_3_3">
                          <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24">
                          <path d="M.221 16.268a15.064 15.064 0 0 0 1.789 1.9C2.008 18.111 2 18.057 2 18a5.029 5.029 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.784A2.968 2.968 0 0 1 4 9a2.988 2.988 0 0 1 5.022-2.2 5.951 5.951 0 0 1 2.022-.715 4.994 4.994 0 1 0-7.913 6.085 7.07 7.07 0 0 0-2.91 4.098zM23.779 16.268a7.07 7.07 0 0 0-2.91-4.1 4.994 4.994 0 1 0-7.913-6.086 5.949 5.949 0 0 1 2.022.715 2.993 2.993 0 1 1 3.614 4.74 1 1 0 0 0 .175 1.784A5.029 5.029 0 0 1 22 18c0 .057-.008.111-.01.167a15.065 15.065 0 0 0 1.789-1.899z"/>
                          <path d="M18.954 20.284a7.051 7.051 0 0 0-3.085-5.114A4.956 4.956 0 0 0 17 12a5 5 0 1 0-8.869 3.17 7.051 7.051 0 0 0-3.085 5.114 14.923 14.923 0 0 0 1.968.849C7.012 21.088 7 21.046 7 21a5.031 5.031 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.785A2.964 2.964 0 0 1 9 12a3 3 0 1 1 6 0 2.964 2.964 0 0 1-1.408 2.537 1 1 0 0 0 .175 1.785A5.031 5.031 0 0 1 17 21c0 .046-.012.088-.013.133a14.919 14.919 0 0 0 1.967-.849z"/>
                          </svg>
                          <p>${car.capacity}</p>
                      </div>
                  </div>
                  <div class="cars_4">
                      <p>${car.price} / დღე</p>
                      <a href="">იქირავე</a>
                  </div>
              </div>
          </div>
            `;

        carContainer.appendChild(card)
    });
}

function createDetalCard(cars, containerId) {

  const carContainer = document.getElementById(containerId);

    cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('detals');
        card.innerHTML = `
        <div class="detals">
            <div class="detals_1">
                <div action="" class="carusel">
                    <button type="button" class="b1"><p><</p></button>
                    <div class="main">
                        <div class="car1">
                            <img src="./images/alexandros-athanasopoulos-GUFR1WsgCQQ-unsplash.jpg" alt="">
                        </div>
                        <div class="car2">
                            <img src="./images/bmw_csl_3_0_8k-HD.jpg" alt="">
                        </div>
                        <div class="car3">
                            <img src="./images/rolls-royce-phantom-series-ii-black-cars-black-background-3840x2160-8124.jpg" alt="">
                        </div>
                    </div>
                    <button type="button" class="b2"><p>></p></button>
                    <div class="allpic">
                        <button class="img_b1"><div class="img1 img">
                            <img src="./images/alexandros-athanasopoulos-GUFR1WsgCQQ-unsplash.jpg" alt="">
                        </div></button>
                        <button class="img_b2"><div class="img2 img">
                            <img src="./images/bmw_csl_3_0_8k-HD.jpg" alt="">
                        </div></button>
                        <button class="img_b3"><div class="img3 img">
                            <img src="./images/rolls-royce-phantom-series-ii-black-cars-black-background-3840x2160-8124.jpg" alt="">
                        </div></button>
                    </div>
                </div>
            </div>
            <div class="detals_2">
                <div class="detals_1_1">
                    <p>მარკა</p><span class="underline"></span><p>2000</p>
                </div>
                <div class="detals_1_2">
                    <p>მოდელი</p><span class="underline"></span><p>2000</p>
                </div>
                <div class="detals_2_1">
                    <p>გამოშვების წელი</p><span class="underline"></span><p>2000</p>
                </div>
                <div class="detals_2_2">
                    <p>საწვავის ავზის მოცულობა</p><span class="underline"></span><p>200</p>
                </div>
                <div class="detals_2_3">
                    <p>ტრანსმისია</p><span class="underline"></span><p>ავტომატიკა</p>
                </div>
                <div class="detals_2_4">
                    <p>ტევადობა</p><span class="underline"></span><p>3 კაცი</p>
                </div>
                <form action="">
                    <label for="range">რამდენი დღით გსურთ შეძენა?</label>
                    <div class="range_1">
                        <input class="days_range" type="range" name="range" id="range" min="1" max="30" value="1">
                        <span id="rangeValue">1</span><span> დღე</span>
                    </div>
                </form>
                <div class="detals_2_5">
                    <p>ფასი: <span id="price">0</span> ლარი</p>
                    <a href="">იქირავე</a>
                </div>
            </div>
        </div>
          `;

        const heart = card.querySelector('.fa-heart');
        if (heart) {
          heart.dataset.car = JSON.stringify(car);
        }

        carContainer.appendChild(card);
        Carousel(card);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
    const carData = await getcars()
    createCarCard(carData, 'random');

    const popularCarData = await getpopularcars()
    createCarCard(popularCarData, 'popular');
}) 

//-------------------------- Carousel ------------------------

document.addEventListener('DOMContentLoaded', () => {
  const left = document.querySelector('.b2');
  const right = document.querySelector('.b1');
  const image1 = document.querySelector('.car1');
  const img1 = document.querySelector('.img1');
  const img2 = document.querySelector('.img2');
  const img3 = document.querySelector('.img3');
  const imgbtn1 = document.querySelector('.img_b1');
  const imgbtn2 = document.querySelector('.img_b2');
  const imgbtn3 = document.querySelector('.img_b3');

  const arr = [1, 2, 3];
  let num = 0;

  function update() {
    [img1, img2, img3].forEach((img, i) => {
      if (i === num) {
        img.style.border = '2px solid green';
      }else {
        img.style.border = 'none';
      }
    });
  }

  update();

  imgbtn1.addEventListener('click', () => {
    image1.classList.remove('car2', 'car3');
    image1.classList.add('car1')
    img1.style.border = '2px solid green'
    img2.style.border = 'none'
    img3.style.border = 'none'
  });

  imgbtn2.addEventListener('click', () => {
    image1.classList.remove('car1', 'car3');
    image1.classList.add('car2')
    img1.style.border = 'none'
    img2.style.border = '2px solid green'
    img3.style.border = 'none'
  });

  imgbtn3.addEventListener('click', () => {
    image1.classList.remove('car1', 'car2');
    image1.classList.add('car3')
    img1.style.border = 'none'
    img2.style.border = 'none'
    img3.style.border = '2px solid green'
  });

  left.addEventListener('click', () => {
    image1.classList.remove('car1', 'car2', 'car3');
    num = (num + 1) % 3;
    image1.classList.add(`car${arr[num]}`);
    update();
  });

  right.addEventListener('click', () => {
    image1.classList.remove('car1', 'car2', 'car3');
    num = (num - 1 + 3) % 3;
    image1.classList.add(`car${arr[num]}`);
    update();
  });
});

//--------------------------- index carusel ------------------------

document.addEventListener('DOMContentLoaded', () => {
  const left = document.querySelector('.b21');
  const right = document.querySelector('.b11');
  const image1 = document.querySelector('.car1');
  const dot1 = document.querySelector('.dots1');
  const dot2 = document.querySelector('.dots2');
  const dot3 = document.querySelector('.dots3');

  const arr = [1, 2, 3];
  let num = 0;

  function update() {
    [dot1, dot2, dot3].forEach((dot, i) => {
      if (i === num) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  update();


  left.addEventListener('click', () => {
    image1.classList.remove('car1', 'car2', 'car3');
    num = (num + 1) % 3;
    image1.classList.add(`car${arr[num]}`);
    update();
  });

  right.addEventListener('click', () => {
    image1.classList.remove('car1', 'car2', 'car3');
    num = (num - 1 + 3) % 3;
    image1.classList.add(`car${arr[num]}`);
    update();
  });
});



//--------------------------- end carusel ------------------------

//--------------------------- burger menu ------------------------
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}



//---------------------------register user ------------------------

const registerForm = document.getElementById("registerForm");


registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formdata = new FormData(registerForm);

  const user = {
    'firstName': formdata.get('firstName'),
    'lastName': formdata.get('lastName'),
    'email': formdata.get('email'),
    'phoneNumber': formdata.get('phoneNumber'),
    'password': formdata.get('password')
  };

  const result = await registerUser(user);
  console.log(result);

  if (result && result.ok) {
    window.location.href = 'succes_reg.html';
    return;
  }
});




async function sendInfo(sendData){
    try {
        const response = await fetch('https://rentcar.stepprojects.ge/api/Users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(sendData)
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}





