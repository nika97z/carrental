const header = document.querySelector(".reg_header");

function checkloggin() {
  const token = localStorage.getItem('token');

  if (token) {
    header.style.display = 'flex';
  } else {
    header.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', checkloggin);

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
    n = n + 1;
    if (n >= items.length) {
      n = 0;
    }
    items[n].classList.add("active");
  }, 2200);
}

//--------------------------- fetch car ------------------------

async function getcars(pageIndex = 1, pageSize = 12) {
   try {
    const response = await fetch(`https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=${pageIndex}&pageSize=${pageSize}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getpopularcars() {
  try{
    const responce = await fetch('https://rentcar.stepprojects.ge/api/Car/popular')
    const jsn = await responce.json()
    return jsn
  } catch (error){
    console.error(error)
  };
}



function Carousel(card) {
  const carousel = card.querySelector('.carusel1');
  if (!carousel) {
    return;
  }

  const left = carousel.querySelector('.b21');
  const right = carousel.querySelector('.b11');
  const image1 = carousel.querySelector('#car1');
  const image2 = carousel.querySelector('#car2');
  const image3 = carousel.querySelector('#car3');
  const dot1 = carousel.querySelector('.dots1');
  const dot2 = carousel.querySelector('.dots2');
  const dot3 = carousel.querySelector('.dots3');


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
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'none';
    num = (num + 1) % 3;
    if (num === 0) {
      image1.style.display = 'block';
    } else if (num === 1) {
      image2.style.display = 'block';
    } else if (num === 2) {
      image3.style.display = 'block';
    }
    update();
  });

  right.addEventListener('click', () => {
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'none';
    num = (num - 1 + 3) % 3;
    if (num === 0) {
      image1.style.display = 'block';
    } else if (num === 1) {
      image2.style.display = 'block';
    } else if (num === 2) {
      image3.style.display = 'block';
    }
    update();
  });
}

function initDetailCarousel(card) {
  const left = card.querySelector('.b2');
  const right = card.querySelector('.b1');
  const image1 = card.querySelector('.car1');
  const image2 = card.querySelector('.car2');
  const image3 = card.querySelector('.car3');
  const img1 = card.querySelector('.img1');
  const img2 = card.querySelector('.img2');
  const img3 = card.querySelector('.img3');
  const imgbtn1 = card.querySelector('.img_b1');
  const imgbtn2 = card.querySelector('.img_b2');
  const imgbtn3 = card.querySelector('.img_b3');



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
    image1.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
    num = 0;
    img1.style.border = '2px solid green'
    img2.style.border = 'none'
    img3.style.border = 'none'
  });

  imgbtn2.addEventListener('click', () => {
    image1.style.display = 'none';
    image2.style.display = 'block';
    image3.style.display = 'none';
    num = 1;
    img1.style.border = 'none'
    img2.style.border = '2px solid green'
    img3.style.border = 'none'
  });

  imgbtn3.addEventListener('click', () => {
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'block';
    num = 2;
    img1.style.border = 'none'
    img2.style.border = 'none'
    img3.style.border = '2px solid green'
  });

  left.addEventListener('click', () => {
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'none';
    num = (num + 1) % 3;
    if (num === 0) {
      image1.style.display = 'block';
    } else if (num === 1) {
      image2.style.display = 'block';
    } else if (num === 2) {
      image3.style.display = 'block';
    }
    update();
  });

  right.addEventListener('click', () => {
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'none';
    num = (num - 1 + 3) % 3;
    if (num === 0) {
      image1.style.display = 'block';
    } else if (num === 1) {
      image2.style.display = 'block';
    } else if (num === 2) {
      image3.style.display = 'block';
    }
    update();
  });
}


function createCarCard(cars, containerId) {

  const carContainer = document.getElementById(containerId);

  if (!carContainer || !Array.isArray(cars) || cars.length === 0) {
    return;
  }

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
                    <i class="fa-solid fa-heart" ></i>
                </div>
                <div class="cars_2">
                      <div class="detals_1">
                          <div action="" class="carusel1">
                              <button type="button" class="b11"><p><</p></button>
                              <div class="main1">
                                  <div class="car1" id="car1">
                                      <img src="${car.imageUrl1}" alt="">
                                  </div>
                                  <div class="car2" id="car2">
                                      <img src="${car.imageUrl2}" alt="">
                                  </div>
                                  <div class="car3" id="car3">
                                      <img src="${car.imageUrl3}" alt="">
                                  </div>
                              </div>
                              <button type="button" class="b21"><p>></p></button>
                              <div class="dots">
                                  <div class="dots1"></div>
                                  <div class="dots2"></div>
                                  <div class="dots3"></div>
                              </div>
                          </div>
                      </div>
                  </div>
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
                    <button class="details-button" data-car-id="${car.id}"><a href="">იქირავე</a></button>
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
//--------------------------- ნაქირავები მანქანები  ------------------------
function createRentedCars(cars) {
  const rentedCont = document.getElementById('rented');
  if (!rentedCont || !Array.isArray(cars) || cars.length === 0) {
    return;
  }
  cars.forEach(purchase => {
    const card = document.createElement('div');
    card.classList.add('rented1');
    card.innerHTML = `
      <div class="rentedcar1">
          <p class="model">${purchase.carBrand}</p><span class="underline"></span><p class="marc">${purchase.carModel}</p>
      </div>
      <div class="rentedcar2">
          <p>ქალაქი</p><span class="underline"></span><p class="city">${purchase.city}</p>
      </div>
      <div class="rentedcar3">
          <p>დღით</p><span class="underline"></span><p class="days">${purchase.multiplier}</p>
      </div>
      <div class="rentedcar4">
          <p>გადახდილია</p><span class="underline"></span><p class="price">${purchase.pricePaid} ლარი</p>
      </div>
    `;
    rentedCont.appendChild(card);
  });
}

async function getRentedCar(usernumber) {
  try {
    const response = await fetch(`https://rentcar.stepprojects.ge/Purchase/${usernumber}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const rentedData = await getRentedCar(localStorage.getItem('phoneNumber'));
  console.log('Rented cars data:', rentedData);
  createRentedCars(rentedData);
});


//--------------------------- დეტალები  ------------------------
function createDetalCard(car) {
  const carContainer = document.getElementById('main_detals');

  if (!carContainer || !car) {
    return;
  }

  const card = document.createElement('div');
  card.classList.add('detals');
  card.innerHTML = `
          <div class="detals_1">
              <div action="" class="carusel">
                  <button type="button" class="b1"><p><</p></button>
                  <div class="main">
                      <div class="car1">
                          <img src="${car.imageUrl1}" alt="">
                      </div>
                      <div class="car2">
                          <img src="${car.imageUrl2}" alt="">
                      </div>
                      <div class="car3">
                          <img src="${car.imageUrl3}" alt="">
                      </div>
                  </div>
                  <button type="button" class="b2"><p>></p></button>
                  <div class="allpic">
                      <button class="img_b1"><div class="img1 img">
                          <img src="${car.imageUrl1}" alt="">
                      </div></button>
                      <button class="img_b2"><div class="img2 img">
                          <img src="${car.imageUrl2}" alt="">
                      </div></button>
                      <button class="img_b3"><div class="img3 img">
                          <img src="${car.imageUrl3}" alt="">
                      </div></button>
                  </div>
              </div>
          </div>
          <div class="detals_2">
              <div class="detals_1_1">
                  <p>მარკა</p><span class="underline"></span><p>${car.brand}</p>
              </div>
              <div class="detals_1_2">
                  <p>მოდელი</p><span class="underline"></span><p>${car.model}</p>
              </div>
              <div class="detals_2_1">
                  <p>გამოშვების წელი</p><span class="underline"></span><p>${car.year}</p>
              </div>
              <div class="detals_2_2">
                  <p>საწვავის ავზის მოცულობა</p><span class="underline"></span><p>${car.fuelCapacity}</p>
              </div>
              <div class="detals_2_3">
                  <p>ტრანსმისია</p><span class="underline"></span><p>${car.transmission}</p>
              </div>
              <div class="detals_2_4">
                  <p>ტევადობა</p><span class="underline"></span><p>${car.capacity} კაცი</p>
              </div>
              <form action="">
                  <label for="range">რამდენი დღით გსურთ შეძენა?</label>
                  <div class="range_1">
                      <input class="days_range" type="range" name="range" id="range" min="1" max="30" value="1">
                      <span id="rangeValue">1</span><span> დღე</span>
                  </div>
              </form>
              <div class="detals_2_5">
                  <p>ფასი: <span id="price">${car.price}</span> ლარი</p>
                  <button class="rent-button" id="rent_id"><a href="">იქირავე</a></button>
              </div>
          </div>
        `;

    carContainer.appendChild(card);

  const slider = card.querySelector('.days_range');
  const valueLabel = card.querySelector('#rangeValue');
  const priceLabel = card.querySelector('#price');
  if (slider && valueLabel && priceLabel) {
    valueLabel.textContent = slider.value;
    slider.addEventListener('input', () => {
      valueLabel.textContent = slider.value;
      priceLabel.textContent = car.price * slider.value;
    });
  }

  initDetailCarousel(card);
}

async function getPurchsedCrs(phoneNumber, carId, multiplier){
  try{
    const responce = await fetch(`https://rentcar.stepprojects.ge/Purchase/purchase?phoneNumber=${phoneNumber}&carId=${carId}&multiplier=${multiplier}`, {
      method: 'POST',
    });
  }catch(error){
    console.error(error)
  }
}

document.addEventListener('click', (event) => {
  const rentButton = event.target.closest('#rent_id');
  if (!rentButton) {
    return;
  }

  event.preventDefault();
  const phoneNumber = localStorage.getItem('phoneNumber');
  const carId = localStorage.getItem('selectedCarId');
  const multiplierElement = document.getElementById('rangeValue');
  const multiplier = multiplierElement ? multiplierElement.textContent : '1';

  getPurchsedCrs(phoneNumber, carId, multiplier);
  console.log(localStorage.getItem('carCreatedBy'))
  getmassage(localStorage.getItem('carCreatedBy'), carId);
  window.location.href = 'succes_rent.html';

});


const mainPagination = document.getElementById('mainPagination');
let mainCurrentPage = 1;
const mainPageSize = 12;

function setMainPaginationState() {
  if (!mainPagination) {
    return;
  }

  mainPagination.style.display = 'flex';
  mainPagination.innerHTML = '';

  const prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.textContent = '<';
  prevBtn.classList.add('main_page_btn');
  prevBtn.disabled = mainCurrentPage === 1;
  prevBtn.addEventListener('click', async () => {
    if (mainCurrentPage === 1) return;
    mainCurrentPage -= 1;
    await renderMainCarsPage();
  });
  mainPagination.appendChild(prevBtn);

  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = i;
    btn.classList.add('main_page_btn');
    if (i === mainCurrentPage) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', async () => {
      mainCurrentPage = i;
      await renderMainCarsPage();
    });
    mainPagination.appendChild(btn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.textContent = '>';
  nextBtn.classList.add('main_page_btn');
  nextBtn.addEventListener('click', async () => {
    mainCurrentPage += 1;
    await renderMainCarsPage();
  });
  mainPagination.appendChild(nextBtn);
}

