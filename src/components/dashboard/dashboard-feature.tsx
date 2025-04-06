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
    "5BrZmv9sUtyHcMTxjtFgvtux2AXHPKLaFT476hdLuTmJpy16kuG3BpLgJdRbKrZxbfRHZ2BkfbhLbBX96ZRrzfyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8paacV6uT8bnbUgFf1Jm5tyfSSmHY7U3FQcm66fR1KHUTjA6GD1cH94Rcm9pZwrPsWEzXCgSdmPMcKE75qJ43kJ",
  "key1": "pAaGbZjhBxyH8tnCXvkHmTxZxVmBgbuLvpAamGRFyNGrNRTw6ShVpDNTXKRU1fzPjAfnQVms6ocPnUqESuiWE3f",
  "key2": "3wPHFx8kQKCHzB7RRNZr6ypqrWoTodSH6Y12Y813qo14UEox69nwC5ghV87om4Yg7nnjT4tUuJLgqpurLcHBFpPj",
  "key3": "2qdwd5vpqrLcBNFo7yj6toDQPT47Ub5GBxc5hcwoR8rpdqaz9s6P9fFc4rKmgE15H2LxN91oW2wHnja5tggYbc9E",
  "key4": "GfEt5YHLowMUJFNFjX54eJSYHfpmVE8xMBKwt9en3MCCjuFh38E3HRD8P98HogvtA2aDrzcrnWgBt5PsC21JGKu",
  "key5": "tqjjsA4txEF6NgheXitMdkGT8cXG47NKAAEh1zd2mTQ6vDW8NLxhsm4eFxpT9bkEzJHnWLhrKc1XydiMRnEB1Gk",
  "key6": "2ApxRQuvTTfzm6Bjt9vMAdJECwGBMHDs2F6PSvEkAUmTyXk2KmBDYCZsvpjVoCebArs4sLxzeEicqzhLFWUF9X6v",
  "key7": "stACDFdBp9Ut6aKqFb85uThmnPbvQX7WhjzdH11jiBk5ampb4d8SkyogaUiiFf8yPcPdxEpF5THWAUDsfbmeVmh",
  "key8": "61KG5Z9j4wamarQ6ni8iAaq4X2U2S9Ts5Yf1EkhS7NRPYHPHDBZZhWU1KidhTc7Dx2moxMg1UWedQtyJPLWBGuxa",
  "key9": "5j7Nga3kta28PPHPc67aLn8SoeWqv2LBLaACCR6KPru1PnVmovgzmmXdSjArPgTwESsgnGSX4c7AY72AcRipE1Bf",
  "key10": "VTut1vnVZUtXfp9hCi4AHJURQxL1EJGgi8vVmANmokTuM22ugDUEdXe8Ucq8hKHH7L31NF4QHmZ7FmeJ6UnZgdf",
  "key11": "3ochtArdekcC9wTHz6Vr6xT1tsptkEExVGZip12xa6qsYjcDSpb3q81ja1opC86PpbYFWS81p7NnRf7S35FPrxDA",
  "key12": "2hbsZKWdaob29Qa1o5eDLjcsvfEiaPByis21DHT34jU7Dp4gQdTf4kwYPWs43G7CWPUEE2n5Dkz9Adt4ZkUzwj8m",
  "key13": "3pW72eUd5Eey14quRZHfczM8En4hdoAdk4oBmjionbcNJCrUzoC3eEDzDf37giPv4Q4jaA7wD9uXyBwZY1KezkkB",
  "key14": "g54Uia43nNQooQYezoRvBoyYYdosGhb8fWyDAHgiy6SPDMPjZMejXAaSE1n38KsP2eGyooKmVjSUu11ZkUDPMhX",
  "key15": "3heXdUu6fhTUCqDUThRtp8jeLu4fPRk4tTKFNvNWwd9aD7w9fwsUcao2eY4gVv6gKj8UcYPXk7dhu9eFMqCTMvtu",
  "key16": "5C873Ui2xZGR1oUBV5tNVj9ZSYttq1EHZykVqaRQcdGqGmTT1UCpKJKscpB3samcHom1hLrLF5VVTyKDX5xwFg2D",
  "key17": "5imQ4gmXXoXvrMymzNyvLc5eU6dFEdmyNfUTCrXCHbqJaXRqJdjYV635MTtKVXkCeFj3khxygXcLzcHLWHVdf8CJ",
  "key18": "2RoPPdknRu4jvNeR6E6jjMQa5NyBKTRrJ5GjUWbRyQGencAD1Du9nifFjWuo297JCpZHDCJjPbrC1wqWzz57AYSK",
  "key19": "5xJN3FocKpo3BDHbvDhh55jifZmTChZydMB6YY7HkMK8qWPjDaiUutwED7NoiVQXrNjbofnJnAyEnoLYdf5xhzHV",
  "key20": "4f8EbrkKxaS1MonoBqNg4ed9FJZfXwDjBDdi4VkRhJnKPDNSwZrU2hu4zj1Yb83N9JVwiVFE5vn1HbgTXn1Rti4D",
  "key21": "4PYTDQRpi6cJzWWY5ybdkvnGuGKap8Hwco9yCm8krZ1x7jhLHNMX8pDe4Boznd8FmvkHqQDuQp1FBEojMdCaB2Pv",
  "key22": "UcaVfDEg3Fru9SfY4xqisayMjPaSLFCUBUjwYbXb1GXx7L7zaWVqL82Jg44CozcoP1PqFuJuuS7x67nF4kEwWzS",
  "key23": "3BYCXSAPTZAxcA1VyZ4VzMC7q35NJLiaaLT75ieZznK4FuK5kfVaLbyb8R711q2fpLYzxZ7TS2W2nUVCL8QyAh5Q",
  "key24": "2Uf5HVi6mEXL8Qp6ftW2C85ePVUvCvXjQeteGMc9DrDinDgkHVbw1CyE1dRJBMXArm7n98bHwJthP2Leb1FBsgzb",
  "key25": "3uGJVGEQGcjTGUTZShb29ua1VqKZ42egxRWXUo3xGwzKH8zLDFPqYtvubBynUWiiXiwS7AQp1XNJsvrYZnEeCMpJ",
  "key26": "uwuWiARbs7SYQ3TwieFnxnV2Nqp1tnaL81dJ3KDAGyegQK3Z4EhKS2KuXVBvaXJpXr3VsEgZhMFMfx3wnVnFiGC",
  "key27": "Hh2AdJnadzB1zGZ2Wt4Ks7qYYiVYnJkkhnPgXDbnHytebkLw2e1sUVS15DnvJeQS5fYk73u23Nukbq1mPTy6BtN",
  "key28": "hf6XDt9qtDuViZJywmsQRSZEXyRCUiTc4SuhNRJ2CaBjKzueNRBFsBkmp4FcbjxsWxLnde5qgeQoQqZKHzcXsVB",
  "key29": "1oZGpNcnhoqb1zrLiaW15b1GjEN1yTktMr9eFWmY8LNjopJRa7G7uoy3TWiRxsSGAencaMaJgAynjHqWufUB8Tc",
  "key30": "2GsJoR2wXkgf9pCtuZewMqXAzBtiukGRvHS5ecvtHpKpJVm2kPpiq3FxDVqFaJE2YwTijhjKc4cTXLcnQGJS2dAB",
  "key31": "3TQZM3rH7iB1uCn8QicgG8AD8EgK51F3Q465gkHDbpDtzsdCZNCZmQEQqRebARNWDqyjZQ73r1dyBr5T9PzV5oEZ",
  "key32": "RqQ3rbbVGMKHY2XNFEGxXnjr7vA3eqbK3smdSUXdipBVWtMoXFCaav4yTvF8tG9kARKF45e8LxNGz5DFiEjCN8v"
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
