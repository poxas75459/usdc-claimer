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
    "5Za8oeVHsvWFSZ1hxgEw6fbLSSx93U6juCijgDqRWj1e5zL2baSotzGSeZzYxjiDXZWU8KnbLB3j6QxbyvKhZoDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24x2P4DfXtjdQqPhTeTpS2j8UAJ8fJykJdcMRmrSnZSC56rwyx5qDwg1J8rwZ2b6rgnPzj7uBnzWNc82V9aiayjY",
  "key1": "xzCYZXPFJ74xXBU63QUWbF9m8LJ5UXCaoZc8Q5JoMUk34QRdhWNW6aGdHnG2W3WtYgY8yE3q5enP63kowtFHWjz",
  "key2": "2hwRPQVarAWLxgyJjRmbmmTS2DvmmrMVagQDgLVo1Z8KV9gZa1c241NZTJ3ekNN8wQEQcYMoSPS32jkdv1x3tTEK",
  "key3": "5D4n8PFTbEDca5tGNXeWq1vGB9nmfrgF92HPyAxJU3frNyrk2cKuN2meC6ucEdVFE3vdFbLtJhbURywcDmbLs9ob",
  "key4": "4YQ8qpUPGP3GjtNfYUb3yCPs6FQDg3hUCFQsHSrXwiknbtoCQqRLMsZPNdPX9JixKtrjCFgFEiL1kGYNnvDUgbYN",
  "key5": "4uLZozcpf8TUAvrPAN1pcBJoe8QpLaj6Z6jEokpT2GZtSxqA1iSqHYbd8U5ANHcLeNtWRqbn5CTTb4DCtFGQvdJs",
  "key6": "28SodpZsXJ3gG352LBYBBq5TuHzX6Tp6R7K8vzmBLMX2VExmyRj8oEKmgyxTaSbi7KwGFYGWC17mdfSHk9B7kSct",
  "key7": "4c6cxzAfutKXtdEqQxKsfjxUKS5SnYnWX84gJ4Hn2jwJw9TZdcFS5qFwseDMShsWh45RwQDeoUyVTFPQdv3jo6Rk",
  "key8": "3T8VZqptCUmXwNQMnp6AGnnCvvn1JU4e8Uk5kPN2dzfDWm4QoUQVWwrZQKyxvyTqxiLsfqitSNqziPTh1WQUMxsr",
  "key9": "2chhq4PSd37kQFG8NvnETwrNKUp73m4WiEHuqmmEJ6shD3cY8p8Lp2WksETBGLEKsipqxjdyVnL5xdeXkSkB6FqP",
  "key10": "4F5PucxpbktM2tf3YZrM3B16m4JKHstgDTs7VT8dwP5KaPDZAjukoyqw9LsDHPyC9ph8KPH66iKziopaJ3Eh5opH",
  "key11": "HGgvT9TpjQUFsDYD7Wy4vKJcnvuzeWjv2PN8C5y8KmJoAwifVQZ7vBdgfNPBxWGP5rfvVfNkfnDVxWpQQrvCFaV",
  "key12": "5hJkCECuGkw8s3LXWq9o9gV2YtfwnKi7siKhnHSTJRQaTwbGd3CsRQW11XiSM2tZWutG2XS86qSxL1b98KkwFMDG",
  "key13": "21s6M8PLsZZG35SEoZztk5FPh138pxjhWi6gkFSTDgtqhGudHzcZiYP55tGjH4xqMRb7qnmkxSwkhPfjuAFCvagn",
  "key14": "5fT5RTNt3MNyK5H3gG73RygwQqrg7cFrf2yCvyPFhWWYNZDZR5vZQmt3JmDdGJeweLgoj1epoNxT66CPUYzuKvfz",
  "key15": "3VhaXrDAHmhjobp2zmTjFqDkRWqHsJz2exRduCubaWSGBy4fQ2cdgizs7kxMmcbrfJgpQA3762s8jUHNYrEXxtrg",
  "key16": "3qjoNGdb5LrfYEDBMfjHh9FKpmTRz6MdWy2vZomtbXSRzrNhoFa99xPny5EzZm6PyoNKnWXpjYzoQFiwYbAwvVZT",
  "key17": "2wQT2qrH3spqf3H9AhuZ4ffpyRrkBUW9Y2CRSvEVPyAuVM4fa5BitCx6KcxQqzaHAd5ya9jnpYPK1DsPxujdtfXi",
  "key18": "JrivikzXDupvUU7ioeynFcShyiQiLckvgcNVbWEFXAPYbfgx9orT3m4M39ZNoq61AfpGPsB3nCeL9zoMbeMnc37",
  "key19": "4tTWTkZmG1Emqmvqf4HFYyRaDrdExHuJArREjAZZjDKTLZkhLg4GCK5obAf3uuxN9WQLoBNWYCWBDRKGsKQMHb4s",
  "key20": "4sZnJevZfnpBM1Gj2Hy1cXW4UqyHZz14VyssyobiqP9awHEk3C31SAbX3RNWRpSSzqP3yRB1yazeqsxf15KLTbRe",
  "key21": "5w2Cjyko13yNNXRujg7PVBoVmLhhjxhPULS9DtECMbzmpsg5Axand4noWtmD5yzsJ3BTNrF7fNvHMtJbFYYWRryz",
  "key22": "3af4Pmn1DvRpNb9g623hZuYBrsrXb9dJSVLGz1TUUwfW3geSaY5Fbg2TPxPixajaU6opWtnGyfkFpC5ZR8u1EN3C",
  "key23": "3CBU7nrrTAbQK4TSunCaJBvzauATY2gssLfL9FxnD2vyNPP8ooqC6hycQEYs6cNrb8exaqcMjRwtU6y5W32p4Nt9",
  "key24": "2bk4zSwe3Qma5J8GzxU3V2csRAd74yRB1MiR7B1r6fcRXJdGSoix7RS89sC2pBsNC6MLPpkvrrSBPab5uzY8kH2z",
  "key25": "5ntLZppv6pau6b1wUjEzmuZhB1UmMjefeQ7SgbB8JB8deXMfpvawHjsgFGrDXRjUFRhJz2BvQZBALobCEDzaxPfK",
  "key26": "YsZRoTrzVHZYbpVXpeR4b35iXAioE8fNjPfG1ur4E9K7V4fmfH59SN2ApVQDQj2LSGsjbuqgWA4EVr2yxsfhZXB",
  "key27": "Anz4xDbvJib4GNJZNWRbJfckw8PFJRdzaY4Yha5r9pS9nbKEMjjudeYkALgPSVvD3sMYG1QEChZSuJMKwE8teCh",
  "key28": "GFfBXgHJqmSw1hP21RYbJdGxjKCdNtiU9q1sCateM9iLHi8nT5Jfps1fSeCWo6B8TJ5UsjHKNxed1qPuV8rvrpX",
  "key29": "3Ru4tuV68qkMXkx6wAj2iQR2qFaHdWs6sTfQft7c6mAdEKUyCAqnG7QNZXgTmpYVuCuBzSGXXPjob8JD933Fgnuw",
  "key30": "3eycB6xgA673VCkCMNbgoBsLg6iWqBmF4iqXJCxNmng5rGKAH8DejzW3LNGhgsnkjN8BZezH9DKbqq5rPkttcFLt",
  "key31": "2AKZFJuvQMEmFgAd45N4jKM4sZuUi2VfZMPPPgxJTTcQ9Wg9UMLa9snHDHzgZMCB4oAqb4LMwGBri9XQRuzZ4udt",
  "key32": "FJnPCkcBq9bVdy7JvMab8jrMGUP7ogC8MJtsCwaLGKPtebYqqAScbJuUSLXUt9su2F5JdcJpd12uG3fJ61tN2e6",
  "key33": "2mdzM6xQMhkndVEcQ2nXhM1HSSsJdWdBi8CP4V9BbNwUQrCR6FB8jk1QZAobdFRzfwmGdappk9zmcFnbH1vV1BcU",
  "key34": "5j9pq4bTA6SRMQ8NFz8Sj16fn4KAh7ZxEYZyLCrgV1H5xKLF1uiXgReBPSLnkU5kbikMDZeEzUbad4w6WmkF5hAf",
  "key35": "2C2kB2XQ1cVvDuSzimPCf5iXarDxYNfJtyQw6t2W7x18xU1oC5a4jMXNdP8gBQve99qCv8537nYU9DWTPSLS1WGD",
  "key36": "5cGZno1eEa2ArXoRiAT4QMABefBCZPqPGcUDywk24cKRGzpdtozvGoMrUVNETQnjpAVi3cPfnVqQQCqzLDXN9WK1",
  "key37": "2c82bhSw6XTukyG22iw99c4oMgqsHbCpCz2wthfaX2oNufEveQg2NLZ3aC7hC6wr1rNcVMSCSZWDa4SXNRKewLgx"
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