async function renderMainCarsPage() {
  const randomCarsContainer = document.getElementById('random');
  if (!randomCarsContainer) {
    return;
  }

  const carData = await getcars(mainCurrentPage, mainPageSize);
  const cars = carData.data;

  if (cars.length === 0 && mainCurrentPage > 1) {
    mainCurrentPage -= 1;
    setMainPaginationState();
    return;
  }

  randomCarsContainer.innerHTML = '';
  createCarCard(cars, 'random');
  setMainPaginationState();
}

document.addEventListener('DOMContentLoaded', async () => {
    await renderMainCarsPage();

    const popularCarData = await getpopularcars();
    createCarCard(popularCarData, 'popular');
}) 

//--------------------------- ქირაობის ღილაკი  ------------------------

document.addEventListener('click', async (event) => {
  const btn = event.target.closest('.details-button');
  if (!btn) {
    return;
  }

  event.preventDefault();
  const userPhone = localStorage.getItem('phoneNumber');
  const createdby = await getCaryId(btn.dataset.carId);
  const createdBy = createdby.createdBy;
  localStorage.setItem('carCreatedBy', createdBy);
  console.log(localStorage.getItem('carCreatedBy'))
  if (userPhone) {
    const carId = btn.dataset.carId;
    localStorage.setItem('selectedCarId', carId);
    
    window.location.href = './detals.html';
  } else {
    window.location.href = './login.html';
  }
});


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

