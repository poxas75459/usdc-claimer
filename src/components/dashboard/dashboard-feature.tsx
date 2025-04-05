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
    "quv5TXWdVbcRUCEpRuEgobUczhRTthV5XgEG2GRZPbQKdAEbfGU3Vw1p9W6fLjmeyZs95r5Pv1QbfqCwWBhfKEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385j5igfjyqQX5WhWdXNtjcgQW8mGFd8nqWmGZuKwGQsSTNYyWAQnrRYDHiZbm5CdsMvupbczgbkSigMALZzY4E7",
  "key1": "5TeosUrDRsWYM2JqsMQsgd5rtA1Uv3jwLfbmoLCQgYYKZNCK4SpJQLwfkXSEV1ZWVnhivf4PsuhYSGLFcZ6ePzYh",
  "key2": "2C8gicEyf2ZypibVyDgXBvdYGVVXRB7DJYJrpVdtqnnX47aStNLzwdratrgkApM3poRcD3vMyL2r8WkQDtaJn6QG",
  "key3": "5oegrd4fcAwXBxRTvh3FxBgLr6KoAHvowrAnrEgMeHUwziteCv5svcX85TVL2NEpwD4bWZbvx9opHw6mutFShPVX",
  "key4": "5fck6TXoSgB18vrFVa9E3b5T92mZ8MYrWjoErBNinz6KEouhZnxef7Vf9iS2B7LKrPX99jPotmT99iMhWBwChTji",
  "key5": "49oWGnMpcEXe4vzHiTpryYzWFLh5vcRMxgTkSW35dtwd8LAmX2SxHbjmguGppjX5gQak8xDTSxLKXBEHJVwzGfUU",
  "key6": "2TkmbrVdvkSNvoG2FdoL2JohpfbP8kDpuhfGXSURLQCvV3vcbiVXL7qFVKuoPQGsyyT71MhsHUT8dVqZchk1nJZC",
  "key7": "5dQztaRifoSGJSFZ9TG2Psv9nuMWBH5EHApuwWzeSnp5SE2XvCYcxzTDbZ8oEQH7ftbtQLChpfnhmTv68vDfMNFN",
  "key8": "42c6QmtX8NBxyXPRNVYtGx3C92QsiKcvbgT7NVLdb9wE2AhBv6BhSGNDhYyQywRAer7jom2684aYyS2n6JjUoYBr",
  "key9": "4mJEmnqAweydDdF3cvwABkzBUzpP1XBpgZcjJNDz8JVqJfnBi3rb2ZiY3WFz5QdYZ5AtYPkqwW5UpFNsDLFiZiu",
  "key10": "5JLWn2vRS1hLz1ocCg15XYN6RoexZdSfXZKn7aP1XmNGunRkLr82b3nHavYses4ng5wEZMTqT8B4qn5MTbXN3hzS",
  "key11": "2wPFA7vyyH5mrmK5uNbX2VaPraNoQx4jJcDB9TYbfTnKt5aRBHxrA9MZrK5TcJtymqcTPFF67p7Kjighq6D6Vz1T",
  "key12": "2E9JZTNpegucKPDaYa2MrYxm4dNVmQajFsZWYD9XykSM98RT5zDkbCoyHbhCirCjVGUiuwJYcz1A7ojRMLcspMGs",
  "key13": "2obk9gcaVeRjZeP5UQgvHxcDg4q3UjekbV1d3GPNC5cZ6CxThQ3eVPLtXbVMVmYvztVZzHoixAbTsYzYvm4jXmBd",
  "key14": "5cNLvhCW6rmE2sScnt1SYpBqEDewm22ixxskLQToqatDMdziqv8QrPAGirZNaV8PDTopfqNR7Bv9d32fPjseECm5",
  "key15": "4DJkDBk4XEMf9hoq2GFd31eRLZWzPEA5zpLew1iU2o2KychC4Fu4yYifCMAwKAB9oqTwDd2cc1AE6z9R3VSCJ9Xp",
  "key16": "2cfPsdiVLrbP8izRz7CzPXEtDJyskb1Y66uKRpEojkTpR4sgTs2FCBJjrBfsntRHXznu5tanhgEnr2ubbpdDn8xK",
  "key17": "2McCPicfXCeaeb78xVqUYxY4XznhXrBrgkCJ1jDv7GxUpiSbPPdqaT2BXm6T3oGcC8HxqgWa3jwji9uDyHMk2hcS",
  "key18": "btLhFP79hhSYx5GFwKRTHJxUMQjYCgitjcjxYkoG7hwbfsywdfGW1fUJTPNg7z18F7DpifS1vXYqrcceiT3yeR9",
  "key19": "3YgFkV9GySrbNgn5Rfzkh3Jn8ywph9zia5pxENohQHdafzRKuanwmScB7deWdTWmrUfvFcQ2na4cg2PRC2iVfJqg",
  "key20": "3X4vhu6uW4UvyiXDJxSsebTBjrb1DcYPsXptXTUyHdKF48aFZVx5nUtn6cWN3X7R1GiFoEdmgqx923sgCcGbeswv",
  "key21": "2SWdN8bUfrHFaG9QG6bkxe1cSmwVQ2FtyCh1nG8A12J3kitm4FimReRNWEKpCb9KXWn17YHWa2zntNL7wCnDHK4W",
  "key22": "4wh998vWPf1hudF6XTKGjeiRGRdDY6csfN8HN7mQ4Pbcd2g3rSdWr5kge8qNmLsPAfxKCyzFGYLEXA6hNSEeaPW2",
  "key23": "5HtZCiF3gb2DGzBfvja1t4bHSCxkXjSP8b8wCz31dRGUyGjSnvMjE9pBXiD6BmNBsCWvJRiR3Q33WsBLcP2Xb6PB",
  "key24": "2Y3RaYsFjTFSPYgw6XKt4DMz1cDRkPGj5v7hMnfMd1SzygHAAJ4WyUWtepNJq4XV7vkSKRE7z6qFrSgQMsNrCKx6",
  "key25": "5Sie7p3haSHpRN6ftbPZt4FpHUbv8jn7wtvVZEGah8iR2pDSaqw8eEhAo7kLpLB35t2yd6Cv2WARW7AyqJZfTmfS",
  "key26": "3nvrv3DNkkXpiwXaF4WU22gSPV5ARiX8THXFThft1rcnyXM4dYy73MsyDCptFu38PbRVesnoLygWY61XjQ6ZKQuH",
  "key27": "54DzJqb14X5pkRYbHcizRbbiombv23u8wHWiGkMhphe8rDETZme5JsgZvoPFhCv4ni7WQ5ZzXmonGDBPnZA2Dko2",
  "key28": "2GdwMSTBojcd2agVMgJ5PzLJa8yUw7tzLk2YHaAnK8aqitnDRXksod79WUqQBM8ra4qVKSSqGKcEqDBsD43v96BZ",
  "key29": "3cF9oVT7znzfFdMjNX9puHPsdTnhWaSCQGE5agf4nNf8NunLxU5BmCXYh8e6Wbb3msL4ecbRgtgfEQZu1F69y1se",
  "key30": "36kJLdEYTXsfBAFG4jtG8Wj3CttMLWZUpSwpAdnmYPjCFaorhddgUNbwLBPETxD6ii5F2TXiafZ9W3ab6JRh5F4D",
  "key31": "3k6JbDY6QitCVkxYiJzDoKCtQupzSkxs3xqe3ytef3idAkHgBjFk4AdgT9BikoB8HZdedEJpTuEF5T3a7GyCRGgn",
  "key32": "5izJVZweBbEqTdkYshhED4zCLrho35U9THU9Cmpv3kgPvs6pETE9EcxLP3Y3zmcjQyJoRnhLZF8hzQHs1xi1oGAp",
  "key33": "x8ig96kcCaidEjVVLvYkf4Z4g8pQFrTv9nhQbqZmDoqepuTMoY2LSDM61b7eF2ee192VEuSgqUuCmEtMb7kqSYP",
  "key34": "2Z9BFox7srXCcL1i1PFEo54e2G3m2WLZT449PhuYmgZtdsZqMamHLfmvgUQeJXbcG2NAq42YJ3GVgmCWwaMo1e8t",
  "key35": "2rkUEj6VcYbX3GAP9N8Dno6ugLT3CD2fWd9kqcMjxgxtc6cUGUyS52dnzbfNdnBnY6qp7NVhx88eX8VmML1XSEru",
  "key36": "GdirJzwEBNu1rKjY4Xfpay3RySVc7szktc7AWuy8VM8SRxRvVAmktYme4E2TfpTHaJaNnq7dMqgpLC7rCCGjhgE",
  "key37": "39GVvGiuLbuEZcm2vfTTMCtMJtRYBQsnbT9tqgAQ25LKHXM2NRr4ZfvfACWBTp47yMc4VfnhsDg2JdycyshW4iCH",
  "key38": "2XQGy8kmAaNyUcb9H7KgCbS72LD25XsRWPk2UoaMzUsFgdDdpqpFTLFr85FVbvZ2TJ1tqXRM6L5iAxuHdPaTFbVS",
  "key39": "fZeGAdZ2BTzV1DyAqrL9qKcoQNf9zpY4cCUWyygt5vu77Mi9fK7TSFbyAqeGWjhSsHM6NefyXs6B2y8C4rTHYju",
  "key40": "3R62ySez7yod6qX9TN9qZ2mdhDhP2EPSfJsGdyZeMUEd134PpuPuv9C9uNaiDzjYNq2PpNXH4iZyfWhU22J7Kj65",
  "key41": "g9KiPiQCdLg5EZCLajpRu4Bnp7TsRgkg8sFR5YugxDa5cXUXPqjw8eok71EbxgBJMe66fyiRdS48RJfh2ngdXgV",
  "key42": "4yQsTpmKaUQoPNj22rne3miLzqGwuoDyvo4KXeDghFSQGaLifGxtixhoKwJPsAKcLWaBFRLPCob7c5v3YCeGNWXH",
  "key43": "4XhmZKm7vjQBe1LJPSyqZQYnvh5W6ZXghxnRDUwjdRf5FXAYFQc7Lqr8SZQMdE2bvYKkNKFDq9oPJ9gQbeZwXoGX",
  "key44": "2jXV7x569WtFtee3dfPr7iWZVRhMXLrffNvmxWyQSQjzh4g1KXRMD5dCLSMApXsRQLD4RG3ZBKwsJbu7pk5rHcae",
  "key45": "5D7G2uubZ8E7BG76JdjykNwnZPhZ6DuQbfR9VStLFQJniNsXc5iqfma3qf4fYwEbKQuTURpjcKKu3MjJ6b7L8LHS",
  "key46": "2QPrEmgsh66vX7h5L31Jsm5JAMHGAqutCEBqRdM8kKbA9QHBDJNVnrPTm9oRAmfsGmdwNytxKLuhmU34ZU7QnBYn",
  "key47": "2fRJp5msvcXDpfmL8zuwhJxqfPnhwhEj7gV5LMjZDVHCUxjXhMaPDPtyUcQWpTAdqCT2ozrVuT1cpA6DKeYzBjR",
  "key48": "5RcJP4ohtkD7Ge46qLcGYzRRbN8Cs7f7JZT9ykkXV2G5c73niqnQePLAWrpdxypM1tJfdNNacZiYmQ4j6A2y22Rj",
  "key49": "5m1cdJjdAqPFC65dN3kFfmokupj5TPtbh5JCeAyUfE693NGSEJwcqnjRyBL7uQvzwJMEFMQ9xpXpfd7VDFG9zZVH"
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
