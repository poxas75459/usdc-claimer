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
    "3TzuPrPU9k9AfGo9tZrPWNhApUjmWjBheyNJmq4RQLZM2bzdSErJ59JNkk5JxNtLDtyfsBSgT9h9VNasNjc8zBuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMHMoUrMykGUu2czPok5gFx3ZPtQYLWQzHGYjdrVWQ3CGyGWNK7WUUoY4tH5QbWJBEK7PPJQSNXnbx7QwH8xKoV",
  "key1": "56aoa6wwuNp6kmmYCjjuUYHsSLCKAtySxNYR5tQTPVW8oKX6uiLM77RhsNXH4MfdTgEkEDGUJhkNwPHcEDZbgg7D",
  "key2": "2UkatcyT58UP88YXKZct5QKDW9eugs6EhVrNKhR4Cvofp7cMQjCTGJ86sScZ3FrxGVUeqwTYitCYszv1RH2pieMw",
  "key3": "2yRRs3pheHqAnBHgQvgq3gU4f25ocioK6EFc1wJ2JtsG6ccND3N5W7pXihSQijg3TKJSsXwMmpuUt7yRULjHfrxu",
  "key4": "5VzgNt4cxpg9AhhVhELEvjtr4d2kz1z9TRN25CJeWNRkbiVKEZsADjShpAJxdVpHKoLtKLmdi8gJEJz5t2896XR6",
  "key5": "2G4SpS57qNpx85jNuniLKFzX3eSN8tcjPTmiYCKh8HPBah4nX77AXdHXjDMW2UahkJeBkzHpwNaz4bFpRm4UhVbf",
  "key6": "5Z88FX5j7h2u8xLXDeEuDmTXsGotbY2aCRRQ62MkbnCUdQP6WQ9ZMmbGNTXik9pzg1h5RhTVwbuSSebJ1puCQ3t1",
  "key7": "4iy6aQsWUDewRLrUjdfYw415kRFFxL78AN7qZ1R2oNmXX2FPyLSkGRyqobC8TNDrfLzzHPb4CLbXFtSEwxK3ut8V",
  "key8": "3N2LkzQE7DWTykc1TrXPWdiqniftXG4PnKTcfuRdy1J4FnXS33zURThcgZRqb4VJZyXetVbZGiAtyfvWDNmcVBee",
  "key9": "2yAUT7bHA2zn56Tkv3AvoxikwD5U2WXhYuTbZucvhxg2F3ow59GvcoPwHHjMavPqra1BZCXQrjbZ4Z7QVmXbRY2M",
  "key10": "3XigmKv94fPaDnshdoqjNKXMQEvcPoWH8gM5FmeZv8dDXYwGT1WCi4mAtS4CiQGE18AqGgt5ooPh8Jobm7FkrVTX",
  "key11": "5W5CAvQPL3ufYNEVH8T7bWrWSWXpQk6qtRMyJbnCz6UbfvTV7chpjhEAmF72FHwQyQohrNDcHbqugGdPW7UYKjSL",
  "key12": "4SeM4Snk3SAib2gTYAC5SnHJyCgwH275KxryeXqnpy2m1JPt1JDurvhUme7Dp3zTnZEygQF9eAFUfF4BT6mvD6vG",
  "key13": "7jUACvC29oVtWiwkeZhrLfvNrNbowwKF2Sex8wMekaNSj3tD51jBjMSPPt8xPDuGysoxc7qXYMFsfNjLDZdpJ8X",
  "key14": "3CNqsrDyaHqww9AUEsa1SVxEREcLUMgYLyZEJc1d2AVUhE5RBHx4iV7S8BNhcq41bVazrZ5FU7pNWZRsoosNnJDP",
  "key15": "3CL4KukkakTDX8B6y8TT4ahEKxCXrfzZFuoHrWydZKJVsge5enq7RwxNxK5e4CFutCzhwHPjQnoyMNwCnMwAYjoa",
  "key16": "UtBvrHR31VSDBgtKVS8itK8wg62FeGCPe17fabx2ymrW7PSYipjatrnuTU6Dc3SybKF2W1MDfKvLcFhReKPttJp",
  "key17": "5izseQVTVv9a79NA6dZscD9Zbi8VPae5zZHDFhXykXvS3ydrXoquiBTuEnK24SCFtJMn3NaLqiPVrcyHJU5kUeLy",
  "key18": "3WvCBaK6ABidPEp89B4MXPpBxnJsgxno1BVvWDM7Z6ftwWMmzWqv1Ht735X3QSidvbzTzdsYW7TW2UMTYuMgfyZb",
  "key19": "4VenBVf5rvSj3zt4ntzcrnMpU4WHT5ffcwxxD8JcVUbsMReu3PTXbb63UvHaPQuMuC9xW1ZYnhKXMQ5GM1ydNJ9b",
  "key20": "2P9oCNbXZ35QAjE7sw6xJvdYDEAgXHDVsTBdkZEw3rdtgBPABF3FZT8tr3q2xNT2KMcsqSUs9V9ySmm6XFGhaM8R",
  "key21": "BhvtgCiWVeQ651M7nhPQwSGiRE36aCZX4rLSuUnxSzQUHYTUZ83NRUoGTZs21JUoA5PYdHdjZxG1A9DPoMNgYFV",
  "key22": "2dEbz2Rb1yQ3gapadokdLubjeojtoaQ98aNhL8RXyUzxbgPQ7QxGaiaKfXFa2r1E81matkx4eNU1hH7dAdH8xN69",
  "key23": "4Dgfum2AhrZdrB7EQkh3YfFd3gaQQDhQcXHTixaU5Exa6ST8hiKUtrKVVC4oRyi39yZp2zG6dWkQ5vN2jsjKUF2P",
  "key24": "25krTKP1kDJ9oA6H8LR71RcU7EgVsv5BCJv2hvQVCPrW3aWPgGagYhKmi2gpTYsaiMTRdeeAfBMEi3GQbnNzbrvc",
  "key25": "3wM6LtfMicsivRWXQSDBMeQ1M9okA2JsoC1utfRJG8rg5MmAgHJxagJNQgMSCwXiQscnM2Ho4JAMtMBSiG2fgmvr",
  "key26": "34xvJCDXELpECKoCLc3mhmFLjY3j4JRZvbo1SMZ3ECxnzvGf8e8iH6USJp6v45E6S8hPpuVaMKrYWC3EjxYWo3CP",
  "key27": "4foUikSowGcZzbNQ4fKTcZAzTB9cgVXkKgm7mBj9TQ4jNL95DcQS2kNcBxCdRhDao1rAa7ALhSth5hvknyVE3ujY",
  "key28": "2nufFAFmvp3J1iSVTvXfjWwm6rweY5KtrgbYH3N5PDvjTXEDvhyhTyo61pdZhVxfnPqwKBEz4VfUBi9fNBNKV6fw",
  "key29": "3mUKD53VsEzpozJpoKFz5xXGPxeuL9rskNy3GEw1R1KLLBzQsowYNjrtkScFbVQz2ioupE7YznqUkLWQMam3RTJP",
  "key30": "5wQ2aCBBMFADqDFxF6xAAEhEf2Wk77emdK4pQbpD6JAkkJXZPYDgoHuPmkVTm9QqjMQsmL9fMA9fBWraSDaPfyD9",
  "key31": "5NALz2mHgmGszAaa99VFLgqF1LjBcFDpXJWYTDaiAMoe7iW2jaUVuPhBTuqFvRap5eEZynFavPMXW4HUuE3CCY1z",
  "key32": "63XUvQfXvR3HEYcNX6F7e66amD3vX3sYfzME9Bxfj6fN3xQPs9tuF5Mzx8cM4KbfMauD3iDt2wJCyXhXD5KgCn4y",
  "key33": "5JbNGeecWg2oK13H3mVpCWLAy5oqnXdqkJSEeNpCyemdnwGEfN74ZpembX5fgwA7a82yqzpx1mHVpztVX1x787FT",
  "key34": "3sTPcMRCuH41S8rBGq4sGcQtovCKszDWtsht8dWDGh76EBfvS25xjj7fkn8xk2wFvJzQTWeaimMkPQooQ9NYwUbH",
  "key35": "4DAKxzfuC5DmQnTEsdKg2QoF4T4UFMzeeqisUmjAxLyQSv4cB1D6qfDoe7odP18w1NGvvGCvtZFW2CxPke9kMEdz",
  "key36": "5senuNs9CAirsgq4YqrkUjmkns1ArFdXS1iGWqGNKmf3avg2jHp78hz8mD53UDHKswciy6u8m7JVcQSZLGabiHbh",
  "key37": "2n5oFWpzXL14jDLpsd9Nhmkbg4Y5x9GCyLxYGFbPZshN74erjWco5hFyWS9ChvoqGccrSKHyHKt4T4gtdSTEeQ1T",
  "key38": "xp6agSfNRuoxkF6RnjrEcyBDcD7V23d3ApytwUcS5SGCBDVALLAwv2pe3vzYgRMJydkZ93c1wriuFCshc6JF5FT",
  "key39": "49MbQ49CRgrLLGG861RGKa2Gm2cGDuZao7y3ADFwdZ3hrGzmVbUcpMzC363PUivPMP3YV3g6yysSbcnMKaZG2hBd",
  "key40": "rfTo6314cUWtpPmzfPnYpRaErHEdKDYahr5CmiKDosJXrka1uMa3NNx1ncUKPTDrMCQbwMUj8B1a57QwAZBEhWR",
  "key41": "55Am7MowAVgkx6Y4mmpTq7PuW2Esj4X7GDLFxrhxezU3Dacvs53zZeHT8GAXjD5PLen8gRz4g3bdc4YYvRS2mfrt",
  "key42": "4wcyLrKkfercRNd23ZwZGxSZYp6wAByPaG456sfv3xbqSKdWptfDr4oM7Fkdv6P7puK8j4yjoAR9rT5xnfrAdKgm",
  "key43": "Bi6fAvByGGcw4SrWcjJiHefMgkirTeXCcjdC776ak4ByJVXTorNxrQB6NLk8fgaqErHvaLJhK8jeCApbTrMnEqr"
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
