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
    "4a5kWHhMC7RD1J172cgQghedUeiwzKFS5kgDv538Do8ccHRPHHM58hBLnVscPFc3G6VbnyRuDrJTCYhuqU99DWTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQvukwZiB2U7KTiu58wp7Fo8uQVvLHvGqNcKL3QUp2iiLCvUFBge1aCbb4MmHXZFh5qBx6q5Z96jQnVY7EhGN65",
  "key1": "7yhbJEzFHNqfKnRLXw9ik4s6n4mkQS4cy2dVLMMQVDQ8VnhUicNszdHaFP8XsdmtXvnHR42XYCTBwnZWd8fEF8W",
  "key2": "3on7nfDBBtC325G1PuvhK6fFz5d6h24CPJiE1iFMUYSkVgWU6C1YWwxVLNMoP1mKtc1ZDpBGcw9vCohmVV9DnQZY",
  "key3": "29z9HEoKu8NTqhtRpVM7giD9C8YZz3AicXsWVhj49qN8qBnAWAmh45ptuEJd4aayPmKAzyb3S8LA1DavgaA3bMKp",
  "key4": "2dQci14ShLz5CujJTnwiSyR5YLuzvkZar5bh927wSadmx7F1Cfqjqitr4R5PeeP3SQE1HjW3vYsqj8VBBYru6Rh5",
  "key5": "5LTmQPCg4MQspJueVGWgAU8aVYpjgDGS3kLSDY1nPfoJXLCsABeP5xdfcCbCCFM4se88vEKbs5qdjJNrF8gow5w1",
  "key6": "2TjaHXbnXDxVS51brky7uca9a42fYFvLjyProaibpwbivvMwN9iwG19K9mtFUzTahGQWDcsXDgCHUTaB6YL3zuTQ",
  "key7": "4doTYxSrPn49GWfvZ9mePBY7cXRLKY7mfGqjFzq2DvA4YSGRf17jZqSaKKjSQfeWe56L8j9jTEpasSEqQLm7cm78",
  "key8": "4kz4o3EFtaQVDLYE8zXWmHGqcQjUDR7YRTwTWMoxEfSNfB7Dz7h5HcZbnbJoZdk5GjLbS3S2RzXErmjuyKuj1c1m",
  "key9": "2C533UNq4qfgjV14XdLAwPPseZMLUjgWqBt7aVbBQCJqgjwh6orwyecbcqNrAkCQfTFpU4UrXNPhQxGGK3ZgCz63",
  "key10": "7HAiTrRNYAgsiwacLUVHbK8kWKohjbRiX8uzqbRSqgUzATSoZViCY5Nm6dxYJVJNpxnj9djVJNTii6nPA11HRQv",
  "key11": "4JLDAKVkKxBDTucTjBhJfnfEsMTLBGqMtya4Rn1afiApaUsn85wZSBkyvr9qtgpqdVVeFYXYhQa2x9YWvXdnyBGV",
  "key12": "5y6nv2RuDzuPPuaRYFbdJZyw1NEgTiDzjdVuUzwhbZj32Jc2pKg73H123pQT7hvsUz9h7dkPPAbTGeJrLP7XuQC3",
  "key13": "22HQh7xv35Cb2nEfaCWB4o9CngrMpW5o27ZiAYqicUDKGpTpgQr5jeiL2erxvHjLNwjwGMJNeorqd9CBMaZ3uLpo",
  "key14": "YbEhtw6J2ABb7233THaPw4cmUZcMkEgUbLyAa9ferCafMXN19LbnfUuAWcNLhxrrGcnZA3jJJR6GPHy1QgacJAQ",
  "key15": "QRCJ1tP1NvRLvPof7uQbm2RgeZztGUnFhWcSV8quU5w5ikzNwpKR7zZoD58Aw1EMwr6GMNNyEcBtBdDtqqsztrv",
  "key16": "2J2PQPhWVvvQskyq9q9fjihynLWugE4SvBcAmjyi6EpD2N8gD39T8V6faav8CwGjcQLAYxB8mdfeR4q79JcsbZvR",
  "key17": "3No765B9CYVDpEWrRRxg14rq5fZyJMQtnUsxYUH66Apv6bNssHJF3t1VRQVcmChE29vbGdR3u1C3KTB45WPER66G",
  "key18": "5UR3uRRr1qXUhLpKmXUgX2TtxS4YqqZvcUUYCVT5sVdEMyoVCZVQRrWPjfuxEzcYcJ7pBDsc7jjuzmt8HSKdTYir",
  "key19": "5xTKT7AyTcKfCmVa1ohSAgqbqyG4KmpraRbf4tktFvNwJesqcVfuUKz9V3cXYpb1uZWi5zJzH7ftdkwsSz6uVa3M",
  "key20": "3nQ6wvQBNV93iGxd6hvua6AiU53CtebpuB7DD8RNMYz927HCJferw1ssqWWGXJNPs4oAXSZhZVPFgZvp4JBqmyQM",
  "key21": "2SHffch5go2DMfi5SPHcD4u8kT9L6z4xr8pnCoYvCECnFTZ7Gk2vaeSey9V7EK6BxAVArKpRRRNrMoZ2A8iGTQa3",
  "key22": "5aChTAdCQf9mRg3b5c216YXJiaXNxXjevi9hs7Mkhfo1jrV6VcEMTCysFgw17EhjJQVBqdmaYmtiqDHUvJfxeQuj",
  "key23": "2RMY5keQG5gV9iRXQt19edK1dFKF3mbRa7LRJat4sjRohEHTrDLtQEus3pcWQ11CH6RTdsfaSr5gbSfdWCh6TorV",
  "key24": "2rM1FvWQ99rqaZLPPhCY3WUMLtjdSH6xZmBMDDvqCqAtBKoPEHraxrARzr1R7wkcPDaeSWU7UzZH1obxR4eHjTpP",
  "key25": "4RfQxG3YEuLBso8GxViPGh67wQjdqjr9KLGhosk11BTrcr6vg5dkBk1qyMMfciX4idMKyVcutUiAVMtJuuAa9bvM",
  "key26": "5EsJvUuUFYJK5dyXfBgKHRVhfkS3aWWatMjNEteG3QrXqvgWeBqPxYJpHerUdmvACYvW8hdHPEYAEhwxd4k1tLhB",
  "key27": "3o1PNa3HaVHYT73jX2csESeE2KvyxuJiLrV8ykdn2XwLhWte12rZx3NvVSw9Yk5BYNkFYCxFUJf8B5dwxuSeo9Mi",
  "key28": "rkwr9utpmkg46AZUGvuHnMSqNdXEyU8V5cGNdrivg9kUU7XeEdZLNfFmLdVHVB7L2JV6jFnD6divJTD8mGyaMqN",
  "key29": "2W8KdfAjxdE5cwqtMTjiHRAWkXhuYav2rEYP2DXh5XA9t4dDPYNmouwV34e6dFNP9NN2Sy37bcjc1LuxHgZhLRSy",
  "key30": "4jY5Ny2Bd4ZaBUkoFZULHh3xK7krxJgtbxzyJpTaq94sLrWbd1QuzMZptFY9QnMUHexb1gpvFpiMV9rbVNYtJjij",
  "key31": "5zjfFxvDiY2S9z2xzWELLiXSKPhMzp3Ng7GTwU6tqSm7RPygX4EhdQ7vXH627cNdpozCG9YdDgrin5UzMBXZegcN",
  "key32": "s9hBNabeau9KjjnBm3S93yRucyrgY1WSGbtZgFd4w5dXfaFSAYdw9hBJkLaMJQCEQvBUCLBf6knXWYnxStKukWD",
  "key33": "fSMuCx8X9NHC95sDwUhKZnQaYiofkugzP7BQzQUBmhicdMcPxniT4or25xAZu3tWVSd96hXnUKLemNq4SZyYCcV",
  "key34": "5kHAFBWVxnE3NVcPfjqiUbcFzftXqRvptp8CGg8jNij1NmG73nULs28Up4KZabJdAbdRT6XkFcbhc4h4VPTf4CNG",
  "key35": "3py9cgDmhAGWKbvwWKqa3efkxy6h18ZVeXgKSbis9azo5nmi1mWS3nyksiZpNsacAZ82HVBCE12Hz8crHUXf1KJM",
  "key36": "bRhqZDe96FRDk95orXLjBNCXWL4Ciop2G3bye5H9TERbavJSSGKPNCnCTLFuPpB3MCQ5cRzccq7MEPUxrz5aBHN",
  "key37": "2zPP3EjsJAFJ34WDakn1Hrw9nofVEWJ4vqvaiA73113zo7LNR2YUw6HmMVENco9EqHwF7KW5NJQAZrWmKLfeXAfL",
  "key38": "2ubGpD3D5TZjsadoFP6Hceq9sPTzd1k27KZdEwn4YTfT913GEVhEYhcdynJaQwWcAzgMUkCBGMi72Wp4hpV7ZT6v",
  "key39": "5Y7pTU4ttR2srLByHXiZLQ3v3w1jHEkFX1aYB9C6sPxX92qLvs54aKRWRXRPFAAKwCbhZRSC13KM9p14cfM9ARvg",
  "key40": "5wGokTSjBvsEm3X1BHBMvB8PPgZzwAmF4zqceRzpPQPdLx8NPrNUAyD6jWwfQgRo9kJowmJ5oA6nERKPphuMe8Mm",
  "key41": "1avZcydvfyCB9CvsRZsK8BuNELjMnXRqCXLiSdCdq9tQRMrdvrgS5Rt4C3k4xYYZkyu6GAbGuZSi1MSa33M1SAg",
  "key42": "5Vt3iCKdU2tog3vx2xZC1oahTDVGUipa2UD2SRQD9KaqvSVAbWfFoDSfWntMcLHuk7rxJTtRdjUJ4VMfU9WqQJFb",
  "key43": "t26WxKZRgQdUjtbzxuERe817xBs2JgqF8SbPDgKjwEThaGBzxcYBUJ6Ysnb817zeUwhRqiPZYQDH3LkY2dsTgtA",
  "key44": "3cjVQBoCbAFJFHbZ5oQqbQZgU87VnqhppU93qKUEehHtJLcDHCypUkrFQ6UTzMn2seUhLsH8dceS5QGV4PVx2Rjt"
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
