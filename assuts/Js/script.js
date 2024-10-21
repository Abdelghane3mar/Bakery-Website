/*لتغيير الصوره عند الحركه في  css عن طريق js */
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('#navbar');
    const navImg = document.querySelector(".logo img");
    const navLinks = document.querySelectorAll('.nav_menu a');
    const sections = document.querySelectorAll('section');
    const listToggle = document.getElementById('listToggle');
  
    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
        navImg.src ="./assuts/image/bakery-dark-1.png";
    } else {
        navbar.classList.remove('scrolled');
        navImg.src ="./assuts/image/bakery-light-1.png";
    }
  
  // تغيير الـ active عند التمرير
  window.addEventListener('scroll', () => {
    let currentSection = '';
  
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id'); // الحصول على الـ id للقسم
        }
    });
  
    // تحديث حالة الروابط بناءً على القسم الحالي
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
          navLinks.forEach(item => item.classList.remove('active'));
  
            link.classList.add('active');
        }
    });


        /*للتنقل السلس عن طريق الروابط */
    document.querySelectorAll('.nav_menu a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault(); // منع السلوك الافتراضي للرابط

          const targetId = this.getAttribute('href'); // الحصول على معرف القسم المستهدف
          const targetSection = document.querySelector(targetId); // العثور على القسم

          // التمرير السلس إلى القسم
          targetSection.scrollIntoView({
              behavior: 'smooth'
          });
      });
    });
    /*////////////////////////////////////// */


  });
  
  });
    
  });


  let listToggle = document.getElementById("listToggle");
let navMenu = document.querySelector(".nav_menu");

listToggle.addEventListener("click" , function(){
    if(navMenu.classList.contains("d-none")){
      navMenu.classList.add("d-block");
      navMenu.classList.remove("d-none");
    }
    else{
      navMenu.classList.add("d-none");
      navMenu.classList.remove("d-block");
    }
}); 
  

  // JavaScript for opening and closing the panel
document.addEventListener('DOMContentLoaded', function () {
    const panelToggle = document.getElementById('theme-panel-toggle');
    const panel = document.getElementById('custom-demo-panel');
    const panelContent = document.querySelector('.demo-panel-content');
    const loader = document.createElement('div');
    const toggleIcon = document.querySelector('#demo-thumbnail i');
    loader.classList.add('loader'); 
    panel.appendChild(loader); 
  // opening and closing the panel
    panelToggle.addEventListener('click', function () {
        panel.classList.toggle('panel-open');
        if (panel.classList.contains('panel-open')) {
          loader.style.display = 'block';
                setTimeout(function () {
                panelContent.style.opacity = 1;
                panelContent.style.maxHeight = '1000px';
                loader.style.display = 'none'; 
            }, 500);
        } else {
            panelContent.style.opacity = 0;
            panelContent.style.maxHeight = '0';
        };
  
        // Change icon when panel is open/closed
        if (panel.classList.contains('panel-open')){
          toggleIcon.classList.remove('fa-gear');
          toggleIcon.classList.add('fa-xmark');
          toggleIcon.style.color = "red";
          toggleIcon.style.fontSize = "19px";
      } else {
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-gear');
        toggleIcon.style.color = "#333";
  
      }
      
    });
  });
  
  // Button hover effect
  const demoButtons = document.querySelectorAll('.demo-panel-btn');
  demoButtons.forEach(function (button) {
      button.addEventListener('mouseover', function () {
          button.style.transform = 'translateY(-5px)';
          button.style.transition = 'all 0.3s ease';
          button.style.backgroundColor = 'rgb(68, 68, 68)';
      });
      button.addEventListener('mouseout', function () {
          button.style.transform = 'translateY(0)';
          button.style.backgroundColor = '#c1ab84';
  
      });
  });
  
  // JavaScript for changing accent colors
  document.addEventListener('DOMContentLoaded', function () {
    const colorItems = document.querySelectorAll('.panel-accent-color li');
    
    colorItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const selectedColor = this.getAttribute('data-color');
  
            // Apply the selected color to all elements with the 'accent-element' class
            const bgElements = document.querySelectorAll('.bg-element');
            bgElements.forEach(function (element) {
            element.style.backgroundColor = selectedColor ;
            });
                        
            // Optionally apply to text color as well
            const colorElements = document.querySelectorAll('.color-element');
            colorElements.forEach(function (element) {
            element.style.color = selectedColor; // For text
  
            });
            
        });
    });
  });
  
  ////////////// Scroll Top////////////////
  let span = document.querySelector(".up");
  window.onscroll = function(){
      if (this.scrollY >= 1000 ) {
          span.classList.add("show");
      }
      else{
          span.classList.remove("show");
      }
  }
  span.onclick = function(){
    window.scrollTo({
        top: 0 , behavior:"smooth" ,
    })
  }
  ////////////// Scroll Top////////////////