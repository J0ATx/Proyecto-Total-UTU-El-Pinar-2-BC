
function bucleMsg() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const terminal = document.getElementById('terminal_output');

    switch (randomNumber) {
        case 1:
            output_text.innerHTML += "<br><br><span class=\"ubuntu_bars\">[</span><span class=\"ubuntu_ok\"> OK </span><span class=\"ubuntu_bars\">] Starting</span> utuelpinar.service-proyecto <span class=\"ubuntu_bars\"> - Network.</span>";
            break;
        case 2:
            output_text.innerHTML += "<br><br><span class=\"ubuntu_bars\">[</span><span class=\"ubuntu_ok\"> OK </span><span class=\"ubuntu_bars\">] Finished</span> systemd-user-sessions.service <span class=\"ubuntu_bars\"> - Permit User Sessions...</span>";
            break;
        case 3:
            output_text.innerHTML += "<br><br><span class=\"ubuntu_bars\">[</span><span class=\"ubuntu_ok\"> OK </span><span class=\"ubuntu_bars\">] Finished</span> openvpn.service <span class=\"ubuntu_bars\"> - OpenVPN service...</span>";
            break;
        case 4:
            output_text.innerHTML += "<br><br><span class=\"ubuntu_bars\">[</span><span class=\"ubuntu_ok\"> OK </span><span class=\"ubuntu_bars\">] Starting</span> projects.start <span class=\"ubuntu_bars\"> - Starting projects...</span>";
            break;
        case 5:
            output_text.innerHTML += "<br><br><span class=\"ubuntu_bars\">[</span><span class=\"ubuntu_ok\"> OK </span><span class=\"ubuntu_bars\">] Waiting</span> server.wait <span class=\"ubuntu_bars\"> - Waiting server...</span>";
            break;
    }
    terminal.scrollTop = terminal.scrollHeight;
}