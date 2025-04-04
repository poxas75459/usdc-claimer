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
    "562ftdoTidHxnVSU7SNLvEGyncpvAKLodZVfShaJTWgp2BoR1pyaKx7CEuYvEU3K8MxwBQcKkpbPgmg4KxiUUJ5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36mokQfUuHhq8mcNkDoGNg5UyZTpDNcSi8ozVpkWRrAMAJYeVVUVEfvNf1no31Yt6TNtQzvvDhKdqbatLaCLk3bz",
  "key1": "3DCmNEmB3jVFXEbNKzvjR1fLSNvajnjp6fxP35ir3B3UWenBt9LYecrNiShWz9CeQowiriz5hyGbgew5r7fjw8A7",
  "key2": "4qYfJe22TJCBiA9gQrQTB2uf3qR7fxcVXzFiJyfsVTHoqwZFjVcFGef5Xvuv2wULddeNmZvH3icTxS3XxTx56t7h",
  "key3": "4sUGhTd4xU7tu3C3yoAFjhcjNQWsQQEA5N5doi2MBxNJBhL8WKVPmnnLweebF2p92eGCHbjyks8YzBu5QYTfFHt7",
  "key4": "DgajsYtuPmDrgequ1dGKkmt494z48n69RMtZtVVRGu1RpRvZhmUbt8VULJCoDqX4Y9hhxFmmSB4SSwjYW2mQK8D",
  "key5": "iZLGKNPj5WVXCMmhpF2LJ5Cf9BBw8k1eqM8VLAyuthv9btyRbnNot5AoQbjXCTZCfVcPsHcYUAdszYudfsNSyKN",
  "key6": "43zs6yPFcQ86KYqZMgwW6Wjepbg2HaRGFLxMQc1Pa7S6QdWUVLHJqfGwrGd2XSPkTCVzJ7RRWNi6kW2yvX2Hjg9c",
  "key7": "NNRBnW4Zy5brHLgPqAehr9c3seN5s2XUrUANN8zMeZ6iiUKgDvqh1ByjhHV326FWcsZ3ZJaGvAVS7MyTfm27XWU",
  "key8": "4b9fo2JzJBtvUZMCfuQury58pWVBU6x79fBajfUvTpPfSPpr1QKCXtRpqAmXQyzmEnWMph9oK9miguWVgwsgYCuB",
  "key9": "44A7oV7cKhymcEcuAE59FsPG3bjWxLNdduRmvWvRAfchzf49ShZk2RZx3eGQwoTp3uYjFTMBA3k6qRWHPrnBNCGq",
  "key10": "2sfaHMp92ormCHEWkJL5H7PucE3cbaCeny2pb3JbMnAM22sP6BuVBmqyBRnHBJdsNQUAE929bJBfre4JXbreV88E",
  "key11": "3QQjsbWBorZ6Ha6WT2o5UzTPLEgAa3Muk4NfKVovK6xCimwKTQ5jbUXUN6LJjNdmogtFVcN9U27CyH5y2B59AeLt",
  "key12": "3k1pgAhBFS5Ec4wFePfT2wBS6sEnHcH9DkQZYKXcckcfEwNKNrDoU92FWEQuZhRmeXGzW1rc8Kgfu11FsaTCnuWr",
  "key13": "2JRW7CuXeWr5mbJcUo8iXukzZ9TBRgu7zHKxG2oKEmRiJoNrbT1f5sqwxwqCGpKSspRJbJuFp3n7mfRzgbLUabU7",
  "key14": "3a1eTqt1NkqdtPmeAnznNA1wJGrJhNSuNeo5mBEvqCmJKbuw2ArtmhtFZF7ntsv5jugvLZyx67oBhC4aZjybJZ8L",
  "key15": "4pvMxCXsTjufW52e5je8qaojZJtyM5rRLCU32oJVfugDismiXvHjxp4EF7QrXvUt6ZC6hfp4NyCUfJ2zUb1aXxTL",
  "key16": "2hTkAQeWdRvrdigdXpd3sVwRsKgFP7ZEzDmgygJF1ZFCzUSoFcRmAEVL57Ki7GKu5sxEKQeDhib1PgR7aGxu7oDn",
  "key17": "3rcY1LmpxgYikrFgdPn5JbfQG9whMthui9fsfuYmyUMM62HLNa4ks1JUbZuooeNoePv3oohk6r5qgoPcFeS9xhSH",
  "key18": "2b5bXdtmeFoktqd96XsC6QbY8EKnwkwdMEiVEinnVJHJd2sqvEXXCubCyEKHMGGoB7gGEi3Msuz2q4PANpK7Cmsy",
  "key19": "32Z5VUASxnqoLGVqezpSyar37yZwv4W4disUXGKpHY8mWjvw5H5skmkf36dgCytFLF5aZUi15VaTwJ7QMg4SFH4t",
  "key20": "5YEos6TXjH3HZPeXEAXpyXgjXKAtzqSzmMMgdH5uGbj3rvtJiAWLGu7oY8uNHngQm6quKf8MQKGntRwq3dBdPqir",
  "key21": "4a5zvG276vQu3gPuRTfWnVxtRFT8AAojvVmXNwvPw776WGNoQjVS8DLsBv9Xu97iVnvA8mjJp1wUXRowjyeNuPJx",
  "key22": "2gJ1DXoJxqRgUwRViYkmqKGXtbTwdTEjQVfooqp1tvwkCMYvs68ajoQQMgy2bv86hhVa3Lueheote92keBJjRPiy",
  "key23": "FejXo6utvHGbHyWMdJrpGBZCJ2c1ForK5pUWj3m3pEk3VNStbMxX7H7mwNdD7u1hVEouWtK7ffDE9uFMdWxpMqq",
  "key24": "5ZsyGUbpqozz8xenkjv7ShkSJnUXZjLYS6dwcY7GpSPeBbpdEr4V3WszFZXvZPZ6BmLpJpLpamu51ZkUEATM13kW",
  "key25": "zChFqi9xx2LUWiXRsTw9gXdzRCpi7N3DTbtbgd7Psmrz7KSF8M32WUZAEjNy8JGurJYDxEUxjuBXakcM65WtisX",
  "key26": "3nhLwCHVRNgkPy5qHP7otAVwgFnGGBqD1i7Tb4WHHYJK4TgfJMTLqumPVz13Zj2B1k8YeUcq9UyVJBQLyV5RuFcv",
  "key27": "29zJeQ3JVVYMoDQDXFvMVZ9guQtXnhnx7Wn3o1qWx8J4wzkHiBst7vrdxXkM8nTCmrsEL3F4fT2NJeNNV8nU7gF1",
  "key28": "21WCws2mUTbDsVofi3s6t2hwLCJcAmPfqjJePXp78Tq65PeX66gsiACQ7EPcDcxaoMN7QBrcRTMnmUbYrMoifwxH",
  "key29": "djK8g4MuTyQP5UUbrjVCqGQCJK2aFLW4givJNoaCCho9oVUdzvdvPWJAThPcL4e2rdWfhLoFYjiHjZvWt9UzALM",
  "key30": "5YmJ3VJL53ucMWMZQUpXWjpUvvRFjNbDFWw3eovWmzdpuobhztzTHWBjrbDPQWr3ANKHiFHgvF7Cs5pg2x981WVf",
  "key31": "4utUgh1RyWMJGHE11X42MyCd4MUZWiKh9UVGPeGv54tRa1D25s3amBjyTBynFi4enTw7FkgJKWPNkKSDFJHNtDs3",
  "key32": "3LnAcT4dHHeyn5YuTa9Bksxwpx6nQXXLbY9WFxsmTDCRx1MKqxcQ9W6fnxhuvVE7tQHHTBwDQbnNQkuedbMQp8sz",
  "key33": "36Q5phSZryNxqLKyJ6CuEQpkjeFaBVfWgePqyDV96VyxTpMNxnDcaAhcbbegyJJkdx3Zkw6xVpzwrLCAym9pT9kb",
  "key34": "2q7K5ab9yTpQLGmjtgwyCU4X4KHRGsDACaBH9vqgiXhgYHiZW1sxW95NyUgt71uNnB6T4ZhwQQDAXXj8L5Vyh7CJ",
  "key35": "5pHPd9ybz2soKRksfvZSMnH2xGqTwMccHq1FNsqr4Sv6Wpw9HTnJMLhtyJnMPr5ezcMT1m3jN5TkPZP6kL5sHPt2",
  "key36": "4KdUdQAAiaUydiR87Ctu4hH5reDRECUJhmxtoYshEveu9UPMuVKWXkyHe68b68QDuXsGxDaXEi1Ly2VwLTaxwKD7",
  "key37": "4cbogvFMRYhfriMcVPVoheeBiCVybr9cc77JzYrCdLmvSaeMqD5nX3KSDGhJrKfAhJxs9CccE8FbxihMyVNmigZq",
  "key38": "52TtesP2NQcfk1jnuWBEmbYMzS5C4ZLeYLyW2Z3x16d2iUkrzVdPZdmKVPUi4aVrwgjA7NVg6C5bcdqN31XMHgGv",
  "key39": "PTx5EMAgpofinAPMY6YRRq9zN4TfU3LGzrFXKeLRnZ4Uk2EhkjjBke3C1d2fSBPUX8AKv47KYAcvjih1QBQkBw6",
  "key40": "3KaAQZfEzFNCjpXLRXLrLPW6sDFh9XY1qw3G46XEoPhHRoheQqXTsCHYyYe1ZsSrPtFwdQpdmzXEHEJxEaJ8d9in",
  "key41": "4DrYNLf5fj3gaP9AbhCcq85H9fCF6ncrZCsBE4ZPFkt6rBAtu6UdL5JJ8HkHC6S1MUc8kEoe3x8JXxNELdaBZHDc",
  "key42": "3cZcHg5BgxF25ooLXBSYXte1ojgWLiGA8ZeA4bbAeHKPgENpTCQz992sMVJ5mLsJhwgFNu1F2Prr9TEjtABqovxq",
  "key43": "9XkvAp7vL7FfTetTsWzh22PfU2ahVR6dn9PJ8F2FWd1boyaBZvwP5wZDe14wMqkWjZLScVzoyXjPKxScTWJjpsD",
  "key44": "39rk8Yb3WWKo59qnYpeWTeVR9ij79EQQ3GghqUjNZWBmVXh2m3cYrrzskJ3G9vsnkSzeZmUXNnpYYkXK2dTcqZUM",
  "key45": "2ZGPEf6uaWGLYxnGhrSuYPa6ZRp2c42PM84wCxXsLB1QGdqDGZ2eHZJXdFhkwK8nsART5LVkqCKPw5bh6eFGdfAP",
  "key46": "gNLrtmBfzrY1fTzroFfQRrSZU3HY6K4BCi4bgVsvjWq7WdSZtpVPDx858ZY4tQHgaKm1Xs3fN9GXC6s1i7FEQCn",
  "key47": "25M5biip3aMvz5mKxk9AveuectfhKMs7JrdHuoAvUsjzY9jnfmxLHKo5v3w4HitVQnvPuH5ip1yNBYoHQHN9EwhH"
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
