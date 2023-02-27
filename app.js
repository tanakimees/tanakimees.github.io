function copyEmail() {
    if(navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText("tanak.kristo2005@gmail.com");
        alert("Email address has been copied to clipboard: tanak.kristo2005@gmail.com");
    }
    else {
        let textArea = document.createElement("textarea");
        textArea.value = "tanak.kristo2005@gmail.com";
        textArea.style.position = "fixed";
        textArea.style.left = "-99999px";
        textArea.style.top = "-99999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}