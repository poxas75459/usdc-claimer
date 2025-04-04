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
    "4pN8maYt5TZHRr5XyEfavBeCuc41Jj2L51nydMuNaS8EDYMfh38N3QtXAxT4BSB8yhu8ynDKZ5wnQHxvC1DZ1Eoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hctRYi9AUGxJ7NoX1zhewm6SoniQXBogzJD8DtAY4CQz7pLAhht5Jp2unSWLxA8arrxKz4VTCjoZq3yWubqkEy8",
  "key1": "3ZK9ojpAp8JfWui5ofq2nSeBcJJeKiHUeWgKnMshr62z642ekTPwdyZVqkEKmZKa8YFc24QANUu5FtkCZd27Yeee",
  "key2": "2BL54x6782xxCyJ7fyrEbkB5kj2pKaVfMCXR2EJyqUydxUeP4a7djLXai54Y7Yj4gwdx2XgqpWEbHknLadrtNfuk",
  "key3": "3KZSvgyLeuqdYxPZUqEnmXnL2ciHqMkUrGUBQQSvCBuF4LiQ9ZqsPrpVLg1gpVxhvyea1hxmpi2eU8H8aWuQaXb5",
  "key4": "NJQtVwZNE2YJZe6ExL6HxuCg65U7kZrhM85wFKPZ2nF1RhzTrSQbsKyCKU1jQq2uNTcmF2EQG4qzVwbNLdHrSu3",
  "key5": "4WdewCZwnniW1feT6u6bQ82NdKaYnwLxDMZ8NTcjAw6x1HJgULJkieRT1scSMnQQvgJJdaVUFMoPYDsZCaAocHVL",
  "key6": "3Eq2vBrWQzhht9RLzCv7C1KG6REsojVuaBiWpyYVcoVN8Ga1bw4Cf9N7PVggsRpPAsaNvMMj7nPLXAHvm5Jqmavn",
  "key7": "2KKqAdtfzsJb8J6Mk7ep3u75CZWioRKZhfzLm8FykZWp7dfYFoeMYhmE44UQddRLFCBrzX3xePgunB1sDWZhqFu9",
  "key8": "5gzLESsBxoopUiGQdt9EUNbAuVyNWi9dpgVhFEQgU9ZbpBDsQ87yuP9tnb13SPSFbPXZ9Ytiqk2oDrP6GtYwXBkX",
  "key9": "5cL3nQ532cMiSHhQ9MqgiNEUr8DcfohcnEnAMC2AmUg31aZKpf1VwobyX4ysEgDpexeRe45eZZFQn62gDuX6ADWM",
  "key10": "thheCcDeLxGpKtXWHKkViw6PKN7CuW73ymiSmTfDs4HA1rZyngCMh3bMzWhpP2GYpn7s4Ntv36ixVXzCJpJkg8s",
  "key11": "mriQ9bKp7oEETM3NFHN8qx2Pk5nY7g2XDYDLecFDFfjUFCpQDH493y62svxnnyUgBXivMEMRZv2m77fakPpsqB4",
  "key12": "5WowKqe3SUyXY8kXvFuJSh31SGCnJAGjBSEas49efiRMFkTZ4xsk2vtQ7TWcHSfeh1HwrxXwAgxr8eD7P8oDBT4m",
  "key13": "46mxbisprtVzN5VD2Gh3amzCW6LrfrBRcgarXzc4HpAz7vwnMc6bdQuYgLw6GAbYFQDmTvxZ3jdqTnLDqmeo7WBq",
  "key14": "5MqMUaKUQiagrWkxCjpGtCBM7CeRQnPbaJNQtiFeA5sgEBTrPWUUHRVar3Vv97HhZTQrpGF3kqT7SBLHuhv2EsjR",
  "key15": "3CfsJSAjyqGKHkJazMqdBgYfsnjK7fmEEYG45ZDy69n8FBiTiAgDjD1i2MY6m3Xt2sm25dA2criw7bwVujLZS48E",
  "key16": "51PfG4QnX1o6nkmdn5huesk2VvASmb1khKScfgUbSBRanPWE7VCyR6XztNYMajWJ1tQBzut4yH3SyKaeL2Ur9C4E",
  "key17": "4mtMZFzP79u2ZRMK87thPVoMLUuHzea3V9t5rGRYqwWKJ4Soa9RUyTf2o1mwSfsPH8thFHqc6f4h6uzm4u7oLLNH",
  "key18": "4Vx5pFXvh4CfZ8hjECtXknDtfKaWZrVRQyQ49rkf1Qods9DQCroBXsSBq14YFxambQ6spguLCyKk2ihqnTUTCjVg",
  "key19": "5ygCpAZu7wvgqM3SKPBk9CMngP4kdei7enKX3Rmg9kBkuffuiJgaNeh7P6LMVLb2JmzhcMzEQkBCur5sZgcYhP2",
  "key20": "3kuhhHguvGeRcLJsp2dfSvS9MrtPbPkrUzLaDiCNbePpcEdSs8cqhqfDfJmkTj8RB2xJotbgKqpSeiDZ8UNW7mgm",
  "key21": "4XEFescWGrdZ8Dgh3ckjsMoirJGGwmQ1DqMqdteydJd5CX7x8ocZGbauMcxqNqoPNQ8SU6reSRoodoF9FFPPqzvK",
  "key22": "VwEkb8eGtikKdCasbvhjpWrpp6cBDm8USaGNmkLQy4oHG6TmMBZskeA9xBHSg9mDCjNEcgko3tmu2EgDKAf4pEn",
  "key23": "9GQc9pukwR6pF1rHDZqapKgVbc2BkvrJvpf9Nc4dBRk6b8GKuG7vMSFCrfn22hGWdx6a6E1wgk9ocE8mksFAMQ5",
  "key24": "2FnpQW8Hdu8azgyfJAeQKwtZnBYoEUG1ia43LCiYNPsLrzzT1yo9cnkR4xmWS2yrS3zK9kbDQJwQt4dHZLnvVfWz",
  "key25": "xopY6qpgXgZ6AEWRW9FUfHB3ntt58v8X79gSBttkUc9Mt6ywpCwnYHkYeGW6mo2WoDNQA2gtVF2iNtNjMeXk19D",
  "key26": "4L8V5pNbRnUitzw2DhFZUHdA4qYytB3frJEsuaxEo13noaSFU5ZPfQPs6WCZmEhXZrUZSuend5nzJMVP6WhCbQgj",
  "key27": "4RsDTaiw343mVAuuCWxQuacCbUSGzpGpq4qrEinkdL7Cd4usVW32bKWaKQDTiMfH1irFcikG33rb9uFpX17bS5xD",
  "key28": "3Dccg1cDnjbKDKhzL8G3qTCbjo9trWFPaEKZjpPg3ga8yMaFpFAh4i2CMUB9qvQD4wqUmsgSjuKCbPS8S2rPApt7",
  "key29": "36QfNrZcQpFfxnvZcdqo59UnAZ2KJ7PQaMdEygKZmdwvfErWQJcD9Tg6bGayEFikeCG6ZMHMAdaXew8GchguppUg",
  "key30": "62b8kMZQt1pvA9FXgvv77p86Lm3Bx1J6n3wpoot1bcJtmX99JMAuc9F8UwfUV2qDYNkCScztLpV8WsEDQM4hUeSu",
  "key31": "wfcMDw4yhVCogCNGw6CncQaTmwP2gXv18PikLGiunNX3RDfKCwVyRrNQznFXj2vetE6aZ6g532vjtSgEKLo1wSS",
  "key32": "4mbBHfEaziXQeDY89J6ZnHXMy7XccA9KNxsrB1p4LU3bngAaBbNtX9fuNJ9wkrvKHVPCZxMz7BFr7qDomuM95pLU",
  "key33": "4hcrdzRgWaiutYheNZSinx4za84FRjLDKhcS7FpVbGM3N51FHFkeYDt8NKXDGrDetD3v1NSGbCV9juCxY9YbiXyX",
  "key34": "JokLNyoDX4MEnyu9q78Uc3mgjor7hmB4JrJpR4jUpKo1Wra8sZEEYyKDsroHfuUkCcgsgYzNHKLfPMNvY8SybEN",
  "key35": "5JRYkrdrct1JZ2JFU1QSvxjjhxCJReqpkMj1GxtV64P5eJ5mNdLdTBrpNsDWUDoJ5vgLFoaoVkHNmmrvMD2va8wd",
  "key36": "3jWgeAMsc3wVEQ9gHBzcy7UNja4fCPWbp9VkhEHxAsZNAf25PHa3o2DYQMD576RL43yHzwDERyzSkTx56dvcFj1b",
  "key37": "2xhK1DjfNTd4QahG26yTSZXuRVcY5SdCStvK8HToso8LKmwnMFPnNhQinABZug7nfBkHSwsE4ovtBrLBb6RmERAR",
  "key38": "3TkJDGBzwkJCPuTD1pFViW4masEWrQuS3R8eBCTauazVgoew5ZgrH6RXzMzcHXRyhM4JP16E3EUEbZokLWxcy5p3",
  "key39": "yXaNe2vTPm8vqqD3d2GH3ze83d5BYdenCMExayD3jpFM4UQvvrjvgugp8WU14bcTyKbiHcp6rXB1vq79KKqJoYj",
  "key40": "527Q7rcQdMTf8vbnHDx9nZ35m7hiUQowkEyH2nUUx5VpFqWYBnu5HkPrZHoHhM5xYmVHFATq3kweKkWdwdcbmQ7a",
  "key41": "3RRKfSy4YeqXpJKaVfPdoCuD2GKeu2j6eKeEQMo3hUMdybfzX7zGh6qjRbR8YyVGUvS8LLedjsNudKabrnhqDnxB",
  "key42": "4pUAuPGnbkJiYmhkn5dFQfeJvaBrfLUxwPNs4rRufMDiLAA235UeK61rStCx7cSrg1mUGKoXxgMuAZY2CvpJNAdA",
  "key43": "2BqJ2nBRwzYs2DrTpeEbajz29iXQr9oERp825Xo9eG68XnvXqgryYZ9UG8zCUABbnPCHpX1DPaTuvw5e5ppa7u5z",
  "key44": "3WhGDNspzKZNDGboTSb8kmAQwWvMeFhCsMtkN4rWjzd2aGLKETUVttBxSLszdriaHM7DzufSrs91MYVrmBFcvq6L",
  "key45": "5pVrwwivNZquTBARw3CFpiGEM9cLJB1aAxJnbpfxLg7XVuQSJFQJAXgRW4PfwQ9DGj3MuTvKhBzeHhHgi8hkNgaW",
  "key46": "5MbiCd3rr3aYfqYeTwa7Rzx3Fv8uucahzx7WCz1FZWf6RCywzKU2KTzsEXubk7mmubWVMNWomaGjHUuxQQvk3rSv",
  "key47": "4Cb7FSRmro3NiP1xgMUMREzXh8M7Wwku5CLHxxiBTdqbNHm1KSeZG76AbGJ9FgL1bGjK9mnfFRk3j29YxYe79UBH",
  "key48": "3Vfk8fxzNpxAHGj7R8MugSzJajF63qy61zwinvfz5bYvVDUJ2w2snrGESPzzVY9PEjPwLhUmFo7s5pca9chf6bBC"
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
