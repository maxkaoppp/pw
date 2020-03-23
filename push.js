var push = require('web-push');

let vapidKeys = {
    publicKey: 'BE_tnmXKkOdbfyVYER28JNk8mQjwt11zPnC-FPl3MDsULUEuvh8O3ALWpU7Wf-tN79zwFawxKMun71LokflC3zg',
    privateKey: '-XVZwuIJXXIQllStIc9XnyHmZ5ARQjsNiHU66_VV4Pw'
  }

  push.setVapidDetails('mailto:test@code.co.tw' , vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};
  
  push.sendNotification(sub, 'OMG　ＧＧ!')