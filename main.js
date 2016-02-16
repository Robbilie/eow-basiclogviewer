
	"use strict";

	Widget.INSTANCE.loadPlugin({
		title: "Log View",
		name: "Robbilie/eow-basiclogviewer"
	}, plugin => {

		// debugging
		console.log("plugin", plugin);

		var net = require('net');
		var HOST = '127.0.0.1';
		var PORT = 3273;

		var datatab = plugin.getBody();

		
		//eowEl(datatab).appendChildren(data.toString("utf8").split("\n").map(row => eowEl("div", { innerHTML: row })));
		//datatab.scrollTop = datatab.scrollHeight;

	});
