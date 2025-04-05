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
    "4okeJ3XaLStdvsw6i7toiq5xaFgR8U4PVTjYiY6JhA7xJML8FyvmWhyjwTr26cw7ajTHA1RVqG7sSd8X5pNS76ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tafRrTqvLcZArWeHtvFa7Reg5QvfA6LWgKX4p24jtq1Hpqhf61zYHRkBH6dhqXgsKYcf4CAxRbrAQgBJT3tAQoU",
  "key1": "2Lbm69ePtXt1ttVNoDvZZTkzAjPcr4DTg2RGqHNwXa41UjP5bdDMGUAFUVDo5kK6mGBCSSMG9CyC9CWBttiXhXB2",
  "key2": "5sakGZxcFDEsorPSeqDyh1kqkiVb5hb4t79hrQMrAH3aeeB8ZtHhSbUtKXUzwzbcAXR3ZFPBfo4BPbSMM5re9hB7",
  "key3": "67FYDpWDxWnnq4inWXp9H5q64oca1jsrZRH9hqBVj7aZ7cXXPThGBM1qoj4r5WnFFhRvfQqJ8hYcSpnt8ghxMuyE",
  "key4": "2ZV6rcGA8Dnw9vnQdJJRbe8uY24X1h4bGn1MeNnmzkDZHD9QGBebejbjQveak67qQfANDib2YidNWztG45nQDuj5",
  "key5": "46mDEc42HqYSWHae3bxe8X5NCDrPcJcRSQ4JC5nXqQTuMKk8CWZTHe6hNUbJ2nCBdVDU9RqiBbmSfc3iMwg8D7Wi",
  "key6": "33aarpQJUPphJiKGptcKmQiQub6aDnYkZZoDoLZx9kwpVaWSGz7kEC8vfPREkbYmNV393FyGEYLkPU728rk5YX4G",
  "key7": "4YYSxSp8d9zsZCUn94XYd7myPqCmvnzQqn4dTZ4YrNe357vyjCTswxpq9JuXjTQdAJs864FZcbMxj64Hr2Cjnv4Q",
  "key8": "3dBXK6WjsarsA62JeSaM4T6uMjEXnv9xviAGERnXtF3iqChYUWfhahTj1idFnSuY7X5vqZNnswHjm8Ab4bnQ4p2g",
  "key9": "4B6sRNE46YqbEpzGJ4CrAe5ouT7jPZuFZYpDPUTgJgE8G1C54LEzMd4mRAwHtP7yeWDs5GTF5LF7QBNZKbr7GtG1",
  "key10": "3Z4HA8YS4AeDeK3gE6Xb2W2GMonGwew1Kx6fHGMvdo5JqpxPjFQwmk6sjraiSjoYesE4tzSyM74vD2po2caANiz3",
  "key11": "5ycY41xSZVBNZkAmDU9zpMxDrdMCkCgmGi7DPxCBcSyvu3PF5bbhPuGDbxyooRpsuwozufz3xsqRcxJNoDpKo6Jw",
  "key12": "2FCfaBTp5zq88vbTmYUMyfEn4dWyK9P44fALU8yWGsrEPERCfuvcptuSWEn9cr3AWJYc2zU9NXnXKq2j6rmgU4xf",
  "key13": "4jLVrQNFHUx1JSQgn8FGHaSMFipDTDUfug9ke5kmEUAzPGdAfcgNVdgLfqRhT9DpPiwrBp72RQCkfH6V52ZyQ6Kx",
  "key14": "2zGjtxvTYQMk2byyaGd8PU4c2yEH7jWRqkbz7SiANwjGyNjojK3DnhpKkc71rDoNj9SE6F1hCcbdgAmdus3VDm43",
  "key15": "2qwJfSoJCd1QbecxZ8CbG5qcC88NMGaySsHTdjGTpBbk3zsbFD79Kiib8YXmbFt1HTt53ZMdtQoascjqqM2up5gz",
  "key16": "4uHvqKSF5xNX9gmUe63ef6yPkeSwtjXuL98Tqk1dyUnP1Nvotta7YuBYDrVAuLFRPCyWeZhScTz3UaSch4KQSnTr",
  "key17": "VSf3WNHoh4CZLnpURDHUEMnFNnR6Ljspd5fCGeZ7C6rznbqTkzDSZrpCn7dyFwCrSxvhetPpsjj68dppBG5NoAZ",
  "key18": "38rCHudSRBt2rQikbH54bPmakpTF53e4vNVw9nEtwsV7skt7KHYJJpXRkxAMxYvqDYhPcpYHa2qpWfLx4xZda51i",
  "key19": "egzxxvBkmLYhpdE8HegANBqkxU4VfTyNCmPYgSbbG9N3YBEQSj7i6jUzNXqvk1uNzzcM27xPKHWSTdtHvxMNoo8",
  "key20": "24nsiM8wjFRhJnn3USdWhiNanKkU8JiCoX3zhkUvBtPskhAXqHLyjYL2xZzyCkikq6PkNuzMn8CfiLb32EsqnCQz",
  "key21": "4JW9dxpjc7sbAQU1ej4Th6rsGyAN2F8jhjXgQJZzKXrKyuVyWHEWiXD4et2LzBV9cUiasxiGz95UXQ99qAGJFnDU",
  "key22": "79vuMXMETReWHfjrysQKKva8SY6dGRuafD2kDTpRHHvayWnZXAyCMagUsmh7DuDVs2vEbQmYknC7v5uXq33Hfjp",
  "key23": "5i9H5DwAuvqJgbwYmdomnDbfrvcvDp1RUaJC9Sjy2JCTvcwPrFxiMQhJD6BmJfAbhtW9xM79yyzbaNAJpcSg5WL2",
  "key24": "3ryqYWKH9hHRx6DQBUcp2Q3TPW8gDGviwmHrKNqta3Wjv8SWaH12dMWu2ZBDuvL6R7EewdVwPm1Kotz84Q8a2Utm",
  "key25": "6Z4iyRAeaDMBTxDoNjPXMse5UW2BTStEjGZwHTengdru9fY4jXNJoZTpZW3Wx3vuUChdm6AjgWS5Km9U1VWoe6H",
  "key26": "wxpqiCLf2maPnypXWKtNp4JtDu1on5D7c2DhLN7jFJ1f1xYmksWjRjuqscUVGhDLwJo7kM2jRtnvuypHduUVFPk",
  "key27": "4NzB1ao87BJ78qvFcUe4eY3cuZwVTk6nxUotLBBmEKpKoKsixcw5Sv7xWFXGvefza2gqJ4gAwmemcFd45J4aFfjA",
  "key28": "KLGeeVhMzPQ5RaNCyKQen5VKMA1P9GiWXWCXWgth4NK6JKoFWWVHywPeSQBtSrcJi2diCKHe7Dtt1HES1mTwgQ2",
  "key29": "9mEcTMwqa7Ku1VfwBmg5VxiSFLGXJMuqcoRgkx4Pkvmk4JtNJKE2CXFHbF99CT3iXM8xuo7H5JVTC3ptDcPPvHd",
  "key30": "3d4LP7t1TTH4XxgAYjcDisMhY3BSg7qjuKLpmbdUysrapMpLwm7eYk6w6R7QMD8vVZJV1ZEqnSAbs25afGzA6eRQ",
  "key31": "4ZDA5jLeCJu5N3mP35zRTxTCz1djsf8byUWCzKtxnxLX8SgvrejMXcRacKDS5fuaaGsr4CjKHNWg9tL49U6Wzf9p",
  "key32": "3VjmbrzaNQQz5T932FF78pMqWnygKJVS9GhEBSvhQkRpUNz91fobKkmmeg9wdiypnAWhRXxtbL7PbEAZgwHiNgXK",
  "key33": "2nbtBfiNnrY86VtcTnvNPerZR2BBVaQWFHSQSM7vPG8KHicqfaYGU9tiq8jNQvAhdbA8Hu6kXHHCB92CMv5CWDFB",
  "key34": "3uoDgeiLPUHL6WwE7ncZymd51dLLhdBGpbmLKYUCGDZwwvfqmx1zwsGRZEqooejk3ghFRz5z1YADN8bL2pG6T5wm",
  "key35": "585AAZCti5Jm8mdkw3GiexoxFygky7CfRs2kbXunFd3t6kgTgVjUHNb5hiQykFVHtJRijwp7eu1dfB14UDws5mqo",
  "key36": "ybyAzoii9UuHexuE7TrX9yFYp5wBtJhhyqGYsUzEkNaAJ3sg92Z6yvHUDEbYB2ks5kWwpkfuEpsBa3Nf8ngZU8U",
  "key37": "fLqU7pvuaL6sKkZdXfh23ERUMqJ1JFznSwjWeRWcbXr6NE95EegFdqFQx2hiDa9dJWRBjfkCtCSgEd1JUj1aQcg",
  "key38": "3XxeCXAw2FPU3E2QXi6h6Ycng8CQMtLGKP5iUxp4SJTKcV2hN6sumGC64uCstQWhxnorPM6Y1AskwsoLfphw9nG2",
  "key39": "qWsDUhJKBJHGx7RtQynQ94FshDoaKF9eGjNe5gCwyatLnnT6YNXSo8iaMDapESrz1T1jK9ksJcGfZDjSRHjTbV3",
  "key40": "4TF5KkTf6fYdMwaQKTVDsf4L9daN5uW5Y8TngW6hgtPwgxCHEwVwpVAFErCEHd3oMkSYxkUidT4qzqGHbJ29Wp5B",
  "key41": "4NnL1Y629KWKaDuLENh8rEmboj9gNHUHCY9jsEjUEQvF4LbnkW3gUbBG29gF8awurCh9R7rXLcC5GXBN2cQnndnC",
  "key42": "4jjHcufVuUFkU1jqzHPA1thirznBRjUumMxHZzY8MkRTG9TAVRjXPHD8exeVzPVRPc4VvcENtc6yMHkm9RMYCASB",
  "key43": "436n18XcbsGVyG1o7F2vxy9Xr6xRgVETjzMzKrQMEpoTegYFujE9adJwE1WPhg6RenBLY6Up6aK1EDb3Vz1RX3fD",
  "key44": "2uBbSbD2SjtkCp4epGJ8xRUrL8gNKqPrDYtEi55y2ovVV7LkgnKefZbhuiVtx6MqY1UaSQ9E7vmuxNwsGrkwbVJd",
  "key45": "5tt5YSfrm63JiUq4khtQztWvtKP6QisBWU6vd1hvgcYFqeUmeQiZ9Cd5h15jZB9oAqGCdshHBM2LP6EAEGc7DTDR",
  "key46": "5BQcmvhdvwqeze6Eo9Wdzsv14GoD2Vrzxr31GSSjHypPaRaGMhQmco8MWfogA9nv3jCLCXcTt96NDTdk27Lh2uDw",
  "key47": "2oEQ2iaoKdWe9FWmysS5687h8UHzGBg1kXz6g4sLH3oy7igxKsuuGJnAsm2w33p36X25GDfM5dwg9T8Sxns2o88Z",
  "key48": "21bGG1QnCrqjwkwVsrPfgvw35Xqf7tPwLdD84qQGGPgNBUubyZ6rnUtaa1ws9sJ8FMNYJe7BJNtbjnpisFMfNfjH",
  "key49": "CnYfAbbkmm6dk2kqN42dzNFoadKgdTjRvVNvG3zkMY25ZhWpdxdBjZA1gJAnTtoEQYGyFhEURQGC9TdfqcHpxtE"
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
