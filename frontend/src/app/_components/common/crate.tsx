"use client";
import React, { useState } from "react";
import RainbowBorderComponent from "./rainbow-border";
import Image from "next/image";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import CrateCard from "./crate-card";

interface CrateProps {
	className?: string;
	price?: string;
	tokens?: string;
	type?: "Small" | "Medium" | "Large";
}

export default function Crate({
	className = "",
	price = "100",
	tokens = "1",
	type = "Small",
}: CrateProps) {
	const [isOpened, setIsOpened] = useState(false);

	// Define the image source based on the crate type
	const crateImageSrc =
		type === "Small"
			? "/cratesmall@2x.png"
			: type === "Medium"
			? "/cratemedium@2x.png"
			: "/cratelarge@2x.png";

	const handleCrateClick = () => {
		setIsOpened(true);
	};

	const handleBackClick = () => {
		setIsOpened(false);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div>
					<RainbowBorderComponent>
						<div className="rounded-lg bg-purple-600 flex flex-col items-center justify-center p-4 text-primary font-h3 cursor-pointer">
							<div className="w-full flex flex-row items-start justify-between">
								<b className="text-lg">{type} Crate</b>
								<div className="rounded bg-purple-400 flex items-center py-1 px-2 gap-1 text-highlight">
									<Image
										className="w-5 h-5"
										alt="Token Icon"
										src="/tablericonpokerchip.svg"
										width={20}
										height={20}
									/>
									<span>x</span>
									<span>{tokens}</span>
								</div>
							</div>
							<Image
								className="w-[7.5rem] h-[7.5rem] object-cover my-4"
								loading="lazy"
								alt={`${type} Crate`}
								src={crateImageSrc}
								width={500}
								height={500}
							/>
							<div className="w-full rounded flex items-center justify-between p-2 text-purple-800 bg-rainbow">
								<div className="flex items-center gap-1">
									<Image
										className="size-8 brightness-0"
										loading="lazy"
										alt="Price Tag Icon"
										src="/tablericontagstarred1.svg"
										width={20}
										height={20}
									/>
									<span className="font-bold">{price}</span>
								</div>
								<b>TKN</b>
							</div>
						</div>
					</RainbowBorderComponent>
				</div>
			</DialogTrigger>
			<DialogContent className="bg-transparent border-0 ">
				<RainbowBorderComponent>
					<div className="flex flex-col max-w-xs bg-purple-800 p-4 rounded-lg text-primary border-0">
						<DialogHeader className="w-full flex flex-row items-center justify-between">
							<span className="text-[1.7rem] font-bold">
								{type} Crate
							</span>
							<div className="rounded bg-purple-400 flex items-center py-1 px-2 gap-1 text-highlight">
								<Image
									className="w-5 h-5"
									alt="Token Icon"
									src="/tablericonpokerchip.svg"
									width={20}
									height={20}
								/>
								<span>x</span>
								<span>{tokens}</span>
							</div>
						</DialogHeader>
						{!isOpened ? (
							<>
								<div className="flex flex-col items-center w-full my-4">
									<Image
										className="size-[8.2rem] object-cover cursor-pointer"
										loading="lazy"
										alt={`${type} Crate`}
										src={crateImageSrc}
										width={500}
										height={500}
										onClick={handleCrateClick}
									/>
									<p className="text-sm">
										By purchasing this crate you will get up
										to TokenAmount token randomly from the
										game sponsors.
									</p>
									<div className="mt-4 w-full">
										<p>Price:</p>
										<div className="mt-2 rounded flex items-center gap-x-2 p-2 text-purple-800 bg-rainbow self-stretch">
											<Image
												className="w-5 h-5"
												loading="lazy"
												alt="Price Tag Icon"
												src="/logo-dark.svg"
												width={20}
												height={20}
											/>
											<div className="flex items-center text-3xl">
												<span className="font-bold">
													{price}
												</span>
												<b className="ml-1">TKN</b>
											</div>
										</div>
									</div>
								</div>
							</>
						) : (
							<div >
								<div className=" w-full overflow-x-auto min-h-[20rem]">
									<div className="flex gap-4 min-w-max">
										<CrateCard
											name="Token Name"
											symbol="TKN"
											amount="100"
											description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
											logoUrl="/tokenpic.svg"
										/>
										<CrateCard
											name="Token Name"
											symbol="TKN"
											amount="100"
											description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
											logoUrl="/tokenpic.svg"
										/>
									</div>
								</div>
							</div>
						)}
						<DialogFooter className="flex flex-row w-full items-center justify-evenly mt-4">
							<Button
								variant="outline"
								className="bg-purple-800 hover:bg-transparent hover:text-primary ring-0 border-0 ring-offset-0 placeholder:ring-offset-0"
								onClick={handleBackClick}
							>
								Back
							</Button>
							<Button
								className="bg-primary text-highlight rounded-full"
								// disabled={isOpened}
							>
								<Image
									className="w-5 h-5"
									loading="lazy"
									alt="Price Tag Icon"
									src="/tablericontagstarred1.svg"
									width={20}
									height={20}
								/>{" "}
								Purchase Crate
							</Button>
						</DialogFooter>
					</div>
				</RainbowBorderComponent>
			</DialogContent>
		</Dialog>
	);
}
