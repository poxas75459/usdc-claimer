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
    "xcxH5a4P9Ji5AQ3Bkfg6sq9cUr6LtgVQHk6bwvriaBc7YSqVB3ghcejz2WBnpkcXMrRdhcSQKtKVaGBaNHuZgbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kVcLM1wnWmSGPnofNha2h3bizCsbv1zX43TXmxnJBXNoddu3v6wyqDnQEavyxu9DtCRrS5Zpn1yyEK65U8b4JWY",
  "key1": "31oHqF5jUgqCin7i1TT84h5baxAtu3nBTutmZqneMkGVDP3jrSRabfKQKQFiyDu555g3kMwsfq9WhaJDC9jdATSo",
  "key2": "4NC2PLaeZkEJCvCvn55MgELZoa6gBoLUnn4zrtDPKdnyJRRQUehvaJv7zeJbDxZc4Xhp9uWiCiVTB6YEXJuxC2ki",
  "key3": "2C7iMt77WwmdSfWLsWdCEj65Q3vPLowuzBZB4RCqwqocpFWQEXQe4iMn3YqhXVqmsDmb8AK8QKpauyMRemyWz39j",
  "key4": "4kMuK2pzEKMVAVvFQBbeQPfAGWtbyuv1S4vD2t3PMmz2yUcF82pp6uRVvWU189JiVWwFyjLyfh2yP4VAAvmYPEn1",
  "key5": "5JcoBnH7MLfRYyEzrHn4YgsEojGExeMWm3vfHDjbqFx6k4td3bBAChgfVVhQPTwuHMihAtVRakLZkGgRPgsGy5SP",
  "key6": "5FpYZUs9wFw9z2YJMA5mf1dCWs9rL6eW8YciBn8P2QDCeEKT5KWQsiFRgd9TewfcSu8Q2GB8yfdhfWV1nJ9go5hh",
  "key7": "5VgsZqnYFXSWbzyR1cKCBJbF8FpwXhN5AbDJUenmWHRv5cGh9gvZ9fJtz44wju9hbb5eYBmU22GE5LCijujBPRYG",
  "key8": "5t3WXqc4FVCq6NmqZfnpRgmwYWVqtTXgoMua9xRp2osjhhtxdvvk4uTWMbsoCCns4reDYG1ZiDxU5YLRQ2W17KFe",
  "key9": "2SU5NAhLqMastiiDsU4jQoxEN1xw7Y86SGtxiQdiR1FxtC7fGeffU7WUrNGiBmSbSYzhcQuyfzknXHsqofCm3zFz",
  "key10": "28EWWff9rYyKZpQojnBHXwfWcumPKuuWqBhbb6ZYGyqu5ZVpEWoKCUggGLz87QRgzA35qXaH1kCU9QZX6KomSgSj",
  "key11": "3YHTZC8wiM7u97CTnaFRUz33FDCD49zAL4VoPy5GeTnNhnm29HVd8BdL2Bx4MNYjUgUHqBEF29spswrRaTQDTgK9",
  "key12": "2cyLcJjwhNR75fHj1edShDt232ufwwphBiCe4ntMCdSkVEQFpuQJtjvEU49ji3AediG373ntvgoreuNtdVKjaPM1",
  "key13": "349DpvG6KoAxng2zAETX8c8HDhP3jsSqeRYCjgFo8sgjU3z6bV65gMR3H58S8axrBuMeBJHaSd1WZjzBYneAZK5z",
  "key14": "4w92VvxZLzDZiBbcs9tKyX4aUNtSpL4ySNE6vhPKuAB9e4uivxHKqWkFthrpGzGm1quFTKb5G9Bh4Bkc32xUf94K",
  "key15": "3fXCue5N7TqjCFnWeuM2Rg7kc22QM9RpiLHWNEQcw7xTJKMLWBsSzLqPGKhaX2SJmrW5WHpMuUi2ZT2FjUyRXE6k",
  "key16": "XVjEN2uy9eieypnWXeGv1Pd4BaPQeQL1MKWVwhPrY199yVd1jC7YPudjiRHsJdyDVTokYfpNGUDcdaeZnPeVTPZ",
  "key17": "5dkx5hDz23iC9swAkZ8NYBxw9ueU5Zf4EcVxj3g3Z9iNeZfjfBKds15s3M6j9jZW6VZhJktZJUxihafD1caAe6Td",
  "key18": "5BHrapG5oY9D1B1BXNWdd1ahkYGHQYKrgoCDBCC5sN3CUGTDRbHYhi8gRcCnB3BrZuiRnSndbe3EJJjC9LRG3f1o",
  "key19": "2DV4oqqgRVtokLJzjARb3cEVFToGjMCjZvu6bPWgS8SbxaWy8Cvd76x3pRFvynweWXSfMVrySPbshjnf26MbarWR",
  "key20": "5Jo9JEbSvKFVjgZyu9URrqJXA8mBXE6oWoYd9iw6d6Meq4uD9LeVV5TNUFeaAju434cDcfegh2Jd65TwMqayiRf",
  "key21": "3d9n1p69rRgpSoqR1SPKVf7atvz73Ptb3ME2qydXGz7JcrRGxgk5QLK8JqhUCSAsTowaz9C9WCdE3HfFVSMRWauS",
  "key22": "3jPrWTP2zW3epkWtLr8fJDqFpbJc6voPwP83VjuFmHaLDgMbUu4hs28h9ohQqdHSVqjcr4QYNKJyDDnTipTLWaQX",
  "key23": "eP9H73prYdLpkQoej86D2vzHHcuAwRboSo8zCMeGGHBQZzJSZPazqspFYthLgYKhDiYuczwqtoz2vpc5QmV4t1B",
  "key24": "r5cwuVEMaNihu4U7YQCngHFw8W9FewY8GXyd5WLNG6m49sHq1gtH9DZ4GnU8r7TjEduNeJCW2og3F2Pw1BUvLFv",
  "key25": "4VWCnKdCJ8N2A2Kssz6ZmikzJwp6VWGbtRkrgQ2rPuaUJc7JJBUoz7N1Ff2CmbagtuhGZr34zXDdwwmyP2qkk1py",
  "key26": "5bjFmBcmzdKNzM9ZKVPauryvTnJeHwDMUHEyVN8t7X8Adci8eEu7pPYArsYU5WWyVokeWrJ3yD2vwVDhMv13KCVQ",
  "key27": "5qJkgxse7pLG4sR9ZFkQ6QSNnAoD11ZoozuFBhYTYPHouwLkLawk37osuj8ftJrXjXXFkyg9xNF4TCe6ct2HbFpd",
  "key28": "PxLaYupbJqaykJEf8m5ZQ9b2Wc5qSsnmQirrWRSHPGSb2xrtiMWkP4niJV7iroSx7K7eQargWALMFWKgi7pnCD3",
  "key29": "4edpYYDqtvQk7jh1aTC2xwTJP6BRr5CgaTV8TD3kc6mWfz8Kc5idKAx64ziT7WcAucwiCd4RPnW7g1JSBKhTU6aE",
  "key30": "3db2wbGP4rA6mZ3JyqgMxviQDr2C4ow9FuSoNtC1EhHU886K9xA5XEjgLtKzrE9Dq6CF1ux6gnzaQHdLhqi64tuw",
  "key31": "3cGzR8C8MDR8ozMvKkM5p3ZpXkg1eQNfYUj5cb35BApgFn8Y9dN73gyNkGAvmWVxSiVwT2FvtBi5Xb4NM7QFckXd",
  "key32": "4oBa6Crt12P6Wq3q3DwkdBhHCjT2FzDtGUm9VgtNZZZZLpEpMror7Wmjv6f1cTfZswBfEagrDQPBFSHnwvwJwNtk",
  "key33": "23r2FVhszgiKVjVmVggRKx92sqAFhfin8B2VxBA8TfR2zYrp9o8pSshe6C33zvqpzsJoAeDn9QB1ivTD8iuyjuDt",
  "key34": "2bBS9zGADrXpjiYYfbAsBqRqbE9FSMsGiLSsu6Gd3RiPu9HDi6v1EbjF2GvMZKq31GJ5KaKmfGq3GKCJ2k6NKjdu",
  "key35": "4yBRrENK5dKYvSHhGNncaeneJhyCQMFNR5Nc1Kwc7HXxAfSkwtcaE5qNZFqFQXxEYHmojPLfpeW3GBWZLu7AiJVS",
  "key36": "4D69CBgr4LaovbL98jGGEnovfzvLBQXzDhR1LFEawaGbNnSZDh3kdd1nj7NGTHCugfzxQsQ4TyZ2GFRnVxyQJ5m",
  "key37": "2mAbB5toSD8efspojoPN6aFqTSEze4Tj6NdLiDpDZ25zWY4Mv18Sxb2EketZZh1EKMZcNET3ttiLQN2jmiqVfcRF",
  "key38": "5qPKGZMu6xyZzDK73WtfDqCwaRHb3JFyv9cxo8jz3z7t7LUcczpuSEVJKrFdrq4UarRdPiErecMjB1bNzPmCdLny",
  "key39": "3H2JSgQxqPV6j3jtM4aMMERW491G4uvEXmxsKuEYhWanFjPs8aiSpD1hzTdLyBUMPEjzcGCdMJAkMbodRYENfH6J",
  "key40": "NtL4o7eL9dN3aUvKFbPJYHjUABjvkQ29kG74BaMVPXJhUszodoHSR4WKE28KadLkVztqxpm3JYD6HGQ7VKYcVew",
  "key41": "2c4uBqjQN6TromirQEf2vMAdvz1f7cfQi3UazoQ8vQFNQJBzN2E7WWNcFar8CPMojrYircRZAZpdUV7xugGfuiQw",
  "key42": "2s7Mp3FyGoAB1NV9oo5KHyp7S7vPYUKSjCWNMtjPx67LYukpRDrvr195PVdJkoYr9rGqDEgbxRHAGraKufbKiUtW",
  "key43": "62iRw6Jb4vPWTgzvSeW1BPrwXp9kvw5vfQubMQgjriLYBvnzRA4kWQqMCFkzTymjzxar4EMMRofrVS3yEz6H23hw"
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
