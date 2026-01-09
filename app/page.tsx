import PressKitDeck from "@/components/PressKitDeck";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden bg-page-bg">
      <PressKitDeck />
      <div className="orientation-lock no-print" aria-hidden="true">
        <div className="orientation-lock__panel">
          <span className="orientation-lock__label">Rotate your device</span>
          <span className="orientation-lock__subtext">Landscape view required</span>
        </div>
      </div>
    </main>
  );
}
