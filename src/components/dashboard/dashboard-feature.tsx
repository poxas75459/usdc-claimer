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
    "49jXtdVUyEitfZKF2KkvzeizDL4a9GRsqFMTTp4Yc4fxQQNxcaFgbDdVuDW65TMt2baDA3PStEGXmuyk8NdKjafW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwkuYLu2L5SzrQ7iw6s7g6VzDTdXojApidvusqqKmUbEjhBPReLpyiSCD9XDiqSWYj1DEDYTtHWhXHNmRfUTt7Y",
  "key1": "44XApkJYsyDG8Pf2wJTKUJbJSTWpuzs9r9LeMwp39NEHjH45VFNhF8GFa134rDBspDZTGEw2Vj8MWhs9AnckLhRg",
  "key2": "HwzZWVJgrWVkGLuQXxg8eWXiokPqmvM6hXwmA95ZkEgNkfD2ULjfCGfW5J7ePgQpmTebL483V8owPr6XH1XMZcB",
  "key3": "5TiN7GQErdpz7Ax2iJqqZFffPeEnHvmKZqLLPyzbfv5D25D85rZCaeuoAzspECN2zTkq4xcssdjbgx6gZmBiKrs7",
  "key4": "3dnGL6CoQMkYh4zAdi9r3DA9VbD2pUMDKw9xXh8R2JZ6VPoaUyfTPVHGgZiaJ5qBYqNnCqfAbBg3bpXkT3JdB6CR",
  "key5": "5Vvzt2QwsgVBr8ByhysNu69Kddj7YKEWWQaw3wURq3Cy4R16CusgKHyMzFcdJnyabCKkM5FmSiNm2sxVbZMQJpjk",
  "key6": "2LufPRECQeq19KvP37YV9RFfEo9gWW1vXS4eqg2NE1BkDkYS9z1Qqpjrh9wBJazKvE8mvgjLpPC8bHi6625JdDqe",
  "key7": "gdxa8U1zoEuCvW7frqfiHHBGVS2SbbrKAgLQ7XZ4a3JW985afHPYTqocnVh4re131496UYYGGER2JyG3VAnxcE7",
  "key8": "4kYyE8XS4TkM1p3v9GGTKep4x12PbyqKHWEEQBbEgnwhVgKsF2wAFitxuGvaxXPBJ37GdvjkzCtmDEzzc3vJPJoE",
  "key9": "5VHq7LGizg2MnQvMvDk6aQa4xrau9yAeak7U2UZN52PTPFR1UXP7wDQs1LWneE9XHkYpPseNBF5MBtLig4FLJ2Lt",
  "key10": "61W7aES2Rq7ZUcnfch9qkjPcNrA7kBXQ86hrktw3wQzxVPN62zZ8tX4dtjtbAr8n2isecCBa9BmFCTjxKpZr9cVe",
  "key11": "8XPXXxTdqhArqasG24WAfFqgyTEXmAoQ8QwFuXCroS8gDN3f3pej2YNtNV33wuFE3oM1EYH8hywcndAMprA6iyo",
  "key12": "3EzGNbDhBEqXz8o29df7c1zn1o1LFCVMuYmPqHmCZWku7LH8zbTyiuCRMAYNPtKe7ASjT7bBjFNK2YeFtRE1vE5u",
  "key13": "2AcY9gpgJsB55PdkUnsK6JVZUbvX6KTA44zBqE5hg2HPUuHNms9WugqE5Pbub4PMbbpnKV3YGenCmgXosnDaFMJy",
  "key14": "5i6j8frLGv8XjZmY2iiDTnGKdPkkdimUwmCpTtfEGVXrsHtV8g79eFi8GbPvSs7xMkBNvoSQVnBHKxM6wfb3Fgiq",
  "key15": "UnR9Gu7VJ81gWnPd8nihtNYVvnKvuYgDqhrSvhmvVFGeeWhNHVy3jGf2VBeS2PZ3g5K3vj1VRb4XKrtrE2aFN9L",
  "key16": "41H1qtknx3TqeHfiM8UAVgZqc4kS6WKvnDBeKQjidiRKdaCP3UgRqDMSWHGeJGQvMwaaXaWzzQE19VLbiNrvdfgQ",
  "key17": "4Tiyf6xiJskPNFeDJ71FLMCWEc2VxVb9VHSVtHgYW8Rh6U1VjMq5WWCS4iv6odi1tk9MBSV8Yko1izV6UsZQgFY9",
  "key18": "5EPLHMNo6zQBvaXZTfjpbvBLpZwVah91NgSLYgtt3uxWvJ28wS7eMELrnLbQtERFm4Ck3J9vU5GbjVJMnZAbUEvZ",
  "key19": "2UUqbShM1TMH9en1VAYNGCHFDDToQX6tYdjx5gHaa9rmVkMr7eGz14HZcNEkLBQxTCdCRfCb1uxgERV67dH3xaVX",
  "key20": "5PHdTK2yBrk3FbQ9G8RNSEX7tzyxuzdmpd6zmebZNQ3ZdGzLkqxGe8cBsc9YFVQLVJahHhp86R9LpBW8vPA657fv",
  "key21": "2AQZqX1dGUGeRDsRMMjW8dK3BnBnLKz58DmKnifWmeqjQD8kgAnBamcHKAvxBYY3pqPB5XQnJM3SMNBJzNJS6qPJ",
  "key22": "39vL52rbHQ6HZjFj5ySEDPNPtujDfemMxGFXLi8JbDP9wse4bprEQzmjpMmRnCUBFG1QSVoaft4oNoaur6qjAr9M",
  "key23": "61TiXQJVqyRW3xV7y1oh6ghrJLHt8xaFXnKYoGCDFgARKcrQfgmqzixFeoQAeVJxDU4bfaRTvK4Txssod51R2GRJ",
  "key24": "3xuPKv3a29GgWnJH8ULJfxdJJ5KGohBiEuvU2EmkU9J4a9QqDyZPLzzySYReEP6BeisfkeSVhDzn2B7BHqosj478",
  "key25": "3MNEydVJhc1kdg4tueJ2tNPwb27RN4BBgDN6m3ND1E1b1utuwyyhgtuM9KxMxKbhkP6kKX7kJUnYx5A1NuS1tu4j",
  "key26": "5rQxMFxTr1vqrinMA4PMUCsXfMH5spmsaVb5x3aeZSk5hhyCt9rto7Wkpi3pDe1VifGuVMu1TjyxFhqdDPoZ5zNk",
  "key27": "5A7FgTwj6NUe782iGg3hT8x8mfTf4rmzueoMdC23PCQk7pC87ZsvYfKNeJC1zNEyF7GUjAJ2RVTjZEkSsU9ofqpf",
  "key28": "5sJRaFwHeuwwbQK5ks6uy6Yehe3jHJW1znp9QEdGfTtkH7JZeu1RHbv4Ldv1s12nxVbL8kUV3a2td5RexHps3rWQ",
  "key29": "4eVv2NEm4QPLX2ZQkukoYbXbjsWGtDW3YyJ5Y1LScruuiKkxDDXs52Uz59UkLuzXmhBbzV5fxKeq6fnmFJQuaypz",
  "key30": "22Fyoo4BNpkqByW4YEpHR65tdJeqGMuN8jqGFiw8wU2YzwyUbbVhgc9bE8HdhsV7y4yqstE2ZfN9nKKsWcq16eHy",
  "key31": "2j6aTrAgSZgp9qjokGyjwYzbEyMvku9j2yDYzjXc48jSMA8DFSzR1dac9VCzkgEVW6BwHy1qrUwhMd2ZsJpzio5b",
  "key32": "4VGfsHtdGmH4mrs9cQeUBie8ekdnBEYeiZYumnFkNyZRGEnUZVYFyeHCgSEkrx5LaeRJkAU1KHqjfLU6QWcEoNWV",
  "key33": "AJZ5h5QBD8CpasJz5DKp47ivG3Yiqk74bR912xu6YMomxB2Vpz5qQBqawwQuzdgDZowqLnqSc69dmP2hnEpNVWR",
  "key34": "4EGcCJYDgtydUNFX2WXxZ5TNpD7wd7jGwUF85Xj8FcS6mwRGtb1rZzo6f47Novi2FBrEjobDCzrqWYVkMqhufshZ",
  "key35": "66ZNV8uGcbwcVL9Kgq5UyepQept5af6UKbnMz5FFhZgfZxhTXniAPJt6FoUTCKwTun5i6QVp7QQepbvREL3E8amC",
  "key36": "4YTcohRVq9w3yxrESqDD8nAATfDBAyM2HpyFNJCfYijJEbcK17Jf72fV3mR4rBTNrtmN6mgt8cyaXtw5CxskKp5v",
  "key37": "3Je85SiAorUBD1ewVJPyE8dcesLUAH8snBii8vXxo7r7zMLc9RvG2srBB5njQP48hGbJVg11HnghDYtjBoDjwudQ",
  "key38": "xGdu1Qjcyi5SzuSKQkAhB6kcScUfcWyy6L8gAqxDBem2S3YzhRHkanRpjPrMhTdNKtcTzTf2ZjPYNuK9UvjJ54E",
  "key39": "2BNxPtmbk1Jc68eTAYRn6aTZgEb4PDWdtqv3dE3CkoJS7nkC96W3uv7oJYidJJ2KPyuAXES455mJmsamt9xo6faN",
  "key40": "5gJcjPBw9KP62kTTKS7UQFbz72N6nijDFqhGEiQTKipteB6yDRuFJcj4F9gXfvcAQYssNT6aNZitHKnDcT2S94r4",
  "key41": "4UzT8PqzZx1r5n3jAvgF74PQ9uH3FRPGzZQMoRcEBLqfaXbzDeUzSHNQYAQkMkTnZ7vwTb1tLoL6bzvtFnZUtWkb",
  "key42": "4iZzD1TXnRvSsatno2vk7Nbb1W1u3fKGcKWLzdtxDjfwnFvpveWipXUjydDeDB5J4yVMnqJVPVPTyHmTRUtXPm9r",
  "key43": "2XB6Bmn2cXkTmcjWwuNjYNCCJKW5WG6z231KPJKDHhhXKVsteJEwxz8rbDd8n6Rs2CJP3qjFhtcTDYfPWjyNZJsA"
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
