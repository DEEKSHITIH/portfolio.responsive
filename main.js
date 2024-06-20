const menubtn=document.querySelector('#menu-btn');
const closebtn=document.querySelector('#close-btn');
const menu=document.querySelector('nav .container ul');

// show mwnu 

menubtn.addEventListener('click',()=>{
  menu.style.display='block';
  menubtn.style.display='none';
  closebtn.style.display='inline-block';
})

  //  hide mwnu

closebtn.addEventListener('click',()=>{
  menu.style.display='none';
  menubtn.style.display='inline-block';
  closebtn.style.display='none';
})

const changeactiveitem=()=>{
  navItems.forEach(item=>{
    const link=item.querySelector('a');
    link.classList.remove('active');
  })
}


const navItems=menu.querySelector('li');
navItems.forEach(item=>{
  const link =item.querySelector('a');
  link.addEventListener('click',()=>{
    link.classList.add('active');
  })
})

  //read more about 
  const readmorebtn=document.querySelector('.readmore');
  const readmorecontent=document.querySelector('.readmorecontent');

  readmorebtn.addEventListener('click',()=>{
    readmorecontent.classList.toggle('showcontent');
  })
    //  shows skills item 

    const skillitems=document.querySelectorAll('section.skills .skill');
    skillitems.forEach(skill=>{
      skill.querySelector('.head').addEventListener('click',()=>{
        skill.querySelector('.items').classList.toggle('show-items');
      })
    })

     //add shadow whilw scrolling
     window.addEventListener('scroll',()=>{
      document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 100)
     })