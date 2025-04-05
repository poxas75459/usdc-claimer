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
    "3hfTh8jMmXM8kGfNrDuUVmsjcMdMz7tiwaNmzYGgaN4tqZXcvWekqQdCLCoGwnq1WHXjxyBnj3wqvZuViz1FYYko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YEhtx6K48M1tizUD4ZMfynvZBL4D8B2wFnZze9C1sSRogsAZUjFmMn4mKzKcoRTRX6UjMzRcwRH9hFmxNvBUQuD",
  "key1": "A6QvNr9deAJCAEsp7oZQGZaUMK2btfcCoVXyeNcYenfxSmv1AkDL6Uw5izC4iegoYvA9SDLVedd5pd1qyhJ6VLB",
  "key2": "brGDHM6gkMSZmPqbWZAm5WgBjM8Nj1zg7bFYigWLUzP9ZjWNRWsJMJbaRYgV9jo5K5gEWf247PtXDadqmR7fS1w",
  "key3": "bPqGgsAJkbi4qzhfKcuYYTEJXsqcydXzDaBYnzhyiLM9Rh8ZHCTyLJL3JgVvfDfxGLDHr4CVubbDu2Rryi4gCEP",
  "key4": "YmK47zAHT4rEoVrBVDELX9pLDbKvkxCd8G1fkJEHHCUt5Zv9anNPssHam7b8Ycup6SvUiZaYCWhAj2Kt6nQZ3Sh",
  "key5": "4a5pJCEdaYeHL4WWojZL73sGzr4CGPCNpgQxmStRdQBzDTHzc52oGLPx96N1W5KkjjvJLmyH3PG8MJ8cKN6Y16KC",
  "key6": "2m2ytqB1ZWamdtZ52Pg7D5u6M4B1hkUEJ437dwagYfYCWKwKcHLNsBWZ1FTXoMH959jEQ7XZQrwFDFLT3nxrf8hC",
  "key7": "3zfta4AxrwjLGBqUn8ScmX9CDcrKMA1kubRPi13PHLVbfNWUGPY9dFgcWCQvh2oqJxEegHypm9gqEY3tBJk3yLn8",
  "key8": "3PHP8pDw75wzibLcXJEtyrynnF8bHtyMWKEDWsH7fqjcS91FgmJAsicXfkRzy69A3fdwrGRNcqA1H5WUgKBLk85t",
  "key9": "3Th7JziUPKPSy8y6tyFuY5e6HSFRRoDa2AK9RSJDvsHz9vmkepmiRgbcMwE5Kq6C1c9hKyGd5t8MpBHrXksPUH56",
  "key10": "4U7u4RpGDnikqtoRWVxjWKT9ZgVTUvMALmw9kCBcPBZ7qh4kPYBhfugpL3HCTJWkuhwx6Pzn9jGSQ7r3chBCSTMS",
  "key11": "5yH6S7mR9RuDWS1hoCFgKrSPSsHhe6p3DnGgKaBt9ytxJgxGKHYH4g7oSvsmPYsuk7dLynqizDZtGgV4oRj3Jc4k",
  "key12": "449QqrzF8KmkPcjL5prdJa3Sx695a8auK9gzfBDnHkFzPmL5SZF1fbBcJ72QSFUxqEBbbgV4M5o2HjsPgabKx8qa",
  "key13": "kRiL74QYXAFoWVfCdcSVAC6dCVPuts7H9kxXTJWsGkRrDTScL3Z4TBKqPjYUkzhY6Ng31n4dgsKYjiVGazvdy4t",
  "key14": "2mik3UAhodGcM5HjFJUnALjooiKQswZEaXqNzn3ixnF2kkr1NU1XQTLQof3QfCYQsR44yaJKksSdKsz7hLfSExu3",
  "key15": "5BEP4kSmc11f1PvxwymKAXvBdaue2E6QZ3nQZtAUEi3MCEWncB6mWdHYtRBfpdEnA9LmFWbyMF5BjzSNTJuBWJ28",
  "key16": "2gQ18Gu75RsZwB5XZd9sr9a3qvrJTZ6hD3uiGsSNnn6aQExDUoUHDW3ivBiGipsdsqKnUyQTV9Vz7SSX8SE6qUtY",
  "key17": "5KWoy3STCvU3rQVMjiEC3c7CVb7viH5LaXhPgRFidLuiTXv5PLDwkHxVZDKdaii5mKpZmZoYGMRP3vXJt5peodPT",
  "key18": "4EpCnJXzXUYvEuRVC2CpCmGLT4gVAXDtKK2pGvsMzRuYsngZdupoGECQQS4wJFhwRXa63dV67EyBKh7AxfnfuEdJ",
  "key19": "3NaB1q5CoUpdmSYzYUVVidHJSnDAxcR3w7zF4HKmHW9Nomu1m12mASSjig7bm6gcAZKRHpX767uxuuriFebqbEKV",
  "key20": "ZYnaPT4q95EDGCDVHrkMSAepDAKEwb9oNfkpewm2NesxpznU6GWqV1eXorabj8sLxjiv1QXgYVFJz3avhJmhaRN",
  "key21": "4vZXvRfhnxvCMsMBF2Eyt6oQ8KPiMszWiFhoK5CcYyB5yPDD18VfyFC4rZHHedEP1kioB3QWr53PS7Sf5P7ptToF",
  "key22": "5XMwQy8TLDfNfe2dB7WQ5vwgP8nQQREoXuKVuoL717fnQahXsbVXgea6FuV7axFq5Lan5nX8mhvUY4p41Xgifxsf",
  "key23": "3N24uDjwRkvciDsSed1JfhA8Fx3sYSs2JhTXJS2yt9CG1JWh1S1zYnYDTsUUfQcG1NEBWizFcUmAaNA3gNUa9H8S",
  "key24": "4Mc4wh9ZXR5GoDUnKFLJsZQmQRY4c94fNtAjErnq2dj1X24e5YvMCJSU6EXv3piS77BU6Vp2PiSjLdXZxbiTvNKD",
  "key25": "5LJAQQmUNrz65fnEq8iA59P7xjJ39m6LuikJEZy26atKMfhGQLzTMzqfXd3pxmMAhZDXPMEs9ZuQ1xffJF8Ss1Uy",
  "key26": "3aRDn7xJytN1wsjbSnz4hFdmPZv8gPLV64SMoEmcpqwwbu5YDhG3BqemPNx84dzLeEtVzU2fEbLZLuh5PPRVLwEF",
  "key27": "2GzAA6KCFt3kumrfNP5u6jtZzxKwzxKmxnzdYUpJuFVikfGttvzz6vRmamoffXwDEfNyTAdQknWLWFpJzJGsnfR6",
  "key28": "GZsKZ1xPUWWiBVpTyZLjR8yezBsDFaBXXSmdWKr1nPtLnfUhSTLWCYbJxjZrUbUcYqVQUCGexWP3kavtaHA6Zp3"
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
