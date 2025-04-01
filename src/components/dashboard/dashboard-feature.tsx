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
    "3uLmERyukMHiQhe7DjDSMHaNjxMFimWNm75a4ZLUxsAzkFwHRBJJ7sDY6unmFu9xtD6qWvKrMhv8SdHiu483MZw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXXvCxueZ7cvwzRsLWmgyGBC41Yxcs8HfaQuPNe7Pk3rbkfgM43kMdVBfuf3aa133y9YPtNBRNEufqriVsYo2jJ",
  "key1": "5ctZYzMZNRAbtRXEhPQE9gtN9BA5T1TWeiZ6HmwG1g8SoymdWpdkJvTtdjnFCF7SrB58UkVPk7Wb4cVT1rR6gzJS",
  "key2": "cXuPa8usF1nrQ1WqpAsjNGV4q4TqqiqAVAZ4o55rSyBEBEb8A2DijjUUWCZR1VK8vUFuXtvPzuJLAWVxULWLM4N",
  "key3": "jSYKr271ELnK3CZjnm9tvYFHb1qBv84kW4DaRFeHDZzFGxKgWEcpFw3WHGftiHGXbyJfRsJQqGQYGkWiJpXcCoc",
  "key4": "XUU14cybPter5eU2LCBoxCFuxhVrjZx8PvmKZbHeDDyZLNk3pDzzHdtBfVQJUdAPhSguK1onNfsNWb2raCteHEZ",
  "key5": "61Xg13pGBW84Jh38EjbHoc59dTVvCFQWEjMoU2qLNYBTmGFxUqhZkg5zsdn7hzHeFAKZpkyZjZAiU73cqpxadLMC",
  "key6": "5nrJnHmWhphGmwFKfyETaGTt2nVkcgCKGyCEvL5EywiLvtumiummPwNXW8J5NWHxMuHKU37LifLELfuR9PkSmBHK",
  "key7": "2FXVkZDJL42yuBhggCvKW6MLNX33kukK35RXwCU1KYH24kSgkcZmnVNZXbck18pmtNFyaaCMYVcimyzQqrdgx4s6",
  "key8": "4nHq4ew5PRoNfEefRTb9fTRqTFo4Luo8FKHPrLgxHnnZk2dmT24aUNxFp2sEb6H7XGp8aEe8bvNrXwUPMtmvcnVK",
  "key9": "2DZDQX8SpRmQ3qxrBn4RNmfV9oNu36azxZtFcVnvjXcFAQKUHpvaHCxRCL7HZfmVUr2RmTXYvisEXnDyodthqJh7",
  "key10": "3zARHn5Bxq2hXJq6KVMfJyijmBCDozUW2esv5Pkau9Bbev2ihtRLFxrewMD1VAJRdPR42z3Gn6ARXLqb2xQMrU6U",
  "key11": "2QNEjDm6828TxerChyLM2KzdEYLX1ZfCkoaxcG363pE5GF7bd2PAnGurbxMAFnXs7GXqMg5YBtSt44mNLSbjmG4T",
  "key12": "SQU8iwujXP8tCXzM34bDZAQUPzeKtg3aXKnLCuztNt3UQfA5TX6AyLrn6eqiDfWig865G5ymaLpvMzwuf4A5Q4K",
  "key13": "2gFiEc12r23yHFiJAJyuCkq5p8iAzFDJtPvJbWDAnUEbPii1ft8CvE3icfDY82j9cPpaJQxmigECjJijQcgAc5m",
  "key14": "3X3V1sCgDtQaVh24G2MbYcfnkbXQfL3ZsLGVviRtq7rmwL69FQjDt6pERLHk1DVtDJCMsG9Hkdsm6qwz8V9iqn8s",
  "key15": "38aV5ZA51xibQmqqB45NocNpbFzALrwednTZX9sJ5A9EH4abv3sygt33YYVMxgbkQTPX6i9ReJSBZNKSY4eFQeSL",
  "key16": "2QDm4AtfeNcCxWtViNZSATv1FYxdrGbqetYYhX7y4jvuXq7v7guwRNWh6CvqHkp8vwuMumCQDo2fYF3xGy9tbEAJ",
  "key17": "3cq4ExTv4vWerHAagU9ZshpH3PFMVUad19LFAx81cBHLnwDXwii9dzVXwQTJ9Zi8qg3yVgad1hM1PSoiZqq4gFJX",
  "key18": "5zxnXGYYiyA2AdRmKsBhx8DJET8EXEZYaBc43BYojPxFKjAHYcDsNzAe4kJHGtNydE2PnWatkqcUTqJmx5u7Sf8w",
  "key19": "654cvLJ2QefEJaJnZPnbSMgn1YSwWMeSDbumqDroR61Xbscv5yMuHE9HzaRta9GhV11hAPEHRVR1c4tnS297LvMv",
  "key20": "3dtNqEPkbgDZU4zYdLUZ3ZxFUtSHTwqq7ycbmxv3tiGp2ASb4LHePDPR4ZtCoVHEFiTSkiaBeSYuK9qqBxdinspw",
  "key21": "3er3fPGiLov6W527hKBEVeffuCK8z5nEPP3fgqquNagHeZ7m3H7fB6D8uKB8U56FVUKD5q8qpMK2PDzsCke1snwV",
  "key22": "3KrMPg91dS7gWYagX4iNsLHDLJZCGcpeVhDCHXTxre3ndydMAifga8ofotWNTaGD9aomT1JXubjgCZPjVqSNZyZK",
  "key23": "5oNkRe248qKoazxhFfYUgnCWE2KseW4swok2hEoNURC3RQUdjjVH3VB3BB3mPrj34ewuqiUsVyKT34HT6GRMSDx6",
  "key24": "5G5pcmvi6LSniewiRczBX7iG3dik6nVyktPsZ2UAJ9buuBxBnZtmn2ey8AET3Y1RuYdUeJ1zq8vXLYaXtzNHd1ss",
  "key25": "5uGkdHGRRJU8ykXRuQdysucemC4NrwVY7WqaBEXzSSogFwhgfp99bBwoopcrpkAtwDzkvpDZPqpJGnBvTLRNu3pQ",
  "key26": "2WqcoPEiGbDSVw7aT55VSScAkW9v1RUVmuoHFusCabHNspS7EY52raacGVPpaUL4Qb93kYo9zsGxUiurAuRnSzkp",
  "key27": "56zLYdSKrVMu6DsTDNCRQn2jLYexmKxFP5srBVUKgery24tPbk1Ua3FWYg5a6aUmoSGfFit2aAu4UwJiSKd7XBQx",
  "key28": "4hQm3tencC2BAvRxKRv8dQ2pdUPAgaW5eSPutCbhUn91tNRMHpXj4Xp4GmCqTSgrP52AUVckzYfNzMwqd472uR4a",
  "key29": "4TTjHjAsYWD2ftdexFZ6GR8SgKKLvyokvqooiVmbVMhfRiEdLpo9oLrbRK3yL7CgY3QYMdZDTjvNh6EXBQp5CUoR",
  "key30": "2iHStFNGJqj21Ajx5kCVev8Yrg3Hnnq1eRC9qmRsKh48PD9UGDxrA5sTsvYHYeGtWADxgR9vvoWLWUf8VgDrkh9S"
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
