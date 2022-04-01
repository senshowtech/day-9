exports.checkboxLogic = (nodejs, vuejs, python, reactjs) => {
  if (nodejs != null) {
    nodejs = true;
  } else {
    nodejs = false;
  }
  if (vuejs != null) {
    vuejs = true;
  } else {
    vuejs = false;
  }
  if (python != null) {
    python = true;
  } else {
    python = false;
  }
  if (reactjs != null) {
    reactjs = true;
  } else {
    reactjs = false;
  }
};

exports.checkboxCreate = (nodejs, vuejs, python, react) => {
  let array = [];
  if (nodejs != null) {
    array.push(String(nodejs));
  }
  if (vuejs != null) {
    array.push(String(vuejs));
  }
  if (react != null) {
    array.push(String(react));
  }
  if (python != null) {
    array.push(String(python));
  }
  return array;
};
