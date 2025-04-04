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
    "4HTB2qiSApuyiE8L2yrp2R4TLjBMW47XYB5uQsuGH1EGWhbWNfNh6TtFpEtL85EPVp9fceFJYc2AAkqr3DgYZRN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HPMdJYiRHXpyc4s5LbYQ9rxAJVcerE7voP67FvzWXU1c17B1u3TWCm4WThDeTWvpBdXcb8ycRw5pSBu8dPJkeEU",
  "key1": "5EoE1m5bqjo1CyDatnX2eTvWdCHBNULmtjCA4U6ay3NDd1yC7vY3sLkdHYD7ZjbYaWoL5McsjqFaJR1Da51X33gt",
  "key2": "3rRqBKQ9nvSkxSSYJMnWDzAHjeV28Csyy8iA1LWdmzzAXaXmc4TcQg3CTZqHhaZF57hS2Y7QtqJkgacZnLpeQJ1Y",
  "key3": "51nTgsM8cFRQ6aDe5fNhMz4u6zgDLetuercSk8ooA5hziDmebFihtaHsgToCHacAspYh1c3sU8WNJ5chpWAiNJC9",
  "key4": "211opSfymN87P1G34ppT42bDLvjR33XynytbNrnr1XZwXwr4mbRuTESH2m2qau3MPo3FNuv8kEjZ2PQiVg3t1Nzz",
  "key5": "DXUFhzZmXjmuLgKmbwZVnDqnHTBZyXY4jg4tvZNCX9iEsFXvyAsjtPdaE3E51ef96JqvBGP9v9P3ibrz2sJhg43",
  "key6": "3gKRV4k3jr24Xye7aAXaMa6RRp3HdRuMY4kuU6QZkaqZTttTmVfzianNhPP6RtFpJPjp6ATBwfd4sPjt7uc6FUq2",
  "key7": "4ie3broTyakJDpyaW3bDjZ8amdh9Mc2HfK4M1kKPpZNNC4GhAq1akcy6rXi3Cf3o2MKsSWxx7gacwf9SAFiHTYrb",
  "key8": "5fmP5MXHEY29LtvJXEDkpk4vXmrSBsNPB5awGDTvFrp3Lu8fyDUoQ3oqxAj7HfXwKUBPt4yFaFZ4TfJ1bDZnFPEm",
  "key9": "3Qjx2kZ3Q2VGW5HiZhCJCPasEgiJGaApoHuhZMYAqidLLzf93WABp6RzKkFeoapmxrjJu9forG3YHb1b9Wz6XqpQ",
  "key10": "2iVVSxQ8MhD5WA5AbcBLPzKJuZJ24BQTwGgmLpujRks2X26o8xwZYp2Bnb8V83ouP5uR6LrE5xsogG6xQ3X5H5UV",
  "key11": "4vvGY9apvUZj6b5VzUKhYQv1QxwfbMsPvUGQupG2nUeXWD2SdmELeDXfC4q4rao8QmvM8sU6smSbv9ggi6eX9H6m",
  "key12": "26Z2hYqzNFkudRPwqiGW4ExZCp87xq18dN1LwUYRdbuwzy2A8aVvoKitXThgq9WUysRT2EmxwFPB4CpnhPQB2iSx",
  "key13": "2QXiK9L3UUQB8kMiVBBm5Dv2XmJML1JRHnFNzpPTRbSqKcrXX6iPZaXoQ7u2Tzy2PqzzMTLuSmkYanFcX5X1uLSv",
  "key14": "efBoHucB5nqyf4hTayUtPkCv78gy9Xz6MDagoBfJdBXoLygoLrrZC9St1qH6rx8TK5Nec95JUSQVZRSnJTKGqd6",
  "key15": "H1VNSFurin6ud2cKpVybanmC1c3XbTPvEX5jBS2kEYbmSVVBSxQeY3gBHC2bVENDZCsxnx8PStvLxwgsUSeGTnj",
  "key16": "5g4C4ZzYwLmQLqNujqEZhKaDdZ1TRg9oPtMGCPLcomvAGtkwrVxKjiB8RLqkkgpjnQCEi1qwSVqxLprFomgG2Nj5",
  "key17": "61igjat6zUSoUFxa42toAKdDRFGDcnyppRffWE5B5VK8gfkAoYbGpzGapSyjjJQFtvJ7QUniftMtzLuWhzD4bGYX",
  "key18": "4C7Sfbgjo4aJMzt1RhHZNXpuH6Z56kysEe1pm1UFsut3DThjnDTWwGAfWaQwiUKk1oV96r49Ma2BwAqJ8mtk6NAw",
  "key19": "3vBrhtwiDueuhS29o6dVNp8qdSj6jyc5dw9fzfS4TGSWE4H8GUYJcT5Z1YbgNpqUg4rC82ZawHHDvg3v2MTsnZLN",
  "key20": "3nMVW1jTgiTYqVEyTEjVLwwefAEGz3L4DsayrSXQ99qhQtcQMjz5txJdghZgHFNmpxfRxumKYwBMzmh4qWJ8CXSt",
  "key21": "P6gsTa7BjCxxs9hEjA13o1hCeHicz24uV8BMapdqs6ej2tMjTHZGX1iiRPiPUcN5FDiDYe7tMi1NPERRs1TTY5x",
  "key22": "4cRrYZ4dFseFKV8oUvAudcTEFpxtYXY2rMPya6tfx3G1DPjJKzzNXRszs9mDTFXakB1Ennv3U1cXWJcHHDA6QoW9",
  "key23": "3MB7G8rdPZ6M9ySbmEi7rgSBXa4arn8BFLKvAF2poo5RapSVkSM2rR2TMu2bW9TB7pZMApYj64EhcP1GSRX4nVTK",
  "key24": "2BGFbnf1fndxMn6L6a69DUWoHkxnprWkJHy6PSoE5apGMKWCYgyJZYTikknpPrgvd1offmfqccvZCLYM1UDE3Jrq",
  "key25": "3us3oJFephpLFaZZGLpZW2h7nwwbeCYLct8qYvNrfxp1etSHXoh1Dz4qd9Kw87kaRm6SoG6MPbjv8it2R1CbdyjK",
  "key26": "C5SAWtinjx7JtNNxq4xn7XqU1jLh77oDFhaSEH1WUKfahCsnF4KEnYLuZzvWLE1zm23i6AvKLrWaAQwhK71TUTu",
  "key27": "d1SNaCqrvbxZ2EsVbwTRMnaxRNyNLea6bnFmgJhaNNXbutTEYDMmtqfbQn4jb74EwqDkFewdrCmN7vKceDtEFaa",
  "key28": "3cZs2HyLwvFGZqpWjUySppP6j6MgZmETGbeNFQ3hq5v7ePirLYkWfTVtQzLyoPyVAWAcJ9LgBodMPjM6vYmRT3Fq",
  "key29": "3xQ75kgGWG3sXK6KAcC8eU37y9PQJxo7rfNHoz74LTxwuTpZjxAxFYTTFZ1QdQKjg7zzanTXGrNuoeETs2fHQm8a",
  "key30": "5VwpeZVpFnyaWmEf1s3bvE7hBtdws7ukFF7XKUWPd71ocSp1vB4CySckMgTqTdAwxgUEkq1p5qhcubbjtHHXsgWj",
  "key31": "2JxLBz2jdn8cQWovuHBTuNRLrRP8rdYVEdM8rx4cZQT8EpstWiLCubJ93msBKcvdaxwbBYiTSdwtgWtUuhe1UyXP",
  "key32": "2u6mnwax96uML7mCDPygX8wdu4AURXAEtS61TLbQcg3Q5sGvii8ZDBkYtxAUKG5BRBRveBsojBy5mRt6Qu6Mv9P4",
  "key33": "2LdmEaNSLqfLzBzT5PiaXWDuoJHvAKSdDv5fM1PtnLmXJ9M7rjrzbedT52Cs4iiuiuLc3uKQNd5dXTSGKMd35Wjr",
  "key34": "4nw1nzVY3yfkQm47xJt4o4QuK1xgQs2jAonW56iv3qJRUcVNpVxemofETVvPfi1MpUgNr1HNAF9nMbsHaGLTADVG",
  "key35": "3XABRHvB5BSUU2MqBwMtpnAEzsBMZ4PodXh1h3X2ZbyRdMb8EHuoz4dbsrRZz8AriGVeMpYmndEUZ3adCjUANXAZ",
  "key36": "2hxzXkx3K1usGBUSKHgkr88A9fSan5wiGck2cVvQnGPJDfRDjyNACGcZ8KBoenoTe2fGdkVFyPLrXsRUY6Rgg4yx",
  "key37": "jppd3AqRqAVsn9xTZogZvAuM2SZA9msnfxZ8X2SdrJigG7GzEQWaeEGF3Vs2vK3oeccsV4xxMCyLVoqwkMDbTSQ",
  "key38": "4VJgsuWthTQQ9QrehpXF1g2ftYzAhVXMhka3EyFQkz4X9URHCmX3uuBg9LLMRUMJiJcGt5xywjtqzSgQGhs1wL6u",
  "key39": "341E83SAjeA9dvUn92uuiBkpZ3rkvUX981VaRqvz2zaJdE4j5bbMKMJ6K2NxeB73wyGAR489vBbu5EmCKN1TbcSZ",
  "key40": "45iEXD9Pg7hfkRfyeaRBnpBqSJ9u7uiRr9Sjtr6sDf64rDKRCXdxSJQK9NqT8kmVjRA9xjMECuRveST5ANBwH4WY",
  "key41": "N5HbQUgtdPd29nNV1151rZHQKBWPQycc6XHoF3uphUD4F1sb4o3gdhqyrVV7EjzcvQi28pyKFQiq296NnGZh3ao",
  "key42": "341QKLe2VviaUBWgPVXG1i8MnskzGtTmmSfUKtjopSaLAwojC4Hs5Ea1NRpcf825cFGXnxGvG5guAX1ZnCnHtZfu",
  "key43": "2sExdpCq1H3mZ6k1XwmpxY7SBxuSvnC9Cb9ywJ7NDHUrh2GMCPNPvkk8r1tkHXBcbUiCr31Jvh6PQScaaYL7B3HY",
  "key44": "oK45CXtoBUMZLuHjxRWGBpDNH2znE9suqqQa7yJJpp3pF5RBaZXFyqTng7M9ounH6J5w42C3e9MscqYkcRhGJ3o",
  "key45": "3SCzcGNYbDcfzupwTfiAMp3bPjmcULLLzZzsfS1h9rQAYzB9s1AEhsy1MkdEHDZoWa5xQbhT3wF4VJsMMQeqUKZp",
  "key46": "48nd5YKscx26fg5bmc6wh5q36BG7QTfWToHNwdfRph92tXBbwLxcKVUT8DA5tP9mTbmbGLJCT5GHaLNHgRbitwWK"
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
