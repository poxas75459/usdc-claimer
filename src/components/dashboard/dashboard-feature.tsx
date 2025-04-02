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
    "ZGjE5FA3E5N3S6xnqSsR322e872E8eRXwJt3X2Nmmcx1R4JN6cMJY6g9NCVHtx63N2TBy85J4dTWZVfbqXBpSs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8nJs1WpR9z1sdBVG57zX1HQ5rs11ZE5e2dwwFRU8mg82wf3xuWQA96ijTK1nHAieUNPhqRza6QC4Y1M7wrYRYDE",
  "key1": "43X1bA8EjeAm4JUK6eQnZc1g4eAHAiLvCtNn5boXz9L3pFkmDwTcL3PXio28p9mHpA3BiuT6Wb2BrZPhFc32gfEa",
  "key2": "5FPgdbXiFVVpmbCD1y73TdaLhRVxBKGaG7t6H2X6Z8LkvtLtsSyo77mD7GD2JovRNVzgxJArs1wnY1ArKZMEiP5G",
  "key3": "38WgnsnNhL3hgP5gyCb6zfciQjjzFyHczM3CSDXtP2VXVAZ9Ubba6d3p65SXJU4kV5CdHcpC6LfT2tMmCqN9riQH",
  "key4": "3o8BrdFXbJjYYHSKSL9oiQkveWXYMnkS4aaJBNUbhHjEiLwSrqDxoVPWB9qjSn81RHGTMMxpQUW98NKRYJBEpiKQ",
  "key5": "5L6RQzF4mEJe7n4wpb1Qk6kcMbp6VfTCQFaiMz1p2eQPFzRQekLo8pgwSzFfb1v9Z2BDS6VXY8dVwS6FWRUiwB96",
  "key6": "2ZWMFzgA4fWMf8jh3K8pajkeXg5Yd94FKshmjaquEKM52ikZZ39SJAYbz9qcmHx3W4wHPRJuMJsgKdEdZPkmGpBx",
  "key7": "3B9SUyCaAeCnbVB3BUwSJtDe2CMQtxMWf8y9fTKu8RHeapc8FXu5ouY5bqV2SbDFnyu7gS68Ed9w9cTcYBWFxs6K",
  "key8": "2wx6dX8BUFgKcEjmZs2NgFBM7SNmbgZTorgiqa4MnuiRZpW7yYJ8Li8fKcGQyFe8ZR9R8s41ufn4hQzyDPpVEvEb",
  "key9": "ft24aKMvLiFMAMV61YEmV6ANrKxSDVr9oRhWqhnVNszihUpR2y156RUpvNQaF8yWioQJKeuRFWirp68KKH3UWr6",
  "key10": "2Fnr6v3KHDTZfvKGRWyDMGB9844kTs3HXyFvJuyRctBjBbPY6a6nrLp488xxwjyHeHqLELaLp4K9bntCRfhMHYS5",
  "key11": "2AWhNQF1Wz6NZVkrW5i4eiz1PNUpYDCBAn1G3wx7MhnVH9yUmuyBoYiAXJBMijLQcs1C5b6vYjv5vz2Z7W4dB65B",
  "key12": "2CSCLvnkFKgvmtSfpEH4nWqQgTkg7UbY7LXrUcoGUzW7WRYiaEqs7J2wQSbSN8HcnbuAF2eRPWGitjKSWKUcMhZX",
  "key13": "3dUf1wn9qUxRcTvXRxJrZdZDt1uPCKY8Vzwpd8TZdaBkkoMSuLkXpR23EJeQUpRHg9hdurP15GZWgBqi14p5svnX",
  "key14": "CmnawFKpEdWECRqi8Z1wbHYRKAhfn6Jx9jKPd82W2F9kCmoTY9x8LqsZvkkobkWgipSoSmYGv2x2v7QS4jqVRB2",
  "key15": "3G9RDoQm8BB5o7XBstwK7RfuqfUjyBS23rJT3npADZHtiEhWo5VZCzsD7odzbcs4RovgQxZjUdbb7BU6ZB76YW2m",
  "key16": "5mYWSS1MH7mdqh9uFcg6GZoDqCk4VwUHodbJgPstrzLcVVAkC11erSa8mHLZhXxC5yURJMi4LaXeKNUgXZP7BGuY",
  "key17": "4j6gLNwJSoZQcY3hyJFKdMjGfcLBtvfHtB43b4kKKmE1fHtCznZHKSfS7jjki7aPaw9YYbfeVsyBceWCeYrotnvf",
  "key18": "25iAFtj7zQZNhBDi9fdYkWHqhW288rjoGWiiwQV3Rdyt96jHzvaPxSnkmnuS3xHgFV5eopeb6pGDpWbxHn3BaG1m",
  "key19": "3km1G6CW3secN3ZLcEzY5aFMmyeEapjdSwq1KtBkBfZmiQhJ9pZoZovLwsSzaz8cgxeP9W6HKYJdw3oZYZU8by44",
  "key20": "4gizvphSCCxDVx5a8x6M7tgVhcJ1R2j6btVirPLNqs1GwBYCYB1ke54SsxwYmWdLiokcWhUMVZnMpyV4rQm5VA4y",
  "key21": "24WYk6E9jDcQLCvMZC7tg2AWmvjQBsL7n687bq2C6K8TT2etBgraBy1eMprnxawtSvJrWZyN8Y8cHnKa2uHopYKH",
  "key22": "5pQDwxocn8bzCBhhXrAxJPhP8Kdm4eCVdpzv6rGbNyY22aFmy6uJsNGWFXGja4DoiMnsKTKqFEZE1y1g45Gi9PCN",
  "key23": "4rsQ4z1zVrtsZ4YuPE7Wg87fuwwtjv3mtnoJZ6r7mARwGUBHU17LqWkLdH1FSWVNKurqXJvk9qYYwYdk4KxCfS6x",
  "key24": "4aWvrfLmLCboFBf9NL7kvNvJay4qQN9Nc44iYsHN4iFXFUwwHBhCaiVDGM2nWzDykh8rGptcw5UhFD2a9CP35tG6",
  "key25": "6bZ7KW5s49LgWYhEzkpXTPx3d68Jo1RT6WXDu2B3HB56w8EVDyMyd3fE1oG93KVTvznmLMxjG1NEDC9vTWpiame",
  "key26": "2xG2mD223KAk9gHKKkB4tzc6sqZVcvz2z5QWZbr38jLBeiafwumqRpeUFzLQ3WgBUbCxVnCzyyHDW8TWyMZDGAYt",
  "key27": "3k9NDanVq73niNM68Jz2ibEiTkCRTxf1aYnvLgjr5czBqPZRTpf8kgy8SNATuHXt3VVtfvzzE5tMyG3zP31z3S91",
  "key28": "4g46zhMqfC7tmNFNMuFKpEvhdxeC4p9Zpp3VoDJ6XYsfZT8WqBFmeuT32YC9QF47qif7rbESSVLQH5pu7AFrU3nW",
  "key29": "644FPBjAYY6yxDxFJeKj3Tmojb61saWBeeFMxjittAytCQWtexr3o3N7Wo6Bu9mUMXrARftZheaeYciMJGVMCejS",
  "key30": "2DMHZch9THMStHi77Er7wtLaEnsB5X2HaJuva8EpKuyky2CJyZY1TgqGwk89CnXfZ3rrBwBCmaYrBryzXpi34xZH",
  "key31": "5K77AFPcr99nbuH32RhLP2C6QqU4gFaKeZYvX3bMARpz6kBs2Wr33UHfc5iqF6kQvbQkwmPfSYhQpAN5RcDgodNa",
  "key32": "5saf3iCpPf9nc6qzJ5rHBFTbYUdTnFESZEfUALdvXFfHVVE8T3QLNwNfuFhqwc2VJARLe5uLHjrXF2EefkskNRGE",
  "key33": "4LFbYCrCPkWJTbz9qpzf5wNeyA8kpAa51dGDn7BCJtTnmatKDQ4ppAmwN9sTBJjY5P2kCcHCX5fzv1Q2Pn9D33By",
  "key34": "48yVDvR4iZzLx2D5D29Lozt5BwUCrHGV6dqWCccqX6Tsm6uZ4VLoTuasw7d7CPZ7W439xH3hmzmUX2g27hzuSh3q",
  "key35": "5qUATykyJHb2RBmz8DmexqDWkU7N7qdg14KT1H75oV8HtBgbtpPv9qXL188otdBqCujr7sVnRADSxqSZvmWftR4n",
  "key36": "5ec61zDvgXnY4d2aTMyUNQzyF9LfueFuYQbzjmNegCNzKodVvLYSt6YijRzScPfNoL71GZR6iF8fDEyp6gZFzk96",
  "key37": "2eJmA7TChuMdKxbfePeqnyUmzUcKvzzPxTkpr9sD8nsdBjj7rM8hepEWkjtjJ3No9KgVnTfpN1nKmLWNJs3E79RU",
  "key38": "Xfc5REqnP7gosC5QoJTWFfJE6DUqfMzv5a9aS2cZ3h2oqHKZgv6wqmdHuLoYW8VitjPAdVJedXecbHWjR2oQcX7",
  "key39": "5Fp9YEY8aFe6vFxWxPnvHzLnigkkaFkcXuqT542F52potxpQqgP28SYeTRshVvcpoA8ieLB4d9hwNEXViZYvvqht",
  "key40": "2Ag3f8axuxkqFi5yzGry6SgdjPNpoKqAKmQQna2Mfj3LTW1yJGCf8Ho5AXiNVvE9Nu28AXmfXgDUJyfuu6ErZHWx",
  "key41": "4fkdZ8RXwdeW8E3J8GGGnKSB8GZLQCMVdN8LrrHuYNtPDXR5rSLso3sNrSbSJYZCjW8opV27HFj2gZkZNVx6TgqM",
  "key42": "4JFjqPJJ6NpJkpJn1n6RbVyrjo6UxiBfWLKfT7uVYkSz9pE21FhXHfe2wd19qmBDY6dR6u3xe7FHfwXtUyt7HwRH",
  "key43": "5ZGcXFDFdWjc1tG4EGKUD5WdpUn3PUviWup42GuzM2UX2oJCkXoXwhcKjT8t4TNRSzycJumJm81cCRJwXkcbNMPx",
  "key44": "4nc61SANAmfNKWL5YH5ozcpMx62vuWQv2CDZBz5ki5drkHHT1MvrsTAzH8aW4kBSHVrjpwHt9Vp48M5TEAwpmWtK",
  "key45": "2iXZjumEbVKW81obBbYN3FV8KYRrJPgrWSZjbb57KgfTq8k4ozUz9LnYq7cJmjEySz3qEFS9LutiaXGiWLH84vRh",
  "key46": "3TPWHij4j6rxAYFJMecPCLwcULxJznNrYzC6VWStZ4YfBiyQ7rq2QQoZCkmeZs2VFvkaHJpt1QupnmiV5RgBRoK8",
  "key47": "2geySfAm8dAuyAq7yXaucUyZzWC6z4GuvoWSr4NMCFgwCF239xtMEtwzbNxqWYv9vtcCQX2isc1g785sH1SEFgAh",
  "key48": "6BR46Ru6KLLnZ24diKCLNMmD3cqyvacjGmM18h5meoBcoamh1fDBLgArCNBwRbQYJ8QJKsi9VwX44fQEtCxMGo9",
  "key49": "2y3yY1k8jssjEg18KoYmt2itQz3GAmxWez5uT47zaikjppJFStsWt99QBPjtWHwjABc51PGus7ySuqoAgC4vF7fH"
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
