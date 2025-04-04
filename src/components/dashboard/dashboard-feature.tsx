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
    "65Nqxn58hGE2ZjitN4ftoAiXWD2fE7YUg3x1BTMJ1MJpGSYXfvBwNYj2pwpenQso1MeJinTCDh5yPYxnw3Eio15M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkMi4t8mMsdvHL789ryGjPWdb5UQFmUbJ9FGJGv38uxPntDgMSVAv6ENU7sJr6FcCawjCxqrYMKcFg4u3sDaeLT",
  "key1": "2xE7YRPCotnxkmiZ66MSDZYKP8ZC5NxB3txXUrbVfW8Vb22pEJqyJvvTjEs9ks59exK6BWtbm4gUjVg5BozHEjpw",
  "key2": "5qfAn3V3udoW9jEo8Lu933Rg7MkXTv9r5jHUv2xk6ykqhLirfqgrs1x6zgbkffHsVDwAj5tytEuxyvNrb5K64N8p",
  "key3": "4RmXMzAi6uSPHUX2HTWKBGo2eZdDBQU72YBDN36RJSGhT425G1UdNWQt4wo7QoYp48kLgfesJttKuHeRHAA2a7e4",
  "key4": "SgnPiWh5iVerWrq6N7TwssSbZ4s1J3Uf8qAB5YRuV5Zc5ZJqzxxxB9kfvwCso2Z8fxdK9EHad9LBnJw4qJCmZSW",
  "key5": "5yrDtWo1SmZ2C3mGWaamrDDaJd2RzT3df9UStAVheayCfK6jB817SzKWtyjYUSHt6qgdZAN7YTNdiUDXRnXeGvxH",
  "key6": "5N12sXjoGRN37hvsuVSNkPWiep3aAWs7Tebm7Vebuq4GgcBmUw2tFRRoxREo54mgdUbKDk89x4YhGKiEjrEGMmmv",
  "key7": "5tvVu4s3mYEEbSAXry9qMK5bi8dCh7AjGX6eQEEWXrenH7oZZsF1832Nu3YiFjtzJVojyx1Co6mvVoFzirzRUQtr",
  "key8": "3hUD9VZn2AGg7G2FZ9MjvN67U1W9aPR2qynfBMBXgbADbFxBwQvri3YgYW5VqGYj1mx1ZmUDCWcDkjt6TPgeP3Tx",
  "key9": "reCMbJsNGMoRhBrZ4cCgwc1q97TE68U61GMGwftWzsVzcBSXkajfaMuS7Cp4c195MZj4nXD6Ah5zuSHLwQs5SNG",
  "key10": "jy8UG6Essvaa4hQYgjMjLA4CPnKaPthkmpzmB8bCudXhmr5FQJPQYqDHJFQ7Psz8UaNGCGkeW3mJBgGFBsvW3UJ",
  "key11": "3YzE4gVKRWUN1jBeKZMjREMz8f1GMG1ZrXTGnm6rEB9Z6w6pV1V31eFQPtwasfPsvvvSLf4hthbCYCk9UQEDAJcE",
  "key12": "5xnu9hfF7SrQTjoneK1MVSYDAm96PrVbXqEfo2XGGzEcs62TNmy4oWyxEbsAm7vCmtsdDRqsetFC8wXnugGVtR1u",
  "key13": "3aj6AEcXvF7S3vJycGVt5ZBXkC4f6SYJbopfR69f7qCQXymDBfBDEaZHN4SWPVTFdavpHb524LqnTzgSMArrmZiV",
  "key14": "3wfTAmfyMarphnR9EsxR55P63jhoBvVRQJvsTGkC3hgoBLvrR1ZeR5fSKG4LUP8Byqq4qrbn8XYw3AKq3shHV91S",
  "key15": "5zYryGCBjjnruP9PrLq1ZXaRjzjDDDGKKpa7BwcZCbnUaug1CErt8aZEqCzgQngE1cMuYhSVDxzEaSdya4mieNS5",
  "key16": "SHfwqqoNztfHErm1q55jN5YQc32pXUTGejcV2DLQZxXDtDYvR1vLsEwWrYma5t7vRsf87n1kbkmbT12HujEFzy5",
  "key17": "2jik4Xud7WLEGhzHnbsRk3HBqhoRoezUWukPZCCtGAGyptKWzPLACqP7TodurEszw2EMDDDLwBWRC9Qd58DndwC9",
  "key18": "2oit9Hw65B2NYd8u16Ef1xy4r9d5Qd1ZzQmVbhXTV5q7UxdJyyPjxtgehM3txbjiWxELZWnVdypXJP8y2XHfF2ge",
  "key19": "2TGJgiTKeQcLTq8DkPnM1s9P7unMjTrcaA5u6A7RkNAD6ZEbLDNMhYjoZB7bdaxyizsvHjNXmmLN3N5K3Vrkay26",
  "key20": "53aHU1N6fpEXMZZWn36QR8uFv714hWTNtHgLaZb4UJd9c2A7EJrymxqL89jGnwx4pG6p2gDNNyDx8R5bfCNaf9sd",
  "key21": "3NdnTTa43BtKAxWyDFURbPXT2wd6ykdSxQH7oEqTA78YQoPFQAcVpZXY6tyjCLL3pmcV2vbEwFGg3QxCxaBib1M7",
  "key22": "5zfhVmDQSvq51BfWS8LeXBPq86mzd9dNFS27aHYJrqM8na6djoPniAiRUeHLgCBViPJxHhiK1jsHJecFz1mmFD5H",
  "key23": "3wBJPXHrdXNBmSnxm16nfAkBaDq6WwmPXMvjrRSpnJjXtb4dJegCQrCpswyVjbirjQ6djpm7zKeV6yZf5dGmVwae",
  "key24": "5MCCmAhfK1mxpotqLRzumqgQCA3pAsM8Wu8eNStuPs6VK8ot979XoRe5GD9gP8ZYxZynnCy9VyHr2n85FzDSZXn6",
  "key25": "3W2Q5Ve88JhMtmK6NVYq1hqd8FA2AratVYKerhfqB1LUDMxpCgJSKUobKo76wnhLxjc55FeRKeK3g6tuAdRZEQjs",
  "key26": "5D9UyzG4xLXy2uE3orR4rc49XTLuy7qrXMDZfpo3nmyWtbaVqn2WXRcUFWv6bXTH6ephPr4mRYUarByVNfQAjNsS",
  "key27": "3ANifpMH4ZJkuDHsgkqFWALATsmQ5nUXRK2tGUsUUPrY6nZp49d413XzLf4xcQx9SXGE5u8ERNXufmrKfHfSxDAY",
  "key28": "3t4D2k77KFbYtAbM7ajRbNskaAVXWq1jkoZ82kxSZGdC8ZuwpKuVKsQpHnC39uz7TNRD1fgPGwoZLg4AJchSCnac",
  "key29": "6LkuUhEq5q5aED8bSiCeHYakLo1P9bezjndCSnPL1BfdR8whdhmPjf8EZ8Mg3unYFMt6vuaSvjwEzNH8d5axW8q",
  "key30": "3Z9fcfxdBKaSPt3swnSaDc5Uyui33MEaNerk6qgPhEtusAFqCu3p471QddeZWvGuxBhfX21LacajkCJFZDGwxFHS",
  "key31": "3DEGYqvVL5dNYmwg647XAM7ocvqB56cMypxn1RUNWT1R5Vmf8cECD684dXjVqG2fhgX8Fz7Nd2iq4Ru6i6fu6RDs",
  "key32": "2XWr6SLc3zFcnfRUbvHi2cYUhy3ZqE6ji8K6YPsoCU9By3kXuunuVswcUmNFzBNxRE3XPE4pEDWa7H4rtzr42oiE",
  "key33": "39dgYBLtskqMU3HBgoKoJcewAcBh5QBVkZZ7u8bUUsZQCETwAigNvrp7RWQhXDH3F4YTV4FErHgfF8toLrsaq5xV",
  "key34": "59bviiMvy6Xz6LrqcJKFr7pvFu4JVCnf2w2gxRERYPXKw4q2jzNtiYmSNCVgMWkkZdVXUz2xjth4EPWeqP26pP3D",
  "key35": "2zrs4je1M7cE2rXJX7ujBhAwnC4wJa9e9LPa25GLgUSsxLYfNN8jquNGpse2jFTZaYNDd8Y1LfviVkYuJMgpZxin",
  "key36": "Uwme4cZKXEqWAA6VYNE3e8E8LDXzudWDF84oRRyrs6tBhcJ3zoJT5jJpn51fjgXYaVn6RW6iG4eEtdaZLXrg5EP",
  "key37": "52yDU1ZmrgNxV94ayrnd1BZVgRgMwD1UsYZnTBtqnboVrR5NtCr9YnothGnrC8bs1dvTym7qf8VLyxHdnXdPW1iC",
  "key38": "5rFdXeDG8GYNQaT4XeyQrX5yAmv7FpYUEXqBJeEjFBMrfN1km8pXDqXqS8KTDbpkNRniQ38p2neiyYZpYfpptWdz",
  "key39": "5QForZQdUC5htLAnKbvhBiqzfgpKg7kYgSB2aZBKtXXe44yYdkzEKQDKaR5pAAf2ykkHQHypfbkkQpWgVBwB6Gdw",
  "key40": "3mRNjfVfaQELjyCXZ8VQ8LU8mugWECwP8BLBKS6HD5s3jyy216QheqdiFmdyeGhuezt873hBBFdmV6e6emdcnnc",
  "key41": "5bJdXSVQRJ7Q9fB8sHN8D8SZjdoPYMGWZt3DRQiXAvLzY5oqxfavQsZjaab4evK81gddUQeF94JxeRK88p8S7Jba",
  "key42": "kZj4dGVCigAMvcXsFKKTmRxpE3PtiJyVrGzkhkouD4NgcN6T8fmCUKemAauYzXWqmYsDdoaz77mxCxKjBc9vzEr",
  "key43": "3EzELgG1f33A4NYCU3MmGqayzm1qnwZVB6DWoLFawV3rNxKXMBtrsZWSJ5AcTE8oN9DJqEA3VpHEwN24yMcdvgrd"
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
