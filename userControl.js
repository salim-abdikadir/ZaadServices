exports = class userControl {
  static getUserByNum = function (phoneNum) {
    return users.filter((s) => s.phoneNum === phoneNum)[0];
  };
  getUserByNum = function (phoneNum) {
    return users.filter((s) => s.phoneNum === phoneNum)[0];
  };
  static login = function (phoneNum, password) {
    const user = this.getUserByNum(phoneNum);
    if (user)
      if (password == user.password) return user;
      else return false;
    else return false;
  };
  static showBalance = function (user) {
    return user.balance;
  };
  static sendMoney = function (sender, receiver, amount) {
    if (sender.balance < amount) return "small amount";
    sender.balance -= amount;
    receiver.balance += amount;
  };
};
