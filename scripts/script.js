var eventId;
var eventInfo;
var userId = '';
function register(id) {
  eventId = id;
}
function spRedirect(id) {
  $.getJSON("db/eventdb.json",function(data) {
    path = String(data[id].spPath);
    window.open(path);
  });
}
function showEventDetail(id) {
  $('#regBtnBox').hide();
  $('#NavigBr').hide();
  $('#eventDetailBox').fadeIn(200);
  $.getJSON("db/eventdb.json",function(data) {
    eventInfo = data;
    // id = String(id);
    $('#infoTable').show();
    $('#eventTitle').html(data[id].name);
    if(data[id].onlineReg=="true") {
      $('#reg').show();
      $('#regBtnBox').show();
      $('#regBtnBox').css({'display':'flex','justify-content':'center'});
      $('#reg').attr('onclick','register('+ id +')');
      $('#onlineReg').html("Available");
    } else {
      $('#regBtnBox').show().html("Event held on " + data[id].date);
      $('#reg').hide();
      $('#onlineReg').html("Not Available");
    }
    $('#eventInfo').html(data[id].detail);
    $('#rules').html(data[id].rules);
    $('#partType').html(data[id].partType + " Event");
    $('#fee').html(data[id].regFee  + " &#8377; ");
    $('#prize').html(data[id].prize);
    $('#schedule').html(data[id].time + " , " + data[id].date);
    $('#venue').html(data[id].venue);
    $('#contact').html(data[id].coName + " <br> " + data[id].coContact + " <a id='call' href='tel:"+data[id].coContact+"'> <button class='btn btn-primary'> Call </button> </a> <br><br>");
    $('.loadingIcon').hide();
  });

}

