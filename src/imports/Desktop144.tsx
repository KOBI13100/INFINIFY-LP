import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react';
import svgPaths from "./svg-6slkny0mf7";
import imgMindscaleLogo from "../../mindscale.svg";
import imgMindscaleFrame2 from "../../mindscale img/m2.webp";
import imgMindscaleFrame3 from "../../mindscale img/m3.webp";
import imgMindscaleFrame4 from "../../mindscale img/m4.webp";
import imgMindscaleFrame5 from "../../mindscale img/m5.webp";
import imgMindscaleFrame6 from "../../mindscale img/M6.webp";
import imgSkapeLogo from "../../skapelogo.png";
import imgSkapeMarqueeLogo from "../../skape/5f02CZYAhlEfxDjo35eEYnglNc 1.svg";
import imgSkapeFrame1 from "../../skape/S.webp";
import imgSkapeFrame2 from "../../skape/s2.webp";
import imgSkapeFrame3 from "../../skape/S3.webp";
import imgSkapeFrame4 from "../../skape/S4.webp";
import imgSkapeFrame5 from "../../skape/S5.webp";
import imgSkapeFrame6 from "../../skape/S6.webp";
import imgSkapeFrame7 from "../../skape/S7.webp";
import imgMotionzFrame1 from "../../motionz/MO1.webp";
import imgMotionzFrame2 from "../../motionz/MO2.webp";
import imgMotionzFrame3 from "../../motionz/MO3.webp";
import imgMotionzFrame4 from "../../motionz/MO4.webp";
import imgMotionzFrame5 from "../../motionz/MO5.webp";
import imgMotionzMarqueeLogo from "../../motionz.svg";
import imgMotionzLogo from "../../motionzlogo.png";
import imgMindscalelLogo from "../../mindscalel.svg";
import imgArtdelapierreLogo from "../../artdelapierre.svg";
import imgTanbabeLogo from "../../tanbabe.svg";
import imgSinlineLogo from "../../sinline.svg";
import imgWiccaLogo from "../../wicca.svg";
import imgHanzoLogo from "../../hanzologo.png";
import imgVertebraLogo from "../../vertebralogo.png";
import imgHanzoFrame1 from "../../hanzo/H1.webp";
import imgHanzoFrame2 from "../../hanzo/H2.webp";
import imgHanzoFrame3 from "../../hanzo/H3.webp";
import imgHanzoFrame4 from "../../hanzo/H4.webp";
import imgHanzoFrame5 from "../../hanzo/H5.webp";
import imgHanzoFrame6 from "../../hanzo/H6.webp";
import imgVertebraFrame1 from "../../vertebra/V1.webp";
import imgNeuralFrame1 from "../../neural/N1.png";
import imgLightIcon from "../../light.svg";
import imgMultipagesIcon from "../../multipages.svg";
import imgRestaurantIcon from "../../restaurant.png";
import imgCtaBackground from "../assets/cta-background.png";
import imgLogoInfinify1 from "../assets/bf1d602331298fa70e56da6d7bd2fe71a3de2b7a.png";
import imgCardImage from "../assets/carousel-card.jpg";
import imgTestimonialImage from "../assets/a77190103db78e6334f030692996578c4825b66d.png";
import imgTestimonialImage1 from "../assets/dec5cbce46710d057f06833cca1d54055e9a4ed5.png";
import imgHero from "../assets/bg.png";
import { imgGroup, imgOffres, imgInfinify, imgTeam, imgFrame } from "./svg-ithsc";

type ScrollDirection = 'up' | 'down';

const SECTION_EASE = [0.16, 1, 0.3, 1] as const;
const SECTION_Y = 56;
const SECTION_DURATION = 0.9;
const SECTION_VIEWPORT = { once: true, amount: 0.35 } as const;
const TEAM_VIEWPORT = { once: true, amount: 0.5 } as const;
const HERO_INTRO_DURATION = 0.8;
const CTA_IMAGE_EDGE_CROP = 6;
const MARQUEE_LOGO_COLOR = '#131313';
const MARQUEE_LOGO_CLASS = 'h-[19px] w-[125%] max-w-none shrink-0';
const MARQUEE_LOGO_CLASS_LARGE = 'h-[26.57px] w-[125%] max-w-none shrink-0';
const MARQUEE_LOGO_CLASS_TALL = 'h-[36.38px] w-[125%] max-w-none shrink-0';

function MarqueeLogo({
  src,
  alt,
  className,
  maskPosition = 'center',
  maskSize = 'auto 100%',
}: {
  src: string;
  alt: string;
  className: string;
  maskPosition?: string;
  maskSize?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      style={{
        backgroundColor: MARQUEE_LOGO_COLOR,
        WebkitMaskImage: `url('${src}')`,
        maskImage: `url('${src}')`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: maskPosition,
        maskPosition,
        WebkitMaskSize: maskSize,
        maskSize,
      }}
    />
  );
}

function useScrollDirection(): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const nextScrollY = window.scrollY;
      const scrollDelta = nextScrollY - lastScrollY;

      if (Math.abs(scrollDelta) < 4) {
        return;
      }

      setScrollDirection(scrollDelta > 0 ? 'down' : 'up');
      lastScrollY = nextScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  return scrollDirection;
}

function BackgroundContainer({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  const reduced = useReducedMotion();
  const footerBackgroundRef = useRef<HTMLDivElement | null>(null);
  const isFooterBackgroundInView = useInView(footerBackgroundRef, { amount: TEAM_VIEWPORT.amount });

  return (
    <motion.div
      ref={footerBackgroundRef}
      className="absolute -translate-x-1/2 bg-black h-[269.561px] left-1/2 top-[4251.44px] w-[100dvw]"
      data-name="Background Shape"
      initial={{ opacity: 0, y: reduced ? 0 : FOOTER_Y }}
      animate={isFooterBackgroundInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : FOOTER_Y }}
      transition={{ duration: FOOTER_DURATION, ease: FOOTER_EASE, delay: scrollDirection === 'up' ? 0.28 : 0.18 }}
    />
  );
}

function NameAndIcon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Name and Icon">
      <div className="col-1 content-stretch flex gap-[10.318px] h-[44.622px] items-center justify-center ml-0 mt-0 p-[7.738px] pointer-events-none relative rounded-[100px] row-1 w-[124.943px] backdrop-blur-[6px]" data-name="Toolbar - Symbols">
        <svg aria-hidden="true" className="absolute inset-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 124.943 44.622" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.354" y="0.354" width="124.235" height="43.914" rx="22.311" fill="#808080" fillOpacity="0.2" style={{ mixBlendMode: 'luminosity' }} />
          <rect x="0.354" y="0.354" width="124.235" height="43.914" rx="22.311" stroke="url(#chipGrad1)" strokeWidth="0.708" />
          <defs>
            <linearGradient id="chipGrad1" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
              <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center ml-[51.67px] mt-[10.07px] relative row-1 text-[17.991px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Infinify</p>
      </div>
    </div>
  );
}

function LogoAndName() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Logo and Name">
      <NameAndIcon />
      <div className="col-1 ml-[9.08px] mt-[5.51px] relative row-1 size-[32.936px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9359 32.9359">
          <circle cx="16.4679" cy="16.4679" fill="var(--fill-0, #0D0D0D)" id="Ellipse 46954" r="16.4679" />
        </svg>
      </div>
      <div className="col-1 h-[11.874px] ml-[16.36px] mt-[16.04px] relative row-1 w-[18.372px]" data-name="Logo Infinify 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.86%] left-[-6.67%] max-w-none top-[-17.73%] w-[114.53%]" src={imgLogoInfinify1} />
        </div>
      </div>
    </div>
  );
}

function ContentColumn() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Content Column">
      <LogoAndName />
      <div className="col-1 flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium justify-center ml-0 mt-[69.92px] relative row-1 text-[16px] text-[rgba(255,255,255,0.3)] text-ellipsis tracking-[-0.0827px] whitespace-nowrap">
        <p className="leading-[20px]">© 2026 Infinify. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function PoliciesSectionInner() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-center relative row-1" data-name="Policies Section Inner">
      <div className="col-1 content-stretch flex gap-[10.318px] h-[44px] items-center justify-center ml-0 mt-0 p-[7.738px] pointer-events-none relative rounded-[100px] row-1 w-[119px] backdrop-blur-[6px]" data-name="Toolbar - Symbols">
        <svg aria-hidden="true" className="absolute inset-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 119 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.354" y="0.354" width="118.292" height="43.292" rx="22" fill="#808080" fillOpacity="0.2" style={{ mixBlendMode: 'luminosity' }} />
          <rect x="0.354" y="0.354" width="118.292" height="43.292" rx="22" stroke="url(#chipGrad2)" strokeWidth="0.708" />
          <defs>
            <linearGradient id="chipGrad2" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
              <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal h-[44px] items-center justify-center relative row-1 text-[17.991px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Politiques</p>
      </div>
    </div>
  );
}

function PoliciesSection() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.5px] mt-0 place-items-start relative row-1" data-name="Policies Section">
      <PoliciesSectionInner />
    </div>
  );
}

function SocialMediaSectionInner() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-center relative row-1" data-name="Social Media Section Inner">
      <div className="col-1 content-stretch flex gap-[10.318px] h-[44px] items-center justify-center ml-0 mt-0 p-[7.738px] pointer-events-none relative rounded-[100px] row-1 w-[119px] backdrop-blur-[6px]" data-name="Toolbar - Symbols">
        <svg aria-hidden="true" className="absolute inset-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 119 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.354" y="0.354" width="118.292" height="43.292" rx="22" fill="#808080" fillOpacity="0.2" style={{ mixBlendMode: 'luminosity' }} />
          <rect x="0.354" y="0.354" width="118.292" height="43.292" rx="22" stroke="url(#chipGrad3)" strokeWidth="0.708" />
          <defs>
            <linearGradient id="chipGrad3" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
              <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal h-[44px] items-center justify-center relative row-1 text-[17.991px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Réseaux</p>
      </div>
    </div>
  );
}

function SocialMediaSection() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[207.02px] mt-0 place-items-start relative row-1" data-name="Social Media Section">
      <SocialMediaSectionInner />
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal gap-[15px] items-center ml-[228.02px] mt-[71.04px] relative row-1 text-[#6f6f6f] text-[16px] text-ellipsis tracking-[-0.0827px] w-[77px]" data-name="Social Media Links">
      <div className="flex flex-col justify-center relative shrink-0 text-center w-full">
        <p className="leading-[normal]">LinkedIn</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">Instagram</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-full">
        <p className="leading-[normal]">Tiktok</p>
      </div>
    </div>
  );
}

function LegalLinks() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Legal Links">
      <PoliciesSection />
      <SocialMediaSection />
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-0 mt-[70.04px] relative row-1 text-[#6f6f6f] text-[16px] text-ellipsis tracking-[-0.0827px] whitespace-nowrap">
        <p className="leading-[normal]">Mentions Légales</p>
      </div>
      <SocialMediaLinks />
    </div>
  );
}

function ContentGroup({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  const reduced = useReducedMotion();
  const footerContentRef = useRef<HTMLDivElement | null>(null);
  const isFooterContentInView = useInView(footerContentRef, { amount: TEAM_VIEWPORT.amount });

  return (
    <motion.div
      ref={footerContentRef}
      className="-translate-x-1/2 absolute content-stretch flex gap-[620px] items-start leading-[0] left-1/2 top-[4298.87px] w-[1211px]"
      data-name="Content Group"
      initial={{ opacity: 0, y: reduced ? 0 : FOOTER_Y }}
      animate={isFooterContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : FOOTER_Y }}
      transition={{ duration: FOOTER_DURATION, ease: FOOTER_EASE, delay: scrollDirection === 'up' ? 0.12 : 0.42 }}
    >
      <ContentColumn />
      <LegalLinks />
    </motion.div>
  );
}

