import mockData from '../../../data/data.js';
import { select } from '../settings.js';
import Component from './component.js';

class Media extends Component {
  constructor(wrapperSelector, eventToEmit, endpoint='') {
    super(wrapperSelector, select.templateOf.media);
    this.endpoint = endpoint;
    this.eventToEmit = eventToEmit;
    this.initialize();
  }
  async getData(){  //It's async because normally there should be request to API (using this.endpoint: see constructor)
    return mockData;
  }
  async initialize(){
    const data = await this.getData();
    this.render(data);
    this.initActions();
  }
  initActions(){
    const button = this.wrapper.querySelector('button');
    button.addEventListener('click', () => {
      const evt = new Event(this.eventToEmit, {bubbles: true});
      button.dispatchEvent(evt);
    });
  }
}

export default Media;
