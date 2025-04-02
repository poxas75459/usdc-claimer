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
    "3jAupE4y55bhb4bKm4AZZvUWdN28vsw4eojmY68DzbcMK4xpWAd75JRR55aZJoP19z9xujRxMeamWkKmGbGirMjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EsucQAo8uJv5YJmvpLoMa3wiGYTmK5ajaGAj64BXJKsPskCBupY37CKrsEXugqrN99J3BDV2Mj3F3gfYRYR2VeT",
  "key1": "3cF6ouL6CvVd9ccnQYhoX5MvGHYCUsfnFagdFF9Ao2DMnqdrVAA3K8dEYQ7tn9UU7Syy7DgciLafoxHHt9G5q29Y",
  "key2": "3X9bC99fgNcxC7ZxuZGY52FKm471RiQHy7ZmMkV7mdmAK2dJg46pqnUaJ1vdPmGCm4BKMTt5K3AFMMCrBDvFXHMF",
  "key3": "YjKjpwfuWNSN3VoLbtTdP7TngaDmdxK9Je2ErvgQgfPiDkBLWvoPW1Z4WJ5QXUmiLHqDX8kUWh6jXZWs4D7dtCy",
  "key4": "5EfSRcxzuTTShZPUxymEYxucttwmYAFRizxsav3RH5Q5AQCFdJttQsFCrqNLyKd8AbVEgaEe4gs34KRvcpxztVBi",
  "key5": "JpAJ83bWTSMjf1RHj9tScjy65GQ66xhCFaHP9zU1KYbRri7NHmDsobEQ91kJSX66TmjhGGDqWvATPS349T3h3S7",
  "key6": "3sPwLxCVY7ZUpwc5tvzhP6EBkYFoA1z1cUN8LfhcC41iQhcQXzPRLrjsx1BM8EMcMzxwPzuC5rX6SgU4K9gC8EJa",
  "key7": "4ByRziH4uvXB8vX5sDSDbStvKFu9NJZgP7goC8c9ozra72HTtGEbF6i2ACtkvWusVRdscrCZDwP8tjhT22m6rStE",
  "key8": "4ZVZN8744AYURNaSFBkkgUCQbEFfEHpQ5AMnQHhNX83oDqe6uGwuv5YZYMi4eZaySPmmZS4rUVvHVxUho1JzYEiK",
  "key9": "3w6zaj1UjLgmSgSywGbnD19WVaFJ1x88if5gD24wWp3Wr6gJdm5LQxEBQP2sqkkkg7mthHdk4tBEFjHWJTWS4eCX",
  "key10": "45fj7Br9pPRDUWa8Mz6HrD6iLJCipvqanJGQ2xhhiF6WYr2kEBGjmNremPcBqdYKCfRox2AyWWcgyLsny7KGkRpM",
  "key11": "2bPw9f3DwvKPj56FRcboWqNuWrD37h7nwHEiHxbvGPVMohpbveWwh1jMhaEJf88TWuM5TmdiSDQUqFztFWwzPw74",
  "key12": "3PkMUvH4n7AvGop5Rk5Lis1ViR8tR5uE3SpNP1nW13CJ4UHKzpazeFFqy2zkm6hyBgoCZVHNEJjUwsm3zM1r4TYx",
  "key13": "dqzkHxpUMQeCVgae1fxMzXyv7jUGSCGp3Z72tq151881kwSxTCtHTYqZMddnzU2DW6VtrLTxErw3MQ1Y6YAZkGL",
  "key14": "4Eya65PTnhnkyzB6z4PaAWjwwH9fzUVVWbcTNMt8E1X16cn1CbNii2waUsB72kjnpaVWX1pUSvu9k4evgKeTLRRZ",
  "key15": "ohgjMzM7ZZkEYAdCSH2oLziNiAf317XzHPpJrUw21fbcTqPAHmc2GfUsyqE6xhPqvSAMrVQGHiZLatLQAAaPpV7",
  "key16": "4YRu1vamg9GQyf71okS3JPHFH1MYbBqpRyuPGnrmpskaX8JgQmPsbTYrCpHtmzaT4WykAPCicjN351BxhrXwLpFM",
  "key17": "5fwGhqfhigfJuQ44CGWrtcQ79QjhHCPJrNYNkfNciit31cBAk8PNEJDCwtNMi6LwBZv7DRkgbwTChSzDwoyonQoa",
  "key18": "wLFt1GfQK28m65jn8EHwNAEczR1Su41XnBYzqQ3Dm5XA4ku2BFgQ7t891j1hZ5eHGAVLoTLwYYJ1QdgGpGznWKH",
  "key19": "4RNHA8xGbVXHoXeSBSGtb8Wwc1EJiNSXc1esexiVo66PiPSpVvxbAmPUGXEPAq8brh1bs6DZpnK8rxh8o5KxKHZd",
  "key20": "h3uabkadNSdkfae8ssmU5BTrnoAutnz9ZtJXPzFxiNZKKMe53yjQR1Pp9nLqgCEEBtJss6tQnRiRFyRETu3TP6f",
  "key21": "4idLq3kBrzDTdw3pR1H7QaBJBYwbk5BAjdW56F9mA1XiV7utPWprCvy5Rk17ePRSFGg9wm6ZnF9JSmD7MJEKdXVQ",
  "key22": "2SbVvBv9XL1LePcnR8eztWz6ZwnX9n5gFVnFhbXS7hdoPdybvHdXsi62EATwv7E9onHVixu5fuBkNYfJ2zSKwDKp",
  "key23": "dv5XUsEFWs4DhJiSbSt9YjDwsU7ZiGZzjb4zhja3THWXtLy54kLevv7dmXSeRCmJLxvhc5tsDQwbXoXhhhbpwdj",
  "key24": "3kSJND1dtgVT5PwnkRbPvtDGfe2PPNUUi3MMaB2iDGdkuAnLteAjBYarnQRGFcUeQbtgoyPH4SpVUwAr8h5qykto",
  "key25": "5CeHLj4yXTgn8rMtQvt17WvVQRiYA2Jhj4oMr1uFC2J2qqYeRsfnXwUHWCLt9TzxidH4n9zEgiUcq3g7GyaxJmL4",
  "key26": "2FEQdvzERN8BjgXmspKoMcN4E9Ggxj4xh8jpVW5FXJ21Kw2MiuieY4PRNEXv3jW1sTrJwFzpySDGKfg999xEc6pe",
  "key27": "3NTdHRCVTes3YbJQ8bvviYQZqyXudhyuMaAnx2hBm9uFy38AXmVgx4g8mhrvkrq67g6MppkLGHDpBa8BBhuoLcyS",
  "key28": "THPJNB7CLM7LsqJqoHWZt3pW7ADgqnZG6RFKCHBnpGtPWxjGsBf7Ng2FFEJHabJifeRQfziQg8hmfvcvB72QTEs",
  "key29": "4wqGPkCmqhhBdXRgctwM7kJvYAkbygwTSsH1m2kvuM1911Sx5omcZhogyjjnvcRyGHMKwZ46prC25DSxXiuew928",
  "key30": "3EGceLNxEpumpnR3RwZ25UGmYV71j1wC2Nu6etBsCtdY7jyZqg2xNh4SWHTWq2ciGRKKXajn7NwmWi6B791SKc5d",
  "key31": "4rfHwhSDPo6MaXQQisPVsgPfmAogVBKo9fZ79orP75cedQjqgRhkTBxjMXkhBxUK719SEkc1X6RQHi4o2KjRcqq5",
  "key32": "5VmTYy7FkmXgzjWHzXfTnht2WBhniGsGzoXBvLjp6p9tSTyCMPrSyGhLUUzFGHSJGWs5aUqSzBqJgvZBK8Vy13K2",
  "key33": "2rAXD5GD1DXCisZJSqoQPdCxxW1mU6ygmRyrCUqMBuSHNcKJYJuizf5UgD8ZjUw7gUVb7JD1Q1aDruHgx7ffoN5U",
  "key34": "5prBgrXscERVgTaE1UeDMQQLvqjurVezdR3GZJtWpAVGbsoZYKHVkGHJVdoHMZ2gDeb7eyjLmWHABqfDofE8Fe5U",
  "key35": "4gNMoFong3B3Cwn5FKxDFoBBmDhjUYUr4C6XpYKbmsa667R2qCPJVpbNZ1SzjSdLeY5HSxVruus8cNq2FqhonVk9",
  "key36": "3ZvGBZFh6p5aJXd3sEdeX5iJMMHHEJnZh31Ra9t9chxdv7FC1PZZHJzr6g3s84JfUJ7wxVepk97VzvZcg2ciZbs5",
  "key37": "3YiHcFw24tuqkAFBMXh5fUJhXUZm9dz2hQ6fkX7sHkX7nV3iN3SNrYRokpFSPUqgUL47b3mSpkx4EBMWjvkW7P6A",
  "key38": "3Mq6CJAZJL2LJ6EbSKsjaTbUdwp9YhkVBeXJKfd5Mkmj52NDzGSEJS4FCgiXcPVEccpLUTXFrrqSJ7o72qduVEhx",
  "key39": "4GdVNm93kcgH2Gc4EqCyBmcRjKL8LxV8Chf4iazP1Vt6XbPHb5kAcenwEshKYqYyFnbKKACgqBAzgPbCnhVnq7oU",
  "key40": "2kU8TJTBy7m8Lbr6KJRrSwtseG9EY8xEqQRv5iLnRqSSJMV2KT33BXuYiUusihEsaSmbr1rkz98cejftKcpZ9qai",
  "key41": "2rLsvayN5xq4WQMJMEb8ZkmWYuhQ2VDifJtYi2sDJJwDLuXyqEgD8QJgUmEsawuVbT1EyjMt1RNGdpjrBdFMcDSo",
  "key42": "4CHhWXCYUAQeBbqX82TP6JaDcJ5xi6LYCBuWCYfWAahVQRH8voiLZSEYYoUPq4T3UhckDKScna4rkVzHAK1L5h2F",
  "key43": "5SAZrqgqUVJZQcb4B8zF18eGTU7rrzGCADYuWjPWnx5ZuVXG9ZzumgWo3McuvTMafzv9Ht6XqWqkMxmdXU4AdLML",
  "key44": "EpEGUuu6HDHAXLUf1LcuaqzGNkykGmS8SybD63LswD73dezzDG6V8kgokbiE1tNEPDRs3tvFwY26SU4FRtWrAFv",
  "key45": "5oQ2W8CnFuxHf7NDrtyFNf1MuTtvqHiBdzt7eaV4NfRj5FT59LGCn2DWCGsDPbP5NzpdNLNLWsVMrUVeVnuSrvgN"
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
