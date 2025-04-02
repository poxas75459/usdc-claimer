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
    "F8tNPVHAgkjohtfk3gSGMDFfBrexMZHHJafaqT86ovDnxQSkAqpL15JL1jAepcey7MFGktK9enTMn2Vy6E6S6hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igndLb7E1i9L4weCrLwmL5QVzgScojkjgaHHHV8GBVWbojESmB1mNDDmuhQ4ZEvthfupSyGoWqS2c3Cd4vMRPpk",
  "key1": "KwQtZALhRR2K7j2ZX6bVfkyB8x7366dD6EmVH73wHGgFgDVE9npmAyVCTULBT6WJ2ARh87gnBUtnsBLciscRJbt",
  "key2": "4bk3vbdVEZV4P7g3rUMq76dLcxEi5JB7QibUqkERbZgUY1R5edBRRiMcb2xkRgUyS4DhTbc3UBhdbvVjEiBBMqZs",
  "key3": "58Dr4YBeXXYNpwjnvkGeu4yKCiLzNsQNARrhRX8YiiwC4SKGc9EpgymxbL1KBwXpTCwo4b2RRnM8qkrtTyMKcimT",
  "key4": "3Bhor7mKwQ5RXxiej1yD3Kfqtdy6F7kcWKHjYgxVyz1EjpUBdwnkYeoc1UgzVWJ7Gju628eMz2s7zB4e7pd7ZVgm",
  "key5": "xdVegiNUgMAtgukNpDoAZPyiJZtEPGwi5A37pCvxENz4Rgk97asqdWcfMY6c8rS7YzzSE8onDvTRB2JN8o8NjXy",
  "key6": "5csD4JiHADsjJyobWh4DXuMNDHhH9GUcrjDaweNNJc9j8fAp6vDB9Z9sY1eBssUBnquBvRKZ2g53fndd6ez9Qkeb",
  "key7": "3fLmzt87ca1fafLZCFM3Mc1PyEFxwtTi3QAH5ub6ekLqcww28AYSWuN9gjuD78rY9mL1SavKiypp8r8affMsBbFJ",
  "key8": "2SWVp3s4bJTzy9e28ncPyeP6pf4hxfjJFTrZ49h6BZfmKFq7EoKzsCRfsxhxbUUSCG4VwU2YE2U1KXjeqvxrUBfh",
  "key9": "2y6X9VSrTMdhufdPM1KNT3gj3duaeuoPYhUGJTL2hfBVGHu6FCaxmp3erBqCHxzpBw3Hx9aQzxH2hebL5jyxpzhQ",
  "key10": "3DQNMMNQGKCs6QWMhMnPVa5phvuBMatsbko86DEoYhB328HwYHSzht2q6MsJCfUnqT8Sh3yvYcNaSdaDa5nqUS4V",
  "key11": "2WnALzLqxPkcffQrgfuP5DqTsxLb1pvkcFWZLAcpgsnVEJG9Z2VQsQfA8Ktv9zSCtKghnSbqwTz8LNo6ggnKNFAL",
  "key12": "5xRGohwuAp9xxRFvp1v5pJ6Wtm1ZxGaZdKQdXBALPSdSL74mob4tZcxiNA6kAFJEaJ9Hf7ciBZyo1MXNT36ZSgbz",
  "key13": "4svddvjuFL3k8zi2vAhuu7uPvc4qWt5xyQaxQYTK3YzeXSMK3hRE6ZWRag3pVxmvDvToU7wcpi8zLq1bSNvw6iqg",
  "key14": "38sBAaL86HzmBtZwpeR254wJTPfDepcHnGRUV8vUL8G3ajKCfqKhGV4BJdFKr2Bm3L7m8axEKF4dCajXCQ99Zo4u",
  "key15": "33M6pDdAoh3C8mvcr1TN1vWxg2asDBuFaUXJiGeXayPMjx5EVenxP9NULNFbm96TproZQ668zN9HZB6pNem56hzF",
  "key16": "4cp3bvhGgFNyvgAcQQncs7WBYVugk2HBnzMMydvuHjrrTXT48W2ZXarwJx5KUyJWCfumGFHPJ7WguzyptWKkmcFV",
  "key17": "4ybZNm88hiZhC3x427dwsHdun51L1tjocuow1hxVN7ktoSa2qWgb7V2Rjf3biDcstQGj9873UL2KJSir3YDhRk3L",
  "key18": "t7Grfiv6Zhd9hw7bnrmYL9xuGCSWqGdDqfhNPYcgLkYA7VwKr4fMmchCLL2eBuneqREjv3UGbs5XN6XH7wGJTLe",
  "key19": "2Y4zbP5vYREyU9RdcMQ5qZJJ8Yb7EhKuCGBM43uhx9W8bkYPZH7AsBhYsz9DjLnEFLVvRsG3B9QswDCFgYE7D926",
  "key20": "2y7F2NFCu3X67xAASMKLhoyaprvzB9NFCn8Ws9yn2TtG43gAnRcPZJdBNLpZ9iC3LtsscQWEbacagtsW4DTzuMWg",
  "key21": "EpzghN9ydpACVVa4cm8tkngxiENVJUeQ9zqxNnEVr539ERd18AhirpxiaYJPwYVvBnWz4aMKfLowAgBLkwxkWG6",
  "key22": "2NQMUjHKPFLUnaVfEoL4hDgLcUVh98iTAk49dbn6MzLsN2QELrhCYDgurWS1K18mm7kAkwXnKZLvXaoz3KXHde6t",
  "key23": "52AvZNvfbmz3CFzJfNqV2KLAmU3xdB4T6e48DKq7w4jMgY8i85wHtECY5daX5NzBQWnUZN9PJX5ymz9Cr1HSq3EM",
  "key24": "3faV5rjVL3x1d14gCDWgJkAXPUEJHVhyxEDTgRfkYa9eFeW35gg8UAbNvdzTeSUaGXgsgzSiUnBHPhexCJ7spuk5",
  "key25": "66cfDwaN2DAWD3F7eJPBv1b7Er5e8Zi6cqdHByMcbKmyQYDdnfrFWup12WsAcqcZrNoEPPpf9cd834if8Ufque5s",
  "key26": "GM2AJkWMQA1pboYNkYq6kGuvP91eQLgeARp9QgTW7bNu9oFC7N9ak8pLQL7KZ6Hc9ojhHjLQ17UkLsGraUSdSwH",
  "key27": "2P1dXDeBdr3fJkbY9CT3D9n1XqbDiwSrtbesJwpUKJUBHxAsqhgPv12vqXX3PZ2cSBpwqKSEGhj3PwtBd3ZB9BuE"
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
