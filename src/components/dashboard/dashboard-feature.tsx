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
    "5dQ4cdhLjD5noCyRDkB8ZjGvMXDVizLKYzgtgMatqJQXZfdNjTGPU9zGy8RN8UhqiKeTsMfrNoXQwFoXyTT4tPZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4RoPdab2VhHD9YCX8y6V2uuTapuomVWADDpV5wMsWQiVY2YokJGxWZA8X9m7tFNuu7LYsd8pDSoXudcfibHs33",
  "key1": "cW81Zj6iKYMKjsM7u8MAMrd2z54WZvF5XW3veRkqCFpBpmpr3ud1HKRYRiQKT6gh717QmoCbJHfHNtXiciprQic",
  "key2": "2qzyJ1V3PNqnGNv6YefmjAG8ujfWTVuxCUSTyT8VVndFJUFXeeAq6VpSk3uZ6ghPuiBSGQRieu14BJtiqxdNjTWo",
  "key3": "64C7HBfksCZja9NeYGGBX3riDz5dEDPu8MJYCaZ1VxkZBKJHr73jfV5aB1Xqh91bfiRsedJeahTPWgbdtgWaQtHr",
  "key4": "3CCmbcWbRkikupR9Fg8uj4i7pUvJhX2DS9yPC2tqhmASoTRFP92M882NNFd4EcVdfZgMdMqUrZH2EutYfBf7VT9K",
  "key5": "2Wm5sv67xJPobLWtYUHFBnXChnJzm5KBq8Ux71NTTMnugVgUCUcj7BPAMdauwybbc25da8DNDiG37kpgZyKTKuVn",
  "key6": "49wZwEQDocUsN3Wbhn6YxKXwy5fdbxhA3dRkg5d8YVS6WcpgkWwZ747ixzbvzbSAz6Mjv65oqfF22TsHfxGMyQ4g",
  "key7": "2nMvnse7onFSofbMNMMFACkHD7XywRqHiJVufsVH52wkDWRUBu2S8WENbamnNzHvY6dpCrUEpsU6FCRxzAz3wQEX",
  "key8": "5WjgoES9URzF7THjrUgfGNYbqPZPN24Xh8uwkZTM35EoPXwDAtSQJ8HNtvYq3Tk9jwCtPTn1y4u4caeUg2eTs6ss",
  "key9": "2qs2h1zeuVusEjg7Qv67m2QQu9GfDATEicyAbcoDefXCP2KXZMeNoQnQEfG7cmW66NXYxfz9rFepey5QViSoSLRP",
  "key10": "4AgRB24y9aKBjZjiEj5DUoHDC9aVyCkWbr9Qqo8rAMQ9fNqxzKdR7FqYrRjd7d9AsQnocCmnK6tmTAkksM51YhY3",
  "key11": "5iF8jE6oNbMCJ6GAxAkMBk7QdwvaHMTQY4Bkk3sv6TBYzDBmgQVnufD7oCjyLz6PpMN3a3NLewpaK43D6hTvnx61",
  "key12": "3eVvPzWyBeCKsXErrVxdqoYFj3tjxoWpb7giP3qXVbo7t4553YbRjFyZYpE9Tm5raovf55W3HN5LejywuEVVeyWc",
  "key13": "sHVjYgSqpmUygkpkPZyGV7Kcnro3DBvFpZr5Bqmh4H5sMXaD4rs7ASQ3f3zCzr5FryXkp6ywB1o84ByT6cDEFzb",
  "key14": "WXEAQP1VVCYxXts1gmH4QQCcHKH2eTeWSKhxAFYYXe8U46UxsaEC7Bxkw2g6uFfnE8kFZVFZxTGs7LzsQ63Zsgz",
  "key15": "4MhCECFsCyMJJXkavjoWp4xrQ84saWWLM7SFgbxGc4AkgbhB7HpxgKv5Yc1nvkeXsjZcvQAHxYFW9q1JNQS8wNzP",
  "key16": "3aLtJJmqetQzHmLUR1X4aPtpcGWZqVh8v73L6V9PponWN4ZeaNYMJo2ZZrqfnhgA9qoqqm18BDmAEJDugFRDbeS6",
  "key17": "2YzW5aSapTDgLFVDwT4L2A29mHYHm6Ezr8dVNTPhDYYnERmww9EqhghVbSoTSbphSsze26NThQNEg3eqS7niu63W",
  "key18": "iFBT2qC2DHW7pX7dmfNLN1KPsaGy98JAprmNNMBpzVghuTKJswaP2NYwKBH6G7oNaZg5sVZZUk5ivSZ3zxZS18t",
  "key19": "48e5USHQ41uvjBJVbq8hDtQJTh3zto67n599RicSE7voc9EfxWS2J5wu7Ecx5wiLo7CXdU5Fc1vaoj38MA9XXXav",
  "key20": "41CyDyyhn4Xx2G5dSX4aZdVgEppvvtUgJFYrg6TwBonWgKLA1AXzpuyaQNeawNwYuY951mKFz1YwctJFTxHRLW8P",
  "key21": "2nE7UbCrTnddvenkpDrze16jbLxt7fg1Y1TyTTFRo3tzBYJp8K3nekcKkq9oRGRj5ED2XMgMFToQrnrw8Pfy2vAt",
  "key22": "4pN2RBKbyWvyqDwHJShvLavoZPCdws1A55LhcwbGTV1a3Xiqv97CvH8emN7HSitf6C9a2YjXPXZybvNnELU8YTaX",
  "key23": "4hyhq67hnKbLTubJQHybB5x6VP15uXstnkZoXzuWy8M3JXSSzYLTm2ABLeUY4z81vgCqY7q3xbX11sN44LkQbTRK",
  "key24": "DrEv7NEedk1Y44NH5bDHmkDHxE9X5DoYoLcC613jC17QomC9DhgyFpe7ZrXUcUGhN5raxnEWmZ5AAyjr28NSSkT",
  "key25": "61B8k2LvXHeJB6sML44u6buY7yA78Y2PtFYLxzHw4EUutHFnXZeu3SZHXHWq6vT9qzXSpgAm2FAZCyhLaqbdi7m",
  "key26": "3WwnJmQwhhegipNuP4hF9KDyzKupYG8XAkXVsF6Hhb8q2w5mSbJD8VbYLmPK8AEsJbn3uBTtkHzBsy3yb33rmUUD",
  "key27": "5jWHW7a97tsF78SFvLX2zWv2aQ2cP7DVaZRzz3wBaENAn7Nq7gwr49VvohAbG2gghShqtDDtkRRJY6jEhYyj1Sef",
  "key28": "4bUgiFcXoyQUHvaeWPZeTNH3sPm32FAZnH9cjCEbX7Jkcayf3ivxdzWr8ZX4j11DV1yEAbagYe92xSE5gCp5hKnE",
  "key29": "2GepanXD7tpUEP9mnUBwrLXMDPDdrah2K7o5cVXYknZW8S2uMdrUfyme8zmsSCn8YqASY64Vv1prfzmc3NayJud4",
  "key30": "3oZXp2u1uqTAZHAxaXXJbAgYa52cKKcXjrd45bfwJ4uoxjxu6gYRSe3Mzr2gtTEtzG8JHVsnnnTtqJzLRb1ow48M",
  "key31": "2F8i6grDRwuXSnXbNnj6XkhguirBG27NCXB5tAidkkyHteWnhMAjZgnQnftpLwDcB2vzm6HUzPp4bMhuNdnSWTxT",
  "key32": "4osWcMCs38LSJpZ9mFLSe5STzutFf43xc9Jr58jRCfKv2bJZXJJy9iegnYXzscbHnz2pmo4FLxjgxXVYh7gewC2t",
  "key33": "51yovFXTuc6k8Y51JYF7TAumnZAJqFzbZJhEkqHGNaFBSdt8Jmyc9T9bst4ZZEXm6jzz9aDLoNjfcRFAVD8U1kPG",
  "key34": "7M63sfWKeLruqu4AG9YfUAAyZxW8JGi2jSvbcGG4KZPzkbkArC9WEf4S1QBn5X9KpjJKfL5kMs7fb5FJM4dD1b4",
  "key35": "5QXMujAe8DwmfZyXNSfWouYMjg2378FraoG1bH7CnTousPGJdGTfqjG8HSmyRwTX4EWEE86SpE4JKCFBv9mNAZJj",
  "key36": "NdUsqLcd9K7D5Y2W92gWBsH1SASXaE8TUcPL3StpxaaYYn9MDVFg6nGL6tBVNLDftojpSiaVNuQ5K2uzU1dVMGC",
  "key37": "4VWGoomnxcYKSgP2nMEX6Bu93Sg33NRkpmwAkpXa281bnfhoMXzQEcev5goTHk2ztw4hvLQxDKMzPdVMbtCHrXFj",
  "key38": "2u9i7o8HzhQidxLnDYtGYvMJqEvwnDfQsSfjhzbgHChBvRHRjeTQpMENmQ3teiv36knFJ5PBq6aN9FdE1YVAvkW2",
  "key39": "5YAriXvYNoceWgXmsnYPxqdfx3ecC8pvW3EEXWqjk7ngsZx3FtbqLuNypGjpvQ91BF7niemCcLi3Gsu5mH1TbZ1H",
  "key40": "4LxbeDdM7vusfGkqZtqUqjDgrpuaeBWgetTTP9p941rib1Z9ES3hyH3YmNfQFjsETd3rzbgnzJAen6THTj5CkkNL",
  "key41": "2wKk6Z5wMPJ26UhTHZttUX37jcjhdJdd2Gs1pYiXyJSKoTMXvQTBFoxyrT7tkpQ6MxLsERonehjYGATuhiGrrkbp",
  "key42": "4hCJ4GEAXxyoFTb1FMUzqPP2gKeRRVUu8tjzoYfqpFvBcWR2ZomY79anZNztMRJY4pyud4LxFtrAMJTAXGBLJoh8",
  "key43": "3qJoGEZzxXxDy23SCswDwd5chRwxSJb3uh4x2z9X8QhQtDT2RDaYTfdWd7Fs4Uhpd6PCGKLoYq33ghVMeQSNXig2",
  "key44": "4oPW7eodbz2bH1wWGH1tZeFjC1dCaaDR1YjotMkzGhBCoyuwCi2DbWhDd3qpaZ6F3tCoJ9JWnRDPZnYU366GLvHh",
  "key45": "2Hko5NzWe2p9yBM8ujH9kgeeU4px8LeTxzErERapRfUdDY9aqjzerXzNaBCkBBCxcNQmtY43qWzKSPNwmmby7yGi",
  "key46": "K2D6ZuZVZh2JqBKYv7ttUjgq2qui49hdbrUHhy9FKR1E53AoMTbzaY5DRr4t2TmpVwqYensRGiyx6bi7rvttRJN"
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
