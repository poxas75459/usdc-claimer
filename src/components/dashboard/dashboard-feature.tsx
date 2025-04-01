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
    "2MxyQaxvmWZvM4KLEumSvJamp7S2XHTLEz1LyNanVgG6HTHDvDuvTYbmnEg7Q1fcV1k533NieafJ1M1XsraVrCoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oujiZCZymW1YnUw4dtYe65ZtHkeGxAs561gD5Jq3Jrni5YKcKsZ2HSCS5PZrd8SJTD8XRJz3oRxCARse7ejPYzB",
  "key1": "3XChAWghdrnZ5gYgdoMyK6UWKDiGpaLFrqmyPpNXHLBbci6iky7PcKg4G8XndxZ6jMWC9MPGjsMhhjs7QM9spp7r",
  "key2": "2xyytiPo8s9JiUPWXksxJr5nEKxpQbaNHpfGCDm8wrsKjJ2UPjRxS71kaihCzM7Q5aqJ8kS9drQWfTjDGJujFdRK",
  "key3": "5w256XAymh5XMPqs8Kofvw6PYh3QtcTZUFtxAft4nbiKPGWiAvPvsHWNA4YM59fHYMBDvUpkYRabtLaWktJQ4oD3",
  "key4": "5qFAuXvy1qBBBdXLjGzgmPg2AXnGuZ74xkX1v3TSiaS9TTr1vqTeEf2bLhminiPcJvBb9QAkZGb3T4mEzjmcCguK",
  "key5": "66vw1Wgq5KgHpCqCMH6dJF5ERmxygnuoKreEcewTRbQ7zJyoUQXyYiFXu5MqzYdCUBU43NujLSSVcdAwm4ZeM4QF",
  "key6": "Hknumd9TPZ9sexc1GxqjfTw8JgpaGgowsycE7fVNpoZzcEUmmtHt3P84JCdb9mwpUTpAuYcuCMzQuyWn2SyyYkq",
  "key7": "37qB25d4vPPyvjQeESRV4A5imbYRU2oSRJ3JoSdNeHmj1TqfX1of1SsxvYiyb7tXRDjqUkoNwrXHcZV7Mr8XNEzB",
  "key8": "s7bo67Xg1Ha4nbNfKcvZtTUMJaTM2TAQD8Fr3phY5Pc3cVJ3RPGhQD6xRzazUwLb1ATjBroB9TGeiQqYPyDGom7",
  "key9": "2jyp2WNBzJEuPrcysarkJpCG2JNRTzNKxPJLXaaPj9dbPpi7SbdeMYEjQeUczeuCGw2phptFFwikKKfJobSKqjzB",
  "key10": "5yY59rxNxBJYAunhEQR32nmvPCkUZJUYoFaTdbtyxEPgK9oFPwoemrvfa9hsg6xYBMrTK1GWzmqmiTJeWrMs8sWH",
  "key11": "y6x9m9aedS6qKyx6hDQk47unY1jGPefFQN4FdoSgGehstDyqXt6ddHJMZDqrBuc1JQtSiUdktvk49cJ3rwqvcJW",
  "key12": "3WNyB3y3bGvJaDe7CJ23nysMZLKP2PPefiW8CNt8kszk769bT8coNhLFPkKZFTMYJqGn9pHqUCHQqzMZNieBaCZj",
  "key13": "oTMRd2FL6uBYbD6qLk6YTLdeZzR7dfJh1w1WHFhLtQNWPZtZnKXaHBSvutUvFEtNfkFTFsfqNZzrgkQ91EJUmEe",
  "key14": "4ukxNF4AacpL2RY1N8nY97Khawi7QBBNqZuy4PvCq34DEsnonGwjtWGWVujgr2Pvti7EXatknQ9caEwFMZiQGD4d",
  "key15": "W41J9123eQyrK3xrgE5yv9hiy5sD2yUnTX7XbKJVGdVn4bfK5Emi67y7s5DjbAdtgAwUFsi7ciihtS4VpvHYNd6",
  "key16": "5w4mrjtxYVtQCuc1QNJzaeexe9sgXXsty35g14jCn2CZvaaswgb4yxjRb1b7sbtK8YTzCi5h1AFFA6R2FPhakYq4",
  "key17": "2kSD3AnmbF8A3cvMqERwUU6CYJEy4CA3tLVbwVydpZioteoLmnqZhzyRpeBrA6nhfFMeopfi28Rdwt4ks359qx4y",
  "key18": "5no8AmWhqEtnGJtLYrC6zd6Es512Vvmjgxv1LzH8KqxwhFLk6wi7N5ngneN8iFfmVnc2w2h7zX4eTGLUmQpn5zdN",
  "key19": "4cbV9z5qHLRqmnhdcDDWoLjVjmcPF62h5kTjvpoufE3YZmgR5DWvsQrVeAEmZ8i4JoYBJjM7uF8d6vkxXNzEiSnJ",
  "key20": "dFhjZCsquRCNmeq3uuR1TQt1SY4qeR1imNzuCXokZ3gfNUEBJ5rKkzatc69aXz2Tm7HUt8duzEkCKQcRLo8LKTZ",
  "key21": "5B5UmiLsbM4sp8k28tGDcfwGFY3Q9kCbRHvAenw6wzocdrPnxrfNeFtBdPJNch5TM11FRFJgbPsBEb6bWsdZtJQz",
  "key22": "3WD4nMpqzkfCqAYbMzpZ7QTsVjU6WGkKKao9mGVVdzFEP5RQkbAaucMgVB3CUAhgwR93d94J1x9ir3Aoe6A21Scs",
  "key23": "5P4tgA7AuwDVCfepbnh1t29eSpYRLmp7YcT9YUAG8dK1hV1nWWc6QeCiDdnN14XgaVQQbKVA1e8nDEBbzg5xrWCp",
  "key24": "5GdrvVE1SRjqzokDk2ACKyUMS29HJay8Q54JmBvyApvRPgv3SYNtCdqFojPUK4fqQj7oPtQzKLQ1vfjxdy4F4qKM",
  "key25": "4tAxgsHtwrv5dhWiDj3dxGosr27MghdfM6iNpAYDxubhnborXewgAyewX91uMPtQfk5SGN5xcT2Jc1VETKDXQohV",
  "key26": "njcHUEFmvRsZzx4K2kdeBRNqLbsUCBPUdbZSxYFrRzvP6nLfFb1YJPf8aGCy9AUXMkf2ZtNyfBDDHmkcbdXg83B",
  "key27": "3shjhbRCzy6PiPr5qc3p1chX4B8awThQs9jPYqPeo62kAz8mk5QkPeTi8H7CbMpehzSQw6iTC7FUQQ1sQzRNVFhj",
  "key28": "5oKEH8bF3wQpihGBiNynYfZSLMoTaki9XLC3g23wnBzz5b9jFQ9JbhUjTM5wDnuc7gcBPmxP9DYTmUxGeBpXq2V7",
  "key29": "61s9kLVeP3btpknKBQ2EaF7ZoLBZpLWH37dMT272kXRprKDwHmhxX8HgR3qMbenn2EccYKUUKvDE2FVkWzjxKCEK",
  "key30": "N9g2ikEq9unNCuXAjKgCDQJdBVzPo1tVDvbvVMgvJ5K1LqvyLTJYs2j9dZp7dWVdGNARqmBSfgFPniNzYbGeUmE",
  "key31": "aAJ8SfDWrBiP5fKMtZEHmD41soQaDVhvBg91n79brq9H1xdmgsTZxk17iPVg3gTwgoE9a5yEGdoAR2MNY4jwJXG",
  "key32": "5rxTcPokzrcNKaw66sckd77yAjt5utwHPZnAQdwLWPZzjEDx5WjpgaYz6y7LtYapC3dUoNEQSMh3LHmC8jTJUx9f",
  "key33": "4z9M2sYf2y2mtLQTmNEZ2itv2MgH3HZbmGQp99RzFC4uAHe6vYDJwXY4smumVu8qd63yozEyxCQN2YaoQJ9bfSqv",
  "key34": "4oHHiahHFjDrbEYgpCNAsJMxx6C2utMfwy6Ms2jf1B38rLHu19QbuF4RA3oYsv7rkwKn4k582ke4ohvkY8Rd5vgn",
  "key35": "k4jzgS53dFHQViguZUPeuTMMqJiv6QQuctHj1R3wXMTq4yZirrqhpp3h1T8RFep7aLvMezXpBGRpmA5GQWp3S4a",
  "key36": "SxtWNpr51rtraWg1wpHaKMXQd6w76WQAguEaaEPUBtDhrdXCBweitTP6gHUpEi1mJicB534gqEph3CEKKD8WGPs",
  "key37": "D3CzpVDQKP9ygguYaVc6x7RS8YU6e59hXZTCPEkywonaizuGpdipLDjipZi6cqBgUhxnmkPYuWRMCYjnWNPb4tk",
  "key38": "3bSC3Hf42p4BqiE6w9bzS2BNUMc2vyhYKAXYqabTsYgjEm6Mi4FC2YgLKNzU5T8BWZKG5WJHfh6UXAdn6ceyib9C",
  "key39": "5XiQmnZhuQ1BW82wssNvn6ji6KfNMFWArfqEf2vfgWGXFFkTN95Mh4mWUaQjvVKiWv3fsjmBtNB8J6QUgHqNc1Ri"
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
