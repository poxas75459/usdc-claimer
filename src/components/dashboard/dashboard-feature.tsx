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
    "3GBMaov9QVRPqtt3X3bt11dC7WaDNaS5vVN1D9uPLjG4CojGwiiMRqoLoo3RQatpEgWk3mqSAKLiPt9goZRfnVdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TbR7tQ7kCa1DcvoNj3BmehG4UbJZ2AvdMi1ZUCV9pLiJkUVAaSt4mDBjPs56CrLxcJi6naw2tSq2FPtvDHkuLvS",
  "key1": "4PGR51r9Z2dYTuv67RaVeehZMPsMFeThqUjjwxQ8PeM44NxJFqsZ3TzopwAQsPs1pKXkBCN5FyQxtncTwAV2rer",
  "key2": "23QboTgFxehoWYrYtEKAuMJZ7FxSykrTFp6gk4XJFsmYy5cLyr2ezwbFx4PvvxK7t82bbjCjyEy1qd4UduhhMzxQ",
  "key3": "5QqTCXxyJNWCUYwojx62L7HcEyXfpJbh8PDU6xGBo1zceXeHZoFZaeV8EY32yMCjMvFhEw2VGut8LMYM444VnNMy",
  "key4": "4vqy8U9HENqUubpf48f2GJdzGjCdVseUT99zjUjWn8pdFyxKhMbfcSDbqn6dVA3WFFoGJf57cGatQbSYFoosmtSG",
  "key5": "2z6HP3HRUrJXAiHuK4RWxUZLfZdSPbUPnDr2GX5v3KHZJEv1e4ZtytyyTmsiFqMtSvWYbmAd5JX9pXxPAK2JBy3G",
  "key6": "5EGKBQAdE6DnRU1RgcEK4CGseQ4rYSaVcN1T36GaDx8ixdqNDxMmxdbLpXQKgLh4dgakWp65TzRzT7Egwb1ZA2Pc",
  "key7": "3mCrsHTDkKq35R27kzj8A8seEXpM6zDoE3CvhAkSRm14MLDfExSC8AFpPSAKE9bH9sYwRqrJwpWenMCiGyvywZf5",
  "key8": "4Dyv6CzivcKgG8Jsk3Pqgsmt9suMFUMRzVxS3EwMU1QfXQMnHWtmRsgKfuctqRjQNXgC5Z37JfDm1etfjNkK43XF",
  "key9": "4d2vzFL5qdkkJfpEkWYMzPeEJAuEoiNiKMqhbjSgnGsj9c4DMFLHnmxqcs1yp5fR9G2zoo1K1UM4gGe8RJHnhhJF",
  "key10": "2fpC7LnmUzXE4itQbSK5nXRTSfkGMtX7yvPFLC5DCKcjoLugBCtzipPyYmrpAYdMqLWErb2B3wX2xwTqJKnJHSjj",
  "key11": "bazGv3hForXCnSqsSQgytzfaxYWC3QrmwBoFJhfQvdyMeYsZqvowMfPEMnVqqkfLr9kBJ1pkQG6nzNpgEW9sgHx",
  "key12": "3RriuQep4kSAUmfQufaG4FCQk9x8GQtiCdD3eP6e1x48xkCRdB9ReE7TsDJ6u6Qsaj1yPrxiFja4J7KAcYHpeLW9",
  "key13": "2ea7cfXztY3M1p5keXP8MzJm3BybHmKBfhVVjzDD7QXx3QuFd7YCxdzD9ZQySit3pXjn1rPBagH3jSBdaZ5dU1kv",
  "key14": "3Adk6k89izhTR1WN7zJaSKRdUGtf8q6DVPPPu5qEuwEkqoDBAtjsYPCwYFPZcYenYMkFzc57TiWhGWrtFAJ7BSQv",
  "key15": "vYLeGxfu3D6y395wacfVjyNi1kAuibYD2XM1uZ2Qp4M6CFKVsvLUWmmFD7ubMt8QLdNSQhTKQEW9Gwdzh3oCWyy",
  "key16": "54bJy1CmSmqvge1GwD8jcB6E6DHspr5jHHV6kZDL1wuL8QFQJuN7SPwN2W19vqAFrHXmwertEhq2DHwPjA24h75t",
  "key17": "WMQXBvUrmjbqmRKcqwmvkVQw5USA4wa8ci4by4MtqtqHB467pLXSrie4FE5wF19VQ6cUjZ3UjgmkDpe7ATAeZri",
  "key18": "4dNEVwne9wzuz2cc7AxZdDpaS5sFchQzKofmzpeqZ2JyJ2RbrxgtHAU7gQ4UwZmm3PbMP8XxGPbMt5LHnPizpvA2",
  "key19": "4JQHevxtqdtcc8pjkbPJcw8YknhHvcW7nK3nab2ztYXvv7aTyHi9Yk71yiEo9xJ3A3MJvBroKrt9emJMvC2ER8ay",
  "key20": "5oVK5XBRHNQseSPMSu51qbadMNY8A8iRp7iJL1KM7KdMw3pygLDaCECDQR9yeFMAPasC2KL6K7c62oGjyyhQucm9",
  "key21": "61pUuvB66x1V7hD3puGvcxNxK9sCjNoLxaWKwP3QsDL1tkngrV6ZMyKUhepdNdDFv9isKzVmMFtyFuu52xDdpyQD",
  "key22": "3GPPaZUGzjYrYndHL8RJYkvrqqYPJbfifYuG6w4vuRp7drN9NB6tRTEddSBMWXLiKiDJj8zppHRuMZneccWRtBzB",
  "key23": "3uJ6NxCkwotYRzkrUxvCBCduZrwzL8sBNkznaRbBaYyxuRp5cMujdeossUBYdm8WMjaZFoaXkzPRdLH2ZKfCY5ZC",
  "key24": "8vTRtdTGbJHmsW9AGTWc8zje7CTS5nLfKZ49u6W9Zujmauhgkzn5xPGmjcL6BxbisHsQNwSmJdtrT5seS9yXA4W",
  "key25": "62KC1MDX29qbREvYMdKWeFkrMvANJJMo7fKBNYwCPPxTGw9YEEJzKSxQfPyM1khVM6rn72KCjJcR58hPdejC1etK",
  "key26": "52Rg6tpQGfuHtTucx8dmjRVVstVsykxkFZNMHj1tamPHhpUMhjSBvvfGg3ruforE54NBCjpQ9iE4B4ffRxidzDST",
  "key27": "4TMeB6yCVxxmy3zSkHdmmJvHNxC5QzPQh2Fczj1sCBZDCLVXj2USdUz1XDBzAtoturxnp1K9SBFk4cm1U7eajcZf",
  "key28": "4u6L8TfYboksdUhx8kYuVsF35h3gFLKUqi4ctfGf9DzjhWVMQo4Y8UCXutKaeUS9117dDF7Q4KPduAkkhEcU18mg",
  "key29": "4C8aPEC1PQ6T4J473ZFsnrUF9ikkePTQd3serwPxjRpgGuqGgS3wcneBD53UW5LtMtDTk5AFDbN13j1BU6HQ38RG",
  "key30": "5ut1oeroaKHUz2eWrxEWAa6LsBf3LvCmX7TqGatT6LznvsAN6RP4ApMk81SVamQ5yR4qfwg33QxN8Psfh28DJ38c",
  "key31": "GxNfbSJKBsLen2FPHYW95VPb8ieFwTcqwJ9jC5bNh68oMnkDMCuYywtutivGEPgqQUNmpBSytb3cAv1PVPT7PBu",
  "key32": "4sSWUJ8APPXrHtjzegFKWFWoE1jWHutxqw5JjCijzhrP7h1rrDsnNTJFHpZTmA83fjcqAjZXruFHrUR3QYbFmVKd",
  "key33": "U4Ynr9yKxq6iHNMaKyZ7fyvh3E7J2iPiNYKWfsMeZXZy2uFeCiTTqTc5dyTxdqn5yLsdhkBX8B7dgmgTXbRHXbR"
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
