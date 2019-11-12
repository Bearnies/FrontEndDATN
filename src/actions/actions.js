export const GET_TAG = 'GET_TAG'
export const GET_TARGET_X = 'GET_TARGET_X'

export function getTag(tag)
{
    return {
        type: 'GET_TAG',
        tag
    }
}

export function getTargetX(targetX)
{
    return {
        type: 'GET_TARGET_X',
        targetX
    }
}

