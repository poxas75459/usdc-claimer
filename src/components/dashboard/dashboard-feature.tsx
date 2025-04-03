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
    "FG9nQ8ptGWXMn3QxDLX4CUUFVQs7QLVDkNFL2fYxb85CGZb9N6hJWSpDmeQEUGhJzj4a9igKvMBRzAFSeLLHA6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MnwSk9Wwf8JpVZu6Xb3HzVKcq8j7cDPWcsdgZYqYLA3v6fuVAtLoNfsrnv99ATqRecMWJvCE3dfzY9V5BzBmbbq",
  "key1": "GjJvsPCfZ2bgH4Ahug4N3ooS3UHKPWAZNors1UnWXxtxfNHsqagxETrBsmdWbLFuhXSkZpEPWy2R84TojH9ZvkL",
  "key2": "2YQJJpqnZM5CEUmDUdrQv13VMHz6ssrJBjb7CYWkzGaJPRZ5MUpVeNPNBrQC5PjeSvEDcQ4734TgCBm4auQGkPVa",
  "key3": "7e9f7Meqc7GDFKHNfbkmpQmhvugNKRwSXggSeoRbmFdrfqstSgr8aJQGg9UVFMri7sWXtmZbMHcxK7n1h4GBQ75",
  "key4": "2MuxJuvw3e4FRndhsK2v48mcjGwqJqsmjVUUwtcw7ZbtSaM7YuT2TVTswPMExtP9M6jZWGMoceUZXfaLHbRoKDwU",
  "key5": "5gjz4nfozKuci8y2nezp7QTA6WyffXyUU4vMj9QUMEoFZtkCfbHz51jBLehpspKQTBMBKCfnfLjWyasPXyzorbkc",
  "key6": "4SX8uEXfpLxGPu3ainrBMF2LztYHupqvuhRreYQUtLs6TshqWCHxkB3s1zDHrEfuAGdGi2C9kgVPsp3jK5GfcV5Z",
  "key7": "3VtQ3f3DcfgQ49nh5kQPRZZWWn6e4hDh8YD1sq1WW6vxWFw15CGDRvQyoqxH4yuwrM2AyaHobshVunJi5XQRauVF",
  "key8": "48ogpzwWSZNaLiNyW9zp1FxYCSgS5YdfzAMg7sbeq89pyFkq5jDMcjcVeHtk2jXzFsWowQ5a9DXpsVG6iJKu5gSg",
  "key9": "zCnQ4br1RuymsX4NxherzU8HEBAxVSk7jgM8ycGqfbciJCh1UzVnSvKZr8jXeLUoVvvj2ukE1w9fkAA86mqyTB9",
  "key10": "21ZzVpw8cR3AenLJ1C747dSZvjrv6BNAbUhPLsMjASSgdgYYetdDyXxy9yRbAgjm49xc7tXYGnRsoZp17rW4GrRG",
  "key11": "28gUY94zLcxCeLBTjiduVmwLGmtWwc29nkY6NZy4CZPuqL8qYvGkqBvFxMM64M1zsg2gA7ZNC37rbQ7gAYVxEM7j",
  "key12": "24hWiJ7SAK2tg1xzUkBKR7iyk1VQQ7zsiYBAYbUquMkVNsQGCFTpWJhFsPpXNnTRGVxPCNUA3h7aVaqi4gWP5xwj",
  "key13": "5yoRtgvC7ep2qmX5xwTo8QdoGQXLh7cJPKcsKRdpH6szY3YNeLLGDDWcrWfX9efMKcpZ32joYY4kfekLpj5y3Z1p",
  "key14": "ftQnv5atgFd5fd5W7afSQdVW3sqq1wcDefBM2tc1WDvmAK7H7d42dKUrz3aNW1p5d7sV15iviXhZ4Tj3SJX3TCb",
  "key15": "5sB3tihywwuYkwNfcjXWxCyAefw3BqQRtQvojwovcyvVVEx88ZLcSeo4R9dATXAa81z3rZfeKUKZPQuJkRrow53m",
  "key16": "42fRfpTz7oCQVDiKPkEuV2Zb6ehE91ghHCswTW9ycs2WzSXTHddLu3n5Ak64h8BfQJV3M2qRUhrfC52epgTbp9mt",
  "key17": "2szKU8d93mnFuLMic6pgWjdwv4tcifATfGkZC51NyczN9yc37ymtfdgUNu6RMCCaSjegVupA4BokWCtSXmt6rZVA",
  "key18": "cgrDXVgNrXyQSn6p9k8Z8EV2MLucmCubrPoGyTeS11rZk4htqbdMkWhZApv5APLqB17dPRz2JXaBbZyUtrFyodU",
  "key19": "oWGsTuKgvwWfMApbXLKQV4nXRQRrwgYR6PSG9piBxqAcHLvkKwrXroopHt9UidRx8NeWNTNaur8sMuTnbsdt62e",
  "key20": "4Cb3piY5TUmsKwhJud5LhLwBRWH7Y29AmB5PRJccaSFqZMhj2vqHTSNf1KiwuZcvqQ7F1MorvF9nEeiQzR6NfydV",
  "key21": "5kruVtA9QbvkzcCqKvMKYAPLYbrvE9U3fFv3MRoX6xF3AEvXVcjy9foRYSgdQK39P7BVBdQRDaJX8QhHTXmyCTmi",
  "key22": "HTmUWa8PVc87ktBqyfWRFrPTGF9VLHj6hQVYupVsm1xT9mxdwwdV264cwn3eQkowkMf2N5Ywz4ZR4shvxwnYaPd",
  "key23": "3oTkNSL9ztCmaA2QGsvJXzv4JQBKxHdPAvKmb7x4qTnmAmX9GkrW3ubMJK7gBN2yZEenmQNAhAC5PqEdZNPTtAUz",
  "key24": "2eWmgox1o4MfNi5aMq2GrhPAEabdsqQSjUaUYU6m35V4rHxaX3GLpm8S7PzjENwGZTBQ5zKVHJdSVsQuRE6N9MjJ",
  "key25": "35RgBBFBcGLtBt8Pu992NrSjW3RWqqyDdueGZkoNQGFamWmPTtTJNguLu5aBFAy1RgALbDr9j8w1xzFNyUMeTRUz",
  "key26": "3BCPg7LetT5iA85ourWLbBwMCPYZHfk5b7bvmXz9EqUWmpQhiGEn9CPHZyb1EcQGHCpuRRcEMxQe6BgE8cc7JdCa",
  "key27": "5TfW4NTCf9TgLA5P6ujoZ4AZCR3nqx99ZUqx8KqGus4FxVCUhq2EKAEfYhT1LSe379EMjWkUMjcW8DxniuTvx4PV",
  "key28": "4uJYsuSMxNYrtBnbo65jwttPx9MA3RmRNETZXftNLuiyMjF6297CRtpiAMmWCQFJLXcF7kjGxd8ukxf4MVAwLWhP",
  "key29": "9Xei2HaWQdJNQfJTczWJCLt99kAevfxY2yfNdd6n4949oRAZQSh6yPbPAmAyXe2HJSYDutDfdcS3ZQaZzG99Mvh",
  "key30": "37eYN99vEyio1r23GQZsJZhoJp4fSET3ayU6HWVtRyg5JXMxX4Sd6Saf1AZW47BnRF2iWkUkz1wVXQwSiByExBXV",
  "key31": "41uBSmE4nWZ4dLhmQKGiSnZMFrH8LMKD6BYwiWc9krZt5JiH4PiUBQzGe2GBsRL7HbguQjuDpvsa6STMGVi9GrtT",
  "key32": "4aPUsszQUwheLUhHPYRiV48hhNk9rX4VkDpqN4tMAUECVmnDgrMBLJnGDUxC5wMpgmfpuUdGVD16GjZK67kZ4P5X",
  "key33": "2RfL31KFQZ1qzmgxZpL9r1zzAnd7Zfb7NYAtncoEXmLNcMhs29FA6qmLG7zFhZrne8BBgM7iUYBU1s4mwe3ZJb6L",
  "key34": "55NqTC951w5Xtg8kY6B9zE3SsL1EVFKof42f7pk7GBrHKLFCXu7GbtH54HfjvMajCN4qHy2doYx81sGW6Yb5sesb",
  "key35": "4SBqcHDHwwgpVsmV3FkFXbPUKuCgQvSszHXfkbKiBBTLEBtzc4b12b82depjyEizgPPu226a9HeETWe2EkAWM6dv"
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
