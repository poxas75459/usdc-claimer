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
    "5Cw1xHi3wzufEsspXWEhBYUsuChe6GLCr2yjSL7faa2yZHtgyoFJEzGUTcaQgrRYZdz9X2j9mcTRcz3zjbC6YmNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAxHKyUhfhGdYqVpVChfr3Rb6aoZg7CyDjqPuxW4dW6JGUzDmjPjNNwNvASmHipmAZD2nq2NpstENeH4WyRXWea",
  "key1": "2oYd4w8147cERB1m5T6YtFM2gioXwuk8eUPwBhEJzMkLozuHTV84AouQ9Jgv4PoobqaUUW9krXCfw3RaCTYfd3oV",
  "key2": "4R3QSKByrPNTKYHYtiYdJb5gzWsKRCJR6RGTdkG5bZiLX2gNSE4EShceT19JUsDSHEjQDMNXua1LfbM3eoM3j3cT",
  "key3": "2PUPScHJLsM5bZXkLHyEPid7nJ3dvCwTpjrLzZjPdriZPHtuHTZz334CjWDmT1fdy778A7cjro5kp6ecHeGj2qsf",
  "key4": "2Ba4gAjGs3GdEW5QfSD3VdSc4vPcdLKatz9Fp34RD53LwowMHLAdCjjnfawUBXoEXDTJGjhyu4Do588dqbmPifCz",
  "key5": "2x6QGELFs4Q4Hwr6aH2JFVdp5r5KF8LaVeuz98xRnqdQK34DJMonxDvj7gNX2p4MxXhvCD1wfjczc9jC3MFnMnFd",
  "key6": "2KU761BYu1uK6muPucCjW1m2GZ7nJGzDANwDmv3a69uuAr65ywV6EnYAJ4DzJFre4t1HWJGH7qbQFVBBY7MihHeA",
  "key7": "4dqPmJHswoGWUKkogtctzSJ3JX3WqFV1kNPthX4xhuBfqKJZNmVCzjHoXkn1HWTsJwC8iUG4MrqnVgCF5E94X9Pe",
  "key8": "V5qk64wY8MYUNsEQQuNzE5Xpnxu1Q68FnZ9xdQcQkhn3ocM39dXELTkHhML4HtGVqd3LT3zYKyM5jMgjPuRzWpp",
  "key9": "34HJgFc6Bj6qAj4tR52mm2t335LBjmdfFKbhVkc5525Me2hkd2MEJCXvKhchxsyg4QgqrPDw18ryqNoi7UvSQX6r",
  "key10": "47yL7ckZL9jTCBQiCGcRTtsnPxw37a2jgAsBuSkPvw8VNL45187Ux7srx3Vk14oqmkDnbuJH62aEqaxkfLVgsNJQ",
  "key11": "3v2JeNds7JMREjcf5BXd3pzSWUMqsLJXbtoVhdFtnyLrTnYqw5dSzmvVY7FH5vjVhhRky7FN4JTmrEtwCNBq3LY3",
  "key12": "eEijJKJupbDy8w1V556C3pTdyzvgLEDdrA7oVxhcZR3sNm4Emm6sxAdcMgoX6erbZGH1nb687poBJVX3tw8uCGf",
  "key13": "inxW6mD4weYtDWcZFveB6edeXDCXEbHzW3Cbha2cNETQEkUjSWTopXFfuPbNTyB1ekN7YtUNeh8GnGfBr6TAQip",
  "key14": "3v7sQbcnAMjxbDgZ5pgQkZKsTL6Ndp9q2jwLii4vtcFTKXVYYqoswJ7EA2QysTF2r42ZDSyVtHs7c5p8R9tCK5aS",
  "key15": "5yd66m7cVwhNmaG5dM3mqDMJZ1EEdALGxcoC17BeMBa1MMRAXDPw7pMU5ZSKqtVHe474Vk6Z5berWPYCScUYRRBQ",
  "key16": "29LT2LPEg3dchbhgC7SVJb4g4QzxasbEW2v1PaYKXej8PnfaKRBhwgrjL66PGtJWG8XFfebNhBBSf1MXSMMbmeKV",
  "key17": "3SF3DFqML7BUVQHKgvmfvWr8MQPkhXrx3L4gjhGw4wJ2w1k28b5YgAnRSa5jdhnjiHKbyLMKJJf8gNtSBD4GNaL6",
  "key18": "4FEkwQEhu5in1MEpeNHcMkxfNfBBy72DBATuLsavAm8WRb98QtLD2hUiQPxxLTUNj77TY2MJ6pcCchf8uwGUjvdP",
  "key19": "3Gpd7L9bm37jHtN27YrDTSx7Pen6nc4KS1H5hkK3pPyAwUm3EyRHFz3FNYSPUdBDs6n2jAZsxXv6oXGjhtgow4wA",
  "key20": "tH5hWEQKYoKcfJdCz8X7QboSACAC9EQZ79uwYRQb3SCb2F3i2xuQXzYmNwGu7dR6vMDiWfBNB7F2oXrbB77BCmf",
  "key21": "4V8TtXRtN6RYU1tkhCT5viQoT2M4bhvXr1qCM34ayQNHH6eUzGvNGzFh8PUCWYdxFmSCH4T5DccaAiRHhnshsNzf",
  "key22": "3ScovmZ13gGHwGemuQreFARFaqZgbae9zTgyS39uunt8Ley1KXoytHSubMDu3yG4ye4oPTMPwvpbR6QtBovzehK2",
  "key23": "4KGHyFHr6gnLaKB3WL63wUL1mjxVRGfCLWMA5YMsc4z6vFwc6mhJGCCXQAXW4R6YX6aZwtw1yFQWjLUma5mpuhkj",
  "key24": "Lpjw2qc3L7tZrddkUtnNuN3ojz3CkPMCH8Y4cuXCN7euySTWFLErZ4aK9rVwEiX8SwELLiLVwFH4ZQ7AZUgY5aJ",
  "key25": "2xnUUYo57ixGbEtBD66LTDvLmq3k6psaQYp59Zg4XuoyAUb8WGhFfEfmj9yebdVR1ry7ZTeEUtxVL8vGVpL243PG",
  "key26": "F1aQteThddeYDhBFT3MhUHvqxmxj66CTZAK91S4t4sZxyCPm8tF7CzgNQVY72yaC3Sgx1ka6bRzG8HQSvJ8uTcm",
  "key27": "Pb4DyXgmX5pux95XomSSx4e2BABGneBzbR3RBkbRhvdocWcJaqZwycdMYL5XyxZEyXqBbauQJTHuBnxXiKUDJSL",
  "key28": "32HTWVdo7wnVdxoLCPHriLJujZHaKG6SWFD7LgQBx31NAX5C2zBAsjKVuGhGf9LsvtokRvdyGpnBpq1gCZtvpZAd",
  "key29": "5mxkHzH1VWGqMrf8sbCwtrcDQDg8wRX11ViY9XyjnYdArQ57DPzk9XhzEzStzdRYmcbiNYjrChof9eM11AQnvfdu",
  "key30": "5oruHdZ4EMwM9dXRxTpcdzDTnwBrvKqSy4p1evLCxc66uH8bpvmctbECt9NfjaxGVUzdvp4mBs126VLRHXYv7d51",
  "key31": "2tTaPTaQqu3N4H6kV2mwJk62oiKmC9vBLpYF9ki6eJAw98EQZHh5yKyLJ7JRqj152RgLji2VtbirT4og4AfrTxbS",
  "key32": "4rN3Xz9xbQSoWHCVea5jxMxsfDxp1W4bfX7f8ipG4RfYzDf8hdFM1LXBKshun2ZfRzC25AYU1Q7XP5ZQLstkN23k",
  "key33": "5PARpQSL9eDSjjFVkekAxBw8YMBtmzSCF3k1oXuRWC3uyeC1hqsqdwk5dzCxE8PoH6CRVPFsxuEeChoXWe9yPEc",
  "key34": "kirue6BZCpHCrQiWiphKsz7UQpCLb9iuG3qKuTDn5DjzLPQXy8ChGU4e8Tipw4PMP4YQFJ1ou3Brc6qTzxKQqYe",
  "key35": "2SAYGZxFiTcnEoGeaNp4eenJGv5vCH736jfmt6p5cikNnumdKsxabqCGmhbkXoJ69pUhHhj36q3Sn5k6FhQ9XSmN",
  "key36": "3fqwZE66eKo5UJRMj8dVFEtW1iJF9DA4vYf6gEvJ7eTTtQo2mvHABHkKEenKcijQW6eKGwHnAmLeeYsQq1NAymYg"
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
