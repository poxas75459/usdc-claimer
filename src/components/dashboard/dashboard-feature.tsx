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
    "4p9eq9iFWfnBzooJURQmWUq8MEgFDTNHmE3mWsjjx3ze2fQ8ugYY2CAPU5BW2ptNsD9PEMMUkrmnwP3c7NFJHxPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNeBe1mrA9K4s8aVXDwcGDDJJ2pHoZUoHmAcJDvvc8MQjD3YFscNHD8XDd4us5hruRhdUMWQuTatKWWz7HJH3XD",
  "key1": "56ay3hJtY4a9FXPV7PitY6Rz9Cej198EakPVUCJ5Xm9Sqe7JDRdCFJfirCaQq2QcY8dNc6YvojzU5BonGuLRp4gB",
  "key2": "2tyCyhqRwFR6jaEHV3PZCopDA92zcrdWXqKALn4oTuZ9zwe7ydHEG8v8Gc6M1Q1Xoq97SUJP5rhWE5QnXkxSQt1f",
  "key3": "3TSr9emhmApEjZ813hp6ZKrvPhSHGsDpcAg6HoCdZznz8RL8f5eaUJbmBUCWqn3rFq2wcZvPqGS4ULWdAt3F2Leb",
  "key4": "2vMHCRJDi5ffR1REMH9nhHEwnYM8YBePnEAXmHfeHqDjf9SJGB4MUkMG4NDDmACu2mMgEGb4VWrbodYc8H9sVeWj",
  "key5": "44J99kDezPHiA4jqYqRBoSMJp6pXHLqvhQQa3W8mxFwrD3JwJMMNHTQtn493CecfsrcgG1Yy1Mhnq9shK7213r1b",
  "key6": "2k9F1rPDsdtifLRHmvh5VKoWhJnwaFreC3DyaA6wQua6AEN9mvwu5AS6dpbdsBuKNL36jDtRw2fsizizbitzBNVU",
  "key7": "4VFbVCBxvb3yVbyVmksCV3STJ77ZQ5d4dUp916uTgg5uVpnqM9d6VdraLNurVEkDUdhbAhLGtsBUYTH7SnJZtMQA",
  "key8": "626HtYqBWF4PzGCir1E4oPgj8xCk63B3PqCBdGLBajpEwkumwBadXV86Hhw9M5UEoHp4seNRfuFpTxEx3mV1XG5d",
  "key9": "346LxASnK9tN3BMc4bsK8jRKgudbf1ctwvzqH76j1tWAteVpzzKWJZpr5QbL5qnUuMFSmPwFvrer4kw45ApFoJBL",
  "key10": "2o9wvqzGxwGLrmvsDGFFaKUtCRDXeZhzVxByWXBt9i1qssrKuFUfeqgVPe6buHK9fvnBPTBGPx1AnuSBCSpELDhq",
  "key11": "44JWaddgUCpiaNfYm8J7hhKbZhkt1pj951cVXssWPAWzG96qBbg1Rhnpe9PgojXmFpjNgSXbm9YFBWLMnNvsFBv6",
  "key12": "3Jgf6UNdzmeEJLYUGMbNkvmedspS9Mmh7xfshrEMnePUK5grjbKQHnWDQwhEsYPjDBksaakL9x26CBvJfjCrMUFr",
  "key13": "5CVkFYPNcoops5EJGXpoM1b3ruVTQz4TBijGZByFoxHXwomBXCTyjdeZ6CzK16NsFf7qJKz2xbCAErXD3bGr326C",
  "key14": "k7jrnHyWaijoJWXFr5NvtmPMkpLcmxgCmxX5LzHo9vtQGXHdGBkaN5j2sD7GQhsmvXWCDPRZYHHxs5AkfjxWCzv",
  "key15": "V95E4MbXJmrihbym1c6crBRXk6iVu9BDVGAti3mX6EUEReFZEf91cmLiqTWvZxgCnf5XgjMKuM9w5j3hTUpAPjX",
  "key16": "557NdA43bQFnRwc2vHW5rApBZiH4EFsCiPKu5BcA7YFCw6FTnMryEsb1LhhCr4ck4DYLnSrp98ekJ57HZYDr4JpS",
  "key17": "2C7vBec7HrbcFTXVXFLK8vu2kS9DTXsBeKzHknhskdHzA8p6PDFDaGKaaXvKZa8qMYXENoP2jPdYpzGcGJR4ePhn",
  "key18": "61cFpEAfq9J3LsWN1jiknjNYBLJmD5AJnLoSmUq6owB7Vqsaj7YR7tmBJvX1BgrfMwTAT3ne1chUvsfjxBMkxqrB",
  "key19": "kq6bBYaL9vSZXEu6PWtFnpGEKaKTDTYfibe2w2vjBuYWREEmdzaJR1QYmYE3XSQf2XW8n76BUCkNd63yCDPZizc",
  "key20": "mgN9zP8ju92TwFZBxjFJbNjspLHCRBbhz7wipY9m72NV9NErurVL22hBX2umgxAzwZkmJP1kwm2scMGfA3bao2W",
  "key21": "2ngWjX3LLUNj1fE1AmcEazzGdAz6hmtuuCn4TTA2eBgcjSG1M26DjymKJn2YuUdrpn6EXKAPQ1bcZSixpfqHUqDv",
  "key22": "3BMtxxHR8nLaEVgMFBhqACJdHYnzQtFW9YtRnY3sKhYwuLV6svk6SttQSdsxWGVjqwk6KDgcHx3d8pgRjS1zWuMy",
  "key23": "kyXX4yGGUivbqVeQY5puyePR8ShWEgjeU8tzFWWXXwNe1wANdq19zmYuvVsCnjeAtmwEgviq629gbyQWNhRatbN",
  "key24": "4MXBCLq7MUDjce9vA3FUoiRZnCfhycideXbSgNcevqEnWicyzvajPid6wKnWB2Nj3PaCiUiKLG64kV8NHdbFfYMa",
  "key25": "DCAQcMpPCGpVzHjnetqUoNy6LvVH7fKNiDCtaYzJNfrHpn6vzPwaskoE6nnBXNUG8hVZy83QJPkfEyxwUTtHoJ5"
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
