(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.Verify = factory();
	}
}(this, function () {
	return {
    message:'The "index.js" is useless.'
  };
}));