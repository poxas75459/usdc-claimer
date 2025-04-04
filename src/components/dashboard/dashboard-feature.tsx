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
    "3iqZgsS2j93beTbw2ZY7LRTdmrCQQw3rrWy6B5SPoRAWcq7yAtjGG3FxWvdKb277K2s37XneC1nEs8NzCTQscxuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caHLVTikMHzbeui6KuqQ3EPHnKZxqFryXVCLcusBryp2WLeDvsi3EGjPiMY5bG7wXTQafPyuH67YotLaVLaeULH",
  "key1": "3XEpzY7R2m9jMo1hyjuSNG5h4Dpegtks4u15e9ZWCydu8p97P6bKikreeYxB5kDPNjtgGAfR2DkJVwDZQDdoWrVP",
  "key2": "2tM2wrM4R7ey3jZeHvDfLEh2o9w2e5SwVCNpEzrxP1CNQcnBa2iCBUqx77KieCgBkjVdtu2eEqRJJVjB3dHf1hy5",
  "key3": "3iQGmGrJwBFHJCqF3p9Yz6rA4WSr867aZbKGGLttEe2df4AN3LWdpnCam4i1L11DtuYcyXERgTNCX3i7PDJVjc3v",
  "key4": "31gkSjcZrTHchzdgjnvF6GNNtHsXJDa3b6J4ryPFWrjqFuNJ2GxtQFjfAHV9A75t47YctwWbeCps37ZNhTWvAk1V",
  "key5": "53tM24zX5eRND28h2uxZaYtb14Rhy5NyTqnSk9SK4Q3Y6PcaRv9L4TDENou9GsEJy1yfBD2pRxrkTcYBNXMYe4t3",
  "key6": "NaSZ9tQVN3fbT4nuR9S58kXfFdC3ondFBMXoF71NjtgEWpAVitwfWp4Aj1akPA98mgecokkj95sSiWBX9aFECpC",
  "key7": "5LHnAdY39xFgmqA9CaPMjUJWzPJfmNuSUSK7huweQtgyr3UqxML7PcfD45U9CwSjVXZFWCoZUeBNqW6doMvJRcLp",
  "key8": "2uYqgEwwMnYEf7mpc1yw9qCwgxLFALRAXihn6QjgfB5NwvfVddUCv4ykdJDRU6wCr1ej3hmpoScj31iU3TKCEU9v",
  "key9": "TpWzJmFXS4VMEMJEKanurqH6j4CGSnBUtBPyE9Pg2vaznjxBbJtsQVxC5sieabtVTqMndmmn7EYBCquMKYRZGwk",
  "key10": "5dr8n7xgGMoYo9SyyzX6wYz3oDj8ntobfC3Zw6EQT7vNz9C6KX5rgoZp9J54tzmWccyqe2LFrHYJTpbnTH7Vzr1h",
  "key11": "Aic3Wv1kTN8GWFp4accKTFEMtV2AEadbcE3BGXyfJ7bbqJ1r4qfxgHLofqRSCQiR9USVpMLBAwyrkNBG9y2o22A",
  "key12": "4j2Qzzdj9E9KuD3ZDL26HaHizuYw6kAVWohC9JXMjmhbSquueCVhnjZpvHX1S4F1ErkYiZgP6UFp3jP2pamntcw5",
  "key13": "5DQpRVQCg8m7u4Ck447ELUW874W9sRvUbQFxNYWuyLx2mDU3ZyNhuCUNgZpUTZSW9BofC34YEmYznzAop8MamnKH",
  "key14": "rJJLYSAJmkC5Vn1upcxHGuLGAEYdvG6sp8f4xZqT6KCZQjkPaFStjkQKqVbLRTXb4GCNaL9mehbiUc8EWR9bo6B",
  "key15": "4aLM1gmf9XRbD8Lb37eWMDYqZS4qxLTrXEo52jUju7o5JCp4CXCigbFFcQibGZ6j2kZQ74rq2A67ACjaPYCpYosN",
  "key16": "RG23YQa2nAosgsr7bpbPn7thhuTcRmxDXBircjeiERmZkmr1QrnpxnsEM8oCwFP2ZTcaVgn23fykmEhzL6PRod9",
  "key17": "3STmMLoDaenSY3pLhPGoqVyi4er8GtHgzoejAYXSe8ZS2daVEBsvBedWuUmFSENU97zBLmkjiRjbAXQqNL7FsFSP",
  "key18": "3YNp1dEEFWu4dwNd5KyY1zTsnPen6u2qwxvSPXCdbCyN7vwjgkp7MePJmnB6taiD63CE2ZgVGU8aLvXhX9i2dDCn",
  "key19": "5yK1nnWdAU7kyodvXZsbkXbZxNzRf3zqWqHT77qS1vBWFAXNRQ2kFjqsmrsxZSjwCiw9h1N1bVDV8jkxXnttwa3G",
  "key20": "2GHXt8WHffGV53JGHuvEJKHqxZZ8qB3QEcwphsqQqPdYRL9h3tJncNzwUVLUCXwsXFwiG2DEi9RfetfZqtGpGKiL",
  "key21": "rukLAWV3s8RxAaEGQRWdKvsEe7RU3mcpsaczXnYW2tVsgF6MpsxsMZqMLH8piSENTtxytHH4jwRSvGZAjnqkp64",
  "key22": "5xsKofJyg8eMXwK8SivFMN6YnMQxdkMWFoHJg48iZx33u9VyaWmB6RcevTinK9RUskLAHBdZCoSv2zQqcphNq37F",
  "key23": "223JgzFJcPyvhukkt2zx5QLesHEfGzoUJy8fXxLFgeBbjErHu9iqtgp9DhDoni86nBy3HB879621vhqnwe4saSLD",
  "key24": "2eDkZLpUEFxKTUkNeE9tQokATF4BsSnu7VBnqhNj6vtkmXMEyHa651mjoGbLDvQD9ZU9bm6i9wcaHyiHZatxUV3n",
  "key25": "5SxzxEmUwyW6q7peE6wqw6ZX5jqQp9U9TrQYPBmcxevzTb8RQnZYTJpBEq5DoqEW3HmLpz8k2HQ3nadnSPrUEvR7",
  "key26": "26eUx35PgvFrYtfZRvZD2ei2Xcaa2qyxYZicbub7CaoBt8uTgeL8y3tET2yViFdGHRdZTkMF45vEftzT2ihSQYpu",
  "key27": "22nzLbtFqqmFdf2Lf4NiStqxDTaYAAvGZdw8HadMcaz9MjkL8pym5LRy11NL6FWUUAS9fZ2aPUiq9XcjwTKg4n3B"
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
