; (
	function ( window ) {
		'use strict';

		var ringDiagramData = new RingDiagramData(
			window.ringDiagramDataBase,
			window.ringDiagramDataValues1
		);

		var snap1 = new Snap( "#svg1" ).attr({
			id: "svg1",
			width: 1200,
			height: 500
		});
		var snap2 = new Snap( "#svg2" ).attr({
			id: "svg2",
			width: 1200,
			height: 500
		});
		var snap3 = new Snap( "#svg3" ).attr({
			id: "svg3",
			width: 1200,
			height: 500
		});				

		var ringDiagramParams1 = {
			// @type {Snap} The Snap object from the Snap.svg.
			snap: snap1,
			// @type {RingDiagramData} The an instance of RingDiagramData,
			// This contains names, descriptions, and values
			// of the global parameters and their children.
			data: ringDiagramData,
		};
		var ringDiagramParams2 = {
			// @type {Snap} The Snap object from the Snap.svg.
			snap: snap2,
			// @type {RingDiagramData} The an instance of RingDiagramData,
			// This contains names, descriptions, and values
			// of the global parameters and their children.
			data: ringDiagramData,
		};
		var ringDiagramParams3 = {
			// @type {Snap} The Snap object from the Snap.svg.
			snap: snap3,
			// @type {RingDiagramData} The an instance of RingDiagramData,
			// This contains names, descriptions, and values
			// of the global parameters and their children.
			data: ringDiagramData,
		};

		var ringDiagram1 = new RingDiagram( ringDiagramParams1 );
		var ringDiagram2 = new RingDiagram( ringDiagramParams2 );
		var ringDiagram3 = new RingDiagram( ringDiagramParams3 );


		ringDiagram1.createDataElementsAcrsWithChildren( );
		ringDiagram2.createDataElementsAcrsWithoutChildren( );
		ringDiagram3.createDataElementChildrenAcrs( 1 );
		

		window.ringDiagramData = ringDiagramData;
		window.ringDiagramParams = ringDiagramParams1;
		window.ringDiagram = ringDiagram1;
		window.snap = snap1;

		var values = ringDiagramDataValues1;
		window.changeValues = function ( ) {
			values = values == ringDiagramDataValues1
				? ringDiagramDataValues2 : ringDiagramDataValues1;
			ringDiagram1.setDataValues( values );
			ringDiagram2.setDataValues( values );
			ringDiagram3.setDataValues( values );
		} // changeValues

	}( window )
);