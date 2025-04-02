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
    "4hETsBaweexzdrSSfXSMhHmBLcbiSVKMZErvXWbtanuLTaUiNRbEGPXXGGTQTLu3gy7rBZ5ykHSf2FnXbiWsXSwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HT3F9usSTTYrGRv9f492mkMpfKYi8XeNEwWGCTFu4Wcz2HYSPZSuZ4xAWrrNFCZQbbNL1HNHGyG2sJw9anjhbJo",
  "key1": "2B6WmwFGhkNTjg3pGw9WhH28dQDoK5qMLmFskpS72p7bsB8vwKrU7CVM1eqxQZ4oBe59eLPEYX7C4eh2cuyYjSnq",
  "key2": "2hRCnEj2ryip8Q3GSZdgoskGkVLyErujTSd1KVkPW27F4miWF8yFBxX8gY9UcKPSXv1PBXWmTxABeABUVM3sDP88",
  "key3": "pYdzhEnhH5evgnPef4Q5HaPLzU1jUcNNrAs1JF8dCH4xPbHfBEojUDdcnqRHJzx5E5prrbCS5kBRZibrFuTaph8",
  "key4": "5E7Ww7amb1E3hmfWSS9mzrMiuHWfGpAPtjZQmxk2n3yyBzaaGDATe3SpAmVa6KG23RZUGUG4Q8enCoHuMCpYwBf6",
  "key5": "3RQhMt2kurccHvHDnT2s2dzvr2mBvX5wyEEgmKwsuQNWsVh1z1A88UJRYFny7o6VqybQVNRymyzev8QBKHuuqFhk",
  "key6": "575w4nHbpPiF8HwAYmZHahciZeRZfUomL5Ts5dmaRsdQbtM6Nrqpb8L3AUrNM8tAvcj5fr5YWJXm6GHmbkTULuso",
  "key7": "24Qe7rP2S9BZvNTJsFT5SU6DnaUzghSVYpyHEzQPadesciTEj59UwuCe8woJHsLbSqCbg4yk2gSfPi55TW9Lnvfj",
  "key8": "2SPybG6Bja8ejLM3K2mhmEmkx46NcfdvkXVucJdncR8nP2Um2SYjBHtSBSTuv8Zth69zE87G2EqvXzqGc3FhZggv",
  "key9": "4iQytTh7Wz3H5Qr4Si5vUX6fYjPaXgDSy1RePV8EhQfcovTYug9DrePXB9iVXcBJQZ3DwfxZqxEVmNvpNQoNZGof",
  "key10": "5NKHKw4niqMV4TW8xjeJh1vKj2iC6jqAhCqqGs8rFjb4Qr29ezhgXvZh63sdYgfnSGV8ujEyRj64wNqnFSrkmFzW",
  "key11": "poPLVT7WjT7757VamhtcKp7uRLyMr9psLwJhevoJwprSWvGb3PSmG27NHTAi3NqXvyD16nWHfik9YyCNBhF6Feh",
  "key12": "DaFqihxUiYox6sYNWSJ3x7x9R9KNwPbMRGoUsrMkZL73SjaD9GBBdfRLUANLyq7sar9LiSPM2hvTqczBxvrr8Sj",
  "key13": "2dF6xaV1MDzESXPnEE6qrMUUZ8QNb15sxAQUcwAfiavjHDnW3i96AR4B8ifzfFquT5miaJ9qTx5y5A1y1prbYob",
  "key14": "yPJkPo8JawsGj6qMgcTNPqGYDto1mBP5VxcUKsJBLE7CPeVie2jLUiFEp9EYpMZjx8wT4s7DGxKvrEWyUrb8fcQ",
  "key15": "jzotbaCpKfp8FSYQQvSiodAWboQSN421AGPeTdeGSxAeLD5SSubNSoRkeiULKgmY9SDQp1dni8KCNQFuY1ApAjJ",
  "key16": "5eLmQGcfG1F14Jgz2BqG2vShaTndiCwXPaWZRZtBTjad4qSKyJhEYWTReAnnRn8CmywqSqhx81XJRCWah7FSkma8",
  "key17": "49hSHcqapGK8sqvT8zwcaF5fo8mmGAYvLAVoLpUNjwynDkLczxFqGP4Z7S41YtgLNL5fHz1iZm6c9Sb4DaXfsfnK",
  "key18": "74krCuPGRNTmXtEsUqP1vM9hNEBLaaP3fSMgu2KyQvQQuXFLMXVryFrfLyrKZ4TKoWn77rhLbiEAAXDaLcGzkAa",
  "key19": "3mvGbx3rJFmf6gTr6mHTU7e3viqWZhPnZSwFfaFoobMNHJkAVXvpD7nz5ERQP4JMyE8EmALZzV8qxVU7znWjkNbu",
  "key20": "3SzvDA1KBXEan3u63pNWJ6vszEyU7Ur6994721JSAdceu5JGui7zGzKUR2j9SJvLsBfVVe27rJj3rAHWr6rJRnJe",
  "key21": "3b377kSAMXXj6B2gfxxE4Zk5eLSYNXs2rjXgdrJsMHehchaSCNPy6yUwHHzqgMXxKEQ8DDczYW1G3m8tFDKUuQKM",
  "key22": "2QwjpyA27tRu2HaHormsqSoocWJQXJ1eSr4FMzAuDpd72VuxGWDKUdVdC3kkTZJWJkVS1Wm2hzGg9igmPXRRHH7g",
  "key23": "gmZzgwYKvvha31ZV1UodPjjZFwBUS8gXnetp4bgXwySA6NsfasJf3U7Z7hy9cNejqZuocbJ7E5Wv3yAXXcka6Pr",
  "key24": "9rirNriYMJQti9CjkU4SBrjwPHZRx19dVWUZVQX3yFcSVHaDBLSPduUWivzcataWQD3CGc8KiWzJMPFpgdYvfcM",
  "key25": "2nXvMENez7Lhe3n2hhA7AqMYMtZhQj6ZgurPeXewCygecAx95utozRUxMQWZMG4gPbiGZAFGVYz742w921txrXB1",
  "key26": "2V5Lh8Er5NfnTPUb3wP9GjuCZ5hUki8JwDVYSHZ6dz67cZ4ujDoooNgfJnKHYRUoMzaxEPix3iy4Lne4hjZMaoBJ",
  "key27": "32CdVNd66FKdBUAi9zhuSngEq4YSf3r3KDjc3XLRd3U2JF8ohwiGBfDWzp46s2cVScmNNNtCdZrpggPkQepXs8kn",
  "key28": "2q5a2SzboQbb7WZRTcWYPGUDAtVNUKCpoX7DWSDruaCbfGMY8vgKiQDfQDwa3gt5Gk7erGuEUPeU9btpFSpojpUw",
  "key29": "3AxEuoJJMXMmfzmJsVgmSyz2VZZiAeupjfYGLZM1hjhDvVAc5tn8yieDc3Pp2SsgSA3GBMZYkmynojDvQt9W5Wx6",
  "key30": "ecYbcjE1VeskiudkUuqT42u1axLBY9ANcSkrL1x2pdwyPMPQk47abAGFnRBsvXyqKwFBxggcfsJ3hVTkZqMMNgL",
  "key31": "ba3EFFEMovbNwkfdUEuDYyTh8Cu7aPkZ7mdZQpL8hrwmsDHY9VckhxNGfv5rqzawMLaFZqYjeeSo9KowpswS3J3",
  "key32": "4qrQCFEx4MNi51o9XUUJFFHfA3ws4jq4gc1ax2PFUYKggJS4Gr6CuN6Dy7BqgvZDgucGZpoMCq2GsFKb66GXa6yk",
  "key33": "2LxyxaMqq2tSL8hxVSjMB6NNSngbu1syoGXziW5Q9P33Jyhi1odVJd3KSRse7SHcv8YFGFa5Git8KEfnG7T6xjkh",
  "key34": "3Arv18STUJVAR4hBLmFEnjDBMhEbyBn6m7LL8QUVwPnMwa5bXDqaEyNu8bf6JUsHbFamS6AczBh3Pw7bfLEEuszJ",
  "key35": "4iYYqZBXsQfgT9RqgQwfrsJU5v6pHqX63z4iqfqsyB7GHZUHoJtaNVAD1p8hAtwNA5RehJrPAzcazdLz6neK3A7t",
  "key36": "4L7GgeJWFhhH22gmfkPiRvYDUuehy6ZLWXw6Rm2V8JKpn96L6RnGpanXj7fGEHEfcJYv7eTQ44WfDba5j5RRXQ2w",
  "key37": "27B8mkfwdSJMXKVQz33Dqw1JWsrmYSnQ1c97eZLaxVVS7jL3rtvQp46qdNzBtqVn29zB66h6975SwHND84vHiWhV",
  "key38": "4rKPagDzALv5hejFEzWUn9Ytte3suacoTkZ9beWL9y9iDhcdmrqzXynoZyG9JZqLfo9qSW259Vi2bXoyBCk7eA3S",
  "key39": "5s2CTa9JNRcK6jqBUd45niEj4YeiPT4D9egaB6YUgTCvo8f8Mn8fV5dLQ5SF2m2eWPMt4guPtM5uyfwaTr6Kvda1",
  "key40": "o8ET7LoDBdVx4mFgJM8Rb7E47isFTjU2atVgx1anN6dbbaSjVRoZoBNhhY5Ahj1v5oSHfCm7hTSQBVNukQ55YDr",
  "key41": "5rEsNdxUtXfgFhajMagDsAT8VEwQupnb9CmMWJw7X68a3hmseC9AMkC8muURnZXsJVVfFVzcsakZfVWuoCm97zXC",
  "key42": "5r8RcyBrxKDSXpRaZtJEBmApsHSpEsLkoMzL2GZxhWkfxZCVCMJXPmvkKXhnXZZe8m9gzWitxS9eUhFvh5EYJ3g6",
  "key43": "5kKaEQPeH5UjH5obRo35WKLAuSnkDKrPVeVay5WwoPDYA23SoxHSkrHSp2ooxe5qgjcKdyXiH5xZwB3q9Pj3FxP9",
  "key44": "9E4KzmmdktKZZnuPguVpuFr6H9jXJX5hHiUgDrLB9VhFyqKQPMKTn6RzPunvDRRZ7L71vi7cq3kLTk1SwLxoFQ2",
  "key45": "5B2N5oBkeFDYQ19tiSShzR58WxXJ8JPpFEiAeG9466EyuigZjBz4m1m6g5NHAnxJQatTj3Y5WeksJoQcGetRiASt",
  "key46": "3AD8SQGBgRub4mH3YFkvmj5t7SmVpZTQ2JfZMa2E7xArsoYn3d7tURQFAe5Q5rrLsDAX1h2voVzma5BAeQPjBE2R",
  "key47": "5suJiUcMCDJjscVEubD1tooHTxE2rthBnpZBzKY7beUKXvPZyaeQMMtoxmeCkX3RSzJofFLhSuAzE7hjMoQbUKg9",
  "key48": "29NXNSWv3p5ynQaKWmuLMwnaWgEjbH86Uh7G3Bwxj55ewBhbTGMK3r5koTrgHxmwCMGHsiYHSPdSYVCG8D3Y2iC9",
  "key49": "wqrh9nYMgBVkzr4MrVf9LoEYkRARPQbmBUxMiikA6pGNh8fMhHg4fWYEcpCvqzMgkv829gbAmgsL7SixUQWYTdW"
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
