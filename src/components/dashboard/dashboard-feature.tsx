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
    "4HnZfUDK27pGNDCRSDKKRGMBQe1ttpqSknwpT9RfsTUudducmtQFt6bKHHgGkNY7YJcFHcGMhq8hUoynpEUQgcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594nTsEsJm2QArW71qSLgQAqVCoawti8FF7Ff6Yy7bcCiDLumSjjv6XreUrTjDwpMAudJwLk3ufNzZJLBp4vB2on",
  "key1": "2YQWiaegShpRqRXS2DBf1bsrxYu726td7sbrcgTU6WUfxRH9H1fkw3WYQyf4sDpZ1gzhtjCemkVy8YNiyG9g37Mk",
  "key2": "4GryhrixPDivtgfhbVVaPtWdazPPUp29rYm9aZncLcQPSP7XJoRXsDUts6wydVUBtRWk3PsSuVqXt3caKtBKZJzh",
  "key3": "3w1tmFHM2hY51QzWoPjMctun3QtvBWnxsYEMj6Zbvz6d5PGQYFrqeLQn9dsa7JNjszo8H5hYhE7AEY6b1o9b3c1u",
  "key4": "3GeLXqaBh9XDfbPeduiXbjw2JkJaoW7uUyKutxqok3B6K9VG6ufttP6CdufhakLV8K7DfnkmtoqdP1PHYZBKo3to",
  "key5": "j22KXmYiVBTRUnUiQ85JVcKVKxh93yGyKw2Ti8FkpkSQ7QYKek1AMCYGJtYPm6AViZTK5Evqz4NAx6WkT4igPJr",
  "key6": "2KkY4oX6UTftJvRu94nmHqWgWkd5gYj9M3LFHRo8s3zNG1frgFcodQW11P54LjKdA1FFdqYyTxbiQz2oBfHZR4kW",
  "key7": "Vh1Nff2Qq8yt9SwmCZaCH1kx6n9QWmPXmUFyTHdSd1K7iHexXUssii5QL2xfWzV5aQuX9G7EARoxucBdygXxeAE",
  "key8": "47x3qC32SfTVN9tbyiRgq1Uu1V3RH6VukzaBUgkudNZzzsBrDF8MLPfPFSF9wExnFVfVy96kwQVuLDGnMnuF8j34",
  "key9": "2WyVoMLiZouNecRE64MJJ8zHjtLXMFF1xbWRsfVHcjm9F9QsrRyDubCdekCWA3GbUwLPeZYcbMarze9r5orXdvZu",
  "key10": "3Ws313T6A56zzQjqr4zyWxwaW6d7tVV6o3G5gwfo44iT87JT4q4nLyxUgp2rCnHq5oAWzbBEzkqLQQPd4ksGiSaC",
  "key11": "5hscQgPPrqqxyJtEaHztbooT52Wy6gWs2dza4SfyVD8jwBYp5gauU7HQoooMnJn37kaYqNKrgaxYNXdenS86bcK6",
  "key12": "4ro9HPzcuRTTZU1CSB8UB9tBeEcxo1dLuCNGj8WhDpAXtnNT2YxY5wQm5u2fZjwNKMHXMgXWwXtVpRabZDSRu76z",
  "key13": "Prx3NCTU61R2zd6z9cAxAs4zWCoX2hpW6cqsiysoT4EEVpKB1RQVJa7BEAne3Zbv86RX7sRL1s6uUFnnBZY7Ybg",
  "key14": "3d5QfN2EwsR6MZPVD1UwF9wcCnvJ8tvxqBcRGkGNtt1wuBB76Mh8GgW2VNja963JpAA1FfLGpNKfUeACp36s5zrn",
  "key15": "3yFLq1GpR2GB1fXj8ScgqUst4dF5TPyRvVEVyFVzEzYe8KH33e2vBBn1z7NZFmgy6bSipwHcKkaeKAEhTs1uhM2K",
  "key16": "37y4LV4myptvPiVAureQmjUHPKYn5S5dbAr3b49tDvbus77XTAqPBTCqa965JAWvhE3UtBG6XJztshY3F8o2CT3y",
  "key17": "2wuBrifVL6Jr4qWJNSZUNS148P9rC35LQtMmPnvZNTAc7T7oc122iUPazRuhm3UuLfVR29rKScesKmaygQLrrwdm",
  "key18": "5pe8X2yDHhUyi4vXxAboDi1LMN5VBoX2fgtt9yK7iox3nbKtcS41RYXrdfFMMiSQFSPUiYZeD6UCefrQmdya7j9F",
  "key19": "4BcAQwvMMcYPGgyKQETvPUmv6rdy2HnxhM1E7H4SYb7HZpqBwSFuU4sLDVR8kWvAWk54QVGXJRUxBdfGVTLF2hXz",
  "key20": "f9dB2NTA9Kter2u3h4yqhQztniP4jkH6V2G555LNSLLgrJ1baVVL4J9oh3ggP7nCmMGDNc9hpUQjCo1uFWNjyyQ",
  "key21": "394CYAfZh2kmmh22TWNc3pPhRA5ehS5Ac9k6Aurqn3f52y4gFZxpqNUuQVCKAV9F8LLF1gxRE23g339jrnR3M7Kn",
  "key22": "bgrEbocgJMtsVYEBwF3uBVFQ8jhv9hLHzqmCbhPrRBzKHDqmgy6N9qoxToHb2nkeh17eR1yvxjyWRvNgybroW1A",
  "key23": "3qdBXw7gmdsTvBJeCADctiLNFRiM2NQP1GjrKFKWgs4XtSfkPNbWn64hbwZeoDv4jBuchmfFGoEAt6BD9f3mXntN",
  "key24": "387ibXXPgJKqkkgAAJNn7caVP87R5egVSkM4r4LGwi7bcTzWJBMYwS2gCPLPNwPeB2vMmNatQQxkQhcFjWsb9dzg",
  "key25": "2z5Gm4XWfTXf5s66nu6RUmmH7uMag2Hp9GRFYfph6fBvWqGPAz28GcbhHfi5J4j4XSYoDHwXv2fVTr64qyPdxUP4",
  "key26": "3dbEwPJZEftZMNPCGQqBX6c9TNnUqRe3Wi7WfPzzYgjBh3GWsjR2rE1DQjmdwQjAV2ppHXF5XgiDqPn3W3ncbbEf",
  "key27": "Koij5FQYf71k6oxk3QkAdGrGvxMbhducV5X3KS42qup46pnag8GNK7qXnmpfS1zJGSsfVWvq6WDEPrvEfrocnpo",
  "key28": "sMVCEjkvfZyErrNfBrjN4tmik3gUPpCk9kxxsdDKF4MZfKtJqKDAhrdEnBLtqhTpBvx6pMqPfRpZkkmL5zDxZyS",
  "key29": "4YmH2QYyB5bgA5dpiviwrtTAFbAzjotD5Lsb3esYySULxfetYEA8s8oTd5PB9quxXr8RUWBToU6znzyLXZJVCWqr",
  "key30": "4fDBCqWLcL2hhViyWgXUoVbHLimegKBsLRXvmpJHo17qcWnr3PEPprSKR9NAomYdYy1NDhadTmZE9ohouvH4L65N",
  "key31": "yH2V9bm5kTJ3GXQfdtKKr1i486yryYLoNYaMXXkh6SkC5ZhK4o2avHU5wHQtDXZp2DNYTpcv8FM1LFTZAbZDpvK",
  "key32": "4A6jPefbvryqD7YRNQJ9iuqdd8ansSd7rCx5EKJohr6orF1KGpqmXY3iJVtya9BgwFtoT5AsGhZWy4hXNiWWeLRq",
  "key33": "341WE7M93YUNNEKEBFMvaHMiNdzMAMQts5HcVhgSBPG7GNqGRkTnbKgD3aDCwdgZSoAazsrkH9me5uFZDHHvHdgi",
  "key34": "51SYmHLDKsRTReZxqsKeDfev5PpU7E6KTJzydikqUpebqp4wdiiPJpdnshJBZKkHSx2TmHsbqq59uepyBjkBLj9v"
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
