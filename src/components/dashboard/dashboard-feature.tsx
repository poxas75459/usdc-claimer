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
    "5ed7iD6MmapkUbuymgecCj3LwX39okTu3bVhdnVQWWk9gKL2tqcC36aXzgNh5rHHPHJLfjjwPCRY7wiTEHg5VQTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hViswwU8L1aRLipRxtJ5hDEoDQVULuWSC6VRF34bdszkMJGBmkzMGz18fK3x66VD9QRfskwEDBpoUFNLPBvbhm5",
  "key1": "53LmXsqxHMpTtxarzPHJy4mzhN6qTZs2BqAyxUxBA9e1m623Scmc5mCCqtVH5TV9fCEn3epjDTbaqxyRs3Dmu8s",
  "key2": "4dik82bhTQh2CWmjL4wZkAcvnsizr8gpBeBCkAbKJ1qdEaHtqnUVJwSZCiSLdEjLu3NKMAarXBEsrWt2zp3RUYS6",
  "key3": "2YAiZNX9ZiRdXUsHvydau36oUWKB224LH7x1k3gyibyiqUFwiHUnDC9Gt6g8gaz3VQuJM5PjTHG7hTty6whfhZWN",
  "key4": "7u6RkkVG54fsEf4kann7Kp4C6qvna7c4EZszFaUJxP5pVBfMh3b66rSoRKePji96KdvbyJaRDKJfoRnDhARL5P4",
  "key5": "48vJVxj57U3yr2SjD824JJA2Kt4f3afn2QRzCZ268unKr6v214T5kF458zD9F5pfLnv52jSJZ7mLCpmmzts2ejVG",
  "key6": "4ekNGcySriyW9ZVatMvXVvUQygb8WkTnUXyssyof45ZSCAbZsGW8Spwr5oBHi1Y33KVdrZ3y8jXsxjZEfxqS7Wud",
  "key7": "4wGkmJnhLw3N6Eou4xFoYaxhCt8JCwbQZxwVyxhNjWjrC9p9paQpLCazyPrQVTK4s9bd4TC5hHhSV9xSjiuByrem",
  "key8": "6e5mP64EjxFECepLeS9X6LhgA3Tmv8z4d6Az2oVZnZaCmaqrHQ1YVq1UgZtp7jACidNrMoyhJeVi86kubtjhRYP",
  "key9": "4DDQocojQSqPxRNNRP7bxqkHEh8qY4RgBMnyC3Qkx4SfUCuWkEqGT2jtT3H2JCCaZp5ANLZtEydxV2WubBL5QNyi",
  "key10": "3BXb2iV1UPSMxZ1D4WpAuEg3mcTfe1zXbCofeVfXf4kQrrHpnPjqUCEBG6iDLmpfK3fNVoYMynNJC4xByrVEf1j7",
  "key11": "28EejDP7gQwCjLxhy8UuVMs6A7fQxezoTyvZxVX44BpobPACPRo3crdA3ZB7EnBHaL63dj5vi6wFM6rpQqTz7qxQ",
  "key12": "XgCbjgYBJX1WH7uorjnihMfdEtSRVCw539t5ejpQ3bmwwzQMw9uvrN4R9vx21H4C3r5V7RfFyet6QjuFMCsAJHN",
  "key13": "LVEZ9F2VpoqaFxKFHhMk5JG27PC83xuVUd3TAK7r9Huax9HFNS2KTe6oPGLPk9bHFZ2QPoqVCU1yckYzEcEQRdp",
  "key14": "uBn1SRmCCDJnWo7zQx6QTPLrE56zoM3p8946ezwDmzeBhsegXvDXKY5zgf4BpruyZY1QfiGhg5HDErcFfYS4UNZ",
  "key15": "3zFBxEmDKEokRxFA5hjxWGPVNTzSxcDbXg2YFCsFkgu3DPoaoWgSiS4h81dfixq7eB1LANkQi3uzufcCTXYthcW3",
  "key16": "3s3n5tMQBUpuBu1cedYX9ZyUcPRosTX5zqk6VqMLNtBQAymSo4CpNiBuyzny95SmMakA8Fhndond1cfU2KihhN5g",
  "key17": "26f95FghCehch4hsVuQQKRnYzTAWy82ZSn3L83oijXtCPMk3ucwoVfG7sbUQ13itpjRrTwC3c6CmxTBhHTAPWBw5",
  "key18": "2s2QcMdsUebS3bKwNNpsNb4q8w7U8nmaS9YsBYfjeRFNEDN8MVQkvJEZh3B6ky2Dvcu8fYPNjDz3NQK18P2yTnrf",
  "key19": "46DXqJQo5qviLYYVdrPn6EacR3C1F2RQ9MY8NJqpLw9NCn3DuA21w4z2DgJPV19RKZJNfxVUKw18wi6j2kqe9m5A",
  "key20": "5qPwv3aBZLbUtW13gN7aFLAL41Uq6NPL5Gg2wp6rtJPPiiAUvH6UrmAAGH5gPGGWipHwtkEJFLhnMm9Mer8gt6Vu",
  "key21": "4qbTf5XGWeuNz5dgyr2kNaus7YCqki1kFtHQLgXMNJEtnuZKxJm9JorQ5LHoaBkdVyKZeZAytxsLTMrEKmbDKJph",
  "key22": "5hZbmWYY1Yif7C1RRQmtwS3xDP2TWF4XuvNZTQs6Fd86JntybEUQeYciWnvQTfiaARsjvzzdxHqS7i581vPgxZ82",
  "key23": "5JLu3o264ALeXcV8FisvupgU84vvBvkSdsCcdeN9B1h8iyo7QC4MuF43itBdGz8rsCZCPtcmjponWtf6HNtP5FQf",
  "key24": "73MHN7k6iRmq4oPAJPyQVmpJijdrViaCSR6jokzkPA3Yfh68EpuVQoiK5X5B5mkSPJ7LbQXh9cSKfPne3JwvPsY",
  "key25": "43NkZXKNkkKAtwttHUSyEfhc1JsCxTBJJEMEmEfzY9Rzfw1WS45FjHbjBUGncXmJ2adhZczz4JS7jbAtToJAeq4U",
  "key26": "4zQ4duqaHnaz6nuMeMszQuVK419GWF3XfL6jHZKSy6p54QDEw4bifkgmKXZzbGX4GzwLkmNC7CpKrqDtk5QnZ6C7",
  "key27": "3E4RptvYHaMPsTseB9VH2FSZejHsa8qcrrZ6LMGT8N4k9sQAqUMhQwEaQXE576nPABWABAkrddhcDgfkoxHZeRgu",
  "key28": "2NwMEtTbPcuVENQJ3WeZheTwgXCDT9UFX9RhSR5sJKS4xde3SGB8T8AYR1a88q7chg71Ew3SsS4fRPf7VS6bY2ro",
  "key29": "UK9MEGMuBB5uJwu3hK41NFCqa394Hwa6s5kkf4MnH5pTwxRut6aeyMEMhMUtjF7RL9YpgjTFqV22D5jV1RSmHGT",
  "key30": "HZKHis91E86ikDoC5SdjwHkfTiMNRXV9Ap8ti1GA9xdKXQDuN3EpZqpdgaUF5SCttF56d6TDvbNVTiastDfRcrn",
  "key31": "4w229WUx3wedfjJ3fFwiCdGBAwN8aUZKmV1o2ojdGtFVWDRnHjTYFqTXosi6ZPk1PPCQ68b1yaNNuoKniipJNgKK",
  "key32": "5GR8jKgCUcFvmyJK4o3cXXXQztjQwB6gzx3Ye9mAqdimmTt74pmsLbLw25TrkcZKTT1BakGzBWVgo3LJzF8JcWoD",
  "key33": "464F6oemkQYJ7wvpWkkwkb4iwUMVKZU3gMtXn2tvoVuNSyxgATqneGa2VrQh2gAsperoy6e6eJV1yts35tsam4Er",
  "key34": "3LXPpoTZKFaasckJZyRWjduWSSA4a3EnSTuwVe13XYaaBi8yY5vQ4r14VixDE1d5z4s5qmA97UCU6UZrgMecBtFg",
  "key35": "2TphsThFxixZYQ21v8cX4SffJNfTyagWWJBX9bgVaHMTfVvBzXaQA8JYqDaijxYDNah8Ep5136zmKVbhNRjvLRgj",
  "key36": "WP6w47VmqoVLHg23aUoHNhenvmTfrnPvggqMz5sM8dz64UH8sz729uLTXQmHgAbjaWz2bQJ8nhBx8dyU5wyLwoP",
  "key37": "2JpJ63wyr8tCKF74ihbbEmtm35CePUepSUvwjKq4DSrCEvYjtZF7p9PvzgcJSXTgHBnozHkW8Dy4hJGvWsDXxACQ",
  "key38": "5AaaoYoE9Bw96Ebhvqj7tvsdn28QhUnZ995HWNxVm1BUDPFvrs324DEZstK4o9Qrp2smHoFFWPvK2Xw3MCJQdk4L",
  "key39": "3pAcVRsNY9ffa12XJ1hNvXNRfe7YEotb9o4vendSXqvHJ3sj1nP7TiAFiAW9jdfQFENndkwkEj3UmaK2mCKwdHYs",
  "key40": "r7Mj6P7soM5R6vyovcXyxqgL8aoSZGdDeUNpQNKJx5jnR7XpvYMmvgoLpZ6q4EQ7kRzQsx7X2tuWoNZtZccaN6t",
  "key41": "3mn6Bkqz1trHJtGj5BQitbA4dZcejEEMaj8osoz4WvKs7MSZT7wcfCqLzXFbtYTAgPrnjK5mmMCfaCayMKTUmeWS",
  "key42": "3hDHGY4dnJsheNBj6jjYpWeRwQRoaKSmqcLc7o1TKJeBdRk92PuXf5cBw98S1i47H7FVXDjrsd8QcdZcmbsGGBv4",
  "key43": "sFfwHC3ivk9x7jXgcbUfdd5ZiaRGLmuriwWB2A6kBAHBujAiuxfZ5zEXt9xUtuNYq1iqtY8YKqvwhbVTx1f9XM8",
  "key44": "34jqkJm2t4iAD1oijQ5FebLXUxc35mv1v24Ye1t9Eh2YedTfwfBfZqZt7qa593SLaa7A6GwZCSnrGRi3v2dSy9wg",
  "key45": "38QGcraKy9ujfUZw2wfWoFV3z5w3d6TqdhDTRrJHRhhf5MxJc4DJK58RRRyEMpjTs83TjtHzkn3CQaVeEGZKk8hU"
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
