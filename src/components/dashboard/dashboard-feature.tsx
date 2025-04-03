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
    "4oisQ8TSv6XbnBAeA6XnznB1JYPBNTT2HbH8EyHwwGYju9vEme5ZJcJgCJqdigNCSYSTijAG6zPSP2aSKPM1CyNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oPihAt33QzzNtHvK6jL3xK6Mxoz19UsenfPnfZELYZ5x3DMWtSQ9KRkCZWUG8fGF5Amq6pFpoUbAGjQf7jVT8rE",
  "key1": "4LxVb8kAH5FarzSCrpoaTyfYPvuwaTEKZVPrjLzhiZ1SSgMV4Hs7mzcudQmNbz2F8wFjMJvwYU6JnuAhXXb42M11",
  "key2": "jhirDF4wCtYBbAquTt6nuhEqx1eBBwuntWqmfiR1c9cfqG9xLMWQWqUEZbmswNFsYTtLDzB8qsHLod4JW9iQgKF",
  "key3": "2tEGNiy3mr8MW1MunPAZ2MAn2P37NW9wmsBtmMDqWKf8GvBiVTephsrC7tvb7tM6ooyeii6g5syJmHw6MRMGVmxu",
  "key4": "4eYYmXwwSmNeDpqxdbyNoHJQzEW3gruer3zrkZSyubg91ZiqvngmL8qHqo7eRoLXdu8hDbmx2iedzmwQRaqb7yqg",
  "key5": "41FoWohmESjaihfYf2hgyiZ1ygub6gDUbwQaBYHjxqfFtP39fCCgXY3gEqXbrSQifqyvLKc31cVJhAJJrQN4nWcD",
  "key6": "5ffoRfDdx7kngj9xQEcD4ifNy27TPPU7rLAf37YTkckkArz9xvjhc2yEiq2HYkNHUpvgq5ibf3qpyRb4n7MLAQMy",
  "key7": "33GQoHbM42fx48tAAUS8PuoJS3WoXZqZjkcQAffKyeRpegb87ywpJP5wEzAaBuGZTznc7oA1mFTNZ8cTtst2Ps7D",
  "key8": "3n2AyWnvvBwyFh7aBTuJssu9bVGu3PY2wEErETKc2GFvSQmKT2XY4kq16RQBuq5FMr3Q2EkXKKmCvd4stZFCeKCG",
  "key9": "5qSLigLg3YqLSfbADJpNg8b3CnhmYEZ62aiVwvvS8cp9o4mc9qqtX6gujb7Jd5xgycfqJ8fNivYD55gNcgmHG6Yj",
  "key10": "2PpbqRaSMZG8j94hXy53ScxMADtdiGaUW8HZ9FT6ht9QEJYUTk9WJwnaJAtktnTD232RK8vG9LWXeizASpjFd71M",
  "key11": "44DNq56AVVwBptUQcoLwp2tjo68REeL7nZUhzwm4cKjBPxdkYXwFJQxo65pEWrR38Ed3fDGDV6faWPU9NrzDVBsT",
  "key12": "3EbBhiWxQqqz4ngWY8PVRr5hUbwSZBVEWFxKcyR5dTJhAeP9o947mpYsRrqAU9vZ9CtUHUUCGvW8YfBRnfg98hCD",
  "key13": "4gYsdXn6muJ9cfcZLJpWjquotf117Uq669cB2vXdntrQJHjEYMTeAxkBm6FkimVXgvhFWo1QrkqZrm1rWC7b5Buu",
  "key14": "64h44WumP65RkL2Ho6GNw7Kc6xuL9RtYC55LgGtbnNAuhMu41wGYrrwjmg847SZMG9KXVPBkYZaQNH6kh2TxekDg",
  "key15": "PjFS59LsMVZri6CzYV25gVFj6v9Ntjq6WyKPVzrdnwpyCM5q2bZw1156yPdamoaLUQUej5A4t5EaW31ZjoAZdke",
  "key16": "MERFpxWqbuEMbffwG9RS5NA5CMk1xA8SxSx8shDwNNxBQyE4gXm5vT4triffLnL16Z43pTRZafXpskVgdxriMTQ",
  "key17": "4vBMr6f6qVAJAdRkKsgZKNRLUFEe9fgDdMsD2KUR34nTtM3HPoCoWUETCD5WiDYhsVfrMgsiYTXCtExeFaJoGCoY",
  "key18": "4ssxt5XK4Spmtw1AXME2KatBP9KNWCM43Zb4ZU2bNNQZ9XhSGPEGeGAwkukkHof6jWr9iWYN4TGvzZ25pSNzNLRX",
  "key19": "ts7y9YvJFtmbTuomPb8hmSCBVcZq88VeXFUouKNjcER8JpRESTzT5EfEstbmghXa6KjvnygYsspzRukMovAYhqA",
  "key20": "3eHVgWkMeZEoiw8y84CoJBMus2M5Z7nEuZd8PWCkx35ioJ7c34oEPUSHp2sHdWR52bBkeP5JpNqd22LB38k1Meve",
  "key21": "4DeGbBpYLfATYN8Wn8uxN82QUJFmT6SVWh1a6xduQeL7sf5JPGDjjzamgiaLDCbqSBLifLTr95Xfxj1nw5UQMi98",
  "key22": "3Xp4VDndxxxefivADVDYtmA6e7bpHgnPN5QYfL7J72v16jqrujwRkh3yyckeG1UQTA1nysjrbSMigfoifWhu4UvU",
  "key23": "xZBy6vkEsmuxcaNMcMn8TuJVWFAxXBt2Sbpa9XtqSfuupGcKA599DRfr9mS9x3JW5rGJq9VgbRNiLK7Ge8Z74Q8",
  "key24": "36a5XVAgTyBfH51VMhB4aUkKvv3XPs9yFYDdXKeA5HonJKTrXcCQFv6mVDPi8gkEgXNdgx2NmNbkiNyaMHSZKXSY",
  "key25": "LetFVRWXibNuKhJNUjpynqP2kw2EYhWxYKN6FksqWy9cScs3PiWTJpoQDt9phUZm1Qu6urxtmYoyTCYtvVacCpe",
  "key26": "2aXwBzyWN4TvE846HSQ4FvJP5k6pTEZhYcgVKZM7fSPF7KmqbBj9poVkLe5FTnhKjgLTJuLcYsE36qqNu2eRL93P",
  "key27": "4aWbad1nMMN31QautvnNE9fXWaGu4JdTSzvvF9yjMy1BBrhwaUDY8ngXwN3zvCdctQ82TFgjH7PEtTq8daKZYFQF",
  "key28": "2e586B4qSCc5gWHyEjnMP76dwpQ4oUzX77VfJCjWAdC3aZNaVgVpmdhZD7rx9H7i1ZuWAXKkSTZcWyT7oANux6Y2",
  "key29": "3hF16YWzV44tty3VJvwEt1HpBd9GNSTYgBaLaim5izuyAggZBNByMFzMjp1KpNLbUdHVCDwYYiDgrZrXw4GrXwSX",
  "key30": "YhvkCg8uCqyoNJ5hWxyEwZSGjiHZuvuyHuHU4qsi89PQ3ZsMsgrUKsoon9WRDJotD8f2Y9BmzFbbNeAD6GtESVQ",
  "key31": "3UAjLeqeyn79EkHf5N7ZSjPhLJUrtfqFrz8ETSDfj6i2GYTHmFA39tGxMgd7sYtcZaBULhE7pqwLLcgBdLigw2Mt",
  "key32": "5umFErpyfKthRrg5e4UM3TjWLEaVhrma6eqSy4oHjXQrZkYaycER9FxW3xf7sSE3zAmTg7g3dotLqsNwRMUFGhpn",
  "key33": "2ZZW8xRPuohgBZVLhwj3itUYEjbP1yBpdpsyf8srNmrxFGknCLxo6DvLyXcuqBBzDANFTV4RyxwARw1PttvYxeTb",
  "key34": "uM9a5qD2WBcnK8KCgEZpDUKjY6NGmR7MoLs2dEc2Kpw36NBVuyaXBQF6vZWgqjzL9uuo5FcZDBVB8G4AqA24Q1i",
  "key35": "feXWYCV8cXQqJtqxh5TXM4Qw1tpSxUbLhNjUC6SNMvfRb6KnanEH6zmZ7pkwVAKgNRqeUjx8HFqK3NcjTN2gn2E",
  "key36": "2Z3EyMGWs4mzoxMn9UUhvitBsmUFVEchujgDhv1Z9opyW8JMZ9bPjzsNz7Nfs818ZRs9oYhznPnwFF4HUXzBV4vS",
  "key37": "2WwGsptavXj5JL5Ng6SGxYkUjuGQXJeKLaNox2keSZWFpaFxwFVmZQ64DAQFUUxamWf4a8FdbrKuYoLjktzVCTm",
  "key38": "3ybgQ4qCAutwW92SYikaPxW3nPu9QJR9WurwGYsizBCtTXVEgXSks5P7ocx5wUsPGkSY1a1dy7YC9KdCvmEkvnVg",
  "key39": "2PjzbiSb2skfpmUtEenjS39yfsyM78BKtJWrFuwoywwNFVpNsVeSUQr2JodFJY3UiZt2VeSTsKvGg32Jxa9aLY62",
  "key40": "4YuX3DYtbArvSCFtPQFh8c7HtGjDvryHtqXiMNPQuKQ1nGxJPYyVQLgyy1BwEZnecKg2AdE1wdmurT93yv6kfpVi",
  "key41": "5ZJY42Lyx3c2LqXiUaZXdmAxgveTvZTpLhybZvziQzfahQEeqqNXnJmLirDUcSakTrqJZXrD87ss3cKP2SnpiLnW",
  "key42": "5hJ82swQgpuTY3yr8EZfJ69W2nomqVGDW16yr1nq5jdfDwgiQRjn2QRvWhkCQhfDk9joWLCnUMbmrN3RqutkdBmd"
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
