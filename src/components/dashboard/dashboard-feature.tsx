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
    "4DvnSxaB4p9VFqc9HBHVxmtqSsQ6tDRQC2nGnbfrFkuvSmntT9d18fZGvkimezuLAg6Jzs3oVJx9r5nKGhQ2Ujuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFNe3ugsUk8WNKKVVxLHp7iY6xZ9Z5wzo6cVvCcdJqGcxuxZXJNefvmDnqjXwaHCoq5Ym5LkxDx5qkEd1oG3cUB",
  "key1": "5RsKumDDahwLNM9Cp6xbaKM8WN8PSKca8kgEQagsFzoPri4bVyRUYQg39DeyUYgeG45uQw4k7KsEu8W68T46gCME",
  "key2": "xb4cV6KmBu92FTbmmwKcousrUX25opLY4GL2JdGAvTTGaYEEW6EgYuyJFB9HTwpmoB4e13TC1bS7nAh48VxvYBm",
  "key3": "5Xb35pPKe4tcFzudJY3BsAxX6nfmnQMHEQESWcTqEnauaVmxGAHh4nka9pKFKJAyZj5wU6THLmuCoBt8gLVEGNF9",
  "key4": "2yrTkyPHgL2qSMMmW7pcNC3LnJAfeBqoauMD1XhWdgFT3AxgsH2q8Ttnc1XgUSD1bobqFqqTGPFoqTkCx4VtoxPT",
  "key5": "2JNmf4er5V4akDC9njCN2BSkMXjyajGQJVbT5wRM8BiZKKv67WsEr9FA2kJP5hTE6o6nw5WZycMR2M1TJT8buGv3",
  "key6": "tGCSpgKz7q3khjFD8wMTScAZWyV6CBchGtkBHX2uQmvrgdgBz3j9mVhfBdAB8JQYDpgGEXSj1pfYB5hKBxy4NZq",
  "key7": "4GknU6E4LhjPSp8S6uJqEQa2zhV9tvQWK432HWHvbqysijHhLdFttHXsETHapvJCNFfY1YMiw4RbMAMXPhxkvfns",
  "key8": "4A9Xv8z9cJLteyX1BL2r79gDqZnJKAJQkxtGseD5VkYmwMRBKZSLgwr2ixFeS5BKaEEay72FPxrEE4YiLeXMjvCq",
  "key9": "2pPRhAzHz8NcxRaWpdFuSCUoFK3ubwvdjDZWL5coWQ1YKzhrFTj4G3ZXjF8ER4hE81ckJ6TciHEkaBHHTLSAE2z5",
  "key10": "2dcMhrGGKS2jKY7inJ51ARanPtvQ4GxtZDhS2mxYJkP9nLcMD6rmKZuxFC1YoaPhYxUzhuh882hSuTWrNgGKRfTP",
  "key11": "2mytuHWGVdgaT8PNc19W4kT8GhjJaBioxtYUE6DzSrqcTx8XdDVebrvfVQu8DzPkFtqUVE7kiSjJki4DDnQwXiQL",
  "key12": "2EphyQC6uNZtwLbnKJJrpUQjG7HtyCTHD3u5NukASLLJNHuDCYarAChJhBwA6x5C8a2TYxbwWYqHsDV4bw9KLb11",
  "key13": "nGge2CgxLpK5YYftzPVNerBSe8e6sbmwnvRoa2GdYfxNrgiJTju8ZEWFvrcFJW6V9iExrUz35VSU4bGGynG7V9L",
  "key14": "4wch4xgrnzvn5UuzS3wAETKUmwRFp1ZTUT7CjzWtSGD1HcTWzewqNuSHnfBEz977iDeseQ1vhEv8aTmaQM64hHJq",
  "key15": "3FZB1x7yGK5mik8ZUfioWZwfjYh5h9xDF2ESVCEtKigxMUtubqFNuSBFMYc9UzRNJDp4RjXQSHfCjMmwj7qPsPW2",
  "key16": "325RkkMSjpiJFPa4ACowdb3T9HnoPSfEHrFWFiwNoxw8cBjDt4oCyF7hHiHSargh7k3pwsb6kngEYNA2LsXdL42T",
  "key17": "3HKReQvtcYqTsc2MoBeb2z73ua7ag6isbor7MonxqvntE4oZzm9U6m4x472Bvcrw6BnNoEg3DeLpWHFKf7P7KUnU",
  "key18": "34YJZeVteyGZNs5y8J4DhCpLLWKgFRdptPz4H1LWFUG9xJMPZXaaD3B6Mu4dprh2wRb3wRE2i4Qxy8mgK3LACNFU",
  "key19": "2Es2w3kcjkuV8e2teHZ6B2WpB2FJboyidVQiYKFtB2Ax29AXJHXV7Hnh1ubv7SxMQsEj81DPi5w7TM4kaL5hjBfA",
  "key20": "4nWLnfWfCiwbf9kSg6HBY1mVaiALe7MhQmw1BxQ7nzM1hdLaj75ojhF6aR83koMtAnYQw3cBocTuy5YEUWiqYyjm",
  "key21": "RD3oDrqEUoYf2UkB9V1coJHsVZWPKGBuV78kSUcpsdGM8E7uu9qYR26Y1ddp3tmZVJ1nQsfMPSXyYXBnnCA19y6",
  "key22": "4FKWVMnmENXj6TsxYRFz954dB5W54CKzsWgd25J8SAJBhXiKhFhx1EreoduAXwkGSTpCTsygpUBbN6sDhbmoE6aR",
  "key23": "S3yqnqp9i1h8qN9C53T92QqfVe9kpni9j9BFnxY5tgHrmx6yft8PgUcsGpfe3ZJkt9PeBKGJZVMwcY5cKDRpU3A",
  "key24": "3E7aFVSeD1paFxj9fHHfQAZpJsD9efwG9tuPEVsZ8CaZAauaQa1M1ZPzqzjzTjWbZJWG7vDeMGXrCHya4zFsih9G",
  "key25": "3zZqmbXMEXvgdX43cn6phg89ZaBZSKJC8DExxAtWPQov3eRVsWFGQKJdSvDsay3dsv8WEL517zTp2LJXchFWM4dd",
  "key26": "4EhzNNrLHekEA9kh5iaa2eBZcRBpm5ZTQ1TUSf6fGZLJFmF8N8Aa5w2gPMXCFWxdNYsv4JbCoHnWNaY8KdnQvabq",
  "key27": "5aY5yWxsJvj7QnWM9FiykyD4zhArCFVTxc5oYtHCjkr9GWpTS6S6PQNPTa5cVmwN4yqKcRLgyyuurMKs9nRMEwwe",
  "key28": "3ddZpwJbuyXyNRu6R7dSh7VWrmZxNLHCGTN4YuZJVaafb3U1BVqtrCHZJTKANSHMQAkN6B18F6pDsJJqvor3sncM",
  "key29": "3uhW2jqKqQYMDrvXDcnoBSZHYvneG8FuV2FChZb3pagqVqqaaqtxoueKG67xwD2wy2XaCRDnyCwMSjQmysoDyKnq"
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
