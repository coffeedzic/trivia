const simpleAlert = new Object();

simpleAlert.success = (text, duration = 3000, animation = 'swing-in') => {
    let simpleAlert = document.getElementById('simple-alert');
    let wrapper = document.querySelector('.simple-alert-wrapper');

    if(!simpleAlert) {
        simpleAlert = document.createElement('div');
        simpleAlert.id = 'simple-alert'
        wrapper = document.createElement('div');
        wrapper.classList.add('simple-alert-wrapper');   
        document.body.appendChild(simpleAlert);
        simpleAlert.appendChild(wrapper);     
    }
    
    let html = `
        <div class="message">
            <div class="icon">
                <i class="far fa-check-circle"></i>
            </div>
            <div class="text">
                <span class="state">Success</span>
                <span class="msg">${text}</span>
            </div>
        </div>
    `

    let alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.classList.add('success');
    alertBox.classList.add(animation);

    alertBox.innerHTML = html;
    wrapper.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove()
    }, duration);
}

simpleAlert.error = (text, duration = 3000, animation = 'swing-in') => {
    let simpleAlert = document.getElementById('simple-alert');
    let wrapper = document.querySelector('.simple-alert-wrapper');

    if(!simpleAlert) {
        simpleAlert = document.createElement('div');
        simpleAlert.id = 'simple-alert'
        wrapper = document.createElement('div');
        wrapper.classList.add('simple-alert-wrapper');   
        document.body.appendChild(simpleAlert);
        simpleAlert.appendChild(wrapper);     
    }
    
    let html = `
        <div class="message">
            <div class="icon">
                <i class="far fa-check-circle"></i>
            </div>
            <div class="text">
                <span class="state">Error</span>
                <span class="msg">${text}</span>
            </div>
        </div>
    `

    let alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.classList.add('error');
    alertBox.classList.add(animation);

    alertBox.innerHTML = html;
    wrapper.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove()
    }, duration);
}

simpleAlert.info = (text, duration = 3000, animation = 'swing-in') => {
    let simpleAlert = document.getElementById('simple-alert');
    let wrapper = document.querySelector('.simple-alert-wrapper');

    if(!simpleAlert) {
        simpleAlert = document.createElement('div');
        simpleAlert.id = 'simple-alert'
        wrapper = document.createElement('div');
        wrapper.classList.add('simple-alert-wrapper');   
        document.body.appendChild(simpleAlert);
        simpleAlert.appendChild(wrapper);     
    }
    
    let html = `
        <div class="message">
            <div class="icon">
                <i class="far fa-check-circle"></i>
            </div>
            <div class="text">
                <span class="state">Info</span>
                <span class="msg">${text}</span>
            </div>
        </div>
    `

    let alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.classList.add('info');
    alertBox.classList.add(animation);

    alertBox.innerHTML = html;
    wrapper.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove()
    }, duration);
}

simpleAlert.warning = (text, duration = 3000, animation = 'swing-in') => {
    let simpleAlert = document.getElementById('simple-alert');
    let wrapper = document.querySelector('.simple-alert-wrapper');

    if(!simpleAlert) {
        simpleAlert = document.createElement('div');
        simpleAlert.id = 'simple-alert'
        wrapper = document.createElement('div');
        wrapper.classList.add('simple-alert-wrapper');   
        document.body.appendChild(simpleAlert);
        simpleAlert.appendChild(wrapper);     
    }
    
    let html = `
        <div class="message">
            <div class="icon">
                <i class="far fa-check-circle"></i>
            </div>
            <div class="text">
                <span class="state">Warning</span>
                <span class="msg">${text}</span>
            </div>
        </div>
    `

    let alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.classList.add('warning');
    alertBox.classList.add(animation);

    alertBox.innerHTML = html;
    wrapper.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove()
    }, duration);
}

export default simpleAlert