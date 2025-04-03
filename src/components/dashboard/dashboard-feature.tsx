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
    "NCXf2LTPUyTWNQ4CxWLqcjvzJz9rjwEwTcd1nUJZzJqmHy39P2n6oWwojr37mthv4XRffmJyh4hVfT6Cre4geMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w9SnqncuvEZYVCfbX5LocFNciSFXBh3bQWjYZM9NV6a7N3pwPGRXVHzGdkDoR7ztEkkSAbMC3F86DeGuvhejxGX",
  "key1": "47fzvSPUaGWd8zAbDvKUPMyAf4RYbjBvgkX742f2GaXK58N774Hk3Qqns2VMeE3yQmiJBvz2eU5KNFS5JWr2YoeK",
  "key2": "2x8wpmP6UvFwTLCtm4MQ8LzxuNZ9QSspJdhjiVfzjHg362nZu2qEuFzx8StHP6Pyf8sZd8Y6Yos8KdLBrUUNxM5y",
  "key3": "5SfnfjEk53rMqvG8g93GGg7h6Hou9pQrQKa4wdnBLzu5g5HN2FtFHu8ghBVsySTLq95SveHoZfnH7UiYBDe7PLUc",
  "key4": "3QJrq1yYYDqu2XrHPicDiVdGfCyiuGf2p5XcWQjyLiYoAWWwbQAydygTh7ntA1a7tjs9NL8733HxK5DhLBt5ouMn",
  "key5": "2jSdQEtf2YJSkvviPH4bmUUToHs4pzpfYWTDkPbUn6HF4B6EsSLQSYkegcLuRGrDZpudrKn9Ho28yLwb2QUVDDTi",
  "key6": "4JWmtu38wvfoLbHUCVUhQkWS9kAp5xG4uBvSede8BmA3LACriW7kq8eFwwqB86t6DvHR4N3undftPuSFcdvhWTRy",
  "key7": "4pBzguepeBErEw6KjHWr3DicvLiaXQEx64yC2iYKWAyCyzynLsY1mwX2wSKmrPpWVC3R46VMShSrRJGoemvEqDiC",
  "key8": "44cMVaqXFUKJzVfQ535H9pVc3ScRwEA33mP2MkUbstNuHV9Nj6jURjpP35Rt8NUqjtAEpmdNRyhDHm5qN3KYNPYw",
  "key9": "3Giq9mg3EhJZuCZa7vH6jacqp4j5VCDgwgwT5ktudY2k4HtUyAk95CfoFCdBdCszaPL4Xh6UMdMLWecrJZvbRT48",
  "key10": "2vEy5SvPXZnasLmv1oymNURLoQmePHJudDErApJj2Jon6WotL3sF4D5snS5vhREa8urUSbCQfkbFCrxy7WozhSHh",
  "key11": "3oEX2aibrtCTDggYGAFyCPBYXKhkjE8C8PKeHQEkzKTzSBLoCCkRx81WSL7dFLBrhqVf7UUnZVQ9spbeS1WrpVu",
  "key12": "5ZhofYS5VQyYUxpVoPn7bvSJ7BT1UVEFfnJZmqLjyfdGfupJVistxwXsdrGfofwPXNCMMVYibhS2jM68tN9BDmnq",
  "key13": "54rBexu8hiXHgdopUnfjgUVPxzs7cSvnAJArQuSM83t8dCWw1zMG8o2QqwUcYr5NdS71qwsRkwxR7b4yhDFgC2ZZ",
  "key14": "2ivbv1bQSfdfePoyNTajL4ACaNBrWwHubtkMUVH1JWTn5w6cBwYu8MgF2qx4j4fSsPpvdVJUrViZ8v2iAC8f1Wjp",
  "key15": "4TnqcnFZNPiVQuwfPjkcS7GWWBGQE9EomfKK62r7NBXxW8XXDxhQr3UeUMzsKBB7ToaLqESZ2CcPPWjkQcFymHWr",
  "key16": "5AZoatmsHwHBZC2csvPNZk28uoZi9S6gaxJNYWCvvNuQR78JSpmBPTJt8SiBgbk2ptSFiDyB8t6iUDzRqWCbgkWx",
  "key17": "3qtQRvyg8kKK4MecHcHdfPsuUMr2i9gRpYe88GT3JjaWctWaMosk2XeFZrTUXo1MXZpxeSsysAXWgqrPcS6ZBWzn",
  "key18": "4ugHfASrUCKaX3Q6GdLFffdZJGK9bpdbqxZ8BcC9wHrr7ksWxqFVJeQteaGRxuP6JgLLonjJev7Ns7Lp8bUkoBoT",
  "key19": "2TuN1QStdkhjwHX3ybx5GEGVwqbesgFw4GRpLDptKWKetNEi5Ufzs3wRGZBE2GrWazyJcLUDDf36AjVVdC2Fx7Hy",
  "key20": "U6ASpoVSoZg5WXZADW7wvPuy6S6b3pXSiVCcUpCXBT8QetZNV2XC6Q4Twh6aK4qtBZSwQQ3mxjeAfeubhUXm7nS",
  "key21": "2Q1pyFTUXNeJukSkLWp3XN9HSTRsojPSVxA2k3fzPmR4FHbEKoY5PY3Lm538EN9vAVZgVatbUSSwnKNnUPv33oA2",
  "key22": "4KEp8UojWakjvSuHd52yksiF4f6kxnE4A6w6iUVFudQek73KjUAsnzX1Bk5Yie6vG4zwd3CM8RrQHvVKp7oE6Xgp",
  "key23": "2XV9zTBJRvotmrNP1mmHkQ2Efa3ZxVS8dHCzyeiHwU5CaEwhjYNUQs8ofiyy1BKur2zFMGy9TMePXc7zdzJtsKcG",
  "key24": "32h4qVV74rM9bNb7mLxuefrrqSkgJ4j3oc1zFjvNorBunuZpPd85mfCdewoDJoYU5pBxMH3nsL6zqwKEqhfHmhAp",
  "key25": "4R9f3YkGWi6tYxkzmopD5ChYntQAQCuift49LQ9auD7N3doqwdbDtcU8tM6kkgUdZKpbcMcnGdb3LTuNBUjDb9Qu",
  "key26": "4MGtN1kjy41NHDyraaaM8a1QpsSxPVgR9fCABGSB4cmCXXQyyEiQ3ZXi3KNTuVXwo4cQ2Lvf5PhepXx8Dro9bUgv",
  "key27": "eVPdGs5Wst9ThJRB5kfPZCyhXPyiiJMDNWaWKqkbeJzyNnLHXLodBYTdFgn1yxgim4Bea8PruFNZsDujwTgt7CS",
  "key28": "27tEEgFQ9kbwhp5mHQhyJAADZmGf5uf4SspN8LozPQmUCmRKXzSazXzYRackvdErrto6mNoGHDJdnDKE23PrJCt2",
  "key29": "fXaYM9CiPZsh5xu42qQkSLTKSouksL8L2vKY9LjZBH5Nqnu64f8FddJFbNyyPdYcV4T6AA1jrBbQ4GfnHdkDLLe",
  "key30": "4akAeXJQff5VS6ZZQLjvMx63gGJXUWqqvUe4nzRjD2A1128JS6dGmQTfiD95eQLErmisbNALb4MDcK85GMjzhLvb"
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
