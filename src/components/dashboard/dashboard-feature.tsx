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
    "4uh8LpNjPputov88awtHGmqjibYPnaXqfd851f7LurXnMboZHcU5Gg4tteen5wJ4qgxKYmatAAgT3xPw3sDu6mtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CmyuUwXeRu9aRz3xGWruvTPQpKTjW5UPtuszjNhDxseFhSWRFNUaPsvNNNTkZwKYVUc9AxVTpdk66cMkNpBAkH9",
  "key1": "3Q8H2ddbzh29ALeAHjzrKBtm6CffeMWGL1bWsbNhyhjEVQGkveGSqBndkYLvGPT7t88gX5L24N9dNLLd8DnK6Gb6",
  "key2": "8yUfYgAUoakXrCLgzhkMZfcHKTUnA8r4umWLX56jsCyVXPD7v7AoMjMmisCBpanWwJXrFBwCDh88MN3evAyNmTB",
  "key3": "3HaceQzBEVNijRAntHwKZUbSzJ2rKnydbX9QQ8bbvFwvoquWXrg4kgwq4drRPdLjudcmDkkhBdKtx3PfstGmmZDX",
  "key4": "4363sHq94Z2P249RYzXdaqQYFhJP1C4sGteofomXKYyPPgGSaKtpA9Q7mgKoPZLBaJL3yV89tVNJ91ukDjWi6x66",
  "key5": "4F533m1N2pAmNCQHm3VWigaHAtxNRTi8QTdGDp6rR87vnWzpLjDAM4MHKV3YTxmtqKosqByAfjpb6o6EBkbKAeJB",
  "key6": "n3fK6pWCjSnkSQKf3xKy9CcJ72X6voQiAjdCBxah3trSY57yH4hxPEGLLBiF4wo9Ty3uRryeSJPDNWGuejcEjEn",
  "key7": "2qMft1myhBBoebDK4CvYgL61Ddy4X7meWpLGTyV4fnhkGgW2B1HKqKbc1XSugEyNrCmCr6tjr3JM7y4hBGLVKT6J",
  "key8": "oRHZtm1kF31VRp68FpSaEDKo7XsJYXPs5Zy4mmzzFKpHGP5JFoE79H14HMhChMGsPoACAtU7coRJbxrM9rLxBKM",
  "key9": "4u9gk38FJJJme8WKGs5miRRNzxhXw1GRQ1cEatjpoci5Lhy9ARfrqnBqF2dRBUhp9cS7xtLASi4hWMLht9Um9cYA",
  "key10": "3FybmEbBkULwhPqMb24EYtnSiQzkySoyTxmcVChGSyr9yDuqMGmv2wdUMRkMsLxZGopFxNZGrM7q9TPHyFUd1se4",
  "key11": "3v1LHcRk1W7tZuxLH3CYwJQTWWAotKdNu3zYgc92k3gvbAyjNjnqoQAuzqUFFxKJiX8wi7SEVNCZNfPomxMTa19w",
  "key12": "5P58HmYPrstQnpabFDcsA36WbBvp5MJsoZ8yH48AbtD6kqbvwPU6SAHUE1PjpAjZXLZdJuNTszswen4Cj41w3RsX",
  "key13": "3ZVBi2Co6avjm45zzLfrWaARzocRQVuNfjfaywnopLN2kFY6BwaNwToQbrwvfoVDmPjwzha4rNXzHQUSicpGLHzT",
  "key14": "MsLfGyt8dotNS7WFnWu4GEHyHV1pwcHAEu9ewufqai2kNTanzeCB2eJ839YUycui76CUHTP8W5U1KqdVRvs84XG",
  "key15": "4GY2eL1sSmoeg8oKN8hS2zucJN743TmaeohABs6XquXNcNq91FCvCLYDmTvwX75z7ZucTD6ytNgwtrTLZ1uPZGd",
  "key16": "41fewk4BuwvCy3sY8PaVn6YHd2RyxrUTaMqEf9bdLUJZEk31gF9jUh5RmHZsrLWoMTNfL1yrtovzyJB6UQGBmWc3",
  "key17": "3uyukJTj5vGTMDUY3cPPgq6m8uiKoNomRFnwUvMReCc8YMdLZqBY76o1cTey3EivLMcyJY44HzARRivyj1aDimWe",
  "key18": "3wtq3XbCi8uga3kn26YE9xPLXeUiAZuyyJjESTWXcH1W57PLEJnd7GvLAzsc4iC4T1hxrYijiEVQtjp1HQDkwRxS",
  "key19": "3sgaJQjHAyZQFhm5K5MnUbdJPQdhwbFghvH3TFkv1LXaYB2rP5mwwyvbevGAwTzzVwERkUU1E18d1eqEHxWp8wZo",
  "key20": "nyNdBqBAPEDB3MM6iSgp7kDQiwsGr19bLt4CfeckK6Ez7X7idh6EDSa9DC1u9wvomzskXznsZHemEhvejpDaH89",
  "key21": "5KMk4ysCPYtLCxb32j3Nc4NhjC71fZtgKEggZuq5MzxXWCu6ktt6XtbfdvhWQu82rZV1LvDBzU7rXWVBjBUZu8v",
  "key22": "5Chx4cCH2Y32Fmfvn2D4z2YSqQLNGxgq4tDMvR18A72wv56FFm7W9Thshvwdc1uuVqT4Vmf16Tqcqe4ipZPtD4pH",
  "key23": "4bTjYaWQssYGJ5eg5YyVPhaMixvsDQ7aDKg32SXjPHf1GaJN2Q3rhhNCpWh84irHSY4L7fZh7DjCNGk1zqxL2Cme",
  "key24": "5KmX3FEnFoMANKxnWMwsd8YgPuFAXFPKVJ2maY2rx9JYcceksnEpUcY9WHhWG3pQwK98Jy8y1AGLv6ZHq9KUKuUG",
  "key25": "4h63NhVb86EQyPcNyyKmJtveUJQ3mgzCGPfubHJmuavnVoaTGKGBznMjLMQ5D2M5Sa6FwYBGjKMnbpVv7XPGTpxM",
  "key26": "5bjENPpThGVV3JMyVJvKhivBfy6EVEupXpNQDv8GEAMXpvZqzLupvfexcCMQabpAGv2XQqCVizDeiHWStGPYfRUe",
  "key27": "jEh1BsWFupSMnPAUEVBYxMnbWPFuvz2tki4mmh15Tkmj9JXnmgfSLy17iy8AToGgeR6TUCwzbZAKWkxAvWMadR2",
  "key28": "4e3R4xctCB63moaNZ5VLU4PHkQDkX7NDijowXeDhUp7eCG9Zju5N8ChAakuanuhLXDZA3c42QY5LnDxmhj4AMBrk",
  "key29": "47sdsRKuvYXqQhr7ACGHF6cmHteAH7zG8rR7M3z6TWQVcYQGZxfwXyoHyJNM7uonWU8qayqDd6aHs22qmB1geCfN",
  "key30": "5XHrLV5XgspagdTngnp1GP6SV39FbsPvf56yHF4yheyAd4vtxgM5B1sc2vx27cXu5Qcx3QN9UiSqp9VkMybbZNUG",
  "key31": "AJjZ4b6Qo6E8K3C6ZxrCQjz3KqBvT6a21THXiUrW432gYWoL4DGmzmyzjtNxtgsYVBNjUinvtKu6HZDGozdi6oo",
  "key32": "463R3p3xuE12Q7vmUyvbDgvpxBAA3cn86ccqLefm3DH6MTzj7tBLVyo7gKyS9afP9moJjWbwFRZdhj8QG6dQqJDX",
  "key33": "2iYAGpKeuqk7xea8F6fLbnj8pWhH9uJMjTocvX7uVvWzb6HRRJpLbguUjpSSiL8jbER5f4Q5jEKYXPwP1tk4S89B",
  "key34": "4HLE8BtLAiVsPQ15fdJx7zGKChJp95Era8oNz9yNpUqYtFnyMcq8dpHiTjauvGCtEUwFeW9ateboZYrfg4nuR1cW",
  "key35": "4gkeD5987fk2DNCY3M8cZH5VYBYiR4wAfCX6T3SJV3bDxC3iRM1htZCUWpQMriDFV5H1QuaknGn219t6pm5q7Vnm",
  "key36": "2NNpMzsLJkSJoURqfLqAxSoyPvVLgykMtBxgUv1QPVzpoyFgHTxsizxrs6WKGAujdTiSMr9onrHok4guq9MXrLMF",
  "key37": "2w3R9wd4Ga5v7v67zuwpkd6J37odJvbD8ecgtLvx7RMdCGyJoqe94ctDjsywv5qfSSWPsJV9ornKX57ZTno44SwQ",
  "key38": "3drCvUzApgaupGhF19rD4BUbSmis1ryy9gjCfMTgW9erUuicFko3obiMu871Ty8zRooJANEw7A4PMZuADo8ejhR4",
  "key39": "4VG4VhSY4kdY5pb4sohvn8RG6vPS5y7CgHuwYRDUtCxdUDN1S5a7wxss5vcriSawQAYdAHdKM8EZHRBFKb6Lb8v1",
  "key40": "4AyAXs5cadchMFUcJpFLTYojTnvJ6A6pbnC3ajRWVSHMtLokS8BKiULv2zeCfqL7xeDujD7NR3kA5w9hjJ9hC5wy",
  "key41": "32PE3Kism3ai67TjMp3yGYqF18HiPKAHzJnAcUAxuzMzqFmQt7XH55JRHXB4oGVeZH5K4vYywrExi8NUNXy1TapX",
  "key42": "5jxhNAgWcxo1rVdnFZ864NvEBJrgpZfwreZMKtjmCKBQku2Ch5kQaKcWY336PzNtfZ5qKGZKDaWqJ416Mimn9zPV"
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
