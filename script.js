var today = new Date();

var points = 1;

//update loading text every 0.85 seconds
const limitedInter = setInterval(() => {
    var loadingText = document.getElementById('loading-text');

    //debugging
    if(loadingText.innerHTML == 'Happy new year! 👌🏻'){
        clearInterval(limitedInter);
        return;
    }

    loadingText.innerHTML = 'loading' + '.'.repeat(points);
    points++;
    if(points > 3){
        points = 1;
    }
}, 850);

//when window loads
window.onload = () => {
    var loadingText = document.getElementById('loading-text');
    var loadingBar = document.getElementById('loading-bar');
    const currentYear = document.getElementById('current-year');

    //set current year to current year
    currentYear.innerHTML = today.getFullYear();
    
    //Get the day of the year. 
    const dayOfYear = date =>
        Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    //Multiply the full day of the day of the year by 0.82191780821 (read readme.md) and adds it to the loading bar width.

    loadingBar.style.width = `${0.82191780821 * dayOfYear(today)}px`;

    //if the loading bar is done then change the loading text to happy new year.
    if(loadingBar.offsetWidth == 300){
        loadingText.innerHTML = 'Happy new year! 👌🏻';
    }
};
