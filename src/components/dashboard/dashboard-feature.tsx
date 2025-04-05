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
    "4aNqvfzwk8TjTPoLyPKU4NS5fxevDEyJzno7FeJBrbSxPWJ49HzvHCbDC5h8QWw6PwWmUbmrTQsip3mJsnj44Xhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qs4AWJLBhB97si7cGzPx636QmU8QmZEqVDQUqjm412aSK2eYRXV7cCAZBHUUMXdNSMgYsEQhXQMe4RgtGgj6hSF",
  "key1": "5dstfzc7H282mRUC3cA51LY3T7NP1WjTviiuWtVWyvKKd2yqeBFxAU4BPDVuc2uEPvmgy8ZPNjazM43fQwV7HjTt",
  "key2": "3VZ5gf6LVoGMsMxLdo1c7tHsv97xFrXMBgdD1LsvfZDzFSuNnDZD1opYgBJhcyagmzaBmQUnVVTiTg4iEoWf134Z",
  "key3": "2BFmM5nCeNABoMt6bztpiEGCBLdj8F89myWdDuudMJmxpG1Ep6LbfRJn9nDAykqWBmA9Yr5WKrxEZU8TaaffC22d",
  "key4": "2Q4L1Wptq7pjkRFqcAXGaupatQoURNi4XuhnhPr2BoPiUEgzc13Qhb15dSFtogrzkeCHt5gqfiYCMxFiuTSaMMc",
  "key5": "3LnSK4jJ67CabYYJsnow4Qxz5Sf5EyDq99X2V2vpqDrz1d5pKA8HZbcECxM1LJUqRvofZu9ZyZ7qVzvgZhBbvUgu",
  "key6": "51DEqC2FfisExLCLJgoqGaTHwP1PxVr4GnZjPQVHV6NriGQv8f3rYJzogqkFgSWLkXtq3eyf6sRDWFYy81rKSRsH",
  "key7": "p85GXGBz95mVnYP3ATS1wwzWyaRzTPbJQepzBUfn6bCCrK7qXf5dDUuSCpZe9zzE9abXC1sjG1YeCmU7BrNJADi",
  "key8": "2hfK4sBPaifAcrjYNgDYYHcuAb3ZpqKVmakuFZiNoBwaFKCDryuR6CeKZCx2hqScUf6W7pGEB9uE4XDHD6344ot7",
  "key9": "Xks53d2ZmXjyXoP2diLhFrpyaqMCba68Pfcke3nSrFr8KjLJvJysRkAuFrJs9G5wo5YVpeXVweNbY1hYiSQS2tM",
  "key10": "5JzzkWAnGfUNXDiYkPoY7BdMDy68X5BVP46WpNZjD3tGcpbVK9fzhitFEGcX3WzL68rLkaNE94SbG8DyBkuEktYT",
  "key11": "2LQgjcyocbWEPtE3ZrkCYidir3g5jGFoxYjrY9CJdPz5wV8x6AEWd7d5978oMY8ZFop8hpmCerJPNG4vh1cjSugh",
  "key12": "uUBeLMcPwMSWP1RrJbzEkWLfjHDXPTRTy4vLHGj2PPw2MHx43UwyJHDLdJediE47uk4tbE8Kv2RGWDxaZKoMqCg",
  "key13": "63zjdQ3XLb2dXmY41nK744Hrfov3FdZDNxwWqnAKXX8awQsRvaAntwNGFLjAqv7XAHoFGXF5cfpAKo6tTXhiaSgs",
  "key14": "4HRrKBMbyGkXthSGU18CG2u5pxxcHgeavdcX3TZjLdkmisiFMAram2Zv3qxicWr1kgvtN9uzzveuXi3QDbWSz1XL",
  "key15": "4Z6HEh4EndnA2zeqTFgk33E9RZgz6gqwX3bvJJsdoVas6zGn58r3rQ6LLe3n18UsWrBcjmsPvN7xaaRkJ7XMNEXB",
  "key16": "3GDb3y7UR2rQJ1h9QCgcEE5561EJkUWBq19eQhaqapUTYxPHRgjvfAtykjkxxyrbHaVmboW3jPz8NKGK9obqp8sw",
  "key17": "4koiyQBPS51WHLDYSgoApQdJD7B3WzGEw8t3o2neN8PvCZuVuHVwNfW6D84PGCTL4hAQAGhsMvXZp386bT1PBxQb",
  "key18": "23TLkPfnpNHBteziSJnqHagAgaoNNzXySKLMjAjJj9jgMUqjwvigLovXtvTvGoNPzgeDNuScHbvCVeSoTAjVNbie",
  "key19": "2334JeQoWbvXdZS71V9yR43RfJfwFNgg6oqBsfeMwxNghMKnBMDFmmk9EcLTaPNPJwAbShSfgDby17C5UyoXAX24",
  "key20": "Yu3MKAQsiHS9T6t8nPmKcNZA6hcWmhST4uwzKcUksHFeo5K4qEYWAx8b3B5szchESqkbBxMdmC5cFvZqkPb213W",
  "key21": "2mAeBfemNTs8xQJv2qhozZfJ28X32rQgVSVgW6JMspnfMmcmFzEuLuwdYfemZi42riz1ABv72Du2RX1NwBZrY1ss",
  "key22": "W3oc7msBRRkdW2xKnGHgGmeGT5gNKRdw9ZEYAnvnqWUkt35nRiHABBWa9iW8yQ6P2an452ZLr12RZHFptJMxjaE",
  "key23": "2DVMh3TLCjoWYRrcKStLRzz8KWM9BcYP8WCzvfpnV4w7qn4Kpui5HUsgbMtGoYx2PeDxVenELuZZoJramq8BMSyp",
  "key24": "Tmuca1hVrWzYneoHUn6NjeZ1TXUnVzuM1Y7vTCfPomgTiBkjhuGHwB3hZqUUvjdf4Dmk65GLPqpXp9Ld7xgGNtT",
  "key25": "2GJG1Rt1stCVuRoa5EV22fP5bg32mAvyAPzBm97a6AN8oFEpi8UVtRcb2oEcG8Dg91RVPwqEn2Nyco73ejroXcuo",
  "key26": "2jmdF5ZEbHwgwBGvrbvwCr2wjeSe8FvheNioXh22MYWW4uPdmoJCjG4ASkyiuQP596skuvBn49Z5M1TP5op14r6P",
  "key27": "4if2TGgv1Z3HnqyQWcMWLfxGmqxG7KKRt6bKJtdF16vkoaLsjrG3otGUdyY1hfYoGbv9PDsrFD4VJVna5nFGJM9b",
  "key28": "2BrMBoFnakkCzVsvga9Tmzme2LT9rBqs4haD87GTTyV2iJ7iY8xGPyxamoq3fHgQfAeDfvK3rTmZwN7Pq8c1B88n",
  "key29": "3XV8WpDNqB6asH1kjunNq1MV6wEh1LfwWwuHaHXb7Gaaf5zrREjUJGgRnipi12TRnMy5WEvBZj5EnMcpTboP3nBN",
  "key30": "5zoMycgmyEThPxTL5XtkcjqP21CB81Ausx3SefggP5MkUa3prY4YRSvcwPwA1sasB795GcQphwvhRv99HeDhjHPY",
  "key31": "2PMGjegt9wuJoQLmQ8eQLVmRwJJHGEFe1PskFRfqV6XG4aNmnhXX4cZALZJ42n43tDQhMHsQ49YTXx1PSa3avrdJ",
  "key32": "55kmk2oL5x4Xbo4745EPnp5fvz4inYiEjaTnkU1ut1UZjg3RF69qbsM4LQdcSP7RJbWVJLwMsKoF4e8A22n1StwL",
  "key33": "3x4wLMiexEEYpCoyg6Nz7BJ2UhzxfHV78m4ULgTWtKz3sT4YDWZqqbsxG4bGKVRLDSkb3o2pre5TmAuzhvYMwP7t",
  "key34": "4kzFZ4vR13FUh6hH1cjfw69ELr3BLAJtyK5HWWSPdXBr9tzbPhihBZoSzLpPFcwZ93w1dTqEha4mc9xxkAVZzyUb",
  "key35": "SCyQYPmFsbmC9PDhMNAXKgZFn3XFc5xGsEzcjKRYBesGSzGyPZux5rP8iLaxXS2WDuTorF3gfV2xTKe8MMFmceg",
  "key36": "5ipZ6MyA7Q4oDNCh8QrUCXhJBFKJhncavLmcMkqVNWsUhqXdWexMaRiSvvc4sBz3K4oedLCZSwHxaBC8dnSEdQgP",
  "key37": "2X3fCpa3DDi5qPMGtysnfvuF2vdgBuSS2zYPtDdtPdY5NHS7sKe2EMLRZNv1kLJcsExh6HRtP3fvkz379svFrz1e",
  "key38": "4AjdAdPjofCHLtRmzSyP2arRtaBzk3rMVQnAWWhY8MxULSGZdENapj98NEJLfnQGmg8eSbovfeHfZm8YrvkXW54v"
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
