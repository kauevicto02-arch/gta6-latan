import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gracias")({
  component: ObrigadoPage,
});

function ObrigadoPage() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    script.async = true;

    script.onload = () => {
      const hotmart = (window as any).checkoutElements;

      if (hotmart) {
        hotmart.init("salesFunnel").mount("#hotmart-sales-funnel");
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
          <p className="text-pink-400 text-sm font-bold uppercase">¡Compra Confirmada!</p>

          <h1 className="text-2xl md:text-4xl font-black mt-1">
            Antes de acceder, desbloquea esta oferta exclusiva
          </h1>

          <p className="text-gray-300 text-sm md:text-base mt-2">Disponible solo en esta página.</p>
        </div>

        <div className="bg-white/5 border border-pink-500/30 rounded-3xl p-4 md:p-8">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div>
              <img
                src="megakit.jpeg"
                alt="Mega Kit IA, Plantillas y Recursos Premium"
                className="w-full max-w-[310px] md:max-w-[390px] mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
  Biblioteca Premium de{" "}
  <span className="text-pink-500">Recursos</span>
</h2>

<p className="text-gray-300 mt-3 text-sm md:text-lg">
  El Mega Kit IA + Plantillas + Recursos Premium incluye una colección
  exclusiva de guías y materiales para ayudarte a crear contenido más rápido,
  organizado y profesional.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-left">
  <div className="bg-black/30 border border-white/10 rounded-xl p-4">
    <p className="font-bold text-sm md:text-base">
      📘 100 Herramientas Gratuitas
    </p>
    <p className="text-gray-400 text-xs md:text-sm mt-2">
      Herramientas para edición de video, imágenes, inteligencia artificial,
      diseño, automatización y productividad.
    </p>
  </div>

  <div className="bg-black/30 border border-white/10 rounded-xl p-4">
    <p className="font-bold text-sm md:text-base">
      📕 Estrategias Premium
    </p>
    <p className="text-gray-400 text-xs md:text-sm mt-2">
      Estrategias para organizar la producción, identificar tendencias y
      mejorar el rendimiento de tus publicaciones.
    </p>
  </div>

  <div className="bg-black/30 border border-white/10 rounded-xl p-4">
    <p className="font-bold text-sm md:text-base">
      📙 100 Plantillas para Redes Sociales
    </p>
    <p className="text-gray-400 text-xs md:text-sm mt-2">
      Estructuras listas para Instagram, Facebook, TikTok, Reels, Shorts,
      YouTube, Stories y anuncios.
    </p>
  </div>

  <div className="bg-black/30 border border-white/10 rounded-xl p-4">
    <p className="font-bold text-sm md:text-base">
      📗 500 Prompts para ChatGPT
    </p>
    <p className="text-gray-400 text-xs md:text-sm mt-2">
      Prompts para anuncios, copies, guiones, emails, páginas de venta,
      titulares, CTAs y automatizaciones.
    </p>
  </div>

  <div className="bg-black/30 border border-white/10 rounded-xl p-4">
    <p className="font-bold text-sm md:text-base">
      📒 300 Headlines de Alta Conversión
    </p>
    <p className="text-gray-400 text-xs md:text-sm mt-2">
      Titulares preparados para captar la atención y aumentar el interés en
      anuncios y páginas de venta.
    </p>
  </div>

  <div className="bg-black/30 border border-white/10 rounded-xl p-4">
    <p className="font-bold text-sm md:text-base">
      📔 100 Scripts para Reels
    </p>
    <p className="text-gray-400 text-xs md:text-sm mt-2">
      Guiones con hooks, desarrollo y llamadas a la acción para Reels, TikTok
      y YouTube Shorts.
    </p>
  </div>
</div>

<div className="mt-6 bg-black/30 border border-pink-500/30 rounded-2xl p-5">
  <p className="text-pink-400 font-bold text-sm uppercase mb-3">
    Beneficios incluidos
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-200">
    <p>✅ Acceso inmediato</p>
    <p>✅ Descarga ilimitada</p>
    <p>✅ Material actualizado</p>
    <p>✅ Acceso vitalicio</p>
    <p>✅ Compatible con ChatGPT y otras herramientas de IA</p>
  </div>
</div>

              <div className="mt-5 bg-black/40 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-gray-400 line-through text-base">Antes $ 11.900 ARS</p>

                <p className="text-5xl md:text-6xl font-black text-green-400">
                  Hoy solo $ 3.900 ARS
                </p>

                <p className="text-pink-300 font-bold text-sm mt-1">
                  Pago seguro • acceso inmediato
                </p>
              </div>

              <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl">
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
