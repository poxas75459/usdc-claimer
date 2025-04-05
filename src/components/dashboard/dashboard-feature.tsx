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
    "crsf7TyP8YEZHqQzzQLm4LPWxQsurXyAHcVnV45MvdEekTTEP3i6NSG5brrEkzLf6QkBfnzi8i581Nw1vPubFfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WaEE8orSdSMbo1DoD84CM9StYNW5D1Fr7BTxv5gokQB4E63wAhFzKthYQntNbxcP6rpR7zdwmynHiNsArCDY4Sn",
  "key1": "4xSJzuwaGXnXUcChtT5gkbxmZiRzs9LTWURaBQRBZEueAyzrL9C9UXJH3fa2GAgRQ6KUmwEqLW3BgGcuy3tFVzBA",
  "key2": "S1MzYbmySKP7GfbmTmvvkpRKtRnU5goeeobcpXWg5fJTcYmxYZYP55daxAL2r1xdnDCzyAkwUAe77C6K2ojqHat",
  "key3": "2jyHj4YeMovwZ7EihRgak8SdfmVdTGs8ZioJjCJedmtZ9gvifDyau1P1GPaZmxRsjAKRzi9N6GkdWe8ZuN5GhCio",
  "key4": "Ai122LKjJJLN8eXAERoMf1jRuzMADRaysXDebKzzDRmrpNHT9aqDwHCsMGi5nc515EjosLDxP1jjvHpfp9swC1n",
  "key5": "dSZx5CFuBNuotAq1kgYhLVQLrRzR8XzKcq9xLgr3xt3RdbfuadFTBUSW653Ucu9H8fVidaWZ7s3BBisnis6FoLo",
  "key6": "4vWXz6fHSaj8eKfApWpbGGM2YZR9jegTdPDEw38kwbq4eWuy6Fxt9YhfcXS5mLdFLsLHU3QXHL68HoC8xUmF4FM",
  "key7": "2bvYs2vg8VAJ2GDAtZJD3sUzo3JSvQcgb86X1x7rHdy1pxxiLQfruWgAkRR6rsDsxY4epV6sDJqFLi5kmQK1JKSo",
  "key8": "hugvrrrEDpShS33se3ZTLLRjVPhPYKjcUB9HvMGvGaQGZ2dgR4c9YMZwqUUQjGu2NwVF1tTnTXKBMehPdTsSn9H",
  "key9": "3kq6hMWKf1pxijHCM1o2iGt99L3dvzCwPFhf3epSi8xodAri6ost8uyM5WcNRQfbYqkPPb2wiP5EYx1Uhv1o4MWJ",
  "key10": "36dSAkKTGA3qHT5esuufbo1q4uxf6CoKqPxbYzzjeVAiUYZb1LkPyDMyxY1WetuENBWo9dPJX5hMtvQNwHZJYhAg",
  "key11": "5NunxpbMUySghnA7yPj9zxtHz4TXmfs9RjztG1Xd9pheq3Kp48uG2K5GAM2XgicDkYjRMYuLrxnAyMmwhgeCXTRd",
  "key12": "4xQzfkdNh4a6mBSrpBK9Fm59AQGfcajTUjjJjYJmqRqihzyxwjZ21Dfv6SmxV5D9RgUCU7StNey6KXxBGRRm49ek",
  "key13": "4HYqbVoxkcGQo7MbCCQvtSEMsAwSvH4o8yVR22JXZGfHxbkku1LNBEFT2QoNp6bNEq1BCD9RgrTkrJTLLPXeQFXx",
  "key14": "3FT57UuWMKQP1h1eQsnQsMVXVaaWJ7edNznEN2hquCZEva46AMuBSbWY5Ur76AC4R87JGuM3GcdyeT335mroHy4i",
  "key15": "3FaWtGnc2MTpxKuFdo7x1D6xXHvxJCytTRPvxwFRwXjBJ8vJCxK78YSzcSCc7qsGNxNiRpfrKUZMTkVjfgmmYfe4",
  "key16": "rAUHnpzAfK6ts3hkMRvQPCdyTzxxXSk6AH1DmSwEHmCcEq7KmSJsWaYZG3BFtFtfo8ha4uakzeTc1hMk5w6CV79",
  "key17": "4RhwaYbJkefSUkzQsAoSxnLNnXg29fH8G9TWuLEDxyfkbQSccFBcptWKHKvvF8UzqHs279t74cGWD9CymnLePvi3",
  "key18": "5TMc2cWmy1Z4wnxmrr58ad5jGurDVJ1AUfpyickXhmMjr382erS94ZfdS1Mi5R3HuKWDZq5gc6Qs6SAnAE2enjFm",
  "key19": "2UvNoHBivvPmXwGEqLaCqTcwAJp5aXyN4saWY1kJnmWqQmbS3EoC2LmQRJpdHcE3Mi36gcY2VzEaU2AETBsLuqbD",
  "key20": "4tBJUpzKzj18oMjRotvEjHFyRNHefQ7FH5vyCckx2jfezUZxfujFLvGiX7btEvmEd4DFkCGroTL9MK9vPEJbd6Dt",
  "key21": "5EFpqejCttHvLkDet4QotM6fuv5QAHeyMUMR7BXAHoFxEf2UZdhF8qcpwrv9jeHE6XcBgFmc3fMmBGMHSnYRh6nf",
  "key22": "3BtkMAMmRXQCGyUdNpoKQHJ7hHqCaoE32zJAFEXyTr9TvyWScCcpQoFSwjJB6W5qaUNJPAhZWwbjrBGDUaT2N8wo",
  "key23": "5P75ikUesXRPmsc8xKKyR629kvu2EpQf3NEpZUFXqXTNW6BDbzcgQQTxr6zVZE8zK4f6FufEHec6Zm59Bxg74RuZ",
  "key24": "3JChffKHeGT8kRTfyoU8RHGAkR2jwx4JdHTMLNNqei65zF1qzuTbNt3YZ3kbGzJuEBESvtZDkc8oLvemwBkB1FuR",
  "key25": "5vxpQxZQeARYJKEvQxmY5STbsvWgZYaTV6Y6izHW6QVtZKoqpVt6T7wXkfAiJkKTYgFWwwHB9zSCpxvSWRSxs8av",
  "key26": "5qxcW8Ajk78StnwNdqE5Jnc3jJLFkPQPBYjojqWcsK73DQmSEDD5gz9ATsAVX6yJrAcrkhaWktjVRSr3PPVUWpWC",
  "key27": "5nkzmdGJooYFnVs8TCtAnhriMVrWYvpTM5sP48737zN2pTw6RY4dmAFUWDs3iWZsfkzwVgXeyz4Z1ipGqdpzjuYF",
  "key28": "2x9vcUWFAbiDdkGyQpBT8rHq6ZvW8ExQSWpEUDMTvKRJQj9TujiV38RYxTXdeVyK1YxmYADXpZ1LVdKiVJBMzk7C",
  "key29": "HppZT1cp5fCYb3d2gYu44R8DhgyA22ygasGqypxh6oh8oHSyHFv6c3L86oJkqpyzniHXpfXiZ19zUUtFNCJtvN3",
  "key30": "YPyF48yPM1uyaENozFnHNk51sNcbEmBgKizmceF2oq3FYUNXCm2D1CUT9p1MkJXgnEWb4rySBNy7acPUXFJ5t7n",
  "key31": "m97XLLxr2Ahfosr7TLLWU6yis32ydQQvnsZZatu1YgQaCr2R821jxAuJZJNu5dM6MWKUS8abNwHFtvnfdfircWz",
  "key32": "3yYuoQBktmcx9Pec1EJDRZkR234ePm99ppTgudYA8TKsFuqsNZmFo8RmuAG4m4Ruhnsyk7CFfvAz5Jn9G7n2b1bN",
  "key33": "3hhKxf3RX7oNV7dtK77KNMhsunXXnxFFo9KAudBmWgRBukqRSSVG8eKSsUN6VMbunazgut9AY2kGkE1kjnkcWp23",
  "key34": "5dGDEhBCnvovt1eVfzfoxSZbNbfRkUwkJzwVgtXAWR82YP4aTkdJz9LwAhvBUEtheS5qR6rT6U98PzA1pi8D3u6b",
  "key35": "2JmbHJockx8eojFquFvEHFCQJLgB32yZVoDMUQKeZHSPJ59yKzKz1ACr7V4G8NuaW1FUZE8p5zdbGkjbMEnBtYiR",
  "key36": "5JdzcXf5c5DBStooyacfBJ9HPxuJhu4hkjjP9NuFoAZ6rsYTnmQmnXSsSwx3BbCog3BVvR4jgYToFkiQAw9V9q2c"
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
