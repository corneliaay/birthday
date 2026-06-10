import React, { useState, useRef } from 'react';
import { RsvpData } from '../types';
import { Starburst, StarburstEightPoint } from './DecorativeStars';
import { Calendar, MapPin, Clock, Shirt, Download, CheckCircle, XCircle, Heart, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';

export const RsvpSection: React.FC = () => {
  const [rsvpState, setRsvpState] = useState<RsvpData>({
    name: '',
    whatsapp: '',
    attending: null,
    submitted: false,
  });

  const [validationError, setValidationError] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRsvpState(prev => ({
      ...prev,
      [name]: value,
    }));
    if (validationError) {
      setValidationError('');
    }
  };

  const handleSelectAttendance = (attending: boolean) => {
    setRsvpState(prev => ({
      ...prev,
      attending,
    }));
    if (validationError) {
      setValidationError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rsvpState.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!rsvpState.whatsapp.trim()) {
      setValidationError('Please enter your WhatsApp number.');
      return;
    }
    if (rsvpState.attending === null) {
      setValidationError('Please select whether you will attend or not.');
      return;
    }

    // Success state transition
    setRsvpState(prev => ({ ...prev, submitted: true }));
  };

  const handleReset = () => {
    setRsvpState({
      name: '',
      whatsapp: '',
      attending: null,
      submitted: false,
    });
    setValidationError('');
  };

  // Luxury Ticket PNG Generator
  const generateInvitationPng = async () => {
    setIsDownloading(true);
    
    try {
      // Create high-res canvas (ideal for mobile share)
      const canvas = document.createElement('canvas');
      canvas.width = 1000;
      canvas.height = 1500;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Ensure fonts are loaded before drawing
      try {
        await Promise.all([
          document.fonts.load('16px "Playfair Display"'),
          document.fonts.load('16px "Cormorant Garamond"'),
          document.fonts.load('16px "Outfit"')
        ]);
      } catch (err) {
        console.warn('Could not confirm font loading, using native fallbacks', err);
      }

      // 1. Draw Cream Background (#F7F0E4)
      ctx.fillStyle = '#F7F0E4';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Draw Decorative Pink Floral Arch border outline
      ctx.strokeStyle = '#F5A9C5';
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

      // Inner thin border
      ctx.strokeStyle = '#AFC6D9';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(55, 55, canvas.width - 110, canvas.height - 110);

      // Draw elegant corner starburst drawings instead of typical angles
      const drawStarOnCanvas = (cx: number, cy: number, size: number) => {
        ctx.fillStyle = '#F5A9C5';
        ctx.beginPath();
        ctx.moveTo(cx, cy - size);
        ctx.quadraticCurveTo(cx, cy, cx + size, cy);
        ctx.quadraticCurveTo(cx, cy, cx, cy + size);
        ctx.quadraticCurveTo(cx, cy, cx - size, cy);
        ctx.quadraticCurveTo(cx, cy, cx, cy - size);
        ctx.fill();
        ctx.closePath();
      };

      drawStarOnCanvas(55, 55, 20);
      drawStarOnCanvas(canvas.width - 55, 55, 20);
      drawStarOnCanvas(55, canvas.height - 55, 20);
      drawStarOnCanvas(canvas.width - 55, canvas.height - 55, 20);

      // 3. Header Text - Birthday Celebration
      ctx.textAlign = 'center';
      
      ctx.fillStyle = '#8C7A72';
      ctx.font = 'normal uppercase tracking-widest 20px "Outfit", sans-serif';
      ctx.fillText('Y O U  A R E  I N V I T E D', canvas.width / 2, 180);

      // Draw middle divider lines
      ctx.strokeStyle = '#AFC6D9';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 100, 220);
      ctx.lineTo(canvas.width / 2 + 100, 220);
      ctx.stroke();

      // Main Large Title
      ctx.fillStyle = '#3C302B';
      ctx.font = 'normal 70px "Playfair Display", Georgia, serif';
      ctx.fillText('BIRTHDAY CELEBRATION', canvas.width / 2, 310);

      ctx.fillStyle = '#C47D97';
      ctx.font = 'italic 45px "Cormorant Garamond", serif';
      ctx.fillText('An Elegant Gathering', canvas.width / 2, 380);

      // 4. Luxury Event Voucher Frame (The Ticket visual block)
      const tX = 120;
      const tY = 460;
      const tW = canvas.width - 240;
      const tH = 680;
      const r = 30; // ticket corner rounding

      // Draw ticket shape (White card with luxury dashed lines)
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(tX + r, tY);
      ctx.lineTo(tX + tW - r, tY);
      ctx.quadraticCurveTo(tX + tW, tY, tX + tW, tY + r);
      
      // Right circular ticket cut
      const sideCutY = tY + tH / 2 + 60;
      ctx.lineTo(tX + tW, sideCutY - 40);
      ctx.quadraticCurveTo(tX + tW - 40, sideCutY - 40, tX + tW - 40, sideCutY);
      ctx.quadraticCurveTo(tX + tW - 40, sideCutY + 40, tX + tW, sideCutY + 40);
      
      ctx.lineTo(tX + tW, tY + tH - r);
      ctx.quadraticCurveTo(tX + tW, tY + tH, tX + tW - r, tY + tH);
      ctx.lineTo(tX + r, tY + tH);
      ctx.quadraticCurveTo(tX, tY + tH, tX, tY + tH - r);
      
      // Left circular ticket cut
      ctx.lineTo(tX, sideCutY + 40);
      ctx.quadraticCurveTo(tX + 40, sideCutY + 40, tX + 40, sideCutY);
      ctx.quadraticCurveTo(tX + 40, sideCutY - 40, tX, sideCutY - 40);
      
      ctx.lineTo(tX, tY + r);
      ctx.quadraticCurveTo(tX, tY, tX + r, tY);
      ctx.fill();
      ctx.shadowColor = 'rgba(60, 48, 43, 0.08)';
      ctx.shadowBlur = 30;
      ctx.shadowOffsetY = 15;
      ctx.stroke(); // Draw soft thin line
      ctx.shadowBlur = 0; // reset
      ctx.shadowOffsetY = 0;

      // Dashed tickets separation line
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 3;
      ctx.setLineDash([12, 12]);
      ctx.beginPath();
      ctx.moveTo(tX + 42, sideCutY);
      ctx.lineTo(tX + tW - 42, sideCutY);
      ctx.stroke();
      ctx.setLineDash([]); // Reset line dash

      // 5. Ticket Inner Content
      // RSVP Header inside Ticket
      ctx.fillStyle = '#C47D97';
      ctx.font = 'normal uppercase tracking-widest 22px "Outfit", sans-serif';
      ctx.fillText('A D M I T  O N E  -  R S V P  C O N F I R M E D', canvas.width / 2, tY + 80);

      // Guest Name tag
      ctx.fillStyle = '#3C302B';
      ctx.font = 'italic 28px "Cormorant Garamond", serif';
      ctx.fillText('This ticket is proudly elements to:', canvas.width / 2, tY + 160);

      // Huge Bold Guest Name
      ctx.fillStyle = '#3C302B';
      ctx.font = 'normal 48px "Playfair Display", serif';
      ctx.fillText(rsvpState.name.toUpperCase(), canvas.width / 2, tY + 230);

      // Thank you message
      ctx.fillStyle = '#7C6C64';
      ctx.font = 'italic 22px "Cormorant Garamond", serif';
      ctx.fillText('We can\'t wait to celebrate this special day together.', canvas.width / 2, tY + 295);

      // Event details printed nicely underneath dashed line
      const detailsStartY = sideCutY + 80;
      
      ctx.textAlign = 'left';
      ctx.fillStyle = '#3C302B';
      
      // Venue Info
      ctx.font = 'normal bold 22px "Outfit", sans-serif';
      ctx.fillText('📍 VENUE:', 200, detailsStartY);
      ctx.font = 'normal 22px "Outfit", sans-serif';
      ctx.fillText('Kanvil Dau, Malang, East Java', 360, detailsStartY);

      // Time Info
      ctx.font = 'normal bold 22px "Outfit", sans-serif';
      ctx.fillText('🕕 TIME:', 200, detailsStartY + 70);
      ctx.font = 'normal 22px "Outfit", sans-serif';
      ctx.fillText('18.00 WIB – Until Finished', 360, detailsStartY + 70);

      // Dress Code Info
      ctx.font = 'normal bold 22px "Outfit", sans-serif';
      ctx.fillText('👗 DRESS:', 200, detailsStartY + 140);
      ctx.font = 'normal 22px "Outfit", sans-serif';
      ctx.fillText('Monochrome (White & Black)', 360, detailsStartY + 140);

      // Extra Starbursts inside ticket corners
      drawStarOnCanvas(tX + 50, tY + 50, 10);
      drawStarOnCanvas(tX + tW - 50, tY + 50, 10);
      drawStarOnCanvas(tX + 50, tY + tH - 50, 10);
      drawStarOnCanvas(tX + tW - 50, tY + tH - 50, 10);

      // 6. Bottom Closing footer
      ctx.textAlign = 'center';
      ctx.fillStyle = '#C47D97';
      ctx.font = 'normal 35px "Playfair Display", serif';
      ctx.fillText('See You There! 💖', canvas.width / 2, 1260);

      ctx.fillStyle = '#8C7A72';
      ctx.font = 'normal 15px "Outfit", sans-serif';
      ctx.fillText('MALANG, INDONESIA • SEPTEMBER 20, 2026', canvas.width / 2, 1310);

      // 7. Render dynamic sparkles & star clusters
      ctx.fillStyle = '#AFC6D9';
      // Draw some blue sparkles around
      drawStarOnCanvas(180, 240, 15);
      drawStarOnCanvas(820, 240, 15);
      drawStarOnCanvas(180, 1350, 15);
      drawStarOnCanvas(820, 1350, 15);

      // Save canvas as real PNG file and trigger download
      const dataUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = `Birthday_Invitation_Ticket_${rsvpState.name.replace(/\s+/g, '_')}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error generating luxury ticket download:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section 
      id="rsvp-section"
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-[#F7F0E4] flex items-center justify-center overflow-hidden"
    >
      {/* Editorial floating design details */}
      <div className="absolute top-[20%] left-[-10%] w-80 h-80 rounded-full bg-[#AFC6D9]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-80 h-80 rounded-full bg-[#F5A9C5]/12 blur-3xl pointer-events-none" />

      {/* Decorative stars scattered */}
      <Starburst size={24} className="absolute top-[8%] left-[7%] opacity-40 text-[#AFC6D9]" />
      <StarburstEightPoint size={32} className="absolute bottom-[10%] right-[10%] opacity-30 text-[#F5A9C5]" />

      <div className="w-full max-w-2xl z-10 relative">
        
        {/* CONDITIONAL STATE 1: GUEST SUBMITS YES / ATTENDING */}
        {rsvpState.submitted && rsvpState.attending === true && (
          <div 
            id="ticket-view"
            className="rounded-3xl p-6 sm:p-12 md:p-14 bg-white/75 backdrop-blur-md border border-[#F5A9C5]/30 shadow-2xl relative animate-fade-in-up"
          >
            {/* Elegant ticket decoration line */}
            <div className="absolute top-0 inset-x-0 h-3 bg-[#F5A9C5] rounded-t-3xl" />
            
            {/* Real aesthetic invitation card ticket outline */}
            <div className="rounded-2xl border-2 border-dashed border-[#F5A9C5]/40 p-6 sm:p-8 md:p-10 bg-[#FFF]/80 relative">
              
              {/* Confirmed Indicator Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold tracking-widest uppercase shadow-xs">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  RSVP Confirmed 🎉
                </div>
              </div>

              {/* Invitation ticket layout */}
              <div className="text-center">
                <StarburstEightPoint size={32} className="mx-auto mb-4 text-[#F5A9C5]/60 animate-spin-slow" />
                
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#3C302B]">
                  Admission Ticket
                </h3>
                
                <p className="font-mono text-[10px] tracking-widest text-[#8C7A72] uppercase mt-2">
                  Specially reserved elements for:
                </p>

                {/* Guest Name Display */}
                <h4 className="font-serif text-2xl sm:text-3.5xl font-semibold text-[#C47D97] mt-3 tracking-tight border-b-2 border-[#F7F0E4] pb-5 inline-block px-10">
                  {rsvpState.name}
                </h4>

                <p className="font-cormorant text-xl text-[#60524C] italic mt-6 max-w-md mx-auto">
                  "Thank you for confirming your attendance. We can't wait to celebrate this special day together."
                </p>

                {/* Elegant Detail Boxes inside receipt ticket */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 bg-[#F7F0E4]/35 p-5 rounded-2xl border border-white/50 text-left">
                  
                  {/* Small box 1 */}
                  <div className="p-3 bg-white/70 rounded-xl border border-[#AFC6D9]/25 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C7A72] tracking-wider uppercase mb-1.5">
                      <MapPin className="h-3 w-3 text-[#AFC6D9]" />
                      Venue
                    </div>
                    <p className="font-sans font-bold text-sm text-[#3C302B]">Kanvil Dau</p>
                    <p className="text-[10px] text-[#8C7A72]">Malang, East Java</p>
                  </div>

                  {/* Small box 2 */}
                  <div className="p-3 bg-white/70 rounded-xl border border-[#AFC6D9]/25 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C7A72] tracking-wider uppercase mb-1.5">
                      <Clock className="h-3 w-3 text-[#F5A9C5]" />
                      Time
                    </div>
                    <p className="font-sans font-bold text-sm text-[#3C302B]">18.00 WIB</p>
                    <p className="text-[10px] text-[#8C7A72]">Until Finished</p>
                  </div>

                  {/* Small box 3 */}
                  <div className="p-3 bg-white/70 rounded-xl border border-[#AFC6D9]/25 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C7A72] tracking-wider uppercase mb-1.5">
                      <Shirt className="h-3 w-3 text-neutral-600" />
                      Dress Code
                    </div>
                    <p className="font-sans font-bold text-sm text-[#3C302B]">Monochrome</p>
                    <p className="text-[10px] text-[#8C7A72]">White & Black</p>
                  </div>

                </div>

                <p className="mt-8 text-xs font-bold tracking-[0.2em] text-[#C47D97] uppercase flex items-center justify-center gap-1">
                  See you there! 💖
                </p>
              </div>
            </div>

            {/* Action buttons inside ticket view */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              
              {/* Back / edit response button */}
              <button
                id="btn-edit-rsvp"
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C7A72] hover:text-[#C47D97] uppercase py-3 px-6 rounded-full border border-[#8C7A72]/20 hover:border-[#C47D97]/40 hover:bg-white/40 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="h-4 w-4" />
                Edit Response
              </button>

              {/* Download high-res PNG Receipt button */}
              <button
                id="btn-download-invitation"
                onClick={generateInvitationPng}
                disabled={isDownloading}
                className={`inline-flex items-center gap-2 justify-center py-4 px-8 rounded-full font-semibold tracking-wider text-sm shadow-md text-white transition-all duration-500 select-none w-full sm:w-auto relative overflow-hidden ${
                  isDownloading 
                    ? 'bg-neutral-400 cursor-not-allowed' 
                    : 'bg-linear-to-r from-[#F5A9C5] to-[#E59AB6] hover:shadow-[#F5A9C5]/30 hover:scale-[1.02] active:scale-95'
                }`}
              >
                {isDownloading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Generating PNG...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download Invitation
                  </>
                )}
                {!isDownloading && <span className="absolute inset-x-0 bottom-0 h-1 bg-white/20 animate-pulse-slow" />}
              </button>

            </div>
          </div>
        )}

        {/* CONDITIONAL STATE 2: GUEST SUBMITS NO / DECLINED */}
        {rsvpState.submitted && rsvpState.attending === false && (
          <div 
            id="sad-view"
            className="rounded-3xl p-8 sm:p-12 md:p-14 bg-white/75 backdrop-blur-md border border-[#AFC6D9]/40 shadow-2xl relative animate-fade-in-up"
          >
            {/* Elegant ticket decoration line */}
            <div className="absolute top-0 inset-x-0 h-3 bg-[#AFC6D9]" rounded-t-3xl />
            
            <div className="text-center max-w-lg mx-auto">
              
              {/* Heartbreak Indicator */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#AFC6D9]/15 flex items-center justify-center border border-[#AFC6D9]/30">
                  <span className="text-2xl animate-pulse">💔</span>
                </div>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#3C302B]">
                We'll Miss You
              </h3>
              
              <div className="w-16 h-[1px] bg-[#AFC6D9] mx-auto mt-4 mb-8" />

              {/* Message */}
              <div className="space-y-4 font-cormorant text-xl text-[#60524C] leading-relaxed">
                <p className="font-semibold text-[#8C7A72] uppercase text-xs tracking-widest">
                  Thank you for letting us know, {rsvpState.name}.
                </p>
                <p>
                  Although we're sad that you won't be able to join us, we truly appreciate your response.
                </p>
                <p className="font-normal italic text-[#C47D97]">
                  "Thank you for your kind wishes and support."
                </p>
                <p>
                  Hopefully we'll have another chance to celebrate together in the future.
                </p>
                <p>
                  Take care and see you soon. 🌷
                </p>
              </div>

              {/* Back / edit response button */}
              <div className="mt-10">
                <button
                  id="btn-edit-rsvp-sad"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C7A72] hover:text-[#AFC6D9] uppercase py-3 px-6 rounded-full border border-[#8C7A72]/20 hover:border-[#AFC6D9]/40 hover:bg-white/40 transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Edit RSVP response
                </button>
              </div>

            </div>
          </div>
        )}

        {/* DEFAULT VIEW: THE INTERACTIVE RSVP FORM */}
        {!rsvpState.submitted && (
          <div 
            id="rsvp-form-card"
            className="rounded-3xl p-8 sm:p-12 md:p-14 bg-white/70 backdrop-blur-md border border-white/60 shadow-xl"
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex gap-1.5 justify-center items-center text-[#F5A9C5] mb-2.5">
                <Heart className="h-4 w-4 fill-current animate-pulse" />
              </div>
              <h2 className="font-serif text-4xl font-normal text-[#3C302B] tracking-tight">
                Will You Attend?
              </h2>
              <p className="font-cormorant text-lg italic text-[#8C7A72] mt-2">
                Kindly respond by completing the form below
              </p>
              <div className="w-12 h-[1px] bg-[#AFC6D9] mx-auto mt-4" />
            </div>

            {/* validation feedback */}
            {validationError && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold tracking-wide flex items-center gap-2 animate-pulse">
                <AlertCircle className="h-4 w-4 text-rose-500 shrink-0" />
                {validationError}
              </div>
            )}

            {/* Pure html form layout */}
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Field 1: Name */}
              <div className="space-y-2">
                <label 
                  htmlFor="rsvp-name" 
                  className="block text-xs font-bold tracking-[0.2em] text-[#8C7A72] uppercase"
                >
                  Name
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={rsvpState.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-xl border border-[#AFC6D9]/30 bg-white/50 backdrop-blur-xs placeholder-neutral-400 focus:outline-hidden focus:border-[#F5A9C5] focus:ring-1 focus:ring-[#F5A9C5] transition-all text-sm font-medium text-[#3C302B] shadow-2xs"
                />
              </div>

              {/* Field 2: WhatsApp Number */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label 
                    htmlFor="rsvp-whatsapp" 
                    className="block text-xs font-bold tracking-[0.2em] text-[#8C7A72] uppercase"
                  >
                    WhatsApp Number
                  </label>
                  <span className="text-[10px] font-mono text-[#8C7A72]/80">E.g. +62 812-3456-7890</span>
                </div>
                <input
                  id="rsvp-whatsapp"
                  type="text"
                  name="whatsapp"
                  placeholder="WhatsApp Contact Phone Number"
                  value={rsvpState.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-xl border border-[#AFC6D9]/30 bg-white/50 backdrop-blur-xs placeholder-neutral-400 focus:outline-hidden focus:border-[#F5A9C5] focus:ring-1 focus:ring-[#F5A9C5] transition-all text-sm font-medium text-[#3C302B] shadow-2xs"
                />
              </div>

              {/* Dual Large Interactive Choice Buttons */}
              <div className="space-y-3">
                <span className="block text-xs font-bold tracking-[0.2em] text-[#8C7A72] uppercase text-center mb-1">
                  Availability Selector
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Option Yes */}
                  <button
                    id="btn-select-yes"
                    type="button"
                    onClick={() => handleSelectAttendance(true)}
                    className={`relative p-5 rounded-2xl border text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 select-none focus:outline-hidden ${
                      rsvpState.attending === true
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-2 ring-emerald-500/20 shadow-md scale-[1.02]'
                        : 'bg-white/40 border-[#AFC6D9]/30 text-[#8C7A72] hover:bg-white hover:border-[#F5A9C5]/40 hover:text-[#C47D97]'
                    }`}
                  >
                    <span className="text-base">✅</span>
                    Yes, I'll Come
                    {rsvpState.attending === true && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[8px]">
                        ★
                      </span>
                    )}
                  </button>

                  {/* Option No */}
                  <button
                    id="btn-select-no"
                    type="button"
                    onClick={() => handleSelectAttendance(false)}
                    className={`relative p-5 rounded-2xl border text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 select-none focus:outline-hidden ${
                      rsvpState.attending === false
                        ? 'bg-rose-50 border-rose-400 text-rose-700 ring-2 ring-rose-300/20 shadow-md scale-[1.02]'
                        : 'bg-white/40 border-[#AFC6D9]/30 text-[#8C7A72] hover:bg-white hover:border-[#F5A9C5]/40 hover:text-[#C47D97]'
                    }`}
                  >
                    <span className="text-base">❌</span>
                    Sorry, I Can't Attend
                    {rsvpState.attending === false && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-400 rounded-full flex items-center justify-center text-white text-[8px]">
                        ★
                      </span>
                    )}
                  </button>

                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  id="btn-submit-rsvp"
                  type="submit"
                  className="w-full relative py-4 px-8 rounded-2xl bg-linear-to-r from-[#F5A9C5] to-[#E59AB6] text-white font-semibold tracking-wider text-sm shadow-md hover:shadow-[#F5A9C5]/30 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Submit RSVP Response</span>
                  <Sparkles className="h-4 w-4 animate-bounce" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
