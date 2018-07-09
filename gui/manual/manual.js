var hasCallback = false;
var g_Page = "";
var g_Title = translate("Information");
var g_OpenPage = "manual"
var g_Url = "";

function getUrlPress(url)
{
	return function(url)
	{
		return function()
		openURL(url);
	}(url);
}

function init(data)
{
	g_Page = data.page;
	if (data.callback)
		hasCallback = true;
	if (data.title)
		g_Title = data.title

	if (data.url)
	{
		g_Url = data.url;
		// var urlButton = Engine.GetGUIObjectByName("url");
		// var callback = function(url)
		// {
		// 	return function()
		// 	openURL(url);
		// }(data.url);
		// urlButton.onPress = callback;
		// urlButton.hidden = false;
	}
	if (data.openPage)
		g_OpenPage = data.openPage;
	showPage(g_OpenPage);
}

function showPage(page)
{
	g_OpenPage = page;
	Engine.GetGUIObjectByName("mainText").caption = page == "fgod" ? Engine.TranslateLines(Engine.ReadFile("FEATURES_UPDATES.md")) :
		Engine.TranslateLines(Engine.ReadFile("gui/" + g_Page + ".txt"));
	Engine.GetGUIObjectByName("title").caption =
		page == "fgod" ? setStringTags("FGodMod Features", { "color": "255 255 255" }) + "" : g_Title;
	Engine.GetGUIObjectByName("pageSwitchButton").caption =
		page == "fgod" ? translate("Game Manual") : setStringTags("FGodMod Features", { "color": "255 255 255" }) + "";
	Engine.GetGUIObjectByName("pageSwitchButton").onPress =
		() => showPage(page == "fgod" ? "manual" : "fgod");

	var urlButton = Engine.GetGUIObjectByName("url");
	urlButton.onPress = getUrlPress(page == "fgod" ? "https://wildfiregames.com/forum/index.php?/topic/24318-fgod-mod-for-0-a-d-a23/" : g_Url);
	urlButton.hidden = !(page == "fgod" || !!g_Url);
	urlButton.caption = page == "fgod" ? setStringTags("View in Forum", { "color": "255 255 255" }) :  translate("View Online");
	var updateButton = Engine.GetGUIObjectByName("updateButton");
	updateButton.hidden = page != "fgod"
	updateButton.caption = setStringTags("Update", { "color": "255 255 255" });
}

function closeManual()
{
	if (hasCallback)
		Engine.PopGuiPageCB(g_OpenPage);
	else
		Engine.PopGuiPage();
}
