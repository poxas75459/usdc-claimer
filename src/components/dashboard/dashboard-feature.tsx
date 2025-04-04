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
    "4ghcN3RYHjPthZs8vCuh8UdLJYnA7e33qP2VdfyJ5McRr1dsnWSRwdRdYKHjBccV6ZDdy6SnmHVyDzmrjML5A7iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o6K1YkwsrRut3DPcgvgugXENdRoUrVPT5J5KXDpjVgg8pEk6j5LS3oN3brkuFthExY5SnuW1nqBxWWCPxTMS8aL",
  "key1": "5bXrZ5YJG31ho2pjRNg8waE1VRMEEeFdhUPKFiN4xgCsVBYGFy4G44Nf4c41MqNppKYxi2vKAXC945o17vHCJsBZ",
  "key2": "5XtAFrhjYM1qbA4fBPA3muRS45ohmTYREask1MsG4y4cRqmwm32TddZVL4XJ96Vf9Dvq3MP3HS3XjFHozZN1ARaQ",
  "key3": "2nWABfka7PTghWVUMmCS5D8MxkxqZAP78cGtkatvSxwwydxggedJyvYjsbpCgdEhpjNqvoU1V7muFf7Ytua38i5R",
  "key4": "2skhijh3BUPzrkA1vMoCuisnwuZwYHjuwGSMMMeC5C3j26xDFjZ9FsbCcFrbgchkpva7Hooh5CJbzGECr4QkgjSn",
  "key5": "3SiWkoa569tQgfAqMksk3m9qURXpc9YbH69DGQN5kYB8immvPxpuLdUfxD8JWHSFKLdzUjGc1tYG9rt84xjqWo4J",
  "key6": "u5VL2HGsicv6vFELjq9zvgLtffHxcLhp1tYGiTzUbi5eGpbR9ZJNApCW7JrmjW375Kh6xevo5npnLK2WNMAt4kN",
  "key7": "2NgwjUaqrAzp2bSJJDrr2NZiBxdwyXGRvJ8kk4C3ziDKp2AzmrQZFqUrSd7Cd2oQunhdHNH17go8sJ7LHqca2J5v",
  "key8": "dZvQuPVckkQVMaMkd2c1ZH63wYc35gQn4krHFTt2niHL27FeC2g89u3a87QhqH9Z3MYXinhBNzyxYBWkNTiYdnC",
  "key9": "4YJgdw7QjgJdhsSn3AR1h3KcxDewXiu3mzoSP9vqEz2wUtGuQjuPLbcRKJ7nttjNs8VHfzTkgRsb52VKA7jZEiTL",
  "key10": "2toAQzfNU7jzChgd8D4A47cDWGrNeh1CRfKMKbvBTZF4hoC1aMVYDufbFyDm5y6iQ3evpC2x9FMmSov6Rg9q5gWs",
  "key11": "4tfUaMhxr4PmWfn6DHzxD2nG1gKQp7LvUqskAaEMF9KJFmwNb3uwpzRsrqo44YF2U2hDtTUu8pApujSrsc1ntXLV",
  "key12": "3cjAEi5vBLeLrejQjdjbCfPNKh5Fp3TSNnELFbUjee6JRBqFoQcC1mYBDh5yUMkxFKaLX8wGsf7dCBcycH78BMRS",
  "key13": "4rz6PJygu9Nhwk47taNkCsUZHTqGqBZC1C96rxo6LdMfdEKJAbS9fwRq7wfeAAkwgKxTUdKUXgsMSqXyByp3Ld7w",
  "key14": "3LGL22ifkUu2hFz9aqY9vZC1k2gwow1XxE1tYYKCGQfzruRQyMYqExNm8MyhsHE3XACfdoGcmaniVKt2qijRE4at",
  "key15": "5r6vLQk85RwdH2L8aKEu2T47yACZA2tiaba5JwD3DFFxdbe821cMaVRCDFQiaqPq8gSLSA4WQqsNU5GpmRSP2fwS",
  "key16": "4QbFSpAdaqRVWzvXi3ppXEYphrFUgJBz17ZobmCZttr3usWb9UFjV8wFH56tuRGHY25sZg8PypSHCpQf5Wydoxxm",
  "key17": "4trm9JkjVz4mK8SUkYxLeDds7whCvieSVq2TyWXc8JALwzCnf7kWa5GHT8aP32uc3sVNA5wCHJbVVXpoq2AWRyqM",
  "key18": "3LDEU52KED7Q4fhe8ndVVkiZMZKNocEmkbyyZVs6GcC2QcmF2ptzevgHWYoEMksAkuPpLm1KbqPfmyfFAPGwXZQm",
  "key19": "5bQ6x1Zg1tj5Bu7u1Mf8qrF5XhuezZBUMee1c3pvoEr7YpfkYb2FeYVy8nFqpN7fZd9QvbFjRSDYR3KfB6ASXaDP",
  "key20": "2gaxz2UgwHmAwhUt32ynpwdn8gTvKaHYELpZKByF2YsEiacT1pWQfkt4Vtuj67tRtWUzu8e8RNThs5bvMMRoQhT9",
  "key21": "4tweoDz2y5wF42gsD258utG7RefpZA4nXjRqRCGDj1MHoamXDuNC9edr7mEjax8WrsHMS6miH3EhgSAhWpMsgovx",
  "key22": "3FET5eEV1QyxLPCQZxxaL4ZyMuvsFqWym26d4gzYQn53ABgtWb1ZRUep624SUZhK1rqPX9kSLpYgqV3Mde86XQny",
  "key23": "3jynQZT3c4JzTyaMLM1we3sJxjWm3CpXjh3yzusGbWtPPGiPuuER6SKnez7KRUAwqaLNcf7DBvnkPDpKZbkiX1qD",
  "key24": "2Z2otQhikdUjfboqsny2XaEeKanm3Ut9fYxXvZwshdPPcus58vrL7YrnKGzPdPchYsaF47mfxHB3i7iiBrUx4bEi",
  "key25": "5R646Q9ddiUDum49Bd1hbtBdyrgqWmk5N45wspcTou3GYHxHHX7F8rpY1E3zGGk5qtopgvQvHtBY7hqVMydC6psD",
  "key26": "3jkS7vib3XmPS5V2Lw1GjbVGF4ejv1A6JYKJ5QXqHXZkamiLs98rHwGxDEzKcmWqse2u5Sjz89dGydy2gcro1sHP",
  "key27": "2Vrz7WVynufniEn7eFFWhiZhu24ckbcw3LnhiVhg22NTcqWKpqTeFHLSkrnG9i8BG6GkcmhgUjHW23bphksv2HTE",
  "key28": "3oCpgxop4nhETHqfg1NSL3qCSvag6PZCsCARCJNLEZ2F1G6pw2fVAA8Lrb3xsQdGgabk61BadCduDNQRD4zH4EM5",
  "key29": "2DTQvvH1c6Y9r3jUqYKRqj46Sdvsk4D7iM5h2jzAg5bDroi6D5534RnYvkZkmAvNXHJ59emGbjqrCLup2HpuMLDp",
  "key30": "4NpTqDV3TuHab3bY4WW9q2ZmmfY2oxYwk3T2SCMrvX8NMW1Wz9wDvKdMDLFTyGQinef4A3CmkK9nYeAuUBSYFjYw",
  "key31": "3b6g8JWXVFGxdYXYqmQ5qCSPgvd8rERznN8dJF6rFFRWvFUg8A2JGCUf4mPxT7FbXpPRA8G2gALqdg9zxESZ5kVG",
  "key32": "5WmePHEDJKFBLTFMqJ5PDwhgt2Rzxw5cHMksemUWkTshbHFjDP7uM7hKQGGPQwZ3EPkVt3uxnwkMGzJ2Fw9SDB6t",
  "key33": "3CLKxy9asH4Lu5oYb7shziPREe32saihAG8QQ1uF14zNLz2Y458Q2KckugVuTKEZTerdRKBq5PbBVbvFu1efpoo2",
  "key34": "3ABWoJqbSL5qch5gsdwC3LjSjSfzZ9xwd6kAFPAsqJRQ5uz33hx3r3Vc8qTRWQdP35yEmAxNhn6nGku5c72nw8FM",
  "key35": "4uSTfJFhUacQh3bUxriZL3narVMGAjzwhxsgn18qxbZtc2233RsSQCSscfMrRLhGUTrah7xgvEeXnMaNL1xqhzDX",
  "key36": "2Y6VXJS8ZSGc8SXhtZGzxDND1FHq1dJ1XiPUn8VP4bwZEhZor8YAeccdD9cfqgXGCUNn7fggUoPQhKamBHvJoUPa",
  "key37": "5nKVZCaAADVX9EZpdrctzxbzpeNmqDMWf3z3rT8X6LnbNrUJYPiHQAQgeW8KWZytpXYvtPMUMi2oUvf5wbjS1Kgg",
  "key38": "5sHVsuNrDdoUQSSZaciLykZ8Eq9HePfLJkkEomb3MNKqjVWamURTvzvYG1h75xsqU7YjfLc21zShRuSvUmcctHih",
  "key39": "397n2gmLjBvK7aizfzvtwz1rBbuBSh9xNeURbn93tGHKWqhXiAKgJhUVFmU4rX3zSDs22H9ckZsSjc2g24oDSPtz",
  "key40": "4R6nR5NzJrBVs75G5E3DCebYGkVBnJwFZdXzKXLCp6ZjTyXJmBrGUnNhQEgx53RVE4CrhbMB9hK4T7yGtL5icMrs",
  "key41": "4znTYs5sC91fh51gnxc5PrSVn8xT9JUv1dcs8LTpzZgRMGAChhMjoz3BMHLQnFLaMbaYZo39YDNSQNveTFdqQouS",
  "key42": "3CdfT53Ra7Y3WUM6vU5q8py2ytotHbvWLDwBzSpnjKncqvdqQUTxKTYUV9WCJbrwuxDFttGJyV9mhAJBAe6MK6ME",
  "key43": "x5yxcDbjaa8Rs2MKh8YBMGVs4RLwWMpWjeUsVMobwFwWNkyGgV9FLFK3iQy6rzV4gczvDuXAta2K6zWEy5fP961",
  "key44": "4Tx9hbSXk6W4d6Mc2tZg1N2UaJkAMwGvYGsvJL1Lu7p622mErg349fef6SXGriTUwPNZt4LTcPrhf9ENx6sUSvgh",
  "key45": "5UW3EnwhX4emZRYdjQiAi9jYCPLcFpv7PwZt6ps6xiFVtwBfv8usNF1SJ4JWhx7xJjKEKNKQnrezJgLAsiEeAeDz",
  "key46": "4fq7dU41EEBqHMB5722iLSGnR6wHM6pjagbk83Xpm1vVvECuN4MXu333fcRbhjPnbbPRABvwZCnxiVpXcvJxYT5b",
  "key47": "42jT69qBK3xtk9AuwHstK3PApTKsF6SRnX277LqFw26wtK7y9zQoM1vNBNwUG23QSTvQJ3Ayog6FtJVgcvJH2qQF",
  "key48": "HtC15TaWRcVKmwSdtxaYJqtXjhsLshXeTivD1Fafj8vbF289rrR6sZAx9LgtUzHGwxpgW87LYxF7T6XFyoyBmpg"
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
