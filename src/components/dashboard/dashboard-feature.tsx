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
    "2t3uoxhEBH8ZyDuLQNenPVcmnCX4QeCozZ2odUHcKhrJ546VHXpsLc1Yx4VwEnqsP6Rsj2Ec6kztW5sVWkrp3eL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NE1xejsoy9TiQZ7JHVLbssZQgm1DtfEDSySHQkidWNg29mWgRHeKQn5nEDWYe4NMVDivAJg5CAnAG4a7Myds84v",
  "key1": "JBAXSuhuoyKepY5aP4z8vb5eDAgjrFcEaptHumjvojw2SVPANpAgBVLrfgF88NXsMqsz9URBNoGrchrKrGBLD5H",
  "key2": "5sspjR9eiAHPbFqA8NABE5jmxy7xoHxuyJjKTD99TUkydwMotqCKNBjeDhTJdhvX14uAnnFUKLp9uPPW73Mzq9bH",
  "key3": "3fyFfLdEgz99dokiKu8cq33aN2QsqytU92LU7n8sNsrGLr8kZzJkdxw1TncUzquxsvwhtGzWsGKDAMNRDwNFhPFN",
  "key4": "5rSae67DtzgqbhUTKCxCbgw2nPkDPvNmxF6a3hPYk3bEX7c251KaCehpqJEBZc4P9KeBKQJyeJ6ijYvYzMKGCwmt",
  "key5": "3VYjSTHbLASp1bM6cNd1FaLLkw2VGjkQ8zyNk8PY6mRykR7Bvk9di6jZUPsFjrr5KweCPu4WZNRqTNKf7S8ygd9t",
  "key6": "5qG1pvK98nUA5EhvQFJNTGuon4iKhFBPgQy969E111uxmcMLTpg8sgqNHeWs66M8GYNPwtmbyCoEXMGwVZmtwTEa",
  "key7": "3FGzcx3cy3ogsueEFQapZ3WsqkhsMPoMS1SF6HSzSAaYCLiuQAPevFVmPNbUebktZLfzQ2brPBBTiZTXrH8xmdic",
  "key8": "3qCmREbGDbMYoLyccNGmkriwt6Y6UXvjQgv9AuGzSQHEKRvKDYacPQuGv8RfaLxdHrqNhwYo82JHmGVyjVDhXCoW",
  "key9": "26eGkaU9uTm89Bezf2fW1WQrF16mtaXpDLAZDMigcuwDo1oK5uApzK7osf5o7kxNUz14dhTUo6oqDLJ5vLtPaHGV",
  "key10": "UnUHDdtT5A2aqMSQeqMCQkiB4mQNLnQrhNF2Q2vFFEmkkucapd45bbxDky4N9YNpUs9Dfybo2ikHetA5F6RXSt8",
  "key11": "2Nxf98f7Rrwus6WHiWngUxkp2ZTVY7Ub6hJkCb5hEMR32Z3eY4ELMwMyvKipVDNZjD8Qs63ZSUwjB2LnsuXZ5irC",
  "key12": "GYniguq3uN3TqyNeJXmmJt7VDEcVHVWJNSzrGMY1qcxc4pqJVonZV7KBQq4JFe9JbBPRPoiqtdp19zr57Ghvr2X",
  "key13": "5VdkKhEvC3MFAS1pWo3c722YE8u3kjANERRLJ16pVhz4jiF8vbDt3YLyk8urC8ce2hCZt8QzHHjcJZNTJD5hKnFa",
  "key14": "5AH2aKcqYmu7om6MZ6cJGyDhPF8ZbrgpAHK8hYny8XDboRwphqCAthJL2mJWJbaBmiVJHjhnXJzxw7CHHfESrWBi",
  "key15": "5UQoRGSbvjqmhRy7pX5n9scrjefeiyqhPXJxcPRLjbNPscuHieoUaf53faFMH6LmXtD8U8ccyPaWSMaCqsafqWZw",
  "key16": "KR4U6NwUSnDCX1Z4ADof8GjgMAx9ZWKSXSSSCdL3dtBNoXCR6Do8Decdvds8fo1Xr5n4GtiyPHrddedcm7scEea",
  "key17": "38bN62RiuqqH6bf8hYkDAWiWjvXzQAYYv6v3PKFusfk6azKKgvbRLS1Bhzx7J9tqyniJo79UhQqrc6BCBzsABKng",
  "key18": "3ripxt2ZU6L5QxncrtAAJXLHFgKsMrCFyP2tz2JPPUjKqLphYh3NMkFU9W43YiCVruM5h1rC8RSSv3pQyD4P47Q",
  "key19": "vrfxHVBbjRSRhHMVqgNdmJbc3eWoDNKt9NeTFDEBa2guiQyzBKPLYy2d1cYbiE88HtH81QP18HN2speKAo9NkBh",
  "key20": "4XMathWcGnAoNbnqP72zWLCq5rz3yXZ82wynemrvWGGqqyr1svZeZrTRWUGuZPyidxDR86XDEoThuDygDLSkVqtj",
  "key21": "2CDp3EMcXT88wMpQMVmD3N3AuDrgoTLDWkCjdyMQk1KnV72vQwG87m7xcWA1oskKhR2qdtNxUm8myKN5xoDmcKtR",
  "key22": "3hBF5jF4D8ni7VC63CW9jJxy3ZxYJpBLjLrrq2fkhwzN64USfuMgDGq4xF5MsWnLatvfEBdxqfCindhGknKKeZTz",
  "key23": "5aikX3DvYSnyyP7LaFqTkEKyjYB1VGvEpJRMwCaWsq6K3eh4GVv1Da43LQYfVP5WfMK6vZQHWQfeJzmyunuu3HKB",
  "key24": "3LQdMsovg7VKRAtqG4S4iNeHyzuurKCH2cmF1bzs9Yzd3dS8oZrrmske287Bk5FGUH9DWrPVhMCbWYMD5zccFHxD",
  "key25": "ExemJp2fNujjwmutBhoXnFQb21nvkN69uzsEYtz5ksxF8aaSgzz22A9CDUJRWNVC5eg7Xa6ADpT8DL9uw5t5nFF",
  "key26": "2z8JPymZo14o8XeajMUazshK6Gr5vuQqbQJCxL1cQ13A1dDxixvm4hZY66hb8uiqXTct2BLHNTQwzYzbSKrRJV8N",
  "key27": "3dcEGkwemhEoEHJZN68Ktjwj9PU3F8EDnFRVDm6yuUqPUpNKpeY8XDsogrWQ1bUhTqUp6PYR7Uo8DPhJUW48BA2c",
  "key28": "2Eg22p3L94VhkC1xQNEonrmgbJGDQz44oHCAGZUEYaTN1fWaBRwDtshjCcZL7fD5gTSy3MXYv5SCBUcQZ1UeZ9w7",
  "key29": "47fM7hsf7bRMg9mWjss3992GJkRrAQvde8cAfkPBcxZ7Ggs3mX7ZxyURgqV8U7aRgqt5gjVFwnFPD4yKKRzkRAAf",
  "key30": "2gN5HfWDv5kC3CFZdF3yW7LBW1JbDUjGFsKgDymnMWx3ebMdLCmiLK1HWiiYKdTKC7HwFr4TQsSVnbXweYgZQxVP",
  "key31": "2pVRWeSHb32q67rHcWEaX2TrwCYVkWtpxRAAb4ecFfvJTSzQEtEDBwd5LqCBhVS3kaXXKLa24UfYAZeVrRuzSNdw",
  "key32": "2NS6RbspRMgvpg4CygZz6HyP63VwUeKTG9ikzsS6AubBZr3vVtW9QP1RnMfT6wBopF3yCv6PNxvKjvE4WC4wmZUM",
  "key33": "4BaCTANETMV8pzykFMxCuk23Ec3GsiSP98mmYST5AkaDfb686QkBiWhGRqphWExDSaY8JQvXvznW8DzoNruuewum",
  "key34": "3zj2KbV3Sbxh8gJscH2irmrZRjP1FkUDoyZ43EJ7K4J1aY3PnFiBaJGB1ZXF41VJpsQJCmfdqATMePP7D5bp8DVd",
  "key35": "4N54MP7GuU9qh2ZgBvcAgkSQz9ha9nCPimaNZXtzvoLZf7zBAQf275rVW2Wd5HgjEPcP5ZaTet9FTEQksVtwJqn9",
  "key36": "A67SfGYoZm4GJ8KmC3TuFXfx7yncz8CKze1r6qrbcUSxUFpg73LZ3RNYeRuxksWEFUuRMNHK8Tqmzo8ExTzpPQg",
  "key37": "3ngMvy1CFU3MXzKX6KnybqAcs2X9WBxkt4fj5vUKmtkKagZwu5bY9j9PccxGu7eGhsz7czc3mzEZgToHDTZJtF8q",
  "key38": "4WLTsmXZf8AXdX8LnXytZ36vLjMQEvaW7uF18FDniF9APBrjxd89uKKucWZ8AJo1hfKcUqsriTcFW6QYxr4PVcEe",
  "key39": "2TxpZ3sZxvTPaaESZcRweQ19sr99EjG9agkxZW6aKa9dUdMRixy6e1wsyBxV7163Gi4vuyeKHqt1zcisEfkzZ8BF",
  "key40": "9YQik7CfJRJiq9svv3cqURAGzZRvJcboMJvnGyHmsD5AWHfbMCgKvRosoNV94weuKnsfRbzaCGrD1i3bwG6e81c",
  "key41": "86pvNFdfyurZbUG6BgiHpGaHSiWiujvNyLXbDqvfo9b5Ghwaabc41LqazFNyXKCBWYnfv9QyKRz4k3axuGr7Qxv",
  "key42": "6Gx9xcMT32TB6tYvncBW5xqcT1BgxeLBx2adKAF3FWHQwhP5aG1aYbN2JDTGrDyMGnosqy3AbLagH99za2qe7kn",
  "key43": "4jPXbDoD5cvrkAsMrdYq4vx5JwSTjjNzDcyLNMkLK5ZczLQwLMQWgoR5YzZabpiwJ5qrViYLPC8TtXVH9JLyo5Hy",
  "key44": "k3vnPzjMcTtw6h3xtNYenCtjgnCz4jH22kMxRqWqjfiCM55MUgxKmLbpPgn5P5gPCtNwnwcb65pyj5VBdQEVrfK",
  "key45": "43jUxWmRyvs63dKsrh7LLzzhWhxLg3BNzov4xg7wLGJibzeNGzwtHgrjrL2AXrBV9G3M9W6X2YChqTCG6MR17AU3",
  "key46": "66CjcodkhDNk1sRQrY6ZEazZBVwwzEtXbbMxCeqKw1N7NcU1n1otVvHgSJFWYfhwkciprQmfpq3xhPRtH2qQrqdZ",
  "key47": "5BYAUBKRt9eYvZtfh8fg646F9qvN8RzuM4gu2cHcZ5Xcx25biwHAYGd9CujkxynrvectramDJaWkUknJVQSpGa5n"
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
