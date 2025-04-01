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
    "5GD4aRfYY8cpWtfkSmuXe3ecpmYe4YB1MretttTBmhTKnz2AHnMeqXja8BH7WRHEvxhzB7QDuE6bBX8uoXcfXpaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DHfAgwjBCg282LphkWwHecBQDnReEvodVgAVtkLr1x9iWbsmHU8Q2ZUQynHNPFKtQxmtW4Ybc51nTs4LSmE6JB",
  "key1": "yXnKtBNtTnp8kMn4tDgxPVQPbojqjoBP2bEwUiP2zyTM39BbQgEbfWEuAKDPgkMGYnWwZjHTdTBbJkXHgxaHWaL",
  "key2": "3KyLRvhqMgoHfLY8NJbjdnDTbY4JrKQf3mNaTttaMrNWHp2gQRTr3NxHAC3GPJeuJhL6TusaGh3sKMr6K5PvyNxr",
  "key3": "32JinjUDf3BWajf8WmyvgSY4ipmKdamhTqeckwFhfdfGF4Yx24UXEX7Q153dFF3y2rEEAxCwZ43oXS5Q573fuwVh",
  "key4": "5ouhiuDgYTkgUmrNGuXwy6gSEEfwEvKsm2Tm9TtpnNbrtFpNK6V1vPkDMizqQSsPgABz9ijDf34Ea9fA9TEF1zaE",
  "key5": "46qVd2d5FpHyKvjABcTbHPYHUfoaq1uDdyrbi3gM9KjGzYu6SxhpMRjVGLHy36765VHDWSFcPsJra3bVWWdtvA6E",
  "key6": "ME5wK6aUF9CCap5pfL8RyCJxseUyTXMf1dSoZeM8hdGw3bFjSxQZHs1sLmakLbcGGCFNm1LCYQxQGNDEqdEEeXK",
  "key7": "sN9XcCDq7fAvUo9HxpZZHsgkteX9tRRkcR2Hceo5Dn2DvF9kjjPUnJu1Re2mmTWtquLu6GJv8YMhZp9YbUFZUB6",
  "key8": "5mpyrSMjMy64F4TyrpEFTWhe2cJxmvLxvomWkxxmxZ3BY7NkoWfuvUd85PR2RdCsnqQVDD3btXKCVckYvfEYGF31",
  "key9": "5uyF6uiC8Vpb4WgnxS5jKNRQjpW3TzLvpLrRtoLbMcRBqWyrRqwdcLgwf2ksBbJti7n49oap5iSBxekWE2gjdMfs",
  "key10": "46GvgKDXyzjPu7BGEjkjSPKh369cKwYDaAobGuKkagLsqUPxQYEJNNpYrymYVXXQLzEviD8678LAMzu6sZciEGy5",
  "key11": "3VNuH2xZyn79Xax5TBN7894nvVmBWY1Y6pFk6x79LnfExtW5kgYRjsaYQPwRPanivsQJRgPTnF94YHX5vubuTpFT",
  "key12": "X6eZTXCUEG4svym4pZmhSgF6jcSTLsANdCG6WQoGD5NawpraDfzrGzH5XQtxLnMxPfAHVRh5hKRA3SoJxNP7G77",
  "key13": "49LyEDgw9gZuXGWExBM1Vz46jU2xm4vpjWmXjYeN6uCA4td4GnzTtrRGrXzguKeo9Vr5g72XuUYaVJMpi97dvFS6",
  "key14": "3xRL5CBbvU9w7u79B8AX57FEebsctw3yw1kCVv8cAEfzfyg3DUgi5xkKBgZyJD47BLKB4SgdoKUoQ2i6NvzKqpEj",
  "key15": "3nNB7arfYL2rQfgoYozVosC7x46r3oMg1jYiBfGwS39newMNLvxP833mGpMPMwyWkAphf2YfmWhPWhvSM1upigqg",
  "key16": "26PkLY1GhYgogfSNDdCqhmPZ5N6r5JiJmJ6oj2cbT6aSbhVQGGh3dNcYRUuRTX8ruYZk4mdcusExEbT6xWwieqfU",
  "key17": "4ogRnmuQGjsXd14idBgZEhyyfoprE3rGioXzd15S5APNFUTg4haXb1kEmM5vZ24AhFnbSHqi2XGWLcvWx2LJqjVz",
  "key18": "3ysJJ1sbjNABhh5FZVyM62BmgVxbC9HpYDihXwCYqcykgNBc9sZSfSb6SWi3NCqXZ476DNm4szByVWKzjMMVJSUB",
  "key19": "2Qpan4Nk6v8J2y1JDWDotkah1CMGZXSfre4AHC8VsoLdMcQxXuhPS1VQnR9RCjEetZn7bEawyHcrxHpQ9tAw1tQm",
  "key20": "4zGySYfJvaWbJKTzCZPdNiwQ9su87kGgPZKh8y9y2pq1T1hpkVMw9hV6UTSB5nj5QJP5QC7VrfuHU3buW5nUDB8v",
  "key21": "5onBTaCNB65eFg6fBxXxXs95jhspPrnjd4ooQ9RveSkf8sfNdiBXGbbZhF6GdBdM18WQ3eKTznm6WibQERvkryC8",
  "key22": "63SJhAmR4RVLw4YZ33PSFDNWpJjgTvrb2SLwNQA96nUGsVtq1RA8sxLW9w3QqCaEHY9E7swS5k28Wjd12eeuCVho",
  "key23": "5mWVdZ4h3rKCsjojpnFezrxnTtMRUC2gMdqa9Dy1TrFTTbxRLQR2k8asrrnvFwucHrmuMeg8apRdwGJBZQs7H6eF",
  "key24": "5VNurFrCPfvk9uga2YCSR6tegmfGgtBcjCycu1WMe3Qxk67KNUGtWzfcGf7FZShday3VvhmZPXSQahhR3ypbC1am",
  "key25": "Eim2vaAqNZstRwPfmSdudhfXVopE1VraMmnkAbFtHmakgvG71yvLBpGvXiJuECqvWqz1PrbPgkrYmbryEzboLUL",
  "key26": "5rjLurVjXrSsZKcpwDbQN1xRLU3GxDzvNCCgbMGVuzycG2fhX2JrRkxFH8k462Pd2WnWkWQEk23sm2xvZtnp2LJA",
  "key27": "3SpAaE9f1jcoUZyaw6ixX6xrcdYVHZiHy6HiuEE7xXDMwvkadP26Yb8nGFueVyyjP4xX5jpLgmtBUmXwURwc6mNf",
  "key28": "2W9rU6SU7w4ntAjboJCnoQW9HyRrQQzr11JQNG8nMG7Q3VoZnSej5DjHYXgqhgKmKZBso1wdU11RqmJQ6tR3juD",
  "key29": "mRXeFKYFq2b25m3ZRGmaRXjYLbnFE3y2cRVjJjjv5KeZCPXUPA6Q1cTc1nwNbk4yjouqbZZBfRPyitP4g1vtoij",
  "key30": "3aeMPsLNJGc4N8pP8zHVQbGYBkSuLVfidLvpPUWPmkVW5wB6DWHWLHZBC1WgMKnPj5GaEmAYy2ZAbWJxYyFCH1o",
  "key31": "57pRNojCW16c5MFTxFuLgXPwt8H2QQz5gdn7QMet4vZ3itShXde5YxoxRLH7mjb8zb8KE7fREUFyvo7mXSMMuVBy",
  "key32": "5mQPh6EHM3k9HY8Pdf1uUAYiWUgKBcUcYLZZCrfExxHkZVnJyzgbGBVFxfZcN6rmEc4HMgGggkCUvLbK6Xyqx9Wr",
  "key33": "7h4UnssavTWahwFAQZXauNmtawZHUq6xVE5ypZXWRi6RH1wL1sYdE93MgQ2b3AxL5bS5Tyvusjs3U4bMzP7BAS2",
  "key34": "4PeeVwPo5wx94gWueLpXfqNTfVMhcTsCmTNvo2JuFZCeEFbN7vMtjzSNw1G2TSXFHdEvKbmostDBvBK9THasMf3",
  "key35": "4xQbq7dcRKD6gPYEsvz2TL3nRxZGxBgrE5hhdRm6KMnwhaovQHLQMp1xgRMT3gc98dyjY1yxJTzrH2VqSDvL91Xi",
  "key36": "2YZZPP76utwoVqfrJyPBTNg1vy4qhiRVH1HA2BaTdXznaeFTYXpERj5K87a3HenD6GLwMPEj7RRcDAFJH4Yp4XS2",
  "key37": "3yPgzRJvHjSuL8aoDZQbSqvoE7brDrrmU6jzhheKvYy7f9HSZZgjtzz3Jf2yg6eTz9Pr9zczNXQCtEcy526hGz3k",
  "key38": "4PQkHuCR6RJ2rxYaXbXSpNeDt6zKJpyELpu8An2fsNvGaEKv77au1XMiFNyrRu1voTupEY9x1obhVUcBPdZmNeBH",
  "key39": "TokJm7m6PgkrLUuwYt5NptdiL6ZH6cxuCbKy4siBazv94PwFL5edUwevHt1QjJ1bRyf3DczW6ewpdSpavJrr8fe",
  "key40": "2XSiLkJev8DxkugacsAVvHhC7tZbqSse5Popij13m54cLnLBUj7Zn4pETRg97AqA5vNpCWym2AzKmNDMVEh2pb1N",
  "key41": "4cKhSJmRNs7QqgDhYp6ym61iVkRdom1Fnc7s8xeGNrDPLp8yyLACpiTbADpTfDRnweScUx4NUaq4BQsiUAbdHQhW",
  "key42": "45k2WJSkNojjJqo1B2dg6MKdBKiLWxRDVxmsZ5rqGjJTYa1ZLf5Dq99Qb172cKpcYfiqWamMqY4DV6n7Ex5jRkCg",
  "key43": "2tkmi2RHgEKQ36F9Me9x3hKXYKRkq6SWPATNxbDDBfURzjBJXLDuCxDns1AS28b4ZbBWKSJjEdZpfT76kmkS5nKq",
  "key44": "2WmxqhzZ4kwrEKkvd9WUXod5BYvHh75EKYLqwjBxiF3tPRjh44ZUZeX5XAQ6AfDR57rtRGo7P5Gw59g1zyPUAr1G",
  "key45": "4DUmdogcuym7N4EhgX8ehbehx2LmpBcZnPgzUm6aA86eFwaE6xm8QGKwB9aWJcvjZP8FmFYnapdFDdBwhDcynFpt"
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
