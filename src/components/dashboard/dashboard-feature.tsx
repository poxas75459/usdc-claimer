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
    "57HjWPe4AYzj2sEfwU26pbpupA6PJc88JEVrFfCnknYrJwaueH4pWFHB5juxNCo4F18dxZjTAQmKCX9dSmLdBonf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qdt7KU254aimEFKFH3NQjzuag57YM8fttH8JtRN4mzsmnkcs8i4Ai98VdrF6cKr3ZyEf24zugY8MYqzDBKYbaC",
  "key1": "5f1V6dp8NGsfqLHRFp36n2fFqhebLFN3RvXVWVK19DB9ASdqtf7WR6TSydKWF9ZPAtWCdUGLHph8YeYjmuVawnkV",
  "key2": "5w7Ha1QQmrJQJSA7ARa2d3itZkxLW48DqcTDEnPioKhkNuKeydcfjJJ4Fi3tPhyaZpcgaqbwwxpBUsHoAhU9QWPh",
  "key3": "4BtDsKLoL88QK2B7oCs4DdXnPrNCQ9FtsRHvy5y7iotQD6HdWqcvxSjEiRZCLnftWrtZN7hhZ1k6uxfisP2Zhi3x",
  "key4": "4DtEaZEdDd5JUzdtQ1B114kUPQDb6nys8feNd98wfd432Zv2E6Peenr3zK4PU93MswuThbTiFggXcviZvGvUZ9JX",
  "key5": "fZskLkvuN2DVBeXhToz63Sukin1x5hg5ALuE9hBHzxtkNBNUGoLfKiX53YecwswRNb6tPDojayPMwpjAN6PQzbc",
  "key6": "2vPuVnWSi3kvWjXUDXS4w5N4jK8jAf3QYsBDUTRq571Dq2XnfA39sJLuQcra8jnokbRghyenpvjp1m9Ao9mHNnAg",
  "key7": "64Loueu652YCrk6WnzPP57mGjXeoTnaCzPJYXcre6hMs9redd3BqdzTjoy4RQqpRN3WGkS3im8ZbiBiJ694nL6xi",
  "key8": "545H656fXbMdNkLQW5HgYFUs5MhGP8Cqdh3dhNPWSHZhw99F1PCtLULzS7UgTZMUStKRAXY2K1rEh2UhMkAk7juj",
  "key9": "5Pocb8tYouu9oVbf919hdZt9UM4fMKKBaTbqCUe5syR9V9uQWhHL2ha3ggsAr3Uoc4Me8Hgn3ysWPy5aPpfZG29J",
  "key10": "2LorXQL7QnFnSjUAqrQKW72sSiEBYYYAP96RDZRUUzCEKXfttCfp4bUfqNfZneS7kLtk8VisARpMRB2dva8Yw59V",
  "key11": "oCbLE8tW8GaLr8Z5FTBk9Kj25VCbrLzxqYeRRWucSP1syR4DCHA7tbTwNi8f1nef3Nd8XGpMT6tF3MesSSg1JnW",
  "key12": "4Jx6GLd8jvBexQhgkaMSy798vYYym4JBe8FeKRq1gz5rAnXxm6fiA3Tu19Lip6Li9V6nAa6ECatGsphssniPAh9X",
  "key13": "3qM4gsQqVdEcxMcCDiNxMkdzQPdXpcsoYJttNLRTaX2Vymy9XTx1sLpruXhszPiGgi9WWrcJPrqNCYh4r737HoRU",
  "key14": "R1DpaspHEcJSFdsKjGu4v57XED8oFh1rVgmyDRq63NDdKLtX5Txv8vx8Nrmd8DS3T15De6kdau9sk2XfkKi8vpJ",
  "key15": "58VHALdCRMthUMqmqjtyuMDGoBmTkZbXQnghyzAbFCADa42j3ScfeBiUvy9zs3WYcaJwqXZU6wzXpjeJJDdE5fzJ",
  "key16": "6FydVKyyj5LXavuyCgFo7L1hs6YfswbNXSt5PzpyFUemjCNMnDSASqiwEBv186cbNN9fwYZa6T5Jscn2wGVM4fE",
  "key17": "34gzeJ67gEcrirr7G9ETK5RCwnUvQX1xCABCpPNihuWxfY5JfYjXUdjwoPrwYyhLPXpWvB2dW1PQaaJSWHASpiWT",
  "key18": "4cBsrg44swG78wX97MXUeauDgW1ear3oL3oDkPkXMz642NDYsAirKhtCHCVCxjGZRfZp1xym2dyEesvLZDhs8EQm",
  "key19": "HwL64DLBB6iCvZx39WXPDtr3HQnt9uh2tBhXWHXN7kUodQ6cG4CsYZS1iAVgtrCK6bkTcucpBv3ouhhda2121ti",
  "key20": "2Ki52byuMRkGVHLYmQcNvULgEDgvQDZfJUbEEYhzFhn63Z7iWEqcRcJ9FAw7eRCXS1UEdqu9KD5B6tTvSmNfDsRX",
  "key21": "wX4qGRPUmfNRUZiAMftj3QGEUum5iPD8erzqAwCXkFxH2nuaGdRMAJTbneAFFXAaVQas8zPgaS6WzBMNeUS7AZ1",
  "key22": "2CcKg9Lhbq6UD3hct7UGD9zWV95GUtGpAqbHUusSgFgV31yVVoUafRJHHRBuhC1LsmwLP1gAkCTGDXozsceQWcnA",
  "key23": "4aNhhNNmiQYQdSkmhmvixqjxb6wiC6reyF8sPKjRxyyM4RMZZmMfETLvT3kpGdZWWfd8o9HZjEY7pFQVPS1ApPaW",
  "key24": "2ayuvehUNJSZH8aQaXoSNQK5qyP8HMH2wqHSDaCGeeexGPmAcywkdPgNJXojuAa5KCZKUSWr8psNZrvkHwLybRf8",
  "key25": "5ffNY4RYb1xVDsHMqM9JAnTeatz6CpTvQZAfWAVoaWVF2B1NMQpjT59D56ViA5kqfzX5N6rdDkbt4HUzgdWBgEpT",
  "key26": "38ftYV3po9jKGXnqoHoKKcYPQmLNSZgGd69oACwKRfK7UpU9Dchq2PSa3U79uqG7uCCMRhW1CkCcSgHPFGhGhBQi",
  "key27": "3aY9SSxHbWDmo1L83WfrELMX9E8xMffhPK8VFjRJj9g9M9rP8azWyupXWkC11CwaCAxQDpFC1j6aGx7kYHD9dmSQ",
  "key28": "2vNbSzesZNaz9Sx45W2YJM3JnyvfnE7Sz238X57CDVLrujrqzxEBQ2Qeto2YzRC2igBF3JhdseGWc9YHhHquMk9p",
  "key29": "4fBEHZRrxWmWiTDxKv1GncpDpL28NgDG7LT2SwHrqcyxG3h8hQ5S8nLiQPC6Yqmmo1Ki3bj3AUfn6gMd8eccuKCn",
  "key30": "4ix2wG5xStGzFCMUTZmDB7EXxqLLNCBgfmrivv46SvcYGrpr1wEK1PKvFYtLAkSYhjtwmGb2upqnvD1EGwv9CxZT",
  "key31": "PxR66kM9utkS9wUXxcBCnzJ8Br95s6CsYpoNGip3hV7WhqyMTwtTXQzKQL5bwJFvM17nCVxKH1dmP3ToP4b9AUG",
  "key32": "5q4BrykPgvNd86ZspMZ2jvNPsdqCkFQ44dFkh12ZJZHrncNYE22qXDDLRm6AXdVPNPi537ztgQ8MtTgNqoUEGJZz",
  "key33": "5YhAtQiLnkgm9DBV6wcbYWwBVjNmsYhJQzG6wDpU6JySvG6cW3x6SXZyC9hmD2aQm5KebxV7sUexJtLBKUiBM24G",
  "key34": "wUQXvWTyx1PYwHejfQ9u4K4JyAsT6TE8M2E6mRrhWNtXh4UDiypGSYDk9jmJHR2QgJ7JDSJsztZXiiA4yeqKiVX",
  "key35": "34J5znC88Mw62knMdfD8ygsg9DywNPTwkj8XKa2juxhrsCeJpRjcp2PK2r8VmnVsVpRVin4oRQJc9RxRax6cFF5B",
  "key36": "ymjM3L74Ynhwh6KoFQWwmzys3LUnVbs7ZedeimRjRMSsLPuBawRveq2ajH1Yn2bMTKhGqBWA8tbwDAtADHCqTTy",
  "key37": "6egRJnVvGAVsaQ89hGTwKCYahfESYqch96xFcVPKyx1toxEzU1XQcLhUCzdFQjamm7pXFR5JfQZuBj6YdLZUktn",
  "key38": "3q7wuezCccZmtvxUWwJxaxFMJAJVhjezFAhxUCLsjZcej2zCemsRHwJuviQQd45WvJKtbrYC7iJhvUMgBy3K8nmc"
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
