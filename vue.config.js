export default { 

    pages: {
        index: {
          // entry for the page
          entry: 'src/index/main.js',
          // the source template
          template: 'src/index.html',
          // output as dist/index.html
          filename: 'index.html',
          // when using title option,
          // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'Emma Jae Blue'
        },

        projects: {
            // entry for the page
            entry: 'src/index/projects.js',
            // the source template
            template: 'src/projects.html',
            // output as dist/index.html
            filename: 'projects.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Projects'
          },

          community: {
            // entry for the page
            entry: 'src/community.js',
            // the source template
            template: 'src/community.html',
            // output as dist/index.html
            filename: 'community.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Community'
          },
          contact: {
            // entry for the page
            entry: 'src/contact.js',
            // the source template
            template: 'src/contact.html',
            // output as dist/index.html
            filename: 'contact.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Contact'
          }
    }

}