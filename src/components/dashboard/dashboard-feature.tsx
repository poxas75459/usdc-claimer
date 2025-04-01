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
    "5MmL6ijufef1cpdpzG42VYmsgyqSc6PBKffkQrZ8QgZAMPkf8W3QdpCWxfyEadGSj4RqaFMLrBjcjLGuTtyw9nRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42r1KcYnz6o3rV2DZgGGXqBdX6vzzXgNM4znkeHMEXjN43AVumMXHGEmkEjahAdrE2JvMBRn9SosktNsMyKs5rMY",
  "key1": "23wqM2JxfU1qDqiG4VjHdvcn9svh2kvEPfRpUDXq6oeakXKFu6cJrJCEUPXGqpCRLkz5zMAE5u8UMBrjrBmSg8TT",
  "key2": "2tVMD4jSev8YDsp8A7k3mHWrwxSb3XFgk1oeJpWH2BZEckJQ8WSxPHHZYzPykmDezk6DdV1BeFZrW3PDHi5zgfbr",
  "key3": "24iLkdJnh8rLcV5fU51ktdj95diHAgfAXMcJfKHBmh83A2qhLYufguzVcGC9EhimBtiCkBX3wLD7sDUUzPt2VBXM",
  "key4": "4xEgFHxwWqjrUaFXjEUd1kowFKJn1QRguYnvyve3r46qrU9peDP7VEVnNEG7xw5oRjsGYEppiErDrzjxgAU8BdCJ",
  "key5": "2GxumnuLmUmDgQQumBDY8hkfauHhmzJvVmJ1Jxn9bgZGmThz6wp3wvM8DBt1W7UMpJufT4Jm9j1pDynMNrHXQHY7",
  "key6": "5EU6Le7E6YHR671VKq9wrVQ8C5voa7kgkj5WjifbgNdaw9MQ6MTJXvfgpiN76CMBFezLbRGZRQ5eQS15kzH4EZsy",
  "key7": "5NKdo2eedvNydsjYw2HWJWkmgW6Mtk4piBZcBJLhXbD6TyXaaesKyHA3CczEK91PMrgeH5jEm3KBdiz3Kq6Gwprm",
  "key8": "4qtBaG6MRKkznviUcmGUUmBMbE3fLw2DdkM5R8tFdGFVU5H2nDs9S1CHSQdq5dpzfmjwMtmzmTD1YyduxSKKD7Dt",
  "key9": "2eLFmU3enWFYJoGuiBhqSMMGR9282GV3wCT8AzRv6RoP123vwqdfm9F2rLUwediYWYrfzQnjpA8YECo5JkZb7jrM",
  "key10": "5qminijqgB7zu9HhKa7nz7NwiTkBPgNepws7aHyDQxwc26rPgzE79EcfUoPmTca6qyVcKgcMFB9MfRrY2s2CDeqh",
  "key11": "3436tathJQH7tRZf7wutjpvHS7ErcFLffh8vQuj6xSCwhCY1vrg9vRzyvA85SngHJ4ttrWfp4fQySfu59RKWx2NL",
  "key12": "rYt39D2MxjojM2M6Rnj6hEr9WbNj5UxTrRCmkb4iE254jrZX3C7e8kw3uFk6QAw5rXZd5N3xfbCktGRDUPixSQs",
  "key13": "3TWUP9pp51NLYxWGSzdjkUo6hDXYdJ14EGNfeF3VMHNsjDidV2yKdUy8Fwg98Lyo9w2vdyiz6ToUmugov7FigpyQ",
  "key14": "3DdazvTpsfeiTdcnWnhp81U3vdJYyEojexiPJSR6u6A1CofjB2YYgTPwcNQLyH4SZxtY3eoDWxzizKxD2BKVZ9Fc",
  "key15": "5nESzgGLuQmKXY4KwsGjgEEQ5jnzXLqAnx29k4WTG5q5uVUDN2a9qfPGDbJcT8VZ74mWBnQRPYHfgfcRDoRh3MzM",
  "key16": "2cPVqTmFxiqbSsFk3jtZYbnyaq9uVLc7PUT6P1jtXydQbkbbZ6jQU4Va1GG4gjy5WRrttT4KTZaXbLwyjadk8JkV",
  "key17": "3DvxWS72YuPLJh6yd8FPKSMw5LQaiUZpqfF4ZdktjJTVeGLae6EtgPqpumNPj2ERjrsZJLP46ANs1TLKVbFZQeMr",
  "key18": "3M1vUhuPAKYguMciWGP2pCj4aN2owN2HWgNjSWPHzigW2hqN2kmXgGavEEWwNbwwoS1gLPrdjMMpqsjX4365pv4w",
  "key19": "36TwKqZ69TMg7VaQcKvqKnrtaxzuA6Tka8Nb7Zdkp45Ts14ENGeNwAtjtcs69sRiz1PwjdRBsGxecjU3dTvyySfc",
  "key20": "STj3vYRvpZnAFcx8ewZQ6WBp54ZHRbzSrEYyqRsFiSfVnzxYbCxyiPVGjrhJPPHsRARBkBS4rd3z9nKxBBuUBjz",
  "key21": "5UUtjcCTjQ6hM21TAv3ddgGhSaGV7sHJNi7XX2Hwpc65B9cwvUaVWp2oSuYiMM1BNJ8XcuJt8HfjD7XTbQxroxkX",
  "key22": "2aYsrd2iaPNbeawjjw15QFkrkFP3SbmywahALAGWF8QAnQapz9Cd3GJUo4uytDFiB5jZXfgxPCt3WVZjN6NEnpVo",
  "key23": "52s3gqAWdJvDWxYCCpXbkwhQd3Q3hJKfa8erQ5xBXCM44wPxncfodR2DdzSrkAZEZcrZsrAkA21d8kjBCVTNPr4E",
  "key24": "5qmNU8BNgtKaJrdqEDwQb1PDm3DXYgrGGRTLYo4SSvwkMnhPoEVcZzH7nFPYMGQmzdFeKAUZ1RcLHWTxmbLkvm46",
  "key25": "4TstDzBkAVxF232H3VHHxdKx9qmmrSwVmNAtT2AkL6nSHyh1yYPSLPWpSiXVdcREytTFEvdDpVNRHbjwVmbnxGZW",
  "key26": "LaaNor81qPwL12sV5hXDUbYbiunfi8zRaKMBnGNJdKyppexwf1rhiChbudpEBXuZ1aEKQjAR4aLei2JWrENoKoX",
  "key27": "2mAQA9XmsL2Hy7f23Xw1mGdWShNTyKoyiysrC6Cwm6EjGEKQ6r8AdvMEc7iRidcKSCHtvHt2MNsZZumefwCb6gRa",
  "key28": "2UjiVo8vsytrMbPbwRrz1WeepJHwnQwznpkFEMdJB2T6HdKcQfrx54ZKkabmCpLXpsSaaAYLkXw2RWFbF8WXChCk",
  "key29": "56h1uGyKEWhnquuGqtjHJNXJPaR6qmYJTyvRmUKiDLecDcMBXXWxMgz4SLY3Avs7ZrmuSHESEEKRZcLwZFb8dikp",
  "key30": "38Dob1yZpvebgzsSnxovmRmvwpsMPBNDAjZ7emZUijJP2AnE6neieyyGiLPiZ4tFUN3wu5P4JM3CYrPfbtnvzpwh",
  "key31": "5MufaWRtqRsGQB4Vzk92v3G9pvrZz9r6gq6ur7d46qPoFrxGGS12Nr6HgJ7x8deuuHW9m45K8wuT4j4vgbn8GjJB",
  "key32": "5XWQn5pJjF3WLvL1PKEfa5W6NUyPwr75RGZSdiTqTQnNw8CyNDmdVpD9np1gbokw8LmMRKPEoNL3VdL5V3aTuDAY"
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
