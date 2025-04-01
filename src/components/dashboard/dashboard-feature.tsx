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
    "pxRPuLWo8bnaTYnGitKA5HRaK6zgQ1iTmupQYTs92xysyLKnKUDDr6y8rRiKcGc8zB5ajBzFhiTi3jLpsHaAcAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8fH3D9QvTbenx5jXwgHX7AVSeuS5MtL2TWg9ZZDv7Ns3hAz3MWZpx7VQJF8sxEGC64PBWKseyTCDczgCxeiX2H",
  "key1": "NTnQRAZcEHwVRHwm4jaeTghyfMUA1ptP6ih5pMvG5eGqPMWAhriitaKBNr297ZwjeC3n27z6nvtCRN4ULVWMKyZ",
  "key2": "4PunsArUpNLcShrraAbgb8M7QofLgtuYdifjdPys6C1gjtXfdkeeBMbjYy76Jk9WWAJM7Jq6gtoaRWEJsrAgwtGu",
  "key3": "5AZ8nxwXs5SpmASRg6Z7kJNxPruqbGp8yKW3rSyJgYyUH92s6tsGpCTveeCcm3Tc5UevnskRXaGFz82QErjoowkA",
  "key4": "ZbQtPVG8Xb8JxMs29TkQ9ywK2a2iiMpbsNGzCyGKZuHnDsvgAr1oZGbtSMKabrfsbYAkeao5CmiMnanhQL4yEzH",
  "key5": "4maKtWgWtAatbDqt7qkDSaCFykCLuRfQK76kKyn9dgz7MAHqMTWbUCLpgrZo124D2RPjz8KjLQFHMQQj9er7LDRa",
  "key6": "29YkDyE6aqAPmgcCiT9CdkkUEcVXsTiwoKiLUiT5CWr9Zq2BFNjBhQqikc951EFMaUfN5ZNR2tAHX95aVDNgVCwq",
  "key7": "2C1bSBcSHMtRU7xp51i3tQickPphpcdfvEgyxkVtLsBdTGomj5w5r3BYdrQNa83QtpYmHwygFdrgEEuv1BAjmosG",
  "key8": "5mXzjngF9yS7btuadQt6PU81ScDDpxvFT9ug7B1EtmqxjZnsdd3qMPe5fNv6dLpCcYeQzirFnp9EGV4xSZLn5uR3",
  "key9": "XzrT8cK1jkjFGftTSgUb5xrgxnj3d1yCsUBQVsLS8fnfLsFTi3vQpgVo88twZcDow2Q9bQx5kCVxodbuW251BRz",
  "key10": "5d6UettgRPrhnF1qdESdp6q68VcLHtg8u4MyiNeQXeGo6TRpRkUvfD6CHXAVkqyvzzth3akjiRLCSmFXM8NjJ1jp",
  "key11": "2tq8XdhtrHE77QqYRNGUnhddhFaYAX6bMNrjAXcwjwXc7WcUzENwhzJJ5S1mw7tx5YSxWguYcoK6mF1kFzY2SPJS",
  "key12": "5p7eE5Rg9SXsNUq2mq9kKtz1XvyrG7wuj865TmdLm9n8bAgZAwztQ6wCXy72waMXBePQLajKZgUYwh81bLMXTTEJ",
  "key13": "3KoFdwKHjCDrqVe7NyfNzuW2N9DAcYiPFJ6TGQ4nWH65Ao378rY1YhZVRNtvRMbFjakrbNyBNrZgWBzHryg8ZrwL",
  "key14": "2ArfNfanrY4LzAwswLXHCwc3GkCBeqDqnVS2atLYYdx4ANoLEDgq493NkAHiVWYPRtpDbUJpzQf9zPqviyPbXavc",
  "key15": "5afhkbnK9A9HxVVqDqZwK5TuLjqmFAUG2EK4PegE6HgoF18pnELe9MPHjGpYHPUkHTLBWwoBGFwPpyJT6X31agGJ",
  "key16": "3yN7N1Srqz6zTzVE9FtdVD1uYK4VW8erWApMfANjH77FV8FYjiTogJrePa1A4Y7Yycd6vdur4vgcUtumTNkwwToe",
  "key17": "4cjUxVm7Eo5axXgMGfBsWvAZezZ3jNk2UZLNK4YTJN9s2Zjx3NMJBXK8siMBESGVQzCkadyC41CNr5mnRbskWpdK",
  "key18": "5BHfnwj3QnvMHCUMWuTtBuWaCMEGcbjHaYs4w1T35i3SbSMNPfJXAZa38S619Bi3ZWYxuHeV97grY5oLapEBU1mR",
  "key19": "5PRPnHcMzo888gjVtjEHDFun8UH88cYRHmrMdusYo9GhbU7GEghKFGEmnav6y6ANERmuctquSKn3Xff81FM9bLrh",
  "key20": "2gt3yuKBvvimr5ZhN25R8LVtfij2SwekJNNCaqX8oPkH33zjHY8gjEbwbBCLHWX81gq4wwDvd5sW31rBTX9LfbZy",
  "key21": "48GGRbkDSgUSViT8LaKiA7wopE2HvhKXeggSjDWXSgXcTp4ah39Udxwod9Pt1KVHeqUHmDnXyvCo6iRFNwfcfKyv",
  "key22": "kUgvmhy7shhNehrcboz3UXe2hvYE9CSnzwEYJCRFWe6fBvXktcZPYjCAiTAkmanFwzHLGkSnzCGAGBwBnqa5tPu",
  "key23": "5VBauT1CxbGPoXucmCUz8ncdbQsKViqGP9yAcP3rJFR6QDmRNwkjabwctEqtEW5Hk2CD7rhAT6VCaH7wRzN5Wk51",
  "key24": "4udE2pHteEjt4j5BNYXmDeddeFDauqrpcfNNPUy39EAn3GRPw55a8LEuQuYEdMnx3rUXACY69QVdYsxquEyCizuA",
  "key25": "2YEFveQqe9mZMVksNKkMLL3D7mdVyhkUiry33uj9DHzFWYMbNJQYboWsQiAwWnEHkPvNYxSDW55h36dit8Xtp15r",
  "key26": "3zsavFeTWqntuVBmgzpvD1DDuuAjGxC2aqX6w6fLPFf8vqqfASDJyfSfqqKxYnyfWicqUrr4MxHFfYBQoiKb7Bsg",
  "key27": "4Q9FCttdADpf7FcZuN57X92RXGtuMBPon4DsT9Ux4oLZczkeKLsamhv5LxU8EbD5REQaS4sHT8uxgju8EbvkC3Ev",
  "key28": "5hPizkvcB8gaxGY9oQNyUcjiG6MKCiAcWqy3aMf2ja1tuNJV4z9qqz3ThyxQbTk4X6yAZvKZs7PCQhVNSgrFomGp",
  "key29": "27XPmCjGPXJR3kzcwLkpAxtTv7jy3atkUYk5RnTo1bQKwTo6cdKtqPrQ1p96tQamKocjpJwt8TBMNvSSqtySUfgu",
  "key30": "28KwPqwxuvH3niZKFoCiBLzo4RVSZYrk8A8NgJjSzuTb81krCdpnHRgWkbnSgLVM5KGnR7Jp2fukcfKmazofJmwd",
  "key31": "5xRKnRjSZKUWwEG6biA4js6shmim9MPPnSvWdN6AUpQYQdSFNHDBiEgBBoxB5QvkpiCx4w7L9CgocgoiFMZqsJPr",
  "key32": "tJxCKLaRTcgckWDNHXTtUN9CEMPhqvTHsN2cEgH5gGV3tNJ23QM2NricqvjTrotAs8psoKDUiDKGci7abgjai8y",
  "key33": "4oABnJFtEQWhuNqtspVa8i3x3rxDspjKZUFJWeTfYFFvGeGdBRwG5arceQtgTPbeVx2dbpuobsFuWHaNxPSYguWN",
  "key34": "4uafcKnmA4gBkYtfDBwqYx677Rqr43juj9H1waMmd351erb8mcXLuobuBp9JKf2N54dJofCmmnKizCbb4LobBh3i",
  "key35": "2DXW1hHvusaZ8YGpTGcSEPxfjhuyccAxo2rD16QXYu45B6j1vnCpzdpF8GDwHR5UZV3H5Fv5VyrG5mEJfeiLmCY8",
  "key36": "4xwofk1wJPQsAEdCho8vsZ8XAnd5WnviGMX9TVPLSYTbLnhzgVLeuGqVVLvZoCR92eGjcXjAfrjGzQkEeUpZU96T",
  "key37": "3NjWnyqW1cJE7BEbnpWxsPtss16DbuAiEjnXAG9w1Pr5EUrWZikNmsbBMgsd8wMss1HktJhza8kH6swDKo8nsJox",
  "key38": "3UaeoZWE4bdiEGphwjBtMccq1GT3MLAu5cw9GE2WzDDBcuQ2Yg7p4AK9CcVWtXkZ2Z4SY1zQv9pddQnqVc4sdxdX",
  "key39": "WLLAt2d2V1nJMNkRarbpjkhF4dofX2bSnzKU5F6Jga5YaRrDNaGqAnyXdnyycLNfrLqwTdmio3cGL3wTwLFVp8H",
  "key40": "4FNRQ5FmyNLkgWjbkTughi8BjDvH1TgfogmjXb8sarwCZdiWoK32BdCxxvfTUF4VyNj7HdNz918saLY5GMt81C9E",
  "key41": "2eMb1wFcjuuhCHmU2EGLhKz9HC8vJXpuZbcR8A1CvRcC81y7We8KBnj7MkXkeasAoTM1jwKgDLV8BUtQ3aNrDo5B",
  "key42": "249RvyateGYrZYn97NrNHRj4R3DaQNv5U3fVxpugcSz7P9aPRbxfjJckCHyEhosK3MMP3FBwgkuYcD8tt4ifB5Mo",
  "key43": "27PaopLAnz9HytUdrd4W8hMUxjtjbm2njRr7MyHN3N7BcHbizTfCMCACTonb26zERfMcyWQE1A2ncwNDcpUP1pBT",
  "key44": "jAkc2jjQebsJWwdQexswkgmoHVXDCcGKQ8HsTfNrxyNeFoXJMXhGbGneMhy75fB7GrYJnmt4CN8rQGxFGe3JSWF",
  "key45": "z95GxtRnNA2pLEBVvcrEwimiaRS7rVvu4SbiXF2JoxH2N1K3UaNsByvYDjzTVtacpRb6aNCoyvMGjSXjdXmJ84F"
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
