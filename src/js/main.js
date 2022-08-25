import { select, eventName } from './settings.js';
import Media from './components/media.js';
import CounterModal from './components/counterModal.js';

new Media(select.wrapperOf.mediaCounter, eventName.openCounterModal);
new CounterModal();
