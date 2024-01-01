(function() {
  function init(raw_markdown) {
    var quill = new Quill("#editor-container", {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          [{ 'list' : 'ordered' }, { 'list' : 'bullet' }],
          ["image", "code-block"]
        ]
      },
      placeholder: "Compose an epic...",
      theme: "snow" // or 'bubble'
    });

    var md = window.markdownit();
    md.set({
      html: true
    });

    var result = md.render(raw_markdown);

    quill.clipboard.dangerouslyPasteHTML(result + "\n");

    // Need to do a first pass when we're passing in initial data.
    var html = quill.container.firstChild.innerHTML;
    $("#markdown").text(toMarkdown(html));
    $("#html").text(html);
    $("#output-quill").html(html);
    $("#output-markdown").html(result);

    // text-change might not be the right event hook. Works for now though.
    quill.on("text-change", function(delta, source) {
      var html = quill.container.firstChild.innerHTML;
      var markdown = toMarkdown(html);
      var rendered_markdown = md.render(markdown);
      $("#markdown").text(markdown);
      $("#html").text(html);
      $("#output-quill").html(html);
      $("#output-markdown").html(rendered_markdown);
    });
  }

  // Just some fake markdown that would come from the server.
  
  var text = "";
text += "# Dillinger" + "\n";
text += " " + "\n";
text += "[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)" + "\n";
text += " " + "\n";
text += "Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor." + "\n";
text += " " + "\n";
text += "  - Type some Markdown on the left" + "\n";
text += "  - See HTML in the right" + "\n";
text += "  - Magic" + "\n";
text += " " + "\n";
text += "# New Features!" + "\n";
text += " " + "\n";
text += "  - Import a HTML file and watch it magically convert to Markdown" + "\n";
text += "  - Drag and drop images (requires your Dropbox account be linked)" + "\n";
text += " " + "\n";
text += " " + "\n";
text += "You can also:" + "\n";
text += "  - Import and save files from GitHub, Dropbox, Google Drive and One Drive" + "\n";
text += "  - Drag and drop markdown and HTML files into Dillinger" + "\n";
text += "  - Export documents as Markdown, HTML and PDF" + "\n";
text += " " + "\n";
text += "Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]" + "\n";
text += " " + "\n";
text += "> The overriding design goal for Markdown's" + "\n";
text += "> formatting syntax is to make it as readable" + "\n";
text += "> as possible. The idea is that a" + "\n";
text += "> Markdown-formatted document should be" + "\n";
text += "> publishable as-is, as plain text, without" + "\n";
text += "> looking like it's been marked up with tags" + "\n";
text += "> or formatting instructions." + "\n";
text += " " + "\n";
text += "This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right." + "\n";
text += " " + "\n";
text += "### Tech" + "\n";
text += " " + "\n";
text += "Dillinger uses a number of open source projects to work properly:" + "\n";
text += " " + "\n";
text += "* [AngularJS] - HTML enhanced for web apps!" + "\n";
text += "* [Ace Editor] - awesome web-based text editor" + "\n";
text += "* [markdown-it] - Markdown parser done right. Fast and easy to extend." + "\n";
text += "* [Twitter Bootstrap] - great UI boilerplate for modern web apps" + "\n";
text += "* [node.js] - evented I/O for the backend" + "\n";
text += "* [Express] - fast node.js network app framework [@tjholowaychuk]" + "\n";
text += "* [Gulp] - the streaming build system" + "\n";
text += "* [Breakdance](http://breakdance.io) - HTML to Markdown converter" + "\n";
text += "* [jQuery] - duh" + "\n";
text += " " + "\n";
text += "And of course Dillinger itself is open source with a [public repository][dill]" + "\n";
text += " on GitHub." + "\n";
text += " " + "\n";
text += "### Installation" + "\n";
text += " " + "\n";
text += "Dillinger requires [Node.js](https://nodejs.org/) v4+ to run." + "\n";
text += " " + "\n";
text += "Install the dependencies and devDependencies and start the server." + "\n";
text += " " + "\n";
text += "```sh" + "\n";
text += "$ cd dillinger" + "\n";
text += "$ npm install -d" + "\n";
text += "$ node app" + "\n";
text += "```" + "\n";
text += " " + "\n";
text += "For production environments..." + "\n";
text += " " + "\n";
text += "```sh" + "\n";
text += "$ npm install --production" + "\n";
text += "$ npm run predeploy" + "\n";
text += "$ NODE_ENV=production node app" + "\n";
text += "```" + "\n";
text += " " + "\n";
text += "### Plugins" + "\n";
text += " " + "\n";
text += "Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below." + "\n";
text += " " + "\n";
text += "| Plugin | README |" + "\n";
text += "| ------ | ------ |" + "\n";
text += "| Dropbox | [plugins/dropbox/README.md] [PlDb] |" + "\n";
text += "| Github | [plugins/github/README.md] [PlGh] |" + "\n";
text += "| Google Drive | [plugins/googledrive/README.md] [PlGd] |" + "\n";
text += "| OneDrive | [plugins/onedrive/README.md] [PlOd] |" + "\n";
text += "| Medium | [plugins/medium/README.md] [PlMe] |" + "\n";
text += "| Google Analytics | [plugins/googleanalytics/README.md] [PlGa] |" + "\n";
text += " " + "\n";
text += " " + "\n";
text += "### Development" + "\n";
text += " " + "\n";
text += "Want to contribute? Great!" + "\n";
text += " " + "\n";
text += "Dillinger uses Gulp + Webpack for fast developing." + "\n";
text += "Make a change in your file and instantanously see your updates!" + "\n";
text += " " + "\n";
text += "Open your favorite Terminal and run these commands." + "\n";
text += " " + "\n";
text += "First Tab:" + "\n";
text += "```sh" + "\n";
text += "$ node app" + "\n";
text += "```" + "\n";
text += " " + "\n";
text += "Second Tab:" + "\n";
text += "```sh" + "\n";
text += "$ gulp watch" + "\n";
text += "```" + "\n";
text += " " + "\n";
text += "(optional) Third:" + "\n";
text += "```sh" + "\n";
text += "$ karma test" + "\n";
text += "```" + "\n";
text += "#### Building for source" + "\n";
text += "For production release:" + "\n";
text += "```sh" + "\n";
text += "$ gulp build --prod" + "\n";
text += "```" + "\n";
text += "Generating pre-built zip archives for distribution:" + "\n";
text += "```sh" + "\n";
text += "$ gulp build dist --prod" + "\n";
text += "```" + "\n";
text += "### Docker" + "\n";
text += "Dillinger is very easy to install and deploy in a Docker container." + "\n";
text += " " + "\n";
text += "By default, the Docker will expose port 80, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image." + "\n";
text += " " + "\n";
text += "```sh" + "\n";
text += "cd dillinger" + "\n";
text += "docker build -t joemccann/dillinger:${package.json.version}" + "\n";
text += "```" + "\n";
text += "This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger." + "\n";
text += " " + "\n";
text += "Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 80 of the Docker (or whatever port was exposed in the Dockerfile):" + "\n";
text += " " + "\n";
text += "```sh" + "\n";
text += "docker run -d -p 8000:8080 --restart=\"always\" <youruser>/dillinger:${package.json.version}" + "\n";
text += "```" + "\n";
text += " " + "\n";
text += "Verify the deployment by navigating to your server address in your preferred browser." + "\n";
text += " " + "\n";
text += "```sh" + "\n";
text += "127.0.0.1:8000" + "\n";
text += "```" + "\n";
text += " " + "\n";
text += "#### Kubernetes + Google Cloud" + "\n";
text += " " + "\n";
text += "See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)" + "\n";
text += " " + "\n";
text += " " + "\n";
text += "### Todos" + "\n";
text += " " + "\n";
text += " - Write MOAR Tests" + "\n";
text += " - Add Night Mode" + "\n";
text += " " + "\n";
text += "License" + "\n";
text += "----" + "\n";
text += " " + "\n";
text += "MIT" + "\n";
text += " " + "\n";
text += " " + "\n";
text += "**Free Software, Hell Yeah!**" + "\n";
text += " " + "\n";
text += "[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)" + "\n";
text += " " + "\n";
text += " " + "\n";
text += "   [dill]: <https://github.com/joemccann/dillinger>" + "\n";
text += "   [git-repo-url]: <https://github.com/joemccann/dillinger.git>" + "\n";
text += "   [john gruber]: <http://daringfireball.net>" + "\n";
text += "   [df1]: <http://daringfireball.net/projects/markdown/>" + "\n";
text += "   [markdown-it]: <https://github.com/markdown-it/markdown-it>" + "\n";
text += "   [Ace Editor]: <http://ace.ajax.org>" + "\n";
text += "   [node.js]: <http://nodejs.org>" + "\n";
text += "   [Twitter Bootstrap]: <https://twitter.github.com/bootstrap/>" + "\n";
text += "   [jQuery]: <https://jquery.com>" + "\n";
text += "   [@tjholowaychuk]: <https://twitter.com/tjholowaychuk>" + "\n";
text += "   [express]: <http://expressjs.com>" + "\n";
text += "   [AngularJS]: <https://angularjs.org>" + "\n";
text += "   [Gulp]: <http://gulpjs.com>" + "\n";
text += " " + "\n";
text += "   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>" + "\n";
text += "   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>" + "\n";
text += "   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>" + "\n";
text += "   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>" + "\n";
text += "   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>" + "\n";
text += "   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>" + "\n";

