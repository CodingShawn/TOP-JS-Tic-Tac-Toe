var pubsub = {
    events: {},

    subscribe: function(eventName, callback) {
        console.log('sub')
        if (!Array.isArray(this.events[eventName])) {
            this.events[eventName] = [];
            console.log('sub2')
        }
        this.events[eventName].push(callback);
    },

    publish: function(eventName, data) {   
        if (!Array.isArray(this.events[eventName])) {
            //If event is not being listened to, do nothing
            return;
        } else {
            this.events[eventName].forEach( (callback) => {
                callback(data);
            });
        }
    }

}