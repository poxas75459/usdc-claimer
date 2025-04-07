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
    "3boSsa2ZVY55eA1RpRjshQASAfLcuxo5jZ4TYMgCj3CK94WR7zMmPcSNX3Rjzzj984ewP9Kd55JZNUGz2naCvscb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baqmJCr4cUfrtj6BZYaohdLTtLewsxaSHDxTHHRkB522XvZMWPfFB4f1FDRDVz2AEMfFsYYsEd8tVq79wBg357a",
  "key1": "42TPdY8dtEJnesPrtDAwMtPJ11vD1yBjzXAzEKEpVte84PSKnqWYpCwd2V2F1QSNefDgknv9toD4TpBQ5b9zYXV6",
  "key2": "3YnfLmnvCnWLwK1U819wxzfvLKZuxk11zrq4HCaERRqfKZGrfqgXqbwFBSauC6PqCFu2u2sVYUvgSRLGcGMxDzJn",
  "key3": "2A61zUJJKq252pyP8RHvR7H8uxg5fgsPpuFGM3amsW1YyMNx9uaXppsaXXtFMAmYw7C2st8ZaWQjqyavQh8Ux9bJ",
  "key4": "2oq84SaYq1hACU88WNLsVH4Wt5Z39sgkiHxhmqnFnhM61z4XnC6pxfaX9ipRCnmYSNK65rnaXGbuBuUw6ebZHz7o",
  "key5": "WqcxKRT4wNT7rTwz9fksfraaDe56qjnHYNeqQVNRe4jwvoMDYmYa2z6aJCF5jYwjthsNRodUYdp7N8xXT7m8yEf",
  "key6": "8Bs3kQDeEqFkj9qcGs5zNRUjLL6bHDyJZ4SE9oAQFAn3wDFy9fs7H7SThsrwFiAJtRTQnW8gzXpw371RZb88r2y",
  "key7": "4ZrjayWyhAq3K6tg385znFxDTATKqNXXSJEfLiniefgEC2txXTRiF2e6t32MYpA4NqeVhj4VC1AsK64t8eHYEhfi",
  "key8": "4Fv6cYzCyrQuFW77qXs6v5vJRVEhepyKT5hPiyuMcQ2gR9P1iL3spAX1bxuWrJQV1PDSPmsdRbHJ1zG6YnNXP176",
  "key9": "2uqwXSYGJVxkXvPWZAhc3ZwnbySXKdrxgMTW1QcFfJwSmN73zjS7AgcCn51TRoyvPuLzn24GbgetCpzTVaH7YiVK",
  "key10": "4gwaRvNKtPHsJFkmS5DE6vUbaBVhfBgiha2i11nSGB7F5f42EFGVjT5Z8w1nAwiDT9r6oC41xsDa4F92sNx5jTtH",
  "key11": "2z4hrL59XM3g6zRazapaHTk6Tz5Fqcvsp5toBGMCXzEc4L59UTqdpnsdi32WSP6zJtwmSf2e1bjj5gTd4tQHQ7qS",
  "key12": "4kAPuHUEJZou8hoATA2ra3mpVTSRZo3RC9crqytxoGAcKkcCrNGSMVzQytUuC2NqHvJ7JyEZCrpgHbFqCUwjU1y3",
  "key13": "3iWU3bLWscTD1LC7P9SELj93xm86P87zi8NQoj5RAELsWCEyFHxgmETaStjHXpgw557smgcqrTPHvCsYGF3GSUAw",
  "key14": "4LiMtGEycyrGHeVLFjxgKYPVufkKWQ4h6ZQdQCFdEaDStXMB8mxYmimJEh86Ry2qWgQQ6wRzTyq7XXqF7KyUyPyW",
  "key15": "4c7VG5ag3rH6WdmShJpKewAjE4jMgxiVgcngNnximPo1HvYNMn7mkgJn8Timu81JvNQXkkQd8LEYSnK593iSdumx",
  "key16": "37yojwR5Wiw1E3UTMd8krmaK1HAtgFinf1wWbVCNAJeWiBNbWxBKkvbc8vNNBkLj4C556w2MSRVoKJuYGikiyaik",
  "key17": "2jLwg3oRcKkcH7Tp9zHgB2CtbMau1ED8aRMZywsvuQ2ueMcR2q3urgScBi6AvW1JGCt7WLyJVGy7cGdSeeNJjNo8",
  "key18": "3ayZymLoGD99VHB2dNqEuX6PzLh62Bjm8YYdUkwL3zGMCRzWVNhYMMPkJhRSK7p2TDA82KfB1qx9tmmezsyDxs2u",
  "key19": "2DExpPNCqSCZuacsYoEyRwieGLDUBGXxTXRJAjzsUZBi3eC5k68sfXcDPsDM8RUq4x7i59atVWg53dzXkiJVQMnU",
  "key20": "45stkqbvLRDdTWoyXkT1RvdNsDczHR4EBeQjkur6tVoJSvg2cumSfocpFPj5datE9TUvt6NwEYYU3Gq3G8zn8xHd",
  "key21": "2SbhiZv9mj5B6hSwjYpVDw4p5ikmwamzBvWad2WKzvR4GnLdmpJExMRvYpgzbbsQH6zEJLwiGUq45HJyeXnMpYEV",
  "key22": "5J5xqJRQCcSfzy9ao3F6JMmsSu5oVcecXpVWV7nNhm42LCqW2cRDqhU22xB35Aq1hrwhG3BECjNzqLCbZ11wY4m",
  "key23": "2DgtGk4P5oBJfrGvuQNEJ2ZzGq3p5YhYuPJER1sgJaQZm3WqDs7n8RcFnSDKfLZzR2jcVqEs912kjK5Vau14ozNg",
  "key24": "2T7M4SayrVzw8RPRHsVXAHVhUENC7aipdxujjid2ppFDzHF2p3zwcLNzgXvUqL1Su9feFik6SjE9SnjqsczutFm1",
  "key25": "3rRTj44AvwvnFznTu4EkP1bC5yPgp7B5cnQpKM7dVPbSsdqsvRdppSicmAx1kZxGsbcCux6Nswxwer4FM2thUYaF",
  "key26": "2HtJSFQPLQZjkZCXJNyNJa5UWiCg6EibSPwcqXTNGeMsts2sneCtVyiRaFWYttfqwPLYas2yWhrsnAk5eyvyaY6E",
  "key27": "2GXMWN34G1CG9SjDh1cpjKgRZCmW2Svjyje63tC9WZvVbJY7XJQWa2iCUmXC41gNzHjBNbS5cuaQBEE8zTgtmy5h",
  "key28": "4nyoJ9pkybLRek6HDNarNiKTpW8wfbnAN8TMkHLEyM391FLKKfju9VwmNLPYCKY6KQDXW8r3VmWbu9SL9SWrDETN",
  "key29": "3cyYrCDVwkWEVk6m5FFgnjGfxQm3TSxKcjj6mBzutSmJGpdEyje2ef8s4LRHUBXoMGzcxgCLqP5HMeE8LkNT58er",
  "key30": "5SHCjcadgGDBxN9EffKoJkCAH8h2UvuMSRngXsZJTHGmzKMR27ytKfVgR6cGbAjrhGRdMb7K9yvHejBceL9JGrcC"
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
