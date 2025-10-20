const config = {
    baseUrl: 'https://orange-stork-893379.hostingersite.com',
    firstCheckUrl: 'https://orange-stork-893379.hostingersite.com/checker.php',
    baseCheckUrl: 'https://orange-stork-893379.hostingersite.com/dnsChecker.php'
};

// Fallback for different localhost setups
if (typeof config.firstCheckUrl === 'undefined') {
    config.firstCheckUrl = '/checker.php';
    config.baseCheckUrl = '/dnsChecker.php';

}





