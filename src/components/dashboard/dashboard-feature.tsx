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
    "xuvoYmyDHuyHfdy5yutGMi6TbUzDsWNW5SSWeVUmGf6Q4y6w8YJ5FLQkdcpa1nRAkLRPJCBo7DzPqhDgdUcbg18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uJN8o44U7WKcKoV1ENCFgX4Zq8TJfFzcLpkw8Rqfr87mtfJHnTQ49FXLBNLwx1oKL7SX9LVynumRh3RJgRwdoqG",
  "key1": "4srEApm369QrXzXELh2JM2K9jprp1x7XyS1C5mddd6PUisxtw8wqCtc6FMsT7m6pJrAoPEuijgXZEX3GX3sYWoG9",
  "key2": "2nydP83eXEWhsJ4RLFDyXAF9QKgcmRzqb6MQ7yJtW4rC1WpexF4TsC45VsuBPkSHv6Ya8GXUZhghiBaDpyNUQgDk",
  "key3": "ixbZJ8moaJLndiEBeB5WY5CDyTmRsNHe1ctF4xNKrEV652Z7HCxddDMHqQPVNQV4xEx6LfeAp8FZAjiZuDdSwtX",
  "key4": "3dWKNDcHKSAXisyN8ZZPW3iZtpHD7Zbu9SdWKM6CFENucui1Wt3XRpccZDzQy1sb4nZ2mMMPufwYirNui1cwSPid",
  "key5": "BAxJbscAGBrQqYBPFD9ZkRrXXEMM52Jx7WsPXuXj1ZAcGZvNbUYXbJDNKqfs87r511LzWxx9b2ZHUL8STnKEmQS",
  "key6": "2mDnHYaEbfvFXjcee7vHAnaKdQr63wzc15EfxXyyz2TWuwFspixaZPwkRD5BATv7CdU7iAL8uoANQa3JziHbhn4L",
  "key7": "oKdN44239HmHUx5ZKZQ5zPgKR8mwmq5jN68YiojeofRRqwSGYTtPexjtSNx6YQpYADkQqpjEica59ogWSzV5cn4",
  "key8": "5sGehHgUM7JrujFMrDP3SWw9gUKEPgHQ32e4y7fa84aKVkvXRMdjzCM8k4dsUpxAh5SdwyCD59hHkJioSGf8DSKp",
  "key9": "2EaVE8BFjrjFVf8vxVchrEstin3SV3ftqjuBSAyZF8LDpRAWUeKJYFcqyoEpDrLyVuMYyTKKRKkTrYRiGfWPkwx",
  "key10": "Ai15e2UoK9StSv8iak6m3bFBEcUbWTd9GqPEuASu83Nz3raE4DdHDCNWejJfD3tFwLxSz1KCNU11dmgKULNtTf2",
  "key11": "4oJKVbi2JGX3sSHdrfzhiigkKGBZhQCq97vAXyv1kQrhRVV8yHM191wQcHjBq2kzAkDqtYZRai2EkApBQt1xHSVp",
  "key12": "4AAV7TuUGzvxaRCacks5XGukqWnpAtJG3HpTFnZmXGwiu8CDEkMrdqxAC7EC3auK9SQcFgK3sjSH4gVamvNcN5aA",
  "key13": "3iG3Jay7rVxsFRUGonRUefqffe5LvnJSdZMSFZzVxJgnH216MSN9QNH95oaCvZjSL2JdMJt1h5oteehvV6PKADom",
  "key14": "2x62ykyMLUeUzjjSM1iew8vnBKzz2UbDsZkVnyA6GSmBUN5ihYLordYv6UwegiAoN1UEY9tGDT8fcRjf3Sz6rB1N",
  "key15": "2zjmNFSBr5mGc61qbkTpLbEYA5F8vNaVt95tEuFKYLwDQhb6GrGSM5BCCJwXP6iMtwyqUGJuJB3W749dKzjuuJr",
  "key16": "4HZonaZRP6mvcJJ4oJEVwCLtTPizuNsVEsXw4FJigTnEAG9Nf7MJuiGgnQo2cK5WTmCahn2NHswhvXzibNB3QF74",
  "key17": "AEpvv7HMe4ucurDKRTB9QaaahWApTspciJSAXdgoF4NGbwXDV1YZeKSTtCLQ3Xj7ALb9zNUy6Tf1stoQuCKBQ7M",
  "key18": "5vGcBW5GmGMnEphjmUr6THnMyGssCULbGBhxaecx7wfHBKCxpAfM9HE8YJy9Fgar64zkrCyidcUjYmwugLuqjrRd",
  "key19": "5n47NHXxNQPSBLhxMTbo9hp2vQsx2Uy1VJcLQKmVnw5MsQkmFeCV2gACrtU2scPPHDL5ikgCn3FDx62v1ynqheK",
  "key20": "5geNLnGGtkn5PgZ6xUZ6cpHJZEdrp8DXFt61zb715Bu5EG47s2Apup9syP23ww6bNXtwr5Nk2LLhjcJBPxs2gGwE",
  "key21": "4cocKCcjSAkTvxdxJ62FgkDDZmQWvouMoKtLuAJHNs4mLqLTRKJzAXk9KP39L9zm3QFBkt8YHqq4GYygFpdpVGK6",
  "key22": "2KTQn3CMf1UR21NpoyLWBYNfuo4pMR9nF8mAvywBRiUyjSL45m6HhYazpqnk34CgrKdQmxiMKQAGgUZz76JeB8cT",
  "key23": "5cfrFuJDur1DphF4BGfQo4D4zCtD8nGHfE1CPfuUQenBQ9qTBQiPZgTjLabZcQV1hao8rpvB2PWNT4bVrbvfugWJ",
  "key24": "4AxDtrofJCPJJF8WFKWhYtG2t2grBGZgY75jMCRqr1V9p6owB2fi6gvmLtQVL2WUDQVHNZDH5TJRJRfWWYTvDF3Z",
  "key25": "5Hzw2rUyQ8FMhxzHPK6cV2o6VG6v9sG3NCmFPjuoQ6CARwwCyKgGhrZFm6CYCKXWbfafDAn2qiNNmFiQB3RauD2H",
  "key26": "3NwtHnEQRY5ERpNjo28t6EnmDs2JaB7sBQsiCHSDAWpDP8cxFZg5hy7WfaQ8BjrkRBCNNKwR4JF51wmdwptwKWkX",
  "key27": "4XEjkAzqqRYVGvfJLTeKmAAXUZ8sYYDWwSEzmkNVn7mYCiRVhuGS2SYfMeA6bA12VfS6TZYU12YTdQ4HLqK43RWj",
  "key28": "J6UcdnW2Ki3Xzyp6ocjafsbhvodPmL8ByEYVLNFreE1AkKpF3downg5cAAB97eGNDzMtvs5pRJ4rP8gizrPPYP8",
  "key29": "3Xd8kAhP6pjN6qBvvXcdEMb7HG3j1fZGjHKkJ5b5KRxohp1yq7RUSkFUHe96dpThdto1VvAcRB9DwundgFKSRxms",
  "key30": "5eaqYpTYrHocCWfSYUrZtftZKx8QpEbPVLHgxVVpZyJe4GEPQw8KCsuXPVesg4PFGFRGit13VfsXBB9y6kuAmkr5",
  "key31": "65digXVDPrWMuV6EtMDCri5ASoG4azmgLYGtEyDHtH4UE5PfBN4xyeqFhihnerRym4fVWquCYrBwDTPYN1CGX6h",
  "key32": "4pk3RNcYxAtuL1W9VJM2ayHwBqshqDY3WAP9DYcYiDxwFMZD24qnE1kX1X8YvqU7NnBPqL5N8S88A7NPHveQGSg3"
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
