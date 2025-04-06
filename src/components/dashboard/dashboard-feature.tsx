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
    "5N3zKVrtgdorEtLEgx4GLkexhCFcBP1uHb2XV7jPNwk5bnC2Xbp2661gEXa7vooPhqvLDZBFhYpjaCWkGi7FER1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kEruNFZvVRe9b3JrUMqJesamaEZjGMSePnXhtbeozobYEadyiH76U7dYsAbuxvXNXXwvTvP7DW4LvynkVz4vhJN",
  "key1": "u92cRsT65mgrzHtNCnxBHQo7QzDrsqrd9eqMj7FnYUqYVWNepF96mDJfX6UtcMByLHSN2Fr7P84JrPabhmVFcU5",
  "key2": "3SR5Jm9J4UcY44txHde7K2vZDQtjAdwShUXK12ST6EUPkdCKsMMEE1TCzkASv5Jg1T7GSFPSGZXFXBfUyTnH13a2",
  "key3": "52KipzhJxoSWq6Fktw6c5MhXe4AuSm6ZkfQ7BkMFBSKsMDAnjVJ4CMWsk1k4GamL9S43eRjBVrjbfrnF6Pr5wQTi",
  "key4": "52JPELzNqR29vSYML9W3pqt6gnFhSuwyg9iptTGdEo8budyq457n6YCrYiWT2PZfKkKQkwgEYH3LMGJyVeKsgn3A",
  "key5": "tewGs1xyxtPyGrKUg6xekKGZxpaEBZ8NfeQD7oaNJXcdbPKbiFU8jQVoXDrZzLAggZrq8dUNpSSpfFtJPBUyyQ7",
  "key6": "4NTbaRA3vuRb8DTVohhKTYXBQBk5kkoC6McBcFmrKS1gfXrbmCAr2iuuacLZuAgds68eFuHg5BT6sTbqD4eAjr4h",
  "key7": "4uoUkwGTkAi5XmbP598admM86pTdYUPuRd1tyX2XbPM21A8xHUptdT4zPoeb66BaJz9qFyrjAnoyd18ejcSpUQMc",
  "key8": "29gc7mWPMWbE5wN6cJgsE6jX3f6JKbNEecRe9Qbzchzt8CkwsYC61uQ97fCHUaYocxBJ3KG8tSEoGP5sQvUCKDyn",
  "key9": "3fGiBzTg2y1HTpXwtcWoztG6kjRhQxZ4X8AGhR917ExRMziREPvBDQGQiirREDiVjTrP6f7sSbWbPgdts7hdLxBQ",
  "key10": "pJkEqpSnF5Dp8fG6V83EqGjkQnkknP3a2VzBe9HuskCHQUx8qaSNaaGtxtn7DHPqYugzzkSLtkMAmLAbH4nUqdH",
  "key11": "5NbZVSpzDTh9GDuM15xQUbhHpixZ4hXrAf55UcZvczmYCbo2Tiu5KSM2zq8fjFotkRP6oUVWMgftqXNVARjSVVX7",
  "key12": "2zenRbkajxd4rfNCaCMmBLfJUxQ658Xk1A6AH1T7Ecx2R6NZuep6voo9euCUzRBVKxY2x2kssDQB1itngY9GMcg5",
  "key13": "5AxDftPhHWvCZbE63sx4zPLhD6RpN33rbEpdM9QUWHRGCCTY1yLg8DHAze2diwCL4Q79kiFhaBpqirU4HhyXAahd",
  "key14": "26Rz9kEjaaSkioYBEHDLucfDpLZ8ry7N7dPk42H1yBn23if3uDoa1FYAm2G3EpMk5QsduWcNheyG4EPqrCgudue5",
  "key15": "3pcDSCNoKhXpTjKLLTs9FSkGhbwpXLikR5w7GijnB8jFNEQip9Wm368zhyPyy2kov5cDeoRyoPWPTi8N6FVpGRqW",
  "key16": "gKv8cPvmj3Wt2t2hy1CdbgfQ82EZCNRAtPAE8ZBQL1gaBvAYTbD74GwMy1aS5wEneSJSpLNGo6961doELkNkF9z",
  "key17": "5wNd2S4Kj2kavuCjHqZadj1m2ahtdN2p8tpAJizwWTqDvsZdwzf84Sva87AecxNQLAtsxQfJdHwZVyZwrrsQJh2b",
  "key18": "VuTMgjLnwuioRdGze353LVP7ED3YaYFi2VqkFXavnWn3KqufcBbEgxhZdTVk8fmgQn5zr14pXBpcMsiVxqjJTaq",
  "key19": "4Ly3DrvekJzKu6Wy37Lwjim5p4psu9Q4h1SiLoAvfjRMS4aso4Ponq5BtxWcaGnq5bHq6gjMdYL2HcVhxvCJ49VU",
  "key20": "5RhnEUibuE3nc9nB1newbwAw8ta5F7fDAAA23KiSj2yxpys6kGMsBiRw5Tcet155C71BsF9ukFSAJa9XMZzg4jSS",
  "key21": "yEnRKnD1nPyuTFGeLoM5RLt2TrVXBM21Mjxdj2DKy2A8FWu1N24Hm9XvShWvj3MfS5SJ7W4vgztUhyKmRMSUdCF",
  "key22": "5zq4gWqbiDLe8a7jPJzY6t7yqyoVunWHdGnfbTwwQobZej1sPAaCsgF1q8D7pSeUCYw6LLWDVsBFCQQhLgshBR6x",
  "key23": "3ioJT12anXfQNpjy7FVnqiUNmRiBvdCBspR2oNEBpwQSntwJvaAdNYf1WBnojbFxFPRRJTYvpSEezoMe4kef7km7",
  "key24": "cvxsVqMRwfyoT6MjFPLk5Q3bqNRAezFi8ekA7eeTRr4JjnmN4KzsTCjcLWTzGJHkknWP6LzpZ5H4PpZboikWw7t",
  "key25": "5qSgc7NZUkK7M2ddpFehpgQ71B3FKBaei8R5MpqAocKvrMNEm1kstj1pbPUpSkqzsCamHFmEap8P9tiUsqPECbUT",
  "key26": "3nuzuujUpFdT5FJqaXQnZKeTomb9v7TuuTcCwUzEfSoEGHjDtwwsEKUnDXjKe2RkKd4TuN5cM7m4Z4ZquaVQ4Fow",
  "key27": "5P5NKfVp56ASsxL8jrkJfQM1rGczU2CoUv3WY8A8fMDbTnQ6EyXYAsP45E2gD7E2zjJzwKreCNQteePYKRoBch3E",
  "key28": "4Wj244oDUD8MVtxetMp4zGbF9mWYryvpj1qfPuV5C7VEpwx6349LgixAAD9Z2XTubcerCgYpQ3W46WGZbSGhPgSu",
  "key29": "5PJUuH79Bg4Uyp9ZwcB4bVuSEBCcSo36u76CjoCR48LgYqivXg5kHEWrTRSvv6zEmoDaZFGgDLSenKrDjfHLxRMZ",
  "key30": "ouXqbr5VahSChPA9pSG1Wa2FGiwDKAJW5qh7Q4BJrs1bPo4r7Yr9c7dvGkvAue9AHzpJ7LogZNiENTKXemMQYPH",
  "key31": "78wHpZX3k9xx7c227FRvnvFyHsWRkeqnFjrrhnTwWMsyeTrek5rQUmyWXRjAieDKiXhci4qs4oqTep2VLJczz8m",
  "key32": "5LgyhHiQyEDMA8bjwmKsP1XSQ4WudhVzzdaqRcjfmLS54nbwAtLgWRuYnKNqeXVB2MYH3aPGZbX2dc3BruyQYmQw",
  "key33": "3eAMJrY5B13w36LVqCRTiUtTebWmtUP6tsrHHzQaKe3hTQn1Gqp7DHhUHeAq3UFGigX8oFArqnRJJxAEceBLM4vZ",
  "key34": "2dWADu2B9XhrRTkEz4FCCkMXn8BzCFmHg3Lqh9Cbub5CCodsGUbPdTbJ3uhJiV6UZtU2yeQdp5n8r7e1J5DEKdpP"
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
