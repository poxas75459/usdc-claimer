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
    "34XD4vAc4gaFg96o2NhyYTiMCFi8pUNmzy7YMJF6fEsxjMT7Qj7jqGX9evXWpFPdadLLJhNJEyX2UrP9sDgJ1cQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FYt1L58PUqHSAKfYfGPd1nq4rnTuwW91xgxjkGW1xEJFy7Y3JSAY5QGCZ6vtWb9Gap6J9mKoWuMcb47uSaqYPs",
  "key1": "FBTbkdtv2aTdw2heACc99o8B4fNHy1FsbpEDjy7DX1DNrejhpw69PhpszECf6YTFgEVKqwuN4bEMwqjpymnSJ5S",
  "key2": "4agvGfUYau6deTSBTq7N3b8fKCjQffCYDVUiuyB9SKpg2mXE4ut6ip36NK9ywBHGSUAruLcMMs6Ekba2yhFoSHFZ",
  "key3": "3FqULAMvcNkRqMTKBCLyNzTLcFJbhemRjHuMhMMezFoAYEe3p6N5TpvvyTmZRcfaKztPFCoJtbw3mM3Dhe93sign",
  "key4": "4rZQ6LLeYPSsFrC3QSva7nDRxH636qRMz1v4xSB6xXDS6a7gKszcpB3U1Whkp28mthvYXeEhT2VGpJiPv7MDATxe",
  "key5": "62sg5kuqx31XkDevStAZXroxFpSzfTnRvsX2xhZggLjvJRZn7Vn3Di1HXGqKXsd7Sm6dyjfppFuVCWV8eJGk8NQB",
  "key6": "2eax5BifrrmP6PUxZxqXw5a2kR7Ku7MXmhZ3yuK2cHZUjkwaAJCcXiiRFPaEGi3rcSRHEeqfM6ehFeGRwKiVUBX8",
  "key7": "3gPJBJ8V7Q7icPoDT5iBFUXy5PYvjrbfed4mQk6D3DnQnPYqbQZTFWpBtQWm8JraY2YmonT1sjd3z88dcvh6f1M",
  "key8": "4kMp1oGN4qiSuibKsX6CzmUQet3fPGMDbp1TJeDYnYVG2uYXfgVa6S8GvihWfJAhXAHS3EivyYYktnCe5z9d1nmt",
  "key9": "34RWh6cK2oKrNMDoFxejN7ThsTHVMeB6ZNpqyW6JZqy5qWiAR98iL2vnQHnhnvUeZ8ouMAA9CNRqrseV1qZhSjEM",
  "key10": "4DkBJnpZeAK7EfTcCnMF9LcjnzNipC9aBtyJkBzEM3FQuhWqiSJV5VYKLeS4X3iSdfcuFxXwyAJwj5kqcJTZWSYE",
  "key11": "2Z8i35Lw9YJYLmZLoD2YFCdgjTgmTFgYQjpwfJTZV3ZeroQmiG4Jzh82756uVY4SSqk6doyo4ZodAevZgxhckjHW",
  "key12": "2JseXaRFyY4scuQabL2vRwQsyiVvhkwHnp6bBgHYBusZa1YXTpozf8GpjkArdDiRd6CVsiYvPnqEvs7RKwzbc55U",
  "key13": "658E9Pd8deFh6BMx5rSEefLwjq5tk44JRAq6VEQfTNkCrEUHPpKwF4HLcDmTT7VTZ3knFkxSe145jd6vDrQspNp6",
  "key14": "3LshEohhGj7aMzjMAdxKjc4myXRsBCf8e5Ev9pEVSxvk9Goyrfq4sib8sjzGTMHoWDWSoi7Vy5tRYgtpnFx3BGVo",
  "key15": "3Y9nh4bxLDat5D7yjDoES2URotvy1KaZTV3wVcb2x1GhyK9q7AjD6tu9PJrh6S3Njch1bmN8urdm2RDvME7A1aQ5",
  "key16": "9NeeXvwPEP7WDkE3qV28vYTom3uduehxfncN9VMP4D9RHtkQWxJZwwrAVst8C1nJLWzP9n4wPtPWPVDBE2Y23VR",
  "key17": "27SNkiDLYxiVFGLUAGUoyPq8g6dXJF9BKevEeKBcdjdY1d2oaFva4HHzU49QfDo8iKEDQs3vuGEgJQVJUsV4v6nQ",
  "key18": "3Deyum1vMwLp19KKy8X1PGu1cdBH6E4Kd6Y8thdEYYnAknJaWgnM4czGRcjbf8eoD2Syt2zHY4vWrWrVfHSQGVBG",
  "key19": "zz4SiwSFMAkEXfeWvSSDgtokjkeudfKzWT4F82WR6W5w53S6TC6GnrSnVpz5TBsH9dySuLXSJUm1hoz99NCwUPK",
  "key20": "4qoJrULp3WJHTKTk5Bd6PBveXQrYCyfAqiH4eQwt8RRWGbwMYbiDDRnac9JE23wgVKAQ8mTVU7HWA4uiiXVrRrso",
  "key21": "2YywAWWdmzxP9P4wTRHoJA5v8R4NeRK2oPzKPJXapvWLjhiiEEodXsdpqzKYeexUQGKeLq4N3S4yn28MKJNuE51V",
  "key22": "5vLgBstxqEsX6KQjPvBCcL5z1thY5aHNNmWgmuVB1NHg2iJc4ASJvr6W8ZL2p2RnuVXAMYVcWMNtNwCSwnV1wg3y",
  "key23": "31cMnMQxS5WETCsWkvdJYkPY64Kw3WiGKmr2NaqtyNqbWtRtxqyTPTqL9niaSfhgCQhVCyjQoRHiHefjXYShLFBL",
  "key24": "4SnKy6bo7r6ZbhaErc3k6524k1YErhMNW3PM7Q8aLZEU4X7twvEgXSoU3fC1emsfmLF7kpMEmJe7yWPSj4jqFYrR",
  "key25": "2ZQV7QUNNF45ov3WMwkH6zd4p9wHFik7ax4JNC51MPYkf2PuM9NctQwVtPzLwmGrHZ6kaVbfefzTDyBZourXfnF5",
  "key26": "3tgi9ixnNKdNBDwduVvdTNASJhDjRg5WqGjimn8YiAC6ixmG2yizRNMCmfYTiRSwpwZbiqLzZsvSGzNDDSStbBuW",
  "key27": "2bexHvmonL8vGSh8VQJffgo8DubdS3JSEeRnbuak9oEYs85mKYqnMTNvqX14d6MXf2kChbJsQkoZMv5n3UYVEUud",
  "key28": "2oErw4oiDGz92k5X4C7eCQFyYJsuS3JxuRcjjBorU28YcdXu35fDZCu7MKbXm7V3mYyR1bdJFJMe2i5VKZcfbEFP",
  "key29": "2rv4WX3BJvF3vwaQVvdVtAw62kf1WvrwzybFyo5xWk4DnePHjnxyhn3A7ui7baW4RBG1D9QTMAfFpZfbMAHvQ7Pu",
  "key30": "6kRC5gEG9bayXmNqzDTscMkH1T5zKA4WbkeL8NRxMgjttYMBS9sXfEj7vuRH78r2picSrKZuNcU5ezh9A48rPD8",
  "key31": "5RcyHZS4rcJXP9PNWUUb7SxB78qLZkVVBn7BweLZWRLmgz4bUvUh1GZDcqiXusnTKimmtMUrwryGsZZvAVQeusx8",
  "key32": "4hbomdYc5SCMGXFSDP93HCAtU9xnSCm8YP3tscMhHFtNRTgnK2GQL9i4gLvjTYEdRzz8nYDtvKTVRLzJkdZqTd5H",
  "key33": "5QXNv4SpdxWS642mZFQe4XwC3oqmAeiVhGsYpQjqsMKbGeXVemG5HLor2FXX2vJv9vuxdzfwbp7tfMhZuK2HQDPb",
  "key34": "5YuQE5tuZkU2cYir8CJtiNzba6QW5tDw6W2tvoizX6tHYqj1dxtdLvX7b5K6u1nyyb76HhK2wVc1yNgbSNuicoba",
  "key35": "3sFkhWUjJd1dhe3EZTycLCtFuLkZNJqtFHcumamRPH7uMGYidpkp1vrC6pA3sDW6xvudYZCQF9CaApUx53an7S43",
  "key36": "3S9AZirkxb2QLnQbfbN2hmWSum8tLVN1Aja12zp5QuBB6J9FkvQGuPkM54dreFYCyah8pRBrVquSiw1XaBA78CtE",
  "key37": "2jD7xEbZJLkW7FmsbVHzvYpBg8isqQBx362R8j8g7MBSxSK2Fcdx2wzsACiGZV2WLpctJmEdMeB5FYdJvLPMcPxu",
  "key38": "274yFrWmx5qdQ9rFqGWkANdAEHdhGgC5eRvJyevJSsgkodK9pVcBPg2FeJ7nNTDb4qYbVDNgTQSvcr7NeDXqikDJ",
  "key39": "3PixKCTbcAXzEg5MpsHr5zyHVHugKAVce4DyregPACZB2Kdzu41RdwxtR2W2WhwreJHjfMBh1UVkQbH8FVW6AuXf",
  "key40": "2z6diPGrJokdPkirQFGW76amVRGxPhmtXb2JH5nwY1SUn3HkpsBcT8Q2htriV8iSEJr3Dppm4L16rYFhZhC175mJ",
  "key41": "4muHFFcxoQJ3dFvj5fcNhBqj7QTKjQW1qoG61nTExQxikjAfii4Eod2C8uHBgN3HR8oRTLCSs2oE6ppUcF8aBMx3",
  "key42": "2TnQ6yo8VMZER39kBhSr1GsvPx7VGdw1MPjRRuZqMbCAfmPDmoQ2m6crc9AZTz4mjESULSnS648FMTG3Uto2TtU1",
  "key43": "5d4DHEnaG3WM6kXJtqSGxBmUfuAVa6RnwEBebjjg5amJFxZshkKwTuhxdycWhzRj8LSjZHczYNLTWG4VxAGfb7tx",
  "key44": "2mdX8DcWqeGcNSEVHJzRGKrxKwmHPvra7kgAtowM1dewn7KpjwFKDsueLnVzWD6uCPoxvUSMbdsR2FTqueJNufHh",
  "key45": "2Z66cWEdKJENkgZ8wTHVhEZeTXjZLqzbZZWAfNVxcKR2US1UYyADWohHkf9iy6qDRN8jqroxyrR3dahbEgcgUpDn"
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
