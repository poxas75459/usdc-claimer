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
    "xjuyHjhJEkPS1fPtCiiRXfr2o5LY7pUgtnBtpjWFV81ssLYsp73pu1h2CRc18xsfrZbD3Db8GKPyb1bhtcisHQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jLtKNVBsVpVic5kcnjUyEzv5hy6Kvw4irMhiG8kK5Lcv9Ln7XnRYgGgohA7ZsBy2NxpSE9To1rAGjhM1dHVZv4S",
  "key1": "5eKyPjK5BM89Gz137L8TnFM1iMuRKMydRVuKmFTEctUs8ajfSfZHpkZi2L1N3q3EJYT6jQ1jN3UWSEoWvBYvpQCV",
  "key2": "jk1vcPAxd3Dk2QUSEp1TYw4oXAt8yCycHMx7zv7Zo7j3so7gFu1qAU4VAoLvuKtRtas95RyecYuUNN7f6iJpnzg",
  "key3": "4ZhXwKvkn2eJugkBpyxFZRMqNLHKbDyf8k2m1FLHgdnCNGyy6L8BYucd9GYMzpmS1xBzBJscTFB5jZXyb7Kknf3N",
  "key4": "553Fk3WGkaChTL8sJoCuhVoj4UJFXA5Vn8q4cqpJzE7zZkoi3Dey1aKUz5hPCYXLLCCkff8Jxxu35CK4nzSh9NWo",
  "key5": "2RbMKK1s2GxCkAxy7ULEb5rQ3xAyCfJ9aVyiwxng9AkD2mjsCny7dCU3HU4bRUon7bEuAYeVdrb2Zb4mJsx3NhD9",
  "key6": "5K7ME5Bga1tKonHYBWte4HFKk4e975ACrcyRP6aa3VrNZ9oXtGmw7fVLhcB6XfMLXEduwFr3wrP7skmfzNnqeQB2",
  "key7": "23sgBdG1xo8non6xdYFAR1BVxf7Wyb26zthZ2ZJPK3B2CmhRqQC1Zj5M2JCiQG9fBeujFbB78k7qJLbDJ38bUhDc",
  "key8": "47e6hECV1amfkCZGPrJrK3Sr4diPqYWUMSb9Zvs6GAxysSixwC5uBNbAtBwUUJCpQcM4otBRyLp9JMwWxL82DzMr",
  "key9": "39CJxUEYMu18G4Mhhci2Q7pctJ3ZvFbKWCuxWjHjRZ4Rg4GsZQNJktANa8QoZdtbR6SqcN1641cpcdTAzxgK7gFn",
  "key10": "2GyAd3A9gQuih5QYitjRbwsmmLHzkMAG5QhBt952Er448XMLBdheKajUjVAEr7nZbNhvhWyMy9r9khNPdieuNXQ4",
  "key11": "3SmQk4UPMSGZrSuvtJ3X2QkC95E4AUGD4mqPhT2ZERiTUDQZt7sBzuwCNNqD7PD5CLDcSNPs7FNvHFE9RTUsYzqq",
  "key12": "2NST8yrVCS9YLyj68BPNxVGAph3jbK8dGzLyioUbBHdsFoS6FB3isYDDdrug3qGMgZczFFSh5YiKriEWJs71nk6Q",
  "key13": "JX2W1Vq3D7P7YEeeaCZUh1Yp4k1Pajji6JPE8DbNdyBqJPKF6BrFCYx5LdUURxzCk2d7GowNF3ZHAGBBNVoECbN",
  "key14": "24jYBWmq7pc7VXuaQm8Pu7saTcXuGYt6HqqfQUsjMSudp9ek2nHUD5kccfnzF756PEhTnLyMjiQBQQeym2DeRFtw",
  "key15": "2QNfprG7BAfW9xo7rK2BRH1jUBeKfnMqZKTereZxakqwWm3CaHoPDpGoSX7BDzW6MwZp5BTcpQaQrYF5tVLkGm1x",
  "key16": "5z7ViffiGcwXp38YVQAECH6uiGZxHA2ztPjCAAkN9MqGxtEoTNPds54mezBa9hUKJTY6mAr2eLr77oGDLx1VXJ6P",
  "key17": "5fXhHB9VsVkJA7A3z6heU2Zku7ELf3k25qsrmLZ96fDqXPYMg8WWX5R28hubb4oeqhpKNyGNnc43MB4bGFfwmJYW",
  "key18": "2vQPqKRNVkgL4uFr4PrXNwY1PxGQLmQxyjVeQqXfTbzCCzDZ7WcLfNGCkS2Aigb9NzGNZnTouEe1zuUYcMjdBL7y",
  "key19": "a3iKhCYDXWBVCBkyxb6kUiYesLRQruEPgqCaKYg3b37Hj6sdzKx6uCTJjFqt4nyiQLYHRsmBpPSoPQGPWcJ2CdP",
  "key20": "3xzLCUBddAukLq2WX93V7XWdVhvMbkHe4C283rwWEigenZhKfA7U8KPN7W3q6A7hLjar2dnbtortRchKhdeoKkMx",
  "key21": "N5yiZK3fw7UpxjJF4Rgp3ar3ceCiC7KHNoHFtG5jfY7i2XjczwqhTqkS37kTMhFqjWtirLxAUjUaF9VWh7eEdkW",
  "key22": "51FDsuQ7kj7m2SnrptjRM17p1JLnY6VBiHEaa8epZPYQCr19gC4hSaCdqortPsoKgmjrP31NvCiAHSw8UbK2rtCV",
  "key23": "VVQWstGUMGS33QXhApUvwn6iAWd3oFUZYTSMPCdLoACg45Y8hfFGkvoCGEhkU4RWf25SydNBQfQTYUCXWgWvw1h",
  "key24": "mjRWHJSFUbEx1qAB6nLGWyNpFC2aHWjTugsWCN4AhCBahj3JKyhdMNyN3xPyb7pX4B7o7xLj9bFi8UHARKVy6ZH",
  "key25": "4oHqbmZhztWqoAjVS4e6d6MQ6WYr3LPdd1P8M1Lz7i5znockgMWeoFVqMYrxYT1dYmLNMQWYRvstZG8ETtHJEPoG",
  "key26": "5ahppFNoGnuNf2f5g5gyDvuTkW9EfgKvi2MdynBwvyq6u4h93NAEPGqAG1uiW1PpDUodwPvs4cJvaRBFK8tnqpu5",
  "key27": "5scZNNSgUtZtBzbgPZTM7XVxbCNq9X1edjWM3CZ1cP3nZTqTdravqwSTDTSAHhRNfAJzCCgyfWSwUcXNGZ39gxqb",
  "key28": "3nNfq5ibAN64tGARQTkm55c22qE1qHYuZfpQodyhRATrxBhi8qdtn32dVUvbiDKp3mBtpLEyuNdB4ViCb7i3K6mY",
  "key29": "5uU6M6eAhyK7Q63zoueKyrGk7U3bHH66m6QbXpQSvfHj5GFTQtDQ6GuRZ822zqPxSHug3aEJc7dkm8N723DefqLk",
  "key30": "2wZxRGbZPCZp3Xw5gj5c7NHLsAY8QSXhzPuZMMbSYzo14Zxhz63CxfgxkWWkL3hnRrovHHNTDD5JdqoSffccV7Ar",
  "key31": "4K9WxieyyWLLbuMFNvE7LPzdde7WCZxG1HYyriQLcXkjoG8xWoy6kZSh9tmHX7tveT6QAwq3w6mrXJiThYpmJWew",
  "key32": "33Q8fyDu4DdNDXjwF6YrEMKqds1quWw8eLE8oLSTA9FJNuGYFDXDAiPSBgN14LJNDXgyxpQvmMCzCeZyaJkzqDsa",
  "key33": "5rpvUxoHks9KYsS8kdfVni7sn5yHFxazmYLsQuJAb4LVHmq5dsXL2tARUmQyuMzcVdPdh6T5rRTwPLS2Br4HKjd8",
  "key34": "ZoRyXKN38Yk9fyU8pcNSAz7Y72yjCfznn9bkhyA3M5aNYZ5Rmi6c8KmbnsdVJwXdJfqM3UxMrDjtUxQ6KH3b91a",
  "key35": "64N7eojTyqxsYS4gfvoY9uu59nydVjRYErKxtKaeFoxy6QFvorEgtWHPDjfdEhEGNjEtGBSEMc94bM1Kt2PeCLZD",
  "key36": "7wjHXddTSyfZbaTtbvczonJDMu5LtDWHthPUK66FJv2a4sLa1Hsgnpx2a7xJUwHpafSj7k4dPAJKyu5daEmzCUK",
  "key37": "5Z3jfx7Z69JpUJbYxb8WwUetnamWx5iQ8Zf1YSSzA8QeaQc5rtaMMW9MNRmyCb39LthHDMd86jy8VKDMRN7DfPvR",
  "key38": "2C1Azyi34EgDu1RCUfJoWrySP9gbT2QV4Y8KTAq9F3PniFx9aY62k8tUQ4vnHKDstrmFuWJ2pAV7igamwgGHTdDe",
  "key39": "2pjq5zinG2V1pAkGSzWkf1ozuuY1RyLSpH91u1ZjiBNAzFFJQ7g7AUeUmPa2zyyFrzzQ4ZUVxCfcWtncYUPtjs5q",
  "key40": "3artSR2KsGfv5WPfERwxUfiEt8y87iLHSL6ZAnPwKkA3kbwDMVuNB3sXWEWr4Lhz38NjJmDTFajicQ8ezrHNC6cY",
  "key41": "3sZLbQqT2iehF4JePYfwYXQsa4KXZZaEjHdiCfs4oSfwXkoLj6g8yVxiGknAEvCdWYTLCjujnDM1W9qyv9ZhFYD3",
  "key42": "4huBZmhPwVDVJvb3ZX5kxT9xvcsT7vUUfeqnPJ2iiKKRnJrZHdaA5QV9LP1T2oP6czKG27cMSxB87G2dgrVCSJxW",
  "key43": "3aNuaqKxhp2q9Eq7xcmFZHK2zTXKcVgQsHM2Yjf9a75og7BZK9SWoXhV7buRcJhU5BkWqMQXGA378mq5sVUUpXTC"
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
