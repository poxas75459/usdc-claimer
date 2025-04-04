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
    "4Cp6dxhsGSeANjsgQV7Vu9g2wuzcPqzdt8S3EMFk7s3hz2YdSWoC1bnzNVvXMkw8GELqGeSnsFqaJRRtKPXbgrvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEc2hKZdVV4f3MaNoMR2F1k4gWGXsqTm6DRvw6MZvhyS7PNK7nYCuaXHGnLQCkG16J3CUB23SWjsN8iPSZb1Jn9",
  "key1": "5vsQ96SSbN4k3XN3tvMeDmSV2Y73811u5jHi8VG9aHmMFC9esMSfr6npif9WxBDpmJo6fJMzbx47edNRBE74YTCu",
  "key2": "4KkFY7mxMn9Ty1upnQkdgw2k9tfADACuWgG7e9ZrzKkB7jB5yXR2x5xUQZTMPSSjjMfcST44iu6sQe88REgm8UZo",
  "key3": "3F6BaGBFquUdHAU9Ph2WxcNioCWik4j4mRwDAAR6otk39yHiwK4FZWNHbLU8ZYE6PaMFKEfex1VWWG1f9siNwMEE",
  "key4": "YAc3DcxYYXshjiYrdxZ2giPkuDMZtUy9BL5HpGfPEc6Mx8KSiNHmNdqdkRcmzMj8XGP9XLtLdZVoUbCAetdo7rz",
  "key5": "H6w4ECfJ4FiWwdaF4N1jPE73ZQ4rSS1vRoCozM4iPTpbWdbfbsR3EStTKAdsrfvccFdLPsqpbrVvtzU2BhpPvQZ",
  "key6": "i6Ha6jRmwZ4AdjUiWA76UBYdVekAzqsuGT21un4Dd33DUTiJatmBQyJLh6zDTN6kDsyhtd8YazD9G7k4ypZJ7rM",
  "key7": "iXDfoeCF3dck5VYJfabhdsZBG73KPe7yrxA1Nq2fqyN22iem8EqMf3iZ2xQvBGFBNPjPdVsgVAapRhnWseVnRQc",
  "key8": "29ju54kT1o6CYEoswuhbC4MeieHxkbaeDo2V318F5UzFLEZXxqMYkXTnfJHwVqWu16vTY48GwJp4NQQNAgcmA6bN",
  "key9": "5yvQda7W8EJv9Dq54k38Gzz4g1XXk3Sa7uwYbyNdjaikcczpoqhz1X94z2hXVFoaazhFgmyzkgy4eocqzDuRquj4",
  "key10": "63AYPHWRtWPtKYKzatncd4yqbiakt9uP7VEWTJhM7nbbu6F6JhjEGLWNAukpMVKXrh8aCpS4UDa8fgA89TTVgTDd",
  "key11": "5VBWncsaR4VY6Rrx1qd65zhk5MvkDJ7NCDccmpP413yJbbAZivG66hL88oMNhJ1i2BSnhDeuBBubdHZpG52iRy3t",
  "key12": "8DAqZ57WDvsx9DtrAzgmo6kMBcwgd6sDTbj1YsMoygijSgduKxmLUYb5tr3P6xBqxXuXsdtpjWUqyF3AzqWm99Y",
  "key13": "2NoB4ZaeRLWiPDKyBRpAUAotibALMRF7FeVhDBA5Q7aDVS6XrQah7EGhyHQmrrfSryhZBRJif6V8L9M1azmg4LRu",
  "key14": "4vfyJCaHTdGS5NifpZNYyLP3Zr16bwsF5PNNYsiYmQ4T7vkeo5zvjNhwcuwn2nTF3hZeMmgzUdDnJtdwKjvevhYV",
  "key15": "3PXVdyFYKjy9yMErbtagHDU4bEffn2ZsdAuEc62N4rH6G3PmqhGHh5Z4bHNfLNBj6XQQiviYoqP31EnftvjpowTr",
  "key16": "ZW1RRmYSJLhzwBtEufwSaPNhSqr83sAs1qmP8aNAmnExfHanZda8pCReCLSqnRUbMMY2wKhFsAzf3rvoaeXWDPJ",
  "key17": "3GG3b3fi9ggJYhfw2qFuGqDy7BT2gvrij1PhFCKrCi7V3nDQVGbo1NGphQqHqH7c1g5oBWXKJopj72NED1nrqCzM",
  "key18": "2aeM45JotmFZMA1GufQCQym4uwWxyuVruy7BHx61phC2ew9jL8mDadc5tYmkg23Bdf2QoZmmLfhDyRNpYMXeyAAQ",
  "key19": "4Et9GE4pmKMEGLgxhZ8H9TUHnoVHURerv7LpP3kmMTrxuazWiN7Gt1emsHPvM29aoux2E7BaxvzFk1RUJbNkJZgb",
  "key20": "GRPEAmjQmgPuE1ouxeqLy76YLpmk9mo59s68dF4Xxt56kqGjXLVdNearQbTz33EWMDj8buLE9fJqqeFSPXCfa9q",
  "key21": "3dqXg6MXuraUrL198w1iYEbi5CpsBy6WpdDSmXjd73MzAjAEyExg5GcAjPp5KKPPmPDsoJXrJ18nFm6KCmDdHwnD",
  "key22": "3g1HuFdyuux2tKRJDz3RFKvePUY9mAhHYeTNbHG1rXcedTkZnCJF7Vga2FsytqHxxgkyEBmXJy4mUKu9HzvB7Xq9",
  "key23": "254uZit61mYYko8FLCysVdH19GZ5CDbxNnxD5U6ddUZTmcGmNeYesVUrN6iSwunXah81J3GpxFTmW1EV18JzRzny",
  "key24": "2L6ByVb12BKCXiSuWznaXeBJG68qBZKWqcKff3Hb9C9eyaxPA3LHnAmqfAbWxTHGiojKS3peknur1vkro11bJcih",
  "key25": "3mcUL2gZGeZZowXGtdhigwcy8QP6qjGuKzuYi3z8SauSeA3Wh14NCFkxy3NsnGSkbMgE8XApKk3s3GC4JxG4A9St",
  "key26": "28R5dtdNXKmmL526dPggaPwAupQH5XWCDN3vpUmtWL39veqvPnR2HWTjLxT4q72daMEKiBuCRnhY7PtaDUB91rJv",
  "key27": "3J3RHhLUpy955Jm4shv1A1RWnrLdFpGpekMkkCei5Un7T9TFaF1bhScVE5NVsYBFAfWt37qnNs4svaWhHKzKVpVC",
  "key28": "3qiLdGEBnQfsYiqos668V5GrFKuvfH4ZhYEserpD2LjoBrNjXFfJzpA9nDyeK5PbMLC642tuPvQadhLxuoZFtSKC",
  "key29": "3t1m7ZM8f3tU4i8mVwC8sDZVViymL3U2jva2w3t2CoijdvqtQntYdJGGXfH63qZPs6VsCoygoAW74WWhvpYuc1qx",
  "key30": "5feM8th4b8kwcgiJTyRF7SnBhdM57yHWNE5fhaCdTvZcG75aWVWes9mmdJssss3HpVgskvdgaePwkAZWW5PwqpTY",
  "key31": "BXo6r1KAajfARXrYmA8aXqGComVf4Km1PzpGRSJ189veuyCUFqD8sM4A4e9MugUDmKqNTh46KrtCAL8tFEwZLyq",
  "key32": "26gK3t5hG6Mm16Dk49X5DWiyt7WdS1mTtUTHvTsndnkbp7m24SQVH5Vz9JrwHs4EAfrLsRNA6kZpZAtkHW9Wup2M",
  "key33": "2zcx4Rtg2zGjfwTvtG1VYzhe7wfbV6hoCJCba1iqiBp7AtXYcoJQkjJYf3KBxcYb1rcTSM2XQUWe2xfNxypD72vV",
  "key34": "5BDZUSVTE2Uh32s32fEixVjtZ6AAws8LQ4To8upjXwnVNczGasSQvq72V2Pi7P5PuUjkkkNXCymrHG8r5mvjkr5T",
  "key35": "3bkb6a2CVvC5tx2hHd4TFt4TpwEcUUquwxX4fcyjGtijsRZr7hMfTnAeRDaQ1x5ceQbZR9Abkxz8rqKLqj4YRTmT",
  "key36": "tTe1Sau8MqAD4wwoajCZqGurfDWAUgPjL86MJEUa7GnSFNnDEEqryR4mWpw9xcjnkpfGv1CEmtrUgAbZcrRpDSN",
  "key37": "KuZs5uw8wtDetxQfe244uN43ttZjiosaUKstMy8k4BoKVE9oXtGETdaQMbczoKFebrBnBNaW6g2e8QnB9XBAPPt",
  "key38": "4pCtMVV2ezFRVJ6cztAbY3JBqQLKZD4VJ6R6SV9fYvZigxadZkNFgt3qHvxuGTVARE7yXAQkGRBYCqq1EGt6V5ss",
  "key39": "5dYPcYL6VfpTXeD3afTHvbpBJ2k3GYQh1sKBGDXdLkEcQqJoogRRkn2utjKUbruLhqo9fbRNz68uAucVBYALc3FT",
  "key40": "4Mwys5kCAjM5doVazYqgeygYuYCbFQbzDumb6ojaiQo6MXPEZ7GQiW31Uz5MJCeEqbt57q4SNPeqh63qzC3bfg2t",
  "key41": "5ntuG6aYSJo4AhcKNh4BK9L2DYJD9KKPTFuMP79ffFRePynVrX9RKPAccC9PP8KFoNq6SR3uRBhxqFJNgXdU9K2",
  "key42": "4JQHJDiuotFRaZ27s65SKeughF2u4r1yzLPsxsWeFTgghqrtUy6RQYJ8LYZZeTGqrs2cx2S7T9VKgS8aXR24gtog"
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
