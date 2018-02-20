console.log('Service worker running!');

self.addEventListener('install', function() {
    console.log('Install!');
})

self.addEventListener('fetch', function(event) {
    console.log('Fetch!', event.request)
})