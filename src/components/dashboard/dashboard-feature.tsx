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
    "UZ1q5eyi73ndBuoixj2TwC14E3yGW18judTdWRkfeuaJG4VdJ4mwdGXzYiVyTASxbxpCq1DJPrjVmXZyFAoRPPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chC51zv5puk44YhGG33WDNYdMUw5jUq1Z3511Adsv21uVG3PtZPiXEn4wUjVT7NUYhnWW1MfNgmDEz4KcUyC3mk",
  "key1": "3uCHK6HDwPDhdkVa5Tp7Ehpra6wqCr7XBTrhutN8hgqxFxK19QvWn7NojTMfoefyzmNyxJG7r15wDMaWri62UGtc",
  "key2": "5SVYh9JmxYodPmuGjxQ5t83cbama7drgZnujzmgYax2uCMcrRyd9dcPwMFPiP5eExzmoAvqR9TMkCNVm9dkDb5en",
  "key3": "5fCh49Z7CKkgyyZ6qQ7y9aBRjwxC5GuER2Sbhu6ziP8V42276RvkJCj8h5fkVuHRmGqQwHDR4MBGQV5z2Cdg8QpB",
  "key4": "4ndTg35h8KetHnzp2pQcXSk1QpP1k9iRg1ksGzqob7VuYxacfwrBDBC8Y1MqXJDE5Zhx8kWHT6zuDswqU16SRGcN",
  "key5": "4WrhdhzjJuYnhPE3snPXdpJhZiR93b8bZavPYxToRVr9AkpUcpJZWvKKHuZELMZ1pNseF44wug8CdTpVfkmV9SNT",
  "key6": "59GxBzpRg1U3UcRpjADjdTw1atA1AN1fQCUazNejHa7Mknm2EmxCLqryi4eHhdqK8xUAtUDchif973C5CdHRrEuk",
  "key7": "hpknjCquKoZUAjzJHcSqvKBjPCQFaDt3mV1nZkutengHCHMripUN75fL8xKVRvBSa2kumKRHqGZ8fFpo9vaoaRB",
  "key8": "3WNwBrMdmw8gEDefHK5EVjeDZUgD98614KFR7mgYxa6xYAZCbUmamKRLgcMH7vdZXMgT8rvedMFZgGU46V5fDY4D",
  "key9": "2p9RT9wdV9CDdNP3msuaBVAG75o3DkGKKCtGip2jq6wps6zfciZaNmAbyRf173cLcp6NoUxdzP3kDFMXxXnwHs4n",
  "key10": "3SDJFLu9h6wTPmMjqwSdbZStmSXPnpQrCw9CzFcFVwxgKJWSmoaF3UTNZpmW9SqnPAuxLeJDjPuDnJABDoMN4ius",
  "key11": "5czRfgWEsSK61BzeXrQCijSXd4QjPYV4XoNESKsoYDFSnPbGrFKHWcWVbkXgBiWLxLiK5d8vWbTQmGY9nACCkCX4",
  "key12": "5JxtSZWc3w9c3Gc2oUTVrqmqULobJpgocCHaRi4kFbeMGLRpcoeuUBq7WjsrosL1NgTmscgznc78EuyfnimJJPX2",
  "key13": "VRuU38BvNM56ioNLnBv8SNefnATXnNGWhuKcRpezsksgv3avPDUCJkeN16iN9oFq6Si1g6utj4VmgzpHgNvywxM",
  "key14": "3Q4f4Ni967RpXbW6vR75TGWDy33SBWL6ES8r1UHMoWE63FdD2vsbVRJa5pmiAZSibbEjzpSyuCp2WcQ6S4rWrrtk",
  "key15": "nTNy7Cn6aRq7AFrxpk5ymqUhis8nH5fLxEkwjJSKMCp5d6W4HN29Dk8me8THNhvDwLvgPHKhPLNF1x4Tz1xJjP8",
  "key16": "Lbzhj1jwH1gUpwm4VEnyuRd4XZwyq6cvthJNucxhHfoUBEpSLoZxnhEXYsfB3sbtzx7zTtQYekrsZGRHk1SsXe4",
  "key17": "MmVTCatM4PFS8UmECMVCmSzbLk5hjjN16QiFM8GFWko6fH7fxkYCgReHBkpZQEArgEFE6NTArhurhy37mLkBfTt",
  "key18": "RQELLfzfABk9Hb7QtSQWs16BBGj11SdqsH8JRYALoWui7ds17UVFemqNrkSY9UHs6vV1eNM7qqE3Q2UX4AcCawc",
  "key19": "4BBwStJQWpqgC9p4gTK9CCCmkRUgnbG4dJH3oTucau99uwhaMrZTD1KPw79bX3Y7BvnrMGT2pgDL1m1RJrshLGHp",
  "key20": "63TcgjLBDgcci7f3LK5yM1c3LXFKfnWkV27MyCWZynM4oMuMT3ubE1ikfR4wpvDob6aknU7bGSSaqR8KQk5xG4jp",
  "key21": "vUQxDDgfUJW3kDTBTTG2mxU171WtDHBneC5JqHk7Q7U2fwiDBDz2pwNnrn2ArVZusi2Y5uc3tAFwMPkpECPrN3h",
  "key22": "XcYo2yJY5mza42vZLx2RynEP7t93LhETMeou7hjW2DiLosUD8SiavDjzPJJEEDABPnUsVpQeMG2jBUYtVKNnx3W",
  "key23": "4N6wXKHF1ceYP2ZqNjVoWhPwUAYo75afnyNzh7wAxg6WCqJ1N9E1vs4u3RZqB5z67rJ4sJmXTPMMQUYZWnfEA7Gx",
  "key24": "3hReewJUDmMvxv85AP24vMeZXjGMP894YMUVFALRMpof1UPXQ4GSQJMvJFBr52GAc4KfyJPRqxq83SJG1YJNhzwE",
  "key25": "2Una1U1AXqNWMkNGQgjYvtkXzVe6mF1sNdaMPpKSboAEEs7E1C7rU2r1EzoXRg7wjaQAcZwvto257Hfo795vk6gK",
  "key26": "4vvdy2dkQHLYQQy7CoyFtjgUk574BmKFjT7ZXarvQRQuiHgdabyCVrcDAQpnWtwJiz1R43kHmAegM3B6Z14YUmNN",
  "key27": "34iARUPjqvddq43c9MiYxzhuTkLA2diDWpfHhbvpw6sCNv26FmPb9u9iWJefB2a2jC39ChCGEvfsK6gGpP4B6xcw",
  "key28": "3jVeWokrJxuzUW4vrh8bN2JcPZZUiKG5KDY81kf4FYNeYSjXV687Fy4ma3NkFor4B33W44my4Qnp7f9orTN3NkRb",
  "key29": "2CjpCnXFFtRp3toQa4bgVotL5v4tSuyULqVdjF3hfzsATXRP1rLJNc7HtKHWx3VfFR5PZpQN8Bos24mQPCfw2R16",
  "key30": "2Z4nWSudba9stV3dKHj6tZyAmX3yY7x3YGYu8owx7Di43VRdhX8uE75uketrfopxeiZGt36xmNVgkjTU4oAts9DZ",
  "key31": "4tNEcTcRztMP9EDrbnu8rsiVzzSt8zfudKFiGtq1BzGq6Au4ybCNqKFmrd1zmeLHeUduVaAffz47L3z26nyxJDF8",
  "key32": "z5b8qRzBCc68i6RESMH6jyqVa1zmubahTyE5GMHWxuWgpBUHY68C8WjkFVCa64tNbWkmUkTq4iYk98wj1mFLqpJ",
  "key33": "3eZ5qauwH2FPKwQUF5UjQXJcg2zFZBu7NjHHWqU3XqKU85KWZENk4fRtLxrQsqy1Jv6h4SwyApodJuTEYovfk95r",
  "key34": "4uyLvK146XzHZ2XtjmwexwuSZcN1dHaCR6ZUVfR7qXGYHJeFk4ahpL8N2Pyihay3CmSLC2DGFGHm4ze2RR2ohiDD",
  "key35": "XVSFeDCxKov5Vpkoj5vtk9UTMTsh1FW7AwTxzcuegM5b2ArJh3tDaLyHchLV7dAJEP3BoRosoCSqB6mJAj3WRSX",
  "key36": "5gCCiYb96dwsyLfwfpeBoS3Lg2rR1FnDRn8msWAUgvLnXnFGHQvnWmFhjpKJnk83N235R91Dkjn9ztTL4pKYhguf",
  "key37": "5z63RaXv8HAWP5FEyBQjTg4yDXjoVWofEWWqXXo3ZXez9RDZkKNatGYcbH4P3WNhXHUiRkYohzbW1Z8fif3y7CLS",
  "key38": "4Kf4uUunoZ2677E7TB3J1n7jKcXeecbYfGV8kXuYvG3C4bYoJTdeEcYKfmcDULRZN3QxQdR8HYNuPwSG3MvJF4Sw",
  "key39": "9Sa1ZC6J9Pw8E7ew54JsHFbuVgnjkpfTi9pgBCshnYj9jrzZ5gQ31aRZ4aYJJK7TZu7ECsGxrPAWvrD94e3PHRi",
  "key40": "4fzzXkRSGU17TDHfPPik812uHZEcftkEAkZmspcXNhSmhhYTqbZNRR82oo5W9BdhFza1YNdnwr4Tc8c5gBvyWhSz"
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
