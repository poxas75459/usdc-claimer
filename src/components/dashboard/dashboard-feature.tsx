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
    "358YwumE8e2bpThELU8aS91vU3WWCoi2d76bcfh4ceL4mjcLDWjmUcoDhUFSo4kx4VNxqLuTWgDVqPj8bF5r4dgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSb1wrDfBMB1fiv1WNLXwXBQzZwxRHP3xLYLQ64X1iJShAQyZ8RE9zCh5P23XUvB2srNZhVbFWjZUnDTg1bUgvW",
  "key1": "4b8RJhUTAMDKWLmQ8cJohDzKmeuhHDJAW5VqdGDuMRNzNzMmQhMHnW5TQ9xDXAThKd5afMGdeTZTB1s5XGQqHjnf",
  "key2": "2ehCGArB4dbrMoAdvg9EQv6abV43UK9bT7Cucm4gTAAbsgcZRV5eGSfxPmH5zfupyKQVU71ub42hPkee8hhFodaQ",
  "key3": "2QqwLtZFWRKLKtb2TvfP5Z2XPw5dzMfoByh5rCKMyrVeXJ6XAHoGKVeM1TEXoq1bZdFZHqkrJ5W88J3XCmELWdeV",
  "key4": "64kp6yDSD9VHTXnEeMLnLnV3Q8AS5ZrSLohshXLcvGL5odgmrmBbAHdxR3oc2BcpjpKKAGpLq5dbSGsV5PRXSU5w",
  "key5": "5ATutq72W2SvK6gLZVDsyrFfzvTv9983r8SD1R55Z6Q1AWDuUcpuxjfauAfZgPy3bng6JDZGgNdf2XvoSkhKQLma",
  "key6": "4RXx4TFCCBVV3cWkKGMtt3WCnHioPU94aQqKL4KwbQECba2mimBoEbr4EVvyNGG7Be5fr7x8g6VbaCcQb4A2KvWN",
  "key7": "4MYnuuc3qNqVjPX4jN1uzM24kN16KCvT1BVJPasC7WdsMYCx7qCwaVX6Gu2io9QibHFd89dSExLjEqDaNsHq9eFr",
  "key8": "3rgx4695FRzbj9iHwtkzAzn7FDuXG2tQ7VejAq4aRNMCQdi5xUDpgjALBMDdXwH6Gj8kEvvXZTqJXP9vL9zZiD87",
  "key9": "2AYzVYhkKcSVZUcoxALFoixpaYsDiHS3c8UzbNy4tYdhFBD8e1xLRb4GynwMStmHtRT3nQKtyWRFao4z1iNebf2c",
  "key10": "2Mtbo7bShbphmfU2RGh9NhfWKW3KK3SSJdL8oEPijQCTPZvLmbV5a4SvGkPkBK66DjUDUsVD3zPmcEzF8pGKqVrA",
  "key11": "5Ry3MUPK3EHZXMXju8EFEFdFZ5wkEGi7nRDDxLz36FQeMajiEBYUNsZkbxgvx6VCG4ACBwruLSZqef69bFhHfr45",
  "key12": "88BTSkHt3FuoBgSns5MBDiZqgLsumzWq7aSijZ2iG4W5WRNwTmjVa27rMKEwfLSAzhiZgNpyjd81xcoA1xvoxDd",
  "key13": "orNbCfr3srWoDd5WFWQqkZmkt5QkunQJby95VhwgzmZDrE9KgEihXN4zqgz5zNfpj9vEjVqhviQagDyfkoSYjPv",
  "key14": "65ggZnFXCLKSZ4zsunt2gy8x8ahKKUEMhPCePNaCkvTxdRnzkx7BT43JPHwp56LfVnk4e6XkTKKfiC3ssE2g4qt7",
  "key15": "2v5vKWhFf4cTc3pYGtrW5uCTL7tzMjoG3RD1cu9MuHqszxTMnG4bwt47JBsUrA4fE7uHjjRig46nGgMTEP76EfbN",
  "key16": "2rgNqCxp54k6nkBwB3Q3UnHiXvzJPExokdLhP2Eib1C4SXnJsrqxDRdwMWfLmoJjd1EpWAV2oEx6Kq15RN8eQMpw",
  "key17": "4r2ZFLi58EZ9nysxbfSoy62521RgDTCY5ZkyG1MguDPJSta6dWNFkt6xHgagpp1q9CvLjk9aUPhv2vp425xU9Wpu",
  "key18": "86WYsMXBVjUwEH3AnACsYm6eYG1a2ZKwT9kKAqVHJYMSBE48CdRik3gruFBxdqeGJAzvuy2TbV5XxBeQH4wDxvq",
  "key19": "QqhMhbFCgPwHprCpy77ZWiSToxZsF6xoEPYCvPt3r4AHC2Aivbt26GEGNvczuRXrsGFRR92SmM6rBw5QLMeoexp",
  "key20": "2xqsS5i5yLPY8FUuCTt1KHUDi5psJ2oxTfh3f23zCiKNox6aPAybsQZBZXkCL1RMDs9V3hXV9Yo1m4e1VnvD1PdZ",
  "key21": "5EPRQoMSx4oUPQV6H5n1JGR3znP5W9aZiGLfPhhMofoFx51muh8zk3W5nh6k7TnLn6iNmfzxHsVEbLuWppMTdtjT",
  "key22": "2Jh2LBwCBwGEsDfNGhc8Xek6GkEsnAuudZk9HBPPzDUfQyZWVQu89qTf9En96Q8ZRcVuAR2pWMJkhGjFvk2mCTcU",
  "key23": "4xw9ojDrHZcvQL1aWM8CBe2AzvApDEHbUU7EMcQDcc4yNhfmqRTdfCuMtchUizDgV3v29Q3d9fa9UYSDNzFedEUc",
  "key24": "4kdtZqxKQiJJbUZAApwdrcAmgf5Dhbj3hrPAXbgyynHj9ttTcVfWHNjVcKppVqprFxTCYtQioCmjDqPHgHgTDbG7",
  "key25": "4heCyez3hdpys7VaMRyJW2t9CwdHQdqC82C5H1s4nkQy7HjMnEgXvkWwQZVzDnXVXgiRB4FUTHYa4ExW9i3RkLa7",
  "key26": "Ph9Mr3E5zo4TzEVV75VXucXse3QVjKek56yyJ8A5tjKFeNeQQZvbrcLiPoxh1LevLifXDXBqiW7YG9uiW26WhM7",
  "key27": "5rYER1yhrDn2ajLxQatjv75VGxtvFD8cYWzagJhx3zUxYL2XaWNfFUb7BcRwq9HK9roF7SjXErVhsrbUUX5Md5kW",
  "key28": "264NgD9WSU9w6oLSQQPxA5Hey4nC15tbsWCkFVMQDKyfmfCFzeMdXKs9ccC6xg7JwMDV8hszDFExMRrxRvHVb8Kd",
  "key29": "2ff8kJAGc7Kys7BmT5vVU369zMKiawBn3dRXa2yvTbAcuPktzGCyNbjhZ9NtfqmoEf2CSqHcS7iycAkrBxFCD9CZ",
  "key30": "3ZCMXp5xVCu7D3VVr9bNnYkBiF9YemEQ2jCtA7HBRUwJW5PdZtNam6AkuCjBxeW4xw2ZPENUkGZdXoXfBhkfPm2X",
  "key31": "4LGF5TcoYY6rrfQLGaiZVV7h99DkuNXUdTo2v7wbHVuYBAYxSYWWiZEvBoWHKJjdSCio4CQoxUfN5ZubDKkEyeBu",
  "key32": "5G3gFSQrqcd99TnGEyiDr31vpYvfD4ACcpqdFGhSB46nrbhaTD8Kxj99Q1Fnm2gPabWhfh9S9ZjgCPBLiYkZWcix",
  "key33": "5UjKwpXmVqKsDa2M8YBp8hZVkrhMUQo2VDLfpQeXdrMNT4oCjJKtXNf7GbmzoxS1Rwhw1m3Xv2Z3rdAxsShXjjwU",
  "key34": "4QsBaoemEHrRifbKBexsY9Vve3scR2bNewgH2SwLNuj9X9EVSGEgxoQCVJzB9N1YsTB1g3cksyR4VH5iZsPxbvgz",
  "key35": "MjNmZeR95CKvKjLBRJYPwGBZezGsockkGLqsEKPweAsGwtFdP3xmaRjwJVpnc8T7Mqrksr53rfoM4bJpbf2puiF",
  "key36": "45yN5oabzDmmqjnHLhDv32NppYcud4mZX5NutbrB8165mVXKQpaTcLmeUMetLpSAgXa87JrVxBvepugDDLMVKS9M",
  "key37": "4msSUwDTSx559q8ubDc2Havhpe7ExFqsRrHWDxdm1yGomWtE4Coo2eWeseiBw1W5wQqKnmqLt31A95UDTvDDMRPj",
  "key38": "3kfEP8cpwC1CkHnhKRRTDZntYDk2suwg6omu8TfmsQ4kmyDSn55FQCGauM9Fwm8DRLMkeEv9VicapyXdtS9QEQNu",
  "key39": "4U87iMWJR5NJqNDjvvX21RTofVCjjPxHNMUvqgP7Pvg8AFzxCGG742mtUR2mEH1T4pkDFyNkNs3YPWNs6kmqNo4D"
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
