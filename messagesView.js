var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(msg) {
  	var $msg = $(MessageView.render(msg));
  	this.$chats.append($msg);
  },

  render: function() {
  	this.$chats.html('');
  	Messages.data.forEach((message)=>{
  		console.log(message)
  		if(message.roomname === $('option:selected').val() && message.username && message.text){
  			this.renderMessage(message)
  		}
  	})
  }


};