var pubsub = {
    events: {},

    subscribe: function(eventName, callback) {
        if (!Array.isArray(this.events[eventName])) {
            this.events[eventName] = [];
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