if (registerForm) {
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

    const result = await sendInfo(user);
   
    if (result.ok) {
      window.location.href = 'succes_reg.html';
    }
  });
}




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
        let data = null;
        
        data = await response.json();


        return {
          ok: response.ok,
          status: response.status,
          data
        };
    } catch (error) {
        console.error(error);
        return {
          ok: false,
          status: 0,
          data: null,
          error: error.message
        };
    }
}
//--------------------------- login user ------------------------

async function GetUser(data) {
  try{
    const response = await fetch('https://rentcar.stepprojects.ge/api/Users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    let result = null;
    try {
      result = await response.json();
    } catch (_) {
      result = null;
    }

    return {
      ok: response.ok,
      status: response.status,
      data: result
    };
  }catch(error){
    console.error(error);
    return {
      ok: false,
      status: 0,
      data: null,
      error: error.message
    };
  }
}



const Login = document.getElementById('sign-in')

if (Login) {
  Login.addEventListener('submit', async (event) => {
    event.preventDefault();

    const signform = new FormData(Login);

    const boj = {
      phoneNumber: signform.get('tel'),
      password: signform.get('password')
    };

    const loginResult = await GetUser(boj);

    localStorage.setItem('token', loginResult.data.token);
    localStorage.setItem('phoneNumber', loginResult.data.phoneNumber);
    localStorage.setItem('firstName', loginResult.data.firstName);
    localStorage.setItem('lastName', loginResult.data.lastName);
    localStorage.setItem('email', loginResult.data.email);
    if (loginResult.ok) {
      window.location.href = 'index.html';
    }

    if (loginResult.ok) {
      console.log('Login successful:', loginResult.data);
    } else {
      console.log('Login failed:', loginResult.status, loginResult.data ?? loginResult.error);
    }
  });
}

//--------------------------- logout ------------------------

const logoutBtns = document.querySelectorAll('.regi a');

logoutBtns.forEach((logoutBtn) => {
  logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('phoneNumber');
    checkloggin();
    window.location.href = 'index.html';
  });
});

