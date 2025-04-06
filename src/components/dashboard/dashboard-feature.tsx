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
    "5zqeRHwnYbSW8gbwLnjUJyqhmcZLP7LgBfttJxTnNihs6GBTCN6aH8paAqjEXQwoCQMgMVoGxcLVBVT8FV64abb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnR6fpi9pVE43RzU3BzKorCMS9MZjA3E5ANfQzXTVqPvL9PHfX8WXHaidjLuYvBsdA4FpgchpkYc2bNEDsdNFUU",
  "key1": "215rH8fvv7L3T7AcrdfaoynWD4aZoLMH8e4KhULgJvd3bN5HtmSNYbMRraFByiak8W7ahajoRTtpxfrCHFXfNq3w",
  "key2": "4meUuqhXzaFYbh8qfVQCkDt3jV6gXoWSwvksquMc2Nf1UeNZNGVg6zQxjgyfj3S3Xh12E7Mhvn9p6QnHfZ1tGkT7",
  "key3": "4yhYvMQFboXbuUebWdTFttu3Gkr22seLwv2vZyEpDxhYQUCjD6K9UccbJp4W6Zw2gKTNS77jUdf1VU4xgCVV2CvU",
  "key4": "3sjeChLHRrizAYfSMaQXB7hGk4Mj7rwgeinqPjuh51i4tVnc8q7QMDY1duwq7NWHV76wiForT2nPFAqi7YHCpuyT",
  "key5": "4EwZokHF1myB9KyQ4795d9woyPcxBRi9u5bbYqBKATWrKHDgZupsfTSYZphw9DMqCif94werT7h55ofkHB1GywRa",
  "key6": "3sCTWFJSfrBHAZ4HSHPXq2Sp64tXEC6bcaR2JqpDsHDpMcSpScDWZ9RrgXutMP3KDYvTDFWcsHA8pVkbpp9BRgJw",
  "key7": "4okMHDiCpbzRdAn16esDkAh33MBNvZe9Ua1rnaYAMWwctrW7QqqjbDCQMB964g1Cm8uHswjn7aFZDxDKw3hucz4C",
  "key8": "66ntuVjr2PmHPGkn4ZYf8hS7tQKbtRhdpgpEZXBbvQcRooc8fif9XgvRuJhLThpzqBwoSQL7vHZg6a6ES8tcQphs",
  "key9": "4mQQq7faViHMKmCQxZ5r2C6LNPk4pWZDDsd7zWKWyyGVBCbzdLBSjtnXYXxi1iTXvTRjV9S1BZsmJRBC6fe2c9Sp",
  "key10": "Ac3nzE4zMDZw96QNtVocb3dHTzbmiQS9bjwyMAA8qiuAEieNQ3666uUKZthY1qpvQ33LRPYPHWKSAjhYhtSzkk6",
  "key11": "QJUM9TviUZPpd662MqPwYaNd2v5Rrjf8RPZs7sGR6r3ZvfwhKYKVqZuLT6wk1NPsAfwgTmrbPmea4R5EhGx3Cd1",
  "key12": "5Y9wyDq2RUuF9GsuzEBdamjJgV8UDxiWhyXDY3NWGsVdfP4qSneLTm3f3QA2gpjfMZZVR8Qeu5yqM3u5FwCR5mEi",
  "key13": "2a7EGex7bnTpUKRgiVcsZC32hyxHPkNivpLTRdwGk7VzneHupiMaamNNKKi953acFpXN3Egesuw3dueaEdUgKyCC",
  "key14": "49Bj8mZNtAoT6ugeLmYwz6hnmyJhGamAfDqmTnxTPMMoVuTZ2qkPH4pT5B4xP8cr97JPd9JYTyskY2gA5Q28xhsu",
  "key15": "4wiBNvjV8npugw3KmLL92Eso2Fk2UZQsRdfhtwTyidHuksT1w6nYxTwEadD1S1LkTUpvEESxYrBSoJBRqFbaZNMC",
  "key16": "3q4xoKCHJtQkzRgRfNV4D8DfHFBPjscmjGAeXHmNRkhndUnzveya9gtkGK66whHESxsgMcsu6vHDQQN5NcKb9AnX",
  "key17": "5NGBNoeLFX1E8zJYCVGKJaLLLoCPZfE8qWFcYpPazcPYWftKbTyKPejkZ8zfCGAMAwyEyJe8cTQF7hLfwGTUduLD",
  "key18": "2LZ8vHviFFXdZo8T31xx2REmWZYMHe1PoQSing88b2G5zGs38ThXVpqX4RHNrqp8aqXUoeH5xNLHCW68kmWLZDiz",
  "key19": "tDZ1FZfDZkTbM9s244PmFddUtKvdECWBxUqfsCQwyczmK9qitwyRGhmZoxLMZTx1hc16mCf8fRXWLsMTsQS387s",
  "key20": "3RXejBADtu5SB79DcFdmuiA72PGj2C5FJotLzJxsHLuLtY1aaNwdNA5j6zATkaiSZUK8mMaRKM9M1H13gdi263wc",
  "key21": "5aQLsRkASu4RwDkfy4joVsWsTgPccG8Qph2sB58ZR9MecFeCBM64GDjJQmtKd8oNC9THCweRyccuEefe68KrJu6m",
  "key22": "3e1fKQwfLdrFTDiToqfWwCCKojSsdGWMEAt7GkjHZDFJZu3D3uRpCvPvSkGpHKaQmUPnbkXntcHCUcmrxgk26i69",
  "key23": "5QwmqheqnjvXZWvaL88vnpNykwg94M8aLPMAEvyfYpuYeErD3S7oU6oWkRTsxdcdYgHfcL5aggZVWTX2ckrztRr",
  "key24": "2gZwuE8NiLXYLPJDimyYXBD2QtzpWnDBa2A9YapJoYBs19zEEBg6PUHaj9DdmTeaMRr2NHdrdvo4XL98D5X3Ft8t",
  "key25": "45oAX3STZtQG4QYnknz9FwX9YUccKvf6uwGZeWivAPPDmJnVNYJeoYRG6Qrc4JiVcioMDcsBVh3XALT6oXhRguNw",
  "key26": "XWx4wGuCiQSkuTe3y1EEu9Jvc2PHNHHwofTcJEhP6L3kFo7s1Q2Srnjtd8TTDfF6sSWNtgyHTJHtjaf47JkNix3",
  "key27": "bkZLLaJRP94Ct7f3buD22pQY4Vpij7CUqjVrXrcx1k7SaKDnewDy4PzhmeC8x2r4xevyUegMmSU1paQBgd2gZ77",
  "key28": "5PBw44VBx2TVNiyqtM13RgsFYLwtkuvcdt65ZZMaybzbCFQynEsMF2ToCb2xrE9dAc5WnspMPtWFPyrW75Eou33W",
  "key29": "3PVdPQgcY98muCAYeQ4PzYfStAby4ughddZYxYBdg65bv7MaWVpbiS6DCAjGqYM6EdB9wKHenBvBvciRxwvHYUPa",
  "key30": "3NHT7jBbnCzoaa8DxDD8UZJSXbQS2qfyh6FXNGm2vHb8pdkBkaiffMWm1MhrbxMk8VwfiJCmbBHy5nkjjid8Jygd",
  "key31": "MP1RzUAdtBAH6PNRMKU1fpbPDgi2o58wpvGQfKXB1QsrVZfgkQ1FMEUtkbE1h5gquYJATZBgvdpvcGTQko9EFrB",
  "key32": "2hTPxEWTynTvPHbDWMq7BqGCwnA7dGKjjQDi4kDSLbKLCarVWiSWx4Gtw1XWEvVkPq65UpxTYtVwEvj4uhSUphko",
  "key33": "2YwhoygoNKUaLJG3wqxzdmRc8xuQpRZmwKwgUVnaKhpsW9MneHLPDqACxdMWyXsRyw6XbrvfGZXCZxXwHkrw2wfb",
  "key34": "3m7a9b56ytQtGmZegxWQ9fL8yZYu3rcUWbzWJj2oYrgeh1J75Shku48TheYr5F82NhUoG7dK7RSj5ud9kVSjqVxr",
  "key35": "5uEXST1Rs5mdTJqNHJ3YTkXVuQdayQW2d2y9sa4RRNW83fm4nqkNNXJoT66GC4iEy4AU23nFmJ9dS1S8qStwDXns",
  "key36": "5f3txU2EvHHziSj48YyhE5sp8Nshn4VxT9W4GcvedVrt2qLMSoYHntrVD15wgzaUaYEijB9cZyW5ZVC1U8HhMbbU",
  "key37": "4VoAWB9X3nnP1RzfRxbCPBzGTrVbFqA4g5qHYfFBQFMmLZvvdFQvsHdB44F2de8rB9okg5DuB324B43iep8RLgbH",
  "key38": "2nTNRWVWSsFzN6Cw1D3uT1VfzfurDiV8tkgbGgvJjqHBH4N8tNZseZjhm6WWcyB4YsRRf44ewnfa1STDmT42HvvG",
  "key39": "5rxcMeiUh7a1vHMB8EyBQGdPH3Gmucr2ESYZjPdELptjgqFrVX2BxHbhc7NZqF8LmEz1n5eKjQB9YbGcbPjVAQvm",
  "key40": "4VdrPNgf8nbS1ALfFVaHiwvCjiEwpgkNK3bhcUmzxaLZvTcmtNS4gBg6rmJk646E3wzR8n59oMgpBvBmiVtNXF99",
  "key41": "325G1zFvxBCVw3dyp88B9FYC3pzKGALfGhyg6U7CPHajqHCKFpXciMyeWDXUYNUeRWFrmisF44SPYzMpLTL5oywT",
  "key42": "4Y8kuVG8GknMyS7iPrhCAdEZkRbLeuKoDDSLgVHpZeRWyjxEBn42GAAQ2gLFXegEcFuc1i1wLKxcR1yh33uKN6u1",
  "key43": "3pX5tFnzCkusFptR8auHZMFXbm1hi3fWGykLTRcL5ZG98kgzfq2DPGo5urEwu6geJvKeBSpnUnj9ap9rKFHNGxms",
  "key44": "3r6q9PMtyWvv51hBpiLHhQgcFwMqtxJNpXtoKATmizqHwnShX6fKy9TpNva9tfSViENSnjFzm7zuhXXFDt4VZHct",
  "key45": "3jc4dDQBucUCneEuD853FwbqPM9uENFD4eyNXGE4sZoWip4B3MCHQf3eZkgQJvqEd5gGTPvuhPcWhTzJT2Pnng2n",
  "key46": "27WXZDFuFWQAq5JmJYy542SqPbcPBBTphXtUG5ryPmpGvi2T4Wf94S8CkCT7AifihKtLX528VHWrWmvMea2hzULY"
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