function Footer({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  return (
    <div className="absolute -translate-x-1/2 left-1/2 top-0 w-[100dvw]" data-name="Footer">
      <BackgroundContainer scrollDirection={scrollDirection} />
      <ContentGroup scrollDirection={scrollDirection} />
    </div>
  );
}

function UpMe() {
  return <div className="absolute inset-0 rounded-[25px]" data-name="Up Me" />;
}

function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1121.1 369.356">
        <g id="Group">
          <path d={svgPaths.p3e9ea200} fill="url(#paint0_linear_1_1002)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p25d4c2c0} fill="url(#paint1_linear_1_1002)" fillOpacity="0.1" id="Vector_2" />
          <path d={svgPaths.p154d5800} fill="url(#paint2_linear_1_1002)" fillOpacity="0.1" id="Vector_3" />
          <path d={svgPaths.p144f5800} fill="url(#paint3_linear_1_1002)" fillOpacity="0.1" id="Vector_4" />
          <path d={svgPaths.p6550180} fill="url(#paint4_linear_1_1002)" fillOpacity="0.1" id="Vector_5" />
          <path d={svgPaths.p6693680} fill="url(#paint5_linear_1_1002)" fillOpacity="0.1" id="Vector_6" />
          <path d={svgPaths.p39fa8af0} fill="url(#paint6_linear_1_1002)" fillOpacity="0.1" id="Vector_7" />
          <path d={svgPaths.p3c451380} fill="url(#paint7_linear_1_1002)" fillOpacity="0.1" id="Vector_8" />
          <path d={svgPaths.p23497500} fill="url(#paint8_linear_1_1002)" fillOpacity="0.1" id="Vector_9" />
          <path d={svgPaths.p2360fe00} fill="url(#paint9_linear_1_1002)" fillOpacity="0.1" id="Vector_10" />
          <path d={svgPaths.p2df73a00} fill="url(#paint10_linear_1_1002)" fillOpacity="0.1" id="Vector_11" />
          <path d={svgPaths.p11b15f00} fill="url(#paint11_linear_1_1002)" fillOpacity="0.1" id="Vector_12" />
          <path d={svgPaths.p1b913580} fill="url(#paint12_linear_1_1002)" fillOpacity="0.1" id="Vector_13" />
          <path d={svgPaths.p1309a580} fill="url(#paint13_linear_1_1002)" fillOpacity="0.1" id="Vector_14" />
          <path d={svgPaths.pe227600} fill="url(#paint14_linear_1_1002)" fillOpacity="0.1" id="Vector_15" />
          <path d={svgPaths.pc383b80} fill="url(#paint15_linear_1_1002)" fillOpacity="0.1" id="Vector_16" />
          <path d={svgPaths.p3c6bb5b0} fill="url(#paint16_linear_1_1002)" fillOpacity="0.1" id="Vector_17" />
          <path d={svgPaths.p93c4080} fill="url(#paint17_linear_1_1002)" fillOpacity="0.1" id="Vector_18" />
          <path d={svgPaths.p17d1a600} fill="url(#paint18_linear_1_1002)" fillOpacity="0.1" id="Vector_19" />
          <path d={svgPaths.p3640b880} fill="url(#paint19_linear_1_1002)" fillOpacity="0.1" id="Vector_20" />
          <path d={svgPaths.p131f580} fill="url(#paint20_linear_1_1002)" fillOpacity="0.1" id="Vector_21" />
          <path d={svgPaths.p3ed21f00} fill="url(#paint21_linear_1_1002)" fillOpacity="0.1" id="Vector_22" />
          <path d={svgPaths.p7fb900} fill="url(#paint22_linear_1_1002)" fillOpacity="0.1" id="Vector_23" />
          <path d={svgPaths.p1dc3ad00} fill="url(#paint23_linear_1_1002)" fillOpacity="0.1" id="Vector_24" />
          <path d={svgPaths.p30fd6300} fill="url(#paint24_linear_1_1002)" fillOpacity="0.1" id="Vector_25" />
          <path d={svgPaths.p3ca89080} fill="url(#paint25_linear_1_1002)" fillOpacity="0.1" id="Vector_26" />
          <path d={svgPaths.p171daf00} fill="url(#paint26_linear_1_1002)" fillOpacity="0.1" id="Vector_27" />
          <path d={svgPaths.p2049b00} fill="url(#paint27_linear_1_1002)" fillOpacity="0.1" id="Vector_28" />
          <path d={svgPaths.p39696500} fill="url(#paint28_linear_1_1002)" fillOpacity="0.1" id="Vector_29" />
          <path d={svgPaths.p303e5f70} fill="url(#paint29_linear_1_1002)" fillOpacity="0.1" id="Vector_30" />
          <path d={svgPaths.p295c4300} fill="url(#paint30_linear_1_1002)" fillOpacity="0.1" id="Vector_31" />
          <path d={svgPaths.p248ffe00} fill="url(#paint31_linear_1_1002)" fillOpacity="0.1" id="Vector_32" />
          <path d={svgPaths.p333c6b80} fill="url(#paint32_linear_1_1002)" fillOpacity="0.1" id="Vector_33" />
          <path d={svgPaths.p137dab00} fill="url(#paint33_linear_1_1002)" fillOpacity="0.1" id="Vector_34" />
          <path d={svgPaths.p1f06b80} fill="url(#paint34_linear_1_1002)" fillOpacity="0.1" id="Vector_35" />
          <path d={svgPaths.p3f222c80} fill="url(#paint35_linear_1_1002)" fillOpacity="0.1" id="Vector_36" />
          <path d={svgPaths.p23a21d80} fill="url(#paint36_linear_1_1002)" fillOpacity="0.1" id="Vector_37" />
          <path d={svgPaths.p28585300} fill="url(#paint37_linear_1_1002)" fillOpacity="0.1" id="Vector_38" />
          <path d={svgPaths.p54bf00} fill="url(#paint38_linear_1_1002)" fillOpacity="0.1" id="Vector_39" />
          <path d={svgPaths.p29006000} fill="url(#paint39_linear_1_1002)" fillOpacity="0.1" id="Vector_40" />
          <path d={svgPaths.p3e4b3f00} fill="url(#paint40_linear_1_1002)" fillOpacity="0.1" id="Vector_41" />
          <path d={svgPaths.pefc81c0} fill="url(#paint41_linear_1_1002)" fillOpacity="0.1" id="Vector_42" />
          <path d={svgPaths.p2db7f800} fill="url(#paint42_linear_1_1002)" fillOpacity="0.1" id="Vector_43" />
          <path d={svgPaths.p299ff022} fill="url(#paint43_linear_1_1002)" fillOpacity="0.1" id="Vector_44" />
          <path d={svgPaths.p307b9e00} fill="url(#paint44_linear_1_1002)" fillOpacity="0.1" id="Vector_45" />
          <path d={svgPaths.p30bb5ac0} fill="url(#paint45_linear_1_1002)" fillOpacity="0.1" id="Vector_46" />
          <path d={svgPaths.p2f21b400} fill="url(#paint46_linear_1_1002)" fillOpacity="0.1" id="Vector_47" />
          <path d={svgPaths.p937ad80} fill="url(#paint47_linear_1_1002)" fillOpacity="0.1" id="Vector_48" />
          <path d={svgPaths.p3f691e00} fill="url(#paint48_linear_1_1002)" fillOpacity="0.1" id="Vector_49" />
          <path d={svgPaths.p3764f680} fill="url(#paint49_linear_1_1002)" fillOpacity="0.1" id="Vector_50" />
          <path d={svgPaths.p20e8a700} fill="url(#paint50_linear_1_1002)" fillOpacity="0.1" id="Vector_51" />
          <path d={svgPaths.p15a55980} fill="url(#paint51_linear_1_1002)" fillOpacity="0.1" id="Vector_52" />
          <path d={svgPaths.p10a83f80} fill="url(#paint52_linear_1_1002)" fillOpacity="0.1" id="Vector_53" />
          <path d={svgPaths.p19bb7280} fill="url(#paint53_linear_1_1002)" fillOpacity="0.1" id="Vector_54" />
          <path d={svgPaths.p4485600} fill="url(#paint54_linear_1_1002)" fillOpacity="0.1" id="Vector_55" />
          <path d={svgPaths.p2e5ae880} fill="url(#paint55_linear_1_1002)" fillOpacity="0.1" id="Vector_56" />
          <path d={svgPaths.p2e4bc300} fill="url(#paint56_linear_1_1002)" fillOpacity="0.1" id="Vector_57" />
          <path d={svgPaths.pa985880} fill="url(#paint57_linear_1_1002)" fillOpacity="0.1" id="Vector_58" />
          <path d={svgPaths.p30a7aa80} fill="url(#paint58_linear_1_1002)" fillOpacity="0.1" id="Vector_59" />
          <path d={svgPaths.pb0aa400} fill="url(#paint59_linear_1_1002)" fillOpacity="0.1" id="Vector_60" />
          <path d={svgPaths.p27a3940} fill="url(#paint60_linear_1_1002)" fillOpacity="0.1" id="Vector_61" />
          <path d={svgPaths.p3024da80} fill="url(#paint61_linear_1_1002)" fillOpacity="0.1" id="Vector_62" />
          <path d={svgPaths.p1cfcb400} fill="url(#paint62_linear_1_1002)" fillOpacity="0.1" id="Vector_63" />
          <path d={svgPaths.p376b9e00} fill="url(#paint63_linear_1_1002)" fillOpacity="0.1" id="Vector_64" />
          <path d={svgPaths.p3da607f0} fill="url(#paint64_linear_1_1002)" fillOpacity="0.1" id="Vector_65" />
          <path d={svgPaths.p5a92270} fill="url(#paint65_linear_1_1002)" fillOpacity="0.1" id="Vector_66" />
          <path d={svgPaths.p263bd170} fill="url(#paint66_linear_1_1002)" fillOpacity="0.1" id="Vector_67" />
          <path d={svgPaths.p3337d880} fill="url(#paint67_linear_1_1002)" fillOpacity="0.1" id="Vector_68" />
          <path d={svgPaths.p22ec3a40} fill="url(#paint68_linear_1_1002)" fillOpacity="0.1" id="Vector_69" />
          <path d={svgPaths.p2b347e80} fill="url(#paint69_linear_1_1002)" fillOpacity="0.1" id="Vector_70" />
          <path d={svgPaths.p2486c200} fill="url(#paint70_linear_1_1002)" fillOpacity="0.1" id="Vector_71" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1002" x1="428.01" x2="428.01" y1="306.888" y2="369.356">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1002" x1="324.912" x2="324.912" y1="350.28" y2="368.116">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1002" x1="279.606" x2="279.606" y1="355.821" y2="362.647">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1002" x1="861.295" x2="861.295" y1="357.129" y2="362.574">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1002" x1="623.674" x2="623.674" y1="359.979" y2="360.553">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1002" x1="634.205" x2="634.205" y1="358.461" y2="360.471">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1002" x1="604.149" x2="604.149" y1="355.691" y2="358.609">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1002" x1="615.343" x2="615.343" y1="351.512" y2="359.161">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_1002" x1="244.475" x2="244.475" y1="354.573" y2="357.275">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_1002" x1="880.369" x2="880.369" y1="355.596" y2="357.325">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_1002" x1="260.922" x2="260.922" y1="354.965" y2="355.539">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_1002" x1="630.68" x2="630.68" y1="353.447" y2="354.88">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_1002" x1="212.722" x2="212.722" y1="353.555" y2="354.02">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_1002" x1="815.065" x2="815.065" y1="54.9287" y2="353.377">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_1002" x1="190.026" x2="190.026" y1="349.866" y2="352.509">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_1002" x1="265.413" x2="265.413" y1="350.69" y2="351.155">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_1002" x1="767.202" x2="767.202" y1="349.15" y2="351.227">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_1002" x1="225.472" x2="225.472" y1="347.088" y2="350.513">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_1002" x1="252.475" x2="252.475" y1="347.08" y2="350.233">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_1002" x1="291.373" x2="291.373" y1="345.711" y2="350.582">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_1002" x1="210.552" x2="210.552" y1="345.561" y2="349.543">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_1002" x1="740.586" x2="740.586" y1="335.54" y2="349.029">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_1002" x1="1000.16" x2="1000.16" y1="346.567" y2="348.772">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_1002" x1="265.696" x2="265.696" y1="346.284" y2="347.717">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_1002" x1="184.929" x2="184.929" y1="337.303" y2="344.995">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_1002" x1="245.946" x2="245.946" y1="4.81753" y2="344.019">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_1002" x1="253.627" x2="253.627" y1="338.109" y2="343.419">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_1002" x1="1003.06" x2="1003.06" y1="341.987" y2="343.419">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_1002" x1="232.551" x2="232.551" y1="342.072" y2="342.645">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_1002" x1="315.51" x2="315.51" y1="341.27" y2="342.685">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_1002" x1="216.78" x2="216.78" y1="329.862" y2="341.872">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_1002" x1="2.97478" x2="2.97478" y1="336.364" y2="336.829">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_1002" x1="394.08" x2="394.08" y1="331.959" y2="333.391">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_1002" x1="713.261" x2="713.261" y1="329.81" y2="331.242">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_1002" x1="14.5888" x2="14.5888" y1="318.772" y2="329.81">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_1002" x1="323.541" x2="323.541" y1="326.336" y2="328.377">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_1002" x1="503.985" x2="503.985" y1="316.2" y2="323.178">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_1002" x1="299.066" x2="299.066" y1="315.663" y2="321.55">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_1002" x1="553.769" x2="553.769" y1="281.288" y2="302.547">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_1002" x1="81.9921" x2="81.9921" y1="299.009" y2="300.442">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_1002" x1="597.748" x2="597.748" y1="293.995" y2="295.428">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_1002" x1="536.341" x2="536.341" y1="284.797" y2="293.279">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_1002" x1="1005.58" x2="1005.58" y1="276.466" y2="288.953">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_1002" x1="385.408" x2="385.408" y1="273.907" y2="283.132">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_1002" x1="1006.11" x2="1006.11" y1="259.353" y2="266.776">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_1002" x1="589.013" x2="589.013" y1="251.705" y2="256.032">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_1002" x1="987.116" x2="987.116" y1="235.308" y2="255.307">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_1002" x1="604.912" x2="604.912" y1="245.287" y2="247.715">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_1002" x1="629.677" x2="629.677" y1="245.35" y2="248.109">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_1002" x1="968.859" x2="968.859" y1="231.852" y2="235.852">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_1002" x1="937.646" x2="937.646" y1="207.48" y2="212.035">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_1002" x1="317.071" x2="317.071" y1="200.154" y2="207.665">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_1002" x1="340.529" x2="340.529" y1="195.406" y2="199.373">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_1002" x1="902.158" x2="902.158" y1="196.639" y2="199.384">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_1002" x1="938.263" x2="938.263" y1="183.686" y2="195.821">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_1002" x1="812.108" x2="812.108" y1="163.63" y2="170.713">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_1002" x1="950.823" x2="950.823" y1="163.826" y2="170.707">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_1002" x1="915.671" x2="915.671" y1="137.723" y2="164.131">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint58_linear_1_1002" x1="874.184" x2="874.184" y1="132.241" y2="160.765">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint59_linear_1_1002" x1="974.51" x2="974.51" y1="141.45" y2="144.924">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint60_linear_1_1002" x1="936.87" x2="936.87" y1="132.393" y2="143.962">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint61_linear_1_1002" x1="1000.02" x2="1000.02" y1="119.458" y2="141.674">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint62_linear_1_1002" x1="1028.41" x2="1028.41" y1="130.788" y2="131.254">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint63_linear_1_1002" x1="903.757" x2="903.757" y1="124.887" y2="129.962">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint64_linear_1_1002" x1="948.34" x2="948.34" y1="120.194" y2="121.369">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint65_linear_1_1002" x1="976.405" x2="976.405" y1="44.032" y2="117.429">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint66_linear_1_1002" x1="706.556" x2="706.556" y1="79.4285" y2="113.37">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint67_linear_1_1002" x1="1109.45" x2="1109.45" y1="36.8467" y2="46.8963">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint68_linear_1_1002" x1="1017.15" x2="1017.15" y1="31.3273" y2="37.1869">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint69_linear_1_1002" x1="1091.21" x2="1091.21" y1="22.9575" y2="37.563">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint70_linear_1_1002" x1="348.058" x2="348.058" y1="-2.6921e-09" y2="5.96964">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function EarthBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[25px]" data-name="EARTH BACKGROUND">
      <img
        src={imgCtaBackground}
        className="absolute max-w-none object-cover"
        style={{
          inset: -CTA_IMAGE_EDGE_CROP,
          width: `calc(100% + ${CTA_IMAGE_EDGE_CROP * 2}px)`,
          height: `calc(100% + ${CTA_IMAGE_EDGE_CROP * 2}px)`,
          objectPosition: 'center 38%',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
        decoding="async"
        alt=""
      />
    </div>
  );
}

function CtaBottomGradient() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 h-[220px] left-0 pointer-events-none rounded-b-[25px] w-full"
      style={{ background: 'linear-gradient(180deg, rgba(2,2,2,0) 0%, rgba(0,0,0,1) 100%)' }}
    />
  );
}

