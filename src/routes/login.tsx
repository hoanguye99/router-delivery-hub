import { Welcome } from "../modules/welcome/welcome";
import type { Route } from "./+types/home";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: "Login to your account" },
    { name: "description", content: "Login to your account" },
  ];
}

export default function LoginPage() {
  return <Welcome />;
}
