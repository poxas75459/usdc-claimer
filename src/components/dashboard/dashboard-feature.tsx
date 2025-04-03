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
    "qroemUfQu2X1R6YXswRZZmW23zyzQ83uLqv1oRdKEYvcBpwdKX1xkwQRwFZVTqvJWDpTnYGjGsZ6Q3BuPHe8GDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkigA1bJaQ3Akxk4XqhDD6eJg8pozo1yKstSierpoYR3ZG6hV5btbjCr3qvCH4WSM5ku1KnK7ThYXSonYuMZk3N",
  "key1": "4z2ARL9ju67gLN25PwKzCN7isMQJQ5K5SLmAYmKcNk9waTc9HxZKdMMYHn6keYSuq5e5kWeuJN5Z4uWW1ye8KomW",
  "key2": "2dtU2w91nkcgXftu6Zr93tgmHp4Z2QYsz1wmH6YqYNanBVkzGL8cQvNbxWU48bb5TGpubHSnmp2r7ixgvt9hcqdT",
  "key3": "43w154PJc9bZBJdDkUdSKjzjmaS4wUxBfqA7usbJY5rijA6BQXZPfsjHJLPkauEfmEbgTMvFxLEtPX9gprM33PBY",
  "key4": "668Ezf12PvAp1cP8tAsWBkmq54gu5vKpyfCJR8ghBCLxcjM6uCXCzSuxW8mqs1uchQJHvPccFyj1Tqfw4dKJnRhL",
  "key5": "FJBiLYv4XRkJ2V1i6nR1Ybw8gByjg4xqFcEeA4kEAiJK18NjrDozn7ddSAnCQ2YJ7VapQuhWfPW3wfRXQBFadEL",
  "key6": "4ZdZPzR4DhxPceEVmnoZzE8n3wVtjSVyVMvG5girXKc1jMrRXs53cDajYsDVnRg1ZPwfyVPMNerVupRG2aE5Dg5r",
  "key7": "3e1YyspRb4dA3yTcWGdqYAzqn2xaDMG38sBeDYV2CVWEnm9mVNWhf5q5MzbQ4fuPLkqnCCAX1wjzrYpMTeb82HZj",
  "key8": "3txfRoSHWFwhuJbCq28tKq5T2wSscgPwgLG1cs9QqQdv29AzUffVmy6CZWobdyWh2G5iLE94MfdnXzqp9AXVL9N5",
  "key9": "4Ak6jzDd3P1ryCcZ67zKrTsCucnSnExupz5dg1eBmR4XzPXJH7nrm5vJbYd6rAuYqSGcQXiXPsexfmjiuTxuvP19",
  "key10": "55sZKPfjxzdPdSFcGZmjRB4m4HpqcGBMwQgtL8tyuKnWn4YfkVdT4Dw1UTgmUWJ494aW78tdAPhKs4FrBEHKJd2y",
  "key11": "2kwTy2yyGnYkBgQyLjKa48tgnWxr7RbRkrDy9vV4b2zJe8RW3v1vyPQ3XPN43NFkAb8ZKKmbHha7Wiga3CjmV6aU",
  "key12": "2rRhgDbVTMo9mwGyugMV75vu7o7Te8Cnb28Jm6MprisFXmtcRbPvpNjPtqswfEJU9RUyhjvU1BpzV85SyxYZarTp",
  "key13": "2g6NrfkUE2KuL42uTW5ywM6fJcohnp33f4w8sigJNzykcd4hBZuUjq4W9RZAqhQmd3sY7yTYJUXmTDT2Txhhr2FX",
  "key14": "Zq8UC6r761JA95X8C9WVqzry8vLpe8qFapUz8UUajzmEV48uBYUhv8FrAbnmRipVXxR7GSAy37zcFyBT264LBUY",
  "key15": "4FEHprXx29osNV575yvVjY56gFNAt6WeBqQjcV7wQmZNxcx5vfUuNwrPcJ8Z7LLYJ6pCGyb4uZXtZLcCTbeLv36F",
  "key16": "3qB1BSBVXdoroj3qu8WWuHrwyDRnaUTMp4PxR2mMm2PAyTadnzNmYr5q7j7Z9RvMRAnUNLZ9Y1F8PDNbgi5qKepT",
  "key17": "64C3KaivrtyoFkfpK1RcKWLNNFzeqPufywva2RSS6osHai7BhfikJnsKjz9odzafqTsZXCGJV7uhtuABGjc8WWr3",
  "key18": "4UfQXf9KH6P6qxB9WY8Yuio3gasfzPJUfP3BCDBnaYjbEXFuXFdko1it9WEbZNGFhGKY6MkiahRec3u5e489ckrX",
  "key19": "61sXrfqjp8n7poR3NBtVUoPEhPRFjtyrggy9pv5SddcWXwzeM6UzR9JLp7jWjZADsozqPfScNtrxyZQ5qqwQPfGt",
  "key20": "3XKyUe8uD8ebLGsvHTJ3mF6bUs2ctnG1ESdYTLCAEsJSubn1ugKt39QtMobt4zUwgpsTVtaf1pY8Vz2yTkrZX2hR",
  "key21": "5VeG1k7j84SoQm3sF5ArpDPJnm6ZgfSkUaz6kAdrd815nZ1fRCZ7jDpKpC3KzoaNzTqppLnw2HoYefE7MdcdCuRN",
  "key22": "26ZXWLvkRp79x76QKUCmjBa5ykLRpNm1PptrbpXNYi6NuxKqSBBn5mPzsD1Mdc9wNsjCvQYciTJcABC6hHp8q8ES",
  "key23": "3RXnzjE3Dg93QMFsEAJzihEteWSSMt9QrC7kWAg1wYuVMNJWN195BfkaqMLk311Awmp8xHAX2T1pY5AX8fYWWDGF",
  "key24": "EyMdpGh3CAb2X1BNLX1rakuYLDBGco7qeSxqHhDkpT2e8TgUPXDJ2HiJHZghAUncS4iVAC9ahsChYrbTPpFtpbN"
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
