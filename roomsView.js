var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  	this.$button.click(()=> {
  		var roomName = prompt('Enter the name of your room');
  		Rooms.data[roomName] = 1;
  		this.renderRoom(roomName);
  	})
  },

  renderRoom: function(roomName) {
  	this.$select.append($(this.render({roomName:roomName})));
  },

  render: _.template(`<option><%-roomName%></option>`), 

  renderRooms: function() {
  	for(var i in Rooms.data) {
  		this.renderRoom(i);
  	}
  },

  addRooms: function() {
  	for(var i of Messages.data) {
  		if (!Rooms.data[i.roomname]) {
  			Rooms.data[i.roomname] = 1;
  		}
  	}
  }
};