$(document).ready(function(){
  // PageLoaded
  $('a').click(function () {
    $(window).off('beforeunload');
  });
  AOS.init();
  $('.carousel').carousel({
    interval: 6000,
    pause: false,
    keyboard: true
  });
  $.getJSON("db/eventIndex.json",function(data) {
    console.log(data);
    $.each(data, function(key,value) {
      eventName = value.name;
      eventName = eventName.toUpperCase();
      if (value.department == 'CSE') {
        var eventList = '';
        if (value.sp) {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="spRedirect('+value.id+')">';
        } else {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="showEventDetail('+value.id+')">';
        }
        eventList += '<div class="eventBoxTitle">';
        eventList += eventName;
        eventList += '<p>';
        eventList += value.department;
        eventList += '</p> </div> </div>';
        $('#abhyudaya').append(eventList);
      } else if(value.department == 'ECE') {
        var eventList = '';
        if (value.sp) {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="spRedirect('+value.id+')">';
        } else {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="showEventDetail('+value.id+')">';
        }
        eventList += '<div class="eventBoxTitle">';
        eventList += eventName;
        eventList += '<p>';
        eventList += value.department;
        eventList += '</p> </div> </div>';
        $('#ezigen').append(eventList);
      } else if(value.department == 'EEE') {
        var eventList = '';
        if (value.sp) {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="spRedirect('+value.id+')">';
        } else {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="showEventDetail('+value.id+')">';
        }
        eventList += '<div class="eventBoxTitle">';
        eventList += eventName;
        eventList += '<p>';
        eventList += value.department;
        eventList += '</p> </div> </div>';
        $('#amps19').append(eventList);
      } else if(value.department == 'ME') {
        var eventList = '';
        if (value.sp) {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="spRedirect('+value.id+')">';
        } else {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="showEventDetail('+value.id+')">';
        }
        eventList += '<div class="eventBoxTitle">';
        eventList += eventName;
        eventList += '<p>';
        eventList += value.department;
        eventList += '</p> </div> </div>';
        $('#avega').append(eventList);
      } else if(value.department == 'CE') {
        var eventList = '';
        if (value.sp) {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="spRedirect('+value.id+')">';
        } else {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="showEventDetail('+value.id+')">';
        }
        eventList += '<div class="eventBoxTitle">';
        eventList += eventName;
        eventList += '<p>';
        eventList += value.department;
        eventList += '</p> </div> </div>';
        $('#ventura').append(eventList);
      } else if(value.department == 'BTE') {
        var eventList = '';
        if (value.sp) {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="spRedirect('+value.id+')">';
        } else {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="showEventDetail('+value.id+')">';
        }
        eventList += '<div class="eventBoxTitle">';
        eventList += eventName;
        eventList += '<p>';
        eventList += value.department;
        eventList += '</p> </div> </div>';
        $('#prometheus').append(eventList);
      } else if(value.combined) {
        var eventList = '';
        if (value.sp) {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="spRedirect('+value.id+')">';
        } else {
          eventList += '<div class="eventBox" style="background:url('+ value.bgurl +');background-position:center;background-size:cover;" onclick="showEventDetail('+value.id+')">';
        }
        eventList += '<div class="eventBoxTitle">';
        eventList += eventName;
        eventList += '<p>';
        eventList += value.department;
        eventList += '</p> </div> </div>';
        $('#combinedEvents').append(eventList);
      }

    });
  });

  $('#readAboutMore').click(function() {
    $('.aboutText').fadeIn(200).append(" <br> RUDRA 2K19 brings you an cornucopia of versatile events, santillating array of swashbucking perfomances. Engineering knowledge and imagination combines to manifest in the technically challenging and creative competitions ranging from the fun to the serious academic oriented ones if you are looking for tech frenzy games and out of the world entertainment,here is a heady medley of revelry and education,fuelled by our seamless passion: <br>'THE SPRINT OF ENGINEERS'");
    $('#readAboutMore').hide();
  });


  // $(".hWindows").mousewheel(function(evt, chg) {
  //    this.scrollLeft -= (chg * 50); //need a value to speed up the change
  //    $('.hWindows').scrollLeft(chg * 50);
  //    evt.preventDefault();
  //
  //    console.log(chg * 50);
  // });

  var db = firebase.firestore(); //Database Connection

  //RegedEvent Strt
  function showRegedEvents() {
    $('#regedEvents').fadeIn(200);
    $('.window').hide();
    //RegedEvents Uploading details...
    $('#regedId').html(profile['regId']);
    $('#regedName').html(profile['name']);
    var docRef = db.collection("events").doc(profile['uid']);
    docRef.get().then(function(doc) {
        if (doc.exists) {
          regedEventsReciever = doc.data();
          console.log(regedEventsReciever);
          $('#RegedItems').html('<tr><th>Events</th><th>Time</th><th>Date</th></tr>');
          $.each(regedEventsReciever, function(k, v) {
              $.getJSON("db/eventdb.json",function(data) {
                qry = '<tr><td>' + data[v].name + '</td>' +
                '<td>' + data[v].time + '</td>' +
                '<td>' + data[v].date + '</td></tr>';
                $('#RegedItems').append(qry);
              }).catch(function (error) {
                Swal.fire({
                  position: 'center',
                  type: 'error',
                  title: 'Connection Failed',
                  showConfirmButton: false,
                  timer: 1500
                }).then(function() {
                  location.reload();
                });
                console.log(error);
              });
          });
        } else {
            // doc.data() will be undefined in this case
            $('#RegedItems').html('<tr><th>Events</th><th>Time</th><th>Date</th></tr><tr><td colspan="4" style="text-align:center"> Registered events will show here. </td></tr>');
            console.log("No events registered yet!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
        Swal.fire({
          title: "Can't connect to server",
          text: "Connection to server failed, please refresh page",
          type: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#242424',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Refresh'
        }).then((result) => {
          location.reload();
        });
    });
  } // showRegedEvents() ends
  $('#regedCloseBtn').click(function() {
    window.scrollTo(0,0);
    $('.window').show();
    $('#regedEvents').fadeOut(200);
  });
  //RegedEvent End

  //hide all
  function hideExecptWindows() {
    $('#eventDetailBox').hide();
    $('#regedEvents').hide();
    $('#profileBox').hide();
    $('#eventsPage').hide();
  }

  //MenuBox
  $("#menubox").click(function() {
    $('#menu').fadeIn(200);
    $('.window').hide();
  });
  $("#menuClose").click(function() {
    menuCloseFn();
  });
  //Menu barmenuClose
  $('.menuProfile').click(function() {
    if(userStatus['login'] == 1) {
      hideExecptWindows();
      menuCloseFn();
      showProfile();
    } else if(userStatus['login'] == 0){
      Swal.fire({
        title: 'Login Required',
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#242424',
        cancelButtonColor: '#aaa',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.value) {
          login();
        }
      });
    } else {
      Swal.fire({
        title: 'Please wait',
        text:'Please wait while we verify your login status',
        type: 'info',
        showCancelButton: false,
        confirmButtonColor: '#242424',
        confirmButtonText: 'OK'
      });
    } // end of if userStatus['login']
  });
  $('.menuHome').click(function() {
    hideExecptWindows();
    window.scrollTo(0,0);
    $('.window').show();
  });
  $('.menuEvents').click(function() {
    hideExecptWindows();
    menuCloseFn();
    dispEvents();
  });
  $('.menuMyEvents').click(function() {
    if(userStatus['login'] == 1) {
      hideExecptWindows();
      showRegedEvents();
    } else if(userStatus['login'] == 0){
      Swal.fire({
        title: 'Login Required',
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#242424',
        cancelButtonColor: '#aaa',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.value) {
          login();
        }
      });
    } else {
      Swal.fire({
        title: 'Please wait',
        text:'Please wait while we verify your login status',
        type: 'info',
        showCancelButton: false,
        confirmButtonColor: '#242424',
        confirmButtonText: 'OK'
      });
    }// end of if userStatus['login']
  });
  $('#menuCulturalEvent').click(function() {

  });


  $('#eventShowBoxClose').click(function() {
    clearFilledData();
    eventDetailBoxCloseFn();
  });
  function clearFilledData() {
    $('.clearData').html('');
  }
  function eventDetailBoxCloseFn() {
    $('.loadingIcon').show();
    $('#eventDetailBox').fadeOut(200);
    $('#NavigBr').show();
  }
  $('#reg').click(function() {
    if (userStatus['login'] == 1) {
      //Registration for logged in
      Swal.fire({
        title: 'Confirm Registration',
        text: ' ',
        html: '<table class="table table-bordered">'+
              '<tr> <td width="40%"> Event Name  </td><td>' + eventInfo[eventId].name + '</td></tr>' +
              '<tr><td> Reg Fee* </td><td>' + eventInfo[eventId].regFee + '</td></tr>' +
              '<tr><td> Rules </td><td>' + eventInfo[eventId].rules + '</td></tr>' +
              '<tr><td colspan="2"> *Amount will be collected on spot </td></tr>' +
              '</table>',
        type:'info',
        showCancelButton: true,
        confirmButtonColor: '#242424',
        cancelButtonColor: '#aaa',
        confirmButtonText: 'Register '
      }).then((result) => {
        if (result.value) {
          regEventOnFireStore(eventId);
        }
      }).catch(function(error) {
        console.log(error);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: error,
        })
      })

    } else if(userStatus['login'] == 0){
      Swal.fire({position: 'center',type: 'info',title: 'Login to register',showConfirmButton: false,timer: 2000});
      eventDetailBoxCloseFn();
      hideExecptWindows();
      window.scrollTo(0,0);
      $('.window').show();
    } else {
      Swal.fire({
        title: 'Please wait',
        text:'Please wait while we verify your login status',
        type: 'info',
        showCancelButton: false,
        confirmButtonColor: '#242424',
        confirmButtonText: 'OK'
      });
    }
  });

  function showLoading() {
    let timerInterval
    Swal.fire({
      title: 'Please wait',
      html: 'Sending data within <strong></strong> seconds.',
      timer: 15000,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = Swal.getTimerLeft()
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        // console.log('I was closed by the timer')
      }
    })
  }
  function regEventOnFireStore(evtId) {
    showLoading();
    var cityRef = db.collection('events').doc(profile['uid']);
    var setWithMerge = cityRef.set({
        [evtId] : evtId,
    }, { merge: true }).then(function () {
      Swal.fire(
        'Registered',
        'All the best!',
        'success'
      )
      eventDetailBoxCloseFn();
    }).catch(function (error) {
      Swal.fire(
        'Try again',
        'Something went wrong',
        'error'
      )
      console.log(error);
    });

  } //regEventOnFireStore() ends

  //Events
  $('#eventCloseButn').click(function() {
    $('#eventsPage').fadeOut(200);
    $('.window').fadeIn(200);
  });

  //Profile Icon
  $("#profileIcon").click(function() {
    showProfile();
  });
  $("#profileBoxClose").click(function() {
    hideProfile();
  });
  //Login
  $('.HomeLoginButton').click(function() {
    let timerInterval
    Swal.fire({
      title: 'Google Authentication',
      html:'Sign in with your google account',
      timer: 20000,
      onBeforeOpen: () => {
        Swal.showLoading()
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
    login();
  });
  //Logout
  $('.logout').click(function() {
    logout();
  });
  $('.login').click(function() {
    login();
  });

  $('.showEvents').click(function () {
    dispEvents();
  });
  function dispEvents() {
    window.scrollTo(0,0);
    $('.window').hide();
    $('#eventsPage').fadeIn(200);
  }

  var err = {'1':0};
  var userStatus = {'login':2};
  var profile = {
    'name':'',
    'email':'',
    'mobile':'',
    'photoURL':'',
    'uid':'',
    'regId':'',
    'college':'',
    'semester':'',
  }

  //Check Login statechange
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) { // User signed IN
      userStatus['login'] = 1;
      userId = user.uid;
      const Toast = Swal.mixin({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000});
      Toast.fire({type: 'success',title: 'Signed in successfully'})
      // Swal.fire({position: 'center',type: 'success',title: 'Login Successful',showConfirmButton: false,timer: 1500})
      console.log("Listener Loggedin");
      profile['displayName'] = user.displayName;
      profile['email']  = user.email;
      profile['photoURL']  = user.photoURL;
      profile['uid']  = user.uid;
      //Updations for logged in
      $('.HomeLoginButton , .login').hide();
      $('#profileIcon').html('<img width="35px" height="35px" style="border-radius:50%" src=" ' + profile['photoURL'] + ' ">');
      $('.logout').show();
      //funcions
      fetchInfo();
    } else { // user signout;
      userStatus['login'] = 0;
      console.log("Listener Loggedout");
      //Updations for logged out
      $('.logout').hide();
      $('.login').show();
      $('.HomeLoginButton').show();
      $('#profileIcon').html(''); // to become blank [profile Icon when signed out]
      $('.profileClear').html('')

    }
  });

  function checkRegId(id) {
    unique = true;
    db.collection("users").get().then(function(querySnapshot) { //Retreve all collections
        querySnapshot.forEach(function(doc) {
            a = doc.data();
            regIds = a['regId'];
            if(a['regId']==id) {
              console.log('Not Available :: Already taken');
              unique = false;
              notAvailable();
            }
        });
    }).catch(function(error) {
        console.log(error.message);
    });
    if(unique==true){
      profile['regId']=id;
      console.log('regID : ',id);
    }
    function notAvailable() {
      id = randomId();
      checkRegId(id);
    } //notAvailable() ends
  } //getNewRegId fn ends

  function randomId() {
    randomInt = Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;
    newId =  'RM' + randomInt;
    return newId;
  }

  function startSite() { //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Everything in initialized!
    // typeData(); // Welcome Typing
  }

