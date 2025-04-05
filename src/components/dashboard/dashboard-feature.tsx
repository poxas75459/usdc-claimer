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
    "5s9VqGmXB6BV9Ppop1g2X7u4Y3Qdb8VrXti3Jx2TNzW93rP7wEhBmkAXNcb2LYZJpfpddNrAGiHjfGwjpqT655Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3korZYzdypU7t9Est3FymLNBg5Q9du8KcknVW9eqb3KVdkHi8QQYfewWHscMqatBznzFMVNxyTc6eSeinkf4wAwc",
  "key1": "4RGNNkNF5kXKWVfzwwqXYDamQz17wuq6PrBC42VsPic6TuAdJ2wfpu5Rgh9gVZUCc8duwQGKiRvbWnXEjQVv6t4X",
  "key2": "2ZjqGFiaHDd4T78ERSsvj6Eu3Mw69JD5kN5M3kYfGoE8TiLt52ENRXm1aQEWpVb8bCtNQv6qDsuW7tdTBkPWdmPE",
  "key3": "2Xip7C47Vr5vR1fxMKf8yASpbafkpeUMk8RcGRcJc2CaHJjTJvMwoiQSxLFUZTUCDhYeqdKXx8w5NkZwLJBPeHoV",
  "key4": "3Vo2sEJ7KDBumRKXwyCA6YjTVeKA2Xyhr8XLtHuoXfyGcTsCYFrXrCrMigzR15nK3B2yPLAuhRXbJjjE13Sqeapp",
  "key5": "4SzmawTeKAB5rrLBpzeyM7thnjtiZ1pDmMMGPX89WmbdGA15YYysKzbVc45yLu4ZesGWnCVSkFMXaenNuSu3yNGc",
  "key6": "55msg2MCGMEHNyq2TmMChox7vfwCRzNwGCefhtqMxuwAxg3a2NDgGMTW8jTbXhxuGeid7DnpgBhd7o1QXHSA8wWa",
  "key7": "559bbUJsuAJPKeQig3QfkbjdirhxLVEUxaD9hm2xH4yMQMTbRhMRiMnUqbb6cDaWkYJh9D5TseRnUCMi1KKPkKVY",
  "key8": "4kKPYp1MTXc9NYNZkJbjNHQRdHWabGr8U43veRx5ahCeMbSGMDgMHDyhRa9idijzem8mynghUeGgFLcEx67zmY1U",
  "key9": "2aHYRL2HDzhhFP6iDCaH536D8uYqBW537KB745P6K5T6SnbG4VZtCWpXwuo2AFVYVaiTGiKHd4YsJHuRMaAhTMuC",
  "key10": "3Fmb9m8XSWTT7HtpkiVMWkZxYQFP4DoBugStHH4FAb2ypdExCRtBhoePTznrPBFZJfxRw292k2DQQtevfCswCKmA",
  "key11": "3CP6oH1VnNaf2RHHaGAgZxFtwQkHWm2Xvj1GsgVHybxEAugTo96Fyy8mmTSHhSjgKFhY8yzsByUCCDNyQz9tREdf",
  "key12": "23gbmgBvp2144gkhuERt6DyKw2y2Gd16vbw5dxJRa3RkzPjPp5V7z9SDQRJpf1vAq2WXRsvaMxwCxoH63hG7NZsB",
  "key13": "3naF6WTiD87hvGhrm4HWLrZrrPWPkiuwFpuzaTnQZukNPyV5kQv3ij6oeAounA41Ua642aibRYC5JbxAxJ7HC38S",
  "key14": "2QjSMbTWahdTGFReczNbLMAEGUuNDQW5U3xxH4q5nN7sdAjwbvbf6dWKsW8vMDaxFkBpfEc1HzutJBfridzP2VEx",
  "key15": "2jPNSQctPPVuuLk4tU9Ee8FR39hgw8j5gQmDiKiN8gVkgD7cEMRWYdeA42xW1f2nKwtHC79seMduRM2NrfJpjpFn",
  "key16": "4Sg3FWLxGKNYfsC62XePAUjDSb8zpXjJEuMYRyt7e7C7g16rQ7xhTBQRmJifPEMrwPikL9qKhThb3uDSQMkcmvuD",
  "key17": "5Gfin8jVaDJKraK6b9oFG6SpYUkMWYjryPcwFop1RkhxrpRTys8Cv4GBSuy5FciQG5cknv1SpdHHz6iKTxQWoqB",
  "key18": "4GHiQLJ4XrpzYNUvaCfGXhubmyD9YURcviSxeyE1szpj58wQXDRCke9TFjaSD2x8grjMhTvGmRueYsk44X3MVxwr",
  "key19": "NcByCvrp72hRd6stYNkvzHBsthhSKpUPKdm75VfuKMmr1whdikVMoUDuNTPXaJ8F3pwwjo9dqKBZ8Z7xWKRhiLi",
  "key20": "3jE1XNfrVDuGbXogH5xTo15EGwbwgd4ugWw4a91g4i1N7ZjBsdZhyW6mVq9h1rbBJFsTLSfZwpi6RmGZ1LhVyrHF",
  "key21": "4r3NKYn7TshnkffcBLw1yJUTLN4rQU8KYXjoLTkdTMZitWLZt4K4DPRo3orZR9HVfwF9jzEWSw5Z6UQyeHJARWpH",
  "key22": "2LEHkJWygbNpwQHMVDJvymPFuEDnS6BjvHoiq9NQRerqvhWcHwMZARXQPgoU3DJ53yZkHKpLUuzjy6npaezq9D93",
  "key23": "o1USLTRJ3t5icsvv1kFPF857resCkMeyWfwmX4JZny6cZL1ZEZrc5yZUD7VP7EyMmP1pEdGUtEWvH6SmshkwG6v",
  "key24": "4sfKKXbvPEJt6CMuiKXD742wVxVhRLqt95iBigjEDVjh5vnvxTamdm9VtGS6bcjrH6yioo6ePiAEAJCoFzp1jQBw",
  "key25": "5v9B8JuwbokbChBNLu6LFraiAYAKoCD1BcxsSr1nVYFNzUhhBmCsUG1JSQr2iPRouPq1sShMaKi3ruNdNt9oRhn8",
  "key26": "2AwaGWNxfJTnZicg8GrUECn7ECfH1XRSBUjhfyvUmLGoqfs4wp6FyP8yrb6P9KT5ArNQMeFyPkKWrazFNU4zjCsA",
  "key27": "5TxbWskiP7yZAwNPetrPcFfT3XafXU14GNfzNDHRFrsEiAYgX5jkio9CEThJTxnrt99FxVLiUYkwmUzGVfLdjrfw",
  "key28": "pZdUHwfpXTNT7t1GwARp3Lcvdf4Gqug6eP7Sm98cDm4kNV2orTvwYNZqEftpSXeWbXYaxGjTj7GW2mVgG6nFnYq",
  "key29": "amezb2CtgYfC1gquUjRqj3ef9ESwvLDyuEHRLfAdL8x9TitRQBq1RsZP48yNySUrWb9qQ7CTXEoNfPNCDAZqTMQ",
  "key30": "5GhqnQWQFmL3MJbcz5QiHPLxUdXNfuctiybkedz7gyEposTrZ8V3qRCcZAiHAP5YqE9cEhkKY3f1AUr2qjbKaETn",
  "key31": "3DnwhFd76Ae9Sdt5mVXC4GjqpHtPKC8j4E6emFKJr2n9V7TrWq3ufF5s5QZXmSw4iH8GXJWZrFx7qX85HtV2Rm4q",
  "key32": "3oe6e7xewnswcxHZVuLah1SLPa2dKhQLopQenbE7XESTtRkW11mHKaWVk8wvKRmtJhFjSJ7Y9YmAY88fK7uHTaS1",
  "key33": "48w58ZL4SUez9vjyKLsTd8hm7MPamg7LbQDhVMEmyNdFGBEh6MNPW3LVPTgu88oVwC5nkZyTuiUR4ESALQFUJGTq",
  "key34": "5h7eyNQPs76DH7Nv9hQo91ifW4anK274g7bWtHSSgsjCp6GSmw4yeaQYNeFwE2VJPgUTdTsVt3FiC3mkQmutLhUG",
  "key35": "5pb4Xn8TecnHAFdC7PLQkeBFtDVK6c57nTpwGSW28T4SH4yqwryXB7SRFAznPUb5P2YourQ73WQaXyMLkPVoWsTo"
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
