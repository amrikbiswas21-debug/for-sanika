'use client';

import Cursor from './Cursor';
import FloatingParticles from './FloatingParticles'; // Add this line
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plane, Music, Skull, Train, Bus, Car, Mail, X, CheckCircle2, Circle, Star } from 'lucide-react';
import CustomScratch from './CustomScratch';

export default function LovePage() {
  const mainAudioRef = useRef(null);
  const dioAudioRef = useRef(null);
  const roundaboutRef = useRef(null); // The JJBA Finale Audio
  const [isFinale, setIsFinale] = useState(false); // Triggers the Sepia filter
  const [passcode, setPasscode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [activeEnvelope, setActiveEnvelope] = useState(null);

  const envelopes = [
    {
      id: 1,
      title: "Open when the distance sucks",
      content: "Whether it’s a 6-hour train or that bumpy MMK bus, I'd travel it every single day if I had to. Keep dreaming about those college town flats—we’ll be there before we know it."
    },
    {
      id: 2,
      title: "Open when you can't sleep",
      content: "Put on 'Arctic' by Porch Light, close your eyes, and imagine I'm right there next to you. (Because I probably am, at least in my head)."
    },
    {
      id: 3,
      title: "Open when you need romance",
      content: "I was going to write a deeply emotional poem about your beautiful brown eyes, but... YOU THOUGHT THIS WAS A ROMANTIC POEM, BUT IT WAS ME, DIO! ゴゴゴゴ"
    },
    {
      id: 4,
      title: "Open when college is stressful",
      content: "Take a deep breath. You are incredibly smart, you look amazing today, and if anyone gives you a hard time, I will personally handle them. You've got this."
    }
  ];

  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set to your exact anniversary date (Midnight, August 8, 2026)
    const startDate = new Date('2026-08-08T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000); // Ticks every 1 second
    return () => clearInterval(interval);
  }, []);

  const [bucketList, setBucketList] = useState([
    { id: 1, text: "Falling asleep without having to hang up the phone.", done: false },
    { id: 2, text: "Actually making dinner together instead of timing our Swiggy orders.", done: false },
    { id: 3, text: "Stealing your hoodies in person.", done: false },
    { id: 4, text: "Finally exploring each other's flats.", done: false },
    { id: 5, text: "A late-night auto or cab ride where we don't have to check the time.", done: false },
    { id: 6, text: "Walking around your campus (and letting you show off).", done: false },
    { id: 7, text: "Binge-watching Marvel while cuddling.", done: false },
    { id: 8, text: "Scratching a real-life lottery ticket just to see if we're as lucky as we were on August 8th.", done: false },
    { id: 9, text: "A dedicated date night where we just dress up to take stupid polaroids.", done: false }
  ]);

  const toggleBucketItem = (id) => {
    setBucketList(prev => prev.map(item => 
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  const handleUnlock = () => {
    if (passcode === '240206') {
      setUnlocked(true);
      // Explicitly tells the mobile browser it's allowed to play the music
      if (mainAudioRef.current) {
        mainAudioRef.current.play().catch(e => console.log("Audio play blocked:", e));
      }
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
      setPasscode('');
    }
  };

  // The unlocked Dashboard
  // The unlocked Dashboard
  if (unlocked) {
    return (
      <main className={`min-h-screen bg-gradient-to-b from-pink-50 via-rose-100/50 to-pink-100 p-6 md:p-12 relative overflow-hidden font-sans pb-32 transition-all duration-[2000ms] ${isFinale ? 'sepia contrast-125 saturate-50' : ''}`}>
        
        {/* Our Custom Backgrounds */}
        <Cursor />
        <FloatingParticles />
        
        {/* CSS Topographical Ripple Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" 
          style={{ 
            backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, #be123c 10px, transparent 10px, transparent 20px)' 
          }}
        ></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          {/* The Hero Header */}
          <div className="text-center mb-16 pt-8 md:pt-12">
            <h1 className="text-6xl md:text-8xl font-serif text-[#8a1c3a] mb-6 font-bold tracking-tight">
              Sanika
            </h1>
            
            {/* The Heart Divider */}
            <div className="flex items-center justify-center gap-4 mb-8 opacity-70">
              <div className="h-[1px] w-12 md:w-24 bg-[#8a1c3a]"></div>
              <Heart size={14} className="text-[#8a1c3a] fill-[#8a1c3a]" />
              <div className="h-[1px] w-12 md:w-24 bg-[#8a1c3a]"></div>
            </div>

            {/* The Cursive Subtitle */}
            <p 
              className="text-2xl md:text-3xl text-[#8a1c3a]/90 tracking-wide max-w-2xl mx-auto leading-relaxed px-4" 
              style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
            >
              Four months in December. I couldn't wait, so I made you this.
            </p>
          </div>

          {/* The Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* The Bangalore Ticket */}
            <motion.div 
              whileHover={{ scale: 1.02, rotateX: 2 }}
              className="md:col-span-2 bg-white/40 backdrop-blur-xl border border-rose-200/50 shadow-2xl rounded-3xl p-8 flex flex-col justify-between"
              style={{ transformPerspective: 1000 }}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-amber-900 font-serif text-2xl mb-1">Boarding Pass</h3>
                  <p className="text-amber-700/70 text-sm font-medium">Destination: Sanika 💖</p>
                </div>
                <div className="bg-rose-100 p-3 rounded-full text-rose-500">
                  <Plane size={24} />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-amber-900 font-bold text-xl mb-8">
                <span>MAA (Chennai)</span>
                <div className="flex-1 mx-4 border-t-2 border-dashed border-rose-300 relative">
                  <Plane size={16} className="absolute top-[-9px] left-1/2 text-rose-400 animate-pulse" />
                </div>
                <span>BLR (Bangalore)</span>
              </div>

              {/* Love Transit Times Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white/50 rounded-xl p-3 flex flex-col items-center text-center border border-rose-100 hover:bg-rose-50 transition-colors">
                  <Plane size={18} className="text-rose-400 mb-1" />
                  <span className="text-amber-900 font-bold text-sm">55 mins</span>
                  <span className="text-amber-700/60 text-[10px] leading-tight mt-1">Too long without you</span>
                </div>
                
                <div className="bg-white/50 rounded-xl p-3 flex flex-col items-center text-center border border-rose-100 hover:bg-rose-50 transition-colors">
                  <Train size={18} className="text-rose-400 mb-1" />
                  <span className="text-amber-900 font-bold text-sm">6 hrs</span>
                  <span className="text-amber-700/60 text-[10px] leading-tight mt-1">Looking at our photos</span>
                </div>

                <div className="bg-white/50 rounded-xl p-3 flex flex-col items-center text-center border border-rose-100 hover:bg-rose-50 transition-colors">
                  <Bus size={18} className="text-rose-400 mb-1" />
                  <span className="text-amber-900 font-bold text-sm">7 hrs</span>
                  <span className="text-amber-700/60 text-[10px] leading-tight mt-1">On the MMK bus dreaming</span>
                </div>

                <div className="bg-white/50 rounded-xl p-3 flex flex-col items-center text-center border border-rose-100 hover:bg-rose-50 transition-colors">
                  <Car size={18} className="text-rose-400 mb-1" />
                  <span className="text-amber-900 font-bold text-sm">5 hrs</span>
                  <span className="text-amber-700/60 text-[10px] leading-tight mt-1">"Arctic" on repeat</span>
                </div>
              </div>
            </motion.div>

            {/* The DIO Easter Egg Card */}
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 180 }}
              onMouseEnter={() => {
                if (mainAudioRef.current && dioAudioRef.current) {
                  mainAudioRef.current.pause();
                  dioAudioRef.current.currentTime = 0;
                  dioAudioRef.current.play();
                }
              }}
              onMouseLeave={() => {
                if (dioAudioRef.current) {
                  dioAudioRef.current.pause();
                }
              }}
              className="bg-white/40 backdrop-blur-xl border border-rose-200/50 shadow-2xl rounded-3xl p-8 flex items-center justify-center cursor-pointer relative group"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
                {/* The Funky Hover Hint */}
                <div className="absolute -top-3 -right-3 bg-amber-200 text-amber-900 text-[10px] font-black tracking-widest px-3 py-1 rounded-full shadow-lg rotate-12 animate-bounce pointer-events-none z-20" style={{ backfaceVisibility: 'hidden' }}>
                    HOVER ✨
                </div>

                <div className="text-center group-hover:opacity-0 transition-opacity duration-300" style={{ backfaceVisibility: 'hidden' }}>
                    <Heart size={40} className="text-rose-400 mx-auto mb-3" />
                    <h3 className="text-amber-900 font-serif text-xl">A Sweet Note...</h3>
                </div>
                <div className="absolute inset-0 bg-red-900/90 rounded-3xl p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Skull size={32} className="text-red-400 mb-2" />
                    <p className="text-red-100 font-bold text-center text-sm">KONO DIO DA! ゴゴゴゴ</p>
                </div>
            </motion.div>

            {/* The Stand Stats */}
            <motion.div 
              className="md:col-span-3 bg-white/40 backdrop-blur-xl border border-rose-200/50 shadow-2xl rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Subtle Joestar background star */}
              <Star size={240} className="absolute -top-16 -right-16 text-rose-200/30 fill-rose-200/30 rotate-12 pointer-events-none" />
              
              <div className="text-center mb-8 relative z-10">
                <span className="bg-rose-100 text-rose-500 text-[10px] font-bold px-3 py-1 rounded-full mb-3 inline-block tracking-widest uppercase">ゴゴゴゴ Stand User ゴゴゴゴ</span>
                <h3 className="text-amber-900 font-serif text-3xl">Sanika's Stand Parameters</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
                 {/* Destructive Power */}
                 <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-white/50 border border-rose-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-rose-400 text-[10px] font-bold tracking-widest uppercase mb-3 text-center">Destructive Power</p>
                    <p className="text-5xl md:text-6xl font-serif font-black text-amber-900 drop-shadow-md">A</p>
                 </motion.div>
                 
                 {/* Speed */}
                 <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-white/50 border border-rose-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-rose-400 text-[10px] font-bold tracking-widest uppercase mb-3 text-center">Speed (Replies)</p>
                    <p className="text-5xl md:text-6xl font-serif font-black text-amber-900 drop-shadow-md">B</p>
                 </motion.div>
                 
                 {/* Range */}
                 <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-white/50 border border-rose-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-rose-400 text-[10px] font-bold tracking-widest uppercase mb-3 text-center">Range (Distance)</p>
                    <p className="text-5xl md:text-6xl font-serif font-black text-amber-900 drop-shadow-md">A</p>
                 </motion.div>

                 {/* Cuteness */}
                 <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-white/50 border border-rose-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-rose-400 text-[10px] font-bold tracking-widest uppercase mb-3 text-center">Cuteness</p>
                    <p className="text-5xl md:text-6xl font-serif font-black text-amber-900 drop-shadow-md">∞</p>
                 </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Scratch-Off Canvas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 bg-white/40 backdrop-blur-xl border border-rose-200/50 shadow-2xl rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="bg-rose-100 text-rose-500 text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">Scratch to Reveal</span>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-2">Scratch to see us chilling</h2>
            <p className="text-amber-700/80 mb-10">I couldn't wait until August, so I made you this.</p>

            <CustomScratch imageSrc="/us.jpeg" />
          </motion.div>

          {/* The Birthday Moons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white/40 backdrop-blur-xl border border-rose-200/50 shadow-2xl rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto"
          >
            <span className="bg-rose-100 text-rose-500 text-xs font-bold px-3 py-1 rounded-full mb-6 inline-block tracking-widest uppercase">Written in the Stars</span>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-2 mt-2">The moon when we were born</h2>
            <p className="text-amber-700/80 mb-10">Because I looked it up.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Sanika's Moon */}
              <div className="flex flex-col items-center">
                <p className="text-amber-900 font-serif text-xl mb-1">Sanika</p>
                <p className="text-amber-700/60 text-xs font-medium tracking-widest uppercase mb-6">Feb 24, 2006</p>
                
                <div className="relative flex items-center justify-center w-48 h-48 rounded-full border border-dashed border-rose-300 mb-6">
                  {/* The Volumetric Moon Base */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-50 to-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.2)] relative overflow-hidden">
                    {/* Craters */}
                    <div className="absolute top-4 left-6 w-3 h-3 bg-amber-900/10 rounded-full shadow-inner"></div>
                    <div className="absolute bottom-6 right-8 w-4 h-4 bg-amber-900/10 rounded-full shadow-inner"></div>
                    <div className="absolute top-12 right-10 w-2 h-2 bg-amber-900/10 rounded-full shadow-inner"></div>
                    <div className="absolute top-14 left-10 w-5 h-5 bg-amber-900/10 rounded-full shadow-inner"></div>
                    
                    {/* Waning Crescent Phase Shadow (Covers right side in darkness) */}
                    <div className="absolute inset-0 bg-rose-50/95 rounded-full translate-x-8 scale-110"></div>
                  </div>
                </div>
                <span className="bg-rose-50 text-rose-400 text-xs font-bold px-3 py-1 rounded-full border border-rose-100">Waning Crescent</span>
              </div>

              {/* Amrik's Moon */}
              <div className="flex flex-col items-center">
                <p className="text-amber-900 font-serif text-xl mb-1">Amrik</p>
                <p className="text-amber-700/60 text-xs font-medium tracking-widest uppercase mb-6">Jun 21, 2007</p>
                
                <div className="relative flex items-center justify-center w-48 h-48 rounded-full border border-dashed border-rose-300 mb-6">
                  {/* The Volumetric Moon Base */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-50 to-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.2)] relative overflow-hidden">
                    {/* Craters */}
                    <div className="absolute top-4 left-6 w-3 h-3 bg-amber-900/10 rounded-full shadow-inner"></div>
                    <div className="absolute bottom-6 right-8 w-4 h-4 bg-amber-900/10 rounded-full shadow-inner"></div>
                    <div className="absolute top-12 right-10 w-2 h-2 bg-amber-900/10 rounded-full shadow-inner"></div>
                    <div className="absolute top-14 left-10 w-5 h-5 bg-amber-900/10 rounded-full shadow-inner"></div>
                    
                    {/* Waxing Crescent Phase Shadow (Covers left side in darkness) */}
                    <div className="absolute inset-0 bg-rose-50/95 rounded-full -translate-x-8 scale-110"></div>
                  </div>
                </div>
                <span className="bg-rose-50 text-rose-400 text-xs font-bold px-3 py-1 rounded-full border border-rose-100">Waxing Crescent</span>
              </div>

            </div>
          </motion.div>

          {/* Live Time Together Counter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white/40 backdrop-blur-xl border border-rose-200/50 shadow-2xl rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto relative overflow-hidden"
          >
            {/* Soft pulsing background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-64 h-64 bg-rose-300 rounded-full blur-[80px] animate-pulse"></div>
            </div>

            <div className="relative z-10">
              <span className="bg-rose-100 text-rose-500 text-xs font-bold px-3 py-1 rounded-full mb-6 inline-block tracking-widest uppercase">The exact math</span>
              <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-8">Time since August 8th</h2>

              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {/* Days */}
                <div className="bg-white/50 border border-rose-100 rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-lg backdrop-blur-md">
                  <span className="text-3xl font-black text-amber-900">{timeTogether.days}</span>
                  <span className="text-[10px] tracking-widest uppercase text-rose-400 mt-1 font-bold">Days</span>
                </div>
                
                {/* Hours */}
                <div className="bg-white/50 border border-rose-100 rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-lg backdrop-blur-md">
                  <span className="text-3xl font-black text-amber-900">{timeTogether.hours}</span>
                  <span className="text-[10px] tracking-widest uppercase text-rose-400 mt-1 font-bold">Hours</span>
                </div>

                {/* Minutes */}
                <div className="bg-white/50 border border-rose-100 rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-lg backdrop-blur-md">
                  <span className="text-3xl font-black text-amber-900">{timeTogether.minutes}</span>
                  <span className="text-[10px] tracking-widest uppercase text-rose-400 mt-1 font-bold">Mins</span>
                </div>

                {/* Seconds */}
                <div className="bg-white/50 border border-rose-100 rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-lg backdrop-blur-md relative overflow-hidden group">
                  {/* The seconds card has a special glowing edge that moves */}
                  <div className="absolute inset-0 border-2 border-rose-300/30 rounded-2xl"></div>
                  <span className="text-3xl font-black text-amber-900 relative z-10">{timeTogether.seconds}</span>
                  <span className="text-[10px] tracking-widest uppercase text-rose-400 mt-1 font-bold relative z-10">Secs</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open When Envelopes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 mb-24 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {envelopes.map((env) => (
                <motion.button
                  key={env.id}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveEnvelope(env)}
                  className="bg-white/40 backdrop-blur-xl border border-rose-200/50 shadow-xl rounded-3xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer"
                >
                  <div className="bg-rose-100 p-4 rounded-full text-rose-400 mb-4 group-hover:bg-rose-200 group-hover:text-rose-500 transition-colors">
                    <Mail size={32} />
                  </div>
                  <h3 className="text-amber-900 font-serif text-lg leading-tight">{env.title}</h3>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* LDR Bucket List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 mb-12 bg-white/40 backdrop-blur-xl border border-rose-200/50 shadow-2xl rounded-3xl p-8 md:p-12 max-w-3xl mx-auto"
          >
            <div className="text-center mb-10">
              <span className="bg-rose-100 text-rose-500 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase">The Master Plan</span>
              <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-2 mt-2">When we close the distance</h2>
            </div>

            <div className="flex flex-col gap-3">
              {bucketList.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ scale: 1.01, x: 5 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleBucketItem(item.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer border transition-all duration-300 ${
                    item.done 
                      ? 'bg-rose-50/50 border-rose-200/50 text-amber-900/40 shadow-inner' 
                      : 'bg-white/60 border-rose-100 text-amber-900 shadow-md hover:bg-white/80'
                  }`}
                >
                  <div className={`transition-colors duration-300 ${item.done ? 'text-rose-300' : 'text-rose-400'}`}>
                    {item.done ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                  </div>
                  <span className={`text-sm md:text-base font-medium transition-all duration-300 ${
                    item.done ? 'line-through decoration-rose-300/50' : ''
                  }`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Grand Finale Anniversary Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 mb-12 max-w-4xl mx-auto text-center relative z-10"
          >
            {/* The Screenshot-Style Typography */}
            <h1 className="text-5xl md:text-7xl font-serif text-[#8a1c3a] mb-6 font-bold tracking-tight">
              Happy 100th Anniversary
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8 opacity-60">
              <div className="h-[1px] w-24 bg-[#8a1c3a]"></div>
              <Heart size={14} className="text-[#8a1c3a] fill-[#8a1c3a]" />
              <div className="h-[1px] w-24 bg-[#8a1c3a]"></div>
            </div>

            <p 
              className="text-3xl text-[#8a1c3a]/90 tracking-wide" 
              style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", fontStyle: "italic" }}
            >
              Can't wait till we're wrinkly together Glooberpapple
            </p>

            {/* The JJBA To Be Continued Button */}
            <div className="mt-32 flex justify-start md:justify-end relative">
              
              {/* Click Me Bouncing Hint */}
              <div className="absolute -top-10 right-10 bg-rose-100 text-rose-600 text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce z-20 whitespace-nowrap">
                Click me! ⬇️
              </div>

              <motion.button
                whileHover={{ x: -10 }}
                onClick={() => {
                  setIsFinale(true);
                  if (mainAudioRef.current) mainAudioRef.current.pause();
                  if (roundaboutRef.current) roundaboutRef.current.play();
                }}
                className="relative group cursor-pointer flex items-center shadow-2xl transition-transform"
              >
                {/* The jagged arrow head */}
                <div className="w-0 h-0 border-y-[20px] border-y-transparent border-r-[30px] border-r-[#eebb4d]"></div>
                {/* The arrow body */}
                <div className="bg-[#eebb4d] text-amber-950 font-black italic tracking-tighter px-6 py-2 text-2xl md:text-3xl border-l-4 border-[#8b5a19] flex items-center h-[40px]">
                  TO BE CONTINUED
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Sticky Audio Player */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm z-50">
             <div className="bg-white/70 backdrop-blur-xl border border-rose-200 shadow-xl rounded-full px-6 py-4 flex items-center justify-between">
                
                {/* React Ref Audio Elements */}
                <audio ref={mainAudioRef} loop src="/arctic.mp3" />
                <audio ref={dioAudioRef} src="/dio.mp3" />
                <audio ref={roundaboutRef} src="/roundabout.mp3" />

                <div className="flex items-center gap-4">
                    <div className="bg-rose-100 p-2 rounded-full text-rose-500 animate-pulse">
                        <Music size={20} />
                    </div>
                    <div>
                        <p className="text-amber-900 font-medium text-sm">Arctic</p>
                        <p className="text-amber-700/60 text-xs">Porch Light</p>
                    </div>
                </div>
                
                <button 
                  onClick={() => {
                    if (mainAudioRef.current) {
                      if (mainAudioRef.current.paused) {
                        mainAudioRef.current.play();
                      } else {
                        mainAudioRef.current.pause();
                      }
                    }
                  }}
                  className="text-rose-500 font-bold text-xs bg-rose-100 px-4 py-2 rounded-full hover:bg-rose-200 transition-colors cursor-pointer relative z-50"
                >
                  PLAY / PAUSE
                </button>
             </div>
          </div>

        </motion.div>

        {/* Envelope Modal Pop-up */}
        <AnimatePresence>
          {activeEnvelope && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveEnvelope(null)}
                className="absolute inset-0 bg-rose-950/20 backdrop-blur-sm cursor-pointer"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-rose-50/90 backdrop-blur-2xl border border-rose-200 shadow-2xl rounded-3xl p-8 md:p-12 max-w-lg w-full relative z-10 text-center"
              >
                <button 
                  onClick={() => setActiveEnvelope(null)}
                  className="absolute top-4 right-4 bg-rose-100 text-rose-500 p-2 rounded-full hover:bg-rose-200 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center text-rose-400 mx-auto mb-6">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-serif text-amber-900 mb-4">{activeEnvelope.title}</h3>
                <p className="text-amber-800/80 leading-relaxed text-lg">{activeEnvelope.content}</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    );
  }

  // The locked Vault screen
  // The locked Vault screen
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-100/50 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <Cursor />
      <FloatingParticles />
      
      {/* CSS Topographical Ripple Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" 
        style={{ 
          backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, #be123c 10px, transparent 10px, transparent 20px)' 
        }}
      ></div>

      <div className="bg-white/40 backdrop-blur-xl border border-rose-200 shadow-2xl rounded-3xl p-8 max-w-sm w-full text-center relative z-10">
        <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center text-rose-400 mx-auto mb-6 shadow-inner border border-rose-200/50">
           <Heart size={28} className="fill-rose-400/20" />
        </div>
        
        <h2 className="text-3xl font-serif text-[#8a1c3a] mb-2 font-bold tracking-tight">Enter Passcode</h2>
        <p className="text-sm text-[#8a1c3a]/70 mb-8 italic">You forgot mine, hope you remember yours.... (KIDDING)</p>
        
        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={passcode}
          onChange={(e) => setPasscode(e.target.value.replace(/[^0-9]/g, ''))}
          className={`w-full text-center text-3xl tracking-[0.5em] p-4 rounded-2xl bg-white/50 border-2 shadow-inner backdrop-blur-sm ${
            error ? 'border-red-400 text-red-500' : 'border-rose-200 text-[#8a1c3a] focus:border-rose-400'
          } outline-none transition-all duration-300 mb-6 font-mono`}
          placeholder="000000"
        />
        
        <button
          onClick={handleUnlock}
          className="w-full py-4 bg-[#8a1c3a] hover:bg-rose-900 text-rose-50 rounded-2xl font-bold tracking-widest uppercase text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Unlock
        </button>
      </div>
    </main>
  );
}