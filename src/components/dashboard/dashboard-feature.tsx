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
    "5MAagnJT7QniQ2oKatXCkzWGmodF7cBP4Ga57WN5iavfpgVuhzpp7k3jM26MeE83UfhheJ82PCZxz7VuThwYDcJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmcVYX1e6bYmhjGUMej3kRzQB5UWBPe2u5ekgwATNb8aCTAq1a4s2Gw52x2K898XrjknZni13eVKcUvwKSsZT34",
  "key1": "51pqKjESiRvjTHrdbRd6X7r6pXFxmaCUppQVyjM4ETjBaFjjuWnKUsq8qL6GRJTQyTimo75JPCs6jaXQjHQvNXF7",
  "key2": "4osxHF4hyKyuYCm9qgbid38VyNNX5fxKA4NoDESJEUKVM3XU3EKWRTKsxR4iyxQjw6GtmqvkebkvLcy3FixsW1b",
  "key3": "4y2bqJ6nxVobHeuFjQtMRuQkft1T1DaCjJTfjjrDehVei7paniBXX8ZhjeG8ZViZq6gSt2tfMjvQNViiyNyrQuZb",
  "key4": "pideNCp1oS6sVmVHH6g9EihBpehdoqY9ZKSWqUsqAj9FjEYz416tWxiPFnjEwY6Ljoyh9CvQYfS8mfKQzcbkN3U",
  "key5": "3Gfp5Gz2JCX4fqEe5R4Md5cXtd1qivkXA6gf6T8MTbuds48sccu4d8aXDNfbpKFQGVu7yeU5TwADnmN4yyMqMb4b",
  "key6": "42W7kKZSLkp99TTiGBeLN4DrPQfHMt5BQqqYcY1xkqhoQMY8eg8Rd6Pz1YQiVDE9CabD8d8rrsuLtH9QHHB7qejw",
  "key7": "oTzf2ZjtnPnaTri1RiUFAVJSxUT92M1uhu9VKQk7JboDP7ovqX3kppoedKUPw6JsXFdxte8brf6UZRDrzYRfgjx",
  "key8": "3hXMBrRsfFfAc2aqYcKLXN2sBAo7Bu7tdzjfx3xw6WosrtvWC51gwZAaFnGUMRBykPi4Ss5N7wixxDaXNMeNT9nW",
  "key9": "4AvqREpeaSdeCrzMaCSVrjBAteYdCohfyCx8jqHgfryAfmphczy7VMji5ocipnjerEW6okDZYczuj5oVnqf7FxiN",
  "key10": "2qT2CrA16vNUeZk6jukP8J783rZBvjmm72idR2psoSA3UMrwGsHdGzA4y4LJn19TojzwQ9Zvmyg5an4JyRRJkecB",
  "key11": "2FMrMEbWCCvu1SFmAiWYbtKf3AyYxM3DjpTfdkXLHk5CXDTBQh5g3JBzq8YE7oB2mbtux7U2EYYccHyFCg9gaTyn",
  "key12": "2iPftidi3793FE4GgV4D3asp54RZ8M1T5RKyMSjnfLrK3s7NCrCVzSp2UYHJ2qs7NTEdrbGBQxX2WDeupHrbLWRH",
  "key13": "NLpzFhQAVmzCdHshwYeBMDGg6yvx1tHVj9wccJGcEhtKBBAxDGQj8NLFq82M221tpZTovHgFshFPoHwhUfnPkF9",
  "key14": "4oYa6PGtnXacddJhxJnZq1PZXcBUcT3DdAD8KUkXAMxoASaRqmzbHiE6NzfY2SACv592huPLscyYocJXT5v6bTLG",
  "key15": "34XCGEk7Tc44qUsXdiDwt35na8F43Xc7c69KjwSz4PVt8g68RefAqzyNtmxmpacaJW1rYjWS8kk9BJjVy3cKJgVp",
  "key16": "Vzmcbc2K6u4fSc4QD7A9Kus23VoV86k5PXgF5FbgJuXWDXkpGQciGDANrhX4pyo4LiqgyVheiWT88ohazp9Ed8P",
  "key17": "47ybnhEfT3dtF5EHerJ85H1MomSQWKW1n6VLc36a8CsNiPXH6628U9jYRzy3f4LDPxv6HPXr23wRvgqUG8EnDnqv",
  "key18": "21zG4LWswhYsNExyjDfenLA9a4K7cuqddhXCF638VGoja4H4t3FLTWiYVgTZxtFpaznJtjr4TJx9Bgwh7fuPncme",
  "key19": "4ffaibFdmp3PEsTLETRpDT5YN4DmkG7HNqsvxeYWkSWJVZKo2LRbRoLZnFjGGdrisQarmQjEtFRVC7PaC27c2mdJ",
  "key20": "5DZWLrzdkV9w17aRHeKFAZRp2TxzFsgSP8KQU28DgFBz5Jjb5QfvUYjo2CNmrw714vEkatj73udmSES5JXR17j3D",
  "key21": "5XogyYFPqaqDurcbux5gYHDjra93oKNaN2hme9bzhKGEAp2JwXas24SZmmeuPYrejVcUnN45vHaJFvXnPACJQJgG",
  "key22": "5DjujueCvddKxREspji1SXf6a66HmwqjmfYN766vYoVENh9r1ar1YFG7e6nDUNrr8sReXbqEJ6jv9dJEw8ZdXArX",
  "key23": "3JvqCoaF5ooyBeftq7vSTWPWrbf6Dqaf6XJvSW9nGtjmhtNyY4XzRbuthZb6gsDLeSgVZfYwJZ6odDtvTDn1u8Fi",
  "key24": "2RVU2XEr2JcxXwKzk3bK7UhM1ckikVVPj2DSTADzodDQvpC4kjWTbH5q2xaysJBz25kDaEhYwHU3nqYWTnpgHxKX",
  "key25": "2RM1YN4LeJgRhnKSY1BoanzvvnQU6roMN9SAdGBJHHjrS7mCWNkvMnjrsRr3ysLRXt52hFSMSGbYP9E32dJvQ6kD",
  "key26": "i92tAJpDCwzHBeiFqtd9NtjYWJoyWmY3wCpUY8r552LbBAhQXhM4PC9rcQYoT2MeLEJTShuERSkfQZDCTdvPxjh",
  "key27": "5twmLuzbL4chtb6m3rmtS4w3HqQZrMoE51qULxVVkGjag5BuHQseoN49yMEKdsQvPj2rmAhf499NaSZxRHGuEoFB",
  "key28": "1JzQigW9V23BUqgbGDartvnbssVz5kYWae5wwfJTyj8ZJsEsiMUmxMHKyfXbu4xXfYdjnRdXQLcwTgxsV4nkmyK",
  "key29": "8RedadGiYPcTFtRPeNJTDPaDp3sDoY4KVHSuaKzEZCNsqkdvhB5JkZVGWCeX32KWRfwE7KsuG5saoeyrucZn5WP",
  "key30": "3fvUCjMoFSLbcshrgGyZZXxD1srgjFsDsh7QbYn9sXm76nriRGe6kFcWf9WzD93EVFzAtMvZKy13kBfbZwY7VAZh",
  "key31": "267y2KVrCpd2eoSnuZwYHxqFtMQZadaRXNu3mSCMvkYLUjvkQvaomk6piDPWkeLTkL8rbxsu8qHE4Y94aJSCaNfj",
  "key32": "A3KX3S5N8z7PzQqDHmobK9x3G1xLqbVcUrXZHv8Yh7pBKP5EJBthtMew9gAR5n9BWXZ9S3xav2Bp1gnVnVnBQza",
  "key33": "3jMtR6FVpdwM7RCiwwMhFLUsS35BGGszMQj3xFTETEy5TXyXQZCL58sqHnVcGt7uuMioGm6Kw6LF33aHXxddb7ua",
  "key34": "3bDXZBjEiW97TCrBWVV7S7ZBGtFnvaZadVnRBLxrbieL489TPpPBcYKQ2F8yW4DUkQjMhq8xfLrXNAZM3Y6QuYPf"
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
