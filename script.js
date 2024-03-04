const navigation = document.getElementById('navBar');
const burgerBar = document.getElementById('burger');
const list = document.getElementById('nav-list')


burgerBar.addEventListener('click' ,function(){
navigation.classList.toggle('active')
burgerBar.classList.toggle('active')
list.classList.toggle('active')
});




let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


document.querySelector('#coockies-btn').addEventListener('click',() =>{
  document.querySelector('#coockie').style.display = 'none'
})
fetch("https://reqres.in/api/users?page=2" , {
    method: "GET",
  })
    .then(function (responsedata) {
      console.log(responsedata);
      if (!responsedata.ok) {
        throw responsedata.status;
      }
      return responsedata.json();
    })
    .then(function (responseInfoJs) {
      console.log(responseInfoJs);
      const fragment = document.createDocumentFragment();

      responseInfoJs.data.forEach(function (item) {
        let li = document.createElement("li");

        let pUserInfo = document.createElement("p");
        pUserInfo.textContent = `${item.first_name} ${item.last_name}`;

        let imgElement = document.createElement("img");
        imgElement.src = item.avatar;

        li.appendChild(pUserInfo);
        li.appendChild(imgElement);
        fragment.appendChild(li);
      });
      document.getElementById("list-users").innerHTML = " ";
      document.getElementById("list-users").appendChild(fragment);

      totalPages = responseInfoJs.total_pages;
    })
    .catch(function (error) {
        if (error === 404) {
          let pError = document.createElement("p");
          pError.textContent = "Server Error";
          document.getElementById("server-api").appendChild(pError);
        } else {
          console.log("Error Text");
        }
      });
      
     
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