function CallToActionTexts() {
  return (
    <div className="absolute inset-x-0 text-center top-[116.85px]" data-name="Call to Action Texts">
      <div className="mx-auto flex max-w-[720px] flex-col font-['Neue_Montreal:Regular',sans-serif] font-bold justify-center leading-[normal] text-[40px] text-white tracking-[0.6px]">
        <p className="mb-0">{`Donnez à votre marque la `}</p>
        <p>présence qu’elle mérite</p>
      </div>
      <div className="mx-auto mt-[38.39px] flex max-w-[770px] flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center leading-[22px] text-[#BFBFBF] text-[16px]">
        <p className="mb-0">{`Construisons une identité et une expérience digitale capables de `}</p>
        <p>renforcer votre perception, votre crédibilité et votre ambition.</p>
      </div>
    </div>
  );
}

function CallToActionButtonGroup() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 top-[332.62px]" data-name="Call to Action Button Group">
      <div className="bg-white flex h-[49.577px] items-center justify-center rounded-[100px] w-[187.752px]" data-name="Reserve Call Button">
        <p className="font-['Neue_Montreal:Medium',sans-serif] font-medium leading-[normal] text-[#0e0e0e] text-[17px] text-center whitespace-nowrap">
          Réserver un appel
        </p>
      </div>
    </div>
  );
}

function CallToActionContainer() {
  return (
    <div className="absolute inset-0" data-name="Call to Action Container">
      <CallToActionTexts />
      <CallToActionButtonGroup />
    </div>
  );
}

function TestimonialName() {
  return (
    <div className="absolute left-0 top-0" data-name="Testimonial Name">
      <div className="absolute content-stretch flex gap-[8.093px] h-[36px] items-center justify-center left-0 p-[6.07px] pointer-events-none rounded-[100px] top-0 w-[298px] backdrop-blur-[6px]" data-name="Toolbar - Symbols">
        <svg aria-hidden="true" className="absolute inset-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 298 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.354" y="0.354" width="297.292" height="35.292" rx="18" fill="#808080" fillOpacity="0.2" style={{ mixBlendMode: 'luminosity' }} />
          <rect x="0.354" y="0.354" width="297.292" height="35.292" rx="18" stroke="url(#chipGrad6)" strokeWidth="0.708" />
          <defs>
            <linearGradient id="chipGrad6" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
              <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center leading-[0] left-[286.33px] text-[14.112px] text-center text-white top-[17.7px] whitespace-nowrap">
        <p className="leading-[normal]">Prêt à passer à la vitesse supérieure ?</p>
      </div>
    </div>
  );
}

function TestimonialInfo() {
  return (
    <div className="absolute left-[295.5px] top-[61.7px]" data-name="Testimonial Info">
      <TestimonialName />
      <div className="absolute left-[6.92px] size-[25.834px] top-[4.52px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8335 25.8335">
          <circle cx="12.9168" cy="12.9168" fill="var(--fill-0, #0D0D0D)" id="Ellipse 46954" r="12.9168" />
        </svg>
      </div>
      <div className="absolute h-[9.314px] left-[12.63px] top-[12.78px] w-[14.411px]" data-name="Logo Infinify 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.86%] left-[-6.67%] max-w-none top-[-17.73%] w-[114.53%]" src={imgLogoInfinify1} />
        </div>
      </div>
    </div>
  );
}

