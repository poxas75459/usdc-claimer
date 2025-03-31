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
    "4CDpxbzjPRMTvEgj8XR61UvEQwCPJZbFMUSMDuFqY2Tgt4NddgGcbdk7LTy3iydCsRMjHy6vrDSuh6s1SzXzSSPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1fD1oVK2jYzmCvN4kPF9WFd3Hx7PumGydRs4Zt6soYxoTG6ThcKhqKPZ7pv9KZTXZoMDQ5EWMS525JWnuB56j9B",
  "key1": "3S6iemDFBnZxQY8j6W5ZPPYzyKuTKU5WTtaqvyqrpHmwBpCnrRaHxXq7yh2LJYi2rvhyNb1M3QJ8xV6UtuWCpB8p",
  "key2": "4ezHrSsqtfLd7obaXotRqBKC7YNNQeXTAQe2exnUMtBBw8K7UJfYw9dNMWNSu2Ee2mtWk2gzicsCrR8yCPsgriFN",
  "key3": "4Uv8RJmBph6Z1g7dXzo79fKMx813GfYU8YJqpBBBJcG8fAkHh5mmu2GwkZePhXjSxVEqhA2s6tpARkVSyq5EwVQc",
  "key4": "2zuUqspju3JXng1EM396q5PCfCByJhYFZoUqyy7mUQu3nUWPutqhetGAzrpLNR3JZVwUGKKUMgp9vWh3vN4RbFmz",
  "key5": "4cHVJ3YNutMbT6Gvz689Kv5iTjNNdTMKFDqzT9Je46yNEVkND1f9CDUFC6QN9hV3KFg6vGoyNzmaQgf5MMM2RBDR",
  "key6": "3AkPy1yZ7hHiEivDGbhckaMSNtWEmbmctRQVWk7wtUxTp6QLhJEQNVhovWYmvBWLLGgz76eTuod6HCDQqUq7SiRe",
  "key7": "4z5nFshUAkSLgRYwMWM3tSXhdr2H2WKPxTPJbnwqwoLd3gXQQLSQWFHuwKrfQjQcjmS8aHbWNUw5qa89JJ8Hx1Cb",
  "key8": "4RVqg5ysntMmAZs7Xr2jtmTBFxQVVCdE5tehCiavVeZBJm2JJqEL5hrsT9cBoACHAZgMecUUzxJuZCZE1zEQtqjn",
  "key9": "4K9Pwi7HKvuGtQYtjXwG2zayswrjyerhDC98canjzhNdLYNXoWYoScLfSwfjT5spNWLFGcYJ3PTiiCidBj76HTYL",
  "key10": "pML3DdM6xh8Hm5tWUMHaBVEuhEFaVh3JTJ2qzqgs9kfVX3NmK9XgMjKUVSiLov4jQNThdy17tAWNeLmwvwaC77F",
  "key11": "66TGRypLVrqxDAoxhTNust78apUCZzB5UiRwBkqQrSYuWUQnpKf8o2nk5nXpu35QxEzn39fmqDaakKKCWQsZhzJD",
  "key12": "32mG1NCkbZuRznvMd5wjEx1nxr9oZgwkyLBZerkL9oEstsk3WntBZ65HmqaDx8xXovVQZBcWwnRywXWDFSNfNMNJ",
  "key13": "4cTLNPq3hpSEsZg3tKoJZ9XWEBSEZEN115rfu77Cpa4gNRRHHWkGHDTPTJC3RJummfbzznKgHncSpzyPsYtE7tyH",
  "key14": "p7wjRXuR1Mw45kCg97j7ECdFUPFpgraALzMLhA5zRyCiUWSjAyTv8TfzE8QV5mXSxBp8svmXNwuqXbdHVb4JLe7",
  "key15": "5taUnMy5JotNxKj48aTTSvzY7LoWPX3iPgTjosNUV3dJW1SWbkdyJ5oH4GQe1FUkctNjyuJJghseYMUftN3q6Gie",
  "key16": "4Xdf5ro275JKoE3vbqFnoN3gW3m5PhqfbCtgCdaLAFw8qUZomDR9ncyehwARrjQANJjvycQSauB4Pf3e5hqGHMxb",
  "key17": "ffF9rdydw6b5juFy533yy6RPKDQR3MRwP6EFY48F3CWXsN5Y8WjUywZP3fudb6cLN8EEtTFBmeJ1FSZBqRRxXme",
  "key18": "5QkzMfdPJsyPvXbLfcZfnD4sJ1pAXiNUYde4spA2H9TzCNy3iYDXZ41Upbvc2WHwHdpTiBDttF1A1dx7vhnrTZK4",
  "key19": "3ZMseHKLqH8P6aZpjFA1hrXgsLV7MGMi9Uaabx1mM7MHBG6YBi1JiPDEjpLEdftAq4JsoccWKJgMv7dTJaacHq8k",
  "key20": "5qBNDpN2Ku4vZPzykt9dbrBr5grxzTSdyn7mtX614qZkUFH7o9SuwmUjXEsYz5epqbz2gZnCKAD7UFCjD8NrcNpe",
  "key21": "K2fH42YdkVxXassigkmx6UFnDvyKBuDpALU6ph9Mm9f9hwtyd3osXufHSxaEJogEDo6o3pQ21bNgMihNXyn9uoF",
  "key22": "3GZQbMnAP5oXSvWTszX4crkgG37Gqp2jVhRygmUBvhoAzeXGDjijqhcqyUG5Cmb4JPfBuHqrE4ZJMuk4Q9Lp8Nvu",
  "key23": "2bNK9E6wcZ7QmbG9ugynZcmZLa8caUD9EBcgpacCSPKdP5W4zA4S42fXNbKvV2XdmwuB956f2rbJMk5ox2c5iUxK",
  "key24": "4ncAPADmPhUkJjXBmFm5EfDSh5YKGPdTtuansbXnKtHwwuKtzfbv63XbGYBb3NZYSy8uRrbKrDRzPjVL7rE8jM6p",
  "key25": "5MTFLJBnp8s2s4FYBfu3N4KZuWtYwWuiYLYJkwofVEXrvaY41eVspPyzaikDbgYZ68AUrXGTadVE3t6r9EK76KDi",
  "key26": "2LjUZ6oNZFzcFnSuQUzeRLLms5WsimshrGHJzsFxbikL9uGtcJemKJcA3AScUof1hB3z9dD7HMEUmhFc1gf48YTy",
  "key27": "2uYgWKQSZZdsqEwB47HrTodvEjvsbgqXRcB4MoK4Pj85piieZXFckJHvSifdftKx7yz4Znfwkx2f4u2ith3LfQdr",
  "key28": "4gzhnsMmer7VungtHjztN2uuCFCB5QnKP4xNetm2xjsMR7TChRSPdS7HYpeb5qtyv3axdz6wiceRHVustF2ttZrx",
  "key29": "2HaXJ3ng6E77bvgURvc4S4QVzr8CDPA9yPcsQQqCcdp7pGj4Qo4jZLhrmib4x9B1XT48MNHNLWxwQdwVdDSTFAti",
  "key30": "4xYXzW26vUR7QfumP8bKwMagxPxd7GQBieXYdSSpjPtMe6HBX8D2Cij8fk1FTgnRfUgX6AcfZwm7a9Sfw947N54R",
  "key31": "3Er2ohkLPuaHUKrrMyjASpUzreVEdrioK7c1tBQK5uJEqMTW3AKC7zJiLEVFJeiTM7n4LJFAvjL2pE1EZVytqz16",
  "key32": "62Rxm1PAeNKqUVATP4FD4g2NtmytFLLRmBKaXhH7RPds4ypSnM2suc1DUW3aqCCNpE1MTuA959dCxBqXJfsVy1dQ",
  "key33": "63Wwi84PTy3eyGc28GGKvm5h1VsSiFZHYDGcEQo1CtLdyZXuGzhEAhAjLCqdkEwcCZX7keAcfSpdtbzAZaU4V3NH",
  "key34": "4HXhqAFSmmwDpjyrCcyiktzJG3fx1a8PxkQjzdtugWyzRYgbPJ1Q2Pq1tJbgXUaWRgS55YLVe1nUUcohCj3JCASa",
  "key35": "38LHKQR3QPj9PL1Dg5RefdADbmyuCqwx8mSzGHTKZ5vQJxXqHDVSR7D1KKCrPuMWZBhLYy7re2W7E1DDLFGzXhnN",
  "key36": "S7kaEGg8EzTSKYA12ymaQ4wix8Ud4m4rCVN8xpWCF57hPrKCqFWCCkw9uMPyPjTqp4RMMLTZGWUhfvzXsFjQo4K",
  "key37": "49YGwniTvbnuRDSBCK5TMYAbwcFCBc8tMnAgMc6FTi58hqtSvEBRgjJGjuQRcKT3qhoEiUdjDRpjFcX9Yuk1Bd2C",
  "key38": "2P8rJYk28BuXT7cFX3v8z2A19r2DHrVsZeVKBvbuRW7GKhLumQkZGZaMBVjGPqzKLjMC46RpREhdEEAL2k1L66FH",
  "key39": "4XMxEBf7nWBBHSuNvWHyPrmDmQsQC8iQXyf5xoQ9fX2SSy6JdVTiVnqUTYzGo7YefLoUjP1dsqJPRJFkV8xCFhbK",
  "key40": "2y22VkfaifRo1r3HCG5WtY6YCxiRnWtKnNvq6YKfQocjxrwfpeSNUrtic9i5hc5PvgNqs7jDRmPbF2GEUVh6tZA3",
  "key41": "2cmbZEyZxHoR24Uf1wQNKMCAJWppagVQFfD6pna1BcwtjNEkdyBmBj9MLmBYKgBhz3LvUDUfcmu4pfcsAQkrvmfg"
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
