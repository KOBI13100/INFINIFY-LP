import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import svgPaths from "./svg-6slkny0mf7";
import imgEarthBackground from "../../EARTH BACKGROUND.svg";
import imgDesktop144 from "../assets/050199014e18c0cb60e9c252c2ef39002648cc6a.png";
import imgLogoInfinify1 from "../assets/bf1d602331298fa70e56da6d7bd2fe71a3de2b7a.png";
import imgCardImage from "../assets/cd7a05401aabdba4cde42cc5ba650095bf45699b.png";
import imgTestimonialImage from "../assets/a77190103db78e6334f030692996578c4825b66d.png";
import imgTestimonialImage1 from "../assets/dec5cbce46710d057f06833cca1d54055e9a4ed5.png";
import imgHero from "../assets/ddfa34054bfd6efd1effd17a798c9746bde8d5f1.png";
import { imgGroup, imgOffres, imgInfinify, imgTeam, imgFrame, imgGroup1 } from "./svg-ithsc";

const SECTION_EASE = [0.16, 1, 0.3, 1] as const;
const SECTION_Y = 56;
const SECTION_DURATION = 0.9;
const SECTION_VIEWPORT = { once: true, amount: 0.35 } as const;
const TEAM_VIEWPORT = { once: true, amount: 0.5 } as const;
const HERO_INTRO_DURATION = 0.8;

function BackgroundContainer() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="absolute -translate-x-1/2 bg-black h-[269.561px] left-1/2 top-[4251.44px] w-[100dvw]"
      data-name="Background Shape"
      initial={{ opacity: 0, y: reduced ? 0 : SECTION_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SECTION_VIEWPORT}
      transition={{ duration: SECTION_DURATION, ease: SECTION_EASE }}
    />
  );
}

function NameAndIcon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Name and Icon">
      <div className="col-1 content-stretch flex gap-[10.318px] h-[44.622px] items-center justify-center ml-0 mt-0 p-[7.738px] pointer-events-none relative rounded-[100px] row-1 w-[124.943px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[32.243px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.903px 0 rgba(255,255,255,0.4), inset 0 -0.903px 0 rgba(255,255,255,0.1), inset 0.903px 0 0 rgba(255,255,255,0.15), inset -0.903px 0 0 rgba(255,255,255,0.15)' }} />
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
      <div className="col-1 flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium justify-center ml-0 mt-[69.92px] overflow-hidden relative row-1 text-[16px] text-[rgba(255,255,255,0.3)] text-ellipsis tracking-[-0.0827px] whitespace-nowrap">
        <p className="leading-[20px]">© 2026 Infinify. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function PoliciesSectionInner() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-center relative row-1" data-name="Policies Section Inner">
      <div className="col-1 content-stretch flex gap-[10.318px] h-[44px] items-center justify-center ml-0 mt-0 p-[7.738px] pointer-events-none relative rounded-[100px] row-1 w-[119px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[32.243px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.903px 0 rgba(255,255,255,0.4), inset 0 -0.903px 0 rgba(255,255,255,0.1), inset 0.903px 0 0 rgba(255,255,255,0.15), inset -0.903px 0 0 rgba(255,255,255,0.15)' }} />
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
      <div className="col-1 content-stretch flex gap-[10.318px] h-[44px] items-center justify-center ml-0 mt-0 p-[7.738px] pointer-events-none relative rounded-[100px] row-1 w-[119px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[32.243px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.903px 0 rgba(255,255,255,0.4), inset 0 -0.903px 0 rgba(255,255,255,0.1), inset 0.903px 0 0 rgba(255,255,255,0.15), inset -0.903px 0 0 rgba(255,255,255,0.15)' }} />
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
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-center w-full">
        <p className="leading-[normal]">LinkedIn</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 w-full">
        <p className="leading-[normal]">Instagram</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-center w-full">
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
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-0 mt-[70.04px] overflow-hidden relative row-1 text-[#6f6f6f] text-[16px] text-ellipsis tracking-[-0.0827px] whitespace-nowrap">
        <p className="leading-[normal]">Mentions Légales</p>
      </div>
      <SocialMediaLinks />
    </div>
  );
}

function ContentGroup() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="-translate-x-1/2 absolute content-stretch flex gap-[620px] items-start leading-[0] left-1/2 top-[4298.87px] w-[1211px]"
      data-name="Content Group"
      initial={{ opacity: 0, y: reduced ? 0 : SECTION_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SECTION_VIEWPORT}
      transition={{ duration: SECTION_DURATION, ease: SECTION_EASE, delay: 0.12 }}
    >
      <ContentColumn />
      <LegalLinks />
    </motion.div>
  );
}

function Footer() {
  return (
    <div className="absolute -translate-x-1/2 left-1/2 top-0 w-[100dvw]" data-name="Footer">
      <BackgroundContainer />
      <ContentGroup />
    </div>
  );
}

function UpMe() {
  return <div className="bg-black h-[439px] rounded-[25px] w-[889px]" data-name="Up Me" />;
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
    <img
      src={imgEarthBackground}
      className="absolute h-[347px] left-[275.5px] rounded-[25px] top-[3380.17px] w-[888px] object-cover"
      data-name="EARTH BACKGROUND"
      alt=""
    />
  );
}

