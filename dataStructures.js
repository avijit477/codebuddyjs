// level {1/2/3}
// level 3
// 1

const user = {
  name: "Elie",
  job: "Instructor",
  workDetails: {
    type: "Part Time",
    hours: "40 hours",
  },
  educationQualifications: [
    {
      name: "Full Stack",
      type: "Certification",
    },
    {
      name: "Javascript",
      type: "Certification",
    },
  ],
};

function upperCase(user) {
  for (let i in user) {
    if (typeof user[i] === "object") {
      upperCase(user[i]);
    } else if (typeof user[i] === "array") {
      user[i].map((x) => {
        upperCase(x);
      });
    } else {
      obj[i] = obj[i].toUpperCase();
    }
  }
}

upperCase(user);

// 2
let obj = {};
function toObject(str) {
  let arr = str.split(",");
  let val = arr.reduce((acc, cur) => {
    let newArr = cur.split(":");
    let firstEl = newArr[0];
    let secondEl = newArr[1];

    if (acc[firstEl] === undefined) {
      let key = firstEl;
      let value = secondEl;
      return { ...arr, key: value };
    } else {
      return { ...acc, firstEl: acc[firstEl] + secondEl };
    }
  }, {});
  return value;
}
