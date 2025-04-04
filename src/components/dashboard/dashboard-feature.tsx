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
    "5BMsCRxrhuvvpKiyE7TVPyB2y4dc7PdrgzEoG4Z2u7wxQbw8nsBpRAjWQ3VxXTFHovH3pj4pPGdKKcjax57HtDYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHi8tGjtEUzADj73V7y5NzWiWKmiCpic3B1jXBWZbCpSLkmiSgf3n1g6dd5vkG1wU4hiQkFwjoJ5kKKJsYk2dYo",
  "key1": "5ayfDJuMLhjaCj6TKSZXgnjzKiRNVwzskuLgSjutycE91PhnVDSX7TQiwSgNWpZ149M84Luh9L8hnrTN7QWCpocS",
  "key2": "3Z7Mg5nCXX6Sao5XzWqpX3ofckdX9TExtQGm3cuF9BMDXCbTLHPmA2GVTmni2wHReaeWpaRYT1sPUycgXUCkmz3w",
  "key3": "5ky4DJKsmhVT5tdYB3c4h8vUumKFEKyVRgF5A3iyuL4nig62FAZd9dUZAo9ebtDHouFLbCdQXBXYPW1fWREewngj",
  "key4": "4a8sv9hgLNJcr8rUpi9PaKf4yhLpHwUphZdyhREeJBATqaZZCa62gQGuSUrE6tqsZiccZqSVEafL1GFn9mXEb4de",
  "key5": "2xD8netEyrnpr3C7CoxFkthhRHyzN4TndHJQzgnMoKGbfYt2gmdkRHJ2nGni7AkGzHS4w3XCuWqFn4UALPZN36KQ",
  "key6": "x2BCCBXtwNedAwuCTLR4q9xHku5Lk1fmAXeS9vxw6au6zHwZUQ32A9fd9Kz413t6YNnXCLUATercYvxdGPZAjN4",
  "key7": "2SzuxS4bVj91hozwP1WGJrETYqBDwU24kS4q21W2BM6d2AWy7i45xm8yWeri77TQhJqAaVLamBwCya26aSP9nLgG",
  "key8": "hoWkcvX1Xu1b9BAE4mh3kBiftkZKAK1kieYbTRfazKdmo5GikadDEdLT2LLnVdHvvKbpgdhtCgBsGJ7ApX7CuA7",
  "key9": "5u1fHaBjxhWZjyKrzDV3bGxMhJiNJFtjLpHQbKWgy7PGQZXUyeBKR12o6Fv9NW918uZnnAchHmEwZpy4xBGjSLQj",
  "key10": "3zd4zARLQH7fsEVZhnzVsVCKENR5xtKZvt5F4jYsDsS1Uv3hBN2XBjtgSkSQUF8Wozsjf53Atg7DkmiLeZpoqzW6",
  "key11": "65vAqWjE2AyJYw14nEyJMHhWyNpwAgkVXdu5igucEDqWNVsgmJ1HW6aM7h6mi6aqQkAUYp42KQSxXU5G2QP25AkW",
  "key12": "2fJ2qR41AY5YLkXN3WLFBfGrVyi4Aekp5NaWwZQk5LawLVDZBHSjo14WxaN9YCjZPRck1QgT6Nz3s44zLW7qgQyV",
  "key13": "5kTuZpFz6ih7Lut3Snc117LPwLfVPyYRbEm9m3btA8QLYztkw6UG2mftMSbkJW6sP5uxastg74yWxxNoZJTB6ysu",
  "key14": "3dbyQmz2XsekAY5AtHqNeuitJsPr4c7i1Y3GhM4RP72nYYP1QTqk2gR5fxba3jStyfQqyuS4qp8VRW5F9JWu7Xop",
  "key15": "vpbCwB5EDdyXzU9DPYwpy3BDusKppMVn68J1vaCBQ3vqzUkoJHqsouaTCEnjj8QZKYNZHBgPpy2uyYEMT999sbH",
  "key16": "mM6mgwMg8gDGmC2Q9vzNFyri4STsTE61A75vqsx7XEosLS5VpkM1mNk1vbZKVqDC8U812x6g8jQDfhm6sPFs5A5",
  "key17": "44zt81WXscadFELMxtaTZMzWjWTtomNAkuuETirFk53K3kuGMgJCDfRG3L9wRiF7tWkAAencGxSSgiPGDSmJvKEr",
  "key18": "2BKg72dmKdq2iHcRomp6w4QNb8typNqHtpofuTYRedys9ZALiANyqUuQQYLNetWPWGFnrcoipB5HM7Hgx7gpnW73",
  "key19": "KTyvx9WF9pJuZ3MxUuheBhZEb6zsjhf3MMkdXQpnFoLKwVAvdPpLVqonQvgAhbQ27barZTwtNcYXRrZDUiffbRM",
  "key20": "43YKKkaY6rykTokEavbGctQ6ajqCdLawQGvLvra1LQS1M8bLTz6VonrXLwdm3ZwAn4n44NCy4aX9pYDBWg6sd3yb",
  "key21": "3QB8SGxjQYSogfjZuNCeJMhpjjTxfejMJ4wstnnoTQ5dpEKL5XYUCNibYs8beFMLfWDMbshtphDYT4pKWnjmfNZZ",
  "key22": "385XgyUeDFTcM3WwpkvThPGU2pWskVz1Cd7tH8HyAuJjYuwSbzZyYGrxJ5NW7eoRYjbVRR8U1VuyqQ1wSbNdrzsZ",
  "key23": "58Nv2W1nAUQhVU5w5LWzv4b6YjK1VNoMhkCPpV2oXrMxYQgAGfgvZo9mXXdWWorXb29p9NV3kwMLUm7hvoJ1LaFg",
  "key24": "4ZQMKPWpJzcHhJju9GCc2Fu2A1vKQiM1M8V4JTYEjC5JFNabrvUZ4meB2bhLUN3MeAm7Vg4QknS8wBYpQj25oYng",
  "key25": "nhh5J2NtZ3ztv9nPNJtuf2pZ5cyXD8FLZtrmCeBzmrSRPpNzxBByaLro7cFH5jZWHUi92Msv2UegA1E3mKN3U2L",
  "key26": "2mP3iCZcwyVpYNzXxXaAYoEVNfkTcnHRaG8qSJzPtnkQ4Bzn2Te2rstQZrDE6iNttdEqnZ2J59LaVh5FrJ6Pxqgs",
  "key27": "5yh56LRhqcJ6ZQQnzVPsjTo4cqAqtwJ2zPKWmpmfU8RYa8YM8tvBao5wH3MXqvx8rTnpQAi6VZeLGWUfCBcCwKSB",
  "key28": "3f8VtChfSjbMo6rpipFJMfwPizQEW3htEmcH3K6q62CXqEnTiRBfRLpTxGjQuYiJVisJa59uFZS3kh9GDY9JTP6V",
  "key29": "2KWJ5DcAa5hHBAuEihSApBRbN6aPiGW6cv6BcijRE5GMkf5Enax6kQwpF6GgLU4CkYg2tqftEh1wbX8t5XYPmhiV",
  "key30": "5eDNdQcjM4Xi4bztjph7FfAW2xy9L43rAbe9GM4VMcJ6U6V3RqFD8povWTheUsUoK2acXNYAFxGiHK2js7vXoLkm",
  "key31": "3x6PX8w6EKKAuhe7zPo3sEEaQaxNXLb2AZhEEYm2vErYFnCaL1b1SuB8nL6ME45wADdTHNJ1zMpju6JkhvYA1Phd"
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
