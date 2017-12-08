          localStorage.setItem("Yerkebulan", "middleasia");
          localStorage.setItem("admin", "adminpassword");

          function check()
          {


               console.log(localStorage.key(1) + " " + localStorage.getItem(localStorage.key(1)))

                sessionStorage.clear();

              var user =document.getElementsByClassName("name")[0].value, password = document.getElementsByClassName("pass")[0].value;

               console.log(document.getElementsByClassName("name")[0].value + " " + document.getElementsByClassName("pass")[0].value);
              
              for (var i = 0; i < localStorage.length; i++){
    

    if(user == localStorage.key(i) && password  === localStorage.getItem(localStorage.key(i)))
                {
                    sessionStorage.setItem(user, password);
                      location.href = "main.html";
                                    return;
                }

                }
            
                 $('#exampleModal').modal('show');

    }

          function cler() {
            sessionStorage.clear();
            document.getElementById('loginform').style.visibility = 'visible';
                    document.getElementById('hid').style.visibility = 'hidden';

                    document.getElementById('result').innerHTML = "";

            // body...
          }
      