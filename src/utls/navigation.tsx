import { useNavigate } from 'react-router'

export const navigateHome = () => {
    const navigate = useNavigate();
    return () => navigate('/');
}

export const navigateAbout = () => {
    const navigate = useNavigate();
    return () => navigate('/about');
}

export const navigateExperience = () => {
    const navigate = useNavigate();
    return () => navigate('/experience');
}

export const navigateProjects = () => {
    const navigate = useNavigate();
    return () => navigate('/projects');
}

export const navigateAccomplishments = () => {
    const navigate = useNavigate();
    return () => navigate('/accomplishments');
}

export const navigateContact = () => {
    const navigate = useNavigate();
    return () => navigate('/contact');
}

