// Global Variables
var bookHotel1 = document.querySelector('#bookHotel1');
var bookHotel2 = document.querySelector('#bookHotel2');
var bookHotel3 = document.querySelector('#bookHotel3');

// Hotel Object Constructor
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function() {
    return this.rooms - this.booked;
  }

  // this.bookRoom = function(numOfRooms) {
  //   this.booked = this.booked + numOfRooms;
  // }
}

// Creating new hotels
var sheridanHotel = new Hotel('Sheridan', 100, 50);
var doubleTreeHotel = new Hotel('Double Tree', 200, 100);
var casaMarinaHotel = new Hotel('Casa Marina', 75, 25);

// Sheridan Hotel
var hotelAvailableRooms1 = sheridanHotel.checkAvailability();
var hotelDetails1 = sheridanHotel.name + ' rooms: ' + hotelAvailableRooms1;
var elHotel1 = document.querySelector('#hotel1 .hotel-deets');
elHotel1.textContent = hotelDetails1;

// Double Tree Hotel
var hotelAvailableRooms2 = doubleTreeHotel.checkAvailability();
var hotelDetails2 = doubleTreeHotel.name + ' rooms: ' + hotelAvailableRooms2;
var elHotel2 = document.querySelector('#hotel2 .hotel-deets');
elHotel2.textContent = hotelDetails2;

// Casa Marina Hotels
var hotelAvailableRooms3 = casaMarinaHotel.checkAvailability();
var hotelDetails3 = casaMarinaHotel.name + ' rooms: ' + hotelAvailableRooms3;
var elHotel3 = document.querySelector('#hotel3 .hotel-deets');
elHotel3.textContent = hotelDetails3;

// Event Listeners
bookHotel1.addEventListener('click', bookRoomSheridan);
bookHotel2.addEventListener('click', bookRoomDoubleTree);
bookHotel3.addEventListener('click', bookRoomCasaMarina);

// Sheridan Book Room Function
function bookRoomSheridan() {
  // Get value from input
  var input = document.querySelector('#hotelInput1');
  var roomsBooked = parseInt(input.value);
  // Increase value of booked rooms by amount in input
  sheridanHotel.booked = sheridanHotel.booked + roomsBooked;
  // Re-calculate available rooms
  hotelAvailableRooms1 = sheridanHotel.checkAvailability();
  hotelDetails1 = sheridanHotel.name + ' rooms: ' + hotelAvailableRooms1;
  input.value = '';
  // Overwrite available rooms on page
  elHotel1.textContent = hotelDetails1;
}

// Double Tree Book Room Function
function bookRoomDoubleTree() {
  // Get value from input
  var input = document.querySelector('#hotelInput2');
  var roomsBooked = parseInt(input.value);
  // Increase value of booked rooms by amount in input
  doubleTreeHotel.booked = doubleTreeHotel.booked + roomsBooked;
  // Re-calculate available rooms
  hotelAvailableRooms2 = doubleTreeHotel.checkAvailability();
  hotelDetails2 = doubleTreeHotel.name + ' rooms: ' + hotelAvailableRooms2;
  input.value = '';
  // Overwrite available rooms on page
  elHotel2.textContent = hotelDetails2;
}

// Casa Marina Book Room Function
function bookRoomCasaMarina() {
  // Get value from input
  var input = document.querySelector('#hotelInput3');
  var roomsBooked = parseInt(input.value);
  // Increase value of booked rooms by amount in input
  casaMarinaHotel.booked = casaMarinaHotel.booked + roomsBooked;
  // Re-calculate available rooms
  hotelAvailableRooms3 = casaMarinaHotel.checkAvailability();
  hotelDetails3 = casaMarinaHotel.name + ' rooms: ' + hotelAvailableRooms3;
  input.value = '';
  // Overwrite available rooms on page
  elHotel3.textContent = hotelDetails3;
}












//
