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
    "4LQqcCk1NffeXSuhKmsR2jJX2pB2fPzFgyp3QT5pm5yBBRWUb2FQT48KgbBiqjeAvTf9ZbDu6pneHqaN5zDHEG3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJANGBxurYDXD9nH2TJG7shWBzxm9BsJCqB5yx6qrHQQEPV3jwTMetwZZGUbChHNx5ca6uSsCvgCHGnPujZ4hBx",
  "key1": "5n4765PRGS3jAGdQiecNdnayQ7zXn2F4MG5jYN9VayZ1u6YDeF23AcQ1V8viuxWykdkTT6gAq9jsTAKCFxC9t712",
  "key2": "p7L8XYRHqRfh9kr6j5xaDkNoayKR3BaVbWDy5WRLZxvhNBqEWLrnpT43tnWCmcprQi6WLPQ3BS4xBX5aYt6rNmo",
  "key3": "4fEY4BWRcLCjozBgxZBAqKdGpzVK1yN6X3mtvxoXzK75HdduBWKs8V11MvbrNFCKSzg4jQ5rDfZpbVDrgUivVwp5",
  "key4": "2QNfVHqhqtYTQx4FLjr5PNREjPF1RGKksDbdmxpGY2a691LTmw1YMvPVcWZnPHcYr8P7qBUnqDUSdnkwtXAjjQwS",
  "key5": "vn2EBnpU1bo9mqFrw7mMTSLYo5ioQ4wN664QwfPqq1jNouiiqmjjCS8kfGbLCNFRUBWannqT7SJr12PkcKF1z6t",
  "key6": "4VLx2Pj3RE8JCXUzQURBcceQo1XcTKqzFVGpaXnAwxih28mLVT6hRHnUYuJzgG9LNDNMGamuhBNb77gvuRke9gsT",
  "key7": "34GMRyJbMvKTmU99X3jgDn9wEaT7adJCSc6fubZ4SQQ4Gzrz7w4RgaqLwD84E36mnnyfHdENuvmwKvnEZ5SN6aKZ",
  "key8": "25ckEdd2LVd58wrZ4mR1dhJEQAxDYFLav4mJ9oBkAFbj3k3DRX3hd1KaicD4p9RkPQjH9QcmfNAsfm4c4aGjDq4c",
  "key9": "5MKzn3cUBPFNmT3JhPxjhkujczHRqTNrhzNZ8SPNy2YMJkZCNYhzcxtL7p32Nz4dxcvXWrCzDrGwGkMPPpyGwHaJ",
  "key10": "4A7E6GyGYAaFozH8KBA9sbuEGk4xgTfPrPYc6BZ4TERZJ3SoKLAi267zWxxqhDQrJSKvjXELgo96pFogtcLH9dZT",
  "key11": "61U6cXF3e18fcW418vcRfe36hxb2m9uqdzfSSdmATKQBjb3MstfWgEtWSz1sQ8GTJ6xcrM6DoUJykKhHPkaz4wfq",
  "key12": "3ybiZjKqfNoAmBwg1dEQ8vcP8G7zeuqNbgEBAkeP8ya2xbutJqM7GiiK3wRarH25CUnpEwC2xkLWteZTGXyGJJET",
  "key13": "4pjCqNbUFcDe3M1UWGpCBnsK9tTzrne76suRxnErihp8zght28jJouoeTsBqLEu7uKBKC2ZgJt7Rg6ptkQwNcTkq",
  "key14": "5Yb8ewNceJL2cYGWoV3h3XgRRQovKKTwS6irZ2FFLvNEhYB5RaAEyjasdgnheLw38RoSEpQgUEgGPu6r8hvNassP",
  "key15": "3zeAp5Gjzid3KmkkaQGTEH4pZms3SyTS7x5LLBE7vikPsiYHUP3tu3GzSDKvkLDW56wGimM4r2FeRvekd4UWswWx",
  "key16": "2M2HZWCERRB2wi5QpDVrq9zooLg6QSmTGB4ypphazsSbfBTQNL9MLm3xJBrr6jD5BjUvFWUHv2JJiosT4Dcrrmbv",
  "key17": "4Q2i63CjM4sn9N1sQvAuNmv2SyW9SS5evmcoZKFrhsnYX3XGZvRJ9pUj1SZzxujpeaZoeM3pgfLJW4FfqYgB8vLj",
  "key18": "2ky8mUvRxieo7BXXiACs7BacfTYNPDFKJUwjZCVsuDvnEEe5BfZSpsVNvSoGvjmtgXVNXBXUeHHjfGWMeXYAf2N8",
  "key19": "2Eim79WVcnuUW3wLXkKdtyqBP8Wupvmn28VPyW7UV4ephENZ85STTFWwmAMy4VjJfXtv3Kvaxr5Z3ejsF2R87mTn",
  "key20": "54MChPnn7zLVvjzqurjg1N4bLi3yRUc4GsS9vMYJMYdiSNekyBC2yjdcPahLmD4ruRqwuGyJVu5hAQjRt2MJvfFN",
  "key21": "44TykC7MmSVkE5fTWwKjwg95NenHgjjNL7BvXkybbzJ86aywwSQRwLMmuiBHrKkwPk14Mtnfas1YELe7Ztsuwapr",
  "key22": "5i3YJgJrJKa6tfWb3xBsZywcC1stWSpFtCWRpE7Lr1iF28UaFvUAyWB9mUpoZ6GT2L6pbFy2kiAeMCwpi2hPbR9",
  "key23": "2QgQpYjnkvTSVQNQHFG7FPXCDcF95PxwkuA2ktBg2e5VeW4QA38WCmdiYuztTtB2nGjMBwgeLPoinsFPhmieov2d",
  "key24": "5EEyjY2rDpKAYJBgjJB983FqdVLeBbLiZhTmpUVSc2vC7G6VyQzSSW9VmFLt8Sr39s955dwaZspNvoqHaKoSj57d",
  "key25": "41oC6hL3UENVACatZ244VzeSpKNboy4TD4nB87vEAmrZ1FFKySskmeR939FPp1v5CCnPR9xGrb371tGZiVyjKPFN",
  "key26": "2Y3PD1iDkFh6sLH35vDWrEAT5EAWAEHvTJbCdW6oc17UrHv9HvF6vGUqCnt6iUyaYQW7txKjL3AhdDCz8fBpT74Q",
  "key27": "58akxnfEGCmGC6dynkRNXTUW1d89bE9uSwDmkpuv4ks2B4HsZ7WTMvZqSZnDU4TogNU9G7kDPg9aymSSSnNguxrf",
  "key28": "wakPZgWw8zV1BXM7QAPLfAjMe7K8p7mjGtN4wXvVvWPKEbUBa5SwiqJiwKoZYXZFzsbk1XfQgMiTmrX26XQD9Bs",
  "key29": "3vVWhvcmfEoZVGUnKaPupezricih9EDNSMQwX3irUezXoLgikG3m174xh9jH7GbDy5LsAo7a9uJnwE5jmTKmN5g2",
  "key30": "Fhavc4UaG93K5a3szQkG9NKi4TjfWU17BnFtWE9VhUSXgTEhKurpuKojgsvCCMsFZrDa5fNCyki95HFn6cLYYhC",
  "key31": "3camZ3xuANDV97D27Y6arya1H2qXiv3uaUiv3nNc4kZ6uN17mktEPmfUsLQ8e8RC7UjHjZwxNWC4kUhYvWWmQxDh",
  "key32": "3fyT5PaVXgHGdWMnqvRW8CkPojobXavXMJMpokevUeFb79Wosyb7NMkKT9h3iJphHLfvLyLyijhCsni6wrfVgSKf",
  "key33": "3gSh3tU1TiKBLWciVFHE7oac5gSMEG7ZCHhHeNd4ujo7gwSQUJ9rqRWuUxF98RFDWkavKP69WovaCC7pQ1XHXW7g",
  "key34": "54UpeY8GF2rHGGnSLg3rbpxqmHNQXvkXxMgKXD6ZZGtfTbTRqBC8XZMFa75kuZ9Mqwr5YA38tndqnd9yBpjNstfe",
  "key35": "5LkN9HKziU3UpZ9L3q7J2w4DubdAEkXXrCGTzchkhzLz6F95qp9Ywka5EtCq8dv6PnXij14oioW36gYuD2CESaDS",
  "key36": "4yQ7CNquur75Rr4bMTehBPRoGa5caeyRDUW8bVY6FaNMZGwRfW5snmFamFCibYqCcYbRqVssWDMbSaJTecqWYHyN",
  "key37": "3PZecdmDGLy5aioAtHpaD7S6bT4HTTc3nwynQuZWqkxyH9wHcZynkoYSTd6xGz1EGxQmUvJxbcVzS6mWGJpxTN2R",
  "key38": "3zpwiRqgVW2B2u3gFiKmveRzD5yUfoEFbxVuZPVphb3ECHQaxrF74W8TjexCmwRAnYyX3nNTMDiXdASANo3zuTjN",
  "key39": "4N9qMZZXwoPMZYFbnysRMJKQJifqrTkKJjQrbxzQKFBvFGDJBNKiqLj7bDEupESET9agSbbd9kzpmPweVALX3wPh",
  "key40": "672iXYRf6Dg5Hb3JvWwnVicRY37sVW6d7vC6qx8as1vG7hG6M9NFzHhwntPuhd1n1HiW9epFszTEtnsfGLRaCLTS",
  "key41": "5ShnENvug5yoXf2AszX7y2sDyZhY1MnPgHtCMJLfZwMHePMKJds2RbJB6F7HD8U84c6E7pqRApvuPYipsfS3Yy77",
  "key42": "2KbqX47YyKnvJi6jfzDj481j425iR3GobSdLqWcsE47fRoRt45P23EhoZ9BjZQxacvh16aAU4whoviCaCbUowrYo",
  "key43": "3T2KbkhPnWMCLLDn5HG9S6jvNZR6bZrpKRNx6WQdQe1afWMRWZE4n5w1wNo24xB6umL5nYzZATxW89xFxDQLW7ay",
  "key44": "4vW6eSPt1vZR8syUmWZ8hWgGAGssefGvrmj5Goj6Wi73BYWpzFCwLpTuoZiyB6Jzvctu4YqxUzJ158tuiUa1uvhw",
  "key45": "4EAb989EVqntnUoTH6pEE9759WwkTun4aNUUt9GMo7PKmCjSHKtEhujEgvjV7VcHpfVUDUJVzn6Zg3yGFes6K8mx"
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
