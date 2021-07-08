import './Single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

const Single = () => {
    return (
        <div className='single'>
            {/* post */}
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single
