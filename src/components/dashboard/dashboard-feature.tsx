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
    "3RJNEPuhcJf6YvRgroJ6jn54Avjxnn77heuLYcvPLbQSXk3HMTfiFbZx8fRrCGdhXyN1Gh12GfZCtJPzknM91Yqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477GUKExqC7fybUsjtFJJsNZVxMdpELriyQKmpVBavhkP8q6oSc5NGzBGiAXCLefDq84sQLcAF56KPFWEb3RWqeS",
  "key1": "WcF6sVDccs4GfRge8CwbjV1zynJcjiV9BSj4HWt1ZSC5fd5a3et2WADg7hespYCP5iABEyccfigS4CFBUFwLdVd",
  "key2": "h2CMU3t6G8H233Xr8hq5syh3kaB1LZ9DqDnVbdtQYYg3H3LRUfBzEPioigZeABvBKuKD6WDwofHMDkGW7o3uFMA",
  "key3": "5KB57KYNhstTRznjKGjperShxs3Hi2cRWCpwuA4GzZpjidwF7PR4PkrxYqRbvSpfXKt5PmH97pnMqhkLKaH592EW",
  "key4": "4My8hf6v6F7wfQ9NKeXLHLdVscKkC7NVmbSToYPi9gYLfLcbu75tvLRCyjanYqVmD1K1kFizJdXbWqyC24sCvQus",
  "key5": "468heN8kfpCq3nyg7JeUGUvEfsFYoxLPu9qz6SWNCuZKa2aoNkXPKakj7RFTMP7MtyCfR4ZpWE4UG93UKhsiusJB",
  "key6": "39FzdFPZ8ivGVyNF1wPkRgS4m9NLvUcmLKvwoLh4N5bViPDyZcg4jauz6Dw9xJ4Y8yRsv1DpxQkFuWLke8rPeixX",
  "key7": "5aLojqLvz7RbXcorobWi8p4ge2XbPWjVcmPJ3SLL1Eo8AM7dJX3D7q6mHCzTgffuXfF3kpow1CHtkW6fW3TpngUo",
  "key8": "3RQDpxSjUsReBcMt9yAqKNAvVDUeSzgJLb5U2A8Q5d9pPm8LkbdBePbknB1J5C9FPPiKrr5L7LsTKFKAifDEYyF",
  "key9": "LgwZAPiW8ELtGrpMeP3mQFgGpVPU633FSjJyUJX8yNLDBbTNGBgCv1eKw2fnTb4fyZpGeNXPTgX6Dnr28EpDZAg",
  "key10": "3s4roKwhAJBc9SEZNTXjDqNChoUxVQrM5dYSvdg5QXyrgd1ixeMGHVbqBF4WdhdvCzBdA5QSozicKCgf5tRrnvbC",
  "key11": "5ZejfWrFYVkPxfMsqkbRhCaCKszp3uWdmc3o4GWwwBFf1othvgQ6WPi9WqqKpy9qouaX48CJ8kmkYSR5r3sE1U1v",
  "key12": "3RHs5t5mB5TcABTALL4WvnfeSq1ef2tLvkpNRGxZjYiz5sU7p8mehPp4bunVavKD4YkVRq7tRoiZh7Lx8hNvjeAY",
  "key13": "4JPkV6RsVjga94xWcEu5NYWVQUQ8gvet21xXzkvtskK2yK6x8gMfUXLD1y28ivjYBgEoZ7jNyAWSyChqaZ3CMCAZ",
  "key14": "5i4yFeyQ4BfM7hLJue5qVwYWLtmjwVHZHAcHjDG4cqc3Y6QZagpyfqmevJmhQKaq4NeRdUpqAFCyS49xnuPGyTUJ",
  "key15": "5SgpqcBLoZDygFZY1tGakwWtYd2yepDm2P491fTgzXD9w4DTznggUtLjZxBEhfoReJX75NsVQGHokQAHtTYDSScR",
  "key16": "XkfJApHtTjRzP2X34JpY9VsqLB3ARQQ6RkvdpkQpej3UhMWEbfr5TSyPKFzgkV5JpkziRwbAUZoNwPy9p2TgMQ7",
  "key17": "4Z2Nt3etLaasGVxjxZ3oG7sLMpgWAJFaECU7ZcU9Kih6ngpyrboayL4jHFmimRkRtTStmka4LJaf9UFdUSjhcfPH",
  "key18": "45oWjGoQMvuC3vim5EpxamqxPDwhbEiGqSezcj4byVp88Sn5zvmqaHXf99t5FcncLDnw4zrWY51jioi1k2r4kxLU",
  "key19": "3VDSg7RKuZU6iQCtXM6ZqUezJNjMjPJ8jNQXjEQp12uYyiPNxEX6zAsBihoxCp8iKx3yGLr5758961Bu2sE4EWFB",
  "key20": "4MwsNkWRsZ6EP8hVnQRGFipMJXdUv29uECzAH7xJ2N2XFHhmkQfHntFeTXEg76enREyLV9WdAyjJK96E2TEGXivv",
  "key21": "5TGPhCJFMMJqqu8dx9TdHhAiA3sbbd6txvsPGrJocHFHekDq94eNGFX4a9hfdAWxuDGd5Q9Kkpdec618nioDf3Y9",
  "key22": "3oZLk88vsFupHFaD5rypsSBPzpBYmZ3yreLywMM1kxt4J7CJttryH5zJWvmCKXoEaWR5toRozeTzKtNYSQSJkhD4",
  "key23": "GrbYNKz8uhAaMX7jBwBoR6VU5ptTRkqKewQZQgNTLLEtCEeXNc7Zhv2eeBfM2DDMRTpLLJWh3sBDosDJmAi2N2k",
  "key24": "4gV6mSMptmnu8h4RZEiPvZc24pY6UhvzwtSz1eTUFCB2ikfkgVwZhbDFRa7LVY25kqD689L1S2SxR8jP744BvKSb",
  "key25": "4uujKCuWGQuRcpomQWmp1d9yexh4Qjqfj5ShbRby8hAuv5fKQyNMCxKqDTVp6TtoT3mPzrUgQHx5brZG7zyRWvgw",
  "key26": "saEWTdbFx3nMw19wYk11y3qkQEd4KpvvFWahKJZdCQpSq1sXTMsvUqW8ntUdZE5BHBL73bu2iMNUpZjm4J4fH4a",
  "key27": "y6mUxFgZ4MWBT6hxeHsYVXufWVqFdcBzK5go7TekpYufgL21uJHBSYzNvXQnjrARXwVN4sTKiZN6CLig2rEnaqF",
  "key28": "3Eptu9xNXR5WskXwCT11GK4HtyJNQQKDddzumbnyRgEBPmTTekPF8dVkrySqJkg4G8tj3PuWq1jbGG4phyz37BX2",
  "key29": "473aF5JMC1jp6UGHZiQ2SXTf4FcHkd1kFJWFmXAMGviFRgYSVmnLGnqSh1LJxUkwQ33G73KiWn9wuDr2Aupnctet",
  "key30": "3zsLmHhQncSzCu2drphrEajvyYMoAnyKjReJrz7oE9yTthfDgSCmDPwqCqpQETiCfJqywWwVcxZSDbm148ku43Nd",
  "key31": "2mbjmHbrfBswmHNaBYMmfwYNAw6qGQSRgVJhSSZXvYndr4vtSjrqzkoCUNRwTB7kDgjVASmrSu3wasYvLMVop2RL",
  "key32": "Lt5B7skmbJKcMBU3LeJtZ6dSJTGzs5WgYCHjqF1EUZX5WkXxbzhAq8VfSboR1j9gWXrXhNxgRYk8WAhboPSvyv3",
  "key33": "VYnuUprPuajaTeNUzSUu1Zf42mYe55vgEpdvnKv7iqvhjEjEqFu1yFMvEYHcBjxNW9g6ypCwC8bVLxt7uPu8c43",
  "key34": "zDy1KNiBj2WuH9YUH5tkVHtWfThDj4td3nPMwekkrRHXQStGsqJ4EvG9Q7kPorN8y8rZsZN62BBjM9hyjn38tFQ",
  "key35": "349XVDn9GxE6uZFQMnQWGvw74c8pKK8oKwm7tHLepQ8h4ahPxCnd67FZYQmXMQX6Bp1c99K4iCJwpXPda9NYTFAJ",
  "key36": "2966JfoeT795iLxNED2SLgZH1DURVgGtKQT7N4nq2JkTPs8mpuTrBm9agjcc2GSagxePE7Uj9fncmG6UhjipsLnu",
  "key37": "3QxTFk5XFweAQamHyYcykNSqpMJBx9cmWGoSMSPXf94qVbP4KscLtUXVpHvvvgBXE9vi3xxfCmZxZ7L9jtJYVq9L",
  "key38": "3Yz37Lnc1vFvL6RMQo1A7Gyqe5pFaLEBGKtJ6QwtbuoP8QUiXQTReLZ7hFmG5QUjJcN8pdLXLytt3SoSR6Lyhct"
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
