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
    "63nZ2TEVh6utirzbZD3xrs9HUKYjETNWHuZPk6ZpQ1CnBcd3z5bDb99Ru89obwQM9tnJgXYfmd5CJBKTFd1ygRd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HB2ANnUEf5iN5yW8kNQmi4YRjoV195pQfDisDRwYhZHmUkZaVJERabusqLTDGst3tjSaaPFj9PjHkDZaV4dWL7V",
  "key1": "5sznES5UoFxpF78ZEufN7KJ499Jsoa7XZGHPp3vrsxCPq5jVFNMsa43CP7wh5JGzsKgq3zv1Eb95RpHDSjGtSWL5",
  "key2": "3z5VmcGZPjmaEKC952iSZ5vJPYSAcXdsQQzmjo9ZR1cs6Hq8VTmnPLHgNRVQLDdNbMrYMpGZi9N8onp8tfcKff1T",
  "key3": "4NNqdyTJRAPriKK761vdHxRM43SRy7v1UsTAHcGX4gbHphyiToGsaXzxpQshixDbdwLjMM3rzZCXBvYEpGsyuBHk",
  "key4": "Zpb3Yoj1EqDFsGrypgqcwAraGyYEJVH5durCwFdwoUMXUGEXUq3rZrmfoGs9iPPw9CqygWBZ4dq3jwbvpbqQR7N",
  "key5": "2cq6eZzB5UjEUbGJnjXw1b58UohbBYB955PYLs4ke3n4y1cpbL9fde2rRYCikAzoVJnpkeo8RqsRX1CDToT9itLg",
  "key6": "44xNy1PgWxS7nBJBTAxd3Wqpww5JpRR5mUn39smjatCz22PfpfPqkvBqKT9W4mFCHW9Yh6d2c43jZq8mLSqvrEci",
  "key7": "5DiAoWndMEFGGk33u793xY5uGb5prdt4aXi6ZrT9mcg9S9X3gmpmqanGUZSzgAccAmjmCsKenEgTNfxdCpvAGV71",
  "key8": "121G3epaGVAnKXtmR6hzfm7zoi2VdbT4s4zLXzmBU8TPjBMqSePu6TCekEa9EEgjwMhb4o34wPiv2oG5DQMpZFsE",
  "key9": "29WPLaUK7PMbve1b7zrwqeYBZXF2heyqL6rMXyeQ6CgMJk5Qg5bHPKSwhAzEgcVJFYLqyv39N5QdxXGgafmnBUeB",
  "key10": "5y58yN27VuKm3Y4mQ6sgMhdXMXxV6TQhH3UV6zSJdvFtVA8ER4cUeyETmLzBENzydVNVPs4A4j82KxPFcmnFXj4x",
  "key11": "2Dhx85tjSeCa5w3ripBiokqDnzFgE6KkWWdtJdpbvboiHBCTfGbqe9hEyKtPnYyhwAPL1MgYVbRE9WMbMQF2Hg49",
  "key12": "5EZKAvErttF2ufoqy5oS2gqBQsexcYFEebsbCNLWXYCdRdR1smoydGYxCVmgMHdYKxBJ7jmT81utv7BnqKdZHPxq",
  "key13": "3v5MtXg4sGNHoUr5CpybS89zdLfdHgXZpnTWHsYqnwjVS9en1R9fSP3UF84E1y2qFjiTuAyqZpk5aPXa2QYwNmni",
  "key14": "3tHXc4QR3SkzAgBTh4LmaXZSapZcFq7PXfN2ZffjaED1LwG9oRMtn5q41xWCavrngQRuHt5YR3Vv1xNh7YqbjaFU",
  "key15": "2oeouSuKWvxJVGrTg5xoujq28DSXrgQ1K4ok1oj8QGoqhAHaKgWCAZtD9Ggu2ynaPPkrGzAogXyQ3PeMQCzyGPUX",
  "key16": "3a4XbC5BBZFAcW1o5hKgd7axTS2L2Pw2PcchkDbCEMdz4kcRkZn3jLrPfNJjfjJve6NjPbyS4DCMmPmH2V8QUMvH",
  "key17": "5qFCRPzszHgQpFLouqUnAWuVJE9UGa1dRYEqacd6DGtqzRa2zZMC5fGcS16kVPtUhT4nWC6wpPf3sqyoM5bXwuE5",
  "key18": "2hHnK69bMGXG8nxXtguVAQVuATRaERZwArMbDi4JKDRLhsehxTQ4sAF5Dfd3R4MmtkuFEW9WsB1NbFNh6WBM7aKV",
  "key19": "4BsFcVXLvdej4Ar2SHRP4tFCizwoEfjMEbFWCCiawuTZGijq7r6vUCNsLBWTikvq8HSwFCLnqYhV2sSia3T9pCiE",
  "key20": "HbDZRmZg59BsYpyuhToAsXJfx3tZDzYWz15LFSG6uZwzh5qzFinMgd9Afz5nfmCRmU9oGJnkGXMZV65ChDEFqve",
  "key21": "3i8M36c8kxhFVD6rC9Pgfbcko2euqbjyXVxWWEvqHjEi4u5wdEkQ1xUUbPUKt9xgNRPyrYHY8mAGcPFh9McCEKRs",
  "key22": "49Pq1GAovW9srFDZAmpvrNWfRyWj6Xtc1U2QD9vyi5Cm5kBjSa75C3PQksLiGQeaLPA6xugu4fApKEodFrktcp6X",
  "key23": "2KRTtwLcEt35R2Ufa9GSnVomjZJhxavYxHtKp9RvGwduDjdWVY6XwhS2wdD5zUha4bq6e4154KdgJb95wou78rcf",
  "key24": "2U1M1mAFSqNaPh511ckEjibnX5Rq8zygugKdYHmxWwP5TzrHqzX2kDijd52yPEXFwPjxENFP8YeQgqCiAqkHWQPJ",
  "key25": "4m9XiNfyeMj2W7g11pN2qcQv8yCuFFj7VLdx815a2AXN4LbXBK41VxNxD3wKmbVWz7oDgsLL5qFoGg5bFiLHkjBd",
  "key26": "5JchUR6p1RZzEz6wUDcc2ecKC7j2eYQTwqYaJ1rmTs81s6HwyFGKLYEktk85vDxdEupRCLhyct1B1z9Ub9iAwSB",
  "key27": "4YBpLWHUC9DKzNtT5MvHsHG69phnLpaGVDeXYGuGRgKYBb7tY9X1AWdEs3KWYAfLrLftVKEKppWWasMrC1kiWiV7",
  "key28": "UK8SXoFyCwxCwj8frB1HEMSybTqYQkwkgGCa1WxXuy3U8GLuCAzHDsHZj1cpUoQMS2jFuV6pUzyBBmGxBGW6yUc",
  "key29": "5pmubjXwxvyeNJruZPNPVqjkZRma1nN4BZvgmaZkNH8gi7zzQfvfHfPuVWD5f75f8Z9V9dm8TWaGHE8AAxrF9611",
  "key30": "4bvXVBWt54V8LaayH7pVzZt8hxiyqhW9sAkThqHRsVK7RuZM2BMersSAfYU8k77ezFTSnSmZ7tQtNc1XvMADkUmy",
  "key31": "3ypqSv9rJJY6PAJRX4p43KjsgwNTEpXYDphAM1ESeuBYdScRD7Me4pYMyaf7UkJ5iZUXCzUDqsZ2fCGWgVigPB5R",
  "key32": "FFkR8U38SK8fVqTr4gjno4tateSrg7vmQw7URxxZSbWG2qR3vkG2LoXh37gwAGAc8tnoyv9GiAidmshWc41ZigT",
  "key33": "2xGaWfu85YxVWjbznKrBdApeYrXQn61BDsm5F24wpKPbPsHz7TVgtp1SbP5gHUYSv5e71K1NRZS8pMevCbKZJLd2",
  "key34": "5y3UeTAyi4ufPxKpoNGJtfmqhULscGFRFuELXaqQN3FnA6B245G46TDFCdvLC4HanWAJLaeYyicuPTg1pnEjiedJ"
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
