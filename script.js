


const myScroller = document.querySelector('#phone__dish_slider');

// console.log(myScroller);

// const mouseTarget = document.getElementById('phone__wrapper');


// console.log(mouseTarget);


    
window.addEventListener('wheel', function (event) {

    const leftPosition = getPosition('left');

    const step = 110;

    
    if (event.deltaY < 0) {

        const newPosition = leftPosition + step;
        myScroller.style.left = newPosition + 'px';
        myScroller.style.transition = '200ms ease';

    }

    else if (event.deltaY > 0) {

        const newPosition = leftPosition - step;
        myScroller.style.left = newPosition + 'px';
        myScroller.style.transition = '200ms ease';

    }

    
})



function getPosition(type) {
    const styles = window.getComputedStyle(myScroller, null)
    const value = styles[type]
    if (value) {
        return parseInt(value.substring(0, value.length - 2))
    }
    return 0;
}



// console.log(getPosition('left'));

// console.log(myScroller.style.left);