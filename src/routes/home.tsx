import type { Route } from "./+types/home";
import LandingPage from "@/modules/landing-page";
export function meta({ data }: Route.MetaArgs) {
  return [{ title: "Trang chủ" }, { name: "description", content: "Trang chủ" }];
}

export default function Home() {
  return <LandingPage />;
}
