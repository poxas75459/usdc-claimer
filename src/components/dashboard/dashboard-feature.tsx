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
    "3Ww6x69vZnaiL8mHVupypUhZuVUxZbWZLoKo5gErVa7NcwyXmVRJ4DdMJtPPhBrJM4gHK3eAUznkNRc4N5SMywjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5fYzyD7UUZwJ1Vu5xyv7wTbcBAQzx5JRsHkrXj2MbZNfMrHV1xJZQJDwcNYVjJo2acL8hbt4kdrjQgjw3d2iVh",
  "key1": "2AFVVoUD6npm1sULs3cFh9hYXT2A7D6UqoRRe4ADTRZR5Fz7vVamvts3L2zVKtpfjiiVmjLU2heErmFrC6osScJT",
  "key2": "kpuXhUEGLXszJxhygk8ZnA7UxRk2gniX6sFBfhxpRjYUt8uMmiVNoLfLeqbE4aRarTGVPW5fF9iN6w8NV2T3AP4",
  "key3": "y2xmXeXCSjY8NhSHjjydWo7xX7fZzCicx2nhGLHdDWCtRc84e8iNBEFszbmgaNa6YW38o1WGLGLDV7HKNPvJqvE",
  "key4": "66dqtTtvLKCpmkHCv2gfEh7wyfhzrwRAZy4kjRbwzkc2Y17xKyqGsAs212mwzoaUoLqj8u6sDY4Y4a5h5BSspMLD",
  "key5": "5775tr21KZ21kkNQ17ZnZTNF98pnzbDjzxKkf6XsHtFbgL5utfb43NAwW2zSTkUwmrXCxCMkcbSyTeYYhuuXXNc6",
  "key6": "dsD7FrBocTT6xz1B5oT6m4w56rUkbUmWwcUCD7DVWBXvgEuTqTjHBZS8grAyYG9STXujDeMUwUTuByJQrdbRZ8H",
  "key7": "3HjuAYoFt4PYMy8QQUXDGcMFgKYX4xNxhWPgxNmXFRHGhb9EKXX7PZBzFFqQoAn1S9HYHDRJd6SpCFzvGZoard2y",
  "key8": "JNnasBFgViENuDhrtwUNpMrQfqyZgXxkQ6TQSqMbuX4v3bmwR9a6BTek8ZrcP37hrN2cyFW3tA7tg4zFefxpGrj",
  "key9": "4V9ofcD2DZZ21mHaeEC1fmvAgJJJKNGmmBwqDPySaxrFd2rqPgNcNcZYZPPvAx8HK4cfbvVZmmVaNb9RYTb6o4zU",
  "key10": "2ektStvxygmCb9z4TYTUYEBHJGi9maUJdxPix9EoXwYFctP6hQtDAi7AohjvhSujHvKvobpPnBHFGkbTRTvWBU5Q",
  "key11": "3YydprNhvtDT6DtbsVuhHfTWpDgspJFBWJtWtQCK8oDv8D4dMUVsd3xWBsBu3wEE92Rte9sZaGiUkbqZcWTVuFvU",
  "key12": "wS2NXdMZe8rRB8vdo665aJX1UqJNKThZ45tfFVZBvesEC7KVvS1Twmp5aEvvLgjcg5x9tLw6EybVMYp2mBUUzGc",
  "key13": "y9G4Y3YnQszRWUsnERozDCBD8bP7mK4mF8aTUwfcijWY4hEfRvUx5quD4RdM2L76uepjr9UbgVpc59D8P8K3Z2x",
  "key14": "3UhHUEZzCibLSYu6Y9A74KR4Jb5rLzHGvUQ32GTo6icQdQVDgPtzrfYhSKxNKUQeXsJmf2VFRugYMF6MqgaYpCHN",
  "key15": "5XQA4Y7QjdLEQq65BQjA1ZkwQ2FBjHQJfZu2zRb28SLr1GpyANPEY7NkSSueuuto5EuUEXwzXEo94fWqCj36mPGG",
  "key16": "21sJWMnjBbjSRnTuQTx7EB3ZbSge6GJvawWqvVKvz6N7ynmE2y8NvbARjT7S4Q7TgHCxkpvJj3e4JizRAqZ7zR5k",
  "key17": "Z7ETtZXhaBK9nYiDZsv3KCwn7Bgx4Ue5LuvKuzBpnzs6Qg5ohejzCX8H3KkDAHJjAAh8jYacbnW9gudHzfACr81",
  "key18": "3Ghe2vyvrJnCEmF3FDJUPRDpCxx9AL3WVsrLjb57ej6YSzoVx5bXDatgXFdVdKe8FR5PjNA5Rj8DrLZyVhy5HUwz",
  "key19": "3ac4paQYJc3rxGPLrUBxzsnMe8EiRnVjjrR2aZ629vME4bJ3vvZxKGgSRg3CykAerZy2mmt4EJ2TnFs9Wq1V1dLe",
  "key20": "gZiDXJy7jyNLHJrVeog6jhtXQsQFBAXAyvbjRzR5jdmG7SPnEBpKDQrGs6c3XjiNAHGfyDe63BTmMZCtZrvMsnk",
  "key21": "5DhZkMRyFWr8oHsUbqYfBSgtKspxTcCjM3akJJf7DbHo6J3XbYKB8gAYz9MneUM55ZrHn4VKb2RGYaLMrNg4KJKU",
  "key22": "YG88Qs1dzSeyMBk2EXV8hy1FQ1L3pc1MQd3XSsTxaUpeRcuJav6jh4kzDAAmQGYt5gdhWSptQXYcPG18gk87jfC",
  "key23": "59o89WqAx9z65R4wJjRKwP5R3aXnt4KDiRcMEMkfxYJWv1CLTNLwsVZGFSmPPnN8MhHx3ECQQJ17gQ7PqQ2gsg7B",
  "key24": "atJEtP4SubWoB6XcfiAzhNwA8piZJUEfkqTLVkUjK6ArzLQYTkxuUYnyC4XAMhdCUJ96cJEi1NHQ6bZwY9xxq7t",
  "key25": "4UNNr1U8GBPBjyKYeYpqj8KkwwRdWZoJjqqr7eMA5rNiwjoGHByBKcXJxPjMRvsP87yRRdaynGRnHGxFysesznie",
  "key26": "3Dy8B175EAzbbNoAVXzd9TnkCb8Q2WiXSoFKv83ZJTTK2MK6sy5diTAwZnUCiSrcT99tU3mquamJmBjvdzt9ULPi",
  "key27": "DgvnJsqEiw5DBdeU4SvGtEvUj23UmNxTF5dWsDPrSpjUeaY8PtJXn6qiUd4Ewo9zKXmgNrGjS9Ac6cg5Wz73ZDe",
  "key28": "61szJkZi6NZ43V5SLGUb2HmfEk99C5H3gf8SQyCoU4E8NM5NsracsSoLS8znYqw5v2TPoHDHUSJHY52quEj57Jme",
  "key29": "5H7SsWCa8RCEcofwGDutNy9hfgdX2mFW9F1uGPuBfMiGCVdk2xhLRJsVxCgH2LPj8JGu9UAe6VM7h5Q3R9N3aCFn",
  "key30": "W9bE6jLzHYpXAC21sNH88chb7ahHXcPnxyvxCaR2bD67mCDvtVtYX4iuHXuFv13c76hs17fK2vmQuZwVJhFQyku",
  "key31": "2vYkcHZuVnmQtVo1wp5cV9nPGaGx1CeS1J7fpLGxnqU2bbH6zH7dvtGwoykJ3pZijx542sZfqHdbfFMmDS4nizBX",
  "key32": "5q9WbSwsvyWLU9TUiztwbLqEw8pDekWLd9J2dncJqDZyMCWr2y3gQcpyLDVwn1eJX2sMs5PB3GVGLXabhLmUn3wA",
  "key33": "5V51Q9aEz8s6S2Wn46kDci8EFRnZHLhQF4cggxx54op3CB1XrD6vffuSint2yvCC2yJJGnBYFh3UU84an8Dgt2P4",
  "key34": "2mpppQu32AKPbPhn1ze18YdjLTa8Am2CFW8EpdAQGkpGMmjfxBqb1faNueaCKXq7nTZxZN8dodc78BFYxaJHTxkt",
  "key35": "62kDwbB6urfazKgUdvXERL9Ub1h9v8eGeu4hUdvMAsKR8zApBrMDuQVMRgNo9HD3cUncchAc1GS6nMSaEZyUi8ai",
  "key36": "529Aj3x5bRRCjmtZqmJ6yGzwPKBno1xrMzC7n9JkRNwSXz5guQWHh6RYe2GLNpKk6JWu6RwhckkbFFreXqGYmrZn",
  "key37": "5B3MbgkLvnBkwxsK4UMJAar7Lwy6LP4VdqiNbZC6doo5eL6TSC1sw1hejZngLw2pprCUbqRgkTmAi4SmC1YeHB8y",
  "key38": "4EsJ8CUaBqx78FtrBpx5vXcJD86i5Br4AUCtajyvMbkxf6PybVYYVmZtRTKnca2N2bDF9prESpvBY9MvwwjRgu1Y",
  "key39": "Ts3rHNZ3oami7r5xJzouyuUAWDAC5nzNTqiauejCHFWkGFX89iM63YpdKLg2jbDNJ43B5cTT2zw3GqWr8B8k32L",
  "key40": "22wvYEmT68m2XUNznJVmpZ74wtvTaniCPmSpAWEUuHgV3APZNxfVxvxsFs8WSqtX8ccCBKgked76s4TwLtY9bSix",
  "key41": "7cjkTph3XmmVn2Y1SFrhFCsZmdZ9zFttZBwtYk7ihzR4JiCeDUAu1uKpBHe5gF8G2ySt76ZMAoNZkfpX4TntmHQ",
  "key42": "2KViR7jFEUQtd3TU28KGpJaYubDzLuNs2JaXPR9Nhia8oyTgc8EZ62Hg9QD3oPHXMHpBYNtgM49pVC3KYABi1W4R",
  "key43": "2QPLMg9pFrhP4eGouEGbP8kwJ5xfxBH1wZBHybkiXepSpDTGexu9aH4stHK6wU2NAjZXBSNNDUxAFRNoHracVSGP",
  "key44": "4xZTH3KPXpNSZ3hAQhimu2tAniVgbzqSLKD6FhWEnqKyNHnceXM6RQPL1yZyP7Ms4BcAB6ZhLFPpfKewcpxGCcUZ",
  "key45": "M2UnmMmxwo9L9cJwtCdkYuYWsPk1TYB27Bwpa3e67EoykJQCG2ifLYcrK4G4EkHAsVPytaDnzsC7yyBSHFLxaXi"
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
