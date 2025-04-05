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
    "52apKUWxdEKTcHuzcWoPQSkgEFY9YXACL2wQYiQZX5rfksP8QPtVLQYTfQ95CfEpPkAxuS9WGviDLm7LjJBr4Ev8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TuDLSK4p8fGrVRineBdAKM97Qrx7jffHYHmwRN4wwNXhU1CwnerhkxWgSEcqyJhhc88QXamKzrAsjziBUEQLjMM",
  "key1": "2xqBJMPABcDVELBUPqYhtEsZMe4cosbnAbg6QZ5uMJeqPSZivqvXGh8Y3LG2vtLUViwhBQnGWhBBvUZsmPfXPfsF",
  "key2": "5uAJkKZEemtHbCmTssmcdZB7dtxs3kThES3cgsp6L7ejG38QZ6cftVNMExV9M3vWNAvEikYSAKtCQQ3VvRH3qYMF",
  "key3": "TuSCMkY7NGJpCVqN66BcaCSANkxcDwaj1HNuW7ukbKAQtvyFkzWauSBXsm7ikKb14uvaBBxN9x9q5tkKF8BwQKb",
  "key4": "3hPxeKDZehbYtYrwL1VSv3NEqw5MfoNgBmeNgPYVBukBXjkhFtR6TYwhPj6eegSxcuBj5nUvjjByCjzp2azztEmy",
  "key5": "3bZzcTGoVkdeHHW6kduWUDYrLyobvZLSAgW9vWGqBCHBuZK8Lg9tA47ihBa4rtZ9WHH9wkmbHfwEF1f9L9Xf8ywY",
  "key6": "nTyxaUoJiizVkKVGir85NUCv9MYJWZz2wT411qVHKN8cyk1145NMk8bGg2Sb8mmk1jYgWSU2t2yKXdRg5uaqgRx",
  "key7": "RsZfugPdGpEDtBmFoJDiYGuJSzfnj2fwcM4SKTut1dJoknKWiRwL8S7Mu27kK2et7r744JX4BHBx6LcKvEQ2kdr",
  "key8": "goKwyqk6avL6MmDdyHnxjaMExmkf3SLMZqiHEBxBDfTZew3oS4WmebxPrdHsJCiTxuuFFnvBp7CPopscT6KpHNC",
  "key9": "2Hv4N9RJFB34tvK2RjtqohUsLKrHoVYgroidpVpWWWVcjjJ2n8kTqqXXyoqJtXw8LhDo5pW3MAt4zVFJUTZvUwhW",
  "key10": "5NkkrLBK2XJuw2QF1486kJyTRUcDa85uWGfEGUT69PmSavjM3hft7p9QtyX5RwYrANrwhd8PKxzh5STgNMN2KdEX",
  "key11": "4jrabsky4ffMgUutYRYVzSzr91AuoqmkUR9cx12Ju5PNZcqc4pmyTVm6ZdTRhgKoQipXwmPakCtYY3jDcwqY5BFc",
  "key12": "3vh8eWdEzgfMu18FkC8HH3rkofBNpTzoykuF9uiFUbMyDR18ESs7yfSZrbaJ7GSXDipevMzpoeJyj7F2xWef5fEG",
  "key13": "3BMqbx3tZcFKV7iGx7JqLQTq8odSBgono7pmKkwqwTCh63LCsKa3DzgFaUXuwE825k1KEnRN8LonerUyiBrhySfi",
  "key14": "4gxEHhCvAbNvWH3ny7TRmTXDTvPKMFxfLoPGKxJHYCTM74UvKtBqArKn3WAw2b7j2nqLxb1rd1ceQzyWgG7beQdL",
  "key15": "3ZqWiTCY3jJrufZHtHKufts4uhCSz9GeqXH2Z4YrGxdh8Kg28JyBaMFYUvL1SEMmRvqVbZ4mZifao6wWXPGmdr69",
  "key16": "4K52bECXnmQiTHsdp4H5jgXUv3pqmdriXmJaWxr2PbiWdDZzFxAMCKzthRR5PT1hUamSbGjdAbZj7eietNLTZS4Z",
  "key17": "QTnwCyW8n6F5AGaMnJNbb11oaedtvkHUH7jbYrHgb4rtAQGPjpHedLAcbBH49soBGCncb7ssNdsgk6xEYpb7AN6",
  "key18": "DGgDb5wXGWdXNtKxMe8eKbGBPebL5misEJCnwVYJ1XTTq89RNMueVzepfbD6XUqrWZf2E37xRC9jmfo1cBQSyQM",
  "key19": "4Lrsheo6AJr6uzfnJSgbipJ5dxTZh7y77efCKFpjtqdV9j68prXw7iNjkULfUpbsiCQkfgyTVGYPfdaBmVKYKpvn",
  "key20": "4Z3TyKmtkwdFcTm9xj775wGKFmLVNp4zg7EuL347SVWa85osaTDgkdQyK2kHuH2GrfTuxKkAQ5Vij1MxEhAfhngJ",
  "key21": "964pqaySVrfaCL6WcSg8BAWbwVSm65uw9hLm34iPqvMRk6RdBe4uuJbb6WkpxMW6Go5doTK3sqjwyUJJPAr4rYd",
  "key22": "5xt3g2M4SDKXgrfWUvG6PqzBGobMycZfg7WG9np93mjWh5t5Bpyr6Bie1K3dwJQTByauST434SyDpV35Tw6t3mdK",
  "key23": "vC82kf4gRuVCzXuGrZmbFr5pU9M5qVYBg9UKDtPCTNJx4UweTWYPwxPeYvYh78beYGqrcLJPMEjq2h4ii6iXrGn",
  "key24": "53N6qBKp4EGqLNtVz5uV5CU1gW3oHoF5R5f9NVhMR6vVRB9zBGM1xcViDQuYcozMJGVS1CvcbGjan2YZKsgtgU3k",
  "key25": "4GpLmaeZHzbmkBxa65vqzmhT7LraCJ8v2ncFfV9o5kZx4RB3jp34Xf9x64VwcqWayqKMT97GSLuzWvubJfnzg3CP",
  "key26": "24YxjqNudcBtTaa5h15gwHyf2E7fS43oDdWcy3uLUhpiK6WqqV5pDJFBJWzMovu2SqRP7eQbcv861R4E8nYAG4Lt",
  "key27": "JcEfEbFmnghgHmrHNHdhnwsc9FVeTjJ73bhMF9QWDPYFR4tpBtgci6whvzGicGJAycvYABamADhPQ7paDUFFzrG",
  "key28": "5hoiwUdXywPDgtUyp7tAWTTvKaWCbSDTDwiTEGyJAGy1tAkvSECaJyG6JiFFtPy3q68ca19CjarDpCS9PdK7jVy8",
  "key29": "2tY75du1oUYvLc8G6Zxm4PYYFNwrBkKMqJfmTcNpoVFC9AXvVCeJ3jiQs47xkjfRnSPkmVc7BDFQs2RydPL8EGJN",
  "key30": "6bTVdZjJHYPm8VdX7MUgu8HEVs1hnVbf5TKDo4rsJkANwmCp8h3z7LXpZFhftUwLw6NTqAogtGBNvqNaPR24aC5",
  "key31": "22pN5q1tMtjShcT2qVi4e3p865pcc6YvEpLvhtrDHC9zXRV1frQPDB1biq4QX71bBt3gbScSLAVhfkAkGNpFswn7",
  "key32": "4onjQAorYBiBtGAJDZeczA9tZBQm2sVpSuQwiWFsSwNv7WaKSBaCjummDs5ffdEyzREtgCsC8vnj8zKzMUYzDQNq",
  "key33": "2PSKeEwFHpbfvAb9nmLTcR7uCJ66Tz8UbLjypBrPD19ykReSUtA1gEeMRMJ7fnraAeRCzsDYRJMSMCYHjZCDphwd",
  "key34": "2sr8Uzdz64pQXXRC8ZtxdBTGKdkLqmuhUwUfcXmxFDhu1r5dUS8MVnnKoFL3Uh6nKH8VCve3yh9jDjtpL1LwA4Ka",
  "key35": "2oTurtFy4tgy8UcRpnp9E6VNyxjc4L1bj7t1EvQsnyq3SFb4rpwksonxerLmyTheuw1ByWa16hi3tXk9Z8k9rVen",
  "key36": "2qa6yTXKM9RoG6DtMSwxH6tF4MHxhCCjvbkBPVhrNzcjnoVk6foMWaouG44fji73W5tFyz1KMDmoRx7uQPxEz8Fy",
  "key37": "2rVGHj6CTGLFZ7ZXM4fMz3mjH6fxNUxtnHFmGPthSD3rpTMCTAqCH2TaLbSg5X5ZDvWA8Puru2dS3zoaQw5eoQeH",
  "key38": "64XvJ315MvpPZ5Y2LNtCupXPqxKBKwT2y4HaAG5FrNcaaDWrxFCheYVWdRRgNtbmb1YGnujndW7Sds79rNE2tUjS",
  "key39": "2zn92HyHAb1uk5civPa2EyGECq1Y629frLckF7wPEsbbpE6VjFmts8mDUWzk4FrkSryb54q7TxfUa3gBGnu95J5a",
  "key40": "5LTxN3xEZWxNw1m7vc2i86YZeKxMCjURsibLcfxCbMYjn2EpW8MRTfBmP3tXXbBmR9m3LtbzJNoWhnA1twBZbdCw"
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
