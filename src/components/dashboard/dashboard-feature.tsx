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
    "KV63YkKb8xJVz65xBxXRzE6jWtUpjfuTvBH4TE8quLNcAgYz9c7AB1rvG6KbGzRfCw4HTR4N7QhgmrtYLBuozyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZqeeHeFsNUfYiGTYdLBGuEGQKDy9H1FYfvwySzpX8ZXApWohKUEpBkFtBfN8wZiM1mKXio2weai78Kzq9YYBfYP",
  "key1": "33Ek4Px3m1s5RCpio6Ssj4L9VmbCPALbo2bRbfDuGZmxyrJgKbdBmbhgcabFYtbrEqRAECEpuoQoiDLTh1BZSwWA",
  "key2": "2QTaUJHenh4xyr9edpkuEipqQZcf4mDiVpAN4zmVcKdxUn6KbGFim7uQspP8TStnYUhVfEmiN1ReyrWSEWY2BqbP",
  "key3": "2sq6AD2Nj1CjRWz5amVvqv8GQYXt8XM2P7sZgb33SuaNLMN5X4TSFWSFhVU9pgtChJezf3UNGSg3aFbFDstRQTN1",
  "key4": "3n3AUjKNqV8Gt2SMmhUEWcNYuntz2hK93RGp2L1Xr19qMwD2v5yQjQmrqr6EHuNgYjsoC5HzABPxerHx7SqEM9pF",
  "key5": "C6XbwivPjEr5tiFytN8oF4gRAQ3XyKL1PB7iUMFTyhQTkF7pmRnN7Qs9zGv7qBQGQzeqpDRqZZCwocA5dcEcRe1",
  "key6": "3C3Q8tEX2ArMM7SoZqcWAvVthoDxYaik2qivQFkYsSbTetWodqNmPfP9F2kW4rNboRxnj3xiTRmqaWNZUmaeh4hA",
  "key7": "3iRb9j3tj9w9MDY26WuskY17pWAs8LVgCP4FZpAkvkgJykiytM9g4AGfQjDefqymFkhZwpEm2b3UQC9yXFJcb2AJ",
  "key8": "36CStJQMpa77uXhzfxSMtKi7jHcLAriJ47XzNWd13F3jfCiEiThcbYV2eocfmzgodPoSdRqxiSuSiT1bWB6ZAMAf",
  "key9": "3gsp8fgbJLGF8hPwfL86nGPS6h8oyDtuG6txAFbD3eFnwt6wK7TWSJSbRAFceobNpne1FRmAAn55NreMfaDvTAj3",
  "key10": "2n2NGPSWfMurXEzHoW2ta4W9V3PEXYctEWqubgTviVagMCqdCx7xEB7T1kALyKoeU24upnMnqf5knWoJMAEceA8V",
  "key11": "LdFbxzwTe6XemTVyg9X26QbkWCjzKkM5xHvvgzhJX6Lota1ixsu3yZNqhGUXFqm1Ajo4WnGApbJemUUAc3YRPvs",
  "key12": "5Zj5oHvjJZsXrfXRcRrFtU3Hr99fpgJqbjGGyrZk55iWicRCHcv45MV7XSyHbYdnPPcDMhUrDvZnQTrEzBErb9de",
  "key13": "3o4mVnwaW7jTRskrpxxGg4pj8o7N1rtQcGFaGyUG5NNUfojBGG4Zp4eboEW1DMHKHPrBFe9cp8ZjbpyLsdVtemEx",
  "key14": "5q8E3Fq5bhwpMzRt8rpaW29BCpL2a1sGJonpVEENYL3obsd2LmDGhJJoPstYBYgBrncWe5CVZLgoBFoQDp6gMEnu",
  "key15": "4teXwfNGaMUf41jSZ8cvUWLXLYiVsp5Un341pTsoFuSBjwrbb6TCZHYgQBK1QzdU6mLg13dWBvKFhyqhd84rUZDS",
  "key16": "uP9Ft79A5FDhvZZ751WgCK1pfiZhSynC4rKgYDERrSCrcBJxbp9VwBa8Kn8dfX4jWpZQTP5THNeykeHue45RkPa",
  "key17": "2Ntz7h2CqeuVg7h6wZVAkwCs2y1sv1yaooTk6fM2CPBSWFxoxJay3pk9PTpQZ7UYFe2q8cd84G4eNdTq5jGJ8acZ",
  "key18": "5Pgaeb9WSrfmphYYUPNFhUhbvbqR6FJeYHo3WAosdCmwA6NVqfGu8xFJfmiMyiXBQ17dHAKk8c8pj7oqavDRLxY6",
  "key19": "5HXWcdbguDGcauTM84aiGuQa7r9cWRPb51tbFgeDxjcr95G4rfuC4uQqpxE5yGXSUvo89uxdfynfAWyUnyhrAQLZ",
  "key20": "5YqnyHz9zAFoB8GXDiHUCmKeeVPPR6E9AYqNVX5XxFXmjKVJQhDBQfoYctGb81Lrzfypn9wzRhDhJUgRBk4Y6F6o",
  "key21": "5BJGDatT4ozKWM5JvGPok99cRaXyzhVeVGY1GiAimMFJpUDHShQSpCF3ZuPwSGQVBGAZjWKeLkxRcRs5HKdUxgcE",
  "key22": "B4R67nGzDNek1c4b3bdZQq1cvrGYhTafxsz4bqk5n5P2yWdvFt4saXotTUfatGMBfGDDdzPiTT9GmopQ4Ah3zT1",
  "key23": "vY8pXVjGVkeTiDfppNPDGAXv5Fg9wkhJYwWuWLvPP9bBcRUU3VGNeo1PBKfveLLenSuPYkgEdGTFfcvXEkzr4pQ",
  "key24": "HMdoULWGZeopsff1rRki9h2ifvW6V8BjZpJm4D6Dc99DkEfQq5HtKzy1j7x1JUUu1LNiacEjB7Sw6gARTjFTTLY",
  "key25": "4CD9BYx1bfYCr8bGsd8fmagtMKgxfyLhTaa1MhMo6j5wUbXR9xCcphYJoj4RDjypoa1AUy53rn4XMtruHKvrdY3q",
  "key26": "4BFYuyGLrqFqWysHitps5JuHfmDFVeoWFeupS17XNYFk8jm5UWFAn8KdxMw2CRkJ7dxd9AusSMe684H1Q98kVmXs",
  "key27": "2Cdp4qU7je2qCFv6KZFaf7fFkQ4bnSAXEB3ysT7ximHCU2eFE2RLv9QeAWTshkchWPFHAxz6aJySctxWNGLQRwSm",
  "key28": "tRefDVri3iMStpXynfurMD9Zv7oaZcp4omMLr2xDdHo58VhVhykoyXUgRM1eaAoPkMx49hM5VpQs9QkHgbQT9oH",
  "key29": "j5etLoYtG7CH7gn7uR8cv64YnfRjB1RqvCYpFt58WBhpLwyE8WnKesxAtXEtzUQhJvNLBg3E9a1H92exaTBus5t",
  "key30": "3NoR9oxHjJhb9Q2XWKdgG9ztwUx6syKXvdNo25zcrboNEQEZ8j54XRd7nagdEoQQbyWaxCiwHXfstbZASvxo5VJY",
  "key31": "2Hb3xcoSvG5qEWff2tndwsGwUfSrcZiSwsv3EcBtYZhXupKUYyYbpmdgSvuuNDAp22iWiGcom7ymgsWzjubNJvzF",
  "key32": "461CsGV4D6QHDriFJakujkP5MPE7uW3kXwmidHM6vWa9NVhrix7uXxdjyQpMSFNVUGSnJemyWViRkH8gX4M4vCiR",
  "key33": "3KbEs32MLUVsJdpCJ5nBaRgZtxTacDCFeJv1qAQiaNfLxzFbA9iRXxq44gzbDHNhhzvp2NuWwBQLEje6hdFvFZcr",
  "key34": "2XAobGc1DxsiTXpb6B4KFgbu8JiaAa3xLgJ21TZTu4xnWVVQXrAj8JC4hR7ZEzyofTtB7UdBSYSbNMkPsdnFMFkS",
  "key35": "5JaEaW16AezpPjNvGLPDnnHdg8ig1grJ5FofVbvRf8hSpMtq9yhyw3k9SRMCPUTAU9uT14v9vfBDBLqARX9mRLho",
  "key36": "4kmjkDjzD1DpSvFw3uLTtyWCWWSVMQ2yo4ajVtfN2kye57sXrx4zvaUNRy4T4wYzB3TdfAaFSAe98Kf61nqBi8nq",
  "key37": "5GRWymNQhw4FjSN5sUreJYZ5u49ti4aUEWcURcjEMcr5zijkWX858mexj1xhpUBC6yK4aw2eaaQAvwTsRLSMBYrr",
  "key38": "cUx7s5MnQ2UvhWd6mAXNxDnZewXjKyng1yCYENf8jViGpDpCHkrtgupc6xhyikbbrG9xM4gEZTt8zG9zEfNMYGK",
  "key39": "41bzBZE28Y5Dih9WY8JpeGRVmRCegMUWzxnLboS591JdizEZjxXpbZpKD3E1dmD7RLAQ6ynXA2sA3hgzVgsTupek",
  "key40": "4Jh9BJzZXCWQKn2B9XLBcNP1cNpFgY2knBrtEwvJu9Cnv5Uowcj54gVYCBAH1dnUhjNfrjhTTV9dh9Uxoo7DY2CD",
  "key41": "5VbpTXfNp41uAEkeb5P797zcDbPTvHUc63XPHHHqLw1mgLncdjWfijNcjQS195c6hqCjtof7XAuL773t2vDyiTPZ"
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
