const exec = require("child_process").exec;
const format = require("util").format;
const os = require("os");

function getPlatform(id) {
	switch (id) {
		case "win32":
			return require("./win32");
	}
	return require("./pstree");
}

module.exports = function(childPid) {
	var platform = getPlatform(os.platform());
	var cmd = format(platform.cmd, childPid);
	return new Promise((resolve, reject) => {
		exec(cmd, (err, stdout, stderr) => {
			if (err) return reject(err);
			var result = platform.parse(stdout);
			resolve(result);
		});
	});


}