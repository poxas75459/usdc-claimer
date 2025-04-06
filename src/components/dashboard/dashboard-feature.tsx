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
    "243RoyAthgL4gFU3cnwrXb6SJfnnHFzRZggNfjDe9DcBr5KCv8v9rRMhgZ4wr1wkLMeeuLF7j5sC7hoNRTEMjfmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "676omkSia2iEX5FfVm2XMVnwTBsq7iJrKnYTpgTdufZfZAdXMcpDE9mDt9E96kMeo2aC9n4y8Wp6HswEdaonpXmh",
  "key1": "2mP6n9c3sTEKQWEtSDBeoiTDj5UkdsbsRrWKv6j3DXtDXjCamLqdRsi9qLqP1tP6KKAwrVLfyoGZcD7GF1pjZkBA",
  "key2": "2KWUshPERTW84H1AfwzKvDmQAjEPGp3CCipoSC5GRT3TqMezTrhby7WFYNUnu48PVF7DHgUhT4xx4XxdeC9zmpgb",
  "key3": "4ppVwZNY6odCDG8eU1LJSA235JQtytVf7PiiF4AeqEg4XxgxsFFSw6ZBqDG34apm6cXyrJMkTVbyvuCgp2tiPC51",
  "key4": "4QgukLSQZLBewDmxtaid1FGMncUKMfQ549sgZ5G3cJ8WLTYL8ddV5o2AXA338Scb2LLSgwvRc2cs5RLHReeUBbm4",
  "key5": "5sZ9LQmPd53b1C9pBfvsj96QSxEsVHmC3jogQwYoob4qJXTgaRdZc2e8FDuyfy5kg7NTzXfi5bxj1Se1hitjRZXS",
  "key6": "3cZNfpC2Rkx8SQ2hoH9wNnJtvwAcRooeXntoBvZYnmiJSoDhwrYRFA9fHHGhfKaYBYF2Wc7uCL23Pah38Pe2ahbQ",
  "key7": "49RnUNxzF8K2s3uJXUdJcu9Degw1sUxpF6KdKhYexU7LvjJuk5GcqyEg75TLfDXxtafLgPPMVAyQYDG6YcNZ4dwF",
  "key8": "6fYKBTUf6p8hJhERHmSBqyWCeBjxfeKnfBNTWV5rneBMNWpUVB63rGHaJK9t9xu8WTtdtmRFb1VnatiZi8gimw5",
  "key9": "4tPqvDrYwomGbKPK7pLH98v6ZbCi53VFkFnAE8jR6g1EtnBmdjTfu653CYPfsSvrGrh3Y4NZSM84pTcpsWqHw82V",
  "key10": "3AQJ1so97ryrA9WQSwz97nvAWjeDfDMMWYvjxYvdooxEJKzJ5zhTKj4dY4mCczZceycB2FgCs3yWgRF4opjBYjLB",
  "key11": "2bYSftWUZs4ZkezjStEaGVCDeidBnEZnFXDXjugFMX9cp6P6nbpWocFvE7dpoxbJjmeQu9c28y6RSntP1jfpwPhg",
  "key12": "5oUvEk2tQAnijGU4W5MNSCC1eRFHm5DJCaZChqmkJRVyNE2b5FL6GqPZzcfLGiBYuNj7KwE8f27HGbBbwN3mgwrv",
  "key13": "3p46AbWXYG9NkgasjtpH4GgJTYijzfmznN8yJdQZtBvB2UfMYjZ5XPnNd3DNygBQYx9ZU19ohLTU8CbhJXMXCJ7z",
  "key14": "5yGEwKz2QHr8GobAu1jSumhpi9LekmApTNKAY36gG6QiMAmFPgP4zfu8URPJsgJGDHCLoAYj2PNCTz2vvWEKaejf",
  "key15": "387voff7GiUXrb1JjYHvjmD2W86DRmUUxCttJLBQ4UG1tZEzKYx9rGvu75qjFrv9aq1aT6pfHtMZkiYxpRuvTZWg",
  "key16": "RmkyhVPrg8MQtyYq7xiASjSgLfY4jkJw6dsFJE2Rc6m3bZbyRqbcSiKnh6BqHpM831cRNy7cDbZesejJG9smQES",
  "key17": "2c1ARLiabrkhT46pxMJSsXgfW799LvTeBRyCRm4oGTobpEiRTvczKRr9RJMPSrs3Ygd3P4kXEdTZRPpTWzLyM7M9",
  "key18": "dJ9GNv83VA5Yf3fp7dsfzWcNvruzD1NhHjXDBBeheHpea2o9mnCo3GPMuXxhRc1mVum9MUHfnCk7aEpB3pnMgFo",
  "key19": "2epvUPkuYPA7TZRB31eGHv3orFwfmqNSMjqcuqZtZAXjs49upVU7vQaf5MWRGnA4uyf7aoQTDXVz1Z9jRzg33cXu",
  "key20": "Cuc2ovCfuUKMjfgaLd96xiEKEUHT2GgsYzrFctcmQaiTVB9JZUpynyyQPTgJNFHB5qcYACY7GT8WnWKC9JutbF9",
  "key21": "2YwEMXaSPwDK2crkbTSuXfir1Ld2U9r1YcdmsMsRANtEYnHa8skEkwcA1Zc6s2UT86n1ZM6yRLsYCdRppmrJNCjs",
  "key22": "98cke7anLDVMf9YwiybLW6pbokE1PXvQFLYbiGnhGjKgSG8AAMrfbPtxQ9rBM8dBzJqH1iAVwSAq9odRmoaxRXy",
  "key23": "4d6YpdFh3fHSravc7fvmzcn5q8Wn86owivikNj4VyyLaoBiUQ5TnbdViyxuhHZuk6XuTL7MNAy3hT7XTYJwgadfs",
  "key24": "2z11F575r1FLvcBE5RyxFGp35ByqU9m65pNWGcyi9XRhNRz1qm2wpNVYiK9YwedDTt4ZiL5Kcturpqxf95595GrG",
  "key25": "4ykYMPCoFKwWPxbwSGxcGNQQsDu8ZJDpRqtMVAPA8ie2N2Ghwnk56ejc4KKgvSuUw4zS2W6qmAV5SuyMtTMQdvan",
  "key26": "sAcpEqT2QHg8NnPovzGtfWqggh9UpAG1RsmGWso7WkA79UhA3vnQc27moLen8zX31iC1QFDU8RywqEM2wATrg6m",
  "key27": "qRvC1uaBJ7xeh4ZRPtX73qrwLfpLWv9fNd9PgaNpep2dYz3NRDNUv8HUJQtqcgYpopazxUHGdN6btvs46YixbYB",
  "key28": "64YF3ASAgarXzTJ7pUzvij3S52z86rQCyDbwnMJfE58GJdDY8vStYNGKhSHv14YVH4wGJeg2fH7ZdzLzKYi463DG",
  "key29": "ExTxoivrF7iVpdd2jzHU1XK1WeoJeXytRqVeWdht9yRtfnNJLGMPnYscRLDbzvcdTvzvWp4AGKSKsBh6EVFecLH",
  "key30": "5ZYahNFyo8uSzsRpbmAkwLhA3SSiuRRoRkTd1ezUZbcUg5TYQmFxtzZGwHH2BoS2PVWZVq68wBAe2y2ZeP3vnggR",
  "key31": "WMLaPUtm4rapQLcyGvTDX594b1BRCMm8SzkZ41SFmurZvnXDBYCuMh7KVSoz7k4TDqLCVpQpKhELWT3gu3NSAWw",
  "key32": "2bwwnG29UU1AYrNsvrEKN2fdZLnmJK9SF9xVhm2mGdJzgCbnT3WH1Txztana4Jg4aDNMeKSU7ZAbNF4GVbD9tvhY",
  "key33": "66nAD6KvS5CyExtdBNkN3KQ12UA57B9j5bGs9cAy1zB6XBfHkxMQ9q7E2Bc5WLn1fcAY5ceSXieuQ29hyzhuopq1",
  "key34": "4kbbmVmo1Thv6on5hN2c3JNuYof7acTnrZdWYCZbQEYPMPHasXuYnVJLtPvxfX3bd6jTcNTshZN3C2Mi5AfD2i12",
  "key35": "4dF1S1PMi541onPaa6BKxtAMooigXcwEBgQTCd9aAFPibAZ39aSanfUuGLN9mtuSVT8qwPofZTzuWQrQBRePni7u",
  "key36": "bbBQvcnFPmgbn9tG3Yy2MSkgyXXxu5vPvfQ2sPTbdaH14jsKWFPNsi2NrTUVfMH1JCRBUWWv7Cb63EPCaAJKqrn",
  "key37": "4dQpVk7JzAQDWVA1kFN3TvATDrX2zjzjqvFe9EP5K2ow8aH1XruQQRZVRwz5hMH4g6uAvJxwLSLZGrKxNtVBmXTu",
  "key38": "2jNFtZTWcdPhRDeQMZhutG7cP5rqXHaBjAqbGZgwUkNYPostBxsdHeuBVPTDnKaf6fvP5CBfMW6DHprWv9Sn26Px",
  "key39": "3QLL4jFXwX4F2HJu4b2FQM2GeiuiGJj5HDS9FgsVbQvL3Qb9mJ5y9xna8w8aCbWKGmqGYerr3RuwRtEXcEia8a8k",
  "key40": "5t9TmHg6yYw6G2fmDz3Bhx8pqLk5ekoVCETGiLKTo4fiHZfPaVTTLvtntLcdN4WUUFT5Wyvxnmd2XZoYTKRPb9eT",
  "key41": "3fYuHAjUkRYgDZjyzWnj8ovEmyS6w1D8ENVznXf9ZtbWutfqzd3HCyv9mjrFPVGiJAcSRiUXiye8EUSD1CcuVbwe",
  "key42": "4hAx4EiVg8yfxVkdQ52F8rjAhQySLfKGjzW6XMNqFNTrvkLrUpwynVZ9559ecLuHvrfMaP74KMqqHKexHokZbyQa"
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
