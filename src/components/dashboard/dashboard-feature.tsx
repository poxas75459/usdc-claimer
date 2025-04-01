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
    "3FNxrBvbwbc8gsd3CvYmBDTzK76JumeAk4foEkfPSYyy3JdpisDHYbpkbMYs16zHEABrvhrvVDXUbdCsw1ugA1fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TMKuhwJeM4jcmywKNqZBYpPsMjChkwfBJeFYBsKFyjWFfy11ypiewzNoCbmXYNrxuKdyByZ9kv6eLpnwpZKZdR5",
  "key1": "4uFmHYLCu6xGjCUGwURYUgLJC9wvd8PK8YHShoa5mATSkukx5GyyVUAJjFTc8yLXuXRSmTWSTYU6Wm8FyqzXYyZJ",
  "key2": "319L8pXSoDGKKFAFL1X4XbYiZ8orX3JG3FUtyStbZ7SW8TGyTqe4hjqSKnwvTLHvwoqS1NPt3pocnFy5Mk5kFAtR",
  "key3": "3fTM7XrqXNfAxKmoYe9UyQCGKxxD8VRjiTvoCDYxjfjTxD3HVAz46AQk15NYaBmMfcNm3LekWij6xA6DHpesn632",
  "key4": "SNxSjcvshF52H9FuoCUoKrHRfEXXoEyHhV2HQbcg5LszsN5fpTC6YeBfyLo2YZW9ZLbsvcEGqjnWWv3Dh6KgMNm",
  "key5": "3FBfFhdaUgwL1Qcvy1SZKY6NyytcGbmoQk3TsPX7Mz3C1TotFnK4mBezmr5Kbv7TydbdMBcwKaN1CGADYQQUEAq4",
  "key6": "3XKmWR7G8VsPPPDBdtCaoQ9KAYngPf8bCtgNeGNg4pD9qGj1pRRXFKvcHZTnHP58Ufbx58ef1LA2DxZ5v2W76N2y",
  "key7": "3bo9aJ7XEvPgxBeRwvCzBWZPLmn9zNC9tTTt4iWzPekjbBDiKVDMAdwfUp48yUBDtYcz3ym1tCNVHjjU5NsdWddG",
  "key8": "2nX5azyt98fg7LDJJTPzRaYCXb6JLv8eNh8jsJfJD56U8bEK4FHC9isNSEtwjqgtFdx8AjXpE44wHY6XwTUMEYKn",
  "key9": "p3XZPRxGExtRhyY6L6JT3hag28JMaPe8SV2noSf6S3U9RWvajBJKUjFiDA4PpZE6tin6WTzkfqaaaNsWwp54Ubp",
  "key10": "3a2epp14M8dv2tAZYCxiXwRgQPBFjt1wc7vJAtbkAAKoBNL25k4ZVuU8xHWA4sYegENh8K1oixBkYNuXiCgTQas6",
  "key11": "YVK2ssZyZxC4QSq7dZipsx9zw9F6JFDyc4CtFgUAaYkGzcbKm1NTCVGbW1UQwU2wQ3sq6bGi9TPQ2279T2u1AeP",
  "key12": "2AsQ4x4fCWGXQrkCsoZF2LHUNLKPkW2UGvRfYAsRpxVDUJa9s2YkpJCVErZVxo8UxZFnbFzQoCyjLtquUskLGkC5",
  "key13": "63ZtdFtzAE6oxWy93LXCQRCPdsqf3mt2BAwFjZENwmD1syobLEVWeML6BqL3ubRs3WkLwQu8q4w4Yv8HF7yiJTeV",
  "key14": "2JDC9vhyNxcwBhK9DtyqsFvzob6Zxa3s9o7iWEVu7GBE24frpKtBge7DWTQ9sDnhL8Z2q4juUMTJoopv5QXZhTDL",
  "key15": "3Dw4n8Sx5Wz9GKQVfJt49DkVqiS5y9Av6HcVaiN6qeLBr1UfGFmFDJa31Mt8sTfDgsnugmC3rfYuSYRv39gAdouT",
  "key16": "54CSHExqf1FYQ5N5QfFZdWfTRxwSb64eZ9rxFRMKB49QazPSueBQo2pfR2tmkNTVyiUR4q4jZu3iyR7zdTKv3vZB",
  "key17": "5WE8h23hSvYEWWpY1UkzLcko5K5WsRoCy5SBzUqrvvwUMeCUyEcwtW7k5rDrXWivKzDXW9cY9Kx7F6hafWgNLmAr",
  "key18": "3Vixi2WYAtuTfd5k6o9n8aqBzVDqruj3YPy5JX1yEEFS4b2ytKHRVH3Guk92xqKB8AfUHQMRCWDMTyc93JYs3SZV",
  "key19": "5WuLVRdX1k4hgFBtfMe7Y6EdyJCxaeQpHeTEi9uCYi6dQwmcnB1yVAb6dmUuEdnWaEeXZT5XHSFyhtDuWYiHVZwa",
  "key20": "66GfmotNw6CRmTfbMBLFfv11Qp1oDKzQQakQK1AAZSmKbexScGzEx1skMZEWbuzmYP3kkVUkBAhQ1abo3n7yagd6",
  "key21": "2roWeHnQaegq8zVDFxDELEAymsjhRorpojsEc2McZ4i2cvtiwPNRr38csDSNfeZxKyCE1xicfxPpJgRHtEjw4C9C",
  "key22": "5U4JNH4uhq7stsF2LyVtiFS28xZ3RUyAkegNqYnHtDJfFUyxkaZxibFfi6QFDvADyThdSVa6ev4JK9vMGm9yzsCg",
  "key23": "2iZyu2QqexwVsd4g17wVeAPtSj2Tcvkm84ptURkK3xJ8EKC79nwVry5eSdFg1EJhqkYuhy7yt9n5VK5ovBgQ4cuV",
  "key24": "51fWWEU2fLmNzJ4oTubJjmk3zYMdcUwziavTmzc7ySXg3tFHuVG2FSNyx3aMVtso4ivZrBK836Td8PGqpU2fzAr3",
  "key25": "55nprNERRXU8GbmDKATC6rqSxc5MCdV56KjQVEjYdUWV1ZMtxMy8oF6UAEgaV1c91hjiGZ3BPiHPqRys8o4qXM7m",
  "key26": "5oAthcVVULFwLzVsyq46MCMbNQpH7Xu6Vj9ej7BG46MYMXicGe4GDN2xQZQCsG4s4oU9UjdduKfnT4YmDCJMph4S",
  "key27": "4jscefrrMsXkWSaxuFTEGYhNhaxkGqybGBn3Z9w8kubTUmin8zCQLZsxuEuqbTYfVoenThFsZUfhLWUxS1sATLWZ",
  "key28": "3vbEkky89hVoihnLaGoDUjiJ2hyKVAxZiQhcdBWKbo1b6Jw7dj1Kbikg84G1yEugySs8fmePLLueKyvQuZcYYUJJ",
  "key29": "3gJHSBnW96B4rNWB2y6NJLYvuafqhYWUH8nuzTMxsYAfpBK9tiVVoCXkiQHfdL1ftaXdPtmNPpWRk8Kpvh8LwxEi",
  "key30": "29FwkH2rgKLU1DdCfsWn5SezMiD65pWpPJRcxYA2edbRhU1AGZtPp9Em2sFgUTGEsY8hFwFS8Y7NXY6udciwaWr5",
  "key31": "dj34xneKuUXZkTbtEDUJEvGQW2yjwtGBUcznzhRTF1FU4LJjHnsXAU6LyqKXjTF4MFjZNdWn5N6uLcZJbc2S42R",
  "key32": "5geJ6LdZbqJH81SdsCMGneCLvjjsVbP8CdJSmChqEtNMrtKSN7cGRkQj8ZbvkaZVgZiKbS6SMHveUM5n6i9ZFydX",
  "key33": "5TAKBwdmXAn21GdTU7gLEugWcoegMQPtJ12WACTnpTNdwpZqkaoN5FsKgTvvsaDHnkK5hsaz8yYAgbmkFBCEWEjE",
  "key34": "4Xm36YTPCh754GrGJ63JJNn6U573rNqxAp2FdJpcNYUQ7J79CMPb71Z7QDp3ubRctsKEa7xk8tXPc6HcVw7MW4Kp",
  "key35": "5EwciMisLRHDTQjghgEdThnp97QjvfXFHnerTPMcpGSjnH8jbFvxZ25Z7hogkL6ytfPSZnDCKBtXCL8ytedG1fYY",
  "key36": "38qZ7varTy9U1gHbzWU9JbqVVEDCFqfWnWy44S9s6r82MuMEFpAhTwajJhWUK1xQxNNk7ZvToUz6rYRjZDW4LFRN",
  "key37": "5NgPeApitgnv8y6C8L32mj3EpMKW81GiruoSGhCHteD2ZQhpgAuxJahgiVQKg3LDunQzedN3j2KWHF6mSinXcg7M",
  "key38": "34KtQ3RARfnhY28S4Kxb24tNXEZgnddjVL3RwPAhVEUWr5hXbWnz7srmJ6gBGvSi1e1SiBUnbru8J6JaFiThKdgx",
  "key39": "5z1BNAhp98tfFSVQAo8RS4fxMZNmLenBqPtkfrsZ1V4TDbcPPU7wZo8XTrUQY1oa6CQEiVuTwV5hPkHNzzvNL5ni",
  "key40": "3UVhU9S5JGrZSe9v1gerg1icYagUzUAqgm9wKBydchRaBfQn1SKHLzXiDDuCn3P7LngddrCaidMWud6ojQiG1PfU",
  "key41": "34MHtGBHaLgXwUJAWmFvUcns3iFvB5DRBTMAu1QxBYBniyJLRU77GJn2CFQyGpVYVQUDG44PcQrzrGzFKkqc4xnG",
  "key42": "4ST58KtJA1VJLaPTkm8RTimbAMcFVfL2Bh9Lade9xuLaqJVKFPpFnGiNQyGYbDLi34dpjRY9ndcTURW7ewSzGfEH",
  "key43": "2DxnMjLoLXU2Je8TLeWoffxPR2b2NosPg1hU7L6J3bT5Ny7CCziT9geKD8eNt5Y4CULdLaKWhwMyyrNUtrcZPWzV",
  "key44": "43jh9ghteZu9pqUFbHfHNLDCS8FxrmFGE7jy8HKrTusGvgCgTk4odnFBZaiKWQJydwmCB3dXLpbWfzVRW8MFS8PK"
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
