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
    "4qzUEY2fPaKqUEqVPjZ1b3HvoFZLSoQYqcjkzP9Q8RgZKTwyE5HLmc3bL79Eo76E2PbsG6HGaE6wuGuRXBueNxPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wh9rHjPyxSqXEXxzEF2sxGmZtqJLqhTcgjmMvNVdk6VFmhrzY6jaLiLctjEoXC9sxYsV3BFDTk8k71w7MQubnNn",
  "key1": "3jwu1n3RKYrJUkqn9KLqBoXp3W1pWcsgofKsfysL2cwkWqJEnBXWVwpwWvP7jcsTSMFKvSSyvL9RyrHPfUZSDkio",
  "key2": "2R572z4A6TmozRzUd4Hrbjjf2FUGgRSkf21yCEGcoeVhKkDFLLYqNS1Pmap3b3uStqYYoWVTuRHxvrVeH24Sr2EP",
  "key3": "37sG8joSmMKmJbNbw3DESSHpeVtyGDothz2hMFTsDAADu5q5YX46Sas5V4iSCnSaqLLKwGKRzcGzrZmbsEiXzGVR",
  "key4": "2MFw47WTmxkY7gbXqTdhxfpyiYGoaZJiK1kY98phkmj1FVtLP9ftP8Hia4rmLs2p6QzVugikQU5cbPomEuAD4Mzn",
  "key5": "5hPdRXoygS5QYmg4t6TBiYJpgt5g7c1hL2z4E4rRUF6FzM3SyKq7Tw3ykJjtu29vNDuyMf8R5Mmq7vA3BuaoGKS8",
  "key6": "2ptG5EFbesb3r9VpjoqgnsQGLXhaJFw7vynvR2KZhcVrm3oUDCcwdHG44RikF3RtaowXXaMKCYEPKTE4hkyRTbqQ",
  "key7": "4wFvZnB9hTtH6CsSGWkQNbS85WfFFMVc6ckf4R9itnVH3pMUHJeSTSimMjpXPVGpFnzH7qvkrFwN3Nh8nGdHqMHV",
  "key8": "3KcfrSC2TKfp6Lc8EFT9UvS7n8EMdBwSZW4AgphVJ6JcZjGrPaMvgzSZdQBQ4eUjHbj7aiJSJF6m3NeZ3Zuhun4k",
  "key9": "45MjToeAgegotoVeFGJrTUHofSY54DeMjhPEp2Jo56BedkN4oYKRff6ku2bMa6TGP4jD2h5PS7WmBoxcdztozq4e",
  "key10": "2s6os4bvxSfhevcWZsuEvGLrBc3wYgu37ViM3obTqHLk7BuQcvJFf9nFzcjfLKGAPmV4FR91CSMuW3pr8Vvye9Cx",
  "key11": "2ik63h26pJCaXgahXYdL11UpZVzcr49gM8mhMGYoWiKzRwdzqAHRnGXuxvGcbaETUVLUKkaPBtz1mvxKvwkfy1ag",
  "key12": "2UkAu2RwgQLUQDcN2Vd9hJYNKAXkuTFLj7uGjfADCMAz9UojC9Xj7mczr9YgEpHAcrsG4wtStWE3Y1F6U62MwX61",
  "key13": "XX3hUjLUg82j3feTCdTv3ksDnPYSAavyVo74JuPGCoVXj8btNZ7VtitgAXZAscHgpTVeBQS2VXVYy9johqyhUpS",
  "key14": "3raN4Fc6cszkke3ptnmest5t1EygEzsKScy8uNHoy3j5BR3RcY26EjQnYDzkUNEDVBCczr62pU3XFwSPxqzB9mmd",
  "key15": "24rgHdZTGbBQ4YUkkA2oZfXdQsqdZLgdWxyt6Fb4X9p5G2unydFHQg275ru7jyGdmeTrJZjn7yD2QLzPwKA1sN1F",
  "key16": "2QUyXtVaTHRGoXCNiJTA6F6ngMD3U1ZAM7j1hf5AUq1pgfWnWLeBUCEixhGw3DLxKn9kQCnDPBMzTfrXDpRNHGAj",
  "key17": "2aAa7k7duTAyXVVSQ9GLW5DG897nYtgqwtZJHaRaj2GriwxGd5VgYCqK6kKoGRJYfEJh6Y4p9vafA46bobTTK7jd",
  "key18": "2zN3KiTHAArGHNqUGf8V6wC9MmPLzFmCWsAMQnX4wpGcPRVj1Z3mTc8QiZXAeV3eic6rJokW5Fvb2Q2gHQpZzRFh",
  "key19": "3gXwmckeSYpmozczAycfZ2ELBtDjz23mc1X379Xivi2zR3B972i3VDZVUkxZCP7LH7ZzbdSDi49VoissFj6Hh1nC",
  "key20": "2Us6jnSAau3WNLjiCHv3W7bStPfuwTykF6W24RHsYYUSSXUeJvMzRstAspKYqokHjeYogFD9J7dbReaG1XHGfsUW",
  "key21": "47WEUHbrkAxqVrkhoBkn3d9F8WvZjNpQQkBJ4iUADtAdHphigPzAXYvRZnRuv8sDR2HgW8PgRivwAgSFTvoxKEdt",
  "key22": "yrLuoSL5oTx6gUTZBeZhZdrsMBSZjBrHAvnxUsX9SspuFotVcTka5SyXGkDJPH6qDcu4Mw4Eov5NuBtpxmSS6Y5",
  "key23": "4J1NTTiU8R4cVxLM4923YQAeVUwJgJNnxJMQjAq9fTE6mGSsXaDoKfGtZwnwFGqHyYsswcA5bxjRSuBx5txsCVCr",
  "key24": "JgtwN14HBtWEy2Gvjh9zJcnq9snpZrp7AQrfv82pAyqCre7p7toKfKtGAqi2TXCBSiGbJRf4poa7GZuxsYhZz2w",
  "key25": "QxfPBzWM2KaWD5Cav4NNwEm44UzwC29nwT1PvNTb4pJC4d75wKafDjYexjEakPiT5BxKpVADVYwWQj7maEJCuci",
  "key26": "2hGm32regDbPHKZRXB17DjeRxDvgSK6WH9S4y2BrqrRKAwZ2Bj1na9bGBw8m5MLc9qmEYFYMLmPUn4htbc5Vx3KA",
  "key27": "2VvpubMizVaDUJH9TY8Pf6WF2CWL5FGCZ4dqBgDvRDont4SqZz4hEvuzGSgAyWxscrH8W3XqwYEMzz7eeNbybK75",
  "key28": "4wBz6G4egpzPf7ouvAKCMtbnhRxySEJJtLcoSQ274mQ2L9u4z2P6vdpsMwTwWaALMZixWGd8QweFbfWWWJ6tfAoL",
  "key29": "4ZESJhifrKtpQJHubQDRsiKFfTqdPKyXj2A3QeqssatnHyThcFPLNybFaurfLh3BgtNrUmdqBZDv6CdrjjtFEg54",
  "key30": "567SeA8KsVz5LoSoHBT1zBJ3Y9fQU8sntnyiqGmrr7de7QUSZKLVVoeZfvvZf7g9abtoRgBby4XZTPrnB8TymH3v",
  "key31": "3bpEt6UJkWLjyXqhfeR7TsJ3HUuJ4MpYGkGXEYsTAbRcVwiMXR17qdG1tpnJ6bddreYPk2FcMw2nLCKB48fy279o"
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
