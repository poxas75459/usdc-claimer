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
    "5qn2nxHLBa39i9GQDquUBqtyVeAzPsPEUD3KGMhcFSJwcmZCeu42ujxoDL18wkCVqQVxDVMD76cCEJE7JXk2Adm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHLcn3vyUaND8ypyxpPNeKmqeYqL4SkcTejjNobpsuvQcgJahEkM7j2LvvKiEH8R1pmZoFMRVW1gpoG4f7uDToM",
  "key1": "5dbtUvvNR9GEm3ftVdzzSdeTP2bgYstsGwv2RsG8H4Sc8TjnBioUcECy7iZVxSE3Dv7LvMDVsVWTRXV4AJMpu9bv",
  "key2": "4B3TD8GvKXv5pjyz1e5A6niC1bjtC1YdcTVNMfuQ1caJ7QTD5jdwWkkR1kdAxqznK4h95tPinnajQvdFUieHxeBw",
  "key3": "2uJNawoxHGoXcjY7LQ3hWWbN39jVScayV59V1qSQgvcdaHNzMUmrso1xFQkqjaq1SqndCSqLykRDnD5jg62x6H5x",
  "key4": "4aUzmjLxRnW5PiNoJbvipxXtfMbRJLWeSK4GAyP2thoGrMKMqJxcWRsRSwCRGJSEMStRBqRsu6gY56DCfEgpzv8V",
  "key5": "53MdUZsASPretNSy5kaJ4jF64wDn3AwFhiQbEfcykFJzfGW9LS3UZrTNJqnjEVKrZ6kkNXu5EXaCxVHaqpd5ygzB",
  "key6": "2nyAuR27pH237JZt3N1Ccd3zuQEAaFPAPg41oynKwDvvSQdGf6tCnEwtbBE9iKuFMV19AbrHchBVwJYb3fFFuHQG",
  "key7": "Ej2owCvQ8bHMjzU9uSvzZ23Gb5Vo4pdrrMxQauYmEWjNVdoK2AZuPEzs7KrQpUqhUzCyf62puBkHRZNDAU1sktf",
  "key8": "2UbWiYiUhVFqDQQE4dVz8516rwxbQjC7B3Q8CL1We8Jeg1pTopYmLq4ATF8Bs14yNvTdiY53bvTwZc9ZJjgHdnXd",
  "key9": "4y9g79FzfgBeNtbMeMpJUsDBwFLhCaEUS7rDcrEfEfaBS3gPMvDqLFwdCk1uFvVV6An8gys32cKyRZgcUWmjDrjC",
  "key10": "2bxxgQ5YRGnbaChnvnwx6f4KzoeG9z1LK1o4LQHB2xhRTKKTcJKKpZeN2GJMTcUXshg44bVboTP2X3BBS7KyEhXx",
  "key11": "26Y2hNTPspPtzsdnsQZvcUB28ieZzoBwqPnfpie9GLSbNrxdV34kd8PYstvhJQHwAbBJeRqxevVoK7BKiM7CFEVB",
  "key12": "3GxZLARPFDjEPXF3wmyff8Bf9ChEy2TAq3Rr2wG9PQ71SArx2UnRRAwU7xSZyKBnHgp1inBfHj64FAYhCP9TXJFn",
  "key13": "2tvEfa7R4ub4XJmsYAZS8LZCF3kcfWs5xVugUuBVH1rLWfL1YWN2nmTYapdD5Love7rXpkzXaii8qT72yMk9mm4y",
  "key14": "35km98ZWndUEY1DP8nnTYrfjDwQRoBdVieLuhmcP8ZpxiuxbZm883kB42BAsnaugSde9z1p88yTPr4VE5UoS9XzQ",
  "key15": "2xmQGZprcVseJrVGrK1MFTbphaqiXdWq7j7oNVVGCkzuiyk2zte5BMbJNwkCUS2RXj7uSKfFX75gtrLQ4nhBqWEW",
  "key16": "z4VFnkqDhXLEjQF3EA8GL9eWLW72v6Rkf7wkTcZgwoMQSUC2UkbRd7JLmA8CKW5j5ymDz8vD37uPEn8A7yNaZkP",
  "key17": "3WB5bLjVFEXogFYMB8ojrMfFNuibPvYMia3V4KZnRBSjPwnd6VWxW54j5K9Jju4W1fWdof79YAEYPJQWQtF5uJtA",
  "key18": "2e8S3A11D5YVd6CBEMh9gYexDVsqsqvzNvoF2TSmw4L5rPZE8CvgGPLbb8bWKLmsw9WAzj9UpeC9xvTCFD8qKvF2",
  "key19": "3avcjxRx7hy6V5yPiBZ5mEuG6BJ5CRhr7bEvbndc7WtjNg1J1jB7XCraSoWZz9Kv8ZWVYvJPHyVEUrRcNTNgzoQV",
  "key20": "3VpRQ8HqrFP2S2LsUcAto8QZB5PMXF6HeEyqNNgH2CAk5rzBYGtaGBStj3vEjsSYpy4jJCDzSJNx6K8ReEen5CkL",
  "key21": "2a9r1PYgaFxAxSs2kE1zveZcBjsSq2RujLixYqdTwmLRdqkxUboxFZ8dR2Ki4vXGMdXtE4Fd9dwckP3rrQZthqPE",
  "key22": "2TqpBSgxmwpfSzRqm3fGipxbmJPASxhBKiautPiyQWGNgn18qXpMTiQpyP3EoeBkZUQJmkNXDFRhiMFccTr6qLqi",
  "key23": "4LsWCeNLUAkH9orWWZ6xYzToWRf3Gmgg2YdDhrqRsyXsvUpMxhajsaAiNx8QjLXmmASgwvXSEBBhjonwwjkRo9Pw",
  "key24": "3RjaBmLHN5CY6kwrZjK6ejZUq5s25i61YEVWCcEbgapteUNGtCEsdBwycHxBVGksAF99u28N75YskmrJtHZdPJCa",
  "key25": "2QYUoNCXhJj8xNJVRJtJVetLVWu6nGiKEnrkvLBZEDAH6Hk4VaSREYfBVLKv9gmB8AYq1G88JFnmGnw189QrrCHH",
  "key26": "4CrNe5ywDxfGAynN9JkXsq6kswEkL35hboC5zLdjS7QhRbEpoq5UWLEcbMgETBDTKrAibA1QoVJh596yB6P9T6KP",
  "key27": "Y7kimFHjCjAa2j4JJfqiHji6fxpBuZKHTVp13D1tXMyZSyrxs8LeniqtABM9SfVapQVqJEVVTRoBZ1G6ENZ9Gjp",
  "key28": "2mFkF3A43RJGnYsgFrW7LvNnEj3FdCq4YvB7auQJ1i47KE3d6tiam52GmL41AYE6Um8pvrtCT5tqjpRXM8qBo5cJ",
  "key29": "2TcLdJHbE86kd24cUXL3kPNwwaBmU9vupQvvNZMGscnbryjVJzsrmwUiZcp5h5o2L29KDJ8879EY5F4oqHJVwiWs",
  "key30": "4WrX2rJAgeCNWxQJX7WH7VFeArpyDo3vkbptziH5RxVsu276bENeMvxeWXq86eWx2tGkAefLfsZMdBGgrcZkBME4",
  "key31": "36gfAgRNVZvxnGMURQ1pXYeCeGNRFne5scjqCUugnoqYJGB3XJN1E9565dzCUYc3vfLQs62XqteXXN5hGBpQuBVQ",
  "key32": "4PmhM6JzXcAEg83r3NoCnug2KvepzqLbbRYaZQMyjZyUtpiUKkJipgCNxYFaDbRRYfh3xL29h77RyPNzh3S2Sygt",
  "key33": "ACAEAm8PtDfHoMYDHQu98F3Qq5pf98gWif4Ge7mikxv6XFUua3G8xuAF6wjRGob9nYkBanoLv3bsVWh333gXqTG",
  "key34": "xRyUBKKtwiu77oXPfHwmDX47s8bKuNvv1Co56rFpSDVV5rnYWdZHtWTLBTMbFwRA3HJqxGtnwSqab1jv7huySYt",
  "key35": "5igexX16z7YWsLb6MuYpK1cFEq1sEkT3XctnZTRVDMSm1KccAT31PCB8QPu4BdUJUHeL7qaqzzfRSmSu2BD21i59",
  "key36": "35963NrNAsemW4XRpy12cQ1xZsZLt9KyHRecrAVVxMPX7Sddzzy396F3xHYYXRfCSkpsmxNimLmnc6G7LJZQa55u",
  "key37": "cipduhhh8wvSfyENWCriz84zi9wdBZzphAifpMdR71iHGk9ypZqC5Lq53Ke1384w2Sk7c3Ls9gaHTktetJeiczN",
  "key38": "5T13dVB4N4obejetrCrZXmoHULEcyBskzGXu5XdXBvNEMyA4rnuKGA9iw9WqBh3qGSQDoqQEmhJcrZKk3Nsyy4v5",
  "key39": "5gUuxjPiBYLFQiosD6NhKF1hkKhsSfMUmq4nGfJDU228VVx6zrqQ4MMn9piDA7kht493nJVVK9FxryNZ9dcnHmKa",
  "key40": "2GieM9inh2BwcQB4AdcCSBzngx9a7QsRfMBUaj4tngQNcTug2RkFyUg1svvJwdrQeqijzcmRi9peyo9kEsxWqRoW",
  "key41": "5r2FAUG3nrGDfk66GJYSE1yhSYNCfP4MPJCLziioh3uQnYVe5PtMWcbZyPSuKHgqf2jdopJu9A6f8m39A9YzNmnw",
  "key42": "2JmAnTyEaeXHXg5z7X9kY2CFgCVxthqdSneBeNZcC523pGRzJndhSoks9YCkE7Sk19hHbFJ4jXRmLWSMXXBgJLAK",
  "key43": "5SwvzHG1xtjsEwHsbHqLCapscJcrMueKTjUUQ463uwMMRcYUNF52CQkqrAr7EFw993b3ahZq1PueuTLeHv4idTGD"
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
