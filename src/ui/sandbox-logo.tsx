import React from 'react'
import { GiftIcon } from '@heroicons/react/24/outline'

export default function SandboxLogo () {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <GiftIcon className="h-12 w-12 rotate-[15deg]"/>
      <p className="ml-3 font-[NanumBrush] text-[44px]">놀이터 on Nextjs</p>
    </div>
  )
}