function Cta({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  const reduced = useReducedMotion();
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const isCtaInView = useInView(ctaRef, { amount: 0.15 });

  return (
    <motion.div
      ref={ctaRef}
      className="absolute overflow-hidden rounded-[25px]"
      data-name="CTA"
      style={{ left: 275.5, top: 3380.17, width: 889, height: 439 }}
      initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
      animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
      transition={{ duration: CARD_DURATION, ease: CARD_EASE, delay: scrollDirection === 'up' ? 0.05 : 0 }}
    >
      <UpMe />
      <EarthBackground />
      <CtaBottomGradient />
      <CallToActionContainer />
      <TestimonialInfo />
    </motion.div>
  );
}

// ─── Carousel data & variants ────────────────────────────────────────────────

interface CarouselProject {
  id: number;
  image: string;
  imageSequence?: string[];
  brandContent?: React.ReactNode; // custom logo; falls back to brandLabel text
  brandLabel: string;
  tags: Array<{ label: string; icon: 'page' | 'building' | 'light' | 'multipages' | 'restaurant' }>;
  description: string;
}

const MINDSCALE_IMAGE_SEQUENCE = [
  imgCardImage,
  imgMindscaleFrame2,
  imgMindscaleFrame3,
  imgMindscaleFrame4,
  imgMindscaleFrame5,
  imgMindscaleFrame6,
] as const;

const SKAPE_IMAGE_SEQUENCE = [
  imgSkapeFrame1,
  imgSkapeFrame2,
  imgSkapeFrame3,
  imgSkapeFrame4,
  imgSkapeFrame5,
  imgSkapeFrame6,
  imgSkapeFrame7,
] as const;

const MOTIONZ_IMAGE_SEQUENCE = [
  imgMotionzFrame1,
  imgMotionzFrame2,
  imgMotionzFrame3,
  imgMotionzFrame4,
  imgMotionzFrame5,
] as const;

const HANZO_IMAGE_SEQUENCE = [
  imgHanzoFrame1,
  imgHanzoFrame2,
  imgHanzoFrame3,
  imgHanzoFrame4,
  imgHanzoFrame5,
  imgHanzoFrame6,
] as const;

const CARD_BRAND_LOGO_HEIGHT = 10.669;
const CARD_BRAND_LOGO_VISUAL_HEIGHT = {
  skape: 21.024,
  hanzo: 22.176,
  motionz: 21.888,
  vertebra: 21.744,
} as const;

// Mindscale logo aligned on the same left edge as the supporting copy
function MindscalePill() {
  return (
    <img
      src={imgMindscaleLogo}
      alt="Mindscale"
      className="block h-[10.669px] w-auto shrink-0 max-w-none object-contain object-left"
    />
  );
}

function SkapePill() {
  return (
    <img
      src={imgSkapeLogo}
      alt="Skape"
      className="block w-auto shrink-0 max-w-none object-contain object-left"
      style={{ height: CARD_BRAND_LOGO_VISUAL_HEIGHT.skape }}
    />
  );
}

function HanzoPill() {
  return (
    <img
      src={imgHanzoLogo}
      alt="Hanzo"
      className="block w-auto shrink-0 max-w-none object-contain object-left"
      style={{ height: CARD_BRAND_LOGO_VISUAL_HEIGHT.hanzo }}
    />
  );
}

function MotionzPill() {
  return (
    <img
      src={imgMotionzLogo}
      alt="Motionz"
      className="block w-auto shrink-0 max-w-none object-contain object-left"
      style={{ height: CARD_BRAND_LOGO_VISUAL_HEIGHT.motionz }}
    />
  );
}

function VertebraPill() {
  return (
    <img
      src={imgVertebraLogo}
      alt="Vertebra"
      className="block w-auto shrink-0 max-w-none object-contain object-left"
      style={{ height: CARD_BRAND_LOGO_VISUAL_HEIGHT.vertebra }}
    />
  );
}

const CAROUSEL_PROJECTS: CarouselProject[] = [
  {
    id: 0,
    image: imgCardImage,
    imageSequence: [...MINDSCALE_IMAGE_SEQUENCE],
    brandContent: <MindscalePill />,
    brandLabel: 'MINDSCALE',
    tags: [
      { label: 'Landing page', icon: 'page' },
      { label: 'Agence',       icon: 'building' },
    ],
    description: "Mindscale est une entreprise spécialisée dans l’optimisation des\ntunnels de vente grâce à l’intelligence comportementale et à l’IA.",
  },
  {
    id: 2,
    image: imgSkapeFrame1,
    imageSequence: [...SKAPE_IMAGE_SEQUENCE],
    brandContent: <SkapePill />,
    brandLabel: 'SKAPE',
    tags: [
      { label: 'Landing page', icon: 'page' },
      { label: 'Agence',       icon: 'building' },
    ],
    description: "Skape est une agence de visuels 3D spécialisée dans la mise en\nvaleur des produits e-commerce.",
  },
  {
    id: 3,
    image: imgMotionzFrame1,
    imageSequence: [...MOTIONZ_IMAGE_SEQUENCE],
    brandContent: <MotionzPill />,
    brandLabel: 'MOTIONZ',
    tags: [
      { label: 'Landing page', icon: 'page' },
      { label: 'Agence',       icon: 'building' },
    ],
    description: "Motionz est un studio de motion design spécialisé dans la création\nde vidéos animées sur-mesure pour les agences et créateurs.",
  },
  {
    id: 4,
    image: imgHanzoFrame1,
    imageSequence: [...HANZO_IMAGE_SEQUENCE],
    brandContent: <HanzoPill />,
    brandLabel: 'HANZO',
    tags: [
      { label: 'Multi-pages', icon: 'multipages' },
      { label: 'Restaurant',  icon: 'restaurant' },
    ],
    description: "Hanzo est un restaurant japonais traditionnel situé à\nAix-en-Provence, spécialisé dans une cuisine authentique.",
  },
];

const ALL_CAROUSEL_IMAGE_SOURCES = Array.from(
  new Set(CAROUSEL_PROJECTS.flatMap((carouselProject) => [
    carouselProject.image,
    ...(carouselProject.imageSequence ?? []),
  ])),
);

// ─── Tag helpers ─────────────────────────────────────────────────────────────

function CarouselTagIconPage() {
  return (
    <div className="relative shrink-0 size-[12.68px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 12.6801 12.6801">
        <path d={svgPaths.p25307570} fill="#0071E3" />
        <path d={svgPaths.p25307570} stroke="#0071E3" strokeLinejoin="round" strokeWidth="1.18876" />
        <path d={svgPaths.p31f43b00} stroke="#0071E3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18876" />
      </svg>
    </div>
  );
}

function CarouselTagIconBuilding() {
  return (
    <div className="relative shrink-0 size-[12.68px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 12.68 12.68">
        <path d={svgPaths.p3eb58400} fill="#0071E3" />
        <path d={svgPaths.p24331600} fill="#0071E3" />
        <path d={svgPaths.p2afb9f00} fill="#0071E3" />
      </svg>
    </div>
  );
}

function CarouselTagIconLight() {
  return (
    <img
      src={imgLightIcon}
      alt=""
      className="block shrink-0 size-[12.68px] max-w-none object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

function CarouselTagIconMultipages() {
  return (
    <img
      src={imgMultipagesIcon}
      alt=""
      className="block shrink-0 size-[12.68px] max-w-none object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

function CarouselTagIconRestaurant() {
  return (
    <img
      src={imgRestaurantIcon}
      alt=""
      className="block shrink-0 size-[12.68px] max-w-none object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

function CarouselTag({ label, icon }: { label: string; icon: 'page' | 'building' | 'light' | 'multipages' | 'restaurant' }) {
  const iconNode =
    icon === 'page' ? <CarouselTagIconPage /> :
    icon === 'building' ? <CarouselTagIconBuilding /> :
    icon === 'light' ? <CarouselTagIconLight /> :
    icon === 'multipages' ? <CarouselTagIconMultipages /> :
    <CarouselTagIconRestaurant />;

  return (
    <div className="inline-flex items-center gap-[3px] bg-[rgba(21,99,237,0.1)] rounded-[11.904px] px-[9.83px] py-[5.59px]">
      {iconNode}
      <span className="font-['Neue_Montreal:Medium',sans-serif] font-medium text-[#005cec] text-[10px] leading-none whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

// ─── Realisations carousel ────────────────────────────────────────────────────

const CARD_TRANSITION = { duration: 1.02, ease: [0.22, 1, 0.36, 1] } as const;
const CAROUSEL_VIEWPORT_MASK = 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.42) 10%, black 20%, black 80%, rgba(0,0,0,0.42) 90%, transparent 100%)';
const CAROUSEL_IMAGE_EDGE_CROP = 6;
type SlotName = 'above' | 'top' | 'center' | 'bottom' | 'below';

// Chaque slot définit la géométrie exacte de la carte dans cette position
const CARD_SLOTS: Record<SlotName, { left: number; top: number; width: number; height: number; opacity: number; borderRadius: string }> = {
  above:  { left: 43.22, top: -170,   width: 405.781, height: 142.187, opacity: 0, borderRadius: '15px 15px 0px 0px' },
  top:    { left: 43.22, top: 0,      width: 405.781, height: 142.187, opacity: 1, borderRadius: '15px 15px 0px 0px' },
  center: { left: 0,     top: 157.14, width: 482.868, height: 291.353, opacity: 1, borderRadius: '15px 15px 15px 15px' },
  bottom: { left: 38.54, top: 463.44, width: 405.781, height: 142.19,  opacity: 1, borderRadius: '0px 0px 15px 15px' },
  below:  { left: 38.54, top: 650,    width: 405.781, height: 142.19,  opacity: 0, borderRadius: '0px 0px 15px 15px' },
};

function relToSlot(rel: number): SlotName {
  if (rel === -1) return 'top';
  if (rel ===  0) return 'center';
  if (rel ===  1) return 'bottom';
  return rel < 0 ? 'above' : 'below';
}

function preloadCarouselImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    let settled = false;
    const resolveOnce = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    const finish = () => {
      if (typeof image.decode === 'function') {
        image.decode().catch(() => undefined).finally(resolveOnce);
        return;
      }

      resolveOnce();
    };

    image.onload = finish;
    image.onerror = resolveOnce;
    image.src = src;

    if (image.complete) {
      finish();
    }
  });
}

function CarouselCardImage({ image }: { image: string }) {
  return (
    <div
      className="absolute"
      style={{
        inset: 0,
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      <img
        src={image}
        alt=""
        className="absolute max-w-none object-cover"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        style={{
          inset: -CAROUSEL_IMAGE_EDGE_CROP,
          width: `calc(100% + ${CAROUSEL_IMAGE_EDGE_CROP * 2}px)`,
          height: `calc(100% + ${CAROUSEL_IMAGE_EDGE_CROP * 2}px)`,
        }}
      />
    </div>
  );
}

function Realisations() {
  const total = CAROUSEL_PROJECTS.length;
  const [pos, setPos]                 = useState(0); // position linéaire cumulative
  const [activeIndex, setActiveIndex] = useState(0);
  const [areCarouselImagesReady, setAreCarouselImagesReady] = useState(false);
  const [projectFrameById, setProjectFrameById] = useState<Record<number, number>>(() =>
    Object.fromEntries(CAROUSEL_PROJECTS.map((carouselProject) => [carouselProject.id, 0])),
  );

  const go = (delta: number) => {
    if (total < 2) return;
    const nextIndex = (activeIndex + delta + total) % total;
    const nextProject = CAROUSEL_PROJECTS[nextIndex];

    if (nextProject.imageSequence?.length) {
      setProjectFrameById((currentFrameById) => ({
        ...currentFrameById,
        [nextProject.id]: 0,
      }));
    }

    setPos(p => p + delta);
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    let cancelled = false;

    Promise.all(ALL_CAROUSEL_IMAGE_SOURCES.map((src) => preloadCarouselImage(src))).then(() => {
      if (!cancelled) {
        setAreCarouselImagesReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!areCarouselImagesReady) {
      return undefined;
    }

    const activeProject = CAROUSEL_PROJECTS[activeIndex];

    if (!activeProject.imageSequence?.length) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setProjectFrameById((currentFrameById) => ({
        ...currentFrameById,
        [activeProject.id]: ((currentFrameById[activeProject.id] ?? 0) + 1) % activeProject.imageSequence!.length,
      }));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, areCarouselImagesReady]);

  const project = CAROUSEL_PROJECTS[activeIndex];
  const cells   = [pos - 2, pos - 1, pos, pos + 1, pos + 2];

  return (
    <div className="absolute" style={{ left: 166.28, top: 1472.03, width: 957, height: 606 }} data-name="Réalisations">

      {/* ── Card stack ── overflow:hidden clip les cartes hors-zone ──────── */}
      <div
        className="absolute overflow-hidden"
        style={{
          width: 483,
          height: 606,
          WebkitMaskImage: CAROUSEL_VIEWPORT_MASK,
          maskImage: CAROUSEL_VIEWPORT_MASK,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
        }}
      >
        {cells.map(p => {
          const rel      = p - pos;
          const slotName = relToSlot(rel);
          const slot     = CARD_SLOTS[slotName];
          const projIdx  = ((p % total) + total) % total;
          const projectCard = CAROUSEL_PROJECTS[projIdx];
          const currentFrameIndex = projectFrameById[projectCard.id] ?? 0;
          const isCenterCard = slotName === 'center';
          const visibleImage =
            isCenterCard && areCarouselImagesReady && projectCard.imageSequence?.length
              ? projectCard.imageSequence[currentFrameIndex % projectCard.imageSequence.length]
              : projectCard.image;

          return (
            <motion.div
              key={p}
              className="absolute overflow-hidden"
              style={{
                zIndex: slotName === 'center' ? 2 : 1,
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                willChange: 'transform, opacity, border-radius, width, height',
              }}
              initial={false}
              animate={slot}
              transition={CARD_TRANSITION}
            >
              <CarouselCardImage
                image={visibleImage}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ── Chevrons ─────────────────────────────────────────────────────── */}
      <div className="absolute overflow-hidden rounded-[100px]"
        style={{ left: 523.65, top: 261.75, width: 42.344, height: 82.122 }}>
        <div aria-hidden="true" className="absolute inset-0 backdrop-blur-[30px] bg-[#d9d9d9] mix-blend-luminosity pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-[4.908px]">
          <button onClick={() => go(-1)} className="relative cursor-pointer flex-none" style={{ width: 28.502, height: 28.502 }} aria-label="Précédent">
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 28.5016 28.5016">
              <circle cx="14.2508" cy="14.2508" fill="white" r="14.2508" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M1 5L4.5 1.5L8 5" stroke="#0E0E0E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
          <button onClick={() => go(1)} className="relative cursor-pointer flex-none" style={{ width: 28.502, height: 28.502 }} aria-label="Suivant">
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 28.5016 28.5016">
              <circle cx="14.2508" cy="14.2508" fill="#BEBEBE" r="14.2508" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M1 1L4.5 4.5L8 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* ── Text block ───────────────────────────────────────────────────── */}
      <div className="absolute" style={{ left: 606.44, top: 229.21, width: 461.91, height: 147.21 }}>
        {/* Testimonial Background SVG */}
        <svg className="absolute inset-0 size-full" viewBox="0 0 461.913 147.206" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g filter="url(#tbFilter0)">
            <path d="M461.913 62.6758H0V127.206C0 138.252 8.95432 147.206 20 147.206H441.913C452.959 147.206 461.913 138.252 461.913 127.206V62.6758Z" fill="white"/>
          </g>
          <g filter="url(#tbFilter1)">
            <path d="M461.913 20C461.913 8.95431 452.959 0 441.913 0H20.001C8.95529 0 0.000976562 8.95431 0.000976562 20V62.6758H461.913V20Z" fill="url(#tbGrad)"/>
          </g>
          <defs>
            <filter id="tbFilter0" x="0" y="62.6758" width="461.913" height="84.5304" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/><feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.405912 0 0 0 0 0.405912 0 0 0 0 0.405912 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            <filter id="tbFilter1" x="0.000976562" y="0" width="461.912" height="62.6758" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/><feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.405912 0 0 0 0 0.405912 0 0 0 0 0.405912 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            <linearGradient id="tbGrad" x1="230.957" y1="0" x2="230.957" y2="62.6758" gradientUnits="userSpaceOnUse">
              <stop stopColor="#181818"/>
              <stop offset="1" stopColor="#171717"/>
            </linearGradient>
          </defs>
        </svg>
        <div className="relative flex flex-col" style={{ width: 461.91, height: 147.21 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col"
            style={{ height: 147.21 }}
          >
            {/* Dark header zone */}
            <div className="flex items-center" style={{ height: 62.68, marginLeft: 26.04, flexShrink: 0 }}>
              {project.brandContent ?? (
                <div className="relative flex items-center justify-center rounded-[20.041px] bg-[#0e0e0e]" style={{ width: 136.82, height: 40.082 }}>
                  <span className="font-['Geist:SemiBold',sans-serif] font-semibold text-white text-[11px] tracking-[0.05em] whitespace-nowrap">
                    {project.brandLabel}
                  </span>
                </div>
              )}
              <div className="flex items-center" style={{ marginLeft: 28.45, gap: 6 }}>
                {project.tags.map(tag => (
                  <CarouselTag key={tag.label} label={tag.label} icon={tag.icon} />
                ))}
              </div>
            </div>
            {/* White body zone — text centré verticalement */}
            <div className="flex items-center" style={{ height: 84.53, paddingLeft: 26.04 }}>
              <div className="font-['Neue_Montreal:Regular',sans-serif] font-normal text-[#0E0E0E] text-[15px] leading-[22px]">
                {project.description.split('\n').map((line, index) => (
                  <p key={`${project.id}-desc-${index}`} className={index === 0 ? 'mb-0 whitespace-nowrap' : 'whitespace-nowrap'}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>

    </div>
  );
}

// (legacy static sub-components kept below — no longer rendered)
function SidebarButtonsContainer1() {
  return (
    <div className="absolute contents h-[82.122px] left-[689.93px] top-[1733.78px] w-[42.344px]" data-name="Sidebar Buttons Container">
      <div className="absolute flex h-[82.122px] items-center justify-center left-[689.93px] top-[1733.78px] w-[42.344px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="content-stretch flex gap-[9.605px] h-[42.344px] items-center justify-center p-[7.204px] relative rounded-[100px] w-[82.122px]" data-name="Toolbar - Symbols">
            <div aria-hidden="true" className="absolute backdrop-blur-[30.015px] bg-[#d9d9d9] inset-0 mix-blend-luminosity pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarButton() {
  return (
    <div className="h-[28.502px] relative shrink-0 w-full" data-name="Sidebar Button">
      <div className="absolute left-0 size-[28.502px] top-0">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5016 28.5016">
          <circle cx="14.2508" cy="14.2508" fill="var(--fill-0, white)" id="Ellipse 46955" r="14.2508" />
        </svg>
      </div>
      <div className="absolute flex h-[10.1px] items-center justify-center left-[4.15px] top-[9.74px] w-[20.2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[20.2px] relative w-[10.1px]" data-name="Arrow Icon">
            <div className="absolute inset-[23.5%_12.92%_23.47%_25.72%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.1978 10.7126">
                <path clipRule="evenodd" d={svgPaths.p1767dbc0} fill="var(--fill-0, #0E0E0E)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarButton1() {
  return (
    <div className="h-[28.502px] relative shrink-0 w-full" data-name="Sidebar Button">
      <div className="absolute left-0 size-[28.502px] top-0">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5016 28.5016">
          <circle cx="14.2508" cy="14.2508" fill="var(--fill-0, #BEBEBE)" id="Ellipse 46955" r="14.2508" />
        </svg>
      </div>
      <div className="absolute flex h-[10.1px] items-center justify-center left-[4.15px] top-[9.2px] w-[20.2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="h-[20.2px] relative w-[10.1px]" data-name="Arrow Icon">
            <div className="absolute inset-[23.5%_12.92%_23.47%_25.72%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.1978 10.7126">
                <path clipRule="evenodd" d={svgPaths.p1767dbc0} fill="var(--fill-0, white)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarButtons() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex flex-col gap-[4.908px] items-start relative w-[28.502px]" data-name="Sidebar Buttons">
      <SidebarButton />
      <SidebarButton1 />
    </div>
  );
}

function SidebarButtonGroup() {
  return (
    <div className="absolute contents left-[696.85px] top-[1743.89px]" data-name="Sidebar Button Group">
      <div className="absolute flex items-center justify-center left-[696.85px] top-[1743.89px] w-[28.502px]">
        <div className="flex-none rotate-180">
          <SidebarButtons />
        </div>
      </div>
    </div>
  );
}

function SidebarButtonsContainer() {
  return (
    <div className="absolute contents h-[82.122px] left-[689.93px] top-[1733.78px] w-[42.344px]" data-name="Sidebar Buttons Container">
      <SidebarButtonsContainer1 />
      <SidebarButtonGroup />
    </div>
  );
}

function FeatureDescription() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+303.22px)] top-[1771.9px]" data-name="Feature Description">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center leading-[22px] left-[calc(50%+52.72px)] text-[#686868] text-[16px] top-[1793.9px] whitespace-nowrap">
        <p className="mb-0">Mindscale est une entreprise spécialisée dans l’optimisation</p>
        <p>des tunnels de vente grâce à l’intelligence comportementale et à l’IA.</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[37.2%_38.22%_62.56%_55.05%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.316px_-0.069px] mask-size-[97.52px_10.669px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.8878 10.5744">
        <g id="Group">
          <path d={svgPaths.p2c1f7d80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2e09c700} fill="var(--fill-0, #D52121)" id="Vector_2" />
          <path d={svgPaths.p39f52b00} fill="var(--fill-0, #D52121)" id="Vector_3" />
          <path d={svgPaths.p1c2f3000} fill="var(--fill-0, #B70F0F)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[37.2%_38.2%_62.56%_55.03%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function FeatureImageBackground() {
  return (
    <div className="absolute contents left-[772.72px] top-[1667.13px]" data-name="Feature Image Background">
      <div className="absolute bg-[#0e0e0e] h-[40.082px] left-[772.72px] rounded-[20.041px] top-[1667.13px] w-[136.82px]" data-name="Feature Button Background" />
      <ClipPathGroup />
    </div>
  );
}

function FeatureSection() {
  return (
    <div className="absolute contents left-[772.72px] top-[1667.13px]" data-name="Feature Section">
      <FeatureDescription />
      <FeatureImageBackground />
    </div>
  );
}

function DropdownBackground() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Dropdown Background">
      <div className="bg-[rgba(21,99,237,0.1)] col-1 h-[24.174px] ml-0 mt-0 rounded-[11.904px] row-1 w-[99.348px]" />
    </div>
  );
}

function Component691C44C113092Abc7Ada8549Onepage() {
  return (
    <div className="relative shrink-0 size-[12.68px]" data-name="691c44c113092abc7ada8549_onepage 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6801 12.6801">
        <g id="691c44c113092abc7ada8549_onepage 1">
          <path d={svgPaths.p25307570} fill="var(--fill-0, #0071E3)" id="Vector" />
          <path d={svgPaths.p25307570} id="Vector_2" stroke="var(--stroke-0, #0071E3)" strokeLinejoin="round" strokeWidth="1.18876" />
          <path d={svgPaths.p31f43b00} id="Vector_3" stroke="var(--stroke-0, #0071E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18876" />
        </g>
      </svg>
    </div>
  );
}

function DropdownLink() {
  return (
    <div className="col-1 content-stretch flex gap-[3px] items-center ml-[9.83px] mt-[5.59px] relative row-1" data-name="Dropdown Link">
      <Component691C44C113092Abc7Ada8549Onepage />
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#005cec] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Landing page</p>
      </div>
    </div>
  );
}

function MainNavigationLink() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Main Navigation Link">
      <DropdownBackground />
      <DropdownLink />
    </div>
  );
}

function DropdownBackground1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Dropdown Background">
      <div className="bg-[rgba(21,99,237,0.1)] col-1 h-[24.174px] ml-0 mt-0 rounded-[11.904px] row-1 w-[72.789px]" />
    </div>
  );
}

function Component6981Fb64D47781C8Bb0F158AFrame() {
  return (
    <div className="relative shrink-0 size-[12.68px]" data-name="6981fb64d47781c8bb0f158a_Frame-1 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.68 12.68">
        <g id="6981fb64d47781c8bb0f158a_Frame-1 1">
          <path d={svgPaths.p3eb58400} fill="var(--fill-0, #0071E3)" id="Vector" />
          <path d={svgPaths.p24331600} fill="var(--fill-0, #0071E3)" id="Vector_2" />
          <path d={svgPaths.p2afb9f00} fill="var(--fill-0, #0071E3)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function DropdownLink1() {
  return (
    <div className="col-1 content-stretch flex gap-[3px] items-center ml-[9.83px] mt-[5.59px] relative row-1" data-name="Dropdown Link">
      <Component6981Fb64D47781C8Bb0F158AFrame />
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#005cec] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Agence</p>
      </div>
    </div>
  );
}

function SecondaryNavigationLink() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Secondary Navigation Link">
      <DropdownBackground1 />
      <DropdownLink1 />
    </div>
  );
}

function NavigationLinks() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center leading-[0] left-[772.72px] top-[1728.61px]" data-name="Navigation Links">
      <MainNavigationLink />
      <SecondaryNavigationLink />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[772.72px] top-[1667.13px]">
      <FeatureSection />
      <NavigationLinks />
    </div>
  );
}

function MaskGroup({ animateIn, scrollDirection }: { animateIn: boolean; scrollDirection: ScrollDirection }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="-translate-x-1/2 absolute h-[353px] left-1/2 top-[2117.32px] w-[897px]"
      data-name="Mask Group"
      initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
      animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
      transition={{ duration: SECTION_DURATION + 0.05, ease: SECTION_EASE, delay: scrollDirection === 'up' ? 0.35 : 0 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[448.61px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.111px_0px] mask-size-[896.66px_353.049px] text-[#d8d8d8] text-[300px] text-center top-[195px] whitespace-nowrap" style={{ maskImage: `url('${imgOffres}')` }}>
        <p className="leading-[normal]">Offres</p>
      </div>
    </motion.div>
  );
}

function ReserveCallGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-93.02px)] mt-[317.35px] place-items-center relative row-1" data-name="Reserve Call Group">
      <div className="bg-white col-1 h-[49.577px] ml-0 mt-0 rounded-[100px] row-1 w-[186.038px]" data-name="Reserve Call Button" />
      <div className="col-1 flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium h-[49.577px] items-center justify-center relative row-1 text-[#0e0e0e] text-[17px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Réserver un appel</p>
      </div>
    </div>
  );
}

function CallToActionTitleBackground() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Call to Action Title Background">
      <div className="col-1 content-stretch flex gap-[9.151px] h-[56.188px] items-center justify-center ml-0 mt-0 p-[6.863px] pointer-events-none relative rounded-[100px] row-1 w-[467.72px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[28.598px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.801px 0 rgba(255,255,255,0.4), inset 0 -0.801px 0 rgba(255,255,255,0.1), inset 0.801px 0 0 rgba(255,255,255,0.15), inset -0.801px 0 0 rgba(255,255,255,0.15)' }} />
      </div>
    </div>
  );
}

function OfferTitleBackground1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Offer Title Background">
      <CallToActionTitleBackground />
    </div>
  );
}

