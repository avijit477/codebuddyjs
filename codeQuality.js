// level {1/2/3}
// level 3

function getUsers(users) {
  const new_users = [];
  new_users = users.reduce((prev, curr, idx) => {
    let newUser = curr;
    newUser.id = idx;
    prev.push(newUser);
  });
  return new_users;
}
