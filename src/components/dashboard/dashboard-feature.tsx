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
    "4bMrboexG8J61mPXQAuqAacroKN5ZFUyNtAmU88XWWVnm1QYgBKsVQ1KkHMc4BR3593omqX2FB4Ksbx854g9DCrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7BvjZvopnjTiCty8Ykbe6iqvXFh4HfRGJfcfbFC8eHWyrQmq5hsE1GFaTt3dfRcLFHpKDceWpuXMhK7T3G7dRb",
  "key1": "3o9ZjPKBPvk6VvEyNuLau7WTdCNrggmLFNPRBF3nQBHErCW2puZCfyjn66VNpSfXbfkSQ7RVNzfuvP3igsn9wLau",
  "key2": "3s9AwVNqaQpJLasu12tRqbVRQLCrdhtTjE2onj7fVe6P3JJdkSijDn2zHSVvoAL1nu7gVi5S2X7GSQLBVxjAYdWc",
  "key3": "xUPRPQZW2jBkBLsfsdeFTV3xGFHdDWG3W6eRwezjTMhscoAgDvGDCiCRzaY4odsZLMUTyv8Wy2nDCMCFTkJ3FPq",
  "key4": "2fQaLtVhhKFjBBwK6pdtpvZxNZm331QmVLFrTxMGcwZBsh8aYHGquEDuvr2Y5K9eWf3c1NBMfHfv1rXa4fRGzyFC",
  "key5": "9gMYmhSwrT6vHRAEz6WtQvRhbq9pMUv4an8tMZtom4auxddZDcCbyD7x1qVdBkmFtTNMNVQ7kmbAQnaMQExs9pn",
  "key6": "X1ZcTpK5iCYRSth1tduesWWNMmbP7RhJhwpXqtiRkHgJVDszgno3xH2WuQEW7HKw6CeyLoMxQ7CdXQkijCqhs5G",
  "key7": "3wENYxk9D8fjh9gKRwbniSoKeytjmXGtyY17Gp7LNhSPScKTk7PvZLZcS2imd63TnUEPa3ukUU2q4NLXk21hAE31",
  "key8": "278UYThhzHnfV9AoD3a2Ym8uFKNbTntsVGBjCU9a6WubWm9UEAmGU8uKgDieXM7RZdVH2cNE6S7RX5YQDccZ5hSB",
  "key9": "tW73xqbRhkM7mUvj7z1i4vuBpXkHYJ1JK7e7npZ5i8mfy9MAKrZoLUPR7CH8mV73Sjk93WdpgKJdeYMU2PfsoHu",
  "key10": "2jZShqA16n7ZGEDTc5RxAv84Dmm4B73zqmWe55EbpGtyPzgxtrY63Ec63MTmRyfcxxD1gZ6WNNwJezjNU2kR2Kqb",
  "key11": "4vodpa85gPQo59aYcAhB2va7mEVc1623NQitNtdqgwyh6RBGsfBtEgEsoHWsqMtJ1Wzuj1WXGh1RqXcvixWbreXZ",
  "key12": "5on7mayGECt9zFwd1CP5BgRSmmM4pVMxJcQhTdgE3G3b8XfQ1YpB9QBfVrko2UayqC33RkST98c4mkFxafrk3exW",
  "key13": "3omcAgH4zv45fKF5HG6R7mAAnCBs3eYP1EdgN3pjzwq8eT4xkTtE4pkbJuFtUzhco4Mwvo89t623vkorNfdYkzZj",
  "key14": "4doShrRJ5WMdggCCzb8mtPwQqwSRqMUS2BuPyUfcqaPYYFuM42f1YZf894SUjKP2PGTUnfFA3rzc5qC1SF3wUGF5",
  "key15": "LuFssyCGekoopFjXAedcMeXYCFAZ9EMVfhMhapUUhRKFX2B5fBA27D9onbtViDPUXcggYgtd4wGEZNEmVdDNKnm",
  "key16": "jmU2D6vf9hct4nxndsbRFEaCgqFPsmByn1F36dqHMcNJ7LJwNNXaAmnVv5wBH95cdF4taTiCzS2XMFo2T3R8hEx",
  "key17": "3Kmp7wyraurEnyJEAQBNwFQCwLjrUP4RToXfsv81pKy5qz6Nd9H4hqGvnJKL37QYYDtoTiioeE7dcmbhg9fsAx5F",
  "key18": "5xnrca9Kz2a79v5fbVmvD6GAhKYB2Df2koYktFxbJEaKiNMJK9YeaTKDymuPoVBk868iyte1Qpt9w7WArtgsSNiJ",
  "key19": "5Kiu17RxB38A37k74jByGaQteJ7JedEUL1jMJ2hBCeDgehr2HGzRux7vJed5jZ7HBJFEVfAcUMW7ekaCYAUJqmzw",
  "key20": "39dpf4H5nUUuwkK2JH18ixnq1zgSF7V5gYouq2tz4hDqoBPf7QvLPKXG1Uznt5H6FwzXzqf3X6FGbeikS9ktrTFm",
  "key21": "c2KMFMMABNZjeyBosJqi7NAeFuNADJ2EcH3vP6zrAmNfyAaXwpGjYGygkSm9uRhzW8LqvtYXFAwWKThXT5EBQKF",
  "key22": "4e44TuJ7HHhK14tn1SBG5sGWfVRg8xnRqHA5gnTsKvpe3R7dQ4c8gmmM448m8m6WYvU8Q4MMhU9SEdaMJyibEUGZ",
  "key23": "33dbQHQgW55w9mWHJTZtLPy6QmaKncbsuoBCTCMMALYhV49ZTMnocA3E6rauV324CNYmR6XFRRBkWDGaLxMKv71U",
  "key24": "2Hhp9Dgh6pFHDfGcGnQ55vkFTZR647iCyHaQxvoktHARodJE8KHGXDEy1cNFEuMRn6DUafAv2Log8S4hoaVy18Tj",
  "key25": "2xi85FbJaaFuzPjtAtBTHzSXs4JsMxywdVD6BV6nAJhFVr6XWMVaqPnVzosULsvdBHN5X9baGSk6Dx4Y3j9Eca7w",
  "key26": "4bsBddSZ3D3JAjAwBBUhWSjrXQKPUeVSwgDVkjxS56rAmhfrY3AGVZ1p1ha8ggGYw4DF4cQeJCkfg37ZbA2VqmLH",
  "key27": "5z8EF4jziML5QtepaCPYYpJULx78Q5PD5DHdznDms3L3ZV6iJPPjHjY3UQejKqNjpa2155miDwfLk111DV2jYW87",
  "key28": "2fyhEekQy3kKRbnc9ouKfmFffaZ8NH676CpKNqaBpxEw2bD2rKudSzXJQgJeZJ4VbBSCVMMKGfBGPQfuh3j5ApXQ",
  "key29": "3jY1fqqeEi8ptri9JDTGLDe94gPLUQ2neycwgZnE7Z2rmeDSre6dnCcfRAy9kXvwLnH2JBwC8d3dCpigS9XCo5oi",
  "key30": "5hMf4uLVUJoQjYWwx8HU9u6WeaXFL6zwzXrcHeFD3C8NyAyawDiLkX5k9JSMJxssCJEAuiB4Et1xQzzr9t72u2FE",
  "key31": "CHpNTLrX1S1vGJxpoFR4pnYztyrTJhVw1MMMeDuuyjfD3YXzKtM7LtdQMFkQjrU4E1sfiNih29rLikmFtN8BdKR",
  "key32": "3FWRsfuwYMNvctmqEGiTVa3uuVhDpc3TUc3zEmwWESTFq9wtF2XzWvuSpoL1phZSdsR8UwyR41FYt3SSDDY7gq3H",
  "key33": "2pijLZF23jReC1f5M6B8zGnKQeu8dGWnPsgF5ww9k5oH8QkesYx2XhFJQABBvPzGsPc4s5SvGDxbUKJzAkU5L4wg",
  "key34": "2qryLvYDTWWptEFtUMAuEi6rTchCDYgLTNRW3f8sG5ZFg58XzjskTq22VZjwjGdr2xfNH2KGgZMxP2qYoZvhSdjg",
  "key35": "2gkmXio1qJgVo7iFr3LQZySRnyty18ZJ73qv15SrgXY62ZfbpiysqbXya6BLtjvKLmXcSGa5ip9gU8cj1K9Gi3Nt",
  "key36": "5XoprQMEkZLr8e53tRMPfAPwFd8cvhfuBuU9FxjoupDGW5NFcvnY27MWkmZPezy6rpd9ySWcwkUgHDWLB7E4qe4Z",
  "key37": "4yQz6rD4VkM2iPSX7X94vvEbYHtFux11ouyDWZNha38aEoeqGbWTQkSMcCgLAhSxFuhwT7hmrntS2pv5uYic4Fui",
  "key38": "5rNiRxudWq3UaK7VTDFZ7BP5qtDvPy7iTwVsFMuV4KZm5L5epjeqndKiyqSbj5um2twe4MU2mRQYKmJw4C9jHbix",
  "key39": "5U6B9Cq4W1so2ZKFLh7NgDXbhRb2yQhmXxvHC572h7Js31BPGcLLT3x5HcgKXjYC1AvPLv9FBwy5Wuh97GCMcJMZ",
  "key40": "4cfofBXxHybDFoBw7sBhpjWUZwvQx419yYNYocpoeY7RFm3BfpCFfkWJAPdiRrGfCvzGEervjz3woYtsyW2UNsqy",
  "key41": "3aaRiUM3TUhFmcSkn8dwqdJoEBjqyNq45AQdxXKn1vYH4WeCmDpJ9J1WjAayfqQK2pj2rz8R7A6h1Dh36ZDFkudS"
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
