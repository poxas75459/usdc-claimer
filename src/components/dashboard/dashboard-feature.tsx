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
    "oVmGMB37yuFBb4ryvT1dc7FSieNvoxJwpNSM3kUSGHcPuWavqVPQgXGxu4t3kgU3kt2i2Yv79mMGKJeJ1zKWpSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAbJ1aN3hEGPDGPbGn7cHcpgYrQbWtF9fHLhy8DsqbXhqJKVPYnWsqbn1a3LRiAYyzXeVsavfzCw323GbD9rEkb",
  "key1": "5RvgkaCoMgUTjsfvvNnz5uGYwt1NkDmmxgSYrcKt1knNa3jGcHLNa1BL95P67dBvwWEBvgX7aND7AQq3sYxNFGz8",
  "key2": "3kUYvhmmdN42q35jR1vwVs2w7fbA3pwC69BrmjYwVZ5RnzdB3Ervu6xdwjuyRSAwzcpUQMxyYcqEtoVaLf3bTp6H",
  "key3": "2rxpcdKpkYtaPr6MJyFVVvxTqLKjPMoEyUwSWc9KpmmaGV9X4iP9x5Vcyvcxpm3DgUeQeetfGedtvuB9NKq8QPNT",
  "key4": "5CY5f4515rxBo4kdFFi6SvkFaq1o5gFp8mBZVtdSbofEXPNFS5kcxnokyjKHmoMRAzZu7YCgvrVDq6LeowEQj3Yd",
  "key5": "2BSaVczs1T2WxzsVWzPgdzMeqwoYMQcUCeWJf2CJCCYocK2WTokEbgsVWraABsdSB5DVtSPMzAYTFARE2btFJt1U",
  "key6": "2jusUWSfPvUZDU28cYLpiQjBrh7Jwis8NoSEjCLK8Sg59uzF4omonrn4Qsukc7LyxTtLLRCHiskhHkgrDLvHTagK",
  "key7": "2fUGssbfjbpZMPQGMJsRkqEF879Y19NjemqFt87fBmGf5rntd7FbBzZuXsP9vHWsaEBE7FibYmqjsan9QcHWDpn2",
  "key8": "MAQkQ1a3xLvDcAc7zAotDnFHcejcb5jnrGy4Jc7ra3mirRAZYgt1FZxVJ4E2JDVQRb2NVy6XA9xwLqVZ5d86oik",
  "key9": "aNB9gzpjuHpquceyd7J9pdDTa9qRxpardgF61pUKrEPvoBMyQaVFuaGZpFTYyxKxB49QPNeVyVwxny51gJHzCzN",
  "key10": "49RxeKLJV5esz9jfGigDBWjP4g26NQRmvN5r7yin9CxX96xeu3rdYACgdJDiEm6xairJFYgC75cQxjYvpxY6cKmH",
  "key11": "3G5efDw1eLC3G7sVoxr7eXwajc4YTzmEwy3mzwc1dNCSLV8da12YofbRujzB77rdmTv9kNJoXzs3ofN2r9ChG85c",
  "key12": "4Ayfob3XVmCAfbj1ow1TtBXh17kyTXPa81JfPXZY8DGDjCYPjvrFc3Y5MzAvKxmt7byeXx3qbrfUnho3eKyVD98M",
  "key13": "4Nk4k2JQAty5G5pDM9tC5b8w7r3rzMGbgCAZ2uwA867NLDJ14fDiDvdmCXpmAhzATutxzjpmzjYJ1TSJUrfN8B1t",
  "key14": "NdsJiT3hknWuw491SwHDr9YZCKVnZYf1RtsM3VA35TAhugzKHJNGRpZxzvUkiBAPEWoA9kBZz9JSKDrvYPdxQuk",
  "key15": "4T2vC1fySFFC32BUiXpUgZKp9egLu7ZmDJ7FwxTZrZYhwtjMm5fYm97ZTJJS6gySu2VHwH55NjSAAzGdixhB75x6",
  "key16": "9sP6WTWfX4MbuaauF28ATJSpB9PVaUcjxLojxdEiVWe2XDxwNkLwLuiWKPHP1hHawXrZZ2v2WRqjRGQHu2F7knw",
  "key17": "4xrekaJvdC7xDmWyiWcPsy9uzXBCyWweZcDfenAYGhTQjkKNryNaneS7nGzqYRHNv9ypowpXCcLte6tDYZARVaLN",
  "key18": "5H5yMmuek5JkyFTydm6ah4JC8jrNy8LAsudn4qXn2qYo39RnypC16AQkszK7i3DWL5y39TGqnyJuFEiJSSVXnav8",
  "key19": "3jyPkDh9q3oTEKN9qXuPzpw5HZ8ERk63mnbu6tKT8K1unXsv3v6RpYMBu67U7Ln8BXbiqJVdtR5D89fYD9miZhj",
  "key20": "2zMcbLZVyRgte8BvWtjQ6bM5wMs92XwRkyhDUQcJCzQAdYSUHcFT1JQFPYs3Qs3aKGJ2gtyfq22JXLJMntjPFiXQ",
  "key21": "4VXEBjtnBhdvNVv1RmVswbjALHm8Ek6sGeegzzMf7ymE1XgBdU7G2uS1Gdymr5aLXEK9tejPg3Vn14HwbJZMfHDw",
  "key22": "3kE27wok8HrZzNk1NAagBtZEzSRkTLKbY7ypbpn8Rko9aRX2VTmebt6cQsyLzcQp5J4gS2uCrmkUf8h5dgKuUS12",
  "key23": "7eWWdenqtKdsPLNiLUq4B3oZw6KPZQDQJ8bkT2Fv8no1YNC3HAFjhqtd4HoFowBQ8EtrKL98u4tTkoc7gcD6Asi",
  "key24": "65PKcsfC2yHS33hKKtkQTu6WGto1iYoBKJ6STRQSuRGFVKtTtJkGXNA5D11DYBQYeXSi4fnnoGMntgEtxssUSQbj",
  "key25": "4Ed1iE9CZn4t28tscUnhZxdHcw3SkbzCB4aRKE2LYXZnwreoWrQ69fRkD4933G5MdKsYWvWxhyKR47WeaZz9WA3J",
  "key26": "4kS3seEbUMQEQUf2Pmrz56urYD5cW3guJmQabEyQ8VhSc227GKA8PB5o8g3WtVP8xuV2dUbnsjLV5AG29gG8ERb",
  "key27": "4M8DZDCgP5fJeEAbcwbCDpe6sD8TYDwZDky34xFoe5GxZUrDa2Bfzt947sp4n8irKpxQskYkPCJ2FGcM2wDt5C7u",
  "key28": "3zY7F1FLfvdVqxStSAtgPihFUpb53bjV9cSGVqLkb6pXyPMtCm1DCei981rGWjYfY8T5fYQourrnM8WUcFhm9msg",
  "key29": "4Bdh3Pyy6nXQWWVfBvtzXcRMySNvqXiLceRuCE8zaxVjoPMYWAdijGhF8oV2jaJcpP8UM4UNeZfxTEeNzk7iNs9p",
  "key30": "1WZhuchXp4XSrW36LwdsqHsBPFgd4kp2QgSB5iaHh6Rp51MgY5chjx7u4aR54oru2RyHV2itu6JY4fm5473QwEt",
  "key31": "2a9QwBEuN7shBAD9zJ8xchNMWJKTiNvf1KnHt6u9RXG7n5ZKduJoeYvJLsVWXfGvJNC9geABZ5TB6z9j9HLDW4ze",
  "key32": "4MhRtUS7egL9oYt26iB6k6DkUJUqnmrwmryKZwYcyjyVYqbhQAx7x39TXAmMvoF7akC6mzM9jMJp88yR7xGZK3FH",
  "key33": "5FKgwNksnUjbRLhsJojGkeWBME9nEsk3WZkzSM4iUzY4Qp1Qy7wPc2RGqRJgw3EyYXrbwzqJFPwmffaaVRejgLnJ",
  "key34": "2Uq19X15CduDcG5S9R7kQyw688qrNfpL9X69twU67DfkhDppMo4x4bUvhVZ2zaxFmu5UyeaZXyn4CM2dbZYEoK1C",
  "key35": "2g9qgyJXbYqZRu4pF2e6cbVpiaJdDqSbZTAA73PUGVeEbUUxX4wWdAfEhiQsDnm3WmByCezNhBwtfY4csTqAB2kJ",
  "key36": "3eduWxSVpbiLpJo6tAxE66hGUhiyFs17g7bsx7T18tsSAcM5EtpbYrJpt5GNrptWSb2AeMhvsvvdnU72bkyACdF",
  "key37": "3jKuE67JVZSU9UGzUyw3Kubc59L9bdp7oQX8uhxYP37fwa2ckpV4PbFr4NDEx9J6BqYVT5rKLxiYJWkZG1zXvTZ8",
  "key38": "5CsT8rmcTKhhWJonTB7FvavxCRn6yvG4Lkb1r6DzGYxVJXMuHtmReYB27k54mNSGDYqSrsBaTgzfbsuZRicjtAMk",
  "key39": "4mUTBDfbSXs8pLU9g6H1Ee8wpeV91hhQoaGeH4VmozhEy7aZJEynb6g6SHjBqGh2Jb8NQjhbf3Ru4xSFa36KH97P",
  "key40": "33yz4sBrqZqrqFwABBMHCYbABYhrxCQXewfSKMoakbZzavNMzowXGvkp4PpVgNDZA69qrYveJdfeh68FwACqxhdm",
  "key41": "355HKj11cQkpNdngcL9JtGjEyzR75nzhnJgG72nfxq7V57uALaJp4VJZ4NG4LfviVMS2GuCg7GZiHqdvQn17de1K",
  "key42": "3qM2VQJDA7zVJ1wu9AWEBoiscGgeHRGttXxehdcKZ543zNXhDTqs2adXR8HCnPgsysWNiL2bgTBJzA3xUGtnH3tM",
  "key43": "35Mg8iyW1dcTk1VaoNRuNKjJQZjvpdRy7KBCEidLXFneHJaVBuj6FXsDwzVBTMW7xCp9qVxCcif2x4FUGL7DvJY8",
  "key44": "62ZhbaDS8eMekvWYfYghutdUCVrbo64E4uC6eHHCbttP88AcQjqsepb6Uc7LWb6HWhRmrFejJ7gK3Ta3AZC5LxKr",
  "key45": "3mGqyEW7tjcASjHuMHGPRrU6quCdsg9d5eU1ZGqpxEZaV3USTQwpkZ3x5hLDDusFS1cjx8ajv18KmGgx94BDkLUk",
  "key46": "38Wt9qafrvYWUaQPDbfUcJHqECsAqUv5HTsYsD9wA7nM15SaJXVUury7S3XEttdumTZWbaYK3kdgVaNRdrVvBYtf",
  "key47": "v7LzcFQgqi2BqgpktnVoQLknReA4XPy5RxpXFHsVNWMVjox25B6eyjTnqVrDq7cegptakN6UQUcAQq2cNdB1c5h"
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
