function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
  }
  
  ElectricCar.prototype = Object.create(Car.prototype);
  ElectricCar.prototype.constructor = ElectricCar;
  
  ElectricCar.prototype.getDescription = function() {
    return this.make + " " + this.model + " (" + this.year + ") - Range: " + this.range + " miles";
  };
  
  // Creating an instance of ElectricCar
  var teslaModelS = new ElectricCar("Tesla", "Model S", 2019, 300);
  
  // Calling getDescription method on the instance
  var description = teslaModelS.getDescription();
  
  console.log(description);