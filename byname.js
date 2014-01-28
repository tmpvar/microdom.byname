if (typeof require !== 'undefined') {
  var microdom = require('microdom');
}

microdom.plugin({
  byName: function(name, res) {
    res = res || [];

    if (this.name === name) {
      res.push(this);
    }

    var l = this.length();
    for (var i=0; i<l; i++) {
      this.child(i).byName(name, res);
    }

    return res;
  }
});
