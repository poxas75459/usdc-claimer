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
    "48oeeJUTDPbMgKQvQmZjUyGND5PtRMzHmHk6GuWoneEcy5uMCoxjgmjfMAAowiSBvXJreVXN5ZasV1dQekREboNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vvBni4Y1pcky5WHQimFDbmLTD12F4P9V4usMFNLHxd2EJPhe38hZcXDfsHL4ijnWyZ8tLE9aPjnZmbzzBmzUWTA",
  "key1": "4gBcoEB4fzqLEkAyAUDuSLFnogV9nnuspXQ5C8FsZTADUqrocswmvggzNGjP4B6Q3QoFdKURQBJJMKJXo7DB8qpG",
  "key2": "5BsuKz1P78xLY1Pb2bhtFvvHLcDbn3pP5kQDKjdRwFqmVRRMKoehvvBCVdGgZTp8eArPifyirunGRX1d3XpFhwy1",
  "key3": "2HWQgwVZQbWiHE3Bj3PswPpgox3XXDUS231TNgwX1cwHLsWNR571tJ55DswGjcvVy8D8uQr4N7ABhwBqNt2iGDwE",
  "key4": "5tEjgzN4m6kQejHcETK3ajgFeXKe3Cm8SBQvr3sKytKrfDxdvh9sVttHugA47XqhvHkDx48bVBfUHrDjsH2KfqHJ",
  "key5": "2UmLr2mPhWFU9dMj3srQSSorFsa5Us2LLiawLR9WVt8ypbfbgw7kWKoE257z2jGZy51M4dx862zyuaaLKDMhXbgZ",
  "key6": "5YBoTbvS84rhCTtjTzDyHQGkBPWtATFvANzAb9TwNFjedkqGypLg758JFnXRmvf2Nv83Fj5fN4NHhmiN285z1oDA",
  "key7": "4As2aNEU1MqpDiaHZGr3neVzKGThwWrPUv3CWDoiPp317FPNPN1RZicxHm2xurSVtEDSCNGKdV13PQ7Xa4ahEKeb",
  "key8": "34QGivsMi32DQEtqmTqWzJ8zkx3AXVjJaAsKjxUA8CAmQLW1nBS5NqUZ6sU2QideNL4cjEQhUrmfttZHCjYMiYwm",
  "key9": "2twEEF82qtyvFVPrum1p3edYVrJgMKEpGmyDS2A5DSgVEhNtBbYDd2jaBi3KxQCx5Dz9mVvpxPfNVtUj8m2zGQuL",
  "key10": "2LMzj2g8zaigRb3kBPaLXsEcTcbwn9eii7fFzt3touZwgPCaNLMgaNQh9qQcjK33KjFjfUU7sQFSoiT5Kx57mDzX",
  "key11": "BwSqqaB1XqnFckHSxe14B3XN2Yr1dydwh2DFF7aqKhLdEvjG1tuqie92aYaxur2TmTbiWodbbTxBTJjDNe3jVQh",
  "key12": "5VFRXRjyQTV4abYR2HfARXCYv4gxcGKao1bLrUiw5wed3rLgG7SLC6SHTZRfZv3B2pepuMfmXwUjfL7HZfxPp3uE",
  "key13": "2qGVvTuDQ4Ptw4DktCBL2Xc6YD6x5HViaKQeCUZY1cD5fXzKFhjkis3APAB5763zgYJnxPehPwyCxnAYYBKRrCmm",
  "key14": "5NDvuYwxzLhx5q5R6xTFxwRFJshiN2f2mucNV8siK2WU116VCQcCMbviSjXZn1Xtp2gGMDUfSDCEfG27BWoRr5aA",
  "key15": "cfPJmDBiV28Ez3wPJ5QhvLvuGtZpibhNphcxZjp3Kaw7wjQH2FRRJiif94Yr1VqD4Dp2EVwXtiBKinhaDmdgWfa",
  "key16": "nkswWaGFyaTYyCgPifLdrnQcZetZCSAA7fsDADL7tCXhk5WWC8z5rSB4AwARb3E6CN7U8c8ELqi1aAFw5Mhbe5o",
  "key17": "2CLyojquKB7tg9Qh3Dw3kS9N78t5CWNa7yd9o9P7ucyWujKJ4DqYgqhrduxFgryTWGzN7CnFab6T5jnk6B24bpQS",
  "key18": "2yUfzymZyTMRaxxpTxAdpT4g1fJyv8jESJnjUnPYvnr2mFZTbuoWcDha6K2Q5sBvbzpgkHa51UmLvdpfzyjdG2Go",
  "key19": "3Nn7erdp487STqnTiP1ZwTrghnFTiLywFDFZb2G7aPUmhD4SrQ6P1AEQWRvpYVzJbSfZT5PYfcDyfhJL8bqyZdTH",
  "key20": "2UFPXCcdwMDG747H8EHDtk2bqd8mr2TW2dDzDkjGEKw4SGGMtaeU21BFMEFLTS4qS4aZh3ZbarogBHqcnZRwbsrK",
  "key21": "5RRj6RjDxyX9XDR7wJSRh8RJeWxorwQDYgvwzhWrj67zz2xgF7qfXkJHaoxuaBpcBphWLBytCyU9zEbmi64xZPkN",
  "key22": "2KaHicMVQN8mavquxF8Q7LY9wNpKDpi8pTwekiT4mX3sJiKwPWpxXxApS7yHEEodegmX6L1KKQP9cBmE8PYzir91",
  "key23": "AkJBbqHJ98on4z5GL4wdGw4tM1APuMskHpMHzbxNxH4E357SemgLzx5RqVEXdD78XuzYetFzizYqsVvy8Cnmt8y",
  "key24": "3fBsUZyGuRHVtshfJXc3DPneyPdxReYPAsKxM7Gf6t6ovj1rGcHMGeCMy5GfE6joHawteFAXoSm3TbVAcJ6AE9PF",
  "key25": "4mPvZSYHPc1w895qbGzLZohnWBknj6PrHuyjzgh6nvSzkXg3RvfSMPdVfP1cz3TrR4bBYDXJyuRug6aMnSNfnYR6",
  "key26": "4AZwfKAs24roofo7xpeg4PDzotfkYCtLzC2yABHziKLpVnAcEHRpJz4u5aCk1gM2QQdze661zbpZy8FHpCPFK77",
  "key27": "3i8L6ogi2sFTx6Htnqs3PMCnNmq8AC4dYdbx18hm5xxL9HQTZc5S2cgxozFwKh8wk7uzKV4Bn2qf6LPcnJmiNBXE",
  "key28": "2nt44U2N7qVjUZ7BK3daKDF1wsADYx8HsiJn5D3fCTw4uwzB5iLKw5VRUCLXEVr3fsB2JioTowtJXVd324EjebNW",
  "key29": "3X3XbNV5GoRbZYAkNXVG1MYkAYLayrhNMNpeBbjgaxvjQXALSW41i1ULSgdrgWect1bKLTEoKLk6eiqrZkGkM1sP",
  "key30": "3Tj3LKG66vSNmgkp5qhqo1DYEuKr2Jq2k8Y6cTeE7M7kdMoHmve1zszyeBBwbPN6QpvziuUkjxxHAyuQQq65qfKw",
  "key31": "4JafpbTGMzC8TgBkzsVp48dLjbhLU5YQT37sZQiZvs19HTJeLBwgGwMKwFDfQS13zD4phxjV1eM1tQYCkf39rdT",
  "key32": "2jfvgf76Xd1MTq9nBeszzhJHYr2A49wZbgtkht31Ra49SNAgXsihDHussQKccoPXgiBjTvUWYDzjTpvK9DYpRe7x",
  "key33": "3ed1fwWCC23VqfnfJuEp7jduAJisbsAwwgMEvLi3qPdgDfhCF9F2MCogGdjvvzbyCgXEYjKsNU1grLEBMXQDdqeS",
  "key34": "35pEDQoRs9gPeYzZdyTymjZf9t6j1wC5ivgLPKRizBnw9tXaDgRWrcRJr8Upp3HbvxWJsYSQs62NkatopMJpnn7W",
  "key35": "3rwLqbnjGskPHV7gTCkXtppUcKpGspiA2bnYN8ETg4ymuSaDognC1XHrCDyNqZSZG2BTDgHbsCsnzt1HpHQRi1au",
  "key36": "5AifXYx4NR1LRiBjXzXueXxaiEDgDEm23A3tt2Hz1odacw7W7f2VVsKz1hRyDNTAAQBJx63FRAsQDW6ie4vAT4TY",
  "key37": "5XX4evpYc4yWFcpSjzt2vmbYwpGknBAPxjtzNoHeoUpnR1hmiECeL2ZEzqEudd89q242kn6brTVnzmYqUqzgS7w8",
  "key38": "3fivMV6wjbGdQ6ox1bmVqGLUwsSH4oYVEKFvCJBheki5gkYFUXBEhFx19w8kfBNERYpSy9c9AuDsb3pASt7rwxUT",
  "key39": "2WfvCxPp3CVuR5q4pY5PgadwrMmhiCx12XWu5CxAnYC5Fh9wD9K1s9bD2DGaaVVEHcvpHCCiQ5ZSBY2gcCVFuakM",
  "key40": "4KozsEX34aMDB7YXWbcFniVTobsBoPBMqvjQ25CX6fWYnYTwigTH8UvMsu4SEAPadjN84uL8SqcJTzthXhJndot3",
  "key41": "3N1LQ7ay9xzfEu3rsP8PKp5kApWbK1dRjH8VRoBSfL8NBDYiouJ3WshbDFgGpDg4CGcWdF1gyKyJsbDNqtAxWdwp",
  "key42": "3ZTMum31hdJs3irDEKZrW9Y4AZBphNGWCR7faasSi6g2Rvcz84f3oSvxN6hdG3keKbds8VTSVYBogc99H4GFVqMf"
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
