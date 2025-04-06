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
    "237TBsLhhjLL3RHvZYRDRiyrvck3DdqAp79G3M8T78D7pYtGwQ7yvzwgNYsBwWg9a93AvHyXt8kLEE8hFNrX2dUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pjAsFMKa3LgGme9iAZmkjkG4DY7puczV2g724G4M7EQJt95TJkiteVf8rQ52LbtanF8w74sHrcjdWmGTppHiEi",
  "key1": "3YvP5ZeS8F6VCyhDrTT1PS9TJBKako19UX4Vhz5nJVg46UUgPd2CVVJ2GDQfYQQheQvjwNdR1deoiu6mqTsZG2mc",
  "key2": "2HU2z3vtRZmwNCpgrCt4NhFF37gnRBE5b8AKwQLGbm8miy8862p1dTMyBAjcjFyAKuD5ZnTAnphB3Fi6Xj62RRuL",
  "key3": "4NovZDC4wH86V8ur5XT2kRwjMQmU6aKRPJ2EzYk8estExGHdcpv3EMUF9NmSiyM4T2MWAo2goJj8pBpLjS1ArerF",
  "key4": "2KcMUdPpPRFmhHbddEnfHaGbYJqQ4X8rowtUn86RsFX9QVvpXJ89QDKN9xnCMKMMzUgMKy6tGykKG7hmuAV3EeGA",
  "key5": "4vcdCJw94BhkHki4yKCXLVLW2KdZZgyBnAoR5E5HwE7EU4T4j8QjDVfgSigyoyiM9zNucZx6gtc5qqqQwYLBRpX",
  "key6": "42BN9FvPXdPRDwSYwsJG8fK12xju9uQyf3ZVn9ZC4PQ6cVdXys21wGp8C1NsfD6UiuG5Kc9MJnwRtCZrhPQ3eVLP",
  "key7": "5zyzBuKKJCWRnYVqGiuMANWH2pqGSiCd1LekAu4xqxmGGPLnBpVGfnHSaTAiBiNhHwY3KDmCjopppaVFh3H2dkr5",
  "key8": "5NAEgdRKYm1k7CTZQmvHWxWaZuLoQ8jAcRAvzqRdfwcVPokRp5i31pz4BfacJwLdZ2nfNuYAHa19fEL3nCDvRy8A",
  "key9": "5ggmCzTXTz7nDPptsf6k6Rjv4JU3iEWv3WUErFL9eBph87vp2XeLmjEBpdLKskE7Zj9VRuCbs7WBGnH8BJ8qMETL",
  "key10": "5zkaWrVGo3rbko6796yTRuoXh4fTMg1U5xgs4Lm3ukKBGYyjgSWvzpgRn1gTK4y7SSM4QVb3r6VFsdGSz3KD7K7S",
  "key11": "2KZ2epg8VQaBop9Dj8EqB1VUtwKkXZZteRxHXLvQ8RSywFSzBr2AokVkUX37n8xBDsN1JsPmM7ChSEHzxVG9KDUw",
  "key12": "44aktzmwwsXQpF4cqzSUjqxTWqnJZJrNudnfTsYc6yZgmeQj5zf7sH7v4ncHivEDvHqiiRFDsghNx2P5LaEAFqU6",
  "key13": "4vpxXFJM9zZscTQQK3526swg4btXXy4XbFFkeVw6wx2vFtrCAeTX2344Dp3UHSToGen7FWhtTvcWhW8YhWHhp1ev",
  "key14": "2Q6qyoBTkDoV6cSvkX7fdSYbcUzoH4JGC1zUXyR3EWzPEfWwtuBPRLWUE9hz5DnGBjfFuieFu69ojNPwKwgkfPxi",
  "key15": "29shCYxGmpjFaD5raq2uUqSNSQ34fYxJevZDSUzcTAZBF4xiKQJCYhwctEKeSKEFUBRDe54ygta9TQsEAik81WP3",
  "key16": "5khjVcsDW2L9VRcLmXi3tUUQ3VhSnweMwwYVTc58GhEagbJwFyLB8j3daWGhtPEgfMKvrFA5hqsSsfKpmPiXP4BL",
  "key17": "4L55q2cLFbKN3ATaNK1aicRGgSnHJdeioPy8VAvGjLNWQ4868WMFuzQ653v8UVjXq9SYcAMeH5kB4XUfgtrJ7NKV",
  "key18": "2cpGLUyEYLgVthyFvJWSwpiqiESdnst5VHzZ3GDNyMKZ2vFN2zVMtynYxGsoxHBZR7v68WL7SDv9csSvxGmczvNy",
  "key19": "4xCe63ihKkASSDfiKarwBjiyJNNoJQzxEUpAy9CERXRXE2CoGQREihJd6UBxMb4jpiKEL4DmN54QGcFwVueQvzNV",
  "key20": "46Zs3tzbqK7x6xCYXWtRR7Kams494EthSpEeuxNaKwfpuTBmXySZHDsB9SPJWr4JVtQ3PeEs6ULsteo52WfSM9PZ",
  "key21": "kbJEVX2ZmLnJ1t5yz1DMk7fuYtxdWqXPF1kkr1ZZQqTQ8eV6R3RhR3C1pWgq8r3g4jvCfgVLaigY4ThqmNDe4RB",
  "key22": "2ioszbR9mDytuXD6f5qjmX4irPHHwNgwmRdaTCiSfRDESBg4RX3muvzojFSLWWpJgdCkSUncgLyNJ9iZAihM5mg4",
  "key23": "29ATneS92BNF4uRVrrwW4eH5xNcmTUKeLMdUhbkoYkEZzRZYUdUk1XUzx5BZyJXVCeUcazo5tjEi5wqsdki2SBUY",
  "key24": "MQ6GWdEURyjNZBMCZtcecDqvqcKeNb8LggdYnaDkHqkAc6kbJheeNUv5cGvq8sQGiaXBgPPbrt3cqQQ5v9RfKX7",
  "key25": "4oTSo83WQfjDk6sSAWsFWu3ZHNQ7Jt7LZBkpoYUTw4x3qjVJ4PmrCzNuGZdYiF8LfuVsmwoAsVrgovShaTwPJpse",
  "key26": "5pRBWrjgzxY6D4MmnSudbDZuGVEKRY4aGp1Ungsp2W8RUFWNpSPzVZ9Hd1RkuWAbcJmr6g9YLvkZqqps85h5i7Hr",
  "key27": "4W3XzoHRURMv29bWRz3fNEKRCKSGHgBt8uKnWsqpStuhSCqJFsKVmQPfEaiZL3GBAqZzU325zKvRLXys2NJNSwqZ",
  "key28": "BdZiFDNPoxuRJ93N7muAFKpMJtTWcdZ379jBS9d7hvinWSHEqqTHPcx87hY9ouGikohvKvaECHJzagCJyBUeqP3",
  "key29": "528X5YSaTJnA9Rjua6UCfYiU9B3PCLwuMpMNQ8WcnjFprRQaV5uycFjzYjhEn9K9G3DLzyLZqBNAC568XQAnY2dZ",
  "key30": "3pqdQc9KaQVRFJCaW859fD69bZfEcs1LG6rEqC7ZTGZjcsuYnJXBCcZqjehULkvc2oUQATHwRGEov2h7pgWtt1Xo",
  "key31": "5s3SUWhkVy53EYGxgN7ae6n85dWhMQRaKQ2SoGFBNjNTDVFXmVBCcFg6J5skwkZDpSeMLUaJr9fvYmfpBLtQZSCy",
  "key32": "2sUZF9iSZcuygjWxbrGhexe8pyTdvVnsYJgEiAYxevZPBpZB65vR3aDdFD9zGQ45kMiqE1SFu53MtBzvxug9tZbh",
  "key33": "LeyxchDvpYPexkTYmBjes6ZdNbWgX1zto5tsjFdU4xRYySbcfknFebkeZ8ksY1LbooNuZitaDtktr6NA8KyXyDf",
  "key34": "5pfUWCKrHRq8DTS2oWoeGvAdCf8CwxCvihm4iSgB5T28KNApyVXexHZhwe2PncDndhfwm1YCb1gaTMowrJcC4c9f",
  "key35": "i3GQhmzADLqu6PvfyQDB86a5G7qB2GY3vvbc5GZhMt3vejsY9zNPHfqkK2qf2kQnZpZSkNeKreYPBhq4K3ueE2j",
  "key36": "4bq3StDNKFqozcf7YhkasYmZxRhpkwWGWt1wWuPP6KqGSWPPUkqbbhm63qK5Pf7UammqZwfJXsGmY1BcA6qdR2vD",
  "key37": "37Ffy6s6w72Z65N76iEU9S8JB6iDRUp8fEBWKtM7BrzT58SNkdoPnmYN8v9y4LNzPydBw8TPhJF96uDZPA7DaHSJ",
  "key38": "5LCxyFFsngxovBL5s73FiPMW2JEsTs5UdxwA5dUnh9mFemfaVTJimzA5e7d2caotjjGNWAH936E3regT3tKZYoEQ",
  "key39": "4gVBcqX4dUDthPgBYtJ5uEaa7Q4VaqAs86Yw7RTeKrmSEzpd3k2QdGjDmFcH2kqc61xoyeQVwV3cZmXyBxv8FfFR",
  "key40": "5bMcDmqfqHSRUAiFAFkBhA2yQx42RcbpK64Kcj814BZPgBKq6i7fKgJrFdQsfzo1ry67hwrFTmnB3kwruE5j3Aco",
  "key41": "44RSu87i84JEGtjU82tSnnAqeWusR1eu4uEaihwYink3vyg9Kc57Row38iy36hzk2dSHY5YHzEsZRQ5D7E2fHpQm",
  "key42": "4BCeFbYKaJV9ZACvAtRpCPCyj8piKWDQsR4HR56oeJBMk2nbd1vmU83kuoaFMUrVhCHRAZeGD19XFVhxcTsaPUC4",
  "key43": "4srKQjHHcNHXxRMrXvsU5tZixcDCw8BfRPDy2JQte7raabJwvGs1zTrHJA2oSEbWcG6joXXoCXJyaXAZLeKpn6bU",
  "key44": "3YWgvAkN8QQQhjpXzv96XZAZQfvt91jVwUfocq8VZe6w1JoLbQoCuXWioDiYgXEWjR52bi7FMxBZXosBrvK3ugP8",
  "key45": "3BYiTg4LcKcQaGajLenwosmAWbCt98prcTiUD6B2o9vFqch2Xb8LPwfVLS9gQAzW52EHY6tfSzLFUvn7ZfPN7Rf5",
  "key46": "3jNZ8C3T4y8gNcKAVfUS1cpYSxEGjaEf7YWU9gJyipe6ifmQ2mKYBiFUCUzgerygWUibahoXjyBkSiKkd2JsRdbq",
  "key47": "2mjuj3kG5xNsQTu7YPbqVpgMmukZTsmwCzwjdjuoKQicKy4o1s58XctTha92MqDAexP2uELA5dKLdNGtWvuTtVRR"
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
