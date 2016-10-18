// postition won't work correctly if you
// use a custom userChrome.css that modifies
// the browsers default content display.
// UI mods should not affect it.

// TODO: CLI commands
// TODO: Search provider switcher (Google, Duck Duck Go, Yahoo, Wikipedia, Reddit, Wolfram Alpha, etc)
// TODO: Add easter eggs back in from later iteration that was lost years ago.
// TODO: Look into alternate themes (Old CRT terminal emulator theme?)

$(document).ready(function() {
	$( "#container" ).draggable().position({
	my: "center",
	at: "center",
	of: window
	});
});

// Need to update this to reposition on window resize !!
// Might not be needed, as its going to be dragged anyway.
