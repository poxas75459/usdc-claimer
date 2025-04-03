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
    "3FtC2wYdKWxsDJa9FTLoS6GztzbZTLVu2Xbs8fd1vZ3hLi59ufqS8DckDQmWkoiz3tZumkuC3AjUaJqPVopDwGJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5is1aqsjKrufVEZPBmcCxjokm8fQTsAKZ5YASRA3X79eFTktvYF6ziLpcd1Yr9ws1QWeo1cyDmLwbr9epGTWTJto",
  "key1": "5AneUMjXcQnoFFLUAVEnnWpeg4kpbPFqG9LLcEUAMXaT7JUfNLTj4KrMvmuYCkkChyFT7DJd7Dp1bwuikaSj7cGG",
  "key2": "3S3HskTmBbh6Sj28daZhP33w8vbniZkgZyL7dV5nfbwynhhUKiULfuVxW3EF5rDzyM4aVKo1cSvjVJzEy8m5CG7q",
  "key3": "U4rCRJmjNNJb78agLBGYBqr3kW2rvrNB9ye5p94bGfbeBPTEgxizg6nBTQUuahjmPRBUSBk63ZygsVwDn8vf4zw",
  "key4": "2RSsEbawKvn8d64X1fwN8BTia8nHHadH4BQp3hZddnW6p3qdvagJ4pLzCqGbhZuhepuQ7eHhN79eqLBZmQeUP8Tp",
  "key5": "54u8Dbcgu4kHmMeQMb1N4DGnkt6YeRXHGPW2kE8Q7rjHoakMhKDK9uDonKxgEyUB7e3eXq8xsv9EJ19LP5LsVqRE",
  "key6": "2368zHmm8nSjQwR2Mq3jrYLd7aJJHrK3VHD1V4Hyp78KnN6ouAnzrEVGqhz35dLTDNpuX4TPbhCYv43x5myUYUHT",
  "key7": "2YkUraJcvbw4EW42uNboSLZscvQDqnK2LJGLujkzEFUqYuTrybSjc13rT4tyhyAmpNAF1VeK4ro8kYjK9oX1NHwW",
  "key8": "dNj8Ka7Uy9qTEsiCoAfr5oE8Rt9pb8wwA2H3Xxg4VzJod4UVq9TANdwTHB5ihg5CDcpM9XyJQKzkxtTtKGQUSSA",
  "key9": "3r7mbomJ2Rwe1NxSfgHjBYP9R29cbLHqjJXzSmj4TEMDpLNVuQatkUpVuaC2dc8uAmdtzgw8AJjB2iVESEnWcTq4",
  "key10": "QyT8PAwvp5DxxRVwy8GzHNvuB16JAyNuwFNK7UBZepAMwChEc3TbKYNVHD8C5oufZAsgjpoUqb5GC62rF9NrFEr",
  "key11": "syygoE4m1YCSZXbZccAcKhHciYiEqfdt9aNEPum35hY4uzDCiMiPw5NDRNBYi8YGzY86dNW7vhQ3weMYqYyjGqu",
  "key12": "2QKerTXcBDfDwAj3V8DxjRE2gtomvNY6wXDc9p5d86Z9QYQnfxKLSEyHhqnBVnmkPTGamT75HCTCSJcqsk6jnqBc",
  "key13": "2dPExKvBPx2exWNPest7TmxCyBkmQ5Bp6PQAB2ZHUkS1a4bQYSjjr3ogdBXLPSSb4YpmkgBeyJV2qYJRs81opww6",
  "key14": "5dDh52usPqKP5D8uBtG29811DvNT5udZqdEbm4pEXfw6fXdfzNXcTPVRSrZzFnJoUuH3my3bWEzUasqXwEFBb7Vd",
  "key15": "5ewZkcYzLR7gdstsNineq1eRMvucfYE9NwfNBTfXzh77jayxvet1PCuQro99GaaTNCET1ztAyNVjM1coRPAT9xmQ",
  "key16": "4HY2z7YdfRS26L56ZPQqbgQWKZdmyJDsWUcRc7tV3o4SzGxiWJ6WWzDsyT5qh4FLVpMAYn6aBwhXoDfwiVWqZrez",
  "key17": "3VJPm6TbNGj1MX3t7JPKacZRZ8H2Bd1wxU6MtTTkAcMRVPthRBf4Ai4c1uWgjGNwryvJ73steWJFeCo8JSpubUBd",
  "key18": "2VzHgsAkZAZcKts1AKjp96C31AvzwgurzRPjqoQ7Q2aSUUQTFT7k5zRaPPWn3gJBPiyKwvRwN91SKzHX3ZnyL4vP",
  "key19": "3yx3ibnZa3Vu9C4pCTa7bchcEAYdw9kHVgPL3Xu66eCACbEe8vFf6tZ1wFwJVnR4KQwRb1crFZsYs35FNE7VPbfi",
  "key20": "64tvnTe3XpwnYyzssxa8tf9drrgMUSpAKbjEs5tDaiMd8p2LcnHoATGJSYwSVxAAGNJwDHNjV9nkNeDQ8rtbvoWm",
  "key21": "2XiTb1zk8kjkBS4PxjGNa7TFxdArG732DiKbu8VdKw6VuXrXqBtkt6f51BWUrjW7sttsKpVVvMVpR9qd1i4UXv31",
  "key22": "2jmdyqUkX4seHybn4LQ1uhFH6Ws5XNJoiQVop6xLsJBcS2H3FEr3pcxSSXSys7KgCPPfvPXxDKw4RddC4NM4h35K",
  "key23": "35ai1D5sSXQK7VYcGsnmFtzuQHBq4Yf2MU3mLMHMVfuuQuQ2yP862GXCPJBiE3urZgXv2KNqdaC5yQTAw2PWupVg",
  "key24": "4uNsa23i2VD4miHrNxDqZp3NKGc83GF852t69keRDgJ4C7m6nAPxKBtnYLAk7MytKU1FXCYcnvccDaCQgz4zzbR4",
  "key25": "rgbm7q2hxADisF9oFSqUJXmHtvch1uUENhQKsahSza5duDNy1fjbkweX7jTauANHayqZ6XkEkt2QAHDM1EgSyRU",
  "key26": "2HcEEFeJF9dcDemjVh7CZnq7ntS4AUvrMWRd3wX3DRW14ktpshJMtyWxHAbpNCUsxw1qXbmzu7wD1RJymMgvGrYX",
  "key27": "5xYARnUzc8gYUf4ZhFqdi1KxBf2uJwhVaRTF1mF26gXxehhQatYHyPSmHix8NCKqBYuun9PPqY3D3BLGtcUJK4SQ",
  "key28": "3gXyxsUHfWz57PzUYBr8wXuWJV3iWQgAynffnN1oEDUssh52Cc1iXNCMSYqihbWdEM2TPtjY7uE2LL6MLA7XkEE7",
  "key29": "24uGhzQKkuDo3pZAMvRkfpfzaNbrms1orZtm6NcddqodZvRg1RZKSWK4YW9mcxBftLVc4JfFrZ2svyaPgY5X72eH",
  "key30": "5Tj58EtsNcWALfpyS8Ehy9WXWYmWw5PRd1nkh9MUq93zXHiAnxdf7W1S5TtchHNwi59CRtRWaYmuUS24xCcgQdFC",
  "key31": "WcNA6ACrFUE7vU31vzaLNuyknJ2Zq2pSRSexwbWWBd7iZWcq4FzmvbW3zwHUWRYTTa1kYivQWW9zkgFUijfqwym",
  "key32": "4k2XP5mn6RPgVeZvBbgHoRKucNG2SfzAGujazKcVYVng9Qk1MktJxU7jQAgX54cZmQaEvL2a4yRQde72FbSnTdBG",
  "key33": "mjTAAL2GL1WhHK6toXo4pwRpcHTwEMAQX3SykEQeVwSJkNPWXccveQXRLuJ8vcW1D9UuArdtWMocAdecdJrqF4f",
  "key34": "4ASXXPBSzfWPENTwn61aiPMrevHju8jhmWM8qFKVT2mpzEiTqQG9xch9tckY9aiA1ezNCwxG1UYYe3zRqjqGSfd1",
  "key35": "2YpWQvwLywxNsWn9aTJACK763LNhHcBbvrQUFmg6VzPyXxj1uWh9VdvG3j4jPbF7hFyjms7j8XpXZGWcLoL4f3h8",
  "key36": "5qir9vFuYH2wkmX5bi3HKS6dq3t3i1HdYSrxy9bsvcZZFaFNM7BBzEwq6CNYXtV5hREqnRC5u6qY41svD59Tu9x6",
  "key37": "56yL763zZ43aj1DMoWVFwaDN3bpWxpj6Da47ZAy5sXvb3cmqmwDApgPsuYEJVFsDT4RxfvUGhtyysoYMwnJp8gXq",
  "key38": "2dgUTHAmxrMRGM4RwLEtv14CvtjeeWfe7N2Q1JThEFFmx3c9ZvZf7CLEjWCUHLUzDisJh3Y4TYCoDrxUd3XEuDBR",
  "key39": "4rHkofsCvQK5HHHeqqF4Z2iQJac8U9ga8YrUaJNWgSEVa8VW22ZFGkYEzPzXsMu1gVhQvVtPRuLj2my9V4GtgRB5",
  "key40": "MJjs6LfaFQySWudePmdwpU2GmGEHKi4xx2NFdgnTDSJHytX1W23MgH6ajBYTfRvtXWXQomWmy5793TACz5cRu2d",
  "key41": "3eaRuGbXpUpg69vQJvrcjJVGJcxKppEDhsT9MkcGLiUKY2vvPp1uKWRpE3jCEZNcWqRYveH6xc4w4V9eDryJiMYV",
  "key42": "FvGoPAcirm86bsn8o7X9yrk8Y9aKkc2sgCNrpNDXDXGXVntiP63TNyUwaEDt3yBP7kaTZncjGmHVABPYLskZd13",
  "key43": "5GdChtRo4tUUZrVaPBUGyhB72aZ38BpByf5Jn5te7unMv1DNMUW1XcAwQpy3XUh8gGe6QXtdU72YndAmcfn2fWPE",
  "key44": "4wWqHCjTeCFpD4ZkxZAes3KS5NsVaPnonzNYZup4qH9SB463VFUhRC25zcWMFJcgruakWKKadz9RXeGSMuvKCrDt",
  "key45": "Mo9TS8vchkZJqkuWndZGWcBPW2KqTtp7pyzKpRTyM1yyCikYLh5UUERRUzHmueDSF6Y3sttgZLFdL3LJd6MPvXD",
  "key46": "5cBU2q4ez2SAJFqMEjv1BpEzc4gwNQyL1APpwwwiE6DtRVfFuyttn9mU65USKK96VAKgVqZ37yhtcVQNe1MzhgQH",
  "key47": "3nYK3urWXr3d8oEjWNkU5hVWBstCjewvseaVBspEndsycwBmGicgDvfLuucKdjDY5p7xwiwNq95nwErm2nqY3NGQ"
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
