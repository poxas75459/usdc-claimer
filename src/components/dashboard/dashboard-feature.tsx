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
    "4VKucXWvLCRWVUi9hzHx6LxiNgQYgB3koM23No3DRFNbUke6srrq83PY85xE2dCBB92FSpLjXiPqSvgXwthWBkYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EiRfV7oJQzbZBS2yFcECFtoNzo9N87masrcF4eQ7fQEC1eGNwFxMHTVctLXG3MF5XAvD3QVvra51CbTWKj5mYeS",
  "key1": "3idPvoqFt6i1WdKPfdmg6oLjCQ3icNcFVuBHT5syEMzAM6uXY7HpEpXNLiVb7DR8sFm59yTshCac2sLvcga7KYSW",
  "key2": "5Y86abwsrH1FoZkMsWZCQ317ZLzmsHmDtm3zcjJZAHPjk97hoYs7h7zCsVEG6RcU34jYyV6NrBLxCtt4u4S7c1hN",
  "key3": "jWRMQLyhf8Rtrg3wU3ggDhLpVWN8y1BCJuEqP5mhZaXZTuVJDteTJfu8dU4G9BeiXdxmP24Ko9QLboDHautRrCK",
  "key4": "uowBea8axYenNMprh34HS3PBWE6Gyr8mKyRX8wvzZSb9EZiYnk5S93heQBaXQDTXhCSbmkbb1nbxeKK821Nn7Re",
  "key5": "ETPKUxYb2fk3FnSQork4eTwfnfCDsXi5ZQnR5DxLWCo4mdYFqB1V53AV9Mhniy2Tvp8e4Cgsd378Qf3qY9spjRK",
  "key6": "3TuEeXiDRNuy3p1ZHqaonQeNzoDtPkXADeAhfjHj6KKjrbFH4UKnY8QPeEYBVnNW2Eo5DNDYfs3Fp9pNoM5iVNTz",
  "key7": "3AmtDp4sYEyFHcC6SDXjfXDj456Ti7fXYeKZ6ayKHNjkiYsMmi8CxFNExSjGxPjeQQ4fSJ3LUGBfeFsMFHQ2cwEB",
  "key8": "5tL2mSnjTGrjepCBoGsZW875G5nmduAUzPecTb49RxyJ8h9Jp1aMHVMkQDJD9Y4WnfkC1Lp5FCqHrgf3JonV8iAA",
  "key9": "3aJyQHDdNgi44NWzdmEwmRYd1q4nEtRRsAgQ8ywDyyKpqLwM8t6syuYbK2ddakGKjirouGLWxMTuTXS5gvYUKa9u",
  "key10": "KURe8TCzML5r3FrFfMvk7MupPU28afmvKhUBkW5HBHDfkKWMSBhHSiRHyY9jbAPjnU7kbD8da9wWEqM2fLrRCAA",
  "key11": "5Fz2tf1etGHGF2ssxQyVhUFCe8siFHbHyXhQAHmrB2ASZoxisni4VU3U2doaMuRM6w4Zg3kyg1hPpFRobEy6cJFN",
  "key12": "38eaCgjiQU5VDBdQyHLfVHCBxGGGVGcHkXu89E4zqwNNtiQpMbosSC36vmM93eYKuCUcYHmq53FZ85DdgVm3HX5Q",
  "key13": "4A6oeAh7P5JJL4vsMKzdxJkNvAp8xnj4AHHocrpbet17gM7rAsDY4uNsx9UqZxUEFvkmrP4RnZdTAiRk9jMarkZk",
  "key14": "3qajN6r93NFCAuvMTXFjRFv1b6dfGgGisWk7Aoqy4aQSgxafThfuf84D4cYzEBQtRhL74WXkrRciu93xHm8BoP2V",
  "key15": "4nW8n4V14cVN2Xo99W2MPsou36JQSBUACNx48ngG1duptj2jwYUC52wZ5DTV9dzh6uoMGVGUYRTLTEHyxZVyKuZA",
  "key16": "34ki6wfEg7kJFrPUrpH5ny6JmW9Z2pzDMP9CnsUJhdhMqJe5wCPWzGZjxfgrTsmLvX9FRbEHDYzSqXPvHFWk8rS2",
  "key17": "3DxnGJocqhqGaE7QfzQ8TPThSZ7sY98XW8dwLZ6hKEkWHrxyvZkPZFLupPg2U9A51wAVPA3cWquhqnggYcLcibkr",
  "key18": "5ezFqbVKgFiKzXR2LSiogANsHPRWr9FtxZqHqQceTJYRRx8ic9GYVjVzZZykbfVh7khQvxNmjqpqQx4ZxDWnYRoj",
  "key19": "5yg26sDAYo2hY6U5LYx4FNUse9oDkMcZnDXRXAV5RrS8Q7dQHJmYAJ4UaGi6iWqxYiY9gFUArwyjJLBsYoayKgXy",
  "key20": "uYn5nGGzKwu1UpX9nnYf71UpwAkSPMify7edZRNVEyf3VXTGbwszYRvfHJrNukcGFfEGSDNzxXNs5UdNGFGyYoU",
  "key21": "4x6UqxE8WUQLVkrNH9KinWWJBdMhkdHJHEJysDikxXC62c1QCsrPJvhRK2UBPsWySKJNTAZ2HTM6KjEsoZ3aKHMj",
  "key22": "BWaHx1pPPjEz1G2odFfu9gcUpBokfQNm2N8Vr7GLkiBHrXz7aZBYBpok4oFzQvBDQomQK3zLZ2cJ1UZLFZ2ZWCi",
  "key23": "2e8vxMpEb3sthFVpEk6it2yU3rSkEzGXyVDVvTKMRGnRciVqrJxtkLL5b4Ypdgz2Zi2fmh5quGVUrhy47ZSXjxKA",
  "key24": "4qJe6RsJVPmFYwvhrmJUidjiCcFcQBnXBgHShRfQznQ82KYV7WyazyjyUS68o87TJv8aZDvgJmR5UzTa26bZ2sWU",
  "key25": "3joWRfaQcAbhouEHCJHeJoRDeLNdtUUwasnEqZM1MaBaJuN2PAYLn8W2yKY4FjEapUWygimovhGvoswvoLEeP7wr",
  "key26": "3VBPxj2h5x5DDmZQabebLynwCdkrzqXAM1LqGeAS5yuQpm4WbN8ejpebuj14MmjT1uFn3K2n2kb1yFwzKzBx5LuS",
  "key27": "2SVjoZ2ao4bHWBVevv3hMDRBgGFPexu2bhBjHkf3y8zNZFJrhrZ4WchFHTRLJi2jRTyxPKj7nEC5uXFDQEcTAC5M",
  "key28": "ZdzNCWmvoE3bnBRv8x2Ae9aUiu26WXnXXDrDnUNQQesfQ3M56ZY15bbhtos8N9F5ZXAnsiXSrFSbesXoPrPEnc5",
  "key29": "4irGj5YkqCTyrCJ83BkbKcmc9tLo3pTugkyCmBa4Fx3CsfWWd29ymYLHDvKmSpdKiyo3o9dkuMnWsBmZy2d5WMFW",
  "key30": "2pTQmk1YrH5odhLbqm45E6htFpo5heEbN6FmiW76UhJKckZgkmTmbGLw2Se4jNRmoGLHqzrWW7mpjNMc1TYDTqnE",
  "key31": "5ep7oLHQtGRPCTpXKGAZwkNrixhJfqW7Wb3TT8TTYr8uFACgMVqVgbQ1ymEX1YjVwHGnis3syd7rp4EXoqP2p9DG",
  "key32": "ZDTkJeN3afEBTtszDtzn2xVgo38c6wiZQxR2SwyeF3t8QEkNvDvxaDc9VBeRYPmxRREsdFThmZAdTaZ5xAgsgvZ",
  "key33": "2S27CAcZbzoujFttoqDTARWmdJA8rTRTRUzwznA7mgKc2bGLRdBdMjgwcPzupnxqZNYsZo3KJWL7j48t9mMZqfCR",
  "key34": "2vtHgEaov7wfp1hxNMjsg3H47bgGjb66f8huoSXnsSw2cfsb8hgJYMJQWVDkE1mWKtaRaPwJJvjV3q79jRtx6Nmc",
  "key35": "2tAg7LqyE3VyHehPtoJCtj11ag9SZdyH6uN9zYxpccYmEZyMXMgkAFoPVGCZmyuf7YxzHHfpwjjUSNbLFPeAX5kx",
  "key36": "5wVD1kLLWFs5wzU7ajvNckyUCGCgFrZoLfWJCHMkqwXEaY8wtvc7FKwRwyrSiWhLAK57dUL7Xr9ov1HvzRce2sMY"
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
