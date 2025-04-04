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
    "2QQzcNAJCE6oYwvYNWtovcQP1MeaciVKM8bfea86AC2mMKQy9kwTBUjJK6WB3sZuea7vr7MqUWtrRDwWgE5geqZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNeBNNx7Fcp4ZpZpCAmTpuYC2G72ZnngXW3ovPRGhjCMd7zDCUANRcy1pun7nSn37yb8WXMs6SkcfJoqTWPJHen",
  "key1": "3fY1SUZrRhF8kDwAuDV1QrmxoM8rx1nDSR5zMPiYLxJucXT3wSmvEHHzEwVznKHyXNjCjb3318sQ1FyF5dAb76G9",
  "key2": "3KSqkUEXjnsHGkrqFHJGrkmhQEgkZHgBEcoBYJwjQAJcYfTZ2xjesjcHegxYgpntsjQMLjiw5jYeBqnmvNpHNy5K",
  "key3": "5KxtJTa3wJYV2JrJVfZwqStpYFBsYsn4SeXHpWdVQ47gqFPcBR9W92YaJ5ig8dkaam3bMxQyZSjxTbJz6m6Bkj62",
  "key4": "3ThuCqgzqHbiguPFKY5eTDMCVvY4iKdLSFsXUC88wagfDu5CxdyE9ahax5zNNAj4p4kPYokBy3XeDSqXvZa5jR3x",
  "key5": "53ZivvLKcwqTX3TvPjUWws61jywVrEeVSEPxcdegSxVwtBNB7z5RtdxEDo9QaN5cHVENukiaZZJDYYGLBjH4TtrT",
  "key6": "3cu3yZ2LQnXnQmsvEpvHznEaFLwvcPSyq6RgthwRZaHjyQTxch9CqmS3sWpE5YGshg4j3x3v4thq6pENBf9Er89n",
  "key7": "4syEwpcNoTnEAiE9jGua5exPPMJgG1SaRVhwEPmGs2uHWTfgSvaGXuLzeJcBxdEVG4FDk1zJUuToa4LoKckpoaP6",
  "key8": "4dt5KPxXeoMNWUtBkZxqpPvwr6vnZ5s2inLwrxJmtqUDgJko2zWYSiX8RwvEfCyp6JaJLvTwZu6RNw54P3AkWqFj",
  "key9": "5A44hvDWJfkfNWkN2SHFygo7vBcKaAYiz9hmKc84rwE6PRBaTmzwZmqbNG1ZqTLqo6RGDPHppBvEok5Dxxh5V6Ag",
  "key10": "F67ndVVTQBDirhQvFUTPnm7TSiRbLDWXjBQpyATcy29yNZs3W2pX5Nqj3nESYYh9FLeif7M3T1WwNpT7tJL5aJq",
  "key11": "2T7kKz44msznrF5vWrrRYZBAR5qR5XCDvAoYmwwQkn3jihzZ8FGCum7sdyoDqoYUaZiWZd4AkXHqRY8sXxgEexBH",
  "key12": "3dtDqoLryMCHsY3to6iBPZinKZ878wy9EeoHDdTjnzo8SpHaDGnj2bCixm1V8JWj67WVg97dC8bTTTYBAci2ass6",
  "key13": "2cWA68Z1KncJr4Lf1kPR96rJC5KfUVnsRNTRNWUMxGSeBRp7vV3xjRwgu2zJQRrPA7ncFxBSwhdPPy8MmoYJtU3j",
  "key14": "4ZLg1GBrRkMLBkSsq7N1wwP31tH4UgvvAWmLyhjLKnRyEFrnTRfbzHucAXnTP4MP298GvzzYNskimgLXP8443fJA",
  "key15": "5FVJERanc1b8ZsDPLnB33CTtMrnpZYgbKGnoxpnoNKJSEDpZHHiFQPtDivnj4BkoA3N5FS9FyTtBwTg73NPgiGDS",
  "key16": "3mvDt18UCZCqmai3xkRtUxfF3V8NHn9zXy4wFposodfx65Wj4vTC9jGqsBxAFah79ZhnegFmrrvFMFBkVYdwDY4",
  "key17": "4LHTeP6Ptw9XMnd5NYG9nxh144LfX1GQ93dPZ2tcubwrYHG1zWy3kGJEQx4ScinLwiBLPqgDZCUKNtyqk8h3GK99",
  "key18": "4cNeQKuZCgQqMKUvVdfXRp5enwvZ4pRQfhro6mJBphyrrBXbMvDvSQAWLtKi5aP12hVCAkpXWzbs2geFzqZ7i2pR",
  "key19": "2cH9P3nngQ7ydByDqhKB6AUaTp1eMjLkP4zoTHsKBpaBXQRnmJyngsAaQJKUzZejy49aQ8SY798nDDeqmBo7jwfv",
  "key20": "31ocaJbL5G6ziVHZAzydc6CKy1AMwxgb19n9qC6rxsyQCHgJK7gQ8xZMkyMexpHZUgK88ztXwWHkhN7W2VKnaNXw",
  "key21": "4kuyDCeBmNCtyEcWqAiUgzyYxoQcAzrXB4LPPJFoirafQQB9FRT9y2QPxwe68Ldt6NXBY8ZM9uRnBMpde3jUXLCT",
  "key22": "2Tk3vrCQEmsizjja6SeaNZxNicv6QFCsv4sEHkC38r17bsuF5o1ruG9qNxXpVKSovyxizo4Ut5SxjaQ9d5iMZLJz",
  "key23": "4nZoDWJdfy6C5w6G8qremiHSyiMia5Y4ZjniYNKY9fgKvf1ofTsu4imQg6gxQ9AJ3naP6Fz7jciaifE5BzBe7nDs",
  "key24": "3nL4dKTAzNeBKJ8VwJ8UTbfumDzdL3cgafKyUtxNRNygYmaadvTckPdgydRrSSo1siRCdQyKj777r6g11njeNy9e",
  "key25": "3B5uQKJrc2tDimbCBfBvkAPQ1dcK29pywBe3mv48wb8xq3TdLXrfYkK51ASR2a58YkJ8p8q8tM9isFMYnPjbxA9V",
  "key26": "3YDZaHh2G7mhWoqhgXtvpnZreu3BDtkuzqHaXw1sqYvKdugTEhw5eSyswRwUrC66aYZjS5zJ9b6j8gYuqWYL78Si",
  "key27": "uNswVyDPrhe9ZgJ1TcPMhPZNzhGXNcsRaAUFujCZptBdhbWgbfFn1o6A4bFdEES741ABqBsHDxcP6rtu7nUwUAH",
  "key28": "37Xnj6YA7qpZW4V6n7Z1TyXJFjaVWDE85coVygHxUX1bnmrJxnC2fqjx6g9chGG2jYCvr2bx8a1igSuHDs2y6guZ",
  "key29": "4W7JvvhuySSnKgnDJtsUUabrGyhrtV9WwtuzKWBhbYEk2Rpt5VxZsmSusETW3B7uV3S2GcqB7RteCJGZnAVEqz6z",
  "key30": "3sLDKyuPSkEni95k6dUuHbVXHwJirVRyXZ9Mv6ABqu8P14VPDPJ4yh2yD9M9yQiinkLKNwfo4s69buJ2cMQ5yDEw",
  "key31": "5RXdwJToGhUPP3FF1fGJy6q6r8yhGWXzkYAGPWvdiSiao9GotoWoWTZLaV1WC1RfGjsf2narnyN8iwyVPsLwci7i",
  "key32": "5nomowKKAACM81fzWphg2SU9SYEGtfmWjLniozeT5xLYFqqoHbpvy4xw3ZYj28Gpo2m46vkatuhJvkSiGjyaBV7S",
  "key33": "64C9MdjretvynpSvfFc4bi7pFhPr9rqQYm8oYNN8pHbtQSuDvSBHy8meKpkTdMTyG4k7jbFHeSx1iGXr3xbruSCB",
  "key34": "6c9fs4S3V3iRK2iAUKdbqVM9ppBE72QCQxU8DDmeRjzbggX3MfVQMzAfrkKCtauiHxLcHe4H4gKQBDmNqMNmUoB",
  "key35": "5ZgSC4xYWz888h9hLgJavwqkfpJqKbsrJTMZZqRpDJDKBNy6RHAcesT6gF7CHigDaRHGHYCUYpCFCzFXMjP7TkEp",
  "key36": "5hbciap4rKQnwJZr8Ehg74A6wn5EyR2NkPu2fuSaGEDvtSBoG5Kng4LxRNhu2k9RNgMXim5y1kQreAgSMpGsvemi",
  "key37": "2fTw7FD7tvUnXxDvL1TftRfav2K9VTwoFUL3hJFDm6p1thPkxZX2nAdAFDADj5hqjwKQrkr4CVtKoPyPWMDQq7MU",
  "key38": "ApgesNqrJx3xVCJvsnpqZwmLjqm6za3EcFUAuQUAwo3Zzay9JLBX1fxTLVQVyDF18VSE6QgTjS3fJFP6nNXjJU3",
  "key39": "3iCFfPEQfMDmUaVz2LqZtXWMXhLpSs85ksTW96e7EdSC44VHm6SEqcZ2UY7UCJ6ZTGF3hTcE5G766J7qa8dvHbMh",
  "key40": "5ESvZ6JFPxvg2z9m1WWgfRTnug1Z9XTZ34dsW8Dd3e3phainEuSVELL16oDBH6SKKrzV3eZ8Cvhver5tPWFrP9dv",
  "key41": "2Ns8xT4UR81eVarMxriqRppx5gHiuV22oYhUjRoMmB4oskhdRuDUcpngLC4tLzhTjqg3Gq4nEm219hVP3YbHecCJ",
  "key42": "3YTNVP2zqj6sqx1wzfAkNxPMd2gztBAyHf4W9g19G9ZLSa6rjwijZK4oHXUJh6NZygaZS5a2c7mS6bMh1iXHBMH6",
  "key43": "2YAqdUtQzV9JgYdyLjd34VeKpcC76NtoDdV39BWGRg8boFbQXqzQ1X9tqZ9rSjGa4mhnpgQLd1LB82LFtXmatLxN",
  "key44": "4iUNiHn5nJEfdoonGJtb8RZhbEFQCNzjA4sAbBLgyoB8FUuXwywaKhWYnMs8HLMBoVs42G2x6tjwhszizyyTtizV",
  "key45": "4ygQCF7z2HgxHjgUf3SHi6JPenp87pVpUPdEVfYRBW9qmoZwN8hr4r6fEX48t9mQ8bTeKMwUKx62ayrL9txPWtUL",
  "key46": "j7tB8NCbK5TUqJm6SrvXda4pYV5NwmUk7EbN3vQCgjfggvhTLoUP4X7ciEvDYMmNBPU42ntPuDDB3gy9M4oe2SA",
  "key47": "2qvc5uLNCKJghQX3GrDaNbKcNdHmkEhyB2WG1heZdxgjSoQx1htzathtGn3GvJXjjDUbxhsUoqVLyJoRdxs3iicq",
  "key48": "3TAr8CzVQBapf4LfZeXjhrmGusgijDzBFsmWCH5J8BSkV6SSUjPHXQPYJG6tamg7opaVS6xBePaBJW1gAvmYPnAF"
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
