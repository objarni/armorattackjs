Finite State Machine Runner
===========================

The finite state machine runner object keeps track of the state machines
currently running, and provides an API for machines (and other code) to
add/remove machines, and publish events:

// Startup code
fsmRunner = AAFSMRunner();
fsmRunner.addMachine(AAGame());

// Render event handler
function draw() {
  var renderEvent = { sig: 'render', par: gfxDrv };
  fsmRunner.handleEvent(renderEvent);
}

// "Tick" event (called 100 times per second)
function tick() {
	var tickEvent = { sig: 'tick', par: { time: time, deltaTime: deltaTime } };
	fsmRunner.handleEvent(tickEvent);
}

// Keydown event
function keyDown() {
    // translate to AA logical controls
    // controlName is one of 'left', 'right', 'throttle', 'fire'
	var e = { sig: 'controlDown', par: controlName };
}

- addMachine(machine)
- removeMachine(machine)
- RTC (Run To Completion) bör endast jobba med föregående stegets
maskiner / händerlser.
- Varje maskin implementerar "handle(event)"-funktion