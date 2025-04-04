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
    "35rnXDRmX3bUS2VW6cwuwx3KE6EFvuuszyuK5rd4T4vysCTpDok5bmcz6MNYVtUBF8NvRb4yPYkdT6S5QjixXKh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hC8dBwZixnKguTzr2EzcLtzSD6zmsusmhsXnE3yjEGawqH5eKc3N7thtvUUmuB3gSgopEXxZpT16Se4YNi2xFCw",
  "key1": "22RDBSg2X84WYNuWkE9jwkzXZ2etsKUtRUnsnT3kvKa46DBnz8nTqGUzEKcMYiBanJXGeRsqQhDas4TTYav9CztM",
  "key2": "2MdXGk2pLoZinqigYMGAcKSpJ5uHfvn3cgsxESdjyjjSNcjBYAnoVeBwEocZE25Gat9tTcDeHQezQsyM7BfGsgtc",
  "key3": "5MLnLZ9A6HTPpUitniWbFXUSctJbVkvkYEo8cCb2aLMpASeJz9VTdtgjrpCESUbw1sL87YJq9eMyd3GRvEYfkvwN",
  "key4": "5Pm871GxgXMVyAryxvpo1KZrhSMT4d8uabA5Z9CW5DYFakJ3GsafBPidaYtKRWjfQ8Sco1N2YEn9qx7V2S9xRPqo",
  "key5": "4dxyXP6ceiGpkJxSx7pBZo8rcqnF9X7QSVJwMh53dr9pajJLfjH9hHZvWSZM2pWP7ZeH8B895Mww82KGiBqgBYvX",
  "key6": "3pmCrp4NkKx2ZBEkwsCzF79rEpGCp4xbbLTkCxPATXkUeWGNBr6MmULRNh4VFUfqXg33TJ4w5osFvTp468Fyg12U",
  "key7": "2Eh7vssXvunBxDLxUchUKyAJLhQoHD4XPKT5g4SVaMYNqrAG4ArNkmqKVrV7sWdsbu5mUhZU729B8ytwJrieobFV",
  "key8": "2qy2Rsw8sNKutE1AC1YuQsG4kQSpNDvb1idGhoczcGB2aWh1kgUcSrb8AJxN6Xv96ksRhTASm2fc5gJhPRDABTUK",
  "key9": "5btEoQgfQNY5tD8qm3RTFqEwy6fJp57QAgGfZGZ3xCenTFQ9FCweZNqA7345UgAhPxwW4N7JM2dbauAQJmLkTCkJ",
  "key10": "4ZQCnHn6G2wNJDd1qVHdRAkxMTtzhmoMYtZsxXTh5HDB8fYbRRS2aZkjHxxVYEVjeLHSU6S2MefMv6ZVMK2vxd8G",
  "key11": "4ZtGv8kBEy5M3tkcHoy9Xc7v7CEpnx9T777Amq4HTxbES4Q1se8dMhNe67axfffbk8gypJbPGirAW7F8c5uucRXk",
  "key12": "4vUB8PVBmtPLSgQbcyHwFKJRxN5zr623JAwNkzoEXynSHNgxowzEcsKYBfjH3FVVJUgsTXGAmLt97ahAhr4CMXGu",
  "key13": "4xiEYyfhWstiX9MaYdDzFM6yiXhT15Uwx9WnBetjuvqj5ghNQMgHGxXuXXXYq6Wu2uFsH2fqsZhWPxmktjZSZghX",
  "key14": "26EnvMvBHYXwprBaKorx3BVH8JqaCC3ZurLkieoCwP86Lz8FHTVh24cQ9BkGMM5oYXXj2h96zg8bSvBB4wVD84UL",
  "key15": "Ar72pmdG2SsENjTc4fqXz1csnsDAz3sfyPGY72kYr1EXpGKGRiFQz636mxmK3xvnMK2hzwH3KKPDpH7VH1KGqx5",
  "key16": "5MmW542AFTwoytfHbDjPXnuqp94jDnwmQ3SvcYd92pnWpsH2MT3bd3SkuBTUNcXUYCZMtraDJtXgtM1WT19FAcAk",
  "key17": "4J8oWvMNPkWsPQxDsvFbH2cWfebNnRZR2LRKxdqgwjQu8A4Xf7dGsN2nDMyfvhDmScaiXBVxFEu3ka3Sotyi4etq",
  "key18": "5wQZzMiFwQoAgxXdjTeUzeD7NaWYzL7iFhfiVgRyKXm2agWubyvCLVhPrQNsqSJ9WhXzk6SECYiZW9VHuDnN8eE3",
  "key19": "5z6pQEHob5P2UjGafg1WR5CjrXf4D9h7GWKVZRRWeeBP8bh37jw5qRy9LEebfgNz9SmWFT28ezWNAuKZBnNwBTfF",
  "key20": "4orR7UVpVycdsYo1UYcWy2JRfbJeD5tXMYJHbHrVF8C7k29o3h6QGjWySkLZp28GGw2QzQBtBwDGxVL79RMrB3QQ",
  "key21": "2aReA1mD3Ciu9EKyGi9wRZDncv68KUg8XaYS1EhXHPRfVUr2of37admbetJaj1i4mMxK2r8tnrRea6JqL1suzuWb",
  "key22": "3cmQe1dpK2ckHpewr9jdpFHPSrBXxDBALuJDq3EQCCNVSHqGM9smnZ5HEcw58eoTU6orhoNNooGN1gkDXMfU7XX6",
  "key23": "24MUU4Hh7FR6xA2M4k7rP2KJmB2aSvzckBNkGqmGrSUnwUojoxc95h5N2yifb6nacNi7R9QM73nyxVtPoCL54chP",
  "key24": "3c9K6oT7eQMbUrY8uZmxtFQ8oydNjnW8gLWYv39zHc6hpoP4S5tt8p8DjpaPuPKfUatEaA4MSJqrCZnGNN1CXZSH",
  "key25": "4sFTyyzF1LsEHimVWoXgWZCmu1W69nMhTypssRXvFtMMgBwj6qceyYVChUmDNgerY9jdML9upgyBWewyDS8R5j9D",
  "key26": "3Y2AwE6NNhkNVFmm87frLbonT5q86Ct4WiMMHWkYTQUC4XXKTVswNMxAWXAtmb1DbBawjLtiYgeAMe2fXTKd56hx",
  "key27": "5yLEavH1Nh5CqeK9DUSNCUpmNP76TQ8VPRmmAFnGg3Sy2R6MqCEQ98jCUUAvoPqtBX2BmoShrNt1M5i4nRf6nXfg",
  "key28": "52MdJaYV6sJkup2PLPckXufNhazC7U5Ssm2d61AoixCbzJPDtZ29LcQebE68atzbB61tuauS5pxbmm3dhJhhPEFF",
  "key29": "JYrh4wLkBuyo5ZgebL7EZKFo7azz62gXmb5nzLpAP6vEk94f7PVvwjycdXYN9VS3U8DmEqkzZf3yRKjoMuzP8j5",
  "key30": "4G5g8YVUpGpwttS9JFfHht8frxNWv2Mx8L64Z8AFAMDecbaHg5cWyQxtU9zHdkQZyTGZxLxGegduPfRJJWtLgpNu",
  "key31": "2pBqoEJ3QXCkH1MYQxjd8k8DTParQKkd9fTqwKga2YvKMqVwrpnipag6YDSpKnsGC88DXVekvdbrHZ9FPCZhNo7e",
  "key32": "Z33mZqQT7evvdQZWVJ4fmKRKCfvZ4WxfmSmEQfTUgbEpTTnNRzDHDmtkeu9ubW5Wutj3qHKPt5tN6Do2Mfc8TAW",
  "key33": "2QdjaMcoyrsqULs2RVuxHWN4S1czCZEwAU3SG38Mcz1UYeMF6YzKM7P87kLYMGgniXxszWWJQUrKQxksDfBDSNDQ",
  "key34": "2boGCCnfCS6uncRngqTjXs6EXkxUV71b8KdWDyJYE1G4LEwFjtGpqnaprdPxFzWdV5YJTcAr8A6P6Ng6QCFY37n6",
  "key35": "4iGkxhh4i6187KtYrqoKtgZBHVXsK8FmApaoo8jXt5CyQ5UzGVG4NVMdM9LVRiWnu9VRUWxQCVGL1XUNdfpQ8KNx",
  "key36": "3PoSQWHxxfAvC3XLk6bemVJdKneHiaC3f1NsX8ry7sYBKG21XR7yhp6hQTcrBSEZ2wu3vPT3qWnKr8KyNNAtSAvY",
  "key37": "44vZGhG66YiRCa2ZpgAPJreKXgQhnKQ2xchekp1DzFkzqnfVmX2gkHUyyfSWLDpqfc11XAboRvuAJktHtVrM2Hy8",
  "key38": "4N8N5unrRT6SYLBGXrJ2W9yg8tt33t4s7JZGXLrnHrc5ZgWDYRHAktHsXBnkdRhWGsAXrTDmcAz55gAaM1PdWVUP",
  "key39": "5UHvwWYvc7w2CdyvB1t1DL6eU33eHnJ4Nk5PqjWGQH4M4dDeb9MeXsNycZbATvrYiRbRRPgi3AQSqywy1qi1PHzM",
  "key40": "2WrXN7ruR5jaiDSsYWdgDtJ3tM8oFHAoLQ52B1RcWa6FfxbxLPWK71vaaKcBJvhjadmDEc5AztMJVKtd6WS6orQf",
  "key41": "2PkDxFTbzJS64sWXH8kDSgtg8PnkZh2gdJ6NxcZJahre8uKtiisA3EyXy6jrxjj3WwJtDY3SCQhFxjT3WGGK3SSU",
  "key42": "54QW2iePM8BBVgtLFQpNAPr3WRAzmLWSV8HnNKoabo7x8gsMPtCdaL1uoYa1mVRyo8TBM3KGYmoHLvYFNyfnadPc"
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
