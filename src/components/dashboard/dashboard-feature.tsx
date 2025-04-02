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
    "4YV6phGYs4FxGKF35tLEBpJi5jXgJp3uNBd9g7FN6qBj7jhPVGcdWvMXYBZHEyFuom7ALHJNfitY3vHRKLtNXxCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RJePVHyiDkZ5QMGC3zdKEKmTbMe9EQfjcCpRCLgektqaqqdjgP3bwpNXgL5XJDhPdFbzKa7NdnZFkHthxqJijWS",
  "key1": "239Cnw6wWrCGuhSX7Jux1Y6oh1DSLMmCt4zKpFo2bcNgqXfs4nkeANVemySe5wvLwdqMjxjcrLXH5NYVZWnSGKzu",
  "key2": "FuL2jrgxvBiqgc2f4HyhU4Vtd3EsyDGtaTRWWCQdBVCps9d5GP7jd2MU6XZLNXa6t6MVyY9fiuRPWrR5FUouDGP",
  "key3": "2h6wjcLVr8rM7zQx9fKGM4kqkNZT2VccP8z563YiF6pER71MVA5YtLXR7tRPaQjdAM9nQZWp9yGYM622jojYBeFF",
  "key4": "5Zd3VCRa8HYt7odEj5ZRLfrKu9pJXt3X8NJ8znfdDotx5VPYsqu28i3jBcRNMmbKNsby8UfGzcwRQVxiWfFAoAwU",
  "key5": "35Q2gLAtVhPescVamqWcX5r3KromKRLYk9UA42B7uVHxo1X75XmwtZXN4zWZCpK43vAMi95pS8rFeg85gvJmHcLD",
  "key6": "3aLxUCvNj2wdr8ERCbwKnpFQ5UbErJugqs2f9zPo2S2zFgMsgpUG1viwQQzTd9RxCdr96yuoGY11QnyDdV25wETK",
  "key7": "5jFRCGBCA5yc1NMiZMq6otKruVVoUEgs3BS4o739KdqTnvAN9xb9scKztbmGqM7e7pBGp42s931XxSdgVHEpbFEa",
  "key8": "4dykaPGs7W9V4dcVEV6S5EhYF9KzYrWaPijyMmSGLektLKfwuyh9iqmzGptdy1DLWvwFFbUomXfLtCL1J5UZr6iS",
  "key9": "yKUY5NLCQqGQPcNVW8TEQDoMpfHnTu3gkUTjGAjFbSPzi7ThueYwevyKDjvW7NZ1XqqEsqv4KZrntYP3Xd1qM9d",
  "key10": "L2pFZK26xh53UK5Z7m6iTqX3AGtVjnp1HdFT5qLjrw5r5LujqNT9Ry6vnwLCRJFzMzQ9NgRn5QPd43odMSSaSXz",
  "key11": "22XqfjQo7i18yYEHszqPivrmwYvtQ8CzJ8jZLG5ZkPtGV89DiQz722nLAsuieRyLSq4WAhvCxjuHhJSnbvVSv7vz",
  "key12": "34gZASRnidQUXKehSpfSDY7P3ZMGpk7P3CP7EtT16prSba2A18j7ES17G3PfwAjuUcCdnDbKDDR9P68NJd1q9mR6",
  "key13": "4x5QU2VQGSx326zJK7i4uye7862efih1TZ1vv1wi8pk5UajhdAXm9EVGYnjFe7zkPGLJJmcrAEnDss11MvtNf2Be",
  "key14": "4m9wW3on4CsjYAyU15vbEuvKGNPuzQ3jMmBPjNEYxRj5CDJAb64VjGAQbWTLNAvTM3bzovvfDZhh94LXyUpY59cr",
  "key15": "Atvp1vTMNfcakGZQASis7qeXUK8YXxcXbWf8TGi1yZ67Zv9AUijxCDQ2A9VnoNN9jMqmgoSqQWxbXeHSWMzwhsn",
  "key16": "3MADFk51tv1xEevJy62Cps5CJTxTpraQoKN9GyKGN2q978Nnyj1MFv375YVRRox3jWTBPV95YZ6onaGdeW3AHV3n",
  "key17": "5hZzvaxjUsaj5Xq12GTbjvbBB7x58QCbKPiAnqJFH35kVKZHr7ZdECb9Jx8WeWk3q54oe9DSK11o8CdQTyNuPnCo",
  "key18": "BM7FAGGd398N7NWfpwADopF3onbmEo2rQwMaEuiHqbpmKYu9i7SuB3cGKSSCCL6w71YjNRnoZnDqcgJDXg7e3V1",
  "key19": "38UzVdSk3joxBy6MTkXmAozNG3xZVdwY1Cuabx8APkQfV733yD6rv1c55VchU5nvUH6FoLkiTj5mbk828L28AH3n",
  "key20": "4aqCKd4vUbvSHLBonH9DMMmh2afPzShQFUT8GP9YWTW6qsKHZWMDjdMM5CQ48PzidPVcpRz87vm4kY9SAVsCtes5",
  "key21": "3oKLvc7A9aQ7FucSkv8tHgRHbPDFfuxwppinHHsZjB5hxjfmDcrB6WX2JarREWaqAF55EXCzenfGZSnf4K5PxsKo",
  "key22": "5SDdFmdMPte4GquUHBiPV71fHRG28nSG65UiRhKABbuXLAU2TCmQnSgGUNtrpV1fBXJSwXZZ3mBo6FZp4R93jbQy",
  "key23": "4YM7wpkhzz7sYXyspZYKXk3YCLaDpWBuE9Tw6FpGT6Dt4PLBX76HXGnzezT5nqpXwNNNHRm43vqSXqXNz6SB5cZQ",
  "key24": "STpDn2dzpMAVqvyVFEBsJTsFT9no7Dh79Eya76Hw6gEcAXvh5beEVR8pnZUqoucnF5fAfSatXuqy9mwRN7WUMXb",
  "key25": "3i5j21Pxfw2qTqShJYYw5K76oCQcujGsJxvuNs4rHUDmBUKofsLTHLT21FkDLQ3SAXjCRphaghcjWXLmdEZZj1ew",
  "key26": "kV8KEK6ihipTXC3DMUcjzrB51tLEATfcsVRq6fD2gCXWpoV9Za6ctoV1xP9D1n3KZAmonezdXSfrwqAfijoe9SB",
  "key27": "41LVHZQTtwH5e5Zf7fZximpEnUwud46W1bpuf1Q8bck9TAa7iFdbqa9ncp9VJP43XMNJVPEujmCYfxrHrMzS6JYB",
  "key28": "3xRAGfZ3wjEzWumBySrFUnX77u3YnGuL3SzkWiqMbUaiWXf4WUyFfWiMuFivEUu5jhLmX9FLdRYzsgoDVEb8Zd3m",
  "key29": "53BL3fZz8DjFmfRowrHgXydugoqQuJ6afavoJarUVfEHbz5QVLG5kdncdDJFTPukW4hr1wkHwr8D2SnJUhDDCaqo",
  "key30": "bPiWcjsUshWnwDrLZibqsS86kKY6nGxyjBk2AAx3xtFGfqFmqMFYdSPyCFHXxyKMoinfAdweuWzso7SfXRr4DUa",
  "key31": "4bgQnVpdYhyRoEDrDaqt59pLLJhhMr6pNC5BJ5hL9NsqmYgCxhsDiyFswbtPDcK7vJdwTWcRQRNgP27frx1LwB5e",
  "key32": "4e7zmbVR4bQPD3rSBByuw6aE2JRBWK9bp4Md7HGBm2WsPSPodscLrgx2Kd3ezdfmLrSEE4L7D5dUGJoticgvSRDw",
  "key33": "MEuLxu67TK2pTpxYNGA6nfkwjLSP43bDbGnE8CZSsnARMthzssBXDo3Rq9AdaWEcnCS8GFfYrvvUGc4yQdNnu8A",
  "key34": "51zwY5EpZVjGXCNdbLptFWid5k6s4Cva5YY8aEmLt8JcVQKocgKahNQkYRbvrZSqYiUzACk7Gt1aHKBqoQ8TPc9s",
  "key35": "3TVMHb73DjYb7F7LgaYpqkh52ghttZZ13nhY1xMrQ7vMg8VgUfUoRQzkFDKRnMmyBua5ubSh3egRg5GThVvqWPqD",
  "key36": "28PEmF9ZMmgeQwic4vuje8ZLgnP7necFKjNzDPnn83d6EtdiF3P85cifkazybUfTJ562gY86pzsXxFJ9scYV19vZ",
  "key37": "2o6c9GE9LKKb1YTT5faUJNPG969LH8bBERZStdb8MitSU5w7Gsdymtys2VhgP83tfFm4srsXfa59H3z8QQ5DEpNz",
  "key38": "WHPAtMf8D1vsPeeSS8Tq2PPxokGkAAyxRhNzGLkPhjxBfybCjfy3pWFJrZmRgLQVXZuqdYhDnWDKQkJS7gamQe9",
  "key39": "5aL95vijsLoKyJsbZM8yfvPC2xNDJbJTTDmLym2hjAyAiFqG1rPT7pW2eQcExZkNMShdJvzCcAv2XghYKX6YZR39",
  "key40": "Mk5vRbZyUaaK9wGh9htRNnPv24MKmqgboNbBWizChjaKHWeJMaVLB7vpvpxrVFxvAL3huA6eptach5FGK4FYupJ",
  "key41": "AMKDgzVHrcA7rhEUDFUPt6jvghcKmZEhsnBPxozsTEKdQWv5W2AXmoLUH8Hn32T8HFMrpf1schSWPxYqfw2tLUy",
  "key42": "4tTp4xX4aGGXN6ZMGF8zW41ePHDQc269c1LrKiE36DrhUoEYZeUBZEZeKyzvTC4tKn3FZGMkWDNpQQ7Eo3BWdANY",
  "key43": "5w5XsUezLib8R193c9sKk7XyF6FMHPB5Pt5tPMi6qGah3ddiDCapuZQqexAgsikekBM9CWygLuVgYhHh3HdasWTC",
  "key44": "4foh5M4TzePJdrNmoYTbxcxJSsckbpyHo4JyzMtNSDUN42UkfEmoKaPYSEg8cjkT9kqh83g3azWeAwJjapNDRYVy",
  "key45": "3mDqHnLhonjqgNGNjZEU1gannXKaBvzkMQzGdEWSc2UgvD9JVxkYFgJPuxVu7fPBb6MQMHMaycbEhHepKNEYiGc9",
  "key46": "XMempPLagH92ihvRZZme3mvqgE3V1n2NE2BJ6CfLrYkcHRuFcyHtgx3kmjXxoALBwgiHZqQjYVDadEZsMAw5cU1",
  "key47": "5JgpjeMLnQTHew4AR25rhgP2Ycvb2U6eaLHbgcqgbHwGx8ggSnKZzNW4SBmLZYfgxNKFPKzyk1KsG5dry5seu7wH",
  "key48": "53gL73vAmzDP2cbVJ6tQQBn89sFted5mLrkhZZMuMSujs2Rvctoyw3yh7M8dR7tkjge4rFGmQzqvvZpCBrB8hxLs"
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
