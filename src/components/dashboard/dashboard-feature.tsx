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
    "2KtzhvziwuQzfSvH2Cd1hSWnEL7LdgqPXAJZQoXQZZ3wmUjbg6DPS2Add58zf6W1o9ugUk7yLih3UMKVJqdXoHGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BXgq1V5UM6M5n4ZecaAW2sdsUzscwdkAnMVaS7EdXF7ANZYqXJVmow6xmZsP2TavWYhitXUWi4T35KWCfyJyvsi",
  "key1": "21B83ZGqigb6SZNQRHb64SRjJZs7Jza3btZj5gqmGYmYH7T6a6XXCuE6yzL8RXBPVZWwztJFMsE7AWV79GtXvyA1",
  "key2": "faYTtLFGvKkhJRUTmhAysWK6dGqoFu9RQT5sL3Bv62cRCPdUtm923Q7nvTgmrg7a7ZXR6k9eANnhDt4mBxJxGan",
  "key3": "4vxH3GrDUPoaWwW3xXEWQ51sgKnNqEuE9kwNdG8adY1c4tMGy9rajpyRKcWWLY9czCbtPJytKRfArBrNbaaAjsJb",
  "key4": "5DcXw9Ga8QkK9U1CqnCf895zDrJURvvy8A184QTEHed5NvhCy9DUgqHVDRKKJtxQ6jqAZyw23eBs8q5Q452jvAqk",
  "key5": "4jun4bHtnHpCbvk8E1guu5R8vBfmeknYSe3kwZ2Bv14uYeRtnnAb4QZjRw7dt3GnWvgQCYDgU9BSYrcHT7kEf88f",
  "key6": "4EWxeq631gYW1sYkhQWMqMZiGkoBKTuAYmsZRJaFxcd4KwQmSYRDmHZ8vKiwbJPbnVqFi2FcYjgcf1C91jAzwsmT",
  "key7": "2Jpd3gsXpsL1SZRmiewUbfpSW6RiMXxkKvxfkKoJJkCF7t2DhgYegmxx2mHCbmUMZvzJnSKFsExnigs9DdDhRChD",
  "key8": "3TPwhVqfUaxpAWf9bEZA7eRZo5E3rBF788J9A5obMG9NpCkhPCvWRnYUUfcKnXoJNL5fB8CjtuaXay5ePcriFSBT",
  "key9": "4tu691Rku6w19Fa7cgyNL61ALqo9qgc3kfw49WpUtbeMmw9h6eouiaeNvpcBWssaN6B3u6BUof7UB4ZkYnEj5yhS",
  "key10": "31rjoF7pzBYvQizK8Vsir8DLgSVGVjDY4SLTNyEvmSsGABioT5Z4NN4SherrQaoTnLJ4TrSe2HAKkXPF5GRd3kdz",
  "key11": "2K26pKLqZdoR4wK9haDGMR98WUUGcp3fZyNGQqRJiWhEjtF7uMrQhVbfxTLhNgqwGayfdj5mFTXPYFKUoYWsm63H",
  "key12": "3hQUgxNNkf9d1KpcS51YowRXZas2GJ6hQEwZ9J6g93TtCZRuBoQvrg8cMKHUkc9QEuswzYWhBdJ2jWiJ4AihSKCL",
  "key13": "56EhXszm6WVqWzwRXavtc1T17ADJZuJNrinJRBpFKfH5tBZRfDRi9ELXDBicbKjF92H99ARMgccdrTKEUxg26ai6",
  "key14": "3WMcxr899tFov1XGgMqxaxe5w9xFgfiLiBBqCzrSEcnFJCirZbznesdJDaWZBoFKq5qnMYXVUSmRTwTD2tH35NAY",
  "key15": "2k9KvjGpeng1TVTa1BZpMrseEdD4yR14LdE7aSxZK11q2SZtc5HaQ8K2J6YgwcqVe7h3yh1ErjwrZ8hdPkUGCkUE",
  "key16": "29yA5wSYN6ZWQnCBgLNjwmHodGycvLTDZQp9n6jsyukegmziqQDqPHALqWkuw9pz4Er4LsK2suP5eeP9eLnZo7rq",
  "key17": "VrT3Dh9vyvbYXxayA8EudmJ6tV6TS7G5cQgdf3HpbC7MQztzD6t1eZGyfoj2GBgL7r4ZL3S5w1gVoHw7myHxP5d",
  "key18": "qQHE3975u9tYCKt3Z16dBtsi8oPJ1yGnAMc7aZZAk3SczimJdddWiNn1dPo68pAqSmjNV77i2CkMxr8f1ERAtsc",
  "key19": "48SChoAYdwoAnXuwzCXVcpXu1CTqBStj3Khij3973X5TqpVnh3nUH9qxsvDB7ks8Br8XJ9i1jyq33Pyd3viLcYEW",
  "key20": "26GqjX3qaFMxbTDDLJpAntRbPCZ5xaR2vn4uzPcfaf8wcq3Md8vTKqgvs39WCDwfsbwkV8cEb1fQ4sHd9UQkRmnG",
  "key21": "31LDv9ZRe1BBVVorVZD1uyFeTVU9UL7qnobXv8Qzo5vg95ujzsJCGUCtmnxETZ6foFepwHUfNToEb9vgAeqM72gz",
  "key22": "2c1EtuezbxRQ7Drz4rYHaKQc9T25sjsku9kc4vChBhaFgHWdXFdRHyix23WVYUA59yvTLUwsv7DyFukCxFitsVpC",
  "key23": "4b6RVuC4u44V4oeMy6aP8jMzy62V6GeSjYX3hHkmFFeBe48868YdjqQyuLge8F5QTN2ywjshKEkEQkGtQX5m6yEs",
  "key24": "376X4AsKJdnyeVHXCkA3gBPhMGR7xVreB2EbZcNBHBGRfhEsAEQyyufffbogo4vQ43z7ks4nNi9QfyWaiwsPaURS",
  "key25": "4CYUwhz4LTXnRJPs1VZt6WstNaXp9S9BWZqBHAd1fYckjzDqEgYWts2JNt4mbPGZrk32kxxQT2wUhtQzWc12KJNs",
  "key26": "264GmwxhH8wYUHuJCaEUGqTNMbMuMCzTdtGua3ccMm4FXLWmcq54vRf8oVhz7282Bmw7bDVze5FWwGWbnefSMfP4",
  "key27": "2EJmdWrT64cEK4jcsxcucv6HWyT5bckpaWiWNi3cmKVLsqHxY8vPM2QSLWwrxYBVG3sQqfaGeD2JFgnrpcXDiC9p",
  "key28": "2HuvMXhyLH9dQX82rzgq4brKR49kkQu4HuPejAXoUFEmGvcHsSCKFWrYQ7nYq989hyWFQ5szqvRfY7iS73dQ9JxV",
  "key29": "34b3GBehPvgtYNzEjzj81TM2FQwCUzoEsQFriS1dq9yBNChYAKwpfWo5B2Nt7Ljpt1i1be734YYurTxec7Hj1YsQ",
  "key30": "5yu9BRyiG81nXxFKoNPxKqh2J87SY9rfJRgTm2KmBRTQVvCjCzy93G4JwS9Mvnqa8UKPH7PXriovWnKBb1tcpcoq",
  "key31": "5trt3a7aEkJs31srbZk56QnN5ViPmt4eqL692Umvsa7P2Ut8zwovS6VW1WQesYC6E6cywnM4inU7mhpvY5hB3V4F",
  "key32": "2kcrQ57ZM81S9tim3gfQEVVYNM8Um9nrB4Ycbe4wjKWTf9Hs4AUCnBUWg8kHg2BuDJErKEqsYmjosmiL23iGvo5J",
  "key33": "2sqVN6K3Ff8mrUURd7t6mC45DpakCvDwerxLuMsEaVRjeFDDyStC4ssfU6JCwyCdmk3LZQnrU3b6nCsE1vZRavpp",
  "key34": "5imEkXhp2vC7JYsXbBEWvmj3yZGxjHeZDak8SEKuKMekZqRBDuG1APF89Yr1ZL7C1WXok1Az4UBq6gjmZYg4Y5f6",
  "key35": "5UHaqgjBo5tG6G3wQDHVkXdvMVA91pjsYYj8w12xRk7mVqkPHwksNfz1s9LxDbeKtP7jvcPhQUBmv83s6LJMKYQm",
  "key36": "2jpamu3WnvT6fHbASAwjyyPg68GYp6UtzLkutcMkjbLkzGQp6WmpbivNci3M42JzD5u6sfuxKz54LXmm83dPZKh8",
  "key37": "5KiNtAxqpZ5BPiZUN5WHUJ7EzaFv1ccXS4QFSC9wcwXh8HMhUHv9174KHtRe5Vn7ebYJUUeQYADAGmFNYsPem1g9",
  "key38": "3TnZsJE9YcNEo4LfyjNQP2BQdHKKB1CK7ZDJ5L9RHxgPs54jAPyTJaUqyoVh91NKVqV4U9VyH7hXmBTrz1KBQcpo",
  "key39": "65Bp6XV2qyBqVctdtg6bbG65Nrzcaas4CK286kZSKGC5NS9AfHcYiXKj9nrYr6UG5zKs1yWqUDFkuU7ro5ZRZmDn",
  "key40": "GhNaPEFgWPMuJfeRcm69KD1Qiu24kz2tZhp7ZPJn5D3o7poTjzbftDCxsSJzXy63EhLgx5GwwiX1gH5q9GyvFJL"
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
