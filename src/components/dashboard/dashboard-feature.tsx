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
    "2jktzGLCHAAciDD4M6tYyQ4CaTEa7iuRsnQBq7bNnn2S7GBerTsnDhSQzYTXFsRDbWtm6JzvbBXjxQQne5S3U6hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJGXWjUmNnh6KAiUE8mhTjQxsUy8bpB4eR9BiRnr9xgGtVaEaVQZshgDx7VYiWUrMg6iKWawrHpqqBwvoCntcNg",
  "key1": "5f34heqZrReosqRAoFu6CUgsgCSWXFR5nH5a73iwcdxMTytuJUi2gBBEh3bucs146tztyZC8ao1PPRxwpLvPNBpF",
  "key2": "3izFnsfbqh7WdHrzkegRwAyoE9k7mEhHsjtRWttvckQBfrSXo23YGGiwCKrdgRYvxJHfcY7cM7HzqvsxjLogjUMu",
  "key3": "BfczyhLRfVAZcLdQ3ztD8JfBqLDtMYZ6JvZ5is9P9e4Ug6q4amtVa3BXSrGY7kQ67F5M8b1NsSBcXZLrk7a7K8R",
  "key4": "5AVpfZGHDd6UcDzMSTy6AvPfVDRcAh3Jt6FshwPza2gvoepiG46CX9p486TiDjGtJtWFJUnD194KsjoCeZgfaBVQ",
  "key5": "2ouBfP2KJh9EQwUfSfvcDSrWg7L8opPCykL2xPMW53sPh8T9ARF6pFUKmiXd5wg1XzaedGytCJvE5uTuFKEtNu1j",
  "key6": "4jsjKGgqpkYKCzXWGrz7uodqWHFsodPaKY84ZP7MdzjQWGD5KkUwwZHjLEnFrXqGfvRdZ39accx55vt22KJzFkgj",
  "key7": "RsNGSAt236qv6dqyUAvfeUccKfbLPSWCPxtFgY4z318U6qVCQTYgHq8RkpkEGebLNGJ1BigqMBPW3jHwhF1TiXQ",
  "key8": "127ZvLk2oLaeNyncE8M3Kc4KdnX39EF4e7vWHY4CvFnJq2rhLcEBLQVeLwiGgJt1VqSoa1BQSJ3HZsdeKUeBqiFM",
  "key9": "5N4yrnM8DZf2KUxJZVdCFhyeqLpFAv8CSQm6d15HjRh1oxX3fL9FiWgYurWCRm13EvQP5KXBj5Z84seqWDb4ki8t",
  "key10": "3hejPxE66ueXBN9LkeHiVSi6DTMuKWJoYmCj9wLFRzoQ6DTXCeFASnVdUJEGSEnDzZ6ehoH9aKQ1vb5jwz7qodUZ",
  "key11": "4TuSYzZ1wCzqSVtHyHhmoBtf7TgDfMN941CaRQ7AkVSh8ChWR36WweyKe4sjBUMiS8U4m8FhFB4QKnnkNBNvm8qb",
  "key12": "ZvDk9mcTJdYGsVgfnknxrBe56AYdjxwR19NPeunvx4UCLqmgvp6wPhJzs49Gfsid4AMU3e1q6pF4DpvyE8wvLoJ",
  "key13": "cqVE9xqiyDBnCAVkme3qfayc9B5Y3V3LzustbWPDegT5kR3BqbWGTvY2inYgg8jRjefj3f2HnEWPPWFSnBKrpHg",
  "key14": "46bAKK1Z7aRB2sdq7BgYR6vZKrrZcGpTLXvvpisqdiab9H2Embhwb7LL42ZbABZr3ocZZxcfXs2Jh7Pa3oLDE4cH",
  "key15": "4bd2hYiiBM6ZNcykhd3wXJ1uDgUc24XLyCVTk26vCMmsGv8zX1rLvQuKs1kSCTyFN6ebwKKYXPym9xqnXeEhgecp",
  "key16": "58YbekwtqqWimYsKPaNMzu5QLtVwqk2eFb6r4xAdXrwuabyGMRhHrHNQzjjNYZvpnk13Gn48STrVQRLDriDLXBsa",
  "key17": "ybh84wQoFAgDeUrhQTo9qULGf9zZBbu1w2UTwnXamUpme9p9kxCFQR2JkhhuLTrZwctR9Sr2ehPsab1zbfdArm3",
  "key18": "2r91UQ3c8A6HewmsCq4VFF37Yamd1GEJczVfUMdA9oTKJWXtvtS25nB47v9pPb1CgrG1njmEeCzCdUcrWfqah4ZE",
  "key19": "3Xh72gMh8ifQZfVMSFGj6r2sYr7UTba2QB17cjTh57VurB1srHjakQwbGfiFKM243eBeV39uApG5pSTfyCH6snni",
  "key20": "gB6hRkFdgU3tmR73hADGNxVxqbgBsjn4P2bZKTJtxv63m7fM7YwjYGjEfqMgVijECkq7wNDDyPuXRNPBjqjWNnE",
  "key21": "3mWYKFcA7Jm47Y7VBu3zT3Uuz7xVgbSoX7Tou5ULM9558ZVUSRo9zPnpE9UJ6XvdXBdvE68nbsEG4yRi8fQ6rjK5",
  "key22": "9HV5LEH4tbLrhGYvYZy8VuBLV8xSY7pnJ66YSgeeE9yoHYSvsJ3WYeU5UnnAsm8rTcQFYX1z3qRrqJwVuDLHaHt",
  "key23": "53C5SkR9DazCwNzsCkbNoFDq1ZuM53zM7ymFq8uN3NSdqUGHPEbmD3DNZF2YBQvzA6SeYrtDvEodKcUw64S4npQr",
  "key24": "4jBeEQkPcDsbaKqVGiFuHm5GYDQsGarbPnr3MBEFrr6dfESfmjXs4MKu6W6Y2xyfv8CKc5yz3GEq67FuNSXkZEzm",
  "key25": "2B1bY4qQ4Zs7cKCvLvauSPNrRsyiwAMRfCvSr1tTVZrHpa7u98JfH7AyvfPNbEA8xyDgrf6DShNTQABrDDc3CPLq",
  "key26": "4h3DYnVs49rx6p3SchRv23iunkn8ia4Pp27ceSNXsjiK1oA8tsJpzmtzmu5EjMBbVSyFvMTXdPAVdwVbnbL5jQEx",
  "key27": "2oQKvS7aYVKCQ6U6JJNAasEe6GY4PfmvGpxiaoJwuor8JwTgP9cYaLmEazpMip8tBy3iA8vEt9PgSVH6YeeGg9YH",
  "key28": "c2gxvP5jcUQ5L3ER4EE7pzAxCosxrieFBgKMgnuFsKyN6A75kkVsaLiQu6u4V9KSJSFqXyvjerbncN6PWEUF6o4",
  "key29": "2uKVz6UUM5oe9ghmEDzDcDbt15tFS6SPXsx7Ri5CczjrVAnQ4VVqyfgCZjmSjZWcvqfymQiJ1xTVFeKbczPHJkXv",
  "key30": "rv556ZFhL7ATRBHKodSJivUqTBKw4e9i32J3uXRJs1wyKw2AbVdai9iDKTmCUqb37ih7qHTuYfvtWt8BogcuEgJ",
  "key31": "2WpStHYhnM9az2avhn4fhRKGGytdeZk7o7kroSQBDaiMf9YHv2asThVH9TCsRAvCHgVbEriwqU78xgRYvwQ3PCG9",
  "key32": "5LSXLK3dn3DzV5x177mTv9LjkMDvpSatZZQ5fDx3grwEod2Xf92rVNoRT5iuGeKF7GDrRDnLRgiKfeskXaaApFUS",
  "key33": "3wEVpBzU8fZswiqVJJ6tQoGAT9i56ripCw3huotrDwBKcDbZU1vj2QW6a72Rk5r1LEuMuWjEpgrFs1LYEWzBzRoj",
  "key34": "3cSs3vaazoea7sN3u7BKJXuUEEj44XEyi1tGuiBbbPMdm5wcSUT5EWwwzStq6a9rAXqxHMoMDCk29pP56eMkkDcc",
  "key35": "4srxCZ9nM2Ld3peuubXvYh2oCkzMkyJkZeGVUMTjNofS3KZ3TvjThf724rA6rSuN6ZEYhE4dq1hEmMZhXgLEHjVc",
  "key36": "5WPjHq1Z9e8e4Xy3Txadd2jN68zao2eATtALoRZKVu4aiU9XxDnjTXrnYhhoRnxtB2rFMcqRBAcAy9dNKbzxjMvx",
  "key37": "656AHHhfsJNhsrFteLKtN4Jk4gatWHheS4Kkw5HizQyYvr6wRXDKNiXWxpW5s8jreMynKSHon7xiHJYEv5TqP1hx"
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
