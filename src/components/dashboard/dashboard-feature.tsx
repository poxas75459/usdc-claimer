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
    "5UvNGrdXhWpYJGGsVQ2KRZXvm2Ai5CVYU7X7JCQr2MQmY4xk7kTT8Q5aRLn6CHQXHoZqpTi9E3qb6oWbmEEdmhie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BaJYq19LNDLU1MTPKkNvZLAhZ2nLHrqvXopFtmeoRg2Jn4qEE2QkK71fZP2HqASLtCVRBr5fXynAknDqrXx63BK",
  "key1": "BAXf8SmQeoQzQL6hy4W7KWq5j6hupUuQ86xQNevHZVxYguZxRMUczFbTZizQcegfbbHpgD9SiFKmhPihUTb4btA",
  "key2": "3FaL7uEssKSuGxf2hVsom8fA5YHJACiJZJgDhYdMnpV3rQGs7vXnfErQwqcBCH1Vh1nVUV8u3cgnVHFPv2gDc9Zv",
  "key3": "2AgvGX3Nb6whi25GYvHuoM8wtmpk5Xe8ChA7E4MrikogGGs8nxV8PmZX4WjfRJnARkZ8JcNckmWuQJfWx9WNmeuP",
  "key4": "MMwNPKr7JUj4T7unVokjnfhEZWVbfckf3EtN6WkDPyzdC2B8P8PEsXEmpvfvXGM25bRXdPCwWjtTrbitrgGXnrS",
  "key5": "ZkaRaXpL1Nn5vqWYXa2F7MwsM3Bd7mLH77TCD6wVN5RypHPqXXFxEutEHzKwUq4NaMofwRAWicQVgF5EednwEmj",
  "key6": "2uVUK4sJuGYhi54T3Dt8FPfDhR6j1Yt13hCAAfP954wbrW25KrwHWhVVhYfJYhFQNTYUpDrkpDVvknocW51eb7Yx",
  "key7": "524vZtoinBNqQKvkkLZWpp6aTTBF11wf5JPHTKN2j6PZLVM1yJnzWT24BqUPFwArC73dCHhiGcgDuJLPJ3puDqNc",
  "key8": "4XoGqLXBcR2cqsFDionSCkCPMtRasFHisrahRm5QQ4pKNugA5aYCnKenBvBNZCxm4QADJyBeUUrrVEsjqE3ExiJL",
  "key9": "2Ca269ETx3AJXdbGgonqQyg5jixvvVi1UUMQimqiChZ87PB246JufSvWWKXd4h9BNJezi9mhR3VjznfBQDEoxCBY",
  "key10": "mw1eoBU5ZGCw2Whg15466szyr3sJ2FyE4QAdSwzsn7BuTHQ6G57DAyafPPmswr5ixSb4ftd9E8ZTP1gyPr2NreJ",
  "key11": "2zbJqyYd1U92tgy2aXJC61Ncq6Rb8MrcJKZ5597GDPhXthrA9uDHL6jy63wWDsg5QGBHPpXwLUQznQtBBgyaFhWj",
  "key12": "4v24tJvsbZUvLL2pJnQVdWaqiE81ZVtJ71RRAP8xZmq27hg73WbRXHCHfLNAUDDHrPqhHbKEjmJqUtXrHJpnTPjv",
  "key13": "4TcdWHPhKuSkzqAuuy8RvK5c1wgTz9DLP8EtjQcBBysaL7Vg835k8XsVeGa6BC1vgRbWfJALpAke4Dwo4jud2dna",
  "key14": "5ZERBLSYZHduTUGB5nw6vv92VdrG6XYCqchuZNG4ww2T8wJjvjLAWdgDzsnW1xujYMmAq9pRSyUokavXqTwUbt6J",
  "key15": "3TM5xXzfUb5AKNt15MptEkxAdTiTTFWqcU9xzQobiQ26bg9AyCWAH4t3icuQyabyrcjV2i9iswpDyLDSbWTEiPm",
  "key16": "2N7DgvmXMQamBYKBKgdsMWGszuWmz7Cfkhhi9LxPV2i1G1TzzHBZth9xT38uVcG6iXB8VBk5CQqERJT14w52ECv2",
  "key17": "khdTGHtSkGCz5vcy7t8HNZ55Rc3FvZiWtqiv8qFRYGfqztgy2KksRrxGGB7bP2FzVE1fQVdtJNq3wRYe36dL2zk",
  "key18": "5QnA3cnX4sahBmV7Tzvji3kHMvBvw3aEAReSBoehQzoQ3zYqPxJHuyoC4AN48vHbNe6pKWYJqSjGZLEYe6FaxX52",
  "key19": "Zcv3CSK2NKxUZWVmJmKhGaBMAFtDNBoUZ5p5udJjoyHM9xurh15XtyizxSK23RSpgUFQuAMph3qrsgcrhKhUnoX",
  "key20": "27kozRxqsm5XydVhxJ5VcD4NDAbMW1cw9FNNMKL87gjDghTyEZCZY2hbUTQpoUz4V4gqAChYpS2LYsdjNxV871fh",
  "key21": "4Mdq81YKaWhNVsfNw48544tyB7HXNFPzuZUKTKMiaZR1TRR4T96ABUZKXvxnWH2cTT1GYVd21xQh9DXfYRCRzEcX",
  "key22": "t5M17Xx5pa2buWgQxugaEcuziXU7ChEnS1AuC331fTUntN2nsYhuMWDwWYzX6M2imqjxbmCR67MakjRr3HS7Gp9",
  "key23": "4sHfxuyLG76s6fEn92y221MQdDL55GmtZ9JxSXUfAA9MgV6rPQMezvdKgFsbNMb4SgoRxkmgKAhvzag91fywJigj",
  "key24": "29uBdnVffLZpQHR9t81NStfwWZnhETiybTzp59UawBBShNx3VwMXmDQTfwo8zjeaSEbgPRSjDSabXgxVd34zoE1n",
  "key25": "oYVjcNV1KrmujvpXukPxwfNkubcWFi5zNhLzskCycWCwYZ2EdPhs8nb5ETJj1zkaExav4UHpvRqCDtMykgU375r",
  "key26": "3wpxToFRceBqgw8FxCkn6XX9qUBRhdVWV1wW5HJnfGT56qDcEpaHhwfSuqXRxg5FTv7ugLSuhrriVtGGohrXB4mp",
  "key27": "UJ5i3LBA8X4f9mucn72NrmWMZuMk2Y3R25AfnfSDEc5rkFp1yYfuwGomekCXsngKgibQCYihzDfJgeVJDXQ2DQJ",
  "key28": "4bXtygSMhJmgSft3KGXVinHCEANHGMHr1yZeyQxWRkRMsvageVD88iYwfmKQiZkXVBWawkjrAw3jUQQpLK5HH5nY",
  "key29": "2muEz1y8ZwjSHLrdZjz6V2e4mUpnzCYQMmdfQfP83iNRZraLzgkpjkuX2GH74aVjr2vMxhPfMx1YqJF4RegV3SMf",
  "key30": "22w2BAdkrCbMBiitf3BtwnZKQBQiABvwCC9awrKU3w9t4nAH4grW95KG1rk7cN2vdvxgFmd7QYviMgtkcKuWqej6",
  "key31": "5a1bsPo3z5bFfmXxrK1xHpioUUsEsy8bc8axzaqxwJ7RYKqJxSzFvTTg9rr1M1NmidTPpT4LA5hWPwxuSC1y9ZFo"
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
