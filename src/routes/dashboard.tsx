import { Welcome } from "../modules/welcome/welcome";
import type { Route } from "./+types/home";

export function meta({ data }: Route.MetaArgs) {
  return [{ title: "Dashboard" }, { name: "description", content: "Dashboard" }];
}

export default function DashboardPage() {
  return <Welcome />;
}