// ─── Offer data ──────────────────────────────────────────────────────────────

interface OfferData {
  id: number;
  label: string;
  tabWidth: number;
  cardHeight: number;
  descriptionLines: string[];
  pricePrefix?: string;
  price: string;
  benefits: string[];
}

const OFFERS: OfferData[] = [
  {
    id: 0,
    label: 'Landing Page',
    tabWidth: 112.704,
    cardHeight: 814.29,
    descriptionLines: [
      'Une page unique sur mesure, conçue pour capter',
      "l'attention, renforcer ta crédibilité et convertir davantage.",
    ],
    price: '1990€',
    benefits: [
      'Branding & direction artistique sur-mesure',
      'Wireframe + UX/UI Figma',
      'Copywriting stratégique',
      'Développement pixel-perfect',
      'Animations premium & micro-interactions',
      'Optimisation du Taux de Conversion (CRO)',
      'Optimisation SEO',
      'Révisions illimitées',
    ],
  },
  {
    id: 1,
    label: 'Site E-commerce',
    tabWidth: 130.915,
    cardHeight: 940.04,
    descriptionLines: [
      'Un site e-commerce premium, pensé pour sublimer tes',
      "produits, fluidifier l’achat et maximiser tes conversions.",
    ],
    pricePrefix: 'À partir de',
    price: '2990€',
    benefits: [
      'Branding & direction artistique sur-mesure',
      'Wireframe + UX/UI Figma',
      'Copywriting stratégique',
      'Développement pixel-perfect',
      'Animations premium & micro-interactions',
      'Expérience d’achat fluide & premium',
      'Pages produit pensées pour convertir',
      'Intégration paiement, panier & checkout',
      'Optimisation du Taux de Conversion (CRO)',
      'Optimisation SEO',
      'Révisions illimitées '
    ],
  },
  {
    id: 2,
    label: 'Identité visuelle',
    tabWidth: 118.965,
    cardHeight: 980.08,
    descriptionLines: [
      'Une identité de marque complète, conçue pour donner',
      'à ton projet une image forte, cohérente et',
      'immédiatement mémorable.',
    ],
    price: '890€',
    benefits: [
      'Recherche stratégique de marque',
      '3 concepts créatifs sur-mesure',
      'Logo principal + déclinaisons',
      'Versions monochrome & transparentes',
      'Palette couleur & système typographique',
      'Système d’identité visuelle complet',
      'Brandbook premium de 20 pages',
      'Guide d’utilisation de la marque',
      'Fichiers sources, vectoriels et print-ready',
      'Kit social media & supports de papeterie',
      'Mockups premium de présentation',
      'Révisions illimitées',
    ],
  },
  {
    id: 3,
    label: 'SaaS',
    tabWidth: 62.613,
    cardHeight: 977.56,
    descriptionLines: [
      'Un SaaS sur mesure, conçu et développé pour',
      'transformer ton idée en un vrai produit',
      'digital clair, solide et scalable.',
    ],
    price: 'Sur Devis',
    benefits: [
      'Branding & direction artistique sur-mesure',
      'Wireframe + UX/UI Figma',
      'Copywriting stratégique',
      'Architecture produit pensée pour l’usage',
      'Copywriting stratégique',
      'Interfaces multi-pages',
      'Développement pixel-perfect',
      'Animations premium & micro-interactions',
      'Performance, fluidité & stabilité',
      'Intégrations API, paiement, CRM ou automatisations',
      'Base produit propre pour scaler',
      'Révisions illimitées',
    ],
  },
];

const OFFER_EASE = [0.22, 1, 0.36, 1] as const;

const offerContentVariants = {
  enter:  { x: 40,  opacity: 0, filter: 'blur(6px)' },
  center: { x: 0,   opacity: 1, filter: 'blur(0px)',
    transition: { duration: 0.45, ease: OFFER_EASE } },
  exit:   { x: -40, opacity: 0, filter: 'blur(6px)',
    transition: { duration: 0.25, ease: OFFER_EASE } },
};

