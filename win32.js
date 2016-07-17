module.exports = {
	cmd: "wmic process where processid=%d get parentprocessid",
	parse: function(stdout) {
		var result = null;
		var matches = String(stdout).match(/\d+/);
		if (matches) {
			 result = +matches[0];
		}
		return result;
	}
};