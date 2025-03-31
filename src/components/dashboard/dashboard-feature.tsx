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
    "5RTMpaZhgT9HudoL9qFBJqTRzsrsMdWGq8m4XxKvFbGFm1FKLESFses7hWmak4wpjyoq4MKh6PnxEDAabyCx2PuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26b9j8eeTzhAJmWg68rszb3DKefhiapX8MpjYjjWyN4DboUh3m3HwYuE1EmGjVu7LETW88UuvQQwswSQ2uQiGbyy",
  "key1": "h1uU3RhkiTXD8Ugro4iv6WkrfrdC7kTfpejH7af32QrepvCRuGc3JokNMHgHi7JWJsXSEenB6bD8CUm9ppEvLxY",
  "key2": "5ipS2uGNHqbqoFCzoZT9iAkLPMxwudQTuNnuitst9ypaJaD5kSAcsBhDCSYkdwtb3We4D7MSTFCKjZhJDsrQESHM",
  "key3": "5mjvVWS3s58WK8oBc9SYr7MUw683HqyDPbPNogPqqbMFGNFJM3PRB5VhXgJ4gozyv9mdcdMhCCmQ6G1ohgEDfWy5",
  "key4": "61yAymFFMDQ8PevozHyWqy4xEo4URqRCoaGCybZXbp7jQEigJHf1RQ181cmUuTgu4gtbbUEN9KdmvkPRM8vaYoJk",
  "key5": "2AcJG8FJAzSMCr2xLrNKWcW8XiDUh5NC8TYwoUfm8KJtzkyiLrbV7Cm373boi2nyqqN5qzT8QfsiUmEgV5WwYqoN",
  "key6": "54NtG6ziGqUD5C7cE5wFG9ED8xoeQif24SAfJjbcvBtXDJYzTJw25FEM7r1xDKv3z78M5ba7c4CXTJmoMQtFM7vq",
  "key7": "2HA8VHDrACT4qXPdNh6u4x7uf42NUxGue1TGcqrFEZxehxVkRjyARQJwpdaNCoNbr6TeVdfyobZ94FbozpMWjCRS",
  "key8": "2iCs6TVAojHsiXkrw1ceKdKkU4ZQmZLJF92ZQVH3fVXzrWRX9RMxeSqHbsibWcCMKu7DvYBFAjXHSKkkhMGguyBY",
  "key9": "2DE4CCi4Wg1UqVZedEG9ZcGpaC3yvtS4NbR9GNtwsyb1weMfekHyvdg7oDc8ofhpoSSRzUpcVEyQYzZLr63PWecK",
  "key10": "57fUYAw8eZUogQbQrn7ruj6hJ4dxFeG6rKBxq9QH9HPPXWk8LZ8Tj5SRfjRLcybStRVsNrtzM5NtzCdzLDZHg4MZ",
  "key11": "q6HyDdd3T6bcLGknRgCbkeNMWnC5tnr4pWEAMQF6yHtWKYE9qGcokTuyVAHcNBa2jD1ULjYa4JYiamqf21TiREJ",
  "key12": "p5oUeRjQWq916L1dp7dD7TvAaLdo9EHc9VjFpNmEouPAyrtTzmt44x63YhBT6Z7gP2J9i3TSMBBC2fRt7LRUrBU",
  "key13": "2Efo3uWPsbemmGpj1osEBxmuwkRfqzEPMkQ3Ldwt2nkcvarFV6a3rdY71rvDoZiZJ6V8zwCaF8Tsi2R3NLZ7xVVx",
  "key14": "12gJWxYZsvQMLZL54fLt564V3h19G9mj7LsXrvoF1jvYd6mik1fLk1CTTuhoR935ym6ZsniKBMfuSxTtXJ2TGLC",
  "key15": "4qT9rAC1QWrZNkqr5zb6vPDabFHRQA7uv6MXGbcsVhjy7E1JGt4r49ZHq8whaDwPAvTXbPu4SQpY2ioeDN3fZAie",
  "key16": "56GPLutiYJRWCTzMaC14RSyk8WNgtMRNsgUsXMAjk3AiJf9oVWj8kkeUoEHLVmSjq8FcBJV1KQSHvhJjQKevnpB7",
  "key17": "3uzvnaWJ47E5aiQm7aVHTPiMhirukrzXmDoDJh8EnG1LFX7ep9KoxkZ5U2LFowbCeXhtWChNaUTKjwwQn9RDppuP",
  "key18": "91BV4JSDZic9nP1FE32wAQaG4GgtJRRvYgYXiWXBkLBmdTtnFPRHCnvJNL4v84MeCReo5CMpVZgscTTkah7xg7h",
  "key19": "2suYKPYoCtBhW7ysENJojxxi9V3ELKZJiskR274jgnvoJdoSb1ETTWAs9q5fEkiMs9kWBALzW4NdHBUuc3mqhwLy",
  "key20": "48Zt8XLxdLA9v9UUDEW8XdXRgWjoxJysoxEu3AavMx9qTarkhsfp6Zki4UFsYTTEjzZL23yr3FAPoNMCt7MWfYFE",
  "key21": "yiVUPysjTa7wjb1K6hJBM6dcH3VQhkGDavSyeXaDQELPcjFcdkq7SGn7b9yKEZ3P8KQg4a6foHLRdtaCFvyqvfH",
  "key22": "38AGcirGYKayPKTKxqbuG8fmVTR7YUjrUcRNp9czmzAtHs9MBnKwCxt6j9mJc31EHvZuuAFSsvtmk62feEKM7Rhi",
  "key23": "2ZiyPm36LoSQFBKwyHc57CBvSxqoZ4BUnrdeVDb98zXrL9praAi39AN52Do2u4ZiZ8M491jhLf1AupMHWK6QejBE",
  "key24": "42iRSTKVyAMi6xUtSeQpnBdhoxhpKGhEaCm3qsT2gzSia2eZBNEH2Y2qbYFw4D7gia6ASyWLU9FFbqwYhVqBZYxo",
  "key25": "5mFYt7AR3VDta4eEM7aB7XWeAAjMgta1fSH5n5W7NwqiVDpRL6kNq8r7r5eweun8jdAJ2Fv4GaKCNSeFzcoD2dEd",
  "key26": "4JQqh9JBcKagRFCiz4uJocPvW44S8K1bXhVvoFKse4J4m4WS2WMrvzwobHAyJtazFHUDHDDRtctnRRoxH7afRd8M",
  "key27": "2jW5S8F3XPe3GeWYcqEivxf2Xxc3VL2FT395y53uv617Ryg7KftUh6eJiiQXbcCGXMUfUxrzyE3UJqvayJuYQ3Ut",
  "key28": "4vbBy1eEcvhszf5Q9V4bVNq8RU5sfkWGmoXjG5abtZFeVSaWVsd73RFSojci3gJv8Pf6ripJ7gyJCuJwSi8AsnPL",
  "key29": "3Mh9pXHix72JSY1QY6aQQTMjkWqpnAViX8fbJpTN48Zd3C13nKy9XTXV9bge95mUcBruqtPYqQ7tnZhJoYb1SPyS",
  "key30": "3mh6FnRRxP6BxR44NvJ2rveEV4WMwkv5VojAo2TA523pR6ZT6Q6MNzHRzbNARBASBj1QCvMv52R6PHeXGoiGHHBo",
  "key31": "4wMz3kY5PGivhQQCrcZ9jt3G2BjT7kpw1eiSDaUH37VY3fs2pz8vqmJyNweGqoM6ayvy75suAkxvpGHDJAR5UCa6",
  "key32": "BX63tAMj8b82E6kDbzcm4EWLWCRb6oi4BU3wzvpzJv3N5i1vQMD5PU4aAbrf8GHLZEt6njzThGH2qFSF9DU2FHG",
  "key33": "2o81791knk1GhCR8kvoyA7tGyxHuCWyFkuyyq4my74HUeUPuzsifdKncS9DLaTu1WbGzuNHRXnsrMA3EErfuU1Ha",
  "key34": "n8F7w4S5n7BQ3jPryqQQQGgeXF1yfc4xrRuWRUhNcmQxAqzjYoWuxCHAeTgzhJDXGcWoHn6Nj7kssNa5jzLd7hK",
  "key35": "3y1dK4GeCayaiHBxbwzy51MqEVjPyxSn6iYKcM9d62m4Q24yS8G6matNy8cdmyBwKozw2bKB7nJ97o7o454p67Zn",
  "key36": "5qPRHwkunGkm1x4fr4TYiEEEe8WZt4PJNVjku3Z7z5ioZqGTqkcKW1tVN66ia32mUB57721STLgrujWSVqwAXZgT",
  "key37": "2Qd1AjAYU1frqa1H7PhUcSQmyvj46ZfhXTvno7V7E6jv7qUDV1ffUUTcMoZ5M9rNzc3Mu6kz3NhVs45Ve2iYiaRc",
  "key38": "61XHm55kfXTXMvpGhgX2Ztqowp3vHWzNAjeHewDLfqaZ3GfQJUW846TYv9FGTk3dAfgyof9CQbfMudHcam6vq5zP",
  "key39": "3nDXRbQfh5TBdsDf4JVFvFNiKDeCSr173oGwhd1tsA2CseBTUCWmjVXQ4gnXE9Vid4ojpwA24xPWwTrbTwUWWk6V"
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
