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

exports.checkboxDetail = (nodejs, vuejs, python, reactjs) => {
  let bersebrangan = false;
  if (
    reactjs != false &&
    python != false &&
    vuejs == false &&
    nodejs == false
  ) {
    bersebrangan = true;
  } else if (
    nodejs != false &&
    vuejs != false &&
    reactjs == false &&
    python == false
  ) {
    bersebrangan = true;
  } else {
    bersebrangan = false;
  }
  return bersebrangan;
};

exports.checkboxCreate = (nodejs, vuejs, react, python) => {
  let array = [nodejs, vuejs, react, python];
  let data = array.filter((element) => {
    return element !== undefined;
  });
  return data;
};

exports.checkboxDetailArray = (icon) => {
  let icons = icon;
  let nodejs = false;
  let vuejs = false;
  let python = false;
  let reactjs = false;
  for (let i in icons) {
    if (icons[i] == "node-js") {
      nodejs = true;
    } else if (icons[i] == "vuejs") {
      vuejs = true;
    } else if (icons[i] == "python") {
      python = true;
    } else if (icons[i] == "react") {
      reactjs = true;
    }
  }
  return [nodejs, vuejs, python, reactjs];
};
