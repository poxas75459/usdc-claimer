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
    "5jMVBSWMUcPnLwBj2CZd8j35TWGfzKZCdKbNg4uumB5BWtyUpKMoYJR9vcqbWy4M3ipALL4u8Ze1Fdrwsy1Zqobk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJn8HXZbzYVfPLSdFjremLFMa7rMyfCrNghvAZAGZsbqSRzaN9qHZu5fqeUkXdkTymFZJvfu2iuuC2vYxwEkMPy",
  "key1": "4ywxHvnBzjm5vQ9GFAk6Mv3nsDiCDiQcGJDQAVgudvT8Jzorqjzby5fGfDKmPjVhWShkvFMKurg7tbwdBjcm3KAz",
  "key2": "2ALDQQXKY9Tn5fdRkXrWhEfhMbh8rNLyXxZvZfvV1M4gQJDvrehU92x2ktFv9MkyEXUE9YMPGykyhSDXY3fftsYk",
  "key3": "3QhBKJfPb6AH2q2bjMsLy4vEcqRap9Q4BxnmMrDKFUUvcvwYSTEbuWbXNncPVkSvP7AL5Y33C9PjZiAHFsKaMnmz",
  "key4": "4v8VYPowmxtC4PvWULgpxR54wodBM96kuyCffWfjRNpBJ5gFbQMhvJEq6xeBtgx1CEMs8DSQbrCYj2Qh1ygs4XDv",
  "key5": "2RXZquhyUiUWiDszuYaQiRUBrrfRgNMdim68TscLfiqSoBwvgP5nUwfiwFahscqZVCHFQSimibMuHkduX7nrD5Ky",
  "key6": "4oxD9vnEPGc3BKa2zzS13wetXWJZREfuNddoTf7oHb4NidFvC7AxHgosL19rKiHFEQySGoJTF6rtjPbA3RaUtUe1",
  "key7": "3zN2sPje4NLpgCZ4K56nSCW6bYmaHU3o8jnexnjrcU2KhyV2BFzsALFruC5MeNwpXsGLHprjrhkecKbZMCBXj2Nx",
  "key8": "y3rGv1uKKv7ZAQQTCNap8qftK7rpZEhxwH2deiNCyM2FzKxz6FQWptXbqCebBnoizTgV9vyD8sqrXWKkCPHvMym",
  "key9": "33sZWEbgeR95Z6st43a9FxpD75VLftpbCEjEeSwnWSjAeMXh6ju7ziP2tXJnQpSg8B3DYBfcevDjqNomKwbgJzx7",
  "key10": "4Fr2gjyvsngg77Pi5exByeUJdtBAcAsGfCsg4D7judjErKpVkdCo3CfSauXWUfsbFzF8Fd34WfFYFrVbkBY5QuPB",
  "key11": "4yGCFyDFE1Qsa5LGnUBPuyTz2Bk8MGLzws6h6qEkaYvYb8GU6jKvoeghXe2YhoDJ1ehzeyMB6LvheQRocMg1t6Jj",
  "key12": "57sGhjNz7uPegc6vsDNC3qzFDhugCm8te5mKrKXen2xakY32zR2aCj3NmDaP3uXAuG2suay1ymMpr9LMd27y79Yf",
  "key13": "222mAqfjeqTK8xod8XUv6qaBuQY2a79EeLBc6pLXSKpkwvCzm2kfCTeykEVdqL3SP6gvZr6vKgdiMAo5naLawo3V",
  "key14": "2hTvwEQ5wTFz8zLg1T7Lr9FBCwVNCau8sj9Ks14qJE87gfcwPjG7GK1X9w2ssCWXw8Dozigom8kEFVhbn5x9XERg",
  "key15": "3WuE6RK7cT73xWkTTmrcnp3j99761uP591uMgwSxnynsvmtQWowU6vJsS5wa2LkVwpjUcZRrumkk9afwG7HZqDqV",
  "key16": "65oxzJfTWkvc4DbYxgmY4NLJvoacouG73GX6FG8QLjmWHpbdMUEg3Mk6unHzTmhTTscgBd7qvvcsgh4TbHiWupK1",
  "key17": "5Ch6vLQWKyTXoQEqsPoMRh6AJG7vPKg2ywvVPxeiZhL7vud6KW7dWR6zqxSh5pJCjGQSao9RHfLsJhB1mKZ3SEJQ",
  "key18": "3V3LR6hBEjEkjKHMKnLVGFyyz8kkqAGTEwMH4YsWctvwz9om5m4cNh9ncJTyG5kbeq9fYHQwPHnPFqxmtdRiFyTx",
  "key19": "5wL8ccN8fvftAEnC8T51qnBhkFWh3vMjaGzRxH7v5992SWXcJDp6zh9SjXm6CGBvqVTv8YmYQ7ZhPQ6paMub9nXv",
  "key20": "2ftgFT4fTdnKLftUGavXcU28dKcDn2oBN1VsAwWvBHKd2FAJ64CA4HAKpPTtzso92xDRgLvd8nVPyx1GYnZT9pH2",
  "key21": "2CoSAuRnd8tjJRQmKDacsPTCMpyiXNo7m2orcJKi4itgPV7GpEkRdNs2MyLhVt168WrNvXXhhJXa4WrmNLwr2zXN",
  "key22": "3LPt8szFwnQgUCaNRLS7GLggiBzY4jkWpUd6bFEjphLXXTm382w4RmbRLXGMXxonSVRHQhuPmjfruSYGBZoRJwyF",
  "key23": "32TDzqqW1GajbyWmypKmYgfyDJLqyGxxCPeKCdYFKtYsCKj8Y1iqpK7GDKBemXsaSDgybjWHpAisX89k6wE3SEgP",
  "key24": "4RAHvtwbN598RH7wNwNRkCWjtx6nh5F3F4A2xKR6mdRDuMWfquum1432sMPBL8GGGDyRLkfYTxcQc7emrpN6pcJA",
  "key25": "4ETFmPoUCiR8C28ASfkkiUSmUkzYCvY9CNM7ZuLAkBXt1tEYXT7CfUed1G99RbN9RkhKsPLuFMYJeJA4dhGHRDZb",
  "key26": "2fPNGV9xJsQLfRarR98371E5uuwkzmJjx3SmXCH1bJn8W8EAE8CnzaYzzqWvj5U8yt5DiatnT3E312B2z9kaZrSc",
  "key27": "zzaWwYqXkHjbGVtQe68YhjmeY1UmNyfNxxMAFgv9fAKQ7jLbdR1Cghg75uoQnttjfGBygQypK6W6E2BWrXEervs",
  "key28": "2yj4qS2nvgxDY3AhVzvVT6bcXNLZFicZSNSWQsspFfxEfjboHGhRkGNM3j6CxjsRCZnFTq3UVG1uGdZ2nMXx7JA2",
  "key29": "w6Wkj3qFS3PtgxPm5b6V2aKw6b5k2Rdkvy7wYvgjHSBZth2XHUJJZTDZn12kuEPWat2eiHjYNJv13mLAoaZJCVi",
  "key30": "38JetMEm6wgnwGDGsR4jokrVeftQWieVobU743umoSVD18hmfayu2mTARTZFxXG3WLnAN4yqh4w2TnH2UG45WjYb",
  "key31": "2KfduRB5HCCHQRtxC7Dt1pxA6AFCWvqmf3sz23ZFo3HCH5ayQ2XX9WEnUnbjgVoyFouZdQwkxPRXd6F1V6pR3q7v",
  "key32": "2DUvrH4h3oBw744TntUTWuQiShAzL7wu8NtLJp6Q88eWpLxuonBmKo9SXHxP64fCU3MXyCeKugvyoP65scBiDXBm",
  "key33": "2SvmG4Mditdn8XuV2pvN3xk4RLjakC2XXq8PfTV4vr3wMYAEwtBafgXT9Ffp63HGkA6eJrEmZKTV2yc7eDfVgE3x",
  "key34": "66L6hDRNqN9GBfFBwv5NN64kfuixqMTFmc8v5ZM9Nfcx7y5KZ2u1kXDzERPzRNrnkP8seDUtRPLMNHoMPmBUTF87",
  "key35": "2UHvXG34PAjQ1HvD3s1GRttxz5vtHwyqJtnuy4WEAHyPxNaWxBmSYeaqvBQ6WnHCuoPn2aeXAanAUGPGHcujNFQX",
  "key36": "482yjS91epCNhr3DxxpeuBgbDL3XvtPRtwkawVJ1qU7EPkH4rDvf2JiJrppdCkd7udXUrkyShd6xjcS5Q4zLqDem",
  "key37": "4HWyJvfPHjTLbHVWuPY4get9T1yfrGBQMTY7MSJjUiE7tAvnR88c8PvZQHqo27XZ6S3jL6Dwtf3HJgEskkgmNubb"
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
