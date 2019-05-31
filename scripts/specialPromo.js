$(document).ready(function(){
  AOS.init();
  $('.carousel').carousel({
    interval: 4000,
    pause: false,
    keyboard: true
  })
  $('#pubgRegBtn').click(function() {
    PUBGRegister();
  });
  function PUBGRegister() {
    // Swal.fire({
    //   title: 'Attention',
    //   text: "Registration accepeted only after a successful payment, You will be asked for payment proof in coming steps",
    //   showCancelButton: true,
    //   confirmButtonColor: '#d63031',
    //   cancelButtonColor: '#aaa',
    //   confirmButtonText: 'Confirm'
    // }).then((result) => {
    //   if (result.value) {
    //      window.open('https://goo.gl/forms/xDD3KiVDoNnx10b62', '_blank')
    //   }
    // });
    Swal.fire({
      title: 'Event Expired',
      text: "",
      showCancelButton: false,
      confirmButtonColor: '#d63031',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Ok'
    });
  }

}); //document.ready ends
