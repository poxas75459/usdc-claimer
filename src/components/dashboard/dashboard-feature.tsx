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
    "2v6gr44PzuHcXcqTHszcKThx3oKLUjzdHTXDKiJinSZ2aKRcDfMon6KoVzi3Ffymuv6xGSgRMXSjPAVjCJvg9Ru4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gh4ThPUJjseHVx9Uh4i9RCEgKobVXKQsSDVGNd3a4UwPWAKnSKABQbU1YmttCYWvzSQvq3FeQg4fuQDpHEueCdo",
  "key1": "35rmQ2Ppdp2JjLhcHP8fkEfwiG5MQPr3Frpgd6jjDWhGzwYTHZFeHQmYLMEU891qYPg3xpMuzb6iidAoWmjrigjr",
  "key2": "2EDtyyFjajo1Y32EkTBwxBKh2zJ7TJ9GYCcrpsw4qC6x7FbY64j7Yu495tGvTSpXYFuPAyqJPBbvPrWVk4H6w6fq",
  "key3": "559Z8R77CUvUkag7SB9ELmxqfNKFZofeWB3PUxbzYNPrJsJAUfNXugCricg8ZXMFHKyTk4CKWZGt64v1saBmzJvD",
  "key4": "33FifXmztEUhcWUft3Q98UXLmExQWL1ECxLcqY9HjdT6Ctf7umnEcsB5WXVe6nNGzipSDQ4e17LoM4TbovzaFygW",
  "key5": "zRD9dLCTbkQ6Xy6LQi66S83uqmoN5ENpA2DLaXj1jTbevUUf4yjZwmtNiCf1gisTcSinUFxzJnBKNJRTjGQE8H4",
  "key6": "45eRWhamy51itBPBYyB7Rv7EDfkSAaiKbKUJTQaSUY1KW7EuzY8RvobfEr6bT18YdZAxqZKuHzgD68o6n97zyMLj",
  "key7": "67qygbK8dFXLwiSYM62W6sUARQXPX68Qa577zYvsSFWEngpFpWLoHwLAvtrefwVgVd3X5bHqCXwfzLnyGKe8asMd",
  "key8": "YVQeACuf8QpNsJjmRxrmfnvfM7AFbUUZjFM2wAixVugfA1zdmyRJEPkpqJRaRSQstZTPFSrXHYijQzpYXsw6r9z",
  "key9": "2KSaKnXcHfeaqfZ93vtE3WzZYge7kwRKsURKQTMCLmMTB9eBUxFmkFjyWe4A38Y51mttLtaK84mSFbUZ7BrDWywk",
  "key10": "iPcRdhqkGPCVzuLpMQYu5SDQzaFh9SVNMrA4kNzgjChxhBjDBNisGi7c6FnZBTYXbTJt6jP34mpadcHzxmQwNSv",
  "key11": "28Xo864fQd9yXcfiq4fWqdVyaGLekBEkj4Zu9ibtj6ppNCiuXwRhmZwPx9TJHtRtGpxnqLo91WQURRe7zTS5b5ot",
  "key12": "45MJu5K1ZdZQLCrMArHPZsSVf9cFbeZFM7VxbbvTZ19VwjnENqyqCQwGPEfnsr6hSTCNhmWZPhiPYsLQZkmjY1b3",
  "key13": "5uh7WynXjc4SQN4My5jbJjegbDexPeAQSqjDGrAJNvMQAGbWX3Kd2QeK9ZabzSdfwNDPBzbV2YXJ5RHJzvVArCRf",
  "key14": "svaRYYzbX6bvika1kbMRttMr5Pmsv4hxNSLxje1Q3Sm2DF2nYhoyFrYgfFGVVLGwyR8NsTRCktEA6ypjmmL8x9J",
  "key15": "4ZJGdAVuRyiLwmePgL9kauv2yGZDRJhhJArxnKjLffquoUuKAxfmd2rqY5hEunoa43pHKVfJPza5dpq8F3AghpqU",
  "key16": "2suR9cjkLPuvKNnSk9HajkuQx7maydgy5AA9mYAjvwCz3pxqhvnoej8QVT49FGuHavpoUNH1rQ5hX5esjfGSLEzD",
  "key17": "67qDiwtR8AQbLB4BL2VSuZNz7YFzsZbNo4ePsKygj6VSbriTQ5YMXXHMhkmswTFbwWQSniqA9QaUZ6m3yRSgHrLb",
  "key18": "3ugM1qRjUEk2t3mbdiGLFLRUn3xnmJnVz6DmuyzP4NuZGsp3kgwq6fRKNkRUCqwi1toTBkDCzZowx8g68ceTqixh",
  "key19": "2RupGzRWLnhDU36EBav7vq1FvXTzinrT1SPk6DFUusqVhpad74bbDqSF8tBQ9SLNxMurwsZZTRSYd7WHH6NqQoxW",
  "key20": "3t6kbcnFbH4UFbUzS4BkWveY3a7PaxyYghwSrRniKyRuhcbQqha6gYrRJLyjwoAaEnjiVjWa5ByVw86RMBqbqFXf",
  "key21": "3JJ1RmWAiUcYHrz5pa3NZvoqhkQpaWpJsfXQPKWmynWSdqx3icoDvcMGd6xdBis7S4WVe5kxRgs82KRG1Da9uqsa",
  "key22": "62UDM1r7HRuTTVvmo3JZ838ZzMghKpE7maukQ2LMHtDxFRwBxXXSpmUbTd3Y9vwHHCzvnN9R5KuHbH9QuRNr327B",
  "key23": "2eBcmGUnmws7aMDeHeBWCrMQYgpWKa3eezbP8vLrzUZRw9zgmYY6HqPevzuJVAMH7Zx9YQZvbvHzPrLi11rUKXBv",
  "key24": "4Vwe5UwPQvTmD1dTKM95xxaVHkayVvRwnPkSsqvfhZfBZfP4KvY9V7MAMx89BobKKeaBtQWEFKZbNK2fNmkbFhez",
  "key25": "5ZMVQvqgX6xtRZw1TMKbKmV8k71QQXD11H8BwSRbacPJW8DZQYRMt3tL5jFX5MwPWKH2XewFbax9mUXe8HhvWQFu",
  "key26": "4hZzP8zfvjApmZtFxSMEu2Tki5A3RJQGPrQMhMF8n36pQWr3Sdm797rrCzW9QyVe8EEZoKRRo8DAY1xo6hbSA16K",
  "key27": "2ohjVxoEoiV6ozvmGwEwiPaZSGEXRG7fXgpDCtsT12PYqEai3GYcDwwPnbPrxeF78pE1u8nM1AfkDkXAxhUSu8Pt",
  "key28": "4vqikhiaojUGsTK9CNyLdy6wXdVtGFDtnk1UgwjnTAVQzFLUvbbfui78GNxJz2JkeGiooxzLvptTWVrjfzfCYhFh",
  "key29": "2tVQ8WK4tMF3UYLyFmXF6LppReoTSkok7x1rrkiFDsJ7YfiD1NtCcLBk2L28DvEba5XdznzMnp6PhAxV63oCMFuP",
  "key30": "3qLJYcwhpMdkW8BAkG4FYnRfW7PVGZf7UhxonATL7ytSaK4YPoq5SGfQCiM7QHM7PpCyvkwUK3bQ6KQszKX1LbLk",
  "key31": "3pUzNCzBgCoQZ1JnxGFNNPJkn4pj3kURU8Yg5hPDzrkCTPpDfaw2PRvfjCawvac57FSNX6Kagb5Vp6BVseS6G6PL",
  "key32": "3Tf9yRxopjP2YXXsJGyqpoF1t5NGU5bHb7zYobXeKEP4tiRZfxtPChXCQEpwBi6wkJkoVYRVhYMFQSAAbNu5Ft2F",
  "key33": "gtSdWBAzfK9BTi88YJ7f1Wgq1DTnvTvTPK8YbBLm41twgCyKa8SfCs9c3NwyGRAjxJXA5vNJhPQ1N4Pj389mASM",
  "key34": "5DqGEnFZKaUREgsEQJ353TtDg4QmDsXXpYKGZGD8UMvuNYqs1JvQD9Knf6U3cx67AQjw3k6uFPAfutb25ksjtn67",
  "key35": "3m3AgAKwzuGpErjM63saK4y1D1qNMnGkmLQHmsR8usgdDnCFFQrGGKqq1DJAhNqqobZKdLYFMbWreTYHqXA44pfo",
  "key36": "2G9mfbUDrzNu3n2FAS1AeBGWqsTico8WeSgJrx7H2ojmFkTa8kFedYSPwagNCqSxRHh3X6Pms6UHay8GmDzNk6AW",
  "key37": "4U6uyHd9TVTknC4QkB2bXCg8Hd6bqauBmN1qvGwg6F7L5QJoc3ifHXB6a3eSCDvgvHkgwabnkXQafR653s1nrLoK",
  "key38": "3gqiPd2ZTHYFj8nTANRANxhfBXbX94NGb7RVJFpQNZ9pndaVVyqUCNznGWPiAmBxDog2XqFwSyWh4UNM6NR19Bcw",
  "key39": "3dX9uN4uX6cDR2kdzWNodryBPtNtTWBVBRCk3wJLLa1CgZjR9H7uKZ8viqqTTMvHUjRKwwec3vsashWhd884ZMQQ",
  "key40": "4eNYBaZRNgPSdw2Tm9YRbPWobUYrgDYMN9rpJ3CHgNLTHw8JDMPQGZLBfRy5PZzTUDV3qzinb2NYBne2z6S1nmtQ",
  "key41": "5sAjAnLPgMATk2PE5JzZ2a29X7WVutSAMGNdHg5A4EMJK2bKhd2ct1wS4ZpgeuwKpMLW5Kk2bt15cmMoqjNn5T4b",
  "key42": "5zAYvWefrddABhQCUhoNG7s1sjXvZJNkY6MCmqjviaEVjmieP2pd4RaBdREbXr5CUxfSvMs7TtiQJUvEgD6E3F9M",
  "key43": "5AYk3r7gGN91Goa5oqmkcFCQjYVhfnGQrcEfwQTUZRP3UT9348RJyuu9JueEXUMX68KkYFok83TP4FvcGUm5fSCW",
  "key44": "4oxdDX8E9mvFWXDi25tDvSQnyPRTWW2LNad8ma7QaPbg11LvKqDyp1GLMxrb8CDhBVrJMWLxZPNkPuKLFzrzZHWW",
  "key45": "2cwHmBUXMpqEu2a3TNsgSzC9Bwitx6ehSXQyVqogpUbrUKi1VSPb5uzuyPq3XWa8sBYYfebGTRk7QPrBHoJkaB65",
  "key46": "3B1T6oyVKgGb2EmHfgwftrBQnT3JKwUYupt97veY3zVqUo28XxGoQUdLAxhdb5TymuGdVt436E1UQjmsm1bcPwUQ",
  "key47": "2J8pNwjUyLdmxUf85twdKELikCpgo7TsuD98jaYgYnnvudGRuY9EeHEiyrPykTJyWxBJ3kXZrnfDMs7me3rt1333"
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