function CallToActionTexts() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] text-center top-[3497.02px] whitespace-nowrap whitespace-pre" data-name="Call to Action Texts">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-bold justify-center leading-[normal] left-[calc(50%-0.5px)] text-[40px] text-white top-[3549.02px] tracking-[0.6px]">
        <p className="mb-0">{`Donnez à votre marque la `}</p>
        <p>présence qu’elle mérite</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center leading-[22px] left-[calc(50%-1px)] text-[#686868] text-[16px] top-[3638.41px]">
        <p className="mb-0">{`Construisons une identité et une expérience digitale capables de `}</p>
        <p>renforcer votre perception, votre crédibilité et votre ambition.</p>
      </div>
    </div>
  );
}

function CallToActionButtonGroup() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 top-[3712.79px]" data-name="Call to Action Button Group">
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
    <div className="absolute contents left-[480.5px] top-[3497.02px]" data-name="Call to Action Container">
      <CallToActionTexts />
      <CallToActionButtonGroup />
    </div>
  );
}

function TestimonialName() {
  return (
    <div className="absolute contents left-[571px] top-[3441.87px]" data-name="Testimonial Name">
      <div className="absolute content-stretch flex gap-[8.093px] h-[36px] items-center justify-center left-[571px] p-[6.07px] pointer-events-none rounded-[100px] top-[3441.87px] w-[298px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[25.29px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.708px 0 rgba(255,255,255,0.4), inset 0 -0.708px 0 rgba(255,255,255,0.1), inset 0.708px 0 0 rgba(255,255,255,0.15), inset -0.708px 0 0 rgba(255,255,255,0.15)' }} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+14.83px)] text-[14.112px] text-center text-white top-[3459.57px] whitespace-nowrap">
        <p className="leading-[normal]">Prêt à passer à la vitesse supérieure ?</p>
      </div>
    </div>
  );
}

function TestimonialInfo() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[3441.87px]" data-name="Testimonial Info">
      <TestimonialName />
      <div className="absolute left-[577.92px] size-[25.834px] top-[3446.39px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8335 25.8335">
          <circle cx="12.9168" cy="12.9168" fill="var(--fill-0, #0D0D0D)" id="Ellipse 46954" r="12.9168" />
        </svg>
      </div>
      <div className="absolute h-[9.314px] left-[583.63px] top-[3454.65px] w-[14.411px]" data-name="Logo Infinify 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.86%] left-[-6.67%] max-w-none top-[-17.73%] w-[114.53%]" src={imgLogoInfinify1} />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  const ctaTriggerRef = useRef<HTMLDivElement | null>(null);
  const isCtaInView = useInView(ctaTriggerRef, { once: true, amount: 0.7 });
  const reduced = useReducedMotion();
  return (
    <>
      <div
        aria-hidden="true"
        className="-translate-x-1/2 absolute h-[439px] left-1/2 pointer-events-none top-[3380.17px] w-[889px]"
        ref={ctaTriggerRef}
      />
      <motion.div
        className="absolute left-0 top-0 w-full"
        data-name="CTA"
        initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
        animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
        transition={{ duration: CARD_DURATION, ease: CARD_EASE }}
      >
        <div className="absolute flex h-[439px] items-center justify-center left-[275.5px] top-[3380.17px] w-[889px]">
          <div className="flex-none rotate-180">
            <UpMe />
          </div>
        </div>
        <EarthBackground />
        <CallToActionContainer />
        <TestimonialInfo />
      </motion.div>
    </>
  );
}

// ─── Carousel data & variants ────────────────────────────────────────────────

interface CarouselProject {
  id: number;
  image: string;
  brandContent?: React.ReactNode; // custom logo; falls back to brandLabel text
  brandLabel: string;
  tags: Array<{ label: string; icon: 'page' | 'building' }>;
  description: string;
}

