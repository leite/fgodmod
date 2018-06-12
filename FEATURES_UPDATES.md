# fgod mod for 0 A. D. version A23

This mod has proposal features for the 0 A. D. Project included, from which some already included in the main

0 A. D. Project. Others shall be shown here for future integration.


Please think about donating fgod as its free of charge and at the same time very time consuming and much of work to accomplish!

But I'm doing it with pleasure!

Also a donation would give me more time for the work of fgod and in general the coding contribution to the 0 A. D. Project!


So we the players all profit from it!


E-Mail me for Details: fraizy@gmx.de


Or bring new ideas and work to the forum!


Have Fun,

Your fpre!



Updates (Features)

 v1.6.18 - 1.6.19
 
    Lobby:

        Connect/Auto-Connect at start into lobby detects if a running hosting game is in lobby and ask if continue
        to relog into the lobby, because game gets vanished from gamelist when relog.
        
        If a running lobby connection is remembered, prevent auto connect into lobby when option is setted, so another
        lobby instance won't be disconnected.
        
        In the lobby dialog the game in is automatically selected and scrolled into view in the game list.
        
        New "/showip" command in lobby, for getting the ip and port of the selected game in the gamelist.
        
    
    In-Game:
    
        New Messages Menu! for several ally messages toggleable on hotkey Ctrl+Y and selection keys for the messages 0-9 as
        a first approach for future expanding. 
    
        Toggle select player/general overview (on/off) on hotkeys Alt+1, Alt+2, ..., Alt+8.
        
        Fixing T0 shown in selection dropdown for players that have team none to not showing a team.
        
        Having chat history available to open again when host ends.
        
        On player replace action give a message into the public chat about the replace of the selected player action.
        
        Show won player with yellow/gold color in selection dropdown.
        
        Drop Player prevention when joining a multiplayer game. (https://trac.wildfiregames.com/changeset/21838, Author: temple)
                

 v1.6.17
 
    Main Menu/In-Game/GameSetup:
    
        FGod Mod Features List hotkey Alt+Shift+F.
 
    In-Game:
    
        Observer view fast player selection with hotkeys Alt+1, Alt+2, ..., Alt+8, Alt+0 (general observer overview)
        
        Player numbers in selection dropdown.
        Team number in selection dropdown.
        
        In diplomacy game +/=/- states shown in selection dropdown for ally/neutral/enemy state to selected player.

        Defeated/offline player shown in player selection grey/red color.


 v1.6.16
     
    Lobby:
    
        Show observer number in game list under player numbers.
        
        Show host player in game description when game is selected in game list.


 v1.6.15
     
    Lobby:
    
        Update auto scroll when marking player as buddy to player list and gamelist so on
        buddy sorted lists the player and game will kept in view automatically.
        
        Always showing more buttons bar below chat text input working again (set it in lobby
        options to always in visible).


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


