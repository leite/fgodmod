# FGod Mod for 0 A. D. version A23 (Features Page Alt+Shift+F)

Awesome features and additions for 0 A. D.. (Some going into Main Game).

As This Is A Very Big Mod And It's Free For You, Think About Donating A Coffee For Me, Thanks!
PayPal Or Donation Information To fraizy@gmx.de (Or If You Need Help. Euros Fees Free). Have Fun!

Talk To Me: fpre in lobby / ffffffff in forum (wildfiregames.com/forum)

Newest Updates:

    v1.6.21
        In-Game:
            Better Tribut View Tooltip For Easy Seeing Stocks Of Yourself and Others.
            Single Player Now Also Lobby Dialog Login Possible.
            See Previous Player/View In Observer With Alt+Q (Besides Alt+0, 2, 8 For Direct Player View).
            More Hotkeys And Tooltips (Diplomacy, Trade, Objectives, Menu).
            Better Resources And Population Tooltip.
            Better Tech Time Text Embedded On Icon (smaller, behind progress sprite).
        
        Replay Menu:
            When Deleting Replays In Replays Dialog Stay In Dialog (Fixed).
            
        Lobby:
            Show Buddies Amount In Game's List Buddy Column In Yellow Color.
            Show Observer Amount In Player's Count In Yellow Color.
            
Fixes For Main Game (Alpha 23):
    - Mac Crash In Lobby Gamesetup
    - Performance Lobby (Kills Lag)
    - Awesome
    
Bugs
    - Share Resources Among Allies On Resign (Not correctly working)
            
All Features
    Overall:
        - More darkend background in overlapping dialog windows
        - Fgod features page (hotkey Alt+Shift+F)
        - continue autocomplete names when keep hitting Tab
        - autocomplete /-commands (/help, etc.)
        - gui go back Alt+Escape
        - more better leaving dialogs generally with escape key

    Ingame:
        - Different multiplayer ingame name (in general options playername)
        - Player replace Ingame (if a player is offline and host has no lobby authentication enabled)
          (select player in player dropdown selection and hit replace button)
        - Ally message menu (hotkey Ctrl+y, 1-0 for action messages)
        - Ingame lobby ping (when people call you in lobby)
        - Player color in messages texts
        - Start different replays from within lobby dialog
        - Join direct into other game in lobby dialog
        - Ask to reconnect on disconnect (multiplayer network)
        - Ask to reconnect on kick (multiplayer network)
        - Pause/end-game overlay small top, units/entities still clickable and actionable
        - Observer player selection toggle hotkeys Alt+1-8
        - Observer overview resources/population summed
        - Teams and diplomacy status (+/-/=/~, ally/enemy/neutral/current player) in player selection dropdown
          Also sort by teams if teams locked
        - More tooltip hotkeys on main menu
        - Send remaining resources to allies on resign
        - Observer show offline (0ad buggy), defeated and won player in dropdown selection in red, grey and yellow
        - Send tribut resource stock hint in tooltip from urself and player
        
    Summary (Ctrl+Tab):
        - Fight activity ratio (military/economic score ratio)
        - Better scroll of tabs with mouse scroll over buttons
        - Civilizations icons clickable for civilizations tree
        
    Lobby (Alt+L):
        - Auto-away after time and presences dropdown selection
        - More buttons (auto- and hideable: last game summary, replays dialog (start replays also),
          civilizations page, options page
        - Longer player list -> profile hideable / deselection (Escape) also of game
        - Buddy colors players/games
        - Start 0ad into lobby
        - Double lobby login prevention or relog while hosting game (game vanish from lobby gamelist)
        - Host game name remember
        - /showip command from selected game
        - Much better ping recognition when name in messages (name must be standalone not in any word contained,
          like short names bb f.e.).
        - Sort player/gamelist by multiple columns (like playerlist, status, buddy, rating, name f.e., click them in order
          one after another)
          Default by buddy, status, name, rating in playerlist
          buddy, name, ... in gamelist
        - Show hosting player in game player list
        - Show game duration time since start in gamelist
        - Observer number in game list player's number column
        
    Gamesetup/Ingame:
        - Ingame lobby ping (when people call you in lobby)
        - Lobby dialog scroll and select game-in in view, to see players in.
        
    Gamesetup:
        - Teams config setter (at top, 1v1, 2v2, etc.)
    
    Options (Alt+O):
        - Features configurable
    
    Replays Menu:
        - Forum link to replay upload/download
        - Next-, previous- replays-button in replay menu summaries.

more Updates (Features)

v1.6.20
    In-Game:
        New Ally Messages Menu (Hotkey Ctrl+Y) Test + selection keys 0-9!
        Send automatically remaining resources on resign via tribut to allied players (in options default on).

v1.6.18 - 1.6.19
    Lobby:
        Connect/Auto-Connect into lobby prevention when hosting game.
        If a running lobby connection is remembered, prevent auto connect into lobby.
        Scroll game in lobby dialog into view.
        "/showip" command in lobby from selected game.
    
    In-Game:
        New Messages Menu! Hotkey Ctrl+Y, Selection Keys 0-9.
        Select player/general overview toggle on hotkeys Alt+1, Alt+2, ..., Alt+8.
        Chat history openable when host ends.
        On player replace action give action message.
        Show won player with yellow/gold color in selection dropdown (observer).
        Drop Player prevention when joining a multiplayer game. (https://trac.wildfiregames.com/changeset/21838, Author: temple)

v1.6.17
    Main Menu/In-Game/GameSetup:
        FGod Mod Features List Hotkey Alt + Shift + F.
 
    In-Game:
        Observer view fast player selection with hotkeys Alt+1, Alt+2, ..., Alt+8, Alt+0 (general observer overview)
        Player and team numbers in selection dropdown (observer).
        In diplomacy game +/=/- states shown in selection dropdown for ally/neutral/enemy state to selected player.
        Defeated/offline player shown in player selection grey/red color.

v1.6.16
    Lobby:
        Add number of observers in game list to players number column.
        Show host player in game description when game is selected in game list.

v1.6.15
    Lobby:
        On marking buddy player as buddy keep player in view in list.
        More buttons bar always visible (option).

v1.6.14
    Replay Menu:
        Forum button for upload and download zipped games replays.
        
v1.6.13
    Main Menu:
        Fgod readme accessible in manual page.
        Fgod showing active state by little fgod watermark.
        
    In Game:
        Fgod readme accessible.
        Background lobby notification fixed and showing yellow menu button.
        End game graphics overlay fixed.
        
    Gamesetup:
        Blinking lobby dialog icon on lobby notification and message appear in tooltip bar
        
    Lobby:
        Added game running time to game list.


v1.6 - 1.6.12
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
