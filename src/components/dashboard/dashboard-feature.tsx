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
    "3aqhpkQ3fidh8acthZtXLbFQSCfZ5hyGaCCVQ4Nn4MQo3GuDx3f7AoM3bozh1xWdMiprTcd4zpC51kbXy8xt11nQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hut9n8GqCkbqzVYSpzwgnRFUW7MPE91e5DfKWS65D21EQWL5K91NMkpuDf4Zq11rFAe98mJuTgZ7oqS96NeCHCC",
  "key1": "3VJ3vkSm6z3k83krN5XJ4Hgt64qTHnfNNZYgTd2CapzUkSow5pvSKRUo1wWmXde72gZQBFRPTEi6ZN3S2mLhaKrT",
  "key2": "2FWe5tMcvJMMJPwQMFtxR19s2S4WXfqpHLGtkX1dMBGDnC2PcvzPcaQtd2ybhVvP7YWBUyUTLXGaApzM5i9wFX4q",
  "key3": "NUNSJKXdNyohQgj2GMQwbD2JpECf3ZFaNrChvs1gm959xiiSxZRVm82ZT92fKvcmyszUdk4eCTAowW2p3kGLR5P",
  "key4": "5YDm7hCPHU52eADyjqmyNBrVpKSF6Ey68d8u4HzwrCE926XhJD7ci8LEmMDjJK5ccXk7Hr8jjPzFC8YYG63uXxZu",
  "key5": "3Q4gKLSxA3A6Nfsp1j3TUTm3AqeW23LdZ4Sz5gCJXkooTTmJsoVxgMp3fjSSW8urBb2TfkUq3BNuJppgDt1V1kmT",
  "key6": "veH8EfKtQqhWxLBzH79pQUkaqsHopd9GMisz8tPBGt1arHfiijAVfRAdwqsF4M23jVrxJXQuEgpeC2bWLe7ZE3x",
  "key7": "5VhtcK4aPazjxJrEREBKJ2aN12pAAzt62b3gDm3JfZxspUTSaiCKc1fGHTA6am4Y5cSQMfMhcnPSp77z3E2KFwho",
  "key8": "2G6xYnh8KCa1vxXzdeKzzrghkzHbtNi8LyJKq4zRAxVhUtnmukMz2fWhRh4YXHCTnAZUhquLQ4At65u65jA9JtC7",
  "key9": "5zZfriAYVrqA3uXCiWe4Z1tddthZPVLVBRbmN4atMkzs94r4X7W2EJdKwzRcwLgE2G618apwA6v5BUkAygwrYyx7",
  "key10": "5UZTwvVhV9s6unRpdhHWxZ7ChXFSNcJAQH74PCEbc69wS6ZyBhWuYLg2EVUEXQhSBCAn1m1XtaFmaBJA1fHB5b5Q",
  "key11": "5HioNFZC7DZT1zib3F882LhCaM32prx7yTqrP33aPmHYqTncT6hkWUzfihzS9LKZPpeR3jtAax9RiazauaLEfJxd",
  "key12": "29kWq4ZQKBMM2cjeCZZfMiYe2RH5ocsaLgi1i15Tpc8hYAvEpRqkvQasgg7jXAze6DMfwoeR6C56deLX2LhwP5sw",
  "key13": "3TQSv6vv167Bjj4r6bTxBRUoKcD6rY49YMCEgH8N6wAoQzpiiHGZ5uNPgmUb4nYoTRaAALzGXVsnTyjUkAamjVw1",
  "key14": "4LNrKs3hY4AEeCKetACnCYH7TgtHZoSFHn82wNUH6MJkBWDuFu9diGh2zk3GRggSHDbh7MuCPCoyfgxWfZnaS9BZ",
  "key15": "5ignUG9TiWgknScQRfoocqaUxA836DoiMr8xQRYTUhF6qMNs44oVNAbgX8JWm2N3MfnPKSVo47YUsRKfWT6TWpmX",
  "key16": "fgV9LdZddikS6dRfhyzRK44qx2eGs8BVNQxF2BDLpyzfRjnUDHQGSPCZNrWgJGJxhoUAUSg154vQu2sA9sPDz44",
  "key17": "4p7KsZVtg8xb1uzZDfdqyZzuhyMUVwzxq7GL85wDimpyfYtEBAr9zQTgu2ykD8j21PzqkKMHWg85mNk5Bj8Pz8kD",
  "key18": "2geRXrniYDwzUfnRDsTgyCLfo1c4uHhx3oLUcLvn4zkwr8CDnbkpouY9crUrcKNZYSGCQCJai1GknwUth2Uq2Hj5",
  "key19": "4Vv3LjBkytvEqejCgXCkSsVaPhmHis3BjE6otjeizHptDDeHoc5cSC9YX7sts77Yqy7nuVTaBTTxqRUFEtcxu6b9",
  "key20": "35exLnB5bfSEmpLoM6PLdbCs6X5iBiiv5nCxYdNZhaaFYoPvtBki8UpHZ1DGNveM2bCFUKnHu8go86tv6XqobkV2",
  "key21": "5xGkQL13A4B6tCmdXYLcQzd3hfrvxxTFkXgFPjYups22DPKFHLjD3YWWuW1osDqZqqiFQXLRcrWoeTFDxzuAbc4G",
  "key22": "m5UYhJrHz5s1uSWajNiAjvMBY5ps7nbQdzasojhgYddFkaosfRFCRXHbQAjd1Qrx4ViM3fJer9oS6iEm3rQsQnE",
  "key23": "3vXNsqqxh4obFfCNsPFk41t8BWbGFn5MMXrxnGRfPz55UtrowAaTCefgH1fsDsojio6B19sGHqbnUkJTWyoaSsKP",
  "key24": "5nyyVyrEoxTaLmfg8FhXTWLBWJqvfPirZ6oVG1mLahyyvxyqU4LmksFraL9fdsfRiuym7XS8iZUvsi8UvrJPcD29",
  "key25": "41pjFxLErEyyJavS8ZY4Lx3CjzSd3C1AVpWoBcxNbdeQxDSLTxNUjrz8F5ctKDXyxHVAJERMU7Jnc5rBsyaT1Z2Z",
  "key26": "4GXvZraJiEg3xCfksCEzUWt7wRHntw4LZ3663Eb3ZuLWPSYjuQvQndX95MypiEfHi8FRf4DFdPC8n1WHtegYHgee",
  "key27": "28pFgXAsGcWXzWcmjTcn4bZUx52s97uYikeyY6hVBUD2y7VPsZEA2EodccNjj8DuHPJnyucEhUCePAJvD6uau9KX",
  "key28": "w6pjnooRQMmMF8Y3HHqscmURAaJQdniog6NHmCZyb64H7XKfWR43jSEgGwQcSyNKKtHS2p6eLydvCoZigL3wNGY",
  "key29": "5EEjczULmLmHVBkQBRd2CstKQXpypcoqvu3WproHvteBDKsQmPyEJk7EDeBtaZxg6DRTW5c6WgL6PFhzqDaSuM9D",
  "key30": "q4B1bxXVTi7PawESd41Y6p3MAFCefoHywS4XBGpGkZnbxjBUPCAvbhTUFazTxpGYdAkjzEgtV2QEwzFY6vYbQPx",
  "key31": "5REyi4Kp1WwEbYjimT8PCcBSpSxHrjpaM2dePaJr4aQKdkgSVv9Yqe9yS97rKXcjgh4vZjv2XvJaBKfcynVbr8f5",
  "key32": "26eLXNVTuazWeeK7B8XT8Lc4VVYKiKWHG7PQoiZVkDBvM4txbmJY3YVDhn8ja3mNkPkDk8mKFsAC2FoBrx8jRCMq",
  "key33": "5tg2YQoRmZrtFmE2bLVhRCdT6w82onUoL3ayx9aFrukDADBPuX4VPhgFG9u3pFyR62YKkhpV2hheWCXtV7LtFVkL",
  "key34": "4vTPGiWLhRiY8u6h7KD2YQCNRQ7HiHpLGjDABWHdnDvWVJKVDZ1uGLbwmt6uvfZqZLgqLsWmDC7G2etHXqjMNzHB",
  "key35": "4j4oquFNDmQT4bFtoxhZacMouzDYVLpApgchVWSN3WSC7mZGXsL24iyJs9ftxtRbsM9EcHUvaG3p3evZND97CkdM",
  "key36": "5Ds8KC6A2CEMyFFkoUNVe1NMWmxqCFCCMQfuKfFM1PXmfMT2jYyAjtAt24vqDtzgpuiq9vPbibL6XSCokm6PHjZG"
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
