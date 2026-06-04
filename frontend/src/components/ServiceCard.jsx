
function ServiceCard({ title, description, icon }) {
    return (
        <div className="service-card reveal">
            <div className="service-icon">
                <i data-lucide={icon} aria-hidden="true"></i>
            </div>

            <h3>{title}</h3>

            <p>{description}</p>
        </div>
    )
}

export default ServiceCard