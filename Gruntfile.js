var request = require('request');


module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('generate-icons-snippets', function () {
        grunt.log.ok('Loading latest icon names');

        var done = this.async();

        request({
            url: 'https://raw.githubusercontent.com/driftyco/ionicons/3.0/builder/build_data.json',
            headers: {
                'User-Agent': 'Just/ListingDirectory'
            }
        }, function (error, response, body) {
            var json;

            try {
                json = JSON.parse(body);
            } catch (stringError) {
                grunt.log.error(stringError);

                done();
                return;
            }

            if (!error && response.statusCode == 200) {
                grunt.file.delete('icons/');

                var iconReadme = [], htmlicons = [], nameicons = [];

                iconReadme.push('<h2 name="icons">Icons</h2>');
                iconReadme.push('When using the iconicons it is hard to keep track of the name to use.  There are two sets of icon snippets.  One is just the name so that you can use it anywhere and the other is the html for it.');
                iconReadme.push('');
                iconReadme.push('');
                iconReadme.push('| Icons' + Array(31).join(" ") + '| Snippet Code' + Array(41 - "Snippet Code".length).join(" ") + '|');
                iconReadme.push("|" + Array(36).join("-") + '| :' + Array(41).join("-") + ':|');

                htmlicons.push("{");
                nameicons.push("{");

                json.icons.forEach(function (value) {
                    nameicons.push('\t"ionicIcon' + value.name.replace(/-/g, '') + '": {');
                    nameicons.push('\t\t"prefix": "' + 'ionicIcon' + value.name.replace(/-/g, '') + '",');
                    nameicons.push('\t\t"body": ' + '"\\"' + json.prefix + value.name + ' icon\\";$0",');
                    nameicons.push('\t\t"description": "",');
                    nameicons.push('\t\t"scope": ""');
                    nameicons.push('\t},');

                    htmlicons.push('\t"ionicIcon' + value.name.replace(/-/g, '') + '": {');
                    htmlicons.push('\t\t"prefix": "' + 'ionicIcon' + value.name.replace(/-/g, '') + '",');
                    htmlicons.push('\t\t"body": ' + '"<i class=\\"' + json.prefix + value.name + ' icon\\"></i>$0",');
                    htmlicons.push('\t\t"description": "",');
                    htmlicons.push('\t\t"scope": ""');
                    htmlicons.push('\t},');
            
                    iconReadme.push('| ' + value.name + Array(36 - value.name.length).join(" ") + '| ' + value.name.replace(/-/g, '') + Array(41 - (value.name.replace(/-/g, '')).length).join(" ") + '|');
                });

                var htmlIconsContent = htmlicons.join('\n');
                htmlIconsContent = htmlIconsContent.substring(0, htmlIconsContent.length - 1) + "\n}";
                var nameIconsContent = nameicons.join('\n');
                nameIconsContent = nameIconsContent.substring(0, nameIconsContent.length - 1) + "\n}";
                grunt.file.write('snippets/icons-html.json', htmlIconsContent);
                grunt.file.write('snippets/icons-name.json', nameIconsContent);
                grunt.file.write('icons.md', iconReadme.join('\n'));

                grunt.log.oklns(json.icons.length + ' snippets generated :o');
            } else {
                grunt.log.error('Something went wrong, GitHub API message: ' + json.message + ' statusCode: ' + response.statusCode);
            }

            done();
        });
    });

    grunt.registerTask('build', ['generate-icons-snippets']);
};
