var hasCallback = false;
var g_Page = "";
var g_Title = translate("Information");
var g_OpenPage = "manual"

function init(data)
{
	g_Page = data.page;
	if (data.callback)
		hasCallback = true;
	if (data.title)
		g_Title = data.title
	if (data.url)
	{
		var urlButton = Engine.GetGUIObjectByName("url");
		var callback = function(url)
		{
			return function()
			openURL(url);
		}(data.url);
		urlButton.onPress = callback;
		urlButton.hidden = false;
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
	Engine.GetGUIObjectByName("title").caption = page == "fgod" ? "FGod Mod Features" : g_Title;
	Engine.GetGUIObjectByName("pageSwitchButton").caption = page == "fgod" ? g_Title : setStringTags("FGod Mod Features", { "color": "orange" }) + "";
	Engine.GetGUIObjectByName("pageSwitchButton").onPress = () => showPage(page == "fgod" ? "manual" : "fgod");
}

function closeManual()
{
	if (hasCallback)
		Engine.PopGuiPageCB(g_OpenPage);
	else
		Engine.PopGuiPage();
}
