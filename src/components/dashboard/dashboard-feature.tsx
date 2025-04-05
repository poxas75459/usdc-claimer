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
    "y9bRg4ocXeqTcmVR3NxqjC99ueJjNuoXsUVCbQNNYg3WbXrNmXj1turuHu1nw6tKkBVpj3yKu1uiqU7Rfe3qYeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5yYGjjMrpr5AS1MMbhxnXc2ouKajuWBUQgDKgWnjnhZAneKTMeRDsMFCvmRFdQfrxaXpH5dz31vuWYL7oyoLU3",
  "key1": "5jLDgsWp7rduo179FzMe1yHRh6TDRBrXf8g9waqc9JsyBuLwUMYpHjYzTZz7ViBLE4b7Ey5J5n2BerpApvF8H1Me",
  "key2": "awM2uDAHYWqm31KEg3B9n6BrAuNkA62iGs8tozYef1MXgMTWoRL48wmpjvNS5NbYExkvT96qwpJW1Nj66vEKq6m",
  "key3": "4J9ZQbLH88G9FygSjfw153XmSZ6Zv6cVyK6CYnUAqb5d5JjDNhaEhN7JupYL4nEhr9EdRY4j3d1a2novQXxyKLnA",
  "key4": "3d6vNmKB28qRMnAVDZkPU2DLGhx9KwH3JT2H1tbYCJ21c2wDcrzYjpEnfDb7vpwAyCU7QapxkTBq8ZDSb5j9iMZ8",
  "key5": "31nRf8RKzD89WW1TfUz6V44bdqknxe7bNoo8c8Y2Yfy7saxTpbKRsthPRXZDPfb6aHKxQckh9nwUTpgEnoRHRTVe",
  "key6": "22KBzgrrGXHm2Lvkx6ed3wdh76FTgQkGUa87Lk7iiesrKopBQebrc4WwM3VsJA6pR9V45ciRyeYnWatFbyp9t5jR",
  "key7": "38tyZmDimGr4dPHCVABd6KCVeEHcHMEfGXeubwwPKwPcuKoRf6Aj4hdmid7dRzCFDL16XnEAjxXjbW4sHzfnZbby",
  "key8": "4EUcKMXtQjcZ8FY2AYwTasnSxHpqCtCAJLxXEiTqCcYGa78uerjD5jjNasSup2fhA2MrSVx4uToXKXqDrzJ1fhsR",
  "key9": "5LNJV8fXnoiQDBVwxqXMFpG1xx5VmN3jnGUS98DEapm318CbPs9j9ZR4SVVADYbgfJbzNkrFMQFfvUygMTMxH3Q9",
  "key10": "4HSfahQi2iwpZxLmuTuqtQeXZSH1e5LyWN13j6AG7X7kGcn9m8UZEnuqMFtuBH2NKsydxuXKAT661GbcMBpoZhej",
  "key11": "5GCmjUKvT5oVPyknbxWkmAFqikRVLf1KpoKvEBBchuHDBLN1qFAymdZDsimHACDWxwxoQDRHmxvVZCuztJce5Tnn",
  "key12": "4G8KJyywxKrQTv6XqDA3mpv2jfbxLUtE2cKTTQmT5MPrX7AtV549GmvPaFtYGTNTK4KaUvHYHkzSPcmYsoUFC3os",
  "key13": "4SPDqMdp8vBLxtJ3qmB9dkcxEN6cLW2b4iNPxfKja7dRogzhZPWbBQBgc3kDrJCNjHxMZZAJ8Hw5Q69NijHah9x3",
  "key14": "2dB2a27mVf7EpVV6MwqKxAkpzA5uSFgT3bj9ohtSn58JFtkNe9jrzEnVc2XhgSd9BjJEixdHZ3DCccuWVWbWa418",
  "key15": "W4LzcmBztnNNoSoNfDo7F5bpFPnMgiKQiC2Q7yFmahuDKPccgAhmpsXk2mUNT9RfijMTyf8rsfieojhRXpgghWz",
  "key16": "4a7gvzc5ZbnFQ27EvFkHgjavxkufF8y5QGqeGvXW2UQTmS4kxFy6dknhEZ5FdympUxfMBxNVMfShFD91LWwK6tyT",
  "key17": "3yGTiKfq3mKtAVUBfwZp7KhPiYpemAq6Cm1P2KkTWBuSACD4JtGus4QL2877dGp87e52gvMkpiLikzpczNyyZoVa",
  "key18": "3B7K3wVtACMCfMFnXeNVWrUkTqudYMTJA48zPmLH5kSxbMg8h1CssYjnNhKpfdG8DmsVwwTegiq39YTZojeXf553",
  "key19": "5pu3Geejb4UJ3jLXcra3UdgbARCcKvyQNxqG4eQKyhLnHWnz5GaXWGdpNz4rVuaGh2gvKLFbR6fhdz5HEGetT5qW",
  "key20": "3z89c4v7Y5eKEJaBoj4Nj6PH5LBEvHcksWeqFcjoBmN9YDZZMJrPWvh7mT8YsVgyv2UiefSJvRhSQB4TBejgJH1E",
  "key21": "3cnLvatvHJAAyhKjS9VkT7LBKk62LDEzUnqJKa52wC2k442QSByf9nM2krDHhocaQgTQomENFDTqMbLtyAtKGw5i",
  "key22": "2vzCA6v88SJsJaERUpZgLaYGNaLidLapdisEbRMPg2esgXgErCmgzY3g7cxu1btmAXCCsX2n6i4ECAv7CEJWXoPR",
  "key23": "4Gipk9CQeAraLgisBgE5ndG1mowenhnkSeqCPCuposkX9rrjeUED8DyYc86jSahzLzPNrvYhyUEeGJMXdAm7mVDF",
  "key24": "3qRjWYQAh7ndad8nC85Zq6LKeL48VMuvEW4qmTD6njV4LRE3Dn3svf83FQTDbb8ZpLymi8Hfp7rUFoMpteicHMF3",
  "key25": "kVuHJSVcKwYdbdkmzkPtGYNkX7bobeVHDhPxyHK5GarzKH6faxwqSmFihk8Bsb5PpBCoudBHEB8cA9pXvX6QL3U",
  "key26": "4exxxL2EgqdGFsZ83r88XyhqjryFJJYX1cinWeB5M7cu2eFq1UG28MhsbtWpzXCVyaJPw34m9AuXy1sqZwxShbWR",
  "key27": "21NAFgd3gNfwyBQzErC9NciGTncsLwcivmSd2wuRC2ZzbZcT9Fog5wUENK1kddijfMUMXdhgszVyJG9VWE9Kvr2Z",
  "key28": "5s2bJMtfjBKajrzU2xJ1N15VHzcPdFcX76EY86G9oHeDT757uMpo7rF3qfb7rNDBVcGJ6MwJrDKfAWYkxZLNUwGa",
  "key29": "2wpNeQCgDxD9tRXNAnBdBuUrtgq59hBBjhQCMGuyLtu8rJGqMPuam9gDAdB7kdaXXNmq4JgKdD2m1Tm81h9eAS8r"
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
