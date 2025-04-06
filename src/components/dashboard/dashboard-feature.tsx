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
    "3GmXb5HjbSXAMMV6CDdxScnmwTrZ6khMi8Wrpn3QqgSDVL2WoLMuEUBLQDd6aas34kx5AXvxU4Cw91BYTf6c3Dcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XLhzkMXJHTu32fqknBpeKorWP86uYFaQstYT75QiDrr9nQ8ajz7pztgYvs9p4XPEPsWN5L3YtoARUMptdWPGhXt",
  "key1": "4igq4p8YnajPJxSNweMkJQAWPwbmCQjGc3axNkbXjmw1uYfmqiMsLVKsNpuEBMDvww31bN1Hunh6DBmmrS7NX4uG",
  "key2": "3wDG53gRsbtXXGBxpj2P87pm3BaLSuadhRBK83yXRNTcB7yvnbwXx7DpndSLmnqBc4Z1DH2j62ZJAgZDQBvqpPL8",
  "key3": "5qcxnppaUVqbwkd6G2tLJVwS5sQ2aYAUtNhjBcfcoM57bT2NCAiXoQriN9pV2DnBJbEomwUr7mH4DFkJ6fM8rqpc",
  "key4": "2k3u9mHKQKAwRd1F7wJVp4FrtY4JriQu1myfUSzcRmKJyZNfU6Vkf7P6ZQXbL9yEb6GYSQWQYHaMUbdzhhg56hKH",
  "key5": "Yxf7RjtDGZv7KbNSdY23sUDAJaMzyaWMPe4ze5mWnHQ2X5i7upv7jyUzLrpzesctqSU3SpfHdppSDXkoKNErwXp",
  "key6": "3UPD4NcFSKdw3Nf1coNKFuvgxYBKo1iMj3CFVBs4zBgyTzecoT7z3H6XVqjBchA7XjvmEh4DG5UKVez1Dua1S66T",
  "key7": "39pHdSoucnHmJ58JzVx6j7JGchV6arKMDqgY3wZpyAqDEeqXB4BKrRqnXazYDXNxnoHoEzqDGoDvYfy6MKcVvGm",
  "key8": "3GBg7Z78MEa3wRitqLoo63paBWSDphfcTpTJ3WT6YvkEE9q1W4VuCU4vni6qv367gXhoE2uXBA76aiN3KAqZvRRt",
  "key9": "3KRdBCTshF9AATtVE4avQrX24hy8DmS2YyuivZ3jppL4aLA4PsPzMu5DAVw3j9CcZk3YwUCxMMShjNzmsd2FVTxC",
  "key10": "5tnk74ku5r1s3vvMbM3JVXb1xPbhTG1qpHgfxzvA3hi9pNUyVvW5nnXQQcREucBSzFrLRZQ6Cr6R6fRPhw9RdnCb",
  "key11": "3FJLzJEba8Jye4xtHFA2MCbRa3CpKSv5HM3ZourdHeg7wwpya2hMpSxvD9zeoZ26X78bM7PRXQ2QvBiQqhbHHp2g",
  "key12": "5Psm8xkgLMF4LWe4HWsUdk9KiZSAy14u2UwfaNJtjxpYUm7MX8wVTzN8ERN6XSzM3uYFDdaXh1FYgFDejNBYsVcy",
  "key13": "345epFpZxfRZRkAx1skMEzch7HYjPPk4cpo9632oxdUMfzwouDGJHcynC8tkoKgJL1R3HZEGenNcyGXHYp449JpX",
  "key14": "TRz4nk5dRyHw8XRKZZHj4zeFb1Mujv1Smc3cLkXVwohMPLCHenCLMEzKXxVumbRwWBJTcBChz8VKTjpN1PV5C2p",
  "key15": "3abNqAT5F1TwSdekjf1Y4hCxmpXSYSWePnE2svidZHrv4fgK3xq3J1metLYinPBXn2NWdY9oGLb2suhCUzijup1o",
  "key16": "378cFVc9dPGHhtJMyYrr8pqZC7ZSpfcfSHgDjfd1VwRX6PLfgQgrgs32Fcugfzv3JULhWx6XkCJhJturfZH6AKLc",
  "key17": "43hpN5KyodjhuNez4iYLYMQGJXMjkxWQo5VWTCBFhMZkCztidyP1TVHUztjCZno7B1JRXS71dKFcRhrf6VwQejAo",
  "key18": "3VB8TWxi2xkN6gmksiNbLsiQemTnMpGmv41cTpbVLxibs9cPTR883t46cLgw5gSCtmC9xUHKWFoU7EB3YR99X1HQ",
  "key19": "3qqmmFAUF5rG7WRA9pcM2eQpJhsqyNERhMzWeTdCqCQSDMqBhBjk3GXVX8oMvGcmxdrVT2gmroRWJXBDaB1m9N8K",
  "key20": "38N2pxosFnMRWcTU1ktgH1JBoiTR3q6mcmvtjLNLJaLUyU3zYg4HDRZH78ZFRm8yv8ePa7G2TBo2Hwm2cTh9WX9m",
  "key21": "66jTvGGfBBiK6BLwihasys6BpXetk7ndJMixybLxKhDT5ykoQVhgjvbMSXmtcNiwxfUpkBn29BVPkiqfZcKrJfWA",
  "key22": "7VHhGppDF3AmGPkCnLQkMW9eAQPj4HYd7oJZ66HYS7ek7SZkpEbtx2ckFrYg3N71qLkSs122TDqSJkEEMnfcGds",
  "key23": "3LmQDjPf7Yiuue2WDPV9pyVKuqr7T5UuhojytCbXuLy45ZzvYC32tCXNxCWUb6235ts1AJkZ2quh1ZiTbKTZijVt",
  "key24": "ercBjnL4soaFVbJPGJr8RYwkj5AoTFSRWRCjVLrJMGdMVRXeL15TVyzADZX6pBabfdw3tpv1vsnbGMGgzXeQNRM",
  "key25": "2SH5C7ZErpuCxtR2PJadDsDMgi7MTNNP7dvaatfvG2hodoseyjRLucEpYcdVpSBLnyYRF8BbP2GfjZzWDVEN2KJ1",
  "key26": "4wqt2PXd66ipk8Cue15VxWzMeFEJG1EGZyQFhkKX6fyZVLUT1LB9ngd7WYppYnq1EBWsLE1mKkx9g16qu3ehpGnr",
  "key27": "5tyi3C7k69Q1ev7t6w4vxtdyrPWZQ4QkBjgdmUkiFaEEhjR2BBYDUoJqkMDz6Vn1jMSLRSvrMoB4aAXpqrGMKFCN"
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
