import PressKitDeck from "@/components/PressKitDeck";
import OrientationLock from "@/components/OrientationLock";

export default function Home() {
  return (
    <main className="presskit-viewport w-full overflow-hidden bg-page-bg">
      <PressKitDeck />
      <OrientationLock />
    </main>
  );
}
