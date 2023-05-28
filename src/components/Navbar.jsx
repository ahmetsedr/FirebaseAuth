import { useCallback } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const handleClickSignOut = useCallback(() => {
        signOut(auth);
    }, []);

    return (
        <>
            <div className="navbar">
                <h1 className="title">FireProje</h1>
                <div className="logout">
                    <button onClick={handleClickSignOut} className="logout-button">❌</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
