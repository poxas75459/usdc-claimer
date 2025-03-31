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
    "3NzrbqCGWRNzxiVyA7kYc6KrwogJvxbbAk1wUxrJiNCayctqUU9LNDBg5Bn3QnA8PvmhZxE5YJXfMiedCVFeEtyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DxsTgUdcR6SZvkPXEWj1DEKxGC2Dp6h5jzhBrq9mDdnafBg4UkR7FiazeaXt9aKuBWn6jNXmLvTqV3b7gCV5iAN",
  "key1": "2nBf6GupuoWRwYcdrv3UC2F4vkWTU2HWeuUMAryEbZavNK6xqfcRzkzCc8uDVmooMgyLns5syFKV4HbG3AzPPYmr",
  "key2": "4XdKVxA1uF3y3r4SNayzSbsnGv7f6EQcKvP3xfzVnoaZ9exFxtgctoP9YWvwuaowTBsbCikpufbQy6BuChwTfR5d",
  "key3": "PmzFCPZpVXJNEMeQuJAAcS5AX2LqY1h7j9cwMUvgwgknzZLpxA8WfxGXfVa8AFgFTfZ4XBaxDxvpxnNi9dStSqE",
  "key4": "2jfLmLNnBwX5Fe7QUxbb9DrDGS21dnmVGAo44ajD9EqAzeNTu8iiHkg1VtxJRWFreWpRJmjjTFxFEuwQcWisRJgn",
  "key5": "2BLW3k3iULsbS7vVmP42GoK7qY7iD4rFAEzW1NdbFjfrXvPt64GnREvP4D58pg42f7gbQpG4CVmEcUKBjrUn3UTT",
  "key6": "3tWaNCkH6j9RJXrwYZCuBi39GrrmUPy3oqYfJhGGmpNioYi7EMAVFbiG1xKonRX5GN969BY2Py6h6hkgCts3bzNM",
  "key7": "KSQbkS12CJ8k4P1UseJ3s1p1aVAYRQGvqeBUtamkRrMjxdbiGG2UGpx6519YhbyQB9VNN1RfE8hCzsUpJCD4sq1",
  "key8": "3xMKbTbnC6jxemSFQjFgANsNuWRgXbWqdkyfoxMP4SC32fN4f6okb7hceAohCYqCWR25XbckMvUxm5yL3NCq36Q2",
  "key9": "Ugke6CKMGs3Veo6fsNgPFxV5aNWHodJmdzy84pb6SuPUsrDaWpqPr7dxtWFeXdjNEpRC1EcYVYypF6JV3rFBj4P",
  "key10": "5bTZup2KpF3dRVcKjcTa1ZdiLfucQw1vUsPd3W8ByH3LCFvwe7YksSf3Tr2n9N9ggmiB4SiqYf5JXYUE2MZdLbWw",
  "key11": "5myazkHrp9gktVMPAgerTfpHTqxa5WQn7MP9dU6HFNE6dgh1fwmXqCfuLTaitNWtfZg79staHdZeQGTNMAYC4AYe",
  "key12": "593HThcBGLB7baVDhvAR4dZUnLzvtVuTumoyrmx9Q7PvoiNPcWanE8z4zWXGJxj7DK6F4whWnoXd6ogztevjFh7M",
  "key13": "nSu8ENwscoTcbH3AmGEtQAr1YvjKoGiGu1gGJrGkrWw46ZfxVPusFRZZXVSCMdu4VKPiZUov2DR4GjYEQGKff1r",
  "key14": "4yDDmMxjzGnK64qWAoZnjW3Lf6vU392fh7L2cD5XstWuWB5jarSQoTmxwe9WnCVDm9ZexvBGyaL58ZtgUg6YdMJn",
  "key15": "5cgnNoqY2eeoCZmjRUSrnnqBvqgHGjvHzoecmXmHqKpUHUmx1ZQ3eJMqJ7CSuDfJW916QdHWkZnxM5DDWZaFLrJe",
  "key16": "5PdKd1NNip6xy2ZkvM4BjyBUrzox1rZ1JxcoWKaR6LpBnWVNAsZMzTKydXvsUgQogufwRPawQzgM7tMQk9MxSdNL",
  "key17": "4cC4QMW9fdtyCM4By694R37tfnL4yAP5SZMgRBK3YxKJiHxnDYVSYy12wuT72rCfkPKqev7Y7shAQv3ueQ4DsbMu",
  "key18": "45aWu5owgnc66brKqagshTyDpTksLouXiPdGUp6NrRU2GegkhbukXvwRcBLJ4LvwNqRATeCn37esJrHENB9FPi8w",
  "key19": "3bB4cENa7oB4mr7BR6QmhX6b9qQdoy3bkjdjdntBtVUxec7HggtdsHKUab2LMo4u2HYD13tZEYzqsyXGXyKUg8dQ",
  "key20": "4MaK3icQJKxBPeyGCCwBTrhfRLaqJAy2CtX5KN9Sb8mhYLoputArRBMhtrKUqkmSDHSwgnuWxJ9b2g7nPSiKwhDR",
  "key21": "3RDZNdXUFumhVvk6nWpbGab7bWvjssTZ3DX81k5njayGBqBqWDE8p7V61YtiaYUsCfcgELJxeftw6LN4KnyWWGxj",
  "key22": "kD8jLBZxRDfvaVUMkEk7M1MChJTbv5fJnU48Mh3tuy7XWyTwA6t1dSNGBwkrkFB7VWZtRCS559eAtu3224aGCpo",
  "key23": "5Z6CPvhwnZWVYrqdRS7TvszNgbFA2x5Wh4iCzesoVoVoukK69PmgC4gvLJ5NLoYRe5zDJAC519QUoAv6K946YBDF",
  "key24": "62oHzo6mumJN2o7zfNiyNmswbRdrpVyLWai69Dge7Q23KKjkgQ3xo6p56rbD22bLUMEYtsbYGfMBFsrevfFJzY1n",
  "key25": "XysUNTHLu8487N2Q5q1szqANhE1WVVK66VHWHBjMkd8ZHKhbYSKnsQcfbKt6CptWexgbeVteXeS7TgwBAYSatSR",
  "key26": "5Hg8jGTTfxj2hHbagw7hSKBmVXmxpbVsj3gYXkbiLjjJMudJvxQeRvSP553fhfV5cdE1HzQnyG9anp7mV1FtP3xn",
  "key27": "4xfkKDrL8VFNd7rVEavULybjpUMXagy3MEunEzr8aZs5BgZQyKCkMXW2XuSCobuQojNwtFsPCvDjFNCCJCfxgMVw",
  "key28": "FGkbn2kP3EV7wSTK1KeicqxPeKD39oRDoVz6HVwwTQgpzf2ehM1vQm5yh1hoyAfMTdzXR5ZjnEr1q9rNGRZCu8B",
  "key29": "5NPj7GT7rFrkZD4t6NeLsGELs7Kz1EyChj3QTQNr2xE82vJMZwpFxtcynYy7k9dviYcUsAmpkATn9t14M8bqcBGW",
  "key30": "2kyTP9DSH9tcTTyT8DhmSfbaxyPuHoMrUoHdVYCntP2b77mGqDuaoMNS8zK5DfeWhbM5Z3oeBQido2tESNBtpNBR",
  "key31": "2dBua4Egztd4bSJnn1RQ1xkRPpvwBPKYqHDis8Jb6ZQgi7RJgtwJy6GLUj5XSqXwRa9LaXWFaAWxXS8rwfcVBhoa",
  "key32": "2RD9rzKBunya6vwsFp1hxbyo1Tj8ioQwy1FpwB4sNMk296Xnjp4rL28Ji9z3Q68hjFqrZrWspzty81zYix64dH3n"
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
