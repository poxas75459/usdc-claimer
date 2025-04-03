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
    "4w7ndUCP6F9MHuFqfgfkx1zvr5xYAEHDSbBdo4vLLuKKv4bPosAvVMNA2HUKXiMjkhQov5M6titgwCDyYzgYTofG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PH8k9Ji5bq6cgMXN4LDcpmMEVFxysJXJbRRGtGvzUb9gRWosmd99iofwoCdh5ivCtsrBcLK5TJa4aPySNJX6j7E",
  "key1": "2fgvBgQaqTD1fnBFxAsoh6HGLwHR7oZsPX9dkMauor4bcxpHPwzWjLV8QDgsePqWVkX3VG5vHB5SSBmfsHMDyUoi",
  "key2": "5Q3QXxRfs3LFtFrYxa5XfSXRgs4E9APDhGFwSqjwfAjEfwJrYx2X53455vMZ2h9uDQNmy2GyuMZyUUXtyVBFT4Si",
  "key3": "2UEyG7shykgk9WWXXtjLnaSjNwM8vs2oHc2zqXHA91df9dFMdrwFcevB8fLq7GEXycCiqTckGL3G19uuUtds1Ssm",
  "key4": "61MbqkMsUyYUSMWtKPPtCB1MMwP2uEJJ32PzdNrLB4TXx7Bcjvoxh4qEWRGjesEBYyjjHY42WkqtfnrdZoccbpRb",
  "key5": "27xxM5tSvJr38CPFFYTaG1wN2YoVtcSj7uFKAVDJDmeTccYQp6MnJbAvXe53vPa2oT78WomdPFVTX9dz6xxk6XuD",
  "key6": "2JAhLm1xk9CkZDTuNr4myovuFaWNoDKVn3xyxF8x4jAjhk5K17iYbNcnDLfTfsr566iboh4EYpBJbYvwSZee7KvS",
  "key7": "2iLN7WnDQhPKDw4jD6xkUwRXvJ1TXXd56Fa26UdoxtDSMoEF5TfsSBDEYvWK6CYsD4MKzFMRTXhBSFJGgpKjjibW",
  "key8": "DNDqyAACjykUH6nD9simS2tNc2g63DScNaPquFWnUFyLXhP7MLh3hzrhMVHMqJTFBRnH3FTyJRVggrJDpcbM98W",
  "key9": "65j9sKMXZZkf2a1ToEgiixSmkGfDjDnF4sj1gioKbGYnsH7wypZni1QqKkGuvadruKRG94F8CnUF8kKWFG7ZfwMG",
  "key10": "5LvoaN8Kxe6ydCQnSRnWmkDeH7t1qgA1pGg7yBELdQGbWbLaeujPCnmMT1G3Yo5561zuvQHu7T1Te6u1TnFs8vAU",
  "key11": "4JxAN5FKtXQhoFwYQEMaTeq4pWxi1vU3NCDm5Da5KrnKovDPg1PTnqcQf1sGxhJ3HmwQfTk1kMdCHTeuss2kSLw5",
  "key12": "3kkKWDH4QTuTP8eus3rTvyZ2YT6u3f9PWRWvorXGUAzR1eE6hAgTPhZuQen7CGjU9XrWfXQxorVscAvK48a7N9HS",
  "key13": "4KokbQf3hK2WFJHjYLkhHdahy7sGo1rqtXFqJsLT3W6bWjwCVjQNxequUpm69KoKxRshCbLdWZryoZRac6z3GKEQ",
  "key14": "2oVeZtsEeVoEEab26Cb7XFR3EiW1Wu6dTsHHtE68YAcnpwG7GKQqUUv9Zb9Hb14wdo5LvmHRzGrZZtKsfLeDGYi4",
  "key15": "3LPLH1Wdtoc5f7nmWrSqekJk8LtQPefe8wpRTXJ8Q8gBeboqkJEHcRZ9gSJQC7tZBAByox5Y7DoUGQuwxmSXZffj",
  "key16": "azLJhBVsS7AFjaiFWQHN9JNz7cEze3nqDnqo1qQY7k7htS65JTX8AZXzbSjXNZg13RQ2U7Hc1Yxjhakd6dPc6AP",
  "key17": "XcPajS17W2HKn331qWtY7kkzvUBM92uUfAq5PiwkLUadmVJUUPeXcMYu2oGtzHnambuNfqsS18d3mAqD37wab78",
  "key18": "5PtbZAdRbtD3KfzHww3XdzzEJReGvgpz8f5iQnBUHncPPTxFi9Bj7qVtJUNeodgASTTtE1QpHmr7EoanS8kynwqR",
  "key19": "2MHoS2UyK9XswwG1yv5U5RoCHtTn98Ts37bECTFCpuzrSkZS2tzjFJ9m9koPrJrJzkK2VVPWJcjxVgfXUnjJLtWc",
  "key20": "AAfERmNa1QLNisXJ3vg1Fa8bC1jiw6jutsebdCZcZnVf954tnpBVn4HagAHXTuSCnSrzB55EKETacWRn8iGH7h8",
  "key21": "tjh5rZuaNTxxo5JPrjCtiFMLCqeTMPeHjNi1k4uDcMEwcvk3mhoP8nbKm2zyffnA3NwePBHUyiXqkLj8NBq5UTc",
  "key22": "2oLdV9bSp56bLttX1a8t8jW5kpRwbKKjWx7rWYfE6XTGkKSkR9XuVKf5uHtQHRmbtwUDs46N9P9vSswKQv9dmj35",
  "key23": "3NcmLwosyEinp5uKChhSP2mVM24T62Ug4M7HXhuJ3sCdasJ8c8Va2d3EM8GbZnnQKuFJHoteZkmJD6qyXh5fHuVJ",
  "key24": "216xoHpmHZGnzHxrSvTRN36PfA8gcqsYD8WxzdkNsA1K5NFGHNBz3azM67dTKqNn1tJdARmsdarwTpri5UqtJsPZ",
  "key25": "LBT5kaVGyUxADs8wSU19cbJ9iwwneQW8rugMmu5fC6NMDG7aNmJyCHfdPJ6sLBhjdptorkYbL5nboJ7WCBRAWUW",
  "key26": "3b7pi6BBKADmWDZ4ggc1MWXE35Ga1PCBP4UejoKeWyPZZeHhEZcVpMsJef1MHCMak3EfTHzw8YJXaSF9wtEdXbi7",
  "key27": "2Ld2RktWebQ6Kii6Ben1V5e7sW42pkrQaLjtvbuSNm4K8SVGKPBkT2AfkhMYKcs36yKYmPrraiTGS9Qkpt314EZB",
  "key28": "5wpEqsALH4uYxuE8hJ7NazBzcjwfykMWuddkkkq7JRMmoy2nssEpK7dyDaU3nV4p34VvUCL8xBraeepG6d12wC3q",
  "key29": "2o9hrfgCVKDRUuoyQScKKcMcsAE96rYTKmEjezQmDVsFhKSpRtgyyiMjPPp3qWLXTYdUs1E7VXd4v4fP5daQupmw",
  "key30": "519x5jZAX8PqDgtLotWPtj2p62uwFVRsNmtZsaJEy6jY7xpRXvFcqtGBbwrJr338PtuxBKhcZE1XTqnhsznVpzKU",
  "key31": "2RBoewbtCtfTktQzeNrNEJzoHpCR7ehwZGZ3HwiKKXyVsCtLCdQqj2vYvdmmEf1BVyrguj9t9T9XUWQ1J3NptVVi",
  "key32": "X3U7tthmJ6oD8chfDxiX5AjudHWq53vYVVDJF8uav6LjACCLXvngkrjC9aXTUPLCSz3nXoRQyacyWeBgWeMoedS",
  "key33": "mM7ayXoKW8JzUbBEgQnVhMbrNFnYJWSxydPGXY5GYUVmDQPX5PxDk7hYmdNYDwA4koXmxaPXdBDmRQdpzNmAjsL",
  "key34": "3QroxfHsqq5XipHBDeNbU6JtAsfA6sySDg1EVAEtU6pjRt4Co7P1n2xy9LYog74znwrddwE7JqCmdDk7WEk7eBXu",
  "key35": "2Mmd3pHfM4HRZHXs5ZT3G28abajqkJ8h8qtmkuMNxTAdqgLQ881UroWgNXBfhNMB8MW9fGa84uaXJgFAwn5gxe3y",
  "key36": "4yB5PPzpLQ7ZHVeiVf89Ez5ch9FjEzG8P2xhfAZnK5B9V3pBsVRE4dc7b6dwq26EPPryy45JVwx9iE6TYc8CeUpK",
  "key37": "3mcYucFYyCeVHo8HbgP9kujUmiv1EAyxv96uet8E7PDMffxizpP1LdSJtEVmUwGLJQDscf8JnvtBtXtZxLFCT8Yc",
  "key38": "64oumSRcMLvSpCN3iRNu65Bz8nHAWPS843NPqYq6Z39imecC2phmopRerx7zdksjuiq2MLFs4J7C5mt7j5mibTjT",
  "key39": "4g5B7jHbTz8CwqgXWin2Jc3SFJcDZxyGkymBoWLa5cJM4fNwAby1wx2vasx4io2zizATLpkUZumuGMjz4K7iGHKk",
  "key40": "35zAfaC17hzThmCYygrdKaCLAVwvSpgxG9E3w5mZV1LXgK3277cs2UbnHVCHCbpbSfGLMWzphGJjiwqnUfF9Aio",
  "key41": "3maHCTMsNC85UefYYeZD89XHafm7ieGGF1u7STkFZfw6cbHh3djr8jrNNEEHHAzN1YV45efmqZgicJ2Ep4PPBLPp",
  "key42": "5tMrgJiGh8p7csveuDDpmGKvz6BYwcesR29fZG9HqLBdyJgFN2wNBLGDrEkLS1LoVSqN4mTPqSEKgHUaJbae2TmN",
  "key43": "tjU3A8tbH48UmT6hvxgJDAPfSgLaxzCGa7qaXkGpskZozETfztzJeWJiHcDeKjmsQXkmqZDTbnbpVYWJV3n1UCm",
  "key44": "3jRK6YcSdLeYCetf23Kf1YkH29wn9Lcz3GotaRAhVe66Cgg9KDqy1HVKaGfpHQwjxntaKYpHjrS2GU8RX51x9f6T",
  "key45": "ZPFUEAD8WcrNg3gwQvpuVD2wZU39eLaGVrsxWA3uS3vfHrXJuW1oE56pjBrzmVv6fEmgm1guHVDHzvK8tvbLHQj",
  "key46": "LDFFbZ2cbpk7Gy7immB2NXoWBKUx9nPTkMqq41dkpJACk1GS4YT5qwscEQ9HBzMYNm7Sz4zuxj1zPWPBLBpVCqm",
  "key47": "3ReS1nsA1f4vUD4JpFy2mCEMQ2ZhkCAJUQTJRNoXBcmawL2sEwbTTPaTc94b2QJ1W38qJaFCjwMZkJn8a37n9pFS",
  "key48": "4vfxr2TitAjGSAn4yPYaqRCMYJHUvT32xHK8M24wBL7a6hVFzmVmmVRihRy42buVghjitx7rYQE86yaEYGTVfBwW"
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
