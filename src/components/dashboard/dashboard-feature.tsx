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
    "2JLi7LzpRjQkXG3iDssDv9HwwySjBr87XJc2uWhv4AeqsjbyFNeqNCaqF4uYTdVM8TVPtZzKtrGVuH9uoYJXCTsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgvsU3ENcvtEVxEuakX6vWuuoFFY1aMYsNU5gaJsVfRSrVDXGx5i8MNfjQkmv2prF8cNBjCuQftUHREe7cJzeb3",
  "key1": "3Zrvf5t7SvfawjKAWcH5ubDpUYnJdNxw5WXHGrqyFycnRHX7gohMhwrivGzFbddMhJAPrYuWCMt4bWe9KAgTbCdR",
  "key2": "3SxgdeyiVpSes5bvkC4SCAUFLRhfC3xP3tVjgffUKU7M1iXG232YP4cRhTVWY5xXd6PRpaqSJYfwWy2TWvW5JXtk",
  "key3": "2oivWjTwLoEMf8sKAKaypwJttjrT4uFsreSWBYSagSZDTbHeqE8pFCVWtb6YQK3jSbFzuksNP6LpoYZtb8qhB4jE",
  "key4": "EnAqrgVccQt485zFS6fBodTyKAmXa76VtaMjot7kJSezdRP6MspM9RJgt3BDnzkqgyHvG5MXgwmdU53nX7R5bNj",
  "key5": "4zZRoBQUFNfRGq3EmFgSirpEqu7NAgmxSwj7Jkj3cEgfabCkfvPAgiz4e7WCbHeyWDjFsX4bY22LCmcr3Q2sCQPh",
  "key6": "5jkCCQxG86yp8EeSL7FsUdXKRGi1EtwvocCgius8qV6jT6VXM8RNM1e1rKNDpiiM2MRUaffDwkQN1MwB1U4QMy4Z",
  "key7": "5spHpdp8LiGKXsfmdPqArcFqzGBGdm1gvn69ZsNXFJUriA2j3okkbdZYo74Mb18CjWYErEXK5cDeRrPR4cETCXmy",
  "key8": "5nzmB9NbHbMG4eK8aY4LHyWVyEjp73ytkgfra6U6HcxfkbBd6g1rqHuYeh5LiQmxuvzuReqaWgEqrGr5BxuB6gTH",
  "key9": "5y2GuDtZ3JAYSHfv9VT7Tyns5GFb6koGJERJC3y1DbWG12veZFguy528Q3wfrhA3GhNgVMLGBvJFg7b9NNHKU5US",
  "key10": "2KAgW5TTXWpDsSkZxArRSUXuzmUb9YJJ4rA5gcBrSNGrg5Qs3Y6cygQ3tT39rJDgN57XBWRfxjBgWyYTHPhepzpY",
  "key11": "2NZGF9P3FWryZGgCNxwFVrrhrZPyPyhgnYWKnHTjKbAjJeh9sZaB313JTFQC2UHee8dqtTBdfe3xsXE6psj85f8o",
  "key12": "3pCQcmsuZqHGQWnx8tESF2WQfCRHzTV3qBrbqoLPPyvsQor3XTscmYYhC3KkUG8wENmCLUdnciUD9edbRRBGjbcY",
  "key13": "rntpmRECq3uTaum9ySzbANE5iUBwJPvKoWiK4kqEgcGvhfa9f5miKzCmUVAUXQ72Adigxm9xUJAXPUzX76fkojZ",
  "key14": "53f8xXKVqWrNqxi6xUn9GFQYM6DW7bpAnzQwFTRejYFRz965xaFcYQCRectdgfg5QPpkHhq2PaWm36tZDV4GXa4o",
  "key15": "4uFgAde7pocAsMCbShKHgBJ4fc7UrDDnaEy3EDkompYVz8odpLfgBLhMx1jocNKpnH9z5DPMjoZYdKPxQtF4a7G8",
  "key16": "5RUuPRQ293gcmsrvixnXbzFAMPNUHiDoFo1N6zyQ6bZK54dCssQV6UKeCVnRdX27q3epyZTixJF4vGmGNUkKJB5E",
  "key17": "wexPm6xHFqDY7tvDWhFKoziZ49HG3PKpPovXFgfCURinX3iAZVkySph2rVgTAn8Bd6eAXD1bo9mdr4NUia8sU22",
  "key18": "61xbV5G77rwBtMjtZbqH8JDS5XU54N7UmCrskDpjkLmhNVQrZhnre6Gx1g1QYqxXeaxGs4UYSmF8PtUH8mzxHHH4",
  "key19": "25qX1o7q18bm33Nw9HfK2bphuWa6brEvzk2UEQvCpuLoa74G4dSF5WX75yziUB5y6NV5U92rBBXRufVWeyTNTgqo",
  "key20": "L3YDZehwXWRkBSC9WZ8j9b4qfs28JvAVzY9gdd5f8tcW5hbkXFYKXR2JZWqxVTS28gvZtQ9MLuGwxwe4Wt8kybv",
  "key21": "4nZZysgQVsfTu4bVuNzwqGWjjQBBP5WqCn5JjSKPiAwhY6N8oQkQWkwSL9t7qKCDMSq5eUdJ4jVZNpk7FWmDm5qB",
  "key22": "2T4BX5oFWUsvUW7nRtxeD9cxC4Bnmkb5bcDj7cvQgyYgp9keqhWhXPcFHLnxgNiiaGdmoysMgfAibCTnyx4gsGht",
  "key23": "Ti5SQgS1vq9QsiWq6viPrVQ3VpbCiyuKPRPYQ5GrLzGqPM4EsNg1ezErERE2Tv1Q62dYaAVkYWsieiNqsFGWGTE",
  "key24": "2GMVjuK5Sy3Bcrocew3puwa7vGmwWg95cs7d6hFW4RWnTW4m2gmDpAttuuGi62tEqBZVEX4dHE8zwb2X5j2C8GGE",
  "key25": "4oV42zvA5q8HKBKGcU7r7PZmznS7XL9Kxm1C5fM3Z9P6h3dxzjzhTSviX9oMexNiauk7Xo9CSB9oawJh2EwdiDK8",
  "key26": "5napUqkbBM4HAoFi6pxDcKyjFAzP2WieRmz8HRFUYmrwUgDVLFPpCUWGrqW3w5n4q2J5nxzX7aGiMDKWCK7Ri8P7",
  "key27": "A35ZMLbofTDFLcPhCAUTwXnDBaxwoaUodcuJP7osTAsEgh7z8EYsohn53WdobGq77qtgdxiwEs4PzmLZuRyiUUb",
  "key28": "3AyNn38xQ6nxpDdfuDdeAHDTfaUd8C1dg45gWnwnXQGkabq5Q3mmvYQa3NfF5J3C7uyDF5m5kraSVTuzJ4wsMvKR",
  "key29": "QUnxZdTMsaD3RaM7rqcvCfjJQZHJKuBgDYA6uHW5Tn9WHTbhDLN4UkU6CL1EKctg4xMmMGgwYcZurmQL4ehw9Qb",
  "key30": "4WroMmTeWLZpYYprXsXjnN74HzBAwMk27qH8tmgTMUm1rvTBf7sbaFL7wKW8n5XsRi2DRUfij2PfPL33U9bNwWfw",
  "key31": "JG1XvSnakmUxzAmhp6GcmcRxfSmq1ykg9K3EXqVb2t6B2K1YAUzkd37kdMHbqiknDZ9Dcor1f7fsJ2j9ywSNh3w",
  "key32": "2xSzC2bRg7q8DKc2TdErk3E3d1z1C6FyjjCL7mftY3t9VvymnU4gK4ttBvryRLNdCaCp2pDcJzMGWDgD28VzdeHC",
  "key33": "5D1k84nBLYi6zFizjnzK3YqGN3SBwGJpPRXP7Qf3p6fR1oiohV4Ce9BeyfxvDYBZbgRFNM7eWQRX411JGhU8VaHT",
  "key34": "4Gj8Fdx72WADr8pmpcw6NDLTF3E54NTTRAppNvuK6JRBuDK3noitMEUUrSQuiyQ7TBUhTiKVGi2FTnsDGexZeB2q",
  "key35": "5U6gvA62AdLb62KZHSsAviYgpGn5R9iQHs9q3YxoxHJGC77J1i4BoY5ciUZhihC37dUn7HtkMp3ESujmGoRE7fTL",
  "key36": "4bd8RfCeye4bugjD3pDoPS7K1u2BBjFCbQd3wqgfkygcPc6M2qxjv9RBoxf6pC1Z78dA3VaDmyjWAgvqf1ep8H9i",
  "key37": "5SAX33sEar4QpqVEGu7h6HRvkyq9VHaNbuwN26PDiqQT3XdsG5gTQ3xB4W9qdocLJX7bTW8a777HFC6uiuSCFood",
  "key38": "t9WMHCQTZJvU55beEK7cGK94Q1PHQtADUUvoiieXYPBb7dZFXj1yXHV2z8LiPAAsWDm15a5Gn9PvjFaeVWA42To",
  "key39": "52kngAYoPvKfSvgwBaJpigDAMALSx1wrkzBTbWArXFnvu9FTk11vpePCcXpNE2Q2ddyX5k7BhqB242g4QNusTbt3",
  "key40": "5zgjWSGkvCGw2SvbBtkQjNTRfJVAUTcTEJq2smgbSHEpSdL4TrRNE4sE6KR7mZDCwQm8gp9A4SqNewDXWrNDNEFR",
  "key41": "2Kg9FxCihTmUeoJSgELwmqu8jKHPAanmragAZytyNmaKvA4FbhamjNwgRkJax8CZWMmg5sgLXTGctKEUavSYvPdq",
  "key42": "4WEXT8w1uLiyTkaUKaGCyNBVavnx3edRfJSYr5oEKQdxC6aJxY5M1ftrhRTF9V9ZUh8D9Vna5UnyuCHjj8cZ4YA7",
  "key43": "4qaqdmTMG8svKBHSqFJJ9eXMHz7hEFKduvJvYNHpp8rBB6XPCP6YQaN8ZhkjNuTCcPRwEZswnPfQhYr2tDfCcPjD",
  "key44": "2QUvc2RJAoSyNP4b5u2QWYwTSQcX3AfGL1CLYoMzPFfKH8k432PD2uruPTgpAncu8QTBQ3dAn6EE1vP82ivXNHf4",
  "key45": "2BfvtPsrhy7J6A9giQagvWEE2xxRn4yzoAqyxBY5dUw8mhbkUakFpy5fActYpz4ymgUPjXKbUocYGvyoqxrE849h",
  "key46": "5Prdvh7K7XFczfaYa7UJeMrgfRSDRYZMXNfJeMEZRPozjPYztFRF8GyCuFBzzDcYf2iwkLeRpygGBRajbrMZEsMn",
  "key47": "3sCoJrfz7X6mgvtYfSSrUaFJ1zpHGargUg6QfNMHnZzrXdv3yQjug4rcAEE7iHQA5usrkAg3HVpeqgaSoBrNv4XL"
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
