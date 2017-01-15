var Context = require('./Context')
var Globals = require('./Globals')

function ModuleAdaptor () {}

ModuleAdaptor.prototype.evaluate = function (parentContext, inst) {
  inst.isSubmodule = true
  return parentContext.evaluateModule(inst)
}

module.exports = ModuleAdaptor
