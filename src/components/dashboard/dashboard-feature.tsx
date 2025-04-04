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
    "4GarE36Lu1wrR87R1jDD2zdWrAJ8dVA1wbgk7GD2D6KxyA6zyRs2R6hqx5pXVFHEVswaqfgaoSV2Lc9kdJ72rDXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RCbvbKdp4iL1AjzoiYsVJo9zyWKeBmUUwHHNZehxx9J25bZfq8JF3fiCy5nAjv2e2oGgKrkLawo4rUnj2AeQWvT",
  "key1": "2teuwuRN4WxGpzUGa7gwbjuQZA8vEou5389Hq32aFVpEhwRjxV42FmA1HpH28SeBtaye2UKVew3drLDc3ZhMH1zi",
  "key2": "2wmjukhQXkj46fr6hm8eZk8UJ3pFfJHpEjVoxT8EBgDx3e8XTmijXFcAFBFbm4ZbRyMSV8yJ7pxnJgFwZm6jUmey",
  "key3": "SG2LQCY9H11uN7jfYhLCLZK6NDMqTbHxd5WEHQo2scSjC1WDnWHAPWST9oMHZ9uMbYzr3ejTdg5ibb6Qn2Bopcq",
  "key4": "3duaVTgRL2oy6P1YBxzUDHA1q7cNB7B1HMwtNGeGai6eknoaoTReYgjKgBQwB3eG3Qj2y2a1gqLcc1medPUy9Q4A",
  "key5": "2jprx93RiG53HSjdiDQiBGTngz4WHzwnC3pPXXxD9ngwb7znLoQhhbW6XwLcrR8LhMWAcmdnoPNWEkG3ZQXatFWb",
  "key6": "5LcQXKSw6CTGaM9M2hBm3Gtk4q6q1Xa8b7he4hGsET9jA64tb5fipkpiT4mtccWdFQKeWFyRovhDRqxDjaZfbWvr",
  "key7": "BUtZnYK4KWboc9VLLBHAjpEmnrtohE1EhwSRGhfQbAxnYEr8cpWFfQJHQkipU5nE4sPQb7XaCPNRoXiaY2ZFyyV",
  "key8": "4CHoNe1TBiEDwyN4pMePAALTyHjh2AtG8Wm5fdfH4vYBct1CArtEUCSHfyhgYC7DkZ57HCNeWU1McGzeBW4fDUNU",
  "key9": "25Z6tYczapT3PM2TnDqRcnWkfXAkSkiHGnV5vXVmpkDqtyDRTYecyf5A7ruGYAcdtNDens1M9pJQeg2HrpKrozNc",
  "key10": "xUCMDbhNQ9FnGwXPghvq6CkanzjWxZe9S56ZnBWjmAYKgymKrvR3GoYXRjbVWw36SGcSmWJCB9VRwK8nm3X89iQ",
  "key11": "62RACpPv7BQqFES317BPBWixc1Vgjau9v55M7qhpkG5ja9kEV98Cx74Bo8H6BAYVyJ7yGTSsKW1VEhq9pMSNFriY",
  "key12": "4eaGB5Hk8yJuHPNk8eb7Z3h8tuF2hN4qZWJdjLZri5KvBzCJizcEbCXKAH8njgp6zYtBzyweGkkqiPL6eUJLevyA",
  "key13": "4tFz6ySjQwcUwJ51BPXu992dqEv4FS4LtFmXwPhcWdYtBuUW23Jw25WZsiJgPSXP3C3qPzHgQLGxEgCxD1gsszXu",
  "key14": "4fGqyHk4zkjk5YGV9c1DKtpjEg4Z5ZyfHFKRyjfPi5H4LEWYDpj2M8PtCfNp7n6yJgNXAYcQWX7AuPwwTohxu1Sg",
  "key15": "5HSB6BLQxiHyxJKk2gyxw599q6nQYAbp4PyuQBKLYhWL1ziU9S9CSgG4eDyCqiwzaHRmyw83Xk73ceNS8f3CZWRf",
  "key16": "4bEJ9uLc1GEZtah69kLyRmgawz58TcrbFddacrJXBh4G2PL4cUPHhkbnorAXQEEduDbk2gDm27kXw3XyHhdYKv9S",
  "key17": "3pke7pq4MvinQHUVJdJvsP2vMYTPn5F99udmGPEwNFnegbEMvNcJsANrUpPrDvRow55FLfBnej3HbfRi27fbqkoq",
  "key18": "3t8QRGR7KEi3dEAqcmqf7VUbwDYwsThNDGkynRwFVAwsi8SLogNKkH3UNpDz9hxnG8NvC1SpjEw1PxuM2TfKF5oo",
  "key19": "3ZCW8YV6mD9YY4snYeqeRndN76T5JDWTAMjxwUhjDaY6jFd1kc8mAg92gLiXPafqe2oUKHCtbHiN3cpJ1gcaeGyi",
  "key20": "37jgwEsFbSKSGzb3iapvmqJ2U1Rwup3r4RnzikzrKV4NFc56ckSKtTrLrCj4qVVQPfRU3F8LwXkVwm5QRmnh8jSq",
  "key21": "5zoNRH9bkSLWCZwTNGA9WAxmM5EkEcXpSd5p7jiC8xzCSbLFEQWeAEvMhfxMHAUrnNBUVtUnKnZrfpwitM8d6gfe",
  "key22": "4QyujWjCvDojyKZvHBVWjppjBDteYjHLTLZQj6BgFfsdUH5dPKEHriz9TRz4Zhwy6Qzxx2ViBT9XK6FnkgRa7hm6",
  "key23": "27nHUUxzcKZdmbVwF8iCktYsBgh79j5PFeqwwGwQS4kzc6jtyXNdGUzLscry2ytMbM1NiTK3FhCX7b1aa3vMHjNk",
  "key24": "5C5J9tgp8RmxrrLjVoP6wyFrWgXYz6DjpywWGpxAm875whatnggZjCXk1ksgDF9owsSabZBENkYsRmY7hangbW7x",
  "key25": "46y2FXxWaFbqDGqqpZpeqPekxMPcMzos8ghNQcwT38yqnagTBTMxD5PUTCjfG9xYadKYTRPE7kCms7ZX1WXnvi5V",
  "key26": "EcNdMULVuLYuVmBeJpGRBVi8k3s8N4DbD1BzY8LiDXqN1kWc3Dhku1FqJaQLqTJ6WKBQdKcNaq1JKz6yRgUf6JR",
  "key27": "3Me4h4sH5trtE9CV7mZB9LSkAG1vttgGWBiWa2JJXv8CKTwae8mvoBhkcPr81ufSsV2x3qPoJUC3SssRQurbDP9R",
  "key28": "5WMx3B3HHKBsGbJeGb95tPzKGsuEMpoZ6DZX7cQKM8rTKB8k1ZT43NZzUq4LWPM5pweGUjYvXZgy8jLowLb57CFb",
  "key29": "4Bb3NPhTzedJgSESDuo3MWT8iK2RYcfi96PLchrhMTKVTdoDQKHkpXhMjrYr6pdjgp29cCegQuEBLsN7gkQfe1Jc",
  "key30": "37XqemY42xWSVzjqvcWipQpCrzx4c59FRqzb5XiGo4YZpV4nWfqMa8L3J2ew5qDBSbwYjiJJuwSwyY7c8KVo43b2",
  "key31": "2AfpjCNpmEX5uSuoXJuvqDcfAUESToMbXR3oGzZsfFqzoKfWE9oHusoeTg9GqxdHcKoFD1NZrUEHvbjkXx2TJQCL",
  "key32": "5PCwZPoHZEpMETk9bsfidXuqdtDs52ZDHZYRPccD4zxMuLeK8RZZfWEmJyqW4kV8CGv4JxC9M5QqQqaM2gD3cuHt",
  "key33": "DLtG62cQqpAws8Nvy5w7MArh4Cs6bLz5HKbJCjChESqkkWHUnK4vC1Kh7DtnR5qCWwvEWcwf5LZwdV9hfmQy2Ex",
  "key34": "2StfnCAUFXjrxSc59rsbevA1fRnddoReo7Sx49mk9oFS3ryMyLQ5JXDcMf9UvrgCEsuxWDtCm98koEWLS1Gmm87f",
  "key35": "34WkckbMtKJQURkyxojjjYFMegrsPAgccRr5zL3troYt2PoVH7kdXM95Fif19LDG4JX7VsrGet974eRm8TcnFSGP",
  "key36": "2SDueJawEspMsUcmnbjhmnFA3nue6qvMtJmmB2aG6Fik9WeEeWZj8tjNcZpdmPCQ1LUUYaNygsPqQrC8wYyZzmgt",
  "key37": "5RLGTWSGeKanmxCL8Dftvdq7Y9FKvBWN2GLxbW6bYzSZFzr1zZX5mGt7X8d1diDfVgjU2p9zQxgviCxnRn5H53Ui",
  "key38": "2V2KrYPNj53srqqsxz88GsvCY6d6awK8PsdUuJpXGzg5efEdepjZVDRQJqXkK7Lk2GXKHKCp7faGw6doGSXsZ75R",
  "key39": "5AtyxSed1RZ74JyQqx6yV45cNRFtu2HYCp5k9Be1t6v8Jhw4gkZ9cntRtRHHuQ4r12nnqDcKVsRJXFanFSPQKbKR",
  "key40": "53jbY1kgZhZEtmPXPcGAfUCpt7dJqnpx3KXgtNdufg7Hc6ukDMaJ1kPToztz2yRx4NoEP2TDZWPvMMHq9d2cbvo2",
  "key41": "3guqDfhRNwqSWj92u3XL3oTezQWNL2SBT7x1PDeJ2q2T3qv4q23J7ifdGT5aP5yy1mBapF95rAwTaYFA5DhEBhtu",
  "key42": "56wre2ZMEE8uT1h1PnAWdKiaKzX68gHTNnUM7JBdtLVv2osP6LePaF27Rz66nKQQ321Mgmm9oGNazJXQucDdGMpm",
  "key43": "5hN3MwgopG9no9ZRzAMNoCnn9Hym1XbPbgCcZrLMGUEAQ4ZRads9pwVf9AxEnXZU53zJkjL1sMcCf8BdWuZkv9Di"
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
