const trim = require("lodash.trim");

module.exports = {
	cmd: "pstree -sp %d",
	parse: function(stdout, childPid) {
		var result = null;
		var numberChildPid = +childPid;
		var matches = String(stdout).match(/\(\d+\)/g);
		if (matches) {
			for (var i = matches.length - 1; i >= 0; i--) {
				var m = matches[i];
				var pid = +trim(m, '()');
				if (pid === numberChildPid) break;
			}
			if (i > 0) {
				result = +trim(matches[i-1], '()');
			}
		}
		return result;
	}
};