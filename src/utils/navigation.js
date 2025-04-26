export const handleNavClick = (sectionId, isMobile, closeMenu) => {

    const scrollToSection = (sectionId) => {
  
        if(sectionId === 'Home') {
    
          window.scrollTo({top: 0, behavior: 'smooth'});
        }else{
    
          const section = document.getElementById(sectionId);
          section?.scrollIntoView({behavior: 'smooth'});
        }
    
    }

    if(isMobile) {
  
      closeMenu();
      setTimeout(() => {
  
        scrollToSection(sectionId)
  
      }, 500);
      
    }else {
  
      scrollToSection(sectionId);
    }

    
  }


export const handleMobileBtn = (closeMenu, openModal) => {

  closeMenu();

  setTimeout(() => {
  
    openModal();

  }, 800);  


}

  