"use client";
import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="container-main py-10 lg:py-14 anim-fade-up" id="faq">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-6 anim-slide-up">
            <span className="eyebrow">Pertanyaan Umum</span>
          </div>
          <h2 className="heading-xl gradient-brand anim-slide-up anim-delay-100">
            FAQ — Semua yang Perlu Kamu Tahu
          </h2>
          <p className="body-md text-fg-muted anim-slide-up anim-delay-200 max-w-xl mx-auto">
            Pertanyaan yang sering diajukan seputar platform, akses, dan transaksi.
          </p>
        </header>

        <div className="card card-elevated overflow-hidden relative stagger-children">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-emerald to-gold-light" aria-hidden="true" />

          <dl className="divide-y divide-border-subtle faq-numbered" role="list" aria-label="Pertanyaan yang sering diajukan">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="relative"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                    <span className="heading-md text-fg-primary flex-1 pr-4">{item.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-gold transition-transform duration-300 flex-shrink-0 ${open === i ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-label={`Jawaban untuk ${item.q}`}
                  className="overflow-hidden transition-all duration-300 ease-out"
                >
                  <div className={`px-5 pb-4 ${open === i ? "opacity-100 animate-slide-down" : "opacity-0 max-h-0"}`}>
                    <p className="body text-fg-secondary">
                      {item.a.includes('athena168.my.id') ? (
                        <>
                          {item.a.split('athena168.my.id')[0]}
                          <a
                            href="https://tokosoon.site/auth/register?ref=zrg2e2s"
                            target="_blank"
                            rel="sponsored nofollow noopener noreferrer"
                            className="text-gold underline"
                          >
                            athena168.my.id
                          </a>
                          {item.a.split('athena168.my.id')[1]}
                        </>
                      ) : (
                        item.a
                      )}
                    </p>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6 text-center anim-fade-up anim-delay-200">
          <p className="body-sm text-fg-muted mb-4">Masih punya pertanyaan?</p>
          <a
            href="https://tokosoon.site/help-center"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Hubungi Support 24/7
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}