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
    "4F3AJYyzMPvFU2o6gSTTsKRY84xkTjmUDG9VJVdhLg9QJfhQEvw7pj1VabdoNhAQUpyN6HwnEs7JyJ1wjyutgwum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3viS9PbQkYuqrXF8eRZ14EpQXLcNFnEHxQD7stcvPABP5PCLJGSz1k1c2gcwsizHipaJdvVtSAhZmtYPghe5mMRi",
  "key1": "2AfNdKVNPZDWjRjcyQo2MiPWVF9HCT5AL1vczAnfwTcgG4rkVm53Tdjd9ny81Sb1CimnTUmweZUsY2XNev6T3tar",
  "key2": "2ve2EmTMkktsSbf5SM2MBNPWtpDWsRMhueQ5oxUgGb22wQNzCQPYuWk8GaztwHv76BMQAFoBhC2kfwuMwrXQgg5j",
  "key3": "2DPQLd5Nvt4TNmCUdXrf161Zm7kp1dRgoX4qToRaquYS7FoQD4TWuYaMk1qNJMnQsh3fSWGrJGDBC9VDiGnBNFBp",
  "key4": "3kpsaTvZRjL6VqYqEAkcW6FHKSt9pDWgPN7NCuhWEoV6fuAKQ2r4DiJSUrHHPqoBaTKnswY9MkNbbBpkU2LZfG9",
  "key5": "vPjVW76ET4zjmN5DCy4F8QtGzTPxQidr8rJPUhMqYqCENuJF1ZQucHwTWXSkq1EKBcEzSw9rAKJXae8eVxxy1Uk",
  "key6": "2bZSnjdTNqkgr8NKEGVtUkqz5wHHaSeMDfV1FoM4B8jcruXMEsCQpnzj4d4ZeVtn2K6tABiztoufpzuKBEth7dNk",
  "key7": "2WBtFvFQ6agNnb5Myj4L9hdadNWZnSvTBcYfVG498Y8v6v2XgNLFDneVBzX1i3bf7Wc6LywQ9rMabaoZAzfdFv9v",
  "key8": "4Hz4iiLALiEb3qEXyFXT66evfafx2behUZKMb7EGWFTbCBNkmCv2Ksue1wRoLVN1toK2Cb4vS5WVceWjvBM4eHYr",
  "key9": "5kei7dWRHVxdP7CgpGz9J4tK9SSu8jVrgbR95mJQcYgFEYFQk2U1oYqdzCjwv3Q4erL17deQBjpXNoRM8GJKBsJM",
  "key10": "jot1WgbP6q5DLArVSojMBPBEf1ur9N9Xr31yS4cbgSQAG9zqYrwTKikXF8J81oHXZskrbh6sKXxkdyxf1ybv2Dw",
  "key11": "7m64ba5PXKMazB57KMDRRV2ULVBfM2yqvH4iUbPPJiNiyULnC2SWChA6JAHqtQeM3CYjPCBMEbqVi3qsoyfdNtJ",
  "key12": "4U2Rt5J663aJ8UaD2z3em9VcDmagJ3qmoVDEutJwCgWmpTtSYnGoVwPhMR2kaAtpzaUk2UMBFqkjU5TkUkjSvZDM",
  "key13": "2TkUySELS1P8s4AJfD6xCg1JCJSgpwDjLTmNZyadza4CJfwhdnTobdNVDLHqdnhQ21PbLo5953rvAuKPVjna9oNF",
  "key14": "8hsEp2eowL6a4bjwyBoWZsFtGPCMAVgx8d1zv8jJHBD4VW7JTvPaDQ4hMrH51sDNtQYDvefmCg4z39USXVGw3jw",
  "key15": "2tBjtMwc7dPXL2iPaoeHoj48LQNJopU5RvzRYcjuXW3bpS3g5ebX5KaW9mpPmbQpsrAAvfyECpM1RNQoEn7HP6p6",
  "key16": "5SCFDngY4QeDsfBAuaD5YZxcsSn1T4N7baVhoh9rHfztinpxtoznZgoqwNaayXmYEY1j29bwSd6oVK5B9zTAjSDc",
  "key17": "51KF5D6EzjyqxEs1chtv5Z99aJjN5LzFsXJtzkyHwTMuCdK7dsqpZMZwsMkaU1ohsqQ3L8HXK96n3s1p79TqmTBY",
  "key18": "2XgAJQeJghzoUZgDbiDiq7MN8SLK4YqoCRDqQiAC8hdiPkEMEQZA6Z6vXvE42vkaZQQk6g1oDXdNA12tjj6DLmeC",
  "key19": "36fztqAfbK9ZCPqBQmLYPVmjpHptKt4iCmaWDjXKVWYVyTDjmWio1PvK3njaMh6BJ1WyV5fVXWHoyowHkukgcLpR",
  "key20": "5kvaxxR3yeNHd2652kcwvNSMbUHYPYB68XD3BHAT58ENdFsKDy5YQ6xkH3Xqy2CwFr14Mg1wCe1edVbPpKGJXmxq",
  "key21": "5wnBojihaE5fPb8dMAh3AxG677AkfBDqbsMbQVY5Fb97ymfU7PfkuD5XdhX48gTUDpwa7hAPdiuyiNPdpCv9fQwz",
  "key22": "3T6XqWAnwzxnySfsKzuTB4fNfyaxZPbpE6ELmbbkdqVhr9zmWNzsxgSG6JSF4wduzo4rKhH7ZsKymNsSv1ZydqFV",
  "key23": "6AEampZptsLpdgSv2wzHJCip1K8KFPaRMAfGEgeyJRkJkYLWqvT7QE6TWEext1rf2gGdAyGWSJgSXYoFyAVBgGe",
  "key24": "dULJ4EsZ8w48CQ8BTQjV6WGgNfhZTQ4bsanrz469fMoJyBHPtwMuoRuSagZMBTm82R7vJ6FfaNcpxsU2X5gaZKs",
  "key25": "3EjmYRuNAE4ttfvz1DQ6AXP2jdQEFJxCxgjnB4ewLqyR2ZxChGx8WVYQK4W8JhHjHRPMbwcQUSkM1QyLbbvBmx1Z",
  "key26": "4ovrGRE5vWLbSkC7nJcW7CkYvi1vWUrhG56sTAXSpyjJyy8X2egfAoDhkSQYNSo3M6tt5z6L1TWiWasmhPVdvqaN",
  "key27": "2uYYfQLsPk3Bp5gdTvd4c9JtZcwe7pa5Ln4Sme4Yc14Q4iKzrCsLGdKL1ip8CqfFj4tzoBTyA6JEmsgbYVULPYFH",
  "key28": "W3hUbsr5rVMrxLkmHrFbRx3iLfx5Za9w8rNpLwTMr3R8pc7Kv947Rx9ZUJfXuL15LrDFS8SuqsWiLKdK5MWfL4n",
  "key29": "38K9GwHTD1bxBuLd9wPr3fLmWzELkunmxt2Sa1yRTqY7QZRTvn5Nwj2T6tdFtJPxpWnH3JHceMZzUtSoY2sK1nVW",
  "key30": "4WFhWkR2jDm1gb81ubFQfPDSmipKZGQ5Zny7q7HkSGJAeV8wfXVVF5oEgqqwTQhZ59fSjdJjd3ngv5GwNUcKcgVg",
  "key31": "5HZjvidr8cDn2e1Lv2Zvzwu5fSN5W5GidpGbC7CjSJqHuao5vdQCGTWqFEYtzHPxwiHxUcmVvW77obeLqb7dr6qv",
  "key32": "4XLADBHphVNJ6G2fFQUTVJxKQqgUbenVLbtbHJ73N2FWeusho2fCzZ9mZFufXUypjLBXUFqkUkQx2Jy61cUQZzFq",
  "key33": "5krC39q1MvvinUSDQ16Bnv5WpVu8q8NVofUeMgXcYko7T9TRwu9AsGyZMNdejDyH1i6FhutvUhKv1qjTm9DCzrdL",
  "key34": "2MNmxgLjPNCjENQ1XJM6nHbYxaVRM5uRSmSDoCBQ3VGj9hZnMpKfXM2dkyrTooBpEPqDqX8HxUPYN8FEt2NRSvKm",
  "key35": "2XMJbYtzgLn5PG4P9kRLo51RDvhr6ojHHaZ5DWNPqCeJcxVMkSsjoTm958xyLFpLXbuKxffMfzLWFcMJUhtHg7Xx"
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
