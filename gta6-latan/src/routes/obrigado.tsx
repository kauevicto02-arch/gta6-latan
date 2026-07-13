import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/obrigado")({
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white px-4 py-10 flex items-center justify-center">
      <section className="w-full max-w-xl text-center">
        <div className="bg-white/5 border border-pink-500/40 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="text-5xl mb-5">🎉</div>

          <p className="text-pink-400 text-sm font-bold uppercase mb-3">
            ¡Compra confirmada!
          </p>

          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            ¡Bienvenido!
          </h1>

          <p className="text-gray-300 mt-5 text-base md:text-lg">
            Tu compra fue completada correctamente.
          </p>

          <div className="mt-7 bg-black/30 border border-white/10 rounded-2xl p-5 text-left">
            <p className="mb-3">📩 Revisa el correo utilizado en la compra.</p>
            <p className="mb-3">
              📂 Si no encuentras el mensaje, revisa Spam o Promociones.
            </p>
            <p>🚀 Allí recibirás las instrucciones para acceder al contenido.</p>
          </div>

          <p className="text-sm text-gray-400 mt-7">
            El correo puede tardar algunos minutos en llegar.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-5 text-[11px] md:text-sm text-gray-300">
          <div>🔒 Compra segura</div>
          <div>⚡ Acceso inmediato</div>
          <div>✅ Garantía de 7 días</div>
        </div>
      </section>
    </main>
  );
}