function addSkillTag(id, ...tags) {
    const target = document.getElementById(id);

    tags.forEach(text=>{
        const tag = document.createElement('span');
        tag.textContent = text;
        tag.classList.add('tag','generic-hashtag')
        target.appendChild(tag)
    });
}

function initNavigation(){
    fetch('topNavigation.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('topNavigation').innerHTML = html;
        })
        .catch(error => {
            console.error('Fetch error', error)
        });
}