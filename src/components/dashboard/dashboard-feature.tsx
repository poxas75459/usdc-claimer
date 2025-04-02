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
    "4LYoX7krZFpbDA6KDus4w1gTtxLNABHDSpPhiCuAbDefdCppQYG6Hgyq2i8LPqD8VxzVwbSYgAYGdDamMSpg2c3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrEG2oyXunHt9Ash9DhaEYkpc6C3hjXNF6wziRbVQr7aQc13sH3YCRagjARCeR83feavaAUuqNJsRfDznQpwtKr",
  "key1": "5AzidC29n87ssNGD7Q3M1fg6nqawUYT2VthQKE5RkqprN4mhZKEkoHGcGyzBTSKPkPaJUAkLAzjopYMs5qKP56En",
  "key2": "3GRB7denpg2vESjntWXNkr98jf9onZdYUr13nVhhSJ3BnxaRMxrgDTN8HELvJqrJePytkEBAV3y7FX8XWaVugdLo",
  "key3": "3AhKNhjNKKQs32pg4vipz6uHhvreGu5r8SiCJbSCMW6HMCb6EusCy9tsGewThMMo8rFGBak99fiYm8xSZA7qRDDV",
  "key4": "223UKL2G1coxVggzyRRMLXEPtZuDQd8mXdodQGjfrKsUW7vGLiDwSzptqQfRw7P9iuRtYMVQ5DnoCxguEBhAL1AW",
  "key5": "2rpkBAFrLXx4EnodLfeq5WAEaoc81v4bf1gDLUJwjNmW9mwnwWdF9p8hSTv6Z1cXDghEDhk8ADsVwPdXY99ghfsc",
  "key6": "4CSx1YKFF8mxR4Q93Z9bqYFVTqNSG8WyBjjUMaWAW9AcBiYEK8QiDMiGDs7iPD6xrx4ZA3hqX6jCB4CaHxfZbPnc",
  "key7": "5E3AP6MwaCnnQKUFD3PEzfhH4uVn8XsRA5yv3Jc3S5NY71Nz4gwWimRZJyQU9tJGPnoUTGvN84UQuSuZSrMy2ozA",
  "key8": "3RKSgr5TUnHduC4YC3HMBdwXbcQFsYPpcz5R8h7yRHF8b4TCFBnVtJp8kqUQ7FiUMvYQ94DRQ4CukMhLufPv4LNY",
  "key9": "3YQ4pcy6juEFzytustTLdSNEVjwcJWvLwiXjCd4e3ZgTMZ7odeFQiG7YoVWjvSQkuxap8vDKqgjEtEKq2RyiX7xs",
  "key10": "gdEVG1GFMpTv1RdVFBvKpHskBjZzB9t3VrH5L7ALNoakHfRVMykuGtJeeRgEjyPaiUhNy1fK9a7TVFD9b6VUeTX",
  "key11": "Re9GBqqnJfBvGYMJBb9Xj193KSjMvpd4doZx1fbMyqKfAQzrJTJFeSdGGbHQVh31tT64e4G5Fdkftua3XpTJ8B2",
  "key12": "5u5N41cdfzAGm5rNpG5ykoeJj8p3zueBYvGE2ise1sPUDoMuC6debEj25v6MsSD4VjxmgTM2XZ3LURTdwHFYpAdz",
  "key13": "38ayBvLtQz86KTpUPyczozJTNU3q5X1DMfQ8pVe6sf59J4YNjwLeMVKwYMJWrcgNHCSFpwq5A4Zjqjm3BQEgHcHg",
  "key14": "3SNUMSHp363KGhCj9Qs4q94imn6Xmb6w7xA6RdD7bzoYkBnj7zKWooYjevnXwg1L9SxWxTaefGXCEVbxZDYqobh1",
  "key15": "3xnvScCBYEJo6tZQdJM5hLJWcdkWeFJWytr7ifjTP5h6nLisNESVJ3qDpHKDG6WDH8jjxQPjJ1xDMxYJNVWjUF1C",
  "key16": "5aZCYzW7jmu5Eby7oQiuEBvec2QGhqjUWb1RE1BKerxYMA8d21r9LbidXjAew9Gr6xctoTqcSNVoqSUGjRZQ82AN",
  "key17": "3TiqFkLGJoYpgjQUSuhUd3WbkFywkqgBWN6w1vUokHRx7VCHQWZ2VdjApUJwVoaWrjmDHTXsYTiJZ3V7Cos1mArj",
  "key18": "2xkm8YbktbKc1nBg34afMKd5NG5ZAEjRJyV8GaYvggREQ9UwovoW66XgoNnJXF5MD8nc86WJD4MeWJ5kzaNoVVcd",
  "key19": "5S6oiH4F7q1P5mzzoajpji3CtBsuqxfc6WkZcnF7JaqcDGYNi3C8dTHFkxR1EB92XAgCTBNZQ2cveQSZ5AbHN29k",
  "key20": "5UugFdcUknTqMwQUEeLYPVvVWve9XdNsdHsQske7zgrPsZCpf9WAQ1mFyoBc7ynbgj9vQ7nF1G7zd539y1jJS8q4",
  "key21": "3nrS6warkqnYVjfc8tNtjbdGvK3bGi1QaCpYuz8pHeJRMTXwVa48tuKgeUSuLyjtgo86rpCxMXoutbK7wffhNBFg",
  "key22": "gd5dqwJ1wuNw6mp5ChadeUeRSkdmsJnud7cbLur9N9QcL2hWxSiZxLX7SuCTxZL2Mn3aeo5GUnHHWL2B1nnhwax",
  "key23": "3SQpFwHUwFD1hbRHwg8ppXcYqDMWmoUfey2WJLAQKBGX1enqNFX6GE8oZnqZud4MmCv41b5mAdvtKmdaxh8kXHyB",
  "key24": "29puz9EZZ5tnY1Ydcbw7iYw9wNJh78AWw9JeRfAVdPtcFgAjNw7KgWNWbWyHr72SmLJUhJe1xooXdgDTgGAX5wGY",
  "key25": "4zkQdUxuhfhBWEr2M5jb3PNXzzybvQAFAiuXLEdrgBKX1ZShAkauFUG6Mqnonffm48MXkQmTHd521L4v43AEtvcj",
  "key26": "4KRzonCeZwuogu7fqMefEUjbHYmZUKEHcS4TKDnrSdTGrXcyEAuFyzBa9apZyKc58WiRQVXBrePBt4FQsV6A7jL3",
  "key27": "3sZLwRttPDK9mXPHwoyHNvr3C8d611kUEcavWiVjpWurtNx6WMAqZw5ftJmnTsMA6s6U5KMKKXwmMNZHxq2E6Ztc",
  "key28": "2jrtA8v2pUN97Ci2aJHuXKfAU55hGDypuCew8VEwemyYjUTzaXf6kKpi2qAkQfKhYYBocA14B1YPHjbfkKJVDj2c",
  "key29": "51wRBbA2eRo7ggFEfDpcHrsGw45RvqkEPRXTjNPbrhJfeS2hcEddqFXEcnu9n7kSFS2YdWhBhW8qFDY4z9B7o4y2",
  "key30": "8REToGEet9RzZARNou9uLys7oX3Wy7GHmAAAiK5DishnV3XBNZcBTAyQJJMVJ3wVDczLLa2DoAqr5kwQUALEjek",
  "key31": "3wrRCAeqXCjxXeoh2DuC2kvAbeP7LSjwjGenvpyHvoR4zCneQhD1NwyCgUq3paC3wZuq3gpoZoLFJBjMVSGwLDye",
  "key32": "2JzitsNmbDJ5vP3AyZL16uQfXc7XcY9D6Bn4eCribkcvVM1yF1NtY9oKV7jnY66mox29KYWaTtL6mV45BzGR2QMw",
  "key33": "2qgEZh5Hz3q5ju2EUE4PY6RgvabNw1m88cDv7DDpq4ybwzisQc1dH78zKTE7g7hukdcNmwD9wd5Zu3XV62XQhn9j",
  "key34": "2Zua1CW3WcsD3w7hMh1YYd5iUSRyeeBJ9h4FVTyDDvQRCGrQUQvDVZ2Af6AdFBuC84XcqhZhDWaWrMYcyyK8nNSu",
  "key35": "4kaEcYfAZqYyFKYV2KtSQ917JmdxLwzehMLpiZkuBpEGkxWpgXGoEFdQ415XWGpKPWnqDhxhVmdYgLG6Lv2fCLbU",
  "key36": "3VYYvkNcaTHunqDwY3H1YkXZf5zgMxrW2duHTYyYUfbuszEPHGHQPumdDtZ4EEP72JGi4kq6Nq4tG5CPBz5RCfbG"
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
