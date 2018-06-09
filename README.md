New Version read features below.

# fgod mod for 0 A. D. version A23

If you like the work of fgod mod (and me fpre in general) and want further work on improvement
or want support email me
    
    fraizy@gmx.de.


Report Feedback/Bugs:

    In 0ad wildfire games forums under game modification thread fgod mod

    or simply search fgod mod in forum

        https://wildfiregames.com/forum/index.php?/topic/24318-fgod-mod-for-0-a-d-a23/


Install:

    You now only need fgod.pyromod file:
        https://github.com/fraizy22/fgodmod/raw/master/fgod.pyromod

    Drag & Drop this file over 0ad start icon and It will start the mod. Hit Save and Start mods.

    Or run 0ad fgod.pyromod from terminal within Download folder.

    If works skip from here and read Features below.


    If fgod mod does not show up in the modlist go manually:

    For fast updates and easy install get a git tool to clone that repository for your OS:

        Linux:
            cd  ~/.local/share/0ad/mods && git clone https://github.com/fraizy22/fgodmod fgod
        and update
            cd  ~/.local/share/0ad/mods/fgod && git pull            

    Or click Green Button "Clone or download" on top page of https://github.com/fraizy22/fgodmod

    and click download as zip.

    or copy this link into browser adress bar for direct download:
        
        https://github.com/fraizy22/fgodmod/archive/master.zip

    Try unzip file fgod.pyromod and drag it onto 0ad icon, so that 0ad start. Then go Settings ->
    Mod Selection and look if fgod mod appear.

    If not working go:

    Unzip all the content files of the zip into a folder name "fgod" or clone the git into "fgod" under path:

        Linux:
             ~/.local/share/0ad/mods

        Windows:
            Vista or Newer:
                C:\Users\username\Documents\My Games\0ad\mods

            XP / 2000:
                C:\Documents and Settings\username\My Documents\My Games\0ad\mods

        OS X:
            ~/Library/Application\ Support/0ad/mods

        or read paths from https://trac.wildfiregames.com/wiki/GameDataPaths.

    So you have files like 0ad/mods/fgod/mod.json ....

    Start game, open Settings -> Mod Selection -> Select fgod -> hit Enable Button -> Hit
    Save Configuration -> Hit Start Mods

    Mod now loading on every game start. You can see mod is active by having new options in
    options f.e.


Screenshots:


    https://imgur.com/a/AWysKCC



Updates (Features)

 v1.6.15
     
    Lobby:
    
        Update auto scroll when marking player as buddy to player list and gamelist so on
        buddy sorted lists the player and game will kept in view automatically.
        
        Always showing more buttons bar below chat text input working again (set it in lobby
        options to always in visible).
        

 v1.6.14
     
    Replay Menu:
    
        Forum link button for upload and download zipped games replays.

        
v1.6.13

    Main Menu:
        
        Fgod readme accessible in manual page.
        
        Fgod showing active state by a fgod sign on bottom of main menu page.
        
        
    In Game:
    
        Fgod readme accessible.
        
        Background lobby notification fixed and showing yellow menu button.
        
        End game graphics overlay fixed. Gamesetup:
        

    Gamesetup:

        Blinking lobby dialog icon on lobby notification and message appear in tooltip bar
        
        
    Lobby:
    
        Added game running time to game list.


v1.6 - 1.6.12 BUGFIX

    General:

        When fgod mod folder not named only "fgod" but "fgodmod-master" or something
        
        its ok for mods compability anyway.

        Ping sound when in game and in gamesetup.

        On hotkey "tab" focus text input in replay_menu/lobby.

        Mouse wheel for tab change in summary/options/gamesetup/credits.
    
        Fgod links in mainmenu -> Settings.

        And Hotkeys for it Alt+W Website, Alt+U Update, Alt+F Forum.


    Lobby:

        Bug fix for errors obj in gamelist update.

        Ask connecting to host with real account when multiplayer name is different
        and lobby authentification is enabled on host.

        Better deselection support of player and game list, by having tooltip showing
        escape hotkey and seperate deseletion when hitting escape.

        Better show rating column from players, better viewable (also in dialog).

        compa fix.

        Default sort update for lobby.

        Default focus chat input in lobby dialog and on tab in normal lobby focus chat input.

        Hotkey for options in lobby and in-game.

        Tooltips structure tree lobby morebuttons.

        Hotkey structure tree in lobby morebuttons.

        Select game when in lobby dialog.

        Remember hosting game name.

        Tab support text input in lobby login.


    In-Game:

        Ask to reconnect on connection lost to server in multiplayer game.
    

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


