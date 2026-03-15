; (
	/**
	 * Contains the extensions for the global Snap object.
	 * @module snap-extensions	
	 * @author Kate Kotova <katekotova_86@mail.ru>
	 * @copyright Kate Kotova 2017
	 */
	function ( window ) {
		'use strict';

		/**
		 * The SVG path command data.
		 * @type {Object}
		 * @global
		 */
		Snap.svgPathCommand = {
			/**
			 * The SVG path command data separator.
			 */
			SEPARATOR: ",",
			/**
			 * The command to set a new current point for SVG path
			 * in absolute cordinates:
			 * M x y
			 * Start a new sub-path at the given (x,y) coordinate.
			 * M (uppercase) indicates that absolute coordinates will follow;
			 * m (lowercase) indicates that relative coordinates will follow.
			 * If a moveto is followed by multiple pairs of coordinates,
			 * the subsequent pairs are treated as implicit lineto commands.
			 * Hence, implicit lineto commands will be relative if the moveto
			 * is relative, and absolute if the moveto is absolute.
			 * If a relative moveto (m) appears as the first element of the path,
			 * then it is treated as a pair of absolute coordinates.
			 * In this case, subsequent pairs of coordinates are treated
			 * as relative even though the initial moveto is interpreted
			 * as an absolute moveto. 
			 */
			ABSOLUTE_MOVE_TO: "M",
			/**
			 * The same as the command to set a new current point for SVG path
			 * but in the relative cordinates.
			 *
			RELATIVE_MOVE_TO: "m",*/
			/**
			 * The elliptical arc for SVG path command in absolute cordinates:
			 * A rx ry x-axis-rotation large-arc-flag sweep-flag x y
			 * Draws an elliptical arc from the current point to (x, y).
			 * The size and orientation of the ellipse are defined
			 * by two radiusez (rx, ry) and an x-axis-rotation, which indicates
			 * how the ellipse as a whole is rotated relative to the current
			 * coordinate system. The center (cx, cy) of the ellipse is calculated
			 * automatically to satisfy the constraints imposed
			 * by the other parameters. large-arc-flag and sweep-flag contribute
			 * to the automatic calculations and help determine how the arc is drawn.
			 */
			ABSOLUTE_ELLIPTICAL_ARC: "A",
			/**
			 * The same as the elliptical arc for SVG path command
			 * but in the relative cordinates.
			 *
			RELATIVE_ELLIPTICAL_ARC: "a",*/
			/**
			 * The straight line from the current point to a new point
			 * for SVG path command in absolute cordinates:
			 * L x y
			 * Draw a line from the current point to the given (x,y) coordinate
			 * which becomes the new current point. L (uppercase) indicates
			 * that absolute coordinates will follow; l (lowercase) indicates
			 * that relative coordinates will follow. A number of coordinates pairs
			 * may be specified to draw a polyline. At the end of the command,
			 * the new current point is set to the final set
			 * of coordinates provided.
			 */
			ABSOLUTE_LINE_TO: "L",
			 /**
			 * The same as the straight line from the current point
			 * to a new point for SVG path command but in the relative cordinates.
			 *
			RELATIVE_LINE_TO: "l",*/
			/**
			 * The command for SVG path ends the current subpath and causes
			 * an automatic straight line to be drawn from the current point
			 * to the initial point of the current subpath.
			 * Z
			 * Close the current subpath by drawing a straight line
			 * from the current point to current subpath's initial point.
			 * Since the Z and z commands take no parameters,
			 * they have an identical effect.
			 */
			CLOSEPATH: "Z"
		}; // Snap.svgPathCommand

	}( window )
);