import React, { useState, useEffect } from "react";

function Timer() {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (isRunning) {
				setSeconds((prevSeconds) => prevSeconds + 1);
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [isRunning]);

	const handleStopClick = () => {
		setIsRunning((prevIsRunning) => !prevIsRunning);
	};

	const handleResetClick = () => {
		setSeconds(0);
	};

	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-cyan-950 text-white">
			<h1 className="text-4xl font-bold mb-8">Timer</h1>
			<div className="flex items-center space-x-8 mb-8">
				<div className="relative">
					<div className="absolute inset-0 bg-white opacity-30 rounded-lg pointer-events-none transition-opacity duration-300 hover:opacity-0"></div>
					<div className="border rounded-lg p-4">
						<span className="text-4xl">{hours < 10 ? "0" + hours : hours}</span>
						<p className="text-sm">Hours</p>
					</div>
				</div>
				<span className="text-4xl">:</span>
				<div className="relative">
					<div className="absolute inset-0 bg-white opacity-30 rounded-lg pointer-events-none transition-opacity duration-300 hover:opacity-0"></div>
					<div className="border rounded-lg p-4">
						<span className="text-4xl">{minutes < 10 ? "0" + minutes : minutes}</span>
						<p className="text-sm">Minutes</p>
					</div>
				</div>
				<span className="text-4xl">:</span>
				<div className="relative">
					<div className="absolute inset-0 bg-white opacity-30 rounded-lg pointer-events-none transition-opacity duration-300 hover:opacity-0"></div>
					<div className="border rounded-lg p-4">
						<span className="text-4xl">{remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}</span>
						<p className="text-sm">Seconds</p>
					</div>
				</div>
			</div>
			<div className="space-x-4">
				<button className="px-4 py-2 bg-cyan-900 hover:bg-cyan-800 rounded-md text-white" onClick={handleStopClick}>
					{isRunning ? "Stop" : "Start"}
				</button>
				<button className="px-4 py-2 bg-cyan-900 hover:bg-cyan-800 rounded-md text-white" onClick={handleResetClick}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Timer;
