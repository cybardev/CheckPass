const $$ = (el) => document.querySelector(el);

let componentData = {
    inputFields: ["username", "email", "password"],
    crackTime: "0 seconds",
    checkPass() {
        passPhrase = $$("#password").value;
        this.crackTime =
            passPhrase.length != 0
                ? zxcvbn(passPhrase, [
                    $$("#username").value,
                    $$("#email").value,
                ]).crack_times_display.offline_fast_hashing_1e10_per_second
                : (this.crackTime = "0 seconds");
    },
};
