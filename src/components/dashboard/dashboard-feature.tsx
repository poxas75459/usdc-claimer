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
    "2QdiRv1q26b1Ukyf41FG7uGZJiRMnteH3Hbx5xprQm2ZFnirfeTCKJnYuczym9mh8oyCbBNzrV7NSEmjkNrfhXFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wi2HiJ5qk1Ph2WHNTTyS6ArmaF15SLpzfivCDDNPqYasuA8gC12FuUT4pH8L169cXEhxxHpLy6HsU5HUUZbsESW",
  "key1": "2HKoGPtWvHmbJ1Lp5FTniAnoLx1NfvwQYzWUMYLoWgJHuQaHnnUfbginFW5iGcqVTXmALXQTSGHmRqVwywDtm6CL",
  "key2": "KurS2jkWdjKzeP9z4Z57XnUUJPmYopfe3Fg7ueWyxMRAvXRSiqC5r14VJBGMaC9z8JvTJpY5CuBHyynTinfwMTV",
  "key3": "3Zp1DaV18rwfY99wwb69a8xfiiM4wwBqfd2ERAuxHv3cdNHU8GEyWcrYxHeSkEiYgHHUNgu2ijAAWiC5XFtLvXL4",
  "key4": "ssBqsTTZUuVbgP7jc7tW4mytbDJzdQWe3GbEWMZo6JQvxHjM6uwWVz4mpwE3pvcne7CB36pJpkEsewooYZH62Q9",
  "key5": "Nnj4p6s677YAs2qGpwhrb6ENjL2NbBqW6B3gVC3UowN4vgyWLbz8yTidYSqTP1urUTzaLVaxUbwwd1KHr4uxTsm",
  "key6": "3FA282ebkqB4VzA7CGNw9dmLRZPyNzS1GYUvXFHnDeHwgFzQZ326jvFbQo7oiyCZ6zFrESNCeghXWTzbqP9xJsvZ",
  "key7": "4Y8Rpd6R2MXP97Lf8wTQR9CxDYXsFnKJeruxHo5iuD4qsE7XHshYtBbfqVsCRLqJhybrDvqRgNXtVh2Ek6MubBjj",
  "key8": "3FdEy9S66vqzFGyCNtwTPruaUidSj2FR43smxMSdxViYZWynXLNYWrLWnNE5RQzn4tZgQv9VTFPj5wqqnL4daCy6",
  "key9": "247geSxFcUMeqKeEfhASNX9bgygWz5BjABa9m8WK9pNYDFotpitk7oQUwUsaaYJaA4ecQ3AfUdMquahaWyGYKtPT",
  "key10": "3AJYsDNrty6vGqnkLTMS6JJUKXwC7BoCcHqUP44ronVsVWzzyu687rsxrs9XY4BXr9WNWPJvSxDhL4MuJJPVMQV6",
  "key11": "Uq8ggHAYjrJrVRS9e7sGHd3dzgQuYMDxwKzsSFdhHJiTkCTyKup2cQ82r4Tw1U5wd1niivWaY8Jwynre1gDdwAF",
  "key12": "5kEN22jdhRffQhtizv1tfHsBdgTqim8AUr2vBQUrdHvTcq2g9ABSYPTDhGM36k3fkHy7tVuDKbCV4WiLZkkLuT92",
  "key13": "4tgQufByMbwRGvzWfNCPyQMeFk7Hg2HSsecAT5ix5LX5Rke8wvut7VSnDKzoBdz7C2VhmsHJGErgEhtewxYzHBgd",
  "key14": "5a4jgKAGXzDxCG7FhpANqNaQHv3VojPcWBuBo5rfGUG9c3ncWyxR7dBXfbKrpC9KnEnMLzXpyCCSEa8rm8cKZCNs",
  "key15": "4SHUoMgKcEC1Rpa1CLHGZ9LsAt7wvg4Gh3ii9hNR81qzYwsGTMZzWrDfNiTQgNQaPDEGEpxGYjMvxfSL9q67wZcE",
  "key16": "4AgAN67xTayrTarwozajnBe6nC6CYxS6oNvinqurndBDxujeHrGQmt4MD79rXiHsfMiQrPRzzXLpEy9CwjEXJX43",
  "key17": "2o8eGuXSD17zE5oz6p7s17s3NfrvFYEJjnpVnk8RFX9RaFuJK8BWAHFBkUoJkLgsrprXTobkgEpNSLPJHi66MAxL",
  "key18": "4sD8B6zfjQXDy883NZesoRiJa8YQLZtyJ3HN6bR2xepFAn7nxvqsit8FNUPWzpjjpWwMXCfRpnK7ePEbPNvfxaib",
  "key19": "2krHd6CVf2WXGhYrXA69diUxyvzskqP9vkVQMTs5YbMbDfzUypyudUUWDjdvFKNV5zGYUyCxmcVw4VZdeWpFz5nq",
  "key20": "5UGgmrw4hLY8eJwQcUTirs5nQGojwrVjnyYQ45RjcLQU2E6qtKETXKH4VL744ZLNFvhGW9thNRygULYLrBHKTWcT",
  "key21": "5CskdM6qV3XUxBBzNjz8ALYQmpvcB2ED3bg5963bpdjDPmmQGoVqwYa2Ez9a5o3uVEMVgQB1rzZqgVornQQGzoJZ",
  "key22": "2D197LHvgsewUTXh7qrcgiyxn4eZjSBQGJZkosZ5gD4FKpcJQhDJwKtxEzsmTQ9iH7qPPo2QM8k38tnhn52KuqmD",
  "key23": "2zjKq9L9Yra1Ah1Vs2nQKw9nSVZZqDZrLcCoukH33s4i2HcYcZDNeYkn7JwApykgSppbQTczjXRRHa43xdbKgY5c",
  "key24": "35Ln8JMJ3BWtzQybwudora51emT9aqaLvDECCxFFghqiEHqYASPv9HqQiW3MfXGTy6NWf8AJRNwCWATavBBo4QzE",
  "key25": "5C23W6jHLYAU2n9D2AZWczRkBgEuTeeMmCxf6qhrNsKs8tyXR3FNzkyHVUcxhK7fq25SxEqF5BToJ7PRVZ8iQTCg",
  "key26": "36nFhG2J2dEDE146ndvYXUvotT2LHs84xmMC272GVi74BS7UDoPePQVM8mikq46f3e3GVvjwoBjS716pnatFb7UB",
  "key27": "4Hcz7aM53EeCKgBdwauNjgZYqJj1ZoKTRrvwF789PQ1u3X2uVGcSN81gSyRjn84FL8sMDnaxtSZbhGJ4ri4Z3QuX",
  "key28": "3UxgTo3nHGNMQ1tPhMjDqa35A6GFZ7vyU8iV5MHbkuNS9ekoV7Wo4YoP6tUND1nMEkEYoJjYNEDyVXmrKRamWSaS",
  "key29": "2W4Crwv5n9NwJLCPQh45KZxUxseACRRFgveZhTAekkELc4VUpfLy9JCroiPNGWRneSAkNFBtSh7pXfNQE4qr5oW5",
  "key30": "3BeimnzdxXQmVRnqhVpgsRUCc5Qyyn8VPxAvYDtZZ4E8YNK5r5gGtD5YL6EkqVoVMnf9Bd3bKbiAxnaLF9B32BWs",
  "key31": "27DZjNRDKuEhN8zuUDG3D17ZeBnp1yvPZLFcC4FuRESeAivUDt5TGCebzjBSqXvzNa5inKQXukDrxrAJoLjFW1Aq"
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
