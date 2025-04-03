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
    "2MNfuFkqDxXcqM8k3bCZYYTjjE3VTbyH5CFVhAPdsu7HZ6cT3hjNk1QGhauNLiK1v9qKGMuiYhhKWaATZimgjott"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydq3quPzgtsnMvkMTzXtDQebjZEzB1rvxGZoXnSd92yuZZd9jHg7KfaHpq4TQ5JvqLexhp72K28JNqQxo1c2Pam",
  "key1": "tUUdUstZoTP92gnmvzt5oPzepkUNPayAppXkgkuJ1SXPjWrYDECVVTGCtfU2cw9ZbyhNynfGWjE4FKpnfGR9Hn5",
  "key2": "5zZmSZG2qwGfQ8htuKSmerbEWeUj3v9TiKrQZHnirqyb9oGRtG17jjH3Qy2g7VW3HTitWyaNAZ5cAzz9Ymy1q1po",
  "key3": "5Q2s7gPmwANAwsWyA3AS7e7n8sreyj7Y9z7pnZBysAG5RphrPsFRFnuurBA2MkBGJo9bvRdycHD88itbSh6W2RGm",
  "key4": "2nQhR1F9i78Hqxrai8MszAeYMftYkKdewg1gLWDEXcC11a7KmqGZiLProQ3vfVWJTPT6Wr8kXmhcwWStURvZvgYQ",
  "key5": "5SuJz1juyRpCFpM39PvaRMeGK6X1mtYcUBoHzDQMaXa9Wfg5eTH8ajS5WfnJmTwPTdCMft3Hwp2dnjYumGLTpZNF",
  "key6": "4iaWa5m6Lv4G3EvFCXrWMSKoGRrzM8yWLeDtZo7LEipWxgvZgYUCnwyf1fNL7FF38LfizktNeZbQxUhccFvbAE7b",
  "key7": "5tt1FovEXvcfyBmbUr6cKTHxRMP8PmHipq8H1VQu8YVUmrzdpwMiYgz3igpwfbtghK7RLv25tFCPLzqatv7tdYg",
  "key8": "2ap1WQE6u5CgqSo8i7anxmTQYMsJuozGRvErFvb4AaqPjyeNpaCgjbm7zyZUuyeJEfNMHwpWqqsZ8y5ZwhgFupG5",
  "key9": "3nZ8TqPdyMMKBzi4rjNiipKEgHc73L5A8B3HrZ9hSizzCyZhrvZUHkzVr5R2PSfeb7LrvCNifFTUcSP6sE1ewSjs",
  "key10": "5tpD4zQXJ3nRg9Uq9uWnhnGzjcGpNwV31pYF37Qe8K2xAEABtzczFsYMhLVAo7D7duqfqyUdHcwzvyEWjEN5Xos8",
  "key11": "3bpFBsewq96Lk3pFSBRycWq3WnS8MXUSwbjdtvXr3WHjTNUeRk2Q5Tg5vqXhJrWk1MLf1uzMqyHu7NzYQQaxXwEV",
  "key12": "B24zKoKtHjA6DWDj5L36kRhKvRuYs8FGnXq49uKEvRafzoznoXL2VbF82bG1iy74MLiVbocwAo6MPDbUeKy1kkP",
  "key13": "613uTMHcQMQUKRXwK8rW329QAhczzFmBKkEXsR5sZdiX5xNbfaDM6KBJyLy5Nh1rDYAnbdcdXbD8Nx7p2qCQyEDN",
  "key14": "3Nrq8a6Z6w1Y7nWNGBkwbwJ4XqiS4tQ4FcakPQP4hH2fRJARuahTdrmhM8iunzMZmB2VeHw9CiEAX2Pt9TwBSoFF",
  "key15": "5GKz2pM3PtjFGLiB3r84uuy9nCXBcHsUZHNeaKJoCnHYEQyATLnQ6P4LFGbhCBnRdvVsBpcXYEPUiYWsdhYrnTfD",
  "key16": "2TAxkZKCbZf3hJyQiurRCGFXad9gpnKpYsojT9ztmH4gzdB8iFg9dA1ELVcoyjNGd2krwBjif3oMh9JJjQMT9tbJ",
  "key17": "4arpByUZ2duCf8wmbeKftqTqUrn6MfyvV53RdsGX5Qu8RmrEgqZ9g5zTvmQYRGKbUARNv4MbdVLcLGRU2HuvE5Td",
  "key18": "65ZEZRbAaamdo8dCYvVv1wWXyjUJHvRzZLYZUxSpgE3XM5qDSxTUBFBeVohLwQ6Ayap9ZR1C6osyB2H4u5srC5V1",
  "key19": "2kCrjg8nfjnvUZNbaeUCcLwbvZ96kCpZMMfrbwUqWuX2jsc6JpHvZ5VoPYXXVeT52jTC5KeTJsBMx2CymBwaxjFw",
  "key20": "1yrAFMK1YNXyZ91UhNwEJb1z8MiqWYQ1B5Aqt3V7EyHC26tSrKEDRWDMz2a5uTVTC23hE34RnuMDfiBhLqgCPWF",
  "key21": "2N7iERjn4kLUuKHmFmiA5wyWyhju2Srq1nnKaYAZ22BPuP2peRohHp1SEh2P9iqard9CacSnCKbSmLABTdb2G5bM",
  "key22": "3bZusK15RfMuoR8yY1XioG6udviYrfypYeyVtZseRruyqs65unp2ksbvBcaQZYtboTMyszNkEvEqLaQrdd2tKSEE",
  "key23": "qiS9YTZXQhynpmyx5kB5x3JDuVepA59qttMpC1biS7GgtcCiUSVtt6BxnVVgLf5YLHzkW4PgE3jizRwjaLmMj9R",
  "key24": "ckwRhvmmqtTSwr2tBconk7JGqDoadoqVzzo6qVFmgq1Go3izAUMXg6qoC5ovr6UwQKj1fYNEhaBoMUv1kiHf5V1",
  "key25": "5fMT5AsKV4QwCyXmobw4PkEyLzp2i55UJfZn3wWmenuFvxcVMHyCtFkmsPkYYHpbKnewx36EnTenHZVUGHKa39kD",
  "key26": "4pu4XKu2DZf4u8Pp835fitLcz6ia5fM8o9UxVFZ4CJDQcopJZ9VPWCw8tp8jAX79CMKHikRdq7ze7ZtXcbb6s8Y1",
  "key27": "5P7K8Wak81rKoyrqJg43Dk5joGdUtWQTWdopZbLnXrKVdJbTa9PYQWzAkAdm6iEfR51VFq8YcxY712ahAUP4dSDy",
  "key28": "4cPansmooz4fgPcnNv1qnguG1KxDR1u7Gi79pTLVVm2UUGjMfsh9ALtirnBxtVkB2tpijaica9FaqidpbAXzrkDy",
  "key29": "3SZ9UVFcaSnA8Sj7nWr4KS5Zd2Hub3jAMGpAJypNAvYKBR9h63XXeB3bx5Q6ojc2bif67RjDCXqnWZfw5ch2oCCN",
  "key30": "fygHo7Ht4qqLMc24qYYAeJe4kRj2R73ZX3uikHr1t2V1d6VkMi4szi7c6UWVPux6YFzdoMUByTJKgChvvZr2K2R",
  "key31": "3gixLc2SACRp91to1BJF6eJXLegwQH3FdPJkJqcGjCHfDeXzqzmtjH5HTkFyyuwU9Dk5XLuQXpwPcwxxAB6GTDCa",
  "key32": "4GbcjLV4DeEoYHJiJVwXJ9gSfzZBsbYCBP3bf6ZkthiWaJSXLaZWWck7tvcXjQXXfLohRP7KmeStbyRRG9Fc23G1",
  "key33": "2UcqbYS7TzvNWcD4FptPa8fbmhZduE7CuLg7mQUajTcSa2NccKKdbqgZ8gLCDqdUtkKWKWwhW5fKGViy857hoGht",
  "key34": "22xP181u66TqHnMvTo1bW4aZ3cprrxmTxuLVjt8ruAFx9FS5hUHGuBWxb2TZDZJB3SJEUqhB7mLKdKhwDdeANJZe",
  "key35": "2sBdBx4tqQELuMi7kSAcTiWsq78ppgLTw6BsKnestLJXxncUoEWiMtfqsgvCriaejt6721HNckrah1khDHPfcs3W",
  "key36": "4cweV6FP6zoNRy2EK1UiuZQBRD72sauGTsUVnr1uj5dJGjHXWchEtxRjetWiumiT3zWzgDWuuQmssLFqEqZxwWtB",
  "key37": "39eRQKNJUUohBMzkNZxmwwkVwbCUvTFqD9DD5NCqbLfGCfzefVdJWx5B6M3DJwdnhV3yQzPWmfyNi3L5Uiz96Sq8",
  "key38": "2hjE3XfTraDBDoxVJadEWZQGKFb7kqCDQPsYxKAU5qahWjYb2wJauCwCo6cQNHKwVPepcsPQ32e4bzzgZ7ZEpRfT",
  "key39": "4je13wxmQw2yYjmHdzvPrD1wnznB8cFSWe7gQAHPi4Gcs24mWaW4cwxcGaHJ8KiM5yeGyjbbE6kdozudjywEteP7"
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
