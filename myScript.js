function positionProfile () {
    const aboutBannerHeight = document.querySelector('.about-banner').offsetHeight;
    const aboutProfile = document.querySelector('.about-profile');
    const aboutProfileHeight = aboutProfile.offsetHeight;

    const newTop = aboutBannerHeight - (aboutProfileHeight / 2);
    aboutProfile.style.top = newTop + "px"
}

window.onload = positionProfile;

window.addEventListener('resize', function () {
    positionProfile();
})