import DetailsHero from "../components/DetailsHero/DetailsHero";
import Fleet from "../components/Fleet/Fleet";

export const metadata = {
  title: "Premium Fleet Details | Saffa Rent a Car",
  description: "Explore our premium fleet of vehicles including Toyota Prado, Land Cruiser, Fortuner, and more. Transparent pricing and VIP service for all rentals.",
};

export default function DetailsPage() {
  return (
    <>
      <DetailsHero />
      <Fleet title="Available Vehicles" eyebrow="Complete Fleet" />
    </>
  );
}
