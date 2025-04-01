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
    "AYhn2gEbBmzDCJkD3tKmcqVidub9Ftdmqxxwm2tNeyEz5XYe1shpRsJ4MAAzF6fmNtKguQdkLETJxj94XQuXdaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RBe5FwX3Z2VjZUCkk9KtFVMXLv6Fd4PzkFs2ea86fVnuQJnA98j2PwkqFjiziLQMMLQCirA2jXYwCeJTR78BXCz",
  "key1": "3YGYiQqMwgWzhGuHcedTsis28ar5gLN6i9hooZa9PxvLmBrauXN4RXxvg1Z3tXZ3bHUiKGcYYF8ukU4KmqL1g6dP",
  "key2": "3eUa7TDFazewmgXKiUWpdgR8VURtK4RwR6WooLiiFZLY2KbB82cohHZPGhQgnv7T68gQ9EyxQ6YyvvjQABDb2T1U",
  "key3": "41KCEBKiumpDJbeTtrgnxGFpBKZt4fQnkLGJSGY7E6WjDQLY4H6FiAZuz57N7QSXvAQUBdbKTmfjyFuBUeSvp5Kx",
  "key4": "4rZMhHEAFP2mu5ycCyrSo3QK2WRZMHeq5sx4e5iMA6KgQMNkWnB5nq6qqAeQdFVtAc8UeY8JMMeP1qSLEeJmmEXa",
  "key5": "51Fcu4VW6Z1kzzarvEtj1At84Xw4w2nrjB3j6YVPQNtXUXU21qz5TY8LPtW7nF9CppLLJnf3CQD3hDgjsRo1R8Qu",
  "key6": "5TfTckJuAMRDew7STpJfmYJrfL9sEEnsR1Nh3wurWREafdabZYRfCBQCse2kyTfAgSYb4p8ahJ28HPyh9rJgN4FL",
  "key7": "34L2BvzynNVCeEUPunvAYVLjbJP79u8UHTWJk3QVSkSshL5L1osgW6Qs8ZKemv1T9zL6Kp1LfKGqoCQUvZoAWzWe",
  "key8": "4SjzNt1Jeq4tnF2vUYFrTBEZ2PfVHP657LPgSXuaWgeX5DxseuaMPYV2gPs65KYe2Tpti643eKf1YU7GZPLogiyj",
  "key9": "2bRvrAz5e4nLYD9SWQh7pnuyZVS53pG3tpJ8RvEGJMQBKdZFMTFL1KwoVW3pfx2kPebbbzz6YWaqU5kDJU2eTwmn",
  "key10": "4dLmDLWdEKT7jr9cJqPhr8mEjtcaymUTajyaPDbCD4CSyc7ybzdLw4dy15vys3H3x4zrQcFXrnxcME9F6BQHnMtV",
  "key11": "63VGrFCFGiKgYRiK4AD9uSi1fYb56CW7E4q2HHSoLADdutYbLAJ4EhT2MoMP4crchLqJDH4LEoMXku28rEh8CNKg",
  "key12": "2pAHYY66ELyMsYEuV1Po9yLZPscMHdLc3GP8wN21HvFaFPrJmaqdSng6DiHBx3VBT5vrJpkGvQBGXPUURZeu1rdj",
  "key13": "RPpXuFJHPCGUgui82bRWKfnrNiMZdu1cTT3amnsamCNWDxozA75am8ebwNK3cg3ExNsk9tdCsyv8xmfWRHXtXpZ",
  "key14": "5KqVqvH1H5iyYx1GuHdPV9D3Zpk42o3agAbrFSJmpTVuni4TaU99NgbR6FvS1QF38Y1ykskCbkyJYu2QXtL8YHDF",
  "key15": "5exECCcC3fTZayJzsTUKVd5Z4Mq9P9cAHxx3qES8tyGhzJvz2zmgTPu56BgCknQWBfqZ6dsMECXnFf59tcZCMMUy",
  "key16": "3LDZ1dqUS6tESu3Thywo7Ng9Vb9TZ7qutqVnmcgwM61oRRdbyKbXAZpkuAY59u6gpM8wusA8qQgvo6PyA1ASX7pj",
  "key17": "3GZPUJX28MQ4wC2zbSa4SHPnFs9tMaoRCUNu4dK9yiPiBosVNsbFoByEuDmG64oDttktKkudhj5CCU65sWcDLeAg",
  "key18": "isvTC3KJLHUViFiDjWchmTnLcq63R33hdDW7T4fkFQ8kBrdDsaBqjV9xrnSd839iLLFDpyUoQcwCsHTK8chqKo6",
  "key19": "2bstGe539Dgc6utFwhSoDduXsjA6avpkaJS7eLrbZ1cUEczwmrrawn8A8rvQKLtpxNdAyHSDHP9qFMg2VV7esoMf",
  "key20": "3n2nzxhufdo1TXw5FGvoR9kQjB32cu1UCKL5BHJqnqpL8dVWxV8GjNYTWLBKkBJH5U9ScDiWedZXfcEWFKTnPhkg",
  "key21": "A7WjsW6oxrPk4YtScE1KC5MjtrzfXNk2oPuCNkT32xhHbEcnebpguXMKGXGBFuW5SRk3ZkpX3dydv8rdFsSKpD6",
  "key22": "WDcGX9S8qPAVvQGJECEPxwzAUaSm4WNffhd59kDGsc4AwQ9TDi96eojWN35ZpdQgSpGc8PT8STZWjVoC4iRNxnm",
  "key23": "4hVufAk77pZ1U9zF9xJ3HN8XULmPJsUrG4dN2R5stLWhSFkdqxLvuE7ghu6DiURTAZAcTgb1ZxLBgR8qK8PE7guo",
  "key24": "4wKpZZBF3RmGXe2tgXXGtrrrto7T1PirBDvYoWaEvdeZMULN55LDU6o5jDGBQkhbmTo1mjjJWb2aDzJJSnfKQzoH",
  "key25": "3pXneSvALZq9sRv5b9yBDqzFSTf7aPVW5eX527dRXSYpVGbqLk3QmjgWKYJeqJLVfYnFMcBvvZGzrkQJoitrieWE",
  "key26": "79yRttir6yS2oUvvDAj4k7HWt4AA6G9kKBEzmMoAxGgDxkgk1v1YWPmy1ni6EJ7sZJbMgLqUZU35cLfPieSNEna",
  "key27": "26t5AsJxdC3oYFLdgJNSZpSZT9XTmFLiZrmu4DPrawuUUWKHFK2J3PN5b6KpnTvXe7dUxrV873MJ6fWCc58zCgrK",
  "key28": "2mYngbfzPNY9k7qXQ3M5ni6A6uhPuvMq3pbUmk5SKb9y8XPA69WGkKTbP9cQEU3V1xDtNMWRRg6q1bDzA6Ub2HCp",
  "key29": "3s9zMQ2WzFzpUU7m2h6kdGhSYm4wKuhZMKGsWRZPHnB6mKCf4NDLp4h61SUN9DLxZS3tLHxtFb7A8mCC1SMyQQj8",
  "key30": "5Mw5aM6P2yiNPcVcU3stgb9Qws1oN2BXoRyv5Qw7oBC4WC5YFGbiuqQnxM6u8inyqMVHr2qho5dkPdyCvjneYdEc",
  "key31": "59RCCJcVXYmgBcBK3ai1hVdBv8qXccPhGe82RcSJwW5P8gy7jSXPmYvn5g53e1GXWty3d9UJbAJJojpj7wgh4o3u",
  "key32": "3egK1aQfyv9BiX4MZJhf2uDuMar6iQxbQd12KvS81cSncLWcfoyP8S9hB1RxduZCQTMPY3c7MTBeQAuusBKRpFMf",
  "key33": "5uT4wut5DSZdmPvdXw7X7ib4fiDYdmJmiv8iDZJyF6Bh7ysRAECtbv7hCEGo51gFEGWrxAGYMmxy8CxXL2uAhpZE",
  "key34": "392cDifhzNrfMfNAjLyLLvzmnpFyWTj61EXDUMPLou9MpovJmZHhyTvXtwNdjJ5f6GJBLhVz2safjEVFhUu9BxSn",
  "key35": "LommGxLLzcdn12duUGoTF4HzDHWXZRwXrFTPqsgyezu5yjrF4uY1xFBsDce6yhafeX9yQTWTTgmof4JTpGNnog3",
  "key36": "5obxv7FJMwKFBZHjEPWjPPUrxXdatoe3Aq7qnuDE56HWd2soAEffcjwd2HSU54pv2izNHGGH74AABqNBAiiTG2P6",
  "key37": "4UT9G32KjK75KSNHfayD8jzt7px9TnqVYwe4AfXraqK4MJbh8CKFfVCYy1YTxX5zfZWayK9zArzFsZzzcbPUYDMr",
  "key38": "dhF9SL8ggRzZagDWGVWuqcU1d4grLTJzFsdcbbib3xnSP5K9ZrRsCbVN87NToMQ5G57ieFAjVWMme61mEYE7Emw",
  "key39": "3EucP25PJYZA18dbFgNP3xRez5esoxw7YekrdJo4gFhC8ZTELWtVuodF7QDWCBJDvbbeWqf5ypxzNoBuKxoRR1nH",
  "key40": "4MMqoSakzLoeGaX9XsVqJBnXBgAu76hwRzq43q441EtqYfXzUdfzQHt1r3U4hou4U7XABxWnGgrgsULHje43vN6N",
  "key41": "3VWoTrGj8iyLj363fpVcXtFkJwiBLfkCwEkydNcB28BGJ2aUaaACq5sxXEBjuHaTEqu5GqTJbqrdaStmpnarYcrv",
  "key42": "5b5sJKLHcLS6T39yfS36AJwi3KgkkHCnLqFvgJm5AzgnJ4nWvU2Zf3ErFTzK7tkrKHi7pmZzGbVZyrb2Btv6cEJp",
  "key43": "YdmhaJ4jxGmmehjoxyP4Z88bDTJFghGRVJ6Kxyqw3q3kWmw2q9XjBK3vpKL2jwWi6U7ExbLqEMk3Zy4AsVJRFup"
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