// Mindscale logo pill — exact replica of the original design
function MindscalePill() {
  return (
    <div className="relative rounded-[20.041px] bg-[#0e0e0e]" style={{ width: 136.82, height: 40.082 }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative mask-alpha mask-intersect mask-no-clip mask-no-repeat"
          style={{
            width: 97.52,
            height: 10.669,
            maskImage: `url('${imgGroup}')`,
            maskSize: '97.52px 10.669px',
            maskPosition: '-0.316px -0.069px',
          }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.8878 10.5744">
            <path d={svgPaths.p2c1f7d80} fill="white" />
            <path d={svgPaths.p2e09c700} fill="#D52121" />
            <path d={svgPaths.p39f52b00} fill="#D52121" />
            <path d={svgPaths.p1c2f3000} fill="#B70F0F" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const CAROUSEL_PROJECTS: CarouselProject[] = [
  {
    id: 0,
    image: imgCardImage,
    brandContent: <MindscalePill />,
    brandLabel: 'MINDSCALE',
    tags: [
      { label: 'Landing page', icon: 'page' },
      { label: 'Agence',       icon: 'building' },
    ],
    description: "Mindscale est une entreprise spécialisée dans l’optimisation\ndes tunnels de vente grâce à l’intelligence comportementale et à l’IA.",
  },
  {
    id: 1,
    image: imgCardImage,
    brandLabel: 'INFINIFY',
    tags: [
      { label: 'Identité visuelle', icon: 'page' },
      { label: 'Branding',          icon: 'building' },
    ],
    description: "Version test 1 : même visuel Mindscale pour évaluer\nla lisibilité du texte dans le carrousel.",
  },
  {
    id: 2,
    image: imgCardImage,
    brandLabel: 'E-COMMERCE',
    tags: [
      { label: 'E-commerce', icon: 'page' },
      { label: 'SaaS',       icon: 'building' },
    ],
    description: "Version test 2 : même image, texte alternatif pour\ncomparer l’équilibre visuel sur deux lignes.",
  },
];

const TOP_FRAME = { left: 43.22, top: 0, width: 405.781, height: 142.187 };
const CENTER_FRAME = { left: 0, top: 157.14, width: 482.868, height: 291.353 };
const BOTTOM_FRAME = { left: 38.54, top: 463.44, width: 405.781, height: 142.19 };

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

function CarouselTag({ label, icon }: { label: string; icon: 'page' | 'building' }) {
  return (
    <div className="inline-flex items-center gap-[3px] bg-[rgba(0,92,236,0.1)] rounded-[11.904px] px-[9.83px] py-[5.59px]">
      {icon === 'page' ? <CarouselTagIconPage /> : <CarouselTagIconBuilding />}
      <span className="font-['Neue_Montreal:Medium',sans-serif] font-medium text-[#005cec] text-[10px] leading-none whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

// ─── Realisations carousel ───────────────────────────────────────────────────

function Realisations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CAROUSEL_PROJECTS.length;

  const go = (delta: number) => {
    if (total < 2) return;
    setActiveIndex(i => (i + delta + total) % total);
  };

  const project = CAROUSEL_PROJECTS[activeIndex];
  const previousProject = CAROUSEL_PROJECTS[(activeIndex - 1 + total) % total];
  const nextProject = CAROUSEL_PROJECTS[(activeIndex + 1) % total];

  return (
    <div className="absolute" style={{ left: 166.28, top: 1472.03, width: 957, height: 606 }} data-name="Réalisations">

      {/* Cards stack */}
      <div className="absolute inset-0">
        <div
          className="absolute overflow-hidden pointer-events-none rounded-tl-[15px] rounded-tr-[15px]"
          style={{ left: TOP_FRAME.left, top: TOP_FRAME.top, width: TOP_FRAME.width, height: TOP_FRAME.height }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={previousProject.image} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(209,209,209,0.88)] to-[rgba(255,255,255,0)]" />
        </div>

        <div
          className="absolute overflow-hidden pointer-events-none rounded-[15px] bg-[#0e0e0e]"
          style={{ left: CENTER_FRAME.left, top: CENTER_FRAME.top, width: CENTER_FRAME.width, height: CENTER_FRAME.height }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={project.image} loading="lazy" decoding="async" />
          <div className="absolute inset-0 shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
        </div>

        <div
          className="absolute overflow-hidden pointer-events-none rounded-bl-[15px] rounded-br-[15px]"
          style={{ left: BOTTOM_FRAME.left, top: BOTTOM_FRAME.top, width: BOTTOM_FRAME.width, height: BOTTOM_FRAME.height }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={nextProject.image} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(209,209,209,0.88)] to-[rgba(255,255,255,0)]" />
        </div>
      </div>

      {/* Chevrons — pill wrapping both buttons */}
      <div
        className="absolute overflow-hidden rounded-[100px]"
        style={{ left: 523.65, top: 261.75, width: 42.344, height: 82.122 }}
      >
        {/* Frosted pill background */}
        <div aria-hidden="true" className="absolute inset-0 backdrop-blur-[30px] bg-[#d9d9d9] mix-blend-luminosity pointer-events-none" />

        {/* Buttons stacked inside pill */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-[4.908px]">

          {/* Prev (up) */}
          <button
            onClick={() => go(-1)}
            className="relative cursor-pointer flex-none"
            style={{ width: 28.502, height: 28.502 }}
            aria-label="Précédent"
          >
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 28.5016 28.5016">
              <circle cx="14.2508" cy="14.2508" fill="white" r="14.2508" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M1 5L4.5 1.5L8 5" stroke="#0E0E0E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          {/* Next (down) */}
          <button
            onClick={() => go(1)}
            className="relative cursor-pointer flex-none"
            style={{ width: 28.502, height: 28.502 }}
            aria-label="Suivant"
          >
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

      <div className="absolute flex flex-col" style={{ left: 606.44, top: 195.1 }}>
        {project.brandContent ?? (
          <div className="relative flex items-center justify-center rounded-[20.041px] bg-[#0e0e0e]" style={{ width: 136.82, height: 40.082 }}>
            <span className="font-['Geist:SemiBold',sans-serif] font-semibold text-white text-[11px] tracking-[0.05em] whitespace-nowrap">
              {project.brandLabel}
            </span>
          </div>
        )}
        <div className="flex gap-[6px] items-center" style={{ marginTop: 21.48 }}>
          {project.tags.map(tag => (
            <CarouselTag key={tag.label} label={tag.label} icon={tag.icon} />
          ))}
        </div>
        <div
          className="font-['Neue_Montreal:Regular',sans-serif] font-normal text-[#686868] text-[16px] leading-[22px]"
          style={{ marginTop: 21.29 }}
        >
          {project.description.split('\n').map((line, index) => (
            <p key={`${project.id}-desc-${index}`} className={index === 0 ? 'mb-0 whitespace-nowrap' : 'whitespace-nowrap'}>
              {line}
            </p>
          ))}
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
      <div className="bg-[rgba(0,92,236,0.1)] col-1 h-[24.174px] ml-0 mt-0 rounded-[11.904px] row-1 w-[99.348px]" />
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
      <div className="bg-[rgba(0,92,236,0.1)] col-1 h-[24.174px] ml-0 mt-0 rounded-[11.904px] row-1 w-[72.789px]" />
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

function MaskGroup({ animateIn }: { animateIn: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="-translate-x-1/2 absolute h-[353px] left-1/2 top-[2117.32px] w-[897px]"
      data-name="Mask Group"
      initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
      animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
      transition={{ duration: SECTION_DURATION + 0.05, ease: SECTION_EASE }}
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
        <div aria-hidden="true" className="absolute border-[0.801px] border-[rgba(255,255,255,0.4)] border-solid inset-0 rounded-[100px]" />
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

function Title() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-center relative shrink-0" data-name="Title">
      <div className="col-1 content-stretch flex gap-[7.828px] h-[34.437px] items-center justify-center ml-0 mt-0 p-[5.871px] pointer-events-none relative rounded-[100px] row-1 w-[112.704px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[24.461px] bg-white inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute border-[0.685px] border-[rgba(255,255,255,0.4)] border-solid inset-0 rounded-[100px]" />
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium justify-center relative row-1 text-[#0e0e0e] text-[12.078px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Landing Page</p>
      </div>
    </div>
  );
}

function ECommerceText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-center relative shrink-0" data-name="E-commerce Text">
      <div className="col-1 content-stretch flex gap-[7.828px] h-[34.509px] items-center justify-center ml-0 mt-0 p-[5.871px] pointer-events-none relative rounded-[100px] row-1 w-[130.915px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[24.461px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute border-[0.685px] border-[rgba(255,255,255,0.4)] border-solid inset-0 rounded-[100px]" />
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center relative row-1 text-[12.078px] text-[rgba(255,255,255,0.65)] text-center whitespace-nowrap">
        <p className="leading-[normal]">Site E-commerce</p>
      </div>
    </div>
  );
}

function BrandIdentityText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-center relative shrink-0" data-name="Brand Identity Text">
      <div className="col-1 content-stretch flex gap-[7.828px] h-[34.437px] items-center justify-center ml-0 mt-0 p-[5.871px] pointer-events-none relative rounded-[100px] row-1 w-[118.965px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[24.461px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute border-[0.685px] border-[rgba(255,255,255,0.4)] border-solid inset-0 rounded-[100px]" />
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center relative row-1 text-[12.078px] text-[rgba(255,255,255,0.65)] text-center whitespace-nowrap">
        <p className="leading-[normal]">Identité visuelle</p>
      </div>
    </div>
  );
}

function SaaSText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-center relative shrink-0" data-name="SaaS Text">
      <div className="col-1 content-stretch flex gap-[7.828px] h-[34.437px] items-center justify-center ml-0 mt-0 p-[5.871px] pointer-events-none relative rounded-[100px] row-1 w-[62.613px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[24.461px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute border-[0.685px] border-[rgba(255,255,255,0.4)] border-solid inset-0 rounded-[100px]" />
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center relative row-1 text-[12.078px] text-[rgba(255,255,255,0.65)] text-center whitespace-nowrap">
        <p className="leading-[normal]">SaaS</p>
      </div>
    </div>
  );
}

function OfferTitlesGroup() {
  return (
    <div className="col-1 content-stretch flex gap-[6.261px] h-[42px] items-center ml-0 mt-0 relative row-1 w-[444.919px]" data-name="Offer Titles Group">
      <Title />
      <ECommerceText />
      <BrandIdentityText />
      <SaaSText />
    </div>
  );
}

function OfferTitle() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-222.46px)] mt-[7.21px] place-items-start relative row-1" data-name="Offer Title">
      <OfferTitlesGroup />
    </div>
  );
}

