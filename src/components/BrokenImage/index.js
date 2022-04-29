import React from 'react';

function BrokenImage(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M1.27232145,0.427083352 C1.07936907,0.427083352 0.887011886,0.501380952 0.739583314,0.648809524 L0.727678552,0.65922621 C0.43282141,0.954083352 0.43282141,1.43209524 0.727678552,1.72619048 L1.50744046,2.50595238 C1.06248312,2.77195337 0.761904762,3.25316853 0.761904762,3.80952381 L0.761904762,12.952381 C0.761904762,13.7942857 1.44380952,14.4761905 2.28571429,14.4761905 L13.4791665,14.4761905 L14.5386903,15.5357143 C14.8335474,15.8305714 15.3107977,15.8305714 15.6056549,15.5357143 L15.6160716,15.5252975 C15.9109288,15.2304404 15.9109288,14.7531909 15.6160716,14.458333 L1.8050595,0.648809524 C1.65763093,0.501380952 1.46527383,0.427083352 1.27232145,0.427083352 Z M5.59077379,2.28571429 L16,12.6949402 L16,3.80952381 C16,2.96761905 15.3180952,2.28571429 14.4761905,2.28571429 L5.59077379,2.28571429 Z M12.952381,5.33333333 C13.3729524,5.33333333 13.7142857,5.67466667 13.7142857,6.0952381 C13.7142857,6.51580952 13.3729524,6.85714286 12.952381,6.85714286 C12.5318095,6.85714286 12.1904762,6.51580952 12.1904762,6.0952381 C12.1904762,5.67466667 12.5318095,5.33333333 12.952381,5.33333333 Z M5.71726187,8.98958324 C5.82754766,8.98786895 5.93865478,9.0327741 6.01636907,9.12648838 L7.61904762,11.0550598 L8.68452419,9.68154743 L11.1934522,12.1904762 L3.82589288,12.1904762 C3.5089405,12.1904762 3.33173813,11.8257973 3.52678568,11.5758926 L5.42261905,9.13541638 C5.49728571,9.03941638 5.60697615,8.99129752 5.71726187,8.98958324 Z" />
        </svg>
    );
}

export default BrokenImage;