//----------------------------user page----------------------------

document.addEventListener('DOMContentLoaded', async () => {
    const name = localStorage.getItem('firstName');
    const surname = localStorage.getItem('lastName');
    console.log(name, surname);
    console.log(localStorage);
    const userInfo = document.createElement('div');
    userInfo.classList.add('user_1_info');
    userInfo.innerHTML = `
        <p>${name}</p>
        <p>${surname}</p>
    `;
    const user1 = document.querySelector('.user_1');
    if (user1) {
        user1.appendChild(userInfo);
    }
});

//  favorite car


async function favCars(carId, user) {
  try {
    const response = await fetch(`https://rentcar.stepprojects.ge/api/Users/${user}/favorites/${carId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(error);
  }
}


document.addEventListener('click', async (event) => {
  const fav = event.target.closest('.fa-heart');

  if (!fav) {
    return;
  }

  let selectedCar = null;

  selectedCar = JSON.parse(fav.dataset.car || 'null');

  if (!selectedCar || !selectedCar.id) {
    return;
  }

  const userPhone = localStorage.getItem('phoneNumber');

  fav.style.color = fav.style.color === 'red' ? 'rgb(105, 105, 105)' : 'red';
  console.log('Selected car:', selectedCar);

  const favoriteResult = await favCars(selectedCar.id, userPhone);



});

async function getFavCars(user) {
  try{
    const responce = await fetch(`https://rentcar.stepprojects.ge/api/Users/${user}/favorite-cars`)
    const data = await responce.json()
    console.log(data);
    return data;
  }catch(error){
    console.error(error)
  }
}

async function getUserCar(user) {
  try{
    const responce = await fetch(`https://rentcar.stepprojects.ge/api/Car/byPhone?PhoneNumber=${user}`)
    const data = await responce.json()
    console.log(data);
    return data;
  }catch(error){
    console.error(error)
  }
}

async function getCaryId(id) {
  try{
    const responce = await fetch(`https://rentcar.stepprojects.ge/api/Car/${id}`)
    const data = await responce.json()
    console.log(data);
    return data;
  }catch(error){
    console.error(error)
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const userPhone = localStorage.getItem('phoneNumber');
  const favoriteCars = await getFavCars(userPhone);
  const userCars = await getUserCar(userPhone);

  createCarCard(favoriteCars, 'likedcars');
  createCarCard(userCars, 'usercars');

  const selectedCarId = localStorage.getItem('selectedCarId');
  if (selectedCarId && document.getElementById('main_detals')) {
    const carById = await getCaryId(selectedCarId);
    createDetalCard(carById);
  }
});

function initCustomSelects() {
  const customSelects = document.querySelectorAll('.custom-select[data-select-id]');

  if (customSelects.length === 0) {
    return;
  }

  function closeAllCustomSelects(exceptSelect = null) {
    customSelects.forEach((selectRoot) => {
      if (selectRoot !== exceptSelect) {
        selectRoot.classList.remove('open');

        const button = selectRoot.querySelector('.custom-select-button');
        if (button) {
          button.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  customSelects.forEach((selectRoot) => {
    const nativeSelectId = selectRoot.dataset.selectId;
    const nativeSelect = document.getElementById(nativeSelectId);
    const button = selectRoot.querySelector('.custom-select-button');
    const options = Array.from(selectRoot.querySelectorAll('.custom-select-options li'));
    const placeholderText = button ? button.textContent.trim() : '';

    if (!nativeSelect || !button || options.length === 0) {
      return;
    }

    function syncCustomSelect(selectedValue) {
      const selectedOption = options.find((option) => option.dataset.value === selectedValue);

      options.forEach((option) => {
        const isActive = option === selectedOption;
        option.classList.toggle('active', isActive);
        option.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      if (selectedOption) {
        button.textContent = selectedOption.textContent;
        nativeSelect.value = selectedOption.dataset.value;
      } else {
        button.textContent = placeholderText;
        nativeSelect.value = '';
      }
    }

    syncCustomSelect(nativeSelect.value);

    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !selectRoot.classList.contains('open');
      closeAllCustomSelects(selectRoot);
      selectRoot.classList.toggle('open', willOpen);
      button.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });

    options.forEach((option) => {
      option.addEventListener('click', (event) => {
        event.stopPropagation();
        syncCustomSelect(option.dataset.value);
        selectRoot.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      });

      option.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          syncCustomSelect(option.dataset.value);
          selectRoot.classList.remove('open');
          button.setAttribute('aria-expanded', 'false');
          button.focus();
        }
      });
    });
  });

  document.addEventListener('click', () => {
    closeAllCustomSelects();
  });
}
document.addEventListener('DOMContentLoaded', initCustomSelects);


const addCar = document.getElementById("addCarForm");

if (addCar) {
  addCar.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formdata = new FormData(addCar);


    const car = {
      'brand': formdata.get('brand'),
      'model': formdata.get('model'),
      'year': formdata.get('year'),
      'image1': formdata.get('image1'),
      'image2': formdata.get('image2'),
      'image3': formdata.get('image3'),
      'imageUrl1': formdata.get('imageUrl1'),
      'imageUrl2': formdata.get('imageUrl2'),
      'imageUrl3': formdata.get('imageUrl3'),
      'price': formdata.get('price'),
      'capacity': formdata.get('capacity'),
      'transmission': formdata.get('transmission'),
      'fuelCapacity': formdata.get('fuelCapacity'),
      'city': formdata.get('city'),
      'createdBy': localStorage.getItem('phoneNumber'),
    };

    formdata.set('createdBy', car.createdBy || '');
    formdata.set('imageUrl1', car.imageUrl1 || '');
    formdata.set('imageUrl2', car.imageUrl2 || '');
    formdata.set('imageUrl3', car.imageUrl3 || '');


    
    console.log(car);

    const result = await addcarform(formdata);
   
    if (result.ok) {
      window.location.href = 'succes_add.html';
    }
  });
}

async function getmassage(user, id) {
  try{
    const responce = await fetch(`https://rentcar.stepprojects.ge/Message/Message?phoneNumber=${user}&CarId=${id}`, {
      method: 'POST'
    })
  }catch(error){
    console.error(error)
  }
}

getmassage('123332123', '7821');


async function addcarform(sendData){
    try {
        const response = await fetch('https://rentcar.stepprojects.ge/api/Car', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: sendData
        });
        let data = null;
        
        data = await response.json();
        console.log(data);

        return {
          ok: response.ok,
          status: response.status,
          data
        };
    } catch (error) {
        console.error(error);
    }
}

