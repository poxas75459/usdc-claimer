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
    "2XZdw1PReHgy5cvtR5pKvUeEnxx8Gm4Zp8QYkDD71JEsshPPA9uXHPbVV5Y68ejSeTdptd65XGEUx5k8QNUEvjzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmyUYDF48aSnvtzKCgHQH9TCqo4ENHfrXeccacdwxCQTsSKT6FTqzNVvhSgRqotX2ToVoY8H5dB8MmrSPfr5AKF",
  "key1": "4DqZ1jvBBvWfLsf3CaVyCzmw9Xfg2e8gJyegMcoZQYJYuoLepxx5kqdGZDeEj9h9kqcB5ZRmg21BKsP54VGwpKhb",
  "key2": "2GnmEiEVkNtjZjqLJT2eihxC4HdMDtdxvexYpS48veFPEB66UKPZawyvDQv9CrsWCKZSrKvbtQDKY6yrX5pUDk4Z",
  "key3": "5MHjW981Yu7FPwvhvyAQ8hZaXa6i4fMzvXNTxPFJ4d15ZStUKiu4GqwrbQeti6cPzjTt4Fsb4Jt4uq3Yr7AhnaXi",
  "key4": "2CBVEawYUzXZfv5rcs9zEyP7Ngq2BRYHfqdty82aCyZwVkcfzUxv81LSZ6nHHNR9UcDTUwf78tet5NceHN9nMxQk",
  "key5": "28xvXAAC5WdYMzqZMa9dFYfeF8JkKRkgdXK8161vGDzoDfFFtKoNFnfSci4iMPNoQdKxRxRn3TjreExJATE6vSyf",
  "key6": "oYVahd3nruzGCL3ybm9cWZB1YtWQnNjKkoyhsRdTDirXvWCNRnmZizjENGQpromt7yJGTYhjuMUkJNARPw5p8C5",
  "key7": "38BNbrKT58qke9RNiB62ydRAopt2a87j97CaXnigXARxNaMRtZJxumFWXLXPKCXAwSEnYsDxDUNWgoCTZmFk967F",
  "key8": "4xRcBXWX6Na1LTKDzYozWFcmLV55chYmG8jDhWfFJd26CHbvjnZxNudJQER9rYkPmj3DRQhbVhd1CEprH3dwMDUc",
  "key9": "4ek6Km34WcEzq8u6sMuA44xMW4N1EBZnHHnA1JCn3um8UdKd66Pf4fKi9MhuBbvXnL54dTdRT29gDiZjNgMjQdA4",
  "key10": "4ZBwrb1VLT4tAwBK3n3VKgpfakqdFzuLpm1tGBgmEuSGzxHuxjsgeQkopXPQSnjxHUkCtUGLP62vqzD1BSB9PJ8f",
  "key11": "2rCcURpsP8CWCvFNrqw8Fe85ZWVCsR3wteWrxbJcjinYr87BJdrH37VHdwGnrXRCXVdwTjeKfY5sbQXfsWbvmCsY",
  "key12": "2k4uNnJteyutWWW6mgvWahk9AztTvPvETsvF4HBfwwYCgztydZeJbjNfkZrhXZ4ohhq2mbWtgQphe7pGzq9CpPp6",
  "key13": "5Ky6k8wWddkN8NBkLdoaa1JpHK9dJCxGZkQ97Rojeyf7XDxdxh9exU2sq9EkVSRnrfWcidN2gK6GAV8uFaHYFjt6",
  "key14": "23aJkreh5tb1gPBnPcmsw92ht66G3xycHEco9VxKLpMMX57pV6anxegLh4GkR36dkzBVtXbkhgHekU6h8NeBsBoT",
  "key15": "29fRQqMPU17zdUTFbdhb3sesDCUMfzGuL8S4zHjLFLyKzNAaZjmf7JY69WFEm9aLzhAt9zjtaR6daEQmEVpxtKBt",
  "key16": "2mDCYKd5cJG2zdHqWd76HPJxcjsrubHRfuT7dn52tn4WkzrjXFdb1CHDqeWoBwHSLt4tTU3mSUaR8hZGsFskGsDh",
  "key17": "2TF3WUwburfZvJ54cJ9uBEfTTsxFSeBrmW6cJEFP9TASsKp29KNaeyETHYdeYoYwwMb7bi7uRSA9cCFkk9AfxiZE",
  "key18": "3Lq2C3tQRbXmiNfmLzUGgNP16fCquCPpfW3HrG6rLHQnujZsVf1mVvVErKSYF9HUmRTDvyo6onhLT1n6YpLyeHUW",
  "key19": "3ySEbZCD25hwxkhakhLRFcFMjpCGwxE9t3ES3UUmD3pS5Watpn5hXnuuQtSLdhbzM8NfmJUb6xKFvoWy4KFJM6kf",
  "key20": "3q1ZLHbqkL776wmwwfKHk6y9hZcHWJbwhR62CYY2rG5aX4wGTp69ynyscSdBwVoDmzA7yEKaWTxBcbvEMTESu7qY",
  "key21": "4ay7Q2uxNJoAsE3NNZKzGjSy4pQxpA3uisrnviwWoNDYhdpwckqd9vCrQfRaprHe1nqSpsfV8hFE93b7nSC6uXPk",
  "key22": "55pGZmixdHhg4SLi5qG2xTC5pifogViVAo6gRN9fVvnQTGnTeGuUP1GQbP76FDJVRd6GJyy6cyPPkKX1pR3JRe5g",
  "key23": "4L4jMFv8ajTbdSKGA2di7eF5YqY1FvxxcHgcGMKjBM3NXkHWn4GuZFP4YWYKWjbikn83xebHXQgYvJbLhd83Pttz",
  "key24": "5BMJNnZqo97a8pzQneKF7qWy8guEnpFGPpAxePNRgVvbn68zewageuXqEFJx1jSdy7Jj5KWoL4j4V3P78GQuD6Cx"
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
