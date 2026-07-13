import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gracias")({
  component: ObrigadoPage,
});

function ObrigadoPage() {
useEffect(() => {
  const script = document.createElement("script");

  script.src =
    "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
  script.async = true;

  script.onload = () => {
    const hotmart = (window as any).checkoutElements;

    if (hotmart) {
      hotmart
        .init("salesFunnel")
        .mount("#hotmart-sales-funnel");
    }
  };

  document.body.appendChild(script);

  return () => {
    script.remove();
  };
}, []);
  return (
    <main className="min-h-screen bg-[#050510] text-white px-4 py-5 md:py-10">
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-pink-400 text-sm font-bold uppercase">
            ¡Compra Confirmada!
          </p>

          <h1 className="text-2xl md:text-4xl font-black mt-1">
            Antes de acceder, desbloquea esta oferta exclusiva
          </h1>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Disponible solo en esta página.
          </p>
        </div>

        <div className="bg-white/5 border border-pink-500/30 rounded-3xl p-4 md:p-8">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div>
              <img
                src="/kit-monetizacao.jpeg"
                alt="Kit Completo de Monetización GTA VI"
                className="w-full max-w-[310px] md:max-w-[390px] mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="inline-block bg-pink-500/20 text-pink-300 border border-pink-500/40 rounded-full px-4 py-1 text-xs font-bold uppercase mb-3">
                Oferta exclusiva de postcompra
              </p>

              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Kit Completo de{" "}
                <span className="text-pink-500">Monetización GTA VI</span>
              </h2>

              <p className="text-gray-300 mt-3 text-sm md:text-lg">
                Prompts, ideas, guiones, estrategias y plantillas para convertir el contenido en ingresos.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4 text-left">
                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <p className="font-bold text-sm">✅ +100 Prompts</p>
                </div>

                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <p className="font-bold text-sm">✅ Ideas listas</p>
                </div>

                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <p className="font-bold text-sm">✅ Estrategias</p>
                </div>

                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <p className="font-bold text-sm">✅ Modelos de oferta</p>
                </div>
              </div>

              <div className="mt-5 bg-black/40 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-gray-400 line-through text-base">
                  Antes $ 9.900 ARS
                </p>

                <p className="text-5xl md:text-6xl font-black text-green-400">
                  Hoy solo $ 4.900 ARS
                </p>

                <p className="text-pink-300 font-bold text-sm mt-1">
                  Pago seguro • acceso inmediato
                </p>
              </div>

              <div className="mt-5 flex flex-col items-center gap-3">
    <div id="hotmart-sales-funnel"></div>
</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center mt-4 text-[11px] md:text-sm text-gray-300">
          <div>🔒 Compra segura</div>
          <div>⚡ Acceso inmediato</div>
          <div>✅ Garantía de 7 días</div>
        </div>
      </section>
    </main>
  );
}