
let on;
let check;
let musicCheck;
let musicBol;
let techCheck;
let techBol;
  
  function updateClick() {
    on = document.querySelector('.gaming-on');
     check = on.classList.contains('gaming-off');
     musicCheck =
      document.querySelector('.music-on');
     musicBol = musicCheck.classList.contains('music-off');
     techCheck = document.querySelector('.tech-on');
       techBol = techCheck.classList.contains('tech-off');
  }
  
  function clickButton (click) {
    updateClick();

    if(click === 'Gaming') {
    if (check) {
        on.classList.remove('gaming-off');
      } else {
        on.classList.add('gaming-off');
      }
      return check;
    }else if (click === 'Music') {
        if (musicBol) {
        musicCheck.classList.remove('music-off');
      } else {
        musicCheck.classList.add('music-off');
      }
      return musicBol;
    }else {
      if(techBol) {
        techCheck.classList.remove('tech-off');
        
      }else {
        techCheck.classList.add('tech-off');
      }
      return techBol;
    }
  }

    function checkOther (click) {
      if(click === 'Gaming') {
        musicCheck.classList.remove('music-off');
        techCheck.classList.remove('tech-off');
      }else if ( click === 'Music') {
        on.classList.remove('gaming-off');
        techCheck.classList.remove('tech-off');
      }else {
        on.classList.remove('gaming-off');
        musicCheck.classList.remove('music-off');
      }
    }