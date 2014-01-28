var byname, microdom;
if (typeof require !== "undefined") {
  byname = require("../byname.js");
  microdom = require('microdom');
} else {
  byname = window.byname;
  microdom = window.microdom;
}

var ok = function(a, msg) { if (!a) throw new Error(msg || "not ok"); };

describe('byname', function() {
  describe('#byName', function() {
    it('should return an array of found nodes', function() {
      
      var dom = microdom('<a><b><c><d></d></c></b></a>');

      var results = dom.byName('a');
      ok(results.length === 1);
      ok(results[0] === dom.child(0));

    });

    it('should return an empty array when no nodes are found', function() {
      var dom = microdom('<a><b><c><d></d></c></b></a>');

      var results = dom.byName('e');
      ok(results.length === 0);
    });

  });
});