// Generic tab pill (active = white bg + dark text, inactive = frosted + faded white)
function OfferTab({ offer, active, onClick }: { offer: OfferData; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-center relative shrink-0 cursor-pointer"
    >
      <div
        className="col-1 content-stretch flex h-[34.437px] items-center justify-center p-[5.871px] relative rounded-[100px] row-1"
        style={{ width: offer.tabWidth }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-luminosity rounded-[100px] transition-colors duration-300"
          style={{
            backdropFilter: 'blur(24.461px)',
            backgroundColor: active ? 'white' : 'rgba(128,128,128,0.2)',
          }}
        />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.685px 0 rgba(255,255,255,0.4), inset 0 -0.685px 0 rgba(255,255,255,0.1), inset 0.685px 0 0 rgba(255,255,255,0.15), inset -0.685px 0 0 rgba(255,255,255,0.15)' }} />
      </div>
      <div
        className="col-1 flex flex-col justify-center relative row-1 text-[12.078px] text-center whitespace-nowrap transition-colors duration-300"
        style={{
          fontFamily: active ? "'Neue_Montreal:Medium', sans-serif" : "'Neue_Montreal:Regular', sans-serif",
          fontWeight: active ? 500 : 400,
          color: active ? '#0e0e0e' : 'rgba(255,255,255,0.65)',
        }}
      >
        <p className="leading-[normal]">{offer.label}</p>
      </div>
    </button>
  );
}

// Tick icon for benefits
function OfferBenefitTick() {
  return (
    <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[21px]">
      <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
          <path d={svgPaths.p26b70600} fill="black" />
        </svg>
      </div>
    </div>
  );
}

// Stateful offer card — dark card + white benefits, both animated on tab switch
function OfferCard({ animateIn, scrollDirection }: { animateIn: boolean; scrollDirection: ScrollDirection }) {
  const [activeId, setActiveId] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reserveButtonTop, setReserveButtonTop] = useState(317.35);
  const darkCardRef = useRef<HTMLDivElement | null>(null);
  const priceRowRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  const offer = OFFERS[activeId];
  const whiteCardHeight = offer.cardHeight - (2814.41 - 2406.12);
  const isQuotePrice = offer.price.toLowerCase().includes('devis');
  const isEcommerceOffer = offer.id === 1;
  const hasPricePrefix = Boolean(offer.pricePrefix);
  const priceChipWidth = hasPricePrefix ? 172 : 97.335;
  const priceChipHeight = hasPricePrefix ? 37 : 36.73;
  const labelToTitleGap = offer.descriptionLines.length === 2 ? 63 : 47;
  const descriptionFrameStyle = isEcommerceOffer
    ? { height: 177, width: 350, marginLeft: 92.29, marginTop: 114.288 }
    : { height: 177, width: 276, marginLeft: 129.29, marginTop: 114.288 };

  useEffect(() => {
    const updateReserveSpacing = () => {
      const darkCardNode = darkCardRef.current;
      const priceRowNode = priceRowRef.current;
      if (!darkCardNode || !priceRowNode) return;

      const darkCardRect = darkCardNode.getBoundingClientRect();
      const priceRowRect = priceRowNode.getBoundingClientRect();
      const nextTop = priceRowRect.bottom - darkCardRect.top + 26.34;

      setReserveButtonTop((prevTop) => (Math.abs(prevTop - nextTop) > 0.1 ? nextTop : prevTop));
    };

    const rafId = requestAnimationFrame(updateReserveSpacing);
    window.addEventListener('resize', updateReserveSpacing);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updateReserveSpacing);
    };
  }, [activeId, labelToTitleGap]);

  const switchTo = (id: number) => {
    if (isAnimating || id === activeId) return;
    setIsAnimating(true);
    setActiveId(id);
  };

  return (
    <motion.div
      className="absolute left-0 top-0 w-full"
      initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
      animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
      transition={{ duration: CARD_DURATION, ease: CARD_EASE, delay: scrollDirection === 'up' ? 0.05 : 0.4 }}
    >

      {/* ── Dark card ─────────────────────────────────────────────── */}
      <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[2406.12px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">

          {/* Dark background block */}
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" ref={darkCardRef}>
            <div className="bg-[#0e0e0e] col-1 h-[408.9px] ml-0 mt-0 relative rounded-tl-[20px] rounded-tr-[20px] row-1 w-[534.581px]">
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
            </div>
            {/* Reserve call button — absolutely centered in the dark card */}
            <div className="absolute -translate-x-1/2 grid-cols-[max-content] grid-rows-[max-content] inline-grid left-1/2 place-items-center" style={{ bottom: 41.16 }}>
              <div className="bg-white col-1 h-[49.577px] ml-0 mt-0 rounded-[100px] row-1 w-[186.038px]" />
              <div className="col-1 flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium h-[49.577px] items-center justify-center relative row-1 text-[#0e0e0e] text-[17px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Réserver un appel</p>
              </div>
            </div>
            {/* Tab bar */}
            <div
              className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33.43px] place-items-start relative row-1"
              style={{ marginTop: 39.08 }}
            >
              {/* Pill backdrop */}
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
                <div className="col-1 content-stretch flex gap-[9.151px] h-[56.188px] items-center justify-center ml-0 mt-0 p-[6.863px] pointer-events-none relative rounded-[100px] row-1 w-[467.72px]">
                  <div aria-hidden="true" className="absolute backdrop-blur-[28.598px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
                  <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.801px 0 rgba(255,255,255,0.4), inset 0 -0.801px 0 rgba(255,255,255,0.1), inset 0.801px 0 0 rgba(255,255,255,0.15), inset -0.801px 0 0 rgba(255,255,255,0.15)' }} />
                </div>
              </div>
              {/* Tab pills */}
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-222.46px)] mt-[7.21px] place-items-start relative row-1">
                <div className="col-1 content-stretch flex gap-[6px] h-[42px] items-center ml-0 mt-0 relative row-1 w-[444.919px]">
                  {OFFERS.map(o => (
                    <OfferTab key={o.id} offer={o} active={o.id === activeId} onClick={() => switchTo(o.id)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Animated description + price */}
          <div className="col-1 row-1 relative" style={descriptionFrameStyle}>
            {/* Fixed label — never animates */}
            <div className="flex justify-center w-full">
              <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f8f8] text-[10px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Cliquez sur l'offre de votre choix pour voir les détails</p>
              </div>
            </div>
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => setIsAnimating(false)}>
              <motion.div
                key={`desc-${activeId}`}
                className="absolute inset-x-0 bottom-0 flex flex-col items-center"
                style={{ top: labelToTitleGap, rowGap: 30 }}
                variants={reduced ? undefined : offerContentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={reduced ? { duration: 0 } : undefined}
              >
                {/* Description */}
                <div className="content-stretch flex flex-col items-center relative shrink-0">
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-fit">
                    <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#888] text-[16px] text-center whitespace-nowrap w-fit">
                      {offer.descriptionLines.map((line, index) => (
                        <p key={`${offer.id}-line-${index}`} className={index < offer.descriptionLines.length - 1 ? "mb-0 text-center w-fit mx-auto" : "text-center w-fit mx-auto"}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Price */}
                <div className="content-stretch flex gap-[11px] items-center leading-[0] relative shrink-0 w-full" ref={priceRowRef}>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
                    <div
                      aria-hidden="true"
                      className="col-1 pointer-events-none row-1"
                      style={{ width: priceChipWidth, height: priceChipHeight }}
                    >
                      <svg width={priceChipWidth} height={priceChipHeight} viewBox="0 0 98 37" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <rect x="0.364499" y="0.364499" width="96.606" height="36.0012" rx="6.98154" fill="#808080" fillOpacity="0.2" style={{ mixBlendMode: 'luminosity' }}/>
                        <rect x="0.364499" y="0.364499" width="96.606" height="36.0012" rx="6.98154" stroke={`url(#priceGrad_${offer.id})`} strokeWidth="0.728998"/>
                        <defs>
                          <linearGradient id={`priceGrad_${offer.id}`} x1="8.04583" y1="0" x2="16.0777" y2="46.4258" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.4"/>
                            <stop offset="0.405687" stopColor="white" stopOpacity="0.01"/>
                            <stop offset="0.574372" stopColor="white" stopOpacity="0.01"/>
                            <stop offset="1" stopColor="white" stopOpacity="0.1"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="col-1 flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[36.73px] items-center justify-center ml-0 mt-0 relative row-1 text-[14.528px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", width: priceChipWidth, height: priceChipHeight }}>
                      <p>
                        {offer.pricePrefix && <span className="leading-[normal] text-[rgba(255,255,255,0.6)]">{offer.pricePrefix} </span>}
                        <span className="leading-[normal]">{offer.price}</span>
                        {!isQuotePrice && <span className="leading-[normal] text-[rgba(255,255,255,0.6)]"> HT</span>}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['SF_Pro:Ultralight',sans-serif] justify-center relative shrink-0 text-[#7c7c7c] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[normal]">︱</p>
                  </div>
                  <div
                    className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#dbdbdb] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">Payable en plusieurs fois</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* ── White benefits card ────────────────────────────────────── */}
      <div className="-translate-x-1/2 absolute bg-white left-1/2 overflow-hidden rounded-bl-[20px] rounded-br-[20px]" style={{ top: 2814.41, width: 534.58, height: whiteCardHeight }}>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`benefits-${activeId}`}
            className="absolute inset-0 flex flex-col items-start pb-[35px] pl-[40px] pr-[150px] pt-[40px]"
            variants={reduced ? undefined : offerContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={reduced ? { duration: 0 } : undefined}
          >
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start leading-[0] min-h-px min-w-px relative w-full">
              {offer.benefits.map((text, i) => (
                <div key={i} className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                  <OfferBenefitTick />
                  <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[41.5px] mt-[2px] relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
                    <p className="leading-[normal]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </motion.div>
  );
}

function Offres({ animateIn, scrollDirection }: { animateIn: boolean; scrollDirection: ScrollDirection }) {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[2406.12px]" data-name="Offres">
      <OfferCard animateIn={animateIn} scrollDirection={scrollDirection} />
    </div>
  );
}

function OffresGroupe({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  const offersTriggerRef = useRef<HTMLDivElement | null>(null);
  const isOffersInView = useInView(offersTriggerRef, { amount: 0.7 });

  return (
    <>
      <div
        id="offres"
        aria-hidden="true"
        className="-translate-x-1/2 absolute h-[695px] left-1/2 pointer-events-none top-[2117.32px] w-[897px]"
        ref={offersTriggerRef}
      />
      <div className="-translate-x-1/2 absolute contents left-1/2 top-[2117.32px]" data-name="Offres Groupe">
        <MaskGroup animateIn={isOffersInView} scrollDirection={scrollDirection} />
        <Offres animateIn={isOffersInView} scrollDirection={scrollDirection} />
      </div>
    </>
  );
}

function InfinifyMask({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  const reduced = useReducedMotion();
  const infinifyMaskRef = useRef<HTMLDivElement | null>(null);
  const isInfinifyMaskInView = useInView(infinifyMaskRef, { amount: TEAM_VIEWPORT.amount });
  return (
    <motion.div
      ref={infinifyMaskRef}
      className="-translate-x-1/2 absolute h-[353px] left-[calc(50%-3.55px)] top-[3934.38px] w-[1057px]"
      data-name="Infinify Mask"
      initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
      animate={isInfinifyMaskInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
      transition={{ duration: CARD_DURATION, ease: CARD_EASE, delay: scrollDirection === 'up' ? 0.42 : 0.15 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[528.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-19.5px_0px] mask-size-[1056.66px_353.049px] text-[300px] text-center top-[195px] whitespace-nowrap"
        style={{
          maskImage: `url('${imgInfinify}')`,
          color: 'transparent',
          background: 'linear-gradient(180deg, rgba(216,216,216,0.78) 0%, rgba(216,216,216,0.18) 72%, rgba(216,216,216,0) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}>
        <p className="leading-[normal]">Infinify</p>
      </div>
    </motion.div>
  );
}

function TeamMask({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  const reduced = useReducedMotion();
  const teamMaskRef = useRef<HTMLDivElement | null>(null);
  const isTeamMaskInView = useInView(teamMaskRef, { amount: TEAM_VIEWPORT.amount });
  return (
    <motion.div
      ref={teamMaskRef}
      className="absolute h-[353px] left-[335.5px] top-[827.37px] w-[769px]"
      data-name="Team Mask"
      initial={{ opacity: 0, y: reduced ? 0 : SECTION_Y }}
      animate={isTeamMaskInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : SECTION_Y }}
      transition={{ duration: SECTION_DURATION + 0.05, ease: SECTION_EASE, delay: scrollDirection === 'up' ? 0.45 : 0 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[384.77px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.273px_0.484px] mask-size-[768.66px_353.049px] text-[#d8d8d8] text-[300px] text-center top-[194.52px] whitespace-nowrap" style={{ maskImage: `url('${imgTeam}')` }}>
        <p className="leading-[normal]">Team</p>
      </div>
    </motion.div>
  );
}

function TestimonialBackground() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Testimonial Background">
      <div className="absolute bg-white h-[81.549px] left-0 rounded-bl-[20px] rounded-br-[20px] top-[158.95px] w-[367.483px]" data-name="Testimonial Background">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
      </div>
      <div className="absolute bg-gradient-to-b from-[#181818] h-[158.947px] left-0 rounded-tl-[20px] rounded-tr-[20px] to-[#171717] top-0 w-[367.483px]" data-name="Testimonial Quote Background">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
      </div>
    </div>
  );
}

function TestimonialName1() {
  return (
    <div className="absolute contents left-[165.05px] top-[32px]" data-name="Testimonial Name">
      <div className="absolute content-stretch flex gap-[8.093px] h-[35.678px] items-center justify-center left-[165.05px] p-[6.07px] pointer-events-none rounded-[100px] top-[32px] w-[156.092px] backdrop-blur-[6px]" data-name="Toolbar - Symbols">
        <svg aria-hidden="true" className="absolute inset-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 156.092 35.678" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.354" y="0.354" width="155.384" height="34.97" rx="17.839" fill="#808080" fillOpacity="0.2" style={{ mixBlendMode: 'luminosity' }} />
          <rect x="0.354" y="0.354" width="155.384" height="34.97" rx="17.839" stroke="url(#chipGrad4)" strokeWidth="0.708" />
          <defs>
            <linearGradient id="chipGrad4" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
              <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-135.33px)] text-[14px] text-center text-white top-[49.21px] whitespace-nowrap">
        <p className="leading-[normal]">Oscar VORTICE</p>
      </div>
    </div>
  );
}

function TestimonialInfo1() {
  return (
    <div className="absolute contents left-[165.05px] top-[32px]" data-name="Testimonial Info">
      <TestimonialName1 />
      <div className="absolute left-[171.67px] size-[25.834px] top-[36.66px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8335 25.8335">
          <circle cx="12.9168" cy="12.9168" fill="var(--fill-0, #0D0D0D)" id="Ellipse 46954" r="12.9168" />
        </svg>
      </div>
      <div className="absolute h-[9.314px] left-[177.38px] top-[44.92px] w-[14.411px]" data-name="Logo Infinify 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.86%] left-[-6.67%] max-w-none top-[-17.73%] w-[114.53%]" src={imgLogoInfinify1} />
        </div>
      </div>
    </div>
  );
}

function TestimonialColumn() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Testimonial Column">
      <TestimonialBackground />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center leading-[normal] left-[calc(50%-212.55px)] text-[#0e0e0e] text-[14px] text-center top-[199.72px] whitespace-nowrap">
        <p className="mb-0">“ Un design qui inspire l’émotion est le</p>
        <p>premier pas vers une conversion réussie. “</p>
      </div>
      <div className="absolute h-[114.876px] left-[20.25px] rounded-[8.353px] top-[20.77px] w-[114.52px]" data-name="Testimonial Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8.353px]">
          <img alt="" className="absolute h-[149.54%] left-0 max-w-none top-[-25.3%] w-full" src={imgTestimonialImage} loading="lazy" decoding="async" />
        </div>
      </div>
      <TestimonialInfo1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-185.06px)] text-[#b1b1b1] text-[16px] text-center top-[94.03px] whitespace-nowrap">
        <p className="leading-[normal]"><span style={{ WebkitTextStroke: '1px black', color: 'white', fontWeight: 700 }}>CEO</span> Infinify</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-185.06px)] text-[#b1b1b1] text-[16px] text-center top-[123.47px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="flex items-center gap-[6px]">
          <span className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] text-[#b1b1b1]">{`&`}</span>
          <span className="inline-flex items-center justify-center rounded-full font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] text-[10px] text-[#1563ED]" style={{ background: 'rgba(21,99,237,0.25)', width: 78.65, height: 24.17 }}>Designer</span>
        </p>
      </div>
    </div>
  );
}

function TestimonialBackground1() {
  return (
    <div className="absolute contents left-[405.28px] top-0" data-name="Testimonial Background">
      <div className="absolute flex h-[81.549px] items-center justify-center left-[405.28px] top-[158.95px] w-[377.927px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white h-[81.549px] relative rounded-bl-[20px] rounded-br-[20px] w-[377.927px]" data-name="Testimonial Background">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[158.947px] items-center justify-center left-[405.28px] top-0 w-[377.927px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-gradient-to-b from-[#181818] h-[158.947px] relative rounded-tl-[20px] rounded-tr-[20px] to-[#171717] w-[377.927px]" data-name="Testimonial Quote Background">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialInfo2() {
  return (
    <div className="absolute contents left-[428.68px] top-[32px]" data-name="Testimonial Info">
      <div className="absolute content-stretch flex gap-[9.073px] h-[40px] items-center justify-center left-[428.68px] p-[6.805px] pointer-events-none rounded-[100px] top-[32px] w-[198px] backdrop-blur-[6px]" data-name="Toolbar - Symbols">
        <svg aria-hidden="true" className="absolute inset-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 198 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.354" y="0.354" width="197.292" height="39.292" rx="20" fill="#808080" fillOpacity="0.2" style={{ mixBlendMode: 'luminosity' }} />
          <rect x="0.354" y="0.354" width="197.292" height="39.292" rx="20" stroke="url(#chipGrad5)" strokeWidth="0.708" />
          <defs>
            <linearGradient id="chipGrad5" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
              <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+152.17px)] text-[14px] text-center text-white top-[51.84px] whitespace-nowrap">
        <p className="leading-[normal]">Benjamin BOTELLA</p>
      </div>
    </div>
  );
}

function LogoAndIcon() {
  return (
    <div className="absolute contents left-[428.68px] top-[32px]" data-name="Logo and Icon">
      <TestimonialInfo2 />
      <div className="absolute left-[436.54px] size-[28.963px] top-[37.36px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9629 28.9629">
          <circle cx="14.4814" cy="14.4814" fill="var(--fill-0, #0D0D0D)" id="Ellipse 46954" r="14.4814" />
        </svg>
      </div>
      <div className="absolute h-[10.442px] left-[442.94px] top-[46.62px] w-[16.156px]" data-name="Logo Infinify 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.86%] left-[-6.67%] max-w-none top-[-17.73%] w-[114.53%]" src={imgLogoInfinify1} />
        </div>
      </div>
    </div>
  );
}

function TestimonialColumn1() {
  return (
    <div className="absolute contents left-[405.28px] top-0" data-name="Testimonial Column">
      <TestimonialBackground1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+168.47px)] text-[#b1b1b1] text-[16px] text-center top-[94.03px] whitespace-nowrap">
        <p className="leading-[normal]"><span style={{ WebkitTextStroke: '1px black', color: 'white', fontWeight: 700 }}>Co-CEO</span> Infinify</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center leading-[normal] left-[calc(50%+203.14px)] text-[#0e0e0e] text-[14px] text-center top-[199.72px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`“ Chaque détail visible dépend `}</p>
        <p>d’une structure invisible. “</p>
      </div>
      <div className="absolute flex h-[114.876px] items-center justify-center left-[648.44px] top-[20.77px] w-[114.52px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[114.876px] relative rounded-[8.353px] w-[114.52px]" data-name="Testimonial Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8.353px]">
              <img alt="" className="absolute h-[131.82%] left-[-35.39%] max-w-none top-[-31.82%] w-[164.12%]" src={imgTestimonialImage1} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
      <LogoAndIcon />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+168.47px)] text-[#b1b1b1] text-[16px] text-center top-[123.47px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="flex items-center gap-[6px]">
          <span className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] text-[#b1b1b1]">{`&`}</span>
          <span className="inline-flex items-center justify-center rounded-full font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] text-[10px] text-[#1563ED]" style={{ background: 'rgba(21,99,237,0.25)', width: 79.66, height: 24.17 }}>Développeur</span>
        </p>
      </div>
    </div>
  );
}

// Timing constants — adjust here to tune the feel
const CARD_EASE = [0.16, 1, 0.3, 1] as const;
const CARD_DURATION = 0.95;
const CARD_Y = 60;
const FOOTER_EASE = [0.22, 1, 0.36, 1] as const;
const FOOTER_DURATION = CARD_DURATION * 1.2;
const FOOTER_Y = 48;

function Team({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  const reduced = useReducedMotion();
  const teamRef = useRef<HTMLDivElement | null>(null);
  const isTeamInView = useInView(teamRef, { amount: TEAM_VIEWPORT.amount });
  return (
    <div ref={teamRef} className="-translate-x-1/2 absolute h-[240.496px] left-1/2 top-[1117.87px] w-[783.209px]" data-name="Team">
      {/* Card 1 — Oscar VORTICE */}
      <motion.div
        className="absolute left-0 top-0 w-[783.209px] h-full"
        initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
        animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
        transition={{ duration: CARD_DURATION, ease: CARD_EASE, delay: scrollDirection === 'up' ? 0.25 : 0.15 }}
      >
        <TestimonialColumn />
      </motion.div>
      {/* Card 2 — Benjamin BOTELLA */}
      <motion.div
        className="absolute left-0 top-0 w-[783.209px] h-full"
        initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
        animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
        transition={{ duration: CARD_DURATION, ease: CARD_EASE, delay: scrollDirection === 'up' ? 0.05 : 0.35 }}
      >
        <TestimonialColumn1 />
      </motion.div>
    </div>
  );
}

function TeamGroupe({ scrollDirection }: { scrollDirection: ScrollDirection }) {
  return (
    <div className="absolute contents left-[328.4px] top-[827.37px]" data-name="Team Groupe">
      <TeamMask scrollDirection={scrollDirection} />
      <Team scrollDirection={scrollDirection} />
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center justify-self-end mr-[16.94px] mt-[16.43px] overflow-clip px-[20.381px] py-[10.19px] relative rounded-[6804.645px] row-1" data-name="CTA">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.889px] text-black text-center tracking-[-0.2178px] whitespace-nowrap">
        <p className="leading-[1.2]">Réserver un appel</p>
      </div>
    </div>
  );
}

function TestimonialName2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Testimonial Name">
      <div className="col-1 content-stretch flex gap-[8.093px] h-[68.636px] items-center justify-center ml-0 mt-0 p-[6.07px] pointer-events-none relative rounded-[50.58px] row-1 w-[364.847px] backdrop-blur-[6px]" data-name="Toolbar - Symbols">
        <svg aria-hidden="true" className="absolute inset-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 365 69" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <foreignObject x="-50.5798" y="-50.5798" width="466.007" height="169.796">
            <div style={{ backdropFilter: 'blur(25.29px)', clipPath: 'url(#bgblur_0_70_2940_clip_path)', height: '100%', width: '100%' }} />
          </foreignObject>
          <g>
            <rect x="0.354059" y="0.354059" width="364.139" height="67.9279" rx="33.964" fill="#808080" fillOpacity="0.2" style={{ mixBlendMode: 'luminosity' }} />
            <rect x="0.354059" y="0.354059" width="364.139" height="67.9279" rx="33.964" stroke="url(#paint0_linear_70_2940)" strokeWidth="0.708117" />
          </g>
          <defs>
            <clipPath id="bgblur_0_70_2940_clip_path" transform="translate(50.5798 50.5798)">
              <rect x="0.354059" y="0.354059" width="364.139" height="67.9279" rx="33.964" />
            </clipPath>
            <linearGradient id="paint0_linear_70_2940" x1="30.1588" y1="0" x2="37.8081" y2="88.6906" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
              <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Cta1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.94px] mt-[12.03px] place-items-start relative row-1">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[42.163px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.1628 42.1628">
          <circle cx="21.0814" cy="21.0814" fill="var(--fill-0, #0D0D0D)" id="Ellipse 46954" r="21.0814" />
        </svg>
      </div>
      <div className="col-1 h-[15.201px] ml-[9.32px] mt-[13.48px] relative row-1 w-[23.52px]" data-name="Logo Infinify 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.86%] left-[-6.67%] max-w-none top-[-17.73%] w-[114.53%]" src={imgLogoInfinify1} />
        </div>
      </div>
    </div>
  );
}

function NavBar({ introActive }: { introActive: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="fixed left-1/2 -translate-x-1/2 top-[70px] z-[9999]"
      data-name="Nav bar-fixed"
      initial={{ opacity: 0, y: reduced ? 0 : -18 }}
      animate={introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : -18 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0 }}
    >
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Nav bar">
        <TestimonialName2 />
        <Group6 />
        <div className="bg-[#565656] col-1 h-[1.2px] ml-[117.15px] mt-[27.87px] relative row-1 w-[30.126px] z-10" />
        <div className="bg-[#565656] col-1 h-[1.2px] ml-[117.15px] mt-[37.16px] relative row-1 w-[30.126px] z-10" />
      </div>
    </motion.div>
  );
}

function Frame12({ introActive }: { introActive: boolean }) {
  const reduced = useReducedMotion();
  const heroTitleLines = ['Design stratégique', 'pour marques ambitieuses'];
  const heroWordsByLine = heroTitleLines.map((line) => line.split(' '));
  const heroLineOffsets = heroWordsByLine.map((_, lineIndex) => heroWordsByLine.slice(0, lineIndex).reduce((total, words) => total + words.length, 0));

  return (
    <motion.div
      className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0"
      initial={{ opacity: 0, y: reduced ? 0 : 26 }}
      animate={introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 26 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0 }}
    >
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[1.1] relative shrink-0 text-[#f0f0f0] text-[55px] tracking-[-1.1px] w-[798.124px]">
        {heroWordsByLine.map((words, lineIndex) => (
          <p key={heroTitleLines[lineIndex]} className={lineIndex === 0 ? "mb-0" : undefined}>
            {words.map((word, wordIndex) => (
              <motion.span
                key={`${heroTitleLines[lineIndex]}-${word}-${wordIndex}`}
                initial={{
                  opacity: 0,
                  y: reduced ? 0 : 34,
                  scale: 1,
                  filter: reduced ? 'blur(0px)' : 'blur(20px)'
                }}
                animate={{
                  opacity: introActive ? 1 : 0,
                  y: introActive ? 0 : reduced ? 0 : 34,
                  scale: 1,
                  filter: introActive ? 'blur(0px)' : reduced ? 'blur(0px)' : 'blur(20px)'
                }}
                transition={{
                  duration: reduced ? 0.35 : 1.1,
                  delay: (heroLineOffsets[lineIndex] + wordIndex) * 0.06,
                  ease: [0.19, 1, 0.22, 1],
                }}
                style={{ marginRight: 6, display: 'inline-block', transformOrigin: '50% 100%', willChange: 'transform, filter, opacity' }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        ))}
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#e0e3e6] text-[20.035px] tracking-[-0.4007px] w-[616.411px]">
        <p className="leading-[1.5]">Identités et expériences digitales pensées avec une obsession du détail pour convertir et élever la perception de votre marque.</p>
      </div>
    </motion.div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20.035px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0345 20.0345">
        <path d="M5.31055 14.724L14.7239 5.31067" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        <path d="M8.31445 5.31067H14.7239V11.7201" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
      </svg>
    </div>
  );
}

const ROLLING_TEXT_EASE = [0.6, 0.01, -0.05, 0.95] as const;
const ROLLING_TEXT_DURATION = 0.5;
const ROLLING_TEXT_STAGGER = 0.025;
const ROLLING_TEXT_DELAY = 0.01;

function RollingTextLabel({ text }: { text: string }) {
  const characters = Array.from(text);
  const rowClassName = "absolute inset-0 flex items-start whitespace-nowrap";
  const letterClassName = "block whitespace-pre";
  const letterClipStyle = { height: '1.2em' } as const;
  const letterLineStyle = { lineHeight: '1.2em' } as const;
  const rowVariants = {
    hidden: { transition: { staggerChildren: ROLLING_TEXT_STAGGER, delayChildren: ROLLING_TEXT_DELAY } },
    visible: { transition: { staggerChildren: ROLLING_TEXT_STAGGER, delayChildren: ROLLING_TEXT_DELAY } },
    hover: { transition: { staggerChildren: ROLLING_TEXT_STAGGER, delayChildren: ROLLING_TEXT_DELAY } },
  } as const;
  const topLetterVariants = {
    hidden: { y: '0%' },
    visible: { y: '0%', transition: { duration: ROLLING_TEXT_DURATION, ease: ROLLING_TEXT_EASE } },
    hover: { y: '-100%', transition: { duration: ROLLING_TEXT_DURATION, ease: ROLLING_TEXT_EASE } },
  } as const;
  const bottomLetterVariants = {
    hidden: { y: '100%' },
    visible: { y: '100%', transition: { duration: ROLLING_TEXT_DURATION, ease: ROLLING_TEXT_EASE } },
    hover: { y: '0%', transition: { duration: ROLLING_TEXT_DURATION, ease: ROLLING_TEXT_EASE } },
  } as const;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="relative inline-block overflow-hidden align-top" style={{ height: '1.2em' }}>
        <span className="block opacity-0 select-none" style={{ lineHeight: '1.2em' }}>
          {text}
        </span>
        <motion.div className={rowClassName} variants={rowVariants}>
          {characters.map((character, index) => (
            <span key={`top-wrap-${index}`} className="relative overflow-hidden" style={letterClipStyle}>
              <motion.span className={letterClassName} style={letterLineStyle} variants={topLetterVariants}>
                {character === ' ' ? '\u00A0' : character}
              </motion.span>
            </span>
          ))}
        </motion.div>
        <motion.div className={rowClassName} variants={rowVariants}>
          {characters.map((character, index) => (
            <span key={`bottom-wrap-${index}`} className="relative overflow-hidden" style={letterClipStyle}>
              <motion.span className={letterClassName} style={letterLineStyle} variants={bottomLetterVariants}>
                {character === ' ' ? '\u00A0' : character}
              </motion.span>
            </span>
          ))}
        </motion.div>
      </span>
    </>
  );
}

function RollingArrowIcon() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden" style={{ width: 20.035, height: 20.035 }}>
      <div className="opacity-0">
        <Frame />
      </div>
      <motion.div
        className="absolute inset-0 flex flex-col"
        variants={{
          hidden: { y: '0%' },
          visible: { y: '0%', transition: { duration: ROLLING_TEXT_DURATION, ease: ROLLING_TEXT_EASE } },
          hover: { y: '-50%', transition: { duration: ROLLING_TEXT_DURATION, ease: ROLLING_TEXT_EASE } },
        }}
      >
        <div className="flex h-[20.035px] items-center justify-center">
          <Frame />
        </div>
        <div className="flex h-[20.035px] items-center justify-center">
          <Frame />
        </div>
      </motion.div>
    </div>
  );
}

function Cta2({ introActive }: { introActive: boolean }) {
  const reduced = useReducedMotion();

  const scrollToOffres = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToOffres}
      className="bg-white content-stretch flex gap-[8.014px] items-center justify-center overflow-hidden px-[30px] py-[15px] relative rounded-[10016.271px] shadow-[0px_4.007px_3.005px_-4.007px_rgba(0,0,0,0.5)] shrink-0 cursor-pointer border-0"
      data-name="CTA"
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.18 } },
        hover: {},
      }}
      initial="hidden"
      animate={introActive ? "visible" : "hidden"}
      whileHover={reduced ? undefined : 'hover'}
    >
      <div className="flex flex-col font-['Neue_Montreal:Bold',sans-serif] font-[500] justify-center leading-[0] not-italic relative shrink-0 text-[16.028px] text-black text-center tracking-[-0.3206px] whitespace-nowrap">
        {reduced ? <p className="leading-[1.2]">Voir nos offres</p> : <RollingTextLabel text="Voir nos offres" />}
      </div>
      <div>
        {reduced ? <Frame /> : <RollingArrowIcon />}
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_3.005px_2.003px_rgba(255,255,255,0.2),inset_0px_0px_12.021px_4.007px_rgba(255,255,255,0.13)]" />
    </motion.button>
  );
}

