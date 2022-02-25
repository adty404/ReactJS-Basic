import React from 'react';
import { useRecoilState } from 'recoil';
import { theme } from '../store/index';

function ThemeRecoil(props) {
    const [currentTheme, setCurrentTheme] = useRecoilState(theme)
    const defaultTheme = currentTheme == 'dark' ?'bg-dark text-white' : 'bg-success text-white'

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)} className="form-control">
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>
            </div>
            <div className="mt-2">
                Selecting {currentTheme} theme.
            </div>
        </div>
    );
}

export default ThemeRecoil;