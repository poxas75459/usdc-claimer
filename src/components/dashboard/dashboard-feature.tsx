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
    "3GLPr2ctgqDNGiXZQHU2Vc4zENyBb5ugkBH8bZozzfYXTsEY7t71zJceS9CQMf6ueAyUnwn37JKbfaNYWEFcPw6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mft4UHqmTKf198TuMg6fx3JQPW6sa2txPpM7dvFV3DGv6Uae1udj8SjvAFT3Wbyerz1ohaKWxPk6cRb81s8JFXh",
  "key1": "2GGEkhZkKSVFeR4eJwytcUcjksZUdZXj1cq3KSWFSAU5BQVca1Snn8PS5qmyBejutR5NVerjmaQjZ9nZr4ohTwe8",
  "key2": "4vDXc7iSfNWYxjbdVZ897id97gGdkTfYDoqRj63bvg5fn2vAkTqL3zwi5R249rrCFHR1bDUDqwqVf5B3PeMV4g67",
  "key3": "yK99H6Vb5Yijhmz5qMvSyUxXY1wQMM9P6D2MtJnCRaEG7uiBnCmDbP7uGwW5TdbX6qVMHjBjiKnzC2jTwTNWJP5",
  "key4": "jxBYQdd1ss3HuaAobF9t4S7k17CNvWWj7cSbEBnUAg43zbmd1GRSNgzzfmMhVM6Dci65YBJbV7bBWZGdwcy7HAX",
  "key5": "5fAUVrtVC61txf9ETNfYvmEDPhYW5tWsD1aukJdqNks1THYgghWgSkDu3VQC6MpuoAMaGcHfQdDHjzPwmXpFYWcq",
  "key6": "QspokZyH7PaaqniN27sJ6gCKK9qvmjJTQ5vUW27bTkXsQaHK1VSpKNrVHM2HSE5sCmSmJCZSiPs9cqtiZaDvfx6",
  "key7": "mi4niYCp6daM76LDXBLFkMjgvxH2ijH6JuzvYrK3D3VXaaBqDWxkrM4e4VFJSfTjy6s1jYNFKfs3UixYJeTLLZe",
  "key8": "4fv4Erg1dgduePys2rLqP4CTJJbLD1ssXRDMZ7mvpEBeSsKjpxJMz1exoKEr5CJFjojkqPMrBmawZZraq8axZRUX",
  "key9": "5QyXL7q2RLaGxcjxzma1nqXYf1jiAqe9tB684A8dfoLjcek4UgLCPgzTKzhiFWjkedp1cFx1F2VjaTYwyjsTSC9F",
  "key10": "4N97W9osNfRhoCvLBKyKJ2d4KWvfhJpc5ULTM9YFBhMfUzMr1rC8N2S8RUzy11Du4FyS5onxk3DDgUXZ1QKde5Wf",
  "key11": "2ApNN4TfEbKaswbTbuuog75pwPtRQeMo7n8jeYD8UUEzqQSKs6tnLQ3afzwtWx8gnyosmfqETnrLBQrnqtMYdHyx",
  "key12": "TAHo9rurkPUDFU2SWiLLbDaVvMgxSXqU8myqtttg7J4rNVzcFTG1TS7XHQFdyFbY9oFx2ceA1ksgM1ZCokUUFdK",
  "key13": "5nGMQFifwUhhaiNEJNSZEhoTWpMPCxFmmbkDcWqmKBqhV668zEdXJZuJkKd3Re2xUqwuPYnpSvDJMSdVJADPTSX4",
  "key14": "ZGs7UrNjsiffkja7wcuZLZuARJbidust1Htvr4ScXLo9EzgkrHvF5AZzieRXTQFdDBTG5pbhsVQV4bSFEja1kvu",
  "key15": "53e6fsxyvSThVHeRQAeC7Ls6xfD8Xy5o1KCrmEAkwGUFYXJ3Kq3KEyWEMhKHfnmG3aiBdT9wykCo4cw4sxWH3XUc",
  "key16": "2jnd2merGWtcN6JCaebookPQMQzt8rbQFpzVyWPjnzdsJT6dKnjJDQjv7rRYcLKEwdqrNnnLZrgBegGhvbZB64F7",
  "key17": "4BxgQKjFDyQGeCkzTftP572rpswUV4z8TWMbadATzwxSLYHHzVPR2mvkkewU8KbqSuuqC66gPjS1NfB1v1nC4n1e",
  "key18": "2Mvgrb87qwVTcWXF7Wf97hYNy1nY6kHV1NSWTWQABtFMNA9gFBTgKiFxcXoE6smuJ7kdyEBjBuMfV5ySUge4fV3D",
  "key19": "3dG2RUhDNyWVEYz43d9coejhaSaqn8yxhGcMDzbuwkgX9Y1XjWQZ1wAYogbmpCJu1qEo5QP8sQxyRYWs92ZVPVpz",
  "key20": "3m9H3NZPwegLmezpNLiKnPC98nKGAQdcMrM8Bf6MPVEasFwttwoSbTUvcvkDvDLF2BqDscrD51TqQjgAPkG1xzMo",
  "key21": "2pFk7K3GRbvAgPw6N8TmBBjXufBvu6P8B7yrEojfYLTdD93hTu4t6JvUgg9xEkdqGGZ5YMrw7XNQgBuTnVH8kDEt",
  "key22": "5kECi76WtLdwQSufsvq6Uu6Koptqs6s9wkGTt79Yu9QythDSFNenX558M5uhwwCfjHeD2gReRdgooDDqFxn9JX5J",
  "key23": "2VwhadUnpdVHZJTAxJ12pKrg8GmKXjMUKEsuXEeXENHx5JmiT5FRyKRTReH6X63ZTgoarhMV8qCnsnJwwxdbFj9V",
  "key24": "VrYFsBsLrFymMTuQ86eCAWnDtDZqjSL3s49oChbsybZJcjigwtSwSsQvgDm6DAeSRRo9vQuq6A8p1RxbLbBWReY",
  "key25": "2XyFNTBzgBv3snMxwPWiUTop3jpBWeM2ss2vxnorDzYD4fi5c6wDXnXEXWnbixM9MZ6AysnbNjgXdJd4coqgoDWk",
  "key26": "2i49m45yX6CEbaAFFVcaB3a2NFdmopWXXF34QmeYDTTN2HtLaDUFCWWbVeEg1kA12kRhEZ29S3csezwBUcwcQ2zu"
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
