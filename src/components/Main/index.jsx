import React from 'react';
import './index.css';
import Items from "../Items";
import Comments from "../Comments";

class Main extends React.Component {

    state = {
        itemInput: '',
        commentInput: '',
        items: [],
        selectedItem: '',
    };

    changeItemInput = (event) => this.setState({itemInput: event.target.value});

    saveItem = async () => {
        const {items, itemInput} = this.state;
        const uniqueId = new Date().getTime();
        if (itemInput.length < 3) {
            alert('Item title should be at least 3 symbols...');
            return;
        }
        await this.setState({
            items: [...items, {
                id: uniqueId,
                title: itemInput,
                comments: [],
                active: false
            }],
            itemInput: '',
        });
        localStorage.setItem('items', JSON.stringify(this.state.items));
        this.toggleActive(uniqueId);
    };

    deleteItem = async (id) => {
        await this.setState({items: this.state.items.filter((item) => item.id !== id)});
        localStorage.setItem('items', JSON.stringify(this.state.items));
    };

    toggleActive = async (id) => {
        await this.setState((state) => {
            const items = state.items.map((item) => {
                    if (item.id === id) {
                        return {...item, active: true}
                    } else {
                        return {...item, active: false}
                    }
                }
            );
            return {items};
        });
        localStorage.setItem('items', JSON.stringify(this.state.items));
        const selectedItem = this.state.items.find((item) => item.id === id);
        this.setState({selectedItem});
    };

    changeCommentInput = (event) => this.setState({commentInput: event.target.value});


    saveComment = async (event) => {
        const {selectedItem: {id, comments}, commentInput} = this.state;
        if (event.ctrlKey && event.keyCode === 13) {
            if (commentInput.length < 3) {
                alert('Comment should be at least 3 symbols...');
                return;
            }
            await this.setState((state) => {
                const uniqueId = new Date().getTime();
                const items = state.items.map((item) => {
                        if (item.id === id) {
                            return {
                                ...item,
                                comments: [...comments, {id: uniqueId, title: commentInput}]
                            }
                        } else {
                            return {...item}
                        }
                    }
                );
                return {items};
            });
            localStorage.setItem('items', JSON.stringify(this.state.items));
            const selectedItem = this.state.items.find((item) => item.id === this.state.selectedItem.id);
            this.setState({selectedItem, commentInput: ''});
        }
        ;
    };


    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        this.setState({items});
    }

    render() {
        return (
            <div className='row main'>
                <div className="col-md-6">
                    <Items
                        value={this.state.itemInput}
                        changeInput={this.changeItemInput}
                        saveItem={this.saveItem}
                        deleteItem={this.deleteItem}
                        toggleActive={this.toggleActive}
                        items={this.state.items}
                    />
                </div>
                <div className="col-md-6">
                    {
                        this.state.selectedItem &&
                        <Comments
                            selectedItem={this.state.selectedItem}
                            saveComment={this.saveComment}
                            changeInput={this.changeCommentInput}
                            commentInput={this.state.commentInput}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Main;