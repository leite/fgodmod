
function hasSameMods(modsA, modsB)
{
    let mods1 = modsA.filter(mod => mod[0] != "fgod");
    let mods2 = modsB.filter(mod => mod[0] != "fgod");

	if (!mods1 || !mods2 || mods1.length != mods2.length)
		return false;

    // Mods must be loaded in the same order. 0: modname, 1: modversion
    return mods1.every((mod, index) => [0, 1].every(i => mod[i] == mods2[index][i]));
}
