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
    "2N3r3kZnc6bwaXWzUQbiYSibajV9KpgcnDvFstvu7G1PbtBEL9zq32XN5SbvcHnNGLKWGdZycoV2QZyH2pxgvxRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMsUKtVjLK1bKdmShyDCfr9canDJUfyGPEy9GyUY2hHrFjWohvui1Jcj9nctTXRe1TzZUu9FwBc47APRi7Qrbph",
  "key1": "5FVr9dhbYwp8QCSd9yJDaAyS8BKKofVgweJVpuwB4poToxTaF8qXutEmGrvtXCz6pryMnDtRFmoVrYVDcfrJno6w",
  "key2": "63vfmRLHceMFVZbY7VhdeG3Fz14dCXPAAVYmDJSiBST5AJyW6qkrBLcmSzJJ7mRqRQ1xr81Nvcuj8jVP8zLxnh5D",
  "key3": "4Cf7A9HuRbB28bHrzMkMZGAh2Ubf2JWrro5dE2TGFATKSUg558HvRwBwWQDkjugXd7HGi5Qk77caAHdSKA9tvNAF",
  "key4": "5ESRMGrJ2JrR5RXhgNLF73KwdWU9PaNAPsncPV1khWd9ifAqABd8PAU12T7jWLHK5mQwcjqziThCBy6sWYAXqNRk",
  "key5": "3ehDfYppuUENpXSnGrq3MSHieEzVbg7TrUuHHtcsd8uQSuT712CRRF41j9cnA6oZnQ7xwiDLcdM4PNiEysCkVUUU",
  "key6": "4KZ1XWqYDgwM2rzhsgUoEDR2tjMpnL2k35vKgkDyRpniJPS2Vn3joTXuS3jC5DRUHkvySes8bcnEcWCDroWNJcaS",
  "key7": "5zcwgVXsBisWYmSe7L7kKE4vdw4qTE69E8MP5Dk6vbcvTweEgiYegRR33Ve4KVWYsdHRTJ3AjgNcWkxF7nwYRhsB",
  "key8": "2fVg3bm5BqgWEDuLY4eWP9jHFL2Jy4sdjcmtp2n6k4r5a4tytm86T5FFptWDTZhLAbQ25p9qpCjX4J3ULWsyqWzZ",
  "key9": "24HtPyMgTeRorC9fccTno3816P5HyucQRxwF9S9DTmZJCPBiZ6nGQUi8DViJFS9xe7V6wuj8RNveEGFyNnh4nbPR",
  "key10": "3ezpdhwsE44JWvofdGAdKebgF2n4WD6sjV1joteQtQ9R2wx6V7dT1ZCdcLXv4podpnCzpG2ZSd95gXU3hzCBdhsT",
  "key11": "3xXCkWbEZxvouhTrQcC1bqYpZEEguFbuX91mKdzvxCESCp1oC3YLRfnr9kruPzXEA14NSzcD8tTxTkVA6hnsghvR",
  "key12": "6DvMcHws8ARf3eZQSZm8Y2iN2EeaAgRtZYx2ehQZuP6MYNzHq5LJ49CzN54gkK283A12R4jpAL1YacJ6V96KJr4",
  "key13": "3mnoSYoDPaYhkBe6DNpFi6iA4MuN1Ms35CtZW2QbpEVx3J7j1Z77D4L9eXHXnnjLQqtdoEKHNziUYkDeUH6YZT1M",
  "key14": "5dvg6v5p9Rv2A3kHtbM8CqYPUnup45q7t4Ke5UzQSqVCMDs4wM43kPDtNUHBY7iU11YFYgUMPL1EpUv2kHcUA6VY",
  "key15": "5Ym9ARFjexAdyHAZoMXaPxWZxvHein4cL6usVYryNFGqis3YYaGAGyUdcq25an3epFXhbDwYawouJysiucWcNLPH",
  "key16": "4yEAN4KvxzFR12boRg8UYaHchoaYM3KhQrvrfVUurEdnHAZ9nZvNpLhAEvc8fvtr1ho44pvMKqHqDz1DnAkobgro",
  "key17": "43qs1cCA3hMMXT4GY8AXx4Kt8jBLue3tmcPqHmfnyVwJ85acNf9m8k5oV2EkQagfsFqbxFUEma3KrdK71Ngi6oz8",
  "key18": "46m6aSzbcvzca6mtWAJXTo6RwMRpMKhJt5emwiKmYcUJQqmp7P4KXoNwDsCzReb4HKeTQ4mLCderMjfehp2SvLrn",
  "key19": "2YiE8kRWEQD1nwYMFeY6TXTJhUejuRX9nhDKCsLNcez9qv6qXLjryWYw991n2FHzCipJD47eVYD6XAigUPYbjraa",
  "key20": "54Gy7Lm1j1ydxWNZELoaT9TF8kULCGR2dozRSkcCHqY9QnhqWSfJM7tfJszqD3YUWb5Ev2gEDSxPNbx24McfBVHB",
  "key21": "hwPR6cvQEWa35KVDtRXHDSXu9nwyffypBUkRFQFyaLrkN8ki7kCpbB6yMvraGqmstAs9qiWF831R8qLWovSJSzx",
  "key22": "35H7ta556iAKQGhWkA2ezQqhsDHqDXp7BqiAd2EndZsv424wzeeMkgtHHPbLgKswSaZWebakkDsmGgVwsVvB4ycb",
  "key23": "5zroatZHw5drna8ExU9CnXQDnwtg1tUo1kXfSU5WHbScBeRpLGgnFLujUgFcanxFQDKejE47ZtBfURTNpeWfkvDV",
  "key24": "5jcwpU4KBXpRA7pYwzkE4mRnFwajNUs5uGeL2GA22XZmXPb1WxuP1VmaHKLjm6BBep87cPuGQKXQT6JoY45NBRqD",
  "key25": "2WDrnfDePWJic1d9z9Fi31AiwukZV4gFBoCMUw18AR5Kc3LUDNwaWnspQ8W1JKQnXzUGHLmvHye7YLrzgvHWmYKE",
  "key26": "MnsbyKrv8ZTzVrZFYngwddYdseuLf8ADCgYbhQ3qwphgLooUpWsD5R1hQgk7tJyJTBisciDgCCbfHpPwvYPiy6T",
  "key27": "4DhsyUKrUEoNa1JoMgL3uVgTvcWs5itRG5g4VH3QXrpcTLdpsVzYxCkUUUUGgDoTjxh6ZH7Npzy53Zziwt7nesnH",
  "key28": "4xhhQHhGTSyAHFDFDvfTZQ8FyitnbEr3XwaUjsV6rKkKdqAv6Qzeq61Qq88mJX1TmUCUgWJCb5NdVfGLpXzGKNM1",
  "key29": "4dxjr5MmZJ1GbdsBQFbWetcv9YtmV9XbHv74RnKuTiM2ZeqoUL6kDdBvgHUgvLhc1eADSjzZTerJsjJVrxtH1LGX",
  "key30": "UxuHwUMe2ZHwoeQStACiaBrTvJTufRu48GSf3KdTKN9BDhaxDegXpfCKKGM2ST5jRTGeNP8seRqkQCkPKdkeYo8",
  "key31": "Td9YGi3nuMYxHQLTDjFvd7mxD2TCk2jfdALNF7DJF7Lu83GwoQ73KqJu3CaWg9BXvnebwf484RyNch6iwmckQdG",
  "key32": "3iCmnBqsJ3AHzAxr6gdC1ipHJrKZH9YcBmdCVc8j6pmwyWNseDzK2WawJc3EFJD9bxVVGJJRaa7qrZMwkNiYjeoM",
  "key33": "3Mtp1K5rnv8TK6ztXq64vdyqtKTga7JgcKY8i2j6m8ZqtuHsnYFVX5Swofin6LR1HGR258GS6ermahxanDMMksuE",
  "key34": "515PLQZ8GDoUxoETPGhz6B4qmq2QNBRvipduyxBX7YcNc5cY6wQE3n6VFRFka1ie9t5QopmgHaAi2TRNDBz1nFtV",
  "key35": "aBUki757ptE8gkMcm3FXvgXm1HLoKoepYYyNEtTcHq22Gmb4w3ARWQ1pZaKb69spWU5yhHund7EsPwjez4V7EMR"
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
