new Vue ({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },

    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            var max = 10;
            var min = 3;
            // Math.random gives us a number between 0-1, if we * max it will give us a number between 0-9.999
            // and then add the Math.max to keep us between our minimum number and 10. so if the number is below 3,
            // it will take the min number, otherwise it will be the random number.
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;

            if(this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }
            
            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damage;

            if(this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRunning = false;
            }
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    }
});


