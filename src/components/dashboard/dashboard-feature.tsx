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
    "4wcAcmL8GBrn8uTHhdFnjEisMCMrAop7bBNhNk5AWcFRqRdkcZFtih6fJFRSeioWcJrXpqj5ZYsX3owHZCjP9Bz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A1L37BJ58hy2U7r4tcRoYaeoDQbN6NRFsreFd7DkrRRy5jcbdFJU9bj7u3WeFTaMnRVLb3BzuvHGZmvaHnvcoBX",
  "key1": "8ApwKGENokbKSTB2r41obfcLLhQx6TzBT1NFYqEakqNwnbFrSo6vtHfCNvSGQh6CfWDaBRUMJSQ8Hc4DCTAkmTj",
  "key2": "3PNhvrXdtxojn4dgd8wBFxFk664EdAsNVZ5K7q4DQNPjs3xLVSt11EsfktZ2XSPftZgMCEip7Yf56Z2knMbSxXcP",
  "key3": "iCTURXANspk3kvhKxUrfVP6ErKNh8We4QAYXUF6GfTgciR67dDvG7cUbtdtTNQFdKJqigpxM3oYr8oTYKpTXsgP",
  "key4": "3EsirwXDt8atbgAmrsvUYzNNLJWN9oLsrBPSeTrpV9BRusK7EZWqBZ1ZZy9sHE7FuSPCcxxiHrZYcZ4BRWLHRNG9",
  "key5": "BEGxcDMsYXUgJFZtKwBv1hWRrEm8U3cZj4yemAWri98spMkfjSEvgaPJgVCbdJ2fqQej5HTpM8dphbz5BhLtA7r",
  "key6": "2jcSKT3J4nY5LD5GsaSeMaKBFSgxQKUcdCwSZxHi4PwcAMBTLkpdVni7ZBHyjSy2tULbrP2cs2FT194RZisqKrhK",
  "key7": "36bjHxo7GpSbaKWAe68gK2vJNxRkfMCaUvSvbopCLgam3eeGGfo3JjKmpGhE3AbBey836tWtMkQjNsMSh3sCiDVe",
  "key8": "vLfp4uKYEjXiupnu1dZiPczGVgaABNRYtzDADoXrUzb4By2yCvGLeZinJfTDgHvryBrcq3f3BecaJ59eDHMx5fV",
  "key9": "4fxuBvgw1bguDTQVUL5A9FrfYB27Lf9TvoBejZAqTbko1bPvFxDUykpRPHF9Lsxtc47dkPUDqJKfnB6ka5zB6U9Y",
  "key10": "7hz1FHKyT5EuxWcxf2mFjLackPHcEveKeB7vBn2PpkzdJx3gxpuxH6AgxqWvyhGvKkCseAxE81xXa6674MneJks",
  "key11": "Layzw5EHhRUPe41Rq55U7aDYW89vpjUUnVe6bNATbNodvTfpXT2ojvRmhs56oBYmC9pJ11BgBmnfUG5dE2NGRoZ",
  "key12": "2akccU54fG7kmyGePgNmi3JvEdFYe9izWpXBo1QPAtBpr1YArr2nr9K8UC1bSDfBdwYQzo4cpcfbKWtmbC6XY61s",
  "key13": "4RMrgXLHg1Tz11fZMRQmpFBWfLQVD6nHxFjQnCrCQCF8jUtUpwdGL4NYCtYAyDzubGe83myUZh8RuXNkfxFRVKdp",
  "key14": "5U4h6TBnd6BDhgFtp8D2ay2Eo3Hdb7ZA2YhGedweJji177FSVhEJw5Qfw4AmMVNsU2FFctX6MvCEtAr8hsuN5ug4",
  "key15": "B4RYLq64E9ppwfrFCYswoVGKjkQ55yCpJtpvpaJXWdJ4ajfaWVSak9mj2KLpEhHVvt6N7tk8YW7q7c4uAbmVqkb",
  "key16": "3bGpWvZBU75V5j94nXuvaN2aWRpBSKfoLjwTAWZgjWUa11h9TWFJ2miVaermCjhpnvSFA5b7vogS9Qg5vuwZ2sY9",
  "key17": "4yAch17SUdunVHw4E45Q5HazqugckwdThEWUBGawAkgQBBdHBpuSQfywtsek4qGTr37AsfMcFJrLBMAYVBm4G8Td",
  "key18": "n4ebkM1BfjySmWUjs8mGQnoF9uBVBNZKQEWo7xtGf1BR8UXQZDFRMr8JxaZi5TELGgHiydUvTbi5tVABca1nCdD",
  "key19": "3SJiX3oimH1JphcTYxcDvtsupxwWWSdpAVon4av9LyQxLbDvANjhdFVCqPHJcs2ZpkTnHi9KgCTZ5T1ojkgjTHwU",
  "key20": "X1Ge5z8aGL8UPSyTgXiKzsp4PpYx7fPSu6CojgnJsMVL8BcZRho5dwqwVZYkeQ9Zyp24FhtZEv7NTYGBvtnyznx",
  "key21": "5o43XR86szzDrusQGgDVubY9mfihuh9MK2ukmpZV1QykNh85ZPmwquPSzYGzU58H2uxMu7qQs2q7UGQuc53vQ3vq",
  "key22": "3JZWqaYLrnvRxw1cJRgFS8uehXfHnKBtZyNRCa95E5SQe8TXnaBv2n8eo3c9vtZko9GM1CNg5Y28TEhkKjkTcNon",
  "key23": "J39zyt9nwYZfX48UDoSyow5DUiJfLmNkn4MZs2LKBLhwdgjF5MyDpq9iQjufLjhS7EFA2CkSNiN8sjbx7hvwQcP",
  "key24": "4wJKw2bAgbsbWxYqKsQwKif5zkMNVG9nCP6fBxEqhz47zdoMNY3ZBuAm8i4cgBRK7B1nvCEFkc7TTLxJYWCADK52",
  "key25": "5cfuBnaEast3bRB1BU49PAhSDkgfCen1BNTAa2kbKEUk3BBjxhDJZRq478PfnADPv6tLMaDwrn6KwqrqTnXg5h1M",
  "key26": "4Ezif3qKas2Bg1okdZ6sTeoYeRuiyvPLt6nCXjqhp6Z8HJNucFqSoyaJkxaWc6Xxvo8jp3ZtMyVsr7VQWWaqFFo6",
  "key27": "4XcB2dKgTRV7zTwxuCTB7rV5CA4zbWMjNQtmCsDtsnXs92CiTYYb3Ka5HhRwWFdJx4NwfgRqYQpzFtsNFZbYikZu",
  "key28": "43PxGW6tGgCekYvGz8iPMG9qF4LNW5BjvoQFpcrJ6tW1WTBfWjoUbNe2wTprBetv9Uv7AYbE8xuzgbuYutfi1fRV",
  "key29": "3uhavdg7YecWfwmYJStUvukzp5EB5hPC65sKd8iBEXasJQ2QRhTukgGzFtDGN3PTs5jPiGQccL7sggtMrCWc8Hd6",
  "key30": "2SnmnjfaaTLjdsMQX4pp49YefumpmW4TTZB8wYcZKd3D5FL4WeP7aLd8yNNoEby8DXA7vtKnMzBEBvrKRFTk7Z1K",
  "key31": "36hYC3X1y6hDU1NpECVUE81t4qSQ1FaYaYWRjyeNZVGAXH3ieLwCphqizJYNBXWpcLTfmKmX8qYwEFc5v4KfvubP",
  "key32": "2iKCE2AXHjzBqWJfRLfi4Ym9HxYwSTnrNdNR1srbKCTWh4aECRKkK8aDVXwYS8uPadtVjHt2t2krZyH9cs1TuuWY",
  "key33": "64snhhKb2jfrvd8vb7kMzxdXJSMS5Y3AEe9kyBWj7U2egcYPTD5ao232BhNnukdnwejkp9r5kEZrtRSRRmG3fW5j",
  "key34": "5PT2AMRqb1wjs4D3JQLg15fgZUjqgsE8VboVTHwrEvzWN1NRF3mhpzppH21hAB4Q14zWzVbRDpEaRAivrwn2qJFK",
  "key35": "Uc4Zz3YFsXn185Gc8xx4jS9efMxja2ZZs4uV3CBuBbBYBv8yPc8vyDL9MgZS5JeEqUU1t6Se2pAfu9p9HogbJYe",
  "key36": "3nbKB53AykcWwws8RTHUC6jfgjD2bCpseuAdNH3bZukAqkPx6XyaPhW8QwNxBAJLx2Lf6qyaJVgJtvuMCQ2vQZwq",
  "key37": "5vHe6chPYo95dUhUVvd2bDfS3G59rnhXd7rHwx7PX6VjeFxzvkuYEX6uUHMvn5tipvyPLrpQBr8hrNuCqn3XG9cu",
  "key38": "5eqGUyHR1BQB3ZJCf3jwNyz2W9k9Jc9acb8Go7NB3umfgEk9KcKCosdEErGG4sQckyRwXwgBzJPDVxA2nq1CRUvL",
  "key39": "4pfVfWrebPqUxuewQSt8ZHUmEFSVpwe8ChuqExmrHjVC2HABGg8gDqjSESXG4nTCqzS3FV7gY6TNaN3oizh91WqE",
  "key40": "3YoPaTNAkQEn8H4Hpn9vH1w6CUDcMzV1RiNPo7rx7AzqVnKdGCQWKh8mdhzG8fCtFAd4Ca9hRYkNBeGbXL8Q7m1",
  "key41": "2vMgTsrNNdYNWjSGD6cvHaoNULkN7VRz4moFqzcfRFxpgVfqFFM7L6cGCPrScLcin5JwimvnsaRUAhwWSKk1kwho",
  "key42": "4ZX34y1hDzqrG3iQyKnBKhpobC1cQoy2LPQZo5rRF95epE6zUZS7wXiEiADkDCEXRuDY1hrJkVt48TneUovBFjBk",
  "key43": "57FAfduKLbsEaSxzbDtUpZSK1Az9c8TH98uPEshiH3mt5YFJf8CHGVsKzBtNJerSVN9Ce8kJpPPZaHMkz3raWhUW"
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
