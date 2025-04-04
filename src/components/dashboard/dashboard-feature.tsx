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
    "3TwQ8RSnJdwX7UwNnEJMDSyWxybcGkrAXjdxTbHXoC3XgrN22XanypF6ziuMzFzywnvrXj4Qtw1cGRkBYrcYhcQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EYZ8gBdD9wRti6r5VoY5HU3r9Qui1AupxN7U8yXPPvHChvf9xswqNmMd3Gj16HWwuZ1nULyfn8H27XnB651c4NG",
  "key1": "2kn9BsZw8ocCDDLeRiYQVgsvnon2w1s7HKnWkRBy3ZDRQSWof2zmRTiV15UbpxALnYoXVVM2LsBtuCnrjCuBwkL3",
  "key2": "7PHeEgyVmehrJmywbJn7R8PaA4R3GQtnmoUnGycd2vfC2Bu516mwRiTvH4CU2U8JjLJ2Lt9Cvyz8tJDJJY52rMx",
  "key3": "2ErhuSskabNQoYJfp7fXyh5oHGBuKAd6YTjvL32MzHjXs7gBDB5CmyXzYvavnuXRbPUjPb3mdENN6gadmy3DxYfe",
  "key4": "2b4LUaB97qdkyfYTeo982bEH8ePfdn5nUDjNRysx3WgjkSMupktkkBGvSPrg3Kf5g37awP4LG2ueAPjuirpC9fny",
  "key5": "4cN9sB5GhurkePax8hrWqgFhX9uHnVC3pQgte9mJyTRMMwrCuab7HZRGZazDHpvWZE9zYkrCqDUzz8i2YSWnjucx",
  "key6": "2uHKzjfXywYdxoizFMgf561V9KiPpCRtbC1oRpxSHify2N8nos5nfUa5Xq985bT32ZVDCFKmnFU3Qy9xqNLxamr7",
  "key7": "B1UoaeK5F3cvZvARQDJeUm7etuntP6kRQifXm9EE8CRpAByNALY1Vg2otAoS5x6VFBKk2aJRiYpRY6MQTgejiS1",
  "key8": "4wAC4XLP8fHfnQKcEE18wZHLkVsB5MJo7aPbArZdkyfF2zEaKX6QGahDkaP8Hmcm9UbhxQFaH3qc5fD5fvyodd9L",
  "key9": "Vx3gUVu8EskJgwsvtLkwMuUzavBaMkCLCWEuANcHh1xLzDGqx2RzmdAZhoGtCob1oAQFdkN7HmZGyUAYjN5o6m4",
  "key10": "2KHAd3GoDNNgvzCLsK19Vy3EXWjYhirpjGHSvVcjSLe3NKzNM1a3sdiLVDDpd6aYSTjdJA1PEcSVn82AGau4aYS3",
  "key11": "4fhgna12EpJDTTfkW5VWPR6bnWJrJbzSP3h1e2Z58zAedjUQhTFaMS8ezuDgi5mjG4Gkm6ygoJ1hKLzC9vTXsdQK",
  "key12": "4V24aUkFQ4ncqsUiGFY9Z9Xozi2rUx4rgqinijbPPtBUDudkhtQe8XpN6sxySzSquFfzZPbkWFj6Ccs1EzxRKQJJ",
  "key13": "p35LHF5nDJKt645AmJkjVnRU4iK7WLDN1HsuA5QfMFCfwX4wvp2KD1X2YvLYBhEAcTPhyCKJmE5ix5AiJkYM5xg",
  "key14": "3p6GJcy4Z9CZeaLNZaXDadSjWUXQHMtGKpCDpq6o1fwZcYN3SWhe35JwxXcTo5TziNeFNSeQ65acNXoY4HUxpCpA",
  "key15": "2eTCmHGrUfLCvUqm6zpGcxV1VBHtvprfZV7purSxCK5kHQhTTDUQSx8gQMMsB4Hf439tdNdU42pC52zePxSbFp3M",
  "key16": "2qRDb4s4VQZtfC9sn2qfkouyzUabmhQqqUXWaT98qVvFtHfHRiMjKYb6u4genME54X8RADghmawh4Kb5XAZcA57j",
  "key17": "qtmUFRwgexTgkMF7UQ9LY6JF7bnL7o8nxTnGty14VJpMq8acw6DPkK3Zzp7m7hjVgr1qET8Pay8hmmVbDtbGVaZ",
  "key18": "3fmHLZCdVP9YhAGGv219bnyYojLHTYn5fLpD26q4uXUJvPUVT53sm3Qc3GSN51oSmp3ZgAUvu1N8BLAjcKhQHBM4",
  "key19": "2gvxvhT4rJyHeE9oCijVE1yZMGwGWWWDJQ8pWHEdtQJab8ssJN27Lu4QMiNRkTUMwMXZGbAcqhh7ZBm9nQq1UYjs",
  "key20": "4UkUUHSahQF9o77RTU1nScugEbSRFwxFexV5B4bZsppz4793mFXY3YwpbVnAq6wwZKDvW6W3tgpmyR2ZoFDvwXHd",
  "key21": "5SHqmpjPApwXDGZYYBmZPDR5FEK6S1Z8XFgHScFMm5CKp9G4kcNVkTFgbxjmxDrKCYkQkKL6sq7i4MGwnFaevH1U",
  "key22": "5WKjjuLBjzHfK96tUx8f9A8vS9ALtBn5nfGppZeJMBL2vnEukFfqSPZynPsoPnY5GM2y9Y9dsF23RkhXgETC5jsM",
  "key23": "33UxiFbFq6uAyzcuw8nvr94kLn7MQz4htzZuHTfXqgvA8N4C586QviJ7tbHo8rz9gNScUsWdLZCquPQMk21KWsxB",
  "key24": "25a5GswNgLYywkjLErMxPhfktAfm7ywLBMB5zB3FQNqyGP4LJ7aYc7b6tjNe4FEeYKwXvVfjryzA6cHUqsRZ89Sv"
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
