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
    "2cLjzCgcmBbaLbQfiWeZP5SLLZmsSQVvRdDmU2uDu2SdFGZMogYy7y3FTNBZ4e937ozM8AAaehEBhqQYv8M2ueqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7KbsQEfTooPxdABibzCMz1AVMyqS69FWeB3d22j1egZCz6ncGwDq6dDkxiVBwi43VwZqasrpVHznHSEiNZTF7f",
  "key1": "wSuh2ecGfk4cZ7HqCqQmcPfAVj7n9GQxRD7U6RCn68N5Kce3YQgv87dKx8qMY5AfYhBSEdQhvNdRPQoM6qZwiKa",
  "key2": "213AEJRA6uhEewt28ge85kzgaBZ6sPcQfropZRTMmLfBYTbnpeuASjs7fcP4J8o6F8wE3gtmjQdwVEWuHLn7vj53",
  "key3": "n7KP2GEKiSvgEauBfCT9rrkezRjxPqu7ADtgxPhteq6f2FZRR7J2BXeJbmwpR2VSohzg3PLCw4RSkS4psm6Vna8",
  "key4": "5dHJeJCFnbt9FP1Sm5zgSWHW3qoYzgUwPV3Qka8MESqGDgu6PDjkd8geBSKxefPZ1VWzHomF5YMLD1YxCu98zBHa",
  "key5": "J4e71TCAYfKPELdivJuvF8TZNFMaQ4Ftm3XzsrruTPuwQgJkSGRe5K3LQsdi4yN64akyAtEWL54GDp9Ej4aVBp9",
  "key6": "MdDQi2tQYJGQs71JMk7ccN5kNHuTSokbLD5qYcuFGFQ7773NkYvUpkvuRKYL78h7eqTegh1dCV1TSnCvWxU5VHD",
  "key7": "2i3cWiFxuFYuNcNrnFMZ2cazPGkTBzYsep3Ae7VaoFjSMSSieZkQZq1gu8gZr1ixjnFnRXCVWur2T5zyEYhUp3HG",
  "key8": "Fs6ct7zXvUdP4QXokoyWv6mrXMej36e2GxxYJufGXrDynTiXQLxSFaECKvDxnynHGCWsJMQnh2bzzL3bM6ekmU7",
  "key9": "2vtqfBBhcW2iDoNzUqTiqfR5VDTTKdCcPkTJfzqtvh9jvv1N4oC2yknHjvbevFTigpziAQ3Mv6Gmzk1Lu8zJ3jom",
  "key10": "2L5Qqxhwp2XkXJC1zApTxydckeAZV9sukkw2MyZAuDypgxoi99YQw4GromDbwxypmRTWV7d9iBCJQf4qohRB3sHo",
  "key11": "63whAkzAwxMMDDRsWAvkPU5L8G2z8j9iv2xqzfjJntNcczt1BmoTb5YpQQdyqFqwX5sVF8k7rYw2xh2amEJDSKRH",
  "key12": "26cKYBqdVWH5PgUb2y4t4YPTbkWp4sEXZzqjPmJfxNZyzY5cezQzDVXSbUT925rgvqVPyQHo9brFH3rovVyW1Xbn",
  "key13": "2hDN3WGxDHFHSVxEC9iae9MFSsfTtL7Xq4Nhf6cEY3za4YwhkiNzHtabi9P6WrDrxkhACpes287J52EmexhLxQsp",
  "key14": "rFGxQ2C3jBQnW6dWu6p6qouXt3G7nyYViY7wEgRSKWKjHKGGQJK5Z53dSdLiFULfJ6UNpPrFxmzcWxve4caFpyB",
  "key15": "5Z4VxC1eAr5QkPMKDtHHHxhWu3C5xbjSuaDqgXycmUJYPUPDGE5YpV9PeRfgbzMuZzki59WMvijkG1K9RcVGKEKh",
  "key16": "aKvreEzYLAc5qoYPL67WcDD4cvpH2p5XiZYRCqnTDUqQH9HRDYb1mXi9MPZjeEULVUJnxw9UkVggeXAQjmak2KR",
  "key17": "2uxg2BWvf3pjw8ChnYC7nuKD2iHRzanTT212V1UCjvYBFHKzYm3MXLaGsseZrvDB6aKLqVphNxXEShS1BMRLCTe9",
  "key18": "4VJjL54c8qVkmmSBS6G8msu8NPyWCvt1HxFiN5cpxKsbZPdm5T3QscRKa2RyWMA3s5Etmqv6S922owVfxtuHHgbU",
  "key19": "1Q8GtV6nhTpyjGPGULrxErLZ5ttvkrzUXv556644bfaN2isfHMQBnXfj78AKhyMBXdLmX5VfoqLNwngjPEh3pJj",
  "key20": "3Hp4xpZfczcEekSztoECTsLEFLEMi353VhhRf56CHThD5P8h3AYmnmPdD27Ufgj5SbDKoBP5uGjpaUNv2gydXRTt",
  "key21": "2giyqszPnRSLjUXWqgHnwvHqAX6ACR76QejhJza3SpHwnwccvvTSWTaTAwmmWGaq9MvpuCB1Cnpbifd6HEnso4TA",
  "key22": "3xirVGMCM5Qy5FhXc7oP44yZCE1QQNPT3xKgQtTHx56mbB4WxQQBWRy7ujDgSQpUdUMP8odzejvGpTDuiaFZf1yn",
  "key23": "2CBdwd1jZUizngFMYGZza4xyhQgNtwxuNf5DJe4rn4y5HT3fTP8N9Cy9TRfZvvbXQPPqcBFTvUN3QcJPYjrfxHoS",
  "key24": "QYU1xxkYoHz2qhofw9BhPHSFcPnSYFuXUN3VYtuFu9rjpyBZEdws9rhjN5rNZX5teaCmXm77LqLyMtMPwDbzVi8",
  "key25": "2eR3CtUXhTLvnZi2cQAc9FMP1KvYPhzTYynx5HprQQafpH7VU4YMQ765zKvFzaL9qXyhoKnccUW3MsySmPtdAays",
  "key26": "zDKF8rgc8YkrVwDXxHt5VC1QKaFrrrHwSpSqhKrX8KP4gGnr4iAe2rNBBh782ygVje9nk4aMJQ6s7a4QWfjiGyD",
  "key27": "5LP3U14xAoMDURgY9FuFdXX1umNCE5Xnz3BUJy53y7zWLhuFHb92yAL67W1DqPVE8YGEbq7pxCX6b15fYv7r6Ydm",
  "key28": "3HniG3gjcxCP9tkzqxkYhSZcePdP5L7xDVDpsRxBgcbVw3GpTgBmxMSykRFLCwA4RJ3TXzoeBVnwn2ahStLgb4Bp",
  "key29": "59TtCGQMdELx34aU9U5teuRoLYCeqsnzYKm8Tbp54VP5cszkJoW8n3taQediLFCy11rhbEqDa27d4vUbfVZoAG9r",
  "key30": "4QcS2WPum53N4bfB5QqxaJ43ifs5A41eqrGENjcJp4FyfU3jCBCkeN7YQus29tTvaQWCbEZDa8MqLK9pz9LATyqe",
  "key31": "3fQqugdK9FdoZegAmgiYPftwDBmNE5iHYQkKaLm6sUbNBPZoUsbmECD4BeHUU7aCW67mUg95vQd9SHXLppe2spas",
  "key32": "wBHuALNYxfvs72rbTzezC4Pm1DgZVKWBwpVTovoH7nucuRebukaEoueK9m88LQQBgDsTXwF8JSGwkiRmfCR3PjZ",
  "key33": "67M9AmnovGLx1fLyXqurRiKCWxNmTsn4tzz25sbmSGqnmEPdirpH8HzX4aFtwjNjKUnEYfmL3AxUbBBCFagFobAb",
  "key34": "2RKZyKJqVCqZ4Zb95xvNJXfZGdYcUY95Lut41CowKzY9EKzLEpjSLuk9LombH7epRdAJCMVrtEarhMjoAPpzqy8i"
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
