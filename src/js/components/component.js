class Component {
  constructor(wrapperSelector, templateSelector){
    this.wrapper = document.querySelector(wrapperSelector);
    this.template = Handlebars.compile(document.querySelector(templateSelector).innerHTML);
  }
  render(data, position=null) {
    const generatedHTML = this.template(data).trim();
    position ?
      this.wrapper.insertAdjacentHTML(position, generatedHTML)
      :
      (this.wrapper.innerHTML = generatedHTML);
  }
}

export default Component;
