angular.module('twitchApp')
    .controller('TwitchController', 
                ['$scope',
                '$log',
                'TwitchFactory',
                function($scope, $log, twitchFactory) {
        
        // array of twitchTV accounts to get data about
        var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        // array to store all channels data
        $scope.channels = [];
        // variable to choose what kind of channels to display: all, online, offline
        $scope.chosenChannels = 'all';

        // retrieving data for each channel
        channels.forEach(function(channel) {
            twitchFactory.getChannels(channel)
                .then(function(data) {
                    data.data.channelName = channel;
                    $scope.channels.push(data.data);
                });
        });

        // sort of filter to decide what data to display depend on inputs value
        $scope.chooseChannels = function(channel) {
            return channel === $scope.chosenChannels;
        }
        
        // filter to sort offline only
        $scope.isOffline = function(stream) {
            return stream.stream == null;
        }

        // filter to sort out online only
        $scope.isOnline = function(stream) {
            return stream.stream !== null;
        }

    }]);