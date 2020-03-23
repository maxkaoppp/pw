var push = require('web-push');

let vapidKeys = {
    publicKey: 'BE_tnmXKkOdbfyVYER28JNk8mQjwt11zPnC-FPl3MDsULUEuvh8O3ALWpU7Wf-tN79zwFawxKMun71LokflC3zg',
    privateKey: '-XVZwuIJXXIQllStIc9XnyHmZ5ARQjsNiHU66_VV4Pw'
  }

  push.setVapidDetails('mailto:test@code.co.tw' , vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {
      endpoint:
      "https://fcm.googleapis.com/fcm/send/fh51Q1lRWr0:APA91bHW0txpvenKaZdCatwsiUEw0lo8Ch-0YgzDufQLFrgsHaOvSjiGctKofHXx5rHzlbsi-wVZzsasH6Ye_d9n6OMAzSD38uCM-jZKB4y9UNnXZR9uZWy-cA_euZSfxrwrygI2LJT-",
      expirationTime: null,
      keys: {
        p256dh:
          "BH4jy37w9U05ywVdj8_AP87LYTyhawLPH-V6XqZppnECYuq0kOy7UAxqH5drTVGnsy3oiTbRxU9sgUW4jxpxw-I",
          auth:"xux_PJqniSjm98VDClfanA"
        }
        }
  
  push.sendNotification(sub, 'OMG　ＧＧ!')