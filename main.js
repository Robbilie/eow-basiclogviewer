
	"use strict";

	Widget.initialize({
		title: "Basic Log Viewer",
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);
		
		var tabs = eowTabs("div", {}, [{
			name: "Log View",
			content: []
		}]);
		
		widget.appendChild(tabs);
		
		tabs.selectTab("Log View");

		var net = require('net');
		var HOST = '127.0.0.1';
		var PORT = 3273;

		var datatab = tabs.getTab("Log View");

		
		//eowEl(datatab).appendChildren(data.toString("utf8").split("\n").map(row => eowEl("div", { innerHTML: row })));
		//datatab.scrollTop = datatab.scrollHeight;

	});