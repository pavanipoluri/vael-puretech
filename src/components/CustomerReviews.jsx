import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/productData';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function CustomerReviews() {
  const [filter, setFilter] = useState('all');

  return (
    <section id="reviews" className="py-24 relative border-t border-white/10 bg-obsidian-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Overall Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mineral-amber/10 border border-mineral-amber/30 text-mineral-amber text-xs font-mono">
              <Star className="w-3.5 h-3.5 fill-mineral-amber text-mineral-amber" />
              <span>4.96 OUT OF 5.0 RATING (1,420+ VERIFIED RESIDENCES)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Endorsed by Clinicians, <br />
              <span className="text-gradient-cyan">Loved by Modern Homes.</span>
            </h2>
          </div>

          {/* Aggregate Rating Scorecard */}
          <div className="p-4 rounded-2xl bg-obsidian-850 border border-white/10 flex items-center gap-4 flex-shrink-0">
            <div className="text-3xl font-extrabold text-white font-mono">4.96</div>
            <div className="space-y-1">
              <div className="flex text-mineral-amber gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-mineral-amber text-mineral-amber" />
                ))}
              </div>
              <p className="text-[11px] font-mono text-titanium-400">99.4% Customer Recommendation</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-glass-card border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-card-elevated hover:border-white/20 transition-all"
            >
              <div className="space-y-4">
                {/* Stars & Metric Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex text-mineral-amber gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-mineral-amber text-mineral-amber" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {review.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-titanium-200 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-hydro-cyan" />
                  </h4>
                  <p className="text-[11px] text-titanium-400">{review.role} &bull; {review.location}</p>
                  <span className="text-[10px] text-emerald-400 font-mono block mt-0.5">
                    {review.verified}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs text-titanium-400 font-mono">
          <div>
            <span className="text-white text-base font-bold font-mono block">100-Day</span>
            <span>Trial In Your Kitchen</span>
          </div>
          <div>
            <span className="text-white text-base font-bold font-mono block">Lifetime</span>
            <span>Equipment Protection</span>
          </div>
          <div>
            <span className="text-white text-base font-bold font-mono block">45-Minute</span>
            <span>Pro Home Setup Available</span>
          </div>
          <div>
            <span className="text-white text-base font-bold font-mono block">24/7 Concierge</span>
            <span>Direct Water Specialist</span>
          </div>
        </div>

      </div>
    </section>
  );
}
