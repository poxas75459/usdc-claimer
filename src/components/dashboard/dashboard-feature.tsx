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
    "2Yy1ktFYchz1ZFy2MbuKPujfRdxutgSuT45TFxgZx2dKgTRGr8FWLoGUAPwcTmNS9dp3tNewqaRUhPHv8A4FX8YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G92uHRDkKTeu96N1JCsvV68DiugbJzn1t1e4xTbsGoMFofDEwZWJnGJeQV3vCKuPkSvXgF4nFXAwUz9aNrPq3Vq",
  "key1": "3xeofX7RHUcdTciDCoBGbtv5A5sARNtNx4M89WHpWTebDJevabey6MEjt3QmzxxsbZRQNbBJ5hp3rN9YexoL1HZd",
  "key2": "4U8Fxb4yGhFAWzmaohhvJcprmRfET2nyYHFTqRZoxaPDC5rQWbsMsiL8PZsCvPW3E7Yj4wUo67ptj7xotVz8u5Af",
  "key3": "4oWqSfLLiaWyYHbHvphSGLxVVE4CaapQmWKo3Tsskdm8LnvJX6cQ7T4KgL7RaPAXVUDk8Hm2uwj4gFd68PDd7Dp1",
  "key4": "5E9BqRVbhS3n9KspKThs2xGbUKcpJTdLxuDJK7LcPFJXjDEsPUKyaBPVs8x5H5CaHqa1zoKFXRA8UE6qzkJD2vDS",
  "key5": "33igiEviFNpb5y98cNok6bdxPAWp5baoyk1gMghABuC9cK9MRY8yFp6chQoYvNycRLsuksiSimBtefX131WnT9vQ",
  "key6": "3G15sBKjMuhhckVB3HzHT2wBGNaiRcoxFKMdmGgWKLwHCbfvzM57FvBL8ySSN9KdtMZyiwaGQkKZmnJR3o9KTVUA",
  "key7": "2hqvsmB9C13UYDpALxtBKYHwWC7EypUmGignU9sjKi6EMEDyVDBSNBuUw4PFWyhue88pg2vvpoj4hF62gXfjYMu",
  "key8": "2kh21CpWSP3WDhFai2HpDbUaxWNTTqMRQUMbLKLMsEjoTL98YpYPq5TdF23rAv8nZW64rfFC9QdrrnLykbL81ic7",
  "key9": "3Ny6rYQGZqPAtXyLaeyTeAVd3W4gcZCk57rf25pBjFVeNNuykoNhTEbEzT1NATiPxXfN1WZSsePMkJFErMBMHRWX",
  "key10": "53EuE3sy7kuLmrdvLqhYRdHEnangU659hCqxeKdC48wEKs9oikmnyigRTcQHZeX5c3G2nmfT58b7RkZQxsrE997P",
  "key11": "37EgPobmQx123B54Et5Css3iKG7YWGo1w9QLqmKQBXthpzQbXqadiKtEpTgsD5ZFnaFs6HVZpRyniuSZzJ9HK2Ca",
  "key12": "5B42LHMJiBpS32WN2Dg5nvvAj5xe6m5DJg15VcBjB9wVM2u67enAohcvmRqpNC3v6FVZhXpzPAsVpeBvAxcdHhqJ",
  "key13": "3ZW69DGtieBpvYaG9pXCDUEMcQRtMbdtYtys3KahjjWRHgyWa1VfbLtqPm4TahF28qw457fHUpsMz9z5gepHU1FA",
  "key14": "3SVnurrmZNg2iH5fsuTACfcnRCzbxg5NxaYfU6uHrwQ9LWUeX33tJcoqY56P8BLWjRiHZgc8FKV8YhC28wU3JkWC",
  "key15": "27MjQ7invG7hRZR3SmH9gHDjbtRf2BsAf3BqE18SR8vXbB3Zk3SWGfkqEdBYPBus3p2j56MVrmLvQMjEuGfSVy5k",
  "key16": "5om47V67VdRMGD4eWxV55K8Thebeq7EmmRwdRw6ZzAjjRyXfrnEbsbmYFevkUxM7ec7NPCqu8JDcoMenaAtaczko",
  "key17": "5qgcddYPFnaqK27VyzkC9M7uPiY7PihgwoZSY8CwS6hf4fDZnv9ZTzPY3cDj1NQSiaX7Vgy5fAaEwg993Ew6g6Hv",
  "key18": "2q46qEjXsFn8E4oSLsQMDvpEZwmV316FwB6r9PZsp8LKJgWdFkTFFbUx8gMYJGY697HMgx3DyrcsQyRUv79fYwGz",
  "key19": "t5tKp2gz3CwRoTY8NbHyjUN6VJ39aHx7Phu2YABEcJYsQftau6wgX8j1JZnkRG8fxX8ZbuzJuUKA3VMm4F7BA3Y",
  "key20": "4xVsxW8MiBum7KkWbEAACX43URfc8kVnLzVbbB3KUgjizNM9Szf7HkbdtoWKvfDFLg265s2pKboQvfYL3b1CDiGu",
  "key21": "23dhUD7V2yodcneuBpD94adDjHPi9gdRc2PhA1BpvVeAEATw6w6zjNDG2ZHkQF7Bsq6aKGHRyHFiPN4KgRFM84GP",
  "key22": "3AYj7aJUPQU8JdGRDuu4uTQym6sFTELF1qoMoeD7EhPDmdaDKtMoNsgNm1ZtTi67rv7rBDFD9KbFniZXHLpgUcDN",
  "key23": "2thoHnHTebnLn22RkhU9Bpn6mJ5gb2KYdJDkb8GbjP7kyy9kAaDUPb3FDULx1F2BN3nterwcGtXS9W4rSXF7BNxn",
  "key24": "47zJjxgJpkUwXuD6zQEKa5U2gdLHTfhf4EKxjdyhascGhgoFaez312aidYwvyVZr6rLKW6fgQem6auNwcFjNv5Pd",
  "key25": "53BER1AAHPhCgRL326gqwG3ktimW51sziFDpQ1x1CJUrW4Dbn6FXxnPv2gkCVEAft2MeRpVQTQkJ8YmeUDK4AEeC",
  "key26": "5wfW85iHzoW8ZJaRTcGrGCwshSAtkmY1MmKRz99Gk7PGJozcvVf3UxBGNjcSumSbdtYJ5BNocWopqhsKG2SAYTJ6",
  "key27": "5FHf96AS2oHQdwm3dDZ8JBsa17CZMmcKQGTs4Hhwb3SAXj5eq5HPGgemrAPuiKFQ8ChbYjKfrn7AJJXc8XX1pT3d",
  "key28": "4PzL8YdUQ4zm4zfGH9LurHkeRvmpP5pirjr48PT2dhRoMRsChEkovkxnFqfXYn4ZvBpWmkUFPYJ5sfn22gc4iW5R",
  "key29": "4yvEfLsEYTYVq7R829CdBNyPrS5HYnt5Fqe9VdkrpL5mNruVvgwo421iNi4Mskv1HAEVBgieyZTMddeDkjZHJ2Pd",
  "key30": "5YX1LtNy9o64RaPK19ZytnfHBaK195iXpb9T85JqJ1pbRxVCT8V7CD8FE1iBpLEqonsKmGyeJ1maTxVf8nfxya1G",
  "key31": "5EigtQuF4fKY6tteZzHQVHpKtt5TBvMRfvu7DwG9srS7a5jSBNYqAwN4ZMtKJVofyn4rxe16WuRNPRMCXUAkSxVh",
  "key32": "5zHPDWGWK3n4CN8WZTW7hCEJsYfHxin5kj1iAibQhu732HsWVfXehAKQ8qtNjGqgvN3tQKhaajC3XB5b8ua8nJ5V",
  "key33": "2HQQyktL2n5EBpiratcV1WUTxN5r5DiQANfWdWq16zqf32LLjTCwfzYnsVrLqLCXkqtWexVM1yyXApvWSBW4npcS",
  "key34": "445Y9gHEhCV1qEi1L6GjestXBVVjErWyhCcayyKmq2nqTXPde8BJZCjZMVPQMPuMytFV54PbeSyWE2z71UKWuAwA",
  "key35": "63JYzoToJsCZwPnsBzMSGLoQWvxpyWRhifFuKpv8Y5udgsXUngNiSNh5tcEcvbHkBCs4fveAZSheSj9oSXdw5zSq",
  "key36": "52cbhAzsJGD6qGV7rrNhVmExFm7wu4ocDB11LNRAx3zRH4WAZ2WhTsYb2KGUBmna72Gyx9R2paocDvvvtU28CJj2",
  "key37": "3ioqsjzc3ZbKEJJvyL7Sqoyoe3RET3Jzu7Dkpt3nXyvKBSScjaQTdMa94KMxBqU8aZE81DqhCWEuZVgas9bmgTT4",
  "key38": "crn3RvNNsD4W3D1rMghfLGmKzGM4ddoXcs7aNqYhZ3NQtH3YRze2DR5sN35DfwKyWnifae33jM4gi91cpN42DMn",
  "key39": "sBjkuam9j3PCuj1YCTd9mciyf2or9txZMjNtsPEAL6jFsoLk2t84s6hwN9Fp326ZqpRu5LhgLyLaDvMnVKYRYim",
  "key40": "4aRoU5DnLKJu6kotf3ZfNYzALEeF3sGqyM1Q9gAiiVW79MwRwQLeQ7o9Xnm2xsnUp3QgU5W1k4W1z59bEjFPFwPi",
  "key41": "4GmGvtyV9Da6bphr33sTD8Z1gPgENa4xT72sVQ9oipK6vpbW5fMWweWrYF8R2PSRMcLkpKn74q6ia4AJh7eVjJGP",
  "key42": "2MYUa9QAkg4i5ap8V28hecwEA5kuqPBxBFphg35hELZL92DaHZWowcDYHy4JKyM42PwsaZ2XyJSyzqjH86Mc3628"
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
