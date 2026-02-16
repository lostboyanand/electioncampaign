import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import BannerImage from "@assets/BANNER_1771255913262.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-green-50 pt-10 md:pt-20 pb-20">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6 text-center lg:text-left"
          >
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mx-auto lg:mx-0 border border-primary/20">
              साहिबगंज नगर परिषद चुनाव - वार्ड 6
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-gray-900 leading-[1.1]">
              <span className="text-primary block mb-2">वार्ड का गौरव,</span>
              <span className="text-secondary">नागरिकों का अधिकार</span>
            </h1>
            
            <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground mx-auto lg:mx-0">
              आपके अपने, कर्मठ एवं संघर्षशील प्रत्याशी <strong>शेखर भैया</strong> को 
              <span className="font-bold text-primary mx-1">बेबी वॉकर (Baby Walker)</span> 
              छाप पर मोहर लगाकर भारी मतों से विजयी बनाएं।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 shadow-xl shadow-primary/25 rounded-full">
                चुनाव चिन्ह देखें <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 rounded-full hover:bg-secondary/10 hover:text-secondary hover:border-secondary">
                घोषणा पत्र पढ़ें <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
              <span className="text-2xl font-bold bg-gray-900 text-white px-4 py-2 rounded-lg">क्रम संख्या: 02</span>
              <span className="text-2xl font-bold bg-primary text-white px-4 py-2 rounded-lg">चुनाव चिन्ह: बेबी वॉकर</span>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mr-0 max-w-[500px] w-full"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={BannerImage} 
                  alt="Shekhar Bhaiya Election Banner" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Symbol Badge */}
                <div className="absolute -bottom-6 -left-6 md:bottom-[-20px] md:left-[-20px] bg-white p-4 rounded-full shadow-xl border-4 border-primary animate-bounce duration-[3000ms]">
                   <div className="flex flex-col items-center justify-center h-24 w-24 md:h-32 md:w-32 rounded-full bg-orange-50 text-center">
                      <span className="text-4xl md:text-5xl">🚶‍♂️</span>
                      <span className="text-xs md:text-sm font-bold text-primary leading-tight mt-1">Baby Walker</span>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
