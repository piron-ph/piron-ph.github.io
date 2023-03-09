function createPlayer(name, data = {}) {
    const 
        audio      = document.createElement('audio'),
        player     = document.createElement('div'),
        info       = document.createElement('div'),
        controller = document.createElement('div')

    audio.hidden = true
    audio.id     = name
    audio.src    = data?.src ?? ''

    player.classList.add('player')

    const
        img      = document.createElement('img'),
        title    = document.createElement('h3'),
        subTitle = document.createElement('h4')

    img.src = data?.img ?? 'logo.png'

    title.textContent = data?.title ?? 'Uninformed'
    subTitle.textContent = data?.subTitle ?? ''

    title.title = data?.title ?? 'Uninformed'
    subTitle.title = data?.subTitle ?? ''

    info.append(img, title, subTitle)
    player.appendChild(info)

    const
        controllers = document.createElement('div'),
        imgNext     = document.createElement('img'),
        imgPrev     = document.createElement('img'),
        imgPlay     = document.createElement('img'),
        bar         = document.createElement('div'),
        processBar  = document.createElement('div'),
        time        = document.createElement('div'),
        duration    = document.createElement('span'),
        currentTime = document.createElement('span')

    imgPrev.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABtElEQVQ4jWMY+uD///8EcUfTNK/r1+6uOnPq8hxi1D569HwHTC1exVEB2UIghSANjx49/w+iCzIb9LCpTY0tV0BXGxWQzcyCKwq2bTnQ2DGpxpyBgcEdSRjELsOmtra1AJtaNiZ0xZ3N071uXL+3SldfA10DBpjavzD88eMXO/CoZYZbEB2YI3T29JU5UQmBedw8XKH4DC/OatIDOcIvxD0Rqg6b2v8MDAzfGEHhB/IiMS4GgVcv3jCISYgQUgYGFXktnEydzdO8iDUcBIg1HAoEmF49f/OMgYGBnRRdJAAl5mOn978ozW0+pKmtKsTNw/WegYFBAZ/+k0fPVbCxsT4nRu2e7YemgCN51qLO+8amOnHLF6zr/frl20YGBoYDuDQdPXR6J0wtVB1OtQwMDO9QkmlZbdYWDU2lgH07Dq8ioBGsVlZWwvHk0bM78Kj9iZEPQCA+NXR6c3V/0qsXbxYTsigkwrtzQvusQhxqf+PMyaBgY2BgiOtqnubjF+LxkZuHix8k/vXL94/oanun1V2AqY1MCELxAVGFHQhP6VsQ3dk01YdYtbVl3Xbgwm5oAwYGBgA7hlhPwuBYTAAAAABJRU5ErkJggg=='
    imgNext.src = ' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABKklEQVQ4jWNwMguzPrDvZOiZU5djCjIbNf7//89ACmaY0jff4tGj5/+heOGZU5c7STGAiZuHW4oBAeLEJEQkHj9+sXDB7NURDEQAJgYGBjE0ZXEg7Oxh63n29JXOwqwmDXzGsDAwMDzFIQdyDUNRZZrE2dNXXhib6pRjUwRywUMCDsXrLZAB74jwKk5vgbzAS4QByK5B8RbIBcokGIBskMSU/oU+IAO+kGEACEjdvf3wMcgLX0nUuOfrl2+fli1YN6F/Wt1FkAt+kqJ505qd8zQ0lYKbOksOM0AD8TcxGi9fvH5i6dy1E5aun/IWWYKQAXDngmz08nHEUADyAi4DMJyLDYBc8I9Y52I14OWL17BoJOhcbIBRU9pB0tPP0Z+bl+sqPqdiBQwMDACvUdjLFtm1SgAAAABJRU5ErkJggg=='
    imgPlay.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABKklEQVQ4jWNwMguzPrDvZOiZU5djCjIbNf7//89ACmaY0jff4tGj5/+heOGZU5c7STGAiZuHW4oBAeLEJEQkHj9+sXDB7NURDEQAJgYGBjE0ZXEg7Oxh63n29JXOwqwmDXzGsDAwMDzFIQdyDUNRZZrE2dNXXhib6pRjUwRywUMCDsXrLZAB74jwKk5vgbzAS4QByK5B8RbIBcokGIBskMSU/oU+IAO+kGEACEjdvf3wMcgLX0nUuOfrl2+fli1YN6F/Wt1FkAt+kqJ505qd8zQ0lYKbOksOM0AD8TcxGi9fvH5i6dy1E5aun/IWWYKQAXDngmz08nHEUADyAi4DMJyLDYBc8I9Y52I14OWL17BoJOhcbIBRU9pB0tPP0Z+bl+sqPqdiBQwMDACvUdjLFtm1SgAAAABJRU5ErkJggg=='

    bar.classList.add('bar')

    bar.addEventListener('click', (event) => {
        let 
            tmp = (event.clientX - bar.offsetLeft),
            width = bar.style.width

        tmp = (tmp / bar.clientWidth * 100)
        
        audio.currentTime = audio.duration / 100 * tmp
    })

    duration.textContent    = '00:00'
    currentTime.textContent = '00:00'

    imgPrev.addEventListener('click', () => {
        audio.pause()
        audio.currentTime = 0
        audio.play()
    })

    imgNext.addEventListener('click', () => audio.currentTime = audio.duration)

    const updatePlayer = () => {
        imgPlay.src = (audio.paused)
            ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABKklEQVQ4jWNwMguzPrDvZOiZU5djCjIbNf7//89ACmaY0jff4tGj5/+heOGZU5c7STGAiZuHW4oBAeLEJEQkHj9+sXDB7NURDEQAJgYGBjE0ZXEg7Oxh63n29JXOwqwmDXzGsDAwMDzFIQdyDUNRZZrE2dNXXhib6pRjUwRywUMCDsXrLZAB74jwKk5vgbzAS4QByK5B8RbIBcokGIBskMSU/oU+IAO+kGEACEjdvf3wMcgLX0nUuOfrl2+fli1YN6F/Wt1FkAt+kqJ505qd8zQ0lYKbOksOM0AD8TcxGi9fvH5i6dy1E5aun/IWWYKQAXDngmz08nHEUADyAi4DMJyLDYBc8I9Y52I14OWL17BoJOhcbIBRU9pB0tPP0Z+bl+sqPqdiBQwMDACvUdjLFtm1SgAAAABJRU5ErkJggg==' 
            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAaElEQVQ4jWOgFDCC9D9+/GIhAwNDHJJZi2RkxOORzX7y5CWGGllZiXiYAf/RHSIjI86IZgCGGllZCUYmSr0wasCoAaMGQAALiPj65ds6bh4uPgYGBhcGBoY9X798+4SukBg1pAMGBgYAdXcjO7NTRb4AAAAASUVORK5CYII='
    }

    imgPlay.addEventListener('click', () => (audio.paused) ? audio.play() : audio.pause())
    audio.addEventListener('playing', () => updatePlayer())
    audio.addEventListener('pause', () => updatePlayer())

    audio.addEventListener('timeupdate', () => {
        currentTime.textContent = ajusteTextTime(audio.currentTime)
        duration.textContent    = ajusteTextTime(audio.duration)
        processBar.style.width  = parseInt(audio.currentTime / audio.duration * 100) + '%'
    })

    controllers.append(imgPrev, imgPlay, imgNext)
    bar.appendChild(processBar)
    time.append(currentTime, duration)

    controller.append(controllers, bar, time)

    player.audio = audio

    player.appendChild(controller)

    return player
}

function ajusteTextTime(time) {
    if (isNaN(time)) {
        time = 0
    }


    time = time.toFixed(2)

    let 
        minutes = parseInt((time > 59) ? time / 60 : 0),
        seconds = parseInt(time % 60)

    minutes = ('00' + minutes).slice(-2)
    seconds = ('00' + seconds).slice(-2)
    
    return minutes + ':' + seconds
}

window.onload = () => {
    const player = createPlayer('player_html', {
        src: 'https://github.com/piron-ph/piron-ph.github.io/blob/main/ash/voice/tulog-na.ogg?raw=true',
        img: 'https://github.com/piron-ph/piron-ph.github.io/blob/main/ash/images/photo_2023-03-08_07-59-59.jpg?raw=true',
        title: 'Tulog Na',
        subTitle: 'your bunbun'
    })

    player.audio.volume = 0.2

    document.getElementById('tulogna').appendChild(player)
    
   
}


