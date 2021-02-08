$(document).ready(function () {
let currentUserId;

	$.get("/api/user_data").then(function (data) {
		 currentUserId = data.id;
	});



	// update button in my events component
$("#createPartyBtn").on("click", event => {
  event.preventDefault();
  let btn = event.target;
  let eventId = $(btn).data("id");
  let data = {
    title: $(`#event${eventId}-title`).val().trim(),
    description: $(`#event${eventId}-description`).val().trim(),
  }
  updateEvent(eventId, data).then(() => {
    window.location.replace("./main")
  })
})
});
// trying tringtr atiorfdpfakjdhfka
$("#createPartyBtn").on(`submit`, event => {
	event.preventDefault();

	var newparty = {
		name: $("#eventTitle").val().trim()
	};

	$.ajax("/api/newparty", {
		type: `POST`,
		data: newparty
	}).then(() => {
		location.reload();
	});




});
