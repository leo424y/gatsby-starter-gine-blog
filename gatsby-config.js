module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/6eccf94c86cf406fb6d166b36147f97b?v=31f103acec4c4324b5c173be4fb1d603"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/31927c0a70b94d7ab72d5910d7452258?v=04f7d3ad83b744a5a27c5d1001b29136"
            }
        }
    ],
}
