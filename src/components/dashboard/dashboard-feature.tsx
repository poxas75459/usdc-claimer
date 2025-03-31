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
    "vRm6stk1np2YEEeymgjWfahdKXzmHrbU9Yh6RZ17R7WcfTxAaxqc8rfuhPBSpiqJcheDHb9f4xSDG2H4tFqCsuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dXrBV9tK8BQWipaTr9rzwRnYQ52isGhiP3SKUjpKvkwsgGiiNQSFp5yXTeYEHrr6WxDCiPGwhMfMceyq3U87yU5",
  "key1": "4q7J4eKmreY1NW1j8aHUo8VtUNiBy4EqvHzHDY8RBcYyiNnD2XhhTcNvKsHYeTf9vArpnWzXArKYrzfjrduj5FCf",
  "key2": "5DbqMRY3uuJ5KRzWfV8TqKpnyYG7Qya9LmFXWyk95iQ7zGbDtbhkoWyfHb81oL4z41WXET3YgMPrRVUhFkCZPQYs",
  "key3": "3iuU3hxGgJLJojeXfUPGPmuPcUtVuuaNFWCyNrWAtuBeyybcJL4yDLYwkyss38PQJXVBmam3i7Aie7N62zW5YWJM",
  "key4": "37WC8Sh151nzt4Cn6F543Vqw4HnQHuFVyK7X1NtnPQdrSuexPDE2EHuMjacTZHoq1p6tTG6woy1e1pe7ogm2myMq",
  "key5": "2q97VNhDkuYEA6Dv883JbTGb9eMsBGSyttRkBweT9QJYYCh5CgTQ15oJ9aotCuUNrRD6QB9UoVhqfkQ8TZLB7EDz",
  "key6": "4MiT4NAacGr6xZBxcD3E9bj2KN3hnYGCo5Mt8i3AiQA67A89YrKdAu3N8JkHZhpv8vEwmZtgWzxgxbc4muUeAqS7",
  "key7": "2BXGsE4G9hBfQrzUPop2xRFzn4882y11mapRsVTXQsTe9oJVGP8GdM9qnZiS4nqAHkmJ92EB48XbtthAVN31UkhT",
  "key8": "348EszdAXKrHP7xr5D3xQ5GSa2qWpDF8Mp1ygu7ncLCtBfCr4ManpPiJeAWSSKYea42PQ5TPaGYh1TDZE6r5Vk2H",
  "key9": "5umw3cVy7o2E4KSduvG7Cax7Ca2jdMqttj5FXNNgJQ6v87AcjEi2D8xURjL37CFV3hsVqFiU8jBLnxfHWtgQYn7G",
  "key10": "22aK42uoBLTBzwxKJbXB5Dc91dDiMhrKv5YrKw8SVaZweXzru3db8r2oAPuNhEiFQi3SjFSRwrfc8pXJng1Q5gnC",
  "key11": "5pyF3DwDTG4qHLPgrcysgGjBDzW6KKFRnm1FZTYPuvfjbWsepitfJqurbwWnv4WgXm5qKZBAA15T2HoPm7zTZGY5",
  "key12": "29N6piWyG7wWPXWy7iV1ptvDoZuyzRLZztQNzYdL7SaUCoyxgkxCRsczCdVY1Dhu2FMNvx71V5oy6hLsLvbK7GeJ",
  "key13": "SyUtCM3TWxs4pgbNU4ChDDMCCd2TxAovwsYMqKQvsmZJEtHDeUqNDqedkanyoyZATKFEmR82MZRSSKygbVu7cd7",
  "key14": "3QRSKzAyhoH2ZyF8AVU3mvQVgRqPfYU6768y145twuXfAZdtBAC1BDQ99tRL1ihSPtwwdspQAKsuJwMpv4VKubPn",
  "key15": "3UEwMufdT3uqzmcHdhLsEknFJajrAAsdRMs5sL3anjp22dFz6CboCLseZVyziLt763QPFS3dcZpv5AeDX3FBbE7G",
  "key16": "3tZ1dmkDLQEzeXAVSvqvkQ6XaitDZD9UfA5xhPM8VcVmPD2pF6LAuQuEHYcYEk7LKWyMU7aTCKqVXBWojHp1JRQq",
  "key17": "5edVZatpdZxfCTLSD7s2stkLrkkeNYgdY8AVwuZvA337q9uyqziWeTz6cMziFHvuh5iDaVbzYmBufVT9yY7CWdXD",
  "key18": "25VUx3EeLjK1YCeYWYxscYkCvPi3onDYxAmYZsxHUSb1BJexhbj9asTnWESHCV2d9K4vPS2XifRZgCJpwbxgbA5Q",
  "key19": "47D2G8QfLeRuehZrDHWyfkr3WESAQC3LrrLbkejBseDFhiaPcVdtCs2xneipe8ugAYDWJdLcLwRu5Svmz8BAqjzF",
  "key20": "5K6mKPQqHpHRx874PMiNzJnEvbXjzB9LzQB3pvvfF3uMopEcTd8omxXPS1cHGJec2QaqhdJJiZLekHVr1TkFP56a",
  "key21": "xtG3Vq7JsLoHWDwZ1x4dFeWCCDFqFcQ8DwRFT5xVWT7UPkWSJ5nJJLs3W6riC2x6QqJmF7CNDHDtsRdxMo7TmyA",
  "key22": "4PgweSWBhpofJNBrHtomvRh6Rhhekd7svc97RNUFzfajza3BfqdQasPnGN8K1gqjxQw12W9vUQBtxke5cFvf2APR",
  "key23": "3NygfSeBRUKjjmwfLPL32GXMc7K4qFyZxW6MLwzCNMQxfe1mbtPAV8Abq82sFSrrJE7Eepdy2rV3zPj4GRkvkBBK",
  "key24": "2XfzgA5ppCPPqopdPf5q3eeo9KeTbAiJzDmy3zviDAHjs7qHxT7yvbnUjuZqNK54MyNqmQ2h7JGEiSqrC7meSmvy",
  "key25": "FnaFhCgSC8ovKjGBPkj6vD8EdA4QRqzppmbg8HeXsovnw65RMkGYapL1XXSpTBhrpQY5ForyUTVUV6AmTuD4P3D",
  "key26": "YtQK3eUshHBy3RHHXPRXx4pLtpwZJoaxJoxWRAWkRcTYe6thLFWJ5rDTXdE1DmAK4rvtBz46Xi9t9Nr3K99MQof",
  "key27": "5D9SyUccM6Dm6FdfFv22SWgoByuVLg2RVFb8rKknEJJTv1fyRFuYEruVcSyEN9r9Bs86WTXsf4ToYR3gXSg4QSHX",
  "key28": "pr1npApv3iP2E9KUB7zjJkJ7YymebuALZXQR6wWD37rYoBqASQPjLfYn7frkQfceAF8jeaXFCuFV5Eu1PkQ6QBF",
  "key29": "KdNm9fMTqJwJNngFv8vTrgFfCYYc16sez6whA6wCJ4vwoVz1pYzoErhvES1QGivuapKRXBu5vfGaDNecpB569UL",
  "key30": "4RhVd2jvxhT69QadiJEXxZwCSU4wYEj5oXDzL7F9H3g4w4F4qEiebcB6r1GE4F6s3SYF7rKv8ToYYcwLnsyVXLZC",
  "key31": "67jwhE1m3HSuK3FE7szeyzPUSd3Ykt3mMf7U1Dux3vx7kwoUPtK9JQnmhcYqBgiUrdAttML8mbx14iFoc4E1jRG8",
  "key32": "4pLCi4YJU2zyhkgULqcVFvLUNdtLX1CGxJwzfvkwmfFAju37rygY2yxJ4JrrRyuogwyu1VrkdKL7eSdGtyV1wMN5",
  "key33": "4bWLKV7hTwqorLSafyn9nDKTYyvmC44iihwAN4rSiq6yzLJD5fXJBYb48ZpczM7GTtx5erfZwiFaPNmXnRJrEGKB",
  "key34": "5rNexYQGnAu4Xs78GKWJ52vudmoMbWY891wZz4ZeL9jWuJ3ruuvsMpxcWwsNRbvNRVwYgNnHijRtRvpuiEREgp6U",
  "key35": "2KqTt1tPbzJxMnAmEroiKhjh5pL3AfHptSMR4BKDzhUbGTvw1SYGpt4MzKStnkojnTmCuBjsWNewx6pYTQ9mjPJg",
  "key36": "2SUaorcK5t9aLYqa94xaDPpRbo5UWEmaXdyB72A1FV2TpXaHSF3sQqfqZj2nPa3mKseMMgr3bRrMr8hcnoRTZRkt",
  "key37": "67enmLceYBkeEcbmSGggbHno9Vu8cGEUNuSRHCU9hLdkmXSZdQETJPicM8Nec6bDYs1MAqpsE6AUPwqBzDhwUDox",
  "key38": "2yLnyfTTeGZZQzUpkW8f39k8v1FNtJvMq8jguoeJbHs5RvohzKmrebMsoJ3JPg7nYmZ3UPR6FrQuEVXisDBh2EDr",
  "key39": "5wZnY5zVLrpeScAUiYUUQ4d4GQDNMs1RYXyxrdfQ4ygs5EEEScJPkQPjZMRFZXCvDohhJrbwKFjAjxcVtPwsdwJE",
  "key40": "5ygykTJfRwTTPH2f8a89YNkJrxmRkeBhQaPA2s6EaVu4xu7niu5aMa52HPfDwbWukopzyH1h7b1dNvtPfohbsaJb",
  "key41": "XTReV25v9aAUF58HpRYfLD7Pgx642mniBiMPYPYJedRwMNXQVTjDUXNKfraMjq6uTW1GPqmEuE3pWHL5qRWo71z",
  "key42": "qsFbRDWSZ6apdBTkDagRJsU2zzRYVAUvuRL11AckomawAp3gzGzTffqu9RpEbVGuHvoMpt5QAGouWjqLwYRg61o",
  "key43": "3m4sXcoApKtwi9fidAZkohy7qA6kf5PVBpWkLPZdEcm4r68utF8BHgK7ei3XmFPbkRyp4BWuYXaPGBZw7FvNKdeR",
  "key44": "4scFdp4SespTHAD1oRQ4jX5C4AtN2kdDV4Dfpa3khsh44s8QH9QYdEr4AS9d9kkv8FUEU1b6LWKWiBaqpddMenGH",
  "key45": "3jyJ1PvZ1PY2YNkP4Kq7K6azYnWX31Ur9zzFg1rTzZ6Vok39fWLuKC3ut2jNhQNuk4C1QKZWGQz4qqfMUbrgJjRo",
  "key46": "4QntM9QgeA3ELJzcL8XxtqtXYGLsgVrR71LgJZ2HWK62RgtXYLYty8cHuR886JM29ApzXq2aUHxxDaDsRS1oGB3X",
  "key47": "3VHXHCgMisW2WLH5Yx2YKVZEGLtdemJWXKgtFtxPLYN6oggsEQmRkqf5ifc237eupR6GPWWAAC1RthXtpBZA5ZrH",
  "key48": "pX6195kNEhu63Mu7EDe112BVvVzQhE3PHYivEpNLK9qLmV16qsoBjkBHM1VRV8FpmypYa7CyQ1Vr75Hw98qeoFq",
  "key49": "61fDKfT6zQzSNQznWjEVDi4ZaePiY5peGk2czoYS6JE9kJwFX4d9YaRtaQ8UVnDMtaaS8KxX4vSF14dDk6y4kNG7"
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
