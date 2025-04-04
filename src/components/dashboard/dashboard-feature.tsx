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
    "42Ya4tovWjtzCZMq32pe9zqLdh33cnJeCZsqWVvjdaCDmw6LzeMxQc6XuTnj2x5KeqrJn1ETGDQ5ZHF94HGT5YFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GUQaNqkNK5xWidHV7MkUixU9UvHeCLi5vW7RYc6WCeRaq7MGAL5nCRnUiRqfmBtQA8qE24RuQVs2vu3jux6y9Ns",
  "key1": "2nvyd3FAfAa58afDKbA1U8pNW1HFKCJsmAek6Qkn2YXFV8gZDqFZPZQVM4bhR7rxb1GxFNHtv8V8QRLhXPxWd6aW",
  "key2": "5fnMxU1hsRrcMcb3fwea2AJmzMr5TPmkDTk4izFGH3YobmPdeDTfuz1Gtstbf72AA65RXtnUTSx16qAaG2zJYoL9",
  "key3": "2zkAPDqoep25qDvwtBdVrEZooV6phxpAq5H5hhs8kCJMRmphP6jsHNjZ769X5vxmufHwERjb91kSwBaN7nHeP6hA",
  "key4": "3xUxLQ9xzcskhj2T1VC9UUBJNEA2nDCuS68AJvZYUb87M7eN2bfcSLo5quyY5tibYBXsTV5JFRB9insYP1af1Rex",
  "key5": "2ChNYDFKQRnTtKH95ENMwGTPdM1NkAzbVYqZjq6iXtEdYZMFV6RdH31fWurLgofjREfbNshVH9skmJsTiv3jJy2g",
  "key6": "3tT8MwMj3rek3qe8M9hZRk1TRDEMYVr2SGZJjxcxCoo9vMMaAPgNnzZ3Jp4HcexFQjeb5M39KzL2CdF1wDqJTTGY",
  "key7": "383yuzdy3ipgKZkKR7TWk3hHHKVfXRaysFrhvhPgZV8nJrmJ6YNyRv1tzEoSzPgbGWQ6N71HDYgeQBCSrUNYJNz9",
  "key8": "5y6bXGvVbLKaP8RS8cuAgittjWKDQg3zrEHu7raEg5s1cnXwJCdsuw1ksbdAzzMYmo727XVHWLvchQNZkhi1xVny",
  "key9": "QofQpbMeLv8oLJX4Co6BYA2QvkCLMY4Yd7Lv8S71Rdw2LTLYVikZmM1QJUVZBG9D6jnw3sqhZBkghyeXVQARbfT",
  "key10": "A7FNiBG5kRoUN4YMp35eFArTRdzupwzz2TkkgjZy9VkZgHbQJqbAHhuZxPQhVSg42WVAnvsXJhTxM3rxK4Ha68C",
  "key11": "3MZjFYHUtj4DDfAcDjYL4asSdtAYgFq37eemSiU4E6ped7gsXVwQssS1PvoBftZm9sgzjw7SpxhVBqitV2LWQSNu",
  "key12": "5Vg5XwQVjmNZ83VpetULr6Nb5f56wWcJ2SVpUzDJDwLvmSMcMbQ2ZSxDuHboBN5ugTZqit1NYiCxmXehi9KkiNPQ",
  "key13": "3NNcC4p6193u34SVxRvPe5rUFLuf22pCaAptJT6LSGH6ReZWQdr5wS5VrjUXbBoggAJRCryGc8aMBAxS6veTCDLx",
  "key14": "3qzijSneVu8G3wxngAQBRsz8BbNZKVHpEFDcQutzjz4DSYj9YSY2vWhGqotw2uMRcJEVgDBUR4prtTX1kt2joRU4",
  "key15": "b3rQQy5XUSXotmXJm6sy9Ug4m4hHx1rBqSsh9gDJpyvTidt3iCCAjb2uQyFmPx6XG8jNc6ENy5cP1N3WLA9qB6J",
  "key16": "mVN5jZ1gTufaGjGirZa987aAMwthpNsGpDfmaagrXhh5tVdqMwJrySrgrWcbk1ANVZYMD3f3hVksfHwixsRdgve",
  "key17": "j8Ehcha8Rfdp5zY3cFwHmBc7kQ6utSpe2FESmd2bTpYtwS9aa7yGKWHmbR7RRUy1t5MFWTS9ocLze2C8QbuAmS6",
  "key18": "5j7DQ9odmDv8GecYPFH6ReMXWjwxJTcaguuf8EPnjUZwgAV6Wbtkrum54Laf4YS4HQZzVsRTkTY8bZMQ7DzR1gni",
  "key19": "4XqEYDqk3TaBfcWkPUb5ubWz7HPRvdLaCkGE1v8RXnGKws9NXx2KsgSLXjNTe9YYhgPW9dd3DYJepx1Rz6hgBpJb",
  "key20": "29hjZqYrWf6RUBpymvdoVnXjNoEK62otCqYHWXVe9rrFNW87KdwogMpMfFetViLKJuECE7EdZrBXpUb94xLW4vUc",
  "key21": "2YR27MkmATtWPaHKT6fbdf5LbvDwjx6NXZkBBvQYWvthfh3EusytkCTfTzYy5bJMKeUnwbgWvppVbqky85b68HrU",
  "key22": "5mWUygZd5vJpgavDmaGvDCimcwEH28y6YtTgKTgLwowvrjYGV4Uj4bWbS1Ph3gGk9zj6iBctmAefyaUhwitKHqCY",
  "key23": "5L4uyGFGA7kQTEYtmuHdx3gZs497Unftd2C8sUbhwSKN6CMAwuAek9gGM6ELNHZTutmtEHevRwfxghFGYS9GCLy7",
  "key24": "5LzqM35beFiKP1W6HPeeuAqVCpDEQe7MUXrG4LfbPM5QFRUcU7r7PNPRne51xheuYchWq3rc9fJqdPebFUHc81bX",
  "key25": "2nPbKuab8MXzP2i3LFvjUXoQ6mLttWSTWEaKscZZSeThMtYdq8nHjeTz8ZFH435qGgpeVf78kXyphY4RmGSKCwhJ",
  "key26": "2Mekzx3Yctd6YQPHxUVfphahtHNSJU7VXyTnnKJjFCUHkjjS1zhp3LAAuEHLpTVXPW7KmTS7S5Jchyk694PV7CJA",
  "key27": "29jJ7nWPUUoEYA8ab6UYseBTPF7Uo6xFUnAQxNwRNLtYft53gZv1tnCGETNzGjkqMS85UVxA77y2WrkGjh7uFX8X",
  "key28": "5azus4F5NmFaU5rR5t1BWjrCfeWCbHAV5K8m2nZLxX24mFoqH7fjWFnyCx1SkmZsPx8HQqg33R7q3L4PqAMzmYmt",
  "key29": "3KLX6tCpS5HL8LEGS7yLKrCL8CarQsPxi4L7LcTwVaqTf81bm5oKjMrtcFYxMkSiDDE5i7jpcztV3B4iusuMXV8P",
  "key30": "eR8bZQYp2DFwCS9Fjhd4qa585MEhSFiUNExyok78HfSjmGtEVjdzS81ez5qbvqpZjerXDLtsV3mhTmkzTmwXg8p",
  "key31": "2o4HvPAPniWPM5DvpG8L79Pn8C15WxVZjvckRoDVgzTAF6fA2HmURReyJuf9UZRg1uKJcPhcDCj9hzySuF51mLxv",
  "key32": "4wLcrp1SsbW5q2UuMeyavDyFAtAKE3hnvrYKdimrBDAaaRkNKou12umJgxix9vYFCCGq4UcavTUAQMvjKsJ9Zrd3",
  "key33": "7XzPK9Z6MEJwua5rPV5xKHtTDd6GR373cPrYAWpGW11UyJohqAkKxsoCyBp9YSYX1cW1mJ3yeWR6o4szkuu1xTp",
  "key34": "3kahU7Td5v4U8DmNzDks9J7m7ErcuDa8kk1WHohfdSChcAoRjdXHfEy3iZY6LwHWd9DCCYf2XbKjyCcU254vAZJ5",
  "key35": "4E1zvmqMa6WmVJMUS48jmueJYcBANz3JQ8fFdRUtzbrLiz1fNNCk1imPS7y4kBDWMBfgQ7Vm31xUNNTY3YhhYu6Q",
  "key36": "4u1wHnE2NEHeEnHszTMWXzhGtg4Go7rPJ1nHLWaTxNDQE7FkwDsG4pLLCQyYZDmzNtY6oV7T16qPH5D1KKGMvgrb",
  "key37": "3sxEwz7T45XYihBXNahS7hmq8aDGjkUin8wmbyb55tuVM3ABYja6MAgGEyjaqDRNgELS8VTm9AsqURMVLgQcxvcJ",
  "key38": "43RMLJSeeUd2M9kQCyZ3QtYpMYbN9Dyc5gQ2qAjxfBEryAP4JeLBDAbsCc8vZWdFhbQ9sm2eFLWMbbVzGZB1Qomu",
  "key39": "4Mf2FnMjVcmkskx7Uq9ftS2JhEUiDXvSJHLitwRAyrGAjztSGRzoMtTtcC8QqnNc2me5SuX2XMe1pueLQdoRWwCd",
  "key40": "2P8s1V3rrUoDcUEE8JBN5XrF6EBD9NRxfVZ1LfDKU4J4mVoYDH5t4zpvHbTaydimwEeAzagzV4nNxCswXDEPqx4H",
  "key41": "29Ta3sDsKMgDMfpN4nSjmihQhbb9SoF6wn3ksU4BdVgjpjkw9PQC4rewjsGJg8eJEbHKtPqKf5FBwwQwXCaV1X51",
  "key42": "5Ed8NksLWFRyBGhefDCHRy344dqvhikC9MYs6GVgzpuFrnGJWbVHwR3nXr2Lhy6RiAsKWv7fYoKjgwn3sJTdDBcY",
  "key43": "5i3AwSuccUQfs6TYs88KMzMPepW8jFYNyjFi1sf9jbiauGCctG4SfrVyVjD4TJV7UXyiTdiEmy2AhRBweBjbF6j8",
  "key44": "jnfFvXaEp66qPpwZMdGxegWHpTos3gQVdFbNeEZEJdSNBKuSeEzxtMci4P4rXWAkjtqx5cm2okCRb4Ci5bR1CQF",
  "key45": "4QwXWaEzdQXtXbDsXHkW9juopS3Z6XM95YUMQtyaK8V7udEv32sDirssDpaRJCuS5rTAWkfWETXftyX4CuPTyhhD",
  "key46": "mDHTWxCyoweP1eisCHMujEUmHvZ8PEivDJeDmDgwt5HjQ4mevGyriDTnEFuPk3X7e9jTaWZF7H7fX3gWPriT2ED"
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
