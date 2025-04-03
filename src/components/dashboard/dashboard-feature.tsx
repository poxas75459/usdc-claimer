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
    "xLjfS6WyRbrB5jLAQiSgdQBZZRtww2AaRW46PD9J6mmKTkFrCehTbj3tN3ZaJT629NPpQcwXSEiEv7q9r9SqNat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZpynBvyg3Kv1cyvYsTtw6C8WJXEKMXLpEuzFkMG9BqBwcYuUs8V1s3GC7Fu6v1gNBx88Nf1sqivzJGWvsvXmhqL",
  "key1": "xFYfCYiKnD5arWUqntnyndA9cPVhmRbP9TbYVkXG94LuGN9QnAG3vDMzJvpq812X8rJJMre8DbrT9NodHUfJDuE",
  "key2": "5VmLHv7wpkUJkixMYpGJMm9wnafBYU64b8tPNWVAyqDGxpKhsuLKdNmxwMUpR4zYmezSGo34Jd8SzvAzhfmEyD98",
  "key3": "EvbVtg9HFCv6HNjdmmLFdodxFS8GwxscG1JkARedHbD26HqEFvTtmTnz7gQsSU7YVv9ceyiSVpYaBLKAijkQZSk",
  "key4": "5pYD77ktiLXQtM6ufZL3vBLedGJwFQrcQ2Sb1eY6ftRGGauVBwwSVvGrqPDGLTpGmzekMRWd14w4r7pYgKDCcin1",
  "key5": "5SkVdHcXtpqpsWiJYfY3HngVYiiErCpSr4HG52JSXS4dRh7CpVAxB2XH7T3KUh1dyh1g9hhZuPX1HW8yzU1YSsEF",
  "key6": "2tWS16iDpmxoDENXbdhfMbMfEhJYj1vzvXBstPuH9jychkrxTKVqZsULuVfTTGC5HGE36qYNMzS4jeE8WGeG7b4J",
  "key7": "PEXJTYHQUHFsPj3x5opKnbdM4sciyXyDB5hkAgBRD45PVdeHmHLWn3UsPiwSujD6UVaU2vLx275CsLZDNMYSg41",
  "key8": "oxexdxCQPTmm8vu5rm5F3QUs1syy8t8Kxkb96VvNYtwL7VwFJ4RecnRHMH3aLHc2MtRz2EAuYQsRtUD53mnPnnV",
  "key9": "4W1mbeDTgHLXmyzdfshEm7LXHWzGxTBkhiDdM4SDxgWwjdqp7TpB4ACiuouAFZF4r8i8Cv6ko3XQxgTJxE41tGZE",
  "key10": "3QMz6dkTBQT6BPqJWmPHVyH9cHbA4BEYVX7b9aLQ73NSEwzJ1jubbQi79ChxmWuMekf8JfZ7XNMwrr6iLiQ45Kpb",
  "key11": "5n9aGieUrt4BNYG8tEnDsDUX3CtagnEnEwGSTmvyGKsHbiKhyvcDZ2xaYGqtes6oTnSxMzZ8QksjBZKFxA2GAS16",
  "key12": "3neUE47yReEFVmDWmUJVr2d1xfYSAdoSZBsJ3QreF1KPcGjAJnS2gnUHff8hFdcv2BJ8kL9Pj8ctDGjJZWgefDQP",
  "key13": "2rBDaHTR3KdQ1T3vdyWX9SeoGY4gLh8GFXUFPWHUmXdbHxGVUoa3Gt4b8pxRP1De4B4EKhDawNv6SZpuB4X5ZZTw",
  "key14": "G7xaLQFo2NDXwYZtrKc6cEgCYEYmbrqXJYhEd2uL7YB9GBwRhx3fHLSYNWQsqWwnX9Lh4VCdcw4fzCLabQsQqkZ",
  "key15": "N5omBDvCG3CrKAy1ZNr5CZaLCRnauAoZPxdvQhJDTWmpGaAqXhm6csxv6NWWmBofA3ZD41eACTwgS67nRpgUXz6",
  "key16": "URNRwpXEy7GTCbGbwpmZftXXRcCpbvzeur82jCcuUcAuUs21SHj9mXj3BaehsuJ4v6HnWzK1w56Va3t2pqGw9uz",
  "key17": "5P2qFo3YfNcgLBWG4EW4r7ZCokxZnoiGzoVhz8SqGoE7VHztWYKLniR4bk1Vi4muoeqrDqr4Y2wCjvqeuZhRFHdf",
  "key18": "43yzcmtTCjerJZsYMEtKktoRkJmFqNb4LGwQHkK7D1SgcubzVzXcrsQpWGYrB6mMoL9PJYvQwUAvFXebXtozgTb8",
  "key19": "9PHgmSj22WiCd5uERqE4KRp2e4qEGwDu6Z57pVDkbrNNRBocLuhgXJnnd7swwuxi4f9XZUJCBwACzQtFBeTdFsx",
  "key20": "2SsVydyrjuAhEWFMpCgWRnmVTkXaKBLyaPumCk1nVc9T9s7ywPEpuv3Pw5oeUwjPLWwf1Sd8RwW1MGkYxKot6v8c",
  "key21": "315j5rAPSqiSFPxWCf74xDBAKxt9WtCW9LESEfrtMFump6ACebTkHqPExETtQbh9jRaba1hy824GTL9m9uQ5T4Sb",
  "key22": "52KukwgcdX5JJMqNjAm2ehkJexqwxKQTQTM1zJEq6C1hWcLYNkJyCGyNeA9bExMVF4iZkugiZMT6eGraxEqhHk4Q",
  "key23": "3GeeoWnWGXs66U51DCFZsTfaubS3rHpCHofXrNwgKMLJWDvEkjLkNLzqYJ7VvUZEu95PicUNHCnBSJqbjnccQ8Re",
  "key24": "2CtXNHav3k2R7rAPY8Uik785v2xrB9uLr24PCqQuuZk4RHQijHrQyGxSa2Ahvv3rCg9VnGnWMe1XtojgdXMSnod8",
  "key25": "3HuHvPpoR3wPHpxyBZBQTVtkM1vnRYrasMqYtWf1MsLTe3EvabVbEFxtLhQ2tYJGsytoEZzxX1wEQXdD8etRMmf3",
  "key26": "3TnDvgbRA9ux65zSsaMhhHQVWQzhmKdw2CqHeuiimny34ERaF5p5RCQuRry7rskEwmFf8GhceVmCr7A3bdP6usKf",
  "key27": "5nmYBreubWMAk8DZf1x6N3SMS41DkJDo7DRpCrdPwMq91GUBDypYk4PcEcZuJEGWfX5xyqdx372mHDqhdpJHqD6v",
  "key28": "54jj4mFxNAxUstVyGB9vH3wW4pqkW5Wk4tpKGimmo5nwXYY5D6E2obbKL5kjt4kaEnm3tHQS2JcZm438qWHZvsxP",
  "key29": "T8aRegMvxb7biTnf1qdmM9Jcr5LCjDsA14hsNAZnV8zCbYcJmrpwCpWetjrSY1Pwdp6aAnMRZ8hpSBnps1AqHzB",
  "key30": "UnQRTz6YmavQBrhwtcz7JRh5oXNycuWrE1rhnnGRNoEisTUpfrGw4cCXnAqbVD45C1BQFPv8tC3Fq84h3TaNCNu",
  "key31": "4CLqJCELinvoBQfcRJ78wRNdcWpxCQJu6HGQzYxQxbqcW1dfJTug3j6KvsVsUhRerK1be9Nu3BpE7SUJqaUKmZv3",
  "key32": "4yNAgGDJtf9yzMNnFLJ5j7e3yujycuAUjrXwWyWN8sgddJn5UgdvUgtdJweUaJiwVhyqBKmhHRauiXbz9ESvYykE",
  "key33": "28qbTqWUiYmhhzYGYigGCkqQ9RR8Jt4nYdV3rnnthBaS4go4Qmg3AVQqLcjm95BDEBHULCM35ZJ7bmCNYYfMeVEc",
  "key34": "5DTT2FreAgHWT9b2w6jrBHLn5p5YQy6rowRp4i71AxS9XUsWWwcRmLaFSFQPKaHThfR3JKAvb9esMvcbvYCD62ED",
  "key35": "35Nfncj3ADJT3DmZvBbQUt4RX5Zpad65fZpr7c1JZSGEjdCRqhVUL8itgZ9n2VHLccJbR26TsnMfsQFQegQKncNd",
  "key36": "4tdi5brzeLC472aTK3yuucZ5YngYnZWWon9kr9fk4v4ZHLeXCnpvQZkCutUuyvq6Cp9DFoEB92TvhhmQ4FPFNPUW",
  "key37": "3ts955zagGwxv3Nc33JugdtZRGZmoLj9bLqyW2zzkt7BAhJuUVA8fRePCFHqHjueBBRG34xRoQDi9we5aNAkR2ad",
  "key38": "4Z6C3NqMFWBaaJP1Uj28asEN6oiWy3j858cYg45w9eRNZL1vsPPb3Scrae6V1ZbxX4SzpC8tSmVuEUtWrrfTybRv",
  "key39": "2UYVPGM4CegLtKtW9t7U3E9HkHYrTwEaMwA9r7AYWZnDe3iUadMcxCZf2y5G1zqJRaaneVky2ZgDxgUHfAJYXXjk",
  "key40": "33tSLUA5RhPohkmxG5kPxnQznPKe6AiqF987Nx4cy9ENPViyai1ubWMpLgpSB8Ag97T4f3Nq6HMP35zmz8g843hB",
  "key41": "EHMMbZzTDf4BmJZ52yv7uxYS8xxZKEtsdPXyRXVwfL4Su7vdAhPUq4xycjDVcGCsb2PCn9KWBvmu1tSCMoMShb8",
  "key42": "5hodvWd3NLb53wVSx7DR9G2sXXKh4QuNJ18zSTzqdJ5BHZP7nR9CafDUuJQq46aGcq9EQCxwyXUTchbeKZBYV9SW",
  "key43": "3axa1MJX7J23p2651EDKrQS98KDras1nZ5U3hYUmmpSs2CM5f1u2qU2xeZkXJd4YznCwBezJM41pVVV3crTiHaaa"
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
