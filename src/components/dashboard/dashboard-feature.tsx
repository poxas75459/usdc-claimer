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
    "3N9CeHfgW6bY16tdzt5ug3v8jEnxT2356PYWSibiKT9Q3cKP8beV4a2C8DnBpxPCjP8HeXRp8FUW9drNJ6CUD9Wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPxgde8YDLyWATc9UeL6LQbbpFpVbGcpfx9PWo8JyqDEZB6dEszCpG36UzgQUSPdf8ouGrNJFDNJNMe85wBFjYn",
  "key1": "3cR5bJJiJM3HweRUupeVWdSNSABTehDxZGdzNs3DDtucA4pBm7JcrVECm6UinRrXPTxS2GPBcRn7VUNwbybQ76wP",
  "key2": "44ixzhygKoC1BbTtGTrDgWivU8opnMBHQJ6NkoGYEZQ3AmASYBXS1XihLk9na7oJDraesLxN2DYmLTM8YW7De78v",
  "key3": "5wa9CJ8XtYiqBarE91QRz8v4KX2WzqLMNuGF3x8BiBBuRFLH1oEUHp4b8UVB2AKLL6HsDPJVVM94gCJuBL3F2HeX",
  "key4": "DwqiiBNBXqavtzbNAjXru8XMDUzADAP4LZhYjd7ccdRBMt41sGiyRP6BZyWZVNzR1rQeDdgfcm2juiD1k2VcFHE",
  "key5": "4UXH3Pk7wTQBdLWaDjhPt73ipZ84UpECPBGrGnoXqq87iSnwGqNPb3mCzPMSKtub5RWfJBLx76DPR5GLrQHSVGJG",
  "key6": "2JDyPHkgtfnCDmwPS8fxXrC8vuA3XiLvt7mYtQGBthPTRMkgzt5F3tVcE12mkBVkUTjvvt9gVEQR3nVut9Dtpk1m",
  "key7": "65cmw7Z4zpSDY9xAnrqm2ERgjb9aqzZYPGjNQWcdm6MjbS6Z8N6j1R8k8gRmgukSpzxPKHtPK3a2vHqNyU9xQ6sb",
  "key8": "29BXSLLejrwX1sGJNaEfATRtBbUpnWaM53iF8xUWCM3h1fxmx5xCuyxYZqDFg1Eabw12bCRuXA5UKfRhhC45JTPV",
  "key9": "5xPaZ9iS2PXjox2UHxV8ChYpRkCKawnBP1ao5k7vvwdp2WbZR71nkjr6NPGC2w57GMZtkgHooyHmAngkcQWJ29ym",
  "key10": "5UQQ97232UwAtyrVVHGYHpdLzn34WE4yuhFGzB1o6SB1y7rbDe8wEK2uHJWk4arcigfz4WrFDLqoBqtvUKLRb91Z",
  "key11": "52tTDvao4o1qzhdwhCPzQuGR9D5ssPotkn5dGYxAFYhKHC2bDxpt5D2WhkDtDFqNg4E5VTfPed3Y93sL6onPHkae",
  "key12": "4eCLQYvkuVMdLVqFMDtu85o5ganguE3SBFFd935aEhwj3ktV25FtSukrSaec1SQZJNYktTX52C2fWBsFTRkbFDFo",
  "key13": "4s2NYfsPgqG5Fmd5prKZ7iyuiKr6jpQjnqDxvyoVZQrYdLxorCkDTrvn5f2AUkAE8gJPNqmKn1uqVQLEMNx9CuQx",
  "key14": "NMhtWcfzbpNC1DtgJdPVK6Hwc27FQfcrFuugyhFhEEm3AosDPhB2WXwkwdBQQtimAP78bDFybvjsv4FBMJkmgSk",
  "key15": "5fmEGD8z5k1Xx9gFTMnamaNiuVofBTUKRAZD8UJxnBwuCxxGtiftdEzfmpguxBujwX9DL7AbanYQAVLG6UrRAvob",
  "key16": "fxCEThHPmfsyz5SisN25Ru4SXhv1dN97SeKjVpVyiwBoF38RXLgCyhW4gWchpY4Jekvbea3ckFZjuxmyvTNvQwP",
  "key17": "emV2EQq3RC1AuzwhYH5mWVUphikzqDMNEKXVeekcSabUQ7L3UHXJ9HEDaFVpwE1QTR4rPiKEpBuoNj9Vkq3emnd",
  "key18": "2ZeXTZ7cPRv7nRdxxtmo24XaV1RiMEcVvg5y74evctbTmF8UVDQAXG6Z9agksx4AFtsDFMvCPW14GSjKWtQvvvzK",
  "key19": "oesSqWhk9EKLXyBdm5J65kkdksJnEVgPp7Dy4BUD22ka3KWcXbWRLNmP6gYLoTJnQvXr4uSGGe674LjZFYmeZmp",
  "key20": "ALpKF4r9sgiBjwed6aeNBzMae3BKnfnkZVTZcAfCrKJKZaTtHynfTfSayWKJtG3k3SoXNsNz5TGgtCuY2deJt5R",
  "key21": "3hmWvhCXVEaAh3yqZLu9nRwm2jdfypvXmup3xwUr9dsiAXvdbUNx1tGCWab9BbE1KF9FERa8ZXGxY2NLPbUfcNzA",
  "key22": "2Lw5GzuJ31wAmQn1i7dG8BQtm3xq6iDNhvm8oS4t8P2Jf7YGnfZUGR4W4wW98NGewPD7uPevDMUu8mcKdn6ZeQAv",
  "key23": "2NCJpqfBoDkumjiEygtSfCzJcG61EEqTLN4eYDUCGBfp1ihvYoGNwr4npc94k2uTYr4naUBEVo9peJds9samcY3H",
  "key24": "28UkGBjMiZYdPPzs3XePt7c7hsDPJdmVdBcieDrRKMHUE4Uiey2waHUVkJzoHtvv392UZyt1TJgoFexUbLrP1rA5",
  "key25": "XnfiL1TvZFAsyVcZcfzEQeWLqdC6KYEwUz9wMjdKYxPP3XgebkkSfrYDmCHBz2vXjSzqQPKStfupWp6FMrYnKN8",
  "key26": "38X3DLc9i76edmvBCGE3FxniiF1bzSoBdNCpU5nivQJj7KKEH9rTJfr41NrLXf8WAB2HwNEMjXaPNfPcxLqqgJS1",
  "key27": "2jxcdGQ6VCfpPyvqhkf8K4Z6hhedDFfP3jQyGJSTLgcGFjFCjVq1aSNZf8guJqrgWW2FJrAKTKaxNqpstPdwCiXZ",
  "key28": "5JZRq86KnC5CkjNr3nri2WcJJ2NJswhR1zA3k1ibVU6PeaMRxiy4FV6u49Ce4h9ySgVEV7w7mkzzQHLQ8wCyVq9G",
  "key29": "Wo7ZCy1nPEtEXtotdm4rjLsMN43YU2Qrm7nqfBQe9MsXMMXMDyL6VE7tWpfsGiukozDTKoCEQGGtRQEzyQRRzW4",
  "key30": "3RxNfinaaWJ3mhsuV3R9qR4ZWMzZSKcjFv6gxSVp9rmSXiybBzj1eQaYWzSPi6oGMkYABcfF6K5Ej1sunc3A1Jwk",
  "key31": "4SCMNr1S63XuAXgDq4H2zYCDdu7REFXsTm3xA64AuTjHuMwSW6MMAAJpubygpZKaDMvbPZzdQVGQxA6AMTrw44eT",
  "key32": "2mASGiP8CEdemjwARBmx9G8RK1xvXxVruAikNJtty9gZXHLYTCSj7i3dYfF8r6AKWrp9chiLiBvSCQ4Q3GSdBtrB",
  "key33": "hhNN4cZ2ihxAoecoLrrGQWZLMevSjny3XjVwYCpGuH3wQjL6Ff8udxkVxcurwbGtDcYhnofqPj2ZgPmc7VRgqde",
  "key34": "iiFwWjjS7U5K4KKf28GtPi3vH2e4v64cXK2mZWELW5wk2u6DqWUyFc8oZUwRWUbRjWgNESTs7LEBRfw4FJHbtvt",
  "key35": "2w4nnkxNQhSf2KP3A55i53JGnnf3wD1uD9p3vdT3J2dsxAYdZS4BA9V6gz9HLt7cAxZLdx1DAatUY6b46DEULDEx",
  "key36": "3gQb7NMC7irV24QWnam4fVDYkcUNHLLhAiujcJo3yErwTTBQe7hbRb1D6BkH9Fj3SNJKStb6LM7XBGpZC3Uwq9Uh",
  "key37": "4gk7LZUgpjW9eZx8WSdJk5yajdDzQ2xC7Psg1VMSmqVRx4UUcM5V3AbKFMi7iZggmd9VKHipTGP4KU6ed91VW7SP"
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
