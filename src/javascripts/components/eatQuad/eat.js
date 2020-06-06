import utils from '../../helpers/utils';
import './eat.scss';

let full = 100;

const buildEatQuad = () => {
  let domString = '<div class="mealTime">';

  domString += `<h3>Eat</h3>
        <h4>Current Strength level: ${full}</h4>
        <button id="healthyButton">Eat Freshly</button>
        <button id="junkButton">Eat Funly</button>
        `;

  domString += '</div>';

  utils.printToDom('#eat', domString);
};

const clickFreshlyButtonEvent = (e) => {
  e.preventDefault();
  full = Math.min(full + 10, 100);
  buildEatQuad();
};

const clickFunlyButtonEvent = (e) => {
  e.preventDefault();
  full -= 3;
  if (full < 0) full = 0;
  buildEatQuad();
};

$('body').on('click', '#healthyButton', clickFreshlyButtonEvent);
$('body').on('click', '#junkButton', clickFunlyButtonEvent);

export default { buildEatQuad };
