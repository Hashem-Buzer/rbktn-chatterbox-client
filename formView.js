var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var txt = $('#message').val();
    var room = $('option:selected').val();

    $('#message').val('');

    Parse.create({
      username: App.username,
      text: txt,
      roomname: room
    });

    App.startSpinner();
    App.fetch(App.stopSpinner);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};