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
    "rs69q4yPjDMMWtmGsqKyuGg36Zj6zeumwSZMR1p7LGdw3WRCWcd4WPT9CuZ3a11BdYQeFR8dyyjbqFc9S7KcqFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wePCKf5JDXby7Dx6UBd2XSnf9Y7JL7vzg5P6oWmmJtiSWyHxVXq6KMCLNnvZntfo4YZatKSiWAWrJujKA79LM6Y",
  "key1": "4E2Soo9hNgjzVrrJ8fvuqg2QYicwEWHDFiMXBnFaaQed4ohko5n8tEko8Gv5VDTthC68DjSieLjXCLTUw5K3PF9b",
  "key2": "5BFK8adJaEbHGBthptjKVDAnw9p8wuCYDKQEcQq8QQ8aUVAxJcHtQ1HVoM5LaECJAvrp5EzbQkkpVWiquxuTXi9c",
  "key3": "4guYoNrbPFs1h4joMEt8canss4hSd6AfmiRMHRGBLwgCRyhiVF9umjiabkeQNsVLZoe2Au7uciiKGT3LyJEsxyMf",
  "key4": "48DZaQvTDWNTPxKNLp42vmou2BfmvtwLAFqvM8nok2aBxb8DfdPz4zCFYEmJLvGRw1g3P2fsrunY8KQ6SBMrvPtz",
  "key5": "5hcVWwsrwJ12Juzizdcw5vyPKfx8iRFP3eWurYPgN5ewFMAPjjCqj2vKmwBDBPvqXFG94VHQeaMDv2Z5SLmRTcDT",
  "key6": "5SD1ehkoUWuivqv9keUzSxUc5YEZpJ9SN8whFCawT9AAe1YtgaYdeWncsvdsf8CL3Vstj19qs8JWrkSYbVabLCqJ",
  "key7": "5Z5Kg3qYdAixA7jrXJ3JqHvRh87JsuWz2PC8DGfFmYPY8TqyH9wcuYec3aSz8hohfNputsA8GqdYZeUnpq2ni5WG",
  "key8": "3HfxXheww1aDHGYJLv9ZfPtNCEfsaLMfiACJ97YxBvUS7oTqd8fW5Qe5xgp17cNt2o7xztkeNj9Z7eNVLcXbtkFL",
  "key9": "5ScWuBWJmKVDUuc5pv9bFMauRkQhmJed3B6M2JpXGim65w9XnQmMZMn57mUXWYCiZu1ejVNFo1cAhZgrVgpz1bKi",
  "key10": "GZEyLu79AT1sFjLNSPxggujhWtUYy2YLbBWcJD9Y9gjMrQ4SezGcBZ5aiHzaFzF7CZQffCuXLPVJ2G5k6QpvVaz",
  "key11": "2WKxxbhnKxtLQQw1QV5hRgJJaEkePdrkoTVPE5WmEyGeRk5anycKqfJScYEW2FGSRTxrQzSVK3HrqtF5sMTYQKFu",
  "key12": "2vRLrMN7DwsTx1ic87j3iMzGmVgUvh9KP1UXbppT6bnJiFp6KtM9Vg5Ci7d7BG9Mur9angjs65iapg1V2yNEmtvb",
  "key13": "65ToERk9vYfKyeqLFaiBvnA4b3HnH98htTd2uvU1XoFtgcMxu8B1XURw67TxCMdkFuJ66PGBrJGRahJiJs22o7N3",
  "key14": "72hUtqX2bKzQTu6JwMr6WkEt6xCSrKJSz4ydN1BGP2motoD8tsv4kqaQMq2Ha9Z9bT9VvQRHaqb6PYNZ8vfecxs",
  "key15": "3Tinf1Lij4JrR6xRt8DEjYuWhsYuKxPS2rmCNfL8uksYvPrDvNhwB5jqJQnp75a1gs5fi4EHrA8oRzgPsDFhgYiv",
  "key16": "3KakojCuo81iJPTbr677GFeSQSY34ii4r81wgjrDTkRbiigA6T7J8jQXLHEyJMNiB2mAVoLP34Z9ZtJEKo4q86Gt",
  "key17": "3i1jYnPe8tqr9cRBpCREpc7FWxHrju9AARZY9NyKpE6AnTsUWKJGWE2HLn6NeME2qjbosuikPrYnhXsSrp4ZvWht",
  "key18": "iPzHgfGz16nRrUkuGbmhNYYVnE1JXxAYL5sysZQfX4gkrfsSNwVtAkUyWgJE6FLsFvKawwgqyAhc5pMsTgCd1qt",
  "key19": "3jNBhef8qX4R9cDLvUCfkUcSnb9tovXaoxfsNeZhAZiWydCkN8W8DrKwhvWaJQ3bLci845bqVPzHPio1E2pXoZwt",
  "key20": "4TesSoskqVxberTHSxT2kJSXv39WJo3x6bMkEB4XUm1zwKC3m1c5tqS9trz1z6au5G3A5ATLRuhrDXxUc3YoMkbh",
  "key21": "5KfFjMFmBLKJPWuAr1BBsMyBRmLtCtHiMGYfqRwXefrioj9ZqMGLVLGgur4WHE4fzAhNcttXAzuVjUTwLAZgDP9o",
  "key22": "22TmAmXSLdvDwapvy8YKeo8to3LLXKyLcRYfDBX8YiwKCJSutAyraEmzrmwoGEAiYEHSwsfecjZLdZTSLHvNde1A",
  "key23": "216Q7355nhEQu5fPjqA5o3rb9N3JdckJtWLX3k4y4CrNvgF7Z3u7b1SVfQuSQxmhzFKwyimyNtDm3V9jWipoQG2t",
  "key24": "2NBQ7A4hNM2nTRq5qoErfjNmXH3yhoV6RAcUKd3ZReEivydtC68nCFaGhHEYStRALq4aRuQoo1DAbBXyDr1aGhp8",
  "key25": "4V1Wg5dfiQV2Qjsgd6P2RYfugUCDjngHpWU4mBdissAgczUU7BnmvswR2Docw6tJSvpq4fzB3e3WGGuam4quvP8c",
  "key26": "2uW5miRC9fpdPiVURhm8X6n8iQRoHtkqgn4QkQAeZJwn4FgwFm3D73RSz1KTX1w3HU6BD3z3U8Qwy92fZceTTeeL",
  "key27": "4dd7epukKVGj6DEaEiLDvsSw9hoGtH5kxA2YiuTeRUPaCBtYs8TM9Wk5voU4J2huhDWqExNkJbeSctV8mc4MyFUX",
  "key28": "5cUexZPqP7e1CSHb9LkPZXeLvsSwMTfchZ2b4v3mfCqD41AMRsPtHgieNBuHaRcAmTWPuYuzt81YrqrdTtRRzLjh",
  "key29": "dXQNKtGw7pe9EMVZ36JgzTLroEXPc6rrez2dLNqb48D9T13n5SGuQ3CGAsAYLLfCvHj9G1pSf8vytH2ueK3P1ue",
  "key30": "3qFtsD5aveLjADPvRXzT43A8y3AmT6QXvm5FgUjnkgkSegX2Yf33ukko4A2V7fF5teczTsiKE5yyjnNQ122o9kzi",
  "key31": "5dhS4cnc3h5xSa7ZyZvFV7t5pa4NV5cahkaDUahsB2tXKWN7WyYZCskUqi2KyvZyNTP3tfvPF4JcBqFzSwqA1hJA",
  "key32": "4w4RHUHiywA868jRqaAxzAc6CKJVysHuTQ1cTFJKwf7Y1ZVFypsokzoqXvswJqUfKtZJY5nb7q6m1XZnm1qUtjWL",
  "key33": "5MgPZj6QnwLwg35HHxVttfCg6CUPjEPm4iM9F5kzzSWPXaV5dhVHrpnxtzJj9rJsQHNyeb5XkrLwEmAuh4oAy3Ek",
  "key34": "5fE8o13kPHqT7CtMX451jeW58J9cjyfGAxEwHJdaiZvwQZTrAUQW79pzKtis7yUbeJBmBMhyBmRK3M9f6ENn9jQh",
  "key35": "2LH7RoKvVZQJBoMBW2MMpDpb6QPsDjYMRn51ySV21XfrgMhqB9apioMWvoUwaqpGWrJ7QVJmZ5UmY6s51hKqmxXJ",
  "key36": "2r1yVmB6BY8mok15qC3LuxmAXcdHTjqxYBwijw6jq8WRBE9dtP7pdBrp51p4zHYjHJPZNMVqT7WEdSbJKFyWBhbW",
  "key37": "zJDUg4bowQThhSEjMhpV297WPwgmQGaWRowoqPz8wUjKY2dhNdbokoRC6KjBBCE2pmLX8azWNQrXwS4Bobzef1E",
  "key38": "waxaEJAa4dbvjABTXf318wsDVtx6GkMy6DXYHzzAFNzz47DUVVWik9AyxftiHi73MNCouPQNJPJSRJabfAkVoBT",
  "key39": "5NWehLdqCqnv9LKJinC9Qcyk6EvrJ6m5rM8NdZi9M4fE1MBaRStK6tGrmGcdNa4YaxGMMRk9jgNPqh5UKqmgV3hV",
  "key40": "4BpgpBJKQHYyeyVSVfvRyAf5j8qcMiMoUTf49XDDCcEy8j7iZCL93QMFmoiwTr8J9attwM431rYheVyoeo3Li8jH"
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
