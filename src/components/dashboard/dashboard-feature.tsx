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
    "4k8mZtF2qTqZTgJMShh7NNs5XG1S5Buhwdh3RV5PNCT1QPmWn5KYc2DbfGsU1G7D4JCG1Nf9S4dJXigN47b3dTMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R9LvZZwHGTazvEtreQx8Y9f29haxfTie7gu51HJYHbMHK6uu3ux5YY8bnUs1pQDgaR2zRkXUDyRGL9mDZXncAxY",
  "key1": "2hXAL9rF6zqbBda1q4rQLmwHkiuF8ebDj16FaTVfQwqJbmHuv3hZY52EHBdWtpvUsv2hBrtuuchkzgvYPFo8vRtF",
  "key2": "3yscX1q8W885oAa4oZc74tXTbRrbXXvyHytTfCKE4dC8DiWcMMXfZ9kadXCpPAm7AQUuNBbRkAT4Uq3cxgRbNo1K",
  "key3": "BHBfdKzCoZCszSiWK22d4sDZcJPBTtsXSkByzEvC6eUeP39oftJFqRQbiYYatyteoePqtuM996FVs1UvL5Bz8z9",
  "key4": "31kRsw6SzRDQqnMGFmeHAfZvtqM21kdiGZRD4GgydfUsb8iJjAmMKNy7MeSFzpkUjaowM53sZQSM3BNjPhfEVWAW",
  "key5": "5zmdEcpRVuk8Z93eJCvNZgdKRtKcUN3HFbgpbUjVj7UGpx1BfuLWEtumEJ7Bw1cVSTvcpdRc3JLCK23jzF2hYpVs",
  "key6": "34qCcJBf9uJWn6xkLvmcXgQSBno8b8ZjMsZnASbYLoq8Vp5sqEdrvBoHL7q4K6fzYY64j6iX7w1tCD1rgnNe1PL",
  "key7": "47S7mi3fXSMqx4HLPF7o83stFQDSNMPyV7k8eNaRU7XNU2oYnJCE29USztVQ1fknVgWQ7jYdhjc5X7zMnh8862Wd",
  "key8": "2yRa8ASKKA6Gi4XsfkLL6d2CZ8ao4L6atZg3qj4bxRrmV7Q4rNtRHCQwCcVXVBj74EJ8chYv9hxjYYZve2Ji1HQw",
  "key9": "4ATNv2Ck8DEDhovwBTXvD37m7hG2M43wATnhScxaGSdYjGxmZdSFDqsxSw8Zp3sbQiSxuhhBGevAJon7gE8FZfeb",
  "key10": "3sg3a4j2ipkvemvLmYzwQPP9F5G1DKvrzC8fySuhttdt3Ef9S74og4Gw8Dsz6tTjdhQHcbbnsWgsvfzCcMFsqeGN",
  "key11": "2aSjnawis7qaC3gxkfr98mYt8vV4La83e1AQJXrS767otA1zKhESEgSkqWFVpXEr3F92nqQ3AkYYdJLaqjn7TZuZ",
  "key12": "4FDMGBwewt1JnH1fdGc4Kz2qkk5Y7qfpbY2Uw5cEtXd7Xfz2Qy5iefkW297LFNAEJ5Ko65eT7F5TF6xm7W2vxzeJ",
  "key13": "3CMeShkDz2kmahc8XK4ER7pbZqsH14zVNWzPy337Vzgdeaa9SVeEBS3Pcnz7h5ECuCw5MW4LNAkZsUztBfhtfEmv",
  "key14": "rPgmDi9ij68R4ya7NFhF6eGyyBLHkkquBHybBvzQUdGfhqeWy1cgby93zVHghWksky3QzUBudkWW1uhxD8WH8Rb",
  "key15": "598PCvWzYnn71LyT9BexmXGAjbsQFQHQcFu8o1ri2YjoRCq9iRC8zRrjYkctwzH6mVcjdcHAukFRHJUAt7dA1d4a",
  "key16": "2jNGiz9wUekMhPmEaoo7qhKievVeKvU7F2VLbCyy8hWwLA6SLrha9wyWxbDPk2iCRSRTvvqGqRQSfJBJLgCWwip",
  "key17": "2jMey7N3hBXe6YnyQBmJYAGSShhXFQooAeDgoqWH6rwPnMzaQaLZFez5fPA7Ront4MqGziyeJHA5HhFGmopf8vUS",
  "key18": "4dx5HC7iYpPBLPJfE2qbw6BVrPsiYiUoXdRs7uH2wxMWbZe39eXi66ur32Kb5aE2C35u1pevmBRMAQSSPk6Zm97p",
  "key19": "648LCwqH2MQ9D78AEpVF6t3B1QUWvYYwDy4oDSjbuB1JAmnxJSAuSGT7SMU3dCcCYuURFRdeypupammxa4tLjF9X",
  "key20": "5wxjiiDWnYYuWwrJCzsjX7KW5YSKu37E4yaxtwJkkARqZ9RQziJ178AeD9W8zJv8VQMFnRUu42QFMZ6xgFiGTWGm",
  "key21": "C51a1kR4bAqp1Nijkkc6wW79DbjnYtRhVko233pgEB4ZfabkJVgwxtkmbsh7rSdE24DdW48LRcHc55KGaEFNR9w",
  "key22": "5WLpfUymPE8L3DBRQba9ZiuZrRhxUXrcLCE7RJGHH8iMjLGMqkrHtWfULmmuygH9faMbpCe4fHLMb3jBu5Ry1eCb",
  "key23": "43SHfCjNgZjskXhivkVjaftEtfwm1LNiKUxLosMb97fZqEuK342PmsZdcbFY3pyhpjnocttPHwkhkpuk6apQf5Lm",
  "key24": "3uYHQuoMCP4mYxPbVGrJF3cApsWt8g2RVdBzguQxyUGgfndgaoFTTJcEq6PvL3ow4E4p7UoqBE3wUFkh5vpnhzFr",
  "key25": "YKUnMNcmLbapPkGhiDXHgEtvjnRBBsDu39B88Qnf6AXhPpWG7EbW8HZQhYWu8ioD59oqe2Fi5xbj1DHqwRoPgrK",
  "key26": "4pET3apABhRwQRYMVK8w9iPy7D87Ug4YgQYejKpanoc5nXqDwjtQoiPbhVbXnD7ByxbdhwXUSdyNeF9VB2Bye3ZV",
  "key27": "4wsNAJtLr8FeKpuf9crLeQokz3aduQ3TCimhEkmzXW5emrTp1pm5k2QKRTvtfUsjfDLsbQnbY151ws9CXH9qE8Wx",
  "key28": "2bkGoAX3RVgV6KvZJQMii5iwUkvTEjGfKNT2C6BDMSs8xeMsQpXLDs7xSUuL7N4pXLoK6oUHPQ1xBpWWUYvM5CZb",
  "key29": "3AGTu5JsfbrBLbjBbuKP9J87yRcKkmMh3F8Ftfkv4runa88TKBuGpVRiUDbakpbZtAFyJQdTvJpRvgi4G37NmtVJ",
  "key30": "3iW54DZ7vYtkAybdftuqiVSab3y7JQDKyTJHNznE7DfNTgAuaT6GMUoQVz4ZXzNr68jicidm8e8VHmeYhvespnhJ",
  "key31": "2NUdKPkvuYD62aK4wyNpnLLc9gKf2jBQK8hUxRaCSbPHxiAsrh62qMAkextJUzgKSKacoV9q2M8GhJYasjEbVf5T",
  "key32": "3HRZ9uFg5fMuYJStXpXot1q7KcRrJ1cQ1KMU1YBP4EmEKHNrCnLPv2fM6xu9X77FCcrezVpw83npEy9fKUqfVY1Y",
  "key33": "5y6aLhREa8WHum32DGMG7DzLaNy3h77QVGPCsbxTM8nVGuE8koNb7Ujr5PWNj6a9QQhbbgKNxASYsdpraNmyr7bP",
  "key34": "4TvQytHrEzhyqypGc4FwY74QD4tMXP7y276o711fUDfTVD95Zzyg98rLFnQAUAVWx4k8xUHpzBckRD2P3ix7PUtm",
  "key35": "1ENati67hLLaYXaK25fLgdM2mNzUioU8sN2qoDgGLdeSSKFL8rTwCnVHux4VFcsaAdBTbtC9yFFwCcdFM2usBTA",
  "key36": "v3WgYLdpPbosqN53TmzEzYQz1QNjCZS2NtYk5cKZc7Ng3tZfCFPPUSCSedoedQDE5233HDUgngeZMMqEhXXcnAJ",
  "key37": "4oxtwXa81Qiantif3KKb3BX6CyYj7nQBxyrkag3NwRgZsXUfmvwhipxakzP3zWcHFHszY7Tjwx6WCqe6GQrh97oD",
  "key38": "2TEX431m2krAtbC3gTf1TYZEpTCVWK7Giq49pq75oH6GRhyrrQoRADA5wjE8knpFmQRa1dGYDPGnoYQV4ZfdGVBV",
  "key39": "nW7avygiTb2ykpanUcsm31LJKKE5nX2mP3V9ZNsVarWFg6cYfAAdATPb7XSe9WZYaszRooRgcuB3QeLCGVaGkue",
  "key40": "5W2XRs1pnJeJzJduj1YQVdLAFeGjW7YZTNcTThxPpg88EsvnFnj3K7PmWX8v4bWsQu4WnaSP5PD7dRLSNfDhqGcj",
  "key41": "5eK6v97dRCRcG863N29fPijszD85rzsD8hQkdGSPDjgA8urWZPWnKbGRrq6jhBtRdjFUoiA2QGjaqGa2XbSWdqNK",
  "key42": "5tmPGSSbJWHTpUzw4DVNoN6mTtVkzNht4iwd35yu2yEx5HTqiJe3CeMQHn928edwTGSaLSa4k77qRz1wECMnAWfr",
  "key43": "35mzzoX3iETgSvGB5DqCHQeXVUK3wZaNRiDn8t1FSydaEXxJ9J5LKWB1wBXK5okumQjDovMsdcQk9CoojgpYuiP",
  "key44": "4p3KRRw5qPZBab5F5s2agm8toeNyBVSGVn8VE6BGGMyTgTxJ2x2tr3s3iYNuQxFkaAeEPwEKHwjUUEsM5LMm2xU9",
  "key45": "31CG7W4Yx72vdiUawVizqtaXU4127or1qAsoN4PwAQgGokPHgpT25RWrRpQZw6SJozWXPbai4yAeyQmGfVrXLhWZ",
  "key46": "5muufor4G9EvJzM55p4Yru3Rbp2zMJkhbwyNnvv8gvhfVP5PvgxJFmWJwsN6yAC1b9Aj3CFKLoS5MqJ3k3zuQEjv"
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
