import { useNavigate } from 'react-router'

export const navigateHome = () => {
    const navigate = useNavigate();
    return () => navigate('/');
}

