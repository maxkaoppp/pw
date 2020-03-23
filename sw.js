self.addEventListener('push', () => {
    self.registration.sendNotification('OMG GG!', {});
});