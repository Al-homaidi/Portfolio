import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Twitter,
  ExternalLink,
  PhoneCall
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/mohammed-mahfouz-al-homaidi-1876b631b/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@Al_homaidi",
    icon: Instagram,
    url: "https://www.instagram.com/al_homaidi505?igsh=YXdpczBrNHI4djRx",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "Twitter",
    displayName: "Twitter",
    subText: "@Al_homaidi",
    icon: Twitter,
    url: "https://x.com/AlHomaidi53573",
    color: "#0078ff",
    gradient: "from-[#0078ff] to-[#0078ff]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Al_homaidi",
    icon: Github,
    url: "https://github.com/Al-homaidi",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: "@Al_homaidi",
    icon: FaWhatsapp,
    url: "https://wa.me/966556605664",
    color: "#25D366",
    gradient: "from-[#25D366] to-[#25D366]"
  },
  {
    name: "Phone",
    displayName: "Phone",
    subText: "@Al_homaidi",
    icon: PhoneCall,
    url: "tel:+966556605664",
    color: "#25D366",
    gradient: "from-[#25D366] to-[#25D366]",
    isPrimaryp: true
  }
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const phone = socialLinks.find(link => link.isPrimaryp);
  const otherLinks = socialLinks.filter(link => !link.isPrimary && !link.isPrimaryp);
  const [instagram, Twitter, github, whatsapp] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2" data-aos="fade-up" data-aos-duration="1200">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-duration="1300">
        {/* LinkedIn - Primary Row */}
        <a 
          data-aos="fade-down"
          data-aos-duration="1400"
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
                    bg-white/5 border border-white/10 overflow-hidden
                    hover:border-white/20 transition-all duration-500"
        >
          {/* Hover Gradient Background */}
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                      bg-gradient-to-r ${linkedIn.gradient}`}
          />
          
          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                          group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink 
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                      transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </a>

        {/* Second Row - Instagram & Twitter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-duration="1400">
          {[instagram, Twitter].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                     style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>

        {/* Third Row - GitHub & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-duration="1500">
          {[github, whatsapp].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                     style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>

        {/* Phone - primary row */}
        <a
          data-aos="fade-up"
          data-aos-duration="1600"
          href={phone.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
                    bg-white/5 border border-white/10 overflow-hidden
                    hover:border-white/20 transition-all duration-500"
        >
          {/* Hover Gradient Background */}
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                        bg-gradient-to-r ${phone.gradient}`}
          />
          
          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                          group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: phone.color }}
              />
              <div className="relative p-2 rounded-md">
                <phone.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: phone.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {phone.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {phone.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink 
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                      transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </a>
        
      </div>
    </div>
  );
};

export default SocialLinks;