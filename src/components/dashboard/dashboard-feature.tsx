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
    "2Wyxd4tmafdZkoAd4Vr5Y897zxcBtXA682d1pmKxJ17xEtzgND75s4nEfrfUaokrkJHg29eYe354v5BNGDT27iGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kJ3XALkihychRZxAYD1iNAngT8BCw1ja4Z8C9ECgWw1RbTmotvkey4HovU8PhdHfTpDMJ9b2KbKmqwYykBZNmea",
  "key1": "25GBTiAHNeFCsjUBLGZ959AsDXeYkDTBg7UQbtPkjUJKPwqhNsMRtf1Hj2x9tqMq1omEZiLyxC8qEJxyaJUvdPkQ",
  "key2": "VbPGHiTQBDafjhDi4w5euRD5Ud38aWSyuBVG7fgKcz4xmpNaFQRgeAPd76JGoXTV2azpGJD1zrn4WVMVDSZE1bX",
  "key3": "LGRk79EYB5pUcJw7HneKCKGhCbHYbD7PoQB8EaMVwi5v9YeemVgV7GXUtSBhHGtjAQSjKbcK5WtKEAQkLhTFomh",
  "key4": "5gEnzN8V7A3o57jjrmTaFdfnM5KVZYChnqQBBbkkwbg3DdGBs9FJ4YJErHejEeNUWsR1KcPeRYuDWXjhDxxbAhvD",
  "key5": "2M6gyaiGE9tBHsBEgCUbpTaEJ7o1HYW3tKLLoFvWHh3gPjRBDGgaNn7K4LeQ4yrRpfVhQ4Pz7KEFF9nVA55Cfdki",
  "key6": "2M36P7qX7Vn3sjJXzRbvhLKvErS3jK8uyaeARcaUPaVqYevmQbYJqTJSxwHVayThRh9JeiXcDBs1jbDyrR9q64ry",
  "key7": "5Ht7bvvKhCR231AhXPZvPuY5si1tJfRM88BtigowrsmLQoGjQ9Tg6EjE6HJFKqEKMRiqqLyEWvLB9LeBJrMm7Kuu",
  "key8": "GBuaQcVqCKLgec39L4VKDwhof8ZDUP2pGfdEmfXRP29oFSwDZGG5vwMKKgsjEooP69ENhj4V97MSBEStxcngQWy",
  "key9": "3FvBYC9zhP1LMyNoUJfsC2kaPPJ9tHgpkNh5cgF8xM4TWXy8T1Lq7ec1vjUgccabDKnj86Jqfgzbpy9UFfzMY5Rw",
  "key10": "4P9bMYSFxCuTrDNR6ExDSGEECLCx6HJmddo4wNwEmjZUgZ3YbkEq6RNeivUTGAjJkdEVPJhKZJLxztRmLas74Fqe",
  "key11": "3W1uL3JDsYpAsLZvJNkH9M24KnYGo2djiSjpuoNqVmBN5jepvRRBqEu6EK519xCsR4QbnB4mFBMbJbN282xvvXBz",
  "key12": "5UY4eyEAfLGnM5ZrBqaBocwcq26a9FC5af1hxGLYNXizMNX7rwSojsk5LGQCuDEZEfJZGZdNbPY4gYytaUKQpSSx",
  "key13": "3aNtWp3apWwPBGzywwexZGtCa48YSNAH4RLNkpehdi6uDARr5yPHEMjbcZy7Vthr8u4s9zZw1juiAWRQcFPDPoag",
  "key14": "49ZvShmFFGFQFcHX7TRwYeM899WyzuAp9QmcSURF5zNsDk5MyWgZabVbFhHAQjPkJJJP3A9WoLg2EDoixidiAs6R",
  "key15": "4uH6PoyCUYtNEHig5CaJM3qVQJ7QBoexey8mEQYYb7ZNwFbTKKMAJjYaTwNfcBjtG9kY8SRzBXUSg77o9GQboiFB",
  "key16": "A2dfmLrHo79ypMaLyzB8wwFVehyw1J6xq4LrgVot6MhD1UCS1k1bboTUFMkJV36U8PhbhHCrv6W5ZdjFb9ZCVfX",
  "key17": "4KffvVGa3f2KLUma9V8SyAudXisJxERgJU47oySgViexgpBRfemSUxHEWft4GKmPaTGwk1udAGQuGTnK7PRc2G8R",
  "key18": "fazfhFMPwuQEgHtJnKsAFLVrREkJ8GqyrTCQfb5erhXUtdt7SXjxsM5A2cTeDEtbnbNeCZhqYsHGCQdR1J2KvbP",
  "key19": "2RsgYgHjzNJWYfnn5CK56wNTF4ywt1qUUJwEQz53JVDdmpkP8XjgjhEDPcNrh8EAYnELW1TvSoC27B7sQ66yPvra",
  "key20": "5BHnfjZCaAL9N9dNCKSbxmveAMzGFzmQNU3crWWNHSnxjUqvPPEACdPxTWhmLATm5iKuxVHzHXnbn5Sax5fFjtbw",
  "key21": "WM1ixZ2aTkAcrn9kvah6rSMrAv36mR1MCjbpaw7h5VEdvRPMubss29h1aS2tDHVWVzJadUCgTD4aUhHmBkYMXG8",
  "key22": "5XCN2n1oTY8ziMmQuvankC1Gt6B1GgsNUjiGfvKrHqfjZAQGQ6hx6iMkRn5uhjdV4FgmrwUiw3gua9JrnVfuNwsi",
  "key23": "37KqopjsecxXCyH9Fx2fdpByZvsdeTr7o72jd3qFvJ9siJheRnFeKVDQEDsMu42ZrMKmuxLaYjuvTEWnWZsX1atF",
  "key24": "4Qafm84w8Dup59fPmZUgpSLRygBsrDke77n164Yik6SiJu7u3gNxaLhDhFmoz8jvKBUHZknEQ3M3J26DCZb2C2fZ",
  "key25": "JYRjchh2NHTyhFGNRsfT19F2iGPkTAfu3VCDKdgCzGfHNbmQ4kKAG87cPgv6RpbbVeMr4TxvzjbxrrzeyjuptrJ",
  "key26": "25Htos7ZzNniUWbMgB6RYpm9Vxgf6xQDGLykZz1xWuREPMaP7SEb45Y4XsFkLso5DzQrbmnsrNqgUrmReixKrrHd",
  "key27": "312tVd5FdLzDmwUWXmLRfRotoxsWvooZSyrGWxK7N8tGXE7sgwsf9nb3r7Jo8H36DW7f7zQF8GYP9Zzf42mRuy2x",
  "key28": "3yGjqrpx6NZ6UYKoS7fx7c6bGScNAqfXMaC2iK43EsGmG5AcZGCe7btxRPkEVdLsMXuepB9SYXhsPsDowBHiL2x2",
  "key29": "1KV4YsvqzWtaQGnTp3gFYBQsjivhT7amFKHYochLYgExNPP5YtFiwmxBPgJgoRnMKMDjA3Hx44TKgx5BCyaT6iy",
  "key30": "EfNokQ3k5EC1MrriwbNvTAKUe7gY5GwojDwtUFVZdVUqWMesbKm2RhNJd5mFVS5GJdQLznkrUuWB46ftE7Runad",
  "key31": "4k9fPnsWLkH526fSy7PWY98D1s8DGkh3U3K2BDHBZ2xV2QQY4zidGj13v9Z3eNdd3uiTwSePrgVamHHfUo3Hkhzh",
  "key32": "2HVMYcJveqniXP7HbGMPzmYnzsqo8knjs3w7F2Eb1rWGBUykKNmfpdL1dULqYs56BB9dPABJHcr9YU9pgvyVsutR",
  "key33": "176Pj7dSFjPheMjCRDgVWXZh2xFTGmitoEhSw9P5skGyfYKHZrnvDzp213Kbvoswf7MuoXbLZ4es68s4ASQGvR3",
  "key34": "3vZC8HimL5Rj3nWTxWj76zbqqmJvVxaxeUBn1WMz4aMjhp9f3rJRwQLLq1uezHh4qdXBdhQjzc6FQCyYfHipt7sT",
  "key35": "4ADi2ddsiapWwQoiHjYua6Ku1Fug3tCeEd47tbgzJxTurnJjHmYrg7QyjdYW4XGEU9V2iHPfLii77g9sseDvSb2z",
  "key36": "v1odTrytbieeeqm5iKceg7PWtGz5HyiVGeXgQdSkQudayCbxXrzKUe3ner7eQ5BVT75CARiK3Uui2M5ZLYyBpgp",
  "key37": "dLfkL5FtPXhuwwmockscBTy6BCsHfbP8nJ4M5KhHhT4aX6b6Zsci5taJjwoGk6Tnk7VTWUzjAgxMsMprrWHY3od",
  "key38": "mLit18sYbuoPRZCBFNxnWez8SbP13xJxeTSgiZw1Gr2v1m13JMv9iWkxusfBwKeXuCpvfeyuzzcR1S41ag9vcY6",
  "key39": "ytyC6WZ4nHporzN1dZtDrhscDjvTnYsc38yTv4rv9H7wzTGFbtwSjHT6L3MkYwpmTimbq7ncebkY9YQ7nHPJ7KQ",
  "key40": "43M2W35tb2Z78SLw8isMZXXkqjnKYKsWC6y5LnADGtWeQaayHfcdPdEUwaeVDUHMN1sU9Gc5votHAm9ghyk3uhYC",
  "key41": "Yt8HPq9FewUTSvyzZwcRDn6RbcrY3hAj5mTvoDFCPFLDhCezfqMyWfNge8Q3ZyzrBRDedUvf86NSwU5NTRKKXvj",
  "key42": "5h7y8TR6ERZS9FwN3P2biPZzk5pnYa8waAwBW7zZtkRPg6AHEJRSJzaRVoS9SS8kE96cMs2NCWy8ZCZz4yxLXDRQ",
  "key43": "2MgLH3wiuBC2gJSeLQr3wdJumRp6xiuKYJsZNDxTBcV6tmb6rAmVdoGYV9yXX3EYJpMHS43tHWMHXfQxXVcpkGDw",
  "key44": "4Xw56CSJE3ETr9k163THqP7hCnrMTYk4osXJvkUy4hpB8T13CtWdzYAdSbSjPoXRjQ25AfcLgXT9q5FjV2BZbo4i",
  "key45": "31ZjEpEzh9CE2Vux821HQy7U7A82y3Wfvg1aDUj6LV4H1QW3F7M6nay1HPXbo34NQhd4Evd7gr19h4Uzd7PNMn5v",
  "key46": "3o4EXdH7aqv3U5yhN7zT75SajoTsUEyAXC6ziRAzufmKvvEWoVcKT8VQF3MLGx9pedBXA3272Y43NcX7vs6S5gk8",
  "key47": "49pqdnedG4BBu8vCg1UrWjCpptVZE1WGMnG68GyJe36BHagnapKSRwcqQCuExSAGniL2UJZdjeM2qSAG68GPaG1i"
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
