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
    "unmmXetq68kYr428nA1jQFjcX8SpM2bnWt8qsK8ByPwAoWuLhnuFtV4uHU1EpELiKNUb6Xr9vwwabay6EZJBjUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62qqzqFwy5PkMXu1qvUEtUYTUiKtZCS6LSZURhWuZpt2em3C95Vod3UoN7ugnxHsvNDhGGUPiE8KkXnNZjXHCJpu",
  "key1": "3xuD1xw2uFfgJW4kqTccLeh4mzkhHeTTZn5zrPuFu1iYak8dBcFTBAWTp9753JqkQLRPfnSDxzZBeZzNFGtifASZ",
  "key2": "5B9BcSRmMNVBazfHiwPfaiGH8G8xm3pPA9BiMk4JDwSygBMrLsB6FrwKu9tqrq64WTvSx9TbR67yCaeUfzweCTGq",
  "key3": "NWsqLAok3Tor6QWofC1yrCjam5F8vMqZn8XC4SmEQJUWxxP43G24h8wVoXUTbVyNsnMDdm5eRgwAQ8QQKMR7sEj",
  "key4": "4TJ8RjTEspBqKoNroAeMBxwCLMyNifHE5pGRHbDyoiwgm4UTNhH5HP64RAJKH737nvC29AzYiEa8b2jBtmYydcRj",
  "key5": "2rL7NeeAg3Y67zQKegSzLdCWY5eAFCebdx1D7tDNUDTLuwWdUxcG8UCvJVM4DubvcwZu8E9T7wBm4MjrR5wiF7ms",
  "key6": "ED8kUuKShvbraZAXVWxWZBcHJU5yE5Uh6Vv8EPazQeGi3Yv86y18UzjdDKZA6LfKLfFF2FiagKsYahcdWYBMQTL",
  "key7": "3JiF1xbsBhYvp55E95PFhpxz4xVmxYx65EinY2YMMiGoV6A76egsrkSomzBEgfK2BoueQvkTQpbS8RCgbUmprtbJ",
  "key8": "5XAA1N5VdZ7pvuPG4LgBZpB2d8D28x2myZ63sYEQQnMRJQ9nEjY7udyuKmdD8vtQKvmfAiAnHQmjfznAuLYG9VRw",
  "key9": "2NiYgWfqpxPBtrrTYuWnmSs7WNbtEM9X2j9XfxiSmjafJDwJLnbDd8hi4qWV25U8eaxuYnaRCaT2aLtEYNr1E2bX",
  "key10": "tZD8taVyarDMUREccQutPjaadLRZLs4oEq1Abvp2vo53UEqbPg9vpUZfzHWX35fbzTwfXvBWjUysKGFGwdUYUMN",
  "key11": "3kRVAbiLwo1A3NsTTK8Aqzzk34QqUd69LA6Vf67sPGjpcxdoqrpBFAq7cbrEkTGDvPMkMxJQQ2KWxfkDyxwBiSft",
  "key12": "5vtA2EymbaFqpeEG44GnJvZhbTddL3ubLthLAJGTM6MoFcH27WbYT4K5C9f1iJcwKhNExQ5CVS2ZQott5VU9s1ju",
  "key13": "2GHN44YNk6o8ykvzZa7k1VJNdUXjfe5pz2KMt6qHhqMTwrEwJPThv9fPKn6cNhQXA4jaooaoyw9dcHMv132yPwts",
  "key14": "3Ej9DvyqVHNjujfYPDWA7phdhNw8dK3596HZo6TJX8XQe9Qg6EFFuswMYBBE2ZDFaHBRGeydxK7nN1DDRtNxjAT5",
  "key15": "3vvG1VcDpWbwJPcjfEEKxQCBfKhsVhZmHVMLezYR3kMzwojNwWf63hJEjKtZicQKYRW2BidXAARcGE7yAe1QBWAr",
  "key16": "2gH7UT4YhnDXSu7sHkR3pxzu3majCixr283iQzBQBENbuyBMqVjBNsuvYfrrJr9zucZhQpK2rHgUZx7n1pMfYmBf",
  "key17": "3xofjjMfEwzaktMU4vbWxuoEbWRNVYxSTtzcmRJeeGnYQD7x9sEYZbdDjqLfsdLXWnJf77QCmdGC4fGYF1w1Z3vY",
  "key18": "2EftR9MAcd8NGoakMSvz7kVrSpB8T4AZjjg1apv44WgyRY3owXa6C3tVhBa543Kb9eAaLrVxU269intj5SvSLFJN",
  "key19": "4JNWzn1vgSSEgC89uGnLZLQA3r6EnbBKaewS5tJSVns2QRab1a9AFMNrADM3w41qJqCBsRCX6Fh2hFVv4NTAMYBE",
  "key20": "2WpuapsiFkdnhdAMWsP3FAtasG5a9XntZR2kpvrxzJpLMFNBXk3vZ5xfgZmphFuEubqjnCCRPi8H7Pm2MtyP5LAs",
  "key21": "4iKUCHzsPpS7mudVU3z4sUU34dGQRBqyt6GKhYtAMeazL8WnVmTSfW4aRXzfo7gRBwxGnpBNdw2XJ5BWRLVoAf53",
  "key22": "2JodALiAE65xftpAJkdbXzS9yb62d7agyY3AbScgdF1f9yKJyb6g7fNpaqZAwwsmWCAtdLua6fkrKVGUJj1MwciF",
  "key23": "2c8B4bSw2vAUuvWcjRRV9wiYhPB1EStH7Bn65irrmgrStHaWgUiMCWGhdrg1tNM3T2crzDmKodAL5q8mzECEVxoB",
  "key24": "3DtbdCSZtoWaRi1mWWNxPege3w8b6C7M5mLSi3RD1VUvrhkmwXZty4NewNofnb4KdJCTXq1C7ufUTRRfvBcms3a8",
  "key25": "3vM1Kc86qX3EAxcggojQ5cnngRUp11tUY8gE5xaLoVDNThroyRHwHLGzDcwCtfsbQ5xG2QtnyrwtoF92QVWZ4yTq",
  "key26": "sr1xM2LoJRfk2QNq4M61gXGv5yZg1CNrFXifjeBmK8tnu78AWwfqkzUG4rVSgueYiY4Rm4pJgiqS7AcQT778WyT",
  "key27": "3hE4sWeLMYEoRE2GkpRgnYWynGhtHBiEg8drqgvaTEYoZoNHk7AGZgQCxKn2HBXcnLYobwdhYWH9Tez6S7ojZVSi",
  "key28": "4WE2E3F7WzhqYFFtqfFqR1kZ5UkLjWBn5JAReHrX8cc8PMNf6o7ocxvJsbfcjXxMnKS13tnhyvsTi6DZEogbAfeJ",
  "key29": "4iKdtTm5ch4rHWdKMkAEPrW8pDN6KxeKVyuJwhHGWdiPdkQS5vYSy85Q3dvQs7CUnqju6pTHJwoVGWdex6KNrP42",
  "key30": "2gwQwWekbxMmPryHzWBwdze84xjqTGyymh2GwXoRB4JnvkeSJVsQiAvm61EGBQEUEvXNqpmaiPkdF7ofnuCiD7Yn",
  "key31": "5jAzws5FM5wBvfViTv1Pra76C8esZJ9aCKCFDhdNuXKbL29mxuhCpca6tUzT5uhmbQJZ3zSuWW5VTNL4pgQq3afr",
  "key32": "3jwvGkzRQhgFdXVNjcBJ5VgjPRg3SvuCyX8muC6fSKQ7XbLdszbomnpJPguYKArP9uwfg4XaVzqKuRW5yR291vR",
  "key33": "4YujZmB7TpeFTztLBWQHk652AgDzYjJpx5YbKjpGJCLztk4NkDEg3xAAiKhgipWctu3CMmQndVWi4xz16sihjv5z",
  "key34": "2up7ZRvqHZfKxFdPgopebWvn2AU5frpACZA7e4np4WgNicTpTKBvHes91Uji4aRtpt4bbUP7vT1Sj3E12Tdqez4w",
  "key35": "3y4kfWJQGH88mhhg3D8NX1Wat1je9pYmnBPhbC3Bs6Vuq3LufVcRJMRiofFpMU49Ay551M1RaA3AcmiqsAwBfVC5",
  "key36": "4o6XotUYqPXMDh2PaeSPPRuyhxXrr1NkEpy1mbiWScdo4o9K3Mtau1km4HpcJtHexH5Vqyt9xjmBQ2KppnHbowEE",
  "key37": "4WiprvRAokpqXLZ8GfXotSnjsxeThriNTdNN5A3kFU1yDuJK2gBKeVcahyVNGUryAYmCQtSuvogVJjsBfFHDBmWb",
  "key38": "416VsirEmsS4QKsM8cN8eFKX3AdsKn1UvcvhsReCnrfEYtJKtDqwvMUVBSTCxUmpWjxLQ3ezN6XPyNnXEd9bwwtf"
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
