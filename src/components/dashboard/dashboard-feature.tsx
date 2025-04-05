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
    "5d6UEDJVT3Jf6nFVTyECTFqKrW1zuj1PGEA6QhQvW8MnfAuKTRFxbnSVCHQrbVdvq78DKRX7tHjcU2CcF4subab4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxJsnsvCKZvQqtRwa2zoV5G5Q2HD9aygekJMSRyr1Gxm62FKt4y8un3PJ7221ckXrZtLaa5uQboEdJdG1NupNvT",
  "key1": "5R7P1bhkuWYV7Uux4AZLrpeavf4JhAipk4YTxCd5BRtx1Aqtn3PCJUJeN5xArzc8d4pTKucHJL3qPboJisRRaMZY",
  "key2": "2MC8Kvx1urYBHF4Cp8n9mxxVMeXcb67ymxbQbfgJdnZa2XudrXs2fBHZ6w7q8fyBWjsb9WFHb9ECXyXDbhemrPAh",
  "key3": "3Mz55ykPyB8unEzhmUPP6mKsN2UeKNGYwuodbS6sBra649t5f1sT8nhDCTgWH6Gx8r9Fmz9xcZZQr7X4wi6mvM1r",
  "key4": "3rBKRsBTUuxXQqYZruViYvB417LMBm5n5MJcDKBCPXHZoNyGGN8jmzebjvUhTDt5PsvSEcXYD9dHZkwaqLgN6gbH",
  "key5": "2WctHp95iEZmyZ2UND2LQmMxmHCETXW9iDevBN4cdmAU1hQrM2wxPdSNxvDr38Kpdu36GL8Kxu7jwkAHNdAu4MPB",
  "key6": "3Dnn2Ytu2DrawaMkEmQaCZH9QiDwh5Ftxr1K9KAsBS2WzjmR4vvcLMXF2Kwcbj8VXuUKpuB3URGssF47Cxm1XCWB",
  "key7": "2NJiE89SoabYjUSotZPGQmYzLWwU7n2ZFxC4rUBD9veCeAFkhum9PZKh9ZQKk1eR2vVkLaRuLCv5iDZ37vq3BW47",
  "key8": "37yc6vdu7Zak6X9rW5w4jXdaGcyPHhKANbUhL4ZbLGD8UkQCN7h1hG9f24ATU945Cq5zDSX2gpJwYfveHANgD6zn",
  "key9": "5FyNNi7yMSteYTkEEaibPhN6akg64UZoZnKUhxtnXntFtSPUuPQhBsCfqZNW6BAdtdhdeXAwCVbxXt2xGQFAFUW2",
  "key10": "5vWLqrV5K7yo6emAuZvCEuZXS2yM6e8EFMiZJ4URu8Ljwgfs8YzxxBKRoUGvzoWAXjLHeLYuDmUq86GECAaZA3PN",
  "key11": "aHnmvRpguSfNFz74BNQj63ghyHUetUxa3qQMHcQ4h32jqp71K3YuT75q2ib99g313Zp431dtD2xnJkdnM346C4q",
  "key12": "2asASonXDMg3p4aVDnHYLs4xyifxM1KFsStxJx1wpxX6vDRPjpLdsCasE9YoeXwrG8UbXKc6qaYkahSm522pLuzA",
  "key13": "3XW9ivpk9FVuA9c7YJKe6bcM689zdKWsio18UrWo4GVoaubR7fU3UqFeABWn8BSETciEbx967nUzUa9Zc8Q7qgoU",
  "key14": "5FhKkKtuHJRiACHLRTB6NX3EcSzGtGzg8aukxUqWHKk2gsct4LCAW11Kr8kVnjxdycdeGftbe1mTFHsuRepsQAs6",
  "key15": "4Xwm5BRaEmKF5fKh1uKSCx5ZvLqafnutpqpahhcJM8Mr7ZwhYD3VUAfiPnw1hqKxMqCrHKxkYV2bKrqPcsjU56fc",
  "key16": "3HBLhfn3Re5JzS3DYxsXBqeVCCqD2t5ecNEUQsmj6V1XLkzKZTh3Fn2SrpzzrkNCAVQ1GEQqbx7he3Wbk68Acork",
  "key17": "5dXPaHTBYohHYHZqnHyAGY2Bnq3dt28uwExAdjEQE6vVF3j6uBZVctenKB9u6G8UdWAGDyDWgEeSPgq4Mk3V2Ng6",
  "key18": "4wxNhHVBsiAULq8GbbzoyNZ8FcBTS1bxvBhTpqhsWvd8itmohxxBQFitAVgmdyZV62qQPfbJe41mooFiZ9B8WrfJ",
  "key19": "55oKVbZHWdqug8VRQfKHTy2HQYsXXAqgXTWriyCQexawbNsFgs98WikXChD6QHUdQBGVhVcaw3rjBZG7rNSjQn9F",
  "key20": "PrgstwN45wTGN9bify4mq8fEJLMigLHq9SZyYYwsf8eEH6apENQfNtEoZau9AahJUQtAFQ1tPeEHAqDqEoR1eXp",
  "key21": "2Lk9NPtRaEjkpBnnoKziohRAczRC9FR5e5SrJwiC1sHFdF9sRFK5c2FoiXCqQ5YaKMgH7L7gjcdpWRYrJJ3EpTXP",
  "key22": "5bznbsm5DtjmnKiY5xYHfYU3hfVWY7Lm9L9CQZXic2eQrVG2f8qHnqshAX2gUuJHXWVHZK6tsp3hR18uoAttAzbh",
  "key23": "3FoPy6k5UtAa5kXNCFuLWg9NivPipktd6gXQWTBzmezb75roQpnkzmvmhRNLYsEQphw4omDuXMA8CJcFUBNU3bfW",
  "key24": "3mWPjK1wqgfvaWbtv1KXbwQExB1b3p3FceFQv8kkckd57EgoHKp3C7m2iEzaF7XvPp5TLkq2S28BHksV2VNbWNPm",
  "key25": "5k35XytxGRUbAUk9HWQbB4WdnNeBerhVMZmAtXcGXSNPy9HNrcEysQNQK7c1dum8WJBDnJDodhMSwGYZkgEKUrY9",
  "key26": "23Uuj4g8cXPus541CTbJYcax3NPRBp7ovydC17hHACy8KEaadhEMYNuHoj8e7F2qGFMvKkqCg28zpuwkbatYi6dY",
  "key27": "21XvJXRTHuDMTZPj77C9YmU9iXqYhADEkexVGzXEjc3x2BSFtAvHVXe1oZtqc4g81Vw2dLXsiKa91MwiQLQx2Acn",
  "key28": "GCkKqzKXv5MzTE9Z7uSFuwG5yebYtrqDjZLtjfY1fja3bEPDRboV22ij6ibsQJxhspipQ2xh6joDqtBvpUBx7y8",
  "key29": "4VdMVCUAzwZ32kPm3HR76eBwLRWFqsWmJKgqwWSWg2dUeRAsjojsyW7kc5oAj5yJ9ttPZk35jLvtEfiiUkRnd7VZ",
  "key30": "5bZe1foE5wV5oqLdP4Nt1iuo9GqbYYXaUiCa9QKdqPPtnXicqnvjyrWLdZQ595CzQhqBTtyGdcCYVuFQhfkXYe3y",
  "key31": "27bETRcEsENrUsokJgC3g9cNYYhKTwij6cEScbWaKhvBLRmD2Mt5Rak27rC68fWgJ1qUa46XthfjLrTuHS64XDG3",
  "key32": "4JaAYpsSjfNYG8z4HwEBSgWEb9xyfuEktaN32WyiUYdrA2ik5YiwMuwfh4GZWr9XWPqbymMa8pRfCg2DjWnP3BsC",
  "key33": "8N5BqLzPdvESJB2pg5pnG6Tu3xJAqi2ha8sz5Dcfx35RtNh5mZEdRZSomnMCStmVRJpaFLJiKR6scXUNYbX9DWX",
  "key34": "tprnX3BKjy5nx9M7WTkzjbAiaQ1BoqSUBXi7SGnz67jgWruCZHVLdcD8nfY9RAkbuSeYe9VhYNHgqdkbTgBayzx",
  "key35": "4KeGDt2QafYVxctA7XNCe86oyecAg33k4YQcHbkSQXNEGUTfduTibttVdxrjknMJhnQFgwXutgLRoyiBcxKQvdpi",
  "key36": "3rwA74A1KYeSrqPFGoBLZuwgthPR1e2HRWLM8qLJ8KjyoFwvn9FAsXtAdpcAMP6GxD5kGQkMowJZrqqNAxvVkEgW",
  "key37": "5nGdGjRvC8sxLsjdstVeRb6RQWd2d5mnBHYgqx7cMJPoPv5DBoaYoxpiadZrppc2GGVKfyJzS83zvppdWrQ376TZ",
  "key38": "3hAqQLNWhwg9cKPCGocKscCSef28XhbUwDWmBNnKYRgCxAroxWr8jsZwQAE7Z1dtbcEYmUJk752FR7aKCKbbe2hK",
  "key39": "3Ls1hv9bR2RU6e3bnXt7XYwMddXp64Mvb4qopTXAZgRUz3QgKEyCB6mGhmHEnA8dFtuLeG1xpaGHKvmoS4xy9vna",
  "key40": "Rjhvpb7v9FcaJCfUmkLSTizL73YHcDJ2GBVMrjCmMwxQ56bJuA4i1riL4GKpBmNjU2VPwXhseLKGLuNMCPCtVtq",
  "key41": "3fi2qoB63uXv9SdcbXxFPVgAPhG1ZSspbBn74ro5remLiHwUa3Ft8JDVdpLDqtQrCkA7hKnTZDmjdstKrVSJ9s3G",
  "key42": "215Q86XKGQC6vMbNoYAWLVemb1BaEyUHvufzhvBqyhAUWbxhLo9dhk7b16AAc7DEnR8WDqNpiDdDm6LitWBvuG6i",
  "key43": "34Nxvz2bNbTqVPHoPvK4YPCnePvW8vvMM3VYDkXwjyV5Ljrg2jpxt6DE2gmgLYV3LoofWRGG8ZiwWcDiJtZKCEm5",
  "key44": "4tnjFJxDPZTGMgtKTMZ4xQQAGHeushYB3Ys2EvKZcL6zy9m4nmXp5HFbb3HrYTc1Xkw9u1nrgARRJknUHaFuDNF2",
  "key45": "3Vmo6HXG6RxHJbc327UBxsemQKw72wkn4Rj7W9ULDrRNCeCjkvxJKs6WW8HkR5wFuoq4VdMyfz7WqW6QUZNqgAh9",
  "key46": "33QeL5Q5oMY4Tm9VZ6L7VagYSK4yrfLiyP5ALu9kqb95vRUyEHaPnW35adG6SrMEGQnxcgahPN7HDgnPC3j37eCe",
  "key47": "yRML7HanFnwGDTLKDPjUpP9CPULQjykcWXjCb6VgCd5RqZFnpiXUuSZEATR3tqgaMaSiufe7FrHg6L6CPeTjAcw",
  "key48": "36gXM7D7bDcvr3kN6AdKyJEcWorHmPDa9W5FcTBHD1brepHabpMaF1obqVS7gZwjvXiJEBNzfQqm6GRA8EVPXuWf"
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
