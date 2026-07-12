// src/components/common/FeatureCard.js
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#121212] border border-[#8a7243]/20 p-8 rounded-xl text-center hover:border-[#cbb381]/50 transition-all duration-300 group hover:-translate-y-1">
      <div className="text-[#cbb381] text-3xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-[#cbb381] text-xl font-bold mb-3">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}