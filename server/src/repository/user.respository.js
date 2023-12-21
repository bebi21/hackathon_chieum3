const db = require("../config/database");
async function checkUser(user) {
  try {
    console.log("resposi");
    console.log(user);
    const [result] = await db.execute(
      "select * from users where userName = ? ",
      [user.username]
    );
    return result[0];
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  checkUser,
};
