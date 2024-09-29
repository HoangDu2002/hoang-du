 import styles from './ProjectsStyles.module.css'
 import viberr from '../../assets/air conditioner.png'
 import fresgBurger from '../../assets/construction.png'
 import hipsster from '../../assets/Product warranty.png'
 import fitLift from '../../assets/invoice (2).png'
 import ProjectCard from '../../common/ProjectCard'
 
 function Projects() {
   return (
     <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={viberr} 
                link={"https://github.com/HoangDu2002/QLMayLanh"} 
                h3="Air Conditioner"
                p="Air Conditioner Sales Manager App"/>
            <ProjectCard 
                src={fresgBurger} 
                link={"https://github.com/HoangDu2002/QL_VLXD"} 
                h3="Construction Materials"
                p="Construction Materials Management App"/>
            <ProjectCard 
                src={hipsster} 
                link={"https://github.com/HoangDu2002/QLBaoHanh"} 
                h3="Product Warranty "
                p="Product Warranty Management App"/>
            <ProjectCard 
                src={fitLift} 
                link={"https://github.com/HoangDu2002/QLHoaDon"} 
                h3="Invoice"
                p="Invoice Management App"/>
        </div>
        </section>
   )
 }
 
 export default Projects