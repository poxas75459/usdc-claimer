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
    "2SYb6tds7bJBPVo7tDCFDv2Z7WPP2wc8WwBkzCWrpTsAC62f4UqDFR4ZbuqMZ6LPu5q8Dsg77BvXQqVm76f5d1rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGTPYGamaFKAVijn78jSNMH4kBcwUaRJ87oLAgCYUZqxeFvT92wgQNK5b2GoMgrMDfLyuJDhGDAbYY84DKN7N8Y",
  "key1": "287x3Yaqnn9rHFtnwLvMtGLMUka3yCLg7bPfgU5PJZiTUXWncyGKLyXnCpe5p6YCHJ9VW3YFDsHJ4xFrnMQ1BbtK",
  "key2": "5HRKS3t6qCL7CKbz7U29GdVF1o5wdEzjsatom876TJjMQ9HWqjQz2Qhk6xTu1ftTWFVe39j9tNy4comy2n24CWLZ",
  "key3": "5A9jCN1MvD49o4Lnbp2bqq1Qvi3C3XZExs9ofytDLhsMyoCgZYezbDNz3MjTmXH5b91cc2xWSQi9dhCRhZBarJ5F",
  "key4": "3iAZQKv8k9k9AmEuHofy21feBb2RWQiWp9FWSWJ7hJnucGU15MjX9EbdqsyBcKRnBeFKRNTJMbNT5DNSC2VJJ5bi",
  "key5": "4U88YvvpwYQ46MASy4uG6DE7fqnhGmPzAPMKBz9uyaBZKSNxEmt9Y8dza19rGTn8uT1uKRS2CUCr131tHEAVZQUE",
  "key6": "3Hy4AHQFiCCSWv6Q6oqGgo9zUgHegBxuJ2bPpjKXLr2B1DGCE1qRLZtMhChzSy5oyVQRqAX9wNRrF87DbKKsSjgc",
  "key7": "u3xokkRKFqD5CxfVqaUqJCLnBLePpv19bKPFUxhB2r7WRpgXny2YSunU8DnbXtXM3jwKPYGrUhZrpRXfAf4eLep",
  "key8": "4T3zLhsLGjzx4Wjbh7sREx6erQRx9s2FrfvMLUwazNFu4HhpQvNud8NEvvxs6cV1htELNCypZ3Ffp2r4zCvZEJEc",
  "key9": "2qnHLxoHJJz9VP4URPMbaRxdPEXogj74ebrGurY9LfoyXd9Y9Y2XvgoLHb2pvcnppMWXEs3tFk4yWo9s7BHzc35D",
  "key10": "4fMA9vvqnBnr3kU9BfuMzcQJhe5VACYXgFLTrMjfzEMqKrXxEH5nQNhgZYbyGviTqus6sqndArSvtiwPWBy5DhmX",
  "key11": "4r6jLxWTmzSPwiaU4yr72FDvaxJBv9MwZKtVKVkYxJxj9VQwCehCJYgTT4tZuZsVks1CM6CwCB71dhn43DabFbji",
  "key12": "5E3bcyxHSynAfuBJ8CbsJ38EUAvZ2FeumUz5HeuVGcY5XVNmvJkPzMQFLfytmVVGBcQt7VEJsX4nTatRGmXQzuEW",
  "key13": "4GKei5Durcqp8jW9AJ625XZZJpgVCL5rUjGSvRkrhV1BXySNBoYu9dBN1Q27pmP8nS9K8Hkjh2STwN87mZNdTy9o",
  "key14": "3UPTEJxfotd7j5DsspmuW3JCbWLhSJQT84rHXqj9iqt6Uef56PhFP6hjxX6AzPDyqPXU4rs6wnPv3Zoctx8G5jpd",
  "key15": "2GWMQU73P975VexSN28gztgef2qts4eMhqUhgrXPdLazogSBWHKDNF9LPNoHheou6PzMN9cvxCjT1qGL8mFgGpgQ",
  "key16": "63Mt3eRahSS2rj4zhugFrr3oLyvgTnszBQXdSBeR9opE7NemELGhH7TSBBF5RtY5otvjZfjZdvoRzBW8aSZay8x6",
  "key17": "3kuB4y166vAJYtqXpmx99eedNEfXESPEHkodd48GfQxHaTvc8zVP7smsJjBJSiRc5xpHnqVuSmvdRHpCyDdAtZh",
  "key18": "HzWujxMH6cgtbQbSGYDzASZbk31AqbHTQE2pCdSW8iRqC6XsjLsUgZq8RkaS3Sq9SL3aAyiY7QBHpGKN1XQLKUU",
  "key19": "GN4xg2fqPAfaAqF7r9n9HxkycfGxHaYmtHJSrPNcxov4QNCABFwa12cKv51YBR49zDXmV5A5Swvi4WsUcRW1D5g",
  "key20": "CnoDwtzr9nSpdnGWv5nHmeHQPArRFtALTz44VZf5jqqPj8As7KXJ1w3ymkzixz6Q6HRLkSVcp9sATg5u5qx57Zn",
  "key21": "3YprCU7YZhCVh3q2jiL2twkBBDt3tMV6kF2qJNrW9o2eyyc2WuMZrq7r1R41F1CBzeZj1TNnMx4Z9Z4wtgdhoA9U",
  "key22": "FQLqvRGoAhC4nW1Jz5oJUA1U3h5hwaqdp3d3uxCR6xQkktrNNnQyQg1S5ZvPjnQMrFmcq7nYEmLroQoCQinwvou",
  "key23": "5SNhs4mtN1kcRxtDjFvUpe8LHmK8SQWNrcKvd1bAWhbGrVGdoUPvLxSPoh9njn6qFv59WLSX7nuDtSFoeMWdQKoC",
  "key24": "5A72fLaDdutqAmK3hwLa8qzyHwY58NFW5v4PT93ZziGm4q4PzCVdose2F1t18h25YcozVeBERb2oZqrDpmutosG7",
  "key25": "2JVGu9iYyRYBjAtjVoui7SxaS8AKcTqCsDjgPRkrPLwxHreLU536Bj8Mp9dgDpVLRVKxgXt7hiP34oLpM54jK5DN",
  "key26": "579DaQbE6jumb5NS5JqFWpFipQt2dKX6pAibPM3gPGLkHEdABt9x9soLWjmzJJGp7JsSk8qyw6iQxLzsGp7pofu3",
  "key27": "2AVVATv9uJZwfQqb1S8avg8jHXtX3kG95AThRARtEmqyL4h7AiMghX78iVz1DswokrNtm2wGVrYqjx9khiiLPXgx",
  "key28": "3b8wdvn2E2DhgiUaUhBWW3EttMyWnNsqEwahB5TUq8RthE5nn3739GqCKhtrmB89srQ9W1Qzc9o8tttucDow6vM2",
  "key29": "2KMHC5SPRFRzFmsHyu2DZeeoersedS7kxLS3EMdBTGyTtjEcGqJAQeAnAT1Ugo5EFeAdfkX6ZxMMPu8MR1gSHZDL",
  "key30": "4cU1cTpBq4FmxhJMM49e2ioCutFC9esKL9ma3VVXduxXLfXpdFfgTKDcxhFCMmg9Eoa4XjCkPcmiT1Vbuam9L38G",
  "key31": "5CAReXowGPL2yLAizHL6E6adRaUa8VvVNpwn3c5HruE7zJX58grRKvMDHBBG4nXGTJvcX55uGcUYEwQWYsXbZKtA",
  "key32": "4bfvUH2TfW4qKuLfDiQdCFTrMF5turLaTscYyZAWEh9w8WnpzYzRbQ1BZz2PCmgao99q1bbycnzqwykwk9y7pwjA",
  "key33": "3LykyAAStYLoHyVZackkMzLXbHLCuUqzi4ZvNECAKW375evMjJk2unfQziBvh9KoyQhs5QfgsoxAGi6DRBur4fPs",
  "key34": "4e51im8ig5Xkx26qWiZXkTgHmXSLVmP3bbHmATAsfbjuAomK1ykSLpQnyS9hkpaN9CqRvXK8mzyggkinJuru3a8Y",
  "key35": "2T13VkaJobF9xqUkLeAGYBDW4JQxWN1xFN1J6PYNneSwtL1Po6kHHwjweNx9jEMk68ZhGhouCjqVKLvXW52gbi1N",
  "key36": "4AfbUdA1nPMwuE7NemPoDn2npMeru7RkJkhs9G7sViGQ6qVDazpminHD5y1SSaM8CDCaFpDAFSYog66isswvgYhU",
  "key37": "3tzQbFptQdjiJdk19fF8ZSn9eAoZC2YsxMpezaWhvaxhCrNk38Ymyk2aUSphyXXAHBbTrzBFeb2koS7VeW1u9b6a",
  "key38": "4nhxjWjtkeozar6g91Bx1PmxpnGmwApNt7yv8YeC2uAgk5AigKRWNPTV13qMUs7Bnq5SoAWg9t7LPYAcUgSRj3Wv",
  "key39": "3FLZYjvp1buCeQxnqngwfDPbjPiduFCdZ3qBNz6HnzycsuanbW7bX8SKcdD5hmnxCQFx8Qm9qQEkpJACtyxEUpmZ",
  "key40": "1XdYA6ZhCgoqAxaoLWHr6SMnYJ5NRe4JGg2BT65kZnMEiqQQmNkfFPRMziJJ8xRcgRMqjxsy1jheiRP66HyVCs",
  "key41": "3bn2XJW3efRcgMDkWRAgkGTJJVrfip4ueiqsdQwFWsisf3pUCVcsVxmytqy3N74mwBN9JtiyFKAbhioXFLspauJ1",
  "key42": "2ke3MKJPUjnLQWii1z1FJqeDSM2r7Bco4S6s3wVMFyAkhmYNezwyZL5ok5MjTKG3Hh2MPvq4mPDgjCyrHcxdM3Kg",
  "key43": "3niBvjedJ91cbyepvpgeSv1WS5zUmhbWseJk8JJs7sXJUMy6xBa6JSw1t6EcmHDdj2YPVFrWW5MPVVHwy7v8N4tr",
  "key44": "3tofFvSXSbZddBBfTB5hJi8d9VWXRNzSotzmZgc7d52JtUz3bTLCUGjHwdSRpRxWfKReEtffZUjx6ZWtgUjWgNn2",
  "key45": "4z4xEG7t4mF2Bkq2mYbKGKYh6SqpZhdxGw9rEuQ6eXV9pAaNw1croWMwJ4cthWS7wpYimNEvGt4R7aCb5viLbYL5",
  "key46": "ewCeArL6UZZupWPco3KLv6YZ5RhXikDUp8ZwnRsEnhdYdJRSwSzCLvZJwEVZpibpqxMaW2368UeozgrxGx1iE9Y",
  "key47": "3QvhEgr82uSKDngFB4deh6YKAeiZy6twb4Eg7VrNfsqFtbwb1UBDUuz6awvPkLTufAx7MvmoArP8kj1qcmq8hbLS",
  "key48": "QVXGLKqwDVsagTuU5D1uGz5AFmHGPZfEnWVoS448DyA4jfye3K2iiAiqR7QKoHTowfCLzRNjGmtPN77eSqnG3x9"
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
