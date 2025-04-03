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
    "2XikNnVEdxa5up3q8WwEk9Q9yBVvPHUAYNLsPJ6p65cHgq569aEu1n2cE6QXSojeYUUyasiMBngj2wv69ytiNo6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S58gUASAs5v8itY3Ci6tezpu96k6dDs74pnEUS4qrRkVycPHNEDLpDA8gChrVSkyLi98m6FGW5nNvNYPU1zQoYb",
  "key1": "2C5HHchcLN1NK1LoyziAe6mxF4T9jUCdA7ZGkunWGAzovYpWyiG9FGZ6tktAXratVhpwB26nRRUa7Nesdr4Uzccs",
  "key2": "3nFHdtPyptFqueisnNQEVBuftA959Jv9d7CWiNwcdKzop8G5a6vN9XnMjhKCaKDRPZywtp5wR9zWW6qN5XVaB6BA",
  "key3": "4ydec2JpAdERnMBRy2DVevZhYcNE34WjSnfs91C2JWDJFoCHbkroVGah4Y35zcEEBbWwWZKSvkHpgpYqP8hfofJf",
  "key4": "3CTHJikSj3Q5i9pqosNGJGzXqe4yEiwz6ZiYD7i6RAYaWnN37uQ4efZmxk6YTWDsXXhUKCYXSYXxXkdGGxwomBM1",
  "key5": "37CBW6BC5TmXpZCU9qBUTGXLBVt7xcvnpM6hwdpc4Zz5wgw88t3Yz7Xi5kKZnuJ9zhMiXGKWj2kGKi5ujQrPb89s",
  "key6": "3uH33VE2Q7AcsAJ7DBzKKAAqF5rxQyJUBvF6Fpn6PmbjKrFWUaTSbSQjf2NFUhFJEtD9xQH74nCzLBvqrLSobyJa",
  "key7": "4ZFee3gHKbCZhP8X8mLHoh8eoDiYuD3pN1knvF8xtJJVceNAehTkPh5iwnwH15yiFpkgzh99YFosCPr61mdJC4YX",
  "key8": "k6QC4hYQSpA3GcMxQKq51EiVAUVEKCUxnuJeFagbePrxfGWVnY9reZWp8hF1BxmQaqJUFrKRuzt9mBXa1apdHgT",
  "key9": "2gskRGNCFU1LvxoT2q1yMPXToDCWdyDjWVJPeyozQ9XD316nXFDcZRbu1QSsSNYvMvpKr6MXPW4oMsiUhJZMwFtM",
  "key10": "4h1kj9EpankV1qtQcJitX2r2Ne6UWnAewPKMkoMfi2fXKXzuPMUQfL44NpSnfsMasTvdG7u5xrnNcYZtQGMYAKj",
  "key11": "5xsfb1hc68eAyEb6zoWLq66JZXuToZknUhwsJ2aoQMkUPbG1JEsnc5RsMiBJqw5RzXoeNPLvbcxsq2dxgyMmTKBH",
  "key12": "562dXBjTHkH1Er5qbhKe9Z1NxTwNtE8GKvgrCrYfUDG7YfikQi9kKAXeo9DEToxcyWBxuhoHix2yLZgVxiQLanGZ",
  "key13": "A5bhWGrfUcgiCDxWa7QExDdKkat2jyt5SBS6M7Ne13D5QqF51coQGdvaAhKx4HwNUmFR2evooJ8EHKLYj2vVgic",
  "key14": "5DjkzPJYmqPg11gT4ncvA5ZbvwJBvYFGxh8CyT5Gu8NqKKdcoM6Nawx1s2uzB3P1AFBF78hfPej8Fv9ThHxfbFPW",
  "key15": "3CEe48kqTpeH1g3VqdW1d2KUZTRn7mfYfq1BCZmkR1reepsDZEB4VuPoTSWARKemnkdtrR81GawLLxvUAKt2AtVT",
  "key16": "3TpK3NbsV5ERjaKmtw8snizgkNZ3dr53HiLi6gozFcWp6ZGBicmA5dGo5DPZ6UuGgM9i31xVANCQ9d18PiuyE4VX",
  "key17": "k15mN3Ka2jSUBEUWvuyFUPvJX2NmMxZpmQWWBVhtJwkTDeCnGoRmxwaeybQdZba8SGDSvLP12QNHgmFZfEkWHuE",
  "key18": "2hAhkgMGd8nZfr5L5ttuvvX4pxwQ8RowL7j9KSVK3EcHdXVxdYiV24vdj2CJVNShkodQ3zu12c7F4nQeXS2rbaek",
  "key19": "3Hh8AZKq55vcuhidThJwgCYGxvmAHW8iFdp76PsUF9LnGoGqYPofXexwGcnBMtLzxZNxmeL3EoWRSJCra6jUHw1C",
  "key20": "5GCucLrcwSxDZqwtAVU4cBUySJ3NMzhfsrx7Deb1DyPdvUcy2uAEFUjKhHU9KGkqkXqTngMgsefdj7xN6kWTWec6",
  "key21": "34PZtMDdvFM3zsQxiLUUTVqN8qXxSjsdBfws6sLpNrZHqnqbaA7Gqxxo4umpxzre3nPJMqsgY3UG85PqJkM24kfT",
  "key22": "38K6ducQKEwtKA8jueEAJwRiPnqSkoNiiSR6ouwVXc8UrdZspP49xKVgkLPikh9R1M41Rc48J7TMinxTNTBfgY5L",
  "key23": "3zM1YvUsEsZjxJ4csTTJYvYUBqPwsm6KY6MSbgPdtRMAA8QKGkkEr5Xfd4oEKC4Kg4yrHqy4BqLYoaJTGtMN3Zwp",
  "key24": "wq4usqfXzu7Aj1VsAqAhNLAYWwGF6cki2yWjTLHWfTtWpZk9ssJmrqVfLJXkRVHRKDj6kgAe469TYyAPvMAjv2E",
  "key25": "5ZrAM6D4hkKTkbMaTbfZZhciJcL5XR89nyWy9ERVYPNg5ZmiyCVRH2qJgJEHQ4HCPgPixuYAWUhCHEV1CM4z1XtR",
  "key26": "3AnRWSamDzf57DrieW7ibzxbwBfb3GLnkNZsCU2wFWpHQYoogorb42WhpoK9aAMde3ph3fjj59nSfn6USLqmcUr5",
  "key27": "5aaa4YMiFjCMoAu23ziRy7uDTnMyLLQi6z6TFKxdeX8Lv8ZLE6T1LaGrhNS2iLBWvz8R5j2rB73bM5sw1H5N1yzP",
  "key28": "4BrwyoMEEwVVbX6cLqpQKjEugEz2Kqr1YE4N6VH9XWgUkkSv7j3s5khkYcnKzngRStHnYTXrTmLs1y2tFuCMbRzL",
  "key29": "2fKfgeQ6dptGnxkLx5qs8U8uTcRzFEW1RZURLMgtxtErBgtjpfjuiRGJWMdjms1XFew7TJzn1CzjbzdnSKvLwJ55",
  "key30": "4e44aU1juhg9fueWkMXmveEn64cqhm2p2StZuBdHyAvCJWWUzUNJVFBksfgUEasTqvpYLfnmikqLtsWqtMzx5JHc",
  "key31": "3LKkM7YdnhB6xx5mM2q7W7RRQCj64s3xCacR3DzDG1yeZyiTURWCztApT86CHgND6AoJYirvpShdBa7XTwFAMGSp",
  "key32": "62G397UgdDi49w5yrTnpQaYgELXaxL4X8EV3764ZAQMmx8bY8bWngPm7u44twHfdu5siETXf5LpCKFA86UZbU2TJ"
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
