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
    "5KLSJrLRefmLreR47oxvSYqGHxagpFBfpKBz2r9sXNjCQG789xeyWZk3kLr4d7DARzHiWfkaYr9YpNsBMeLtUf7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64sQGGduGgdVSRj9TExbvbQtSGJ8dmuW4aQPBJZghnUMSyNLsEgRu1sZwVMDHjpuLHUDrB83DS64CnvFp6L6BGPt",
  "key1": "37DFZQKQkqnbAeppHfjAHCq2qDvr4Bh8EDzRUbeEg65CtK1UpG54dpfmj2PBH48pWkj6WNpuqP3K615d3VByCrtR",
  "key2": "5KNdYNanqLPswpdXgHzXaxBqbtGz2WGPMh8nQh8pSx2UwzmVxE3thdfoZSNpTE3B1RBXHr8PZu5FmwcYJoSBE123",
  "key3": "5ivHRSEk3CUv5xdrygEr7eP15tGgjY1qa3DdmtcJpUAYvEL5EtfyaDUYQ5KvNmsVrLrUVj9mAjLkyjQwVkeCEkcG",
  "key4": "2msv7cmUordRBmsqSme7dH3HMkfAytDWRkh3dthVmqgmvmPwWceS12bm836yEbzWysz487CfN5w2RM6D7PXinX9v",
  "key5": "3FWcqtUWrkxg6QmgF5QUNydZXDhxspSzgFmCdvrAScBHFrcsqswKHSYQAsuZTCtDBMGct9pRpDyfY5ehoeBjB49J",
  "key6": "2w81oV963VVPkQEqyZyeKSPxF4XqkYXsi546g678oAHxp6yRTUR58hcvREfZB1Kbfp2wK2ZUaFkZd2KPvNbVB7aQ",
  "key7": "5Q6oFzUBbg1UAX4gKy1zpxTMo34Qmqx9HQ1FZ14SPaKXe23Rw9whLMHRkFeaRSv3YZihTWFnZqRVzVMJpjp6WhsS",
  "key8": "K6YUXGmKHbnhwNUtacYozyCNTa4YEnNqdqGYpgBRnQe1zsVrtQxQba4PcWYbthiiBXwrNF7nZkaeAwWAG3pKANG",
  "key9": "38mugDugoY6x3GbyVzmgWzNh62oP3kjFB7JffL21vuv3Syoj83jAVGruoLeVCEkAKB7sNRyomJRyQNRRBoxssjQx",
  "key10": "3M8EKwhKbQLV1Ha1H8HHKjg7wxF1xFy7iWeypEj44wZ2bygq8efxR2JoNDQ3sRsYY1GxknXyzpUhGREdVjgQh1t1",
  "key11": "xjJL7kExgyhzFApC3FtDx6L7S1yXJasKUo8Tfn4QUqhGT9yh1k2LJ117wo1iixy9zmpDdCrsJ6bjRYmNHMGj1E7",
  "key12": "4ijebx7yNAaNW9osH41ZzR4sh66we9wH5trcKa6vugvVVEUmQuUnxfa4qbh5etEG8tN9YvWkn5bcvBU2LHZJbnWE",
  "key13": "5oZ589WKspR4phiufvpmB3sCnvFS6AcTFyudtrEquk2d2Pi71vxcfprs8cXEUhjnMFnpRehMWpYUBW318ZJ8ERcm",
  "key14": "2hynDwxEDnz73frLvsiigt1YY2aahEC2CgdcyzCZyihdzfQVmQrgiApkk4Aj684Siv7rVri4JXkPa2ByztrwTzNc",
  "key15": "3A1ndba64918Q5ka9FaJcmLZA46issA7tQD4erFvB73j8q5GcvDXPCVBDjMXy6sgDFcmP5fyQncZvvDwbvLm1sJm",
  "key16": "2c6h4zgFJXYsS5vovbWCqqn35Jk8Ae832abGxYsnsj49j47ufLEtqEJ7KGcUotsQqfA8pxwAHD8VxyQrgeq5wGvi",
  "key17": "3Uc4oDN4byaXoG46dFbFKf8dQAqeJZN7TDZAAVAyoaBFpdqX7rvajr6vjUF8xmEaoxjTQSxeQCNMSKcn6G9B1LY",
  "key18": "5qZu5vzxVRDg3Qw8ByArvjbtLZT5KcR6BQwxsiV9mQGjEcYajSzeX6ZTinjmCv4m6ATS4QvBRwy68sa5DLwoG6zX",
  "key19": "5ex96PyBxpSyEcNd9uAjCYEr4vJnmUwncoTRxh2uo7UumJdDxPtsDw89C8NjydMrWcSZmsts8Wfg4mWH8HBpHqej",
  "key20": "3pCSBxn41tjnyCfJsGhrMCzyezrnDSNUpwcz6s9Zj1tx22u22caKY2gqnDtFSw85RJ5JEKysdbaxbZaN1PFjnxU4",
  "key21": "FrisSMrZAuUke62VoaT6YpFiSFJJavrXfCCmxCmVrTeXJZjsqhd9d6JfSGCDzW5bz6t5LT3Qy1cVRfE87a1CEg1",
  "key22": "57rpRKdkTSM4JgDaiUtAgxz8peRQCLx4nHTFszqRtX1QKFkNaHuEgDvvW3rpnjVXaZW1UbBYWUVpDGRwvhd1UieH",
  "key23": "4eR4sw9TkbRKcfQzmUaiNJqyMY1G7Xg9dDU26hKPyax5AdsKW14o7hAE1zkyPQgCLo3XFRhWR436oCAjZpyKyLtf",
  "key24": "5qwb2NfRbou3UCQpdnr7pVmA9REJYSvfsjdtWSMrenMVu1td22tM525wXG96deoEv62vaGFRVJLDTViprAJoNUcF",
  "key25": "5RQeAshUc5ha2zyPcwgXXLejvg3dfsUHnQ7CZBsBvdNDZKfSp1K4E5iFPcy2tDwFhVRovHe5XyzYq1Rd2JdVw9dR",
  "key26": "V72XgpK8BV9e6ijmS6DCfaEHr6XjNQpbBvYuZgxwFxqNg6b2mHAYDXeRYxPoLtQ6Vjk1BS4JWfWW9mQ43b7YKgZ",
  "key27": "52ryNUJwig4MkS8kyfiEoJirbbDAoqWWDJ1NXk26YCKrC1ukEXTVKkZWEnHNMUFZyw7BnPXp29AktcGenG8kUdmR",
  "key28": "3DyjPRn9H1MzqAd9fiNXtvHqGnYTzRQSBYDYYwXMsmEHKWRQvfuSSbZEd9T6GxMuo95CyGBqRo5DMxC8RDp43DWS",
  "key29": "5Ba4AvvuG9qgVUcNWHMi57j3QcCb62Cq89nVduMLKagfHXKcraTJumDTZnhnVavPcziWRAHyvhhn9ipeTJpq4Buo"
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
