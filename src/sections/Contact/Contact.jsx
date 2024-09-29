import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="https://formspree.io/f/xeojyaaj" method="post">
            <div className='formGroup'>
                <label htmlFor="name" hidden>Họ và Tên</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Họ và Tên'
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>Lời Nhắn</label>
                <textarea
                    name='message'
                    id='message'
                    placeholder='Lời Nhắn'
                    required
                ></textarea>
            </div>
            <input className='hover btn' type='submit' value="Gửi"/>
        </form>
    </section>
  )
}

export default Contact
