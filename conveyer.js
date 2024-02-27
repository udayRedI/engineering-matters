class Conveyer {

  _addHead(Thinkable person) {
    // How to say anyone who has a head
    head = new Head()
    person.addHead(head)
  }

  _addHand(Writable person) {
    // How to say anyone who has a hand
    hand = new Hand()
    person.addHand(hand)
  }

  _addLeg(Walkable person) {
    // How to say anyone who has a leg
    leg = new Leg()
    person.addLeg(leg)
  }

  addPersonParts(Person person) {
    // How to say anyone who has a head, hand and leg.
    this._addHead(person as Thinkable)
    this._addHand(person as Writable)
    this._addLeg(person as Walkable)
  }

  addZombieParts(Zombie zombie) {
    // How to say anyone who has a head, hand and leg.
    this._addHand(zombie as Writable)
    this._addLeg(zombie as Walkable)
  }
}

interface Walkable{
  addLeg()
}

interface Thinkable{
  addHead()
}

interface Writable{
  addHand()
}


{
  addHand : function(hand) {

  }
} as Writable


{
  hand: new Hand(),
}


class Person implements Walkable, Thinkable, Writable {
  head
  hand
  leg

  addHead(head) {

  }

  addHand(hand) {

  }

  addLeg(leg) {

  }
 }

 class Zombie implements Walkable, Writable {

  addHand(hand) {

  }

  addLeg(leg) {

  }
 }