function eventLister() {
  console.log(rudraEvents);
}

function typeData() {
  sentence1 = "www.rudramets.in" + "^2500";
  sentence2 = "Welcome" + "^1000";
  var options = {
    strings: [sentence1,sentence2],
    typeSpeed: 30,
    backSpeed:20,
    loop:true,
  }
  var typed = new Typed(".typeStyleText", options);
}

  var firestoreErrorCount = 0;
  function fetchInfo() { //firestore connection
   uid = profile['uid'];
    var docRef = db.collection("users").doc(uid);
    docRef.get().then(function(doc) {
      if (doc.exists) {
          //Existing user
          data = doc.data();
          if(data['name']!='') {profile['name']=data['name']}
          if(data['regId']!='') {profile['regId']=data['regId']}
          if(data['photoURL']!='') {profile['photoURL']=data['photoURL']}
          if(data['mobile']!='') {profile['mobile']=data['mobile']}
          if(data['college']!='') {profile['college']=data['college']}
          if(data['semester']!='') {profile['semester']=data['semester']}
          if(data['email']!='') {profile['email']=data['email']}
          console.log("Document data:", profile);
          showProfileInfo();
          validateProfile(); // checking for null values in profile and set err['1'] {firstVerification}
          if(err['1']==1) {
            alert(profile['regId']);
            registration(); // error found, so no complete data, registration for new receiving full data
          } else {
            //<<<<<<<< gathered all information >>>>>>>>>
            startSite()
            //<<<<<<<< gathered all information >>>>>>>>>
          }
        } else {
          // New user
          tId = randomId();
          checkRegId(tId);
          registration() //Register [One more step!]
          console.log("New User!");
        }
      }).catch(function(error) {
        console.log("Error getting document... Retrying...");
        firestoreErrorCount += 1;
        fetchInfo();
        if (firestoreErrorCount>2) {
          console.log("Error getting document (retryed) : ", error);
          Swal.fire({
            type: 'error',
            title: "Can't connect to server",
            text: "Check your Internet Connection"
          });
        }
      });
  } //fetchInfo() ends

  function showProfileInfo() {
   //Profile section
   $('#profImgId').html('<img width="200px" height="200px" style="background:inherite;border:0px solid #454545;border-radius:50%" src=" ' + profile['photoURL'] + ' ">');
   // $('.profImg').css({"background-image": "url(" + profile['photoURL'] +")", "font-size": "200%"});
   $('#profName').html(profile['name']);
   $('#profId').html("ID : "+ profile['regId']);
   $('#profMob').html(profile['mobile']);
   $('#profCollege').html(profile['college']);
   $('#profEmail').html(profile['email']);
 }
  function validateProfile() {
    jQuery.each(profile, function() {
      if(this==''){
        //Missing data !
        err['1'] = 1;
      } //if ends (this==null)
    }); //each (iteration) ends
  }
  function registration() {
    showProfile(); //profile page
    $('#profileBoxClose').hide(); // Hiding close button
    Swal.fire({
      title: ' One more step',
      text: "Please fill all fields",
      html: '<input type="text" id="userName" placeholder="name" value="' + profile["displayName"] +'" name="name" style="margin-top:10px;;padding: 7px;width: 90%;border:1px solid #0fbcf9;border-radius:5px;">' +
            '<input type="text" id="userPhone" placeholder="Phone" value="' + profile["mobile"] +'" name="phone" style="margin-top:10px;;padding: 7px;width: 90%;border:1px solid #0fbcf9;border-radius:5px;">' +
            '<input type="text" id="userCollege" placeholder="College" value="' + profile["college"] +'" name="college" style="margin-top:10px;;padding: 7px;width: 90%;border:1px solid #0fbcf9;border-radius:5px;">' +
            '<input type="text" id="userSemester" placeholder="Semester" value="' + profile["semester"] +'" name="semester" style="margin-top:10px;;padding: 7px;width: 90%;border:1px solid #0fbcf9;border-radius:5px;">',
      type: 'info',
      confirmButtonColor: '#242424',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Finish'
    }).then((result) => {
      name = $('#userName').val();
      mob = $('#userPhone').val();
      col = $('#userCollege').val();
      sem = $('#userSemester').val();
      flag = 0;
      if(name!='') {profile['name'] = name} else {flag = 1}
      if(mob!='') {profile['mobile'] = mob} else {flag = 1}
      if(col!='') {profile['college'] = col} else {flag = 1}
      if(sem!='') {profile['semester'] = sem} else {flag = 1}
      if(flag==0){
        validateProfile(); // checking for null values after the registration... {Second validation}
        if(err['1']==0){
            uploadData();
        } else {
          //Second validation fails
          Swal.fire('Oops...','Internal Error X50','error');

          console.log('Second validation fails',profile);
        }
      } else {
        Swal.fire('Oops...','You need to fill all fields, please refresh page and try again','error');
      }

    }).catch(function(error) {
      Swal.fire('Oops...','Something went wrong. Error X10','error');
      console.log(error);
    })
  } //Registration fn ends


  function uploadData() {
    db.collection('users').doc(profile['uid']).set({
        'uid':profile['uid'],
        'name':profile['name'],
        'regId':profile['regId'],
        'email':profile['email'],
        'mobile':profile['mobile'],
        'college':profile['college'],
        'semester':profile['semester'],
        'photoURL':profile['photoURL'],
    }).then(function() {
        //No errors
        console.log("Document successfully written!");
        showProfileInfo();
        $('#profileBoxClose').slideDown();
        Swal.fire('Hello','Welcome to Rudra 2k19','success');
    }).catch(function(error) {
        Swal.fire('Oops...','Server lost! please refresh page and try again','error');
        console.error("Error writing document: ", error.message);
      });
  }

  function showProfile() {
    $('#profileBox').fadeIn(200);
    window.scrollTo(0,0);
    $('.window').hide();
  }
  function hideProfile() {
    $('#profileBox').fadeOut(200);
    window.scrollTo(0,0);
    $('.window').show();
  }
  function menuCloseFn() {
    $('#menu').fadeOut(200);
    $('.window').fadeIn(200);
  }

  function logout() {
    Swal.fire({
      title: 'Confirmation Required',
      text: "You will be logged out!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#242424',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.value) {
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
          const Toast = Swal.mixin({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000});
          Toast.fire({type: 'success',title: 'Signed Out successfully'})
        }).then(function() {
          menuCloseFn();
          console.log("signout successful")
        }).catch(function(error) {
          // An error happened.
          console.log(error);
          Swal.fire({position: 'center',type: 'error',title: 'Something went wrong!',showConfirmButton: false,timer: 1500});
        });


      }
    });


  } // logout fn ends

  function login() {
      var user = firebase.auth().currentUser;
      if (user) {
        // User is signed in.
        Swal.fire({
          type: 'info',
          title: profile['email'],
          text: 'Looks like you have already signed In'
        })
      } else {
        // User is signed out.
          $(window).off('beforeunload');
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        firebase.auth().getRedirectResult().then(function(result) {
          if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // ...
          }
          // The signed-in user info.
          var user = result.user;
        }).then(function() {
            console.log("Connecting to google");
        }).catch(function(error) {
            console.log("Login error");
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } // if user else end
  } // login fn end



}); // jquery ends