function CtaRealisations({ introActive }: { introActive: boolean }) {
  const reduced = useReducedMotion();

  const scrollToRealisations = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('[data-name="Réalisations"]')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToRealisations}
      className="relative flex items-center justify-center gap-[8.014px] cursor-pointer border-0 bg-transparent shrink-0 overflow-hidden"
      style={{ width: 236.05, height: 50.03 }}
      data-name="CTA Réalisations"
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      animate={introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 20 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.28 }}
    >
      {/* CTA.svg background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="size-full" viewBox="0 0 236.048 50.0345" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g filter="url(#ctaBgFilter)">
            <path d="M0 25.0173C0 11.2006 11.2006 0 25.0173 0H211.031C224.848 0 236.048 11.2006 236.048 25.0173V25.0173C236.048 38.8339 224.848 50.0345 211.031 50.0345H25.0173C11.2006 50.0345 0 38.8339 0 25.0173V25.0173Z" fill="white" fillOpacity="0.08"/>
          </g>
          <defs>
            <filter id="ctaBgFilter" x="0" y="0" width="236.048" height="50.0345" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="4.00691" operator="erode" in="SourceAlpha" result="effect1_innerShadow"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="6.01036"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2.00345" operator="erode" in="SourceAlpha" result="effect2_innerShadow"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="1.50259"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="relative flex flex-col font-['Neue_Montreal:Bold',sans-serif] font-[500] justify-center leading-[0] not-italic text-[16.028px] text-white text-center tracking-[-0.3206px] whitespace-nowrap">
        <p className="leading-[1.2]">Voir nos réalisations</p>
      </div>
      <div className="relative">
        <Frame1 />
      </div>
    </motion.button>
  );
}

function Left({ introActive }: { introActive: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-end relative shrink-0" data-name="Left">
      <Frame12 introActive={introActive} />
      <div className="flex items-center gap-[32px]">
        <Cta2 introActive={introActive} />
        <CtaRealisations introActive={introActive} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[20.035px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0345 20.0345">
        <g id="Frame">
          <path d="M4.17403 10.0167H15.8609" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
          <path d={svgPaths.p1f68d700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[10.017px] items-center relative shrink-0 w-full" data-name="1">
      <Frame1 />
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[20.035px] tracking-[-0.4007px] w-[522.902px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[1.5]">{`Pas d’IA  `}</span>
          <span className="font-['Neue_Montreal:Medium',sans-serif] leading-[1.5] not-italic">·</span>
          <span className="leading-[1.5]">{`  100% sur-mesure`}</span>
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[1.002px] shrink-0 w-full" data-name="Divider" />;
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20.035px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0345 20.0345">
        <g id="Frame">
          <path d="M4.17403 10.0174H15.8609" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
          <path d={svgPaths.p1de86500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[10.017px] items-center relative shrink-0 w-full" data-name="2">
      <Frame2 />
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[20.035px] tracking-[-0.4007px] w-[522.902px]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`Identités  ·  Landing pages  ·  SaaS  ·  E-commerce`}</p>
      </div>
    </div>
  );
}

function Divider1() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[1.002px] shrink-0 w-full" data-name="Divider" />;
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[20.035px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0345 20.0345">
        <g id="Frame">
          <path d="M4.17403 10.0174H15.8609" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
          <path d={svgPaths.p11e20f00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[10.017px] items-center relative shrink-0 w-full" data-name="3">
      <Frame3 />
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[20.035px] tracking-[-0.4007px] w-[522.902px]">
        <p className="leading-[1.5]">Pensé pour convertir, conçu pour marquer</p>
      </div>
    </div>
  );
}

function Divider2() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[1.002px] shrink-0 w-full" data-name="Divider" />;
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20.035px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0345 20.0345">
        <g id="Frame">
          <path d="M4.17403 10.0175H15.8609" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
          <path d={svgPaths.p1365dc00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[10.017px] items-center relative shrink-0 w-full" data-name="4">
      <Frame4 />
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[20.035px] tracking-[-0.4007px] w-[522.902px]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`Qualité  ·  Exigence  ·  Obsession du détail`}</p>
      </div>
    </div>
  );
}

function Divider3() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[1.002px] shrink-0 w-full" data-name="Divider" />;
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[10.017px] items-start relative shrink-0 w-full" data-name="Features">
      <Component />
      <Divider />
      <Component1 />
      <Divider1 />
      <Component2 />
      <Divider2 />
      <Component3 />
      <Divider3 />
    </div>
  );
}

function Right({ introActive }: { introActive: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[477.824px]"
      data-name="Right"
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      animate={introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.36 }}
    >
      <Features />
    </motion.div>
  );
}

function Content({ introActive }: { introActive: boolean }) {
  return (
    <div className="max-w-[1606.7705078125px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[50px] relative w-full">
          <Left introActive={introActive} />
          <Right introActive={introActive} />
        </div>
      </div>
    </div>
  );
}

function Hero({ introActive }: { introActive: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="content-stretch flex flex-col h-[700px] items-center justify-end overflow-clip pb-[64.111px] relative rounded-[32.055px] shrink-0 w-[1400px] border border-black"
      data-name="Hero"
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      animate={introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0 }}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute w-full h-auto left-0" src={imgHero} decoding="async" fetchPriority="high" style={{ top: '' }} />
        <div className="absolute bg-gradient-to-b from-[45%] from-[rgba(2,2,2,0)] inset-0 to-black" />
      </div>
      <Content introActive={introActive} />
    </motion.div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[60.104px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1378.377px_60.104px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <div className="absolute inset-y-[23.33%] left-[9.598%] right-[9.598%] flex items-center justify-center">
        <MarqueeLogo
          src={imgWiccaLogo}
          alt="Wicca"
          className={MARQUEE_LOGO_CLASS_LARGE}
        />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[60.104px] left-[229.4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-229.396px_0px] mask-size-[1378.377px_60.104px] overflow-clip top-0 w-[180.311px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <div className="absolute inset-y-[23.33%] left-[9.598%] right-[9.598%] flex items-center justify-center">
        <MarqueeLogo
          src={imgSkapeMarqueeLogo}
          alt="Skape"
          className={MARQUEE_LOGO_CLASS_LARGE}
        />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[60.104px] left-[457.79px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-457.79px_0px] mask-size-[1378.377px_60.104px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <div className="absolute inset-y-[23.33%] left-[9.598%] right-[9.598%] flex items-center justify-center">
        <MarqueeLogo
          src={imgMotionzMarqueeLogo}
          alt="Motionz"
          className={`${MARQUEE_LOGO_CLASS_LARGE} -translate-x-[15%]`}
        />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[60.104px] left-[687.19px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-687.185px_0px] mask-size-[1378.377px_60.104px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <div className="absolute inset-y-[23.33%] left-[9.598%] right-[9.598%] flex items-center justify-center">
        <MarqueeLogo
          src={imgMindscalelLogo}
          alt="Mindscale"
          className={MARQUEE_LOGO_CLASS}
        />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[60.104px] left-[916.58px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-916.581px_0px] mask-size-[1378.377px_60.104px] top-0 w-[180.311px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <div className="absolute inset-y-[23.33%] left-[9.598%] right-[9.598%] flex items-center justify-center">
        <MarqueeLogo
          src={imgArtdelapierreLogo}
          alt="Art de la Pierre"
          className={MARQUEE_LOGO_CLASS_TALL}
          maskPosition="center"
          maskSize="auto 100%"
        />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[60.104px] left-[1144.97px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1144.974px_0px] mask-size-[1378.377px_60.104px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <div className="absolute inset-y-[23.33%] left-[9.598%] right-[9.598%] flex items-center justify-center">
        <MarqueeLogo
          src={imgTanbabeLogo}
          alt="Tanbabe"
          className={`${MARQUEE_LOGO_CLASS_LARGE} -translate-x-[1px]`}
        />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[60.104px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1168.37px_0px] mask-size-[1378.377px_60.104px] right-[-178.08px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <div className="absolute inset-y-[23.33%] left-[9.598%] right-[9.598%] flex items-center justify-center">
        <MarqueeLogo
          src={imgSinlineLogo}
          alt="Sinline"
          className={MARQUEE_LOGO_CLASS_LARGE}
          maskPosition="center"
          maskSize="auto 172%"
        />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative h-[60.104px] w-[1378.377px] shrink-0 overflow-clip" aria-hidden="true">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Logos1() {
  return (
    <div className="logo-marquee-fade flex-[1_0_0] h-[60.104px] min-h-px min-w-px overflow-clip relative" data-name="logos">
      <div className="flex flex-row h-full will-change-transform" style={{ animation: 'marquee-right 25s linear infinite' }}>
        <Group3 />
        <Group3 />
      </div>
    </div>
  );
}

function Logos({ introActive }: { introActive: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="max-w-[1606.7705078125px] relative shrink-0 w-full"
      data-name="Logos"
      initial={{ opacity: 0, y: reduced ? 0 : 22 }}
      animate={introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 22 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.56 }}
    >
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[32.055px] items-center max-w-[inherit] pb-[10.017px] pt-[32.055px] px-[32.055px] relative w-full">
          <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-semibold justify-center leading-[0] max-w-[1202.07275390625px] not-italic relative shrink-0 text-[14.024px] text-[rgba(44,44,44,0.6)] tracking-[-0.2805px] w-[132.228px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
            <p className="leading-[1.4]">{`Trusted by world's most exciting brands`}</p>
          </div>
          <Logos1 />
        </div>
      </div>
    </motion.div>
  );
}

function HeroLogos({ introActive }: { introActive: boolean }) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[922px] items-center left-1/2 top-[20px] w-[1400px]" data-name="Hero + Logos">
      <Hero introActive={introActive} />
      <Logos introActive={introActive} />
    </div>
  );
}

export default function Desktop({ introActive = true }: { introActive?: boolean }) {
  const scrollDirection = useScrollDirection();

  return (
    <div className="relative size-full" data-name="Desktop - 144">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />

      </div>
      <NavBar introActive={introActive} />
      <InfinifyMask scrollDirection={scrollDirection} />
      <Footer scrollDirection={scrollDirection} />
      <Cta scrollDirection={scrollDirection} />
      <Realisations />
      <OffresGroupe scrollDirection={scrollDirection} />
      <TeamGroupe scrollDirection={scrollDirection} />
      <HeroLogos introActive={introActive} />
    </div>
  );
}
