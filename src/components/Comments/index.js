import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    console.log(formatDistanceToNow(new Date()))

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      date: formatDistanceToNow(new Date()),
      bgClassName: initialBackgroundColorClassName,
    }
    console.log(newComment.id)

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeLikeImg = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onChangeDelete = id => {
    const {commentList} = this.state
    const newList = commentList.filter(each => each.id !== id)
    this.setState({
      commentList: newList,
    })
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentList} = this.state
    return (
      <>
        <div className="cont">
          <div className="main">
            <div className="input-cont">
              <h1>Comments</h1>
              <p>Say something about 4.0 Technologies</p>
              <form className="formEle" onSubmit={this.addComment}>
                <input
                  onChange={this.onChangeName}
                  className="input-name"
                  value={name}
                  type="text"
                  placeholder="Your Name"
                />
                <textarea
                  placeholder="Your Comment"
                  value={comment}
                  onChange={this.onChangeComment}
                  className="input-comment"
                  type="textArea"
                  rows="5"
                  cols="40"
                >
                  Enter text
                </textarea>
                <button className="butt" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
            <div className="img-cont">
              <img
                alt="comments"
                className="comment-img"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              />
            </div>
          </div>
          <div className="list-main">
            <div className="count-cont">
              <span className="countEle">{commentList.length}</span>
              <p className="count-desc">Comments</p>
            </div>

            <ul className="ul-cont">
              {commentList.map(each => (
                <CommentItem
                  key={each.id}
                  onChangeDelete={this.onChangeDelete}
                  onChangeLikeImg={this.onChangeLikeImg}
                  listdetails={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Comments
