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
    "4u9nmY4JtcQNbcdmyLwtAtfoiXhHEf2Ho2Qhgjt9iyHBbbCfUhM3qg3nXj3tbPAeAe63U5bsXid8KzFnxFHfE6er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pshAFTpE66CwAfgtj5hxzMHNE16RHCRA22FVS9VtP14WB2rhcG13ZNfF2EmuEhsjWva7LeSGbSSFTrZ8QUJLcpb",
  "key1": "33LDJ3PS6zEBuP3g5WonwgL38X8gpw1PVicmc8maEUeY1HVCB7Zv67bek1xhjtmaifJcDc33DqjCv4d7PWSWHCBv",
  "key2": "abAN55nKwQuG8vBvVHQJ3DLVQZrvpagrFWDYwTaFWtnUZNRpgUbB2Q4EqLdfJGKAsqDzWSEYdDEfPc3eEz9qh5W",
  "key3": "3JETTk1DuSwZEL8xNfBBNqu8BRaVsoJiwYmyfauNMGf1beihu4hyaNJVQg6ZkK9NmHC8Eh23X7VprNy3s8MSLvzp",
  "key4": "3TmzdgvUHpQF4YVt4QD3K5rdXyjQBorpqbgJMxRYYHynCx8wwyNKxaeWmxJ5o3od24zTqG1XzJpZguURsAumYG29",
  "key5": "xLFJfmT3e25hsfgQ2xE2XYF67htJgqfJKWvASbVu7ghGEbe4BCA8Xeno2ncRAcHtahL6hGqNy7sQXXe1HHfYrVi",
  "key6": "5LhhknCeWkCXsfo9f9rRmbJ36ncL9i4um1hDhavPFg3kRvnKZTkrim5BvpdcKjvXxJEVg46QTjPicyNRF17K15dE",
  "key7": "3Rtg9EzisJz7hQGGzrgfiLgs6KLnpdR1BLQk8j5yCSQWHj7WzJhyrBgR6LLJbZHHAiJDcvHsYj7HCQtuViSegYQ6",
  "key8": "wuvagZSkFLvCMHW1syAJdZdyiuNiAs2xvgezCVzrttAPBn5AtuVcgZg7WGKmu1c2nXhkiLvthMy9czMgNYpkYhY",
  "key9": "5UqtGLZD7UAxJ4MUiViR84Zsn5cYSX7qP3eshNkuPQmDfWu2CknDWmtsV5fGUoZsA8pDqDApD11Qrq9iQ4TaP1T6",
  "key10": "2T9ER3ioLgHaKez4BLS7zUoSZCcseD26NZFoDpBsig99wTnrq2VtJTc7DbiwpwFEp12waajnQ7xgc27Xd78vqBoU",
  "key11": "5ivHRmqwLf5Vem1EMYkVvQRzakKuxafPhyW5ud4Wvq95Qs5yP31S7NpJNbghZdiE5dE8g857XuikfQvS74EBssEB",
  "key12": "3xSq8foU28eoByoJoGeJ2Nyt1dGGsj1xaGbC63cYSMQGMvyPWbbWLjbJBpCMrGwFa6aGVy83bpR3bdnfQmkSYCMp",
  "key13": "5GLmffjkTEKps3MFng4Q28a4Y2rzB1vmWYZwrxa9QdfU6VpUXuXQD91R6quQ4gxSa5iqBUWjZfFXp7Payz1XRtj4",
  "key14": "2vuwhdhrmdUzDSdJnuCFB9uNNoPAwDmjrjybtB6sFfgVskuPdo37F1mdwwdHrakSqm5v1XXfxRfhy4ccyu4PHvLm",
  "key15": "29Butpp6XtoD5NuvAV1BqZ3Bh36jZNFKAZTzmZj1ei4j7yQ2mKQHnCWFaKoAdbwgjLZEm27Dk2jDk69kfUxaZZWq",
  "key16": "4yYgtwzEoPJrj6XTzYCY4DtTt6d5u3qNQk7AhaoKi9yD8Uzrk3MQSc38c7y7uGQAFYYoekjuFGnzadLhcR5tXoL6",
  "key17": "3rJAQ7VinFBR2sRDm49hURT4TVnJ5tL7ZmfTWQEtAAVgfqx47iGL81Yd4Noqadm5u4j9kfSgVvKhycUMkZCh9w3s",
  "key18": "5FkqByx4aKAYkpkESXNgtsKvArDX45e5NHNFdWNfeWjFHjg9iZjt6JUaNKfmou5CqwZEFDSeFz5VEBKAqpqM311",
  "key19": "XruwBrvNKsDhgiTHQgLcssh1JLjHh6fB1w4EyTqF3VG4fCZaYB59LySxpRcc1YPtytAMbEgJCDWgrkFpEoJpKAo",
  "key20": "bcmjm15mqhvRh4USZqUNRguXwGpNa6TSK71soY1xNfJV861ghKrMTQnyrTpY7TbrxgQUaXGWZ9piYbt9chWuU4b",
  "key21": "5fwkb2bEANvJuBYvLJ4DktAKKdgNW6RtBr6mM3JDC2LaNoNsjLyLi7T6GuPKJvYXb8xzgBywd9CmEJM6iuQNSVkT",
  "key22": "5C9VaGjC98zxX9isu5brSc81AQsWJHmHEPf8c9WqCcmvVUnpaES6KAZzV2wTWQtb4BboTj2Tb9ZR49seneijBo3Y",
  "key23": "yzn6rKTq7ai8DpxFc4GVS5TFCg2F5CVVrG2coqXYDyeW99TgZfufEcbb6W1erBfpLKfw59WMsRbvZGks8Jd5Mxv",
  "key24": "22rybSXmdG4qbYMxFKyVkDNPTJUWfpmWq6PXNnw47LYjoqw1zYpNHRAvQVKbwqNh3t19mu5HdUTKgvcfJuA34a3i",
  "key25": "3z7W15HVMXLMXKuMs7aKUVGS9eG1wyxoFnPsSSvxGtkb8dKbWDvKhkM1ayd1s11v1bfiqewwXktAsLpBhcDY1H3b",
  "key26": "3oc3ZDr6mC5hjxz7GVQEmTvc7pQH7uViCZFVitrnjX46sa8AHD4zc9XEGrzwnf1xXqfkvFapREJBtJeYLwMgyM4b",
  "key27": "2JPEhNdEXiEDuHZ4K8zDnrtkDouYyrugQS4uguQsJ9s3qvXCxerMXijAEvrtPUxGtt1HWX7fWz1MJQCPfqTE1tkz",
  "key28": "2Sxx3YJocanfAAvqqSLS6uyLnBQg7bTAC4GfazF4eZgoyaUEGjWZ764ptmWTahqeCzvapzuzSz3ujibvdkaqb1Bj",
  "key29": "oM8r4QRenFZZDoV3MeVgYWxhDF6n3EHKMThf3C229vbiNa2R9go4ow6znixCMqAbo66BhDwirU5uwQdKm857cYw",
  "key30": "3DLCueY3Ssm5nFtop3ApG9DWUSjLcd4mqk9nB25URQB8RhHeCK2sRLQx1N16CX69c4b8S8X63EcWp2f6mRmRa1Fo",
  "key31": "5CoLESDmVZvPBAUXbRiHP8MEnqjmyVDMvWHjmAUP4QXyprF3G5dkoudo6zPTAAEJWiuJahPmWA8bHB2ot1ZLoUVY",
  "key32": "5sRL5YUnrE2SNizmGgx3HtTwucwDLGD67W6xxbEuDYsiwKskvfNwGkyZxKfZZqktaEqYshMAJxENSUyAChibg1TU",
  "key33": "5DhG2ktE4YSUqTtzxWhKtjmgHSfh16SahNLGPMd3vPfTFFgL1oSbv3JW7DK26LEk9bU1BzK7bNGpXU4411YaJ1zo",
  "key34": "2k862tJ3Fe9A22BwRChQBPXGDa8BdYrLxT6h81gsTM6pEKvFXDFcreWTsMBoCPLi3dR3KcqXPghKjCnph1ar1Zh8",
  "key35": "282iByh1PMCcKb6jKPgkqQaP1okbt4HRCofAdV3H7h5VuSPFsN3wzE3TTZvBev7zNteJKw348ArkiWVqRFnvWeBv",
  "key36": "3TNec1CC8gC3rBi3EGGmQcS5sE4xWW34YkotSvZT3fEEZaZAvdJagubdrsh1oAKy5TEKwrQiGz7dwCqaPJf458Ce",
  "key37": "3gJFqG5CSRVBhkfRFikXBSPtxouh7dnE7m2yjscCSgX4tjQpMnc3VwFEQnG6zQGJbAVf3qckWqwTWTmZYuy1xUa7",
  "key38": "gTnezWrZMCMBctWFM1CdU2E4Qg87hjGW7nZDn7xrAPDC2gwx78GtKmEtLhqnqifp2fPWbKQ5vQPFZqASRu3Dw4A"
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
