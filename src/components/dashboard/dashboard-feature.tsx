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
    "2jJxPkd2QjUHRCJWTDwYYY36iGqc4qDerGwxndzXxsekXYfTNAoK17XL4xS4JV9JTRAhmgyKcsC9KX2RsyeWZ5Kd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZPNjVW9gbZx4wdg8LLzr7ZSwbFbLbSsGo7YYseNB8vuEYJG2e5n8YLjRy8hmHPWBzehw45NQrb5RDnY2HVrNHJB",
  "key1": "8ckwQ6uPkvjVTg5TG4BAxXG9YPhgzYtFZiCEKfhACS6JXjGToPPqamYAFbPY24LFoBWGK4H7kHZ2UzezSK5kwhc",
  "key2": "4YKsLhUPiLewqmDtDyVUrkcWTD4MzXq3PZieCMjoiaN1XVUTzuW93roRRjJoRMBUkJFEHnbGWcXGMFKEpkxcjCZN",
  "key3": "56jegUJdnLbm4JQ2C73zMqxoaohkut74F2hNWJuMfjHdZhkFt6DCK86o68GVGPoCfnFzdhmqsU4VTfF96amDkSWi",
  "key4": "ein4H4HAWiPtJiaHn7qv3siWkSBn18oA4ZRExh47UZzJsAYzq7geMbWCjkPNwaFiSC8ZZVGTatZ2TwwWkLkU3vJ",
  "key5": "4RqB49aomTLjMcH3ZpcLwzxrAAERCb9e5qfLHUohhfSGeGEYZYX4VUxVdA1UFrhj7NGixHfMv7BLu24SwnRd969T",
  "key6": "5UpryypzmenQbNgzZHeW7gUuKoqqBwWvmgFb7YD8mVjXLqqayUsNkdz7sEKHFZwhNZZXiUxyJXAk25jCz1edxcNH",
  "key7": "5iUaoak5fHyWXPwUCQiejthVBMwALLDmzJGpuFWxF65e5hgyaBABsnj7rgsncEjC7HohavkyRFo3CBWq2YDCRvyf",
  "key8": "4vXpy13rNBrqpAXeSyqzC2BxB5unWfxyMT8chpL3fn5Nw5My7sN2tx8UiuBxhPh3z8sNDbMZRvsVpG8WZo1xq8Ud",
  "key9": "51U9mUDfsPTjSWPmydbja2e1NC9BgHuLucGTFeoR29BdioEAPKRZqbiXTB59e9WJroQEn6ess8UZBXoALnSjNfw",
  "key10": "XjXEnH6zsxC7aecWAeZE1YKnve8xPrqActhSie3vCXAccPyZtKBYgs79JoKyhbtweuNjkHQpzqM6jmoLWu2uF7J",
  "key11": "2zB3APSt81AmbiXR7kxDwBtnAExj5hUJT9NJGAt7y3JeAmbEqLApa7EofERF4KsoUxaQ4LLHnbHc63uWyZMrQTiq",
  "key12": "61KH7YQTgtPBnq9vRccJHh7ueVgJgHBFWidDDzrYxy4YMqmehZBzZKqES9KABUW5RqK2JvCUK968YjpESLqqSn8j",
  "key13": "uMCxmjKjxe912HUsCvxNpFaPNNiZWUNATeQWygdB9ELLGRyeYckRFqBujbmp9fRTb862wpJXvwSF6GCGNWqgK3Z",
  "key14": "2CNGNZVJXE9Jn416WXrUBpHA6MUgsMkTBMvJa5P3s6ggvjPN8bJvMB4q2gbKbYw4cwZmb5xn9ZEaH9JQUtYcf6Rd",
  "key15": "5qQX89LVep4QHfBFjJrUn1PTEwuRQDBXhfmwCNEoyfdrYGEkt9q1UQvgtJPG9ubjppJUugZXVDB2nUCYHPQfaWjb",
  "key16": "gME9jDpoArJ8CH7vHkwKPsTewXhcadncHbQfRUhRwewUrrXq4rvDrPXsEdAPw2ipke9DGTruKdHDNyGM1AB5AV7",
  "key17": "3oL2cS9bYLYkX2DGLvbZsNFd5SUAzqXQLysqjsH7z5ZaYMkAbhCzK36JQaBBvxrqj2SeYsLdt3t7sBRw6kJ2nJXM",
  "key18": "4v2ix5Y7m3UheVZVGkgJFuSFqAi4uP226BdweqiNew3qwEnbd9YYJJ7BYMmxupEi6q1v47GiboAoHMnXngazwXxe",
  "key19": "31f1eDpkN4hrQhPKWH8T6LzAT8bzCswiKYKmvShtogDc2vk8VCjjtkgaxyVXPFJ7ywkUanHy9r6h2nEqVoBLHZXf",
  "key20": "5sMzA9iy8YSWBWGV5i47LDKv7BTdwKX1ksH4hH9gc2mUMyryWFQNRQUqhpwDEXoCD4u5FJhXShTC4pfKew7Hh3BS",
  "key21": "4Fa2NAjCDESmMJ3cgwYqNDoHGGGB8FCfuyuRXYRusQmcLkiCFf1Y92MqCCmU4hncqMfpEQt5uGnmNLcub2tEGnwc",
  "key22": "3jV6DsEv5TEa2KmYUYMHmj1vu7dwVHR3Z4igxoKaJC9xQPAJ2oKQcbcSbAwBtQtuciXChoAnFSNSZFbg7XsPuJww",
  "key23": "2EZnJrswfH6qvuLpa3TAq8QvysZyG2d6K6mJvLJk9SDUEmZckX7vgc98tgF1bHrZdUFwpthBXr7be7gSQE45Scpn",
  "key24": "2S9sadAcoWWkpEePVbLxhEXzpTt2o7hNyB4MPnxN1gfZVHGMg6d2dLNbmXj1pv59AFLX1T1E2fLtg3rJLZRp9zwa",
  "key25": "5YZhXUrUhjSgP6dCYwG3N3HBEQcSVnxDcD814qnmfSnXG9LwiygCUSpoZirCxN5D49GVXWXPKBjw7abNsTd5FB1p",
  "key26": "2AYNKhzgoHqMVLQqWD76Q9sRtfgakuPRLf7jaLsEmJCX1HNSmmFW3T7QxhGneVgukTnMLEhHBWFo3HuWUnJPwefB",
  "key27": "5kpnPqnnsmWqAzKF1D3zMq6yBrAALJYhuPQBqxWHENzNLKvUXDB8kvvAJ6TYhfK5pEid22f8x5w2jJaK4bfeJwFG",
  "key28": "nApGMjYsEGRHHq8yG9cYjGuGSQPnd4As1SLgj4owVgwTvdvcKETamq5Kg7ZnXMJZJbq8K3HnKz8WL9f7qaoCnj4",
  "key29": "4jga3wt8tFAk8sh2g59uxE3q89vDzAAEAnhod5SFFGHgUiiPdnrvHxhd3p6zFhJFE55DRAZYyDoCuPwz44TzVJ6f",
  "key30": "29NdnMGJxagtjZsCdq6ZrsiBK9toAqeM2RcwMvUszd4cJeZnC4W2ynaJ1SkaSTBeunw8naEQ4fE6wWY3kF3NFMiC",
  "key31": "5hY8fXkSjD7pngCRmW3AHx5YvS9r2prP9bMTLunqSgRZYfWTbxAEw4AUgL9UJUUTg5y7J4ESfqfRxcu2tVWAf21j",
  "key32": "3RKE1wwVFWVpKejBb6qWmV9G6Vs2hi4mrjbgNxUPqDXF6RQup4gFxa1WkNNmQCLyBSAPjrwq469xwn9jiTVCqt4U",
  "key33": "sjMB3b94ipbvsuncciYac9GrZeiXtDHpBkDSHFcJPQkxXE7qiNW4PDpASfbVtUMvMfyRZqX7oXYqS9Xr25xdHAN",
  "key34": "qDt7XqPdab2H26iKL8YmpSRJuAK1p781HavYSGqMDu5Wxf2WpzLmCbvJvXMWp4thX2cdHTBUrdCvNgfHSmN5wD9",
  "key35": "5n3mT7jJVRLE13kGZubsY8v2FabVZTp9m4t5SQVheX7xgmRHDBMsN3g8swYjKnkmGfMpyp1dgwBwT29mxA2GiZwi",
  "key36": "3bhEVnJ6faJsNv4mUXnxVCZbpZ8PkLUnzbwag9ja78XgJ7WYdurfFqzfMFVjj1QkzBAzK5PkLFf6dYfXEPSUNqVS"
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
