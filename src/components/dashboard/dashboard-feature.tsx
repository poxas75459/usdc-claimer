/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3MJ2xQuBb2sEZcJPFau1tQ8yzMKMhiVCAXepZzwoQT8gAEbUF2jWFxDieaCeQhi7AGDMSpMZUkHTnixnwsQtHjzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ELUy24NzaB2dxpPzNzGJremm7A1nB2Q4ipRxHEGLFWmtFc3sdwSdxsrHmguL8D4rBsA1KadRQy1auaZ3GbzRZx6",
  "key1": "5s5Sf9F3ceACEnJKvhUWt9mxSrZJp14yF7wEbP9PeW1LzPtKHzB3oy9CVFsyEAJGrAfGPwPHwngMmNSQasvZ5MEb",
  "key2": "5RimkHMt6iAt7k2A4jPgYbVWnQFpEuaU8FrsApYs6bCrdXsSZcVS1jw958D1mUTpWLCgkbvdh9e33ERyjcdo8ooU",
  "key3": "5MjCBCUCCwKAZ8hCBj1yMkLeVFX2ePrsaPTmF2de1airqxtJ11eNDaRYQHdkC3bTpU2KijxBZtPAjU88cJQ5zTbp",
  "key4": "3dbM8BLw7D5jcQfmLxRR6ePeVroWeb9f29YFt3ZwgWtPMjdoBjs4u33oBNbJoJnTFJp1KH7HFrXyt4koxWLwhRmd",
  "key5": "QmXpQHC9TGFKGyMKUCDnK1JZMcYhqjsBTRbrrRuxv78yu8oM4Amg4aZfS1FaAfcbmtb3vCwJeemJwZLwgWp388y",
  "key6": "59DtDDaLPhXPw4aWCCaWWuA6w2FSk4yfV2aSPk6R5BGRHnH6xCYK6tZeWR4TMMWo4MPPdqdPcspv7bEtMkmmTfHa",
  "key7": "5KzNDqoyUMyQz3zz79wdMCQy1HsHXMqVVwwUsZnExX2frL7rRKnbuRc8nJjdmZs51XhsYcNLWso9RjvdTjA2JW8d",
  "key8": "3QwDUbcpH4ahgfsyvYMJfTfnrB44v8GKXPxkjprHDdTT4iomTUH7EHBKc7MBaBTcbyTu3NJwotGarR4CLVXh8JxF",
  "key9": "2K3ou1z87qyqjsMETvmnQpKWHbchKqHg1up6iveYwxLzGz34rDsrWZd6Wk7YXCkqdB6JGMgg9Tei3XM4Dva2stJz",
  "key10": "25ZL914mvAwBsLGpwZiJ7EMKT86RQV62DJPwcTNYaEaX8XUs3aGqbPpcTy9398h6MTUngmVnfm4K4WjR9729C9yR",
  "key11": "5f2sLwD5UQd4bHMvz5qRNcgZwHWJRwJR6qmtb5rguapBRUkdqvb9WduaXh54qyYxzcMxz1fQGRbjpGvPduJm7pP3",
  "key12": "44bmG9ibtZGGjR2A1x4yUKPW9ET9U3FpML4NyhRtfAbRqY2vbhfAx5m7d9A3iFQ8zshGk5paaQN2Q9qPPnqU4Cg2",
  "key13": "2PzGiTAQqa9Cs2Vq9n7B86UwsD5hzNz4k7dtRLkUQo9qv88JSPp2opNa2KBtyzL1cqzkfTZL42nnzBk12poUks6m",
  "key14": "4xWVf2u81ANezjy9wKFLWKFCGJ4rhLMz6pfLDYu3XQLfzw9b4ygx2h1qZLu5SV6wBddGo3t5cE3fo16MxZ3gyT2Y",
  "key15": "2SeMivvAZp3spdRzk9nSAcFPN3hVTybfz6wGJd1nCPbsobnaBNvPTnPvgFCtVJ9kJYncW92swdumJkBc6YsHkWaG",
  "key16": "3NsXg1qm8RR3BGdAfdpMvF387vxMLmK8o9e2CWH67iMEQDP8eSjPiEdfwvXRyuydQ7aQRWvJThjx2w95CLcMWSi",
  "key17": "5nMfdzHD45o3Y3QjnDFfZSLUNDN4facCstFEBqPtTmTudiHRWHHDsRHMfmSabRT7u88HutqCSvknzo2CRXMSLDDC",
  "key18": "2jEQd7Z9o5mdqsQSRpMapvoqBNQoZXQ28uPydAtXJqija5yc3nPuz5qP9m8kFWNVn2Zmh53G1aAyM2KVpyTiHzv4",
  "key19": "2DjcVxTYAHxwdCs7TZYDg3DLPqzDNk8CjqqhNuEDtskPh3gPavfXSJKhD78DxdhQLSPNGizhjWNt1zuAE8HFsJHg",
  "key20": "rEJZxVRqHM5NWrhMncikBDy2FeWAqrQAPrp7UxShcLahRQibY8U2YmEgwNKkdVCG4w1oqqcZ6udZuFHWyu6WNBj",
  "key21": "3g5PqZGbMFob3vc6nmADxcJCZhCQixVuzdzHC8K7jnnn5kp96qYTVEL6rZLLX3uFBH5dTNT7CaD8DKPoSRp3dQQb",
  "key22": "3Dk6kr9mPA5ik7EAbUUAGC4zAVAvkFo36vRYH2StXe3abQwZC5WK7X73AqS9e1iXUbJmJvTdSstF4gfy5zX8SCPx",
  "key23": "ynV9os8z5ckCi6A4dxnrqQ1gBHa5gJAKSqdL8PVpgioNVP6qRMZBWtCfvsMEPgEEbggLveRdMP6UV6wuLSwKNPx",
  "key24": "2FFFreuammkEYUv2JzKxB4kksYNZMn8b9d8cuFeqr4RRcD4iyafomfQ4y6kpWwCMFVRwNHk12hjGyuC5yMpmwGMU",
  "key25": "kXWHnR1u1DKiZ22Gz5aMHVGnzKiR6ejhw5i8HkPDbeq2N2YKAVvQR7eJZF15rPwb2kMMkEt34em2MMo9DJQ3q5q",
  "key26": "5jjrZNQ2RRiRUzNMEahe62ygY9qEviosZQqYx8Ef3Ko1AyEjk1Hxe3NeFSzByPEsiKTzZAfXovcpFzqNaweY1262",
  "key27": "266YxwmzFNzF7hLx4VDn363k91UNH4zw9PiteTmqsb7EhZW3sFViP8AyXrHmU6Dr5hcsWFYeSLD7VDwR7sKBDerb",
  "key28": "2aCkkoFW4aCPpkCePTeaFgH9JbFU99TeZ4vxWCygQEhEADKZq6kid3mGqr2qGfGfyNZLDsSocm64EAxDVVosKr3q",
  "key29": "4GzntCajqDq9hhErN22bDuZycHb3rhix6qjjfJq7G4vZ6TjjFp5K4YhDASytbXkBt5CkMRJCuFEDDLgmedNw7uGj",
  "key30": "2dwTC6yVEUgQ5NLECvkQ7SBETXBkYWBtD7g2cMTfY15z5nPhYRTVacu9nfEZ9Ef8P1MqTT5Zinxg3cSUfWSsxwb8",
  "key31": "5d3T3nC3wmZvzSeFTsHvAKw3Lw9UcrNh4ae4vhQLCZ4Cyc3nFRRbuq1tY5P2bjPNtaYE2GA3CuhdSr9YX12NthgR",
  "key32": "3D6Qk9ofiFo1fFbRBz1QvwVmNc98mdKB8FCpP3dxBHDSe2KYjVkody3NKnzbArD5qRs6ZvSV1wRvn5vzmiqG4xhD",
  "key33": "2z4Q6jrETzVARuL8qWgwc1UCMfsabXc9L5r67VscuYYERZuDtpf3yJWnADbvGkxUdBb6n2yRt4XXGbvdd9JaPbRw",
  "key34": "o6pnWwydXCqtf7EUSuWd9QJm59sKEJvyX3gJo8QBT2jLi27vmeSDKFN3xM14gq5yzcrz6TdhMZSfH3UVYRMmuKr",
  "key35": "5h15t5qsq5vf8ig5riiPA8b6DCwZqDNc2mKHidvzgQcSbiHyzMGYADaEuWwY1CGpAY5WNq2ihYDdCBbThTPhSUtp",
  "key36": "hTYBXYG7ciG59TL3fN5uSfojQjRPmEoTwKR5S7zTiuVfBrcMdyRFhFZ9pRn18eCtgVfrWs6WX3G7cTSiRtwggK1",
  "key37": "3WS8Bs4yZ6ZfzaM1HQhU4xf79rmpnTi3nPdzpKZdYyE9EQA46AvCnR7QJkZ7ykUgstmRg81qX2Mgg4LqdWfPqFCS",
  "key38": "66YzBiTebqRQ7DCxV6fVzg9EJFrZxUyuV18Hq6UEJ7g8qoiVKAqCx3Goz9teyZT8G3WuUjH8ojBTi2JoffdTcxqX",
  "key39": "51G2sVupQ3XjXjgvu5VBjSFzxG7pX1JeuryS5oHmbycT3Gy8ZrvreQ8VPt7opAsyopEUN3CQYoiourvkXrWQrym",
  "key40": "ZXQNHv1adALC8uezWgtFEmXsgLvCLnC1ozdmejxkPW2yfi51XWUgP4AzuEWEb92azUuWvS1UP8Tet2w7oxqmjtS",
  "key41": "2Mxe2H3cqZnQayEeATntrr3bzrskX3D6h3uWRvfBawpbCdbRC3qvcMGdp67vQurCnPjvYE3ApGCDGC2fJukG3crL",
  "key42": "4X16QeFNHohTUENfB2e3EYbMNxosUUDGmRpb3jKGWDsTCFaRbGBmX4f7DKc2EiGZzr2WRFxjcd4LL6ADU4js7Rf2",
  "key43": "2Eq66Dwsxh1CVtyVmTsX75yLvGVNFayjbp1QV3CKUHc5meezJmdxmjtdyLWJqWu4EdhxNHUTYfo4oVDNm8Vi431u",
  "key44": "2qRZSrLaHeQPgjp2qkA4beR8tDcjrnzhj3t8baVoSpbQ4vkaJN3D4Tgduc2CxUMXezTPvuL27pWSzmtApB6esUTy",
  "key45": "3uirY6Mjsknf3UoDM3jtAsgZSAK1kDoGFqnkyMWYgh7FTZNJSZ5WZRD4PUw7FMiYaKdt1KSkQaazFFqn5YJFWMqj"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
