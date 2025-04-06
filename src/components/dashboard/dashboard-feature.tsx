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
    "3zrJweLWJ76UR3jF7UK9JUGFnRkwTinj8HcYY2bXctQr4KkqUG2fQiadGPfxRxwiuprkDjp5mGJPWWEoMCcYz2NL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djXH6c6R6T3v5HjijerE2VWG6AtJhXeYircDd2R4SSzvQQ8KF37D6DxWFz1VLRuJ9dRuSTdzP5JZ6peDpP1YhqK",
  "key1": "4KpxKRa8nRNdE2v1FZU9AcNvVya3Gp5SoSMv3p699iiHuJHkjUdMKhBPZ9XcoueQLKchfwWhaniNGJWA4TPfdpvZ",
  "key2": "2GGm7D8sJ6hwpTpGx76X5xbNL8rU5MHYpzz6CuuXef4hHePmkYbmvA9VkhTmffspys6XDYWDL3vDgHyXYwvY7C26",
  "key3": "5oRUJmb7BxL8PuFxh6Y5WWeL8MydYUGFySRByLCFEVyD1kg8K5pQDTeFJYiq27VtSYVYiTGCEZYuQK2PNofFk1Qv",
  "key4": "613PYwtBYSzdaHPtiSVcf7QXmTzK6WRXNtbVw8wRUb2frDGubpzk8t2RhQrPruUrDfyvKUY65KuUyz4mxsx8nvj7",
  "key5": "5sisHBgxn6BBZme1Z5uZk96JhjPwMx714LxaijNy9392L1fM1KQhBzjmESvxZvJjDAV7rYf4NxmuaenzfEfp6o3L",
  "key6": "4A2HMupniZU2cP3fw2C1cXDewu1ud6WdJs7E7BtVH51yS6VPygZ4DsXqrn54QsnVpb6zk4zo2Qort2cJoEfss9PD",
  "key7": "V4JVR1NYNng3ueCDhjvrFyXVW9C994wqUWkyW9YuU9JoPg2JbDEx5naAwM8yh7GnQNW6taqBbEBPeg3VJqAtoRm",
  "key8": "zvf5NRpkq39r8sNJCkyWzNstfQive7EpW19pfpGXj1m87Pk4KpoT3CgBRefYQSxhmB1W1tLNv3RFh1TRNydnkjE",
  "key9": "5rMkP91bY7AK2h75FXtXUUNNdNWcnxFFkBJhDmy9zHCs7GRA7nNoPXcUdHipRg3tqRuLAKu5zixqutBHBhhNU5AC",
  "key10": "43zUZxG3dD6Ljp87fokDYwmDfyiD8FgySmraQ2U6PvTrAPAUY4ab1wnh8znffTUPmqMyuaowvERdS1gVCDRwrjMF",
  "key11": "4fhfWwJdKtNdihrMuKs3UWjwzz749Cd6aW7fNP6sXKeVDmeKFvbnC2CUb5vnX9qu9tKet6SGtN6YoWqz4J34322A",
  "key12": "3A2H8mYu6wzMXquqWiiaU9UoTe3JtXFgQEqEeJoUxiF32uCtobkUgxCPjq83EvhMY1D6VeVFX4YdyLbwPCZsGBQA",
  "key13": "GoG1ffoSS87t5qxvXsm6hRo1fdMUA6Q5EFczgKFaWZEegG1yidsoNoTEwV91qzh841UJH8nuHygwhcRjbPvmRkQ",
  "key14": "R4skJo7YDEJ8EyEdX2WLFRUnQqon6Du3TiYjL7bZ3eEHveLsS4Pk9UNDMvyLPpwVPYFb8xKqJqCgjo1MkeWKMzi",
  "key15": "3qcm2VULd2qKZCR4qXwggP3dEsGaus2u9AJA9DtQSGWPYuXcUNcmNoQ7YCXz8wzSTgm1PaUwnEytFtWaGQgp8oFF",
  "key16": "e69tn55zQ2Ua1PFReuUPfmRk4KxeEd1WzjL1HMvFvmmWyPpmrKKLkDmca5CLFJ5h129xfbFVx8oJZVmGYfXRbtL",
  "key17": "2CZi5wx4CpcmxPe4SZ7qsdTrJJtMyTqbwKB28nb94rpcTmvrMhdrBnYjtnSaDwetiAeQfgbYh6KvopcbbYt8eDGs",
  "key18": "osArAZfpbYjJvBXVJqfz7CapnBsmWQCtX1Vs2y7ss8oUx68XidCSNVQ4vCpKeYMsaVgkLHwAw1y4Q9S4PQgv8cZ",
  "key19": "3kJHYxRf1mCTzRCHtsxoGwQuqaCb3zE8NuwmyjsPdtry6AwENvuFNZixJJc4BHD32FeETAXJkdY1NrptnHu4zoB4",
  "key20": "4wCydDPnrLWsBmWLTY23vvsCu29CppcVtLF7pZARUH5bLGn8b3jsXoeTFhDoyhDMwhydjDfPaPwZo5GnYiquTCeC",
  "key21": "4GhizUTqGAbNXeYFz4cnrPwFZMhZnfBso5vNhhuhEN9kHFfL6oYmkyjU2G8iopm2SPMeuhNuBi8Psuumxav14bkY",
  "key22": "2JKgPuFTTkf9DJDxzGXngdfaLx3HZa1cWvLqB1x2FTg541aYPmkoagknv9ayT6ZBcTYWfZ3a5y71XoWPnHiL2zt5",
  "key23": "4C5M8GLqAnMpw4u5EbNJXrHogPzwL8qW9nUdLaXSqkoq8MXxrcuN2ox2jNX36raGJy7wHiCo8yqQESoMwxnEPyzX",
  "key24": "2NuEiR3E9CFDFywttUJxeo4dVWhdNvv2okrt8XYgM14hnXX3UJYf22NbFkE1UvkyewRF3pZrVhsLNQDAHATJXEKJ",
  "key25": "47boUjQhk8ZYTGVzdNqm27yk2ToVFEi3b9854LbzLXbeuSaueVMaJGqtfhyWrJLfortujx492nm6qopQxwhtZNAL",
  "key26": "3FdfGNdwgfuY64XCQRf59wjdUE3ciLdgCJUS1efmj2zYEVCA576RT77StMiSv7sVeGADysnWNZbKtvYnUso7voJA",
  "key27": "3kZ1c3iUyAkMtGwZrpmUTw7Gc13Jtnc3aLm1GHHmisQHm6mPn5rzaGmHLUvbmBoVwDY3MmzduzM5nEtzbtwg84Yd",
  "key28": "2ZW6LDWieP8Tpk5sTRVocmq47WqKSSH298D2Aj5qXvoR53YLJ7pxi4fNcwMzFC36pXVQYTn2JmnwiqN7MrDfXyhT",
  "key29": "545myzVxLbSJiyMgnViocScSsXqykuAnM84UV1yCFBWPcWGKPnCnxGwTa5sW4JDXwAnVDyL81KDonbUK3RjnbuAe",
  "key30": "3HJ2DquFKwgCSDKRB5bX2WN6EcZXbV84MmmEnZG2YAh3XeNbGdNsxG3D9vPNMR4ESqqLCGncErjLodQvbaLzWVZX",
  "key31": "LDjhF84vSYMtZd3mLuCt9VxNw9rNA4t3tr3Qo8wrj7xnPhiJU6hjF2bStaRFp1PpcnBWVybsLbzLxWD53busEwX",
  "key32": "fjkG5bU7iXqR3n7Bzu8zv46qZLoa5yNR3NaCcX3YSdBbxjEpkMqLnmoc2CXwjDd4YwiceKpi9Tp6iZtzgqv4HFC",
  "key33": "24nW1MFK55bV327gvqJkeoH4vTcJUueZ1CHbtaUD41ggYAr9dNWxThbTyvcF7qzxPLBngZVuab39DB9ShATEMXaW",
  "key34": "59XEYm1uedjGCZeUV8DmCN2r1GM4CrfnLyug6qhHxfQNTe8Bm7657ziNArtdSh4ybJxGBdeS1jubYXUKjDW2C9ij",
  "key35": "562jE9eZ4tYVaG94JqBLH3jorAJf3M5R4gcuwoSJffZHxYQXGD7hTSdfcRPYrJ9FfBU3x2tyKogDiE5gHVP3Xo9e",
  "key36": "3f2yTragbFpcsdKoaHS12DVKio9QJhqRY78CXkqDWVSHwG4Z1yqgasCYxxNeb2L1brWLGYcqa7b1SZuwCFn5KWLZ",
  "key37": "2RgorwQrtNuDrFULBbEUrBrsuNwHmUZKggNspWmB8mcRmeaZCD1BvUkCufoWivYc9ATXrbhUdFtoQgE2ARMBXb25",
  "key38": "Pi69t7tqgNkwNZwVrrBcyaW7UBSSSbFTyKCD21y1osZcutX3Sd2kPbSeGe6FbtCRYq58KCeUrShJuuKZHW5mMiv",
  "key39": "2Rp35YJTRfCnUTmkW2pxjdbZykKixucF8sv68QRqopcMBXYx5sZLnwtiaMSxFAvCkTDY28QHDepPvh9b4GnytWZN",
  "key40": "5MNrdkWEEyrtUaevAFqm62317CLrASQqYsVMpK52rV27fZ4Yh3WwfyhQzrNvAon6aV7FwrpEwNJEYGp9DEmobhKn",
  "key41": "4ZYnDt9PbxrsSNu5yojpeJBaGnKHFZHd44e32fyGG3BkJjx75dNt6bRM5UkvN7KpTkWiczZVy3wNXMJ4AumrgbaE",
  "key42": "3kWGqedn2VrJheAENu1xmzxems4EVaiJadvfLVGzXDFcUGN4BAcf7jgzDMq74ahtkdDgQEzTAUG3b4RfdWi4KVHt",
  "key43": "4NNaCNnLXJmFsrz68irCdFJdTerEPemKYniK34ur6uduzEeFf9Yhv7wB8SUGL4SDsVTxVasDfM3rPnbN7eRY8sVg",
  "key44": "MkDQh9y8dUEfzmJREMreevjqS4nCoebftkriszAwp5VKg5P9umRf36Za9tLpHXkGmF4RFxhJEBShkBKU2k7EhQG",
  "key45": "5UrU8ucZtn2KADEyuvm644Pv3XCAWSDMCur6u3k5FWqJvawqk9pbafixGKBny4FUHqWbiQCts55JYTQtTcaFRRci"
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
