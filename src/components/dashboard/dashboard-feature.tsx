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
    "3bpS7vJ7i91U75DiRv1StzHSPsPUyqsm3dgj4vp6L6GZ6FoYXM7bA3HD7vbHs25NipMBpLSctEiTF8xRBCyiY7kU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z31ePPSPssMTLGE7uTM5ebz1FwvZJeoU5fR7JuTQjfguH2ZjPBm6WfQS8W43Bro7ruYXXm4b1erMTzjgnKEtJZM",
  "key1": "2TMNTjLF7PXiaP9qFDFG1m9t67yL4n51RWyB6Jde5FUPr5PNXXqGVDdAiKRNe3YhrJAnEvobb5iDZLxEcEwhHFM2",
  "key2": "2ok3MMo7deUqzMZwCDGs9q1YZDRxv9oX7DPEJREhPJ4ysGn8WBeis4JycyyrAX5mAtVLCA4c5utWNC4WWh8vjV8g",
  "key3": "4TANyBKQEafsEpEzM6Leu6pxP2Y9HAjbtegUPyK8BJYSCx7ucxtFGPGPEmHkudbxCU988ycU1MyzcHhGiVwRLQ77",
  "key4": "59MgceWLPDZtfWXD2y4SnRm3HB6B5XLVyTQBGwa8beU2N5NawcaEmNK6iou1vhr3e5psg1K8Ej6NSPeuacvNmYvF",
  "key5": "5ADWCLcMaKJeodvtNXHFPzNwh28nF8pxi7zxvraPCgQQwBoNPA9LKzLoYYMm7t2rZccT3ffGgTzBEQfKEnbx6dXx",
  "key6": "33QW97HQaokqJB64AYQxuHM1t5c44ryYQWVMA6Nzhv6XTY1auALk23taVJRAoPzNeTkMW4zNxaoHcoD37NcMfPW7",
  "key7": "5VEfCPkRW6YY2p4ZaZGu8N9J55bWbBZtnGkToevYiEjkikiyLTW5hFD7gW7iMREwgx5r272sEWhXLEQauSWmmqqT",
  "key8": "4Ye34Fs5PnCbGDKoWbBoTUChvEbMwGvmYkMhsMqydVHv6JvDA7aXohYctMVy9SJqWXt7QXUXjFTmJTRc4qz5Vf3A",
  "key9": "3EL3uVypa6SLUMNKpX5g4uAiFaSoaNG7zCBDacJ3HbT28tYciNmDMQXQqfg4s8AwmHv6JHBtGKmEecWYPgTV6HJm",
  "key10": "4UymMXf4Vx39uxJB3mdDZrdce8itLoQd7Gc3HjhJVMUKj1SP34ccQUjHh5mCUER7jH3pdFn7t2E6DrN82gvVLiKc",
  "key11": "56La2ieWF89h4Jbk123WGPywfDvUWkyc7BdwbiSsewbkajkjq6qmR1be8YY7PpSWwxDAwCZPRwe78RUd7eBwF4S1",
  "key12": "3hQyTEjfukH8CXpuVNH1VTSGwktrM6GJNxmQoPvVSpRBgEiTsfgDcLMtRFNHChfdHMm6Go6XM8bp8dG57PS9j7Ya",
  "key13": "3G9Z8br3Ve4sT2u4Us4etfSCN6cNr9RkqdNRCPCA8tyvFeu6RxGW93CBEHgx71uooDzQ6GcnRDJQKQ4PaWFA163K",
  "key14": "4BXW8Y9Z6yZUCgrHmpxcj39TdMmhkPoS28h3iPAwNiQoDMZ4LRqqMLLjDiECSrHYU27HBatcVWG1tYzNzHoEcnBi",
  "key15": "2PZxxbWthoYrWTQygCNXZq8YDzDeXe1K4HY8Rur9mh5jp8Q7sgkau7L8F4Y6X5cj9pgT869h7YsfkvVUaLPVTJg6",
  "key16": "5fCsH9uwJRwJS5AtK26utfprMb1Ggp47rHLdmhs63221wFngCHBippGcZXfkQtVyiPynPuyrdQbeto3mbMdsRS5g",
  "key17": "5xgigudgtPtnY8ETWcZDGJBPZPh4DLqcDWes7HaooU79Mbpf5uVzJmhLWavo6uUzo4KQiSTLmQWYDD4WJLnaAVaH",
  "key18": "5j8gnyMT6vkc54BMNQ4YF65z4xdMc4AWpjYCdh4hD7evifetvnBzS8Wx6m1gNdxP96GTuE2v4hAg3CUh8UjaxkTp",
  "key19": "4N362uyFSVxqcS4FosSgR1wQW2yTobvNDQ5w5edM9AGxchwqf3pDbB7FPX881CMZByH1tTnJK9UzJAdYft72T7qN",
  "key20": "5zVVpSXZmib7Xj8TEboUUSjtSJDVgoRyEXDA378S2GdVHJaxg8nuintUCjCV6DkvtPhtjnpBAVEMRwKckAnizmRh",
  "key21": "5ogg1Kvz3TtEvY1xEE3yUamYrULnbGo9RuisQeQigSsspz2Fbk8E8PZhqjU2ZpqrGh4TyJpYAX3NKEkKLmmN4SKS",
  "key22": "4k31CoRDsD35yczBjfw4CndN48stxCWjEMDLkzJj5h1L5EXVznb665VVRtDfRm4Lngva9eGTYjhS147NTLmDXYNN",
  "key23": "42yRhXHJRNKQrxhzXDsjXrNZioHY5sbZMj8c66PddV9cwHCjgGV1DK8N4XFJd63icC9KEDZmhEYPrURNJNjXKEyS",
  "key24": "4H1pHxGruHx5GFSphkNiuZiSRE6SDkGpL174uh5E3R1C6V7fEEfbtoNvynFqEYqssjqFThkrXHKqy3E3nLV92qGV",
  "key25": "2BpMFtvZ8TS9SRa9M15kJkuR5zcZajZS4ws3EnJM6GVL519j6S98fnFr2NQjCvXUsxfX4ANR8ch33hRPbYSkNkec",
  "key26": "31g3BHiUEi6SZ8Gc3cMw5Y1gwkDsJJczytxJhjazLqW3CS1UqNk7f44jGHSZaRTHoXpDLENjxP2seUgLB7xRXpp",
  "key27": "5YX9uceqsCVCxYD2BXccstJMCW4bW85ZA8VdHVyJQkU9TcxKMz8bi2R44z3RnmSni6JzsZVB9frhu71b9qks5Vuh",
  "key28": "2do9znESf8PAncxD7bhZKfpKSPLMnTkEbZnDqkSeLjd7wQJ9NWhvdjAoW9T5qPEG61Gsjbw2KBeK5PR5ZfQXftsj",
  "key29": "3YwBQobipJXkQ1jXbaeXE5vV5CmivS9hHVzVgFVMPTivcw82JWBJcAGq3xKuyJd3yGC1dGRCpddpbsQ2jf21RWvr",
  "key30": "4Lw9PkifRUAMqpdTdg9EwyxCqL3y9EpD2ZbQPHcngE3x6YrrP65PBhUxu2ca9KzkJgXQLAbZqpBoB4wNd6EwjX6N",
  "key31": "4soQ9hKFKpf1tp48RY9SqJmVL6ZjLwU88H25e3zsv22hscUhHzoZwHtwr9QAVAFrZTPHNFsN9B5EaxdwLuCAsVMp",
  "key32": "TNHVEZv1q6MdCNRKAtTP9nNgxyQb4Uo4L8mXd5cFUy91DTbxuFdduqDLpo6c7zboyFRKCLuaVWJkrvRpEXzUPMj",
  "key33": "4kGfXpNTjPfHJCdT5gm13QcukCP7EugiLudiUh8XuDJ4QVdxnTCqVEhhNu1CgyA67WVPTtAqEGqegUyqVwc58SFi",
  "key34": "mepXB8ANSfs5Ay4amSNQ5uFvtoBaEE2wWLYA1WX5JtGLShjgGHeshQMp6qLnzkJwGg3nJSfGch95Wx129EdVbCj",
  "key35": "3Xzfb9hxXjC97K4nEuYGDCyFxwPF4VAzY4ipCUqg1E9ufpqBcmxptgtpC3LmgsaL7LofZNDnicj5bkdptTrXBDSG",
  "key36": "VYcxELNYg7B2Z39MCfYTYXgvyGa3MH4pcW1m1AXzwyjosxiVQeVVtp9xdK6d7VESs89goZ9ZSp8HgRbiLyZXCWP",
  "key37": "9yLYzyYwS7m9hDmtEGBjCu3FhgHGHfm1eNM71UWJuAcSwkyCiM1wZn88XN3ZpKVHdpajgcMKiemaeNE1oMHymnK",
  "key38": "63dqh6qJHoNQ6zXL64RY3UgoM5popZoKSrCV1FynAmZTGNEMCUFSsf1oCVpddhBuxfFfu48tug9UuuoSjCRXnXpp",
  "key39": "TazymdgqwxqpWiPg6b8ekk6976rHH4hKhCDhNnCWvHQ3FeeXNPVNa4ky6pTADTuCaecm1w6LhsP7sbfCu5ttxEa",
  "key40": "4h4SdgPxmbGXcUu2wqGpdciAzZRwuhtmuFuEDo5BGrBha8QzYii26nENJd6LmaeS569XjNyvW4C7DrZYCpnL3TSE",
  "key41": "389HSxqpQREz6ZKsghzwjfiSbRQvnmARRNHSV8V12YjFTabD14TMwnTfRoSLSpJZVpha57sW2k5ht7fMoSNANLNF",
  "key42": "5493zqXwzd5CiPPBBhVwtmrWt8WTRRDi372zH7nhGNFyaV7cMmzr6jfYMVoWeoeFeMnY8Wn8EHaJTM5PLGmFq1ZZ",
  "key43": "4j7vGbKdTTmwkLyxMAh1EkyA7V1NMs8coe8rSjRy2XBBMwrTFU3WyzH6yH8h9dUWUjDBSitmh71UJme8KLaiiCTD",
  "key44": "4mthaBfbc4ySYopvQJ3B8bMqtVxGDXkYSXTuAFSZQ6pidK3R5rPgENeC3uVPvjmLLNig7itJp46M2bF6KXNTkj4r",
  "key45": "3Je8EVkuApzgzkLnPz29dREJuy6fTLyJJqcGfyVvK2kjjqtxbRTyu9w9bqXAVYPBj82qNkhgEVbKAUL4GCm5kTJB",
  "key46": "3HGttD1thjgumq5FTDLGV45SSrHYKKvqgLcsW53LJL9d1w7MANSmVef4rkvCaKLVGBopfPZcwnGAvEZVzRRkJMEw",
  "key47": "2YjiPwg6nc8oG3diXtGqesALFd1fYj4kuMk4K2U2uqZoXDTeGngkAVwfG1UTdTu6forZvoUnHWSWzo8MqSAhcktq",
  "key48": "jRy9MEWdjmxpm2CPMJ8yV8F3SCk7TdaeLX1stANZhjtxMjWgxxgRm6YmvdUS3qBd9DcgV1MdrWi74sns7Njg4i5"
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
