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
    "2uZCULVBP5m51R2R84zsJ9cFc21rmWE1twpGWx4VYpapZ6UEP7SXWQJTwz5kfUoMLaENbvHjRCnS1byuSKw6KMMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26nBUVikXhN4Djhs83uiQsKyYuNx9jQtAWkzbMNKt32V3hFX4KFuxwyEtBgmc5BjBvYwWoQ8gzZAjsTt8t475whU",
  "key1": "49vaacUuvyhfJ8BVwn5U3BniiYqX7aKmTDnf16i2abqtnHMF2zpBzzJQus4BXUKL4bNGBBGUm8h2UwnaVCqUJYoE",
  "key2": "59ZT6TTMvhyLQs2AiLYTVGAJUj9YBtcrJaTQnotZWtHNeis79bmT79C7xZ2d88PQUX3gYMzDv8k4zBtBHR7uVtgm",
  "key3": "3ySQAQSELEz5zoNS3uv83jD4bMMGVfBtJD7xZwLLXST1tqxtzEWX3uXN3NDJTRyNuQ85A52pFYKmv3CCdd5rPNCA",
  "key4": "4BqDcY8biLC7kGKjFRWzsDbe5Erd8G8CZXhNUJUvRHS3xpVunR9BfJZsP9dzPgo5yDcmby2CWmS4mK9u583Hoz56",
  "key5": "2wSURsSEKENuNTJbMY6Dk86n2siAjudx1SBW9NoKVpb2ffgLuxmRur5n8beo1s53GuBsoHh5nuhje8zcrMBM42Hr",
  "key6": "2tD89SWkhUMAzd84PzA6KqAUDYL2Y3p3dqeDRgoMt8Loa8ikf4oo7pqURVpHDqPUpkj4Z5gtb5jd1F7GhfwWQSig",
  "key7": "4GQdhMN4PRiu3s6bsgNbFQnLHTjTiu1nB1EGBPRJvcEGfrqYEYESFm3PbJeAawdwopNpEuY6wP9oobB8oHbdAhxC",
  "key8": "5B4E49HCkq9mkANpVQ7poTwXczAbgeoKTYvoghJRSJHucKaF5XMePpXeQay9cLLgVmdiYvngkHmhSYCLptZuptax",
  "key9": "2k8GMECPYi8NhpacksKbrea5YYtLcf2RAzNza8G9Xt7BQh1CfUbhUkPp9Y4HYkb2eYqBsQtoof5SidRrFh2BQqag",
  "key10": "4b31Y4p78XPMLVG115UTbL28HbQGjTKXMhLyfcwTyU26bxw82MEhhxhuGbMdDDrZAhyf9UfTu2SESPaTernnh3LG",
  "key11": "3HsxdjHrvbKW7V2QELdF7wHrgYoj28NEywnXAkZAiHouGJcuiZB4kS7rf3myxBCu6aCtn16Ehu1TczQ4wWFEwxep",
  "key12": "5SevNaVmgXRpknEjvzfi5MYzcyVwUx9RZBLSLMuhnZny6VGDHAzbkyHGqFkSqCsSd5mYp3ofg1BmBMd1mdG4uXsc",
  "key13": "43kBBB3r2uapf8vK1CnxNtdpR5fzUcWKjAATqbTvVfz1ZhB5FaKiJ8RnzEFTxeFUYXTYnTgdWUGC6dufFzJ3gici",
  "key14": "2zNbezmv2i6dMzGEVqs4QjazVjgew67Dt28u4YoYNYqKcEa8Pu8ZhonQkq8EVpq6KsRJqRVHibDzpfJdYnTSaFhD",
  "key15": "2camdpyoBGeMrVQgpWTzyhbCmUPK9mbZ4WGcBM1ABceEmWnjUDxwyFrp3w5HAMkJFdshiu4qZw14y3U6MMuBwJd8",
  "key16": "2qin6GtSCnLLSnNGVZRQKFKrksL1j2dDisppWwKvHDWz62p7jtGgFG2copvACJHP4AErsm5Z89NX3VaZAiRqevKj",
  "key17": "HyAsQPDZSs3tyLgC6LTc964dYqFm79ngDTZsFHNAnteL57R4Tj1fxefLejCng2KmFbdog5bbWgqDvCRKTpV23jq",
  "key18": "5mpkQnxyz5Jw3GyGRpqoFunRJJHcG5jw8FurVPRCz7Yxzt1UTiTYouxDeLP3Vpym16CLP48Hviukm1fTVHRffHqK",
  "key19": "2zVD9wk3KqGqGkeH1dKzJkr5p3RWLb95Mb7hxYpowDPK34fgZUzduJqxtQw727UjBfY8yLkanvdPXbx1Y3EMFDNJ",
  "key20": "59vAdkHdnYTfxzWpkFyDqErZbNR5SCfXmvims1paZTBNmAbxkT8iJxBRtJUAMZmirCPiVxhsX6P3G1ARzLCXp9xc",
  "key21": "3sh3dbZ2X1FQLmpQAuRvDhCT4ytURVtWmeCjV8HfQXWkLPQLizKZQBQAEchEYG2PM9fUnMW7grYyCLztQcY8X1E9",
  "key22": "5GsawZmXprVKDUQav146XdQ2jGp4Af3SbgiGXSQBRx16i2a2ZZ5zktEnVnFkwzAkiiVZBK2Jn6JbGUusmhgRsfCR",
  "key23": "3DJJjz6twoKR2ecfqmcHMBGouKL42rXMQkH2Jvao4UAGLvFHPcqT4fdmYFyjyCc39RrELBQJu2isinpJWf7qekfi",
  "key24": "4LAh5yBh7okAmAAwNghnNrTAY1bNyCeAtTvEFgNpPr7pvXtTqCWzJjj1uZyKk6sA6mdUgubfED3nNUyYaaR9NzV9",
  "key25": "3Qa7uWMyGzyJ67TKDu6N98FTvx5koZigfmFu5i8eKqkykHwTQf6p1udp5jChq1QhMEBrVXQyLmom3q7seF1XedJq",
  "key26": "VxHQjdX635zTVSCXeiWXikLgG5TyCyxf2J2aXLJ5EpQC77BdzhGyc4CYAU1PfHzpdT9dy68NaTsgqRroz1VqUtU",
  "key27": "2oWUKcndeqhgCogGztqfaDAm44SZxdMun76YhXyBkqbZfwza9qzFQ78GuCZyAPMiXSM6knrUEsFHkmDa1bnXqKzA",
  "key28": "9Y48umeNLQxSpiHekXcJS7F4ebyKDKR2B2bd22Gg31S9tnWyCnVVokjA4sxRsHWj4Y9Tc1vxnMBwNyusY8D879d",
  "key29": "W8Fg3RQ1yML2sVHYFggvx8ioeDdPN8PzYCkoLF5JzoDMNMpXoyC1ScYnXxXe18grrMgiqiS8zBgwLqM3eqHjsMY",
  "key30": "55HvvvW8yUp1ZNQBTVR9TS4Fjf84Tzp7Dx1hsco4fAqY2SNBqsbgfdbbAwmTHmbVj1VWeBZfvmLBmSxssa9cJbQZ",
  "key31": "572Gtbwxt6MXK1SquLNwWRva92iVDdZ7tVavjbxaKD2NdmFdmdMQP39VddBZSm53Y3RtJq31R2Gr6rkuHmWsfNYg",
  "key32": "3eZkGyeD6uYGV2CwyAMUJWuricwd1CU8KVv5duf772wevhdBKRGXSQKJC4JokGiV4fay6okCcqvJqavhgJHPZY1",
  "key33": "33MutgcsaNBjrKt3PGh88umUGmAJDq9F6E3vuTiN3d14g7KnZDpUu9oJjFU5fsqUyE9XtZaxt9pCGtbCFXB1EBBV",
  "key34": "53j1pNxHixk3fqftFSvWNsk7eWPwtoHjW3GWNysebKeaxVxqqAizs1pydAxiWHUQyu2KJtKpGu1Tc1GA176xq22J",
  "key35": "4vc1nGFGYyrjW5EzRqbByt6AqjcbdWHT3A9ehz1VbsqtPBVQMEarVHf4V79gW1Er5C31R4rxJU2m7e9XQJzDZKP1",
  "key36": "2ermXdsVJUEapojy2XPTP36jFPNBqXyR1CpPXqveJzTo9poxqy5Y45DK68y6KvvkMmXjcEUzhFEz552nJbF3XdzC",
  "key37": "3kFLfvyU7XteSvq9Sw6PdEFLqW1XcoFNWLqBjHaGCX5pYk8HMejge9enBJwDeD88LNbeDDL9Emcdg47uPXjiRQsW",
  "key38": "5R1nbUoXCHezkHJwoqxKxDZpbnTSMaPezfNcfgC6FuDLzd6sSt51uhc5D9WarBLxYiY3iDRxjD56AnheBPjDUT3Z",
  "key39": "bRVLF5sbUzXLis6udb2bbBugfGZPiC9QM3hHLuXrE2ALdWRD5Xa4t1xUUa1zePqzA27eNYs1vsLwyma2m2KRVQC",
  "key40": "2cEgUwkj3NscrrMHYYzhRxEkHUxNmsWrpf9YGiPkcjzduKGtRWoXvVEijyxNCuB7zcu8r74cJsJ3fwQzVuPvwih2",
  "key41": "28Dfg5gzwtCgk24kdBYWFuaw4Lj3EToBzQxRwCGdq6ZABbsT1uQwH2eVTzup9uFj9GHZkBFkekREcvTtXiuJ8ZH9",
  "key42": "2DPJionkEqyUHJP2HvBjH2XCUJZJRKFjGSvkVPbPgCWE92AJkveAZQ4R1UKQXKiKmuHbkNgBYTia1EHor7951Zg8",
  "key43": "2e9pofbkLmQdMcoEdcGnrKWGGzJhirrtMTRUytxpuqJhVjGMjYK5PH9pJCccXeipCFcz8E3N141E2DmxMg6YPZkT"
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
