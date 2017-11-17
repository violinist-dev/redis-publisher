const webdis = require('../webdis-wrapper')
const ks = require('kill-switch')
const webdisConfig = require('./webdis-config.json')

webdis.start(webdisConfig)
ks.autoStart()
