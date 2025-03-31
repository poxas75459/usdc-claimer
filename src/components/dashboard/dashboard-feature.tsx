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
    "somADuN4haMjYeJGcy8JNMC2QAckvVAMHT7ZFtFntDr6MJWjxNWsTpzdTefX8CLqc9U8nRrg3cVUPN5ZHhWN4Tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D5YgzWd17UDVmVNJcf2iDR6xci6vo9ZgZGBcCcuLDvJrYwmyM2QrHine4pdGdSJBciknMhB3tPzfM7ibbEXhCFL",
  "key1": "45C3o9poa5vbfCJ3MZt2rXXKYUU2m3PrpFWzWAzkWYXGFqsQNAeEEPyNS9oaR13Z9zVExTccaAZWbPjX6YyZunvL",
  "key2": "5v83R3UB4U9s326f8tYda4a8dpJgTBqHeHAWUoUmPBaZ7qzQYBs8aGzu5kzZXx1YYxpiC5YjNNYTusVp58upNytg",
  "key3": "4tGHeSjnp7vgKYHzBsioUEntuTVzF3ZXQcRENjBo2f1mVtTZhiAGckBNpqpKH9xQCLpSSCJX3URAj6rxuAGMyZL1",
  "key4": "3vmMEGu244fZ4MLVZDdpegdk9w3Tod552ysCe97XkfQMS4KDuCYeB6pcFCnKjqHwJxrru8XG9EHo1bTogfVVU2sX",
  "key5": "2sYG2hk4YqDKLTLAZbtuCxJkAgxahRMPL74sLptJkJUAiHDGc7fXZAa4S7DsdMNDuSn2Y1RjhfLPoh4DdY2wecBW",
  "key6": "5roy8Pqh6oh9WDGUyG3nsBLTnD8a4qi3fxdigBbDQ5do6VJwwCVRd8X8MULmFBrxMMJyhXLw4EPaVPDDe7pmMXNh",
  "key7": "4uJE4sqU4DPzFWCiyMDvpendK3ahA4MRB58AXpNd9j1BoJFVHqeYqagRMPYnDYWuJMH6HKPez8XJkAgFNJUbQNGu",
  "key8": "5JQSLnTBGXob5ZSAixfSZdfM9DphGgM4yRwvTMSfJ99kJwSFxd9u4JLYWC9UUWtTCXRNNyfmbNZ4AFPd2jCcwNEx",
  "key9": "261WwuUtxpcXSDtd9B99T2LKc2vn9STdigG1akg4W5KRXednaBgns5kgBbGvAkSeLkRAXN4xJ2gQJ4UQfNzfxKmk",
  "key10": "2GMXzX2RMsvDuepXsVZwDkJojeqxTAwzQykH1y1rwPrQnKkpcSNd9oEwjzp3YwdDXE5iBRx2kS1Duc1hDwAx9thg",
  "key11": "26e9ZcSX4YFjCqmi4Q2yBhFbfV8X5cyAEXUX3vgrvXJxBQeUpvN8QbvyuVFGvMjLZiLpf7sPYtYvUTtAJxSAHUhM",
  "key12": "2QsYV7go9ynYV8sRmSVgP2MUS42WyUHCejiADA52HVtxeBk4Tq3syJX6DJddN4gDzvi8SPFNifrsBt7H4UThPpmG",
  "key13": "3eGvKB2ESQSypgVDywLhdRayC1jTB5aB7RFGREQyYxdLXtmegXYajtxUved7WJAXE8QtPaL5qZYvywrkEaYZbU2v",
  "key14": "37SZynnvp8aS26TukKdrxNcXwpdS3qZHmaH5ZwwjQxAHEkqHsFiqFBTTFWnfX3rpsTcRyntw9KBzYiRgNDqQLbFz",
  "key15": "2s6d62n35JwiYSFjJmVRR1iwxAqAY1u9PE877FFMTMoPm3cv2ZewkuMi1jAhJtXfnTXcFvg4yyDtjR4EfJsVGToN",
  "key16": "3EW9ENcrnLZ8PzCdGRtdxsnkcoYGa7LQxowU9MRoqQiLDcawU27K7Q1q1z4wMGfuqP2pciQr57cHXxd6PBFd7aNa",
  "key17": "3i33gLc1XARvyQ53g1CdbLe4rYYNHwvih4EoC7NnrzBHd57nZuS6e9KyGeSd78GtBHprgpuSFiwsBVnTaUi8Ja6z",
  "key18": "41KoSSZy2atBxNhuCR5c7ohrZdUhwZD9hdrUXkR915TksZC3xKSYjgUCsyHf4SHRB1UFhmbQk767fRSuqJTL4HbE",
  "key19": "29UvYmMCuHBpevEKDWap6SDaJcoSreanqMqZJiATEtFrieQR7QMd6jySQm7y2AeM2Bqg3nqwQhEEAvxrfnHANPL5",
  "key20": "53bHaxXAYCzgPxpXxqbCZyMjhmsf4zxPDmsey24Ukf11rgwYNm1E25ZjgRKTFY2SgyPBD66Xogkrcw7UqjyH53ED",
  "key21": "3KfFXapV9NnV4p7EcGP4Je2znd41Lc3BhhVxhn2ANCs6oe7dXXdk98fzdahhsRVKTrA3TXfjMk7ZpxckcemppXUq",
  "key22": "3JmU5cbk2bVVACYAsCioNrQxP48aGbscX4R9yoMxoRmzSiB8PUEKZHMDUPPg9AzgzZCBzotkG98PdUiVP4Y9xA7v",
  "key23": "2ZyXSrZqaaEmBem6L6icZ7kKf9wm9AMFkyfdH8cBF8DNYTvHzc66UqidYbUhCbGtAiehiPT16PisADLCSDwmK3RY",
  "key24": "4vce1rMX5FySVcYYKdoMGhSGoZY8uW2MXVEKbQpGd1w5LRPhxaY9B2y5XpB7nbVLKAG7MKukXR7hvVHBwsZ7ZooV",
  "key25": "HoPASESfR7qGaQgrrV1ywsn3KMeFHYtsnSmxhvCsZjuY5AusJAwRiLBbKsDpRPNE8WbbxoTqqDkkYYrtZ7VNiBF",
  "key26": "2oNVeztbTEWCLpeTynZ74927xy4Ty1q81Q5YoFAq4enmR1kQJdymCNxwgLQBo1tJh9JUqTPB5SCNPGVz7V2os9dU",
  "key27": "2bmbER5XHCYJVRzX4ntqcVKKWWJrkisN4wMAhg4pf14SLxciHmZ8uTDoLDWnupbubXpbSnD59YXGHUi2amPxuCCn",
  "key28": "2pZSWF6MXSzMhCnJzpkSaWR6osw2BmVcrAAHxdcXiYxcri6MZY59Syrkxqxr6uyxh3sXGTpWog5hYreRimZK3p53",
  "key29": "64mz38P1yskwNUa9xvSVdZ2XHtvEmCzc8xoY6K9spyFv9dq6Eu8ou8bfsvMSZtAX3Zkz8tAj5UuamsErsL62kYob",
  "key30": "3r68LtwMTSmDMWGziKSts7q88yyWcwj6NfJMKxiXX4qEdZ7XiH1k5nj1bdCWbRdfLkQvhTn8bd4vwqLnJwG4D1pR",
  "key31": "PvGgd9B7UxERVEg2A6yNnhecDaAJxCPqrEEvgu2zTxk5uxkDTjsHmonbSHfLXos6u91YoSFVV13bYbBuKuKYhDD",
  "key32": "2DNL2gYdfsbU52sTxr7hgSpRk1SfD1EpdESokY6z8QLb5pCzV1CQRpWacA7hxJkY129aSiJmXnXt84hPGiYK8Ddu",
  "key33": "5LbxB8QSwVHk7FTdhv8at1nLBxiutXGoYW88PL1ihir1nhRiEdDDpJ5ecf8EvUfupk85EEx6g5rcFQfnmhR4rKGR",
  "key34": "5J5ygRvHbsKXPuKU6SaGqaW8T2JCoMfytj6jW6PG9yQY319KfpQGVCV2fdtB7YoFdkkNX4DtdTFjRXeyG4cZgzFA",
  "key35": "5u9j6Mxzvt7NkS1JmxkN7MsMntdJtvFXWYKcXY5vsmtWRojzLaFk2oS5w1q3Rd21pziKpz7yPyK6JecK1SQcapjD",
  "key36": "21Muin42WcutMT8DMPoMBzKFBDBtXGqRZnsawurNoMjMuTWPRS8Z7iyaqgohPqzvMf5mBquT98Fz1UkSfSMAuPvZ",
  "key37": "3B9Wpu7VAhySC2XFXFwLzQkZsESVL4YP3J18j4Be76cFXt3XM56mprobSj5u3195GQydkdepCHumoF7cB9mKAxwb",
  "key38": "24rTkeJGyvX25QnEYitNEPwg7rmUVRUZixY7eQXF96g478GxLyhvTVEnFB8kNgvEWpehqVoQy2LS1RkRVPB92VxR",
  "key39": "5gJXtVT65vHf7bRn2Q3Unc1yamgifoqxr8phSx3rn41at2V1AvdwVVtrzfBHRTXRgpT6bywi6HotiR5cPHVi82nf",
  "key40": "2v7jdUsFyzXegk2xFKGg2x9m2kGTkJz5PRPn8q7t5PPAcPezpjUC32Jd4YroEnzUb65Ca4NeZLfqk5NEZoLcUs6E",
  "key41": "2Uip2C9WFVk9LtJ7Jj1Fq5DBoHVYWTCTseEXBpPesziHtDzRWnkroU3o2R2mXQLroZ6RFAdHQ8Ng37QKZRC4ZD2Q",
  "key42": "4JcCddvkqcSnxxNryFBWJsauSpi6uinDjY5HRqi8RZVtSyju1DPQMXAR9E7sZYsbSZ1YXTbGqWo7UxDnhHmNZ8VR"
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
