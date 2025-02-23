import { Welcome } from "../modules/welcome/welcome";
import type { Route } from "./+types/home";

export function meta({ data }: Route.MetaArgs) {
  return [{ title: "Tenant" }, { name: "description", content: "Tenant" }];
}

export default function TenantPage() {
  return <Welcome />;
}
