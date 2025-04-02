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
    "4xcDB2xMHKGfZauy8CfoA5WHAv8F2fw8rdfdjEz7GtjWsQBWCZYFQqfgLKDwn4FvttztT7E4nEjomgCDKQSPbYHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z3ZCbEo2FFtUVX42sRcRUXXamzmeqwU9GiKDUvhD6SvPo9noR2MjnSTqCtXMh9ocFpM2JeGhGzNtCYffNyiGfQy",
  "key1": "62qNCAJRHBz2M3s3KRTyD9vSHTTCd1JuWmsXDJSQasbiZWusqVCM5pW5g8cEhaufEahzmS533KijT84VmWVBP6Zd",
  "key2": "41YX59kDk6bqoKVihKyr2WvJ5cRpppQjX5sM8crbnbcbmmVSG4aUKTEnfZYL5hV8XQbDxfPaZkYGCqrV6Yfxtc2m",
  "key3": "JABcsXbJsmQebAH9WkANYW69Y7gMVLb9VjknWr95f9uS48mLKRFoREDNre6fqXSNY2gTjJfoRYxSJTExGoQF4So",
  "key4": "35ukja4ZQtwRGVhxmmfpxDKtnmZ2ostVFFgfNVVPDvSvkR5dYXYy4Z9S1dM4Rtnmjboxbw9GPnCuJJzhZvxgkgCt",
  "key5": "4adN4LEr71pC7tKFnxZcfDbSzKY2ULhzhpB1xhrDDuhZpWYjNVkGDTJiDfrhTPPTWBBCKKpZ1N5gPu1LxhyXnWrP",
  "key6": "nPAxbin47FFvFyw9DkpUKjPRhyLisYQmfrezzaVm8wTNB5yDGGYUWiQmPzU6rHCKLXTApRCu9NQJaXbeKAZF1h6",
  "key7": "5VpVwqavokwLnfs7HhrURVrqMpzcDgatVqMK2LxuGo5B3b4wtnCQz9kURfcTtGzvMZeqAZTnr3kYxCvRhkC4CP3K",
  "key8": "2Tbecbkwz2caX36hUqPhaP8asgX4hv6vg7tQuktSF9JoV9CUn3CJ1rEdbabbA2mJ5BTzKgWvS5FSKXFEBEYp63Hv",
  "key9": "27sr3crGTn7a62adpvky9M9rA6x3abbu5f3LfPTbH4Uu7K5YJJbejEPQzhYBApBPj2eGU8yqwURoWzdt5gJRuF8y",
  "key10": "2Y4ZovGoyupuxugdaJXMePQ1Vd4veXpHuD4XmwD6YAHReogKA49ubBgecJQcWTKLMVFWmijJBEc18yLcFb66Xqmq",
  "key11": "5zyyfftNzytpkb8uAftXD8t75AAmGLK3X63CTq3EvTwycTqd5gkDZAQkUihaeSFMxVtEmzfkkQxeqhnTtJ5w1ip",
  "key12": "qDd9YwpgRUDofeZaNt5Zrry3mNiGZ6oMimgBWqdCoiCUoyiASnhdXfbSRNrDwxkYDgHkobj16QLqZ8fS7M5pVdb",
  "key13": "5nBSmDrtfs4gJvdhdmJtNatNVTg4UH792SSnY6nLXoyTx1qwgB39SrDYwkQAyLnMdmqC1zZwe1a6pMJgnPQYHhUv",
  "key14": "UfcL2bTTs6nn7VcvDPsLVWmssyyYUks84Sk5awRN4qWBnnU4oo97sjBvv618dobVv5E617s1c6ksWqj5m5h6YMZ",
  "key15": "3SZddTXWHBUxk4DJ7XbzyNpH72KyTKZ7KthEcQtNXMRnsWoTYydywTtrjXsDTFZRmWuGUAZrzEDXh7gBFEt5kAEw",
  "key16": "4nC9E13m5MkJaUAmjyqdZYyXVpJgC4kYi59JrtuSv28Egk4QtkgbBpWvfKAsXRExZhWd2k1FM4TqLfSuvxtYs6eJ",
  "key17": "2d8Zgw6bsxUVzNKM2j5VhWqZWXLJV7TfpdgRdkoeEMUXjmT4hGuR3rcmyeEJc4qbNGhPM6DEUonry3TN6xyXCVY2",
  "key18": "2JSTcFnZaHgRQstQS7sSG411jThFzz6NhPmFeRyE24BkszyrsrGmxyUrRwuy6QW97ydAdq8Wf6Pyzp2N8ihnoyh",
  "key19": "4xiugB8Dba41hSQJPzwYiUsxj1Ce1UZ51VbA1HATT6Lkixpp932m1ofjDVEWRk7jhNqyiKZpy97UExTH1u2rCqJg",
  "key20": "5K66bwtrNRDVizBCkryqKbTgMEYr4DLUfU1vsfWofktMUSowXRuzPEzfzZ2bhy5w2wgGhoEAMg24rbkUEnEr75C7",
  "key21": "33j7WgP5QGxXbTpgKhFRq39eXHTUdmeJYjym4h9yDmxVwXN9SCfR7syd274n9u4ck7RZMhY7qLC5EfSxQF9DfACq",
  "key22": "3NusfkEvXnP25bpa7SugkbRbMKG12gsWDaijHSMFD1dxobShdeSnMq2u6XR4ELdfqe1jP4M8dicNKdYhNStkPevf",
  "key23": "2cmt9pp83Nak2FsmCX7vufKcwMWxoxAtcEV9ZrTKG5hRJoB7G6Cw5NRDscidnGpdvfAkiP7a5wCgJ5wKoJYnEFkg",
  "key24": "65dWP1bpvaV5dSLebBra4dsaEQvRyrnno6sXh6wYSywKTSygfJYLkhRjmsx9wnZy5uzi3Vy3q9grrYfb62y4Kk8e",
  "key25": "2sCRPZoLoPTs5mTyGHrr8kPKdVznXvTnjw8bTK2Cp29QsQswJkxkvsV2v7msjyuuvaawM4yaZUncsht2NeNyNAYv",
  "key26": "5B63b3rR8FNN3fn8UZre7JHeJzTuctLikwTMBC8wrWn33f2Eo4uza6DFW279YCkbfGxEgozShyj3f6Hfd8QE5J3c",
  "key27": "4ouciC7XP9mPahS4e7ZgGFzfNkK7HjnSnMtBbheHUQeNjWjQuVbmMUfNH2N2TWDr5mAzwpMWoriEVohi2GvXnB7d",
  "key28": "3fsPAiKPPEvCRA2EEPjEYetxQgfCYMMwHBS4SdB6PygibT7u5GaMTFSmhH7XFgRyyg9Ubh71vVEnB4JmZRrMPj7b",
  "key29": "5XA1m93ERCSMMDc6d66bgV8tHqR7n4LBJV5fdANaedn3QMVhLkfLNoFkV4FmjrYBFxzh6VeHBnBbuRTbTs14jBMJ",
  "key30": "2mxTMFLrVrKe6ihrk3ZDdVfaNHiR2azgEVvEDdWwT5mdLP3WVszngNd5Vkp8MbG9oQFR1SfV4n8zainDjEkZN6Dz",
  "key31": "5EkiCbLYxybYzyJhbhGYhL9To2hLpuJEtp7xYFgZTwUigTqew9h98BL1SrDhg1aCqKXLpAEcsRfhMhfhpkpjZmNd",
  "key32": "3Kt2Vj487zWPib9iKwm6aPLLXMwC5Eh56uaAQpgEzJAbg7PVEfQpTCeeNuwNNCJrnqg7RMAubio2mwa224LSghFu",
  "key33": "34KSqCnXzjxdsp72UWN1bs7DRNaddWTe6KeLV5gsPGi1v3hmj613RZdHLY41fv8UcLFSrRjYSeEA4mU7WmdqJzWa",
  "key34": "5XgZALg2K7o5dTeGJL8ihL3or1Dz9ehk8QiMKpuxmFkzCEuDA47aF3anDo2QiQG5b6YykMgL3eLf6YjPxwykreTX",
  "key35": "2skpBSFGnjMrMPwtMaWNqhFwSDbj8kaUZmTSC4ccHYRFBpsBwVDh32tuAwUXfNgURy9A8kDpffVY22MHU6LKtf3P",
  "key36": "3bSxfJD8NT2zoN1SXUxVSXMEPkeM2U7yYQE5CzSAtxRUAuy4HwP3RzdxCbhNUfKZdKfB7XdDhDKc9zp1D7jzsTWC",
  "key37": "2hAr6KHJnuzcY69G3PZaUdibExx9KwqgLdWjoHbHpLuWQGwPMBcJRgSo3inxmtHLXjShTazrQMEMZV8ncXivD7RH",
  "key38": "SFZmLpv19Jf6mpMdVP8uurdJW6mQfx54uVdZoycpRH3JMYjBhVjtcCsMfawKTtkMC6c42DWhkxLszD3sWXXKuVs",
  "key39": "58MqgezgkwHj1NaiFyBwkxXtSqeWaMF52VzhzkE3kZmVX1ASLGz5q8SFzC7uKVYT9hkNKJ8WG2bQQduhKY38RYEw",
  "key40": "2Yxs88bHr6ttvqDrsyWqFZtm8zaKjaGPDQnThKfcZX9QAFAd1RjPdcVfUuqp3DUvkuy1qy1QN86SbUYKLyyFcpNu",
  "key41": "3hpNGU95RxXJER4ese8aSYNxiXwMTbSYveDUD79EgG5HLextDTjk77wRMrsZ6T3mGUpCLdLDEVjraHWZQSRwNrzH",
  "key42": "2pt28DEuh7YCCfvmMJBrTXAxrsxQCdbMHitGvn4DUEwxF7mC9YvQJ8Wwi3eweHRzzWwR6QPysaYZuDF4LjFr94Ym",
  "key43": "2HiYvoPBspHvFAf1cGVbAXoC8qrEcVCngejPYU2m49D1HissTtzuxwfCpVyGgDFHhLgGFUN9Ypb7J7wvv3BWx6je",
  "key44": "2ebc6UF9s1ErvDTqiBtKKoJT2NuNcJw8e4QcPsd6hTDjdVbWtZeD9yUvqM7fQSZTs24GPYeu29QqiRsy56CjwfcM",
  "key45": "5Bmau1WfDRjwrz2kvs6m25Ve46rfjdjtfUQdriJR14RZ75ZDuB9currAcQTVssqLZKGNHFx73RRRfyv3jBqZ9wqe",
  "key46": "4vLPXFPAHvDhoKmUZiBUXcoYoYaJEXectSqzNZVAnjKrP8M5u3r8L487Do3KZ2MxMMu7yTStdrsDiBUGEtdXfQpn",
  "key47": "3VML2qhuHwKBWt94Fp3oA8bATx4cfe7uoZ1YPNigbHPLotMXpoJSwbB2gkaoJCa5mGLNgouHaeCbnAjMCjsZq96k"
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
