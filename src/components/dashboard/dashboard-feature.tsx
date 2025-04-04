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
    "3PksJGceqoXCeWzPTvifCTTGNAyiBKj8MWwbfNK77twTiGPyje4iHqjfGELPBw6Npjb4wDxABzXVMqACzhCEuj9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lew5oDr8p1Deeajpri1CQKuPrjprAMaXTqs5TtJAUsPNrkS1o25didPojzH1wZmkCAaqE9m68FmphHvxFQnKa5y",
  "key1": "xXESVJXkZST4bmvqkCuEEA5iVGXBWNEc3eV38M3dM1N8gXwHDUkFWusxQjrhQYMeEh27tgGR8sZubXtHXBVAydi",
  "key2": "5eBQNywsUff6qYi2fUqJmHkYHdgZHKGW5poxqEUo6TWRhpf62jHEgCTtQiN3KQuyTCw7qBuKN1yZNjFftCoznJ9s",
  "key3": "3KN3p4EVDuXv2TwJBqVqNVaduVa1cqsjqfQnSan7qinEBcWTAJjex3ab2MTW8qxCwyYLmoKt7LVwQQNrzbTagh4x",
  "key4": "1HLHaPQFJwPTW8F9GWU8UePQRRa4s9Dgr9DVwYKhJoScKqkXZntK2CPuHwPRanmMW43856sFraD5cDee5hPNEhJ",
  "key5": "4mjye4PTfhs7qX8Zhiyyrzu3ShzRwpzF4npBZPpf3iH8ShJwPrpmJKob4uiNkWmn7oqFkfMmR4RU8wVJCfp8oATk",
  "key6": "hicr9YkBKmg5GefY2RHzWyEwPtYzgeJQDoKJeviXyWYNQGc1esDYNPxkAZKXGrw2UPj9SeY98GzhSmcnj5DVdFd",
  "key7": "2maYiUpgWEaRGqskdTqdZc1Ut9qe17EC2bGM5c152cAp3aW1SfHPHuwgao3vzwXwfAgLDuP7NofWKnK9JwGBcCWM",
  "key8": "2ynEH9F6dA8eYyUYgfxmK4Khndkgxif8Xjc3apTcqTMB7tZvnT1pSWx6XP1imdzybzYaMHBTvdT5oZq1NhbRYCNZ",
  "key9": "3TgSd6KSSx8f9aZisvk3Sw95dFbvBo6wPSeAMQD9ikuZTKHThqCjn5e1H6UPytEAtXYHQaaUVu1kWoarsCh1k1wK",
  "key10": "3hgKcap5E173zgBKXVx8pUe2Cf5VfbTBS6i3eHHNTcn4hZfhtW1wmpQzxwFbXgECwhAdViXX7Fo5vJjXDa94EVdB",
  "key11": "2sPg69Sm3DvdHdEPZFPDyCa7ifaVYLCK12kLywQNZwZVf9rZCN4ZusCZpi6pu4CQaGYiZz4YL1oKbwatwM4eJpEL",
  "key12": "3GQ5H2NF5oQZdtoRf1LaGmmYXFywyxPLwCRHUTmfvwVxpH6C2rGobTMZAnxQztwdVo8q84KEWN1ytuigz4DJ5jpb",
  "key13": "51fes46S8p83iT8Ng8C9Ss4xJ5KVwhqqhqGN8CC8HX1Z8zWrazuprhKZkGqQ22TgqxUP7ZvghWFXTANE9zLRZffq",
  "key14": "2uCF72ZGysiaJz8iWEWj7fo5FeAMbYkoTvFC1NjoFNmg7fdKD3Gvh5b3q7UtVm3adYJAVr4ASk2pnVe1DDDEESyH",
  "key15": "jdRiqaCxYLzvHq6wj5LdkJYh9bdLqqYtgHsKGJVUrim2R2S9LXqLpff2quJKxXiLdkpeHkJn3TxrDUaR7Y7ZNwT",
  "key16": "2p7UP9nioXMHhw89XhSfP1ohptmvrEMWomS1NM9YR14QL22sjTU6Q1BJnbxNLzuA1i59g5ZkQHRgWjugLtEF5qBe",
  "key17": "4ADE7U34DKSRKgsmz1EWDsYVe93ioRwxRuxjeLr16PmmZzAajB9CZsQndTyQq9c4jd2AAi8UJKaDwT3ufq2zqw7Z",
  "key18": "4U6VG3PS6RCrVK6bYkvXB6t4L8N8pCVK3natxP328GcheWV8VddmXRupXrhrcSpMqWXnbq41kr2KK6LcSoRa9yEA",
  "key19": "2w3edfEw4SJ8LEpAnZAtZueptwS92s95wduxkTFCThmUKvAdQoUBZSAm2XDKy3ZCopNo6GPbxJSb1BhyYDaB4abj",
  "key20": "4DddChZrBef4pZyeANqQqyZaptA9Me41muBxWQtN5UaxsCKtCVn7LRmU21pX7qZ7bxuh2dFgnYpPkngNK52LXdcy",
  "key21": "3QzuJWzujLi4RW2HrDcyAUYybPD4MKLBJHtb3i98GL2koZKMXc6r4aptveBPFJgLJaq34whQjDrz5t3eHbJi2gid",
  "key22": "2uAotdfVZxXxyREKrtb8RGbEMaJnb3Zt5StwwAFVpd3bdjnUQKwF1opigqpRFfavngMtfDQ4mXHhwAQ9BvrbUbzp",
  "key23": "5jXiTAcm4HQLojkyUmsKtATnZrJPmqWWLpZ3D1SNkGCQdZSHJU9unxuwGf6dqAxTCiD61vNCfG8HfCWdpKXxtSy7",
  "key24": "66qiJv8i3CXQLCZQ2HmvUqauFpNzBE8d8LjVVhWwwNobAH1J7SiCvmvyi8AcPDjueGKzHm2krdHhGcD7gqfB9TpB",
  "key25": "2e4YnL8JitxnDfUvNsZtE6NNqiaXkiFiXsuDPchK7s4KMPiZAe17mU1Bq2iTsGwZAaXBZAAUcSfiuPiVc67ChcXE",
  "key26": "2MM2nk3Ch3ijVNgjq8kzGJedjWbuuXttaG3xSLg9G33ehLfCjqVe29Bpox6tbkHevbw1XqwTSAzWT6K3pYip4715",
  "key27": "2sX43JwhXhCu77CbEj7kSs7uVtb8JeKubG7yFVs4iuB3L9XkgFu79CTsF73r8aPsStoUjQbN3SaSU9PeREWyNXpo",
  "key28": "5Ck36DWv9hJkLAbxXwSa43QuCR13yRNvA5Mbdamk9oyRsNJDuAamuja5yjLiFsQ6o2eKB3MoHiXcLgWqLJfvPGJ8",
  "key29": "5p5cnbJEuHvWGuW7pjtxMcxUwH32HEqsU8BVAtbrCBwSTHuexFvFVqUuBGeBu9BJiQVoD3GLQTxxHnn4ZVVcVC82",
  "key30": "gkx5uPWzQ1njbR6TuVsapQJtDdm6VXLHDgGY7BbLgPvd33WrBenY2t8ydTvag6CS3faiREAbRHcG8q9UgXhm65J",
  "key31": "3VaJzgnytZxCYFRe57QknJr1aAdbZwaH9Utn7LbeedkWGy6U533P82159q3XugBeDQtjmKkWK7NGPFvR8bzA9ysc",
  "key32": "36Ggaxv1ZCHHXhgUyFFiCoQY2umpmVZhwNmJywYXeUdw8AooiHsQYmTj46AjCnfeYiJumKmLU5Rss6LLDjqxEPHH",
  "key33": "2wcYkQstDybrv2xChX3iVZ7wS1JtuavAFcmgZGqj5vJRgG2LiSPpB2MmipyMDY1tsUSFFEgEBKceDJWoMs8icn4Z",
  "key34": "2sq4ZWSeDiENEpaJG5XRySXC2ikT9WfkoRztmZft96ztxo9t3DbYN9rcrrriNf4CNiH44GiJmfpuvvuhZoN5bqWm",
  "key35": "5FVf9nLCjKspvaAXrhP1QcXk3rssXDe544qkUCyN8HAUdkooKLxZfpe22LeZwZBnNpDMpNfLqhMisiE6x12bJyk1",
  "key36": "2TPZXB4hNGmGPfvcxR8xEKi9h1qUH3GCMqpLoVV9iDNQVFaYyQdZTX3f9g6ELU4XdDsSrzuWoVkVEqnRv5Cp8qAh",
  "key37": "XVQxmLta8gN2kMZoqJeF6ZKg3ExxHgetgbGr6or5VEYLBUxa4PdjcYPK8br8RQXWAGpofAYg1bDSHfBqdeY2iBp",
  "key38": "5VpYk7MmSxsxcW5hyGZ5iwDgp3FHVuW3zMVHT4wA78BPjFdDswCVbDHxiqUcP7QtdTr7vkMSPC86AXX1JDFeSpZ7",
  "key39": "ykw9aQcaRTSssjjgyUqW6UCQ1DrZAip94Rm2ap5QUhCniQw9rymaZKn3SUKj2J6ioErycNh3ohhzVGP3YxhmPfW",
  "key40": "3whNiwFjJyuo4XkjHwtPrWEmhdVj6w7Yv84eKMPnzKTDxanonTnZpgWj3Kz9YsWDYgXcFWgZeHDuER1BjtuPTEBB"
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
