module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/5bffef37e27b479db9171da5cc804049?v=ba458330255540c8807df90a8bfb61f6"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/744b5e43b7934a3d82efd6cdd2ccc412?v=36cf27e4f4274b5ab01a3b359a3ee7a5"
            }
        }
    ],
}
