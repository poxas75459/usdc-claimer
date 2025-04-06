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
    "2j3WNKbUCPCDvCoMw5Nhj6nrvLApxcZcYRLEgK5iMMrQ1nBn2acFGMbhhnrWWyUHHJxWNcsuMYXcW8u4xMnq7kv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eu3MGZeCvNGC3MitvmzA7vuhip7zfcQsxvRoi3DGZHeMy5vJJ74M7Ugmix1Nge56o6W7e9TgvaUG8U1YRTp2mgK",
  "key1": "4BjxMp2HAjwLQEytHpg9JHvan5jXdN8rnWMmCWBuVH2QHcKB9ZsSCjZQmEKPqwEcvkNxVCXPMphwwbnBGdAYvKNi",
  "key2": "yX58ihzQH7yBzDLXeAaLQcwUEMNVdXUkLdc6nXFf2yWkVWW9cs5XEBqo3eMLuFjfpd9yE3sZjhBB3FwoATpoTSA",
  "key3": "2mXjDSsFyYDxBV7f9in2435Cwc74DW38mCXycD7uW7PTsp4Z1HYLjggU8ztyBr8hY1kXQyeWyG6US4DPVuKVdhXB",
  "key4": "63DvWXiLmD4XodEQ3qxDrUC5amKcDLHb4XAoA7fjTJCzh1pMTY8TNuBpqTcKG9HugCnkRY3kcnM73xrpwAG9NaP5",
  "key5": "C4Q5nFFqxvj4Y2bGFCxHj5Jpe2JDwu26WtHSG7nFc5KNx2c24zjfUbHkY4uMTP2LqJfQjupy4ki96D82QBo9qYf",
  "key6": "2EXPrTppeXBoXvNoz3g5rDZ48bfixkXJF19SwoMPKwS9tdHgSG43kQUb6TQRVxT5ee3LUSkXc8TBfGqg1BwQEiCp",
  "key7": "3Erh5mmkbDdiFmBcLci5BmxHdMegKFSp8H2SRduCbzFnudLDdF1AxEz4Ahbg96giB6zikqPhHi6HGVVNfjv78y7V",
  "key8": "htbmP6JqvGrBpduqHkzkVc5JAzTu8Sq9hB8qb1y7hJKCYUYnPeJ6nnMVd1HeK689avryGLKEcwGaKAGUTdy4YZk",
  "key9": "4uzTy7FKBQT3QPDWAiR637g1hHA5WUczZ932sgrTTogMquqL4qu5kZDQGSPQ9btNTAkPc2qX3CqRgbvQtbttWxCM",
  "key10": "31h9t3y4SyGkMCADJyL8tJTAnPwCU2XMLL61gXT31QU4WuRRZoGmpjpsxX23chrCAKr2qmzbEWEo7D6ecrrD7uYa",
  "key11": "316Y7c7C8iuqDcb7JHyizHKoVV8mg1f5ddSaz5VSq3L6TH1wrKqc1gNNjiTAviVQaeMUxeUuEpDBkQFyyED22gaF",
  "key12": "4vMKtsNeupewABZjPXoSoZxLhQErrdRDTKis9m7yXJ5XFpQKi5dtW7HgyhKW2GdhQWNuVdfSLd5fkyCt2cWjpFyg",
  "key13": "5kR9VMgiHz4ZxWaAAZoPSmt2tbX1NQLjSB2njm38ZjoBkBDb8yYxF5XqvJ8TN7vX1wSi15YFN1jdBDU4x2HwspeW",
  "key14": "419twBJMKtULAagsC3pkFPwQ4ETYhYrbsGaBWF3RTb9mGKs4X1MqKWsDSsxHFXJpJ5WtCLgShCm3jzM2JMidvwV1",
  "key15": "5PRfdevoAgUwooTBvvf9shMWo6dCYS93Pt8jZoiXvnQ1sMiaTdd3w3cPoLDpuuhRyhaM78iVM7cNMHuzhvDQiRBG",
  "key16": "2QkvMbN9W4apv5PC1sfCKeLznBnDSsY9wnAAXeo8t8CT5jSQXdyEY7tAVfZ9E6P6EpXe9xYG4EnatFFbXpxeR63X",
  "key17": "4ueN1RVLuyvtFKVXFSRx3T3yzVLGvAvrZYmSjirsqsqkVBcHo5ZjW9pPiDuh75qdUDXjEjP1ULuRZHar2AeSBgCt",
  "key18": "3i434wBaUvic4KUkcwP4nbZmCppwL1Zh46dgymTXoAEVHh3xdQi2ASGvqav2Vz3wdrosXpfMHWWtwp3niC4RMjMM",
  "key19": "5Kp8AP3pPUMnKRKtrvP2JfqfanDy8yiB9jiqrFY19Dv6TcYLFmpqbAoPaSte4SpXKhKpGo1fW7p5uhbGiKBhdibZ",
  "key20": "498CpLqRxEZBNRkoCfGYhp4k3EP7oR41hG1myfWvzPMEM41J2kYSgx5t9PNQybK2RwsjUif1h5UWf6d9KY9MK9A7",
  "key21": "2kZawNFLpGENEfSTNWS4DMY4wyCRGGLq186JsyPfCFLWS5D1msRTJcRqGpATuHxn242f1ec7Hrt9QAx9Ecc9v7GW",
  "key22": "5Z73FXoR8vz7hKpSe21GmUwLwNbkSNihHbZbFyer7G6mbdseTvdSCJ8HHtTkw2HmzzqFsHQiu3XJ7eosYQwzd6U3",
  "key23": "JCBhqcSYtjUAZj63TdpgKcgmKLTuNABxzNMnkrnPwTdVEdNBf23QcV6oHMDaYD2qVA2YdzBRjvwG2iPbnG7Ao8A",
  "key24": "4hLxRQ27HV7kuLiK1QzSJYL1mvaWqP3bY2py2vKafMgGK22S8LedhKgmV1nfFj46UexyUq3B6cWEJa3mZsUNVWhj",
  "key25": "4EP5UvRY8uDkJrZBtY7tMG3kRqWCwwo9FWc9JGr5bjJciyTu7tNgcL6EsxPw62bCJPTuBbS7k4BnamXsPY6tR8Nj",
  "key26": "ipFsA7j31fR29pWmKPVoSUdiiLq3N8JzqcMFKSocrPiThGsivsL9SNnRPFVrbgnSTF5MQUdPagzDnnSbuWRkaBQ",
  "key27": "rDwayJL22iFUaZXK5Hxm769tvQ93ZvFUo1Ks2V2vCAQ5EDBtKBsZ1iGT69kTa6kNqgZNv1n4HLZ7vrc5o7geyYQ",
  "key28": "MQT2kLGzNZ3FJRBem5azK117pebzcWK4KQ5YFLgb6qSV4dnM3uviHX9TLAULY86BtBYkTxCM8T13xxE3ngVyNzd",
  "key29": "3rQruagNz6JCBvZ4AYGqsZuZXkJXsXdkc1LSi5mb8p9uM5rZP6JY3iEqXq1VUtYBmipMrMy4skBk79rsth2dH4r",
  "key30": "3ry2dedeDLvgzv8s79Ypc7Z5vXjR2utLmqRDMeBvenZ28vEAFuRW3BJkrwxM3TPk1AM6t4D4mfvMTHuzcokxM3pQ",
  "key31": "HBBjw9N6bh8ZgAnJ9jXUQZTwXa1Fr6V1avLzLjZey4eLp9ht7jKL5j6MizhXUeXzRNx35i2JR2baNuygZCcS64J",
  "key32": "38XT9o1pSHFg7L9aKnViea8uUP9MCfeQtnrvezboiLmcfRZrb1n8Hr6nnz8Pb4zD1v1K21jKiVrphBCj4fJnppwp",
  "key33": "64P4TXCcEY2CayaRxWW6SdQG8yV4EsmTWb8HDWEVFfAgwKFNqWngNJuBZ3Uymd82q2r3mL4zc1kyV3EPfczCjbrY",
  "key34": "S2Qr6dc7xfN7HRL9Z3xghRUNHqpb6bMvG99QM1KEqdueff5V4TzfntuRty6rW5wAEPkV8gesRGbUB5m3jYrMJxr",
  "key35": "41AKza2ipwFd3o8Y5qkH3vvJWBY6JEatvLK6mC9acADed6QKh6VPthJFkYzQ2FY8aLZeqbmt8CQ8ZpAUSedMmTG1",
  "key36": "5W7uATYZxZDHRh5imnGmpPx6jPg6WkYeML2dX53QdafYbrkTYgzAuWcGEivCfGrGHamFhx1weaREMSknu7X2ozZP",
  "key37": "yqwqNtcJgQrG7bPD45oEiNHuAKQyc5WqKBSw3zWmGCcjpM3enPc3bw7os4BzyKuNQhBTt4c561Nmf6hJHkzYG2t",
  "key38": "5vFeSHH7eg3MqSoWjGrC54m96d2WMfx7ccHxuHny3mi4ke5F1bURRCn2kmEqE162neevAqLFofYa3uTUgLMa3QMF",
  "key39": "3M23n7sYaochq9YZLzvFPLFpsrdswXJscH6NuZvoVongDLonPwxE2481uS8RYHqPANQRJYono9aXFw2sEZsXJV7u",
  "key40": "4gomK12MotnV7DekRC37cDtR6WCsZYNgeGJkxTVsZ2UTdc7ue2hoRRGwV2fHsh8fem8UMWFwi7A1pBdfHHmsfsbt",
  "key41": "5E5xxTs3zTSAtGYtq7FMrBX9N39GeqJcYVAFYA1vKKMq7m6XbqiuNCByW3FF1LEH3u9gTa34W9LsymVnLNNqLjqk"
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
