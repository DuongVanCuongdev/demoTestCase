const users = [
  { username: "khachuong", password: "12345678", phoneNumber: "0823059750" },
  { username: "duongcuong", password: "12345678", phoneNumber: "0987363522" },
];



function login(username, password) {
  var exist = false;

  if (username.length == 0 || password.length == 0) {
    return {
      isSuccess: false,
      message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!",
    };
  } else {
    if (typeof username != "string" || typeof password != "string") {
      return {
        isSuccess: false,
        message: "Sai định dạng dữ liệu!",
      };
    } else {
      if (password.length > 6) {
        if (username == password) {
          return {
            isSuccess: false,
            message: "Tài khoản không được trùng với mật khẩu",
          };
        } else {
          if (
            !password.match(/^[A-Za-z0-9]*$/) ||
            !username.match(/^[A-Za-z0-9]*$/)
          ) {
            return {
              isSuccess: false,
              message: "Tài khoản hoặc mật khẩu không hợp lệ!",
            };
          } else {
            for (let i = 0; i <= users.length - 1; i++) {
              if (users[i].username != username) {
                exist = true;
              } else {
                if (
                  username == users[i].username &&
                  password == users[i].password
                ) {
                  return { isSuccess: true, message: "Đăng nhập thành công!" };
                } else {
                  return {
                    isSuccess: false,
                    message: "Đăng nhập không thành công!",
                  };
                }
              }
            }
            if (exist) {
              return {
                isSuccess: false,
                message: "Tài khoản đăng nhập không tồn tại",
              };
            }
          }
        }
      } else {
        return {
          isSuccess: false,
          message: "Mật khẩu phải lớn hơn 6 ký tự!",
        };
      }
    }
  }
}

function signUp(username, password, phoneNumber) {
  newUser = {
    username: username,
    password: password,
    phoneNumber: phoneNumber,
  };

  if (username.length == 0 || password.length == 0 || phoneNumber.length == 0) {
    return {
      isSuccess: false,
      message:
        "Tên đăng nhập, mật khẩu hoặc số điện thoại không được bỏ trống!",
    };
  } else {
    if (username.length <= 6 || password.length <= 6) {
      return {
        isSuccess: false,
        message: "Tên đăng nhập hoặc mật khẩu phải lớn hơn 6 ký tự",
      };
    } else {
      if (typeof username != "string" || typeof password != "string") {
        return {
          isSuccess: false,
          message: "Sai định dạng dữ liệu!",
        };
      } else {
        if (
          phoneNumber.length != 10 ||
          phoneNumber.charAt(0) != "0" ||
          isNaN(phoneNumber)
        ) {
          return {
            isSuccess: false,
            message: "Số điện thoại không đúng định dạng",
          };
        } else {
          if (
            !password.match(/^[A-Za-z0-9]*$/) ||
            !username.match(/^[A-Za-z0-9]*$/)
          ) {
            return {
              isSuccess: false,
              message: "Các trường không được chứa ký tự đặc biệt",
            };
          } else {
            if (username == password) {
              return {
                isSuccess: false,
                message: "Tài khoản và mật khẩu không được trùng nhau",
              };
            } else {
              for (let i = 0; i <= users.length - 1; i++) {
                if (username == users[i].username) {
                  return {
                    isSuccess: false,
                    message: "Tên đăng nhập đã được đăng ký",
                  };
                } else {
                  if (phoneNumber == users[i].phoneNumber) {
                    return {
                      isSuccess: false,
                      message: "Số điện thoại đã được đăng ký",
                    };
                  } else {
                    users.push(newUser);
                    return { isSuccess: true, message: "Đăng ký thành công" };
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function changePassword(username, oldPassword, newPassword) {
  var exist = false;

  if (
    username.length == 0 ||
    oldPassword.length == 0 ||
    newPassword.length == 0
  ) {
    return {
      isSuccess: false,
      message:
        "Tên đăng nhập, mật khẩu cũ hoặc mật khẩu mới không được bỏ trống!",
    };
  } else {
    if (
      username.length <= 6 ||
      oldPassword.length <= 6 ||
      newPassword.length <= 6
    ) {
      return {
        isSuccess: false,
        message:
          "Tên đăng nhập, mật khẩu hoặc mâth khẩu mới phải lớn hơn 6 ký tự",
      };
    } else {
      if (
        typeof username != "string" ||
        typeof oldPassword != "string" ||
        typeof newPassword != "string"
      ) {
        return {
          isSuccess: false,
          message: "Sai định dạng dữ liệu!",
        };
      } else {
        if (
          !oldPassword.match(/^[A-Za-z0-9]*$/) ||
          !username.match(/^[A-Za-z0-9]*$/) ||
          !newPassword.match(/^[A-Za-z0-9]*$/)
        ) {
          return {
            isSuccess: false,
            message: "Các trường không được chứa ký tự đặc biệt",
          };
        } else {
          for (let i = 0; i <= users.length - 1; i++) {
            if (users[i].username != username) {
              exist = true;
            } else {
              if(username == newPassword){
                return {isSuccess: false, message: "Tài khoản và mật khẩu không được trùng nhau",};
              } else {
                if(users[i].username == username && oldPassword == users[i].password){
                  users[i].password = newPassword;
                  return {isSuccess: true, message: "Đổi mật khẩu thành công"};
                } else {
                  return {isSuccess: true, message: "Đổi mật khẩu không thành công"};
                }
              }
            }
          }
          if (exist) {
            return {
              isSuccess: false,
              message: "Tài khoản không tồn tại",
            };
          }
        }
      }
    }
  }
}

module.exports.login = login;
module.exports.signUp = signUp;
module.exports.changePassword = changePassword;
