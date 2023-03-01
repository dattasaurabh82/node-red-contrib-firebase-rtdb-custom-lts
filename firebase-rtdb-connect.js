module.exports = function(RED) {
    function FirebaseRTDBConnectNode(config) {
        // data node
        RED.nodes.createNode(this, config);
        const node = this;

        node.auth_domain = config.auth_domain;
        node.database_url = config.database_url;
        node.storage_bucket = config.storage_bucket;
        node.api_key = config.api_key;
        node.project_id = config.project_id;
        node.messaging_sender_id = config.messaging_sender_id;
        node.app_id = config.app_id;

        const fb_conf = {
            "apiKey": node.api_key,
            "authDomain": node.auth_domain,
            "databaseURL": node.database_url,
            "projectId": node.project_id,
            "storageBucket": node.storage_bucket,
            "messafingSenderId": node.messaging_sender_id,
            "appId": node.app_id
        };

        // [TBD] Check if fb_conf is in right struct
        if (!fb_conf){
            node.error("firebase config not correct");
        }else{
            // TBD ...
        }

        node.on ('input', function(msg) {
            // [Temp TEST]
            if (msg.topic == 'conf' && msg.payload == 'req'){
                msg.payload = [msg.payload, fb_conf];
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("firebase-rtdb-connect", FirebaseRTDBConnectNode);
}