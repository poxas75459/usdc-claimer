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
    "59BJDzjjjG5HXWvC2JnA9oNfw18YFEPaANt1vJ8omjfY8rhXdQjTAbGXZFuotPgpAKUdnAXG2nTTtez6QaHoct5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gR6o8GuVA8cVABSw8MrGQX6XZBGUJh5EgRd7c22FT3QC7W7PUE6c61snf5j1XR5qYkCh4VNzg8DSyFp9u52KuEo",
  "key1": "3w4b5PDrgmH62bRkDd92pzVw3etEjSGEck5BM9nq7aTs3bb5FkyhgQaveLsLLmppq1hGjjBjXz8BVsrafoSYKcJ2",
  "key2": "6146QNCHw4gssbaCySJLoBgFrnrfH7oCny3aFFVyDHpL2oAyGf7mcNt2d3AEmGVhZV9wnRXLFPZwUEvJAwJxdGXw",
  "key3": "3g6hW8QXShUkDdCkWDV4BPSEB8jtXY8WW8xUH7kfiikxeWggQ3ceU92pjdfKFHmbywdizrWbLuLdXKgPoNURsoGB",
  "key4": "3y38F7XTC3NU86ZvX4efn57A5fwQDdwvJMCig6rxrY9ZG6YionhbhACnbvxrcR9cFyRSwXKdPfcV6dxCWHZSaGTj",
  "key5": "3xS97wQwTkocXtYxEpBgaDaEYx9MkAapnbVpCxkShGa6UXf9gFtspmQP1Xb4uqZxYdYKHDGd8ZC6cYTLkCzt4yHi",
  "key6": "2QhGLx1YNu53JXhbUWW4TJn6MnrQ3BmBfg4RbN7YTpqwVPG5a7Q4eQtHxDgNGg6FUapEmdj7nKVEnDEgKXcEAUs4",
  "key7": "58RabhK2RJwk3598ioFUyyzBVMH9Yxw1a6SxTPyC8mQ2eGFXDnhQeRqJDA1ZVRLCqd9NRha6u8oLzaMLe43osFEo",
  "key8": "29t7rZV1Ghp83vkjx4vNRui9NoiY1VUEG8gPRqmAmEwzfzFuQ7FppR6kriLKk4LZQAyk22CKwMwNrMFz8gNPCTEJ",
  "key9": "623wiYABoRygJ3jGizGJiTg54c4Rc6eHtHoADTtJJpjzXkqEoVjuU6GLDV1G6eYsnoPrtzX2MpmNX83edwMy17eJ",
  "key10": "2tvyjYFTntCbXvPEpW9zD5KSUiDwoQMSoaiC6UiPwYn1pYGQKJotKz88fLW4f64qPD8FvuN2Z5zVSc85UEwRDm9R",
  "key11": "5d2MDCdNWgtMorahBmN4g5wTNx9YDFsDFFfARagb3BS4dMkGDFJtZ63KVRxFBxc1GPBrLTK9cunzDVJBLvB2F5oz",
  "key12": "4pqGcUaGpMNT7vU3UqKEsTLYWKBzTPiw9rfLxj5v8wVm1zTHyJnpUUHGiFs448aKMsboTrZ5shEJ59dVUHM27hn4",
  "key13": "5FHZtGtYMJeWPZSHZnWP1Bg3LvAjon72QF4CwYu7R2pYGsht7mgXUEe5jScLHS4xmgAUsYTaq2wdLZBGV5X5pVTH",
  "key14": "5RnEQsP7zXQxzGyKP4AKBYda2QhVgw6UMnpaUVit4zUZ1FuYV4jK9cqFq31RYLCCXtb6YPUfX6k9emptcTVE6c9Q",
  "key15": "2k3Qb1WiuwKWG65pr17825KHGM8iY69XrSNeRvYY4TddzZgZwrbPscpL9K39QXMMWrKhJWSbrWKTeqDzRezdHUq5",
  "key16": "4cYuTB268nH61BGxtYXQT3p8qU5GhwM9yRfvyv84yUjvNcTRrEA4KhLwQCXnFtVsKckikQhTDjgGFwhAe7GZKp88",
  "key17": "5ChKZADG5S3a7hvwk1HV3zfuGKAgSYqXexe9ecaaovgmUG4F9tErpxTgjx6szY8Cmjg6MZq1ajN8ZBhMr1e9nYbm",
  "key18": "3tYq5VJsGPbtY62HZY6s1t7SEstMKSJM3XThTx5nVNNRTLAzYDUdcj44ZjKNZiC5p1mxHb1NFm6UvnV7aGp6PCPY",
  "key19": "2b4utyxX8DkRryHANQtXgrxZTY22zxxT7N7nDHappJfsfj7AeKBQTdtjvypyMTKZtx2R1JYUofp7rJydawpTtpsD",
  "key20": "PSndN3VwT9m2X4gGSyNXMZxZjYpk7oS2y3gSTDGunPXbRFkhT2X6ZdU1F4MoAyv3cw3weGdPiSNWxtaheV3rgRH",
  "key21": "5jyLaz9BoUB6cPdybrGSrZHEbxC2P3uA4n6TsYGH8tmeTmqmHKonKdhiTVkrXo7yRTsJwFNwsscgvQF3yauPgRB9",
  "key22": "yjbLLHEQQypnzbd2fLCFpYjfFf9uEAA5kVaWp9JfBuinRzN7v57Eyf48QBeHMNcKQWnJNt1hKorQUp63Hy6EWcT",
  "key23": "35b9GvEKHY7MDHaTx3jTHmUbyiyaYKM5MiWiX8nQWkhNdcgS4wpqnUEAXWxeBwjk6AsUGSN4iPhC3An6kqZtKzCc",
  "key24": "38oK6vhuMLx5SHoiv3Lpm5t3aLfjGZGAqUdTytyZsDJMV2ouExe5aCiDarL7UN7dgVnz3cBZajHm9aXZTT7eGHeN",
  "key25": "4n6PRuujKMjEijfjq6ABUm47bYmPJwwiPLwtBvUSgHZSMWZipyLnZKLHcMUJo18ZvCDosULefxJGKoBx2KbYB1Wa",
  "key26": "PNr2skFBqcvNV31qz8qcmZ75rPaCMGQnxgyxuFPPWxzNz6knUquvyu9L4LLCDhPppekvTpormVnyhgLy2qLWHuw",
  "key27": "531M8yczvMQtpM81gyJh22BGBzHVUhzwyLFT1oER6hDvpiYy97uDS4pLbv4pLKM9p8FX9SP6FEQNFwDPAYzWEq2Z",
  "key28": "3xUNULEbUY9SbwYdAJvxbvwE2pRswTMJ3Fik5CqbrN8YTis2zMjGSvkfWkuaqKJmHBVzJ7KiPA4jQeqYdG8p5ffY",
  "key29": "Fu1p71sFj5EZKjUr6wzMkyc4SCZJNrdPiPz7wao8J6Wj2tGVoRVPsaDqF135a38W2QtGsyqh9AWP2LMgVv9Np88",
  "key30": "4rRcRrHPKegzBMfZsqB4ecgDqy5py4Yq6th6WyjeCnXwrGvf38DjGAnSr9NG2xAnETwK4xNcesSFX1MHj1Hcysvf",
  "key31": "59EJRnH6j1k9AJfWRexLzJj3fkwJzkVyJcHUeU3UijgDktpBeXErPP9J6iP88ZdpxZ45TrYC3wMXJBuaRQ1iauPN",
  "key32": "2GJSFiX75N8n6SKFGLt694hTmEQwKJ5b8UiQDadBW8Pf2EcdWRizN9EvhnHtQq98rcvRW4tUqThkqRqMRtYGLHXt",
  "key33": "3hcGnrAimjSkkGc6ydYgKqLwqBwXr3Lez5kkiFyMYg2yLvwXR4qC8o7cdS3LV1H1Dk26xAAuawFz8CMGB6LFEzEx",
  "key34": "3mvukgjrCjRnbaFn6HVCb6H3gk4YRsTxV8cZXJShQMzq6w3jS4hi8QqGJSKrRoyg2jbZ6WYjaMd4d2hK3eYu6QhW"
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
