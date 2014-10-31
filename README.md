myx-capsule
============

What:
Tool to create capsules aka views aka components aka atoms using html/less/jsx.

Run it:
1] make setup
2] make build dev

Test it:
make test

Technologies:
React
Omniscient
Immstruct
Express 
Codemirror 
Rethinkdb
React-flux (https://www.npmjs.org/package/react-flux)
grunt
make


Plan:
=====

Here are the big pieces

DB Layer - RethinkDb
====================
schema: defination & validations
Model Layer - crud for an entity - create, update, delete
	-- save
	-- get
	-- delete
	-- new

Each capsule is represented by : 
{
	id:"",
	type: "capsule",
	"props" : {
		html: "",
		css: "",
		less:
	}
}

Services:
=========
Talks to dbLayer and gets and sets data
capsuleService: 
		-- del
		-- save
		-- get
		-- new
		-- compile --> less to css/ haml to html/ jsx to js


Views/React components: (React-flux)
=======================
	App
	Editor : html editor
			 less/css editor
	Result component


Flow:
=====
Application state is represented by capsule (empty/existing).  [empty capsule does not have an id but will have all the required fields]

Render routine:
Bootstrap : Gets a capsule's cursor from the store and pass it to App.

App View 
Create cursors for html and less from the capsule structre and pass it to html and less editors
Save: Asks store to save capsule to server

Result View: 
Iframe which injects html and css data into defined sections. It subscribes to stores events and updates itself.
It will have properties like resizable, noscroll, no-frills.
Will accept post messages (htmlMsg, lessMsg) and update itself.


HTML Editor:
Used to write html in a textarea/codemirror. 
Subscribe to store for change events and re-renders itself and set data in cursor.
Responds to onblur, keyup.

less Editor:
Used to write less in a textarea/codemirror. 
Subscribe to store for change events and re-renders itself and set data in cursor.
Responds to onblur, keyup and compiles less to css and sets in cursor.

swap : event is fired when a cursor is modified and re-renders the whole app. (smart enough to render only the change parts)


============================================================ 
Discuss

Remove Flux : no need to do it for small apps



Project wishlist: 
=================
Server side rendering
Drag & Drop
Routing - 












