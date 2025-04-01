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
    "4d4RzRwGimRFB12E2qYvqJfbdDWdA2juaD5nYF95RLAJPFoRXUDD2eBHsCKVAhwdyN7Jd7n88CQenZbvm7PQEGci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5gXQybUxMv7Y7LWcT8hLZHhULfNjgiY8VNEhvWv6afvybHEVMSMcMhBYjssArW9NASWGXBHgUcY7EcC339gheE",
  "key1": "3PkoZRxLqe39jmH6B7AAAfLa1kKWMkpsRCSLPdj6N86iiCme8ujUaWC6qqkRTFsvywDGWJJ4ab3rZ7wipEZPQxhC",
  "key2": "5jKLw2C6SumpTWA236uR4f3QWJFXy47V9u97JEukp2L9LhYRUmKGSBBNHNbw47EPQD6yMRHn42MaXtCnw6ERnhy5",
  "key3": "2tpgHaes1TxkCDCmHEPK5ATHHuD4USHC6UkUw8VtrcXyLAS5YjeWdxJwaAZZ8QqHgsKAyWyxcBGZmS6MwNTXbWdQ",
  "key4": "2QWW5fL6R7yG4283eQ4ggM98hv59z6TnMMVuTSyF9eJJak5GpPPef4shYkgv1cHxCTpsuraV2tXRrgrPByjkyWEk",
  "key5": "erDhd1xirKpBtvpmSpgF2WF8APMpXtRbMDqba2ShA6YfuLUrqMDdzkc1wZ8xvkv2jKXCsfatXjwFbt7iZKjbmRp",
  "key6": "2WB5wKuS5TyzqxosoAYsSBFGmFY8opmA8rsZs7YkBaHQsnd21neYvntKWXwGs5P7z4zYdbRiQibcgh2RSPmUra7n",
  "key7": "3YZmQsQBGC338xqxMgXuwmuxyNEKXvqRpGETKosnMSNV2f8W26xupxK49T57zoiJVSY17Vo7PFogtQqLLyc6RHDC",
  "key8": "4NKsBC4UNf9U1uoEpBCtdpnUc664kVdcJZqTXy8Gs1uvVrpDB9JeNdfqeej8XNQ3UHidHmVdrWQPp7UcBRi9S9eQ",
  "key9": "3uqpJSt6Tjvz2x4NbzDaT4WkTBkw8j3oNrnYDtpDFZNejnWYBna2YwwF8kZxAfB7nvWZR8GUr6PNNzdzkunqc72S",
  "key10": "2FcHVaqdV42WoSztLueFHcCWh4g7TBcmocdjgoj4C5NS3U4fV6PfmvP6JX76LtWR13U5w8znwHJbTYkMdDZGJpyD",
  "key11": "G85jLin2uUXNk5jB3iS1r2KhAVE952R5cDpScWjg58pRWzUd5wc6v4snLzWgwPdSXqDMENrfNhVhmxt7Fp9LwH6",
  "key12": "Day8dGZgL8GJjyLSzURX7MMLC2jtH319eBHmCRWsKGVpXj7dEG2Cq5k216UTttsmVGS7mSBDRKpiSf9aJpFaNhb",
  "key13": "49LxMzGhszomJaKDfpPBj3CFF8WDDPkK3mDW43AXePDBy2jBXrtfoPM6NYXPJTnR5D7Te5a7RZWTy4C8i3gcZS3u",
  "key14": "5u5A6qcPhwwfoHUV2285UHYPJtjZTDr1Jc98RFdLbWCv5oMKYxdyWFQYVop6yY1B821XM6WSxAd7J5nm4iCxvabc",
  "key15": "364DE3o1sunukpGc8uM3B61akvt1e3nKJwCzNunzhmzfVVbi88SrAs8vExxPAwEorX6zgr3Rpm8BEAbcGrPamrUi",
  "key16": "34fqEUUaBBgSUhAMtXc6FUe7K4rZ9zPRn4jqSAb4yMJrBGJMfFv9c9Yo1WbsbsstCR6XffDKgo1jDt8kWfHAGoBT",
  "key17": "ZzaTxss5JvRewrYe86Z3agJupSYvDLh9Ayv2eVNUx6vqRvWMHsnshGz7n5oZoV5cKsf5cNqGE1GHssnk9GG69nD",
  "key18": "49W11SxFCC5XFzQoMMWR9fJGbDdAx9oowBw9jJaZ7jTFkTZTm6vhVLsGnFq1vFbpyqmXQDPrs9RTAYuhPkx7spBZ",
  "key19": "5JuygKWnyFmzWEgL4MKYQfbHwEeYT7pxz6ZHsLzx5JqcQ1ghuBza3oSEwiq47q9CjUNDkZUnC37bYYuB9ZeyRXbu",
  "key20": "4VirvLtcj7VSCzVogf1PrcxFfwEYzTxoAwsRWs2g6SM11WsQxQwy3y1NLpKNBFGDsyHFiypDrwmKVekKr7WcF32C",
  "key21": "2VZGsGYvGHsTUtCYVeawrn2C8EiLfToRgTD3x5EoqKQgUiYX2bdBawwz6qk4rVxRHtzwgmrpwAf2fTbkx6LtZc2i",
  "key22": "5VnSHLADczvwbYvHrDtcF2ZbgnX7DwwZkY7jmXTcfq2zfpogG7Eb5S2FfuHqBWduWFVZr4ESYqrULjdTtkeyjhFZ",
  "key23": "3P5FSrtN7AshXi65174eHDqWu7ApopahUmBHJgBjvncRdb2U6A1U7vZMcP7M2rZvj9rUpv9nrJ8bkWPn7kiUWXSn",
  "key24": "2t1d32TxWdYpx4HmKg7gs18vonywuVir11P9bU3QaUDM7hPGa2ZJUnD2Rn1zg1F1gG9QALmCsByv22TRpCoABvwe",
  "key25": "379szuR96E4a5hcCRYP8ienDGD7NXv3oMTEGuTG2DawAKXUhf2Z5ZUKu8yXcmLB5QGqn36Kz35GWpQYuDronSRbG",
  "key26": "3Ct3uhVLGK5bcK93stxsMHo2H8U3i4B62o8okfdeBuhXzGY2cKznJFj3r9suPUDnXN99TAwd7LKVVRxrFnphFmYB",
  "key27": "35fS6xvibkkozevVSCv5SJvReorRy9Gb5UzaifgpGSQJVzAUjvVeUaRmymB3p9JjKWMmXpLNsoCyUZd3Ys8MgdcB",
  "key28": "24hyMXN1aD8mhTW1EJWNBNpTNtKMt3BgDtFDhjZoMPbKwenwhbnCNUPucekjBhD5XGmzdFqADEL5hhPZK72D71vr",
  "key29": "4aMEk4PkdxzqpnEavYkZBVMfF6CYu81sr6iyuHHkApah7bDBPheWLnHL9uwSVdBj14iqyQcCt8sJVdtLapcyqKJZ",
  "key30": "62uVBZdD2qA7Unic43BvnYkFbrpy4uwCWR5yeFcVufyEvYBiUTiz9rApzTVWsb1ANjRoYt2gqzv7nqJQtUrZjGAK",
  "key31": "LenWGNDE3ar1Kp4uPdSE9g8Fdcd9PA5zTJwUhX3CkrP64jJNBCjFzVpm5TWwgZZv3rR1g4w4QyJ3SJayqRNaBJk",
  "key32": "4tUvFkUR51MaPAs8PdNyMeNbX3SViJVP5GuFQS9uRnNA9gxEa1673YMNP84oCp5GcCFxV1KxdoWELq4F2NFWmJ4w",
  "key33": "2qRfaZK6p6QWxGTZCBChfCAfChTjes5nTaPfb16Jzs4Xndg9VGu5sXRradvqCgXGdnyHqJttttEJY6jRyBMgcerB",
  "key34": "4RXCRjpqJ2Une1c53y8saPG8vQFdHmGBrKk27nmEa3ochGChgYR8axdDtcgBru4WS5NCUNa8uTP6i3QAC3RVTszv",
  "key35": "5aAVHVumbXdbFREWH9pFdL5BjgCA5AKJL2Qs3xWiubvmMVuLL4as7sWwpYB4TpfQMBAntQvSyBhQegYdykkAob1E",
  "key36": "4uanLr87jMdmYxipdYrb99JJhPAAyjSQHY5sgu2PYqmngz9FMrkKoX4rhxTQFzLHx1LLzaFpbzvoVR3o51qrp3US",
  "key37": "4wry2DB5VdELbKA1kVrJZzqkjn14BPrEgW6xX4sWbHoktwpiKh8Ah5QDNq3ET2CGe15VLp9txuBtYU5t8q9jEPVZ",
  "key38": "3yXsFpKYsWMnSvzNwY4yPQYxJKvk42AzAkW8vVjNVPKgdaspHGvy6TYLaDRB9c1w5A1yCXEqqi7eQt4rAtEjPovv",
  "key39": "3RvvyDTrbT3Tv7SiNzW1wgcGbyQi9YW1Jy5VDbhJd6qtpQ5m7B341jWEuBWDxdQxX161raC4oD42nRDzzBqs54KR",
  "key40": "4XnzYwHWVs7onHCx5M6kwfmFWp6JvhoADxVap91D3uCkXKT6JZosFydo1xFrSAo9bN39kwsVHTD7qVtBW24bYeaX",
  "key41": "gpeJuHGG4kvjt7v9advR4XxzeEnwf5oeEVs8FEZ2DWWYrm8dh89jeT4FzN45jbmuJXACkEKiLADmHBdSTbxV21V",
  "key42": "2qtfWwgsJqPaKahTk2KwtSbu7acXPMnv6T12PbxnGcr96JLCwtRk8jMFAvfJbFT2STE7q1CAg9BBi3uvWm3ynx3S",
  "key43": "4kYcJXTjKtzKwFHYMeaL4bQkZtHknNHP1eJki72vkJnQkUePrnNm6JSWkhoCnbqCboGD5QvwrYJfRWqkarywhodn"
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
