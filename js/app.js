// UI
// Start Menu Section 
const menuimages = document.querySelectorAll('.menuimages');
const menutexts = document.querySelectorAll('.menutexts');

menuimages.forEach((menuimage)=>{
    menuimage.addEventListener('mouseenter',()=>{
        menuimage.nextElementSibling.style.opacity = "1";
        menuimage.nextElementSibling.style.transform = `translateY(0%)`;
        menuimage.nextElementSibling.style.transition = "1s";
    });
    
});

menuimages.forEach((menuimage)=>{
    menuimage.addEventListener('mouseleave',()=>{
        menuimage.nextElementSibling.style.transform = `translateY(-100%)`;
        menuimage.nextElementSibling.style.transition = "1s";
    });
    
});


const menulists = document.querySelectorAll('.menulists');
const dishes = document.querySelectorAll('.dishes'),
      drinks = document.querySelectorAll('.drinks'),
      desserts = document.querySelectorAll('.desserts');

menulists.forEach((menulist)=>{
    menulist.addEventListener('click',()=>{
        const menuitem = menulist.innerText;

        removeactives();
        menulist.classList.add('actives');
    
            if(menuitem === 'All'){
                dishes.forEach((dish)=>{
                    dish.style.display = 'block';
                });
    
                drinks.forEach((drink)=>{
                    drink.style.display = 'block';
                });
    
                desserts.forEach((dessert)=>{
                    dessert.style.display = 'block';
                });
            }else if(menuitem === 'Dishes'){
                dishes.forEach((dish)=>{
                    dish.style.display = 'block';
                });
    
                drinks.forEach((drink)=>{
                    drink.style.display = 'none';
                });
    
                desserts.forEach((dessert)=>{
                    dessert.style.display = 'none';
                });
            }else if(menuitem === 'Drinks'){
                dishes.forEach((dish)=>{
                    dish.style.display = 'none';
                });
    
                drinks.forEach((drink)=>{
                    drink.style.display = 'block';
                });
    
                desserts.forEach((dessert)=>{
                    dessert.style.display = 'none';
                });
            }else{
                dishes.forEach((dish)=>{
                    dish.style.display = 'none';
                });
    
                drinks.forEach((drink)=>{
                    drink.style.display = 'none';
                });
    
                desserts.forEach((dessert)=>{
                    dessert.style.display = 'block';
                });
            }
    });
});

function removeactives(){
    menulists.forEach((menulist)=>{
        menulist.classList.remove('actives');
    });
}