function OfferTitleBackground() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33.43px] mt-[39.08px] place-items-start relative row-1" data-name="Offer Title Background">
      <OfferTitleBackground1 />
      <OfferTitle />
    </div>
  );
}

function OfferOptionsBackground() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Offer Options Background">
      <div className="bg-[#0e0e0e] col-1 h-[408.093px] ml-0 mt-0 relative rounded-tl-[20px] rounded-tr-[20px] row-1 w-[534.581px]" data-name="Offer Options Background">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
      </div>
      <ReserveCallGroup />
      <OfferTitleBackground />
    </div>
  );
}

function OfferTitle1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[198px]" data-name="Offer Title">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f8f8] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Cliquez sur l’offre de votre choix pour voir les détails</p>
      </div>
    </div>
  );
}

function CustomPageDescription() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[198px]" data-name="Custom Page Description">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#888] text-[16px] text-center whitespace-nowrap">
        <p className="mb-0">Une page unique sur mesure, conçue pour capter</p>
        <p>l’attention, renforcer ta crédibilité et convertir davantage.</p>
      </div>
    </div>
  );
}

function OfferDescriptionText() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0" data-name="Offer Description Text">
      <OfferTitle1 />
      <CustomPageDescription />
    </div>
  );
}

function PriceAndSymbol() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Price and Symbol">
      <div className="col-1 content-stretch flex gap-[8.331px] h-[36.73px] items-center justify-center ml-0 mt-0 p-[6.249px] pointer-events-none relative rounded-[7.346px] row-1 w-[97.335px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[26.036px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[7.346px]" />
        <div aria-hidden="true" className="absolute border-[0.729px] border-[rgba(255,255,255,0.4)] border-solid inset-0 rounded-[7.346px]" />
      </div>
      <div className="col-1 flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center ml-[14.69px] mt-[9.64px] relative row-1 text-[14.528px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>
          <span className="leading-[normal]">{`1990€ `}</span>
          <span className="leading-[normal] text-[rgba(255,255,255,0.6)]">HT</span>
        </p>
      </div>
    </div>
  );
}

function PriceGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Price Group">
      <PriceAndSymbol />
    </div>
  );
}

