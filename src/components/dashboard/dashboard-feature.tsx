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
    "3xYUK8z4w6obNNdxdzbzsKu2TfUKutNcCkuiqRWchbNg5qwYHa6EMoinkVPjZvyc7Mby76eSN4nL3iHwfPsFfC3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FuBj6h6sw3FteyonnhcdiXyDqqcr6DVJBzYq7vgyK8jvUuJsn75tk7vDZEoqPAwcNX3HFLzih7o2DBH24CSo5L9",
  "key1": "2ccacS9MhextB2shebg1wc6T2SSBMRxCuDvP3CvJDMhaL5WPim5GNRFbPY9LaQsX9xSPRXFykmEW1H3S7E87ShmK",
  "key2": "4N1ckjZQCgrqQECnXXuRLCWiJgDLsVLrTWfLkhxSCXswTFity5YCDsFhNHRTajz2kGt1oyrmCozK52gV6hV9yVzB",
  "key3": "fz8URA35WnouMSMuWy1o4iDQ4nSHYEwX4UojdMVLxJXwuCf6GMqNtRXcJXuRKcY4W51M9emMVJcgranKqGW4FRY",
  "key4": "22gxARHQNzZZ3vAWuMuRUx4wkEMW75Dg8RDjRwumZkHPwtShH6vnEYjehpUiVXNpCYmovHfVeCN9LmBYcgzcEwDa",
  "key5": "67jzq7DqA8YUYHaDwetLTHJ6L2DhTU9gYBHGZDRMsKsioLbWC2j8HXMFuPxVESd1KRK4zmc4cknJWmHJSuvJL4LU",
  "key6": "3Xabpd15QtYek76aCaACBXxJtaiYEj3jz58SYwELVGT5yuzNhU2AkaszjEqAbRtkCfvgFPbkQS47H1iH8fvs6vFy",
  "key7": "4qqvVuN57DrYA8DbFSLNoRrSiuE44ufK6toLheLHJVFqLV82vE22yNXr924sccYv4iTT71gMyKypRrj3nKbc8epC",
  "key8": "4ey76ZNWBRMdtyX6q4XT2aKPLsy22MHwFU7rD5AtirRt1jXEGuNK5LPee5Hrg9GZJEaPuPWGSnyvSFh5zciq7pRv",
  "key9": "yfQdoc5gSahqVCsJ8hdcGUy8ViChZ4HNBsZhKfHnKLxtqvJgjg9jiJT6VUvuiu92G7j9WWd3XtoWzZnpoSazsEk",
  "key10": "16ZTjptLpfP5e5W9srbt8upyDAgTLBNB9ca8ggSEZmV3hS349bovzDZqMXmsBTwFThVsNmotXWzVTGFRUf9ifsA",
  "key11": "4jHwp9oC19haA1GMMBRxLgUSQQdprocZJZQnsKRjWVMdZNzJ8Z6aMSBZMZPaPxw7Bbpzjn1Ed2PYv1DiUptdbPBx",
  "key12": "3EzdrCnBg2hiTMjZN4cQyQQtp2zD8TedFfJdDtBu8sqUnngPej2Hc3UruxAAZDoLd9b3xvePY8G4tNKtuY2CQWAy",
  "key13": "5YDMKroCotSFJxt1fDnnbaTAAqM3z5x9J8Bqfwhc6ycGANcMQVpZk9ZZo9HVE96akbmSdoPXhnSxiJFLqNAJwNyf",
  "key14": "25TgkbBdGEqEUjNQqBzggSDZkP2kt2a2E8rcTSA6vHfptL16GQjNwyhfaANy8qbFtYcSRkQcwfTtCG3qACR1uiPn",
  "key15": "3nXxqh6q8mgNX3cJhEUr2DcQ6XpYJjpSGfWGyJQnKrdZoYXCQ7AruJs3JBZAwLhRAUMN2vV6EV1U9YSoSooxYard",
  "key16": "2Qa7FJmGkBcUgPrUzcxWAzL9t8NiP9qJNwYoyqSDZ7KR6HdJNtGp7GbjBLGSckKcLNhr1vaB2rTkxdp34gjFREJw",
  "key17": "2sibQE7dQz6mJFTeoFsdrnEtq4GooTdZ79iF3tAARXKUCZ6T9vL8MDY5HZHGSwr1Pa136jb7Yc66VYUUePpmE8ta",
  "key18": "5fZSQKLYnt25BU9kDqTcEMXtenbiwyQWGxhyg1T7NFzaq9gf49BoG1nrhZfdqGWZDM1zKdzMsngSZfmECfNaa4tx",
  "key19": "5kz64dPCEfdLmxF99AyPJVm2QTjGVYemyryM6Cm9s8tMJQQUHtjg4XxjHt8dFDdApsuFPJbaa4imnx4oSfnJLJ63",
  "key20": "1s8GMHHmo4n3syf1AwEcUZNNes7wfJTsBAfTQ1NC29crrtDqpBhd39ZzV3SKyT452DXsF65TH8i1JUWWkDeyTTq",
  "key21": "2VuxHU2mEHbqgiAU2TvzE3cCmQ5y2UKdW9iZqkK7mV3PeBmEUx5sRtikzVCNabYGbzwzsbVtXZmqxnW2t8cPK5kb",
  "key22": "27tb4kGPJU6oE6MmiJFwCV8btXYEdVFvb4YCrXdieZWQgcWGYYNWgKGdhLRPwb2PZhNeSCzN4jUpc1rQKA244igZ",
  "key23": "FHvArpq1Aqw98ugYrdM5pnTLNN9W5bjFDpRApGhv44KXoCYfvRiz81TnUAXyTeqpG2ifdmW9WzkYy7szt1BmryG",
  "key24": "4rZiBw4Pkx7tEXcHbe2w8WS6YvAMW9s2fX24KhXn8KLbpeDwkMq7ENRy8pS89mLXQUyjoDHxBn2PMy95wdh427RJ"
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
