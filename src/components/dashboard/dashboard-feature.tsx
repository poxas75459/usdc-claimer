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
    "3xzKExeZbnYiouqRr4NmD1kaRJGfqdxRhaE885kXKEZkaYSD9vsgpmwbPBvFt3WJyz9gk6ChfCTpPwSd3jCBJoZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpZP4HYq97QggUYjePf41qEuNwoTMxmR4EdFa41rx48uWuCKdGddEwD3c4CV4JVWzfKwMriN7V8eXK5xtQcTWoS",
  "key1": "54VD1ULd8BUUw2hKz3K7e2eesEquU8k4VCckkuaeDUGzuyRf5FBA1Nsu6jCeG6Wnhitvd8WT7Emg9n763sPHdUwM",
  "key2": "FYTUwaxgyA1BqwRSUBcYyGtsGAgQe5xrpsgTG3k4CSh68kCqeN1DT8R4HWUgBTJ3Thk6BED2ETwLHkhuwRVDGS7",
  "key3": "54C2XRHbVrGP5u9CXYuHjaVJWAbCVZ3queD8kV7u9MT2fHCa7eqdVcinJee8jnoTd2gKcgTrR1wkBiKAASxhrTHA",
  "key4": "jvLdUUGUUS4TLkdN486341gCj1yLYTZBGdrRDwXqpFaMRLRLMCrSEtAVfZAGR4XbXZ72fjyveRTdbzUVtvQamxJ",
  "key5": "5StCxzp7EgghB4b7dHtoeFxwUNnecSMgWtHb7tb54uTKrRR5hTbGquLtPmePSXhPaUHXDw8FRohreBycp4ynKHq6",
  "key6": "2Zn3UuKjFhs2NJ61etLkkHRjAqK5cXryCgN7YtT5TZbjtk7yp64hD3sxsLvPVqKD3Nsuu8AYAfVQKD7pLihFzLQi",
  "key7": "54pkRbCXDHcYMkboZKxQLbuxKPqsgf5w2Qp2kHbNpAqBrGrbqGHyKwcbdv2c49DvgJ3mfPZU2cvU74Bfo9zNsTBF",
  "key8": "4wEc6KvVJzanPMHbpNAuUsCTb8yrZ8xf3WrVWyqH4YkaQJL9ieVaRUuKLuWxAixn4QjGGox7qctcznB1q4ap3k1L",
  "key9": "67o4LSvAeNcBSybMGthbGUv3eswRYG4dhZM2vZHh8whmpQBjJr84xhudomoSWFeK4QWuty2rptqn7CKH3b7NgdR1",
  "key10": "STEVixuDKxHwtotPyxT6qecVth9off5pSULSrW6ebYrH6Mf4Vq5kFqeyhbvnpsYfnjp9DVtosXfHzEeTnyi6a9w",
  "key11": "3NncSjankz7VqbYnYPLiKmi2kLxEcETu5JHZMbxLEZMTzc1UWqrC2XsY5j96zRurwbp6tiARyjaxbrNTgWGAk8QB",
  "key12": "4vou5YKvjkfuCRRFDrYwuR4A4X5EmNR1RYWTSkHUdqKJuuD5oJXYXGiZruWLLbjnJrRhLvYiiiL2tvVWmQDnKcaK",
  "key13": "3C7S56xM4aJHVvonUq7NVSHqghkLy6pWrMDDXWT7nDDbHNVzyLx5fWaCC2P95en2omy5vty7Heic593Yg7wLEcDA",
  "key14": "5bz4FAn6Q1aaUvq7ART4uwAtXFaaSyHuHCJSqDpUsc6zG42r59tMVi6rd2p4myNPj7dDF5EXzBe6ibd8h8GNTnVF",
  "key15": "4zpf9qp4MJCsUMnm1UF3BudZgxqXt3o7Fr14bequ8ggKYPGV2AjT547v23b1SaXBdragJ4GmM9iiewtS7kUoe688",
  "key16": "5bw3PDeJgZqAMDe5EE48y4c8ArkYvYeuwwSCaZh2RTXz5gTomtj7pLizdjBx2yMZy6jjGDu435ZsdqbtQkermoj5",
  "key17": "2VT85yktvE9AMHNzR1UPuon5gzdqtVkdLHWM1GSdMKZQ6Hsf8ffYPRaAAipqQzeLVj8ZGD73FqjJVw1hbbUzEXKJ",
  "key18": "66eKhjRpuyWVXSwaycTHnrEaC44CNA3VkX8rdkzqUKkA4XbdTpCvwX8k56nhYRoTUmYDi1dQetYi4avZnpX2JvJm",
  "key19": "4RyzFhKnmfYyPfioDRZT1ADZMaTkmfQdnv1FYey6v4ugezFVuhSaZP7VkePuDkwRWWFnfwmPb4Xyj1PjUJXw7eyf",
  "key20": "4pgygrvKBM2iXhPSWMPzdfzafWcR2wvNx8LcutyJ56hkQifUxiArDEpN4jeMRVjPVH9itbXYXox6rcXQHr9f3gkQ",
  "key21": "3wcVbb9nafPgdHU648tHMKaqdMDURMQz2WW2LT4V299CKyK4daF8xZSEHetq3t2BtiLfEjuCow7E68e9XRgN8aD2",
  "key22": "5tcozdjJxbUssxczbK8zppe77HwTTYNTfAqFghWx9tfCEHwxY4LqQ5uBBMNvBYsENZs4XiUcAp6hYb7bxJDnAphE",
  "key23": "knkc9MUPF3N7EisU2Umz8eUQQnrembxKuVezUjCcazuJjmnkUFQhunjokxTNhqv8Tu8f8GWP32KrnUn9z9SfqLP",
  "key24": "3h8aMinq2CQZLPTy6jYHu7QYe5reGxouCzm1RT2BT7ynbYXtSYiZvd5PPaG9cuRQJjSLMyqQ1Gc5sDGjrtVfHe56",
  "key25": "hhR5zyxFz4f6vHRGbZkGQ1Bh7TW3jidzetx3drMrpjv8Mv9DcYNZKSi6EkrGFcmgiKjkqjx8BSaKG9nHESXr6LA",
  "key26": "5xCz2JXNi32zRFxDuup6o3PMTD32w1MKRA8i8CEDpi8H5uNJVn9UWVdCeB6ELPgnj1DtMbj2PjWzP4cXeCtPCqEf",
  "key27": "5tB8e4xTZPDB6FFs6KQM1Qizu8HiJsL7ozG1vNtwK52zQWXpkNnEzVgRz2nStTBfG7MwzUJhBX4Wq9rcW4g1gD4B",
  "key28": "rVJKjtFfhFxFvKYt55Gr1pviRPs3ASHLbV2NN7ULuYr9iwbDqyRYyBfjLq8rKZdYsDS6YsM5KDDvQ9KMN42qWin",
  "key29": "5B7J5s1h6NmSHB1oVLBxL6xoWD53YMP96BN8QV6DKLWdWS2qjn7demGMBk1R7wULKmhNa2c6e3vixFLJYFU2KEt3",
  "key30": "5kX4wsPWRNKDk1AbnUqsE514kkRvQ4ZZsM45X5YybYXsY3Fue3VNuDdyGaYr2JqELF4xoZnzarmKwe8uzWCxcHA4",
  "key31": "65LsSMN6vEpS8y7ySpVzE1bJ3vBTFqPDb641YDJq47naByCQbprmSxiKTbaH4SA5FsFq9kTFDBeaM87DdFaDccqF",
  "key32": "Y6tSCrvixxNegU69asK1uTrL2LU4kgp1aKGRGiz2ndDHm8UvmtKibZCR5Er6P8NJ17q3egdoz5XByhBgJ9S7jqC",
  "key33": "4mX7UdsR8mxYLzX8SdTeHL5iWQZm4SNxiuUPYPG6U1YWzdt6FywJnxnH723fBweEeXJLC9oTDCJQPVhNGzGVbFWq",
  "key34": "4cwPQQeQuyJUGwVxyNNTrupmqDt64H16w8SGhqjYtGRS4tSUrp4EgD491SnMRtaQ9mjwFYDBvwT6jjecWw4t638i",
  "key35": "3gAMFRfJ1J537aXBXMWAQWMsdzSd9Yu4qqjtt1UV8ZomQzE5gf6yQsFJUvX2CUQCGvEYCSufj4DWRsxT8eEUeJMZ",
  "key36": "233ufiNBZyzuAQKKqxchTQCy2cxtgncUAYUA7aFaCnFbPr9svyJS7JuDVq7tsJqjta47CBgouK3wMcHYFk5wpQ16",
  "key37": "2efwweau16qQQx62ZBTaCF8dSvY6MsebBJkyktvGee4VPpt6nXCLdF4seWbgL8WNhacCtx2Mw5S5x1KDpUZ94PBX"
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
