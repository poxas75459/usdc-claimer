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
    "55hsTaCLb6RMmPzop1jMSiT95oB2BTVb3V4E2YbjbTm8zizjRLhWEpvbN8Jp9vMkQvuFKtZjA1wCnySaXiFNU1wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bhy85zfevDCit7t2G8iRHjuWE2xVsysvustDipgK5vqV2uj7X9cU1RCkyDnf1jfgJNwWvep1gqTmeESjeK3XMvj",
  "key1": "3nLujb85UXbhHBQLueJWwBzNteyDC8nQAXEDMM82eyp6BkUJETmrbbK6oe5nX6LEg1ibWw95xaf5Rh4Nuj1V2REg",
  "key2": "BNaTdPA676VijNq4LigBqdNq525Vvun5tu6zR2jFygbZUAiNwajBnDCVgiYwEL9SXB8XaD5bwiu4zyvBoas7nZZ",
  "key3": "4Ed5Bqux6CykiRnhHkw1do69AHGjeNENN4ads2J8NyPwyXzw3AfcfQTeZL6FfwB6g2Ej4gzveoK9ALAah6JCXVKr",
  "key4": "5unb4k8mx13VYUcv8xz5ykMsEREyLdhTcwLHJWHb9DTB7zrDQRU5Ub1a1jjQ8F3Q1VwAvJES8roaxEjCVRdp2NWy",
  "key5": "43pzq7kKXGb1j6xnxq1zWZguQgVVtUZqQPoLMA4fg1XmnEKaMqbg7tiHaQBqr1KJpsHL2BGVcRCogXPo2JdwxCXg",
  "key6": "5Ydn2S1gJKMgz5Sgo1rCwSYmrq9gdSro2zrw2b3j2GsHVK4jc3BZx9NuYXboqN5NPAiQ3mqUYPLsWJzedY7MkMQ8",
  "key7": "3mPMm6HSp6QtfZQXvQ8VMAXb4ALNyWxj3wPuQxsDJ6otjwqyuvaiTFuVD23771XTJaHtwFA2pz5jd4aJcEdiTxns",
  "key8": "5fvs3yHbSsyDRdBgdtNjhLKzCBzLNX81iLoc5jaca7CjsY11Yh1BGJMbsiZi4BYFN285tT6WYPfU8kJeMww4P7Yp",
  "key9": "2kQnoPj9nfqSQDBK2eefnSQpuPNd6N5djW9T7dqGrtKLaDjHdtbfMXnrw9UyztkAHD8kzTW5bQebRbUsRcUX1M5T",
  "key10": "2LnzuchxdJmV5mktM2MtHLNTtoQPK8xbTfaguWgRs3xVYNGDuaZx2L7pGrQaK4RjnptfrQWgb1urPx7Uk8rYp2U8",
  "key11": "5W3c9urJgw4ZHL9KByeTkj1ADSyfmjSJWNPSab6HskRiHr2cJSywP1TthkXoM4x7ERBWe8Za6EsCQ1nRv5XcrbDN",
  "key12": "2ZjWLYfiC2a6r6U5L4fArjPwrpDiJcLEPx9ZyGstW1a3mbC9x5SEKcxACBZgpt1sb11J749xG7ZV4WVW1uTFja6z",
  "key13": "4LrfFaZSNUfi4VehGDsQkQLid8MSdPaU7YpHMmS4J2awGLudFDhdn9wAoLX7GCtm468mDF5rZo2BjGYnDE9vE6jd",
  "key14": "33XrwwWVfp4a3HUHbycBNDJDrxYnRFiAUp4qaRmr7Fyjs6P3iJJzJ6YgNCFoLsy34sZUiUyFTYZhkTnjkwG9WGqp",
  "key15": "2rwvFU6g6Xg3sLGDbXt9ukqyj9b4zgUstyPB7oxQFe3QwuZ19SufYC8929xSEbSGqJw21RxF8WQHJ13qdZUnJwq5",
  "key16": "4QvUavzynf9M5qMA2d67JEbq4tcJWXdtqGTcVFTpWVo4s3wSs6kwFKczr9YBEPKLqW7P173xJFWjsJayWQaqqTbY",
  "key17": "c8RStY7ErwxC1WhHBKAC2KVxkktrs3G6TCnb9uiV9UmqhHDt1WqgXMZqZCpJKq9t58MAzXSp3UxdNGvm6fMzTFx",
  "key18": "38aSFgtJHP9SnKqyfmRrfKLEUPMBFq2BhrUxPcGVTDNrGwj3FqaZLB4Gb19i23EUA8w9721mbSvtwbTAXQKj3UKP",
  "key19": "3nSYjsNECs5TYv9ZmMLuXQYftsCQnNuu95zQ72Rs6viWR6LUk7R9B1yVbkKtma32ndyosRHafFK66X1gyTA4vrSK",
  "key20": "4v6CmZq7MyQZN59v75ymFuj1e4ZKFsGdAdRxVJgUmQ7PFcseFD7XZT5vFQCaB7bDbmapntC9KYocg3rKHXqovyeH",
  "key21": "2yEMfRRPVfMKVEeqdRSqkkKDitgpzxV5dsCr7A1NQ8JAdEyjUQs4tpyngeeY6hmRL8WUW2kADSa2aqHr44VV9oPT",
  "key22": "2r79TB4ckbPTFFAcNwWhm1yibFL9T6DUM4cpeGfJyhnUVmzwe3WZ761ksJdCeD1zwXBf77g76T9qGZGZvxa3wU4",
  "key23": "5aNTKeUcuxSWipkv8JpuuEps6zRoftLytLvmZwGLSZnW7wCj4JRnxov7zRaEwVEHmthbVtnuiAHydQPNU5FUBSp6",
  "key24": "3my7Z8dDTU7EmxnMetULZcCiJEbmDtdnb9zwNTyU8SEt5zh446jWP27WzpCztFNksEvskxXTPmPRW649oftTawuv",
  "key25": "RXctacoEDhgRM19oikX5w7mKVeewfJFBefr8md1E5bDj32kkbT3m3HLN3nuBRk1GJ4ry7G1ZVTP8sNAZHHgaiEc",
  "key26": "4amyBuYFv5Lt8NyR8gGRiydqEwWZ6B85CRmHVGZMKn9dUv8B1kMyuNy9hXvHxK9Df5zySrz1d4DT5zgDn5bm3axZ",
  "key27": "5XqtNkMU6MeSvkHNpjVQbsurK97p9SGCCh7iXTXREijirFxjWomhxU6ahraQhoyed37YVfgxL6ddkVaQakXFLLXw",
  "key28": "3HiJ2NeX935xMd15784VEZ8fHknrJc5v1gfkmkxQrMvTTsJXSPPqmJfNQ39pFDk6yfhQXhhEFtiGevQkyJ7Nw2hH",
  "key29": "4NUk7XPptv2fd8VPwPt4QUF6Za3ztQMzwPGipuDqnKuXqoYs9GgLKLoCLecE5PCCRZomJmhfFhbc6tBqW5GxJJt6",
  "key30": "4oX8Yvf4n9Epoes4CQG87JRGMtgqUwryKykyNgy3LHGCre6bfEA7nc5kFsSTK6y13zjCkTLVtwQWvaqKyzohQLtt",
  "key31": "5fVtfzywTWGkj7zKPLKKh9hEpxUMtpGTVBKP6R87xjZCVtRMozbmY1G3hAjo7Xit8yr1vtqK19Rqx5868SUgEaip",
  "key32": "4jehgLHgX7ChEyqes5w1T4eaK6LMu2bY2LS36TrJ4X1qE3oGtFn7j4gs6bahbKhBXsx6sZjpVbR3KZ5WUfuHKi7p",
  "key33": "9WjJAAvxvC7JKdV8rbWKnXBgnKfkcP5LhH36y9dw4PAYnqMh2EeRHASURrRro6ea2hfziZLNFBSPmpMfBwhp9rt",
  "key34": "f7dGF9JaZGW39NWwGGSDtoVh5RdknVW2S52NxecLvLAcrWH3Pyx2D88Dm6aB4BuBossSiYqLrxSx1GZEU9Lirn9",
  "key35": "3BGHwEpMPQ8eYFKgXvWU3bTkDX3tz2mLUSPhkPWoMeJPUTqarjBtSEyS6d3bTLTtLrHqGZe4FU4J9HPc2b6HFs8r",
  "key36": "sW8HWbAP9QAsrLGkeC3DUfAMTZPdiEoVq3H1YcbbLzXH6RYWtGyXw12cnz1uVybnVNkv9faUi5zLbHBaQ2S6ai8",
  "key37": "R5tXXRtkrGgutiPfcq58yfeyTnVyU31dTicM2h3gy8r3C1pbid7ioVGtyzoiUx4JThY5u9zPP549RvuMKcUGMSo",
  "key38": "sDEuLqkLCpAGdhEQG6ZDkRvdjHCpKpxbvKMnMY5Ng7kaQpu9W4U89Hc7tFZPmursWiRULs4jH7SXNo4owSC7qA3",
  "key39": "3eKWtEi3g56PgzALoToLsk4BZTWtiJiuNHKzk8MQWKF9AnUAuz654NpcqTRV88Z9sLRv3W2Y3zYY6eAs96hd34kC",
  "key40": "5vJ1AF4rMdoDqEnQGstpVuF4qiRSUfiG23Hb5ptAf5miL9H7j5Ubp1mw3cPAssq7Ym7Cdjwpf76JoZ5AzZS4DanK",
  "key41": "2UdJXZvuus5WDh9Rv85Hk26k9vkHWnZ2VcacfJBWb6UN6WXha1WeaTV4MPiXWgfKZx2qXDzbhNjjRGhsWFqWa29L"
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
