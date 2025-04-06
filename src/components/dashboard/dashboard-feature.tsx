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
    "239wLiBpsBWnr5h1GyQMgsAEPwJ4SBfh51bxBBTB4huUKFLFXdxtwT2BuXoNG47Gi7NUZYLGeQwCuAoNyG9qYNsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JDivE8QWK5Q4egxbf6wnA6d4cntDowgXF2fAfnxPvoiomCG3R5qiEacT4DKWPeUs9aWNLwJxNMkCFn9RTS9uS26",
  "key1": "KJn1ZNBHctfyXXTUfkeGf1XnyAJ7ZdapmWKzshNfwbQZYGRFcJvwyb11dkN7V8noZM4fqrd5mJRPeWn2EcK5LXn",
  "key2": "4fcVJEuV4i3XmffER5BEWbt5SNvtckXv1Po9cADL9A8LCEWBNYH1QT7EvtG3AqA2HPEN37ofN6n1py2GL5amoAjb",
  "key3": "5fFBfBZmsnazxWwqefBdqgJYP9kpFDb7GW39JsZU3MA74gVpjgEHdLRRCqj8YC1a8X41XPRR5EJBfweNVhiwT9ao",
  "key4": "2sJnLupWGBiT5UU8UEhxfkyHE7pZA9x3GpbHKYyhnbSgg6A2eEepPWi2HtSSzoqcYifCjmTQipm4DUpSLDxoM8ae",
  "key5": "4trnn2d8ofLVNnWSAFedGyDLzrv55FiTxaMZriVqvKD2PQNxbxJ7PfjYGTzR1DHaTyPyVfFKyeMd5QfzPsnazPPt",
  "key6": "3BRoTwacryV5AHMfwNsUkYV8k2QHCQbUoBKfRqAQWhpwnwRCBzeAmfkYvux6aE4XssVeigs2Sd3oXraRTsn2K3HM",
  "key7": "4XyoKqfuUfZWDGZw3cHsLNZkHQbPKGijoHLVKRw51mQyKJjkJw1xrKyJgQJnFN3qbS8bwX9kL6f4xsgw5QV5rnMu",
  "key8": "2y5seFYXhNBGuf3xfSTC37G892sE62Xfv1LVG4ybB3QNPrCSE341ThNakGUW34CxxYQVr36rKMx7VrpgScRikCGu",
  "key9": "51xLHfnvfTv9mgAqm2LRVDtVaAckd6FdNy6PmNYKPEEMGPvfZgsx12CjSSYLaZYXCU6t65cZvozigH2Mt6yddehk",
  "key10": "2DoYd8GZrNf2ZgfpTbHBiQEmQ4rSN1GKjsZdF2HcGbXU1VxHHEY7F5kUuza4Zw4KvwzN7CBAXe5ARdKfeKRrtrnP",
  "key11": "v39wUHezhjrazEmsmRqo9rumrv1vvaWyjAHyQL67Te2KVkHeLPV93oyTk2QKNaQvEfWBPAvfVgMhPDy26iAimVR",
  "key12": "RcMjYGBAbcv9sCcbvXCBgViVupwhxbdQGbB5RF6yZ2z4KqeQqLHzaFAgts1GjmHj5obn7JLqZMLX55d39CaoroK",
  "key13": "5XdhTfn3XtVBSiHq8zAvkFdRHSWGJW9dEMzaonzYo95d3EUFybb1n86za6pU3jCSEcaUEB3qWzSdAf9QVQ662vy5",
  "key14": "e8iieuygQ8biXvJbDQUXirWFiuKUCmREb7jdJ7HUEomysuD7KE4mkAAQQk11DcdLJpZmbhAWccRHqEPqM5YAj8m",
  "key15": "4rzKR4tEuyKduTgyP66TRaeW5qauMSYUx5j4JDeHcnC2ZdjaFkP2MbU3jdmMGJYzJpD19c5ucR6ssbrWmszo8aFA",
  "key16": "4udNu9sDhJZd9BaimVCERSPnmWGjNNxdM8qBJkUw5UsUWHmJHWWdCTfuTyJ8LHwyDvhAyedyC5GGJp9u4fQzvg3S",
  "key17": "26fbTV4gK1qrr7ZfKnDS83zdB5zAVtxpjdsRF9Rcoba5K5vkTd5233LhaTvhSYvQjwc3Hg9ZLx8jgK72SQQWtvdd",
  "key18": "2375jN2RUpwNqGPsRa5kZuNbW6tssVbuWSs1PJBsLVtYze617fAvSFChnyStQh2mRg2GnLCBgLPDVbvmP4ii7C3C",
  "key19": "RaeXQQFUNcLvjpJEmEDjKgQkTspWaYcgMJb2TqL38aj44tLrgKjkjSKk8Y8ijzbTudMAECKZfwDPSsLgDiuDSTX",
  "key20": "24prq3qMjC1TjsfNBSNyajgyPV41qvKkQvfPz7XuNSQEqofWRmPGVsaGvghwRhBjH4v7oXnhPSffmcK8uBMreWvg",
  "key21": "4cEGNXSLfcarBqszhQw19PkFvDzXQASACCZqJzJA82E2mmBFyqcwgr97ViDeF1nrULm3dQmU75ZHarT7n34mErcG",
  "key22": "59FexEpPr6YzPPVsxR3mSSV3dCBnF5vcUBrWTMdYGCSN4YA14tDDymWSUPR2HXggD1MrGH6Q3WdpnRhbVxur1tbZ",
  "key23": "2T3QUV3wBvrgTdZU5t2rSV1X76szceV2qvkAf51mk527Hg3qjBPmtFQMjbWU5ps6UtF5BKApP9ru2c2gDW9TZspj",
  "key24": "DKErsBS6Rz9Nj4Jnf3HQijWPZ5C2hRLXvjYH6R1AYx5qcqLsxEF4BkRg4Gs6aBLJXnKRjXi6NLuZnh1VovX1xfG",
  "key25": "mg6MWFfnuuofrUdUmgiVuApofXFDL1hBgTihBWqrYdhLCAZbMBo7jVcfv5BAknpVwRv5GSEydVTKGVCuTEPTdNk",
  "key26": "4SpSzcCUjNYUHqQ3tjKcifdFK2yNq7cF7JfTMRei6RyamemtvhyJx84R7a7ozc6wLqj2ets1VRsCGjGkZdewWdbm",
  "key27": "31Wf9f5q4QTXtieN4m1ijxtrKTiNo2Awk3F6m3dbDmxEfeHaSc8yDDMmtVCWdVH5iH7fB8CW92zEVQrbzi4X8ncF",
  "key28": "37EkxAvAjR9sfWHUQDnWKFGnKQdmpCYEGqhwymLHFt1rJr8AL8GVc31qcvg5fWtPBsU1cQzvBq8obATMZd18bFvG",
  "key29": "2bzL3zq3DiDngQpNSHP3Gw1xYVHsVsSuJ4rZZc3gP8FXVfr35SHEAyf9Q65qzntamE89BHGm32aKXPkpRKYQJYW6",
  "key30": "mvCeLg1RuitWudyML8wdt5e8W5tj8CkdDGN3bvimxg5zLHCD2jA2GqM7zqii7SGEqCU79ZgVKbt5c23dfNAea2d",
  "key31": "5Pa3yNZiCB81ibpWqCc4woVRQr2Kg3SwJy5kWnsTLjq9N7oMT5h2atJ7J58uTemPXYa7mK8gbtGtAbjXQSrnYEZP",
  "key32": "5MMM5L3rQh9cq8kDz66B2x2i5tquoAumpmvfwWeEYLiufzPaT8ACQ1TKK6EJRbtZLHLoyyJBD14rdenHY5HRTqe8",
  "key33": "2k4GGJcA3soMR7VN4jmN2ZgZ27xArMyd74w524GV8ZepSZ6Nvi8omwY1NKKZXSAxxV2S4VHEFM2zTZ52oAFq8vZq",
  "key34": "3Bb9KVKS3Y8q7seQLZw2UEmavkmNdsa68QhAAjRmS3tL4uXHiHJ4aBSRUSmBKRji2hT7w8utrKjgvVMA5TfbqTXg",
  "key35": "5gN54bTLQWoaqxn7zPUhEs7XBwq29A2ysL9KbtRt5XfXbhuxUntZ78GC3G1TPK8t3KTLvzUBoEsSvrG8w5o4Znsp",
  "key36": "4jyKq43QvcBudUZzYwGcdiv9aEBm1pJuhdjJ55RtXaduRN81ntXah1MEH6SJmxmqXfqxV92pKrtJGVVQXuqjP2L8",
  "key37": "3nH82QgrwpL3qL6GnFK7ezkccNof7ftESdkjbdYMrWWK6u4eF4fXdNCRZn8eka5cY7wWyhvhPcbG3xTiWDNdCXfc",
  "key38": "3nn9hdQZ47J8DG9bWt9pam7hm9gddQPZTsJGo1Kb4Gsxt5eS3uLFZYQBiC2MEGs4R78ZG48UjgQFDjqPwYmsFrEj",
  "key39": "5nLYoyLV8mneRx9onsniCbL3PNGp8EeGFzLfiY54RE5hxNzekWdfggVAcRsfELumZFu5hWpcAkJztG1Vi4gvbm7a"
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
