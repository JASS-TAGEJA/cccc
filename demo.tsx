"use client";

import React, { useState } from "react";
import { CoverFlowCarousel } from "@/components/ui/3-d-coverflow-carousel";
import {
  cafeInfo,
  chandniChowkCarouselDishes,
  chandniChowkFullMenu,
} from "@/data/menu-data";
import { Phone, Instagram, Sparkles, Utensils, Flame, Star, Check } from "lucide-react";

export const CCCLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img
    src="/public/images/logo-ccc.png"
    alt="Chandni Chowk Cheese Café Official Logo"
    className={`${className} object-contain`}
  />
);

export const IOSEmoji = ({ name, className = "w-4 h-4 inline-block align-middle" }: { name: string; className?: string }) => (
  <img
    src={`/public/images/emojis/${name}.png`}
    alt={name}
    className={`${className} object-contain inline-block align-text-bottom`}
  />
);

export default function Demo() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"menu" | "catering" | "reviews" | "faq" | "visit">("menu");

  const categories = ["All", ...chandniChowkFullMenu.map((c) => c.categoryName)];
  const filteredCategories =
    selectedCategory === "All"
      ? chandniChowkFullMenu
      : chandniChowkFullMenu.filter((c) => c.categoryName === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#0b0908] text-white font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Banner */}
      <div className="w-full bg-[#161210] border-b border-white/10 text-center py-2 px-4 text-xs font-medium tracking-wide text-amber-300 flex items-center justify-center gap-2">
        <IOSEmoji name="sparkles" className="w-4 h-4" />
        <span>{cafeInfo.slogan}</span>
        <IOSEmoji name="sparkles" className="w-4 h-4" />
      </div>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 pt-10 pb-6 text-center">
        <div className="flex justify-center mb-4">
          <CCCLogo className="w-24 h-24" />
        </div>
        <div className="inline-block px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase mb-2">
          {cafeInfo.hindiName}
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-2">
          Chandni Chowk <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-green-500">Cheese Café</span>
        </h1>
        <p className="text-stone-300 text-sm italic max-w-xl mx-auto mb-4">
          &ldquo;{cafeInfo.vibes}&rdquo;
        </p>

        {/* Navigation Tabs with iOS Emojis */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab("menu")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "menu" ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20" : "bg-stone-900 border border-white/10 text-stone-300"
            }`}
          >
            <IOSEmoji name="pizza" className="w-4 h-4" />
            <span>Menu &amp; Specials</span>
          </button>
          <button
            onClick={() => setActiveTab("catering")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "catering" ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20" : "bg-stone-900 border border-white/10 text-stone-300"
            }`}
          >
            <IOSEmoji name="party" className="w-4 h-4" />
            <span>Catering Services</span>
          </button>
          <button
            onClick={() => setActiveTab("visit")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "visit" ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20" : "bg-stone-900 border border-white/10 text-stone-300"
            }`}
          >
            <IOSEmoji name="pin" className="w-4 h-4" />
            <span>QR Codes &amp; Location</span>
          </button>
        </div>
      </header>

      {/* Tab 1: Menu */}
      {activeTab === "menu" && (
        <main>
          <CoverFlowCarousel
            items={chandniChowkCarouselDishes}
            sectionLabel="SIGNATURE BEST SELLERS"
            autoplay={true}
            autoplayDelay={4500}
          />

          <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border ${
                    selectedCategory === cat
                      ? "bg-amber-400 text-black border-amber-400 font-bold"
                      : "bg-stone-900/80 text-stone-300 border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {filteredCategories.map((cat, idx) => (
                <div key={idx} className="bg-[#14100e] border border-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-amber-400" />
                    {cat.categoryName}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} className="p-4 rounded-xl bg-stone-900/60 border border-white/5 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h5 className="font-bold text-sm text-stone-100 flex items-center gap-1.5">
                            {item.name}
                            {item.isSignature && <IOSEmoji name="fire" className="w-3.5 h-3.5" />}
                          </h5>
                          <span className="text-sm font-black text-amber-400">
                            {typeof item.price === "number" ? `₹${item.price}` : `₹${item.price}`}
                          </span>
                        </div>
                        {item.description && <p className="text-xs text-stone-400">{item.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* Tab 2: Catering */}
      {activeTab === "catering" && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-black text-center mb-8 uppercase text-amber-400">
            Catering &amp; Party Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#14100e] border border-white/10 rounded-2xl overflow-hidden">
              <img src="/public/images/birthday-poster.jpg" alt="Birthday Celebration" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-black uppercase text-red-400">Birthday Celebrations</h3>
                <p className="text-xs text-stone-300 italic mt-1">&ldquo;Make It Crazy. Make It Unforgettable.&rdquo;</p>
              </div>
            </div>
            <div className="bg-[#14100e] border border-white/10 rounded-2xl overflow-hidden">
              <img src="/public/images/catering-poster.jpg" alt="Catering Services" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-black uppercase text-blue-400">Grand Catering Services</h3>
                <p className="text-xs text-stone-300 italic mt-1">&ldquo;Delicious Food. Perfect Service. Memorable Moments.&rdquo;</p>
              </div>
            </div>
            <div className="bg-[#14100e] border border-white/10 rounded-2xl overflow-hidden">
              <img src="/public/images/house-party-poster.jpg" alt="House Party" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-black uppercase text-green-400">House Party Catering</h3>
                <p className="text-xs text-stone-300 italic mt-1">&ldquo;We Cater, You Celebrate!&rdquo;</p>
              </div>
            </div>
            <div className="bg-[#14100e] border border-white/10 rounded-2xl overflow-hidden">
              <img src="/public/images/kitty-party-poster.jpg" alt="Kitty Parties" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-black uppercase text-amber-400">Kitty Parties</h3>
                <p className="text-xs text-stone-300 italic mt-1">&ldquo;Girls, Gossips &amp; Good Food!&rdquo;</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tab 3: Visit & QR Codes */}
      {activeTab === "visit" && (
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-black mb-8 uppercase text-amber-400">Scan &amp; Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#14100e] border border-red-500/40 rounded-2xl flex flex-col items-center">
              <h3 className="text-lg font-bold text-red-400 mb-2">Location QR Code</h3>
              <img src="/public/images/location-qr.jpg" alt="Location QR" className="w-48 h-48 rounded-xl my-4" />
              <p className="text-xs text-stone-300">{cafeInfo.location}</p>
            </div>
            <div className="p-6 bg-[#14100e] border border-blue-500/40 rounded-2xl flex flex-col items-center">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Instagram QR Code</h3>
              <img src="/public/images/instagram-qr.jpg" alt="Instagram QR" className="w-48 h-48 rounded-xl my-4" />
              <p className="text-xs text-stone-300">{cafeInfo.instagram}</p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#0b0908] py-8 text-center mt-12 text-xs text-stone-400">
        <CCCLogo className="w-12 h-12 mx-auto mb-2" />
        <p className="font-bold text-amber-400">Chandni Chowk Cheese Café</p>
        <p>{cafeInfo.location} • {cafeInfo.contacts.join(" | ")}</p>
      </footer>
    </div>
  );
}
