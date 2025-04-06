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
    "tvkfay7AyikFsUFii4Hm5jyJYs3kPi7P37FEgfDsYf9YvgKPzyHTFC7zzvNNNtWz3sUMwZobcns6mFoWJLqXwsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9Yfjtiv37trcBrjk6c9v9RDL9Yq3Z4nnwjB8Y7bmWVrCUfNaMCuGLACu7pfeLxbDzAV39AhAMT9NXhFwDxBYon",
  "key1": "4jJefqtqttuxDdc4ebMobyVDwY4sEAunpUjzvHjNXCrvXDUdNghQHh5YdtMSbqXgnLqMcPGwURPa23qi7AGVqXyS",
  "key2": "4xiShCvnBFtrtyM32hAp4LMfXp2VmVPNtdhz36F5FDBRg5tdnqXVLHawtNrV5mH87t67E8DP1ZC3StNtF4RByXcT",
  "key3": "2toXWdcuiLR8JEeGfQCaTevo7dhRUKJYist4uHRVGTPBjgGtwz9eqTCKwDdL8iVZKyXXdcUqcyrxrNDnRKDSxQ9e",
  "key4": "mMQftvT4X8p6oy3EMKcZ1oUN4fmX1QeJM9uDnTXVhddi7j5Yac3YnP2u7dDG9dRgAaUjdC8CYUng64jED3zVwzo",
  "key5": "56Zj7VtTWxJ7JvbW1EnkFN6SP23m2kp6A8Efs8j1x8kCoCMZ1JjaneyMPk4vCiMTfg2RBjGNMiDy1wd4q7BHFnMo",
  "key6": "5qQtkhydJMaAcM6vewUvDD4c9pHpqBGJ7UwrDVZVonLjKs6YS3AMsydBUXXqU9u96EoKsqKkRdkkkYWqUXzo2deR",
  "key7": "53VMRcQXztdGEgFMoFYwWLJBwsFtfHt955bryXs8vtbiqEin6e8BpiKN6krBCHzmAy6Mwd2jPyDyE16rXgQpKCE8",
  "key8": "3YEbn7dC7e3nKmuLfHrGM48G9GgbaE7J7tH99GnZaW213EzENvVjvha6E9bhHYusahdT8MxXT862riTfjdBF3uux",
  "key9": "4BtTEZhACCvkW7DTUyWHwiUimfKhMkcZqed8fjbykG7pPrDzVY7AvukzYt7DEqWiPwh6AVSv5wKYW6GFrcje8W31",
  "key10": "25DjoZQHjBdiABB62B2a1vUkLCRU7ZJpqTuDEZkNS4ZnGC7KUmgvgMekAsSpEBcnew9zPjD4nTnQBC86ccEoiyJs",
  "key11": "5ys4hiYh1WUR4ekvW7s7hEr5NFGbnyDzx2DxHwRck6dLp9ojrthRExmCwjKhLc1kVthyXQf8cWukY7KNdiYSRuRN",
  "key12": "5pDwaijvcfcRCyQksxkzbRmGrSX4aoKaSpJNEGgjjx1zosDG65evH3P8V9BXacpzKc34CsczNstrVjzfvEiV53cD",
  "key13": "2TTEzCDi5AKRdAefwSNjEkc9kAj9VeEovA454b5vNu3ChBfjm4FJdLX6gXVxTWDe9fGxAfiEzM76Qe1cuahdfnR6",
  "key14": "2u7xwbZwaLwXPU8BHGeVcPQMfmaNRKEN14v8geF2e15N8Z2huKcDVWhSphBH38Dc4z94eSxmHqnyAF5AEnm3Gw6e",
  "key15": "36zM1yz2jBMtZH9vJVJz1n7qcnST7H2WCQcXmqfr1LtzW4egGRBnFYtUgw4D9N4HZPPKcXZKJbBXA4F9sLeF1kDE",
  "key16": "2GiAhZRCijSUXiRjyn8g5BxVRKGS14LhiHiXvqzgkFNgaUmVrK8zzhbzDUSE4yzmUSxW2rXVGNTz3ggbV8xh8Wpb",
  "key17": "2HHYXv1mtsyAyyhZou2eVG7hnFTDq57i8GjyMuqaTT73gtFtrNvRLqYfFP72B1KC7xp22U6giAYMPJgc8YwNssho",
  "key18": "64azRWk3c4y5fw3wiXBzhhVHUWU7jSCMUZz81S4UxQFkjtWhLYuQmYXchEQJGkQPRMoD4nLcrNVA3T3S17AUSGjX",
  "key19": "3jk7pchGEw1aUgPvJ9aC9ioFuhgXKX5yc3TizRASV14N9QhUwLQhxvKEHWcrqyEt5ZbF3wCbDx4SDBdTNBJL3hRJ",
  "key20": "62Ayt4B95YPQwK2nPqnfErE1dsEb1a37U51DgazRfx2kdhk1boi8NqVxzVnL2QpLU6wEU9UpwFcsMVL72UXSnk1z",
  "key21": "2Zb64LdNgnTmH984U3i5oaJXyTr26gGKFwTzTbytP6imTn9koQsJD5bLsY2NNwp1XqDRchUgUKJ7UcepxkXQEH9x",
  "key22": "3QNjHzxcWiQY7HZ346zkfN3K746tUdQN7Pja6jEyRjz4dqUoKfpFg4zwXopBnKfFgmZ2gCRYQmb4i3N9z2xwPHt7",
  "key23": "4LfmNd6SwuDAV37iUTqDiimfUdtgCiJqcHRULuJMhf1kToxp5UjXMRRHhoLPoXnpcv1LASta3gpJ5BaGhs8fYtPt",
  "key24": "k5tQHB49rMTVrMYfH4cNzx9mS6mVNxsz3N4eNtGjeYshq68x4b8Kq2m4LAUxbTYpf8Ua8pMapQQYpwY1dnjK4aM",
  "key25": "oX59WxPww83cC9KNZQ5mxCNaNqLRi23DJo5LkMcavzU59EBUnDVnwEE9kvccnHxTCZMcxs7Zu6voBqXLG6kQm7k",
  "key26": "3XAs3d73skMNXNsammEY71jq5HwiWYZBtk9wscgALwNMDLYeaeZWKUmxjUGUmQj7Q1MqnjWShaYnCFMnPWm8gUzd",
  "key27": "59PoLLvtdGiVdgHf8HKcxMELdjuvdQmwBh5KY28kjUS7kqRgG6Ti3zxWPwYwPg3Jx32wzqZpaVpP55M7v52fsadm",
  "key28": "3GbDYkfckNm93LK3ALnJezAW5bP2Jdg5XPwTvrH75hRzA82Tg1q9FS9yTrxMn2b6iFW9Q5meCgVdoCXDqtWNLQJJ",
  "key29": "3dXQCTuWXG864Qxr7ae1JvJWk6jKbrzY7CuuFAD3MHxkSrBHP9p4UWyn9o4D2sa1jRziFuzwRyN8t98YJ7jxtbYU",
  "key30": "2yhKFM55sgzy3q26nKqgAB7PuhLakkuXQ4jqRyn3W1xAcNAFjPHtad5KkFC8TJ6yr6avXfZ1t1qis1kjLhgE7dHc",
  "key31": "2aMn6ovGmgTuVQgsCNsHTqxvxq41QVpLHTP5PHvjCTZE8MxukbVpko3pGUGiJReLwvGkdfc9msmddWt4qTczcQrS",
  "key32": "qMMkzW8J3NR99wPixsoeUNXoJwjpKsdjHS7Y4p6nV53zdeUQAbD7QL3hDN7CfVXqwmKHWmPdEqQRhmcebeD5SzS",
  "key33": "3a72zeBvMvVrKQZKZzLM54CX3e3zg4jVkomg8zxZruBFESHW7kjNXgaqkc2zFNUTn9GexvCwmNHViPoqPPwCj9Jk",
  "key34": "666PFHoSbnnXPQ2WUVy6GFosMAXnvX71VxuTJauGFYFV5GqemqXrvBKVA67hcdmje9Hi9WUz4eNesbe6qm2QXCGY",
  "key35": "2jAnVD9vo1tgyzn2cSGQNgmQMFAdXQ8VNK2G2y2NgtzSmAsq8cFVTXQ5fzNrpAvA8uvMDFineBDxRmbgsutzhD6u",
  "key36": "29JQWefVNB8qt1J4wDXzWzS2c7RHWCGxy4gLwozk3WY72iYJhA8uFMqMycpckssCYzPRaYCSHwg1iBAyVuGPWLV1",
  "key37": "4G6ny6wwNGRnWsFDp298CcC2xiq8S1PG9UcmwWJ2hunZ7sEKs8LzVF92BHDHb7kvm7bJwUxu4mwSpQQPCNpN1jwJ",
  "key38": "2if9UwbeBdFmYELtTWQPwvcyZeGtGSgzaA5DPZ9JqbiP9JdkJCNtsDVEYNRF4dTvgvKY5eVJ2NUWaqa4mPxEyVPv",
  "key39": "487PFPHj1prFs3WgEDCPAAXwMKs2713Ht9Vzck9b1BbCmmYoqZbsK6HMxndGLxvyN7VY5tKTXYxnPpg9fgNuWYfH",
  "key40": "5SXbpAeLcJUAf9pAV4YTs4RFiZJUxwuFu6ZB91Ei2Cc9CEUVRYo9kEp6Uf2SxY2AC1Tyh3G93LhUorX6k9eP789H",
  "key41": "2dkEmM3enNG9mjXCYZPzYitegW9ku3rvbjVUm65oSuaF2bf4jySHmsM8L9uFL6XdX32i5CSpQB4cMeKMQguG7J5a",
  "key42": "kR6aagucw7sVjjeZFeLn65SwNncykQSSRUfFUZ7ACA2zELAho6cu76nxf7ME5mvQ8jhgdsdxVQSb6jnafLsK817",
  "key43": "qkpCji3xY7p7dEriD97zxcH9HXXJoB7yPMrfqeLZvHy51uMQqnZpMpE95XoNCBziD31XHDA3ZmNA5GmKBZ2wLgp",
  "key44": "3fxbhe5qiGgj32ayuxxNmhaHSMAFVvR8fMPdj8F3J5Mv46umHJNg8o9b2GzANFijwugHWmuEnMxSDEC4fodQhQSS",
  "key45": "5eErUhkb6EzTy6drQTyWBJcSo4A7vvUXJqGpmSH7omzdGkNXK1p7iNLZ7q9PGguu42xtDt68vtZJBfJkNxG9y1sA",
  "key46": "Np1y69xvWB2UN8nyG9raoWCGHhajner6nK3eT1dRcMorh7wNaU49imgpmYmsSPnmNDvLN4XvDnw1RCpK1i51TM5",
  "key47": "5kRuLt8ND1aBnatfgeFvMc3AQrjnnqJDFRboYFw6EFnJ2URLcFkM4XEX1nB5nran4svDRBpCTs8QY9vhmq9ZZuAa"
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
