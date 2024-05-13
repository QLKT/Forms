   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var DropdownMenu2_dropdownToggle = document.querySelectorAll('#DropdownMenu2 .dropdown-toggle');
      DropdownMenu2_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var DropdownMenu2_dropdown = document.querySelectorAll('#DropdownMenu2 .dropdown');
      DropdownMenu2_dropdown.forEach(item => 
      {
         item.addEventListener('shown.bs.dropdown', function(e)
         {
            e.currentTarget.classList.add('show');
         });
         item.addEventListener('hidden.bs.dropdown', function(e)
         {
            e.currentTarget.classList.remove('show');
         });
      });
      var Carousel1 = new bootstrap.Carousel('#Carousel1', {interval: 1000, pause: 'hover'});
   });
   
   $(document).ready(function()
   {
      $("a[href*='#Heading5']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Heading5').offset().top }, 600, 'linear');
      });
      $("#SlideShow1").slideshow(
      {
         interval: 2000,
         type: 'sequence',
         effect: 'slide',
         direction: 'left',
         pagination: false,
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 1000
      });
   });
