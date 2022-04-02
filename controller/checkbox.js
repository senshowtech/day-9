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

exports.checkboxCreate = (nodejs, vuejs, react, python) => {
  let array = [nodejs, vuejs, react, python];
  let data = array.filter((element) => {
    return element !== undefined;
  });
  return data;
};

exports.checkboxDetail = (nodejs, vuejs, python, reactjs) => {
  let bersebrangan = false;
  if (reactjs != null && python != null && vuejs == null && nodejs == null) {
    bersebrangan = true;
  } else if (
    nodejs != null &&
    vuejs != null &&
    reactjs == null &&
    python == null
  ) {
    bersebrangan = true;
  } else {
    bersebrangan = false;
  }
  return bersebrangan;
};
