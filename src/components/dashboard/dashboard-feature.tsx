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
    "cZg8ppVLC8qXppG2oJGHSsQp77YdzRoAeoyJpdR8E9z8yCdg28kweuu2mt9N1kK8AaFxzGJJHEgyszb9VPFhZgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8S7QAPYViYKTg2rv9neCLkXU6CM9dqJt71Adzfimd2RCrjcYZnCzkBcfdCRBagvY7ptUmQrT584xKviuBpEY3b",
  "key1": "2Priji5b8Rrj5M6d7bRN2YVteBHghmxRZsR2sqtkHUjNtyrK9Ly3KhZPbuCb9hvPc8dzgxz5T4bGftvNuh1u25GR",
  "key2": "3qjLLU53rKsmey1932qoL8ye7fqixLWJPEVnE5kDbG9ugwAXoDEPpafCWWeciAu6jWURhrwFh1tD8CDWRtZHHH6E",
  "key3": "5P1By6JDKAKZccHTXkdNzywyeup1Mr6Mhs3Kwictr3aic2RSKtnDg52GUnUdxzx6j5nsQ8hnk3E5g9C9LqTiLqpo",
  "key4": "5Yq61KXrcM1FtfBUFb4Xwrk2oatJyth7FaXfSfp77kNzqaVFJijD2SshgKxsco1LcvKsCyXeWRLKsqQHwuaX1sQk",
  "key5": "ZhmXQwisxA5mPe1ZiAKp7wuUgiKwf7CVjuA5oqS5gRs5RB11hHgdm3xRpeMX3tcREDLEzoP3WaZhWPMiFNYhsVK",
  "key6": "4C7HPT7U3A5dVbpnbW3edA2opWXc7AFSMMGzSjsKt8dqumcEqervf1oXGexRdU837o2KQAxiB42oyMsFFpMTmjuy",
  "key7": "kYHrQtLXcwQYQP3HWxQPzy8B94tDdyf68wR6gAoW6aQ8K5sidPMGW8EaVzmYMGhUhVTsAoXYMPgHfoZBGqRcvN8",
  "key8": "4hMEb3DmK4F33j5Q7BaJraGkk9FGKr9UFz5HNt4udAo2gZC7GVqFcbQ3YVNMPmzS4TFwM8JoWLSzpsSa4ygUhtBk",
  "key9": "3XXUfiLfAfNdLd37jqt1qNNoCwWo9UCarba7yoHdGZdC3HqxLk892BTYif4zx7cJe4dGy8zFMxWXTHs32pukauDb",
  "key10": "2RbJKVVtqVBjze5PNKa9UZR6ted8VUtL8dUgyxzhdQAEYyDJRnRmyirjMWz9xLEPR31dLokX5BgLNEubYwJPEsHL",
  "key11": "5dwicskyE3G5imsbDtFNcVXj6nEyUXHGfrjPDVubnpioc2biHeV5x31ASdMMH5oTxDTekAWtKQVtXqAtsJMgMfEg",
  "key12": "5gtWAAaT2VkS9AKzSZ5oXiVKc23ahkepazKspaWe7JaVvqG64HPTmRFoCFvzW6UPpyhiqVKTrbg2ZrEK2oifQx7M",
  "key13": "3CdefytYKEzbQ3Dr7y6CmBUhsBEADPdozJwWmLmf33mo8VGD88n8E6xC7mp14WTMXtJZwhfBeHKAWKj29aZMq1Y9",
  "key14": "Q5cvGbsm4rMx6u2DBXWeV7yZ2EwzSxFS1ss5w4wPWVuGpxREMrEc9EoRnzM8BWS3qZQTqfyfEvkj1txNbPRj31g",
  "key15": "3218MmAgaasmR1o2LMQtXPr2mpHTHxdxnyunYMrhFVzeq8R8hCDoi9fAwj8jb5EGUsPbQPnrS1ZEyscoPd5gKfde",
  "key16": "5ZswPEYdAW71yVgUadBd8BMMqx6nUarPJF4Wt6KRzpxZ5vD7C8H55c2zGuFymd5fXAidMJzj13TYMaesQZgPQzM6",
  "key17": "3oDQMPKa5wj1nsdzi4DjTS9tbsA8Hf2Mj5GfyXVfuRqdZsBrQVJZjdy8tpymof8wVi83FRikZ2kKf43r7b8xsrxS",
  "key18": "2ZuGkcaHwyqQnbJoXFEAMnoC9bfSGLmdr9sopKLdtGmvy5ThZxPMD2gvFp5y3WU79btroQSnnEE1u2KNntT5q276",
  "key19": "2JbAbZR3bJztAtgU2XYNSD9X2A3UPUX5h9t9R74H9sHosQZNpogK1dqVwDZGF6xCpNEHadbM4kqedVNWJ2tU3Mfv",
  "key20": "258vuMfatMHoBQnjWFXCuHMnbnZLfJdqVG1Wy996GqKykSKKu7UueeFLurdHjfL7s9AHv15BnUbZHMqRPLqBEgP7",
  "key21": "ZMpjZsjaFyom6x2NvaeNHxLh52Yoc4W2DKo2yfZUdG8V6TjDFfxRJmu4SRbNLLT4gYJbRshQTtKvmADSnxBaAfD",
  "key22": "cBiRskNMaYYCquKqtF3NCkAkzKxeYGmNLcTCRApiq3ZnrMJr4etdNWfNBVRMHdFtijUEkFTjPqWzuYZpjhi5i4p",
  "key23": "5VVFKann18MQAJ9ZveTM4E2ygMpvx7FfbChj7vjgJLSQzZPwviMdvK8CpjVTu6ZcNYKmL15DKrmfXvdWr4SzauR4",
  "key24": "C3ihSQB4vax4rRDU5ShmGUSBjxjjBFDpGw6C6GTbgbp3ygn6fXCUijo1gJ9EUAbcBKziRM5PcQ3rD2tbGWgSxqT",
  "key25": "63k1VSC7spLNcrBKbVimELekjhPqNXzcvXL6p3ZXGhy5WeLF35ejcyr4o3uJQowkyxMyUpw2ub2dnussvNp98Rvw",
  "key26": "5F9ZEDMdJucrp7qaAGGbXfK9SNa9djJxjFWXkpUark7amgadVqSX3YmqyZAD7vtr9dEaPWwTU9dd2Tvj2nzdngtm",
  "key27": "5FKKiGk7vRquc9E4yKMLMdKcS9WsGCZhMGcMVAUUCe5Jif2bT83UmLSCU9pEWdjNK6E9yFfcvqBCv6Sroc6eUDAD"
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
