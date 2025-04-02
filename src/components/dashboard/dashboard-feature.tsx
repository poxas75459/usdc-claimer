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
    "4Pm3BJ7dR9n6SoDm8GeJcjfG98tcJXUEktv8rhqqKSPy2RigggVEFFhbnrdFVviFxAYEeyXPv18Rp3HMAbzunnaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnpLwLpQUNGbcEBERARVQQcobHFfnXmNiUkRBttZj9BQ5YixVWe8peZU7znKwAhBAvSUV3ztWQxRvPUc9gD9L6A",
  "key1": "55Raz6FNQZLMm4zWPWdWkZNZcFLVyytwXJYsuwWsSmVSbRVkMJykRY85KNMYY4CUHGgpc72szCw2efjczGTEgsvN",
  "key2": "5acJkkxKZH5LC1ZEpffJKiWqBhtq8WhaxVFPko4dZ44dz9viMdj6ikCfLZBVtDdhNx6Y7BawokoovsPhYcuTLN9r",
  "key3": "637nncr4RrVzDpSs1bXaWW1bboJ5GrHJs28hMgquP31vMw7DjEy8gUGjxTDaL2jrvnf6wTvtUMRf9bbypNncf3NF",
  "key4": "5tkTTLQkcMNSUEP6Qjmvv5ca8t6qQCGRaRnFho3s4nMRBLD5MbnQC13DuWAaoaBhXrE9d26doyFavMwjyTi2trm7",
  "key5": "GZMjSRbzdt8gqaiX1byXgKT42dj4sv4MhppiTJF6xeenf8bi9gdAB7vKGVkvkUfT6godmQ5Q8QUyNQbbpHumkgp",
  "key6": "4utofh9sbxmTAxuq1Dghwd5P9aJHmCpPPsE6g4T5GuA15HTGqBqttn7jGL8yK3xhdmT3BphytjGihnN92rEgS1tS",
  "key7": "4uYDeoQL5Vk54DFUXGexC7h7C7AwBdARiYj98CpLQ7vhcP4X58KqQpdrpuAuRgFcQSMbbJax4xLuvGJXykafGN8d",
  "key8": "2NjRNghJDeUyfZKb7t9oQtf9NhBUUkTuhXipzGbdSQzd9upvXydMJJXzzy8kH2DygNcPaRfZD5FP3ZifL8NBSkeT",
  "key9": "33koEShRQc2ZM3gGcuoHs5mxr1mQM1M1yv3QmPV2GwxDWoVYwwKo8K8T3Lmsw1UscpZgSCx4jEyGgAunNv9aG5QJ",
  "key10": "3N8qihKtixHTa2izBHpg5fQpv5NGj6KNLf4hZCK7Bq7qiKUztAKNbrRjwSokYfrVYBExwLgyjnA4qhdLZY2M4AFK",
  "key11": "4WrBP9KFxd9UjnRv53HK82YPAeVPCXD7JafGCgwdk5YLJb4KTsBduziYsPDcFbDLrm1DgeRcCtzyVVr35KQFY8oP",
  "key12": "4TKB1Hx5BdztQwvF5DFwpmmVsrK7dTNcgFBNUAHs5cRPZrE7Fs9XzG6XZVoLTutwm3CwyQBQNPXPwiJWvk8aMm4t",
  "key13": "55dirgpLwwwbcY3DaSjybE6VQLkD73e8L9663b1FvMdEEWY9t1246CqQpsKTiiyDpUQNkNSLLk7ftFMujs3qoPRC",
  "key14": "5mhefvigTbev1R9AVJJg9ybXQt3xjjb1whdwSLMwmwPtTqboqUkvjyM8Zv7Nx2pCzSCx9A19PYJXr61NLtE5CC7A",
  "key15": "4bin784XT2VPJfj6DeaDiKs5A8aNRJgTTWWWv45QanAiqUEBYoVsQewVwjAiuHrdgWHUPdQ5Z6zJESD15oaXVyii",
  "key16": "5UUoiHKRY4J2HgZ989b8qYo1UfsgkaeugT2pUHa5zHN7bCXYQVUpgwhdc1foFLbnFA5d8cLTiNAwKtBRzFC67qcU",
  "key17": "F39D8bZH3Pi7DdXfAZeYaNjRBHAY5q5c721jhZLRseYMPvfjUjMw2AMfhcw5EhuLt1fdMLqv1zsHkMNFYU47i2u",
  "key18": "4R5UDvAxVSgvsMuUfsCMpVdSqD9YRMUVuocRerSeZokLjm5zKuDdwwxHaSauoGbozBoErS986NFx6xmdphuzbbqj",
  "key19": "4YDieXJqgAqBi9rNFs1YXTZM2LnufftQfqZwxy2HW5iUTghv7h7Z4xfZqyj7Vsa7mpDLbLKhW3sRuHRWUfRCEFDd",
  "key20": "2R8ZY6fS9cnLzSD33N6PjV71GGEXWQkEfeBA8cH1fXRhB3Vg6zbbfbaYhLw6xxwartHp2AgY2MnpSitSsdoeLb88",
  "key21": "4nEFvjZFB3LeeEvQYgpTLD6XaBfnhvQdWvyXVY5y43QvfbnA4vBe565ZZmkGbWSXVFp5BWUdtUpWi6dto5hEHWtt",
  "key22": "2qD9Pdc1zRn1v6GvYb3PsEhMGxG4LfHEVL1MnYv3CoBn8139RHc6bjHdEBG64qYTP1vGzFMdv8Qqr6nEUfxyQosS",
  "key23": "4DP2mc4zaUC4ZnsK6JSs6mWn8bsC8mUD22QfZnDR2zuXo9DYVXgZboJ9ZkDwRBMN5TySm4AiuZXqoGBmtoHQqREE",
  "key24": "3oobunSbufQ2D2DThzXAfM59x5qrmPc5tnKUbUqd8T6zmFrrWQt4DSnkc8kxNaVomz8ikPJ7oXoMrV1XgN1VrECH",
  "key25": "3h4j1CvANWDxAGu8droHGwwD7UdQbWG1XKDgUS9XuSMqYxJB7yg8pGLKaMaYDzb4MkUZUfhptCpbVT9MN5cHSfHJ",
  "key26": "hXG6JUa7KWze6Nrv8AxXoNysoUMe6TcmENDRu93XJNWXSTqPvvwcWVfKCWcU3XatuMBZZ8huEEvaaq9SNvrKcE2",
  "key27": "21FmzEYwt8SMA3g7o86XSzzZMTSTar5PkMmHg2SZvHa1PSDQPaPB87wd7Z1DRxvwz821BrgU7YVCSzjbtf7Qgd1J"
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
