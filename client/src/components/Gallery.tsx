import PortraitImage from "@assets/WhatsApp_Image_2026-02-08_at_11.41.28_PM_1771255913263.jpeg";
import BannerImage from "@assets/BANNER_1771255913262.jpg";
import SymbolImage from "@assets/WhatsApp_Image_2026-02-16_at_9.01.23_PM_1771256017128.jpeg";

export default function Gallery() {
  const images = [
    { src: BannerImage, alt: "Campaign Banner", type: "wide" },
    { src: PortraitImage, alt: "Shekhar Bhaiya Portrait", type: "tall" },
    { src: SymbolImage, alt: "Election Symbol", type: "square" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            प्रचार <span className="text-primary">झलकियाँ</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            हमारे चुनाव प्रचार और जनसंपर्क अभियान की कुछ तस्वीरें।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl shadow-md bg-white p-2 ${
                img.type === 'wide' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-xl w-full h-full min-h-[300px]">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
