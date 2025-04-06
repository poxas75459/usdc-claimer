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
    "2VHgrZByBopYa68SEmd6FrwFnTbFovrEKnB9Uxsp1TpmquMfDkvMcDfFkGgUKD6nSHKsMVpc2cDLZGPYUfUGjCUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCsEWVfDQm9fH1V7nh1onF9bSz7Av8zEvLRXuUrJyR4diVQ5tfqwTaAUBTJuZmV5bhtu49FKg1ue2r7gs4xKFhR",
  "key1": "31E55eGWXjkGFjqhCnVJLE7FspN9mBzmiCY5FyZFWc4xtnTf3wuV1Ci6UJPhJiGxxRRH9T6UAQZpngqXrkvZ3BDS",
  "key2": "2NW6QCduYe6P7vtczXv3GGdb5T5YCkkRt8t4FNjJMdtrtyqS6kzAPivEtssXddQy4VeVPwsXbDx6EKzetibNA3UG",
  "key3": "2L1C2oqqzUVhrmQgY4EUYouazsGhVzhgev1B8YBKphp9q7Ez8aUC9rmGLWBXH4s5WxwTEVd4K8Hk6APoBL1bH8xT",
  "key4": "5mQKBrgwpEbjTyyqfmuduQR1UdkeTf45xMkVWhGje6wRAQcsKxfUc8sSBvA2sPWWVBbtgkThTh3HCyQuq8qmZ8Dw",
  "key5": "3jhMT5fxxRFk8gL7cAKQsiTawxDJae5MeLHXhABdvh6omFoiu1wSdYG7CxtmDzsReYqXJ9E9gvvEqnih6kPLwdAn",
  "key6": "4m7coJshVKpmL5pdFYBLhw9xTGnAb9tYwgQqPWKqZaNCqGgZ3eqcyxuGv6NzRPiXvHMixaYGDk5cJLwb2PBjkM8B",
  "key7": "3eNP5nUMbadnsrpungXGgKnexqfvsbHf74LF8ssnjU9Kpt7Nw77B2vDgb5uBak5KryjBNGaHNQwRpjUiJU5QHQ5v",
  "key8": "3FwcwdrhqSVt7HYkNz1RRxTiuLhEstGL757MjbimRRoKuyBMLAtpbLyzRnfLTMn6zTdaCE6zyTt2emyhb9T2753r",
  "key9": "4SAyquBVzvVKuATE7Zs8zAEZ3qC3ah6M6QTrRWopS5dFYAUh4CcYeQX9JHV75h9GJLbjf7qivaSHaFfzMxtdmXF6",
  "key10": "4DsRxjgFQi2smDxF2rjc4SsMMVwjR7obofYzymqYoqSJKHHFhf2H2nSyuA4PBtd5c5G8LtSgkF4cAhZ8MhSHJPd4",
  "key11": "pQJpjATK7PuBcQMygDLo2K1DCBXq5j31DnXzxVmSfne3CWYPnKeTYFKDGNG5dfaWAXWi2CCWVuzJgey1P5c9gAc",
  "key12": "rXNNLPmWvY5JWspktPrhEYm53hPiLSwDYUM4eBBtrWMjmL2hjuMETZ91yb5fZbhFRyeqHpMQZdoMrsbUatpHbJS",
  "key13": "1xj5GV4jMnUEqz5vcR9chBekmUWrynkD3hdRjTrLpDp2j4VNFrwoHQBCDFG8oaHHdx8fM9dcq3TX4br5JN6RkFA",
  "key14": "3wsQx8vnK7ArE3j9LeFJBGvm6wQzUvFohaHeocAgSvkH2q1jhvm8K52pTsEXWLj2EDtGRL813x83PFeghq6s6NXT",
  "key15": "3BY6BBAgCiLUroEzJSR5oaoJK7ERZobMtZDAXPcrxe34mAH25MbLv4pCtA3ASKtFYCsSC5KKS52oz3XShfeMpF5Q",
  "key16": "5cgztz8jHFjihxt94sRkWXpGSvR77zaAMNf3kvghmrTSr2baWFgtrqPsz3HdCFQpKpTLeKgkHT65xZPrfqVzLpWn",
  "key17": "3Zy5mU6wW6UE7KmN5M9BBNCwke749grMhciBDzzoj8v6qtFdbB7Ron8K7G9sZR2MNoRXtE7hec9uQ14TDTbpdHYF",
  "key18": "4peyBppsMuVfaKcgiiy2nUsoVtHeG9wUwNfa1DfzNiKDVz3xT1qMzANsVqVUNH4kps4aiWdQWto2QyGZUn2WCJH",
  "key19": "yqm8XQNiejtNMXuQeuVJynYC5hVyfR7UsbMazBULQ6qu9Jz7DYLHLvfPEGsaBKycsVYbsvYgcoMaFVK8UJBUexG",
  "key20": "4sBgoToyZiTUT218SkiKvTF7AQEK44G7bdqy4t8mQUDneiUj9AHMDyP7oz8vp91apBG5kg7RiGZKVeLSRczSuMy1",
  "key21": "31Y7psL2xGibXoFDbj3wDqXUUXvrr2AU8noNb3N6y5fbPxLB4FotU8G3rSNXswqm2dTUH3qxxaB9PHC19ZB8DNRA",
  "key22": "b8nTW819LHeGPPrEi8oABGF82mcKRncBneZxCQH1H8QSJLMfCdot2uN2eRCDCXZKUVqENm81wBQeeASTdDdfX3X",
  "key23": "3QYbqJrAuRgaqmVXAWKb1ZTQ3pfG1ASAcLMz6ufPsSh1pPdSjwPsDKe5gQ3EJ7xZ8HnetLUEnvrQiokrK3jj59hj",
  "key24": "44aJHc9dD5tsftYDeKhiUngvEGPJa2xrEU7r971bxatJ47WxLCVEs9vZtqwGkVBsuK156Dy5TvhCeequtbmSLoEw",
  "key25": "FQEDiSjdzhCnrpLb3FYTa97GP413gCoS4ogxnSKPSUP352vN3BBFSqSNMwE2wvVULpyakvok1zYXJY1fQmtUbv1",
  "key26": "5d8u95YDkypcQ2xqamBrgZnJq5HZ7QUiNbVZZEFPDbQ95y1etSQBmL1xKnkUKwYjd4LpYesuKo9epPbs77PPKXAR",
  "key27": "3yTWJ6ivUCBJKYk2gyKza9FizuxD7H3QY2osAGVZy15QvkC4TL1djjNV1mvr4uRyEsX82eAsNWX5oBifq5cmA1gg",
  "key28": "3W9YSa48Kns1ohitfNjhbcPgEp1UkJsMK9QtoVTrHTA9E1JjfGwntvoSrSJkH8TbDBwRX73xGtBf7fzGBBw3CcGX",
  "key29": "2bxopUsv91HNjPDKtAM83CueJcW6PKyS8HVgYweaGrFJZfutt3i25jzUo3gggvrJJa22jMsM92LnhoL2tAwnYSjh",
  "key30": "53SG4dcoFQL2yA6pFTaMcKGatpGwvaESZk8txAEV3oyyUEbpyyj1htXYASwfU5ZNtqSJQBE1LVbqhFxwzXfDX1ke",
  "key31": "2TYu9wUQtD6943XZGdmS1oJzuEGCNLR27cSWXuXr9KV57FhJnuKy2RJUD8u7kLiX4QN6zzjpeXxrhWBnJuPjE2VT",
  "key32": "4AhavqzNDeZYfPyWsXuYdiqYDXSgnTpi6SWhYNTah6o4C6Xg1Rj58VCVgvobdLpLkLx9oztQqLdpxDi8YcBETY4k",
  "key33": "2SD12XEHZMvrdp82YoTY6QuE4qvebjgo4r8a9dfYcoRfhf6BywRpt4jqMsapupKTqvULfvxnGqpYhmhUo34YgeRB",
  "key34": "4BZ4NJ3GREu1afYefsnLnWa24uUNzEb8nKgiGo4ZfEo1938CAkqJyUP6uZKr1We1RV2swdF3dZ8Gp7QrQBx72kiz",
  "key35": "2JizgWQ7J2QARpgGcYL6auwQ1inQghjTnW2enAkDQkVV87SiwxLqb2eq4FGPYwphhkDmX7DeLtXqyADys15S2Ro",
  "key36": "CpBQf8F7gDxrqWReDsfJv1Rjreq5zgRMjzerh79TYwRwkW7XAtXKugwRP27MSSHhXVKpEfoVH1jMDsyoitHDFC6",
  "key37": "ddTcDV55eiwzeFdz4RscuRiSGi2oQdf3tQh8Drgyce24K3EputszkjmmppmvXFM7qUEx59Zg8Jcmvk2xrmxj2dr",
  "key38": "49j1oi2RDed7q4PQgr6sUCnzExakPtMRkLJNYERVXMeaiubyBup6EXFB6k9K2XKLCdDEfX23Fpzz52dnjNgMNdZq",
  "key39": "38Fs7rDAsUgWNnSZQzpnTed4U4ru5dfQKTCKkC9NLjpA1tTfkMhXmjFpnGJVxsr9UcdDVfBwzHw5TLfhtmNK4dqw",
  "key40": "uWCXC3PSohDQhuuMFjrSbV6vCtpR5xPGXZvPQ1jQSw8NoitB4drE5Cf3Hc4TWWkh8FJVqRfX1WcyzpLLtersqhF",
  "key41": "2YyFzrEdd6g5GxPtV5rGny8nFkeaiyGSjnY9oRnMzGJnLrqsZAbDwDd9LkxbrRDa9En8CFASvrAvFZmuBE4HxGtQ",
  "key42": "23X6yA9rK1cVKxW1ya4Sdd6cZtNAUSND9mdWTK1A8tFLQjGosNqgUmydjB4WvfcqbFVaqe99vG8mq1NgAJAfnXch",
  "key43": "iYG3uKHbKxtv25kYqKjKTQW5eJxcc81CqvwobF8tCF6dzF9YceKJrGPjZEWMN6h55um9HprB2yGeZ3Svh9Q9yLQ",
  "key44": "45Riqdaj8Cc7uAR1LL82F9t3bBRK8TQdM84Erc5iki5wWLZjBzP2xFu6NgERvsHAK64RMY43ax7mBhToRwbtW4Ty",
  "key45": "jaDkiD3cmRj2un8iY6CcxPBDdCffa45hDC9q1NxMJoTZ7V7paoj9US55uTSzrH64rvs7aSP84tfukHZUxufnL4a",
  "key46": "5aQBLRmQMc36pt99BxkCmpMuaovZGzoYztNEMs7oE2PSF5j2FxEbVBBugReQ8qV81vBqvs5pnGGW2YFkrfAntQJ1"
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
