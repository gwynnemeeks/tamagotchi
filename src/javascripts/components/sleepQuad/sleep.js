import utils from '../../helpers/utils';
import './sleep.scss';

let energy = 50;

const buildSleepQuad = () => {
  let domString = '<div class="sleepyTime">';

  domString += `<h3>Sleep</h3>
      <h4>Current energy level: ${energy}</h4>
      <button id="napButton">Nap</button>
      <button id="sleepButton">Sleep</button>
      `;

  domString += '</div>';

  utils.printToDom('#sleep', domString);
};

const clickSleepButtonsEvent = (e) => {
  const buttonId = e.target.id;

  if (energy === 100) return;

  if (buttonId === 'napButton') {
    energy += 50;
  } else {
    energy += 60;
  }

  if (energy > 100) energy = 100;

  console.error(energy);
  buildSleepQuad();
};

$('body').on('click', '#napButton', clickSleepButtonsEvent);
$('body').on('click', '#sleepButton', clickSleepButtonsEvent);

export default { buildSleepQuad };
