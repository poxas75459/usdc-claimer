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
    "519EPCeoF7X3rtCtRqqJvN2oqsRLov3y1YEdq3ynucMrTip2nvFJaDMXb3ADdTUEdwn7NvaA3vLLygmASpNZe1Q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f9bMiWZ8SKAEBWvMKfxjsBLxiCprDxpbVbReyx8pbqVYzWh7FZjbbhX73UUMKkrDn7AWaMDDptJBUsP1Xt4Tsds",
  "key1": "yy8Joz2WogxhmyEcPqDr5udY7iUgWB7FNaxSaSP229Y3nBi8QZnz75jHPTJDqNVi34F3CqxvFbDNxj9gf8WzgB5",
  "key2": "3Y7KxEsDU5X7ZoibqPN883g6GREkrzkVimJgJymbbN5f1NKA5mgzg6oDT5ZWQbU5Y2hwp3e3hdDZAuXoKXcvwNE5",
  "key3": "4PyyVJjx3AbwPcfK8rexLSrbEsEyfsZmXyUvFn3S6SMUEudEiTz4GVMeuoUeMwC3P9489oy48kiBZuyqsSFzzonP",
  "key4": "4GzdE3tCFc1hNnytSbD78R8nixqmhDSPqEbtkogkBpVJjrz8kiwFQDMcW9SjVe9jTFDD1bgLhDYsT2gaGVvGhZiz",
  "key5": "3jLQM6da7W3ttGradguac6rWRS1a5xLJX4Z7o9JCGqxFA4S53qA9SWSwtK6PmPN2zyqdVuoYcabpCPaRcd1MTKR4",
  "key6": "33nvgWfkGYUMWYTSm6UsCJ7ANNXQkFsY9gNRUaQcZz7AJWUkhUUze3fz9gaH7Esyp6f6javVXmKPYv1u2qvKinyq",
  "key7": "4qGgVPReRwFVDzSgQEXT1SYjD9RqUvDNbAvm3GmTNYbbakvG6HWbvDuc5VGfxS212D8iEKe4r2GVDwWNhKECrurc",
  "key8": "2TACJKf1BrhVVhbQzhbWgxaSgpUSAfvyHdmYkvbRXPrYLEjbhuUjj88ydZJP1rxUTAqc3Ybk56WhNV33o5TsJLjs",
  "key9": "2aF6u6KUs2xYyBbPbPaL6WQWNPobSSMvTECuGzRV47vZfqwnzWgAevgVvfdMY6Uk1m3ncwgBQndeWRY5FaXBMW4T",
  "key10": "1tHCWEtZ2TsmxzrSNdDYyS2cmW5PwbRpHtWNzDkyX9mDi8gkixZo7ug4tEednNV5ujinCdqXCEUHomfAbmd85p8",
  "key11": "ZVfTaHxFhjrvezCYwBuNVNNoJcqDgHh3q5582T9j5eJtqGTL4Ajwzc78NPPDfp6zrKu7ZqWwHvDNBna8euiAvKa",
  "key12": "ir77aVQdJsAmXii6iPya34jMuEzSUxWmgpQ4hGbmbm916GX2JUE8kA6xs144qD6R5WapYB8NHDKEZ9Wbo5EYBZQ",
  "key13": "5YQtc3B1Y2d4t4qzcti3KuNhTS4agkMjDhcsusXAXvSB6EH5K8VUb787MPhGCSaRtvPE4Q6uztkVPJsExGqWNsPQ",
  "key14": "HkS4W2FT4kexM72poUkNgDinUgdCd4S1rTTiajQNmsYZLBhTRdi1cT94EuETTVE6htdjmJRqwnWC37xEo2Aacn2",
  "key15": "3wSrpSxZda9o75jcGyuemfy8XuhVaq6cLundcGbXm3GXikN5p8dbcgAJGvuDxv9FKGktBeZfkeFAuLj9uYKXP5Wm",
  "key16": "m95zxkEL1ZSQaVfpmjD7PrHR17bWsSRREcCbBWTQS5bTLMzYzkpLtxt5MSNcPzSwq5ezTzptdwHtNy6d3vC5JrE",
  "key17": "5PRCSn15BvEDrHWzhbK5jDLa3X4AbB8e2XeHnhT2PrrEvtBDmpbM8C1KPCDXTD4wwPi2M57qR2F8MRUZA9J1bQ1a",
  "key18": "5wDoWrcSxFYmoTFxYinPBRxNQxxLKz4xUS1ZhxbrW2RvSy71D6tBKNqtn9YTdAxgtNPZ9KpNuTYrm94t9mc2819c",
  "key19": "4FacGHSZCEaBEY9udAookhU3WyhokT1Bka88yLxv4348Nbdk5DpgpLRpNJXLCRgF8eSfbqGdFmoc34dXeiA3PxTn",
  "key20": "4JwBKhnYTQHrN89Co9ExYHJP8CDsYDF1BhYr9iM9sguzviFbsLm9MEFo9E4wq7rqHBTE4X4XMavK4YfK2mqA9BAZ",
  "key21": "36LVeURgEtuhLQooZFP8JeDBVkN8rdw5LLD5CrTSNd2Xpg8aqUgxrVc1yjEWnN2Z8u7Jm13VXJf3aLyZjofkgWTP",
  "key22": "4YkAx7rA66WFpnTXifiJDX8MXqCsNjj16UDh6TJ1b8WaXFZaQCQTZE6oWnxAXasEt7YHLiZwA3Wj2guGoe3jjuxi",
  "key23": "2jS5tCV18P9vAMjzrwm5KLwXpWorZt6pN9w2ygwb4DP5TtwgNNpSjxt7CSvQBn7QJo3ZJtScAWR4uHFqgVgHvif",
  "key24": "62BBj4oKhoP8TWRRAX7TwcGZCxMUk5ftRbwcV2unmyVr4YR1fcvxv6TcaW5zhMuERMdErW4cs4Tr5EdTo4Ft4HsF",
  "key25": "ATSnVYc9gB3E8S1hko6n8sGmYn2inzYo3tNUtSG6ipwhptWx6NHq6xfwGVtkv2gzULKu4HqWDbQUANYuGBzVRHi",
  "key26": "4mcthA9rZNczZVtAN3bf6bZKRrHRkS7tsPNaoY8Rk16EP4z8dzA5jWFBev4smSDgc3sKVKxWGo85nBw7xusmr1bf",
  "key27": "5zr5UqoJvRqb6acdZAUyqFjCLppWuFQaJxUcdajoFcoTdujGqUmp3yCoxNP7SPuFecj6LT6uafh52TJiihU2xYHp",
  "key28": "2s3PFFo3JmWvDKCCdzB3JXUjZY5f4eDiFtD6wVEouJ8fT4Gn3775V4TsrJs9sZbFoqEFzx2Zi5AWr3yVzxQ6Va1b",
  "key29": "28y3ox6Gr2wabkrfPVvybh63UMEzUuzTmKwq1fyitTKYeKUsDmWkMWPuKMRRLbr8YpCf8NtFQ5zCTUYVKUwtjarA",
  "key30": "2nqHroMx5nt8xySiWCs9AG9KDgAWHnCvHnZxGMckctXdHnRQu1an1pakTHFTsVPTMDq1Q6R2rcUgJCd4poqcWCwz",
  "key31": "2uWyfC3hJDVpMdfGCv4a7VcQNrfvEd11fXZ4prUyVfbAWQTNyrjNMo3dTGU3dqFikGJyv6KkpaFazaWfvGktha49",
  "key32": "3uMpBKiBEmJXsAVMNMHoieMhuJq7UAhM5g4Tx2DAoiLTUZwBUWFHe1tArqFLzcfbbCepPzti7dvxYUruGFGSJZMx",
  "key33": "4g71n1yMS2UiS79gi1R9t8fkn7LmCNJoUiP4zA5DQYHHGHfNbqW24N3GSMwGsNwBWyery3JsvQhEB7wfcER2Ec4F",
  "key34": "ZytP1vrqVw7LPHLwKTbYSMvgteitja1JDemYnZF83bn5FYhYEfgh1KkGAVJ67f9mKJjPY8SFz5KBoXaaVdoi1u3",
  "key35": "2tty5sr4ni4sdMYGGuFQcsG9vDMyLp6NyVvnCg4eU5qb4cfFFyUUSdqxt6JndbWrS5XAHdL2VVNdfDsuYvASthjT",
  "key36": "5T9QjyBksyiDYHacmcAEKnJ18Q4Ubg1eJx6EbKc5MD7X3pj6NPMuhwxfZRMR6oNssxKgDJuwb37DNos9TkEB4XC",
  "key37": "3HH1nhN4osBgy8DRZCVJeTkaBUdxjLzQWcaSdmiWgKQVn2Pi1yKM6fx4vNBnq5FGNwr4QUTBwKKpfSpianJLBPdA",
  "key38": "3FuRW5pVroNS8pzyG2SH2UcjmSwQK6XGSMo54ZW9zyKswejpvhhdy7cRfFiUJjsF7rypXXrfbKMxE9QXk7irHrwr",
  "key39": "YAiaCvVhTknEFNetqGgnQWS2PqRFmvPxA6iiWz9Scptu192QJKfA9mC3goxPPM3HAqX5BMJmTA6ZkrLK5YcDqEy",
  "key40": "3veVnZhk8VyCqAbkqM1f3mJanRuaCzVGUzcYXMe3KyZLXBQTdqa4g4ZhZJKQoZ2x4bFPZCZuvkzwyERrHhTqH5bL",
  "key41": "2BZec6aqSgkcsrFAd63At3caHjJVJ8U12mkftmu9zFDePNbYdUmEx8dma18aKWwGAMKiKVTDUbjQXEuU8GAKgNn5"
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
