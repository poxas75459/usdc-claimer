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
    "LajEQ3WsmexyLK2FhznTff6bhts9pmmYWvQndsmzwLhe5UCgK7HCbE1JFqQ4rFXKKSoaSm5DhfR6U6A4vn5N7vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VB259RbaoFCnoLYcHCJ2cFkHdHrfaU8jCoCPiN7nzcmmThem8xgksYuN63e6k9LHN8ueCkSCvczfTdQJGU3mr2Z",
  "key1": "4gtxtFhbL7LH4L4L3ruruZhVznXF7sTtW68yRzH9SogoGY3PxTGzP8jsd5ox8K8zVebM7Ryoj3aYCpKQRiqqsxkg",
  "key2": "1evQogRvT2CFYR3F3pWWLEKy6Co4z9bijxhn9bEKc2S4t89aaMwecPLYiMzAXwC8vYeT33ds8RaZetsGmwGLq2f",
  "key3": "3cKFspRSKqFQzGDheNrMfzM53FTuCPXpUe3rwUtjQnMcX63cVyduKkbr2aZLRqZjoJFhnU3yBJusWHsCYGg1XSvH",
  "key4": "5auv2X7CvXMDfkrEA4BsCsEzFmgp5JpxpUSW8qpZW8K8moAX4WHLNJfrWfSi4LtSxaZzk5YhVECenMuvt2pDg8ii",
  "key5": "3PUUKvoijApfsiSZfaEbQzabj5feZCJjbC7H6P9vWvKXRXKo4svvozzL9mPp84FdZVTjcm5VZrim61mFaiPijE4b",
  "key6": "5T3Uvzf19bBUsvkPmAMbVqV3ZxAde8GN2yDsaJtz9Asad2X3zoQ3xftYEXjLWGtpZ7Reb71z61S8StAp6Vuw5fZH",
  "key7": "4oUqSeede6NzMB1YygkVVpNt9hw9sZ4LtNeArhzsVM7jH3sHyPhZR7BtEi8N9GrXvmKttLk4ZjsRjhDaU8f4GavG",
  "key8": "3h8RAjhjxbF8jWzLqRLZNsYJs5RKxus6BSNDF5YoMHz4hjsXNZCBr7PCJWGfvthfoo94KFNuVtbhKM8pXrZD3bP6",
  "key9": "jyEeZ4ZGbos7Aiu69xBYKtW1ndw9YEMpLzX5NzSvoyzkP4ffVbEf2ZXeeVQ1KYJrKRYZg2QQbk99aBzt1WfLfZU",
  "key10": "4bFMN5n2nbWAZ7QrACvSUEB2ERs5a5D2B6ikHMVK9Ai39MwHbXNJJJ4mEZYF6SbtmJhiTeba5W7nUmnQbc8z81f",
  "key11": "4Aukn5FUcHFSxA9rWyE6aLqFxH2WqWiQMikHWdaVSwEcVa5yoyP19TS7SgbMpTJPN9HH4MasAuYSsXSbxepdibuN",
  "key12": "4a2UMiHebK9NA4S5Uke2eubkWewKJNyFkYpBA6487wVtXMDR9uVCUtABjjZC33QmYry6cvMoRLKSd7KCvHZUqdVk",
  "key13": "sz8k7ExejufS6zejnAjFdp8Fi5xUxVCLffvPkxeydepcTBT3BwypuURnj7u1t3RZpRowRQh7wj6fkTn5p8M6xXd",
  "key14": "cLBtBTH6yE4dJKoD7WT1a6D2497D4TSXAbXKp1xL27rJvKXgodMFSp54ipcsAppaY3QRLr7uM1TcSZ86MbTxNis",
  "key15": "47bZ4a5dgHFNTvEJUWMCYNqHePmuaXxqkutnTMRynJzALSKnPpKt968Tvuhhg99nmCwx9Wx2jdwTG5VAQQcMeBpU",
  "key16": "2tTPyzCYGJmqnp4oMuRiabFM8XUwHLFVzWtLARBWrj3umKJpTGGyMcMdmMEpoKYNUdcmcy92sxLhF93rW9EvT5W5",
  "key17": "284YTxPab3JhNMtNTefZyBetiBH7vXJyKnsGTaDzqNnCiLya2YHRvzzWjCAKrdwgjXk7mAHpY8ogFm7UthjFDNAZ",
  "key18": "3roq7R63ELbvjkMmL2yPFSLZFPxJK1EGufFNcpndQwVyH4pnGLV4aWbGuXPZvWtokqj1JRLzY4h7fCjrE6Zn1G44",
  "key19": "5M19pU4YpqC6jFioDpCVKw4AUxtCDKLryiYS1UU5BFfaivcZQWPRBeE4vAgJBDPGDofPoCMvvbD7StHEEouEwKAV",
  "key20": "xfqCNaMvLsHiv1BHVucMVUq4oHhpRgU5VNxP4nK4KWahxQecZ72e4J2wefCJV7egKiUZqDADVfMhaU9wUtT5icm",
  "key21": "5MYBQGTuBHDvnmNxJEXNMFC9d122cW8EcJapdpRATjAVpF9h7bJfAAwtfToygFuqE4tBFatCXgHZtz1VQMYxVaY3",
  "key22": "4XbzUZVJLdvVvsj7ga7zm8FPyjCA4Ao8NQkjVfNwsheW8ydEkJoXSv1BoMZKgDwNPEx7StWoMnsfNc5WV9rH5CZL",
  "key23": "RSKACUxH3ycy9McRHDDTJMBxMGjw5ZQLNP8u8k32fxNZzhLb8i1to8cSTghXhibcMQXay6pR84ctVwBUF7ZYmio",
  "key24": "5CFCGPQm3VTqHKuJPgUakSS4aSVLUVKUoL4cKmuEKHdMGmw3QxpmMGqN7T95FcxPs2p1k4XLrDQ1uZTyijW4yHni",
  "key25": "3njAQSc3FGdHBDSt8YiyWoddQrcwqnGfkKBkS66mvpVSaTmrWjMqLuERyuvwMytnFaAgrM7VCw4NyrqseaoAcmF1",
  "key26": "4CUBMLhgQNtmw6LF2im3WMsyCSJEEZSeUFwaC3QoyRqf2NpK2qo1PnpP5CPhj14eFdE3Xt8ZRvWCN9EaPeJUt4ci",
  "key27": "31U1NaJKeUtKcPRxxUxtJ53kSs2HoYgHF3gxPY1ZbTQXxNP5V1dMz4KbBC7YEa8EeyuoE4tZhMHyCr72DAoWeg9P",
  "key28": "NsjuYKtFXHyEYEnYdX9ZbxnEWx7VhkRwrhBvaDYRgygVumW6KRMEDSqkDRK4SH5DvaXBGLs6r5PJDnmXqKbiCEW",
  "key29": "4C3ddZtBRvRpic8iSvn5YQpydC48th47t1Qn9bBstXiLmrju8KPzr1F86uXa31hEjHhicC4CcyyVHqwfHDuWppWo",
  "key30": "Kmn5vfmkVuJWAr6smdAuqPCfnjqRxELezkmbQoAHXZ15bGXCBQQrP56VuoCFwe8hs9Z4aYrCfYYge2SET6Q94ky",
  "key31": "3GPW7fcYyw3nsTptQ3WD7vkGYFQwTbAiN22tmg1Be5xCbkepqN3tULpw2wthvDT8Lq3PjzkPtfhUrBNkDLe7cvsg",
  "key32": "53YP8RXWPEfJFGREoA8TJvfm7X2SwCXr4Q7t2iFLpP26Q8HF31px2poQX7HNUdi9Bz8QYA59oFo5QyRgVEJ8pNjW",
  "key33": "49P8AqpfXdGTxcJKwDQPv8DLWqXRhHM1MuKa5TpSP1GQ3idTDnKv6QXpjP2ogEepRR3taHKmwrxaWVCgdbd5BGQ2",
  "key34": "4RvCMeZu3tMzgwoAYD4VjAGUxva544o1eguPRqeVYV4U7eNqJsnbWGSzrHM3RX79aYFZsujZPhCiW8qWkoS8gFcd",
  "key35": "27M8vTRhQmtkyvDYQskRTwoHL4GWp3Kvco4q4jpxU8BDMGLMCjNUDBqNw2KNYqYRwB8Vf2evaT2v3kLxRCP55E6e",
  "key36": "2bs8uQht1w5uE9s4GWFahPUYjAE6jvh8gHaKTt9oqBs8w71J14JPHy2WRbbQqGgkkQg4pXwiaxG9oRhut74cGUVy",
  "key37": "GB1ykcGS59XYAPcwktUFasiiVKAy5oi5CxmGothdNg47o1AiUmWRDgQuc5Txt9uxkxngcQBQm4nDtVVkzSmp8Mh",
  "key38": "2ie9hN7xSGEbTN33vjASnZJZLPgCiXtC57QbqdW4eeXQdL8BaLB68WYRktb1pfMWZY22BBKhPgmmc7TfUE288kTx",
  "key39": "5dkfr5Ns5XHsJNZ88nADimrg7fSQUfy42fVzCpzQ143Qn3aRRWHiVi7zBVPEGg61AKZBAQ3yM7bZYwBjtxHzr8Tj",
  "key40": "3o9bKCA8BhkRCVGap1BJ38p6CwgK5GRT73ikrH9LVeXnx1KEwhjZ3EQu6i2qN3sXSP45fiVKNJVWAJRnM6aZ6w1G",
  "key41": "2uwmJAh6j68ZVRTqDVfAZhQVDQj1pgjEbdtrUuEhCniWcwQCNdvPhsUCzZo5CL3JTkavwuf8WaRM1HNixyfvtfKq",
  "key42": "2LRVPeEZFpCkZy5Eg1BcLN6SDieDfHi5rH8uGv4ccBpHqak2uqSYeo8cqkgTeyNUFP1to4qPMa6P6NW7po65WHxC",
  "key43": "bZ83Ttks9TNM6FE81f3grvRSsySuPBwJt8mdPo9ydMfyWgbRwTVaAgYPoWjwBzghZuJVPueNTpr5xdMdot83C9U",
  "key44": "hzqVAJrWsp1BnwwNYbZTX47ET4SPTscfExKsm2SgRrrgymvgXncgjUm8EacoznH23BvMymdLpYUxev2nDSFsvbk",
  "key45": "2woDLPde9KdrAg6zzxVdxzEcZK15JMNqXuz3MsZenJ3gemkLenNqkxWvyoLk8gPUcGn5LUPeX8qsQmhLeTaxZ1in",
  "key46": "2rgL6KPiS7AoS3gsMWy6FaVo34d4qxjojGcPTnFM2mBPWpHhwZ9psScucbRrT2gv3Pv1VU1uRyHinoTMsz8j6Sq6",
  "key47": "2x6mHNfY6bpi3PRaudBeQhKuMMBgXW2ChjKrqjY6ryiHFiieoFDFpnXiE5i2P74YGUcXqRzt1dQnayHkCmPTAsGo",
  "key48": "Wzu5QoGWFzayZNjYQTWZBP7vSycgrfEWvXQSZ9PYgLFN2NR7V4BgHqAGnZEE8hjvoHEmURjiDhSGev4qf2YPBFG",
  "key49": "5MSfDvcUySf2FFrDsnRV5zVC7Cd7cKQStiiV3akyQkWtQknmvebMwREHMaWVUD4ucu2c59R7nbpUvsqfQTRX4Rth"
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
