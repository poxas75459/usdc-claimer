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
    "2qTQRU1RByzgmR7SWUT4oLAg7iQWRQFKqtnSBf9QupiDrVhW28XK5372m6Pt1yCUxrNcBav6cY8xAEVMoobTz8oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtNDQxGESqE53gnE3fCUtQYDzfbR9Mc5xSJq129BESUU83mRRPyE88fPpuRMSJnwXQMtqPDDdgcXVrTC9BRmbL8",
  "key1": "5ej1HyWw6pmHX77onUXGX9JyV5u8PZbP3EfNk7QgQWKFPKoHwLMkvbRirayZfVTq8c27JZZERcLssQFsJ4dmnb6u",
  "key2": "2X4GhTPG7dEkS7w6ZHMNmEohxu7Wi77WYhx1Kpnh88tNA3enupGxhfEZ8L4ywfMfGDFBSduhbitNbExYLjo3kPKp",
  "key3": "3fMgZfvxr1tcDThXs4R958s3wvC1Bm7FPqLm57XaLtBYc2g44UhQpmiyYpNXduWcKVGzyvEu9aUJrbXmDmD72Z7j",
  "key4": "Da12uGNmLrfrYjL7Y2sewhWQvENxeaLxmSsPjEhuMVeY9ZmmMBWKu2gLzK4224G9hhAYGTWs7UBezBuejACLu7s",
  "key5": "2zPziJKEtRgeTGr4Q1UAB6Keu4o7dcUYe5svijGAgZCmCU2whG36erW8Za1kRYkGGRToe4Npgo9ho8eMsvcJPn7C",
  "key6": "2ovpTaEmtfVu1oo45Zog4NqP7zX8sQAnAVWjB7BL7NtSUtBQkbTxJDwQySeEiXXcfJyJbkHsSYKETuWA7uapGHLR",
  "key7": "2rRFioP4RzuRCFQhtwKU6TQRwQvWd2JhENAHudcAGR9K3uCnnTpJcoDzwWXQn9n5wqaDyX1XZbSSyApx9wv6hfeE",
  "key8": "3qD8kfn5zn3evaLG14gPjJWBFX4FNbLGZmXL9qU9xsVYKb4a1v61w7TcMCmE8mKJgv1DhrubBeuhUoHjmzMCcJZE",
  "key9": "2pQ3YWXe9GDfXCFT5UbbgnXpp9YfUaaF1LbTfA9cCzxbx7Xoq9bRtZpS1ijSTQNgpJCk9oEDDRpUma1utfE3x5oS",
  "key10": "j57hjPUG9CK5yWBh3PbnxB7MjDP2i7Tdv19H4ahTCZsmtxtVFV95N7oJnJ5VSAgR2GUtmuNtj14Uf7AwuUyiSJK",
  "key11": "5Cm6Y6ktovr824xNmqSCA4rMumuuknJ9ySA8Ex2ZVL16cZWzLQMwUwhMBiAMoCKhDPARcXyEPJgw9Xm2EwEXviFD",
  "key12": "2Yih14s6XzZfrExkfLcmh8rybWo9vB4uY6Bm7kmvA15Z7XkAuZkzGg32LqoMim2H96mfWd52ZtJ8UkJiqejnaTdW",
  "key13": "2phLHYfWu2vNC4nr8KpEYyvrX4y143iC3gzqDBLEUBbTbr15WKEvfYsEmYpXph5JEaiSVrptprw6XeYLCztJXJj9",
  "key14": "5tkVbQ7pg83F9nxFMnGdpaFJ4PM65TC9hF8kT3x6kPV5Cz2o4Y3gDyWAfVH4YPQxSGhnbVobENh2Rgqg2Us1UniF",
  "key15": "nhhYT2sQGsgMcFMMcQy8aoYAhbCwk4KzN25VZtgZDu3K6wZxxHyKSSgK7APW54URF5ZrzJX9P1D96QX55EbfwXW",
  "key16": "3edazXyU3uUkF4da2wENoy24k4uJpJG5fmQphE1wxkZs9pLmo3Srn32uodtC4uFKHrTrbxxL7gnXdYYipT5aYx5q",
  "key17": "3pdsrx8qd4B5opRtr79cfbhJuqgTWHNQL4Yxnzna91QBseKNNJkFWiUEWvNDYcTjk4p7Y5iBMzFJmnsrNu1uhtRb",
  "key18": "3H4w9DvhfStvgNPP1bRbwqdsEaumPEjmJvYkcxeusgyAja4vqYcKjjGPzcTKcvpsCbWHzQtAAhjfmmMDzRvfjBzy",
  "key19": "5EcHghfWG5vgtXnZauxUxdhWcUrQyrydk89Vuh5Cu9taE6GEd3pgYoz6pSDwhup8xYvcfP9bKwjeaGUAS9SCGjXu",
  "key20": "44mYwdPUoe6ZyfPggJKzQUHBEug1QbUmw8Grftc56SsrV6eoBAwJRsVG2n1gKyc3bQQZQu3TamM9myDBJd6syCJi",
  "key21": "2ipGfCGXe6hpcjeyhnKJS1fQEmPSHhodTA33EJkKwbEFKr9Whv5SNUvmbnsEvARyYKrtvdygjzUrciQDTMRK5ob",
  "key22": "246DsTkpr8Pi4ix2VUXgqn81Gz9aGPqUXrXi9vh4ebZFJ58UdVMdn9nPZdYUymVDTtqDtxmZBmTnuUMwACzqxo2P",
  "key23": "487GMZUHCs62kTDUgs9D25ZRb1cBBkHDUETJzcuy3oWib6CZhkZb2XeDVciF59mQYFc1gjCG2kf1Lu92i4doEB7F",
  "key24": "K2BBqT41W3GkYRkAzfrkQ37aqWns8VChLwhFigrh55fb7z82ynUjjCkZA7W6uKdbDuh4hU2aoXBhCmC3MfTGcny",
  "key25": "9mTzZsbttbfD8LqBBewRJw8LmCbLCpGm5f7RhAFhfZzyFWBC3ayEonkNkekN5wVcZnw1yAWzeF3jEvnxtuEHU7x",
  "key26": "4ANVJL7efTpMVY4i8th4HJTfRgppUEkHWYFcDj8WcdJfNHgGWDoy52ZAqPVMpCPSndGEkGFSHrg4n7FMSQrDfc7p",
  "key27": "oXD3eWMesge249HwvNyahHDvpzz1VpBpDATwuPyW8MrP8n4rbymmTBGCvxsYKfWZTA8XzYGhMtqJufKVYQNfHTR",
  "key28": "43a1vumQLauw2QLv3yFyd3U7C3BimaJbph9DBC5TvbamdaQHy9ZX8vrZEdJX5fVQdxGiPe27jxbBFCMDrs2qFwfg",
  "key29": "5TZhMTk2DjCoUSeXCbAhK5Yoiwa3RpRGku4swBPdwffyLE2As8ZQLWTQ5DVakGRYQ9VwvUWpQANuXW5BqZ3rDtMN",
  "key30": "4injGTrAgk2yV9acT17KctH5593xC8frkrhx3o2yYCzp34XFe9FKXgynaDDm4u3J4JqG8sirLXmcVXqMeeECTvbq",
  "key31": "3jcVYiWSRx2iX6N7RGTWYHSYFCtRgnSPfJXLky1Cyq22pcLMiPhjk1iBBtjEZ1UifXE6PcceAjVBgqGffesKssUG",
  "key32": "5GoYAzRS5Hm3BNDYB71j2aPau8QpFLikaR169LCyfpRHWYEAL5mK8a8FsfPByaezoyqiE7r72P9uF2PkVLToi2Kx",
  "key33": "52cFCcsnf4LVU6PLBvy4UwbmjXzRSNBZCTk8GRBwz3V9oUkmL764ZdTMeLxYV7x333X1retM6c3g5ee7H3MHLMCV",
  "key34": "2jfzz9r9hWTftMuVoRFU3cb8RczMqCJ2XiF6r9ZLuqT8wnzgXGXkqyARwUwzRoXj5S8DPGRjJ7vGEsavUjFDHrUG",
  "key35": "2YJAgTNaQCVMMDKR3YdKefreXX8wiekTHoQP4hEHV25JLZDsLCgXfbmNRe2SKd6Zw53TRmLuh1ebGbnFxuFYxjdD",
  "key36": "4Aqk5iaS3P2bXa15jot33U1cKYHhdyJdUk4dqZYqNuwTXFotLniiRRmnS3hLdxVdkRtzeBsAE1SCPc1Tfw8nLxxb",
  "key37": "MrHdCjkYhJb1KcaZyRZnEWm926aDKJMriYWWPFEFmcKkdCGFe451jgd4sNxspM4iJ3JkWFY59DqyYcce42uFGoZ",
  "key38": "4r1DezzSABGSNvek8NTfz5PrvDk43ngEYi5msnnCLjijdPVtN8FJw7dLDqkKXsCtcWLhxd7HFPjuXTfyA87LFNBL",
  "key39": "5gvNLcKDoWYYHt9XkapKTtrDFSc5guR9pBRC9PVLscHnyoS3pbZczkojdahDZcAkeLKqLesHcYegE52WL5otRPmX",
  "key40": "58o9zSiMGFCZhbXY9MHPzSLxa3TZ3eRauZEMmB24McBEZ6tykVTAGKUZhJRqzEVfX1BXRtfxgbjk4Xcx86NHenYN",
  "key41": "36oV1njnW4fCsUUrsVPfuiTtJ1LuQ5cw4YpcVKMTtVAYfptzChPZ9SquLZPth7HKfxTnprCPCrXrwoyNyUUJPqnd",
  "key42": "4mkW6nTsLEFtdfYwVhD7jCUPbg8XULpUqVtaJBSukZJfdr1Twj47Vp8i2cxGeHzfGejcAiWQuooysgTXkub15ATi",
  "key43": "5iTufnCKzwH5n1Bq94RGBHRL2vraZaKTjd39K5JHv1144Nnd6kLncZD1wHyEvnjwkuHKwZTJkCr9R28Bf5EBdeFX",
  "key44": "scLdYFr4FY39Se2MMu3YkrYw7gceUte6uTcLMn8wYL1B3X3jq7R1iCP7TmKHdEr9TmeMQto36Miw3ZstXCxsbUv",
  "key45": "3A9F6fEDdAViDr3csM8UE3xSPAmFD22DgQQqLfDJnQdr8DBszgudZuDLQ7LPq9wuRrcc8TCV14QQonvWfXoVF3Nd",
  "key46": "5Y7PnwYw4DQZDiqRgAaq4F8uwSuyAv6ew9wstdTBDsHMJ86P5XXNfTDQx7eZs3K8McaFXEFbkvzRbk1TXContMMS",
  "key47": "3yQTNwEufNrVQwosB1z87JQ7HzKyWs2pBg1Kgn6wJowDxgDfHU5m9kE1PEmnZ4QthhvtZ2en1jTswd9D4Hu2NCtt",
  "key48": "399r71RyBttFT1zMLbYVDcpMDHghM7d4URRRseXLjM7CqAjhf94Yp8tqo3RTNNt55VdEJFSmAnnGQvnmQWYrek7v"
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
