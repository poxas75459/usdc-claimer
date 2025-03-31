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
    "3g4zws4jYSSwgqicyvakcwFuCNmCPT1Rdh5t3joLY4WuMJXXrw7F5ur6JGaDgZynPcsXN3C78V4QseuX9qYf14ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCeLGB9T4yr9S3SZgty88hq2gJRUP5K9Hk4Lu7coSTomuRbcNhYkPwifqGhjCbD4A8e1NSJEiq4Gg5NNLvAnTsa",
  "key1": "4Q5GJya2s3ftnNCGQqXn2gx1fWYJnaSTmBNGjdHqTCSm7fh37ADR6RToLtWDHPXSYx2XpgTpB9hnyUEgrU2AkV1f",
  "key2": "Qoys3wdKf7TZ7x2jZqbyEgpmK2VVMrqdDYBNPHfmvMziSo6WK6QwyaqVKyLn57yDhwyEyYwkxJWE5u7zvB7mUxW",
  "key3": "3n8zq4HjCnvzn79F7qBMh5Ddr1Qp8QikmibEieQ46PpX8KY2HvtiyG8EZ1YUxUqhAqrLyR2PoomSaMSrUUziLKL2",
  "key4": "3gSnctvzm6rbm9qhkjYxoU1WzWxrW3Mzpj1CMt7KNwxFpFavWQxDPPtrqn2ta7Ss4TtyX9FVoffYvkb6noiTQt9i",
  "key5": "2FmXUdjeSBoRrNuXuNwWwGQtWy7GLceF5dybsZwLdMQ4STjsi1mmzhNLrpcyWK7euE1Wiu36S4qddo7LnDPJyFTU",
  "key6": "5zdSavsMiip87KoJXTsu2Y33jHDzZiCmxSAXwi4LUsRGfWcnxRFcZ4cKrGV2Qtey7hbxfTgWTjNyMPosGhLDgbTD",
  "key7": "3Z5Ud9cN96qRLcwyY3JeXGHTVQKhoRqjTp656t4nrxaBj6XiLMvcBUdTZt7xYYF6KAMjWoHvmpKPVxMVnkcVKDzK",
  "key8": "3ptkQ2m4nm5QLJ7oQ7gjMYxFNJUVTptfR82qDEbBLcRSYx2aGeJhh47G4YP8fmq5tWSo11oCYtdUDFyKRfW6rZAd",
  "key9": "32hPNx5hBNyp8Nb7TGZH9ULjzYjqHUTWCasenEiE3gCXUscZMA7xyZdwTmQ8PdUJAk78QRKHZzKYuk29LVpcQfxd",
  "key10": "2i3hHSMyYftTbVJ1x7rm5c73yqnQSp9hwKzGwr3gPBM1rx3Ea2NgsxhbHUERN3fR4vGTVyFb1kC9MHW6Zr2FRFKy",
  "key11": "RTnGDwCqDpGyiBEojbnobkj6L5RmjBjEWzNSv55RHYiRQ2Vene7BXam4nbaeqWiBtbPeT3Fxbyfk9L77MEPzLd1",
  "key12": "3RLPp9uAGoWfEgb5BWd66meNZocFDn1TKKbX6ZE1iy2s8a6ypJhVdBSFKJCwGcpqaYL7YrcnyckHbXdH7yhPuzcq",
  "key13": "48bMQ2RpPZkVT5TrKjrftGveCpLBLEnb5ADRfvaroPaPoFGMTYv7HetXPM7DABq5SpFnzttdU6EHciJqgoqUBynr",
  "key14": "zSRueGB4zvgrA8sqfWgmahRk4X1UCe1f6EvBD6UDdQpK9hhqqctvnyLAr69JSpp18y2rYQHbihsXTLr3tfsAovC",
  "key15": "3GCrkoJRjQh9dChhnivFKKqBSurRydPUhhBDoKpZmcXKPAAKfQfqYLZNhDoEQtHYcbPtv5ZsGKdqSd6LkhExz3QE",
  "key16": "5sqynyxUg2erWKFweF5g4KeG6ggMBdGDfDEQioXLQsNuay2Z6CRSuc8evNLudNbe5MxdJjw9HzZ84Sv8F9utsMnA",
  "key17": "42MZZE1rEQmNjn97RXpqcYgqkeyt8ZwKSNd6bpzBDYXQvYCgrJSTcdVp2hEXtTi7rCqjLRHfokXsQzKTa4H35Cff",
  "key18": "3smDf9cQnbbdBmAm9fJj9wiuQEMmBWkhbdASBPaELMRXUD3Jdqm7RUnH6ym5vPJFHswfamTjt2TmyipWbmHFwrqc",
  "key19": "3dZxp7AZSh74qhbQnf2ucxWmARmAaJEhhDfATPR4qeVkbgbmDKRmDRbZz3wqGk18iqKb7XjMFR28Netux3HkDxtL",
  "key20": "475E7Zknxib3utxD6siKGcjaLbGs2uYyPEFHPJ7CDdx2RuoG6Hd1jkRCQjp3HPPHMuFsdWknPvkfqhhKBcQP7hbH",
  "key21": "26h5grNAct6jB6VW1v2KyJ7DBfa4cg62Ly7yNAbzCRCnv1hPpk4xitMZCihGyFn4iDmt9c5VLX31GzkMwpUbMJDu",
  "key22": "4CRnteQS9HzCwFcyjTNmJBErGpLAG9k1CKYooR3mVjXnQPD9EsvanmX2tGQnSErVJautaFFAfNVNStn4r8si8oaQ",
  "key23": "5uDsBrZbQYei79f3bzMw3BtGjXf2ZsG5HWtXUoY4DF6kGwddG2yAoSLRSrUw3dfR8NzTU9xQLsFLVM8eXpYUg6b6",
  "key24": "K6fDjo6TyLgy7VSsX1p5ykabfQLE2qy4RjhBmyKUQceFvHD8K2VRofo9znpGGTN1VNTJtBux5HUP87uEA3fiUEk",
  "key25": "5woRMynzYfeCDfPW7jBSBcCeohwY8CMuDezYuzKH1YATYqrnCgr6NiRLUUx4KFh49sR1moq5vjXAuScGd257Siei",
  "key26": "59jSLM9DmduGoaaNBJzb8LE65mPCWWbGuFE1ohQsrpw8CU97a8r8WaH2zkBqa6qArUFQ8YtnzhZCmAKBkMoyiz2S",
  "key27": "5ZqQEtvy8FgVvyYCKyDWFVSbPz6TaBC55ZdGzWg2Hqxni7pPKuxdGoMmbcBS4KMdUSs6bVCBi3AnbKFvptgGMs8W",
  "key28": "2a5T4Sfq9ErYrnqgY9uajgohHxAJb9XvNTvQbUcvxnW9c45yoZisQDeVXCKjSuR6Jf1G5qSSqftD9J2MmnsjMPrY",
  "key29": "3uUAqgLaL7D3W9MmBU3L8s1sb9HPjBEaejzgmX8LhMTMGebThjWCP38fvyAvvKsfTLmHbqPWFLExZ6kLqEwBE5N",
  "key30": "4F9a6E5suVZ5sBFB6bBBiy4WCBxPiKc7jo1bJgy6P2LLZVgSBCd6E7oGo7YwBMf7YcYZ2Z2cCEjmCVedxE8gRcM7",
  "key31": "31pxUScSQzgdcxFwfDQP1iSXoj8SafGdGmwBzSbBVCbJGZ4rtoQop1GR9X4SPUsfJiju9iJzbRrmMkYM9zqDcD1Z",
  "key32": "47hPMbMhVnAMNZN9ZjTzspSnF3J2rewWSgPXnnNmAjfijzwAJsA91Y1HxBGvyxNG9ugYm8Tziu1hqedcXerh1rSP",
  "key33": "2fCbTVvhecQc4t7AJYx6yqKRfAKYNQ5S5cqCeVaeYfqvMvzYD3Go5VqUkJRk8HeEnpRkMkQVbfPzRDxmSZtLUCTu",
  "key34": "2fJvh2eFgQQKCcn2GXffLTxFwq2yu5SRcUSwRiD29FLdLfda6Pzxu3TAQaioTRD8akt8oio3kuHg9rHeyJoByW7G",
  "key35": "613CVjQcqLeSfVDt1B7ng7EVD24StoRo7C6CWvKge4KYc1WDsBvuk3ufZGcagkZXGw6WjVZd9q4y6JNrAKRPWyoB",
  "key36": "3LTeLzwcywtPHBnwJTGQeLTDPLYv2dM8Dq1giTxkp2b2iiTKhpHCDoaebg55ErpFzTWn2DTEXuCvNNDKEu1Dk97N",
  "key37": "4247WexCphNUpXjCakqSE8PNC8AjPL3MaFRnfKKakUJzbjRWQ2z12LV2A3vx59nF3hghkUGapspcbjVeYkdMoidw",
  "key38": "5Jmbj6yqdiftz32nrt3FWmiLpPjWyBrCmfgMaEzDk2MsG9nG6MRwqq1dMb53A33GeggseqfYwnJG3HHjk4akqBdm",
  "key39": "22CGrwmpguQpsKNk8VoTJ41FkjwnGSZD8EkbzqXzCownjqKVAm44yPeASKjxbQjCgeEKnyWe7sNid2gDjkogjGcL",
  "key40": "eGUoqB33SDdaBjNnptM9diMMc34s6XUErfN5uZ9VPmep86AtTpUPqyiEnFzq6HcFFSnSsobivmBhAZ95P1gaqnm"
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
