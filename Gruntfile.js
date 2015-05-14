module.exports = function (grunt){
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify :{
            build :{
                files :[{
                    expand :true,//表示下面文件名的占位符（即*号）都要扩展成具体的文件名
                    cwd : 'webContent/src',
                    src : ['**/*.js','!**/tests/**/*.js'],
                    dest : 'webPublish/src'
                }]
                //src : 'webContent/src/**/*.js',
                //dest : 'webPublish'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'webContent/src',
                src: ['**/*.css', '!**/*.min.css'],
                dest: 'webPublish/src'
                //ext: '.min.css'
            }
        },
        jshint : {
            all: [
                'Gruntfile.js',
                'webContent/src/**/*.js',
                '!webContent/src/**/tests/**/*.js'
                //'spec/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            build: {
                src: ['webPublish']
            }
        },
        htmlmin: {
            dist:{
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeEmptyAttributes: true,
                    removeCommentsFromCDATA:true,
                    removeRedundantAttributes: true,
                    collapseBooleanAttributes:true
                },
                files: [{
                    expand: true,
                    cwd: 'webContent',
                    src: ['views/**/*.html', 'index.html'],
                    dest: 'webPublish'
                }]
            }
        },
        copy: {
            main: {
                expand : true,
                cwd: 'webContent/',
                src: '*.png',
                dest: 'webPublish',
                filter : 'isFile'
            },
            img : {
                expand :true,
                cwd : 'webContent/src/',
                src : '**/img/**',
                dest : 'webPublish/src/'
            }
        },
	exec: {
            phantomjs:'phantomjs lib/run_jasmine_test.coffee webContent/tests/runner.html'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    
    grunt.registerTask('default',['exec','jshint','clean','uglify','cssmin:minify','htmlmin','copy']);
};