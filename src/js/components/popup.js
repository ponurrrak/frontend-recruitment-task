import { select, className } from '../settings.js';
import Component from './component.js';

class Popup extends Component {
  constructor(templateSelector, eventToCapture, closingSelectors){
    super(select.wrapperOf.popup, templateSelector);
    this.closingSelectors = closingSelectors;
    this.closePopup = this.closePopup.bind(this);
    document.addEventListener(eventToCapture, async evt => {  // other popups may require data transmitted through event object
      const data = await this.getData(evt);  // other popups may require data available in async mode only
      this.render(data);
      this.initActions();
    });
  }
  getData(){  // It's mockup only. It must be overwritten in child classes
    return {};
  }
  render(data){
    super.render(data);
    this.addPopupChild(className.popupShell);
    this.addPopupChild(className.popupClosingCross);
  }
  addPopupChild(className){
    const newElement = document.createElement('div');
    newElement.classList.add(className);
    this.wrapper.appendChild(newElement);
  }
  initActions(){
    this.closingElements = this.wrapper.querySelectorAll(this.closingSelectors);
    for(const closingElement of this.closingElements){
      closingElement.addEventListener('click', this.closePopup);
    }
  }
  closePopup(){
    for(const closingElement of this.closingElements){
      closingElement && closingElement.removeEventListener('click', this.closePopup);
    }
    this.wrapper.innerHTML = '';
  }
}

export default Popup;
