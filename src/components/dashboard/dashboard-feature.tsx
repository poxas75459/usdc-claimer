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
    "2BJzaFmcvP8EkD9vHnuzDbTZVrsL6KYEHMQhZFhCE8drVXcLnj4b3uvjWPRxEGJVYL6FwnLfuQHYo3fQxi4afh1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LAzTfivuBLsVALBQiiJ2GrK46a3eUxB2pJojyyQ7okPyeR7fAkfVT92g7Q7eaa1P65hcnTTfpW9SYcFijWDEQV6",
  "key1": "D9EUky5rCrgd94EAQUVFVww8BZyZ3VdFi4XUdFdNSnyh3p2DUBUTREhqaQaYtYnwwQWLSAGSTPJhDTycmRCF7Ho",
  "key2": "4Qz9hBKoPjadk95aYaoruj2r6VTXgRNpPcedCwBcUZ7LuquD6ChDQFRG7n9d4rjuf87vmp88aQsnKP52J8NFcpGg",
  "key3": "32G9hFcsjnBMyZ65sPCAgKHtyeL2bPfHdQsQXnTpEp7KeJ9X3XBfKouMwc8KMLCc5vuzhiwzBLXnRJkyT9P4U7XP",
  "key4": "4AC6SKREkniRUp7fnBguoZkNtDZwszkyFyMs2mmVErobrhCTkCFcEEXrBXCZi7AkseCz2u2drnS72bcHsPp4heWJ",
  "key5": "3ngzH4rgdVcMqxrgKKc5ENXoJ378YoVaNBf6Vv93wmFFbAsmrsQZKsNd62m2g7GmUo7DvEQGhSbBroV6HuCZsqAw",
  "key6": "DZUJfw7L5kiAwUgvxFfsLvxdepE5msvnUaqxwad47cqkf5CS6w6wKrWZpSEWE8S87j3ytpuE1ZC5bXse9BXRdST",
  "key7": "4Z4t47ZL4usDVeG2y2uz7wb1dYEFvotXsfoQGW9TSC5iRuoyynx7icGXJDLuToWX5a5YUU7y4eF17BLTNVtJU4hU",
  "key8": "2QTUn6RmxCcfVxpUsbmbCt69YADjvMFEPFPFTfbpoxibBF976rBH26CHQXVYvFYyc9z9A6qNKEBswnrqZdXpsoXp",
  "key9": "58HXR8gFJRxiQQebJFnxQacSrf2i4Z9eiYBLRFBkH47xjC8No5K2ofSEjg8TuXeRRFxDGDc9DjooEjB9wbuMGxMU",
  "key10": "5FpT6qaaauKp95Y31KqHDhJSnv8AS16cQQ4S5ihSZzkxdu2kDighCpFMTXtZmUTF96xx6p4RSUG92N7MAYUC5xnP",
  "key11": "58u55konJY5Eyc2CQrkGe6H8j222k56a4B5ZaU5zhdnDmEjVofms7aex1g7i4dDf3a1QwkZppaCM8NSmibz9qTyL",
  "key12": "125azvUJprC3LMtocvLGNaEHNVyKgZaKNTfWLmZ8abtbNWpJVct1uJrPa8jgaDa5ZhzcFPMz3yYx35Pw2eWMXJ2n",
  "key13": "5m3b8WC91SMvjztndxVSnV5BVRQMqDGJDM5MkbpvcXhPPZ2jAdHMZ5jcAEC77Cbk9AXBB2mE4PEcajaCoxXpWqoF",
  "key14": "4oTFq9fFVeEp5E582UXMPUfGS4g331yrqGz7PYx47Ttnfv2r4QeWsp6Mn96p6wNrARLVwB5prjkW2DFsF4iGsDBU",
  "key15": "iuNSTLHmoAv95pvf8Qxe1WwErwgJRd6WBDg45kVcBgTMjtpNU5mCPYe99tcxBCqJoqvXD38MLG8GkNdagkk6hQy",
  "key16": "Uiwkz7RxMrbKTM9J4D1EoPmwvCS16ea2Ahkh3BURu6kwpA5Fq7CitoAAQojnyPYM1msZNHGy7W2juH7VZRuVE2Z",
  "key17": "4tiNkmQh1iRBLvCFSfFVQ4sgLrgSshUGjj3DhTEdCzHr1L4UiWB7LS1XERuqxt79s42rkR6aRGJBKxssrRsSvFA2",
  "key18": "4N6JakzzDgWTD6ic2DQKZDE7dTNgxmiRk2778wHHTSeLaqjnkHjgiFYyU5YGisPnRomnc1E5yDjjc25k5XoNwvgw",
  "key19": "2qQAApoCEEWFhHro4xt3DcLLmjYsj3uDKWrTMxrtPTvB4TfrYNE9tiNU3ZubAYsxu4tfL7Mz3y2XUnscxc2BGjt6",
  "key20": "47u46QByg8mkfyG5r1SiwJtWc1a9KV5qQ7zKfZqsJbC6YiKjD3aAxDAqNFDUkWSJiaoczoTqughsSHejRmFh3wqU",
  "key21": "48qpKkVhuqSHcVwH4LKayHcKSNe3ZPHpXukG96MStvCWNpdUYaMcR4tUwWZ38iAiMczD92SekC7mRPPQTAi8mkQ9",
  "key22": "C9UmXWc3UzgMgJV68rjdpGpzEsSzCP3ft92D8n3VrSS5ghWaBVKBgdemzjhnvHbWoFbvNBPqHaofDyfdX6Juhmz",
  "key23": "4hMRMBgYKY5ksfayPPoMetH1X58iYGMxkcwzb8ZYT29ckoxtni659PV3aPDMeUnQJ2seqRCuAKdMPtX6FeuutoV",
  "key24": "287iSYRrKcmTFR9sAGx5AZWJoZ5yr1DpX5GU8ebubuZgUT8LNW8KePSJW8vr8V1zrE4g9Hr4sdWG8sYjTKKrTSea",
  "key25": "3CL87nwyUiDYVk1Xy5h8NJqmPU8WhN4K1zcTQFedyh3sCFGG6VyETkQMbJYRLjd5dcaCprs8dvYDh6RAp5ut6YBN",
  "key26": "4L6zcM7GGc9k23aMgnYspurEW278ziaTj9e73JJgxNmoPJpzxiw3fkKWbeSB2WjmDs9CYjKVuRsWwSno25WN5kmF",
  "key27": "3ERyH2XbddaYCMCVUWuzfz7G7dRNz1oJ4qmL5S4Pg2p4AgtGctDKjRtoR4B4dhUS2G9uTBKGssdeB9zNz2HC9TVn",
  "key28": "4KyDcVDXc4b8XiaqH5P4HuGjPSqoRerKebfJofE7HMuygS14rAQwGSTbRX9oZo3F8snwLZkYNjGcTEVKCawhi9d6",
  "key29": "3C7npX9fVV5NehHKxwuSf6CwSgzab1Luwr3XXNjzf9ZxGdk5NUi3TRzYcSK1fnY41HV4d7rXYGZZQrLgBzbTVqht",
  "key30": "63w6eGfkd8nZinisdL8z5vbSxUTA2g7pLcRjTE32iHyBGDcWSvyUMWoHYxRPwFf71EnjcBvn4FEYpGW4rN7whmPc",
  "key31": "5k9fTEKJ5YpL8gNFTztEX2yma3bBun2M9KpEn3q1P2hw72E6Vq69cxfZpHfkUiWWVFzdKqGih6zXzSX7MgKh6nGu",
  "key32": "2y1bVn4aRSa9EbrWeGcMYyKrNJhP8BFDb4NKnBRWWuLy4cXn2MSsp4oaxWQF5aRrDQ4n5YipL5uSLYWM3C1b3z1G",
  "key33": "4uesryWCbWygkmYHyRyY7LPMMrdmAmSu95twTikeTgx8XyXMpkPgw2EdahNKjgV4yttYNEDq5thQYxpAFFmkigy6",
  "key34": "2CQdsEfqLSQAwcxX8TznRzCCSZtqitPvafBrtRGB5T8fSF9WgkP8EZJJig3DQfwGa2sf2ujeQLQYCTH9swSkRoZZ",
  "key35": "gxn9DMdXJBptZRZR1pLHRVvL5beHpJHwnwVXNLp98Yyoz97BZS4fhd5KH29EffN1ateCNek7HZsLZKV3vL8FVPx",
  "key36": "3dW3e6VxzACEJ6NNt56C2cKiruoY4DVbPqJ1GRfHDAZDUKtFx3YGQpUsFNDTDQrVtYLMCetRbFSoaUcCFXT46YJ6",
  "key37": "4eH6eKGExLXCiEVDjUNw8rAnM5xfmiXZZvSaVaMJbkoNDr3yDDuKNGcbtitJ8n6WLP8bFaLDXPKcUEpPqhCCjdZ",
  "key38": "47rNqYngZz4y4FsHC1QCbX6wuYEa2hS7GpPM8DiHYKa8VkXZJDfvxuBdWj7zpiAwPqTDA3iGaYFe5puSDeoUSGea",
  "key39": "5vBjAZ2PF5uWZxWmik9Lo3P6MYekhAuP6xSQCJQtwTYFMXVSVr8WpEVdAsks9hYSihPxZX1YvmtyyBrpLnfYeS5H",
  "key40": "3vrWTqeHqXZCB8ZBSPJyk1R5u41mxEZf1Y6EaBQo6fhXjAWB6hbatyfego8qfZf3mJDnSPo1eJC67cjChquU9dj8",
  "key41": "3iwEmoDEdfH7NbaKBvAuTsSBX2qkKUSwX7CvpGDYF7mSo5dkBHo2f5XrrPRQ4NkNFRwzRDqwJ9F1FE1dguJXZeAW",
  "key42": "2vJzVpA3xGyNt1bsohF44M4fHw11b5gVS7oappTNxNhR65H8wETMYMoAT7QZ64eBqyzzAKEtTyHutewar3cW2U7U",
  "key43": "35ns6quFUa8CtM6jhBThQ2eN9zx9QphjPEvtCFViA1rxqG8voY5XAVVqJ8x7GwiCMdcrjCAyp5NHCaVZ44mXTANY",
  "key44": "5PyUHJHAZPSkf4Na7Mx34tQMmFiQ2hHQVTUL4KJQAQQiYYqekVr8QbxNtSJ8Phdn3zsmM3iG6JTT7bEEAAmYDASK"
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
