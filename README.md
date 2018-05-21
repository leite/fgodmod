# fgod mod v1.6.1 for 0 A. D. version A23

Report Feedback/Bugs:

	In 0ad wildfire games forums under game modification thread fgod mod

	or simply search fgod mod in forum

		https://wildfiregames.com/forum/index.php?/topic/24318-fgod-mod-for-0-a-d-a23/


Install:

	Click Green Button "Clone or download" on top page of https://github.com/fraizy22/fgodmod

	and click download as zip.

	or copy this link into browser adress bar for direct download:
		
		https://github.com/fraizy22/fgodmod/archive/master.zip


	Put the content files of the zip into a folder name "fgod" under path:

		Linux:
			 ~/.local/share/0ad/mods

		Windows:
			Vista or Newer:
				C:\Users\JohnDoe\Documents\My Games\0ad\mods

			XP / 2000:
				C:\Documents and Settings\JohnDoe\My Documents\My Games\0ad\mods

		OS X:
			~/Library/Application\ Support/0ad/mods

		or read paths from https://trac.wildfiregames.com/wiki/GameDataPaths.

	So you have path on linux f.e. ~/.local/share/0ad/mods/fgod/mod.json.

	Start game, open Settings -> Mod Selection -> Select fgod -> hit Enable Button -> Hit
	Save Configuration -> Hit Start Mods

	Mod now loading on every game start. You can see mod is active by having new options in
	options f.e.


Screenshots:


	https://imgur.com/a/AWysKCC



Updates (Features)

v1.6 - 1.6.1 BUGFIX

	General:

		When fgod mod folder not named only "fgod" but "fgodmod-master" or something
		
		its ok for mods compability anyway.


	Lobby:

		Bug fix for errors obj in gamelist update.
	

v1.5

	In-Game:

		Experience bar added below health bar on top of unit (hit tab key to enable status bars).


v1.4:

	Lobby:

		0 A. D. v0.0.23 lobby lag fixed.

		Lobby dialog icon in gamesetup (especially for Mac OS, and all OS) fixed.

		Lobby game authentification default disabled to have replacement functionality in host.


	Host/Join by IP:

		Fixed bug.


v1.3.1:

	Readme:
		
		Features Text updated.


v1.3:

	In-Game:

		Auto rejoin on lost connection in network multiplayer game.

		Getting observer view for clients on multiplayer if the host ends.

		Rejoin question when been kicked in a network multiplayer game.


v1-1.2:

	General:

		Go back to previous GUI with Shift + Esc.

		More darken fades when dialog windows are opened.

		Allow scroll for tab switch between the buttons in options/summary/credits/..

		Possibility to join games in lobby dialog from within other games and/or start replay from
		within other games.

		Filter fgod mod out of incompatible games. (All hosts without the mod can be joined and all players
		without the mod can join the mod host.)


	Gamesetup:

		Set team configuration in gamesetup with preconfigured dropdown.

		Ping hint notification from lobby when lobby dialog is closed the lobby dialog icon turns white
		and notification message appear at bottom screen.


	Chats:

		Continue cycle through more possible names on tabbing names in chat.

		Also tabbing commands for auto completion in chats.

		Coloring names in game's chat texts.


	In-Game:

		Show stock information from user player and allies when hovering tribut resource in diplomacy
		window.

		Pause overlay smaller so you can still click and act on game entities and set commands to
		queue for after unpause.

		Team totals in top panel resources and population tooltips and for observer having summed
		resource stats and population available when no player selected.

		Ping Hint (nick notification) into game from lobby (you get >Star Sign< on Menu Button and
		ping sound if enabled user notification in sound options).

		Button for replacing player in game for observers ingame by selecting player via dropdown
		and hit the replace button next besides.
		(Only works when no authentication prevention is enabled in a multiplayer host.)

		Change player name for in-game (in options multiplayer name). It will be applied when joining
		to a game.
		(Only works when no authentication prevention is enabled in a multiplayer host.)

		Remember opened option page ingame when reopen.


	Lobby:

		Start Into Lobby on game start (option).

		Unselect game in lobby when selected player is not in a game.

		See last game summary again in lobby with hotkey Ctrl+Tab.

		Show buddy players and games in different color in lobby (option).

		Sort save and multi column sort support in Lobby lists. Player user priored in sorted players
		and games list when same data in field.

		Hide profile panel in lobby, when no player is selected, to get a longer player list. (Clear
		selection with Esc).

		Configurable auto away in lobby after time inactive.

		Numbers player and games in lobby header on top of the list.

		Give more buttons in lobby to show options/civilizations tree/replay menu. Also starting
		replays or joining other game from lobby/lobby-dialog possible.


	Summary page:

		Axis units in the summary.

		Civilation icons in summaries can be clicked to see structure tree directly when needed.

		Give fight activity ratio number in general panel in summary page.

		Show next-, previous-button in replay menu summaries to go through summaries to search.


