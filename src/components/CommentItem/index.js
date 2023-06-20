// Write your code here
import './index.css'

const CommentItem = props => {
  const {listdetails, onChangeLikeImg, onChangeDelete} = props

  const {name, comment, date, id, isLike, bgClassName} = listdetails
  // console.log(date)
  // console.log(bgClassName)
  console.log(id)

  const likedbutt = isLike ? 'liked' : ''

  const onChangeLike = () => {
    onChangeLikeImg(id)
  }

  const onDelete = () => {
    onChangeDelete(id)
  }

  return (
    <li className="list-item">
      <div className="list-details">
        <p className={`char ${bgClassName}`}>{name[0]}</p>
        <p className="nameEle">{name}</p>
        <p className="dateEle">{date} ago</p>
      </div>
      <p className="commentEle">{comment}</p>
      <div className="bottom-icons-Cont">
        <div>
          <button className="butt-like" onClick={onChangeLike} type="button">
            {isLike && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                className="like-img"
                alt="like"
              />
            )}
            {!isLike && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                className="like-img"
                alt="like"
              />
            )}
          </button>
          <span className={`{spanEle ${likedbutt}`}>Like</span>
        </div>
        <button
          data-testid="delete"
          className="delete-butt"
          type="button"
          onClick={onDelete}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
