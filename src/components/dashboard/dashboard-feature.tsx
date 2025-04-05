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
    "4SN1yZQegEumbkxK4b7TDdFbc8nG7wpVqPtktphws6g4jPWiz8M7cc14CaiAuc3yXDMjcHFw1puDfZd3MBf69A5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUnZKcjsyVj1xwDJw2qwsT2ZAj2hmQ52EfwX9Z12fusF5oCwEC6TnuNSvfgWRcN6WMdQSSLzS82sy14ZZG51DU6",
  "key1": "aQ82YscuryBWGArH5hcFe7qCzYw4qEgHBjfvPA2pwgE9AHmvcxPAnWVc8DDtSrsJxhzm39quqnBPmdpgkXmM5tk",
  "key2": "dJpo3NMrf4pRugeD55zzhvpa8cCW3TFuhWSjV6fk9cqeJk9Rnwgn4wLp3bcQPRu5MFMwnWbwiyqBRVud3W2MbgU",
  "key3": "568HgWVrH4U519yj9V4WsWoDCz7vDa9PgvsvbADmwc7d1XXcNsKFb44KS49xRFTQApy9Xm74xWDhNey2ifu5ig7T",
  "key4": "5nJBuL7TSkN5KqAFBZsf9sUM7z3uRtCNBGg55zkZZEenEfWyvJaiZZ1okycQLfjoSyu1TzL9T2CeTzqWX81nYPUg",
  "key5": "2ZWZuCJL4uhPRHSamYjj2YBfQp2MRVyLdAwbEYUMnTFbZNdR4zsj4xfvAAdwbqAq8QAuPNLPMteDrAkusaaoduzz",
  "key6": "3yCYyQuggCCmokWryX8u3uRTHf5EWLFvjDZkgCDoJ7HDswTcvbvofn3DfQGzFWATHVr8XqLyCqyWuZRF2BKScqmt",
  "key7": "2f6mLMFBVV9QFiozH7TA4r8s9Jk63Prbs8MmYHt5XfKS3P9DbeB8nb3D5PztWe95cVjGKmbCt25EAkuP1vQJuyoW",
  "key8": "2JK9GrGSR3bUUgD3xb3WEXURGwoMxK63y7bw2k98j3jzJZPvE8MuoZbEVjxHYvXcgRTm3Z3bYFqACPVXCbgEkjQX",
  "key9": "5ZNc9JoaSjLtJ7tuFUmPVNvzqBE7q7Ec5s2J5K876E7nAWT5gQkSfv8k46bE9vXAUusrQK4ybCBU7iTHySNVJ2JC",
  "key10": "2AaDBBWMvxZikxmSYUoeAPArqpfSiBaEJ1TmLdLFLmqejUcPYNGos4Ai28xWMU8rrxzxQ7gSXFVAahFUV2BdmNYM",
  "key11": "FWDZMHymAN4YUG8wC9PV1hbbSw1QoDHviXtgpMie8gJK3yCF5qjkKTKJ3hZP71tPUZPha3xYtK9kaD5KtSLjUd8",
  "key12": "5fWg1AdKMMGQfWvonSegdMtbPQzRpfvWnxtSji7xdjfqSaVjxYEX1RyCR2ZCpgbn9Fae6jWB3WXz9WdnzcrzqheT",
  "key13": "oANBPmabZUL8sbeTdLUmz24veT5YQhUrBP4hEEaKd4hLEt3KRBqGb3U8xKUmk9pBBEncyyK8o3om8rbQsrduLET",
  "key14": "qh5RWmZXJr7E1jxSiJDQRxtxbaumjBDMbFd1WZMinZrEgUCcEXZK8nb2G26pLVzXPcEBjTWQkjopcj2uHVKL8t9",
  "key15": "4Y9TKDmJXzDxhBWrLwEsXZLxmE84fbxs2B3amPDLS3PjCNfKNYS8pY8budZACa5ZptyyePyx2EFTFRmtU6hCtUDm",
  "key16": "4jtn6xAhMbMvYJcgCCXFGBU89S6iLgsKrkqJ2Fbnp2q21xM7HdKBcP5PwLWr2kF3kSY8ZLTvjcAjYrWefADAYubf",
  "key17": "2xRogPbQqXSWgC7L1pL5B4bUSgLCoCzLMs9QU4BS2j5nPziKjFxFtrmKf2vzSDCriLQ5JDUzKeZQbBHFfKcuZXvp",
  "key18": "4125NX2uBSQD5UVGmWJqVGsLh6yGxrXWKWW5TLvUG1dWKLBdCG8jAEHEqhsdAaYtGgf1cSbzQVi6hdrTvjiN6eb2",
  "key19": "48ajWGBh1Sg6i2e4u18PtqoUgEuxW8vooi5nD2jqqQrgVDfLUdyexYwxTQDQhLdzqceuguHJPMazEFyKx3ibwTY9",
  "key20": "yeqC1sKmmNAfyTnHS5irLYat9fzkN3EATffifvFykToSSSqkfqcHdk1LxXzWcAknvZSbRyXFBbfbHZ5TpeCBTWz",
  "key21": "4r68SFFHxt1ZzZdem7S9jRvbd61gA2iJ1aHQYJz5cGPWLxrwS7THY5oGrNmdx7HNbe7ZVHuNwW5NjwYUdWrMeCm3",
  "key22": "ZrnxH87sh9XRbRHPUJ8Sca4rXirJ87c9yCGboWd77eKZMSBdqBZMTXGECduK6dqZZxriDAZRpt7kzGVzPgjzcuV",
  "key23": "2u8uzZByLvruWTep5AjGdWCk43hGQXx3vKuXLoY1crqF1yfmGU42882dTGKuu8x3xTnruUUGweagUdGCgEEPMmkk",
  "key24": "2C8v1iTG7ec1vwYM6kYYpuvANfVLkhqozS1NNJdWdmYhxQwTV8QtB4aXatbeSWNrFF86JNWN97GfPwu6AcdZaSA7",
  "key25": "JH7hwjVJ8qQgwFgtHt4ZTHsekYouWrUsWknCYFYo1iUbAF874HP97CXVRrRCpUBNWugTx9v3huLwHdPRq1jP9AH"
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
