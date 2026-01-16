import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("corporativo", "routes/corporativo.tsx"),
  route("social", "routes/social.tsx"),
] satisfies RouteConfig;
