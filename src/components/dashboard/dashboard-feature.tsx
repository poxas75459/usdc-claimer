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
    "3sPXsMdQa1EvSpBjicfovE65D8BVX9ZY6ezRNoAjbiZbsj2tuqPwYadsP153tJsTFQhGPLDktwvtnn2tFbTymwg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxcAGDSL2FD9mAzMeFSCsmnH2KhRfpR9WEFrmKk6SF5JTbHXtFW1vVJk5G33UKr4m5vXxDPQBWzVz7ukc2ZTyFb",
  "key1": "66mbkrVC4pDhEQxo974WckDucXn9oymyNY4Mi7TpuiXAJjfQJUncY6p6VPjv6eCewGkojWt3bbLEzNwXWdQ77cEg",
  "key2": "2zPz1dZsgmewQ6X4SmwXm8hVdncok1vFFp5rruZYerG1MwHpenFnHBcpxkwEakUYQVnW7VbJBjgYqTRAKzJ39diu",
  "key3": "Erq5zDtdnqTbCthMVjsojtmz9RMtp7qe3mWVwEpzoTXXeuiywJrMirZ6PvtWRwkMR5asEG8De7PfNCBfHu5sQU7",
  "key4": "5YpCPjNrPNziiyxrTQTrCuZwq2UckNFNjbSDAN8oBGt94cUcVm4snkDxK9PafjP3dKPEoo3Uipjodq4oDB9c7ixT",
  "key5": "1FAksSWNYnHRb9fAj9e9jsUXr7n9URqhtSpQqfavVf4YjnoHX5MPiUea9HSyv5tuq3H6nSNoUHNov3chanyJAVd",
  "key6": "hTCvHLHSTQcKGaLdUXuR2aNRLfJmJAmiqAyQesFJiNh7oKCNcsMj36BsP68perEbtMhtCrcwwx41dtFSSkBpHri",
  "key7": "4iBSJNMCyFPscQXuZFqMCUNNDFUSE7MKQj7TPXV5eHrcY78kzNRxKiH1FKSw1nuU85MputshoaUotNQy8gpxjdJe",
  "key8": "72c5GGMfQ9Z5tSY1vDZKFfb7RK8xCzjZRUs3EZJQJZFYpK8odPKceTkDWNPhxuNNkr48AsZ7GiXTQbch6U7j2Lx",
  "key9": "MNUf9c2YkvvsHC6MHt8cfH7yirycgJdrYYM9E3GtywjQg69RkpfoVacF8EjUE81gBLeFiWVHk44jmCzsVLUdEvJ",
  "key10": "2b5nRBAYGuFFyRSieKP8BswMYpKmtXyp1YnSVpCc9MzaeszqL83g8hN6fax7kRju83FMnaYgNTvc9ugPwepqKFGh",
  "key11": "JbfdSHdWP4SqjB7uPJpLyRpb1AdDJQBVteV7AmdNEkHTXcMLkYXWE5ZeeFnyFw2ExKiLEYANspWiW1K7RqpkbQZ",
  "key12": "3Z1Z5j8jNxCZSnKz81f9DNQ64hG4N3ZZ6i5tmhA79VYg2reU4E4NFUD5ocYHHRpBHPwuzpnaaSWu3bhB1UhWq19f",
  "key13": "5JK5aB6sDFaYNZjKs8mrj3J5ix7ZsmfcxXJbqM7iAFtdeqtFJhwYeUHqZrPAHtCPGTFiZSwPrsUnsudtLzcdNfiX",
  "key14": "21tQyBgGm9F9kzc6YFwFrZ3gsAQ5q5y74CV86NVauwwrBmDBoyJNtZ16tzV9NGmznqUALSQci92iFxtZtwyHtBaw",
  "key15": "5NC437ifmw8Sgj6FB1c9bvf9tKCcwmXuoq6oJPEM5kkrRteUJqgMiwJjaKqVbYVam1QvyLqGNCP6LduN4qQptPHN",
  "key16": "5zT8anv4KEJYCBw8xgmRmZUE6KUsgF8fmb7KBsWmi6z1LYmjTZ7K9U6AdxHWt8Kk6N8wNoJUxbe26thyRozNLat9",
  "key17": "5mF8j3tsDEEPRKGA1uaV3gt27y4kJY4AC4d66y6NHE4eAvpowqyGR31j8AY8UjWS8uvsMScKvdPdzkvJjS6mAoSU",
  "key18": "2rAA2fEaFfgANDhkQkxmA9qfQcqjZK1CWix21U5b3C6FwzzdXvGseywCpoWYTJWzPe2rrSqMpZxiQUPrkzmUQH2X",
  "key19": "5dtTRNNRm8AWNmLTx4wJz4pUmjEXSBnrYA8ju5v8P4AJgkWTbxU4DNDnKEu3FeU9g4WYpiUnmuV6tQbHSJP2qJbE",
  "key20": "266mM1k6RXR32qKs99GNWcj2P7HD74ZhfLK5E7Zd2G6SSDwjM6rewfAHwpxZioKBTH6YGCjofRe6DBCQrAsL1f5T",
  "key21": "3yLG4s68XLzZmcR5NMciDcspb7E74HBwjaed7DgHGrFzgqHXz21gUZV9Wwh6GEhZvFyhsjfuuNxWhn8cnD37FRjL",
  "key22": "4MDMNN33uYve48u1mfj1kqGWgoe82rEiWRiaB5TjD6TeDN1BPeBRWnXas6QN1L66J7onEtRVFh92cLE6upLpgHza",
  "key23": "5yLSW5oTBBdKavWMXW8K3fmfG2CxbDoaZGPLLdy1LuDFbUfM5paoV8HDM4wFXpvcbqKMVppASD9ZDfQTgYepwPSy",
  "key24": "45q7bZ1tQqmDe1trSCBY61cavfcZjfQgAayzxPgDjyKbe1MyLJr98tpQAqA9hpNW66wXiDQsv8FASQ1ZeC1VUAsn",
  "key25": "93E43BNKK811r4DJ3oLKRJQPXu1GnqZ34RNv1Hv8NPmBTthBrsVLMoe8SDUSdnFQHd2vs3CezSzmCyn1cErcoFx",
  "key26": "4wSvfoynsLdpFxSyFuUwJsveL9KUGeVFbHH693b8WuB2Sdj6ShtbS3zZpSjNYtbQ2DimohFkpNkU2S66yud9mccp",
  "key27": "4YbBNrCfxMwbqHLZ3WL3famq2DyvRcTxu8FkyiDyBU59mRft7yJASjvGHU7ZBgbSWUL6bX5j6JRgvpK15iTvG26S",
  "key28": "9isq6XY3rg9qnEee1Q1joRckMA2p7L9RZm92FxbdjogfkRfnpEQFE42eLNTu2Y5gdZ5LQ968ZYV545t9tvmjhe3",
  "key29": "3LTWXKTKMAaeAfS9DrzRhhwtkMAnEhUaxjykWyCp2GDSp4btAr3CkThvpSDxdhtB2MSweHczkjbqUZJzJtdnch97",
  "key30": "46pg2fS3pDGUSVAxagtRuCmznPaeNqABCVTPDcAuvu5E1NPXZN28sAuPAiiyHiUnL8SvF6pVgqkuJzV4saws33Ze",
  "key31": "M5Jzh8aBp7h6TEGitWFfHKaf6prXrceFZN3JTcR9JdYyVRrbMcWG8rSCj8YQxPBpwao9okU4tei91x9VzSRAaJz",
  "key32": "HcNkpovg681UWoUPLD8jpMWLxB1dYe3LvF6w8uKCYRzadjazLBgisqkJ5NNjJuvJ3a513B2xGnFbpe5o2Bawdou",
  "key33": "4RGVBXZcqTLViiWEEt8HDZmMH4UT1VhXqz1aTy3gCSVNoUECL2Nc83zNRLnuD2cmb2wppDSa5aajfoosFTNCcMh2",
  "key34": "4p9W16EbJKuYnzXo7QT6ksQHtVJQhegTsEmXRf1nBpqNpr2vgpvvVnWi5QxaveDrPrTvjGp36oJsXkuztYRnXad3",
  "key35": "34Cf9FPmZqAGw7L622sxfWUS2uPagL2ZvSTNXF1EZCz7UcoRVdRTetBDq83gs5cUZAwb3fLun7oBEhnfnkzUbcWc",
  "key36": "7wu4mAggtFkBJojiBTfmgw1MBSWZ54G12N2YpMCtqHjTqZkaTNmwvnCbcqRX11nkp67YPCRyWBoaehAKSvkWFGX"
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
