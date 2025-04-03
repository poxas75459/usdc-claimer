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
    "52SJUaoH6SKKaX5SJFHAWgvq4TrmMhayhpXkwnRUKHTEoUi2yqJfsxZ3ffNV91V7zBuNMf38xtSvKU3JSagAC8sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1286To66guXzc1YbgNQszJ82MQjSNZ7Q6a3LiDCnVSrquYGTsWVAHyH2vi1QQKtufoEeYtjiUvuAZzjoFG9ymmrU",
  "key1": "5zvYDJ2E4W185H5t7WFyvszpMeAdGCa9NXwp5gA321ruvQob9oh92ryS4Xw1EsbnxEPgYYd1FALKguLJzaXfWEqh",
  "key2": "4B9FVS4rRjJTiBa1C2uAzPik75nSJ5QqR6Zi1UrRR2826DrpygVqZo1a1583oNQV7dbb6a6bqQsMPWyJ5G2TZ7FP",
  "key3": "3KJzEWuAouJfXdqeuTf6C2skjTactiWbBFns1RwYRBL5aZpmdAFEb2hySoqomJXwKzjtaRqQiYj2DFfBwLTBV4va",
  "key4": "3i1fY4s7fYc1syZCFwkZe2bjhiSsTNJQBYBrRHXoW7YVF2GV3SHmJDCo36kZV5bQMrpgqCbZzVXouhc7sZxbwE9Y",
  "key5": "5vUUhnkMtjYt1maQN7TRFw3zrMUWLoQQ3TuvR8MV6jA1nGnBc9brssLdNycu4MAJEngd4yt8oBMnz5xkQXue2ot6",
  "key6": "5Bf8hK5nhGLAL3HdT7xuJNc6KKDAmsSrCK2CWeyzGwjFvwSPAjxwc7k9PJD7MGJqD7NUwtTgTpCrF7XrysgUrfQ3",
  "key7": "4h1qmstddVcBDx2L2gA39kFPRoES8Vh48K5uRFq4dJsfgverApvqFPKPAeGWhAbo3xfsPzN16FzEEBWCF6SVfY7g",
  "key8": "XKmrgCmrdro5wBq5GT6EVK5MtwQjSNTtoJzq6N2ZYvS4T9uZypaMLwcgeippnpQ2vRXHoBuSq51jrotKK1ed65a",
  "key9": "yGb6icEKbnVjxhx7NTzjRpfotzKqEqXNkK9a2eX984TKt1cxgAtJpJtuxb7Bu6ZwAJFLWRgs2mynmFEXSaXKfap",
  "key10": "4ivm11sU3YevXaJyNbMaWm3nDc3hSkauH8No4H1a1Qx73cRzEgDeRa6sdxpKKDkWPrK1qaWFFqyputU1YNLAHnvi",
  "key11": "4yby2xeL5b96uhLYdsR8wk54rNKR13hat8i2tMv5WXV1gByoxTPTnrUDQVQZgVgYjXW8gEiJHMa29KhwMvM5N5jb",
  "key12": "2qK1jxsLVUBfcGMqWAqj3FD7LXpvEJebqSEGMZHKhzibGf6w8Fb61QBhsioiAp7xRcqQS4vMuEjUTTTpYTta6peH",
  "key13": "4KuTwoHL6R9SvRdXBs61CAHQjxJuCB9qp14qdrvj1xgsHPE5KUppc6PcH94qDpn3N7XorhRL5bcokfybJJPUAHEG",
  "key14": "26rqCt3Stg4jZHiccY2jg79wjTa8xkr8pz3uGcJURka5ekcoesCusJs349jrvmcAuxQ9Xe8sZ2tYG3jwAuWEMxiH",
  "key15": "2Zeaz54HXdgYy3XR246WZibPs3FSVPXopZeMzJjuf6ozXBxhTSi2o7MAJE7pa8uddz3XtM1Ni86ve1JAgRwa3z7v",
  "key16": "4AaLHYuxEUmXAyode6FuYrVM8yDBHWn9Y8AGbYWT4RC6KvLx9wE22kBd2rejXeRw875DaYEQ8F92kvQys25K6xbS",
  "key17": "58GS1ynp61oB4VTSHxbfkexUZ5eKxLnMocQ8zbLY8zVBvR2njnuH7vXnUB5qyWmccw3bVSsXp8K4mP8b23aNSQEe",
  "key18": "63cXB6MvxoGXWPtHvFQ19wwTcLFDv7g14UijC5Vtnvp5r1Xv5dqxEUAH9kPKfo1m2Bjn7yLAaXjBoWEqptk6o5ag",
  "key19": "37NPuGURfJnjvXexw961qNxoCGm9kq4hdNFg1cRDSowd8mTVeqhjZaTMPLPzt56Ybo9woVe4PykpbmCVy9vKAgGh",
  "key20": "3oaomNrqNDFrzTv2rFtX9HkbR7LrHbQVF1SoURpAUW5mH8rWqjtWF5xikdmm2Jez97UYybw3FXVC31T73rLFwmTp",
  "key21": "2UwdnHpyjyBkS4tiwLKAjbacBG63Q5FzCTTio6pvXaNTbr6wGAsBigaPa5jd1k3saNsXZeB2HDsFkwQDEzPMGRkz",
  "key22": "4wtBeXzYJwTNgPwPMqwTX5zAq8MHJ3Q9fAzGp9rQZxbbYyTeyPSiswchwgsEw79MdEYSDZbdsfhGTJk5uzJDQqUi",
  "key23": "3d5KeoyGp3cK53pvutn8A2oqQS75fkgTiBxjAnxxXazuMRdVSek3VrsgxZpyL43XoE3DHvvtg1dfRNsTpdZUdWEM",
  "key24": "2Evh8mw3B5RBDkXVV3SE3tBPKRHMpJGAp7iQJWEJBHNvS8Cua2UsLH4CERrwoi4fFWP1TPKGtmioyqMB6VvfnG7o",
  "key25": "52avnHky9ThCpAS8qWB7bcLWo2psaGvu88zmmiFVNMmNHgXQyP4HHoNWRoi2mwFhxxhMWTez8sADGr3hvtnM14ta",
  "key26": "24myG5bppBJWD8kFHk2yyZsE9EWKKMVDftdyK6FoFoDqzR8fGZMnrxtqb7uWcotW3k5ipNpoZ7gKggE8ukwFuaTA",
  "key27": "3UdvYpd64DchfHM1LPbtC38QcpKy4NwFbKfDmUHrHVVbiUEY9XBa1RHFjuSFxdyJWJv1zZVLve5UQMUr6J8vP49j",
  "key28": "4SqndUnvrHAdiVFcoxBSA36WaqMgr1mwk31Ep2CEbvEVPrYZwLxDauGGFZmuUn1p6pvZNvTNraiCsDQLdHHAAA65",
  "key29": "3RLfFmXE5dUZr72opEy7DDr4CQuidLCQ7ypNRVurQBumnn4kFmnMGbXSTyZVw9KfG9PbtvTmL1A4tHrMsJNTgfL2",
  "key30": "3qxps3UdUUbxqztGgTRwaJjGHBUkTaWWrhmCjdRe5fi84PwYoN6J5Msuigk1s37QAEEL7XkEBW8tdp26BpMWfni2",
  "key31": "26NYv6Cguax5mdK7oJ9DBTupdxmKeTwAaCCiDf2RtEJRupaUgzwpQEy8f2nSzcRpCbkuK7XiLWVVRYH9a8toWvfM",
  "key32": "2PLUjLf73XDRbkaWxGgLbayXv8k3QofVNJziEuyT5jYZpcEkQ2nX3aRWMAdkXu1fR5THmQhKs8ytvd8M7f1xTCA9",
  "key33": "w9q4yrcaPhtHwUgEHoja4QftV3DJQNZFhJL1VsUvtfTBBAjr2hFWq5eZeZ86RwrtPfyzxbPkDfWZgEHcpQFzRmB",
  "key34": "38JssCyttHPiNUVuoMw9R1dYxTgHbuosKGmLvbrJvW8ZRDJvdrcNX5v4P6g1WQd7VrfBuqA4syH5ZZjjtpRzizYj",
  "key35": "5hrXtLcHiqmGY8nYmwfH4EonueWTZi9nBYFkwR4wzfB9wSc8YJpBqSt7qWWzkbi7X81tMKz3ZhSM4xq9UDdgBbFM",
  "key36": "59VmSX3dWz43iqpSj4uX2T4izZUHtcKWFqAy9Ugcgedm29j6YZ9ruabgfpkah1CyfPHn4BaJTr5niHP4BKZXwX5Z",
  "key37": "5k5fPXvokBagnH43Jp1a1SfLVoQtH5d5U6txZvSeZgZCmDEbZq7X6z7GdVgVymdfxpnRQUDijzK7hFjAzMQPeyPU",
  "key38": "31aJDuJTkaCwaBxeMqyFLiBTm2dinDaztJzD4opSBmnJqgJwNLL9EmYb5EtmDeAcwUXuHn5MkjaCkURNhkD6aN5H",
  "key39": "56j9EvBJeK9qmcKzixwBeuC7NKTpvqKLve7gpYxnVMEfgCAM8eu743AGMh8ZNLNo6pK3gDbJPZJtsocSDk5w4rVc",
  "key40": "4sYYEwdP1PCcn77xkR5N6pnbMvJTqCTLCh8KCxfjyM8MSD2WAezwmzbdwwzXeibKnKx3mDK7nJtC8t9aMJPbU5Yk",
  "key41": "3gTKiM6xeH9qGc9FosGuVXzs3K1b6SdH3tTPhEWt3Y3JspmCotGbHnoCfKqQnjf7fWjTAUUQ8WnThWhhxEHs2r1b",
  "key42": "2vdt6zdEjyKnN3WJaiRZu5TdPT6C9kJyZxa3nitSSgyh6HkmT3LgryNnLQzXSkbNtcom5MACi4jXebGcKGjcbmUb"
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
