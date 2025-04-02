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
    "3eNeYCcMFqyno72495JyiqY7s1VPQZoYnZjVSYWHT6WbnqaBdJqE6R16hW5bmjYJzMQDfkcHmsxhMSr9pHf2VWvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5f57kvsijHmbmzJeSjvLJ3E8icHgj3uHCFRRgeQMCjgQ45bfdE1JSvrkDFYRCnzY5tZJnPNSVnBeYQPbjG5dH4",
  "key1": "5UqHQHPfMrYYniFShKRCEsRBGwUVMajbGcd9CwWqHV3pC1HHa4urRjRmMY6nEUxzoMNtrunr3BVHYAjekt4yg2Y9",
  "key2": "5weigi5wER9bJzUhrj2TJVq6AvAKC2NHHSE8BDcBetcGqGbEBPcL4Kwje8GUd6zwXuVdVnyECr3i4jqC2wCCk2ye",
  "key3": "2WTd18rvNuQ3otopk1wc5SwPhXMiDjQmux39yid9wvmTReeKf41N8r35C9AD6ePPxG85Y2UPAMRKs6miXqzzZ9zJ",
  "key4": "5RPWEkhh2PfTVaRS3aEvvU3iKxjjiJFoWGSjWMg1YW2QJdGCLL3ExhLVaEn4NePkJUqjQSPvMHjFSafrj9A6qj4x",
  "key5": "5G7qQ2sxNVhiMRYavn38JH4omRiwAZmw9MxJy4SFhqcGRrt13vZuAQ9cWBnW4xAGaaDToNYVgH5UooanQs2vf9Eg",
  "key6": "92McqyC3Ye3FkrkPJ9zvsFhZxY71brnKf26BL931BXebJmx9BTH2ZWYK47s15UrenjQEbX4g3k1UBejqd6H6Amx",
  "key7": "JdWVzqeSC4hjMugmwVdiydGDHRGENiUZidvQsbdd1r9LuB4di7o2RDSP9meJWq3s2k2Y3QvAGxgdf7oMrGVPxDu",
  "key8": "4tmJPvvPNZEk6ihwrGKeu82oTuN76NQYuje7rVJ17tS8KPecNVKDjiipvpzJNwqNuS4WgozarZ55jZV5XmjSKfBR",
  "key9": "2dALhLSBqFaGUXY5v89KWDhj9gTR9jU8qUUpwve5kEVweLkBWeMHcEZAmUYNTCH64nXQRUYxJH586yFvM4i99hrh",
  "key10": "3qfFfNBKLr1K6DrkLs9CfHWaFHnoyRq27T6hCqmev9ZpiAgzgqgNthn3MENHUiT6JrQXHuVmju3vBNGqiSU5sFgt",
  "key11": "353UrwcoiJQynZU2kMJwxK8AevssqbcQZbKQURF9XNMcTjDcRp7j8nSWP29yWBbHKpTwp5LJw7jaPSnzq17AC3s5",
  "key12": "4u35Ppi4zFJYBpLKiRYsF83BJpjSEuJWBDqB8pdB3kEekvvsVgE7GQ6CFQJktHJ6isa8SXU2WDdmFzTBxviVJZ35",
  "key13": "4tKx2TZ7uarf8mNquEKqUmhkcBHAetd7DDBZRkq6MFsaq4pkfynWWht92Bhfci3nP8D25BDGq6ZbzQGKcfwY9vtU",
  "key14": "4MhkPLVZX6yxCNHtWs8QZ9T5euGRJzAZ1DDAsvcrkeiM5mZJGKjsk8PgkJgivhfnZEgGacpt43X1isvVzNz8QGAv",
  "key15": "2yWCninJJD4VG6MtUijG5s2d6uLT2WqmqBc9YPtjC83ECt8j5gvpJq3TCyk5HefsGYynfMgXS5drCXofMdpyKRxx",
  "key16": "T8pNMbxrzB87gbAGrNvTJN7AHoBktjsMYX5uADiv2ZoX5YeWae8vFGgouAXtft5znLAdMrFx6wAq8zQGpzfZNwQ",
  "key17": "GQ9N61duWwuar2M98P3NyvK4Vmh9szQFSzohgx8BL3GJks49oxkZWbz28p5BNgkrGf3VFA3wjsZ7XBCK9wAY1GW",
  "key18": "38r56RudSssBecfF6C7mzs2Ho61eowxTGVQMp4YBJznUn37bG87cEoCPUBw6hHMRy5ZQK4dvD4z1kSGjWCap6NJn",
  "key19": "2WKGRnQyuzZ7bqsgGjeuxAMFSzHPTVKBmu4NXVWchMzyRbjn3vcDMKWMG2MbcxBu6cjLbCxsVqNW5c7WP9V8tTzQ",
  "key20": "3j1f4ocyeyWT54SkpsmxuyLaEBFAdWUdghsCeSTacZDSN6C6UtrgvgWCwNdBhWTTHuY7ZEi8xHBkvLgAMjuEwHX4",
  "key21": "4KDoiYosa9w192bPUU9z2iV74PXcH4JYAauD2hjRTeYNp114M6J6KHZ4973mfRVwoBGRqAKDTjzMuHd41irWNXaH",
  "key22": "qrfXEZT4hrQEKZG1vfcdRcQcho64kM9fN4Js2K3eB7kx443vkhUy5z5kkzsSpzUnzWU2TdHN1feeYaN4KKFVUSF",
  "key23": "3y616GfPmLeL6y5PtAXcMT1FVxpqXNmXX5muDprc54thSQ8PYHoywh3QNFM63RQfuC9HSjv6wq2FrK5jUraAfV9J",
  "key24": "eJCQNpQtpZauE6ythF5m4dHDJwyN7pAS6jFUo3UnSsNFj4A3mXgzN38NpiM2DmjZrSL958HdN1pdz7Zsx9LRAUD",
  "key25": "kUKmM5sfzUmsmnD9aNoN74PBscS2xVskew84Tg8CwUPBFsdf8hxnpRYqN3pBDpx8RhJvg5bcJG85XZ6Ra1myg61",
  "key26": "3Ez8KuxyNfTauistRvQopsRvHMnQGtUUpPDWvQdDqZ8FLAB7u61gGwvZDvCcVYgQoXvxUzBwW5CH5vKFizHbtnAR",
  "key27": "skH1Q4SUN22PrnXgFSpr6jX5rMYam3oyLzvdg9SYAyFkB5yxmpqmNqhMsQkjuYmEQYqcTaTusshFoNK6oZNCjaw",
  "key28": "4P5w3rr4eX1aJS5qqZ47Nw1UuXPHEF3GgYTy6mfNaPCj4MvVZFUUwawUrzUfbjsMCdPztmsTe1YDSP4AY7MjbdjR",
  "key29": "5BLqavRQogD3AaeGzDrgoF6cWVD4rNL9gHQj8K2x96zYaDkuHaHBWQhkUaXrtm4MZX7uVZAuRukLNXJFGBKNJgzj",
  "key30": "M44oreUys2tynawt9PcGMgstyckhtSxx9mjiivCJ9BPKZNzCWKY2t2g5sS1YVKVGd7aR5svuAA3m1iMtQEqJnEM",
  "key31": "34Wcx8FWbpLqY5fG9Y6u7q4rUoAN7imWoCoiVdNfzqKM8ZQE5XrMLtKZd6a3Pnr51u5hSaQmpYC2wycsrzSc1MM4",
  "key32": "5FNyXm7jnh31om53pkizLJR3XgYcZYu7u15sgX6Wk3opCLk5MeDUzRhJtgfgfjHZnCmtAWRjFHsgGD8pfLcrfoQ2",
  "key33": "2LMuPXZPNhMnrkkJTuxuiJz4yGp6V7gC54Bf4vimSvdBdBbziWUwXZefuJCJUtgVtGAwb69JX9FzfeGf379AXiKv",
  "key34": "QCxC69oRiXyDWyv6R5Phxa9P9wCgtmdFWUEQ4APhLCq34wXKExK3McuDXP8J1h1Gkp24bimeGGPbbqhYXkMNmD6",
  "key35": "2W1ev81NdMkNKEmc9kkWZLrk8uCqQyCUz6CaucHn5kwPHbQEb3kx7Fk2DUcw8ew3et8U7JrQafCrwhdDDCE6eSjB",
  "key36": "2BQe72AJbdRAzJBgy13ZAxFSFLhNifXfC1p8nsWacrWdzvng9yza5upvyywF1GXVYBnxpxjfkUwWcEEarDuvecpi",
  "key37": "4wD9xSwGQn2D7avvTfSk183YrEhsidJBEyMX2UFTwd4vsmr2VgcMVecrzGsbYjfimN4Sqs7aCBAAsgYVVa9R5ZDz",
  "key38": "2X6U3PpZrYwXqzxccgs2iPhEbwVwidkaXYfbcoZkUvDC2E9Dsp7WW5oY6EGJwJGZhKYJb5xZbsqcJgEarJmV7fjM",
  "key39": "4sXWNFNeFr7DgcGbXGWwuzCc2Rcn3pmP5VTaqPzL5i3Gy9cZekizyVv7Qyp7JWDPjyqt1BbW3UbwwzzBoPRvx2Kh",
  "key40": "28Si4arJy57M1YfkzXgF3CwC7TxzvvdcMgC6WfuEed77rcTNZT7V3f6hXnqfUCCoFYa7CZHpQxFbc8USaLPCNUP5",
  "key41": "5gjxf4iG7ZZtx4UdCKrCkAE8voW7sSE5dDApBtFydwjCZ8fkKvgLHQi3rXaDUdJW6StDpcn6ieyYR81pnvmVfvgK",
  "key42": "MCbQsUc9opXSBKPf8ou6eXmVyMesvawDU7DM3TSsQ6pESxt5BfHThP34x3XfniT6Nnk7ZK2ecoh56CkBVKgV3nH",
  "key43": "8tQXh7ujMyobRdAnignyotghnqKo95fCJwZuzvsBTn97tefp4kQ5Pgz4GwsHEQ59WdvcVAAnCVtYdww5865C6kt",
  "key44": "4KMn5HvxEQsBwwp59NoCDvpmmQpEHgd4dEQuehffDLMRrNabktscc1mSLdsJA3C7DHfnkf2Y8Hf7cUwmQvHkDHzV",
  "key45": "cH5PT4EgWAY4GEb7MUqrTJgr2ePXPbCpqR89GxpQcU8KDnT1zU22CeFTGcyEBjL6ThpJpQi9cgq3WFo4iQqmQEa",
  "key46": "5AZA5f11vE172RxubP6oN36cWG5GD9vjENTDBgb5vtvuujD7441PLJXRgiVdJhMbkkFc4nr1vxTLCC5Hj32xKWE5",
  "key47": "4N6vf13eZQ15Q9T3t1PjX4cSXmahAbeGWCcJuJSq8pESuZixNmu8Jz8uhj3DpMGb5HWwkgJpki6pnKWoWmBNJZMb"
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
