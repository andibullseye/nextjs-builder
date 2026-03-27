"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIRECTOR_PAGE_QUERY = exports.STATIC_PAYLOAD_QUERY = exports.TYPE_RESOLUTION_QUERY = void 0;
var TYPE_RESOLUTION_QUERY = "\nquery TypeResolution($links: [String!]!) {\n    typesForLinks(links: $links) {\n        type\n        link\n    }\n}\n";
exports.TYPE_RESOLUTION_QUERY = TYPE_RESOLUTION_QUERY;
var STATIC_PAYLOAD_QUERY = "\nquery StaticBuild {\n    staticBuild {\n      links {\n          link\n      }\n    }\n  }    \n";
exports.STATIC_PAYLOAD_QUERY = STATIC_PAYLOAD_QUERY;
var REDIRECTOR_PAGE_QUERY = "\nquery RedirectorPage($link: String!) {\n    readOneRedirectorPage(link: $link) {\n        title  \n        redirectionType\n        externalURL\n        linkTo {\n            link\n        }\n        linkToFile {\n            absoluteLink\n        }\n    }\n}\n";
exports.REDIRECTOR_PAGE_QUERY = REDIRECTOR_PAGE_QUERY;
//# sourceMappingURL=queries.js.map