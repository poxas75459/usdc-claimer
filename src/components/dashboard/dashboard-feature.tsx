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
    "65meZQQKC7pxSL3jgt2XVxiyQoU5zm9HZvzhb1SWRr2ZS9yDxphsmmiT8SvwHizDSyGKDGppC8iEHKSaAteGH2xE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KnChWF6KyiVupUCD5ezS1dkzqqsHf4qhE4TZG6Cf4Vw14SJwUWTMMVdKuseTe6eBMD31E7XteSjPXKGFwpJe4uQ",
  "key1": "AFtNrkAZLxCeu52yY5ziSDpNGDsQBEkomoLQ9HnqWDUhbzNVjzA6ENgdrvS5TT5Xuzd4AcQuF6AmyNrTpADcQBa",
  "key2": "1jDurgaMhiPHEK6wRauQ2JBWoYKbfPayWb2K4ewx81cL9U5Q9frJ696SWU8hohbrDjV4PqTU6PmfxvifYGJMDAp",
  "key3": "2wEqaKMn5Gtu6GvvBJa6qBEw4XH7N31EFYXhKpwUaZyxmupQm5qJM6H9ZRneCrDwAuhrDbcuY8yymkK2HT8EFYp4",
  "key4": "3EKQxeVpUvrGBMjmDuzUufwjQwtDXgHnPT54f56g6kqSZHM2RXAVGDx9HSWgS3PNfSJ8D9PohGRVPczbHocsboKY",
  "key5": "22PbvmJQQvtyF5E9Uw42WivKnpD9M3B7LAfDmHdYbMFriCenBLWAMKHcptgQXk42yxMdXpwBZd6N1PNoW75uWDci",
  "key6": "28YncYuWUdzRAZWkrvakzhNDLQ6S2gTu7Ncw2rzLgwbF5Gpmi3y6NaUabCFGJatDhBPEddJNGvcEeW2SvcoFwfZb",
  "key7": "3ZrTLBu6LETp1cxLbKShES5bqYoRXNjH4zL4tbV7s4AQ7yMZEcwTW5qtNeEDCFUpk4wMeLiStUQaLVrpLvEx7cB3",
  "key8": "QspP28KCQCbanx1JDWcxy4tpnJhxkgsjPXEM7qzmStrBhcfsdRuog4bZtDWjDVBcVaHHyQPcbBKkbAoezRH9iBV",
  "key9": "3gsThWFdFPqYNKzYn4d8HZr7uc2ZUzcjJVvW7EuHYi7BsKtvomTeG474KL8uTc38gFncp1FsBkP2bXE9xpzDnLs7",
  "key10": "harUb9ZNb2acr5mcbPeyRUJhcma5crQzV6vzqBqQ3YUxv6EVGStACKMJZzRQTKVsSUTtjGHfA9FfmD9ifRyDWsS",
  "key11": "wgc9k9ZGv2eFkyNCswpm7XqtaeVB9kTdppuReXX6sPDsWrd8ANr7a65m2FgTmsbFzySmErJtRqjhHMpBpvg2r17",
  "key12": "54rnttjtSnywCRpZ5FchNk3s8sUQ9UeEcEwNaUVe18dSJUS2X4QXFrEnN5FnbwfgN2Yw7jxymSu6JF7JCjsrKYX",
  "key13": "44WoE6D8fxscM1S6vndib9bpD6HcYZmrsN2XAcQJvhg6yC5EERo6b4qCpopwBkBBqk7ZyLKAa8EKzXbpvYQZGouS",
  "key14": "37Z7S9B3BSgvqFdDiXdGrGP4MLQWzABFXtFkdobvLHhqpVmsb2BzPFiFtpnVpj2pX4NT5zawVzuKLsh79McWRqrA",
  "key15": "2KVq4znnmHMZv47K7YKDXwYXx5jGGum3yeYMEMxsdjLGsH7oNfCqenHV3erF7nqB7wVaCbghMiggnzJdphrTcDwg",
  "key16": "4nwHKexecsY4BtfKScwYNoCspBeFqpBesBTJaPp3pYp7HFMBhMyZ6r4HCE2Ss8euFCCNe8aySurv2S44Cd4KRfE6",
  "key17": "2xv2ZhYoHyscrRs4iQ3MCWj6TqzVwq73t76CA7FKykpmFnvNBd83dzLRHUDRq5ZPeaKepEBGCPi2vN3XGUoD29YT",
  "key18": "2CHeE4UEVAvFRKqQHHR7PNYahX3hnWJvpYrZ7Ase8Aee4DimbCQDzEcAHtmv19Up9YLp85WB246W5gonCSX5Wt4r",
  "key19": "3uPyAM3dqMFvjLP3mBBoXFfXJw53pRHEifqihVGC2J49jCNHztdCHo4M9wc75id3KmrqBkKVkw4UgaAP3hm8byaZ",
  "key20": "35KxbrNV8e9iBsVDKDCM1dYzKSx1L5Rb5tyJkAqbFDp3WiR8DzSvmf9RidH71JxaThaAKB6j6pxBKvDtGkZtmoZ2",
  "key21": "66MDfKBVuJQQqVH3P92FG4v1EkzUg3EnjBXNLYgSqtdC4nFEMnBh2MkMq5EbvjwXkvTUWcDv8sckBH7htv8F8uAz",
  "key22": "4mgaCdeu8nrgjvSJAkaWTYrQmbMzR2Rp8JzWZbkpocM1UNa4VEYcZDCEAdvQEvYsrSpRHTPHw8VMfmTmunaR6tju",
  "key23": "3FgXsb1un8EiiYqrgqeMoU8RBAFZG3DvqVrbAXnFLnv7mp1EzVC9QHfdzFeUJfxpCwqAx9b4D8UR4rk9sUeP54zU",
  "key24": "4ke14LAVVmrLju46fZ26eGiJfxz5QEZwsPKmEH9qXokcLJ5Jxbb5pwFpMSY8A5LPxnhj1QNJtNDJSryrYYXtSwRK",
  "key25": "5LZkZPyue1pWBYuux9JgS6uEyjKtbV8hViquvQVZecbWeb41VBivdCarXgp3SJqGLwX9ZqwpjN1cFnKm81jYkLYm",
  "key26": "3itW9VVZBnbiF7nBYsscrALF9kA7sLYQTbA4on3iLajVMTXFbg79MZZLma8sdYRaPjcZq9MUgLvFy6R3QpAcQWJs",
  "key27": "3zqkkzWJWsh4Uaz5T2y7b62rD3e5mtRK25cVnRcX9ycKrXXKzomHjAyUyF6FYXzQLrNxwbp93BBTa7F9xFSViR91",
  "key28": "4pV2zNNQqGcZzQkfBPqevhcqJtTdAonJe24jNkMGV1eofkQa555K7ABVP5UCxems1NiXtVX2CuYBGccDTHtU9C6g",
  "key29": "5DxMcW42xLFHPt6kfh5LevDkG2GgRmpXebRVzopuZw2JXHc6aA34pfUV3ueczQeCRdZrH8kLqza7yHbftk2Bbn9w",
  "key30": "3vZToDg8q1QMTe6CDg59n5pjnmfWKNvMiSoW6Y91LTTfFJwv5yufw8W7BCvun6oRJQef1sELeUHuRB21atmg1Asm",
  "key31": "2kM7RQAEqirjVce3tXUA1hovNAeFyC489j86thc3jspxt1ZpNXJBpksNo17qPCPGna5YDY8J3EoaTvreetiixAxs",
  "key32": "zDrcVHUi6oEVdtP824u1yXKJQPr6ULuaWp6wszWq3QfjesgHXjuYb3ksHYfmb58cA13MSTM2Xash3U3zUCBEkT7",
  "key33": "dLSc5MJmpM4aMuCyitQneTieioVtqGHe4WcvfVb7acrqPW1iBD8bUT3jTNpFPsxqx8NSDjDYFPPRaB6j9PDuVnK",
  "key34": "4YcfLZvQybW6HUv9UAtB36bt9RvmQQj138NC5i5U4CSZkAQn9nsmgwLBsY4YDFnogAP7QHWih4UNDjg9qqQvbP2M",
  "key35": "RM6TcuQiHYsi4h1yQsZr94QNFnYCxkcu935j2A1cZYEE4qTMGFtAr4W7oCe3cTHW2EbT1uhZRh4oZKeDVXL5v4C",
  "key36": "3HF4sWjRJsuhCctLnufes8dbPpg4juvwNcx9R87KdacrvhgZQusJuojBWNhNV1jev11L87b1ZaBRjMF4QXzEBmPk"
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
