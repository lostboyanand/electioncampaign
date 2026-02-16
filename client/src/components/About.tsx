import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import SymbolImage from "@assets/WhatsApp_Image_2026-02-16_at_9.01.23_PM_1771256017128.jpeg";

export default function About() {
  const promises = [
    "स्वच्छ और सुंदर वार्ड (Clean & Beautiful Ward)",
    "नियमित जलापूर्ति (Regular Water Supply)",
    "बुजुर्गों के लिए पेंशन सहायता (Pension Support for Elders)",
    "महिलाओं के लिए सुरक्षा और सम्मान (Safety & Respect for Women)",
    "सड़क और नालियों का निर्माण (Construction of Roads & Drains)",
    "हर घर तक सरकारी योजनाएं (Govt Schemes to Every Home)",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 relative">
             <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
             <img 
               src={SymbolImage} 
               alt="Baby Walker Symbol" 
               className="relative rounded-3xl shadow-lg border w-full max-w-md mx-auto"
             />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-8 py-4 rounded-xl border-2 border-primary shadow-2xl">
                <p className="text-3xl font-display font-bold text-primary text-center">वोट करें</p>
                <p className="text-5xl font-black text-center mt-2">क्रमांक 02</p>
             </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                क्यों चुनें <span className="text-primary underline decoration-wavy underline-offset-4">शेखर भैया</span> को?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                शेखर भैया एक ऐसे नेता हैं जो हमेशा आपके सुख-दुख में साथ खड़े रहे हैं। 
                वार्ड नंबर 6 की समस्याओं को जड़ से खत्म करने और एक आदर्श वार्ड बनाने के संकल्प के साथ 
                वे इस बार चुनाव मैदान में हैं। आपका एक वोट वार्ड की तस्वीर बदल सकता है।
              </p>
            </div>

            <div className="grid gap-4">
              {promises.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-orange-50/50 hover:bg-orange-50 transition-colors border border-orange-100">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
              <h3 className="text-xl font-bold text-secondary mb-2">विशेष अपील:</h3>
              <p className="text-gray-700 italic">
                "मैं वादा नहीं, विकास करने आया हूँ। मुझे एक मौका दें, मैं आपकी उम्मीदों पर खरा उतरूंगा।"
                <br />
                <span className="font-bold mt-2 block">- शेखर भैया</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
