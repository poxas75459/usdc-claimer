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
    "5sz8xFjE9qeG6k5SxooPfxUAnhs47Pj31LpDiA5KSdWRjFCds1q522Rrp2TN4FhfBJzPtsN53t6v4rSjc4CTA6JM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WRJVNv1QFq7fGhYWPuqnYbDVxdTSKgUPDPVvoV2ABdXvJDvMNbTYf1FbeC8Yk1wbZF9XH7bCqNMQkyrFcdPzjJX",
  "key1": "2w9gimqRAiLBBrHdMif6meeMk9nEccTA6CjoPPeX3YDYwrFSJcMJR8dK3r2ocBpdQzFQAiYwttXANA12nmvUG8vf",
  "key2": "2xxznmnFpkNXcBYoKuZ7iWk13i79p2xvB3U2qEvL42AG813TtFQtqU1fHxAtEEbLm5hGwZTuKpfjEdNBGP8rnaXt",
  "key3": "2h81uCxfEbgXtL8qpWMQ3wjay6CqYpzecT3bsrMthD67cV8QULiRgcTxvkUFWutzoKGKz4ejHDT4dsBmL7y9ScAg",
  "key4": "25NLXAufLyH6ukzMtucrL48uQitfuFewLopqNf2CQvUtD8HERZZxupwkp8wsj6sbAjn45rAsYi2aeMafoJ4m15Rt",
  "key5": "4W9T9sWX244hT6wJ3wtyLtRoiuHFnB9deGkNa5nvxDKRAxxfZCn8KV8BgwRTd4sK2FqqcRCrgQwGifbgCacdZsJP",
  "key6": "2Z6nJLsa1vAboh6ub3ekyLY6y9yuCog2Zjd6gfEEnneMGAPgLcP1MtaVDNGHQuq83S3nJXNCMttfZaPxcKfdoMu4",
  "key7": "3wdbKdLxRtZUjznLp6i42CMGA8R86URnSCfvpZFQ4Gd8XiZZjXZEVYJCRahA5ia34ArBmdjXCaz2JZTC2trQTWZ7",
  "key8": "4VxC5iTY7YkbWDNttqEpMGYs9Xp1hhdj1JDs7GFNEn1B64fWCQ5HgTpPGLBotub1RBsQPGS7fzorN1Y2mtHc7EBt",
  "key9": "3tvvZkhxDW1RqxUm8ZjhWTVso9fgz3PiK5HGyvaErxWSiPZDxXwroQhNBMJxobY2Vwhu2mfLpmDgd8gwLB7EABSR",
  "key10": "2EXPt5V49XbWuXGXFLzDmhoowoS9QRgD4Lw3bQXMCU8vgnME7z7nMkbVA7hs15QkRYt27yEEFfN93JuhBa17hSLu",
  "key11": "5XisBwUA5KAHe6mN3MGvwsY18pVEaSL9HFf5BWMT8c5YMoQKYRgu2ePnKiRKFH8gx7D5k7NPLeLTKNbHkbbPePQJ",
  "key12": "3HqBXwe8NaeBYvRJLP4oLSD9Pm2LympwsgKPeArf5JgvjE2KR194DvjTWgmEK6wuRX7a5MJBxz1g9QFmhmTc7mE7",
  "key13": "5dDVMHsKr1MEaaDRnvb6m3PAyeAbwiTcHc8u7UYY8ZqDof4waGEVMjHsPtpEdK5UBS4jqtYEbYeEahZD8KAuT7xo",
  "key14": "2nwtvAXw6CBkQc7L3MXdARG8enrvvhbkHXPHomwbb7h7BFZiEHvHsgHXYyk64Vdmu9G9vXkTe81zGP3EMeHGkhMD",
  "key15": "3KmgcFbGXXPzsvuxYKAihJC54JqfteJh3U5eLg1oMEBe4YEiGQCDikLGNnRR51Me214HFE9pchuKTR6dqZrKqHsi",
  "key16": "5srLAC7P4zXAW1Z57BEpbothH8cSG48FFTQDmgRGJSCLeCQGZ47dGPHRa9DeZf1RY6BoZGHLDasPnt2sxZJmjaMt",
  "key17": "YuCpSRQRFMu6Xf3CS2edAxE1nD3W8ehnceiKexiXZAFRQ52q4126my6STcHSuHnH6qnCT6UQKJGZ6DsxSpAHvnM",
  "key18": "3GbRKSFg9FczXPnPsoSrvzEpX98dcMWU28XSxGdEJvH96an1hNXxcHSrBKXsnuB3HgjCQZcS4jr78Wi5sfBgXwPC",
  "key19": "3XUrZwmGL6QV7x93kjDDJPARuRptL3LrRHouVpbUgvX4kyoPYoW4L9MG9gXnWCvvv5YivMNwFM8gTe3tQn2ojSbG",
  "key20": "3pzbQtbMhRgcH4R1vzx9ccQ4yQDJuHUAZ4QmjHEtQrRMaeZVNHZLYw4SzHjgx6x5CGJ8vjc7rwwFbYSvKYdecGJS",
  "key21": "3MbW8cJAGLH2RZsPvvemBPQmWXpThwbctwQtY3bDLX6iUxEHo7nN9i4UsANxvbPcJKMYyzPiaoc5YHZw84jwXDDU",
  "key22": "2SaXB4zkqcDvZu3VE43cscHSmpioyce9eK8U7GzoeN6E5YhCHQjZKhz7zBUvvD1bcr8HXHBYNreUBk6nX7oN6yF9",
  "key23": "4RijbmVWJ3XrQcs8ehkYom8GNxFwzau1CMKAne5RgzBHri9Gc9McJdDshfeSazqcEMm3tqEs7DZ7QRoCpFbPrmj4",
  "key24": "4EFbJsiN2M2zznmYRNmDFmVgYcnBiogN5ipTwkWjJouJsbKMYWoaAzW9ZMbbR1mUQrJrQowoFPQX3sun5jWfEwBe",
  "key25": "a723cVmdBm4BbR9BNXvo2iW9zRcqVk6LJhN72AHvhW473hkzhFukabrggNJq67mkGUXZFZAvNo3y3KGpSSeC1QR",
  "key26": "5sSGc7F5QqHQ2CfPKWNRsRqxWqwupvwgaQ9ZtM8X5zcxpLyYPnrUjyueasT1HHLPZjtgXrGwkSy2M7ThTRRWJysX",
  "key27": "3wb2oee4PPBDms56CXLrUrRi6iqvFQuekE95Ew7jjRZacTKupssnxGF15XQxn1K4w1gTXDk6azhjXYk3QkfL3nGM",
  "key28": "4Vp6b4NHEzB71Mi5jKgobb4G6FGFWXVVuzv21oDs13gF75Z5esQ7qhvaiPgffVvAt2nf7XYF8gYjAEWFdJRq4AHN"
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
