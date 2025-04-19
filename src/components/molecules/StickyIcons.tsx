import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { socialLinks } from "../../utils/data";

const StickyIcons = () => {
    return (
        <aside className="fixed lg:bottom-0 bottom-1/2 left-0 flex flex-col gap-5 items-center bg-gradient-to-t z-40 from-red-500 to-amber-500 rounded-e-lg py-3 px-2">
  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-zinc-900">
    <FacebookLogo size={15} color="currentColor" weight="fill" />
  </a>
  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-zinc-900">
    <TwitterLogo size={15} color="currentColor" weight="fill" />
  </a>
  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-zinc-900">
    <YoutubeLogo size={15} color="currentColor" weight="fill" />
  </a>
  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-zinc-900">
    <InstagramLogo size={15} color="currentColor" weight="fill" />
  </a>
</aside>
    )
}

export default StickyIcons