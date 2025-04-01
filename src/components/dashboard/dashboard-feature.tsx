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
    "5obNKbzSTCr39ihDXRv6QfebdVoTmZnjyeexipi1iDeEZDH3TnzUoXrFLs2g8ZUbCVHKDpkj6LaFnQQn9AsM5ooL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4GbGGfkKQWjUhuTgopjXkCYQkhLWoyG7UwKxAVKrGF1P45ZwcnEDzqsBaBMfQhvTaDgWoGhuY1kxVcXK9BBifw",
  "key1": "4XQUgZ2iQTWYFmuX766yCr8zgF3ZdpLUfCLxHzFcK5zmKqh37NdeNmPjJ4zZu9hSjZEfawb5GxTTXDJqZN4N15CQ",
  "key2": "eejzVs4yScc38UKXEkzNhvwAjNgDnhPpXSUzmRHa8dwmL5CEKir1BJ9UHFVNaEBRW8QUmsX4xTNgqSroR86Zzgz",
  "key3": "5Z9CNqtqBTJewjZ3NVCFg1noDvm5DATtxL3pjSQ18n6mxpknGH44YA8ePGqqzn9w5dvQfKadszNXnCvKt6HAeiGF",
  "key4": "5CUFWTdANsu5tm5shsYK5CaJpa5kMmvB2Tgt9fKLDV9CxYMzvRyxKQKGJt2ZxHckJT2pFYVxkVWZAwFmAdNSX8fe",
  "key5": "4ojQhM8MzZ517CvL1878uEZMcbRwNT7PXv6SvMMWb6TfwV49N9bVxfnfYqjCF5FNM1uZaRZoiRfAArPXPmiDwNms",
  "key6": "a4joPNU2GykYCtM4pybtxGT4aZEoVs8ugvjtut7upYvn2xj2t5xXhknHD3PtkNLRPNzoiaaRn61YmAoA4a5dmxx",
  "key7": "2t7ckxZdqYEGF25LSt6JDzjbXKkfRiwCqpaKruvtS5Ls6i9aojRbeB6AkeZ37vU2fZmqABqS6WKnL11BQhu7sccc",
  "key8": "4fduzYT9iTaqTQZmpag2R83vihCt1oXcVWCTuQ1PcsENU1P1fEZ5HqWXrfJjyEjiszEw2Uw7b9jbEiZjiboBMw4E",
  "key9": "479AAhxY2fa9q4dgZX3N1XsDSZT3X5VjUhiUpdfqEjD4bhmRP5qKxPuBvBix3WS2ui2s24wTE1sc6S5RCuDzRVoH",
  "key10": "3uiaLQ2N5KbTPAmcKQPT8hDuh6YSxWnyEZBzxDbpA7rB8pdL3nodVfNXaXHCe7uhz9Pi2G6xgT1TVnedsYagrYMH",
  "key11": "4sg4ydYtFDnHjQtWS49CqUBaGHtTAydPT2EKAbSpq1KJ5NiVWcPN6cZq3KubtBcKmm8jG6asokvVCfnpgwLuYUWG",
  "key12": "5Ba3A8MJLX5H4mFTxQRA1z4mJ7AP8s1YuepWgBs3gqjoQh3f55VmdsMn2BmtfzwxhNPnqUebhhvc1Yxn3ow4dKBd",
  "key13": "7xTk4mkUc8bymyJXYSP7zddRBdGHSSTr1gv6Hbq37cy21oSS5qfGz1EJim1hmxfUBRL6pVq8m5LWzJgs6wxZsQM",
  "key14": "2xmbLnH6XrSxsuUBhJQ2wamYcywMfL6WNqe6m17mwsEEiNVt4DuwRzWvwP7pu2moy8JjTFXWDVrKZzgpcw3PQZAj",
  "key15": "4pQNww1TaPmVS5sbaC8a5ox4NCcWd87J37bdUfENwzbcRu2NmpQ8pEinihHvHdfYMQFgkfFY7rakgc1XvQghZ93D",
  "key16": "bgnD72z9khDmijKpQyWjSgv4BM4pyU9KWAEYCQ7fsZrVfJXghQDwb3iQdpJVhBH5yPpEy1LVUUXEffe1ep7usKm",
  "key17": "3SweuoHTz7nCSBAdHdwy1QBTdmYQ3sp5kgyPnjuixFdV3tJiXgTFqCfYE2hXDoDMGAKMqJgz2eLUbpp9Efd3Wgb4",
  "key18": "5ufUzdaSziEZbtoq64QLtKoyBmBcjZw95aN5fQRRcDhauj9R8hV5hy85qLsKhegxrCQugCopvvFViFKhPZwxeZ5D",
  "key19": "2ZGCSfzo7DfNzGpJSKm4CwCxt1AXhFn7oFxXHzWy48T5ohUEfbAPVukL99yWDntdvL2GAZDDp1Pgf6B8GrQtaBQy",
  "key20": "3K4u2vnjV3g2WTJRRReW3C6XUh6SLVG5LbRqF7nX3yWDY7U1YqQUkLjeqq3XeWW4rkU81nzWH3ESTyof333X3cZL",
  "key21": "65Z6dgvSJNt74XbGa4KHj3mmhqEtpiQEAEzhSyKVGpdLRQEmNVga9dkG8gznmEhVBG8p8xm8n7N3uNduySESHFLp",
  "key22": "33ip17pMMXseDYgcZC5vLz5zVmv2hakPzAm8bPN8VuPGRuzdXzquoEAWkc3MfHFqTzbcvhowgVTkgfBvwafmmMFZ",
  "key23": "3m21d3wUdBUXJYRXYwF4PFZ9eeNi7B6xGm7nGxwAgXKBeJNYpUAhZzag6buBYDypsnEYWNY5gbp61B5XZ5qV55oT",
  "key24": "CjSeGqHLGhbqXvLcXwyESWWHVpLgr3u3bqrewkpN5qAVQ3GsESAUoFKRQ6G7MoweTwXk69FF5c88zWmnrcDXQ7F",
  "key25": "pNeXsusEA2N7yBpDys7ZC1ee5gHsLkfUwSUUAnyn1JjnB7nXWncz5X2sdPV46zB5tsAkomHLuvoSZyxVmEz7Va4",
  "key26": "63D2UZtbqdSFe2FhCn8TRTWnL4Vyx18pLmFnZVjkhnkhvXU3JHCLmh3njYPmdvVyUmbS1npX34iJAkdA7qRZT1rw",
  "key27": "52VviTxeB3iHkbLJ5qLkFR7ARaH8BmsjzfxmLsEBFMScPtiYgxdZHkN1yLpQ7bfr87gEgebeXoU7UAD3PmoYzBoU",
  "key28": "FJ5UWKcCzHaLXb8XHy1dnxzKRJs8EGL9ZbEzMei2ZXDsbpmUv1GeSsasSt1CjzriwSD1obXEMyfyXAnBunYwSXs",
  "key29": "2QCs8eDUfiMtNTgYKQTvxJFbM1Ab4ABvaEMVtroqjz9d7X15zu7vYVXE7NYfzyHycXLiBej9xD9paKv9YyqRiW9e",
  "key30": "4oYGrLhk3AADFqaTNMHWqQjU7kxfejYnyW37baBru3CeKrwGK8s3KDpE15uY4w6fH7GwVJg8oeogfoHPpz718pVc",
  "key31": "67VNtnf1DJXYEWy1taS7FEa8udxBcq3VLsb9ZKC694x9tCPTcWHRrppdRpWRb2KKuW5cUY4DcmjZEjo3FpMp7PrF",
  "key32": "2wD6dAUUwX37hkww5aEPA2WRN2bBbz7JMeEn8d898fEMNdgLQZEhFB7v1tB4G7Cz9SjLM8mGU8JLqh8Ge1YkeBsU",
  "key33": "4izoQSCsnBn8iYabhr4bjJ9wMdxs94vZYDkbUFxXWFy9Zbjs9Nd7nqmv3ZgTVoRNykBTpVj58CR3VTQCf5Ad2pUy",
  "key34": "5iEJkfvm6SJuB8cwuCjJg72YHMqr3QaCqQyp5jRvPiJZCwuBN9xFg5tJNY6nNzjS68SA9pHavhm1LXSC1gNmUwN4",
  "key35": "PgaotMivHofgEdAmfXGV5ZZSrosKaAVkQUaSU53L73bhQb6rNxwu3qdTA8DPnC19NjuGUXnX8jWvGQXDRpnkFVx",
  "key36": "Gy9f7mbVxUmsnAhi2R4SRqctAJbxKfj1s7R38noUCezSfusu2cQfk7wNR8cFQMt9KHRT2Lm75XX8CoekMYyLxon",
  "key37": "5bYjf5p67JJ5EchTZ7bn71jpPtvAkacwHyUDRqZWwSA7DMmvjJgVFp8tf7kq7ViwNxJYACpkhNDMiGNm8zdKreCa"
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
