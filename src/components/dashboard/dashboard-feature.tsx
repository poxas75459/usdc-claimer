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
    "2iLZbgcRPqn4i4A8kg5RM4RudXgwLRV2GWsKXiYCYdtQdDjx1jrVYPUqPXurRa9SrDUqPJhKF3aN5w4ntDSPYxYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nNMXsR8DUJFrJEUVASoC5UCUadA8DEPpVBnPFkG8MGJdgZY47vsmNVCJjYfdhkxhxJtGdeG2TXcJBb7TWhMLr7J",
  "key1": "4QcTsu38LMPGPL95B1vZF6WkZ5AmrL8ftmcqrDvCCHjXHMWMRVLTWKEB9N2tpBNsbgbzwGdVrVHSeoYXnUqaoAo4",
  "key2": "4ZbiDqqD6Kz19NGMKzpEpttGFEXqEZvj3xUv663yyKEAwNg3YHcoXYufoNRmYcro6h4duR97Qs9P9EwBwhuwL6ig",
  "key3": "3r2Bzrz2iW4nZDJvGG31aX2RwnrUK2zDVqG7ravhMooPuazN6r6pLPWPWawaMN2f9mMZV2SwVt6YovBzBSCUGise",
  "key4": "5CU9ciroamaTonmRyVUgZ6X29m5FtDtbwvfjTZgRPBwoXTp1WVxjAxyumr4Ts5K39N425pfkLnzpcHNarWE2aQpd",
  "key5": "c3W26aF4oPy6T6VuHgSS7Y1Db9LW5bV2JGB1gyEkLLzN3jBksVATTy2xWM8kmv3encDMiLcswrMxQMi1yJSCvwG",
  "key6": "5Cns1ztAgVEaBmUo9yayY9NeVkqbGEhUSqz7fg2xJfLdCT5Ja3defBRszhWnz8AqavAjzp5ZrdWUFMNYrxF9jNXQ",
  "key7": "2TYyCzhAWTcpDZVnVUnpM4jkTSE4RLd7fcaBsbud8W2hTKaX5rEEm1PEpidh18LCuGNnh8qXMXRTVwAeDxa49Bqi",
  "key8": "56xGzNQjxuttyowrGsv55nmrzrrBoSnZndYRzAKtqqBBSLM5qwhiM62mhrFjjf64qGgeLcZnU6r66kDVBQ4u16de",
  "key9": "37cZQwuYPuTiz3f1hMPfJaUVcd9mby7djHvvoMCcCTgq2nagGuNeoe9EJVBnFWRYPJmPhQjLokuKsPYGTnSQ62dt",
  "key10": "4m9x2K6J68Q8xLHMJ6eGmwNjc4u1H1nNMFmkcc7hairKKqsh3gzDgmGyZw4BM97pf1sBRevMaujuXkeoNi9aasvq",
  "key11": "5ZFiXnnh8LAev7pYR1LGuLYeV8Frp2Kk5cMpVuhaK9FapYJ4vrTqSRpuRWFPmYxSzNDQJsgKunyj4K5BtDbg71iT",
  "key12": "37GKvtYjFuSU9TieHnbAE1A6uS7KCcv8PJJX2UfRYwUd7U3ZYKZyJa6KPoAn6mFXV4vCNU8D3rKfMYVXs3A3c6tN",
  "key13": "5UyitwQZD4wY453n8QjvZgDzMg5MCu8bUti5Z8Djvq5yUkoT75ERH36cmmTtAzMUp6ccJ4QjPYnuSHwW8rHhrXSu",
  "key14": "4QGkqtSJnYZP9vxUU9V84w9cx87CmGxTWvAULp24PDS9P4BUY3J846RMX79EtHMijiU531NiRx4FBCgpraEBHDtT",
  "key15": "2d436RqpuikqC1JaSKnU3pmo6B1KXtQ525ySghL1htfDrQ3Nf7dZfSGyvwjsnDEdsPhbPRcgqmp5dpKmXQDTDcPu",
  "key16": "5R8ixwhZRF1WDbihWSt2eUozPVTKk6Uw1TXykNcod94hTbb127eq9yZ9gTvyCjiYdvFd8TpiJwrvjo7qEXDAdkcC",
  "key17": "ZiaUFLRf9X6XaLnh53HpPEqUju6GfpTLWGoCvtzi7MHsbGfQvoyEYmJdptYxNXjfkK8tYMzz2Rmy6tfZZ8QsYmn",
  "key18": "3kDwwo4qSxFyuAUv8PWm6ezGqYc5nzDnoxbDKLZ9uP67YbAT4iG3fwHBicv4yRkDgWhwSWP1sw7FiDABnkLxa6Hs",
  "key19": "3KM6Fq6uor9C1P8LuWN8paDfGfv2zjQeqeZrxNLHNy8v2YpCQrMscrNrWtq3oGcEXW794cdhyqUBy4s9jQ1v1WcA",
  "key20": "3LPPnb39vYdKdg1oEVaZ4ja2YPUzoZwRTCMEZDWTzjR6WbwFEGjw3PGiAn8iPAx8q4WRf5UfBmRUJLQTUnUcerRt",
  "key21": "5PRvuwmdrocEK7jEiiVpWjFJwKEe154ynY2i2gaxbJcBH9ZuP6MRx4KxJ28VHXHq7f6zr7ata67RmpKC76YrWAT",
  "key22": "5LRoW8FuLcd7iK2TT3r5gCp5vR6abAzSg3UzkjqUPjfMQtKNMLWGjNRyMhNnvWpk4Q1YNfJeQxPU75ZEYndBoCoM",
  "key23": "2CRQo8k3SuKuhFSgFZvFEhsnMyBJvkXNmhxFuAtRZpLb89WMZrD3MMmUbR2qvqHY7efHY5EgnjWHNR58RTGqwf6G",
  "key24": "4mgtLV6iHhxDFzpQCHTzJtVarKsrgTNgrytmnGfQm9w2Rvqmctc1owqkv6wdYBzLLuTZdFva6m9c6VbH8Py2yjEB",
  "key25": "2hjWx1mr2nGYSs7kzFcfTNNHDPLPMWw2hkh2vyPvWPAh2c8uykPYctUsgN6VuanVN5beBGsSfBbkNSJ6QZV2xSYu",
  "key26": "5MzJbo2RGJX56mWDJxr2zZkb3NWaRz2ZNdvvEd1vHBDPDZ3EaDR6psjqGiiwYEx4bVGLsuYG221gkCNNxRunGgvx",
  "key27": "3kon2LmxsfKpAS3pDsTqNqwU3ytLVpoFnUoADh7AMVjPLF1HKCDKczYJXi4pPczYs6FCAL69ncVGt9vZL51q4Nkj",
  "key28": "3V1mHTgtu5rnqT9qixS8e9RhY6LXEFjqQP6RUs8vt9JEvtT4HNNawLwrJDM7nYjAk2C9ECciKTjcqBUhgfsV1He2",
  "key29": "4ULYSx4J2TT4MYhDYBNArHSRV2kptAE1dV8udszHcK95NMoTGP15cpZKJKsQuRcmX3RSv8H7XPLHZbMYwJCmHsYo",
  "key30": "2ZyosEV8v7cuPZbuGGxkSEUCGgdVoSpeKx31YoKimXMvXJuz7QfzyVEqRXp31uN7bmDrrWPMr2fHqGWSu6PPD71v",
  "key31": "E5Sr6edmeTWQBapUoZ6i7baE8fj7YJf2JGczUM2y7BvjgAm4jLH9WM93YQFjLk5852jop776Ln79hSTjY6Rr2ec",
  "key32": "4H2AKxx7bHyyPcamJ7x6dUDMhjx92tBhNZRySoGhtqMQ2E36u9FNikB3Y8aciXpjyGPbMqoVRNsKeSUgmvB8eybv",
  "key33": "SvDaQ8t36EXFPX7JCjPWbBiH192QY1LY8uwPmCRc7DGLhztCN3x2PheHdSF14Gx6XHG9FwozCU28JWbbShXnpV8",
  "key34": "5TpStNaGXRr5Ezemjo969DoN3jjzXN5UxYAjCFHcm6zTHmA25UgutDFAAXoVycV99PAYYfA8nUCUWpGGDUp1iMMz",
  "key35": "2ZT67DpRUhXodPTxSy4jyVyjSYKdiDaqCbJU4QDJ4BgoMpbcSDXmK7tyoACCriCdZkpNXirydhs2pkDPR5yc81tA",
  "key36": "5Xgi3RSCeH9C1WBMwzbHtWDVJ9CcgsQHweAXfiYn9weJNeKEc6WLRUyTWfe2uEVr3qmSro9xpoZ6LTRHcAcbZ2uk",
  "key37": "5xx1En1NgzRcbWeFauWuvrHi4RnwbFPh7RcuEhDnHWwySU7HbpGJ6ZWzBYJLe2RQzNc2rtZhRUFPVHSZ5P18vX8D",
  "key38": "5dRxCuzWJi1KExU3BrrUQmxYCVHvwKuqWAKFeb9WViP4pgL6QJVzUgctosz3R1iheTm9eYCbkFqrevEYBZhjXrtV"
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
