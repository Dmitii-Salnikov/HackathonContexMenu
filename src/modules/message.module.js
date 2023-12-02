import { Module } from '../core/module'

export class MessageModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger(message) {
        const messageContainer = document.createElement("div");
        messageContainer.className = "message-container";

        const messageImage = document.createElement("div");
        messageImage.classname = "message-image";
        messageImage.insertAdjacentHTML(
            "beforeend",
            `
    <svg viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#1b1a1a" stroke-width="0.288" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polygon points="22 2 22 16 14 16 8 21 8 16 2 16 2 2 22 2"></polygon></g></svg>
        `
        );

        const messageText = document.createElement("p");
        messageText.className = "message-text";
        messageText.textContent = message;
        messageContainer.append(messageText, messageImage);

        document.body.append(messageContainer);

        setTimeout(() => {
            messageContainer.style.display = "none";
        }, 5000);

        messageContainer.addEventListener('click', () => {
            messageContainer.style.display = "none"
        })
    }
}
const message = new MessageModule()
console.log(message)
