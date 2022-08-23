import{select,eventName,className}from"../settings.js";import Popup from"./popup.js";class CounterPopup extends Popup{constructor(){super(select.templateOf.counterPopup,eventName.openCounterPopup,select.popup.closingCounterElems),this.counter=Number(localStorage.getItem("counter")),null===this.counter&&this.actualizeCounter(!0)}getData(){return this.actualizeCounter(),{counter:this.counter}}initActions(){super.initActions(),this.resetButton=this.wrapper.querySelector(select.popup.resetCounterButton),5<this.counter&&this.renderResetButton()}actualizeCounter(t=!1){this.counter=t?0:this.counter+1,localStorage.setItem("counter",this.counter)}renderResetButton(){this.resetButton.classList.add(className.active),this.resetButton.addEventListener("click",()=>{this.closePopup(),this.actualizeCounter(!0)},{once:!0})}}export default CounterPopup;