$(document).ready(function(){

  function myConfirmation() {
      manageLogout();
  }
  window.onbeforeunload = myConfirmation;

  $('#eventParticipList').html('<tr><th>RegId</th><th>Name</th><th>Mobile</th><th>College</th></tr>');
  var db = firebase.firestore(); //Database Connection
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('getOTP', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
  });
  recaptchaVerifier.render().then(function(widgetId) {
    window.recaptchaWidgetId = widgetId;
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      $('.participantsContainer').hide()
      $('.authContainer').show()
      formReset();
    }
  });

  function formReset() {
    $('#phoneNo').val("");
    $('#otp').val("");
  }
  function onSignInSubmit() {
    var phoneNumber = '+91' + $('#phoneNo').val();
    var appVerifier = window.recaptchaVerifier;
    // console.log(" inputs " , phoneNumber , appVerifier);
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          console.log("OTP Sended");
          window.confirmationResult = confirmationResult;
          $('.otpVeri').slideDown(200);
        }).catch(function (error) {
          // Error; SMS not sent
          console.log(error);
          alert('otp not send')
          window.recaptchaVerifier.render().then(function(widgetId) {
            grecaptcha.reset(widgetId);
          });
          // ...
        });
  }

  $('#otpAuth').click(function() {
    var code = $('#otp').val();
    confirmationResult.confirm(code).then(function (result) {
      // User signed in successfully.
      var user = result.user;
      console.log("SignedIn with phone number");
      $('.logoutContnr').show();
      showParticipants();
      // window.location.replace("dashboard.html");
      // ...
    }).catch(function (error) {
      // User couldn't sign in (bad verification code?)
      console.log("Bad verification code");
      alert("Invalid OTP Entered! Please make sure you entered correct OTP");
      // ...
    });
  });


  function showParticipants() {
    var eventId = fetched['id']; //Co-ordinators event Id
    //Get data from firestore
    db.collection("events").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            events = doc.data(); // assigning data to 'events'
            $.each(events, function(key,value) {
              // console.log(key);
              if (eventId == key) {
                addDataFromFireStore(doc.id);
              }
            });
        });
    });
    $('.authContainer').hide();
    $('.EventTitleName').html(fetched['EventName']);
    $('.coName').html(fetched['cName']);
    $('.participantsContainer').show();
  }
  function addDataFromFireStore(uid) {
    // alert(uid)
    var docRef = db.collection("users").doc(uid);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            // console.log("Document data:", doc.data());
            user = doc.data();
            qry = '<tr><td>';
            qry += user.regId;
            qry += '</td><td>'
            qry += user.name;
            qry += '</td><td>';
            qry += user.mobile;
            qry += '<br><a href="tel:'+user.mobile+'">  Call </a></td><td>';
            qry += user.college;
            qry += '</td></tr>';
            $('#eventParticipList').append(qry);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            $('#warning').show();
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  var fetched = {"id":"","EventName":"","cName":"","cContact":""};
  $('#checkValid').click(function() {
    var number = $('#phoneNo').val();
    var f = 0;
    $.getJSON("db/coordinatorDetails.json",function(data) {
      $.each(data, function(key,value) {
        if (value.coContact == number) {
          f = 1;
          fetched['id'] = value.id;
          fetched['EventName'] = value.name;
          fetched['cName'] = value.coName;
          fetched['cContact'] = value.coContact;
        }
      });
      if(f == 1) {
        $('.notRegged').hide();
        $('.regged').show();
        $('.eventDetails').html(fetched['EventName'] + "<br>" +fetched['cName']);
      } else {
        $('.regged').hide();
        $('.notRegged').show();

      }
    });
  });
  $('#logoutBtn').click(function() {
    manageLogout();
    self.close();
  });

  function manageLogout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      $('.logoutContnr').hide()
      $('.regged').hide();
      $('.otpVeri').slideUp(200);
      console.log("Sign-out successful.");
    }).catch(function(error) {
      // An error happened.
      console.log("Sign-out Unsuccessful!");
    });
  }


});
