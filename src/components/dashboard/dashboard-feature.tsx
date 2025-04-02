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
    "2R6ift42kQ5sLagebqDCmoefkK1LJTpmArDg5abfSNu1oBxeF17h92SFYxaRMqtMCEotUbdt4qjm13VDG1wZrZ6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DREGJV1XTRpDyeds6ovv5LsiMgMC5igJc8QMkoGVpqmC5GbY7K6SZtCQXQAm2ANcBSFoV89419VT7mVPMRt9aZw",
  "key1": "43ztvbfgCoDesBrcxCFGmCPx2LGBLP5CbW7kSiUCMcVybExDc8MatEE71YtKrArwwZsUbJesYjXDKpPGFKkPLzCG",
  "key2": "5toHJMxyXdXJ2CBphtdSpvMV5zsv4yLPw1683BoDJaHjeWAR8Hcom5njn2gLry422UWyGPWJKdwYeE4gSi4SYhMV",
  "key3": "3bQ8SgUhJ6yfGQMpuQCMH2RcBcznEFUYHYbMSzHPDXybXFw27hAqxxDgXNNbWvDZ7oKbrhgCsunGdy5z4gmEYt6K",
  "key4": "5k7hBr36zt4RGD9t4RJFpDr4Fhmt238aEkotaosDJ4c6CSy9ow59ak1icdBdPb2dkUrut6ZebK1juK9HcKqmTW2E",
  "key5": "8xJzep2ZuAXgchPBhPNtV6mWYLCwhtZvsCkwTSVwnxTQXr64kQTnv7TaAv9Kry53Us6fXprSoEESiWYKZcK9V2X",
  "key6": "59YTVw8AEH38ACsf6pCw3hFdtph3LWYQkc5dYhRH3BQodLawBs3L2UMCwM6PE6KBEN3mEdpyHzwfCf6YwzspAvxb",
  "key7": "4K4q6B4wqCCW8dvqrTHnHvShCLBZvepnEBf53FMDy3T3kjxzwqYpoCxEdCcVeRf9AkPbTAyDjQtYV4CUDeE4HLqJ",
  "key8": "2BpTnVvKi3sdUnwNaf4S5bvxnxA2GGQZB4ykhCgs6Vm5ndmpFFXnqRdbcBChGpjuGoQtC3WTTkhgqLeaSfWp73bA",
  "key9": "BLUFSptjfEeQMSK3MFveK6fdK8qW5LVb2kEmnX9nQEVatecW7WH8SENTi63HZGSSieVvhPswbptjkALJT8dYGWT",
  "key10": "3RKGAqo421twwQDPtX4BQWv62k3ZSGSEE6XkB4UHegbeGnezTHZYEejsV7jKmmydLFN67Q1WtJouPmzfMzxT7Smd",
  "key11": "31ApYj9pS4xtnGFi8j1gB5KwmGgEBZPFmDmnAS3EKYapm1FCSH2NhkNwc2Xetrw3CXTsxvhqsBSmnHoNHuqbMG7g",
  "key12": "3inPasjseXeAZ6bCkHA2YQBZ5kYx1zkejPGFzTHP8a71xDbHUqFdWmrnoVHa3vcfPanJebtcQh9dmNryjty132JE",
  "key13": "98rPpZrike6wi9mYhMEoT69HeiDEEWzcB4Qz15ar9CuR6x3iuTuYMPjMPXzAPbybr8Nh5gDSMmhGEvNBWUFiVGk",
  "key14": "jGm2fyHDLnqkFKzhsyRZ1ed2oWxm6VCSWJ7EJoqRtYotRCX7J2dV1799DzVrrdttkWnmFs7gZijrkHd9vxwiYfH",
  "key15": "5uwdY23t85eLnShqxErxHp9nVMq7mXG8dBswWUJ52JsCgzFboPC2ndk4J48gT9HNkwjFqP2VAfRMjYU1JeDiybyb",
  "key16": "2FeV8Exp5CLmWb73rS9vtJ3Z3ck1VP5d4CrL5tPFR4JYykVgA6nSuiYtk5gEJfJsGEhLp6kVkNGC2BSBwNc6xGR4",
  "key17": "5Q1N7tdJEgnyYENHRzkvzC9gLL829cFFe6HYDpDXyidy7dRSBYmWyFZ67S32v6Y7vcc11HQWYmTnWJwpyZrifAHW",
  "key18": "2ghBrG4kspTFbTDQKdbLNLTk6MCUkKiiwfsmA85EbgNNFvYL2dF4DPir5DPAmX7QjGK1dtSQecQUbdH2dQRbhZCU",
  "key19": "58KEeQooPuNgBrmsNavpotqzRa5TuU8Twxji1gn4b72b7TAn8fgcZUcW7T2ThrA9eSJmm4jUVcyvk6neExCCxSvy",
  "key20": "2DhXaQTHUa7xM2WPemQtwMMugQv3hzACZLp2ABgBddJmpbGpKShAhaw4ohWZjYsMKmQferWJEsDSp9cJ4tSAfZH8",
  "key21": "3akP49zWjMACDfuCtydmT8FZ3f7VHXixgUzb4jpZq2WGvgWwc4B1vZ6JVhCwxPQE1JcJEgzp2rQaoQiS4ZyfCkZ1",
  "key22": "5nMvB6mbPGexEB8SECPo93LCTVTCXJzxgZeehfkTW7ivunVWo51e3NWn5Thf9KctZBctDzVP7F43NUfgbsNQYjVV",
  "key23": "4c7FV72S9GkmR99yMoQgEF94g2bQqkLmDtvtDFSmwJsggb11HhXQtzm8gNCATXznErM4Z3Vdo7mZbXi2MUL6wfDf",
  "key24": "5GKgfYCBMAtMRsVLF4kkXiS7W6WyAqdyKUHw8xoGE9H4Cao99M6ouTYumpigtpktqErdr8ChfDEwGw9EY8xbEL63",
  "key25": "5FAMVSnVaHP26B25gfTQArczTLP1Hu7VBL79Bej4Gq3Ry2yfzLt2UhhZ7RHNBJLUNe9ckbszivcWPWV2F463oK9u",
  "key26": "58hhbAWSgPfBKvuPqB1F137t59pm982LmjLXwrKccPxD1oUiJkRWKrW6c3AoXJ8G8PBV6SCX1E6PQjzmorccCefZ",
  "key27": "V8QmhnKgzdhUHnKzVVRYD5AxiN5MaqTSTi1ingvPAD8FU3xvXgoPVSc1fi4VU4f1BaoYaBKbJSZP9oGKdFVMhjZ",
  "key28": "4ANo3uaUHHBxxebFj83xNT9qVR8bKaaeKFZi9gFkYVCt6zrXPHVyJt2fpBYwiqTfEBDFyp5yZ1awBZsYR4FN1FSs",
  "key29": "2SdiyzotuyMKRzENrYNtjoe1cpVMykWozo1UUKXR7QBeiYjLNAN2L5FtSJbZMpsHKtmQsMFLS51yYQGoCtUT6jZX"
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
