
	"use strict";

	Widget.INSTANCE.loadPlugin({
		title: "Log View",
		name: "Robbilie/eow-basiclogviewer"
	}, plugin => {

		// debugging
		console.log("plugin", plugin);

		var datatab = plugin.getBody();

		
		//eowEl(datatab).appendChildren(data.toString("utf8").split("\n").map(row => eowEl("div", { innerHTML: row })));
		//datatab.scrollTop = datatab.scrollHeight;

	});
