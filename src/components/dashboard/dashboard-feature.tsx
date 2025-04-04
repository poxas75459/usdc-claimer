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
    "3fhQ7FQtuH7LdBFKGkvp13TNGkxoZ4mw9ibH9fjZMXdowZVajqg8qPeTXuAuTkUVPeBFD9gbgLBhrKuN2Zxm4Tgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jZv42B38Kg5jgKTmeNrQ37VNQ22bnFdsNXBSYxBXooSkBRmQsg2uNg7yWTjFodLXnhwBg9NzzyKQhvsigYjCkHa",
  "key1": "53yeCSudHQAFi9sKpGFTAdbTMJXfKxccBndHWtMCBFm5cPEdqsqjtPcpuvsXT3jYUCcqiNvS4TqeDG1J8hRitypH",
  "key2": "5eCaUXoHybCUo7asnxTE2DmLBjzpKjGBFXV31zNgSiL8neybhZJ5dTHSGGvpFXSyNS8nAA6KtdcPizhMWTfN4jFT",
  "key3": "XyMYoDA6dtwwfjjDxGDvDhZsGgQASt6p2Ked4NRfTXswC9CN3ZT33sSYDViW6WHwVJqd4HNVgVdPz5iJ3tYxKsg",
  "key4": "2UaLz9Rj6JSXuNiaZW6bj5fBaiuzxSLqPZDSnesg4s59EtotrsSMozN2C47mw3DEsEnop7X2kMBLvo6wMeea95WN",
  "key5": "2t7LcCCzMmKiGgWkw6NJfLHz1Fm7WaGZXjAvxZfG7r8unTWLtJxmDxb6CtutXeDc61Hv2scGbpaKvGobtN1252NC",
  "key6": "2zmNycXnYC45e6K4nghWfvgcGic6xUHrGp65GZLJGwzjYHNqyZ7XfjwdH5mKVC63eL5wDcZ7YHuPHcBNdZxfQZbA",
  "key7": "5gDXge4pRkrTihnqVHZonPURox66hju2EoBykyz4h4944sZ1zRPDXLYUBvyTPMasxNgPwWbYHzDevXkq1bpbe4zN",
  "key8": "4TLvsqrSpvkGo5wtsGcnRKxsH1osqXHNqB8dkh4nJUXXRqKugqndJaVq8kaPmeWkwgEDU8Px75uYQJh6jxk4NHSq",
  "key9": "3ZjfXArRxz97srcgJKNfELoCCuLPVoFzD9HiVGgiYxHZjy331ZfGuNzcuoHBNtXr1Y41zs4sJRCUQxs1WhymiYkk",
  "key10": "379R8U6HxmQL26YmFECPQDjaei6coLqkAUi5bJE5A9YaGzXQ6e8hxPsx7BNk4FnnMoWACw7dWkeX8EwyfN5iUzcT",
  "key11": "3pjshn9nyv4CmNsvHXUzTWmLPCMCfTLoR45QQjK3RYAFR2JjeLYVb2b5nZAosaUYgMU4KHLxLzcu7TWBQAyuuaum",
  "key12": "4YGL3kEA8GHgFtdgm9cchuSUoX4rozHNWvC16dHRJNK8tjkmToiK8LcJhZaHdxVrojJqWAVxiHNM1ks1ZBy5CzH3",
  "key13": "52tha1acxQUMnT3Z3KTj33yqEESf78NJjcz2DKVNFtZ8JCKwjfwBa7J3hHNHTxEdWAxQ5NU8svxyMV87Po8iP7cE",
  "key14": "3eEv7tDCbuVtDGHzzWhZUhXun4X6Er78oSMP7qdELg3KR4h1BLfnj8fnRsAZ66CieU9Xs2UNNqssEUmpgzoow45U",
  "key15": "SGvx43n6AY1gmUarGJVMfAsvgNrDwmhgxwJv9ecfimCWdbZcs8xpftNGgnoSPU6rbxs5AEiceKaSFbPEU9ksY8F",
  "key16": "5KorsXiE1b3vCzgjEjSTmtWCBsVduiv3uqdoS8np7ErTTDkoGepMQTR3PtUYGJYSgKXj8WUGLNyfmsQp3qh4osEv",
  "key17": "m4fWZBdYKqB8U56JRMZ1qc1aNTVSETNpMwygKAw42DQnp379F9otsR3nBmyaC5LC3nT7S1CKunYTSf34ECnPxic",
  "key18": "5tsnKG7DDFysZYubmyhMfeGMqDd9UX23cnF3pD3buwgAb5w6LGz7wuYf4UKBeszZN5jKCKKLBS4L4boW1PtuV2sG",
  "key19": "36DPfQqjpAvjehMrAaZjAKmSnyvNtrYbP3efMnCgVMG3H9TcAgrJ1TcsKwp9g3LJ78VCpwLNekeT5xbALtZxVY33",
  "key20": "3R4zXFKAuz1cJJFHduzqNvFbyFEHHqamhZFAKp1a6MnjDPTcRgg3VsAfN2aJMaMqPWetx23CUWR41TsfinUyucBy",
  "key21": "4GWW1F7TTNsK16Jr1y7NWfHyFSGX2Ex3bPkE29mGAqjWXA2ikSHgmWBMVZ5xeYji1AYDaw3wPVBX3CXSBJtF5fdf",
  "key22": "4guBTBZBHpu6ZtbeKnFKVH8J1zPmd3dbkNqAG3gy3kvw7DdzNJqUSKBz5KMVfnv6DXDAJwNobLx5jqyFueMBeyt7",
  "key23": "YdResAKRrbACRZ5qXaCUMY1FyntATFLpLKStqv8uJknaKSTs9erUrH4MrxtwhdwZGm5eNVHyZmzaePXihEPcZho",
  "key24": "5yQAcFM88oF4cZATT8h4XSpNwDahKRV73Zsnvbzcsmndj7eB6AmR3dKu6G2EGDkyXiq5aSPfWYW1d4o3cu9YYAZL",
  "key25": "5fPS8VAaYdb5SaNwg11r6ocUPr8TVgGAjj9B22cS5cZbsG92y7jFZq6hqPymSJYGX84TmdGeCFy8Uf5zi7WiKY6M",
  "key26": "2eU86bH2fjVS1K47XXbyTkS89gxWeaxxy2tCJP9L1pQC5fqXCQdAUUCUdv6ZboZHWZAxAKGzYRmtrNbqbMpSadTa",
  "key27": "4txfhDpuqLnWPawKFm2raRP4zBrE2UFUZq4DVfprvDEuxcgktP4WLJpVzEkKWJUzDhV8v3pytGGCXj5EzNyfwaXi",
  "key28": "56bjWPF5uMwMsyhmwkVh3fjSEiMFwvLiBkdYZYQKABPGPNnX8vUz3mVEwweRVNdiP6KPwnLaYrp5XxNsVmoF79rR"
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
