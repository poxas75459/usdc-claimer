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
    "3MbgNBKvvodVYTXcF4PyUjgT2UCEw8bta2KDNDwQH12dkoiQFtRSTMDkpE4nf2wD8fg8ttuwgRwcLLGY43UyEGtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ep9uKYRKQGTEhAT2Upv8SeMBhZnJAYMDPGWePP1zGPe4cXzdbJYYPRCFc7bGxKFYh86UKvjLmDcT5FiHwa9ruXd",
  "key1": "gDBpyisxeyW4WfyhmssiptK5NDXUQyRJmWWyDYM9PpNM9LULxPMuFrsNBT28t67hN7k3VXLpDv4PfiPEpYXWkvx",
  "key2": "628WgCeseQoLM7zTCbHPSmLQPwpxqoXST7YmUxV9nWiZDG7BBW8vh7R2RetWen3bJMCKgMkih2ywDU2EaeM7XAsW",
  "key3": "4M7p9qkysb2humB1x7G7DFpzQoBGoU3QPMACLWcFm9MsGWuRTg4ydPhgexh9yYJQ3bLEzjMSfvUXtGPabBfq1uXN",
  "key4": "3gNoCSA5CYNHEWd5fwNGy8HjxhFdArubjWjvxG96vrhqZpDf2Av6hLUr4h7V1L347mrfNoqLfYpC5YFBMXuBDzT3",
  "key5": "1urj6f9NLTvFNKaSJFpdQeGKs2Jy1jP6zFHW4iRp4Tpswsz9vgxoCawkuAxy4Ua7RyCAFh1SdBwmdoKVTYEcT8R",
  "key6": "5Ph4igdGojCR19yteW3siVf6EQrjuHw8Ebr5xEwzpApageAwU1ChEQQa3qQicfSsPB9tL26fATQbAe4LdAEvc1Dy",
  "key7": "3LGUpzQzt7oqTM3UE27gQ6Bx2PB3QLFA3QYdPDUMhyxhhoM1gxotbaVDRgSYqCQu2D3oL5eTop8tSRYf6cn43PyZ",
  "key8": "4xhbnE7TAg3WszepuyT1aEHYhUAdfQE2xXy1NMGVgV2b7DsBAPo4H6B8oyydfC7FGAmEuHAQjDzswtrdcGuA1cx8",
  "key9": "3wGKYJpQp2cQaQ4y7Hq3nNsR5vKPD3TNgKbCJ2aHeLwLvugmAeZbhtfF6dRK9cg4WdfDLXLpfA2PEMaULVHCye2G",
  "key10": "5URvKxQqgFkQDGJhRPahWqsG31hyubhJBMgxW1Q8SNVPY7Yt9U9Bxa9k5ohULuo5vsz6d9kw3NLX3Bsa6trXeYms",
  "key11": "J756v4L412WgYPCskEJqZ6RXUjmq3WqT2ChsQUBzdZmMTbh2NmFPnkqTsp5X722yGJmptUa7BShR6GGZi4wdgiD",
  "key12": "4BgD8RrsB4nAB47CrHkeh8cQUe1vEsWmtGZTDmxXWDDaxyVyDLv1Yjru7vRVcdPQ6YvcpMZufwjphwmw9YdLG2L7",
  "key13": "bhtu8bpvnHAXuEBapexi1MeVWvQLjQZtb6VUqi1SswpPiSgus1H4G9H7N2bCoLmjiAVAkoiYCx2b4MVXPyfPjbm",
  "key14": "48GMX2Hk84A6Rkhd88ae4ktKxL7XyiZA5uUdWgdZ23xuqxcSn5vsaEgkn7BhkuBd3f6Lup4i4457otsiNychXHQe",
  "key15": "5mmqkkHKE3TgB3j3QPAptrGH2jbDhFtXuTpRdbwgbD24vLyXjhz6k8EW7zj722U5C1zKkBoUb3gV6Wn2KmijC4xR",
  "key16": "5ZmWzGBzVDgYsFNjoE3j77XR9pamtkZHqPpFFrPWwzvpXxJY22j9eNoKPWEKk8QKhYhpRnifnxZH8kkdjNLM84iy",
  "key17": "36rf4zCtXqHkhSFmFm9L7NzjWs7gjWviVNXJqeoRjYUNFVFiJLFQcRgihcT4a5rnuWCTdNjfEJX82WyHuJQUhRGB",
  "key18": "2sAVAtwXPCLRe8ia5eQPHCNhNqHj2hgCTDys8GLs5u4fVRwoeNSPNoJhyt5niDdqT1RXpwK2dYLjyRkWQLE52eK9",
  "key19": "2N9kU1mmZkGqcp6fZMkQKj98Vsrp1W29VaskA2tweFcK3YLQKFQtmiz19qc2T7c7EhUY2nezfRdcva1fYbyniEwf",
  "key20": "2V4K9mfLxWWxCRAtMC9cgQAM6Y7xN3bNwDRdQuxTwntaRdDuE4eL5jPdM11eFQat5aH8QS2cdd5PSXSLmZDjHUGa",
  "key21": "52j1FwuvmhBpGvP3C1tPRMVxyDY2YEoqkgiRfVFHQYKXroCWRdSq8GnzxxEbRHZQKCriXYZNkMhsDiyoo89os3E9",
  "key22": "2D4NV63paqLPTWaGijp8bDnPnP3faKWpWy5BMTpGBqfmyYkjknE9TKXLKHBipcEgDQMuLJenNufFpSGjXrPiiAdX",
  "key23": "2zny1ADSUHLytQELFLife3xeAJG7QiGLq9vsWt5YRQm3MA4st99xmhvr4NrYz14jeWQ5fJ4nF4bxdN4YbwFjGqKm",
  "key24": "3YeQy4rL52prnQ5vjghh5Uq4bmqcvsd2vhK88k1B5Hcspz9RW8viiNwt1nwgsAxWi8Rb1YWDZCcHRuE8x1MRuCc",
  "key25": "4tPXJPAXisR3jZz6YcjLsuHcB38demB1qvTjUXEya7mBpbexgcfrYyvUnYQKGmHzgshRRLf3sWqq8T8QkpxfPqdB",
  "key26": "5YYSUfDKKCvXDpxEBEu2CtgLEmR6CXf2egq1rLH1XE67stZWriwVZFRShsWVFSe2papbKkhJkA6ceTA7RNbGZwve",
  "key27": "2FKta7WSXNDMwyXbEcjhTeAremCSjQ7ZFAg8jBk2sRQhXhCFb9x8dBU5yTYCKG6VonRpoSH9uaAVCA5qtZcrqSCi",
  "key28": "hn1bsi3bQ5A5TMZzvXBo8j95WZ91X37q2ieFzVvc8N7mzvxLdwYd6D6EPL8evKkbUd1rR3Yr2XjFzukzirMKQoX",
  "key29": "3UMbHPDF8qysWGMhjQjdvDEp9QovtEZjDK35KUJvCwVtSUAa8PBLkk7tbbf9ihcsz9UBWtvWnwmpmiCVbu8JwJ8v",
  "key30": "5hRzZQPrGW2AFakzsg6xJkk9YE5mPmB4WVCcaVtP661WiWmxLuKgCdFmRTetCm8Zma7LWYRTJaELZrrmK1SnfLkb",
  "key31": "4uLjoKgv5o6gG1b8rc9AsUrdA2XKhKVzJrKnY12rZkHq6PQWi3c6u945SvKSPC7hZWttUhebhB4W26g6A8SRiMaU",
  "key32": "4qzkdXY5mMjxWmRw7qADW4MmZPQ1n3GSwEHrHzrYUbPwUUNxj5AYUMS445e8vugSs58VtABZjHHa3qKWNGfAiP8d",
  "key33": "5QppQVfsnfpFYK3py1ujA3U3Nfr9iUytrqDDvxNkE6AmoWw87pccvoGYuuBMUre99LPD6vMixB1ABaxtiPwwhqkp",
  "key34": "2oRtbeivGiCoCMm3m1CBH34eybPiDB48VE8Noqbb991VmKufpy8hRVwf1t2ieAK1JcjchCZHHX1TSrgh73bYDi6x",
  "key35": "66quE47j4ZPdxCk8ma57AU1cgEHsF7W1nwVTKhaX2bd1JSyvW2mVd5Ym7XEi5ew17NkpsN6bUskKK7c9YZd2SdHo",
  "key36": "euZDeEN9zx2K4sGfzfL71u96gSFSKKn4kKjstkKKmx15dFwqC8yhNNxeXPuGxnWNRM8oDAgL3q9LRsWrNNLFncd",
  "key37": "3QViPhzmDVC8kWb5z6YnXJFWpyHZWMV1NXF3UdXf6gBWKKLvuSKmgSp1Y2T3GXmbhGFNBCAYwCLicD9BM1vkzphN",
  "key38": "5TjHHJNAcH7pjvwTHTxax1KuTVWozDUGxKf4KjnAGxXbVWJtQL5yFiBhyPkdtjdhYBoZ7WV5G47XYxYNdS7vS1jc",
  "key39": "ecBC9qG2NxktcTaY5yJWyC1n4aqLvWh1b6tBrGiPLEppRKoSvxWkVcQQret2CrQffG3FoR29jp5n18wc4vsTVCo"
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
