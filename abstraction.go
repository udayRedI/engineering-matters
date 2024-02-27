package main

import (
	"fmt"
)

type Car struct {
	KeyInserted           bool
	ElectricalsSwitchedOn bool
	SeatBeltChecked       bool
	FuelMixed             bool
	FuelInjected          bool
	FuelIgnited           bool
	SmokeRouted           bool
}

func (c *Car) InsertKey() {
	c.KeyInserted = true
	fmt.Println("Key inserted")
}

func (c *Car) SwitchOnElectricals() {
	c.ElectricalsSwitchedOn = true
	fmt.Println("Electricals switched on")
}

func (c *Car) CheckSeatBelt() {
	c.SeatBeltChecked = true
	fmt.Println("Seat belt checked")
}

func (c *Car) MixFuelWithAir() {
	c.FuelMixed = true
	fmt.Println("Fuel mixed with air")
}

func (c *Car) InjectFuelIntoCylinder() {
	c.FuelInjected = true
	fmt.Println("Fuel injected into cylinder")
}

func (c *Car) IgniteFuel() {
	c.FuelIgnited = true
	fmt.Println("Fuel ignited")
}

func (c *Car) RouteSmokeThroughExhaust() {
	c.SmokeRouted = true
	fmt.Println("Smoke routed through exhaust")
}

func main() {

	car := &Car{}

	car.InsertKey()
	car.SwitchOnElectricals()
	car.CheckSeatBelt()
	car.MixFuelWithAir()
	car.InjectFuelIntoCylinder()
	car.IgniteFuel()
	car.RouteSmokeThroughExhaust()

	fmt.Printf("Car status: %+v\n", *car)
}
