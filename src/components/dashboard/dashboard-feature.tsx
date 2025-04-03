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
    "2HQc2PHFY8Ak2ZqP2KqwDwzZc7dCBob36NqgHm7Qywns1odxsvg9A7ULvgWWRH1PPkbUzLASsttPCBExWn5Sk2Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxfiWRxaPDWjrM6G7uckALjQsMLAhxFKaiV9oYY39QersopSzaUWbgqPMV2m2m3ctTRYNHfXjkUq2N4a6Yd5AeC",
  "key1": "4xQbZL5UGBCDtMmvePDLGbyvwePj3QfA5JUFMgYCu5A34wvqicvoYKfyy458Kv3X6zpKbLEzBE6TyLjBPY6gMk2b",
  "key2": "312GDPsLXEjfRm9Vkfer34fknsADJfQM8MvXkjycyLaHu66mVC9FUKt1CwaZNFQx1g2jaQVGfd9iTs894d16aiAg",
  "key3": "374WkzVQUymp6J2q9mbWBofGPeWTXATvWHaC1efuGfS3EkJZTkJuVxT7xmiq5iosJQRcsR81fZdmkDQgyFy8DzZs",
  "key4": "4RjZyAdQFArEqnVgkQ1Qr1Ty9k9JPRExzNu6rNkRpUx5yEzAxa1iMqp3a4RZijJpqy6E5h5Gwys8nxBRMTpkSkz3",
  "key5": "2hcgC1HpzG2QTnrgeN4jzeAGtPfGFRRKbyNmLAyxjJQDpewdSvBeQB7RsMSJX9wSRWy2VJmR4gjDrkXSgxBEYaGd",
  "key6": "3xFDSHTsiNZqABgPjCu6yB4x77uBa9BgDtiWShjeQxejSy7dfiHx2wqwuQM6UkFZSBgzDmFt1rr2jnVjiYNY31YC",
  "key7": "4adM58iQDnXyZPesjWjtZR7YiYMH5VZzDSVuwqCFcKbAgWNUbYjXS7AwW9BqcC5mwFcFbmBd5bU4erfUHDBfkHkE",
  "key8": "2QyYH6LAtVzYcHh7xqZTQnacbHaHnzmgQg2av3fniJJKPHUtMn2hAPYm7Z7bGHQVVMW4pJxF4N7VghjnaAVKryWy",
  "key9": "2u818W3Bnvjp2Qtkz5izp7RWVpBBCryV4Qj8WivU8eY3zE4T4j5tTH4jqt1p9VAGtdXV9bPLnFV3dkrPiPTSFGzH",
  "key10": "zy2StXjYh2rRDmk2ptJpAxKCWsskbM7YWRjnZ3HrFVq1BSf4G7VaL7oKohAA6Lus1CzVCxmVS7o78f42iRuteGB",
  "key11": "2TgPUNsascsCRtFCbdNEuR8voWXMs1hTACi7aPJTG2TpTKR8mR6TZ2qCTaLLfAWQ32rLpikbheVt7RyB2t5VQo4W",
  "key12": "5Vw9w3zquZogXSL4cUNVQ76jBdhazoub3x66AaqMYyHqMaiQVLo5Zynta3RuCHgJssEG7dSVJKksgsRJKPojbTRr",
  "key13": "4Whx3dzjHLfXLFQ1nPkyH5LdBKbSqXCfiwfPkixeBnwJQzFRN84Kge57fp2hJCJJhwtw7hXcjsUbQRbh7Ja2fagT",
  "key14": "3z3PMf6QvkJtuY5XXVxpaWUF8iiWVG3aWgmdiP1Em5zJbWSJ2WphSvNkixjJR9a4CgfPuag5VQ78A8qoJhnrj4KV",
  "key15": "3Cpo3YX6BkBm9Qw6V8kbbUQH2qyMDku3mrY13xdBMn7HdKtYE52YBjvvjybU68epZqihNZvW8cqDf4nqV1sSmrzu",
  "key16": "4fqYnsVnTeedqQsn1B3UXibpitd2iKTFznciGvnAk9nppJg3AixpD6ktbMmfoLr9LzD5dQvGRegVK12J6z8rDco5",
  "key17": "2tzHiPU2r5xqDz5YHMiWcaDTTTFRB9DyKL2HSUA7WFso3ZZYHHBbKXaD3WxcjhtffJTQQdaRdbczoGCem86CRMHd",
  "key18": "3y3YfycrV3uKS5LjDmRhD6wticuUVsYKNXQm36nQEEDrKKuZnSFrTC2KBt1HFiqFdUrpPBfkyi19qWGjCMP3dntY",
  "key19": "32qYpMQs7qQQTSArcZr3w4Fivqv7KzCXSgA5XxWiv6Pr2KF6B6Uaj8KuFBk9QeQnHdPbhWFfGYvHrXBfCHSTVZSp",
  "key20": "2cxnN2E6oaMm5cTirxWFhGXed7CMxh5Cp3r8JAMVTWERML7JQz8HbDt1DhYnejuXLPjRfdyPJmUEkQUmvmGvEf89",
  "key21": "63nk8trKhm5T3F6m9Nk4VFuG9uifUXY9QJZRfgfiAmKwe466D23m6VuAXUQoVXJ8Th8ag2TuuC4jvA9EpzoQJJzf",
  "key22": "2XzBbNm9vZzcdGh8CtJgs98UFcPjVAKYyQLLgxmkKozE5jBDXaw8e3vVSXGE8c4PhmWUcZBEhmfdmVsq3LtgS4n6",
  "key23": "5LwQK2wZb8BWfopSuLCXeanGASmPfUwcBHbB6D8kRLxNitQkgetLRE4rVppKMU8ZVvmq5HfhyRmDpz7xKTdYz4EV",
  "key24": "56EHvjJ9eswFAN4h94yo1Yso4qWVKkBPasRjjwDVp3jah7jRa9JR65RbfTHa9DUS5Ppio7uNBz8xEEWv4hmcjztm",
  "key25": "64wskLs46ezB7u3EdmLMw9TRrPzedfUFowsZtB9vd13vce3Xou4abEpHoR2Qr1ex8H9je8mhGqMYxuMV8xjahCXU",
  "key26": "58RUiR6SW7noTjkMo3BqMukZLDGr5KkUvM18tDg6Yq5h6q7M2Gu6K6ddbAMU3AzfgLdbsg89Y4ZKt82n4MnkuRYM",
  "key27": "4BWeDtjAmdJfHmm1JgzUcazZhQcx4tGozNXNsNuR5xvkNJrjnnHyubXiAnzwUsFjK5eqz3sQ2qLwHy4tXTq83LMW",
  "key28": "5hXudyXeXWE3zgYDrTbnttUunc4WkTHdpCgZ1hoxiXSr9yhVrs4RcL1VY3EorgRSAsgaG5pMmR82GEfpEG2WspPh",
  "key29": "5YkHUuDHs1MznPUx4SfnufWd5xYsxuSZXy489E6srkeaaPe4rGwP8HyJzPQ4GW2zoGDPZiiCgENFqo7X2rLEwMpH",
  "key30": "4skuUdzPC4McTbwn53rBCq9vxtaRZqPXVpVXzPfwhTpMioTsywoqdZvMyZAb2TzoqVCq8UCCBBxJ9HqJQ354KnCZ",
  "key31": "KGWYckJTxFUrQ7WqrY89n7ggyVNCWmza53wPYpUHVVhsfqhAHYDpLndRMWabKY1kYoYP4HA6GxhNpXSMLLpkYxD",
  "key32": "4BF4kcGZBeXNcqZpwKKB4jhgHk1jXnEcbiZChoNN4oMWoJWpwVVeAhU655TqXAg7wVV768aSbcK3SUZeVf1je2o9",
  "key33": "4Y7ePrTJTdw9naP2o2hQzYafzscA8fG7rGCotFdCUjFXAwNMf5YrPmFWY2CbYQdY8EWhHK7sVpJVpTs5dRMAP6QU",
  "key34": "5K7YRtA7av2C7gJYi6gn3mN1Ci1FMC5gfSZAVUMTVwGdqWaedqMhaFY3XSbGfVKRkJfcbYpzyEJYQUabYMkUca2H",
  "key35": "3JfDZjoJ4ovdpDZGb1nuHczitMRwm2g39vdDXciYVgfnhvFEcyLFxSYd69oSTnFzLtDjaogGYWwHoZEurpw17hcn",
  "key36": "5kyvhKM8wsf8r73HKKGoJj8DGCPZH2uRgj3sULN55XBpqasyYJ3qtVBtQL429STyUf5SnKshmbDjx4fEtvnq9n5M",
  "key37": "2AFmnKFPJNZd1wULq1hMYqB58BZsc8YGx6W7BQhrcxZswhMvw1r5rjuEyruiZMTYk7uRNgKLg55tVVZ8hGcFarVo",
  "key38": "4i92e6Kt6edcnhMSnzeLacuFJLZZpJ95UsHQsx1rGbXYmT146sxRqwvdjvjsqsECFPqywqhx4VqeaHeZ2vncwRGj",
  "key39": "53bTGQMMSrTYVBxRTVF6uZW6A9XduHXgfDM55zbuqS58HyPbEfgdWgXpgf79vtEYJtZYCjzjZBKuQrySGUSse7LX",
  "key40": "9aYmRzn1ogee9WqWd9HM48XTD6rbJMjWEAGSXHNTtXzjzfCe4Q8XGrQavHXYbpD5njP9zVM4gRetNrXz4hV81WN",
  "key41": "5qURt4fyjVhC2P96gzf9iDTFLShij1SZC74Rbsq4N4dE3MtxJxNSs7HufyxoHHtVuKjhxyasn5yZEBztsq5diQEb",
  "key42": "2wx1cyB5rpDvjeSzjndYQ3F33R5qhcfFeeKiN5FwAkx9Gk1HzZ6XspqjNFtkhCnoBhogW7Ti19n1xf1LAVeXAR24",
  "key43": "dMKnzKznfpRkUkSUoazSVRANBwnUpLXpAEZyp1YoU5xTfWt9Ym88YyjESD1YCx4QpUiavkx6j8R8HNuu6fEaHEo",
  "key44": "5pKoyqXmVLBK341tUwPG2Bp9KATR3MTx5fyZHTLKuHAWobvrNK3DSbG8PbVeRxovb7C4nKVjkNAPFrpSqNtzqGnp",
  "key45": "2Xn7JiJnUSYDZJoTxWxFc2QpNXnYwyamG6sZREU6v9z71u3vutGp8YaRDviqu4R9vmedRziJQtBPD9SeZ7uz7ovr",
  "key46": "3zmDVhdqSkiCb2wge1i5r51qSRiUDyCDBi6BZpyKpEUxVR7Lwv5km1cJZWmWi4GWKVDrRw8rHxopcDCErydtThAY",
  "key47": "26qEB24sYW8fRjtD7Wim79iR1TW9NaQQfUpvzqpmYhEZYMXxWb84xapGsUrrWzZTWWZ67c9bEN2qvZbTY8YEptr3",
  "key48": "3vzXCzAMVN54utiSswBn6GDBTJc6kG6nsLeYf38rPezUMFsyj2v3byP4t1BzfB7ff6eVf6zoPcfhcGzRwi4QhD9j",
  "key49": "3g1PhkkCbeVQzn4hZ327hdL6fA1p6dgyMsA4zKGs5g1hpVWFHHBE7nqv3ps87ut83oEUX1cW3bdz2zsXtCRmJpSp"
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
