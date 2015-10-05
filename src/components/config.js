let config = {
  ip: window.location.hostname,
  port: '5000',
  baseUrl: null
};

// DebugIP
config.ip = '192.168.1.11';
config.baseUrl = `http://${ config.ip }:${ config.port }/`;


module.exports = config;
