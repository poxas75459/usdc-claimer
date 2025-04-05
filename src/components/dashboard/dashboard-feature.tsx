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
    "4LDaoaYhuSmy1yKkdKB9m9qb8ud62gqs8Mcdo8K8qQopeY3KPFcgdQU3JKyX4Fin2tP3xGngGuhQTgTerRzNTj9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjmKwzNhfQtfT692hq6ZPiF3BPrHRT7V58NhmBBhbWfLbgiLcnLuVsx797YVE6YDHj71Wtt2RJGLUBCGTXbwGDK",
  "key1": "5DiYhJ9iSpWXvHCnPVUYgqwM7uCfqe6CUbvwBoPJvT3JKSETUEfnxLfUYF7JgxpHidH6eWXj8eqmJAXJEr8wwJXu",
  "key2": "2KYU4A6ge19Tn6XMT2dLDHiJ2GpBhNyt4cmjcWkqYCoPwiwvgKV9UMpPVSGjD4wBvRwmFarGJ4DF1aQHk5HMBShQ",
  "key3": "5jcXCKgMQHtYitsDbd1dDNZqzaytXYTDCCjcmCPJZTwLHcDS9wostdqX54cYR8UfBRA6MqCHdG7EuAZ3HLcjmuYA",
  "key4": "9T2Nc9Am5L2SEHt6esE1D6NmcruGShUnNsCAoAEmJZaQbJfjUYP1LYHtm5HJfKEa5wy1FK4VMiQiom7YTB25HnH",
  "key5": "5nf5sMp1X3ZTUh7T41ndQeffvLUaGEE8h9u9pnycrEjy5knpXWJBF6nwr9pqGVJYHYa3uAtZkHvUNLf1bKubQ3eY",
  "key6": "3GjPqisoVVry5m3F8gh3LiyHhbjjjRFbn8k6zk8mqCYzsRZ3KsqygKaCsBEHS9TFUeHgCPUpZAVHQwyQHRtqion7",
  "key7": "5V4n5diMvk7fxEqd4rbQqhU3uqg9PbA6RTw3eiqCytDXUc497ce3oYHss3VD63zj2ro96ZuMYHn7uD8w4BTM6VjT",
  "key8": "2ZvtMzfbSjQi86iHUmtzPZZV9w9ctfJkSH25ZKfnmXT8bJLjzWMoeAKG7wGHVJzQQKFzzE7pnPQmRecpcfdPs53r",
  "key9": "3Pkn93avgjkRcXSeX2dqi2yqaEX9AJxHS6veGWATRKm5XUUqDbzpZZoxyUgxaoJ7KtZFPFmk1msewbcjok215iY9",
  "key10": "5neTvjuKq55mxgEiYr3QWc6Uyc7VdcA3Jyfna9vEc1agJr2y8ssa1xwziTiMKSnSwgsvRaGLAGx734x6YdpqFxKV",
  "key11": "4xHVomA5WriDxyfN1pfSVnRDQfrpz5qKoMgxyMmMwt5HuKGVYfu6Was2sSW4mZLjw5iSz78Aw2F2W8NhE8QdCYz8",
  "key12": "52gjBrF9HcSBtzGuYsXfh2tYLvQcuPd2QNT115ihnkYJFQdtUn3w81ycmeUbdnJVBThPHWKG6epqjwRSAaZqaSCk",
  "key13": "5eycFQ4TSz3qXQnS2JDcfYyKxwmoFQLr6waBivtTANzi2uqFFpb9cZdazPKV3B4n2eM4G5QRBP8BCmupNkwpT45Y",
  "key14": "2G7ZW929oqgQ9fuNQU45oLcSZmV8CtBCxsaT9i4XfShg5ViYizHswW3mqUHL9rczrFq75Fniz2zLC6dJVqnkrr9x",
  "key15": "2MoM55c5tVJqmmkERfKYoBudmxLETx7XPMAfv9mxNZNKS54o9ZPfxeck7XpK48BquWLfocizYpLDQNUSRJwQqFuZ",
  "key16": "L7hWQzfrj1rJmxhVfx8SnFDdyPhNyasvFa85k5cA2uXGGgaSwghEaNHJSi9umezgo3K9h5amVwZcFCjXYrbC35a",
  "key17": "4zHwFQG2Ydkrzfqsn8QGwAMZJetyEehEykRSKBunHAuFf4SVrwaSgypqgoN985uFBfhPDoArx4VNZshn5FbXrbq7",
  "key18": "3694PrYGVJPd5Rtd8nxnkx4h3t4D2ghxbFgRJssv3ALdiLHMvG6w2wVKFDK2WbWWnAqmHmPzJroV7RRD5KyG1Czn",
  "key19": "3iVZxBPAPMnHMsHsDceoGLd7txNuQmKtBjUPqdnYgKK8G9Nf2KvQJewNcqt3oyZrxnyjQJvg1HKt1D12goKahY1w",
  "key20": "2XDkkPDD8nRNJ1oJavr9VRhKnU8YG8SXKhQCfgfHuDbJKJUvfBKWgYxfThpwjqWEDvYuiEa34y1vFUhx5rdsanUD",
  "key21": "464Lh4B6v8ey5CpA8WQhagMtEVar1n4sW4hNintYj3V8GGVFGcWzvM4Js8pxmogNw6ZPHbeDjyd8RzMopxsB8uYZ",
  "key22": "5uhFGUKmD7wiz9pYqCVfxdQANVAXExzaz4FNuhB13NRQPX1tZG3yKixAbT2sn8LYWtT2i7ZZngXsY5F26pyzWcgZ",
  "key23": "4cs2EJuuV5s8xu25jweSWM46RhBEUPnsSzKJRdmR7wK5zcy9qdkwZQTHpuU7x7D6ZdjGAUqeMk1RqZgWcroSbbLX",
  "key24": "4hjMKXwanCGsZFVzw7cnjigS32F1H1AgX5iHbsbVpR3HAsZGDeXp5sXW2WSxg7ttrtRm5CtqhENvHqJSCudr7BAz",
  "key25": "DvnNHcGkWYYRNyEnDu7oJn6cmUxhFZ8eD2BHa9ThTU3wBfJVn1qNb5ji3sytq24NHtiB6fRKF1tMDPQr1rRRpRu",
  "key26": "2ZS5ru1y7JH2vX4BQmSkReQyAXN1PL2gd9QgJ8oq5xxToP5FyrVcwCHqNfFnBYR7gCKqDE89gThAqrsuh13W8c2S",
  "key27": "51GWi9gs6vNwKWwLezu8WvAL3uGbbeJMmdcEfSS8JB8owwmRuoyKwaXzhpcwtR2rvLLFRgjCwzuwdrdgr69Ku4yp",
  "key28": "4MxpRui3NoJckiqbqSfKAWPo8Fpz75yJXGwCh3Dhf8BGsdKyYvBmrfjZUXH4Q3QLsZTsSNh9f8YQW1GZ6NnrR5r7",
  "key29": "dfvt1MLdW2GbgP4LKSXPmmnVpbivVxfQDHAXbWuJTo7MfemdQQhGSMup6q5TshDdcpdpZKnrHpxPeHwB3HT7amx",
  "key30": "5hxfs3SXrPa1n6hvyEztjDbw1FEEkfRg765KQNGMbFPnPSFsYJKHGanF8nzVhhsipa4zmX6xex5fESxEBgqFyinv",
  "key31": "2T8MmvESZoMgnLVR44Ks2WWFFcrVzi4vWMoFKmBfkYbhL2sHqXVgmYs7zHFKBh7b7jHpxXbw77P1ToHGWoqteH8Y",
  "key32": "94frpogmRQnt3S3tjysAMqMWhnTby8hcGsgxewF48MYxArBQDRNBpkqKeHMK1TQWNuNg1P2HJVDLkaaZ5pqFe7M",
  "key33": "4S9BNYseQHnvLAzv6SQnabmjMw2anaUZh8KpQnhA3SvE3mMZUMAgJ4f4PWWKZB1Ja8N7TpBY9w7pbwM94YeNm8Wx",
  "key34": "5rdK8RJYtrNufGbBtMwLpiE5atGtAGTvMRBiMmyeE4iQ4uwLSXbqDY7uLSYZBYEmACB2eoURDqBtUkqWBsebUiJY",
  "key35": "4rHaD21RiXdybS1iXLQ9ZrpSvWYfXzo8wSRoC2SVGs66cmrib5fgRigDGEJoeFHa2GVkXFiGNunz9tcpJpe3ghrQ",
  "key36": "4b9aSRLyx5QFCi6DiXYvxFSuYdj3dgdfrgxxX2kV3S7fLJooMntZ6DvZwNCkm2FcSWcB7Lg44sNP7yExxPN6fXMA",
  "key37": "4tSs9Y21CEh4F1CLQpyLS5ZbKa7zwFPneVxqX51NpVJ9x9fHv3xTxHbSjocNVfjfiARSr3hcjvq4bigvHPQPdAf8",
  "key38": "41iR6BWrbq3u3iEzvr9VSYM8AXAUvQVsub1ZP7cB1dgtzrdHFPeo1GxSBeHwXovMkFemxu1yhN3xBNwRkrQaKjtt",
  "key39": "2kXQ4WLyhxW55Jp2cjJizM7sYMTCxfN3F95xqC1denKuDV52xm26cBA6ejoKJL7BTwWGHnMvejUzULiPdyXGeWih",
  "key40": "4jiuyEYc1DHD9dCgKbLgtbY6bRJxtP581Z8SVrrMqapyRYJeBgTUuho1Si37t4xYvuh9BiXxCwkQPFRjqeG1bK2F"
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
