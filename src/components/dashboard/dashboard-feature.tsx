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
    "4M9k6Ui1rZZyYEpjyyuYf7ophM7Bjvyr7Z7oGk2aAbchuryueoM23ikZVHQ4hV37sqDisENmXHETATPcuZoRjfRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUobXKHzrip5EE1Yh3xsHiGtNkmSVcV8JveUhAdBbCYmZpCJqxFJJ8q22qDogJjmcwrqAnpk8N1nBhBHK1poNH7",
  "key1": "482TqTEXfn4kZzpw3ymArFD3kWfb17L5sMXTg9WPWqZ5YMPasVrzyQ44WmjXZSQkSzRC3bzB6YqiXMxbTXytTAtr",
  "key2": "5gvpDTsxeznLbTp3kHjtSvEvGiZ6oKfxcQBXoa1oeRpn4jCQcfMLSiZ6G8ScBU71CbLwTxafT1itu8ELHonNALsN",
  "key3": "4312tX2fSmJJ8Ug8KAvsENp48QtWX7As7NJgKe2W7HTYfQaxsGKYfDQYnWsC3uHMGy4WYNFTHiEER8rEhc3XDJ3d",
  "key4": "26USZtqYjxEzzJEZfLegFeJGXd2QoFXuqXA3BTnstpBDQvhkxEP4CBVWgKBwP3Ef4cGJ6HV919xyhKPTPykkkvVx",
  "key5": "27phFir25tEWmpWVB6abXiRaqsptpS7ibRnQYNKyRF2obPbSKHynk9hgvJu1kd9B8nykigfeJAStBHJvsZN9zQZt",
  "key6": "g1VvoGrKgcs9XRWrTxSbMLmSjESLfthNVQHggZyDSfT5vjGwNf2JkFDB2NU3Jh1jGBh42FdcVtsfFCVDEfzRQuL",
  "key7": "4GeYeEvA1KzKXHLe8LqwJwLMTFWPKGSVG5zZcpWQn62ZZZhtNxv6V8Zu2ktVEDvKcDY8EvFESqUk1wEQRoBMioJF",
  "key8": "eT9Y7Cm5EgYMmA6ymWv4aSWoCfFZ4SmAd4imU7xmJmx62MjWBKHhLF2tF6DHsofFwuLZhrTeS91rscchGqUQEhz",
  "key9": "4qz17FFXD6nuU3xW3LTdhszFE2qNrZejBWU2enZtMS1WLbknho6QXaHncn2rDrahXvmhFy2gE3CEbxXGgVQA6Ro2",
  "key10": "3sfRXiZF6sd6t8kKjRsXV7grjmFfEfiUvTT5tN7JnXhBWMwToViHLD1jKjgfyKsDTsbehs7D2u7oirwvh5Tt2AN7",
  "key11": "2WLpzU1gWmpLJX8X91UDvbHws9ZASjhrCBUHzUsXgFFtwmEL9s5WWZ9cktP8XtMn4fgxXT2piza9xsjFQ3ygFT3z",
  "key12": "3B9k874upRvi5Tdn3uJ8jW3zc7xoE4nDEfmhSfxt7pn3PQcJoUmYDEKgru1rJ1DuSzhqmcYRTtAEbF9DFdmjHX4q",
  "key13": "3hAprFm5iNwRUguAPNSnvASrtsQ6SCym8N9TZZXEXKQ9MhTevAh2fYMHdWHFDaaCrzhaJcYoRoon9LiERW5aZyDX",
  "key14": "4qJNy8M6nAMgWTevtAAqCE5SFD1C83e3GZ9DKcmmpHfczAqksWo4Lv7P7niddYqaSMvkDyuU55uXMhprevH8Wa3E",
  "key15": "3Zvsru4DB1i1wNTbHmosNd31dta51pGr9JL43s8HXxJejNBtWxc2ZD9CXjekfphLp1ixfqkcLU2JSdjsF1ib1JsP",
  "key16": "39QMMehwSUK5moC7fJxeMjM3YUXrC8vHduUyuMvhk1c9r5XLCwiG3pkW42g9KP12j9kmNKvZYmKwMLRMp3toUuTg",
  "key17": "25sdx1izu4Z2aqqiGi1s5aMczB24CXfyufnGq9UU8V5LE7chFGcCKB1dNM48s16j12r87ZjK6HpMs1AXxjFkbAMB",
  "key18": "5MkXCkmRTzFsvvVZSVbRQHKmVENMht1BdZ9wmHbonsXPJGakk52mqqoXMnUxgAMVEEzmMSAzZ8uG17uGntK8iV6D",
  "key19": "Nim7uCVso8wFthSsYL4QKNMGMZd6fqNWYW2qQp6Yutw7PceCs5HVBwtueF9yGjKgYLXdv443WmW2mm7SyUgDZ5T",
  "key20": "x9DsbU23WZu19mcXQsviuzJqiVZXH7fVgyWZKkRQJB7K373PmSt7UR6r3Gq6rNvvZWwXHJve4KjLUyMkhUcrxKh",
  "key21": "5qzynPyKPGyX4X9wQjVYUaDhMCRHG1CL4kV6LdnyNJH4UCFFATBqn78pA8HFcfLotsaTEYQpRsg74tVeSsBzXnoY",
  "key22": "WoGU4v6SzL4EedGikbporAEnoqXPNE6w9uppj4zvG5dvbV7Mw4h7PhbT2d95uCvJvyUtyJd2isbPexB48usLKKb",
  "key23": "4cRB7TgCh6SH7hfj6yecEpPUScvHHubWD8bDy4VuNbAyK3wHLEkM1VMBUS1XbATMB2VaL7u5uMi3FzES1CE6eSnh",
  "key24": "52CAgcTqLH6ZCcXwfK4TTLCEP8MgmFpQgBaq3gMeDAvavz8sgKv8PRPkAGNnvtvEfPvi635syVHeHDeiD2VEFrfS",
  "key25": "bVWarq1s8ucRvkSbXg9BoTF8YyfShNdGLsKAYdWqnDY31mFLpUQYH5JpV5wxBPnuoVaG4PB1cGwxXGc1UdpJcop",
  "key26": "5Sc9BVdSQBENjCAi76JG2HMUfNET5z2RqNZK2ofKqbbkHVesYmuAT5X9QtPQS46gGW2vdMUmKPuV33bPTY6uq6yG",
  "key27": "3W8ziw7p7vfUwpjtuC9wNfnmpEXQxPfC3Z7N3KY8MYQjpYTEyEL3tXvLqDogwgjLzxw6ismT6ivCDDiUjW3FEHRd",
  "key28": "2PC49QLcSMBoVK8YMTvofQmzuPnSn9y3J3GpN76HZdBJa3YZZhtpmXDbHcUGE2edFEzTH22PUW2yL8b4Bbq8pPdD",
  "key29": "4Y2VgYwab3WZK4gFArwHU4W3i7ciaVg3b8KLWkHoBkFZa1fdn6YBEb9B9PsqPrFgHRRsQTQPTC5mggNYi4ViMJAK",
  "key30": "5CW3HuNrm483kt2TfFMCxfnCCP9Y87R93KbRuSiA3kSyFmYFGwX9bc3ayyBX9RmTp8rSP3NABhYB76jv658KaeZE",
  "key31": "3TM5Q1miyeH33e3ir2H5PH8iKx4FUp39ZtDQmUWs355aDinGeydkCMr3LykrbdxkEAguPGRnmWbn2y8D2hrTnUeC",
  "key32": "2AMcDWzC4xKQC6h99w4H61WGiCnPQemMzxrjm1DAZaWk4tuwUFozQ4UUsc7ZNhtFRMm3eGpUNewbSywfagWypPzN",
  "key33": "4uF5RBZfX65TtTykqPCS4pJPjB6JBq8vcA44hApAaT4VgHoUgneR2ZxrAzRqiwPQhBHpu7P48bj1xdZK2Li7p9qf",
  "key34": "2EvwQwkYvTtsMFgrkJUqairXyzCb38tqbUJBwMzZXcuD1eZLZKdTpgYbPRucw5hAut4qjriUeidA8gtw2Appw3rU",
  "key35": "45G2vmLftwS5M38YC39CsEkoLZV4not48MAUDkYyY2UHt8rAEjKj1wMHkQnNbxaG6M4od9fW6xiZLpA5mTpre6f",
  "key36": "5tkJdh5zUC1Pid3ps1qZuau6UHLwqNQWZy2GPqJzqg7F9DLhGFA8vzjTbjnZHGkVX6WE3QQUZV8aEESmQAqTGLeX",
  "key37": "wVWQ1KLH3S2hL8kH9w2eNayGQMgu6nHJFDejRUjsmRK5hu8XSYmH6uQqTseVLwuQ99rJ8fpTCgk8Q9nTosqgJWH",
  "key38": "ytLbzP6eUqtjvNcXYkRrdoiSv5PBd855SaYA4HpacAGFES53kvfBms6xtBMyWRtUVXThythYYwFuCsCSNh9p23N",
  "key39": "4AqA6BYN9UmXbSWqzLmujrZRsn4oMofTCGyGqEvNMXhJhorGazLCBpXNsgfQYx1stqUGN91bpuMpzdoe1mNfYmd3",
  "key40": "7TkesotLdCntj2X9X3ydFmVgf14TcJVdrsRBzFzZqCdxykFKw778YqQ6Knfa1kJrK6BNqFnWm859MRzxbayLyRq",
  "key41": "3D23PZth6qNGVVQa78VKMWUspGtB4t5M8wTPjCN6dbqDi3AfJxGf7qQNbAjcb8h2JNdLcXbrZtyMuhMXhBvCny2T",
  "key42": "2btjHc3KwRV8pCYNjRLkVVhgHqxja4PMbzbEQkzwKi9GGKfFjDP9id5qBNETmAoWmY5uwNffKxH1nhHqHTQK48dn",
  "key43": "5pLbYz31QUS28q3XyuSft2eEjKvnNJ5eeMFvaLajJGA4eo34qHhTSTW2CR4wJHe8ibthYejJtPFrvis8Y5qqHdt5",
  "key44": "525tJthKMcHsBDncCkyqxBjdN5X5oKAeAbQMdhyoWsaTCyZhYRuPNtcD7xVKmen3wAAm1iy4Q5C71aCUxwp1Ttfw"
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
