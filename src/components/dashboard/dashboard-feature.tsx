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
    "2bqbYP4rLRDibAiuDxshA7z8B2kz7YoemxKhpdwiFoyrpnZPZS4EZcKtYdTneVVqu36CGhVSpYUZ7ASTHKPdkmcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u3AYZ4ruQzo5jN4BDzYRRACJm2RbcoJDENQkDkna2Kwu5S2jUufhc76QdVGhqHZ9xKveaLt6SW5Ab3yjnVbF5ZF",
  "key1": "5vYhoaKvFyDF2M5mycZet6MG4Jo59G46KKNdMgq2yWX581Q7KWaFdkFsRd92xJXioogbYboRo2RYLe1PjQ1xhorf",
  "key2": "2h6TWV7JbHfkQKWKH3ChpK5L3BQots2uB7Lae9XLemRZ91caVKiH1pFGu152eq5aHEoXx3fGvob1r9wgNAdMWtE8",
  "key3": "3sXUq6fZ6G7dWFupZZmuUMmUpmZAt7pNoJLJ6GKHQQVpSFGx2gihWdAydKvFUCUwptnRRk3RukdLNkDJ1wyDmjZ6",
  "key4": "FbiCu185SXB4QXvLXwTVYdgZTBQZYgRnJspuwvw2Vww24q849w27z6hEh72KuxPqswKZvsWobxS2HJdPURG1ai3",
  "key5": "3go3bma6hAAbMjrkKyNoSgznXU3SxrnavUP8dSApsKyc9ptJYAN9w4qRNM6TCFBUaJw2UHdypPxseryv9nzzUHCo",
  "key6": "3L84UQNKnNGsTF8ze8E3ZNcs4xzXsbcvTiKdgXEeXh51jSGeCXjxh2GkMqHFFU9VGhEkmXy4uUJNEkt7n5E2chAq",
  "key7": "26xf78HbFm8yxF2piB33EQoWjQtJWb12MjFbykiRpRfLZo9yzh1SbZWtcsS2rBNP4mT9KVPa652ToaQmsMmShSic",
  "key8": "2sw3VqNygaxEb4njhboEwiWXbPiidvKhCUYPAmAgXfaf6xaX7vyaaa1BM3nsu5kUHMHzSjZHR5XYhCNKAeJMBewN",
  "key9": "484cB6wnCksfCfXwTRbdiWDYSjCFxUw7nYyGJYuyM5r7Ner2xK7NhS29NzZvknU57xVU1RQS3Mf3EW3GuUS75aMm",
  "key10": "57RSHK9qpsGRkfAxB24NdXW5HdcrUAMZXHyMA2RSFahdZthAsszccS9fU5S5C4VW1vBWgNJ96JPLstksbJzRJCMm",
  "key11": "4XVTUSUR4o2sX3ML3rFQm2ZCuB2ZzqtJtg5oxyPwWCbAynjhe13RjKUuuUJfdw2YKJBxc9iDVrdMQyACvxvJHweb",
  "key12": "2Z8yVdzFgUGtDJY1JTcwadW7V4LuyuiCs6KrMkGriyt7RKFM41wSHhsumdBJJ1pXV8vHE6dpgFkompbnwHvoKQ2y",
  "key13": "2PwcneimHsaryYrTyaiqPNExytg6KAmeJoM4xJQ4hCtrX8CKaY9TMGTSjj6jhY8w19gxLisdiQck9c4gcH9Wz2De",
  "key14": "SVTn1DMN9YfR8YBEmasuKiM4hWTG73APRnLtNTVNeqguwXFBBqSMfTHFxrbB49RYsVwHZEC2u6DgZA15VjuBkgw",
  "key15": "4XTfgJ2dYQfVoDki9QtRqbLYgmVhiudm1Z3cxARisZPvMYvZg6V3mWVwmocFyvuKwmi7Dvfx89wvmFKuGxZKPkgj",
  "key16": "2GUnt5i4c1AZ5Fi5Vpj2SzAZauHB23iJZiSLmNoyWkPoZZ7D4itvhrtLZe2gWmHSGrjdaPQLW1PXEcbtXx2KWPGz",
  "key17": "5ezujoUcZuBVyH9kwc5c6Xa7GUahbvgokZLG5XQ9dQTiiyfmY8kZmiJb65qW1P46i3Kt31Rmrq8XBLUFeiZoTkbX",
  "key18": "2M2AjRETkxFo2G9HfbMXYXm4Hv2E3EZL8znQVKbvFBqjq2Gsi6EEs49YiHV9DrxbCaCV2AMtbF9HSDB4o3qeP6uG",
  "key19": "3tA9esDdhzRq79NeFPpcKdkXWqv7Xy4jt9dA5eaq1ucQRxNWMz74mgockFU7Zh3KiYsR2Znaz88B8pcUyuEQULm7",
  "key20": "2i8MzYbmCLo11xJVnbAJGSU8dGWMJyy4Etnj7chY5WmRLgP5jTpgc8GSMW48xGv2bJn9eHADzxKSesFDm5xk4tzm",
  "key21": "JpX7nLE8NfiDkcbmBeQ6bE7KnNB582MttKti7wk1n6wEZ9M2qJSH769Uk5cSYqRXgHmJVfXvNVMm4EEaPmjoaTj",
  "key22": "3Ur5umneZ9Z8DavJgKbyU2gy64DPpuNEwj2iTSdSj3zZ36YAMoSnccvgqA14WRWujnjAZzg6dUCNZSNPM91fQapG",
  "key23": "5YvNZzpQzxEHyH36gRrdospsBq8VEFxaZBiJZmgHi6ux1mggqAXRiLagCjiuAtrDXftZECXjunUezgwbBeWWHpyf",
  "key24": "4Ui61jU831jHCT8WPufcjAL5mGpKZ453PTUXUNWFxdo9EUfYR4rmpEZpQx1gBnMGYphykzMXunr8G8FYL3FyUV34",
  "key25": "2DqyFEpBqWrzdwgMud4UzDCSVtdBJ1oeWdDxME5b1oSpYQtiQqSiBjtaup5nv7PpTvJKkKVUHUkLVLrvYH43KcGX",
  "key26": "gB36SYLN2KD3H7JPVkPKkpdmhSW8moiP5gmwTvJK9kWq2PrUbwA3JAASDyWHgkP3Lp3yMUXYVZw73DANA5pSRBw",
  "key27": "5zLt4RbVNsBpYNUqnoQMNSZjPTWXo3uT2TiQVHDPoUoZHBriWJXk51cE7Rbh6E7GPAtVk1HrDYuRkthVJz4MtnNE",
  "key28": "21iqmE43xZ8FqP1fMwGcZWCsnbphs5phXiQkkcEZ9C4VSZrmCKjdFKChGrrpxKgPQpJJtzhfP8rVAdLXFmWRKqDg",
  "key29": "21EuM7e6F7xcfWoJ1ins5z9psEK25kwzQ8tSE9cHWx46E4vPFkQvpDGmVJiMUvQ2Y9nh3JwCxXqQj6GzMjnZuM72",
  "key30": "ymXSCF3P2V3pV7ywHU2XgjHAB4DbndP71eYq4hmSEdS2WsPy4fKQi33yjAwawhFdbZ2Tb8N8LWg4VEiRzEZ9X9T",
  "key31": "5Fx1ocuuzuxNiHhdjBcWh9i2xgLebAUWBR1CFnirPLhVuBNrLmA1rS2yPCyWFgVzDujejWvFeaRCjK67LubxHT6Q",
  "key32": "2aygUAvfay8imqdKubkgWjBiqoR5vbXTEx33RPV58dKC9JBQEnsZrpJq2G62spJ3cbUbnmYwGp781PRKvh6sJqX4",
  "key33": "5vZkaWDfQTA5oJbyWQSivAQymphjHKkGarhRYb5nJURjsHQL4Jm5XWhRE8WVtCtP2zUZZzctDvhJnHEWwF3ueuQd",
  "key34": "3JKocaiYNFusZRYMmohD8o5K87AP3US1dqL2WTgGjvmZsMjtzSkxvWUg5mp8jq9MxD2JEFS5Z3XssnzW1LEAHbnm",
  "key35": "5pRyHnq2JBKz5GhYRrXSADcZpqAQaxuS37uQE5ytmZp8tKTb7u2TLPUEbVR7MBZTExxLQbPd1ajQwYxfKAkUUDMu",
  "key36": "iupjB8y1WLu2tiVXqGsyAyxZenmeyuxAKfXDeDMr6HLppY6SGhpMVZq1YHUFxGWAn7DZD6URGCv7eEmgaewsV5z",
  "key37": "45o4x8ZmDZ4XWJqNH56F62h3s6A8C2joPVeWHQ1i6KpuHm9MWMLfi2Etp1CZSyy7dozadqfy792TwuK2S5cacA3T",
  "key38": "2jfEEBpCApYeCR5wLJVQDV7J39GxQrVHUneygcrqY8GpSUYwaMM6FmkHNNPaNisw4KkvoyLMUhCdhVRq7ufCQkNp",
  "key39": "5bNafxE2iApM3ttx31oSLCRvhRxATK8vj6VP3RUmALBP6xivSdo3AVjjKAf893A7G3s16nNTbjKa1nPPPUaoxM2W",
  "key40": "5ok31skHnt2vHvqsy4g7hos4Q4YonUfFD5gCugagSRSZjkxpstS9Zhob62tr5BZRknTRXoi9aVfCT9ftvmDoC3r1",
  "key41": "hF9dzU2nsVCXYefWugTbUkBasTwJ36WrfxvNRVYazxJdNQEPb4xQjibrtkZf19QDRigZij6asNagyz1yY6C7nrr",
  "key42": "4w67cVWprABa8rFUiiuoj8eNByMNTxckCahJUHsZtMGizypJywnrFxEdmHzoqyHriW5MFi34Vu2gmzgS8YVQVisf",
  "key43": "5wyHVZ5rTst1L8CTYJrHvKryLjG4euULpJ4cchawY8hpzEd6PbkfXWap1Ny6rFyf4pfqLjPcXhF7ukYcRuZthjVG",
  "key44": "5eJQ7xcEz61NsZpwTBEFNEgUm4SB1a5CHeWhbNBN18gygGhz4nCXXx5tdH7VyvnzRDuRTpECRb2JJRSe6fAdCc3z",
  "key45": "4P2XHtqUnuLvaAPkiCb6DjCNQnhxwSLHFyZ76Dvzf8EXztxtxuf3sTSnJqqNUXNrjwQzprk3kCJoonoA5XmfFFza",
  "key46": "2KFzdx3SAGeTgypwYJbYphrHkq9JaWwng7NLepG9fJkwz8HPG7H9iMg1LhyHHWGzyYgoPP1zsipu5xrnFbPiJNeT",
  "key47": "2s2puGurMu4sMH52G7HDDihrgFn7BSyCT95vEgBfD8b2HbmDsEMX87xnk3BtpZzRQWXn8EaVxQrFxy1t5ZtrtkUL"
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
