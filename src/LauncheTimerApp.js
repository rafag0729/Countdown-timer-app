import React from 'react';
import { SocialMedia } from './components/SocialMedia';
import { TimeAdjuster } from './components/TimeAdjuster';
import { Timer } from './components/Timer';

import './styles/main.scss';

export const LauncheTimerApp = () => {
    return (
        <>
            <Timer/>
            <TimeAdjuster/>
            <SocialMedia/>
        </>
    )
}
