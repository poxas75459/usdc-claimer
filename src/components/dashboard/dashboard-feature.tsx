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
    "4qfgHRHedNRWwAXJyFKbav8uPuXoxg7YBfaPrxptTHCdAGfsgKx7gomGpsZD7YxKPKrfTn7nwzCd58vvrsNiwMX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n7KwP8gCXqh8Xxyo8cBpEeJykEHUYUHqdnBP3a97UQp4cRnq1McqB3JZwAinYwKyjwqquQ8fKwjKCHAKFf3vjPP",
  "key1": "63aMJPhtKWhgm9UksiqVqMdKYe4NHvxMTYeTjDjsrZCcA4RX4HNkcvHhenv26Svov6q9oMjJqkuHBBzgRGP6mvCz",
  "key2": "3MtDNkmMB4ofKwGRN158nSZCsKJhi8Bqbi9sYMAfcmheEZ2KfMFJHi3j9UdKcVYD9g2qgijHuryNWSyVdKaMNWvK",
  "key3": "4GrsLjkAcENPYZs1xd5p7z5VFWLEex2QQ8JXpWmP865acEqYkLuQcGhoo363r4GMbHWomrLYf6UxrqZ3x49GGQRf",
  "key4": "qWca9MBRxsT5NYvm3HYX3YtryE1UVts9gtgVcRx8EXZQgSAJUiDrhQWPXDwnQB8LpWRroF8TLu3cmJVhXsUrosz",
  "key5": "2zm3sXQtsM2edYTszhLSAu4HXBvmM77kprETRrogeXEPQnH8bWCJhLse9ddz2hZAXN8cDRWQLc3ZME4oNieJ2S6f",
  "key6": "2nbz93CTDSZ33tBa7y86RSWxXtHpEQbwWgCEEbqp3pKN6MNcCbQFArqcffKeeHvPXUTGgeHJfFZYPPZkH1u9VbkL",
  "key7": "4uBvgjG2DHKtRrbFTKUrtxEGA7haPQhnS6EXM3pfxV7P75g6RAy9xU6sb68g9qzBb1HiQvTqi5Zyqr4nMUvTQum5",
  "key8": "47eqwUfpqY4txJYFQcp6REQbYopC3f53hKks2FAVvNBV9qN7jNpUzL4V4dZ5js2DZMCxRtCZGxfzFxjegaMZvwnS",
  "key9": "2e3KwURMfH5gN38VrmXAvxGsHXC8aJ4drFicf7y2e6o44pHBCMBTA9z1f358r78WrgKgL7c2fJNBxR2XZpfqrAYQ",
  "key10": "ZVaLa18iEjtfqYx7T9BrwFbp57JoNTKdJ4GKSES6H7DMfDXAFY4XS5TobqKBhQCAKNFatdJjBwmJCqRAY1iRMpk",
  "key11": "3iZXswzjDyyiKGTxRDakeX7cguqJFZqvUArQydgoZgBxx2wWZgRnWii7WudRkkxhFwYbvmpwGR3myxdFUXzPCisG",
  "key12": "LiTMeUxmmHZMiZzHtXamMaMbpDkbMBGPuCdKcD2F2nRQv8yTVTKZoP77YTPSQCpkKXsUdr8Tx8G1fCh1bufJpLd",
  "key13": "CcSvVCFZGhw3GM9U1xJt1LGuYFVok94eckkXTuXQ2BxfSDLp3VZk1NbKNQR8idYPNNqvY1WJu3QNPapjtVMY1WR",
  "key14": "4agoeyqw6VfB6yncATMAT77PvbtfxHroxD63wUYFzdaHj2hmDx1NuqKYM8HP713cn5eMM3nmYo6ooqQkToXYeuGM",
  "key15": "3ipEiF7KdK9bSAVBZcaph4ZsRdfg8WTg8T2R7g26MpaSh1773MDr7fNJky9LqtFoBVEpH1zugd9MSTvqhDat5X6d",
  "key16": "su5djXv4bf3ysi5TnM7byLK6sEgzVKWgqrjZFWRSxdugnr52XAKF7jUwjar1baVsrg7AK2DNSVXLd7U45k1p9hU",
  "key17": "4CjhU9jHxXQ7WzzUsu3YBhFRCm6dWXTTRYPr5B8kfQkFrFXSrR5GS7Jymum41xYt1Dds2L1CfyvG9vPNnyg1dBTm",
  "key18": "5yj1Fjax4BKZUBgoEvKomFVsChgH5s5xWNj3K8tM9Z6Pmk1DQXZSnei7WjmuXCLcv5eifXaP6rpdzfb6rMVwbWrh",
  "key19": "5WHgMH1Lw5UQGPdMKWZDKsmGrsvuRWz3c3rxXah7wtxAMxu9SzLwzf8m6uM733R8pBPV68qxJSTjvy6sTkf1HsJd",
  "key20": "5B4KS1wrv8caKLLjBWVWkDmPRZDAfT4GNZ4WuM2T7VNoHP1NRkSscxjjyY4XYxC2X2hDcBRnTdsojk6FGxgZXkmf",
  "key21": "U4oVVEcDMZq2pDAxff6RXtn4grEA37PwZSTo82ypEhxEUuHsWGBApzHyKxXi89WFxnoBVLubB9fFuLu3yJCD2Y2",
  "key22": "4XSKx2at7rx4gt6SVwy8WPnu15SNvSNTC4omCoPw3jNSCxqYeTNn7fC84YvVZCt4YUySHzhQFGesXz6R8Sf75skR",
  "key23": "fSr5rj8Fsx1DFjD3uA6KebWZNH8YBcWjLLeZ6qY5BZfMsc8xgPwfsggwgtS8rsLwGHBciwPdoEutehZ2Votedw9",
  "key24": "2ZuuKqwqeqXJLq51NY2ydzVYo1VHJfSaNSTWaMAaeZ8rW31DNouZjYHzj8idu8KcMhg3Viy7aNgsHswBVVSpSFHw",
  "key25": "eZH7DkgStNpkE61UNKJD5DwQXJNVu66bVXAz4iotTVLLYc4fUuYoHAYr413hrT84KJtUAYSEQzDDnESq1WWkFz7",
  "key26": "2ZKgf3ftrmSqqJ16csbfY7R1Xw4zQEZSMbFds8oNMNjCFti5qVs2wn834Sp4mHwYrzNpxXR8BmwPrBVioA2rHR8M",
  "key27": "4xi1WXSYSVh39wGq9rEy9X7zoAP6L5ZdtAe2R99nn8gQTsvqPgMYqv7CeV4ZxG3RLm6eon8XqRkEvCkp9fH6EFpV",
  "key28": "4ip8n4M4oGcyRD7zfumbM3VA8eEJyWN4KUHy1cox9DjRqVaT4XeMo92mpUM5GQGqBFoswuUDKg7cqK42W6uTbefk",
  "key29": "2ephRYG697HXesVYH6Hgq2s3gP1ivn1cK5JbEUGY5fVqccxqYGJ9giyqrRnXvtMCDhHCiMSqhSPqYw1j6WPv3awx",
  "key30": "Bd6hBF1tU2gQwr4gP8MW2q1TwqbstS4YfncaPiBgsbKxSsKEbZ18g5oDc9asfu33h2YrKzb8nSrhJPsPkrAHH4n",
  "key31": "23XbfXC36NSWUqn1Rq9HGMkVjUThPxYhpcSueajembNRJExpBpGVRuNnbWK6VysC2aRiXRQXqZpeLqpxzn4SbJJG"
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
