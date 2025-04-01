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
    "WPCu6jUvsgRkxkXYhkbwSurqqZoziCSy3gvgQQ5B7bk4sbdny3YnX85w3t5QYJzD3Wu7drP2NDgWsm531iFXipc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ay7XSd4zReJ3jU6RcQEa63btSPXUeciTdi6zgC3zv4zQ2ec4kbcwWQZB5tHsuiunoTAqAuZKVgLKNgbe3p1pgwP",
  "key1": "3fwgxUkMLtveAhK7uuMQr3kKcMgZ6WMXHqN1BFL1ozt6bPidjTQXLzGxz1ciD37ratmYF5iyzKMiUd2w4KPbCi4w",
  "key2": "3iaFGpfVqw3TJofkrq4cNTBwrBpRy79Ywe8eu1uFY35Q2FhvwvqfNR7BWPCSeR5Q2rJZA6Tg6HGyPSR3VskcYDHf",
  "key3": "3vEsgtKwkpFBmj494fjN3nSCt7EuweSPhHjXuTZMW9KgVXKfg6bm5jGhjdDu7xtjbJSfYvmxAxADGjkeBZmjHitB",
  "key4": "5YnYBnXWCQAq9hyxGLY7JksqaVbisgGpHzEQcBLAeFRSw2ExUAiUD2hcXvMfvkwkdV7pJQFxEKKqC6GUHjS4fdKa",
  "key5": "2tr4wzRkV7xQQsuu31u3CWDiBSa7nh88SSeDPVBUFMxozzPCjS21Um7k2PQ88FrnsXviKLEmFDwDMJd9mwYgvDtb",
  "key6": "3kfLsTvmPNAVzdD9hAoLUUjwTHMriA2N6FBM1X8n9gDyKJZDSChCbYhHnqLZue9tXwZM92oxkbamRYCN7uYRazvv",
  "key7": "4Mq2KB4bNwgrCJAN7N747zqE8nkoHdZM4af8ohk5r4y4u8aV59LBoy1BAt8iTKhAmg6zLcWrYuTtCvaLWGcHjwX2",
  "key8": "2EKf2yoJcECqCvi6vzX4nqYXAUwrcZTAzEs1NEjfZSWxVG5hN9i174Txy5UrjAxC4T9qjzNMZJuURT4g1ZqhH8KT",
  "key9": "2Zd5tgXWvSwRLP7EuP3LAxrk3qWNgCm5Vx3Gbgud2tGWynXEk8GZ2dj5E5cztgPVvMma9XpGQkuc75X52TAhvoQb",
  "key10": "2LdBS9SdQDGmrb6Ht1rycFDit7MCJkxUunJ189BVfKaJjF51dPfCaPVE758E7FMM4QMfvoeAMUx5xMnxbKw2FrSb",
  "key11": "3W9ZqFBKYANfQA1NsgVbdoCcp7i7a132fqgKhZH6kxEiUdrmJ2Xf57QrF1BBBSYq5MJBSmkDjDHXDGEAn2VNse38",
  "key12": "uQK6D2g7W38zFu7b3my7z395acFQnVVd8aPzxY7REo1qXCLEB6iQMZ6sk6xvDxHcqsxtmQtXBAXdQr8fVrN5eAN",
  "key13": "2HQVCscWisU2FX5xZtNasCAfJLuk866Y54bhchapqt8KxKjwnpjT6uDsEiFaWwASGxtoUCzt63Dt5RnoRBDCPdzC",
  "key14": "5U4RANFaQsBn2CJ3jWpiKpisL28uUpXto6Mzt2kCWem56gVBCpyF7xCsETEC5Edi8xqgspPavCQCUATLGjQ1PKQo",
  "key15": "kkvNgPp9pP2v49WvcMixNeLck1LZdbWh41guqFZERQG6mwmUxrqtZqvcZ8DCHZdGS9vE25ANKDeHVFC4pqS8LuM",
  "key16": "5Z4xnuN5HD6pxP5ypPMZVpp7D5CmkF7gykoDt61B2Ck42uayCGwvfm3ZRcY8v8ri6q62ku8DtsaafPF1xp6ySt9p",
  "key17": "2NcfdfWkiDyJCFGRgACuSd71vnz1d9HBUHWoVJ7P1J5zmcMcbRNcCnz24yi2tokiZ24sEfoQFApuhCjCnKErFqfe",
  "key18": "2e3Z8AKki56LhFS5jTejwV7vn1D1h3jnXfGfqiPn26UY7FNZMuVq7FhQ3yUioVnJt1VMgXaT9mEWAGjzvtdfu3o6",
  "key19": "3d72DhzEdBnk6xVa2Z1YwuGhxKADZ4tG52r2AEF9xEkSNaYjhBLdpZ9UvRNFbVzs69H8X2t5HfBGU6XrmdQqDFR9",
  "key20": "4b9YpguBfUwHCTdsarpcYaGhqJYYe196cTw95ey3gqRtdqbKF4GAVWHDv9S51NsTyhF7jah2PSLNXQvB9geoGZtX",
  "key21": "vwAGaFgouqWrVqKY8bopErjvxZ6fQVf59qy9t6a7MvGKaDXLrpEgaFwMnquB75Dqhm6XCWTKS3cKrRTZLYATG6o",
  "key22": "4pw3JaxhZobej438SszSxsQ1NMzKHvyTAgyJCo3WshYUvFyz2zyephowQpYvKfSiKLAocRZVg8razvamQHMYJD3k",
  "key23": "3biPFVAvAFgMUcbw4DG7ty82NF9rntY6LHtxLoxWHesXJnCNSqLSfDiY5aY9mdm1551nMM7MaXoeNrC3FdwjZ7uk",
  "key24": "Uxa66bnhuwDtMMpyzdnZHt3PXFat5LfQdB2Nbeyy95hi5XJuSukBF7L66tiHJ1RjApFK33zz1CRQUfCMUpwfhGc",
  "key25": "43Dx4Qn2iLKLUBk2praEEvnWEWMAL1jsJNtuPowSM5exn8a8BdidnTnZ3guKSQjEgMuhmc4x8pQkkjmerD3s5Sr",
  "key26": "3bHnizPdsgsSWWTP8JJrNjn5rJ7YGYJBwS7LJz57zRKqf7vzfXuQcNcwtAtWQKEhL35e7CpyrNsTzzf7B1w2nodG",
  "key27": "3keRG6sQoohZDGCE9DfFa5QLEiDuxyA2W7DHnakh47AScYKs5gXMbUTisF7StaZsGPizqMTuRocFp4Ns8cPbseMs",
  "key28": "3iYNfSt8H9FxbFCVxuo2azKZRQc55iUuShHRuxdYPLT7RsrXVBB3X1RjpmNpNze7DA7uYXtuNYfVeEMZDpi3FzXY",
  "key29": "3xgb1KXg2gVYuvY6gCEaVTgDsgNwJUU5GjBYY89mi4fq4upWWK4fvJK7gG3MYvry5Cj2aZfzLzfguvZjQXB5ckx1",
  "key30": "2Gbmp6fsi71HojZrBCHCnUb5J6dM4HBVozZFmUja532BrTKyozw34aTNzNZPp6XEMnQMpFMDHwmjhXJiEoQ28jVt",
  "key31": "5zGC4PSp58bziZBE6QWWuoTSzCENrnKWhgH8sDWGDuVPGu4P1wsXw71GnsUGc5RwK63sXz3xUyteLcuobUYPFRms",
  "key32": "2b4v1FwWMKNYttjfGMm58Z5DbPvcZ2zxpyHDzeboMcQrufhLpmrXzJ9yzdzNQSxAPw6V6fRfQFekekx1kyuozpD7",
  "key33": "2RLVxh75x92Wd74WoA4P5HeNdqrtaTiSj7ACkdoWhuSDEVHwLsSzo2VkpmpFr2j4P5Xn3iiYk5aiPbAQoePwq3S9",
  "key34": "pYzoRmWzUF4xpSwiKYN5BYy3yPALi2PfDbA8QDivrnUoZ5QtnDf948RS2LFHcNjzYJz2qXrEhC66FnVNpUq1QjL",
  "key35": "3zPkeQ8i3Tf2nkq3V2QgRGLatU3quQZmq3Kk2cHkJt2Y1pL24LGhdQPUCw8pAzd17We3ZvELso3Ph7ErudaGDBt9",
  "key36": "41mqRe2aytn9gpqHVwaTXroJaA2o1BfWjuTVx4kuXqqHmWgLWjMs8KdW69wPwezzftZmzsKTvkfKgaGRjdjqsh1z",
  "key37": "3oaPfKXEohtxRCjX7KgHzVQgLyfCsT6a6Sa7J3cLFdUnxLGmfTX3ywGXgsKQCNG5Y6evvszsSzGWrc7sTzwSfFAb",
  "key38": "4Fpf3x1QLGbocyjVmdtJZtyzv5StmjbjJzMtmtmtutixUuNs746mPTFFEKJsy7mK5tMGpeqSX8GE8TRnseM5gHiE",
  "key39": "261uVmQCTW5q5yEDZZgnk9izdH8r9wDHhpihKUwJ1B5qcarZrweCxdYySfr1AHM5qdvUxurhQV5d72DTzfTHc1Fp",
  "key40": "eviFUdfmGSZAUc4cyiHHnkqyxaniHSF3ejU5ktWSBhhRksxoDCdzErAEyKLt7RsBFEWVcjrtpuYxYp9k3KVQfvm",
  "key41": "2CCi7u33wAwPq5QVqT1frDPsvWvGcG9BNP5FRdfZUfmGUWnXX8C4mPDsrbLC1GYt2smmT4KS29tEMuQyg89fHMhZ",
  "key42": "4GYfBhektPpghbQNrmhrMNbtS7Th7FRiZourSZSFcQMDLgXXrp8hjUntkzD2jw485YjNPXQHQqj3t7NZ6r6wN5i2",
  "key43": "4JuukVjJkfURqAjRbQRKiiprZnfoAquyUnRQPxSTVYbYGq5nLDyx2Z6BHJWYqB2dw85MkirehoWdKUmNtGJxZJ8i",
  "key44": "5BB94WSWGqkBVvgBd59Y31Bq4po5sW6MobFxiLKPkcNmNiLsqHpxeaKSVDtdHjU4hRCKM2VcqA7YTjusemaxkTsU",
  "key45": "55uYZWwTKDhjBkgEPMJw28cZ1a25924ybhgn5rzoGXYNy8EE1ZwiUsTTN4Vs5XMFcJTqUueEeb26ZCF3Z6PJaULM",
  "key46": "4CwT66v6pXdbuZnJfA3beJcibaQdijZS42mk9qBenYncamsUmJvzdxrQqy4eKXusBQJZEp8KNkvZesK7NKsR5waK",
  "key47": "3uDGvnkFNh1NJN3Q5jHA2GQ53qYgJ1S4SVsP8zfJkHNxFDV5pWW321T8AJ2xpFhyurek4VGxzChQM6B5NbiWYkSd"
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
