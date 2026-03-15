; (
	/** Contains the defined objects as the sets of the values
	for the ring diagram. */
	function ( window ) {
		'use strict';

		/** The values set for the data of the ring diagram. */
		var ringDiagramDataValues1 = [
			/** The global parameter #0. */
			{
				/** The value in percents of this global parameter.
				If children are empty it must be set.
				If there are children it will set as sum of values
				of its children. In result the undefined values obtain
				the equal parts from the undivided percents area. */
				value: 40,

				/** The parts of this global parameter. Could be empty.
				If there must be not empty clirdren the one synonym child
				is creating and it has the value
				of the whole global parameter.
				In result the undefined values obtain the equal parts
				from the undivided percents area for the chidren. */
				children: [

					/** The clild #0 of the global parameter #0. */
					{
						/** The value in percents of this child parameter. */
						value: 5
					},

					/** The clild #1 of the global parameter #0. */
					{
						value: 20
					},

					/** The clild #2 of the global parameter #0. */
					{
						value: 15
					}
				] // children
			}, // The global parameter #0.

			/** The global parameter #1. */
			{
				value: null,
				children: [
					{
						value: 1
					},
					{
						value: 1
					},					
					{
						value: 30
					},
					{
						value: 8
					},
					{
						value: 2
					}
				] // children
			}, // The global parameter #1.

			/** The global parameter #2. */
			{
				value: null,
				children: [ ]
			}, // The global parameter #2.

			/** The global parameter #3. */
			{
				value: null,
				children: [
					{
						value: null
					}
				] // children
			}, // The global parameter #3.

			/** The global parameter #4. */
			{
				value: null,
				children: [
					{
						value: null
					},
					{
						value: null
					},
					{
						value: 1
					},
					{
						value: 2
					}
				] // children
			} // The global parameter #4.
		]; // ringDiagramDataValues1

		/** The values set for the data of the ring diagram. */
		var ringDiagramDataValues2 = [
			/** The global parameter #0. */
			{
				/** The value in percents of this global parameter.
				If children are empty it must be set.
				If there are children it will set as sum of values
				of its children. In result the undefined values obtain
				the equal parts from the undivided percents area. */
				value: 40,

				/** The parts of this global parameter. Could be empty.
				If there must be not empty clirdren the one synonym child
				is creating and it has the value
				of the whole global parameter.
				In result the undefined values obtain the equal parts
				from the undivided percents area for the chidren. */
				children: [

					/** The clild #0 of the global parameter #0. */
					{
						/** The value in percents of this child parameter. */
						value: 5
					},

					/** The clild #1 of the global parameter #0. */
					{
						value: 20
					},

					/** The clild #2 of the global parameter #0. */
					{
						value: 15
					}
				] // children
			}, // The global parameter #0.

			/** The global parameter #1. */
			{
				value: null,
				children: [
					{
						value: 1
					},
					{
						value: 9
					},					
					{
						value: 8
					},
					{
						value: 2
					}
				] // children
			}, // The global parameter #1.

			/** The global parameter #2. */
			{
				value: null,
				children: [ ]
			}, // The global parameter #2.

			/** The global parameter #3. */
			{
				value: null,
				children: [
					{
						value: null
					}
				] // children
			}, // The global parameter #3.

			/** The global parameter #4. */
			{
				value: null,
				children: [
					{
						value: null
					},
					{
						value: null
					},
					{
						value: 1
					},
					{
						value: 2
					}
				] // children
			} // The global parameter #4.
		]; // ringDiagramDataValues2		

		/** Exporting the ringDiagramDataValues1 object outside of this module. */
		window.ringDiagramDataValues1 = ringDiagramDataValues1;
		/** Exporting the ringDiagramDataValues2 object outside of this module. */
		window.ringDiagramDataValues2 = ringDiagramDataValues2;

	}( window )
);