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
    "2xmntFKA5uC2XrExhMi5qqgomCHqXxrfscjFjr3bCP7Ahy3tXzrxwTZ85NP9Ps787V8hRTS4LgANAyymBdMccj6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASn1rvsaJbKer1hP54s3gQPPfSyboYuXXVjTYm79FcBC4azYJoftUy2eSBdvCt4N8ZR4txNKQyxukSwqLKLMFPJ",
  "key1": "2VJSbE9YXxvVWxErENAM3QEBUwoM3CkaR2GCpjgKBppZZXEVE4GUYhSeCW3c9LBx8QijJkM62VxKKVmnBWkbd3Qn",
  "key2": "2sQ9TKsuVfoC5QkzPfWpGtkxAPVNiStfz8LXqD6MPTvaJ6Yucuhrt2JuMmVgVKX6Ytc5t8TZ2xrpvgHAXHnFdkD",
  "key3": "2zkWLBHYJX5rUW8FFmunqgZ7fetn8mPmFLv7f6MnUSZ3rS6cbjinCy5XzqtCAiP6CHrsg9KdHckUNidYk76d4Et1",
  "key4": "547iyU39K8ypJMz6Cfk3TowskPrnUxQN6wkGwLgqUABX8KVdgqEJQYfdTtMtpjMRJfLnUARMm2xZB2dFyriJvNNj",
  "key5": "5dfQihEJhBYDLMzEx72hvZMV8VyAjHKuurRPxjDh35jiZXvuUNyg7gGoAxwTsdNWeTLF2XYGPgAHtgxf4SNGgRVc",
  "key6": "4PLZMfctiVcjWDeMpzJhqjJowNDpxeXx52jKkqgDqC93aBYaEftxonwDjtj1XbEZNo1SN8UZuVLLM2cvKdH5qYa9",
  "key7": "5j172FBU69mvEMLrsfmUrByZHXzenqZeabSJu4q8zzi26tWX7gg9FeP6YRmSkrnHgZKU6g9W7buMgpMsKAuV3ERW",
  "key8": "41vgfPzmQQyPZwZfa6q5pomqdkHd6BYunuesP4T18AC4xxD5pPnkdgoauBUVWRQkuofF2HGXF9kePotuJuFF3wxZ",
  "key9": "2mELp1rUuU8HH5AgWW7NBtJrfXgwypdHaTXoF86gKojbegrEM6xM6QHu6MRei2skJeMNYvwAVeDDbcVQxoZsTjAy",
  "key10": "4J9d4SiXY1DGtJa1gH2ewdrvBmXgNw2chWWNpu684kNscf8Z9YqkXnyWvGu86EjQqbsoYQibH4Ro9d2pzSUULg3k",
  "key11": "3PpYDhqw2nyAY5kJoT8x5GucYz14fyeddeKnR2JLvssRoiP55e4ydKpgD2V3yZBKCw8cYDbjRURR9Q8bcgqC6LcD",
  "key12": "2MeCZ8MWqcjJkEvFvXJsqVxoHnZuMqBgeUGPFjqrYWoR12mGqD11McRzZx7Qz6mPdnBircebkAr2tD3DvcTA8PAv",
  "key13": "hmGVjgFttJezFQPv5u8huRMaxsZL5T87B1wYuveD2xYgy5WeYmwQn7VRvCsZSB5oGgeT6DUEPi4PFc3nne5q8Pj",
  "key14": "4XiGyeK14e2dxvT5ZwQXnnDDWdBPtyLXxiU4HJ1WwD1Tiuh51e1igQYVZhHR6HuAzBjEMcAtTYEBtCgdCKrJZiF7",
  "key15": "38JbqLDBqiwmWdRsPNUPS7di4MRBNuLzwzq1oAcou2Kwm21JEQmd4SZfwFbLvwTFSfKTPuWEe1rJTt4TPqsodwKL",
  "key16": "63n2yi54Hq1UTd51117kzQutbJW6p2nGQUGQX5YWcwuFibGESEoudetsz3a3SKTs2fx8iMjJhSdoUHFZBP3BMqaQ",
  "key17": "5PLwjHxTtUcWxAdVVtXFomw6MFqcWkjqGRSuhX3yACzpQmzNJZELa7hKdRP2MHCdjoXM8RwrmrpzXVf8HBsWazjQ",
  "key18": "Yn9jY2xr5SJkTQSEKrPFC29bz3JT684HqSojgF4Wo4TWchXCZUgSFfC2JDBxJnSWo3EQ6BtWJVhy2cC8dgNfyZB",
  "key19": "4DosXXLfwETWHet6etSBYRHbWYDbnwCo49HWQju2LKJauvz7P3jRmnW6Jp7BkAqV5uaTY1LgHz1EVZWS3gHsvJHh",
  "key20": "5BTzY2mZHPtaAgtNQV3Jt3C9u8vhaoCSYUJPcNP5MG2yvevBj5Sr2UEwfDdMJYE9T7qVcvGnPZ8F63cHXAuzWcUT",
  "key21": "3aJeCcX7ttVWh5XX7cqo8xx5oTMUBWSGzYrfAvJj5nSFTZuNe381RgooBiP49eCA3CoEdJwaoxzGK8RdTkYQAZv4",
  "key22": "29R7r7BC6bWk21VVBsE5UPovnWayfbL6B8BKNpK2pBEAhNnr2gPHwJ5wNv1q9XghCxrPFgmg3jJChri52kPW2zeb",
  "key23": "4xjoeHJetDS99WEfoYaCHZ8wJVMbQPsTVuGzP6XHXFGrQKtZNjLwx2C9Z1hXB6ULjCgWauRerwr9AouEWt71DKXh",
  "key24": "vGRxLrNotqD5d5Pjf6SZZ5N4Wov1en2fb1Y2QvsLLATf4P5QjEChH9AzXTg2bGdkFvF4x3hAq9qq95Rd7pkxAWC",
  "key25": "qzBjvdZXPctuSED8apDGc493bRTmMKqKSeHERG8HrCqLgV2iRJ3eiAkB2g3K5R2Ssaa9M6BHee96pmve5BSazaQ",
  "key26": "bTY6ExeMcDZoKkHUEqvM9KEvGuujJd8JHg74NGwGv2kbmidMb3qvEWoP6xJKmSz9gMEdDjTCPw3qAVDwoBozdoV",
  "key27": "3FVxRDW1HVcyxZmkxvFLodDMYoxT4Svb9T6hfqAn1ofQhnNMe4a7AeTfizde5oy2YwqiR8Bv87nLjrr4Yhm5jMCp",
  "key28": "5qH9YZpB1W9f16zHvNo2UTCpdN2QV5XzFzfQcnugTYD9H41Pd9hJz8Rvxa7aSeDuXiti77k9bTSXUTM6aj5c1t1K",
  "key29": "3K3e9v6APhVKB95eUvChd95TVRhP7ZPmpcMYKc6mcL5Nxok5pvj3zEK51WWhX9dbqLB9R3LRXUNAPvq26ShVJmzr",
  "key30": "8DmBSBsJdDN1Y5C8o2Lk48GgKZUEYfr3DJVkQ9Gk6CFGeFUWKrSZmPd2GkSFnkPDzEXakCJhmPLz4ndUirkrxro",
  "key31": "5tDUTJWVfT83Lu4pw7gmkU6bmnKCmm3gzRzNKAfpyB3qRF8j2ufyxGo8fb6yo8fzJirMtSKTofnx7NKfzho7FGJj",
  "key32": "5a2wTfgVokey51Qr9qGPcTLDK22rigWyW1U5QqonTonUvr4y6KyLMc8mnHsyruLojfNttJrxW3esUV6CQspsVUFb",
  "key33": "5BeMjBqeAK36Me1AzU4ydMuwYqR2ZykA9fLvJDucW8HXXBp9EuUrRZ8sj1Q7bBUhPUSkNv5KxJK1w855G6vcc4n6"
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
