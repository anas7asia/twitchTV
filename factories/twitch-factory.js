angular.module('twitchApp')
    .factory('TwitchFactory', ['$http', function($http) {


        function getChannels(channel) {

            var twitchApiLink = 'https://api.twitch.tv/kraken/streams/';
            var twitchApiLinkEnd = '?client_id=445wixh0s5jcmb8v43aldhga794yfgq&callback=JSON_CALLBACK';

            // jsonp call
            return $http.jsonp(twitchApiLink + channel + twitchApiLinkEnd)
                .success(function(data){
                    return data;
                });
        }

        return {
            getChannels : getChannels
        }
    }]);