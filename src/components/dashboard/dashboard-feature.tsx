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
    "4Ku5DHfYNaZmrmnvh7HQKYEncQtwXJr8YTXNueDC7gHp4AkdY3LYkqM1b7CCSfBDwiphFYwH4YPevJEakxZmjezk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5ZKGMNjBM95qCagx13k6S6rARBqTmgKvnGPbKyGiGbvW7w1yxetnrmCjxknfyaXBzF89GVgd81EzDkZn29zAph",
  "key1": "4p5nKySobL8FRok6kEupxxzrJZfgARfdxNUQRxxCCFWt3GghGy6p4TjZT2Lk3J3EpstG9T1VQA6Uz9QrzU1uybKo",
  "key2": "xn5e3J1onT5UC395HNc4oKEUoTRhyosX5wtoqfGucHyJEPkxGKGsw4fhzdEVJTnNNEDnCE8RcjiFn1xBgcptTWa",
  "key3": "aC6wHuZRG6pJj2FakrVp8Bq8XJBTYHwCgfaQAfAPSiety6eDkaEW79cWWdMiny8CP3D3QY3YzqWVeeCXC4JKbwb",
  "key4": "3qv4LFE5rERxaM1uX5nFHFwWKGWe5Ln9ZrztGxGUxzadW1FNFZKzQwzf3SoyT5KZNg5q4CUGfLhtkz8mQmzSP52R",
  "key5": "sZN2JSs9mwUccFQYLmR5nXa7nJhameSMrBie9DYFhxan1oqMbdZGaGd2PNYmdF34AjwdmAbJ2tyVb7y1HyVsSbF",
  "key6": "64Xd22LqgHxaPg9a9zyumdCKkk7gnUy6Us898nzob2vU5bteCNpWRPGKVC31ibVHjGMgwo71nyTF6kx1cHuernqy",
  "key7": "NmyofkMgPCUajwcoM3XG2uM1EuvWQrQgbyiD2fFMTJfPJLjjwKZeF52Q8f6PywYuPEYkJLDLGuHaWurfuZbqqud",
  "key8": "5JRFt3z9FPtQBY83pYJdyCeAbxGUXg1X1QDiEewm9sswxx3sGQwtj3tXwHx6Uyx1rtLKe2MowAHtVbuxpBByPyuy",
  "key9": "5SmPReP2cWVKW48u5ZAGyXryvXCvPiQamsyd9Pp5TMe3caA5z86YhwcKxotosYAqtaRs43HXMdoZVH5PYjLdvg63",
  "key10": "3isZZJRjpRu3kVPKR6Kk5Lew38XpnzDXt6VuwjgnUmQBrPsDYX3GNAsQHiWxZQ2xHtuMpwdBNegRC5AGXHPzcZ5p",
  "key11": "5tjka9TLu6AyrXN6gb5Ydkbb4z4gmsKtzL1WXyMmBTk3cA6Ppd2W7fSgmv9uRsorWQvzDY4sBymh2kK6fSSAZ2YV",
  "key12": "3CneLJduSt52wihERYpjWSVEcCfM5xqk18x8ZsLx5cVMD9bdju8aSuVoTSY9AwR4odXB59GcVQn6i26ctnJ89eYU",
  "key13": "nd1NbotBPesv6b5e32si9LoMz7dq1nVJ7TA9FZvMLbhs5QTRZ1axrbum2jWmA6QcQ43VPDsD15MBroipnTM3T26",
  "key14": "3R9SUDuttPd79cGRQHAMbVpt8V8AbtWWVjZ2DznGH2gdiST1Bp99qANg17GMu46vyrcGVC5cWWhMPcFYjeWG5Gzn",
  "key15": "H8DeTvENuFg9wrCX9pfEnfbCx1kA4a8X3vr4m4RNMtdZyRMaXnwmhVQSCoS5pPqgiNAbdVA6gG59uC51ikBKGAz",
  "key16": "5ab1u7Zo5djCvhizV6vmSWGaDPb4ofNsNQibTeHQRST2yzJsP7fYvkLkiwCZKfp9CHnYc1q7nz38SoSLL2oAsRZV",
  "key17": "4KmZGuURQNmAS1vczev4p8FTCuhU7Ji6T2sM1SKntiDrTtVe7MgXBWroU4ZPVCfdKdThhiTQ8SGgoiLEZNx3mc49",
  "key18": "55e7M4bwCxYdrTXsd8kYuvXyN2iZ1GGVTb3rGrF2XYoQqtBxoFqKdjz3vpuAsBtSt1VAdpKyrSaU8bdJskEoGD1W",
  "key19": "5JT2Atgxa8NCHHy3mtiiM3oRz9T5ShtjfuH4k35fQPZ7PESULwHLxBFXs2Co2Rwv8beV5MVavJ7C5rUPhCihjncq",
  "key20": "7RQA1Es8z7pb6app9UNwC2h9hB5E6Z1grgRPQtjJGTUDDdhakNqzaG1adhZB8yWxqYicbDXyS5NxvEevU4wCWkP",
  "key21": "58TdD7QkocHvKd5z3PbmicfeDrueFgwWkTriBLcLmZvhZRKyW6LahUwBD6sLydxPaH6kzJYaSf3q7MBQua8YCy1s",
  "key22": "5FNVKghAW8A9qfkbhEGLhkJEHDFakohKzyZRjgDjthQH5FEMAi3ueeCoczmSJYooro5MtZXQuA9xWJbaE5SBsiRy",
  "key23": "4Dtn1WZHd3oEVzGB9Y3F5dgBY47vqFwghv1YoHkmkmYLfqrL3p4KtK7TJW88FocgAcDus9R3sF9djkLJ8YUUM31V",
  "key24": "47ppeZYw6HvyKyQpb2Cyzh4TuDduS4vKBrBJfaJ1QjwG1YC6De4UFHjJ1rQ1TK9Kii4KP4zWUPKh6bo696g3ewjy",
  "key25": "ro35z16PmzvY7Pr8J3pBezmm8XGhP6fQuyfcndJAKa9XscANFHuLWndfqnPEnQYFvMucyzqo9RxCkWLiESKJJSU"
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
