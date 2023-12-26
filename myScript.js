function positionProfile () {
    const aboutBannerHeight = document.querySelector('.about-banner').offsetHeight;
    const aboutProfile = document.querySelector('.about-profile');
    const aboutProfileHeight = aboutProfile.offsetHeight;

    const newTop = aboutBannerHeight - (aboutProfileHeight / 2);
    aboutProfile.style.top = newTop + "px"
}

function about_moreInfo_toggleMore () {
    var extraInfo = document.getElementById('about-moreInfo-extraInfo')
    var title = document.getElementById('about-moreInfo-title')

    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
        title.textContent = '收起內容 ▲';
    } else {
        extraInfo.style.display = 'none';
        title.textContent = '顯示更多 ▼';
    }
}

window.onload = positionProfile;

window.addEventListener('resize', function () {
    positionProfile();
})


document.getElementById('about-moreInfo-title').addEventListener('mouseover', function handleMouseOver() {
    this.style.color = 'red'
    // this.style.cursor = ''
});
document.getElementById('about-moreInfo-title').addEventListener('mouseout', function handleMouseOut() {
    this.style.color = '#707070'
    // this.style.cursor = 'default'
});


