import utils from '../../helpers/utils';
import './play.scss';

let fun = 50;

const buildPlayQuad = () => {
  let domString = '<div class="playTime">';

  domString += `<h3>Play</h3>
    <h4>Current strength level: ${fun}</h4>
    <button id="superButton">Awesome Fun Times</button>
    <button id="kindaButton">Adequate Fun Times</button>
    `;

  domString += '</div>';

  utils.printToDom('#play', domString);
};

const clickAwesomeButtonEvent = (e) => {
  e.preventDefault();
  fun = Math.min(fun + 50, 100);
  buildPlayQuad();
};

const clickAdequateButtonEvent = (e) => {
  e.preventDefault();
  fun = Math.min(fun + 2, 100);
  buildPlayQuad();
};

$('body').on('click', '#superButton', clickAwesomeButtonEvent);
$('body').on('click', '#kindaButton', clickAdequateButtonEvent);

export default { buildPlayQuad };
