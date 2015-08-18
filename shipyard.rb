class Ship
  def initialize
    @name = "SharkRocket TinCan"
    @crew = []
    @propulsion = nil
  end

  def mount_propulsion(rocket)
    @propulsion = rocket
  end

  def fuel_ship(fuel_amount)
    @propulsion.fuel += fuel_amount
  end
end

ship = Ship.new

launchpad(ship, names, rocket)
