grunt.loadNpmTasks("grunt-modernizr");

modernizr: {
    dist: {
        "parseFiles": true,
            "customTests": [],
            "devFile": "/PATH/TO/modernizr-dev.js",
            "dest": "/PATH/TO/modernizr-output.js",
            "tests": [
            // Tests
        ],
            "options": [
            "setClasses"
        ],
            "uglify": true
    }
}