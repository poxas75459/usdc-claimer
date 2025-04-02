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
    "2fo4nSBYtqpz9hWrapBRQyqiArqhBRQEwG8LmFe34UmX6tUixJ8GqU9d7vrKxxYARtCBVBBvnF3X4Gsx49brs7Vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2XcX6A19CdkSvon4NMu1cAE138bLNKWn49DXAx54xEFLc1xuZBEjmwdDykrYgfhzV6e3LgPvrr8bZN6EoHT4aT",
  "key1": "65EevxbY4efBAEvP3mwgN9r4FfeGgE7qRKJ2EDqj5f5PwLwRaedrcrR6PULXG6p2Wm4QUQ2cUiZXnpxDR1JeHZ1q",
  "key2": "kosRFibZFeuwwrx4T7fJRg5b3BwYcTkyNSg6Qg5m8tJF13kJFCGi9WzccuL5NZCpNi9PhUjNbjwHTPB6aP6PAnR",
  "key3": "4gc1wT73BMBamGghsVfLxa8ZE2Xb8yd1VTPxa9eBQ2L3inmTbCAcb257kY1z8ZYjdJUdRQTtwj4GwXjPRz6SAxvA",
  "key4": "5RiicvZwMwmZn9dMKa9TFqomPYxwQCHYMAr8pHKQkhAX4DJ3b6cLESRpqp8uYGzT9yUHdszcFsxUcWPZuwE6nn4G",
  "key5": "2kHwB6NV4Bpcd3pjuEXVwwhd2H7F1hD3ZpYF8DCngoW86uryTHkzch7eiaHNDPUdgSxiPT4bWHDqHFo6hGCnRE1r",
  "key6": "2nYoyVARKAnmcTKB6aX36PtWFbNMjZvcND8FQeJLur8UFcRNgPNmtPDdX8QDJ54YEqYogAZHaUN5fFQgDSTkGYt",
  "key7": "jMPvT5bJx76ptTrHkGScYkDZ4FpqBzf3kHqAhTGg5j1KkLKwV6bUFqPtSTGzWuNVPuRZv4sEAaNnY6qZbCSjovZ",
  "key8": "avcr4skGviaiiGFkwRGDUUuP4L2PgD1NNMxicDBnkgdSFcNDrUY6y7cXcMeUiG3gHSzeE37wJLPcZ6sucttdyjc",
  "key9": "5zJ3qiuKz3vzHqoGVFaXY7irGYt7HJzAkvRsvBVAuHURaqf5boTgmPuMvA39iSzFS4oV8Lu4xPpc3yni4cBqXj6v",
  "key10": "32kVd5kTvoDa18LwPXCZ7UbuEFY4MJRe1z3USFfihAJxyLna3FBuwXrJrjumrj55gbtCDdUY9y3cbExGS1PZYHA4",
  "key11": "QwWMhfB9kW2fVpTijhLydqSuwTpQDEHhnGzhKRA7EZ3fiFUfBEVmh7uRhMGuigRke8ibBaRrfDzhF5yDhJ6NnQh",
  "key12": "6mV32xvP3Wxu4ZG7H6tjkVth5qPAKdkHk3VYc16m6jMoWWb1yRSH62yYq1PueNGv5BEvDTBKJ2y7bmEzstZFVyh",
  "key13": "5vSwV4xfajHqE7BLkg4M1K3JJBJoVwXfXtUrCwY3ELPmHfJSyYycfnwjSedTmU1H83erW1bSvtTCjYS7fk7NxKcf",
  "key14": "4HTaygTQHGRBEu5R47scErzuqSSe9gJiaLCa8Spa1zuw4f3FUBiQ7j8rPPFTDKxbcv38ba5Qt4tkbkofwBcrfUw9",
  "key15": "5vFivUW6irDS3zd9wbb3WYhsxjR8RpcgWTVY8V8h3HxVVojTL97edxeNBkebFNLiHcrtDmbQUE7pcjvnbbVZyUQV",
  "key16": "5CWGzcjt5jtRzv5P1RaVeGUAjJuFm9mxrh5oZu2ALfq9vgoq5QcxAinbRMerm1UVj4Y5ZgDhRTUgf71ccrUu6ATy",
  "key17": "3nVpGxiXUwwmwvAc6xgodxCQHHTpK6b9hDUkns1ZrhkKqDoNSPVrD5RoXjA2ntvf1gbs4ibm1Zi5odtFgy9Rksdw",
  "key18": "2L1nZWGyC4aLMAAjRaRjxTe686SRjxDWU5FgG911avnh6mZtfot4DWCed7RXnw1R5tscvhiX9wa2qp6byTzVcX1F",
  "key19": "4CPqcuKb1rnn7Z13av74vsa8WqCqNexvY3We9BU3M5GYjkgsP9rRd4TXGXhusuMbMM78uUpR7DufS45TSRA65ExT",
  "key20": "48UfTgp7wfM8EA4u6oJ1jnWnuKBUgan77QAiSqYSzdN4VG9bksDeJw3BMzVSyb1hJwjkPafiKiYpVDC6nsxN633G",
  "key21": "4CsKpt5Z83o2WUYvAU62E7YRp4oWc27EDPKdjtbsyK4YTTWpeaxTYz1SZ4GCapq54wfFiVWwjAJtogKw6zsZZpHF",
  "key22": "2qXMveU1tcTgUBTbX2vZjWTpKcCc8fMS4yJwakdhNu95K1xdfqnVC9Tw65qUZJmTsaoBys6sS6jTZwEhNMqzBofu",
  "key23": "MMa4515xm6BvRDUzgtynNvegsDybS4XD2p8fLKavDvZ4G43mRwawJWQ1GjiwHKtcJ89zkNqis4wAWdSDzBtVtPF",
  "key24": "4r11kceyUu8X9MtWAdSCCNgX5sqMTPyej7H5BrVPcUd3RaoE1KibMB8dkAAJZqRkzUbygKZLodKt3xeYYkSh4hBM",
  "key25": "5JCTWZGiLfNfoWUwBmgUcMD6t1Xo573QXL7jpubKYdFxDPShPGbJNQvfJv2K8YPYg3KCmU7E6bJkJp9mxtD2n8hf",
  "key26": "3MQrADss2WYxemxMXGtGaZiBn5FrLaeqkfPqPEEGo9MZCcrX86SyC4zxJzNAgqEVPeYNLvDDKk1sZVTcCLJpespX",
  "key27": "424dFrxNwLzRTR8kDf8iFWirovMdxKkF3ZKGqPQJxLgmoXtttPYu1tKUteh5pVxuqMThniTcyVvELYC6kP3qhVmj",
  "key28": "34A2ePPkvfWb4gsNGGqbu6YcmQmVduJD9kuCkX3UNJFu2Hs1aeNaFHLydhwqLpLXjdq8mpGgfGjRNrneWJLKCNKM",
  "key29": "2nMVmfj4wWJC4gV9PqKAyraZwBUkUWrU7cjpaELY16jBUMNzNiCRQk5GYPo4gmeVdjAQwpWqbS6FNwdnCzoazsqE",
  "key30": "5pwbECEA7Z8RmEjSkdSevJuiN9bzDjRt2Avkx5GgsWt25pydg3otcHj1dEPJAvRjBPiW5cuhwybq4zHSJoC4H1Yw",
  "key31": "sERV26sLAU5oJj8dt8tFLuJggAN4b23iEwqgekEJ75oa7ZENMjkw1p8bsJRzPvJVwHKzRVhtZxg5FYLg2sEpqeg",
  "key32": "2ZLZShJeszoHA3FVR1CLgTqU8Ahku85n93yqE6gotKcFo7pn5APXim7wtYdoHveN8WpJ9yatFcAskKG3PtUmnfyk",
  "key33": "2h4Adnyb2rrRXWEd5qwwMig3H1XReuHju9bKKuoPfP9R7aBTG1vNa6F7ntPnroX2o7yd4y3kc4VNfdML7V5b59ag",
  "key34": "5e7BcZeaTq4Hg2ue7kgragxKAn8RWuQRhA8dbpZSvWM7yw7KkvZwBe4JvXH1Z7vP5TzoZ811hasEhC4AwDRvrGME",
  "key35": "5yiKtvDKuTkTY8KMsHz1ao2PQY5z1vLXT9kR1VAcxn92cCFAhpSSnn24Z2L34BtHUrz9bYMYe8qStRZ8CsCNsdS8",
  "key36": "5n3WSABtqa98DdRDeWNxhTN6dWUf2a8ZfxEhjGN3SZktTnKE6vJzUKBUe1QT6BQ77qdjefbi8qKgsC7rMFJnwVNa",
  "key37": "417ARCukA7Am1k2CRUzCM4pcBHERjJrZeCdSEUNEvE5Uc7Y2L7dRJBTVo7t3D9rLfATHFF5sPBoMEH5nBLXssdM2",
  "key38": "4EaUMKnyG9SLpYcJJWMjixrF3RiEhHRwFvXqjjxm8AuFKkTY1aVMmAs46CgTm1DjD7PyTEDAYNh7PG3R85jdXH66"
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
