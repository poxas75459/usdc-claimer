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
    "ZVEmnad9AqH9aCnS6cf4QdjkgC5xjzejr9atjiV119PgtKqc55PmgFyQVyeqnSnefAMGdfTH36vpV9KTcfsbwCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32kXxpM2Pu2kMg7wVQcH9ugKKs8DsfbP3m1HdXFzkFcDXLrzKGmmYH6FJBWfMYBWN9LGyhgkwn6WEpBHVk58gGF8",
  "key1": "5RQRLdn9zgjF6onLBjiTEYMmKhnHzmvHbLoMGWtM597riReeZQY2gng5NfpPFWGwqNsD8GaXcs1xbTthipVTz3Vd",
  "key2": "3a2tV4LJ7S6E8yXyx7z6u5XpcZo5PSAgS4Vhdc2aqHS2B3X4qisgarrh9GEb5GVvxQg91HWrx5LfER8enAfuwD9q",
  "key3": "KCMLV5fMSQaW2sfu79VeupuD5AyHreNd5sQSNRDFaTi5L17udgnodznFaFEzdrMZ2wZnZUKEJTfRRudek21P4Eo",
  "key4": "26NG9gMcmo4Ep7gWrsksQPAuJrxyNeMuvHfZXB1fePxyZ7BuKxsgjSLeKVCoGFhqfHxuJyThbm3t7Fc7y51XFFWK",
  "key5": "56WzHmCwGRCBfY3ZN5KvS8WvU46H5HUuc1o9iD8MjdJNmiNkEGVMFraVqh484H2vppnDeNJXH2mBhmR13M9Q22Rn",
  "key6": "212tVXvTSVPsZ6ifawQw8w6NE8rD8PcDF1uh1pCQUfkNquTynAM6B4Bc7BAK78bFqA4U9YdC2XD9SHvemvANqedp",
  "key7": "5jauDcwodzwPWBZgq19TpAHbBSPZEbUjTrnRdvtVqkGxYUDrG4BKGrGr1XWztcSqc5PdLY6MkjeSNktC5hkrrCmy",
  "key8": "5UCU5hrU3FqpF6sGiC5CqMVyX4WLNnPj4yEibq9CPGoupX9RoGA6pCAngP3myJANgTzj9E35DneHjaHnLTrrBUeb",
  "key9": "5r5hogcHLKPsyLb2rvcPaAXHg6oN9eEA9TDjH1fbiojETDNK6BUthjFtAAq8jgSHA6uPBuH1k7C99r5iciewXvMQ",
  "key10": "5AahPgsdCGoYY4SpD9PsBUWPKSrGi31WV6a8mJcD6ru2585Vax25S6xouczywhgK3StgnBgBxzaTKFGHyUXpt2se",
  "key11": "4mfyz9H2bXZMhipXmLVUBrL3z5w1HvAkzgS7saX6uwaL5VhmgWk3DSBKSgrrcmKRJGm8pwQz6xq4FmwSZs9qteQk",
  "key12": "42E49YnrFs6k87XtLtd9wzYk3tcUp86dBDDAT5g3MTNN949zbnLqds75cMHkovw4PUbizsWjTNjCkd94rL61HEPX",
  "key13": "4cKjrhbYfPQcjvxhdRp3szis26NEXSLCKMjJ42WtMc4ZgRuaWdJ9Macw5Lb3L5mpYYqQWjPHcWVQJFU17dpRMMNL",
  "key14": "4vG21BAvMWLGqU4A1fsmwwQGaGrAAJqQUXL9jAsisoVVbm9ZgsDvQ5EaaRCfHkcUiZKaZiYGdnhp86Sjd6NHZUR7",
  "key15": "3p7rCa6h3tbucxhFEqRTngpBeR7PEw9qm7epnxDD8ReGXWfvDRw5kkCDS6fS5bTct4728ckCYLf8hEzRZLELgAqK",
  "key16": "4awKQst1ZGCzuZUTHkWjxYxfmdPdvAwLUaePhC3zPPaKcHeBqU1qjTfhrBUo1Y4L2hAomRxFjigXWqHxBrpkzRnn",
  "key17": "34hJJq4tqsnjKh51YzFxPXCU97nuuyjM6mbeY739hp6s9yi5K5xahYAQ5vYWmT342PK2fw6sCDGvke1YEaPRSBUV",
  "key18": "2QCNFNJaTkWKyMsp1TJMgUznMHxevsKzeXLvw1QDbmBnWmNVytUGSEcbqZ8FVt4zGMZvzurDSShVXQs865iMj2Co",
  "key19": "pbxRnjVXfeXpFifEN8YjsT72V238aRprLzcVtocyFBcu9Homt2Rp4TpgJ6y76FC81uAxz7xqnmcWp2FdVsLXAVg",
  "key20": "2okuQDK3CpJ9a3jzYp2f85jRmA4pXWU5tK7FiSvzybuvkabkKPwkZ8ykjKwfmMhZCw5y5dANqB4MPR6QmJynFqRX",
  "key21": "VUWXCgHEoGTvay2k4TkDNagMLgQSBnqc6BxVh9mpXFdWWZ1Nbayp89a5s33P95WRb7DwovamoRDgSjbXL3wtapo",
  "key22": "3cb4vLpUTrZrfzazH9hW1oRU2yPU9HZYLE1huXLbn5ywHMSfixRp9SiiuUhuncKEztZ3L8wzmEA57jiJi6R8pwqk",
  "key23": "35mUZy2bmMw54mpmSxnA76kHePSPDzsHvZR2BGQ3Ug7iqutNZGTc14JkREnGXUPpf7viRK2N8mKRosLY3EBtSD5R",
  "key24": "MnxtYmX6xdsaM3rUJr69YnNUwT31DdPEh1QFZtwcfHNR7ZqtemHxmkjdZ7HXuNFckEVshN3opapFzPkUczmxmS3",
  "key25": "2GUhwWVT82ezvQCUK8wv1Af1zE2ntQmyLoSjcK6hrCqVq7scDsz3o2nhKHuHw3RmGjJa4dVH5jGxxpU4RxAoZ2he",
  "key26": "5pSvbmHiwr7S2nZcTQpd4iGTXgsBtcJEzSsnQXumAVpGozfs1ppeNKGHCzxG6zCEoHLRecxKiG94yY9zBrJbqVr8",
  "key27": "5ag3HeguadsMM8y7oJ47etnmSc4CWPur4Sd6LM3rB59uxrPqKhSxMkZFJ6hp1kUDNJjh72Lx3pWdUaP9AsiigqS",
  "key28": "mAgsDLVUs1iyJRT8px1hg3oe4tRRjfuM1S5DbXZLxjNpVKeu5kbKBDUNj1vcCvb7ySeXDUmte7xNp5mbFjvzKZz",
  "key29": "3dTfEvXm2bi8m2XHdzwpUTyFt2pGGhWEA5q95HsPEgpWTCLhfEH1iL3dmRY1fXx1A3m3F1KEaFJfenLMRVPV3JqL",
  "key30": "2Jv51SzfTBAASqrKJzXECF7wyzZiYKpUQn57n5gqezhbP7qQgZovFCZDyohz15mN12Se11BG6VCnGuc3RYqQcj77",
  "key31": "4F9via9P4c2mfb1iDfzhjV6uQzjtQHi85Dq1tfG62nXAFmpdLEkbNGGU5uhHf21PHjhabH2AebZsqS6VVRFLBCob",
  "key32": "4tnpqUyt6fgJXsZEGKCtQRNgebfjbkx3m6uJuip4CB2NwEVCVubRehJtvMsKXV5a7MHmmqgiHZoGDqno8kQH3Bsx",
  "key33": "63nBprRpL3eTf8zjd4FybpXqWt44R124dpWoV2FpArsd95p1z2S9uFyUuwASFy2Qeu5znBZFaQ8QJGfQeMPW8qfm",
  "key34": "2KGr8vtk3u71LJ1jDit526bNEraEqZKYHBFMkChAaTEBYA4Qm62tjq7Bz8yKTtps2t7sWGMDhJ5t5cAV8oKbnuiu",
  "key35": "eJGdE4ibmB77sEGsYoB6D2RDNMGXvMyuAfCb8gUjnZJrsDUqJ4FVLbXB7NTQwVSAqAVrUvFwfNi8YNF9qo3dZJ6",
  "key36": "2UvL5A2rLn68s9zLa7rppDChYstVqUETmmr8piLk2PhXr7M7TnrhLtJSRzEmTek3QG45RH9jVH53ufMnTvMFvGJx"
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
