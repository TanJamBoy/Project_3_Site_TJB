import axios from "axios";

export default {
    getPlayer: function() {
        return axios.get("/api/player")
    },

    createPlayer: function(playerData) {
        return axios.post("/api/player", playerData)
    },

    updatePlayer: function(id, playerData) {
        return axios.put("/api/player/" + id, playerData)
    }
}