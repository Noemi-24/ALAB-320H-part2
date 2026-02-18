import './Article.css';

function Article({date, title, image, content}) {   

    return(
        <article>                
            <p className='date'>{date}</p>
            <h2 className='title'>{title}</h2>
            <img src={image} alt={title}></img>
            <p className='content'>{content}</p>
            <div className="continue">
                <a href="#" >Continue ...</a>
            </div>            
        </article>
    );    
}

export default Article;