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
    "4QwpD7TAngLU8r5KYzL6Bfi4YNaJ13UVjWVsHqgWKRafNTdTgnbcY4skjWnoMMcF4XdYyp86gQ3BfH45LvWV8C3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ue6wvznNdhT8GmhJQqV2qjbEShsoevAJqz4oFcgzG6XYvwG8uijBnvfPtohtML69BVWtX5wtdKfyLbSwvGM81KT",
  "key1": "3C69Mw8f3LUogqpRLGAcmNvAGEuv6T4ckvphxgZ5XnLqzyChxrCoQttHPxXzpypohYG5XkqDfBttLWkPZHpFfJwu",
  "key2": "SsfG6YXMmNKqri4u4Ws5LdyMqJnDkvMcAaeEy2VKV9brD3AS77jmq5x3fWiAgNRnTRfgkUoYpsBpSmi1qnDECju",
  "key3": "5Jo7wp4Y4GMSTP7De39sGSK6UvBR5sot1Yw1Kqh1DEfU1Z297a6WMk17un2MumQ5GrKDmqedvpVBV4vfRHUenXA",
  "key4": "UsJEbJ6ZTivvK77eB5RSjhKf3RjnbN6kh3yo4DoEPfHrTJ6oCAbdSnahsipHYvEj1CNPPjCebBwtSVeZoV36ZDf",
  "key5": "41Xr7cKG2ecZdDG3PjoXuyJ5ymGHsxCcrjpr323yLLSQ3TReg9XbXD3eRQLjJCDGERJEii2S7bXEAs6b8vDEyKUc",
  "key6": "An6Hn9xiL2ogkxG5FgzwvjdN8gibdqNFHkjrd8iqsmPf7o8DB2jQiwBKw77uYQkTtFuZcZDdPK4X9GQPU7qCnqK",
  "key7": "2dZ3AtHGzT4c91jjQwMLMZ6fVcMXdqtACBHGpSKsaFZSgEoyJNwA9B21en4MdrZfKorc97wsa61KMmEED1N7Mp1K",
  "key8": "2vKUk8exXnpjpqLhX45rFFAhYa4zz3ovcAL3opavWUPfvb8ga8mA747tmteJBHhWVQVfaUfoNJVkZmQsSM2sc9yP",
  "key9": "5ysGNkJ3Jmq3UNwh3cHxXzn1kahbguZM13JYeZNwVcnox6DZ4xZN92afkT3VrAz5rPQtExqZ6GKzANFFHQmKjkD",
  "key10": "5JvqhUzQ3xWNhvGtHwng3Bd7JDUkcYFeDZPgWCUFXfjkz1bHMxCmWmTxH1p2anowyggWFrGAVSPhbAjjR7QZtXTs",
  "key11": "4KSZTgPufZb18uXmDjvuTyA3DvXCB453swCE9KuQLbirpy8TX8M6GPhsrLJ9RoZpSRLCTowWQWn15ntehx8VRpBU",
  "key12": "3jp9u121G1TdAhNUVFoA1N4utb9KYp2qQnhkXRb6pv15faJGD5cqxPUYyfhEWLMayKez2KqPDnA6RXemwmkFmzcY",
  "key13": "3gZB7WAce41fwg9wptjvX8VXvyE2TLafLdEo1ra9RXdPWh7MQdio7aqBCxyUU7XcwCKyQM4vnkRGVqmaQVxSYjm4",
  "key14": "5KC3bFohXZTzt39nWFJbRtLdbbWir9yALXVV1NHiMMSJ6EvkbJZrjVHmF3n6cKBeLvax53zXXSqercEEjbYvau1j",
  "key15": "2v6m3qrMpBH9db2gc7gjXeGxhMrKpRK8Po8aLJdNbkF3eVjJe3T7C6NDGazMn5bkUpwrGZ9G9jTX6Kvb17zZakmz",
  "key16": "EtqZb2iHPC9yZYhSEs8XJosssjXKLbM2LX2dS73RuqovYpouKCueXNrvVYz9vAG4QbUPDi8a7bP6sx1zH1UKXFs",
  "key17": "3Qbv8sW3Yznga1kq2X7xKrgxUZ5gXyzTxovySeYZ5e1e9sUdBr2sXEPkVnsom5C987rdB4Cfeaz733QJpPhrDbpZ",
  "key18": "3nJy6DjsJkbTUcu8HYR3pBbFg1xMoP644XCcf5mW46MuavZ4kmK332rkLq6yiCjvW4F4rHqy6dX1FBh9adbP9bm3",
  "key19": "2mFR9KxXNsa9Z5rQ5NSqwh4fMViDr925WEhbwNa6TQUm8mpuvZ7V5epuM6Q1uDi8GewVUUJRoq2NZYRhqNU49qUW",
  "key20": "5tAFyeqHyVpWYYuS15QHiccdeWDAZQEVE4fW7BUAUgXTfESaqnyXrzGoVWBDeMiEsE21YwwqszAvgvDoTNSgk5rh",
  "key21": "2g8mzPqqUbHzeH7bG9BTeuCxyLpY7TBPqYVdtdRdeAyG2xDN8at49eQhchaNr3b5DSsfaZ6qFqkEburg6YzGRthe",
  "key22": "276ypvHM4MHaKuJgFPwghjKZYs7xFncNTioeBb1P3Mw8SbjmcbxcUkeQ4ictJ5KuueraP4jw2izqPudt62jHdBzT",
  "key23": "5CMwQdbCgyugaEJKUWbbx7PQkTbsiXbjh6Pjgd6Gqs7Fa7zqL6ZbtgxojA6BC7JjJ7rj3xJtC35WYJGN9xVEe7Qr",
  "key24": "PrkQEFsLjGkWRThwuqGtCAifpHhLsopDb63E5DqW6ms8xHCkmxN5mVXU7wpqkdW2V5L3ACqUKyZM4xZ3yA3RGWv",
  "key25": "WZCF1XYgFfrVi7TrBaKeEPfvjrJCLq8GVz1KmDmC5PPRiLZZ4HxHCfncj74NfdubnthwmF6uSdX9HPggevHnnpx",
  "key26": "5hkxBDNpy8zzXM8Tnpv33pggC2NhKwufvjJ3k6Rz7tzxRrztDGaQ48UAWKNhdHbG3aYU4bBW4EJ4cjSTyARBnjXo",
  "key27": "4AKKuMkENBmsoVePLgjXHju13bwRxEwUzRbEKr43EvQvfGygMrTgmeQv2HEGqUauYjDxXjfeuAVASakJEQ6wEXp7",
  "key28": "Uxs1a8kAb1cHy7XkUncALevkqahwXiT2AnGiD711eqLtVcoBwsHvfqW2YQJ6LiQ9YKUhk5o7XFZw26MSFuN9P5N",
  "key29": "3LXF9iA71TBEnJYxfLC64zSK2d87EErSFiWARjK4jK6N4fviaYu14sdx7NWuud7XSsT7y82YhMDkSQMFA8vFwhzd",
  "key30": "5AjtTRtNbevgwi4anxicsMnqSC1vUZ1LkAUpbdQJ4ZTLAD1GAhz5fc3VNVbwq7SSD8TouSJ6ZkK8xZsQuZJxR4rf",
  "key31": "2Ckdv29qHiY1EyTv6hh4svCK4EME3888sF8aDpFvR6nDKNN8vhzut74bsP3uMqpLz7v2k5g6r2KzM8wEJDYq9hX4",
  "key32": "EPXdJjuUJuCVTLQvyKUEPqW6i69JV7U3eK2xKDSSBA5dJ2r6LK2mPheo4R1hBQpfUryFrGmutuT7J6urrYtgBNV",
  "key33": "4GiUL6SWFhKMEzsHqxoYM72gjB3PXnnAjv7xgL82NC7cLBfuvdrw12qWvwraBM7ysMHv1r2DMvzUxjMHPc8cZAGj",
  "key34": "BDEUtcB7k4DB5kciAqdQAzQVwGE1HfZwiUq7pEem7LwPTBMkBF5GqCkgmjqZgyjCnCwHWERdPVXcF48JFusDkUp",
  "key35": "3BUL7LMj6TeSYM6HLDKUH6QfGPW9ctAnB2g2pYmynR7LJxfrNVS3fzf34QCWMSmhPnhoTwd3hab4R6pMUojxKAsj",
  "key36": "2jcxT5X6gpmEdUhkLJpvFVTPucKzjgymyVMp1DsfFaVBQGuq3JocbGnAm2aAaN4KDRnHZpzPtbQW7EMEJzjX4AsL"
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
