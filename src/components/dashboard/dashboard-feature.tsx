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
    "2iZDg8gLotjWJj5Aep655n6bNo4Am6Zkodk16pj4yovoLDwLVRPifWoChxeeKgxkJBCJmWerummnKX5kXuccSmx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cLFBPuuTGLD4uUw36iZicMdqNtA2JHg9i2MXfD4ZZU57yiWQtEQ6ruffpY9RMHa5qhes4Lg557Ebe2KQu3J7NZc",
  "key1": "4YQdeFjwypR7LeG7Q2bi2dZ4Ss5oqi5bwRxK6bW1MvfSshdsTYet9FozBmmKW9S69xD2yhy5N7S2BuS11deTY1H4",
  "key2": "4JB3vy2whEE6WhLQgAkrDatiTNMFj75gLNiwPhGwY1bKX9bzHiCdhYX87tk87DGhMkS2ptoWQz5KdMG8nqQZ7c5W",
  "key3": "wPMPZk3GJrUVU6LV8muCR93MZqvBXUhGHjHis5dXZ63fN8HbMhUiVz88Hx7CRGVDAuX73kR4KAhffiSs3ntiYEo",
  "key4": "2ZMtMETQbgj21sh2miVPJGLbnDsHFZH4m7XFrMrAr6G43mJzyreySakYSCxBx56R8rMR1GR4eKs3JPJ4QhEMhAtz",
  "key5": "2Rph828Y3zLtazteBFbGyAyazmPcYavWCRQN1BQeyvK9MHiobRuxivop3m8DwtMiGppCzZGFzRLn5pabQe9h7kD3",
  "key6": "4xQpCsM3YZP5rvu3UpAiwo5sGHccxNLaTfYWFC4jMfwkCBowpzH8jKpkSQGxX7w7cNrK7N6SwDDq6GfiqEDK74DR",
  "key7": "3vsS2LcqLF9eCT5WPDZUxEQgBKtRyJTWW7N4CmRmafBa2zkSq5q7uHMQahkGmArowx89XLfhMZgqm2wx76q3rwEC",
  "key8": "RhUnsFgnXg7vuNb13gtQyiKqy4WKPW582dx1SBpE8N2NouTUSVHePYQVZVHE3FfMLVoxwCsZbQKmKtv8UuMn2Kz",
  "key9": "2qYXVH7U6itgPUfEKAs4xL1mgWPfKMpgSbmRUarEr4VZM9gGgWn3GZ9byq7kvaxPXyHZuHPiViXyQHReeWPcQmG1",
  "key10": "2bwsYijv1V8cLMQYmGVXMssQh9uth51N1Sfhc53H9dUX3Sujkr3eQJo6qSbdL2VDwixxRq5nKZK1vs5VLAPMu245",
  "key11": "327DuFhiCZ6FNR2XZfHJGdn1DFa3UHSB7jiLVK7QdhjMvbKPCepmfNw7wjAUMLRToruDC4scTyP8JGa9BNoGhUHE",
  "key12": "5doU2UJhz5Lb28TDnUmGNjNESJLwxcdEHFDKReVp9HAKbHnvShoXTVZzXtNrj6uQBCsXu1cTRhX5pP3V2cLbCMK4",
  "key13": "7L2Y9GYU3Hb98WQ1y6B44qdfNirS8mtM4vccqCSbvwGcN3mkLLALockifpx39wvJ6p4Nv6xHrU2rdASMVScxR9p",
  "key14": "wY1whJnhSykXPGiLyk6AFQUShMNXnuRCz32mmfJH4d6eWgtMY6s6gX68v1xFJMdCA6nwtjwpFZZZVHg2mNZ54D6",
  "key15": "2LbNDs3pprQG1w59N6WdSnTd2faMfycEmtim8nCeQpdMLj9H7AhZAwwHfxP8KSDRHZdnRPTapCJfjzux4P9jFeQQ",
  "key16": "2sA8bm32RdYwXCV3j2GeMQWG3nA6rUr55ShS5CY2ZKcjiPWq2UaA8keogXeTMnuVtCam7x1c51unaac7PjEMHLmx",
  "key17": "2jd5hP27ijBGbqUr4WZYT2ussEJaXGWscL7SZF8r9xiCYsPgwvcwo53bz9Pat2o4preRnuHgi8BqC17yEvVANdbs",
  "key18": "388BWFwMfVgY9PQGjeNeXy5cwNbTA2kXTM9cWCpYwT989NXKWUo61awdHUoRiMn9pLW2BvBJnhhhuq78NCEXjW7J",
  "key19": "w6u3qDWTs6zySdgRV5Ed5vwPSiLVUmcC362L26Xpf5q5STbxQJQyjitWjVP1NdaMDbCywjTrKWXmBCrQnRhRqwd",
  "key20": "GjUKVR3tFtJoKZanRxAuDuxwpjuj1KEV2mPKUNScaiN2AvZDLCHfWBo95UEiUQHYcDWhvGgSJp6SkgsJFUw8apK",
  "key21": "5k1jmhHGLZtm9ZxL91HVRJXaqC7X3ALtDEmYfpwWPuc6EHb4c8chjZZjwC8ZVNzSMER73P8q8UHcrZf7GNVL9YS9",
  "key22": "2iWwLfDMAV5hGrCYSjez6WuCLizNqaKgVkDyEDtJiEnp3LdGbUjtA1NoA2FW71eUHSCQ6bSXVJzV2wcQiSXjkBoj",
  "key23": "5hLaJXx7xAtvN7MXhqhTHwDANNrSrkUFUaubRtomZtkcivnjApoCNWuvXqZEZkesVW4m2MtBuU1h2wMxhkyBgxyN",
  "key24": "5hTcFdAqZB9mbQaQERFjotKCy2zeyxcteYTJbj95vEcfpR1bqcf3TgtURNnpJ5Q86A5SznzECbtp92UP2Fsyp2m9",
  "key25": "kTgV4pVDYaJNMLZA3zWMqgBLJMfJS5R1LCPtozFx2ThDDGy1cMzA9f417TqMk5FxtinuuBiKKbBxY8H5gZSh1a7",
  "key26": "24GtC2QCMbWLAUEFeq8fcQ7DdbEMGzaJkBuEoTY5hy3D87qKtfeJMTQYarW7npLkiKMhByrKL6pTF3iwgcvCD6LF",
  "key27": "3JkxVdQ9ERzqQ6xLiGG9RHknJi2FARrKAECDrzcEbqeTXZ8caeRM49E2Gu1gZmeepWd8LBSd3G1B211mVen7daMg",
  "key28": "3xonoTk4c3jWS2HBeqvTU1suhCLrYSnT7yABbrZhTjxWVqdiyEADsqYFatyP63SMBTgt1ynWxB2jPbsj6aNBoqhZ",
  "key29": "34L732wGWEWqu6Ky2oBHB9AdiuupNuoMi8Lzu5zJw9H9z9urCx7gs2GA3o5JWdXTExYMdf9hZQXwekqyFrw45Yh4",
  "key30": "47srNSfZJoQZtYyMB8E5tscFh5xzdziUXx5HdCfWnx4XdYDYEgAvBbTQWa3H5oRrPkvD4WBJCuKkXPi8Jr7KNUX4",
  "key31": "nVGj5B5p68Qb2pbGCBMd1PivpjLiQQ2TedcnAPYkqeFCxuP8LFrrxFkf6a5TejPJDNYn1cRdKxweroQMGvRjzkA",
  "key32": "3fY1TFLSTFBCRqqEa3Y9tsFZ8QfE5zWxxaHmmwv8MUqFfREZ1hn7zJpfncx1vTHq5neMfq2iBUQZhRNBh8DS569g",
  "key33": "4sF5vN8QtLYqq2v6bzb2G4kBZu2o5WSE7t9T2oFNja58tPhdXU9Mf5zux7WSUXjECkoMzaXyBkjJhCJJHqYkT732",
  "key34": "49kx1BLryu2ao9MkVjpb9MStPJMfbPMbXKFqLRJZqAnA8QUxTsoSaA9T5LD3nzrYdYHJj2h4Bv9qckrDgCBNPpJ8",
  "key35": "4FBPsu9mvVEZVz3Ko1StxY1dRQxke5TNfbUNFDM5BLAXm3gZ1CF25oDbx8gGd4SThXaLLq9QjCHhZcazoqQCLQpe",
  "key36": "d4mW8AvbaXhWgQd2qca4dK9MU2x6XFJXJEfssb1rkR6RJAZs2XPQ47nHuuDaRH3UZNhGngUHRNamCcbfkAom4oX",
  "key37": "BtdT7McB9D4MMDAb4QjoCKdb8Td14P7V9myUVJkGUNSg3rVmxQPVUiT2hAJ5heV2wfwxcFJ7yHn6rvXPvnTGzDF",
  "key38": "quWLdBBfhwbTKCG6fX1yAXuUsDJMKW99gbUHMXxS9HdhxmVXQT9KsJ2PZwCQzcqcFMo4PhHWPjqQWhx2xJa8m25",
  "key39": "4dF9sETRXbTvcX2XDfNKnFYpnQvyoubuHXtRYFepXko3By8YPMA6UsiWjgqRB9hxQm2n6hqP4A2cnbRsrL2hNNrS"
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
