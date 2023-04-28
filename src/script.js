const $$ = (el) => document.querySelector(el);

let globalData = {
    inputFields: ["username", "email", "password"],
    strengthReport: { crackTime: "", grade: "" },
    crackTime: "0 seconds",
    checkPass() {
        passPhrase = $$("#password").value;
        if (passPhrase.length != 0) {
            this.crackTime = zxcvbn(passPhrase, [
                $$("#username").value,
                $$("#email").value,
            ]).crack_times_display.offline_fast_hashing_1e10_per_second;
        } else {
            this.crackTime = "0 seconds";
        }
    },
};