function PriceAndOptions() {
  return (
    <div className="content-stretch flex gap-[11px] items-center leading-[0] relative shrink-0 w-full" data-name="Price and Options">
      <PriceGroup />
      <div className="flex flex-col font-['SF_Pro:Ultralight',sans-serif] font-[30.925003051757812] justify-center relative shrink-0 text-[#7c7c7c] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">︱</p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#dbdbdb] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Payable en plusieurs fois</p>
      </div>
    </div>
  );
}

function OfferDescriptionGroup() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[30px] h-[177px] items-center ml-[129.29px] mt-[114.29px] relative rounded-tl-[20px] rounded-tr-[20px] row-1 w-[276px]" data-name="Offer Description Group">
      <OfferDescriptionText />
      <PriceAndOptions />
    </div>
  );
}

function OfferDetails() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Offer Details">
      <OfferOptionsBackground />
      <OfferDescriptionGroup />
    </div>
  );
}

function OfferOptions() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[2406.12px]" data-name="Offer Options">
      <OfferDetails />
    </div>
  );
}

function BenefitText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Benefit Text">
      <div className="col-1 h-[20px] ml-0 mt-[0.11px] relative row-1 w-[21px]" data-name="mdi:tick">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-[20px] ml-0 mt-[0.11px] relative row-1 w-[21px]" data-name="Tick Icon">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[38.04px] mt-0 relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">{`Branding & direction artistique sur-mesure`}</p>
      </div>
    </div>
  );
}

function BenefitText1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Benefit Text">
      <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[21px]" data-name="Tick Icon">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[41.5px] mt-[2px] relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Wireframe + UX/UI Figma</p>
      </div>
    </div>
  );
}

function BenefitText2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Benefit Text">
      <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[21px]" data-name="Tick Icon">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[41.5px] mt-[2px] relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Copywriting stratégique</p>
      </div>
    </div>
  );
}

function BenefitText3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Benefit Text">
      <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[21px]" data-name="Tick Icon">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[41.5px] mt-[2px] relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Développement pixel-perfect</p>
      </div>
    </div>
  );
}

function BenefitText4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Benefit Text">
      <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[21px]" data-name="Tick Icon">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[41.5px] mt-[2px] relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">{`Animations premium & micro-interactions`}</p>
      </div>
    </div>
  );
}

function BenefitText5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Benefit Text">
      <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[21px]" data-name="Tick Icon">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[41.5px] mt-[2px] relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Optimisation du Taux de Conversion (CRO)</p>
      </div>
    </div>
  );
}

function BenefitText6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Benefit Text">
      <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[21px]" data-name="Tick Icon">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[41.5px] mt-[2px] relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Optimisation SEO</p>
      </div>
    </div>
  );
}

function BenefitText7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Benefit Text">
      <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[21px]" data-name="Tick Icon">
        <div className="absolute inset-[17.38%_16.47%_15.57%_0.19%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.41">
            <path d={svgPaths.p26b70600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Neue_Montreal:Regular',sans-serif] font-normal justify-center ml-[41.5px] mt-[2px] relative row-1 text-[#0e0e0e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">{`Révisions illimitées `}</p>
      </div>
    </div>
  );
}

function BenefitItemContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start leading-[0] min-h-px min-w-px relative" data-name="Benefit Item Container">
      <BenefitText />
      <BenefitText1 />
      <BenefitText2 />
      <BenefitText3 />
      <BenefitText4 />
      <BenefitText5 />
      <BenefitText6 />
      <BenefitText7 />
    </div>
  );
}

function BenefitItem() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[350px]" data-name="Benefit Item">
      <BenefitItemContainer />
    </div>
  );
}

function BenefitsList() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[406px] items-start left-[453px] pb-[35px] pl-[40px] pr-[150px] pt-[40px] rounded-bl-[20px] rounded-br-[20px] top-[2814.41px] w-[534px]" data-name="Benefits List">
      <BenefitItem />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(104,104,104,0.25)]" />
    </div>
  );
}

function BenefitsSection({ animateIn }: { animateIn: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="absolute left-0 top-0 w-full"
      data-name="Benefits Section"
      initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
      animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : CARD_Y }}
      transition={{ duration: CARD_DURATION, ease: CARD_EASE, delay: 0.4 }}
    >
      <OfferOptions />
      <BenefitsList />
    </motion.div>
  );
}

function Offres({ animateIn }: { animateIn: boolean }) {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[2406.12px]" data-name="Offres">
      <BenefitsSection animateIn={animateIn} />
    </div>
  );
}

function OffresGroupe() {
  const offersTriggerRef = useRef<HTMLDivElement | null>(null);
  const isOffersInView = useInView(offersTriggerRef, { once: true, amount: 0.7 });

  return (
    <>
      <div
        aria-hidden="true"
        className="-translate-x-1/2 absolute h-[695px] left-1/2 pointer-events-none top-[2117.32px] w-[897px]"
        ref={offersTriggerRef}
      />
      <div className="-translate-x-1/2 absolute contents left-1/2 top-[2117.32px]" data-name="Offres Groupe">
        <MaskGroup animateIn={isOffersInView} />
        <Offres animateIn={isOffersInView} />
      </div>
    </>
  );
}

