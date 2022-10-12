function Hotel(name, rooms, bookd) {
    this.name = name;
    this.rooms = rooms;
    this.booked = bookd;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    }
}

var quayHotel = new Hotel('Quay',40,25);
var parkHotel new Hotel('Park',120,77);

var derails1 = quayHotel.name + ' rooms: ';
    derails1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;
var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var details2 = document.getElementById('hotel2');
elHotel2.textContent = details2;