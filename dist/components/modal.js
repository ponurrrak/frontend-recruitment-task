import{select,className}from"../settings.js";import Component from"./component.js";class Modal extends Component{constructor(e,t,s){super(select.wrapperOf.modal,e),this.wrapperParent=this.wrapper.parentElement,this.closingSelectors=s,this.closeModal=this.closeModal.bind(this),document.addEventListener(t,async e=>{e=await this.getData(e);this.render(e),this.initActions()})}getData(){return{}}render(e){super.render(e,"beforeEnd"),this.wrapperParent.classList.add(className.active)}initActions(){this.closingElements=this.wrapperParent.querySelectorAll(this.closingSelectors);for(const e of this.closingElements)e.addEventListener("click",this.closeModal)}closeModal(){for(const e of this.closingElements)e&&e.removeEventListener("click",this.closeModal);this.wrapper.removeChild(this.wrapper.lastChild),this.wrapperParent.classList.remove(className.active)}}export default Modal;