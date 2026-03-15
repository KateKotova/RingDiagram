; (
	/**
	 * Contains the global object of the base data for the ring diagram.
	 * @module ring-diagram-data-base
	 * @author Kate Kotova <katekotova_86@mail.ru>
	 * @copyright Kate Kotova 2017
	 */
	function ( window ) {
		'use strict';

		/**
		 * The base data for the ring diagram that contain
		 * names and descriptions of the global parameters and their children,
		 * and if there are some values they are empty.
		 * @type {Object}
		 * @global
		 */
		var ringDiagramDataBase = [
			/** The global parameter #0. */
			{
				/** The unique name among global parameters and their children. */
				name: "The global parameter #0",

				/** The detailed description of this global parameter.
				May be empty. */
				description: "The desctiption of the global parameter #0.",

				/** The value in percents of this global parameter.
				It is unknown and will be set later by the sets of values below.
				If children are empty it must be set.
				If there are children it will set as sum of values
				of its children. *
				value: null,*/

				/** The parts of this global parameter. Could be empty.
				If there must be not empty clirdren the one synonym child
				is creating and it has the description
				of the whole global parameter. */
				children: [

					/** The clild #0 of the global parameter #0.
					The color is the same as in the parent. */
					{
						/** The unique name among global parameters
						and their children. */
						name: "The clild #0 of the global parameter #0",

						/** The detailed description of this child parameter.
						May be empty. If it is empty, and there is only one child
						it is coied from the global parent paramter. */
						description: "The desctiption of the clild #0 of the global parameter #0."

						/** The value in percents of this child parameter.
						It is unknown and will be set later by the sets
						of values below. *
						value: null*/
					},

					/** The clild #1 of the global parameter #0. */
					{
						name: "The clild #1 of the global parameter #0",
						description: "The desctiption of the clild #1 of the global parameter #0."
					},

					/** The clild #2 of the global parameter #0. */
					{
						name: "The clild #2 of the global parameter #0",
						description: "The desctiption of the clild #2 of the global parameter #0."
					}
				] // children
			}, // The global parameter #0.

			/** The global parameter #1. */
			{
				name: "The global parameter #1",
				description: "The desctiption of the global parameter #1.",
				children: [
					{
						name: "The clild #0 of the global parameter #1",
						description: "The desctiption of the clild #0 of the global parameter #1."
					},
					{
						name: "The clild #1 of the global parameter #1",
						description: "The desctiption of the clild #1 of the global parameter #1."
					},
					{
						name: "The clild #2 of the global parameter #1",
						description: "The desctiption of the clild #2 of the global parameter #1."
					},
					{
						name: "The clild #3 of the global parameter #1",
						description: "The desctiption of the clild #3 of the global parameter #1."
					},
				] // children
			}, // The global parameter #1.

			/** The global parameter #2. */
			{
				name: "The global parameter #2",
				description: "The desctiption of the global parameter #2.",
				children: [ ]
			}, // The global parameter #2.

			/** The global parameter #3. */
			{
				name: "The global parameter #3",
				description: "The desctiption of the global parameter #3.",
				children: [
					{
						name: "The clild #0 of the global parameter #3",
						description: "The desctiption of the clild #0 of the global parameter #3."
					}
				] // children
			}, // The global parameter #3.

			/** The global parameter #4. */
			{
				name: "The global parameter #4",
				description: "The desctiption of the global parameter #4.",
				children: [
					{
						name: "The clild #0 of the global parameter #4",
						description: "The desctiption of the clild #0 of the global parameter #4."
					},
					{
						name: "The clild #1 of the global parameter #4",
						description: "The desctiption of the clild #1 of the global parameter #4."
					},
					{
						name: "The clild #2 of the global parameter #4",
						description: "The desctiption of the clild #2 of the global parameter #4."
					},
					{
						name: "The clild #3 of the global parameter #4",
						description: "The desctiption of the clild #3 of the global parameter #4."
					}
				] // children
			} // The global parameter #4.

		]; // ringDiagramDataBase

		/** Exporting the ringDiagramDataBase object outside of this module. */
		window.ringDiagramDataBase = ringDiagramDataBase;

	}( window )
);