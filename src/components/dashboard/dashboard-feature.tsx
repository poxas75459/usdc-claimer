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
    "5BqEaxB9UL9CuCp8FB3wi3aQpG5Pc4NJBcvEdx2EDg9Py3KphncUMSysKcg1vaC72HTnJEzr84w2KD9Jdt6fXNVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B9eQUHdHk7QnYtw9Rc7RH7TDLSgxqyEREMrWrzkBdqiMQvjmWadPfeVuZzLecPtXcidt4FvqHbdfrGy5iXqGxSs",
  "key1": "PuJod6D7Fznfgr2WX57QfvWZg33hDLBETW9XN3pvyArDRmcARuPA82UqoFs2r4x9n9Tnv8PWYS8WsdxxG9U2qu2",
  "key2": "5tGYHFEoFkwL2aJqpsa3cL4RJnRyyY9n7E6PVMb6Un4n7R6m1kai3jBjGtnWhwY3PNnHEEW5H9na82VtqsT1jNoR",
  "key3": "3X6q4tfBEEBHcmd8FcQkNE6Kmi1fPp4a3cBgWXmee18CXPUUoAZiKsfb1sepi5ZTG11qT7RZBKsB4Uqerfy76R2R",
  "key4": "2zvYNSuw4uV1HgUVFsGmU6vc8U4VBuWAsWATeetCpvJ7bSYrzZDWpyxvK8kmaYdRgv5Fv9qUJMMMV2LJuhuP82yN",
  "key5": "37478he7cPbshBRT22S2LYFsKdD43ueytAzW6MN7iziq48NuCo1sfVtFUtJ1Qfu2GgWUfyihXpWp7KwuyTqWr5Sd",
  "key6": "XsENQ9GeAKQpJB9TGttrSiUgEztRAWyYog1E5Vo5hu8zepEADPEqBCzVxAEFgD17fYNgMz5AxyjQuNTHjvHvCiv",
  "key7": "3oGHARCNkNBL81FmqYAvSZ5HzXZJJQTGCdknweikK6CyaFXNsxCPGsqWBChBvtueJcgANgkcvQAd2bUTfXRNSc2a",
  "key8": "5iPEQF4TdsAVi3oEm2ZLr1dRRi5bvTd8oqqhihAhwyUGwdfMkbPSTE8wgAMF9N56dE8N6ZjK2VoL4ejhtFJRdM88",
  "key9": "2GHbuJqg31ZEj5BnXRuJ2dJS21eQpiHWkUcdxFwiWUeiWZuig1YQJfD7isb9zHG73LwKensh2bHCsavjv2a7fdFG",
  "key10": "26CJyPoauTL7PNu2pkt6twV3UMUsh3wMKHaoZHCeu7fvGvEiPa1HWfwTsFhbBcvxb1qA1456hyoczSQ92QtEwLuV",
  "key11": "8mAMEmmi6zWBZLyavzfSbwiP1x1pVfgPg6CgdDgDuvgM7vF4zAhCbQkfCZDdxU9eB8tbBs1dM4ya2nvYHSTeAjC",
  "key12": "2hhqrHskAgH7ja4nWN6SVteBHKhij4ghfeKYdzttN6J4LfiLFLDrcoMnXCSYVjCuHzeySRj6AyQYCPzBpZT5EGfW",
  "key13": "3WTeqP3ojxrPt5bKTTJQgmneah8RSTF1Pd3hVf5ZcmytFKqEd2knbqUD3DMGLtTzviwoxZjmcphfBWEnXoxMzkyG",
  "key14": "4qysqowDQoq9rBUbzZc7LDkjjF5A3wudRUyp35UahK3uXoT1KTKnTEdwfWNe3iBseUm4Aa89xhMKod6sugAP4wnP",
  "key15": "5jZ3YQHPhsZtEA6ufWAFwJRoTYxxcec3JciwZm8YcvfTVcnrxpx9wd6dYNf4Wgtx2wQEGqbLCL1oSqmi9biPQ2iz",
  "key16": "2BGVZtwbejTYMDXThiVwKMUDfzxVn8uR5JBujbz9sWx24zMYUx898Rmts4MDpaWeseASbsNXnUfq9cr8kDjtv4Tw",
  "key17": "WkC8t13JqCzDid9hSbzit2edhPmS4hP1S3JWEr3YEd6XwFeX9X4292Y2hYxmBN4Pj69nTUN9XeftTXo1yxw93kx",
  "key18": "2ErcTLgF5dNik7SBDzwLCbmXr6gx2F5n4QqiyHNDdqGHjP3cmRuPbMPhHwFB97jHV69j3KN16sZzdJhBmSbVpLaR",
  "key19": "4ofjtG9PcREoDt8RC78EnhsbWMuZZXEnnX4AG2LCoziNMWXRCbs2FxoTwNkQ16Vkzi8kBeu9zDobLyoA5sMBc93Z",
  "key20": "FPpbVq2avpyRaZK1Xinufo9uMQc5n4xNw8sJpLpG3QSTYSVXmvjZX78whga3HMHwgR8vJcpfGtMNwNXDofiwLKu",
  "key21": "zFm8YL9dXmQj7g8rzCoV9h1jsMXkc4XYZz6CDo1aN9NmwMQknG2RpauwCBbvwoTauYD2hdMfNy2UcRZa2ioSKQh",
  "key22": "5jcKLYEYPujs3zD3TPQb7tsYhdoDNrTzhxiyaATqpox9oVe8DqCidphLpq71NkZPcLGYDDCZFLnRZKrkqpmWzPAA",
  "key23": "3iFkNgWXg4BdDQhk3rQo48VUTvqWewCjNv5Xx5n9wHpfePb1WdDj4HLisnwXYKexNaK1R97oivz3qU8d8YmK9QkF",
  "key24": "5tbKhwJ4Vok5waWa49PTNEVhHBoWnp7DSo146fdMQhdGZgfATVx9HaUqz5oUTMM9uyH5myno3uMsGmLH2c7DPVZ7",
  "key25": "4WW5XSERLDDgxQzgXqSD7XBgGdZEwrZNigRAt4KCVKhmLMNQ4L5w2sGJxHG66EP27vdHsjEtCj67p4vZvHy8fEw5",
  "key26": "4xLjEcLCG8mNVpfQiY4f9ATL7WFjiorM3EMrhZSJMVci3yWvT8gsS5G4yBLMQupUqFdgu5WxqU9PBPiXHbx66YNB",
  "key27": "2Arc4zTSAqMnpJgHEPAp2mMDD56B8C6GEjxoseeuUhJLnFNLJzXMfjA5v5o44jrfkQMLWYAcW7ra8fGKBmZYHwyb",
  "key28": "4Xg2KfjWpH8BJT27uX3BYUdt5MuEgUBPTrdYjiFB1VKUvB7SbwA7CCTb7xqracJ2gWA2woomJKSGLTxfGEabmrY5",
  "key29": "5GokyN9yuCdsDdJrucv7aaSoEjF8VNgfzzAWUg1R34Ny5BaYhjKV6ZH7gVGhpPpbXt5JNhrRtEH4dx13qJPjfcR",
  "key30": "kT6Zy2fJnoKHczWHX96kSxFev9D5nbvGMwYCukQ7AcwThfEC6P8j9u7wjqJx1niH9srcYy6GTgRmnhaN4rQnLKT"
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