function InfinifyMask() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="-translate-x-1/2 absolute h-[353px] left-[calc(50%-3.55px)] top-[3921.3px] w-[1057px]"
      data-name="Infinify Mask"
      initial={{ opacity: 0, y: reduced ? 0 : SECTION_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SECTION_VIEWPORT}
      transition={{ duration: SECTION_DURATION + 0.05, ease: SECTION_EASE }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[528.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-19.5px_0px] mask-size-[1056.66px_353.049px] text-[#d8d8d8] text-[300px] text-center top-[195px] whitespace-nowrap" style={{ maskImage: `url('${imgInfinify}')` }}>
        <p className="leading-[normal]">Infinify</p>
      </div>
    </motion.div>
  );
}

function TeamMask() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="absolute h-[353px] left-[335.5px] top-[827.37px] w-[769px]"
      data-name="Team Mask"
      initial={{ opacity: 0, y: reduced ? 0 : SECTION_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={TEAM_VIEWPORT}
      transition={{ duration: SECTION_DURATION + 0.05, ease: SECTION_EASE }}
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
      <div className="absolute content-stretch flex gap-[8.093px] h-[35.678px] items-center justify-center left-[165.05px] p-[6.07px] pointer-events-none rounded-[100px] top-[32px] w-[156.092px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[25.29px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.708px 0 rgba(255,255,255,0.4), inset 0 -0.708px 0 rgba(255,255,255,0.1), inset 0.708px 0 0 rgba(255,255,255,0.15), inset -0.708px 0 0 rgba(255,255,255,0.15)' }} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-135.33px)] text-[14.112px] text-center text-white top-[49.21px] whitespace-nowrap">
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-161.21px)] text-[#b1b1b1] text-[16px] text-center top-[94.03px] whitespace-nowrap">
        <p className="leading-[normal]">Fondateur Infinify</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-185.06px)] text-[#b1b1b1] text-[16px] text-center top-[120.25px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>
          <span className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] text-[#b1b1b1]">{`&`}</span>
          <span className="font-['Geist:Regular',sans-serif] font-normal leading-[normal]">{` `}</span>
          <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] text-white">Designer</span>
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
      <div className="absolute content-stretch flex gap-[9.073px] h-[40px] items-center justify-center left-[428.68px] p-[6.805px] pointer-events-none rounded-[100px] top-[32px] w-[198px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[28.353px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.794px 0 rgba(255,255,255,0.4), inset 0 -0.794px 0 rgba(255,255,255,0.1), inset 0.794px 0 0 rgba(255,255,255,0.15), inset -0.794px 0 0 rgba(255,255,255,0.15)' }} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+152.17px)] text-[15.821px] text-center text-white top-[51.84px] whitespace-nowrap">
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+145.47px)] text-[#b1b1b1] text-[16px] text-center top-[94.03px] whitespace-nowrap">
        <p className="leading-[normal]">Co-fondateur Infinify</p>
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+168.47px)] text-[#b1b1b1] text-[16px] text-center top-[120.25px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>
          <span className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] text-[#b1b1b1]">{`&`}</span>
          <span className="font-['Geist:Regular',sans-serif] font-normal leading-[normal]">{` `}</span>
          <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] text-white">Développeur</span>
        </p>
      </div>
    </div>
  );
}

// Timing constants — adjust here to tune the feel
const CARD_EASE = [0.16, 1, 0.3, 1] as const;
const CARD_DURATION = 0.95;
const CARD_Y = 60;

function Team() {
  const reduced = useReducedMotion();
  return (
    <div className="-translate-x-1/2 absolute h-[240.496px] left-1/2 top-[1117.87px] w-[783.209px]" data-name="Team">
      {/* Card 1 — Oscar VORTICE */}
      <motion.div
        className="absolute left-0 top-0 w-[783.209px] h-full"
        initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={TEAM_VIEWPORT}
        transition={{ duration: CARD_DURATION, ease: CARD_EASE, delay: 0.15 }}
      >
        <TestimonialColumn />
      </motion.div>
      {/* Card 2 — Benjamin BOTELLA */}
      <motion.div
        className="absolute left-0 top-0 w-[783.209px] h-full"
        initial={{ opacity: 0, y: reduced ? 0 : CARD_Y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={TEAM_VIEWPORT}
        transition={{ duration: CARD_DURATION, ease: CARD_EASE, delay: 0.35 }}
      >
        <TestimonialColumn1 />
      </motion.div>
    </div>
  );
}

function TeamGroupe() {
  return (
    <div className="absolute contents left-[328.4px] top-[827.37px]" data-name="Team Groupe">
      <TeamMask />
      <Team />
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[213.08px] mt-[16.43px] overflow-clip px-[20.381px] py-[10.19px] relative rounded-[6804.645px] row-1" data-name="CTA">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.889px] text-black text-center tracking-[-0.2178px] whitespace-nowrap">
        <p className="leading-[1.2]">Réserver un appel</p>
      </div>
    </div>
  );
}

function TestimonialName2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Testimonial Name">
      <div className="col-1 content-stretch flex gap-[8.093px] h-[68.636px] items-center justify-center ml-0 mt-0 p-[6.07px] pointer-events-none relative rounded-[100px] row-1 w-[364.847px] backdrop-blur-[6px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity rounded-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[100px]" style={{ boxShadow: 'inset 0 0.708px 0 rgba(255,255,255,0.4), inset 0 -0.708px 0 rgba(255,255,255,0.1), inset 0.708px 0 0 rgba(255,255,255,0.15), inset -0.708px 0 0 rgba(255,255,255,0.15)' }} />
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

function NavBar() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="fixed left-1/2 -translate-x-1/2 top-[50px] z-[9999]"
      data-name="Nav bar-fixed"
      initial={{ opacity: 0, y: reduced ? 0 : -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.05 }}
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

function Frame12() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0"
      initial={{ opacity: 0, y: reduced ? 0 : 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.22 }}
    >
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[1.1] relative shrink-0 text-[#f0f0f0] text-[55px] tracking-[-1.1px] w-[798.124px]">
        <p className="mb-0">Design stratégique</p>
        <p>pour marques ambitieuses</p>
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0345 20.0345">
        <g id="Frame">
          <path d="M4.17397 10.0175H15.8608" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
          <path d={svgPaths.p29eb7280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66955" />
        </g>
      </svg>
    </div>
  );
}

function Cta2() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="bg-white content-stretch flex gap-[8.014px] items-center justify-center overflow-clip px-[30px] py-[15px] relative rounded-[10016.271px] shadow-[0px_4.007px_3.005px_-4.007px_rgba(0,0,0,0.5)] shrink-0"
      data-name="CTA"
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.4 }}
    >
      <div className="flex flex-col font-['Neue_Montreal:Bold',sans-serif] font-[500] justify-center leading-[0] not-italic relative shrink-0 text-[16.028px] text-black text-center tracking-[-0.3206px] whitespace-nowrap">
        <p className="leading-[1.2]">Voir nos offres</p>
      </div>
      <Frame />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_3.005px_2.003px_rgba(255,255,255,0.2),inset_0px_0px_12.021px_4.007px_rgba(255,255,255,0.13)]" />
    </motion.div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-end relative shrink-0" data-name="Left">
      <Frame12 />
      <Cta2 />
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

