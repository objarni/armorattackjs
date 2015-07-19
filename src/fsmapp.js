FSMApp = function() {
	var machines = [];

	return {
		handleEvent: function(sig, par) {
			machines.forEach(function(machine) {
				machine.handleEvent(sig, par);
			})
		},
		addMachine: function(machine) {
			machines.push(machine);
		},
		removeMachine: function(machine) {
			var index = machines.indexOf(machine);
			if( index > -1)
				machines.splice(index, 1);
			else
				throw new Error('Tried to remove machine not added');
		}
	};
};