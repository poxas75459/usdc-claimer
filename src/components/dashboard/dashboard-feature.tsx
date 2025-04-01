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
    "2U6aUUMLxc197PC7X8gMvfG64c39ZJUnn7bc1e7aixtt8UuCTjarQeLEaSzkjV1CeSwwhS8asJ1buFcV8Vhyq3Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9AkVvcJMNGrY7ez4TP98g3zqkKLBy4vzVJvt2BzKS7cBzwpLGWboWqVRkNWDKZHL6tDyvNmyAPxC5i5MMWLPEF",
  "key1": "5XUBZtYTe3FfdSnbp5dDVKa89eSYLjynQYnmsxPTENKZb2o735SS1miP6kqhHMfjusA6uE4grSwYUEJfMAjq5sf7",
  "key2": "3RhWXwegKMAyYyhNeBmeP9ZhDFUjb3McRNvAyxUJaAKdEhgUWr8SDNqawCvp74EM7D3vg6KErEo6J2NqHyvAg3Ev",
  "key3": "27B6fa7p5VBr49AWY76uNNgadS4QFN3MqwYCSE7CPLitJN8XtNPtiTMvhBmHHBLXhPFsH8XomKgofvHgCWuNVzoY",
  "key4": "f9WDo4J84hYRFe4RVgEVGrK4FAHGoh9UYhQdrSKzdJ7A9wZjALfuGKWDmw87RTaAgRKWqA4JAzoPFmTbzua7M4Y",
  "key5": "22h4mXLadfg9t1C9kRb395T2z6qNVpeTqwsxkjwPgCAjTY3si7bvX4Wuw886ALqiWR5K6wSZEdegKjcrZcr1cp31",
  "key6": "4SMm9jGtYYHjrekEY6nsweFPn79yvfPJSyM45VtzECgZm7GvHHL9LDc2nHGE8UDY2SrM2n6ZBvkVnDYSv3r37rs6",
  "key7": "5jY1wcmyAgx5gTg4Q9zFiDzw9gZQhcQB2GoNjsM3TWH1jQEAgqRbH8J5UwWkN6E1bZA8MsY5LK5hUkNvUSZPMu6r",
  "key8": "45r7nedpcyxbofWyzbbVKcR5UbmzhGxRwcFHUTviNd1D3r6inMhtbzCRiWkx7qwezCwQwS1A9kypx79uDVJWneHh",
  "key9": "62KVvtSceSHxDyMYzSxnaL9rzG3JRhqPLSxPZgWbRchW2HXaYe62AEJeUn1AetazpUV995S36995Jb8faYt4V2rw",
  "key10": "2KA65cKSRBpw4LMZktUgJtEQ2mxDDsrKqZMgVihd9M17GtQBbF1YK3kJX5VjyLzEeLhxi16V5rxCDmuhdHXkPpvE",
  "key11": "2ALfHRQk5XAFWvYAvMy5mrd1xg4BbBSsyBSY4HqCbaPu5HpAcvzt6qs9hdYsAAWxFywaNcCYGUtyaSJpuVXtacQQ",
  "key12": "4cDR6wJd3HY57YUQGUrrzLeF6nnGZRtktQh5iBrHRoRjrBugbZhSvXSgWnVSwed2ijzGTHdApEUgHiNsUCP5vRfQ",
  "key13": "4T679uwFDkj26arWk9ZLPaGi59D1nxJHXe2bXiKoarajxnxQzV7K5dJMHrjNSVheMmnGDr98GF52oWjRcFw9S8tW",
  "key14": "2rknyVATy8NQ5mcEdjAS3JNJ4HVhJ4zLYaSunrUraa3kYf9yMgYUyn2sWEAhF5p1fvEk4A8KQ54AYXRJZHkCjtU7",
  "key15": "2awigN4pRvZ4DRw44FKGoAAfyqzWBK34nNVDG2GeWB6HCrxdCvHdYVH72E7G3sd9iP3nbWj59knYfgAe2zjDmYeE",
  "key16": "3tjca995zQvS3ddV3ExEiooV5hYiLfnLt5KRGDCjDZtMD6eVY2eEvVYz4RpoRYGs5hVtSGH2X9kFTbYjkgrTtf5N",
  "key17": "52Sqyy3xqHLsQy4oixmLUSMNxQc5wWBLXkiFXcoL4SDi9xJf85DqecLL2ridbdorfG9BempoTc59CoTXkewFRDiq",
  "key18": "RstU5QRRQh8c8p6Qz4925n43JiGoczMy7Wf1f7YzmFUcq3DsDr3jyndzG5Ve77dSGvgyDBgkW2aGEfim2tUJnQD",
  "key19": "2ki7nYcbkZSZRccewhXP2jtHKbWgiyKrNRPPSDMnGvJrnzRP28aSR7NvfS7xaGQXB2mMpH862hSpVgXBLNwajmch",
  "key20": "7bKEVrqsBvYmrTiHnNc8LkY9MH4fgyPBo22DMteZhvySbanUw34sm8za72yviSE1zmYss7zo4QcUGCTSmY2XSwJ",
  "key21": "57nQg88CbfKowAEJfi2JDgLcVuAmeYzHGCsPqfd1g9woouwJbWbkabAwmooUnwc3b9irXZuceH9yHgsu2AuPg82Z",
  "key22": "2Xs8QFCmkcMjp5LoNeGVFPzvTbm3nmuqbGTtj3vegsHJScxhwLMXSxtHKtR7yd21tueKsPwt5M3cFirfacF5FL9K",
  "key23": "ewssSTz49um4L6vB4rWz4jSUnJSPE2tHAdHiTbP3rmw2E2XiPu89jiMcMVjV2pWGu6i5yxxDN46ee5hFNwbeM6u",
  "key24": "2xG1SHMJovzgkZ2zscDXcHoAR7CjKLbReBPcAKeiNdfq9ABVU4xkJ9jW89m82TfyTkXhNjBHbuZVX4vkzEZbqDKE",
  "key25": "5BYxRyHyjwFbsyKnZtty122e2SsKu9HRu92cBe5eXkhBNFq8LovLy842qtW1zYyA7eSK4CF3MUKsmRDAAQzT9DbN",
  "key26": "aW1shNHuVdZmAj4geSjGmw1fRjJxMQjWup4Lkq4eKt98GMEDYigEKRWpqkGG4W97jceGh6Y7pdfQX1iXS847JiH",
  "key27": "2f5AEKjugM1Ltd9G71jug4XooeqmkV3sniXVzM1zCphapwNRZDdfnswpXCLEsyHjooaDUGGYuVn3FDttnYR3aTjC",
  "key28": "4r3EkTpRUmiq92swcPN71XDcKi4yf6bjMASAf4aGgoSMfsFR9qQgT6uRgxYk89U4yEXXgJzPrSRs1vBCSXoBivYy",
  "key29": "34TGqPLZzPLChds9WYFJnaRLiCBJDaJDZXvupTeV4sid6NDXDiRzwbLhxAkrnV7k5ySasA7jD8zEp8xDUqfqqr4r",
  "key30": "629zUqnWnR3de6DoADrNXrRjbQ1qNUqCkVzMcbEC53mY6m4tyRcW8U43jmT6HoDpL9f4UZx8k9F7X7SU4DzkZjob",
  "key31": "2EDU1wbnAwTQ8C5qgJF8EgKeBjfxgtVWfmRtZvEFai5SiUf4goUWaiirUcbPja3ehErdftpr8mAnsnigXguRLDLn",
  "key32": "4YXBZeTwLXMTSArCZN5yWPD1jxd551EyTm4ofjESgFBazaTFi11Bp52edgb7STVRYvKFBLtrE1M6dwGoT8peNfUP",
  "key33": "p3FJorso4kj13RWEDsd2pc4i6tH6EwixhMzjBEoVY6oDoMo8cCJd8ooWbPNCkfFjBPcFSrFeF8pA6y1mQY6X9BW",
  "key34": "yCzTqvdbePW79KCUaySnmCeK8Hij54UNcsmAAqXouHjGjCd6Kbp4cN5hAqBWjCb9yAh8dpmW5EfZP2BAWRVxcqU",
  "key35": "3L116AJgcYbhA4nxgUEkgHjqeM8CZx3bDC48NAwBgkBqHD8CLNb9brRqXmngcYKkaJoFDhXpD1VkunfUYTTvRgBE"
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
