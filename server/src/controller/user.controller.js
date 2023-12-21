const { checkUser } = require("../repository/user.respository");
const jwt = require("jsonwebtoken");
async function login(req, res) {
  console.log("controllers");
  const user = req.body;
  const result = await checkUser(user);
  console.log(result);
  if (!result) {
    return res.status(400).json({ message: "khong tim thay ten dang nhapus " });
  }
  if (result.password != user.password) {
    return res.status(400).json({ message: "mat khau  sai " });
  }
  console.log(result);
  const token = jwt.sign(
    { id: result.id, roles: result.roles },
    process.env.JWT_SECRET
  );

  return res
    .status(200)
    .json({ message: "dang nhap thanh cong", data: result, token: token });
}
module.exports = { login };
