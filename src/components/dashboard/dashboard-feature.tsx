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
    "2EScApYvsqnkB2xXDyPpF7D7YrXoup2K4m2SrZHhv7kz83rc2p9LZLfsW5DXb1SZCWisuxALPQsPcmDx4WGH2S2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sd9Szk5hXKYbPdFyioJujk1Ftqqp1VFk5EzV8n5bAoedFSPdp9bwJYXi46GtjLSSeQEQKXVcPm993wvGDMLVqgo",
  "key1": "5qkCHumvpph6gSN39q2vWcoB3KzRtiH77YfMruLmoTXQuJmrJJZAu9HNSf32Y4rYBHubS553rwpiVP1G13DZxdLt",
  "key2": "4inhLxR1JFFqJ27LtqJw2e8DsbQbp4mLCsuDccFs7nwZgeC94YUj9vo3akN9Q5475nfyPRGtUKVwENJ2J9vJcCRg",
  "key3": "pgECJqUX3rqBgKQbKF8af931SpgWGdi2jVNdWcJWkkRB2vbxYuvwdNpbd6ZHNx6icEh6m6T1PYoQwGLjzkPChGo",
  "key4": "suvEAMohUyvZSnsSVX5E5uypRzx2RXxrQUCHbEzC5vepWfcibqWLfqUmRDLMwsY5CnANfw3Sgt6zZJmCkRZaxuM",
  "key5": "3zbrfZeF714gfDaZZQNW4Dy39syxCh6Q74ntF2rM87AkfDZqugSHBGsf7KDH2MmkkJqGqLN8XgxWaGsiZKTVRSh",
  "key6": "4JBkEBggbSGJu6uVZQHWPTy1n5Yb51A3esLpbo4LNpRnGQYPUgTWK35hSPNU513WBsvetUchwKDBFvqFmro1pSa6",
  "key7": "4NcWwqQCj2KSJRyZdTaEFmWH3qKSSkLNzr2dHv2HDXChH8g1iUgWv1Fy4cgh3WARPckvjHAwCbRyyhbAVBome1Sg",
  "key8": "5uLfL5phRUr7EQX6nuUkk2B1aqZE98WAdeQsL2xt1t3kLqkwu8WHCu9gstQfDG4eSnY4vAui4XmcFSjKfU6AnZWq",
  "key9": "54yYgaYXwWzSRNFbX3HxAFn8SGefmqEFv4zxnU1VPfSV7yPuVpR3b2oK32tviRqBqmL5bZ2y2ueqTWVjvytRRd1L",
  "key10": "Q9u9KyCUpVvk6yL1RQRrktxVXL9m8Ca4ZKHfcbzTDrJ1YkUJCWEYTbtn9E4AqyCmgvx3fwaMDqE13vnLybNkKcV",
  "key11": "3yLzZcrvdgvDtSMzAefgL5FFeSeNM1Vd4RDqTyTEBtJc81xhk9p4jNwhPbY8PRwgMa1E1vHWLdZ2utVxw2eqv8PT",
  "key12": "36oXYRjmPB15wF275Lt8QZGbmDRAyXyH7mLv3RgtpC4aQh7NfVbduPFRHby7WJkyPUSL6G6BWtcY8cRHY4Mgcgea",
  "key13": "2sDb3WNf6QcVMkJr8zd1Ldye66GwvYr5eAYrQYthgL67QLywLBPV1fxs9VWmSfyebcSc89o699CRg5BRBXorSPZS",
  "key14": "B4BZStGWshzcPG2KxcM7BdthkerUqZNAArVRyismx6X9PtSFGdHTiv9U4vE577EWwJ5afgABVkHPntPoCVMLYq3",
  "key15": "3NtTFL9e15fye9e5D2MVAsuSUKz4Fymd7kvVHSBu3MbaYVyq6gdm9KtPcDXXj1DEsR79TuaF6vqeWcgTZtbsutwX",
  "key16": "29z1z1wYKt7m5TAmH7B73NYEdZiJczahp6FkWB1RZZNxL6RGtda1MGvfSMnTRo7B4UEwGbFVinAAHCGqYyDhFXig",
  "key17": "eYQ3LnxfqHv7KnFRPPboeFgDo69Qa8HYUP3FLrXxY1qqBq8xK1AdHW5YqCGN2MczjtfWt1B72JpN6JKCxGxZByx",
  "key18": "3RbfcDcvQjhe3ipprvG9sUW4pFxtKSptBc77SN3ZL2z8DUrsbwZJ8mrcUz4n7uWrXyELRJoyDqnTgCqXX4QoEeEX",
  "key19": "4GEDoPWG7YXM6vrnSWZaV5etkEKwCHoN1ZwN7oazFVt6efVLoAp1uSzry7xYF7FaUDG55NqJUAu7paeVbTqm17Z5",
  "key20": "4GTdCMJjoqL8PwRBkY8EnpdeRa3Dw1UPFZtkkRnMExZ18j7kH3xmYvQJuw3VwTR5E42hfuiXqGuUYwBhEcMsNM3e",
  "key21": "4Dtu6c6mGDWERduwYd9asqTQpo6vJrNeGrvAVv6WPFXeVkovZsbkpEKaHzhbaPwhfPLt1bXw1ps3SJNiXavm322F",
  "key22": "3QnFscv3UeXFswGboWL4MNcYW8W2pFy1egzZrH38a4C6GnMR8yYkC9HuqDVH4tkthg7mjKXVbjDeTZiKFChYhXAC",
  "key23": "5nhtxJKbZpJ9NGiSpY7Cj17M7d9PDs634ACiB6HqrLh5HLhciXzJ74d97FgEicBup7or3jZ5B518gxUqAP6Jqtuh",
  "key24": "uhCpj5TKsq4LZtBZbsRAFtT8XW1sV35Es46oL7sjX8P6DpUJYX6E753Wf1USVhpCoHSUkYBaqodXDNZmbZ1M1iZ",
  "key25": "4MSRRYdsLrd3Up3xzndMzFcUo9pqdpSDdqxYSE6vQPmea1FwMbLxYFdjRtqXjjLmKgiBBHdhgEBAym41MiMupKoF",
  "key26": "ZEZKGs5xCGnFEGR8hEyQEfbA3VzrKhKpWmMPn7NP8LHpbsRRQqUsWHwgxz5Sg3TdiJYDAaX7ZqPLc7aC46hkT2j",
  "key27": "5YjDTxmD8PvCKuSK66VWijeemxNFYgEZQy2YfbYmhxCKLAMhcsQrAj2yeVBcTd2yfQy97gwjXCL2bmYBtLhuqa1e",
  "key28": "3e4qNEnz1tfU28ZFh72pNpLqoK6pRhf7FJbnVGuc1UJHdgx97qxir2sCMpdR4R18R3a6V4D2pP2J8ie6X48iGJdo",
  "key29": "4V1RktYXTd7rJAvRvaK5Nw42ELxVbwZt1UmbSK9XZREK2pQyyYpaaFhEkbY2c6md8bywb49W9ERMqFkqdPYyqjQz",
  "key30": "5Fz2pTaVuh62v64tSJU1EJmq3N4BDZZ4iUsyCbtS2oS6RqmABnKBPHzCjtU8zFV2zrdVfr5qDuRuEdbyJeXdX2qC",
  "key31": "37H8WCRxUcAC26hYMvZHBCuH91F6wuM8XnDC2qi4SHWEMybFYnUhNNQxtfhZJRGTFR719gf1GPSKEYUd1yapPwEZ",
  "key32": "2nLZ6sL5tSKp2cf3v6omvL9GEqRCCG5fbhCPWtPbYv7ME8JDcXyb4hFqahzrdfNHi5jx1woKyUPGsZryN2aFcVAR",
  "key33": "5fgwMz59SwnMXoTKtW5n2h237qbhCjeLYwn2WGrN99RmTmXrUUgqtfxsZPhjBYyDAcEZSUqiP2NxqZErBq2hdULE",
  "key34": "3Q5j9JWiwV6srNnZLfNaAeU5a4oaVZqReksM6nvYN4yJsD6v3g6rM82Wk1fEtv2esvwX45QSQYs51oNLdPrcgfrS",
  "key35": "65ofP5Q2mH4BbWu9BW81brAH51dKy9qukrpqtz4Eujj8Lb3j5V1uLrKYs1ZYJS2VY2Lo4wg4JktEzd9h7hrABza1",
  "key36": "4VBN3khueb3g2uFFKrukSQ8gRfwCTKr1gvECyCsNEpHGQ7NsFQfHsRCNEXxPfsUBXxWYBkQt4U7unkqgzfiks8Uf"
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