function Right() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[477.824px]"
      data-name="Right"
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.58 }}
    >
      <Features />
    </motion.div>
  );
}

function Content() {
  return (
    <div className="max-w-[1606.7705078125px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[50px] relative w-full">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[700px] items-center justify-end overflow-clip pb-[64.111px] relative rounded-[32.055px] shrink-0 w-full" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} decoding="async" fetchPriority="high" />
        <div className="absolute bg-gradient-to-b from-[45%] from-[rgba(2,2,2,0)] inset-0 to-black" />
      </div>
      <Content />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[60.104px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1378.377px_60.104px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.313 60.1036">
        <g id="Frame">
          <path d={svgPaths.p1f3613c0} fill="var(--fill-0, #2C2C2C)" id="Vector" />
          <path d={svgPaths.p1c91c070} fill="var(--fill-0, #2C2C2C)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p333416c0} fill="var(--fill-0, #2C2C2C)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.pae23380} fill="var(--fill-0, #2C2C2C)" id="Vector_4" />
          <path d={svgPaths.p3b012900} fill="var(--fill-0, #2C2C2C)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p2c8fda00} fill="var(--fill-0, #2C2C2C)" fillRule="evenodd" id="Vector_6" />
          <path d={svgPaths.p2d162880} fill="var(--fill-0, #2C2C2C)" id="Vector_7" />
          <path d={svgPaths.p3d7ca480} fill="var(--fill-0, #2C2C2C)" id="Vector_8" />
          <path d={svgPaths.p1c92de00} fill="var(--fill-0, #2C2C2C)" id="Vector_9" />
          <path d={svgPaths.p2a0313b0} fill="var(--fill-0, #2C2C2C)" id="Vector_10" />
          <path d={svgPaths.p46113f0} fill="var(--fill-0, #2C2C2C)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[23.33%_13.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[132.228px_32.055px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.229 32.0553">
        <g id="Group">
          <path d={svgPaths.p3a6e5880} fill="var(--fill-0, #191B18)" id="Vector" />
          <path d={svgPaths.p14c22900} fill="var(--fill-0, #191B18)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[23.33%_13.33%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[60.104px] left-[229.4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-229.396px_0px] mask-size-[1378.377px_60.104px] overflow-clip top-0 w-[180.311px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <ClipPathGroup1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[60.104px] left-[457.79px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-457.79px_0px] mask-size-[1378.377px_60.104px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.313 60.1036">
        <g id="Frame">
          <path d={svgPaths.p153c5b80} fill="var(--fill-0, #191B18)" id="Vector" />
          <path d={svgPaths.p1e35ab00} fill="var(--fill-0, #191B18)" id="Vector_2" />
          <path d={svgPaths.p10d78700} fill="var(--fill-0, #191B18)" id="Vector_3" />
          <path d={svgPaths.p29904400} fill="var(--fill-0, #191B18)" id="Vector_4" />
          <path d={svgPaths.p16e43800} fill="var(--fill-0, #191B18)" id="Vector_5" />
          <path d={svgPaths.p35b0e900} fill="var(--fill-0, #191B18)" id="Vector_6" />
          <path d={svgPaths.pc94bb80} fill="var(--fill-0, #191B18)" id="Vector_7" />
          <path d={svgPaths.p254a1780} fill="var(--fill-0, #191B18)" id="Vector_8" />
          <path d={svgPaths.p14edddf0} fill="var(--fill-0, #191B18)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[60.104px] left-[687.19px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-687.185px_0px] mask-size-[1378.377px_60.104px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.313 60.1036">
        <g id="Frame">
          <path d={svgPaths.p732de00} fill="var(--fill-0, #191B18)" id="Vector" />
          <path d={svgPaths.pc44bb00} fill="var(--fill-0, #191B18)" id="Vector_2" />
          <path d={svgPaths.p1c7ca880} fill="var(--fill-0, #191B18)" id="Vector_3" />
          <path d={svgPaths.p72d000} fill="var(--fill-0, #191B18)" id="Vector_4" />
          <path d={svgPaths.p267dc000} fill="var(--fill-0, #191B18)" id="Vector_5" />
          <path d={svgPaths.p11b92000} fill="var(--fill-0, #191B18)" id="Vector_6" />
          <path d={svgPaths.p1b4e1210} fill="var(--fill-0, #191B18)" id="Vector_7" />
          <path d={svgPaths.p1f03400} fill="var(--fill-0, #191B18)" id="Vector_8" />
          <path d={svgPaths.p36383300} fill="var(--fill-0, #191B18)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[60.104px] left-[916.58px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-916.581px_0px] mask-size-[1378.377px_60.104px] top-0 w-[180.311px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.311 60.1036">
        <g id="Frame">
          <path d={svgPaths.p10904b80} fill="var(--fill-0, #191B18)" id="Vector" />
          <path d={svgPaths.p330f1c00} fill="var(--fill-0, #191B18)" id="Vector_2" />
          <path d={svgPaths.p1a40c2f0} fill="var(--fill-0, #191B18)" id="Vector_3" />
          <path d={svgPaths.p40cc700} fill="var(--fill-0, #191B18)" id="Vector_4" />
          <path d={svgPaths.p2db12320} fill="var(--fill-0, #191B18)" id="Vector_5" />
          <path d={svgPaths.p3ce60980} fill="var(--fill-0, #191B18)" id="Vector_6" />
          <path d={svgPaths.p2adab800} fill="var(--fill-0, #191B18)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[60.104px] left-[1144.97px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1144.974px_0px] mask-size-[1378.377px_60.104px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.313 60.1036">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p30e4db40} fill="var(--fill-0, #191B18)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p2037d300} fill="var(--fill-0, #191B18)" id="Vector_2" />
          <path d={svgPaths.p3b855b00} fill="var(--fill-0, #191B18)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p237b6540} fill="var(--fill-0, #191B18)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p7f0dd80} fill="var(--fill-0, #191B18)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.pb60c000} fill="var(--fill-0, #191B18)" id="Vector_6" />
          <path d={svgPaths.p36799770} fill="var(--fill-0, #191B18)" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p39eef200} fill="var(--fill-0, #191B18)" fillRule="evenodd" id="Vector_8" />
          <path d={svgPaths.p2c44db00} fill="var(--fill-0, #191B18)" id="Vector_9" />
          <path d={svgPaths.p268b8dc0} fill="var(--fill-0, #191B18)" id="Vector_10" />
          <path d={svgPaths.p2d02c400} fill="var(--fill-0, #191B18)" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p2678fa80} fill="var(--fill-0, #191B18)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p16ed3c80} fill="var(--fill-0, #191B18)" fillRule="evenodd" id="Vector_13" />
          <path d={svgPaths.p1c9e8800} fill="var(--fill-0, #191B18)" id="Vector_14" />
          <path d={svgPaths.p3f957740} fill="var(--fill-0, #191B18)" id="Vector_15" />
          <path d={svgPaths.p8ea61f0} fill="var(--fill-0, #191B18)" id="Vector_16" />
          <path d={svgPaths.p233b3900} fill="var(--fill-0, #191B18)" id="Vector_17" />
          <path d={svgPaths.p20b22b00} fill="var(--fill-0, #191B18)" id="Vector_18" />
          <path d={svgPaths.p290cbb00} fill="var(--fill-0, #191B18)" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[60.104px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1168.37px_0px] mask-size-[1378.377px_60.104px] right-[-178.08px] top-0 w-[181.313px]" data-name="Frame" style={{ maskImage: `url('${imgFrame}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.313 60.1036">
        <g id="Frame">
          <path d={svgPaths.p14398200} fill="var(--fill-0, #191B18)" id="Vector" />
          <path d={svgPaths.p18421380} fill="var(--fill-0, #191B18)" id="Vector_2" />
          <path d={svgPaths.p108d3400} fill="var(--fill-0, #191B18)" id="Vector_3" />
          <path d={svgPaths.p1d7b8680} fill="var(--fill-0, #191B18)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p148bef00} fill="var(--fill-0, #191B18)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.p20049b00} fill="var(--fill-0, #191B18)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p2d0db900} fill="var(--fill-0, #191B18)" fillRule="evenodd" id="Vector_7" />
          <path d={svgPaths.pad52b00} fill="var(--fill-0, #191B18)" id="Vector_8" />
          <path d={svgPaths.p21cb1600} fill="var(--fill-0, #191B18)" id="Vector_9" />
          <path d={svgPaths.p31edda00} fill="var(--fill-0, #191B18)" id="Vector_10" />
        </g>
      </svg>
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
    <div className="flex-[1_0_0] h-[60.104px] min-h-px min-w-px overflow-clip relative" data-name="logos">
      <div className="flex flex-row h-full will-change-transform" style={{ animation: 'marquee-right 25s linear infinite' }}>
        <Group3 />
        <Group3 />
      </div>
    </div>
  );
}

function Logos() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="max-w-[1606.7705078125px] relative shrink-0 w-full"
      data-name="Logos"
      initial={{ opacity: 0, y: reduced ? 0 : 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: HERO_INTRO_DURATION, ease: SECTION_EASE, delay: 0.78 }}
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

function HeroLogos() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[922px] items-center left-1/2 top-[21.87px] w-[1400px]" data-name="Hero + Logos">
      <Hero />
      <Logos />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="Desktop - 144">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-7" style={{ backgroundImage: `url('${imgDesktop144}')` }} />
      </div>
      <NavBar />
      <Footer />
      <Cta />
      <Realisations />
      <OffresGroupe />
      <InfinifyMask />
      <TeamGroupe />
      <HeroLogos />
    </div>
  );
}
