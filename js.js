let listBut =document.querySelector('#listBut'),
nav=document.querySelector('nav ul'),
cancelBut=document.querySelector('#cancelBut');

listBut.addEventListener('click',()=>{
  nav.style.display='flex'
  listBut.style.display='none'
  cancelBut.style.display='block'
})
cancelBut.addEventListener('click',()=>{
  nav.style.display='none'
  listBut.style.display='block'
  cancelBut.style.display='none'
})



// ----------------- extra skills------

let extraSkillBut=document.querySelector('#extraSkillBut'),
backSkillBut=document.querySelector('#backSkillBut'),
otherSkill=document.querySelectorAll('.other-skill'),
mainSkill=document.querySelectorAll('.main-skill');

extraSkillBut.addEventListener('click',()=>{
  extraSkillBut.style.display='none'
  backSkillBut.style.display='flex'
otherSkill.forEach(e => {
e.style.display='flex'
});
mainSkill.forEach(e => {
e.style.display='none'
});
})


backSkillBut.addEventListener('click',()=>{
  extraSkillBut.style.display='block'
  backSkillBut.style.display='none'
otherSkill.forEach(e => {
e.style.display='none'
});
mainSkill.forEach(e => {
e.style.display='flex'
});
})

// ---------------------- education ----- 
let imgs =document.querySelector('.imgs'),
allInfo =document.querySelector('#allInfo'),
msc=document.querySelector('#msc'),
bca=document.querySelector('#bca'),
del=document.querySelector('#del'),
hs=document.querySelector('#hs'),
exploreBut=document.querySelector('#exploreBut'),
eduBackBut=document.querySelector('#eduBackBut');

exploreBut.addEventListener('click',()=>{
  eduBackBut.style.display='flex'
  exploreBut.style.display='none'
  imgs.style.display='none'
  allInfo.style.width='100%'
  msc.textContent='Master of Science, Information system (MSc (IF)), Osmania University, Hyderabad, India, from 2020-2022.';
  bca.textContent='Bachelor of Computer Applications (BCA), Osmania University, Hyderabad, India, from 2017-2020.';
  del.textContent='Diploma of English Language, INSPORA INTERNATIONAL INSITUTUE, Bangalore, India, from August 2016-Feburauary 2017.'
  hs.textContent='High School, Al Aqsa School, Sana’a, Yemen, 2014-2015.'
})
eduBackBut.addEventListener('click',()=>{
  eduBackBut.style.display='none'
  exploreBut.style.display='flex'
  imgs.style.display='flex'
  allInfo.style.width='50%'
  msc.textContent='MSc(IS) 2020/2022';
  bca.textContent='BCA 2017/2020';
  del.textContent='Diploma of English Language'
  hs.textContent='High School 2015'
if(window.matchMedia('(max-width:767px)').matches){
  allInfo.style.width='100%'
}
if(window.matchMedia('(max-width:920px)').matches){
  allInfo.style.width='100%'
}
})


// -------------------- projects --------
let viewLessProj =document.querySelector('#viewLessProj'),
viewMoreProj =document.querySelector('#viewMoreProj'),
subProj=document.querySelectorAll('.sub-proj');

viewMoreProj.addEventListener('click',()=>{
  viewLessProj.style.display='block'
  viewMoreProj.style.display='none'
subProj.forEach(e=>{
  e.style.display='block';
})
})
viewLessProj.addEventListener('click',()=>{
  viewLessProj.style.display='none'
  viewMoreProj.style.display='block'
subProj.forEach(e=>{
  e.style.display='none';
})
})


// ------------ nav scroll ---------
let homeBut=document.querySelector('#homeBut'),
skillsBut=document.querySelector('#skillsBut'),
educationBut=document.querySelector('#educationBut'),
tCBut=document.querySelector('#tCBut'),
projectBut=document.querySelector('#projectBut'),
firstSection=document.querySelector('.first-section'),
skillsSection=document.querySelector('.skills-section'),
education=document.querySelector('.education'),
triningCos=document.querySelector('.trining-cos'),
projectsSection=document.querySelector('.projects-section'),
whatIprovide=document.querySelector('.what-i-provide');

homeBut.addEventListener('click',()=>{
  window.location.reload();
})
skillsBut.addEventListener('click',()=>{
  skillsSection.scrollIntoView();
})
educationBut.addEventListener('click',()=>{
  education.scrollIntoView();
})
tCBut.addEventListener('click',()=>{
  triningCos.scrollIntoView();
})
projectBut.addEventListener('click',()=>{
  projectsSection.scrollIntoView();
})


// ------- to the top button -

let toTopBut=document.querySelector('#toTop');

window.onscroll=function(){
  if(this.scrollY >=700){
    toTopBut.style.display='block'
  }else{
    toTopBut.style.display='none'
  }
}
toTopBut.addEventListener('click',function(){
  window.scrollTo(0,0);
})

// --------------------



let course =document.querySelectorAll('#course'),
bar =document.querySelectorAll('#bar'),
service=document.querySelectorAll('.service');





// ------------ Animation the trining courses section ---
function scrollDown(){
  if(window.scrollY >=triningCos.offsetTop-200){
    course.forEach((e)=>{
      e.style.opacity='1';
    })
    // ------------ Animation the skill section ---
  }else if(window.scrollY >= skillsSection.offsetTop-200){
    bar.forEach((e)=>{
      e.style.width=e.dataset.width;
    })
  }  
}
// ------------ Animation the what i provide section ---
function scrollToLastSection(){
  if(window.scrollY>=whatIprovide.offsetTop-300){
    service.forEach((e)=>{
      e.style.opacity='1'
    })
  }
}


window.onscroll=function(){
  scrollDown();
  scrollToLastSection();
  };
// _____________________________________

// Animate the big img ----
let bigImg=document.querySelector('#big-img');
function bigImgFu(){
  bigImg.style.top='-10%';
}
window.addEventListener('load',bigImgFu);

