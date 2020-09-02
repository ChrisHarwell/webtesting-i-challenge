module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement >= 0 && item.enhancement <= 20 || item.durability >= 0 && item.durability <= 100) {
      if (item.enhancement < 20 && item.enhancement !== 20) {
        item.enhancement += 1;
        return { ...item };
      }      
    return {...item}
  } else {
    return false;
  }
}

function fail(item) {
  if(item.enhancement < 15) {
     item.durability -= 5;
     return {...item};
  } else if(item.enhancement >= 15 && item.enhancement <= 16) {
      item.durability -= 10;
     return {...item}
  } else if(item.enhancement >= 17) {
    item.durability -= 1;
    return {...item}
  } else {
    return console.error("You shouldn't be here")
  }
}

function repair(item) {
  delete item.durability;
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
