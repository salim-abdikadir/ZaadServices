class User {
  constructor(phoneNum, password, fullName, balance = 0, IsMerchant = false) {
    this.phoneNum = phoneNum;
    this.password = password;
    this.fullName = fullName;
    this.balance = balance;
    this.IsMerchant = IsMerchant;
  }
  transactions = [];
}
exports = User;
