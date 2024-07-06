function openMenu () {
    document.body.classList += "menu--open"
    }
    
    function closeMenu () {
    document.body.classList.remove('menu--open')
    }

    
// animate section entries on scroll***************************************************

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const square = entry.target.querySelector('.quality');

//         if (entry.isIntersecting) {
//             square.classList.add('slide-left');
//             return;
//         }

//         square.classList.remove('slide-left');
//     });
// })

// observer.observe(document.querySelector('.quality'));