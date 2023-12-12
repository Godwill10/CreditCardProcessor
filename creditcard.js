
class CreditCard{

  constructor(name, limit) {
    this.name = name;
    this.limit = limit;
    this.originalBalance = 0;
  }

  chargeUsers(amount) {

    let newBalance = amount + originalBalance;

    if(newBalance > limit){
      console.log(Error);
    }else{
      this.originalBalance += newBalance;
    }
  }

  payment(amount){
    this.originalBalance -= amount;
  }

}


class CreditCardProcessor {
  constructor () {
    this.cards = [];
  }

  issue(name, limit) {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].getInfo().name === name) return 'error';
    }
    this.cards.push(new CreditCard(name, limit));

  }

  charge(name, amount) {
    let userIndex = -1;
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].getInfo().name === name) userIndex = i;
    }
    if (userIndex > -1) {
      this.cards[userIndex].chargeUsers(amount);
    }
  }

  debit(name, amount) {
    let userIndex = -1;
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].getInfo().name === name) userIndex = i;
    }
    if (userIndex > -1) {
      this.cards[userIndex].payment(amount);
    }
  }

  get_balances() {
    let result = [];
    for (let i = 0; i < this.cards.length; i++) {
      result.push(this.cards[i].getInfo())
    }
    return result;
  }
}