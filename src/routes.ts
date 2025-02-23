import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("/login", "./routes/login.tsx"),

  layout("./share/layout/auth.tsx", [
    route("/dashboard", "./routes/dashboard.tsx"),
    route("/tenant", "./routes/tenant.tsx"),
  ]),
] satisfies RouteConfig;
