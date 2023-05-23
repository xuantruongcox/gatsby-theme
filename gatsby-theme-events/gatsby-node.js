const fs = require("fs");
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || `${__dirname}/data/`;
  // Checking if there's not data folder

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};
// Custom for Event node
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
        type Event implements Node @dontInfer {
            id: ID!
            name: String
            location: String!
            startDate: Date! @dateformat @proxy(from: "start_date")
            endDate: Date! @dateformat @proxy(from: "end_date")
            url: String!
            slug: String!
        }
    `);
};

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/";
  const slugify = (str) => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/");
  };
  createResolvers({
    Event: {
      slug: {
        resolve: (source) => slugify(source.name),
      },
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  // Create root pages
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/events.js"),
  });

  // In case the graphql query failed
  const result = await graphql(`
    query {
      allEvent(sort: { startDate: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic("error loading events", result.errors);
    return;
  }
  // Create page for each event
  const events = result.data.allEvent.nodes;
  events.forEach((event) => {
    const slug = event.slug;
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/event.js"),
      context: {
        eventID: event.id,
      },
    });
  });
};
