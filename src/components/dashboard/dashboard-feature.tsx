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
    "2b3tj5syBqZSM3nTsjTe2tGddbijgVyLkPeUdMUHqcPtMXmc2LJCPq3hjQPyuFdJ5yVeF75bhqbsswHGVo9hZJoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMMpbRymPW7mpSujXNNTuF8yqfyd4nFfK2g5sTpys32MWv4cUPBvadVHcjGvff1kJjks1xbtALckq9jvuKBX6kV",
  "key1": "v7RQ9PAqREbyoZ5QQQWuWrW54bKvbziz74cLwFLfmZGsDcEuVUDjRi5ikZ2npg4TENbsFwqL4ga5tRumnN8ucFz",
  "key2": "2RUNCtRiSmXHxTTntHVXagp3YvQvoNhGUxB6TFD2LtN8SHgHR1j9zM8Raff3KHnfK5mMnmJ1nkQhRfro5DNst4jc",
  "key3": "4UgsC6SvrreVW8S5tfCmYSXb4n9g6iWDDtd3X5PmfurUCP92zbbvrPDKWySWybkf613JWTkdLe4ukTZGxLQGQ5An",
  "key4": "277FQqpFUWK8f8bW5QWivNoX26xTWdheGYsR3tgZc9evGsYE9VZ25BhkbjpprQEezg5N3LGoc65CgKoBXJNMqw6y",
  "key5": "vH9XyvGcJG8jqVpDX9v9wieBQfQCvDkY2ovVuQrdCwiDXhiAQAABtxqumzM4LvVyhdZhdgsoupW9L9peEof7MtC",
  "key6": "5zXWDZ8fnGJoDnu27SbgS9KikTrzRnRDsPvvGLekkJfoFYmQvRa6oCJZG5zTLYTjPbAd6K7UGbEghFHAhT8m6Zk6",
  "key7": "2fdMkZqrJBDRnfT1Z8vos8gcBTeFtdDb81nuBE1n8qMe8oHPs9D2XhZTHXoVmjxEZBoA5nBW5efA2eYjNNwFeALk",
  "key8": "5qYx2SA4JyZmQMarou2utfEJBWeVScVDiWFwSuu8SFLepA7YwSvZ9LAdknMgDcVnSEdbGpgJMw7g9iBRoJetcJWt",
  "key9": "4W3njdRdhq18YxkpebAgLrSxCkx177cN7oN8FWvjUTJZZj5JcrfqSFCzoEkodduEf91DwNdDBQN6EDdKkjXrN3RW",
  "key10": "3iCiWPuhDVW4uhiUWEN8V5KUhGE4D3i1Gkpf58JzDdCotw3PKe5Lj4GhLLb4wxwTQMSgz4Lg6WmHzfVowBWuWSAC",
  "key11": "5vGCSnMUo4abJxj6Tj5E9F9mtJiWrVKt4AsKNXq5GiCRbbUaW9QFiHXETuh62He1epEGrueVz9qbNFRQEVcABqpY",
  "key12": "3ZvyZhjnfdZsyX5HSgCsjb6SHthcaY6pviUu7Q9Z41K8sdCd19HcPNDGsBpTdiVmxih59QxJxiSxsVsFibBvZYQ7",
  "key13": "58bfCBDHzpefGHfDTwbdFKMRAWAGZWJGfUivXdJG74zsTuoTacJKP7BXLskAG5r3uSrFgPKcKezmr3AW4qG9Sd3z",
  "key14": "3MBYMhyAowJCtTKswj1kjG3PhLt2jDARjNQauHHJ2CFx6MQn87Tk5H7knvvpgM6D6gYcBZLbCZw2vuTs9vTRZtpU",
  "key15": "f29csZ3su1ZzD7cszh3puqTSgtt8h55iRHdpBTqWjSw7akgBfHWQe2wnq8K4ETXcpNVpBgnx5QKKtLtoPMqbf7K",
  "key16": "9hvcbFaD3PwcXEMWPirwWwz4mirp7iaVrqWU1VNxJx9S2TXqpYoguyZ7NWnCo963vBbZs9iw2qyfe76Z1frT5Hp",
  "key17": "gtXomhsunXYxJ525uZGMA91VvU5rJdDdpnVbHrjUmasLwguAQjTLtTjWGxGu6DG4skYg8BrdpdjWFAyNeBuo7p8",
  "key18": "5DsNj8Htfz2fRjhXHTz3TWPNZ4nfuitczyCZmWKpXAsT1BDTeTQKjk8Wdi4A1d8NTYi6KrCNiWofFufSrGmpAkKR",
  "key19": "669WnxwdtMk423gs9pQ2eLFLnBkMGQAdPWUjiMNDnVNBAPQTjeB3LromQQ8zVYXvoNvdU6WusGgLHBJS87xachSc",
  "key20": "7ZY2ngqbCr32AMCQcyfaM4rabypZSuSGZqhpMcgzsY9pBarHsmgiZCA8GTKram8L9jYqqjfZZrzuZqrgpqpSWJk",
  "key21": "2Coa9EsBCvJN4W7g3LV3cqwdnZ2yvwVJ2wNBaNWjNHuq8fJ4vMzhyFx1Qn2FeoPt2SY4uWHUTaJsiQUozcHHAbhN",
  "key22": "W9WoztbbFxjYbGRmpFhPYN73AWdH7rzixkQAJGg4HfAcEAZc9UKaJTHk7yGGAuRV5kKY7UUeeFJRP3ZEMxTRtBV",
  "key23": "52NmV69aVYTdgL1GTjQKdFUf1afAbV7bUo1TTNEnRGMYQGJGTkcUyYnVUGTTGjCWb3Q61fcKGj1UfdS7t73xDjvW",
  "key24": "52XDC5VXoDcHmG8kdWQfsB6Us1m4ZqgPWp6LYSc8hrTSYDuikjWMZS4HmP8R7rxZWoHkTkJvMyUhkPcHwLQ8jbEK",
  "key25": "2cki1yzo3AAcp6cGjvCj9BWgzvUnhFqRDqPVXi38BoietkLGkzDx3x33oB2mCTxVk1QqZEwQh34AwayXMy9Y1yaz",
  "key26": "2U5997zGcmfojLTJcQdEVSjiX5XbQWeupsPAVjC7nUeLc7FYwgin3kHZkXyQnMCw2ktqXRcMyjaY7bgHRWXSwgyd",
  "key27": "2TaCoJyFrZj2ZS1nU3d43sxguyPfFaRMrDbHyoc3UjsMN6frJ3LUpWjVCw3niGinm9zCCwYmQ5wDBAdTGQLHJV4C",
  "key28": "3YqaKyX1iMiH7f1RYeQTE6QaRgZNRH55kmozQpuMwKku8V2mryTUJfwHaCSZTAbbGXnLyySQsCCe9gz7894Lwrbn",
  "key29": "4Nqz13VcGGCtYWr1evrRc7wxLWfoKGX2DUDAczoShmQmJjayBKVHQbbALY3j5ZQs13tgMEq4CuWauKZTK9X3cSEP",
  "key30": "3XJ6RXbxTZJdQR8Cv9JeWU18iZsAZYPm4hTE2BbTvvBrnbXXZgcLVJj8w1HMw3Fz8kq8CAG1hC3REkxwyL7yK9VZ",
  "key31": "NEfTUCqQSnTtoihNMTHYf8goAr7hCv5j1Na9rY8dDGB8SX5zZrAKE3kQrRS7u4aiJLJEKKwGGL7NmCPDxvhsFb4",
  "key32": "3oh9TKg2me7cMPPLSAQumCa9zdbHwCwL2P1RTiJxNoeXyghTQKCgXPz5ym3CNgtJ3et4BE3QEfbxbmHV7FaCfD5J",
  "key33": "3MaZAUNsYhamQeeMfCaCKBfFU7eNEgXZQA6n1uirtJ4m1TqVUceTLQ5N25Bs1JpLvaYSLsunbPwnAzgff6hA1QBi",
  "key34": "4XywAzMieK1NUoeiod7in1mMkwwFFsdqr2xWJsxykNXwEz1Xyt4wH73JRUNN5WA9fXmpzMovs8cmpd9ESumXGp4g",
  "key35": "26SXNvHVyu2aTazKq32ciVZBkAtdS8QYQSRsudGTim42kcsX844yRPUQMzBR35U2jCmUV3RpCMpHvFeGdrLusvad",
  "key36": "2p6sfr7wZ6SsJSqYY6UkyVM4xDE4ak8zX4UNojAssXDc9Q1xnBKyFVyN6VcbsjnAhttFJbWwKpHz82qg868P8cKR",
  "key37": "3ufbHrou5ALZUHMHQNfufKcF9eEY49RnLz4AVm4paz2ivdQ4WcYZuUT93xjcZViYX2Sh4wcxViTHcaBNNvT1WYoF",
  "key38": "4jwSPLBf6fqsByQfKmNo72yQ3FXJb7NMAFXN5utj28JAHPYChhJEz1rWWSpEkZkBKZufoffZ7swP6jjgQjDSCYbb",
  "key39": "4qg5PLxLvPCCSe2VVwnbbkUTzXQJLWV1pVhAAZGrZVxVqohPZyutiVTTuRmF6AdRdsynjjyYjMdSnfdYUAUwRwm3",
  "key40": "vkxXzY11Hp8wkBX5YHLr5Z7kfgkN4yZhv5coLXo7AGpo3KDWyNCkWLrxGXUcN4Q2qX2jpp6nhBnihL6tS9zHoQS",
  "key41": "g5CqBbkU46sfm8WnATV7kkWEUJeFoQ3qY4qivvG542GxJZZZPpsAcbceGrXeNcYnf8qR5fkt4yaxTKYsb6xejqk",
  "key42": "258TUnqu8va5e25egPB37rR6DMH82j6v8SFMqSfuxkUnucwd5ib1ZbexCQm4Rzx7wG6FhGzfZBBUHzF2sBBBrvjU"
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
