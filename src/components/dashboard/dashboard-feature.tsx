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
    "4tgWb3VAjujEpGUksiQeHBnskLHafFw6jtKT9dtcXgtqPBpSwQA2bquvNg2vT9sCD9QoqBC8Lez8C2whRFoT1ULa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahnuU9cYPvdXa9JmLvD2RcXR3iMTBfoVXFHRjyY2WmZH2r3uNdAjU73THn2E5BA1XnKQmnhXaSV7vcfJdXDPBQc",
  "key1": "5ExFfA61Jpx8ZV3oYJJp6f6mWoHi52tGFA91RnuQWpGT8mDK7xEZZAXKDPLixa5dj352dm8fNUQqg6bBpZfv8WA",
  "key2": "pfaNTYyEyow7neqQ1Ygk7Pr2wW2LPfvKLzxK7NhuW7GAXir4nFwgn6iXHp8LASo6yRUFryYFzMKBNewFqBc8cMk",
  "key3": "4V4sWvtvzBSymV72EKjX2utD6xKkHkzYtQb9L9eH69qNh3A8kKMGG5jKstdRyQJ8NDPU2dg2cYURUK6WSqsXkxYR",
  "key4": "5iJttxjqv1dbdF7uZdxoyVAT5D3HNLNCDPiZxBUnAG9WsqDbbmjApkj4vhuCzTjFjXMQoASvnP6UDMp2cQd2E3hP",
  "key5": "5MPbnKpfgxfqvoLTfyUm18cS2xPkZkK93NeNb3egLiG29KbegLoHkSMi1fBZKKwdNthr2Q9mpjS1YTa5dkacFXvW",
  "key6": "3nrnAREVK1HHSEhxxzMBgLdXCQ9F3eG7RiK7KrTpLKmdsAuqUAmYirEqK5E94oU5ED8Ngkg8erxavRJbBjThGvjx",
  "key7": "2znqgPmVSMoYoifHmkohDP3UkU9F8ahj3hQswm43eyyNE4zWbVtGsUoWyd4vco4LhRdHWYMk4BvuBTsbe1gujsw7",
  "key8": "316irSwgjjtQmNTEAjaiJUeDBM8PMX81TEJyKbXdbe9WE7Xv5AmvXVeHYZMvMnmmENxvaVeHKSjtyFLUsqsj6E2p",
  "key9": "32AdoHssCT26ba5RRjNKHNRL1jhRLc7WD5Sy8Byfd7gtQoAaEVUnQTK6VWuVvRfneZAAGKFVZdbNdNN9k43ewUgZ",
  "key10": "3ftkbojutAdGNf2YomzrRpMsnVecYSXWuPqTAjkUGEiqTxiCRNSxGC3zLaexPHPM6NEZCQssWt2b5TYRUquUkh5p",
  "key11": "2MsQ6VeXeB9gfrnudhDyWw1d5yNxsjd5NaHcjt6UwyXtuKFb1FM3jaZ215LJkXry99jabP46qiUR5o5LE8t8hi6j",
  "key12": "4NxLd4B8Xtxbq3tySv1vP39hHze2Nac3kx6TwUxTdepSELMi81yLTrFWA8S1rA9iANrJCMr39LiepJ5RmEhHVpzm",
  "key13": "366RqtMgMncuEQmmJ8F4e5kEreNXtA1RgxgP84aJcH8jmMNhpcnPuZFYwVRiWzrC76HXxLSXcRkdwBFmvBa5KdsT",
  "key14": "4y26Lg79Px6jHVsVGjLQRizpKT2Kz6eFuoDbQiUQtfy2XJkWqRFwjWQVgjn1BJbXuPpH75xbeXj1hTVhe5dYuVu5",
  "key15": "4m4DnhSJTVS4i1uDexpDywYLRMx2rY95VKofDa7cTk5kdhMLNrAs9NvfEmqdgnmWxVfirF5siW7MQLukxY8aYph2",
  "key16": "fJ23z8zEbk7uWmdpYz4FJgE33EBmehEYca3SdMmDyB7hjCiXn3xyGxrChdCnqw1L2kb9U7x5cw9wJM8wcqCb9qW",
  "key17": "43aq7DT6SrvxLfTspG83VwLpTLmSLxpXxC1eFSYpJ4BARLWnykPBnNetYPg6b6HbxVewS1FojEettrQMPXfK8nGF",
  "key18": "4i6TRrBNPj2fxYqn8Ssv7M3foPzDrvEPrRdA1qZ9R7TDRKnpun5cQf7pYSq5nTcCY1LifMjCSz8ysu1xm31vNTHN",
  "key19": "5mb6kpio7XWRP4JJutrnG97HE2ckBQvGDjCuHAFborPf9784CWkaYqsiFTKUscQz6xHx5b8iKiNbGLWn9VzJt2it",
  "key20": "QoD2DkLydP9h5NzVMBrJLqAgR9dGGe6BVHwY1ccnnCLaejiq7KXnuyi53NfhWNhyEw73xar8LtGR7a3P28khU9m",
  "key21": "XXwkfVEY9xyc2eaSiavuXedwJ66VvTcTribuxjRVbm1trKn7BBnfiuNwp8XXbjmqg2crzRFv2odmXeZgJ56WBAM",
  "key22": "65fqzYNDQcpF1zt7UzjWeDiKSzXFNWpJjicpAng3PngF9Zb6C4nut6b52WVNqEfhDesyubqNgNcfDNwv4U4WsJWY",
  "key23": "3dUTXMa8UPL6J27Yybswuaj2bXYrdcpBwLxQyxQj6ewABwChQ8trEjPZde4sD7NQTVr47xmdXqnVMZsoPVG3598N",
  "key24": "32Ne9HSPiHgyni2jipARzFLLNjtsYrjsahTxiMA7SQ5LsDtHqWYdGCGWob5HKiuPHmdDHd5MBSYgVaQBFpHfwjcY",
  "key25": "5Qe5EUxLwMAW5nNBqTjcqZ5eaqEHiAiMj1Vwc1Mn6FZiMFNCrAbiERcxoZq7xVbBLdeUjDCypKkCaqC5KmcUzQC6",
  "key26": "4h8jBK1QNnmJPMPiFpKSJXjar7mHyA5d76CoxgSqZygjaZKnPPm9xdkPfZgrXdjXprGcbSPR2PR2p6P1HDb1TGxG",
  "key27": "3fZpwwSJ64H4HCCEeCNxaSNWLnxiAoeseDKZ6vMVa9DcdRVJ4akZ1qLHkofCSuhCCJ4NfK5W11ekd76XGDdpiG3m",
  "key28": "3D4fdwPzuhAkSvBYz67jj7hx9FgjBGhnQiAYr9QUALFKpZrFWPY41jrmmDajK4EBm3x3RuBPRFajrrQxKdn9oHh2"
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
