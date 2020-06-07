import '../styles/main.scss';
import eat from './components/eatQuad/eat';
import fight from './components/fightQuad/fight';
import sleep from './components/sleepQuad/sleep';
import play from './components/playQuad/play';

const init = () => {
  eat.buildEatQuad();
  fight.buildFightQuad();
  sleep.buildSleepQuad();
  play.buildPlayQuad();
};

init();
