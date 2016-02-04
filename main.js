
	"use strict";

	Widget.initialize({
		title: "Basic Log Viewer",
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);
		
		widget.tabs.addTab("Log View");
		
		widget.tabs.selectTab("Log View");

		var net = require('net');
		var HOST = '127.0.0.1';
		var PORT = 3273;

		var datatab = widget.tabs.getTab("Log View");

		net.createServer(function(sock) {

			// We have a connection - a socket object is assigned to the connection automatically
			console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

			// Add a 'data' event handler to this instance of socket
			sock.on('data', function(data) {

				eowEl(datatab).appendChildren(data.toString("utf8").split("\n").map(row => eowEl("div", { innerHTML: row })));
				datatab.scrollTop = datatab.scrollHeight;

			});

			// Add a 'close' event handler to this instance of socket
			sock.on('close', function(data) {
				console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
			});

		}).listen(PORT, HOST);
	});
