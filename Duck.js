class Duck implments Quackable {
  Quackable quackable;

  quack() {

    try {
      sound = quackable.quack()
    } catch(e) {
      // 
    }
    if sound > 100 {
      console.loeg("SDDD")
    } else {

    }
  }
  
}

duck = new Duck()

ElectronicQuack quack = new ElectronicQuack()

Quackable quack = new ElectronicQuack()

duck.quackable = new ElectronicQuack()
duck.quack()

duck.quackable = new SupersonicQuack()
duck.quack()

interface Quackable {
  quack()
}

Class ElectronicQuack implements Quack {



  quack() {
    console.log("Electronic quack")
  }
}

Class SuccessMockQuack implements Quack {
  quack() {
    return 100
  }
}

Class ErorMockQuack implements Quack {
  quack() {
    raise new Exception()
  }
}

Class SupersonicQuack implements Quack {
  quack() {
    console.log("Electronic quack")
  }
}

Class RegularQuack implements Quack {
  quack() {
    console.log("Electronic quack")
  }
}