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
    "35ipmfHXtWGQFpy5PeS4cT1RP6V4jQXAMQdTohLST9ijZR4w6EcKP1YiwUPp5yVYVfsi4rKnnAZ2e7FS2Y7aGWxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRyTefRD5ePiTCktpMvTS6zrZRiEFPisracBHvmcenT1pb8MfxFxgEqrqYbQjiUn1LqwzFVNYQcSNJDHWdwTe7P",
  "key1": "5H3N4rbMY85JV3LoGhDRgLMT5kim3Y4bZLUeeX7baVvUAtAZ6HVnwaudnyajUft933LmPJGnhFSy68TgKMmoECNx",
  "key2": "3yUSDNGDViGCJnm33eVqgmfpwcYGaHjpmLVG4PAxcgTkLyvGyzxiuYtPELevvzbDLKZFW84E1Gg9EDXsSKEaU5gA",
  "key3": "5yuEmYArrUoTrFNKRBvo7Xq9yzARHivG96rzCsbtAq2Tc6fSy7TzoYAk4rXR69zvEjk7KgL5oHjNB7KHhWQV9CoU",
  "key4": "5TGVvCnY9p8bpExgPkUHKG7ZCK2t3uF6p3CKe9L8zeQBtExACj74cLuuMB7EkwjqpBB9gt7XfG7Ps6A8dZTjsHSu",
  "key5": "VS5u9rbhVkhybca8vgFxem1uAJciCAch3nGk8fcqKuFkDFzZJJaXByHWeWWmWBQ3ktZVyhpdyYsHncf32MAq63r",
  "key6": "4hDSpfCBD7FgHJJBg2S56wHyYRSEXumcY7NfYk1kFkESkkjhaR8YyRDgcwTHJvmuPgoeUfkXraJvUWpXd34BaCub",
  "key7": "31ceFAFmk6Siab9xqbhmoewdt8nmg8axMtjvAmp82sabdvcrCbp3Xj2iNvJmnG6FbBK6U9kBUrXi5bQSHqpAe8qx",
  "key8": "3wx6RUJ5dMwa7on3WTs3cL9dHPinBZPpEFutHxH8FqKq2N1p2RnjPSMwJkuurynmxgJFffdyuXLKgwjZNvoD6CTt",
  "key9": "5YDpLb9n9VwwkzBejypvGWU5KTx6N1BJ66xa5ypZswW2BRyDHMVCoC3Z93zKtCuxE81PQJatJ5mVvQxD1cRa3RrP",
  "key10": "4EKi6ULTFXCcKJnXf4n7Yio7fWwF9wEzuasdYfHoF7Wh3WCqq5wv5CqbZFqVc5FWsBgBjvFYjai6MHJYmJg3bGJx",
  "key11": "3u7BfxUEsgHuHCzQuaeHfWRJ8Em8nhyv2qW6YEBnUnpXVBnQx3X41na2HWmcKbsBe2BJv2MFzDNbKL4FYMgxzSob",
  "key12": "3yWbG7m81EFoCVsKyrBjqTf7MXweau3CpvyitXWHkEaJ2QYyeWmorrAfycEgxoBQChZa2gr8AHK6ecj3MBhFZypZ",
  "key13": "3Y5WTy6VJj7voCLp5JUtAurnyCRkyydY6awz6SJ8FNMyYMKBaZ6G9LoyuAWraX6oxFCutCZro3ZFyqMJUATMiAHG",
  "key14": "szu24Pnsg11No2DybG1Ncs9tt299mZDg8vL9NMx3NNv1MmyYbgHtaYg3RKMN97Bye91NGqrzLMSnRSFe3PFdM1t",
  "key15": "4YUMH5eZKQs6uajw6Rr5eZmExscJcNkNigfuJ5ufEAjSS4Tuk3QfoxPSpcfgNvaQMDhW8YZT6wenz9unNLEghbeV",
  "key16": "2iBce7sLLUSdEP4koxYyYgLosJkK7VdbJVT1oAnJRqhQhh34Ua61htSTL9x1np4K5WRYQFrqeCDW867T2PTJRDci",
  "key17": "679jf2mL9y8AHmUpe7UKejq3bEFVrPdfrabDxz3k9dT7NrSuPv1pV4ZE9g4oos61ERqyHvYod65UxLAZiV1dzwDX",
  "key18": "FpLx91Ut9hs3qYYEcceEmpprXPrfobB6ffpAizJLeqcYwC6ymegbUwWRHtVc11zwS8AYDr6oB1pznrryy6uHndW",
  "key19": "3vowTB3RdY79couhkhEY4EMe5iCcPj7BDRnr5q7AS3Fk5TJ7Poh5VQ52LCYPrLfid6APrki6CDrMckiKvY5WmuDw",
  "key20": "16fCHN7v9y6drUm9sHYvQmTVij9DAKbVg6xwXQowoSLtXxNym93kmF6cRfX5P9DqSRgvYgduA5SYDbkWXNemSvs",
  "key21": "3n3oACL42gbteKpEa5kCz7s2CL58SrfrhMgKfEnsLZyGkUTJyz4sU7trWpssY749vorEFqHEGX23mqWbnzdrvWUw",
  "key22": "23tVMPQsdjXCDDbXJnNTBLSD8MkSofsEM3S5eruqgMKEKxoPs3KQPwtVwiqHf3wywxJLwm5xc9mfMyRQ3PTazhGg",
  "key23": "2GNro7DwghR8Xd5vCV1cBXmza8W1iR7QDjUAojfurxJ9vYgaYWgvZRYQEM57T5TRJE9fSpfc4vDAmzTW7awTVybP",
  "key24": "2CUfMwdGisLhY4xhGDeqKgDDT5qnLQyhZCVgfPzsCcRht5W7oz7H24zhgrp3eQ3fDfD7T3axKB3njUxHDbn9gB3p",
  "key25": "2iio57C9XcodH4dV552wswhxmtjJNXhuU59BnP6hFyj6rAwCmYGLGwcGnAajaZLpnhB9dwBr5P7FF3tferia597a",
  "key26": "4Bwe4BBpqSGW3potTXnFtA1HYGPTDuSQ4d2JCjZaTtCZPpY8vbdUK13i8MTZMfwYqei9fn1Ge1jSi6V3zWeSxAu8",
  "key27": "4bFdYhtyyJ9ty9DLvtagV8WSPjDonyd8vUfLbYMt78QrB3knaDHEwYrprfPpTadxbVJuZM8yHbu6fnzerFrLZRXj",
  "key28": "4KgNkcg8dTqyANAmo713Svtj7xPgK4kzhezVUvgeEWj4KF4vP9TK7XvEBNYr4SzyM4fKR1vvZA7WVREDsqTvNtZ6",
  "key29": "3dZkchCLEk5AmCJ5G2gF86Xo5TCNdhG5Ft1E51URwokvXTGV83bUEKimFS92posai8EGwtznw3PgcZ4NUmwZowbs",
  "key30": "2UfCy4wqKTsfsg92wcF4mLkscv93nCnBLQUmm3PzizTxVYdFMjsdgk7kQYxuqsNe9ZQmfjDG3ndRGsoeiiuyjUVc",
  "key31": "61nAmFpALQjW2BC7UFEAACLnEriQgZSuuU4gBdCUqZMPbCCoysmDpjyffwtzE4uijKWXgwddEaxkxm61U8riRvQ5",
  "key32": "3qzhWMBKyTDF1eVMBuX9YM8nWwgw1TfWhv3zXKYFXNcpZhPmc3HWhmAj2MKpMxztZf39McrHna4HW2RCMKprxcRk",
  "key33": "4DBoRxqvjkyGZXjs2oWUJGojC3HVqwfi3VTkRz1gfscNS2vFeSrAmZfCWbffeKNuKMn1DKTP21VNizWvjKRPUMec",
  "key34": "3WPR3sxEBwiaGCpmWZtHYsrgRX2Vgt4D5kHHbCBtHPoQFhEcmLGhNGbxV7pbCr92KgD7Tj7kQdGMnUMtY5Meu5DA",
  "key35": "3zpAWFdrwTgKwWUaXQ4uyWHUBhd8h8NNa1L6XnDTRDVhtGDuW4QRBsQZrYDQmfSkF8pzKdKJ61bzGdTNt7inXqKT",
  "key36": "3s3dRShhZbEjobWzkF1Vd4y8NF2J1Zg7Qv29GGXniFFVpQv2SpTHhxcZjd79DSMvoNvXtj5WVQFsPph8ZTe8632B",
  "key37": "2jVL26SGt53dcsp28vqYLedNqq2JAy5UgcBTcpDV9AXixn3QP4XARZU29FJJ672Cf1FkQGKtJAi99ZxrfiyNRh7P",
  "key38": "UzBZzDGmqn9yRtFBgbZT5ERk2hT9XtLABrVCxGGJEwKfvTCkQMCgG4xjfBHNUK7wJCtRDpfZVgK1Qigdp4nWGHc",
  "key39": "41QKXh9qRPUrjuJuiWTykbVdUgshHHF9LUEi1UY6j7t7guS87SQnN43pB7PSnHFVJ98FqeJEV4gVv6VaN7yxAfJy",
  "key40": "5V4PknzTWDgvCpx8ooBqoEWwfVcmciu6tumP9p56dRQ2EKRoMTFhxPiHRGs1Jj397sGo7MSLoUWvjtRj84g5ZYJd",
  "key41": "NV5HmjDqFrWciuw7zvjWbobqR3mpChqmkfDZYHjswUr7JsRRtztgYxdUxhJpkpQMA8KBLvCbLGxbjnGr2jZkKFT",
  "key42": "5LPMey423VTtP9VcBC9BjGJZAgaazYmTqjZ6qA7PLfrrhjFSZRSVWKNd5JYc2UKW8UyV58v9jnH7tfX9mdnmy35y"
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
