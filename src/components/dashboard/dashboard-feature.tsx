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
    "2JJ2cAMa1Bqjzk83v4K7ASkWA4mMQvevMv9dUC1Fh6SKfrsnyDXDDSqwGZCiGBuPGakP6Z3xuvfYDdYT5C1Tz6rV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dYhjcRWSmUrA3wTvmUAHydDKN5UquxQHKGe5cvgEgw6Xz41qPd2L7EL6XC7wNV3bSAWnK34rhABUbSrrYVHDSHp",
  "key1": "2CGeQGM9CCfoX2NCUatfL4VzegST3goxcHcJj9jZazrLJem54g1kqAo5vVDWq3677mfGGsRPSgX4XpStett5SyiB",
  "key2": "5ixX93JnDQoVvKi14KQwvN6quPVSEx7HDQkpKafS8ZWVZmtfFj939gysJV9vy1g7ThosthvuB78PqG6NqgkSao4A",
  "key3": "4ANG3Ku1on7zdmbuPLfSWf5f8he9dzbMbf6Nu2mmk2ZTh9CFa2VtZButkvo4mz2SZLX4nF7dbPw99qoRZoG9iEET",
  "key4": "2122Tzochf51GZhDhHRCLJA5ZoWYBK6pnL5ifntUf8gKXqd6LTY25bMuEhu7tGFEYYvHTrLDxqDxcLs9w2CMx5BT",
  "key5": "3KLYPvZSg51jgueyuANCpoqVyPgNwtouLaPfNU4p5HfCoXQnGSnRxeVA5ip274vTjpafzeJrXKwyAPaqQP7SCpah",
  "key6": "2Bqad3NdfBmqNusw6U8BEP66am1xBuee7b8fSXGYDSaWWnohFjT51cayotBdmGK79eHwvfTa35iing9md8xZ9WuQ",
  "key7": "27PckRSPHT3aJiD2A7ZpBKG2fbjBCdsTWy5jGtyHYNKQSdhGCp6QeTTuFo3aDqF5wEUU4TYKCKgCnN3WW49pDkvh",
  "key8": "3fEk2knareuUNNC1BcH1K7C2m9Bmmzg3S8jajrUkBDUShhpoCPp76byJsvFJ1vSfDFZC4YuF3EKDngQBnv6FiuXQ",
  "key9": "4DcEFBRsHxXLmYkDEYptWzPZ1yKjQMSHBJYn1C2KvG1wHDcM1NmkDAuWpTLqPirh3GKK9gd4rZCdd7RBYa6LFLhU",
  "key10": "4MTiZhkeCgEzD5KvMBVGAxSC7G1gGhm1g3kHBdHfQQ9xY4KqBYjo1aGnvwaZfRYrabNLCJSDFsjigK5jmRGMNyuJ",
  "key11": "4PqxGx2fo5vsfKV4bxGPToSVVP774f9hZyZNfqzeaQj1TxJgH3vcms3EQVeLABibNvJ3UHPzFZW2BHk2PLCugwhF",
  "key12": "hDHauUpWAETYtTHMMvi8X6sJmF2wAg9hAsMGv8exKXMn1HzPWDS9KaiVZuKngkyHz4nDm3GbbtFPNbJsFKhNvnD",
  "key13": "2SdsoRhC1Ek1szy44tXAsvLdBvwk8WRAj71775ArNMFZCmmD7QqCpGbU6GGaQXNtuJAutuYattmoJg1gQpnGPpeZ",
  "key14": "63Kni8oL1aV6VSKrHCTS8mDuJAA5dvhY32rnhyVux9vD7gLLsP4nqkZN1U3jqjnRcuMxp3hE1NunXXvuJrJ4WaeX",
  "key15": "59mKs498GaUBrChaibin9wBHMX1mBjeq7BBFZ67fn39pP3aboD9BXU6cPZrWYNJ9ADC5xSJsJTEN4VgQH61aRcqb",
  "key16": "2t1orNC9TPE3WUZrNEZm9Q78V3skkycKoW3ZZgU7kp2iT2ARHUfmodEbP9VBnhwcc96AZxedYBvALNVsig57Rt6q",
  "key17": "TuJq6DuWKLAjvujsNigUjD1GLJx8skRiPGK4BaL7ChBLmAusSHHHRh9Mx4s2EjABn5HLLKMKWDgkvvkcTkjjfsp",
  "key18": "6bdkJZ8ta9w8nS9DUr5C3BxPfZv6q3RvnywMYm3ctRadBYh6VhxsAcnps1YDBq2Wk9sLLYZA6p7qed16Tv1j2mN",
  "key19": "2MR2FApfC5avSM7xRr893m4XhUAmHuePLXehMXG9TGJ3NaZfbStcsAedKAzYYM7YYB7SvzyrR2e7fQbByKPgD8m1",
  "key20": "2CqCCkerRrFqPVv3vmf6jkAdtLhDhL1ft2VEARGYZU5qhsErqDnxPzgQcVaUi1SkyWJRFTvewyf5cgPVuak3WGKb",
  "key21": "2c3HVbuJ71XUTNwC7SZvkbnNLF9owBjefF8o2mK9725jdsNgqEniqjWMHFYNCRp5tmPVmfWG88wygdJ9P1uticnQ",
  "key22": "5TGDQ9SKWxV5NAfxSfLqbpGsMYZ7vZ6Ribh3YPNznUQjU9saDy4JV17vHUoLp6eENEzjx7eigKfr4hiKUbFgvfiy",
  "key23": "59sdxXXzPCoKntf6sFFkXiyEDDuoqSopRgvFebvJEn372nGoXb35R5E1rvLKyE9HLRqfo5nuk3QAXZ75U5fhb8hY",
  "key24": "2KD2krCFPdZm8wic5c2vpaRThJeEjqpZkqRBXGWfgApt1kxZ9vcwoyanRGnzDKPk9oBS8zHDKMfDtJuEunD7sTPN",
  "key25": "66oZLKVScNqy57oqbvuEd5vPgJ835KTboXCaP7RkZcrbSmRPAFJFtUzVx5WjXqwfqHcSP6tCxWbgsQMVGMUyY2Qa",
  "key26": "31kyoW3fmZsoBN7WEoGNj6SsnkFrixoBTw4SYLMsLHE6YjAKrXbF8mXmDxyowfiyWRUi2qRi5Rjmqom5ma9ew1s9",
  "key27": "5z76FEtT85NXha84i3Sjk6Qbv8sB8fHHnz1SrNGcTE6B5WdcBDR7Uyp5B3wAVMXHhCRdYhbS7j3cFouaVLJehJcU",
  "key28": "3BMiS4HBncnbAxmNiKeaqAe6XQ8hZCmRz5qxp1b7rYdnSMB9ToPKwdXSXJNqcDRfqZpS8NFoMY7XLhBmWaDfbezv",
  "key29": "4U2bgLniLNgxreeZCSz5dY7M9mFUs4ePoNd6BUgGovffZfE4TogmvKusq4VsYkj2g2qhhhV6ZX442DD9n4eAtn7g",
  "key30": "zrGavum6Jk5DZJNvPcSJ8GNA4LcAkgTU2TLeziKyHRzSPqfpvEszpTFy8oskepsbLVrWhG17zizrbPgwPYMF3b9",
  "key31": "5F7Vs1myjCjR1QzDC7tnWBhTv88yaoxnJveGiGZwyciMs3WTQQeyEhAgNmDxgvnsVBrkUVVg8EmHxZiJBpXDxCPg",
  "key32": "4Ajpa2ijct4dpMj34jAGpL2ntCjWa4aUoMVp5a9UV994j5txEyjq1xjv1kxAjrJEQT8Z3cTBb2UPtS6GVFcBfRLs",
  "key33": "4EgNPV6hJi7t5uJ9UMQSaXj1eaDPLkoaTZ8JwyxPkP6BCVDMTTC6TaknNhPmX7KmF3XeMN4BePwKsKLfp8ayHTLf",
  "key34": "5VNDqYoHHbeBPEdhvJ8AoiSyVXugBTcMwYQ5g3BrtnUUYYnA1ABqyeFM7CMa8QwvnRGa9q5UwcyLBEWoUwYN4EW8",
  "key35": "35rGu7kXSbocKTeNeScNCnfq7EYhkbTVYPQMTZfSpuAz76bSK8ZPARQWfWjvDa4uh5TnGt1ey6L9QpdwpydGMBmt",
  "key36": "HsxKaxUXihygZsiA5LaTv7JwMtKCzeecSsBdpxURf3FeRLjVdsaxHhJ1jWHEgbJjCHMG9rkVuDuBG5MZxrSNsRB",
  "key37": "2vqVSJpScRKeMEY6w7UFSpU7RFSco3Wd3a3vYPw52awsNH74pyvkZ5Yq365Nhuf99MitTHwCqLPo6XSAxLU8Qpih",
  "key38": "2nteEvRKR3fdskFe515bcmHcgAuvRj3RWu9SSjyTiFDDjwAgxRGjNPBYvBBcKmuSEmmWset7xvcrvYYk3JZZ2Gi5",
  "key39": "yDjwZowEcPMsKPfhHyAKSEn4HZcGtZWPdf8WLNjmbNY1MYXZUCGqdeTzBb2WYqagMAno2yVJk75vzMJfcuJ7pz7",
  "key40": "3SxbNfhAHvFBcsjSjJTCsgYfrvssKH9C3zdSW8EwksjqBJCwKGvrNByzJn9bogYcwcW8Bwwtph1ZJH4JbRi7151G",
  "key41": "4adQHPKP6hw5mUW5MPmCXALk4Q56uHLb6Nq3E3oEQ4gRYq8BpGJ99GckgZktWta3j1EGATqWhdM5iE8cCL72ZiHZ",
  "key42": "3vLKXnb2aXjfdFHFNKByvcvw9XpDKYkFaPDrpVe5XJMH7EqyCUyb4PNY3cm2tgsM3PempmosVmDHS6frbXKcd96i",
  "key43": "iUa4dt6KBeTHRmPbWFpLD2JaXU1iVVmZej1XpdLCg1mY9UKBT9TGfB5SdPaoSKPbosQNjkGhEpLAam695XrDZd6",
  "key44": "2vMpDWsZnUYXmB2dEgBBE3Q7gpYcyRxF9Pw3sb29W4mpAt1UZdygjcFextrY4DvuFUei6nRhCUKJMZxU4rqRV2rD"
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
