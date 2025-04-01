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
    "459YHdDotLN2ES95tpnedFTjoUZgiLx7jt5xpXAvhcE3TbCj6pkS9q6J5EB4Fyp8GTEAupLcXrrv3ReCJ7WdbrzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w5o4wTfnssH6KvmqBQvnEbqamBsD1sb1yhEFGvXA2ye4NtcrskM9CuHmrWiygbyBdL4LzZpKZ3g7J9zVn7STxss",
  "key1": "3mp13uD9NdcVxgXBtEiSh8oyk71wBK2CymSbpZjfhtae21biRHnVDAaUfTbSGeWfoJkTziLicJSVkshMyEErxKXE",
  "key2": "4wEY5xjC31DPXXDurf1LzzfXcaev7xxDGtNWF7kPRDj4CFQYXUn2VoudU88zfycwVudjshptDZsGDr5JwBZK8SX7",
  "key3": "WeNCBQuvWjKffaATLz8Jk81p7Gzirmz163iYfMGLMTrSw3CQHGD3nSApU8PBrcxFFzLr3wFZjeTMJUuUL1FfjFZ",
  "key4": "5ctcoHgeDQXHcdf2VcwQs1DbwAcoJZ9vC7aCaoDUZageyyUUkUcKVmQXWUn3mS6Ey5Ycnym6VoTmaxy2ye7nDwxS",
  "key5": "5Wche5iLcQkUVfxYNYpKoLyEbJNatMzzjenqSB4aU8VDaTgKqKP7ADGZ2LY7AVc6dEk6H2Zo7sYBPJkfLgqLAkdz",
  "key6": "ZXREzDzQYw8QCZGQuu8ZDT2SGD17ni8QjX5TNzbZHtauZ7Y3tdDxPZoLyHx5fSenbjWVFf4CzHsaf35yCA6TF8R",
  "key7": "MacUynhzz9WtY8vUehiWJSQWfAwSDraAUDdejzWQwL9tCXpAL8nAYNMtZcnXyk8VeKWZZsKjNP2YA4dStEPLheE",
  "key8": "3gWBbYxkvTRSDCkGNUWotjrFeLG6bfo1Sh7qXJ1xzYVUuUocKagQFiDgHXyZ4T1gJf4Mq6gQ6ozELrbTPnMr6cGa",
  "key9": "3SfdyVH77bAxhQ7pLYDhaXpsZJpnhjtnYNjPpY2YRAuhC4kkkFVAsLtfsto2RVf14oZ9Z2rzN1PqgUKm28dmVjuy",
  "key10": "5Phh9KnoZcg4c9JGBCYLDj4XyrvoWe297j2mJw7FkB3FvZ93kbFfcNrDLXiFc57xU6cfEPk6SQhpEqDnRotCQv1E",
  "key11": "2U2axYsXEeSd7HsD2Wvj3AP7MCVhmdmTEBqYqY4AX7B2xpWQZfo97xYun4mLC1ZuKZqf98XhjQwwKDEXm2EKHFsW",
  "key12": "3avcLuvtX5dMqK1ounKwGUoCkwiVgUb38TCWyd4oG4wXxm1fW9baBneAUfjw4xriShrn8W9untdRn6MAxAVJuPFE",
  "key13": "yrBzoLYsx6ovpUYRMX9asCNTGrYUG4PQRi8qK5sDnXaFy61rrYAEUef4MeiXodmrZk5wbGDxzFQwGScCMENqGmA",
  "key14": "22dU6MnPSPR9Nqfhu9fgqdWNK3F2SM99Ma7LT8RNnJ5SoujgV67FriUgzMmRPfwR9JehHTURxnGC75pw8w9LX3mq",
  "key15": "45JtQUodw9zKNoTXXFqay3SMi7RZ55A9yeqH3BkA4LTqpRQSbEWwg27Mmqbtw8LUNTDsZ5f9yqzJZSFgEQN29KtL",
  "key16": "2BnKq8xxZTCyFyiAiPLhN6ZcPqh3cfZkPbvPp5EtxRcqcmDAsDqJ1jW7xWKHp9wiSCxuvM33Ge2Xy5Euq8tCqFA6",
  "key17": "5MrhzrNBRzHvKVzfmfEtqiuEbn6ReKFxbZTedppVDLTxZyKGcZ4TbeiWwF6u8KJhqpieyYBFo56TMiB7j1dStjFv",
  "key18": "TzBX8ZXDq5dKmv8otSbrEBCHxD34gMZCKzwEoUaMzhpH7UXdvG6T1QsFQTSRhAvMUbcvWCcBnKtmbqTFVyCfpCy",
  "key19": "31cYYkjVZogdCgvJUuSVxe7nF3MGPoHANqne89W7YhgZbFcE6mCi3ySj6AjqutGabB9ZDjsM9aXA2MHgRhdz84na",
  "key20": "4TbNYMtWBVd3yimEUTRfZpLU2DCriisSUgh8hnjV9X5Ygh4LNLfgZoUK13nvfzn6Zzxo9r3FxUu7cAMdXQDupBzB",
  "key21": "3YaG35crhsfySBt6QEpQTxHQwJAJyv3vBxjaqBuAKJRHh9XHJXivGC6xk7VBD5EKhBEahmxdpK8DwsaF5F9TJYDV",
  "key22": "51RmvBKGpkEUtyVSYfooj3QUHfVBaLC1AmKFk8QYT8BZy44ZhmF1dseRUBi3eC8zeGJf7scmLrLrsdP7MFx54DAJ",
  "key23": "22iVpuoFKvMYgsVqAKPchn262ookvrh2g6fZnEWxSGCT8S89uKaaf1Hryj8kmP3hfu9bzbia3FfeWZ944QxFNiGm",
  "key24": "5yMYbFQwzXHt4yhSbkX7q3yQwu55QAxThYPwGZmd4E1mM8quDBwDCr9WSisVv14SoM8K1kf5GvkPuTL7qRagVbiS",
  "key25": "3rzAPZpZB6oZkmNhntKtx6qudkmQoJkwe6ekvMdbPTEhpcVfibivoiaXFqDUMVrsPBUB33oQeeFePHYo9b6f2JGn",
  "key26": "3YFW5boHnYZ75m4Mpx2BstVVhtR14YHd8CbgyJSLR6joTy7a2jfrFzwBFTRpHgH24tKAQj9fC6b1aL8xEBrHY1Hk",
  "key27": "4YC6qsa7pY2Lpbw2QLQnNF75zYPwuGmCimDnCDaPeLrGLeJXqUN6q8r3KNUQDrwb9RSiTBRxH26G4NeMgdPbtw7Z",
  "key28": "PbVnJKiEciBmq8UNeyAQkg8S53EFND58PTqiewVporBaufc7ruA1oCNHYNUZ9xPtSZvNYq5YduQwkti7b21PxKK",
  "key29": "4ZMngnEx6dYXrL4tzeT7fofvytcDR39CoFgzo58xwZG2qQAfi1Nu89jzYDeWC2ofc4iCqCdwkiQydRiA4r4fQP3g",
  "key30": "4SdaVhqSPrLAVzp5eGMmSmEGGRfbYGGySSem6PkexuW4voT4TH3wA1gBt5zWnW9gGYhKdqzAFZvYmDdXYTDJsxPp",
  "key31": "3A6z11nrT8YmhYqbhKpEVgdfgoMyQMMWRRnZwV7Mpik7epZ9mAr6Ug3pRg8FfU6pRmckAqEwvH2Ztpy4Pis932TK",
  "key32": "3hDQfgCjQ6dCWCZ9s4M5mLj8NDmbVUX2ajbvqh2NpBhBbDemvDQoMosZK37Sm2f67PGZUcjJ4baGSrz2crKfLjJk",
  "key33": "2Fr5pK2N1S27PvvcUpy1dKV7Rawq47J4k2WcmdvatfHNFiHYQm7ZXi3xAJpN1syoPmXz5MT7EhAUKH21Syxkncrn"
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
