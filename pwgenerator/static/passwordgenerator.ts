const lengthInput = document.getElementById("passwordLengthInput") as HTMLInputElement;
const lengthOutput = document.getElementById("characterLenOutput") as HTMLParagraphElement;
const uppercaseCheckbox = document.getElementById("uppercaseCheckbox") as HTMLInputElement;
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox") as HTMLInputElement;
const numbersCheckbox = document.getElementById("numbersCheckbox") as HTMLInputElement;
const specialCharCheckbox = document.getElementById("specialCharCheckbox") as HTMLInputElement;
const generateButton = document.querySelector("button") as HTMLButtonElement;
const passwordOutput = document.getElementById("passwordOutput") as HTMLInputElement;

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// ... (previous code remains the same)

const passwordStrengthOutput = document.getElementById("passwordstrengthOutput") as HTMLSpanElement;
const passwordStrengthBar = document.querySelector(".bg-blue-700") as HTMLDivElement;

function calculatePasswordStrength(password: string): number {
    let strength = 0;

    // Length criteria
    if (password.length >= 8) strength += 1;
    if (password.length >= 10) strength += 1;

    // Character type criteria
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password)) strength += 1;

    return strength;
}

function updatePasswordStrength(password: string): void {
    const strength = calculatePasswordStrength(password);
    const maxStrength = 6;
    const strengthPercentage = Math.round((strength / maxStrength) * 100);

    passwordStrengthOutput.textContent = `${strengthPercentage}%`;
    passwordStrengthBar.style.width = `${strengthPercentage}%`;
}


function calculateLength(): void {
    const length = lengthInput.value;
    lengthOutput.textContent = length;
}

function generatePassword(): void {
    const length = parseInt(lengthInput.value);
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSpecialChars = specialCharCheckbox.checked;

    let availableChars = "";
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeLowercase) availableChars += lowercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSpecialChars) availableChars += specialChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    passwordOutput.value = password;
    updatePasswordStrength(password);
}

lengthInput.addEventListener("input", calculateLength);
generateButton.addEventListener("click", generatePassword);