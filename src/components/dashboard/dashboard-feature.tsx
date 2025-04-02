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
    "7VZ5k1mxNKC8nbVnf6yYGaY2VX5ikZZXVF2FC64NUFxD1AYLa7neCfZktXCEysgQWZSHa5xjNtgZMaBoojMLU3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "526QLT11jEzGtvgDqnXq2ypv67vNhvgM3G38zbULnDPwtKDhFUk8W91dMRxG5CCU3ez3cu2TS8yJs6wnS6E8SvFq",
  "key1": "55RbTuTAVssrYL7xYU485hXzEomc2Xp8rpTYzLov6pyCGis3yFjGDB8QifAS2jn7WF5Hw4vgfQoFdLSsCHtJ2nBZ",
  "key2": "XMjhXnny9TvRuSRpw6pyPh9iX4Vz7Qmf6XriWBQND6UYbKZQFKoJHdP5NHRM5VfQh1h4xwmFnZT33W4BHZh8RiC",
  "key3": "3NdE6VVsD7K2grrdAoCE57q6D26YArY87xGe86kSYxypmJBbJ4Yi8BjLyoQbdrQvTSM4bs3fZpZzjQ5SyatVsvkz",
  "key4": "3mAneM1PJ8yxGqubtbQ69N7WmG9St3b8KbRK4oMNQvBEmzYe4LZg9GsP24YgvXkN2R2xMpZFQej2TGTZoRrxoJzu",
  "key5": "4Yv5U2bxZZZ4ZxZChraUginUrRM4VQpPfD6JN4FX8dup6E4Uy2y9GugrhDVE6zh5MytcWp2pauiKeMg9uYU6xp1q",
  "key6": "5jH9JMZZjS9YeXZtedQkBCzHPchbpfWVuC6txd9V3bvDMudu7eAfDCuXt7bWg9gDJ3RcvyMj9tBS7Sugxw5qCr2r",
  "key7": "3i8awHwcf4ugs25MhicvzN8cccUqLz76aiLhKMMtbSJWa3zE9ZSMfoa1AnGVBiMNmr6Fg8q3wSRZXFEktjV2YFPQ",
  "key8": "4KdFGKZrnjRo9z4yBA74Ap4vXrgUyjZx9KBMqpwxfhotw4qAAdzUSU2AXGymmUbTmisuJywNfJ1HXkMtjKEXM7aj",
  "key9": "3sEY7JwKCuTr5927rAis1iGQXseqJ2LkdP1ru4neMDjRC6qYCZqEDV3KhfEKoqw7HF1m27qiNiyzYF1jCK4AZpoJ",
  "key10": "4xhEoixoRx2V8SwQqTtP6anRXyjGai2dqU3vNgW2q1BzdSPhPPXY8bLnL1cTaxiMPDcCzbuyER5X6rsFtvQTcJT3",
  "key11": "2kzkdKxJRGFnpgXUHA6KVvn3EvzPY3qKvJ1suXAQNejcFQ7XXWjy7uJQCC5HRG7HvSDn5Jpioa7cqFgWW6yHY6H6",
  "key12": "bFm9N1FFHdbHwUT9Z3E9aAMwWyjWt65CazdwwFvT93wAwNHsiRHsriiygwX3bRHGtqL2E7vRx5p6uFFKvM5eMAU",
  "key13": "2ujuC8N2MLmgkYRgQmp8xg6ctXGFuahNueyKiyuHuyjYwrnWBi6nDLYjBmcRpgQVfg5zajA4iV1p9rCHD1FosBWN",
  "key14": "4NV1U2RAmx6qc5FuZr2BZzSr2CdER2S1mKATn5BsstcDUDXbP1MYJZY2soKHChoNJ6wn56FN1LKXs9fieiHFHL46",
  "key15": "2dd3hJzaBa3nCUiVm5eFvwTtQPRGNj2N1xP6Q7VLG8KRtfXmQU8tM2ehoic9iSkUfgcVTQT2Gth4eJxXRTs8meGM",
  "key16": "4PT5Az3tqkh4tcHfjdf6XaK6GB1t25SjZV9ueG1DNDmeXWgeBov4b9iVer4e7oGBe9sLXmFbV1SXegmFSfjJCKRd",
  "key17": "3FjwHFiJ8my7wmK9Eruu5jvm5jQ9STzqr7tmhKWqAPCH6e2ntvsVXLXwWZWTuFJpvsTcqFXCqZbEDuvfnfmamhFZ",
  "key18": "671w3ANGyc228jExW1nM4fDmn5ARpaDiyKuSQwcF3Qs9y5eZQEDNfzWX2FMYAmE3Vv8qK7rzjAH3YUKWUCibyunF",
  "key19": "2ZUXscCMcbJVSBZdu5qjVc1LDXHC11NdbesvQBYni57Ram53yDnVvDG2FxrXbcHjbJc3Jcpq6Jsv916F75uCFyrv",
  "key20": "4XAhzHiP67FiJa4QxxhqppxU7BvK4MgXKLJCY5R4j8DpTmBxunHqjCoGZNeryVHYS6PitMGLtMm8AGHy8ouicuL9",
  "key21": "4WPXyfFYq1vdDjBRiAYYy4VE4Kgcwi9RhRrfRvoy1a8hK2y2QW7564NJxuEWk1Tu143oNH2QjU5zwm96CQavPKj",
  "key22": "5hcBmf7h2gjtbxiwkwEEmnTYPqjoNJYAJ3rUZmKEePW2mTtzMV9EjP9f3abKNn9CRSiZUZ2yi7BkeFKoKp5WhzLn",
  "key23": "munY6VA2V5zScxaL6HMW3q6LwxQF7dXELi6Rdf9uwKfx4sLpaYZ1kQh1uWuGJLtskrdRre4j3AQYR9AvzXCgRZg",
  "key24": "3pWgRDBjxy8NdadJEk8Y1LwuvBw5vrBMXH3B1UmH7TU9Cy1drZ2aYAtZk3uBHaYcJw6xEFLpKKsQgTsarZbiKRJz",
  "key25": "5kPP5WkqYpQidGDiGsM7cCLfXkbGkq51fg9N8phfNuR8VNLLTt13qyXDtUryYhQJkFzk3ZF1sxmoKm516qLKqywb",
  "key26": "2wu542uiQ8WwsiMe28krR975QrSEkPVuBcjqj3HJL78ZNBW7St7fWvnH9X51nQ13nrgf4i34jsGjVs1Gy4XhPRdK",
  "key27": "5xWyERosrtYZesAne7UvZhYSSdpuj2L54Cw8TrN7qNuqezm1Re5fAFW2Ss9uDF9TmmiLowaBPL4TCTKRE7UrypZi",
  "key28": "3CWtpabu1VP5vw1oQwASyajZFt77PLfUbQRb79iuA5uQDJgGqb2b2YD3HC1eRrVcBNfCWKW2xWFRmak1CJMs5SAw",
  "key29": "n5stFdBVzrU71eg7G526rdagqpVjzNaJJshuqdhudEyGTh3P76UoLym6daAQqse877m4GLNyBdWEcbNtkZxNbL1",
  "key30": "3eFqLso39NpMphnKXpzsk1wo7HbdMB46bxHrtxbfq84j1FNzBBebPng6XmnbpkesCQGFFovRPdGJnZUWq6WdYYgF",
  "key31": "5GU2Fyw8qwxEsy35Nch8xdmei2HavnysHoV6ZzdMY3MhDXxExJ55uGdDUhZK5Pj2dnTWy2mtyaH7jWhJB1jf2NEM",
  "key32": "57ULBrv7ZRgubkzJM41cBvbkVSMuEnzHzjBEAmEtmF2kKRgT4EdRFAVwrvTgoUbamBbfmMCcqbFbo7664aP8XTf8",
  "key33": "38T4fYFkE7RnQr6ZbMfSKue1xstrSaSL4iZJeYuARsaa96DYTLXPr99ML2Rhm9UiNqjQxsb4Pza3SaZdmvyHFbks",
  "key34": "7dQV6t4ShbjNfnVFHMG7Tdx3XWgN8u4xUBzaahkQzu5wjmLJtoNiavZrX3nCSW11tCUSFStbEQZNwZ6tHCJS6gN",
  "key35": "2h2AizV6tTpkLp5W6b26JxwmxFu2ofBbXKPgkVbL5T9uQ4Deg1VQW6fcKauU1L4naPrFzwov4LcfuxoXLAPf5mze",
  "key36": "5tNxtVTt9Fx32BgXHPFrJTurf4pCLnqpiKRmxuJo2UCVa44uT6hqujKzcu1E4ma5RYYwteHfUnMAPskpgvUUK5wY",
  "key37": "53Gv79FZcW7k6MYn2ERiqMNzB2bV2h8ENxfaE5CCX7TfGMuHxNPG9tdF58K4rMunBpN5SnmAo9RZmwrWKb41vANN",
  "key38": "2yP4s3oew72JrQYAgzqgegNi2uaSVcWj3sNFvoTB4ioaeraX47TLPBWU2CrLQy8CXHkTtmVHm6UH42GmtKyxiNrs"
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
