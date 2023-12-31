/* .js files add interaction to your website */

/* about page */
var factList = ["Physical assaults on the AAPI community increased from 10.2% of the total hate incidents in 2020 to 16.7% in 2021.", "Report: My mother was ordering food at a [restaurant] when a man tried to hit her in the face. She was able to avoid him, but he yelled a bunch of slurs — “Go back to China!” and “Corona!” — at her before he ran out. (Northridge, CA)", "There is a large gradient of ethnic groups in the AAPI community. Burmese American households are the lowest-earning group, with a median household income of $46,000 a year, far below the national average.", "Asian Americans are underrepresented in government positions of power, holding about 3% of these positions in comparison with composing 7% of the U.S. population, making them the lowest represented group in the United States.", "Report: I was at the park with a friend and our young children. A large man was jogging by,lunged off the path toward me and yelled “F****** ch***!” in my face before jogging away. We were with our children and too scared to confront him, but he appeared unashamed as he jogged by again. (Riverside, CA)", "Asian Americans have a low usage of mental health services due to the model minority myth’s erasure of mental health issues.", "In the California Supreme Court Decision People v. Hall, Chinese witnesses were barred from testifying against white witnesses, further contributing to the rise of crimes against Chinese residents in the 19th century.", "The AAPI community isn't a single monolithic group. Instead, it contains East Asian, South Asian, Southeast Asian, and Pacific Islander communities that trace back their heritage to different places."];

var factBtn = document.getElementById("factBtn");
var fact = document.getElementById("fact");
var count = 0;

if(factBtn){
  factBtn.addEventListener("click", displayFact, false);
}

/* says there is a type error */
/* factBtn.addEventListener('click', displayFact); */

function displayFact() {
  fact.innerHTML = factList[count];
  incrementCount();
}

function incrementCount() {
  if (count == factList.length - 1) {
    count = 0;
  } else {
    count++;
  }
}

/* take action page */

var resources = document.getElementById("resources");
var userEnterBtn = document.getElementById("userEnterBtn");
var userType = "";

if(userEnterBtn){
  userEnterBtn.addEventListener("click", displayResources, false);
}

/* userEnterBtn.addEventListener('click', displayResources); */

function displayResources() {
  userType = document.getElementById("userType").value
  if (userType == "educator") {
    resources.innerHTML = "Educator Guide: https://stopaapihate.org/discussing-racism-educators-guide/";
  } else if (userType == "AAPI") {
    resources.innerHTML = "AAPI Resources: https://drive.google.com/drive/folders/1gCA7CcJopcGowplpFChnWnvNc-tsxu_j";
  } else if (userType == "young person") {
    resources.innerHTML = "Youth Resources: https://stopaapihate.org/resources/";
  } else {
    resources.innerHTML = "Thank you for being an ally!";
  }
}