//--------------------------- filter ------------------------

async function filter(city, endYear, startYear, capacity, pageIndex = 1, pageSize = 12) {
  try{
    const response = await fetch(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${capacity}&startYear=${startYear}&endYear=${endYear}&city=${city}&pageIndex=${pageIndex}&pageSize=${pageSize}`);
    const data = await response.json();
    console.log(data);
    return data;
  }catch(error){
    console.error(error);
  }
}

const filterBtn = document.getElementById('filterButton');
const filterPagination = document.getElementById('filterPagination');

let filterCurrentPage = 1;
const filterPageSize = 12;
let lastFilterPayload = null;
let filterTotalPages = 0;

function hasSelectedFilter(payload) {
  if (!payload) {
    return false;
  }

  return Boolean(
    payload.city?.trim() ||
    payload.startYear?.toString().trim() ||
    payload.endYear?.toString().trim() ||
    payload.capacity?.toString().trim()
  );
}

function setFilterPaginationState() {
  if (!filterPagination) {
    return;
  }

  if (filterTotalPages <= 1) {
    filterPagination.style.display = 'none';
    filterPagination.innerHTML = '';
    return;
  }

  filterPagination.style.display = 'flex';
  filterPagination.innerHTML = '';

  const prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.textContent = '<';
  prevBtn.classList.add('filter_page_btn');
  prevBtn.disabled = filterCurrentPage === 1;
  prevBtn.addEventListener('click', async () => {
    if (filterCurrentPage === 1) return;
    filterCurrentPage -= 1;
    await renderFilteredCarsPage();
  });
  filterPagination.appendChild(prevBtn);

  const maxVisiblePages = 5;
  let startPage = Math.max(1, filterCurrentPage - 2);
  let endPage = Math.min(filterTotalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = i;
    btn.classList.add('filter_page_btn');
    if (i === filterCurrentPage) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', async () => {
      filterCurrentPage = i;
      await renderFilteredCarsPage();
    });
    filterPagination.appendChild(btn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.textContent = '>';
  nextBtn.classList.add('filter_page_btn');
  nextBtn.disabled = filterCurrentPage >= filterTotalPages;
  nextBtn.addEventListener('click', async () => {
    if (filterCurrentPage >= filterTotalPages) return;
    filterCurrentPage += 1;
    await renderFilteredCarsPage();
  });
  filterPagination.appendChild(nextBtn);
}

async function renderFilteredCarsPage() {
  if (!lastFilterPayload) {
    return;
  }

  const selectedFilter = hasSelectedFilter(lastFilterPayload);
  const filteredData = selectedFilter
    ? await filter(
      lastFilterPayload.city,
      lastFilterPayload.endYear,
      lastFilterPayload.startYear,
      lastFilterPayload.capacity,
      filterCurrentPage,
      filterPageSize
    )
    : await getcars(filterCurrentPage, filterPageSize);

  if (!filteredData || !Array.isArray(filteredData.data)) {
    filterTotalPages = 0;
    setFilterPaginationState();
    return;
  }

  const filteredCars = filteredData.data;
  const totalItems = Number(
    filteredData.totalCount ??
    filteredData.totalItems ??
    filteredData.count ??
    filteredData.itemsCount ??
    filteredCars.length
  );

  filterTotalPages = totalItems > 0 ? Math.ceil(totalItems / filterPageSize) : 0;

  if (filterTotalPages > 0 && filterCurrentPage > filterTotalPages) {
    filterCurrentPage = filterTotalPages;
    await renderFilteredCarsPage();
    return;
  }

  if (filteredCars.length === 0 && filterCurrentPage > 1) {
    filterCurrentPage -= 1;
    await renderFilteredCarsPage();
    return;
  }

  const filteredCarsContainer = document.getElementById('filterdCars');
  if (filteredCarsContainer) {
    filteredCarsContainer.innerHTML = '';
  }

  if (filteredCars.length > 0) {
    createCarCard(filteredCars, 'filterdCars');
  }

  setFilterPaginationState();
}

if (filterBtn) {
  const applyFilterFromInputs = async () => {
    const cityInput = document.getElementById('city-input');
    const startYearInput = document.getElementById('startYear-input');
    const endYearInput = document.getElementById('endYear-input');
    const capacityInput = document.getElementById('capacity-input');

    const city = cityInput.value;
    const startYear = startYearInput.value;
    const endYear = endYearInput.value;
    const capacity = capacityInput.value;

    lastFilterPayload = {
      city,
      startYear,
      endYear,
      capacity
    };

    filterCurrentPage = 1;
    await renderFilteredCarsPage();
  };

  filterBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    await applyFilterFromInputs();
  });

  applyFilterFromInputs();

}

const main = document.getElementById('crChatPanel');
const icon = document.getElementById('crChatLauncher');
const fold = document.getElementById('crChatClose');
const form = document.getElementById('crChatForm');
const input = document.getElementById('crChatInput');
const content = document.getElementById('crChatContent');

if (main && icon && fold && form && input && content) {
  fold.addEventListener("click", () => {
      main.style.display = "none";
      icon.classList.remove('launcher-hidden');
  });

  icon.addEventListener("click", () => {
      icon.classList.add('launcher-hidden');
      main.style.display = "block";
      void main.offsetWidth;
      main.classList.add('is-opening');
      setTimeout(() => input.focus(), 300);
  });

  const scrollToBottom = () => {
      requestAnimationFrame(() => {
          content.scrollTop = content.scrollHeight;
      });
  };

  form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const text = input.value.trim();
      if (!text) return;

      const userMsg = document.createElement("div");
      userMsg.className = "cr-chat__message cr-chat__message--user";

      const rawHTML = typeof marked !== 'undefined' ? marked.parse(text) : text;
      const cleanHTML = typeof DOMPurify !== 'undefined' ? DOMPurify.sanitize(rawHTML) : rawHTML;
      userMsg.innerHTML = cleanHTML;
      content.appendChild(userMsg);

      input.value = "";
      scrollToBottom();

      const botMsg = document.createElement("div");
      botMsg.className = "cr-chat__message cr-chat__message--bot";
      botMsg.textContent = "ჩვენი ოპერატორი მალე გიპასუხებთ...";
      content.appendChild(botMsg);
      scrollToBottom();

      scrollToBottom();
  });
}




const notific = document.querySelector('.notification');
const notdiv = document.querySelector(".notificatindiv");

if (notific && notdiv) {
  notific.addEventListener('click', (event) => {
    event.stopPropagation();
    notdiv.style.display = notdiv.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', () => {
    notdiv.style.display = 'none';
  });
}

