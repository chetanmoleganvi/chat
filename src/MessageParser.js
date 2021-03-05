class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
  
    }
    if (lowerCaseMessage.includes("i need help")) {
      this.actionProvider.help()
  
    }
    if (lowerCaseMessage.includes("need of blood")) {
      this.actionProvider.blood()

    }
    if (lowerCaseMessage.includes("b postive")) {
      this.actionProvider.bloodgroup()


    }
    if (lowerCaseMessage.includes("thanku you")) {
      this.actionProvider.thanks()

      
    }
  }

}

export default MessageParser