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
    "XM9KUdshFs8ySTVEJy28p8cZQ71QgNjhu1AmgM5WyFKJMobt9f81T58Aap7D8Prqvm2R6bKAnRY7b52n5Tw7y25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FzPaoQBJTcAd2m1YWsxyBTRVoNB3xSRR1wGSibsbZotJm9zuA6RQQ61DPmxvpZGZ6AkMAZFx15HLQEHg7KHwuof",
  "key1": "2AC8mGTfBFjwiR2bFRUGbp6nBMtiSAyBrq9jJwBhXLQe2gGEqhYFd6wE1A3ry7kXW6AuCdv1RmJENuwZt4DGXKcx",
  "key2": "5ABA8VjCZsg5JfLM7zL1kUJX9u8dBHhW5cQYZyiJbviJkyKkv1Gqh4LX2YEKfxV9Gnc2X87udPhM2jdHEcsmfdgR",
  "key3": "2Trw5Q1PxqiWoxmWeyFHfYHqhEUmf7k31XA68BL5p8JnE3EX2E9XJEWSowECSdB9wVhM5qrAWqmcJjQji2DH8LDi",
  "key4": "38gXP6ubaR2E89gi8YmViTR7ujQ976TeDUTEoaJkoz3caNhCXWL3MENi1fCq4t6B1i3Z8Wdat1SWuF9LEBEV2itz",
  "key5": "3RM4MzxeY1jMNLjEtNkisMjjArS1ktgHwz8qQ3RxyS1fdysjtvM4P8dtNuu4XRLnq61PR813kNjDMi67VoYDgqAA",
  "key6": "a4VXVvwoPKhbiJBR1XSyZ7aDGRe6c5E3PXFYJq6jUWG1cHVko42tgN7XRvqBxArZKG4yJFHavcDcgZCyKvw38rJ",
  "key7": "SQDCex2EnaJAEJw7A2HVV5Er9hCsxbwCVNZKV5KynB8QrpmU74jd5fb6Lo3nm19Wt5CTVxp6thesKQSndYHQPgi",
  "key8": "2rLia3hqo1moyi5qQeEpppzZVQ5RZdFyWoYBHTwLRDXAb3vAPA67pJGRrxZp6xS8KMV4E7bHRhCXBkjgYYbZEz9X",
  "key9": "2pj3yL88W93jqf9AoBYwkYb9EMjAFo5DK3NYm8hoaBP7YYsYzPRU2rLH4NYC21CAaYibvydSKLasryfU9SMJE2oh",
  "key10": "ESP7w97snXfi65ywVj9idwdwUEiy92vyJ3yEsKdDaQs7LhTxop8e6pWttB23VzDzazZRu3DiEiKt7XwW3vEJmLR",
  "key11": "5KQsXVYcpENv2V9tYzvFr47pN3m41Wc3JJGmPw4D5dHY2SH1ysrPA55nVv3AbSD216wckuQFyqVSto2MR3R4KTYh",
  "key12": "iFcar1UwnuvM5HGXKUkaT8YkGznKZymqX9tmYQ5r9ETVJpMZ1mzHRBu2fjW3MGCRiEEmCLqRdc2Lz1X8y64qQV6",
  "key13": "Mo37WQSAWD7TfJJFjWQdcRkECLMN5WsbQB4MMVdt56zsfU8e8Fxm5pmpcSZ2A6fQo5VVza77668nmJiWKSUVAyh",
  "key14": "2hz8kcp3yTc57mEvq4ixYWVHnnPTK943xJBhRgYQ6MLS8g3o4d1esQ2NzpFrLCNd4fSmVV5SLgfM1X7zjXR7N7vJ",
  "key15": "2F3sb7Uyeea8QPjtivA6JsPcjoZc5ySdzbSpbzdxBivxahkSSFTe9VRaLJW8hSPypuAjWfuvWxHCMHMq6qcjWaNB",
  "key16": "38UPiBndkNS2ucsjoM9k5a1P9THj8h9qGBFcdGNudT7wau1Nkp2cPeGXsj3Lg3hkG1QE67k5NsAq24zWMLXr3aEv",
  "key17": "kijtfb9zjpTir4fLr55LU3RgtvjK4J6TkwqXyCbXt7PFog9R8DucWEtykdsZ89R5U4DDXhMoLdsAF3gB5neBXQF",
  "key18": "5QrnyvvfMp52htDx2REqAJ3kVMrZ9wp1QLnwMznRAnFrM84jd7Z1UjtbwA2BvyhMhw6Gxb5hvwaQe1DX9Q4LMDpc",
  "key19": "w6i3TqZswUq3VKoqcKZUnMS7B8TaPx8rQ3urjKSxLswMPgmUxsNdApydg5HBxva7SsRNGRhFau6NJvwNDLEcTiV",
  "key20": "5dtKjSoyh6YUHjpKomAhy4Rqagh7EU7z7zujHXsLfa2Dq4v8Xt5niVbxAEPoXnufSU3LA5b6zmpfQ98Ln2ntQyxb",
  "key21": "2L6ST5rztESNfSLQdbNCJi1EJRLRiene2Qu64UVbFtBS89ieF8njnBuJeUwtuvaX7dj7NaeNV4kTJbjS2T7exMQH",
  "key22": "3VLArKSkb5w6Ab6eMsMWWmUzmmFQDbJfAWd1yp1ptPLyRK1nWk6xyLMgpWaTCbYCxai7axEZRX4PEtoroDkeEmDa",
  "key23": "ys4aDcJGqzKLN1YV6zqtdrDxF8P44hhZtDa2mesAo2jmr8TgquMLx2pZBoe3u4iNesqGo8zsAmqfAYKgvyNEcgQ",
  "key24": "2GpMeatH1CYtWs2GZFDhoyn6n5vsr7K9iePkhNgZCAK7KHrLw6mZJRMYCkiCkdrGRS2mNNcKohVZfkapTJZrhjSA",
  "key25": "48NR8yaVoRMk6aRtRpy19jHvWWKZywAHeXurbNNaDk55Hidwtn1A8C7JM2CfknhkcSu3bCdY7E6yW5TsQTRurgK7",
  "key26": "LJcBXwtf99GfTa9TFh6rASwz9UQbWv5rzPD1FKDnVVtxGSX5aLVfUuYC4w96iiBqhfjZusgNwmFoyZgF6xgRyav",
  "key27": "i1vMk8iLjSDwGHV5BVREoSaBdg5GGGjMm1e2iHW88wUnpZxR5Ln8FJwoSUbZkRixKrcvunKg3nd5zgbjMRRmWUY",
  "key28": "5EzfgUJ7Ww1LoC8c87vJS5XtQ7uoNuN1cvg7bXbNYYTGiqi3nR9973GKQeDtcgDtKgTS8xRdRLKta44NGCFrBnn7",
  "key29": "wcSoKpm7UUjsc4bnn6Tn2QEse33PFbzygiBJVWXr8o339o21C3X7Ch66sQzt1nbqLYtLMGi3J5DSWNBTjKLegmC",
  "key30": "2Nc4dsnMxceVAWNHjoFgec4shquM5X54XPCHGrLkWkXa4kBx63qwCrsqPAEvv2U5YpriRSAfCTAbxGMCL46ajqXB",
  "key31": "BHtoDUL5MmRgAXMHQoaoeDxjkFHiRG74PToG5WrhNCBFPTpAPfnhHBVHKh1Q4fFjkFQAuw6BR47k32V2JPARUN4",
  "key32": "2wn6NgtBmgyPSe4xqoa2Pkq7hGfxabxHBVHpBBunP3LwPzE1KB8ijx8G16qNjU4DUteKXKWQyuSFx4ZtEijtMAgF",
  "key33": "2FNKpABgQADmSb3NauDsL5XTnEBntPa8YzzL9sKYAacj9NUKcu4dH1oEcyVodmywdN9yeiHPXeo54xHtwSfKpVZj",
  "key34": "4LwHZ3UGqmps6xccc6qTfkdf38TPggWzsYMseqqycHFsvq1YnoeSoy1VqgqeB1VECS4qxusgNVV5R9FADSjgxUFk",
  "key35": "3ApCMEhJVC9nnkydTSurzByJmo1oynrCNAb8y14jawg7uWYVzmwRw5ExHZnYjB7XxDB33gXanohkb5BgTACs5tuL",
  "key36": "3apkXZ69w9gTXb6pA7toSsZQ5Yhxwpwp3bgvXWN1ZYCTPoi18j8WF17XsLqEsZm9AXEMsNzVcxs6WGzxgMuqydbw",
  "key37": "mGE2E9VeeiCZqaADG2pCLQkx8aVHvXVK3sUoDBhQhKs6ZsFUr6Y6jsA4e5ZntMA2ZzxUKRWXFUNgGLXND2RrpkV",
  "key38": "4M4ZC5DuJcCE6uNzep2aLZzgZbwjzAuh1HxsxgYpHoZqPnCGf6cTwmQovkhsjFdPUx18gztmbt4A3h9PP4GsfdyT",
  "key39": "2DA3Sdc9gXxLRXh52azfcx3qRP3jyacHJ9sdRmfeTG92pf6mgRtDp43bgWRQGF5LdW4paGuhu3y4dZFiXLQL6D6s",
  "key40": "2qZQzPSDC8ZkBEaj32H9CfgHv5KayKzjYUVE6F3psHGzRNRpjPhG37MnK4jK4TuvA3knthj1txS5h4kBotfVnvWc",
  "key41": "2n3QwRFA5Tf5fLNPDi1ocCBd5hCvz5cYXAWcW8WZWBw8pwbbunevg7ESYFquaqGTVMuGP6v3bWrbH66Ch9hZzHen",
  "key42": "3Kp5u3bjaBibgjrJ9ZXeYKAQqHb3CNB22f5mnMah1fYYpkv1pubF2dRC2XxvsEuNHHrETHRuUwJrLu7EBSFm4fqM",
  "key43": "3s4FfEGUKSX9mpcNQoiUHVaF5WvEvyG9WSzQZMRQDFQAz64nWKrm69CfP1ACiWeqKxZDFYDQBxN3jUoKRNeWztqZ",
  "key44": "3mMDcc8isqFBrDLmGHdCDY8czibJprfdPSZbcewVFZZBbWhrVwM1vdRy336Sy8QpDHPpyZQbiVwCaHPSsfW8ZN1E",
  "key45": "2f89CVEBjfVaod8Uj5TsUD5fHudkhs6qC44gD9z5BKZwCu2ZJS8GcwViXVDCcCBb1utG3T7n2vMY1TMZSfWRUG8L",
  "key46": "4XutoDrkaMwBNDczGsoiesexVepcDAsCwspEEe1wQfTMwXS3ZDtuC8n7XACX18jQHggXvSSKUNhKgG2Z4fxu3q3N",
  "key47": "5qNYoRM5f8fU4PgBJKAiiBxSvNAjxxHjPrk7gEF5nj4rc8kRETiNPhZff4V8GdFFPE4iXW6H8emjVDbKuSuKoNvT",
  "key48": "3grzk8dSbqDLYCw9oYpE1J3pi1NmtripWvRwdd9tRMCToeyEr1WQbQEdKarWC69UxzC5uRsniGpwj1aVwEYGcE1C",
  "key49": "5m3kbYdQyeiQtqQyk6w86usFxHq4aHifyicX3kfLHXyL2KiMDx5VmvAByEUWs4LkBZLmqCgWueFUm5tftXEKQgs5"
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
