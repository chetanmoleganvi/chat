class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet = () =>  {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  };

  help = () => {
    const greetingMessage = this.createChatBotMessage("ya sure sir how can i help you")
    this.updateChatbotState(greetingMessage)
  };
  blood =() => {
    const greetingMessage = this.createChatBotMessage("which blood group u need ")
    this.updateChatbotState(greetingMessage)


  }
  bloodgroup =() => {
    const greetingMessage = this.createChatBotMessage("sure sir call this no 9880104339 to all details")
    this.updateChatbotState(greetingMessage)
  }
  thanks =() => {
    const greetingMessage = this.createChatBotMessage("Thanku you sir, you are always welcome")
    this.updateChatbotState(greetingMessage)
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "JavaScript is the world's most popular programming language.:",
      {
        widget: "javascriptLinks",
      }, 
     
      );

    this.updateChatbotState(message);
  };
  handledatavisulizationList = () => {
    const message = this.createChatBotMessage(
      "want toknow more about it",
      {
        widget: "datavisualizationLink",
      }, 
     
      );

    this.updateChatbotState(message);
  };

  handleapisList = () => {
    const message = this.createChatBotMessage(
      "hhhhhhh",
      {
        widget: "apisLink",
      },
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;