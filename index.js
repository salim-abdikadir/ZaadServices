// TODO: Make a system for entering the application
const prompt = require("prompt-sync")();
const User = require("./UserModel");
const users = require("./db");
const userControl = require("./userControl");

let user = false;
const options = [
  "1.Show Balance",
  "2.Show Transactions",
  "3.Send Money",
  "4.Merchant",
  "5.Management",
  "6.Heating up the branch with nonesense",
  "7. Testing the branching and pushing of A branch",
  "0. back",
];
const ManagementOptions = [
  "1.change password",
  "2.change language",
  "3.show myname",
];
while (true) {
  console.log("Welcome to our Zaad Service");
  while (true) {
    const phoneNumber = prompt("Enter your phoneNumber: ");
    const password = prompt("Enter your pin ");
    user = userControl.login(phoneNumber, password);
    if (!user) {
      console.log("Phone number or pin is wrong try Again");
      continue;
    } else {
      while (true) {
        const option = prompt(options.join("; ")).trim();
        if (option === "1") {
          console.log(user.balance);
          break;
        } else if (option === "3") {
          const recieverNum = prompt(
            "please enter the recievers phone number: "
          );
          while (true) {
            const reciever = userControl.getUserByNum(recieverNum);
            if (!reciever) {
              console.log("This user doesn't have a Zaad");
              break;
            } else if (reciever.phoneNum === user.phoneNum) {
              console.log("You can't send money to yourself");
              break;
            } else {
              const amount = prompt("Enter the amount: ");
              while (true) {
                if (isNaN(parseFloat(amount))) {
                  console.log("Please Enter a valid number.");
                  continue;
                } else if (parseFloat(amount) > user.balance) {
                  console.log("your balance is not enough " + user.balance);
                  break;
                } else {
                  userControl.sendMoney(user, reciever, parseFloat(amount));
                  console.log(
                    `You've send ${amount} to ${
                      reciever.fullName
                    } at ${new Date(Date.now()).toTimeString()}`
                  );
                  break;
                }
                break;
              }
            }
            break;
          }
          break;
        } else if (option === "2") {
          user.transactions.foreEach((transaction) => {
            console.log(transaction);
          });
          break;
        } else if (option === 0) break;
        else {
          console.log("Choose from the options available");
          continue;
        }
      }
      break;
    }
  }
}
console.log("Thanks for using our services");
