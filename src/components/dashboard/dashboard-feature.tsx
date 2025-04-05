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
    "e2FbNzCfPXExVxoCac9rSGiQWorirXYFfeCGZLfA9brVAxeZA4pB2Nn2ADsEGeTiYhwv4aKCUAJdv92AsngLAyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCBq686CCRZU8P4Xp2XJHcEZsbGefzAyDhjDvMzrytVQ9iVkxxK5X1EET5MvjJvk4CxZpEZGT6V8WVXwDtc94nS",
  "key1": "39Foh4vB7kFgGJsNermvH8T9fwFLUT6BTeHytoaajVN8NumcYXCgK4DQkpLnHCGXiHAHX2w23vT9jUAUpscqTVhV",
  "key2": "5cZBbC8JqVLZ2MuAFLPTBXABpSbUUhwAVyq17b4mjCDZDuim95kArir5Sd8WquC6N6hr9EJK9R1iKvHVgR4gU8zk",
  "key3": "2pz3VWQuXGD1m4tY8LnqpMTSVcsxp7tgDHEz4V5CpW92MowuQoaT3rGrYo5hKresZ3Xt7GPmDqLgpDR6vCK7DWEN",
  "key4": "4Wku9uJaXkmBxCmris1Rq7o9ZehRXSkeGHM9WfwaNkGmyriBANyEJ2CGHYSFwPWPYiZdbMbEpXDVngwZiYreiQ4x",
  "key5": "24cxEzUni8q1mDmwDTRu2Epa3k5UbmEkZz6zhRSqvQcJpSrYSYUGFPUNqMr2UBLxn5zNvWxDw3XXxoeiftWQ8uCs",
  "key6": "58eb5Kp3qQnUohmNNUkrVqWFrvQM2TeZcxoes58FnUjpffrD7tqPQvWRyHuJ9Aa7SGZKAGu8r8iJckz5zxbf6D8f",
  "key7": "2jYdF8ZK4dtZdqWJ8kBbjjC6as7W3dRh2zGjXBBgeawadB7qi52BhDVtnALAXN9CRRBF3hzgWdF4PqyFfGp5auXn",
  "key8": "4spTCCCkeQSM249UPVUrNcpL89dU3AniznqX4HefzYbMMUfmQ75uBrnKsM1zHsfrmRfszxUHLqHDKTtt5nXGZzvi",
  "key9": "2p14n6tCQNbyCvQSWA8CQciaGHYXsxnxXsH73aMxxRc8psmnSvHxtrBphp9LtrjJ7YpLkrVfNhKXWAjLrcupRqjX",
  "key10": "23v4ERNuNkCR5WwVWNwymZns24vYAhdvmZEuVpHLg4vAL3UmcmywnhmAZUFhzVXKd5k1Pdm3uyNaDuYxL8SfWeZM",
  "key11": "3rngd7DKB7EsrUnR5njfS6GjLgePRFaewc4ZzKAhNN3TnDMzFE7KQJmMxg4QPXcR2RNhgTCpnXbr9KRJZGR29DQz",
  "key12": "2jN6vzXtG6SFQmDVQwRgYFmjMg1sJByi9NFUNF7LMc4e4jxKsSdYpXonqChaGk2fepzhB9QYL7fAMdDwopQbpD8x",
  "key13": "tMENSCdgiak7EELfKGpizKfoyiahS4p7xteLAAEq4UmeecBLFPpCh7dJfAYTuKwsDWXewsYp6um36nYJFnKQm4g",
  "key14": "52Tn4x2MW31fM6cC6ouFwbPYyftjL8mjpMjeiA1dqypPjszu5BzuiTeML5Hezw4PSxBaktPyuuesoeSuCiCuVZhk",
  "key15": "27dxLDncx7n234Tk8enc4AzZpmUZ72hw8Z9FP86fWohXMDUmKDknCbfgYmtGGS1KrqFBb6oJSWd9BxdtZG2miG2p",
  "key16": "bL2Z39aB2NHCFtDbNgm4hfNmTLVZ3rpMveS2qD5Q9jg1EN9bEdts6CGzj1tXjfpNaRzbJYKbF8sgw56FAx5iANL",
  "key17": "4NJk9MpaCAASHooj3appz3L9sfTPozn7esveEBdeadio5npwWNjCEKWeFLHGR2Ymss5RuMjCXPrAeDZ7fHo7PJ6Y",
  "key18": "4T2MwujTq2QbWDcJVDa6mpuHW6EgV7PYd9jE3CBCG81djnprnKKj47Vtyi5bUBRsnzoKoh6ZGiqVb6Wa9LKM9avx",
  "key19": "2oDds73QYC46XRYY4dTFkwyrqaMyG9PRraSuhzwyKfYLqy2AvfHqjC3R3htc7aLeJf2sKH94nPse9oLHHbC7yaue",
  "key20": "4cu5UEXn8QSyCFfS8SSWisR5AkTbv5pgSUh5H1BiNNcxUE3nLbtBZAmd5oiG9LUvbEYNL8Sj7iC5RVwFEmio56h5",
  "key21": "3YeCPv4VKQVHNomasP7mFP6dis2bQecPD3pJbnNuCoHH1zUuJeECxNQrpFRn71XpcEjak5qgEJsNcLBaCtmBf8kT",
  "key22": "AfZaSFC9ZFC1kBh5VNczs7tC3nyoUg7hKoKHwQsvBzybq5sSa3jf4HPtr6FAgtohzLv4QvwkuxSjxb2ryRpDzwJ",
  "key23": "4ytvMzN7prhHhMnzZZHjQsHLeVD9oEFusAA7uSAd2nyNGU71ikt9Zm5hHre24CvCciUKoSeci78cEVn5wKnEY5yL",
  "key24": "4oRdVeLuMxiitG2DsEQa4gXf8N8Nvg7mLMdvLSca5mEt1phsDqpXJHJgLsgJ99rcfU4q2jeJH86PzQf5i3mRrXfZ",
  "key25": "3t3LYQvnNqT5nY67enevSPHrUx2MErEMeVceZsUMWUs8RWg73LmHEAWY8Erb2998rhL28EitrGZJ9Y6wpU78MSuT",
  "key26": "5G3yze3KBz7SjUnFJxJxByVxp9iAsN8M5AA6WygzqiBsUgrehS1UUWvPyQh6RLwuSxQZAHTBTvDPQ9XZVAQHqWTs",
  "key27": "4tYfw2344zbNDkwSMZvrb5NqGnpdhnX1ZTBwtFXeA1Rtjf8UVY9miLkKgGuWfFVdHA9RpahxTEJfCUhfHkRvnBsa",
  "key28": "4aYEUTFLwFnaWZjwcwyXw6nj7hFaXgTX9atP2DFBrjmhqvFvp4CC2xkhRetS3cwR4y55tuS8obJcRXjtH665syYj",
  "key29": "38M75nDzKxBgqjakJJ4XdEyeypn5Jc4Q2F76upJt4PoN45gWskeiDQ4aBTRtHrTnGUQRPcV3aF5hYMJmHxsd2Keq",
  "key30": "2eQVnotK5QL96g9kgeigzk8h2GDpjCxkZySchKw9CqQW9LSYNtuFoo1ogWM3JrPgMaZJA5CNfz8G12La1x7FPjcQ",
  "key31": "2f7686KZZSo9LSH8xbsLhQPfFxf7HLGXqzPodcR3D7eDUKmyRJzCEv8TMvYtZY8mBfUnXH1oLi7uQsxVKEAzcLr3",
  "key32": "2PJYHPL54oxSv12EggkV8pC3cAup6LZG8nfNSQwQa5ou7gAGSpfrXQHQf8gdAnjk1pq19JZhEcEkceR6UyURkxaC",
  "key33": "62xMYUS32gWWXFdh8vqn85vQ7DdfNV7ieCEmKFGCmYfUfLxymJKbew82pqZsgSywpsY1GwrpaCE8JmWge6iFcGci",
  "key34": "2PXBd5P7ZLi3AUB8Gc9AZyH3dKidYLXNYMD8FjUnm2Hn7H4ax95XW3JDLpvK4eU3T4rp8dAjnT7aq36QS5F1MCSZ",
  "key35": "27Fv2QaDcfjddzWds8NhUv6LDjr4qp9vfAinQaVtxXYVWFr3usDxG7cj5q88cRhmhvWgEtcHTq8DrT5VJ27ryT2z",
  "key36": "5sykweMJHwCfJhxHqWs7vC6x1YiQnyUUty32Tq5mu1DtjjM9uVbYCoLAuhHwznQLQTFNpwp98xEWqs2X7NgvfPxP",
  "key37": "caiH8DYysL2cADXfqDnKMAQ7YSxS3zQufbvuQCrf6o7qQBJb4tnDRwE78vwwqgHLhN3b7sC4LNFhjNi4maQJQs3",
  "key38": "3F2kcMRSAG7vm2FkgJpGApR4CzSJznRNdi3yUs7PMqSemNYTtkhZ7TBF5Rc8WTJcw7UXHtBxtxSHLPApzEp52DCw",
  "key39": "4mSXZVevm5RfSXhjVTZSc5s6GfVTetYVHwS2S18PgSpT8DHLPeWQRwtkYAAqTHbLnZmRVDhQD8DgUBTBfPbMuPFP",
  "key40": "3476rhG7HLuNn1p9Bw8chVWuvY2WD1Y45HMUxya1KsLA5A1gZUYgJ9bW4fFLejK4N2iXREixmep8Ny5xddcb2RK",
  "key41": "5qPSj8hGnCEZpwQmf2wzvCjf533viFh8yDE1TTUHrUfz13mn8C4E4LFvWSKLwbqBXXp8rRrMkv8QnJuVdbbv7SGn",
  "key42": "3DQiZbzEDdmRFmgdoBLwALDNchiHUSfxuPCi82TevF5wGp8fgNCwMbT19sEuF14aa6KZb5NvLL1CSHLMyfLzRXkP",
  "key43": "2Utm8WN2dKnrvPCNeUYeUm6kyzL5pc9F8g7QY3tjMqeNpcvWLKS7pbaaziRqcQyWxPGuEj1KEmRKMCEjPqYmNAff",
  "key44": "JRdokfKXPgATjs1X7nRghhZ5p7ZPvEQpgb7Vzz37pv3AsAp6Fkaoirm7KqZYnn828QJtfxhban8RegekyMRaf8o",
  "key45": "5SjgLTow6HZHydwwmxZrnMTsBDFom8sd9vFaPhnTNMLwMg1nRdUq6pvEotbTKbWy6Unego8hiaryiwq7hyipGLht",
  "key46": "4HPFzzpgkHNb5gM7fdcd3tGGaiBAEZS61R4TABWysKxVJtQvH6uXf1uzZGBagu7rfgMnVhzNPYAUJKqtqFbcnJZm"
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
