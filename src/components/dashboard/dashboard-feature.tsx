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
    "3nKYpKZJXTqTgNxvzDJLLZzy45NdpsgyHGBQcLBQu6gBEPDEp24p4MTArWHhUH3xiSymF5cPr6ii2zx3Z4BnHBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p4bf2NbvxF3uT33f2huyxBL3gCU9Kk8cgpbceexWsHNF7BgmLLNcm3VY4oHLx6F2Jc3xekPLtg8Byc17B1vRKmH",
  "key1": "39yx14sa8ys6siAn1XE1X5gFzDzZfUnpCAfFSvzNUAFgt5vv6Wum9Vpypc3VLNQi4CgQzUnjpGAK8AL6gBYgDSby",
  "key2": "5MqxMhLzLURrTTmWmzympdL7QzAynMmKjTtNFfeMUjafG97D4jUZGLZQDTrqR94g4C8838ezwYFFohtLFhninLWB",
  "key3": "3VGU7Y8GznFkvfuMjJ53w3qV2y5wjFtMUGDXZb2ZfUKTm7nJH75nhWzkkKCtkQZc3NiYMLYeufkYyYv6qyXCuZR9",
  "key4": "5Yoi8KmPbUKSnVuL8QNkQsEPyFKEcFcSsANZ2AkSuLyDzgKgQf9TchrSaE9kj7qfsGM3tfN8HPb1VketDuXjYQzq",
  "key5": "5ZFke7a7R2bVahkGGkgnabQ8D5z8SPyA6PpfriNkpTTDExZUX4rxYL18wAMgjWNj6EM3GdPxCJR7NjPBHUHoL9dK",
  "key6": "4bNW5is4N66Njf5bRnqAgJuoUksc56e7opLXSPD5qTnYzH8Yi4qTTfktnEUmfAYYu59n5mxU6BxhGHXgM5T4zoqM",
  "key7": "44rAXedhQg2h655umnvEz6GYWmfW8FbSVXbC6ngF9MNUvY2xhYvWnWauNmWTjqaXHNybG1oqkGB7fvcMPmMr4Ga7",
  "key8": "zarrThVv44oCh5J5HFoZykV1nyZusQDQmLy1vtuU7dokwasdkuSCiqV8PNdp5NFQsuJLwmMBcTU88kw6QuuMqk7",
  "key9": "42xgT7pxaAdV8EtbXn5uKqsUydyjLnWbXBMtzWa5XcLBm3BCTgMEB7zbdbFhAzh8RCvfajnSRnJPbRjiFEZ9MyWS",
  "key10": "65XMLKxWcUiKLfewh94gLZXpgkqpo4ctQoz9nJWVbHaMjnpR7UL3wKJYnmw4d2UofJ2i2avqXL7mdL5ZN49k29ba",
  "key11": "4VrAa3u1Tra1iFk2A8ySt3z2U4CQ5QJ74CTWUW8C9HVuqueTMCb5WmsxpX2nsV7zuyAAT5uZTbL8vCTuKnq4B4YY",
  "key12": "5j6k9jPNNu2kzKXhsv7TEe775DG4JZTABNG5njGBLs7rqxjnhrF96TWczewfedf6BrM1TY7FwSnTe3s8EjSzq6MJ",
  "key13": "4fS5LekJ4bonhwGMzbCpcMRLPiPL6XS77rtMxeQJEnrz8RSCiFAaiFVyndWjPL8SWmc5ETsbct2JPLEhpQ73pAAJ",
  "key14": "HDAP6jM6GemcLFBH92BWBfp63Mgh5DstEjLMwkY6Dv3iesioFhouCCfb7eDHgJZDwEFMCBt7DeVatfJAD5StEEk",
  "key15": "2uJj3QuDJSx6aUJHMPHmkc5UiADfHFXXRTFvQMan7to2h31Zb4xPYz7jEfSD3xnQxDRnQfrXYusTNJhCauadfRq5",
  "key16": "2kSdYVbTJHpZq7d329RPZCeBGtRSQRBbHhJpvhVAURJjnf5qzHHUs8i9i2iRkTJyk6US412uVdbk5RohKbYtvuiN",
  "key17": "CMEbWXoLhLn1RNUvXynbQDKy2xAvVNe5uxNqvFD8PHB7VJn8MbMTRxjAJ9iukEtQkAh6Y9c82Us1tZcrVVWeFet",
  "key18": "2a8YSPn86xuszjWupaW8RH2hXFG3tVQBrbyHSP9qHEznP7bzoJZCk3V2vYByuFgmZdA2EF2iy1oiQ3BR1qHdZqZt",
  "key19": "5jN6DZq69gQiDjn3wuASTwknEMa3Q5bEPacTL9ASdVuaaeUHVN4QuTFs8oq1hvWo9aYpd9XdVK9UFc8nLorEpuqB",
  "key20": "4hV4WTvMp3UeMcvBxb5cUtdCvUpToWJAkG1Y24mtrjTfRg3GteJ7XZKvaaKuGUXfAXeRvVusFUBjow5UZxvfCecL",
  "key21": "4eey4KievXhDCfyaQxcPiCbFkSgP2mDfndFXC6L9u8sjdM7YyPQsB57Cr6unFU9G65JoC9WWUAKpFNjwCmh3uLTp",
  "key22": "i8bVgPShVyJcJ2Fq8rethn1yNrMo2vfipGum389mbm7PTnPzGBBRQSU4uvmRM3DWtLdpKb8pVfKZjt1yXkcT21v",
  "key23": "3u69H1B16kWPR36C1YUYhHJ6YX9y5WP5okbeV2YyF3k8zpwTG7RSConjvgfRp7uQR9Bnxw9jiRUujYjNjXXkHqij",
  "key24": "ij8iNiVQSf4Jit1wuvsqDP2K45v4g32WTEJxqazFw8ZpGTPKuAW7paujK1ZAysg7qSwR3GsHsZqetbqAHUWn8qa",
  "key25": "3xzE996tW6M8wcokcBJXAWfLimSuiHopZvK77DEkbnnQFn9pG21MASeXAygUcs7yyVxUX7WaCSMk1PqfXLxP9usD",
  "key26": "4gYpJR6aGxsxsA5RrF8pQD8TnCUYm4epqs261J1oZ6sPcxwPJsSuifzG1MjH5rQtCSY5KEet5PGV4ejJ54HAG46g",
  "key27": "ZG4oT2qSg1kSKEeDsFbojuAKrPGpftp34CHtceFUHU7bgy193GaVC5sZA3yJGiPbzVCZcndg6vEiVr2X58R1ugw",
  "key28": "57yheTGUMTkhpCkzfD5EAwLTNECkbNGTi6ThMC7gqXRuxds8GVPtGWyUmEyU3kfmsUvvKMycVtHbNvyGWsPcye3F",
  "key29": "4ojZhJxZtMckrrdhD9EXKf66YLdMQbPFP128A4tiQrmJx5X7ZDhpLkYkE8GxeoHdUDRuHa2ugjAAoZrHpYrGDqhR",
  "key30": "cscY5Rutr6eZ7DsH7Yap5mxVSCKx6Xk4JXS5yqTRQtbqaxWuJ43qPdApmvQRmnCENGY8akBnLQX6oGHRFSfs16C",
  "key31": "HNMucLJHcd2P2W44v1BHJmemupycCheMRHGtTTX71RxaQPvUhuqY5qGHxxxsnCcuXnyfeKUM87cB6RXnHZ3J6Xx",
  "key32": "3Z84YS7KrKjRCgpn74Ek5ERiyA79p3uSy2AdZdk55LFm7UyHDiHAhaKXCh2wMxcESwfnnUkkzmdSqjwZefdEMRk5",
  "key33": "4gFRddzbvCCDF8cT4iCKhXufMmJpm7un5hCFeHhfxa96m2qsKwZ2x7vQZw6N8dcV44KH7vE1rJaKz1vq9MT4gwfL",
  "key34": "3XGh5M4QQy8d6LeCGVUPpJEjd3MMWThc9g6X4CEVoEnPQwA4edpT6TDcHaYSM7rQurRtMjLKYE8YUCTvUhkViu2u",
  "key35": "4FjAURbDcTWiBLkeAkJ5FUVqnkR52htnhYLNPoFikHMv2SQht3JVRwnpLmPFb2hNgLJFv58hQCAdsJM7skaSC3Qg",
  "key36": "TpciQXZnD5Jx2MQFq1NYY75cJB4VKTjvgJLJb4DYsySd7YmbjbMQkyvFKTZgEUdcjyWEZVvpdBjoY2gRSuisRij",
  "key37": "2YfGeppM8ZGEMEDpXVpoTxNPfxdn5VnEEjs3pofyhdL95JUTHnUeYV2Q5jXVk3cvNhTm15jN5mkVDNKkWhQgDku2",
  "key38": "5QbFMpgAXPaydNuvTthwcxURtxdZ41LxTgdXxr7QNHk9rnuq5yf2A4JBZsHqfDgPTaHtveTqtA4ymiqvj384VzYk",
  "key39": "RNNv2TetsDpfeAwQr3RCgoezsRQUv8NfYxhzgzKrNZYs5rB59pKNKDwJts9C3M9KksjiJ23SGe4iRZxBUdccn7h"
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
