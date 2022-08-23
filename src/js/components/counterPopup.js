import { select, eventName, className } from '../settings.js';
import Popup from './popup.js';

class CounterPopup extends Popup {
  constructor(){
    super(select.templateOf.counterPopup, eventName.openCounterPopup, select.popup.closingCounterElems);
    this.counter = Number(localStorage.getItem('counter'));
    if(this.counter === null){
      this.actualizeCounter(true);
    }
  }
  getData() {
    this.actualizeCounter();
    return {counter: this.counter};
  }
  initActions(){
    super.initActions();
    this.resetButton = this.wrapper.querySelector(select.popup.resetCounterButton);
    if(this.counter > 5){
      this.renderResetButton();
    }
  }
  actualizeCounter(isReset=false){
    this.counter = isReset ? 0 : this.counter + 1;
    localStorage.setItem('counter', this.counter);
  }
  renderResetButton(){
    this.resetButton.classList.add(className.active);
    this.resetButton.addEventListener('click', () => {
      this.closePopup();
      this.actualizeCounter(true);
    }, { once: true });
  }
}

export default CounterPopup;
