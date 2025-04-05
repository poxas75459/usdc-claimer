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
    "5iQvRaFSBqLKShj9KKComtBqjb2xgQYtQrNqcoyH3PTCL9g2JPdmU2v4MyS2XDZwbBba897dhMhojJRCBsZtZ8Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHZ3D9PcRCE5Buw4QnQ3UPXQejbNvBc3ZxzMXJ9m5RXWdvL78AAYBovTF6ouTvNC9zYSfrosq4g7oJ87SuG2rpn",
  "key1": "9WLW7GafXr2pKwtoWrsw8f62um2uRk7j3jRVu8JEMZhhL5QWboVM3f2WpNtUKiAt8dHaXq1uEwX27V4UPrBmqPX",
  "key2": "2cciZY7txrK1rRNfJaMJEUcsLqkWoHgnGrFBnJXFasRDnConUA2S1tqccedu6mxFSbtK7btaQVzQK74iEPxVSheo",
  "key3": "5Ub5Qrrzb68HzFpHGvSdiRdD7VoiEsMmSfd5F1wVDYWRypbm9ZRs3Ng7XtRewXcQddD5aPsYpd41poXPotjkgrK9",
  "key4": "3pPM4u4DAr8gYAWC8dGFy7NNnh3Z1BZ99GA8o3uJhEQX666mChRs2pQj4Un8st6dQ5BrEmtQGxdQ99BmZ8FixxjZ",
  "key5": "66ut6KdE9ztAGBRkvaGxMVBaLxFBikvdUUpeqYnmmFsmmn1fCW543xCPiDPQx3HkxXBxdS2925mKViPQjjhJN6Sh",
  "key6": "2oSKjpcghpCS9fRK4QdL7T15ydqe6apW6ASeUEnoGEdQdzDrpiQXsGxaPJRKqzAiFr4UzMceo3QjwVApX3q8iBiR",
  "key7": "5pCGifLx2ECpzSEd6BzkqpHNn19xUSLxkuMz8UhaZtYeTHMsCnBRz7DM7x8EQVr9dm2RKKsJNAs7RjVCu2SAh6Z9",
  "key8": "2Axst47LSGnJen7DSisdQpModmgtS4YVWBYUSnQ6ATHXCRu9AbqTU2PdEA2KKQeQ3JX8GVyHHC5k6hULyAnxotSE",
  "key9": "4FBYu7DNCzH7tQBFZAhukENTnbQNbHfu9fL3ZLZcrppSKKjWmwQYkbXntSRRXR86ayPnu8dPtARc4ZnC4Z19EjY9",
  "key10": "2eBkuBvFegxGS3y7Xk4Uui1JKvkaWDpustWKrj9RQ9LtYBuLXhtCckmhWuAVz2M53unHxEs7QZ7CJms5qxYCMh8t",
  "key11": "4sKjba53pYPLb4Jvgx3e1uz2v5RQryGc8Z8wUR7dyZXu7AA31JqHuR3dq2djY1PBQu38SPGVDCubyRivQWEFUadV",
  "key12": "nWMcdgjYvk99qUGBUzrKUfG6VcrAG3UkPHdyFTjKb5dJh7E5y8qK95XwHjB2UU26LFbqufTFVjnNck5vqEPRy5D",
  "key13": "2WHf7yqYy5hHzM7L4mnUjroSsNszbuiZqzDbH3FJCxdsg9PnzwYYgk75opHhAsmiT57JP8bFhqQxJ7MeiLTVMGzJ",
  "key14": "3spdJKkHckLGZhHCKfutV6bA39uZVTdtuMyn7jC9K4ZijJWKq9YjHBY8jpuyj7bHkT6xPeH8Gpw7yPdfY8ziWvXs",
  "key15": "GfPTTUa3cJT1nb63ugz8t9o2yiGqKJT2zZ1HtTi5HwAf4me44zeWv4xTfkuDHUCABsHn6kRikc3AXdnqqde397B",
  "key16": "4DwzK1NZ5Rf8kxcrV51kpxbYJrSE92ygF8JgZPYzisTeQSeMN7oRkojmtUynWCE7Rb6jF4sQESYpe8fwCKTb8Php",
  "key17": "p8uUfE2vu8DRboUFnXxgvjVBbUpjnfCi2D3spyHbueFJ3ftPeckaGwZK39DSredZq6ooWT4vYtgdndZbDx98ByN",
  "key18": "5qGmVX6UrmcXa7UynVyNEELUWbdo3wZQuciu9tDfwtxjDNam5z4gMCX9t413N6n21MCTxG68JXJ7zFmdoyh2LVvk",
  "key19": "3EUtgZQVPfQx41rT5v2awtQNZL9UygNWVcq5zJjYQJQH3jWuTYnanYDidpyTG61omiRcvRLL92ahD9hecFtK4h1d",
  "key20": "N5ZkwDmR4aaYi6v2tEXgZFDcqbhe67c1Wo9NjjEehC5E3EajbrAtGBwDEZHuNUEDzh1HVcB6mTb5ijEHQSfHGuy",
  "key21": "4Bu54XoWS8Ka8buVUmvrSAyj8zWZmijYKyy5PSgGLWh2u3Meb2WPPRh6w2TtT4h3JfL3rgksR8HNUH3zfxdL5HUG",
  "key22": "67VFjxvbZxCebV45G45okzmu5UWGVWHYdG7Wdzvv6DAoFtpc9AHcvVRYab2aL79Ytc9L25HDZ5ieChYjiVVZCap8",
  "key23": "4eSfDAij9iN5eypj4vUcsiyzD1Pss72EE3KrnsEnTM32ZuBbViJRCSKS294vFtn82N3ee89EXgQSqeoj6UA3DX4y",
  "key24": "5iqND6vVvNsp2kQqw4PuuPP1bmF8pUGSCzGXS1mfNJJsg8mxHKPjvrpG8kWUy3hz22BZSjtcJxNfFd8DzyEuqU18",
  "key25": "4D8tmxddeYbCwUHGgxpquZmMSxZTQkesTugLnN9fo1thRV772f6NgZG4eE1zaYfUdEBXDC6cc3S5QEq6k4bCMkkq",
  "key26": "3wnYN5u3V4z79c2swRsbnTkH29NH5UE95VYqSApmqFhAnq6Ca8y1NUcWeJD9vYhPreasraLF5omfC21zjdgxReQH",
  "key27": "4pmKxKsoVayBN8mU3h1nGgg3p77V8fNzQxk87kDVYE28ApikcoMJWj8kYAtgnr8c2vwpN4ZR4PMjWo8JDeKnhrE3",
  "key28": "33Wwc5eoydKgRqFE9r7MwFeoaYGaR4qS8eB9LLNuB8X8MTJAGZ1DQbN44FQJwgNoj3pPKdwe8r4Fja3bpPqoNcBT",
  "key29": "2YDQX5CzvMAfxxKMZr6ZVUMDqrh7M4ej9Tg85jhTujdNyQQ9GuQG4sJgKRByo2ckkchQy85Z6w39i4enS5iydygG",
  "key30": "5AgEdif13nbtis3WSNdo8DVMVhHu9JRz1J946JfiuHNDTmG1J7Lo4R8Quhu6znw69Wi7SfdG5mcDmhqsYu641Y2q",
  "key31": "57f3XNwogF7KXyv2SQfMzunC6FEzjnKP29xpQvR5uSTrEFRHfa6ftKjUDKvdxAC2Vo5vuKx2D4ESnx6nu4QLnDHj",
  "key32": "5nKjzeD5R3yEZ4E4Y6otTtBVVHGgsYczvNAh7UbFsduwenQDwbnYkBA85idpW1WeSkn8LXfYo7o2h9uxEqV8VPEs",
  "key33": "2eDY7dh9VCbtfL2FGqj8v3qD2MK1dBGR87HBxEoKjnsd6wfiBGC6AgMK4q7fUAgJj3CP9Ju1VfY19ZMiCqiLt7hR",
  "key34": "3ZFKk4xdQgb1qnntxetAfUWz9RJRGnwQNygGhexyiXn8rY4eNuXnErfG8sfdVCrnzN2GFXHFMCdb3pEwpW6ecAKh",
  "key35": "27UuKk7qNBDYYP8XJb9tkHDUciySjsGfLQbMaYJAsHKEQtYFCBVfRJbKw9QyHvHmekQZFCtqdMpYfzCz13faYtDr",
  "key36": "3uEHWSXHMLKwyfiGXCsgXnveT7mjMaBUfKK7Fn71vyE2dZgiqFnhDE44AQKhPUW2q4YN9yBhXzp2N8Fwue5Z9fr7",
  "key37": "4EVpedwdRdp3QMbPjj4gWdzt4iWbVuiG2e7n1rRYZTVsGpUY6fwe5pkLDkZzZ3L6vU6HKTUZ82Vj4mCkBvS6Ns9b",
  "key38": "4trbYBtLNNef7peiL8V6LrPcHdLhuyJHqLosRJ4hMMK7bKaS3RVK8Ntq3uUBzQoQCVtHVe91WhhchdDL2uvk6WAa",
  "key39": "3CLBhPUKuBmGGMS8wsKRgUJrZRtoebW14CVGb7gzc4SCJSH9BJZvAcuWNe7Pd4tKxvnBjaWJzbo4Cn5xfRTGTjYq",
  "key40": "VHDm9yRd2yLtQZRTM12przitSrWdHwVqmeE97aCbyDJpJ1PrJgLb9u6wbhn81iKkX2xYaA2ZSjdRxQjAcShFNva",
  "key41": "5NLLyvBzZ5iBH6oTa3o7KDZWa6UGLMaN6rj6jXJrdjkN4GFyK1MKr8yzkR5Bu58WgWBMnuUbuYkhfzVNnTfw2gSy",
  "key42": "4gXNFWAd64Qxi5jtQbRayMG4pXVwn5G7nf5awC3vR4PFB612bohaNJyB9y7bcrFCx1F1DFANbBNi7TQnchCQiwhb",
  "key43": "gdidTmpULtgYA117DgE2aaWErQrwQmxAYbKtVG5hog7yNvMSVyjrWdDFbZxSc72qZAaFwewZogDr5EAGXsH6adT",
  "key44": "2wpB34ZYgAZnVnGaysYRmYqBbxSi97ZdkZzPsvSehPUvgwYjB7vo6ZPKfgbbLdr6W1EyHPLzuQ1BfDGjJPGjnv91",
  "key45": "2bwKrEzCs6yAmTR8PbhBW9DBnyvKhW821Gp3gxJLyxxV1VowzkHZvR53zQmsqVkotEcmRy1KHJxs9Ja38mMxANax",
  "key46": "2v9XhUE6Ajmj8KkD4y9AKBVPTrvSZ6x6gzoNjncUR62ctJxSiALWYpQR1xZi6tKLBRUzQGoxQFKSxm3wHBqbGjLP",
  "key47": "28eUCvZCx6ChKkHuDgrQAdVKHj3CtVedPkty7eHtLPL9NqmM2yZYoga5CZQQWjfckq6oY1MdurF4NmCEaBhVXPsG",
  "key48": "5xz66QjMdbB7MhnJZv8UL8xF51jKZPL1UhEddfe35Adwgy2SWqrFZ5eQ9TLDmo57pmJPajZEEs1MmdXquG2w4s12"
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
