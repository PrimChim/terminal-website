let form = document.getElementById('terminal-form');
let command = '';

const commands = {
    "clear": "clear the terminal",
    "echo": "print out anything",
    "education": "my education background",
    "email": "send an email to me",
    "gui": "go to my portfolio in GUI",
    "help": "check available commands",
    "history": "view command history",
    "projects": "view projects that I've coded",
    "socials": "check out my social accounts"
}

document.addEventListener('click', () => {
    document.getElementById('command').focus()
})

form.onsubmit = function (e) {
    e.preventDefault();
    let q = document.createElement('div');
    let input = document.getElementById('command');
    let output = document.getElementById('terminal-output');
    let value = input.value;

    q.innerHTML = `<label >
    <span class="user">user</span>
    <span class="neon">@
    <span class="host">pritamgurung.com.np</span>
    <span class="neon">: ~$</span>  <span class='user'>${value}</span></label>`;
    output.appendChild(q);

    if (!(value in commands)){
        q.innerHTML += `
        <div style='color: red;'>${value} command not found</div>`;
        output.appendChild(q);
    }

    if (value === 'gui') {
        window.location.href = 'https://pritamgurung.com.np';
    }

    if (value === 'socials'){
        q.innerHTML += `<div><span class='neon'>My Social Links are:</span></div>
            <a href='https://github.com/PrimChim'>GitHub</a> <a href='https://linkedin.com/'>LinkedIn</a>`;
        output.appendChild(q);
    }

    if (value === 'help') {
        for (let key in commands) {
            let div = document.createElement('div');
            div.classList.add('output');
            div.innerHTML = '<span class="left">' + key + '</span>' + '<span class="right"> - ' + commands[key] + '</span>';
            output.appendChild(div);
        }

    }
    input.value = '';
}