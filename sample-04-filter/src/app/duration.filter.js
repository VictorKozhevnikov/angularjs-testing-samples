console.log('define filter');

angular.module('sample01App').filter('duration', function () {
    return function (duration) {
        const minutes = duration % 60;
        const hours = (duration - minutes) / 60;

        return hours
            ? minutes
                ? `${hours}h ${minutes}min`
                : `${hours}h`
            : minutes
                ? `${minutes}min`
                : '';
    }
});