// text = "欢迎使用NothingEditor公众号编辑器，现在开始体验吧...";
text = `
> 阅读本文大概需要 1 分钟。


# 1.自律的重要性

<u>自律是一种强大的品质，它在我们的生活中扮演着至关重要的角色。</u>在这个瞬息万变的世界里，自律是实现个人和职业目标的关键。它不仅仅是一种能力，更是一种生活态度，一种塑造积极习惯的方式。

# 2.自律的定义

自律是指能够自我控制、自我管理的能力。它要求我们在面临诱惑和困难时保持坚定，坚持自己的目标。自律并不是一蹴而就的成果，而是通过持续努力、积极思考和良好习惯的养成而逐渐形成的。

# 3.自律的益处

自律带来的好处是多方面的。首先，它能够培养出坚强的意志力，使个体更容易应对生活中的各种挑战。其次，自律有助于塑造积极的生活习惯，比如规律的作息、健康的饮食和良好的时间管理。<u>此外，自律还是成功的基石，因为只有在困难时能够坚持努力，才能最终取得成功。</u>

# 4.培养自律的方法

要想拥有自律，首先需要设定明确的目标。<u>明确的目标能够为我们提供前进的方向，让我们更容易集中注意力并坚持努力</u>。其次，建立良好的时间管理习惯是非常关键的。通过制定合理的计划，将时间分配到不同的任务上，能够有效提高工作效率。最后，养成积极的思维模式，正面看待困难，学会从失败中吸取经验教训，都是培养自律的重要方法。

# 5.结语

自律是人生中一座重要的里程碑，它不仅让我们更好地理解自己，还能够引导我们走向成功的道路。通过坚持努力、养成良好的习惯，我们能够在追求目标的过程中更加深刻地体会到自律的力量。在日常生活中，让自律成为我们的伙伴，引领我们走向更加充实、有意义的人生。

`;

  init(text);
})();