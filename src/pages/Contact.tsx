import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "9966135989 / 9949727887",
      sub: "A. Naresh (Coordinator) / Ch. Kishore Kumar (PD)",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "sportschejarla@gmail.com",
      sub: "24/7 Support Response",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Palakaluru Road, Guntur",
      sub: "Andhra Pradesh - 522005",
      color: "text-red-600",
      bg: "bg-red-50"
    }
  ];

  const departmentCoordinators = [
    { name: "A.NARESH", dept: "CSE", phone: "9966135989" },
    { name: "PRAMILA", dept: "ECE", phone: "9398497747" },
    { name: "T.RAJESH", dept: "EEE", phone: "9603667339" },
    { name: "SHARMEELA", dept: "IT", phone: "9491794976" },
    { name: "A.CHENNAKESAV REDDY", dept: "AI & DS", phone: "8897909053" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-mono text-purple-700/40 text-xs tracking-[0.3em] uppercase mb-2">Get in Touch</h4>
          <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter text-purple-900 leading-none">
            CONTACT <span className="text-purple-800 italic font-serif lowercase tracking-normal font-light">us</span>
          </h1>
          <p className="mt-8 text-purple-700/70 font-serif italic text-xl max-w-2xl leading-relaxed">
            Have questions about our athletic programs or want to join the champions? 
            Reach out to our sports department and start your journey today.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Contact Info Cards */}
        {contactInfo.map((info, i) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white border border-neutral-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", info.bg)}>
              <info.icon className={info.color} size={28} />
            </div>
            <h3 className="text-xl font-display uppercase tracking-tight text-purple-900 mb-2">{info.title}</h3>
            <p className="text-purple-900 font-heading font-medium text-lg mb-1">{info.details}</p>
            <p className="text-neutral-400 text-xs uppercase tracking-widest font-mono">{info.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Department Coordinators Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-4xl font-display uppercase tracking-tighter text-purple-900 leading-none">
            DEPARTMENT <span className="text-purple-800 italic font-serif lowercase tracking-normal font-light">coordinators</span>
          </h2>
          <div className="h-px flex-1 bg-neutral-100" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentCoordinators.map((coord, i) => (
            <motion.div
              key={coord.dept}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-neutral-50 border border-neutral-100 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-purple-900 text-white text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-widest">
                  {coord.dept}
                </div>
              </div>
              <h3 className="text-lg font-display uppercase tracking-tight text-purple-900 mb-1">{coord.name}</h3>
              <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest group-hover:text-purple-600 transition-colors">
                {coord.phone}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Map Section Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 h-[400px] w-full bg-neutral-100 rounded-[40px] overflow-hidden relative group border border-neutral-200"
      >
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/T3cqxgvZ/Whats-App-Image-2026-03-25-at-1-20-07-PM.jpg')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 text-center max-w-sm">
            <MapPin className="text-red-600 mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-display uppercase tracking-tight text-purple-900 mb-2">Vignan's Nirula Campus</h3>
            <p className="text-neutral-500 text-sm font-serif italic mb-6">Palakaluru Road, Guntur, Andhra Pradesh</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-purple-900 text-white px-8 py-3 rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-purple-800 transition-colors"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
