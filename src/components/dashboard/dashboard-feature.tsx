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
    "oHbDD5H5bHtQ6WqZ96e6SonBtZ5YV9Zii1NV51x7GxMeCmuYJ5ApLVa8oNxG86rd6QN1Ru87rMS3SiQPyvN8K3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TuQXcDiLE9hdzLQFHDaQnZBX1nWnH1x2YKqhUJ5wqRSPAotpQyNapvBYukCyU5thhT9dpSsGmxQD7KE1YnRHNn9",
  "key1": "jXooUV5dZgmKJaaLvBgPbeaF9obKTAUATCpPPqZbD2kL5SujCqh8XqZRYE7zVyJ757YW47dHvNZfAjt63yE8APQ",
  "key2": "tBEFJ9BDYfFMeJzvW5vUrCcJ2mnzaUYwfKc8sZ6VmXcbdLiKZ2NjafPFkGHNVAQHjAyxv9tJQeK9burqVgsGkD9",
  "key3": "4QrVys3Htr2ckJw4ZoiB3BgRnMkH3dr4C8kVy1LyPPtzVbLUnNgxjBgHEqJT4dz3ifTXFwCvhNk28vqHwiuQxWSj",
  "key4": "3oi9AQdnx33c9H5jTpvZuAF7yXE9ZWa1QQdTwvPxwMDB2AGFewoYTS6hT1FnHKRWbptMXYqm1SDaAkgJy1ZsaQDX",
  "key5": "2mrp8Cwd7HrSNRUojhxwEySqEC3JpYRu79a9GyodT3wbjeXpBriWDHvVzMuzvohdKDhNZETe9vVwuUyBc7xLqEbs",
  "key6": "5DSezHTfiXm86DJ2fd5VVBDaVSNnAmNKSuy8beQLi326myC6iQboDDdrNnSKWpx1WsycCKxSHgjyeBYMpDs8odDM",
  "key7": "2xdsddtK3tmohNo4VMLk3xKDR5Ahcp2D2pX2o6otq7W6VXpfkrNTm6pJLc3NEoDkSoQ5LLLtsKqXKbf9T8LzPTfY",
  "key8": "3zYJ51z3MzUC49w98oGVwc8vWuzfZYva2Bpw3AAntKzgtNFKVt8MgYw2RAY252mLMug4i1vmpQUjNvc5bCRZFNX8",
  "key9": "xqxaTXKSLhBpL1bCjVnTShEPTN6KpU3qMmc1FrHNbJ8277hBcUd2pjKTMw2xRk9G3c6swJFjpfxMQYQC8hhCH5x",
  "key10": "5mgtSPrwEnTeEvzBbP7NpHk95xUDuwrxpYBn6MM29E3EyEqXP8qLRyRt8fkwgMC4FsBrApJfUdJVrZVZp8umKN28",
  "key11": "32PHJosD7mmmA6HZR58HDXnCgkQkAuJs5gYEkntRip21WqukU5pMTVxtwnp6cBSevFJoJoatBdzCNX4aFWmBwJtJ",
  "key12": "3rFSdi5UHkTeGD8rVU9UMFQEQ3SPRHENSWXg3W2nRuUZA4KLPLjwvGHREFzv5SMYSeJrj8RYwZwXYXMh1R8kYymt",
  "key13": "2Tahn9Rw3thKCdYnG5982KeQ3BshWmRJxXQxHuj48MRygosCNu1RNmJDJf82jvtiYZb9ryknbEP3wMrpiCtiZNhQ",
  "key14": "5skJNggEraTBnYdo72a6rdpo9XihquM7a85MG518KkbF151CNh9ip4boQVTVXpsZo5o2uVLa8KRtbr4yLHGnvyDx",
  "key15": "4hCv7K9GKp277pGeGjQmZEX4JwCtWKsCBbnazUUSy2yfarroTDAxE9FqXbcKxNtVgdnpRnNvTq3EYp8LGsnS8kkx",
  "key16": "216n7jdW3Eq1SqaMJbqGpRcMEFzVcSEiaPw4c6LFxAo99qh58SxvkwMKsWULZo1QascpyYgh9DUoCjoqd5ZZGVod",
  "key17": "635hFq2H5EfWUE7RT5VWwss8vVniTjF6Lt1VKAfV7Qp8bG9q2f49sAj8Ls3zNf93J9jfRnfZrbGumDaZ5RSv2PKW",
  "key18": "4Ae9KRPwaMJPmzaXvn52kypcj1M6hewsLBEJjxM4XkWkQEzbv1fKTfLoyagxB85FiM9p2YPG3c35vtfTrqZPbirf",
  "key19": "2BbFoeB79AVa1SSS5EZGXYU14rrsvHQP7qoDoARhpvxAHuMrb3B4FYLD726YoThBqWYSWZc3Xz1o6zMhgPTg3ydA",
  "key20": "4nDvNjXas6ZX77vam59roji4pDuDhc7RoSWfXtK2epjgHMaXZAobtkt79ZZzer2c5TYLPhKSt855aQX7R9rMUPyS",
  "key21": "rexdFEtVAMujzgcwerWyb4adMxG8set4tAHNUjX8uRgTd9HEYpfaGwSYWZvsXyJ7j8nuwZCSoLP1MPDUx8HprZm",
  "key22": "HrU43bso7AkEsVNFhgXtVgbU5hBph2Co5prphV9AQMZgxYtw67Pk45rAfQZD3USGj4pJsYyjjPdE4278rY1Sosp",
  "key23": "2y5J6qbqG2HJjT8q2W6pqVhV6X6C89A9cPd8AiqEzwSaTmZosQzdvtzUa9qVkxNjP2BioW97cweE81j8ZjgWoSUf",
  "key24": "P9bDoRyjZ3bf7Wsey54qNmDFLYrqBAmdLcxoc5h63voSST6fHZ3qRtShy8xZEBQa4AFty3hwiMgQjMFfstrmqZV",
  "key25": "4JH59WPBcfrW5WzbPFDszx8UJq3LZKj8eQpWXmSGUo7MEHibwHEF6VDukmYXVqZi5Hrm1Q4SbqARxJ6WPrBqzbNP",
  "key26": "5tUpTczwzApv9gUbuHz5MUPDNVtHQbfVWdVADYRtmU7J9Xr3EmLCGTdsctFe63feS6N51KnYVTdxuvPAahpfHP2i",
  "key27": "UoU7DrZNQidFhtCFrkGZPUaiqWmvMy2e6ewkwbGK9Wwr9M27y6jA5JCn2ZVFMZkt2Td2FZRt6uaLuHgpMfKgEvx",
  "key28": "3CY9HXFhF6wWiR9uhsdqLmWZhCPn5L7VucJCfxZeVhuewEDdPqvEHtDf6g48piBaHNTHgjK1NMepV9qBP5MAB8X8",
  "key29": "2PG5PmCp9FPjTm2MjF6nBReDE4CXxTPZKTKTgRdjS5K2GdiWYP35vv2Kfb9cZNRGFLo8yqwX2rJ8tqCLMTtJ9QV5",
  "key30": "42FYq9QAsp1hVe3e4T1RhWdLX3h2ebuZGwtKuzQsSBh5eAQaq5SSAsamiSqNbQhgMDmDrvaFpYpkhUzdDLcaCPXe",
  "key31": "3LwQvsFBgA7tAVsPDvkW76phUE1y7PPaxmRCp5P8vLsF2p6x9v4v7Zw4Vb4xhPLVTyaYmJ719CNmBFigH8VDohCg",
  "key32": "2cXXr4j4Gr2Qa13JXnuEraBvyHhkujJEoQcbawpiB59YVZN8USUV2xxvUBNtEwnXvJhCEWaQ9MEmDZwQzYVRkcVz",
  "key33": "EREiy9BYJ6K3kz2qhMi49EXUEnWWu67JQiRy9FwVcU7mZuKxF1L4rnZmo7P6ECafK8zEqoJVm99x9SGi21pCn6s",
  "key34": "4oqzdRpz9UkYQKvUeJ9hVGYdu295VUbtRjy9TLbnnvj8YjUkwTkUBu3mfXSziytbptzfqxAagsCYEQr5HDDk4EJr",
  "key35": "3pmQrhzhHdJAR1vNmFaGDVr3No7C2522PGjfsTTYDquth8UPsgtu6V4T9ALsR9CDfLQKfpXfZXepeLD5XoNyj6tZ",
  "key36": "3YquoNujvjAWKgCvyfiSzWcuxFSEVAevqJiizDVZLhM5g75x27CRqUpTsh41rNVhd4kLu71g2FjUyRg7JAHd9ibw",
  "key37": "61YbRgBvHNsjYfkhxWPadpcsaNEWGJDV933PwjRPXNeFQBgBjzJV4dinBzqGnqZVKVPo8RMRQQDGAThs6ZfXLL7D",
  "key38": "4cP8pGqLrfdZD1HMfYh74yArEwSS4cHqnNPSU83trfvaKLPkc1NXMJeZ6N6Y6qBzUJYGHF69aMWDCSiwtBscYqg5",
  "key39": "4gyKjwrCMN67hvBNwEd9FMb7N9uk1kCDz41NLJAnxXLgAfLNLLqKpy7WvTqnJV6bjijYrc8uWCtgeSYtb84YgRzp",
  "key40": "pw4hKUuNSFUrmxcJ1EewCTcvBmMprEEbUAFRFCp7rn5ai2AZCfrC8R96LPxorjdyeGJ8mBgZkeZVSDRSNGaHst1",
  "key41": "5PsMyUFQA5zM9k46BLoBgnckhSZYofDktLqrYiGg38wkmiaNZE1SrgpqW6vR8efAYAx97gGKGUB8v6PzuU2At7zk",
  "key42": "2WHh9zgT4jdbTzGDRRo1nqqogcr7qgKPeXXYmUXYd9mWty9PEAeoDoCm6gvNqoGbaFamWLaq6jSjmhE41UgHorGT",
  "key43": "4x8bkxJqc1yKWAhViucwafsHi2E3pGLYatjEuubsMcugLAgYso7m2T3ZDMPozMv4HvATbp4MzBKmMQMzNHQWtXDJ",
  "key44": "5ygUkvNWXfuZAwg4zwbfCJGXx8GQeRq2e9xepwmENEaHrxqPeNscRGtF9xx3tDxH63gNLNvenLK6GwvJP2g9hHmT"
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
