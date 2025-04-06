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
    "2vHfufLgr5dajmMXew4NLq6b5sxK3qKkBr96rHVjZ1GfKpni4WCY16fGGrzjih6pRioyUS3kwrhaBw932god3v4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DSpQGHET4UoNj1CX7MPtG9wzUvf2ZGg9jRmPHgETLHujqUViWRqJ98nAyMX4U22pq2Csp3iD8ZQGzWBAjt4fZEe",
  "key1": "67Cy366Wh1xCPEPWAjBQkfSCi48F6hzRSKAZ25UaAhoeQqMfQ8qAWigzxPc8pd1HFE4vRWyx32fVhhYzVyZPMqjb",
  "key2": "2EcWGDfwYYYqwZr8sg7W4mqoG5C9V9bcwnZSyMPbkJEjicTbWkQrY5nMBdw5mBMCxdBcCftWYd7gwjDQTpT4Uj5x",
  "key3": "4rQN8CKpfWzAE7vU9G3UqJDyNNS8DdkjJtBKenuMPwzDHpKCesmisSMn9sdLAMCbvweS6SXNULyU5xzzeMCg8zjW",
  "key4": "2gr7c7UZ8zVtAEqTfNpzUNmk5fsQ38uCudt7FYcp3jwpLDpWYrgpeoposo7fExr6JiAa6PRqCFR54gKHxLZx9TQW",
  "key5": "4efxvzCcqdmDzTHxExZHBuLaYzWasVq4krZmn8Tdr2qKLb3fbb9hB5h2WMPRLV8VLiC59M2gCYKMN1q1nmJT4HQj",
  "key6": "2W4vtkGz6i355r4fcwwyNdd1kbBpBoXg2f5aeCuYM7KK94hYENrYERoxMuyjJX7fAjE6qjRNdWEf4Z7zUuUHQ43e",
  "key7": "2fBjNcM8n8pAgaYUHrMqT8HnrJ1QQ751YoRkrtGZXEodxF6RdVGv1B8ttebCh3oPTFiq6h1xfXsUUzuKSvYnTN5r",
  "key8": "9rADNv3fNdC1RNg8AzHaF9pNUTSuiZS88UeTg4DL9JJXD75mW1X1KQ44sdgJXMJrrAGg6ZHQymcZ9hWpZmbCJ3S",
  "key9": "4qtwy459FUF6thN1XQHfAaMeNzFF3Qngj39e7WBr6afxb9sJUpdxg589NF5K5oEvu6X9LRpg78ZGArSEYs33D5da",
  "key10": "5z2TpFrox3AjvJfiAGtmPoRVq1ykhit5kgo87jtThJD2GRiWeEJDG9HTN6kdq1JiH7cjigBsEqdojPfnzdn6VwrD",
  "key11": "3cFLPohuxy8LytYfXknxpCmcdfJporKofNvkxRXaEFwXVcSKemhXyHqaShGgSL53FUwpzrFyXsBUTn8pmGSs8jcv",
  "key12": "455d4k2VwnBxMtuAy1FxQTPZ7ANnJ3ehr2Lnt7xtfAiXLGB5YeiFkK3VH9sCygEGpehYhA4CCZyUgZYREhkQFaUU",
  "key13": "2CdAcvtumtmwwYWUQEmaEpXdFkDuFWTw7SgmJn6fh3zC8t2ybHodmhpFtcd1FQFzivvdStTiispRSyBjTdjdr2HD",
  "key14": "51ErGmiBVukWvduzUgNRULiP5twEq9efmgMivcYJwrZpJpvEYuf7a5hhj5u5aCPdCqM5vDHTgjYQhzTtie1b67Th",
  "key15": "3Fq1UWcb6zRZg9bw3UfYmP7sV2RLmwgSucPQLiyseyxAs6TGVLtTtGj1BCfv6wXy16Y1SZgx4uSvoGCH52V7r7zh",
  "key16": "4fmshVqGHmdDBPVD9gZQD2KWTzji9w5CxxcVvNUZfXUsb2GF7NsLFZjB3GinHLjjsjXu63sYnGYWQqpEgKj4xNMG",
  "key17": "4iGnKacNPJ7A1ydxoTh2d14vuujCgzA1XMj78SdpfjSfPYn4pqDKQx1m7f1ukLZ9PNs8Kw5s6rMyiwoUnMQ2EVU5",
  "key18": "4ApaWDJNvTU6BNP3KKmDSgZJerNAeGpe2XU6ujM3Wn5xAMh7Q8kt4q8zpN6YjWqTe9cSvDUxEKRVGh977N1REybc",
  "key19": "Z4BnLDZT7LhrFcyKALx5yGgwd441S9QTo9crUx9weD5TMJj7jXSzNSZRHcpYz1X6nXbAKfhDkqD2uBf8yPtQVPT",
  "key20": "3m11ZzjCuzDXaeGTo4TumLCzado9jm6Rd1ga5Dbt8u1usM2QsjU9cppihhefGYiH2XkhFKscZVaYwwye7bTrxA2w",
  "key21": "5ZPwSecX1AevisaLpPXXQNPiaz8JRLNtt17vgaQQEoQ7twxpxi1aL8twQtRtDyb8CjfupgfZiqbJC6hNeca4UpYZ",
  "key22": "4J6GAxDVFigx7FBmFEfjd9TSiWBCvuT3vzAR6aHT8RskvSjeG6XF6jfttfdadFRtZS9rFUdpMbkeSJ1n4ZL1h9et",
  "key23": "4sqrakB7uenAjGLcMMDH9XEDHFFz9aTb3B4TcN2wgFJHNog92vpvBw9egDj1MzpuvdBmMf7RF782hc4uxKtYkfuT",
  "key24": "3yeozQGK6v1RC3E1yVF1RgrVvm4jfPommwsvR6LVtR5fGYUrQi9N88EfZ2Fsx3kXdwQQM95PQwERWVg2T9S8E5un",
  "key25": "3YtRxF9JP6X5VmQFUBTKoys2Ais8ZsTJoThoGwS7c3J9f6MbxtcoKfGK5twzUDTMPhzrV3Uny8ucbfoz6EMo5T8j",
  "key26": "4Grs8s13dYqF7ahZ74KDkgXNGvqkgEQr7pVfdcwcMVGKtjqY7ffQcbS8K53JTAuCTqpPDmvYUgk4sF5hpD5GUjRn",
  "key27": "3ezD7tibs1a6ExSbHQXMJ7c2GeHN6nDPMQit7wG5McMqHYxjaPNAE4nu8i9G6Y5mWLe1YQUMcN9V6innLF9Df9Zg",
  "key28": "LufBXXQL4rJHzuQ2H1cDSiQ3SSwzr8hy467SkXYnXLf6VmL7yxeLMCKa6sGMeant2KyZNdUhEvMdbXCaGRRj8ud",
  "key29": "2KmHP4zyJMWG2QheVzNvwY4mASxK4fdWXwxdAiUnNjiTnxFPRubMFhphhKaNHBCf2JR2oNEGJFD9WTSaqSCMfb6U",
  "key30": "29Lt37xG8iRZYGpLed9YGrGLtaxzEB3uzPs7n9QDudXEeUb3xcnBi6EAa95sCdsuCyQ8GaTE1DNDiXE5W3hu2JFD",
  "key31": "4WNQTSCpcaiyzWsF2C5pTvueeCoebtr59zVVV9VaErnbM4tonLa1mvvfzWtb2k3icK7CpxykK8L3FCHkLwAb3c3o",
  "key32": "61TCNZ4v5kH7b6Jw8L5bF9YQyGffDZNxZLBo7hueYLzxHXJUE1h4FB8hY2UTiPm7H7ZBW5ai5tdiwmYahpW6ia7n",
  "key33": "3neyK7oT5Lr6SQvmufwxZMT7XuqGpdwPzdA454hy7MQ7anKtBjuXBRwnsaEeE5bXTrtJa4TV6781WunhN5AaQyFL",
  "key34": "VaL5utrSJbhqzrKRuTsoVMQTLtGwSv9JxTvnsERWXvjtsvSdT76tVA5yfzYRvsz1dpgDpA1bTyAtT1HoBt8NfBX",
  "key35": "4UXxxewE45xvoSM2aAi8KQHSEx42e5BmYuMJenDcQEvzgm4KYXKjx2qLP3wpnUoydYt32bVZkr8PYiCJEauXtPu9",
  "key36": "4Ki4D2M7EEV9gjPApyGPE6aGATbEwtym8s7bdrng8bAWxW9R8vFEzMPF15T9pgNTxMsoLCEzibLhcNzjkJ2vzCPK",
  "key37": "5pY3ztj5AxqYv3ijSCSbfV4cocFLRdbJQvjeTYkhXHtH88tGTTnihVfFQMmVVWq66JAeCjZNj4e9wc9E1pYdKoQR",
  "key38": "5FRkceJxK3top9Ck86BMFsYsdnEDhYE6CqPF7jJwKjjakkqj6TTu1dEvQuZKx465QkhxYFGHa9vbnL6YafTEZYsx",
  "key39": "4fZ1xetkoyV8hxfGcpch2G874FX4rjirQ3MfB7QNoRfggx1PSHieK1Ph2kkA4UwFf7LgArkaum1UL3po859q6W37",
  "key40": "vrZpuZzSqtiFJLrqEQw4PVCYD963uZ36avWzQ9PCJi1xfTxCPhAtfFxWAR5dRg3Seo3syy7XZSV3JXUa4Zn5KFf",
  "key41": "GDmZSFwu9eNQ98MQEDR4QdWT9T4TAAoQ3N5yGvWA25UqrKkNHjPUmT7wdE9YTKgWupchzABxxCdWFmkhn2kEM3p",
  "key42": "5AQKKuNeqHoN6X3yJ757CLYVsfrBzmWczU39YetcGVykYBd3YZPez2TjZ9m4bbMFMgWVV7rM8oUVuvu6BbQA8HL6",
  "key43": "3dKsmUeYMbTNPgRKgm1bcBayi7JcWeFEmnsJBxdotT6MeCNGRbCyDCmWzzN4P5ayemKXi3oBw4jQD52EM8T6fmAs",
  "key44": "5xQdQjZGkfXXKMbxut4rD8T12ettaVYwbU6bp24CLZx5KkPZr33KvUg9SrkmmjT8ZxpXfCdtLs4ZbBbAypLwkZDo",
  "key45": "4VudgjjBz3JzWw5yU4TakoFG3tDuqgE4ThHDV6H8kWkEtoutYepZg8EwmN6yURk2NAtPTNWPHmKnQufmznkYJXRC",
  "key46": "4Ftzn7ZuxwSYN78PJhYyp72X9YHBpMmfZP1sM11X9kZN98MVHtcwgv8kQdF4rUmpLy4svNox2QgCFrDcrAu5Q9GV",
  "key47": "2Ho9H3YZzYvsfztMrV5CTPEG5DNtati4G93gGbJCGM9dgFGjEfcS6t2P95CKEN3ayMoq8rQEeDhpEEWhqT7Zia6b",
  "key48": "mR3YmmWnUR1QwoWQJEF2WegZYWUjN43Voc1vVMX8vPyiKaEvppxkvCMABmwaA1F2H2ExT1SuabEJiDk28du3v1y",
  "key49": "3LzvaWV3wYGRCDD3jHyLDxUHCrK1hzBokmnKQ1WiH2ZcMxFiQJ9QvQ5Djze3aT1EecLZsvEApKcyrGgHSyqkczop"
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
