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
    "7jCKg6UUhmZUz4vfbNTogaJtaP4jqzFGvTXveZTm83bQnZRN5xAf4KaYqd831UXiByTFqSC3YSfvjtGntX7e9Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25yCeqUVpsJdwvYUvEw2HQHFmv7GdMa7LGNgoD4bvHRGisNe6E75XGjNiu3vUL4L5jL4chAg77xRt6HUQhkkKiZ5",
  "key1": "2H8eDQNDxKtBsYxACqM5ym8HGjkqUCi1ZjN5axK6hZ6wx4Yy21jCKkE4NGanQnzyefMyfpMJk2AMzaUoc4M8HK9f",
  "key2": "5NHmFUcCA95WZEJieYZ4TGUYCm62irQJrrfrLyhijF5TbztYgzxNvbJC9HJAjAfsX6z1nF93F6As5B6oC3P4HUR2",
  "key3": "4DVZi2WqSAuM8D9yE42fCMLwNGu77x6uZB3u5pwr7M74TvdeKeWkYnJdVV6mMpmCX5Un8Q9v4SceSWGf9XVs4pQ3",
  "key4": "D33KEXFJwL99Lew9ixp7Me9N9MqnkhS1QtF2LAB3ZFUn4jTyUjJYbq4YXrtJrisgZPxvxZxGCeiUxPC3RFNgJdd",
  "key5": "PfwaP7CEyqowwScA3HNCCrrSW3dy9KVQ5cwQfLouEg2ff27jad7UCM8pnq7H3tqpjSipWXqQJ9A1PCFjk8bt7jG",
  "key6": "53mVeo6JNkhNnNu2BEkrAn88MMueSgk6SV8wHqAoCDQeS2p1fxYyiMNxqAePJDxxZ2oF7Fr9NnSS6dgK4Npa9qfJ",
  "key7": "4H8j1KEYKKPQpzLdGBSpJGB1HEyrqxWL9r2nM66U2xQmcjVrZQyPyejTUNs6AqyjhBpXzRTCaoc2RAfjjtYTuRaY",
  "key8": "5AhkGQL3CGirypCEZExKJaZ9KU7JKUPBGgFjbS95v9smYaYJ4Q4Z8h9vkPLgSQzXnfsJwVooPUCJ8kriGMK7ZmJA",
  "key9": "4cyYsveRtQd7HeN9FRYG9J115MwCUj7g5LPxjMctTGJU1erqUmtm6DBUeGjkLa2LH7a3VtNSPbR9HxUkm796jNkw",
  "key10": "66yRKCLmDubTEa166YeL8cXSnWiv9dRWnQGtyaUp1wqYuTyr4gwsamp2yFUajrMiMrWwVSBqWAzeGezNoJyFMRXs",
  "key11": "3mBSzDqoJZ4kDBTNQ1QJW5cPrv6fha9RNKBR4FDHhmRy7N9a4yRcDc2Vi3qVAKmVfE2k9BAXgPzBD4WCgsJHbPGD",
  "key12": "5QRMEwVoeVJtxgkKzXdoDuRD7DDQt8mqD1o7hUfNLLXrK5urSegNsw7Tkiq8CyQHjmRDVFy1b3Qw3HKwJoVvvgx",
  "key13": "33c9wwiW16ndPqGZegU15i2H284ZbN6uwrn5vbGFjCLrTDVrmmMyXZnkjfLreB6uGMo4ZBHoNsWN6vcmJJb2Pszm",
  "key14": "51XXco7Ayu9fpeEXdH6ZzVwra2nk2W6rF7qnp2Ktb3ziL4FWE7VmGWUsuUBGtULBsh8UVKywq9TvAcmoD6UYXndM",
  "key15": "4mihKREgNrGke4JBqGt65sqCyJQNaoMq22ERCEW7q15jm4gwztLreaDREpyQae3p5dAviEVqXQMppkT9ovTNJQFy",
  "key16": "2dtsN2PZRHm9RvAhnrqCeECFTAeHh6ULo4BB7eQAQCywARL9HjS52wSt3dqi7gUzCkcEJSDHeBca7RA1kRrqzMZ5",
  "key17": "5XjiKDcc9YmNJxx3jxcPaG5HwksXZKRMfH8tk9x37Sh1AgTCMUyiDirBb2iQptf8JRuxcsvfQTwCVQWKDBLHPmEt",
  "key18": "famd3KR1uR8DY2LZfeh81FAhCQbaW4VkJiPNaWPfZBbQk2GkZYoG4BHHfgLiW6DCHMrkpkvyrkZKPEemKhM9Twj",
  "key19": "4WWz8D5fgLdij9Wn76WLdY92XNoatRJWYdN8emBnHYh7CfYxVQV3agEmwqLkoAgrSYWDzQzk2GJnSFd46mKTbGoP",
  "key20": "q5u9Qqme7i28SBDNmCg3Agi3d5VNPGpC5XmLSWiiBYpcWvHH46EvBNBrGaapYw9AJbDaJxwABAkpYo1TmoYUWUR",
  "key21": "5ytehnjkxpxbBdMiViZP8ZZrEUM725WKWKG1cesvvEtcARS3p3m4wQBt3JQXPmSwLYKcfQeevx4Wx2CGjv9ygYrw",
  "key22": "4GLguPgcTPqeZHJd5mH39LzCQXFykSiWWMw68NHbjKXF5zrUTUpcU6XzTqd2uZNDGeHyrePYWfjvVX8N1uH9BnQL",
  "key23": "3mgEoYA6vrL3U6Hm5Cf6Sdk75SoQemeBMXFz3hm84WMWABtNrsWGHBoAQVjDT7zzGY2Qww5uyXFK9vXhhd589Quv",
  "key24": "4h5yc1gD2vHwkkfj3UriV2njjS29dsqvb3itz5whRe2bSRGwhya8rbD1UVo1GU6e5pt1Zg5D7k89YJnx1dTi7LAk",
  "key25": "sw7NA6tYvRfQLbdsH3Tku7jjX1ua9iUQiMV16SeCQCgf78r5hajVcQ8ky25Jm39DGL1ApNV7zr7AFQJyN5jDad8",
  "key26": "3DYg7MS3SEHTFwF5QYsM2nUZZkfoGTYQq15qSRJX8mMgaDFyfDQKfgsxjKv2jBSGXJNQFkAUUaPS36uWDZCF2Asj",
  "key27": "2td9TCckc1DZweCWp2NihN52E1XxNabAuyfEpoyLdLpVqB2zs8dPLHQnkUqbsuh75iyXXfPUgK7YkkKkGkUnBHHW",
  "key28": "2ASc5iufXS498jMmQs9dZ7JdjjNYEHgYB8DGWzLvWGfpj51NxMjWkoNwntKXqWcrFgshJZXNpsKjvzPezCaZYQZm",
  "key29": "4SVj15SP4drwpY34Tkou2BYrM5wBqGecMdw29ZFXNVHBbGaR539j9qcuMviFMHg4AaEGH6iepxeLr311XozxEwcd",
  "key30": "Uh71xux53VPqrAmW6cjP2pUktwdNVdNzpY6Q1bmkpsdHAgVrc9LST4h7S3tzS1sFMrSmVX4aqfc3X3JXJXURa8S",
  "key31": "kUhHXJFa1U81q56fE4roa6dBXTHvibbwa3F77yMLw17qwDHyCyFAtS8nQV3XduCQBCgwQcuqhqNye3LiU3mN6Nk",
  "key32": "2sZqD732k1AA8sDuD7Kfqpb9XnAoi2Y7J8bB2fqp8vgiV8nS3UbaaiWqVY3WRyR9nVnXftdGMpEEVZp4PGTR7QG2",
  "key33": "46W5dL8haZG3NkckqCpudqrUpS6iE7Uho5pU7CMZygVoLGRLdokADtTFkRnJzHqXmZUYcuqQm8yA2Sq1z36DdRcF",
  "key34": "4REp8qeHm6D5C1T5SRZHPun8dhThgR2uHiceu1kSExv6zcPQUfTYT1yKD1oBuZ9un6zrTKyDXVsx1FRRxkq8xAJZ",
  "key35": "5TWrfrVTxTKNGRjr4eMBqZc9HuisZaFetn7RJNfa6VAbM2VFg886H73kqvFq4Pb6vqDL1mtXNZHhbzhzKYwyTpz1",
  "key36": "5wnGodZMG6PgJLzSmVfBq84pZQzeQ2GBvyzvg1Q5iMFXG6x2TXpwvGk7mBoNndAaFwHSVyXyCBid98BV1Jey8DJe",
  "key37": "5VUpfcfNDC1VmKoXmdy1wNHLtmVuhi3gH7xRoxhysYoZU3QnxXSUUW4FwbpJ8tB12avZsQugDJV5uTP1s2Fx9bDH",
  "key38": "osyCQ9iHYRMQC1v6p6UcDewQBdsskJi5oXf5F2D6imydTmuiSqYpSfyg7JvRib75GGVMVoXkT9y9djWgqXysKcB",
  "key39": "4XdwUWWEScwYJU86RbDoR6cKBLGryjojgMMwS2eZnNX9U5WMvP8ZWRgG9YLxdgNdG1kZPzCq7gMogh7PqtgrirVE",
  "key40": "4MUFkwmu6VsB8WzyLEzCWbUFtzNT6vrCQtNDuM2oeRqSm6hmvbVjWMjkG2vQB8Qrhyk9FrX9T3zFf8QJirdMmpTn",
  "key41": "2FPYvtFU82L6DfuTv4321jFPk3bBzTgvspCz4h1cEoa8HygwQFLCwCfCTeGWZtks4oxJvgLeZKeuYx6tNf551Xpa",
  "key42": "4shnDSrBceHDThzU6hxB9kRypS8tWQravggSASwdr4WxTnwmxRo1XH18Gn2CspGxo7LhnWbSksg1VBFCBxeynbgT",
  "key43": "4Bjw2G6AA2zrURBxW14TUGb1G62fWmCAno6iD7qh4iRrS5smoEDKZiPjXRsf1x328agScyLx8pMGZUbh15xnMpkx",
  "key44": "Z5c4b2qjghx3jwxV9wvoxNUXAcHaHLC5k92uwdqw5V6MtMJoaGmBS84MfV1dVy6oTQ4bvmMsSEDp3Bo9QkFP7m8"
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
