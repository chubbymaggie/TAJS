try {
    if (Math.random())
	throw "String"
    else
	throw 10;
} catch (e) {
    TAJS_dumpValue(e);
}
