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

form.onsubmit = function (e) {
    e.preventDefault();
    let input = document.getElementById('command');
    let value = input.value;
    if (value === 'help') {
        let q = document.createElement('p');
        let container = document.getElementById('terminal-container');
        q.innerHTML = `<label for="command">
            <span class="user">user</span>
            <span class="neon">@
            <span class="host">ethicalhck</span>
            <span class="neon">: ~$</span>  <span class='user'>help</span></label>`;

        for (let key in commands) {
            let div = document.createElement('div');
            div.classList.add('output');
            div.innerHTML = '<span class="left">'+ key + '</span>'+'<span class="right"> - ' + commands[key] + '</span>';
            container.appendChild(div);
            container.appendChild(q);
        }

    }
    input.value = '';
}