'use strict';

const btnOpen = document.querySelector('.open-rules');
// const btnClose = document.querySelector('.close-rules');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnPrecision = document.querySelector('.btn--precision');
const btnHard = document.querySelector('.btn--hard');
const btnRules = document.querySelector('.open-rules');
const btnReset = document.querySelector('.btn--reset');

const stone = document.getElementById('stone');
const hits = document.getElementById('hits');
const fails = document.getElementById('fails');
const rewardItems = document.getElementById('rewardItems');
const outOfHits = document.querySelector('.outOfHits');

//pictures
// const stackedWood = document.getElementById('stacked-wood');
// const stackedWood2 = document.getElementById('stacked-wood2');
// const stackedWood3 = document.getElementById('stacked-wood3');
// const stackedWood4 = document.getElementById('stacked-wood4');
// const stackedWood5 = document.getElementById('stacked-wood5');
// const markOfEnt = document.getElementById('markOfEnt');
// const ancientResin = document.getElementById('ancientResin');
// const treeHeart = document.getElementById('treeHeart');

// let hitCount = 0;
// let failCount = 0;
// let woodCount = 0;
// let playing = true;
// let rewardsArray = [];

let hitCount, failCount, stoneCount, playing, rewardsArray;

const reset = () => {
  hitCount = 0;
  failCount = 0;
  stoneCount = 0;
  rewardsArray = [];
  playing = true;

  stone.textContent = 0;
  hits.textContent = 0;
  fails.textContent = 0;
  rewardItems.textContent = '???';
  outOfHits.classList.add('hidden');

  //   stackedWood.classList.add('hidden');
  //   stackedWood2.classList.add('hidden');
  //   stackedWood3.classList.add('hidden');
  //   stackedWood4.classList.add('hidden');
  //   stackedWood5.classList.add('hidden');
  //   markOfEnt.classList.add('hidden');
  //   treeHeart.classList.add('hidden');
  //   ancientResin.classList.add('hidden');
};
reset();

// Need to make sure it displays correctly if 2 or more items are received
const rare = [
  'Mark of Ent',
  'Ancient Resin',
  'Heart of the Tree',
  'Orphaned Baby Owl-Bear',
  'Orphaned Baby Tree Ent',
];

// const woodPictures = () => {
//   if (woodCount <= 30) {
//     stackedWood.classList.remove('hidden');
//   } else if (woodCount > 30 && woodCount <= 60) {
//     stackedWood2.classList.remove('hidden');
//   } else if (woodCount > 60 && woodCount <= 90) {
//     stackedWood3.classList.remove('hidden');
//   } else if (woodCount > 90 && woodCount <= 120) {
//     stackedWood4.classList.remove('hidden');
//   } else {
//     stackedWood5.classList.remove('hidden');
//   }
// };

// const markOfEntPicture = () => {
//   if (rewardsArray.includes('Mark of Ent')) {
//     markOfEnt.classList.remove('hidden');
//   }
// };

// const ancientResinPicture = () => {
//   if (rewardsArray.includes('Ancient Resin')) {
//     ancientResin.classList.remove('hidden');
//   }
// };

// const treeHeartPicture = () => {
//   if (rewardsArray.includes('Heart of the Tree')) {
//     treeHeart.classList.remove('hidden');
//   }
// };

btnReset.addEventListener('click', reset);

btnRules.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', function () {
  closeRules();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeRules();
  }
});

const closeRules = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const success = () => {
  hitCount++;
  hits.textContent = hitCount;
  stone.textContent = woodCount;
  //   woodPictures();
  //   markOfEntPicture();
  //   treeHeartPicture();
  //   ancientResinPicture();
};

const failing = () => {
  hitCount++;
  hits.textContent = hitCount;
  failCount++;
  fails.textContent = failCount;
};

const zeroHits = () => {
  outOfHits.classList.remove('hidden');
};

btnPrecision.addEventListener('click', function () {
  let dieValue = 0;
  if (playing) {
    if (hitCount < 20 && failCount < 3) {
      const dice = Math.ceil(Math.random() * 6000);
      if (dice <= 1000) {
        dieValue = 1;
        failing();
      } else if (dice > 1000 && dice <= 2000) {
        dieValue = 2;
        stoneCount += dieValue;
        success();
      } else if (dice > 2000 && dice <= 3000) {
        dieValue = 3;
        stoneCount += dieValue;
        success();
      } else if (dice > 3000 && dice <= 4000) {
        dieValue = 4;
        stoneCount += dieValue;
        success();
      } else if (dice > 4000 && dice <= 5000) {
        dieValue = 5;
        stoneCount += dieValue;
        success();
      } else if (dice > 5000 && dice <= 5600) {
        dieValue = 6;
        stoneCount += dieValue;
        success();
      } else if (dice > 5600 && dice <= 5900) {
        dieValue = 7;
        rewardsArray.push(rare[0]);
        rewardItems.textContent = rewardsArray.join(', ');
        stoneCount += 6;
        success();
      } else if (dice > 5900 && dice <= 5950) {
        dieValue = 8;
        rewardsArray.push(rare[1]);
        rewardItems.textContent = rewardsArray.join(', ');
        stoneCount += 6;
        success();
      } else if (dice > 5950 && dice <= 5980) {
        rewardsArray.push(rare[2]);
        rewardItems.textContent = rewardsArray.join(', ');
        dieValue = 9;
        stoneCount += 6;
        success();
      } else if (dice > 5980 && dice <= 5995) {
        rewardsArray.push(rare[3]);
        rewardItems.textContent = rewardsArray.join(', ');
        dieValue = 10;
        stoneCount += 6;
        success();
      } else {
        rewardsArray.push(rare[4]);
        rewardItems.textContent = rewardsArray.join(', ');
        dieValue = 11;
        stoneCount += 6;
        success();
      }
    } else {
      playing = false;
      zeroHits();
      console.log('Out of hits');
    }
  }
});

// Add special resources
// roll 1000
// convert 1000 rolls to be equivalent to a 20
// high rolls out of a thousand will give special resource

btnHard.addEventListener('click', function () {
  if (playing) {
    const dice = Math.ceil(Math.random() * 20);
    if (hitCount < 20 && failCount < 3) {
      if (dice <= 5) {
        failing();
      } else {
        stoneCount += dice;
        success();
      }
    } else {
      playing = false;
      zeroHits();
      console.log('Out of hits');
    }
  }
});
