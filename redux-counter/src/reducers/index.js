import * as types from '../actions/ActionTypes';


const initialState = {
    counters: [
        { 
            color:'block', 
            number: 0
        }
    ]
}

function counter(state = initialState, action) {
    // 레퍼런스 생성
    const { counters } = state;

    switch(action.type) {
        case types.CREATE: // 추가
        return {
            counters: [
                ...counters,
                {
                    color: action.color,
                    number: 0
                }
            ]
        };
        
        case types.REMOVE: // 제거
        return {
            counters: counters.slice(0, counters.length - 1)
        };

        case types.INCREMENT: // 증가
        return {
            counters: [
                ...counters.slice(0, action.index), // 선택한 index 전 아이템
                {
                    ...counters[action.index], // 기존 객체에
                    number: counters[action.index].number + 1 // 새 number 값 덮어쓰기
                },
                ...counters.slice(action.index + 1, counters.length) // 선택한 index 다음 아이템
            ]
        };

        case types.DECREMENT: // 감소
        return {
            counters: [
                ...counters.slice(0, action.index),
                {
                    ...counters[action.index],
                    number: counters[action.index].number - 1
                },
                ...counters.slice(action.index + 1, counters.length)
            ]
        };

        case types.SET_COLOR: // 색변경
        return {
            counters: [
                ...counters.slice(0, action.index),
                {
                    ...counters[action.index],
                    color: action.color
                },
                ...counters.slice(action.index + 1, counters.length)
            ]
        };

        default:
        return state;     
    }
};

export default counter;