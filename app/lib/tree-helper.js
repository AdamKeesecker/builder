'use strict';

function getClass(height){
  if(height===0){
    return 'seed';
  }

  if(height<=12){
    return 'sprout';
  }

  if(height<=48){
    return 'treenager';
  }

  return 'adult';
}

function getWood(height){
  var woodAmt;
  if(height>=49){
    woodAmt = (height / 2);
    return woodAmt;
  }
}


exports.getWood=getWood;
exports.getClass=getClass;
