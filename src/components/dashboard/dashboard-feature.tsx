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
    "4Q2Nvn42r6YsAmZxbpR59bC8fTLzGQEkYuFBfndEhf3S7mxy1BNSwzcuuBH2ipW2kw7ZNVF5KipW4345C9JwQGei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EuYH9cvUsqwJUGXLSyr51QmmUDT8CCm6M4uC1Kb3gk4LUxon6DRZCQPSrG7q7Y2Rk4R82XRg1hJy7mHaM5PK8A",
  "key1": "4qqvHucPk1Z2RvRwUJAe2dRTp5hYH43vAgviCFDgRfjJn5nAmjodNPKRYf3w4aunbkAKziayxh1yP2vTxzS1hmgX",
  "key2": "KqQMHATwF5649ZyQ2RCCQdo2ChAKjkMNPDt4XRVh7m14Wnm3YRgQNoaYBSEQLN8sNpbacY7bkCwebkvGvDvYMMt",
  "key3": "x6Rm74SnaT9dyozCmWJypKZ3Ss3teKddST7qRqVMfmkFw8n6Tmxzsd7ykUv9dyAcnRUk2yQxEhr7Nkk7rY7xQud",
  "key4": "3kDc8pSrpw9RfFwYBJat11uK3CjaGXWgijfqCUqYhxU5wpMFi4gz7YUtbJR3oDqyDvdUqewLt9Ums9cQdkSVP9ak",
  "key5": "kShowYubim3jgN4UsgF23LMuEoKB2XbLExUTGC3HjZDY6AGpVWLTEi7fvew58zQwV1o8PWuSb8jam5QHr4TDND1",
  "key6": "39RYWQDH7qPcJ1Ma9X6iKxGgxTu2vDFrhsHNNWac9qFkrWFQ3uuJGvEEuvDyE29cxSD5NXyS28vaNH61J9ZWRPkW",
  "key7": "3QbJamHfwY3r9Sa7MBNP79LNxMVqXuL2bXE6n9rL4AaspPrMYk4UwtqywanqZYjfbEMUgmJLMySXgzzknt2LZBug",
  "key8": "5Tc5GKd68MCT9FJMvf5bxSCBKTXaJoX88h1UHLk28tD5U5uq2P2SDkqYFwT9uu1mbYeG9ExoxY4rFJNaWMpyhnvE",
  "key9": "5k1XRmQvK9m2skgAFpWTg47Sj4LAMapXjwSZ9h6y6pRMyjBmmTkDpCeFazdu5Gm6chgB5ZE7NAdiMgkVic5BbPfC",
  "key10": "27PSxq9xLips1M6iGSRM5E7TQonxzBRufwSmEY4hzfVQ3xeg5yptxgkLk1WpR2f5eW9vLqC19HuZ4r1utFaoDhDw",
  "key11": "26AbjijUB6e6Be9CWjn9cy2jo6sGJ3iYhaEWBngrTtFksQdjFuxzeFfj828AVr2b4bwfcGLC3oCBLgMieDFEWF1m",
  "key12": "3VaPyGtGZrgx8LFvHTiSEVjZ5yv8f9csjSDWBag4v8kzao1WbbLUPUHzfaDcDDaCDyVLTKZW3D4nrXtttdywXZoq",
  "key13": "4ZMq5tyAbwTFMsAnpQDWXL49keQ9xmuaxudmn9kAfhgNPJLatEu3NLztVkpuWfiYrjAFcencQ1ngRQEZu4NDYSwH",
  "key14": "3TzGcVGrYaimaKDWCfT4DXpjRv9vvZXZ7SkUUVFZm5YKx9Lmy67bsX8D9QQ2oA36cJ1x7qyE79XXNDzXVRHeMTL",
  "key15": "57BZ5q1jSTQmdWBGhep3LGaLMELva7z4CWMz2HRhUVF9ef7eFK4dd8EAq5oYZej2saHwjo8R1DxYDwCb55USKupc",
  "key16": "5aMkbeXU8cXbgm9mF3iwKyb1LKDYsz2A3aQEDoKKfHa1Xo8oYGN68si8cQWpD42yBLLKvqBWSm4zCviPQzA14AjU",
  "key17": "4TibSm2JYZG22fjyF7DasdvdB7B6ZzyQecrNFQxBB7fhqnfEF57CgeNBiMdWQ8JWZLpawkSnBLUrjMwAwR8ZoTd7",
  "key18": "4kSWviVtfezmxJEzrG8djivVFcdSfAQw4K5AwvWSeBXtppna6Xz66b1eutmzQAFZvpA4CmYCDuRFoZgnPvRhddQ2",
  "key19": "3vcRDwqZHtqgByzUnQyp2EVV5Y2zRyuAjJqGdfd7hYuUWtrXyQQLbpypEyvZ6bAEBUbGSiZURU5qbMcn3ZfubRPg",
  "key20": "5RpkYjW8NZoGWtkv2gN9Jzxe2UZX4gAm3X5fyRgkHRPZW4HdXk9T1rB778wN4jY2JwjHtLwfEzWSQV9StjpzpWiv",
  "key21": "2uXczKAVxAmhdSNmeziBZ1KPmYc4RvyjBUV3g9NSrDAmfpxDGHDEB275RcF6qwm7abERLed8JH7wwtjwpDxpJmZD",
  "key22": "62KvcxCNBwHtq44U5Vwxygb6bfWLtBgY9SvLbwdYFkR3KmF57YAojZap8ffHVYi3gVGU2uMsJoddAvcUE87Bcr6m",
  "key23": "5gsQiPGQroRdNFwGJQuwzjSvhEZhAQbNrCPwzC7PNiLyRitQzgC7czXwYrUi7AB76bAAYHUc47BHWecrUiyujfwX",
  "key24": "59oVgPnRxMZ6ExxfiFVUVcebfvLgCG8BezKQCePo6Tc1M2a4Jmr6Zcv1eQhnoLqTqh1AfnuXkFoAwwE4w7mG45Ma",
  "key25": "SyXTN1qxeLjz8oj254qxcsLv4CjJPr7JUG4FTJCe3RNcz6JGQSvrGyGu5Phr7guEHJj2dfeChkwgr2a6ypZr386",
  "key26": "4xatsexnoguEPmA9W9BM2TRrcDp9oR6G92evmZDtBiyswAYQ2cv7kKVZH5V14MKexuaXFXvWfadQJWzxDFbBKz7E",
  "key27": "3Ax5JD511TbKmCKbg6aSfCANUYS38mSQvYWcftGwM5cgGD8ieVLMDQxU4E26MSsoDip6paGHNGh5mN9PJq2Ap6qL",
  "key28": "2GeebWhrnss2Mjyn5XwhRW2ggKNGE8USRpxWcbCm5DCnKRBajQuoNh1tUyLm9LfKqX3JzW2uRMiXdWVFvyCJ6VWM",
  "key29": "5aL33WXm5LZuvw79LwWqXDPnHdyrGvZvEwhvBnHSYgoPLmMArp3QXzdBohRZih9BoXx8SztDWnhKtpKA52PY7S8j",
  "key30": "2zWAw2bCXYSqFPvXbMSkzK5aDtVK5FfMHaBFMYQ5pJmvHEw52THJHnt9zFW6NuhG7u6kUmgSrx7JdCRmtko5iT7Y",
  "key31": "3ziP6JdEHAx9464tPyCEYYrpB1uTeLZLccQqwEdDxi7gtG1Senq3WC8u6FaK5ecLQ8RyKaNUVvepNM7hYiVRRMLF",
  "key32": "4kru8a4i7cRDgtakmntdvb4jMd6oq4wtnrF9rbHZKTWVMxaq7BXgK7eA4XQwhD7fvm8NMWyLw6BSoKvadC89dQda",
  "key33": "3yiGzHrsCDW9DRYtLcbvh17evvbhe6BZzSFG1pCWk9zmVMVEnofdmjfcFBJBd3DRLonqjfKPWnxNhvyPwbJRuomv",
  "key34": "5CEixDJviGaZ2NybyQToMvFH9jv3Qrk3SmnsjorLLa3Hys6XmzmS1E83zrqjyoBR3q6iBPubQsxtzwk662fVXv8y",
  "key35": "5qCJxZYkfwzSp6A1mAxvtwdSPghS12jGsr6E5YA3siSFT5zVa1MUUBrVjuaNig2DK4MH4iebaQYQSQTUHiv4ficx",
  "key36": "4HjKkAdCGxosWW1fUKE9iGEmTb8HHgridmsHvoMggghGvz1aBcr8cTYJzGXp8FsMvxMiqskFUpkxLf4JVogcUbjp",
  "key37": "2JhrGRjgTvtpyLzWwjDRVMqSQK5pwseZ3QxXWYDLZv2RByLXMz3jwuAfuu14UoFHx5jzMMepHzFwQyfsMjnMzLYX",
  "key38": "3MRA4QJNMHqb3CwyNhqJrTGSkP16esHpPKynZ6aWHuGHT3zsbTkSAVEaVRt18ekWVc6fZde5tQSjrcxFETmz2Fbz",
  "key39": "2cj4YThAH5eZ6wVzrt1GDmN958jEtMifbk5o1d7h2drLB1aDZyyBfV11vzugyDc7h4AqsHWFkBP8jRfp5VkhK5gB",
  "key40": "4YQBdAdUTCoYXh6yiT57nJvf75LhWHzrw3S9xXeGytBrpzdBLYwxTsCEy3jwSmf6gbCceGETktmVPie2Fzu5An5a",
  "key41": "5p7JNLLycSumRkCSKFdgwFwtmUc2SRSPEUXHdGyxLyPUaPqQ31GP2JwMCdsD7K4RxvJQFkZaqUdq6bxsrDZ9SYtE",
  "key42": "LmRrkRcgqhU3xY7e6S72VddSfRiB3WKcbe79SazrQyrMrNBRzyM2apnXgXn1GFJMEDyqUXeMKQW8mXALXK9s9ZB",
  "key43": "2szm68qYz2LdahXaMePK5SJ6a8a5tAsTn7iFUYbaNV8XNKkfp99oWtfNXc6xEDQVHguiMMyfcmC37oPPGtWA12t9",
  "key44": "3h3BXDvBYfHciXwNUoAtHqbeJHfpDcMRR8y6L7TEFKvQN6cHwnx4BFL6MP1QYzZotX7YgTY4GpbMRed4Rx73aZ6q",
  "key45": "4xt4afkmy2798CdVz1QQmjRwTmkLsZ7rEHQmSvSF3pkJ9ofzCaQDDCgNBYi27McXkcieaSWW1Axw95mnJxXeHmFk",
  "key46": "VYHkZnQJxpnd3gJKjewszQEntLvdiTSKSRzygGdqiKitaaSyNKpmPztYQCmRpwchejPN6xp3x3zfWrTvzbqwtBH",
  "key47": "Fn3HFM3QKAmsH8rag39fW1wFvn2KbY1Z8W6BkKQaFpKDHL9ZgxY8kjftgemBf4swfxzj1feJwTZH6P9cX58bmAR"
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
