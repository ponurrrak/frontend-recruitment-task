class Component {
  constructor(wrapperSelector, templateSelector){
    this.wrapper = document.querySelector(wrapperSelector);
    this.template = Handlebars.compile(document.querySelector(templateSelector).innerHTML);
  }
  render(data) {
    const generatedHTML = this.template(data).trim();
    this.wrapper.innerHTML = generatedHTML;
  }
}

export default Component;
