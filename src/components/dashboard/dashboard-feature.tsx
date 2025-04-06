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
    "5dV9WoJrzZYo6D3y6vgc4d56T93gmQmqRCwAodqHVFJzsy2oqCRTGShR1yxAH9MoMKfypCd1rsjLkqAxqqvWcXsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9xK96gxeTR6WGZe2XTpsg726btsmfSZdeLUquaUqJH5faKvUu4Md9ZQtPDEgcjaf5ZweCcctuRgHczgopVvRVn",
  "key1": "67dcJrVuJq43S1ue3bb4kU75tDd4YzAq42VMtJGqMyX3KB9bYouqCbf7qT3wU1vRefPtbohtT8WMSnRm2mvXWazT",
  "key2": "2Y7EvWeJS1bvdZoBvDL56Nn3tTzEd4cJnXxWDrYqkmt3PXZwfGtnLuJqCMhFfNWZm937eK9KWUpSVTZTAuLt5JD3",
  "key3": "2GNNKwv35cwqNN1thDVYqSUEMe3mcgtnw6c65doYNeVATRCUJNF7xHRkXGLMY1YMYm3F4kKZejhfYuBC2AfVLVNg",
  "key4": "sjnBKYMJPB5aSz7b7TtsrZM55ttg4aQSzAZid6Y16N7BE7ZUuz5cmXdggPWLccAeUmNwE7Dzk6zAFmPpazGaKty",
  "key5": "Jv2RBn2iz8UuBk83UnQgp3okU4SZzi1BCPhA7GAWc4X7SFzG7CLSAGpzTh5AaQWv6TKCegBACBzAGVEX3af6bnN",
  "key6": "2643JFtegvuf4KxYwUJdCrqhNRFekhGCUYF8RQELN1uyFuFoHZVkw4hCC7hCyUUmqZwSkXAEPxoV1BiZLJyL5fw4",
  "key7": "DtA9T73bMo9CKWt3DwDq43m9XZutujArxqkX3EtjEbcxgrN3yWL5CpaYSGsWJg3onYkapCVVnGHu5bxxzi8MbVC",
  "key8": "5nqeHLEqKP9zqEnpSQpdsJRQhEvgy9qZHKBDGdy8unRmcPJDupjGTVJe3zcQ8ZQhZyDfZSUZzATgGnMjXxR6HcQ5",
  "key9": "2zfTd4XLh3wzuvTmsxvA7XWi4yCyau77gEDBFEbKx7LdM67uZMk2xb3avX1gUjfRNtzXiXjnmNeaBzMAWfJhTR6M",
  "key10": "gNCW6cWKk7tEApq6Li196Bavhn75wQWYojSEegs98K5B4wgkdE5pW7z9sPLDWgnfum58CBPSjxW8vDY5bHSosFE",
  "key11": "4ycNYdyfb2DVG9ND7cQ8RaF3Qm7McMnj15kKsTQ6fEYJoeA97QEihhmM6m71pUEXHjXFpn4Hy1hKqY5MyNWXV1b4",
  "key12": "5L2hXonsv2uMwgzdEYSWN1HEE7E6Mok3yV8UfW5oa3AUrCZtSNKa6RsQU5ZecUwNKmhPeoDzx8qiBNWi36aAqjoW",
  "key13": "2aVCe7Gm9ywCzmPrgcj98zFgRbfRGQ2QhFgrU2YQQ4vm5tsLbpQ3kbmWjXUEk8w2bXAXUtLvyZ4RKmCAnoTFyoqt",
  "key14": "54ZYUjA8GZiCL1wwDje41sN29rY9jrmRtgCgA6QaFYMCN8EJ1K3vhygcXhkGKgGLodo8w94ctpWJex1D9Jsf96VB",
  "key15": "4VJkhmf5MWb9up69xkttHM92JK27b5z5HqPRrg2VkCSDwat7TDSqSpSsGFooBxP7XJDccTZ5LgZ3qc11FauFfcmg",
  "key16": "vGK4n5ZVbUSyMkPx7YT1ZVnNnm8dj7RQQCyLJDtXtKdhGjTtrPMrVsrnBy1dAvxCiNTWUXqRCWX838q65fkVvES",
  "key17": "3iMtbHVXvVbPSddUw5m6Vuu4GGSRjrdGTLX2jS3ExUQ9JsH8Emt6phh2NnkUwyzxnQxYQQxQdRngtbtwYpqTe57s",
  "key18": "3yNi3WdGCou8Ya8TCY6fy47JKAhvEcLtLP3vuT9WhWyCJ5tJJUCEaSLUX82WxJ2XsPpbEGqEuAmCzXQWwJuJqy1V",
  "key19": "2R2sigEVha3SJaqWb9HcEkxpc7BoZVMkft2Jue3qUdMQRPMN7c3cfN49TXYikoWuFj7za4A88ej1fVGkjfoX2g2P",
  "key20": "3EYJkKt7jG438wDhX3Areq4cfPtRdRK3BPfA3nKpkc1PhBKnLvVJxUymwK7sSyZczg5tX1wE19Y5ssBaowuVet6w",
  "key21": "5oHq6AiGMUiV4UxjVQ4dATtNrbgTNgKcNbz1QQHkH4LVS2qqehUG9ZTtstoCvmW653MGk6nPPC54HVF1VZ5r9E8B",
  "key22": "3kS8dNCmymZJ28sMvqfBYzH4EEeDXXKwRDLjRo5nR1mFdtSJ7qs9drXogATQJmq9G5Z8BjkkzRW6vibRQkETM2eJ",
  "key23": "4qhEy83wdTUxurojHhTTUMqUDpgyjJ132M5mg6YcutXTnJq1qr9azTc9RSqQL1jL1dc8AeqLCD8siR98wYrr5tPn",
  "key24": "38gB8Rzk95om4ADzfYQm8gkajBXTSZnaHyY3RRKCsx5X2siwVvzcbdqm41TFcUbz2QkPeSGq5zs3gM98bZ8UKfya",
  "key25": "4jRbDgFGkDGQxitYSV7ejK28JpBARXMBQ3a9ZQL3vamHqwhpX561RytbEZmTv12keKTwci57xsUoF9GGNeUDLTD3",
  "key26": "wKxS7gYSqkjyoicxKAq9EjZiS1vjt4kM5zbsBfPCj1TGLBzazrWDy2TyPVm65UwgfB9MxVzYxzLEiFePJLZuQXS",
  "key27": "58M19r8DDbKpz6k2gaYzPYExoZCRCcnogJBzsJpVyTpekBQ84HrvUniCDkZC1bZbvycuAXbHQqbARsojwqH7QpJN",
  "key28": "ciHhWGH2mMR9tsDWCW4BfB5RMX99CW7gsw68S5c6EnU15D8YtDrWndHW5K6ZEtoDaoaUECKanhkEDRzqffYBQ8r",
  "key29": "pgmVqXbQQp5qk5NUV9iCRfBk8fo6F1stpMnHR6JNzecakeBMGx85vGP8WhTwNX97qXoFNdEcaWx2bFWcceoXpiF",
  "key30": "5ktiBzaLfvY7eY93Lg6L5GL1y825EuvgWBmi9Qn3Tmf43DBir79ZmvXjyX3YQ9DNDmiT3WT6Cro6S7qUD1Toqdux",
  "key31": "2Fz6xNg8XvUS52BiAUizecw55F6AehT8k5sRzrcQc4Jt1XrrVg9GocPztVXQTbZksHtVWo8B82Tz9ZWzaRgGkATG",
  "key32": "6HxEvQtqu4iHj2Rur52b6Z2Dg68WtbnWLzjuofp2g4z1PF9rg5JDVNBRXMn2GtXp5iAkMFbXpnCKewEcoH9GvMa",
  "key33": "tg3NB2uqxaRVJsF5tfGzht7CwR8KgWWgzzjfsJj74GVmtNcBjwQVeRTcaRnGJWNkxqixEtVxx8V56iGP8EN6JeU",
  "key34": "NVwHGo7j9wWrHV664rE8JjVAA7oLECjVNUPLKofdg67YrudoSbbUgqA62QHX8z8yGQ4kFJz4gbBVakAhyPrSPPT",
  "key35": "3cpGNZC3XZDGCDnkSxiPeMADJvvf8cZmz6DpBk2KWmdrSNrbKv8Re5J8495R8vRa3EQ6B8dddmEA8rqL3pBVaSJk",
  "key36": "2R9MRrcpBeqWU7mrdnZFsqe68VuDdtENdiqavf3nwTDG5zpjwaef8XRmhSLa8LTvyevCj8N2tQhkFgRjSWFJ748H",
  "key37": "Qggda9pVfJX6gvKjwTquZtXH6PtnhH9uwzbdE9TnqrMLb5qn98AN7ukA7XPtrCB186obCvorLbiQxvaDcKDosPd",
  "key38": "56z1Vr8KULzQoEykKqFMrrwkxbCbWotsmqCsicFBLbbkPmHmAvWivkvtu83nSFWsJ4avmLc9EmdGV1X5kzKfudY5",
  "key39": "52Dmwh8qeQQh4Xp1eBQpedVDEAtd1APCkffnWmoFXTtFKQdAo874yCSmbczXUaAjUVVvdFQBqGFkVaYzPQUC3X1h",
  "key40": "izkASyP35diYbeT8cd1AaEiXdZCmWEKcVWa2zXUvumNMz7dTxuNSnYm95NyoaaLhZEfvvyj4Gc85b42hWRJJETN",
  "key41": "5Vz4ftZv35PWvv8L3UyfijG5tF3LP19ijZd6HadVKKYPDonfJZv62eSwT71aUkcpzA29nuUrAHUNHU3psJht7p5e",
  "key42": "2zmt46z2L9u896aKsCBDs7YUV8xi7zD2KNF8wP4TrEe22yD6TXJ6jetoJcmtoTU3fKGVBpoWLe21fUcuEfCm7tnc",
  "key43": "12652aBGguPfK684fuWa8Qj5nxV9GjCrBxGaWR88uN4n1dyBrcsUbUBCuNxMAuLMxbmUftkVNgJ66AUqamAQ3QPA",
  "key44": "4r2948bojGWASw9Zk7g3AG8yic6boELLamnQUKFUa3s7cXhqcERGDvcot7p2Mhwpu3E2dbR6uyKkybqYG2rzBRJr",
  "key45": "4sUr8PJmnb1yPycrWyAKXQj6Gi9q4PJtWVHt1GBLkQApdv8wY2KTSjEW3t13syVmwwm7DQKB1L82VTCwVbGjsnd",
  "key46": "FxNiu67H3YPvcCxTuvGY11gnxFi1bFAjjnJM3ZBuypxDFqo9h151TYzXUQ9WwjpM2auCp5QH9BhfEYEzs5XsUWQ",
  "key47": "2sDo7idd5PZaBXUHayZ6mTZD9B7fZnpwcD7HCbva2Ueqm8dpLCjHavDo2VLuFeiG43PELsHo6qZaB5SrGuVZadnN",
  "key48": "3NVGXGHCSyGxKi7RJApFxM37UDPNSLkXMwjefXt4mBS3aZ1PSmwFtxWwUrDLSSwevw9wiNizEp81ZKheWj57xCjk",
  "key49": "2FBhJUSPBqR6nD1yUeAmTsu7XAH3isju6UtAe8gXHgdZPGDUtYW2UqvXNV3N9u4peUqmrVxrmccBUEMeZWjARZ5g"
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
