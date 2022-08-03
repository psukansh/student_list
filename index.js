
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // You can also use <link> for styles
  // ..
  AOS.init({
  
     offset: 120, // offset (in px) from the original trigger point
     delay: 0, // values from 0 to 3000, with step 50ms
     duration: 400, // values from 0 to 3000, with step 50ms
     easing: 'ease', // default easing for AOS animations
   });
