import { select, eventName } from './settings.js';
import Media from './components/media.js';
import CounterPopup from './components/counterPopup.js';

new Media(select.wrapperOf.mediaCounter, eventName.openCounterPopup);
new CounterPopup();
