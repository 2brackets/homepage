

export class Mail {

    private name: HTMLInputElement;
    private email: HTMLInputElement;
    private message: HTMLTextAreaElement;
    private statusMessage: HTMLLabelElement
    private elementDict: Map<string , string> 

    constructor(name: HTMLInputElement, email: HTMLInputElement, message: HTMLTextAreaElement, statusMessage: HTMLLabelElement) {
        this.name = name;
        this.email = email
        this.message = message
        this.statusMessage = statusMessage
        this.elementDict = this.createMap()
        this.sendMail()
    };

    private createMap(): Map<string, string> {
        return new Map([
            ['name', this.name.value],
            ['email', this.email.value],
            ['message', this.message.value]
        ])
    }

    public emptyValue(): boolean {
        for(let [key, value] of this.elementDict){
            if(value === "" || value == null) {
                this.statusMessage.style.color = "#FFFFFF"
                this.statusMessage.textContent = `Oops! you forgot to fill in your ${key}`
                return true
            }
        }
        return false
    }

    private emailCorrect(): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.elementDict.get('email')).toLowerCase()); 
    }

    private sendMail(): void {
        if(!this.emptyValue()) {
            if(this.emailCorrect()){
                this.statusMessage.style.color = "#0CF0AF" 
                this.statusMessage.textContent = "Sent!"
                this.name.value = ""
                this.email.value = ""
                this.message.value = ""
            }
            else {
                this.statusMessage.style.color = "#FFFFFF"
                this.statusMessage.textContent = `Oops! Your email address is incorrect: ${this.elementDict.get('email')}`
            }
        }
    }
};