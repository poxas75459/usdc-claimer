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
    "3WApRE8HaER3YsxemhrMtHAZ4pnkdVSg7xkBtm1EYwQSbLK1WdcbnyxEhA3FSKXp24cfcetCvLp5RkJbNn6TVqzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DU8Vt25Ca5FosyjA9uu9sM6Nkc2NuLSRsWiyeg9fPnZBpPhcyocWhRYXtq15z9dCyAaW7LHfnrNFaBbzLiW9KQB",
  "key1": "CMVTdrG5SkrMQzUcfcStAgdkefffbtwMC57jPq77UHZK32tzgbi54bf5hehd1fRBfpR9ZqGpkDZAaEoChygAZon",
  "key2": "5Tb8qBV6gQpbze4Q5ctuwHt5FrVxGZgvFgi5QBiSqxSEJycdpKKv5NzfLy7v9Q74R5apSC9VTSKpXQ7fxWeL8J1b",
  "key3": "41cw2nrdxF6yFWHaoYBxKRJnNuSWsofKp8mcfkuwVSzzaAtpZw8ZkZver4xFRzE6mM8QuPEMZL1Dd1b4vkctRrD",
  "key4": "3mKBPSywf8NHGyDFtMxwj8uPobvs8sz6cqWidtsFhab247mrcmS8EHm8CBvJYLmBpBZFeU55svauMR6DZsT9eYXt",
  "key5": "5XHMpamAXrU8RBxhcqPmE8oWeXQeiHDzTF39Q5Hm5MWZq663ioWCXz9qhHFUL68kBYZQfAWggz8eE4Lb5pFDdsrk",
  "key6": "2mTeRzo5n4XKBW7xa3xHtgJFr5GGa5Hg5Vt12hR1q2Cdpa9NMBGJNtNEKc6rtFBaimZu7hpXgAaB2eXB9BVNfFsk",
  "key7": "5oi1oRtwXyFSFtfFG6t1E9FqyGdzyhLXhrnCtP8cvTsiXYFMms3cQzJNZ66vvwp2TtrY1ZDZ8jyERo8wHBp4mcoC",
  "key8": "4qJ1XVh74Q19AitStzNvpxUuqmEGUgmQNqWcwHtA6chcif8RfoDfCRvzsWWDdkta1YVVdEyQW1te1gxbPhFSdpa5",
  "key9": "1myixCqND4cdcMrJMi97YXXoQoCTqcmbPh2DrBSZQfnroNrYoSs4vQ8pCYG9KScj6Nc27775G3acrtVNyAZ8mRn",
  "key10": "3W92mTwyTXFwaBs6wPD9XjeJ6VmbLrdWL9LJGkmhQAHNzNbM1L4W1a5D6qdA9vAibUqCTJoMNQwBCY4VABuKnuJi",
  "key11": "UVqQ8a8T9myJKXSyMz7ekcnrgdKKNkVDqDB6oWJi26AZj8LyqMtcym9V4Vz8Nu5f91Ckt9tyKMSRydUu1NHF9wi",
  "key12": "3Goqxdd9Rd3jMGeSP6eChLZHjWDoUcFeNZQMc2p3gxfYfKozztZRU68hEYpZkcgSQ24M9b3bEAVMQEsSxPY3HUhp",
  "key13": "brnjyMAHevtd56ZdLbwPtfJWna3bpkaZH7b2TBL6kN4F9M7z6XxqfVH6DJXcBPr27EvHBxLh7KaC1M5LDWYxL2p",
  "key14": "2xZDMsXqbUkSAVaJJ6k9dgZQZDBn4D1nVEhojSzWGs1vmoPnVMxL2GuxZCBCDLMkhih6BLndGsgLZFEN9m1V7EBt",
  "key15": "3tpufocTmLyZh2cWFDTLjDqW7NZR2m5D2iYavy3JqtTy9Vc6naeLMrhXDHFNcoqm9iVymN7dB7c6E8oAjrWL5YsF",
  "key16": "5hqHZAFoe1GeTBf2W6YgDPLPghThBdcykAbJMNuxuV84TFuN3PBwvH8yWEhMAiH5zosaDvwgoPBYug5pQAYYEijz",
  "key17": "5MQQDPiz8de17bqiPJCfTEHWVK8aTKdru2TA98ebvYP9FjdSMU8bkU1oD1YKs635k4U9q5hMsmsoWBJcwYgkHcec",
  "key18": "5VWsn8AKiidN63JPrrQuFbr7L7PvvSRZC9TKPQosTaB33xDNhzju6u6jAnym2kxL1oDZJrYmvx4BPenDFpE7rgym",
  "key19": "4Wa5SipSphpsqru5JJ1kJcXv5Fmhitba4AeBiHzGWvTkBvhhLQFDied6HjLu9yUxHRiw4jNQqUV2GFtrXE1kruV",
  "key20": "Lk2LnELPLB1hGfovtHzGtLZDF56oDgB2CpVXNppRhGDSjdZ4BdexY8VBhFwHGwp1FPGmY9ppxQeHML5NpXkxVLK",
  "key21": "4zqkD2A7E7EGnZBrutn9BvY8c4xrbEWn2EsiSHMtyWWsW2EMqPFXx6DaXAvuCdma8e1ueuKrP6bsv8g8p8H8LKVE",
  "key22": "P84erbQfgQTGp9SnfMz6PBynS6Wv4BWvGBGfTtva3umv1NiEa9fmCx4oaBfGiYcC1zLZ2rrvtsv1mex8MrHmEmD",
  "key23": "5ws82z39o4omUjAPDseKFJGLMscE2yzwUC23ruu2raM4jFxcUFdxXaKpzUqwjQV4iq4DzfPQ8TKvP2GxZFnHAphG",
  "key24": "5XvAuYje5GK4aaMK139RDiZ28yLeYU8i7G8xH8jV8BXUEy7ZnLYzBKq173RTcCY3KR9tMhFTUWP5HCx5xQYwag5Q",
  "key25": "2UyZLisAaqumtjM25xDZgLvNhDud8qPzWb4Bi9tXUDrwN3mCZXiG9HT67mfz7XbhRtYNzBcNCDTCvuvVNtT38ZiQ",
  "key26": "3vncQEDeLdpLmm9xrqwXWqMRWgJW7rsFfunqi77SgL1WaBYBvNHyonp1s2baaMuyzpNtftCtbCRer7Bv2NX382Mu",
  "key27": "4CSCMKcC3cuZNHARDiVx3jBW9ZHPSMY59mwksYJ7rNQxryUwH7vQxKWUwL9mRQ1NdZW51eJVQ6CbgTAS6DgJH5Gu",
  "key28": "2dt9MkCZRQBQZ9cNMvbJDgBTeXYsFsPm6DKyT2EXP1uPV73awAhhvEFWLDU3muhcmD4bR24iMoYSBgNNtbGm76uY",
  "key29": "2oPcNknsdNKYc9cbAVJReedwq6vthEGhnc7JiH2puikVtejZTsNKYLXRWvQGMZ2rHgpmUnfrHyyWfvFK15HQRHnF",
  "key30": "2xDSDNPavF3MhjXaLSyRmreybmS7RAfkvvt1FZhr1bkEe3uQ6fPwoW36gJXmKgZon69HzNoPmhRCWtPYxZAod5br",
  "key31": "2p7gyu3HqttKLmTMzeSAyRunQdUf37XYMFqmkHtu2t7bYZD3JDmD9ZYH9Btr7f3Zv5bP7HQKdQFnxJ7ZKi4aoYsm",
  "key32": "24aLZGAVhwc6YXKUT67QsnKM2D1P73vazr1dvoFUAhiesZsAEYBLEEZ8UuXSf6BLmjaWymUysdbHdVLfLkJxbxXx",
  "key33": "c2sXrJxWUCMLy7KvxwJWXU1QQt2ZCNwysopuUc7HXGymfSmsqdQyA34ZSgi1Sa8rP7CKy98Amo1MZTQ8FepPN7g",
  "key34": "2GPJXGMGV2b5iRFyVqPQg8seKaVD73MvSebVVZmEMeCnhMhZ3FN1fwHGRxu7UsVeYMC9b1VJTVqrW7oYy1DttQ6G",
  "key35": "4E7qaedQLGa8SnNMixFZ9hWncuznBuvCcL18XS6H8DnStbXuY5Sh8KWj1PwREDgBRNvr5Fikaam11LbKbkViGC6Y",
  "key36": "5jFeR8Dk5q2N6HGR4VKMQK5GPHihJgXSKwfWy5hSv5c3AQ2VmHC1xkXnpwEWDYm2WshGVudZe47NdA3nvPqYNJSJ",
  "key37": "fVdLZ84vgUmWy9U8dHRZXksv14ACcMRtyyDmv3LK8g96r3AmiUvfzDLEbTFJj1tF6KGua1wqyMottodKKZH4hJX",
  "key38": "288WbqnfRphs2ir59np9Ekm6dKF5tmrzs9SGjLF6wWMaQMcfxA9rRgrSeBQ7957czPAoSSgWBRy26VE6crvMDimb",
  "key39": "4LRNTkeZcwKuyPiuyk1AV638u17tJdFRbLBwnHxyBgdSj23vbVMVuxVxdKvnCiBgtupXN4Z8Wq6fBdB4WExrE2hD",
  "key40": "5XaSiB6nZ1fKdKZNfBg74Cnz1m9kvd1jAXcMTRs9MV4HHky2W1zwhQq8Eu2ea3rYhcqKCoE6Hzy32PA8VTt9RA8Q",
  "key41": "4PVTmofqEe6xFedh7EvaphRW3VwsnBRe3nLpTikYp7wZrv18ty95jPux2X22DCU7trookaKyU3bxMJb7v7jbXd1p",
  "key42": "xryQSVVALP3uXkP1YGwU25YWGyDUavDUHgh8BFRrE1v5GZoair1TTJcENvKdH3VxBWNijeEym4uBeb43nHUDYr7",
  "key43": "2qhBJvqcMvPpQcCvLpVkztiqaok67QmoZxGw16GZzjjKHYS1jsCchiD1EEpfmQaf44pUy5HrxaiWvHsUYFGJcFZ5",
  "key44": "5L7DY3ichqBrxLZkKJUek4WzdVnKHfWh6XjahmqsrZT1p39c5m987aHwvXh6hT6EjXwkj7d6As3noqGKL4fUA1rT",
  "key45": "31Yh4tMvm1TXdt1Y8agrRw2qaJAakLagtPzwzVqAsjxhbNTq26rJ6tsjrmsFpixHD498onKaaiWRWk9TP62ACFg7",
  "key46": "2JS2tpvZrhyeSNvVHwqkY2jujpZf4qnwz22fYtva4xtY2gVZe9VoUctjHUkFj58h6KCUPEyKKbbGFn5Wy3v9UANC",
  "key47": "4N1P9AK1sxWZPAnGoefUN92pMgzqcaao3yp3UFvgZypbjTUTXwCMpsUTjyR6rkm7SzoVyrMgwy7ZD8SXnDS9ibR",
  "key48": "5AjqX78APAASzw4hQBqGN4tiz424KHbquqjHT22WnvvsB3GPzG8rHmG1LZ3NbtcRApRinudjGxLdrs1EvKmzd1bD"
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
