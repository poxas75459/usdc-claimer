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
    "5H4YeFpeuNQRx5DS1D8yCERwjXUnPcAjvDtJ6nNDEJfN6nRttHV437tVsgMoJ27RUVU5CNhuydE48pWDbf2nzyGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SELnK9m4CcQEycRhqcRrPftyK2B3Eh9JT7qkDhothokfBcBsiRFHKVU23RBrrBbKiYj7fytwhMEwmAKDB4CbPkC",
  "key1": "3pTPeVoBVXbMVniKoNB7sCB2QTX65stBRZdVWiLyuSvGxSJaJxVmo3wEVcB1uXsLK6UL8RjByQCQFyhBfQCBir1u",
  "key2": "46xGPaV46qPeQvPotkynfyj6DpdCiMzpy1W5TdxDWvABxpHJS1jNpZv9ak53gbhDFboj1v1BZ2QfFDZrCASN1VDL",
  "key3": "4w8N3YJdEnZkQzWcTki7VvnbPKqh8cZ7apVe7qHbEtsG6maCZ71vzFKkqvAYuvNYhy9Wkcpi4aD9agsVhh5JfXuV",
  "key4": "5pTv7mqY6FHijeWYHKA38pwy6EwznNtwDi7h7bQRRKYWu1pzhpshfd9hpYRgB7ZaHWxPyQL7k3vLoJmWXKv655eg",
  "key5": "3QktxZumUtU12GnuXGBm7PGzsWCM7xJEEVfX1oEi2w4dfjsVyjgf7ojXS66wR4Jh4dYu9LzbHRLQKzEGTwgaSEZd",
  "key6": "hi8XtKG5wSM42axR1mHcxD5WnEjjYv3bumKSEMSG3Tatf5troxiXsdb7Ehyyn8J6JpPyXr7rze45aQNDynraSNV",
  "key7": "2jRqi6Zx6BPYRJZqDdvxY5FnQHmiyfj4rz2sscpPV788mRAYLLaMmqZahEjwr4FhvnMsTydWqGnfMj9oVe8ZkaXY",
  "key8": "3jBFFT5fpJWn1hUFxiAg3AmhD2DKQSMoFvyRsh3PAyqucK8FKcFaYVxLR2UzrgE5HWPE9LSnbSbPwjVwdrUm1A5W",
  "key9": "45AT7FKAm3B1WdLefjcBbYsAs7uzutYTqpYLBqgkdYiXeKQUzacEEiwq4sqDEkiAjPq1E6oKJ3QMKs1NUNvc4f9a",
  "key10": "LFyjivc8B7VrJNhJSXWQHBG3CkuRrqNjaSvcFthDEVXsqdAwfbTrKgX2SyiSZht3yvn8kmwwGHZww6w6nJqrvor",
  "key11": "2arpD3RtosTtdC3qA1cRA3JEJWuV2Ree3u2QpLXGCgJzzpSTqJup6NYSFSpeorUNp5nYRoWiy4VKL4por69MaiXR",
  "key12": "3zhFg6zB54hacMhUFHGvNC3hmUCAkUgA8EjupPL1orLZuoJZCjzSM46vcss4uQxcgDSVgtKPURVhQCiKuRoptrQu",
  "key13": "5apUyHTcEZZPRH6ZK4zqhDrCG9xrRPEV6XwVNbsYCR6KeYAXwqLreMUT1xVLeYwMe5hc846eVTM9u6BRLST5nzcC",
  "key14": "2Y5X6HDFLKnf9H7YdVNE1yzsEHwNUsmuJgYfg4txYgATgBVLLKoFVW2WBXNKGNqwFmPWhXrRBiJpyZbVW21uo2wA",
  "key15": "4vjHj5WiRkodKcsp1DK9q3Vf4Q7gHRGKJ6QC2ZEGVH4B4DFwFZKCy8VakgTRTYpdC7qWVg3eYwgdmBaHhPjJ6jXf",
  "key16": "5xZn1f4QPakr4gZNQEkcXT4iraNvM1W4yjz1vH3mSckCyMkNwtnmRHsojbaRxynd3yxtVSQnALn8PtNPhDYrZjZn",
  "key17": "2wH5p1LnNers8uXZjUZGDy3zpd6YvTwrqUCrvJhgNFGpwC75Cp4ZmFXdnjLPFwRRYNAXsVQfzfyRKiQY16PgNr18",
  "key18": "3Z7nE2Ad3QkmQyYnY4zyBJenLm7iPBcAfDbuC47zPsT9spNAP6prwSHt3mCBdYLJJnTbzYuKUm4YgwiCXRVPQFvt",
  "key19": "z8g41jaCYxMEXBQi42w1BD8xaznLYXpan6Cr1sjgoR8nJpDGPGNFtjnCFdJotoQbjrJBAaSkTMok8PuhkfxhHut",
  "key20": "3hB1MfiMrhSYmeWwLzVd5TWV7p3zGobQMt9yTzEHnhXQWvA152FUgswsjQugC8V9Tx4CMuArgftz3U7YPMsueyVk",
  "key21": "2YrE3AVj2bj9vhtz4GSM69mFae8DiaZfzm3FvJQmmy5hXBwzqAfg8ZHNXPqefBSMzbBzBe2aFuzm7gwWTUN3fRLQ",
  "key22": "5L31HZg8p8VNzbCdUmyZ19ZCtZy1iKWMq1gyH8PT27oXcBqYhJfKW78pnrBduwAgsPhPDMEgtSg9SRDQYMPjvddg",
  "key23": "2RqPu2X3GU1b6HMZenZektzEpJerjbrk2YCyAQKkZMN4eE5KVHySqqzaLnjzov9KrfUoDxjhAh2WyPW72g1DEkS9",
  "key24": "2P89XHSdsVa7jeFZcqhrvyNWAYbbBo4VpHr8nasQJ2vCSUhhWVo33XudzSPyeGbP6G1K5vPn4ZXJazNUQjWzM6Nf",
  "key25": "4oBnJpv3dABA3yVxE4xRpBkT4BLLpXjCWNFptxggb7edDPfheJv2YonEbiwYZMwfenon3zzkZ6Gn7BrU7rWokfnV",
  "key26": "3xn1CBmATwnELYNayu2PrDBwBv3mtPzn39MTSxgeHoXXPYLGoSSVjxGkgE17ZAucT1us7AYgsxii72ik9CBJxpZH",
  "key27": "5uhVw2G5nsHtNC4VgrAW9y59KLHXLYQ3P7VYFCXWh6eGqv2Stx8jdsFGuwDmTYEcav5U4gRmXzUwGNMWPBv4cxzd",
  "key28": "PVtzAdWHJkECVhzYh4arNZ2C1STmLh7k6XiVhnGRGx53NcQ7ZaRcPNSrMPvS7nxUJu2fnA5oSxRhERX1iZiHB7J",
  "key29": "5bqE5qkKxXZRPMSqLJ637mnn5A7D7o6FtyazqByPxAZGGbBns75vToxiQqPsj8fFKVJ8ghY3SVkvVc4RvfDY1KN",
  "key30": "5faqDE5r8PzWCX9jNsSVmjUXtbwkrcGPB9bpCQi4HafNe2ZtWK6LXRtt73Bc8sJu2giaSKEFRQ7xuEjanh4ri6jB",
  "key31": "3MaJU8KCSjA87A7dyifk8VfYfc7SJoeGZosPgZUtZHWU5fJiJj5SHbx5hYc6n9bEdcQqgB1YDj1CgT8o1VxjtuwS",
  "key32": "4xkj2V2D6Qx6yAiRkGA2kZALxueXoBjwDSWLLcUGUzm3jQ4CvqicdAckbwk7UWKpvmyh1EzRx4aDHCDDUQr1iZgv",
  "key33": "3LNJpjNcKU6X8F8zFfvQALg8aXVsqUSQApoNAsVUG5bqtr57RNaBLu2fgFQRFykXFZfs7YyRohwVqKAvcWnneVoL",
  "key34": "yHaGdvySBjJBeqSu4QxhwhRfwbFRqkJUqEhu7W5fisoErcyxtuBAUzYGNRtvhFArDQxHgyDYdoJtRpcHrgM71kT",
  "key35": "21kKw8W9C6DUFDx2S7uqbgoTy7cV6xPBFVDy7EttM75ueGFoTc7wDu2b2ELXHXWsZFboLCn2f9ABZLnxnFqaw7rz",
  "key36": "2WrmYKw89xGVzXnTnJgCRgQ8rGdsgqH7USHyZcH2bB6dDiXjCYXbUi4Bhor2krxXRosWVnZV2cpLjiEzBTseg8ub",
  "key37": "2pyE53ZSCRHEH5YzLUut8paoJZxcVUihpm9UaNgNwHzTSvBgjG5jGmdTZRUtL6Zq48UTWg7gS8FmsPsrwdCnkxoh",
  "key38": "5kBgTSXrgMPP36m2P6BhVGTL3KQGyyqMsUJKzRQZYyKe1FTDGYi7RJtjCnMsi9uUEHWmfBKPxkd4JX4AyFy9LWwj"
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
