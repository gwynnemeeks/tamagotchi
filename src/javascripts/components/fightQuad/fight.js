import utils from '../../helpers/utils';
import './fight.scss';

let strength = 100;

const buildFightQuad = () => {
  let domString = '<div class = "battleTime">';

  domString += `<h3>FIGHT</h3>
    <h4>Current Strength level: ${strength}</h4>
    <button id="runButton">Flee</button>
    <button id="violenceButton">Finish Them!</button>
    `;

  domString += '</div>';

  utils.printToDom('#fight', domString);
};

const clickFleeButtonEvent = (e) => {
  e.preventDefault();
  strength = Math.min(strength + 1, 100);
  buildFightQuad();
};

const clickFinishThemButtonEvent = (e) => {
  e.preventDefault();
  strength -= 10;
  if (strength < 0) strength = 0;
  buildFightQuad();
};

$('body').on('click', '#runButton', clickFleeButtonEvent);
$('body').on('click', '#violenceButton', clickFinishThemButtonEvent);

export default { buildFightQuad };
