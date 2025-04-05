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
    "FRrP1nUCBWvMLCvWVM8AqpDb4TjLqmhypz9TvLsURckQvHYpDfvd6NAgZunpSoNT6X1hd6mQmiK9zf7BsyW5t6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UytMcCADo8nR27qrD7Ts53YcGuRbDdJqRwkv4nFtKpUGZ4RHSt4rR6847hxh4hoPhE75KE2yQrFF6vTDFcxc6Hh",
  "key1": "3HeCYzV74BdNiGH1myc5cGcN3KAKmEf2iVRRRMvGbTp5AbUaHn1X2h9fHAhRBf3CvcK9RkPE4kxvBdHQ5MR4Dk4T",
  "key2": "2kDyqok3NcLXYYquUd14xi2yaEMqnbzrH6vqHxt75S9gSStXEfLXJ24yR41nAiLQ3e73BwL9fogm4YPUWKEDyVML",
  "key3": "2tSPwKzxtvtLTDjEyhFULjvssncFK5ZyQahv336HqgMx5ybrSifGSAikeg7ttJSBN5Fg4wizqk7Z2EQ4Bz78y8eb",
  "key4": "2yQ2jdJ6PZSPvjVfAWPvUbwKMiNvJ8MWoKmeUJHpE4mjs215Z8b4EvHzLrm7bnJ5MZjzkYyFcECvMbaUccrHsMCH",
  "key5": "GMMVJMwu4RFjB5F8vjR5tj2hqCnFqomC4bDZpHk1Jbc9ZLpHgkXKXPwyng41sdmJhjxVnaMjhdZA6DMuRicmRds",
  "key6": "3pLnnJFtGYjHTYNGkxb19xrFJYBYN8wV8Wf2U37ANAPcZP7MHyRSJ8ba5FXRfna8L4vvUtTXBqnnTNNyCkaDfZvq",
  "key7": "3SMDX61XpGYLzrSfL7QsubpBt8vg179RRirEdeixK9yM7sFLBJFnDwQgMTpyYsdSpopkAaSvQBJxBidXTdRKvqHx",
  "key8": "4J6L3fTxbdLdVh8hyfrSRUi8UAjPjJ121R1P7qifAzv36EwiBCsALnXHvnTEa1EuA312dBkDzWZhJyXeQKL4jyVs",
  "key9": "673cqGCBu5Jtb1ipmpjotXQokgi3VJHdopmcsVii8hruZZPF436jFUWR9ZmkAEMp7p393MTLV4i8aFNV3WcqYguv",
  "key10": "5wnEJu1kDLV8RAaKsW69L6GF6w5xWCXWaHkdtAfMh8Uvx4kLsVg4HQNTVzDUmVTtjUdvisrx1fYe7HyGFLTWq4Bd",
  "key11": "c8e41EwpmhxUyQ42L7joycL3TXeAEtxRHBUZRDeVRBoQKhLnmGEsAwcFveCmkqZD8e8vfNSdP2RUo1QYyWVErZH",
  "key12": "5AvUhQbwA5gWPVKQr6HXMTc3fpZdHwH8tsqn3MccLSQZLK3Lfx9QCyFzcrutYNLptPKYrCBcPycnRSJNgpP795NG",
  "key13": "4vn9Q1XuffMAeXotPWddsrNk6RPFA8tCSfXSa8wDcNF7u6hojZeDhMx38Leq1iuyQy3UeSBKUNmpaERy5gmtc85h",
  "key14": "5CjpAKU2dgAHR8sCHgt5T5k39L2cqfqmJ8neZnotiNoeypxyUb57tQyTY5LmBA4tQRK2vr6RbRSndVYay85yyEGL",
  "key15": "4nRLgj9PLoJuPsMd3RzGhLdRRscKWwSXvzcAhcqzf2Hkk7YNXWs9bHrXvTB8VuRAxasqnYzB68PJSQamFNVqiueg",
  "key16": "2XWuJUpRSVZdcJYSRu7txqHhsMVxUfWoAKkvnLtCKdkDAYMWf3GG7fbpv3pYticNqf4oWDfTZS9J2WvCcYDtV2XE",
  "key17": "HACDHcjEtQTuQ9hoe8fT9boih28W5RqknCoK6rb9KR7kfwhimTwo7B4FUrtE3iXfXV5A7HbqLssfSWGQLeykgGT",
  "key18": "233tm4CLShcwjQc68yEwunazMU9EZsLBAk8oxSmkoL4mmL2JpBsd6L6FEhExJN2WCGD9i3XnveS8TW2q3zo5Xf3D",
  "key19": "3DvKjSgbkzjs6quc6fnVM44gZSQTQB96HPHyS19ZWHiyk4CpGhQwxnA8siRcRPHpChS3hUoThSAhLcDyLiGQStAZ",
  "key20": "3b3nzQcXwZdySCmLveKwPa8C37VJTYdCyKAvnxzuNujHLqqvK1Ss6wjrniZPFjSG4wc8v5k4cnDsojcwQKNir4ze",
  "key21": "UbU6FFskec4STsycsyMKjwMXVxCnc1PgTiCRWRRo4iD8yfhiWrtuKmdee15Sor4kPJhWk9QtANeeZR5geZyxzqh",
  "key22": "57yHtH6wNoC4Wc6fE91R2dZuQLzDW4ysh4p4bz7v4ac637jNtoWHdjds5aZtg8ormM2Zx1X5Ep2ZekJisD4tc5JC",
  "key23": "2y9MNhMxFvLnfDTDb43S4zdEqZB6USnk4CS9zpyMnzx48tdRvG9BT7ZPw5puSbqWDDvbQtc1WuAbqp7idamuC5Bn",
  "key24": "55r3bK8wi8vw6kwUvfMqmFKnAvAYrk5fupG56yKVBJcmQpzPJtohRNcR1egZnMGi6bV8QYzwAwjguTNcvkywSsgD",
  "key25": "4kMWncWYyHJnuQGEduDNFUXaKCrL183Nwyi3RbgzhguKoXjWwz4qbyU6bHmuY1K95tmuWofqzj8qpxUhFAK2F5DG",
  "key26": "2yyjT3mjZeBeieAoHcrNQ7hcbgFNQFeFA1kDpFpFyPMXJ4ccGNAbwMEEJx2CxbJhiQA6hbXBFzv7JHXS4kXQ7HYF",
  "key27": "3E2UG3ZUWiJs8Agmo1Fpp42vRZXGzKJNsyuZiJave32Txv8NVj5oRMtdkdFKBXPkvajv5UKsiCiV3bA5fw7X3agJ",
  "key28": "GNUV1BBwjtA23twomvRh2BJaktw8Ny1uzxWw2td5zvzkibQiM3jq5HYK7TNd9Ay7s3Q3erHdrxG4ney2xMayqkH",
  "key29": "5HLe9R15HTj4Pfh8kJGten731D9Hh1AXz2gxQ7CHxV2SyuH4YkMvTnfB8WxxhJbkmHRPqQ2nNjw3P54tfyijjEsA",
  "key30": "RJLQtjYhGYcXTtiYqbH81pko2KyNvWLMEhcgTvSHnmYESMWBtPvWirAtZfDTB4KYCm2e3CiGzo11QegCjgz2Ukr",
  "key31": "3rj2J6rqJ661WXf5uXXdFgqN35JY9rej5awfNNqrPq9MKcoPaHNsjVMi5fLvrrJt5Rq94y8W9nQZ54isCtWfK5wB",
  "key32": "3nef3Fo6iQwkebDghaL1cHrvjrs6ceeF8fGmgGCW5zMjZhwKZrnCZC4QqikRQjmHqFZ31FyrXc765Js1hofet4bE",
  "key33": "4ykZghLmYcNwrZshxLHY674QrGxYoVQ8J5zFc4Ubci56CJEJUtfrNzieXWSyjuTiRYmzqgYAhyF22V5CFtZTrKA1",
  "key34": "45Gyqwgqvb9oBqHBE5bPr8UX7HPEx9fDYZznuBvaNx93xXxXXirFPt4dG7jguDk8vYUuySEbSuk4z2Z1F8GPebqi",
  "key35": "21djqDppdJ2KRqFGUWMkCf9H7akGeTsW2M4A4oUobB3ZjD5ZZWt2NkfhedSjcAodxdwZaF35C3DixsUB8fQRbGx2",
  "key36": "25zf3a7quYFRG4FErDgG1c2JcZrqUnqTzSrr8vaNj9n8fuXZ2rJ8xTiTgjYMh4qbddYxwwoTTHweCp59KptTxPou",
  "key37": "4HTmmqXea9LG5k3VniWxzq9tKUmQPf9AWi5ahRCc6Ti13aQwRR91fAbRyEPWoPck9DeeqtZRbVPo4FxUKRVY5naE",
  "key38": "4vT1yMsEWPM3iwkNYdvASwSScKcWG7xQt5msWLLJPS3EYFBEBZd86GNxRm3j1h3HayEC6pZEqXxPBrQg2ra4jA7T",
  "key39": "3JXwr5id8DxkaNkGootniWdAfBHSoU8EJ7PBBXmrKKQza3Z9nptfgfQqG7kdwRv6mwKFWsAWW74UTSgNxfGMZptG",
  "key40": "43K8YNGdnz5LWvQjnA9C314wfnT1TqpQw3Cn1RekHjH27GWuok69HnoSQhUhTGXkEYmKigPpUeURX4D4xaaEvUC5",
  "key41": "5DTBGfEswaSmLtVXrM1mhFxhp2ddgJEqwVrJk2vnp3eMPtwXVuE8J84mKnMNDXvK8UJJ9mB4qWUFoEPx4x535P22",
  "key42": "5ToJyXvSXANy323eJsk5zt6akzF6p42J9BJ7QWi8BjCNQktuQWwBmSYD67tZXPWfzBii98ocoBwBQLW8UWjza1mM",
  "key43": "4UPsWTCW5qfrHam627wBWHkizuqdDvvh9u9VLDPLqCpw5FMq6MHAJ8TJnQsLorjFBqQV2KNDgSaAXDCRVttSooHj",
  "key44": "3qKZ2QfXj5yHuzNs1qTqcQSURLBE2zFJvkdb7RyKjKLeCjtAmWyRqM1RDKxQjZztUXShN4P1M1V6bf5gULiyEiy",
  "key45": "2K9TPYadX7YE3ku53dh2nNRKAwEr6mQENv8fRZeyfmuX9sSVrgnQcxg8aEEDUtKjPNKGMosRbARktZNEZSuJL8bn"
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
