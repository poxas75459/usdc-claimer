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
    "2vJM1TMAQMBHzkcMyyznXRrcY7kg85rwWcgtMHAAh4uPkqfuRudo3zpzCZKdHopBgG2RQRTiUaXqrVeZHBg3detg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hi4ZeHJYsYRvA5jtR7XVSD9AHAwLHwjE3MrHLWXqPuSnojVsBhSuWWzSre8wjfzq9CRvtxxGMKokP5bErUJCFJy",
  "key1": "541GogwtdLDJvV25Yz7o5hnJjdBv6rEnZpKm5VnUywdQWThvYY16PpMzimJJD1jN4FfAQoEtSXHnthZe1L4zrQFu",
  "key2": "gATZtcnjLGwhk3MGpCnhHYTSX1wFdGBvniK73gs3DxLtJ42B3dpWpyt4aoeAToMc7zcNwSikTP4v8ZJZjKBiK6Z",
  "key3": "62xqtLpfupuq1vLYNiyRzVS3E2EYArxAXi1cwUFKK7aNBs6jvtspY1DCDENJmFnjjvdCRdJFBZwN5Ybyj1paQ2qK",
  "key4": "3N72XzHXZ4o6nT2MYao9vauQGBbD3jDGqmCo2Ka6JQRxaGX1FZhCCs4uejGX2kujNwotCXT9W5YswdEGNXgaeDfS",
  "key5": "3bsvnEQsT4kBaiq7Un9geA1WvPyTK51H7aKYYVK4KuoEp5xrR3t43Hk6R3t2tSoyqgFQKNRW3pph72uXRaWgKAN4",
  "key6": "22GkV8qnAPQ6h4GWjgmagw5bfvtekAjLUkQnTSkU3NnPuviGSeeCYK14MjwXEhbLMKRqXKCpLLXaSgv2Kb1b3Lf8",
  "key7": "51zveQV1JEx34e81q7cTPEt2mHqSSezVe4BakiYQgwigdST6G5cYGce5Z3HHcETgj6b3FEM7uhNGH4nevjCDeL1j",
  "key8": "4NQ5u7BAdQzmYrgx5dSAu8ps6WKfwaV1Fe9sJnBxhF4e3KCkcbB7rUrgqW8VUCdgWMXb76xQKXBW93si2FpQgWJF",
  "key9": "WvPpbzZ6JKwCRNo1yn5qmRWA92zySU8X5VroYH7P75pmiiipMgFdWvA2trJ5DKLaf3kosJCScuw9KPecpQ8swQA",
  "key10": "4kiGqSQgBd8Wb61TAt5yoTXFkcDa1gWodnGBd84qexbGJ1GPrUpCpmBNjeJabCJ8bipw7ZsDQvfJXfVmxKc9fCRr",
  "key11": "pHMhijUEMBJuuUFgK6HXzCu9qVJFzAwHpPVc9Njk9Y9rZAoC3v6JmJnoS6SwjWsgJwDQrrvBqPxekU6cvWojHoS",
  "key12": "5bYmbujRcTczpWT7zQzFiakZ8npTE3HZGVJcgzA7RoMHZEeDqvfsVHrCsb6WUrZardg8DkF1Vq2vBRAJwsw6UoGU",
  "key13": "3PiZJNoqirALgnhy9GtR7ik9VmvetvknV1RKzy2JcQ6LC2GL5epWUGgxbST7uNpaZorNUZHoZeCgpGLjtZzYPqDH",
  "key14": "2WnS3PNjo1tEfx8dx4H7eWtY4pox75p3ZRsPNU43zQrzdG2d9DBTQb4LvUn1WViM8GXhGNqabqrmmK9nJURSekNg",
  "key15": "55aERAeyutBpDo9mm9CSTetfmKGhUwCrmmPdKZ3xaT7dxNNtoUc3w79naWMPWY9hAPuyfe7kT9F8CaA78vqdV1CP",
  "key16": "M1H84426bE9mMpA13cat4RoNQRyNXCKiWPvfeF2Gz5a9Mo5cJMANzsvBWhejWWZzU5nmnyrzGCkJJH4EwkccJjc",
  "key17": "2inBnF2bX4jmyZWngP5puQHYWDC4FBdfUXzPAAgkFZbhsTmRWgSnm4tVKEzNCgZ4GKTL8NhwLpF4hP8MBJtsKBfR",
  "key18": "dzeMF9cZbdE8PyBmMf1p9eW2V2kNC49Q6rFA2tzd2rnWCtgZkGUnBcaNbZrFExhnZsFEERoWvzzWJCztuhHNvvT",
  "key19": "pgFtT6BbrnruEnRBFzQq7pyXCA1D3EeMiwSV7tBwugWZ1swt7GezUXFxyyvtimuxQ5PnQyqXfY4ENUTBcJr8u5j",
  "key20": "2BVtuejFWb2UVt36QGDfWbM3yJULqiBANgtHUqq2fGXA3645BVDgxACWGWx412VuzVFcyWSWJjpPNbG7bCF43TV7",
  "key21": "4WjdQomnQvGLv6kqyB1uyENcC7YgxGMY5uXogwaj8Kam632mhQFbHoGxQttjoebMWN7UEt927XS38CrjdKUG3XTb",
  "key22": "2ZTaa7icw3bJeSshpkLHBXCU3sFeCtgQzyHLZmpczi3R66fwz7qBRSYqTd74VdJBbnzRdQB9kTo58R2Qn9CQrsPL",
  "key23": "3V9wdenGtuiQT6NGJ4emQUXgCw5y448FEe2Qati8PSTNoHwk74pdR4uDdXg4vexSxhuzCcyNY5D9kKFoh8gr8dvQ",
  "key24": "3cKG7brU8LXkKBAgLLQjMds7sDTTakgfGxwKtgvf1ePcd3LcrX3HuFnvrRPTCwvA4v8jH4zUDGEcFufccYX97fa4",
  "key25": "4c7VDg4pd9MVVusokFywgL3xHtQXBiufxWY6gQus2yjoAecjXgYs8X8JGwB3vVD319PSVG3DbJDW6MCJtiAtxRNN",
  "key26": "uyzHBKBbkZPPfJTtQqK6rFFz8om35NTtcmJL34BG4GbydLxqQeFE1gTUSZTQ8qVsSRxWo1uoy12fjRx8aMBYv8m",
  "key27": "T1deQsJV527oBYXYmXBv4EkYmTNRzXT5EjiFj1tBzpkVBiV7xV7hada2nJmvgLWSkDA965YY4DkiJCNY8hS2CAf",
  "key28": "219HbEMv5CyenEiG4Bx23toRfkMhMdVb7ERUK56m3Bpd9VW16GJNJEUukzEUbA44Z3uEXCKCz4EZ6PHVgghYrrMb",
  "key29": "2vv43mfLNUbs64Kb2FtCLvuUjFJ685F4bvd2xRpS4rKFvENDVQzbCmqmNv7Ufd5bRyNXSDGriRJTzek5XnPGmhoe",
  "key30": "2E8AnZQwdRBobCUbfB2Rj5r1Tkokxgq1wgFWs4uU1cExbSXDnsZ6kFxLiEkrHWn2sfCcEuovsp2rVjt1PiXoDwe5",
  "key31": "4mK67jwQxUCSRnmZ2FnVYosoKieJsNoSancCciLPz41aatPfVqLrf8Mkoonpjj9DYp4Rs4Q8o4xL9V53XCD4bBSd",
  "key32": "3gS9eCfHKmp6aiw2TtpJoEnMsPsQUEwgCPh9UZhbUCaA9AjaqPFmipENxL2hi35eiBNDMXtiJioJJRXUscCRLc6Q",
  "key33": "3Fnm571vvyS9qfuvdiMN7E2GYagGAcUhvQ4FWZtGEJo1qHQXV1absVA1NLV1ttshUaEJQwyJB9zSG6ix9nsNCubn",
  "key34": "3RVLmYLPkZ9gHuLvU1ggLT37DpqhXvG2XMQ6b4RMNT6nUguRVN4sFqDyxwnF3nVxWKMyGwuVz8HsJKTt6tpjRBcL",
  "key35": "5cDLBmYCjHarxs3Ehe7LNdfqYEgr4qqG9MVqo6vmoiDgqLUmawVAGFU3GkmNEtBhJhWQ1Ac1qwG4VWgepZeRhQfL",
  "key36": "3H46pzoa3FVTRCWFX6QZpNJ6GHPw4ye1mfNbZgrFDT4DJuBBApcdeHqacAzNMBBmgNDe9XGHeECT61GwcakK6EKA",
  "key37": "3rKHbEERPCDYUvNLnBQSBqP6seskN43DzXvXqmemRafTiCbVAnDCe1cLkBXEsqoz2t7hMTYRKEd62EMjp14caPqb",
  "key38": "2NQrwJw2MLmiCGCKYUb6aXkTYEtCvvv4tREmVMxrSrYmBch6xLt4jR21AToY5JNwkSwCHS2rhjcxU41AkhkVSU7t",
  "key39": "2eo5KYr1xzFPKSD2B1K4rqf2bY3eg4T33Vj2Jo79Q9KU9aqqJLnQyjqmsCtoFmja9gxXn1bbczM7SociaLs2Uk5t",
  "key40": "4Tq9HLcLWFEDcQ2wbWrV5TgsYgXAtfdc4NixaEyp3FRasvCnbv7Lkzb6SbNFMu3WQ5d8bxMssM8F1M34AtVrtEuN",
  "key41": "4TU1J4vzLLuRFM45Xz8zEtuYkMNp9jovp6hEDxN6n76eueMuBx4Wp3a4LYACP1cQ5fwtJf4N5ERHZDm76FBcD4PB",
  "key42": "2Fi3jY5RosycG8GMYcYTCLBTHzZWwKMtFBKzBJfdMuuNfWBq8DzjChYUD3Wni5eSz2rGBt97YxhojLwKS28JgEnt",
  "key43": "4ieCQhgHDK7CPZVYDeSp3nbR52MeWbjGusMqdxdSPDHC677Y1BgVzZgWmKFEYGwCS9NMPQVcfWLptyjbpsS2VkTK",
  "key44": "4jsjkYSncSML7Q1DqZ8sTDBfQ61p2vu3f8da8svrXN5qyEaMmX3TkfV5Vvvo6dDpcqSn1u4VrWuYFwRaBBUGyqcj",
  "key45": "jMTYUx7YhSLe1U2NViNFGuTfVpe77TkG27HDPuXESATm8gbtFUnyEycz1X8Z8Nuf79ageiSXRLigiTGUjSRvPdB",
  "key46": "5EieBkEHxvqTcgoGox9LEM7wvaz2TCNppd75ZC1qjxEf8xLtN8AhBzCT3yEPWKbhJpWvCr9tMVACFFxkbmK7NcyZ",
  "key47": "649TP9YGwoGwZ3Ls9oPpjqVQGwTpdxyqjp4jnMyxaKkXniuw6mYtvuWWNTedYKewR3HUQNJSGyoMCG1zxVVf8Eat",
  "key48": "31vUySDJiKrmY5UeLHL3JcPoF6gLAuA9pLb3FTD8geSABaBxESnpri2dHV3tfNtebiiu2H9CBZsghwRVNm7vQMbJ"
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
