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
    "5hGW8sXfguSu8xCTUK2whta13eieLV4JZRUaoZK19DjaBNYFCTryNh6RLyqoBujxy4KKf6FfstUBSvTPxBUYex9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QvvTDSc4jkC1rT8DeFACm3UnbDQ7oxuMUkq1bC94BYGQGeXFJutaP7RN41MNo3tguW7F6rgLDeFhW2ef9TDJFZs",
  "key1": "2n9AkKKDMpPC4bAVT1TyT71X9waR4Ua6ewrKaaF5YuCK8ddtGGktVKXkPL5hapfQpt66mQ8TaTFRvd4gh9c1Nn2N",
  "key2": "NcCcjLcQBppb7rge1ar4ToRhBXXNXfzVPeGiv9nnruu4vYht2q8xDoA66T5B6jLuR36vzS9nYZiqgQteZHyrSWT",
  "key3": "4afoQVF6U9MH4qRX6Gk6WdwqMXwd6kUHRB41yLgZkvbqoNmBRSQVAKSvAW8VXyb8GmgoD4gKMvHBiwnaMnMynfdr",
  "key4": "M4huitMdQVK2bdm3mP57CUvQGhPEcw9QNFKe5fWXyLgowrt9TsxwzEidws6ZMkMNtPUuywmofvyrGaTPoCpxuYo",
  "key5": "2j1MbWHwJGLy8PfQBGumGzRJsF6t11yF8QFDbp6CtPDoVVYqfKeQRqtE3T8oUFjhQxQayCFjkgiJpA17usKdgbFQ",
  "key6": "4tBTU8j7GtdUB5ozyRQKuoxH5nCV5kaxQ2nLE95fCed9Hh9D18VwU526mq5zRfYSDJVdP9TN1BaJuZT6DzNBTQHm",
  "key7": "59VnaBdyDUTqDo9uMjnQmT5a7nivM8bx2RDZn1xkAb2GVJqsynBdGx3TyUKrwUXQZy97uEM1oshGhjSZoUKopdnd",
  "key8": "3N92sXWEB8ZiDc9RRwAkGMxnH2frZhkm6xVBcx7zAzprokWbMT812v2cYvYbc1HrtmueGZZc9zy14iRzEegbcfXe",
  "key9": "5UgQfbVzjVKREKJoKTUzuMHF58LpZi7zYDbeRv29pyHJ2vgJnFzpCPuZz3hYC14bmJcg12uyRkeLC159qMaZVeUL",
  "key10": "pr34i5c59UAzvyxnwY1z3DnR8qwmjjvSP58efu6WQzFJiGYoiqYEqbhSDNFhph29xfvNtdEAde6Z3khVh9tiSnN",
  "key11": "FcczeypJbEUejLSbCzWE3MFTXDpZMdJvyYAWuhcdZLtxiezip7a35DLotKxtQEknu8AxHUcnukCATXA6K3nBbG8",
  "key12": "3BoemcZF3j1Y8inHrkNz7zvHCCbRHKaC5YpDdcpD1c4iLo1LePsQR1ehfhSBEXhPmGiXnmctatsiruD1W8hVJg72",
  "key13": "3qt2C9TGEv8T6LwpEpzkp4u6qbbwBYgm3prat6puYoWo2sXmgFnaeXfMfAzgCYpzfCJqVVF964SpdFREFFRFwh6M",
  "key14": "3PZD1cfVRQGDQkiHf6Fj3ga1RJLh6Nb7UgctwVVmhKYPaxZ2DmWo3b99qjBvuSKnrdFNLhQpzn76fRMMgGJ2nf2j",
  "key15": "54wCqUCqZgjDjeTS9q4rMf7PWe61pW2U6iXSiKCfS3KTxqGZvGjtFaUMHjbaTRfhRua5hznskwnnDWu5xs6tYTQ1",
  "key16": "Dw1ZN8PrpGVxwWvZZueNvfN3xfBZqtNk6TYpq7aFhS6AExcZbyqopnLgfruEsFdLEWpKpCrnuYRiQgzAgKD4iH4",
  "key17": "2XPAHdHJuLb3YjUDjEjcZ7k9MB9cQkq1vp6qLyUKvVim1YAcMJ17i2tGRbbUu5FV5ZGzh4LL3ZkxBp75FPC6rpyS",
  "key18": "5DNfo1VnZipacjDLgmpX8Hi4VQbhYtreSisA51LgRnqp5YxBX3A2CosB6kELNquzvF9eMe9DKWtCXWnQ52bRo3gb",
  "key19": "2S633eF7mNVLmHdDvMEwPDn3BUNEk7G4yQwhyT2ZpmrYrbcWDoRfZRkK6qJzMpxAJAYunCxdq2ZNAfo9fHoUE9zT",
  "key20": "48dXcxpQsFvLkZEKU6SvUxeLJz4G9Jttr1c7VPNr7gGEypEiuv5r35UMG3pxSCr7XGgFBAan2hSSR1Q4eBv3UTZy",
  "key21": "3KcyXGRh9aMWoAq4exSMQpXYcdcxU7toY24USXgQexhZt8zGreGk5bqwAUjHv4pisbRu3isCF4BCJpsTUk78g8Mg",
  "key22": "5dYxM5LUfYLUWACGjevrA2iwNGRLCVATyzTzuxcJA8KDsrMwWmZ9ghp8qdxNGbVqwyZDTynnj6SpErvne8aJjB5w",
  "key23": "3Aitx3GnqQ5Sp4efYZ3sToBJErSqm4iNVZEprMFPddqbcwwTj7BBbWCVFLojLyUFdFFetpfaSQhdxbDtSQ9SjJD3",
  "key24": "4bXxsLpfn44RA2YJrkEjnTCW3gLVRoqGSbuq4L9R3ABdR17CkScWeAR4JeFiXoPEVnwzjVKxrQ8BQp7t327nzQx6",
  "key25": "qKLdMmMtfHc41P8Yvn3LYCELMAxP5bxFCJBzfR6DgCZ5QRsKvAtvfmuYYNXWoPRUFCTX55twZGmBaTZtF4gBr4c",
  "key26": "5hcWsig64PqiYBqKmRjp45sECtGPcV8mYGhb5wAr8PXff5zUfn7wqyWi5q1UV8RrojBjSQNiFLw596APmSjiRX1Y",
  "key27": "2JcSqFhTwfmT7Mk2PjXUsMckqQmgG1AAL7bqLVrPed5FFqyBuMgomve5zy4FUoCrtBvCdju9G379MUkvTHr3cfaU",
  "key28": "3c2FZs2Fw636GVdsUE869S5Ay6iAkbc2XPrYHNas1DiZsHybteAs7eYrByyjWRUSDiEEQ7vXFD1r8JLZAmnLCvE6",
  "key29": "cWJqEnvJzBhWTTauTV1DLKRbdgKsiLBHh2tiVU1J5xazpTSeiRLPUmENmZb1MJRqdzKvguFqk19fva9UZ3qqLNg",
  "key30": "2oXX4w8tpRbGgkJoFKfkB3TcXpAxYKcFg4iEv7WTcRtx2myhZ2J4Dj4XfuPi57jm4boem9vxYCCTGPTcFXJDKrnz",
  "key31": "3PeV6wNQ2tAVVgPb2hitL4Knn3Hu3Fye7qfewn5qMYBFm65xPUJKgNdtaavZD3j8mYwBtrwDcvX61jGxehw9phzN",
  "key32": "399MyXi3wVfaV9XaDY2ACRA3kYofAFHrGbchhXdzTejwXaErJiYUdrjBCT3ZJmyuyJiURw4mzVsNEJdHP3WLivg1",
  "key33": "4gkAJCgnC6t9DvFVkhpQjdb8VKBiRSBzgTsDcVo2F66qoc8REgTJtp6ACZGnRr7aqxhmQLtHP4RmsJ2Xg99474wk",
  "key34": "5gSaWh9GnuqhxtYF8iqp1nCpDitW1a4uZQC1t5jMG8Fi4Qve4dbTnYVXTPH1qJ92p4AXCjADxRPd2osoTJGmrzUR",
  "key35": "2vodibEPh8agJTjhbWCmfctHn8fHEGiM76MVMCb3meaBtBLLXWnd7AiSYCg2baNMp8yF8kUjWT7RrjiB1YcvAbdr"
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
