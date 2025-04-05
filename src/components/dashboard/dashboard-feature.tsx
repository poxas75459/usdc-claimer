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
    "49NtuFtsjHhu6NUhqG81Javq61PD9AfCnZbmRWXKJWn7xGo3TVts24Aqd7nmeZPoT89EtqoF7aXZBwt5B2JFtuwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jeUcSZyxvbJ2BYekxgjp5DoJKadZq8AJtkSULASfCah5wXj59JuPntwQ8WYK4vdnu2YGGeYRv4UDgG2ShaW8Fdk",
  "key1": "2N5JMWTLqwtkWvbMY3aapRMnq2gxzium4YoBCu3zs8HcEe81QQFS7zn7nmSB3pBTyXDPjw4sjZTFQyUnq8qi4bmB",
  "key2": "4LZd4PnkcSD4KVMR8QwH3c8fz1aRGtpk7cbGtd949mxzH4NQf46Ks6TyzQA7USp7yKRS5F6k12bMUzsuWFbFx5bK",
  "key3": "41kvgpLmoGnPzBAdSWux66mWFcoCuCiHvURD5sLpSVa64WkcLQbVw1RzBLAgDNyWcN7E1Cj1watHRxZbkarnfkSW",
  "key4": "5bjDqgGmGmwz5Fb4MmxMSb2ewpbuqsA9zg6fmiv4B2Td7XEYYG4zNLtouA6C4D1oiYA5QbwYbxMeTYyRyfKhmzTB",
  "key5": "2fg71eMuZEGPjtVmrvcvu9bdRgHWaebpNSDmYXDdJ6a5MuuGJCC2kGp4WyYZfSFH93yJP9PwuyN5o6LvzhQHGXZV",
  "key6": "2p3KiXU1jCQXPUUFHrpSxCeWrG6nRySr1MmU8LhoMsCXiP5apRRKTx6WkbcWPUtyrj8sScXWJHFwvA353WNNzGBd",
  "key7": "2tFp7sDMkCfYDQHYtLu3cQ3gubxzCn1yyMrkSNHxnN47WFa7cGA589Pa9JBjKqZPqsPGCicZviVz6xNrRw7PuHqP",
  "key8": "5XKwgo4EaKPXyFzVqBNBCdjvHhCaHbgkWCbm5VpyWXGLVQc6HqYghp2gkYhenuYRUee5GUstyp6wx5fcJHsdWniw",
  "key9": "y84Kpf3Po7WRyTaztL7HydJyeKnP4f4JAXJ97XoiQCyhTpcEJoqAVeqX1pCAYpN1KVuCbBBxvHCgE7A4hE6sKZB",
  "key10": "3VDEsv6it9qZzHT1cTdL4kBgcarh5E1rPEn6EW1jSzkrfcGmnWbZm6qmtKYzBBkQz3TbJ6VA2MJTpQdEPCGGHMQ",
  "key11": "f5Kiqj7EfBM51KHUCM3BdN5bx56rW8TwQYg7Dt8a67FZNHWvo98m68BV5hX8hedPKW47ipX83jmpmUr46rri33u",
  "key12": "2vv82FshNpDUeQr1ySzMG7rmgYKoNTMzT9jeG9DtDjRMrAHhefJ7AfJesuebHpiQCMFrcKCqugy3VgCWpeZKPdTD",
  "key13": "64VCNT8LKvxmiNTJQJMtikJxsAuZJNfNCaNVRiPxNWKDybGj2oA3RDboSx7MRQuCyiygQKd9iQY89q3Us9En9Z6x",
  "key14": "2K39cfnkGw72h3hXtUrKAPqPqYoxtYwVYUmuP8JwuQS6iCAGtCUbdwYiGrGyRcXZiDUiJsqJNKsNdbdPTZdf8zuY",
  "key15": "2iuzT9d3dhE8Ex36DfwKQPcyRLGnMQPYd3MtnQ72hHH14p63Vz6MeFYet3WF3odKzKDFtyY3ktTgJbSeGuQjzoAz",
  "key16": "9rxjLUYwp8223LQsQUxhfPuxiBmm3eiNmGyYUjtktcT2FbneyiT7XGivzPe3XQpyPLRK7rsLbM7QzyGZmK8EEqV",
  "key17": "5iTakmLcW2bNUyBjtdfJS6dEhB9iAoSDVdWWS7rbHTCAjyjuREBa3RZi8sSYiPNenodZ5Uq5EogX6ZF4fi6wqtCa",
  "key18": "zHUQDTJrWGq4DxAxafiXgEBWbuaxv2C3JNE7ntA5q8nRUsVXSvKmyKSVHy72mYBcz7EF4KMwHGc4Yh4Mqhgt82M",
  "key19": "43JkobSjRFe8vK4bjWTdWHjZbzub4pyk9Ajoe6hgFF7kGJaNbHPZeeL5YHPnP8MxBHWnmrodwKwd7Ex4AGyCU8Yk",
  "key20": "9AuhwYpHAmxFVzLTzhs7g7xkSUYoafsUoHrEnG1oZFH7kaJ5UNstuJ2TMNTNmJZjTr73WYHFUdrc6M6SpX1c8r5",
  "key21": "w9pKbHzXZMFUHaCJL6Sj12JgTo7xdCi77xGhf7XDTGiCcWrfrfDNN2ekBaQaGWKzbQhHGbPQRSvHodaGd5tY8Mo",
  "key22": "yzTfJ7UD4rqLoVmSYWnob3p2pEqaHWMQc8cw2YzHGXf41foPNMvVzCunWo3NZRUvSfvSdf5jDfUtQimsBraM2vL",
  "key23": "2wcqHgL6FfRvq6DsKW9SMAp1Luf85PZMz7weFS5xhnxcaeot3cXog66qLWYAFcnxrHJMzUFr7YTXsV7okoi1JbW8",
  "key24": "nMXQ1LorXxeLJJi3y9sqYXWUZMc66GwDD94xJQHoszBANQXqxW4zBzTqTo9iBoCxZ79uyGHUYibBVu1AticUvCC",
  "key25": "4adRPtZsVwqb5d3ghLuE1pF553VWMXf7MJ2KSnUDnzjioJZdrdiweeD7PRZtyZ51QVPCb66FMEyH3ka6uWJAUKqj",
  "key26": "2BaQnKuvfRD7Nkx5AvPqKMqsnxFZdRSFQ6N8zLTJV9DufF88BDaC2MJ5b6oHVohdrYjx7bYLdtyMpT6soVE9setG",
  "key27": "GDyFaA1P8zjL5KoS1wXKh2q2SMyoPwj3KFQCPiX5RVHnbg8CWs6upKWe43woiKU7AZwoGrE5fTJptespc5Rc5Jo",
  "key28": "hagGQajk5oHrrR6TvuPBMXqvydXY8nnBaLighJQ7FCDrkdw4hfkMMYqCg6JFVjGHCjGMpUkANaN1SFokpFwzkVo",
  "key29": "ScRkZ9wdwUvJuai2q3Y9TinmnRbwj97b6KR5LdnmbZUXXrSYoT5Ro7kiNczAiuQMnsMB2ZCDA7aGcc8DRrekEKi",
  "key30": "55uKibbWFJKrBS2FAHytVAmFivM48ikNWXPUAZeSugUU8icHQTnimmRUdJBprCo2zG6wvUvxmwG6UFb5AHiH4hkV",
  "key31": "ku6RKfVyF1b6xkv4Zs13ZtKU5MVjttYu3oYKAETZoWzMbF8r3WqqzfHGb4eM59VuxZKtSCU9t3h9pSKv8N9Xv9n",
  "key32": "2hRHgyurWMjctbKmBnorE93YPKMc2yphpXkFnrCK4KM2vL1sVpwm2NYRkEjxUC8tG4exo2FeK5E4EhoUVvEginwG",
  "key33": "9on7w6cQR1wZWSLoiHXYD2bPjBPouBUxABn4wJXNZECqZYc5tanCR4frFhBUixr7jyz9FVYj1xUKkpEPF411Mnz",
  "key34": "cZse3MrS6uby5EHpxnLdGRXdvvjJmyxRLu9gKswFgThcWYEtBC4Z76hLaZD7d7V2MWkTWxLQcMjS5nKhfoBaJ5S",
  "key35": "55niWxAnZzuXGMYSqnGQLwsG8A7UcUKUnwS6NyqFWdqwmqiPro9BXRMWTrfH1XMzjgS7VmKqJpQN7vUsPPd26WPV",
  "key36": "4Hqw3APQ11SEHHDiRgQxeoccxhoQ6Jg3CqgckKzFjSq9WGyS8kXpXN7qddQ428JwKWZipGuwi8JtUCuzwm9Ed5MD",
  "key37": "51ttgoPE8hvMoJZnbeyZmZjvqoorPYsVUykTvCY3WXX7kgSv7WEgZSwzQd8B6Ed2swVT3PX5Usja4RNpojsLNNPz",
  "key38": "ehTvK8EacMtpF7Xe8fdNy3KrbrRVmeZsMvbEpu1rhzD7BC8ZejHxzXcavcxZuMUCWRvwYgay4oyAZUgFPEp2a4M"
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
