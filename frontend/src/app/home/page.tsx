"use client";

import UserProfile from "../_components/common/user-profile";
import PlayableMap from "../_components/map/playable-map";

export default function Home() {
	return (
		<div className="relative w-full h-screen overflow-hidden">
			{/* <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-[90%]">
        <NotificationTop
          property1="Default"
          category="meme"
          cta="Share"
          description="our most recent post"
          time="0h"
          title="TokenName"
          collected={false}
          land={false}
          map
          participants={false}
          pool={false}
          tokens
          showNotification
          to="/quest"
          showChips={false}
        />
      </div> */}

			{/* UserProfile */}
			<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50">
				<UserProfile />
			</div>

			<div className="absolute inset-0 z-10">
				<PlayableMap />
			</div>
		</div>
	);
}
