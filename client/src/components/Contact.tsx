import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900">
              संपर्क करें और <span className="text-secondary">जुड़ें</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              वार्ड 6 के विकास में भागीदार बनें। अपने सुझाव, समस्याएं या समर्थन हमें भेजें।
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">हमें कॉल करें</p>
                  <p className="text-xl font-bold font-mono">+91 8409130597</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">हमारा कार्यालय</p>
                  <p className="text-lg font-bold">वार्ड नंबर 6, </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary to-orange-600 rounded-2xl text-white shadow-xl">
               <h3 className="text-2xl font-display font-bold mb-2">मतदान दिनांक याद रखें!</h3>
               <p className="opacity-90 mb-4">आने वाले नगर परिषद चुनाव में भारी मतों से विजय बनाएं।</p>
               <div className="inline-block bg-white text-primary font-bold px-4 py-2 rounded-lg shadow-sm">
                  चुनाव चिन्ह: बेबी वॉकर (Baby Walker)
               </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border shadow-sm">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">आपका नाम (Name)</label>
                <Input placeholder="अपना नाम लिखें" className="bg-white border-gray-200 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">मोबाइल नंबर (Mobile Number)</label>
                <Input placeholder="अपना मोबाइल नंबर लिखें" className="bg-white border-gray-200 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">संदेश / सुझाव (Message)</label>
                <Textarea placeholder="अपना संदेश यहाँ लिखें..." className="bg-white border-gray-200 min-h-[120px] resize-none" />
              </div>
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 text-lg">
                भेजें (Submit)
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
