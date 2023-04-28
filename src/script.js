/**
 * Aliases to create DOM objects using $() like in JQuery
 *
 * @author cybardev
 * @param {String} selector selector for the element
 * @returns DOM Object for specified element
 */
const $$ = (selector) => {
    return selector[0] === "#"
        ? document.querySelector(selector)
        : document.querySelectorAll(selector);
};

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
