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
    "2o3CF92YBGMBCifhWXUaZai839fW9kz4FX4Bg6avntDBR2KBPcrp3CmbVmXrjujpdVopxYD6yY8R616KWnZbztdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uNSKw4AvWPCbSbfLgVVm3Hg9hiCQxHeuWW8ntPfWm6KKdeo2tJMSQHW6eBCk1jqJ6bwL5ZN2r2VaMidmiLeK9wd",
  "key1": "3QAoYBE4jG5NF2s6Z7BiaDj8TQADgrrrA8KXDX18daERqST1eEfhUDoJKzkEaMTaesQo6nALdWVZVfhnrvHJWm5x",
  "key2": "3niS6sZjVUh2EJ3s4HyjUxkwJZf28pJMv7VT1NMGvB8azGHD4WCzFySdDiHVo44TA6Fnko1nyExcfYNsDDTFUMCu",
  "key3": "5jhqWn6VWBYfakZVua5DgUDRuBQEtp7wo4iTtsafKRJoj6MnMjiuWAm3qjVKcveTb4mcJNdcfQjkakXV8wgPzYVL",
  "key4": "2jCTqKPs9S2XxmgXGs1FAd5WmBKvYxgLgbUhtWLwyyUTEonwB44dmKdQ643Sywy6my2TfozXbwvGKSwr38kTh6q2",
  "key5": "49wbuUxuarG3W6wxmR9SEYowwFnuJxr6KVMNBC2XtG9bityWhDZXohjouJ5JEcbAHTvAZH42Yj6Fp49hHswXCN1G",
  "key6": "4jscKV68qPbTbR7bAtSMqrjYSJeDYMn1woDr6F8LrfHg7UBtffHdKZu2y82H1buQmGk4dKTN3tVCRiCeFJYoXpgd",
  "key7": "4SvoQw4itp1jUuRVMAmsQVtBhskXyMKWce5STivFiDC8pLuNcdkwV89ZWuP4bhG2yq89EsSEdGJmE8Wais1h97vB",
  "key8": "hvoSXqd3gs6PdbUDQwHDPYLkmXicEBZJffeYkUpvNZUpmub4eumtre7WtF8RE5bsvs28MHHXf6jqL6XgUU6JWZB",
  "key9": "21RCGMurUGoGZfmn6UMyQqDGNcuqQXZgYD9v6ehoD2fPPfjgdZZiZYuhi8Z3Lyit97UAK2QCzwvmB5Bb5WNgFMem",
  "key10": "51BUvf2x4y78H1bi5sPWRCywryFA78QZArvFQn9DNJVz8SyHbZQZaLi96AcLbs7D3yBr7DR84neyCCnY6XGWv4mz",
  "key11": "5wJmnGgKgFM7Cxf39vaFtbtGGXJErTPcr3Ry4iSku7JPgxX3ZEY2BcYg1Ea1skCW8qYjyFwWsjWeDykfXbVJD38q",
  "key12": "mK6PBEfTubVE88Mn7PaWnocksB9HZ95zyjsoTai8VzA5bPJKEDvGjwPKcEcuuGDgHTcWMWBck9sqDn9TVF6LzNf",
  "key13": "5nKJbvYqioSHVTSs3QJzwk21VLQ1dhudyERrhQ6Dzj8iwoLL5vnn5FpfLED8Xh6aohRTLEkVQF82BWZEZzxNmKMY",
  "key14": "3qr7u1FJorjB43FrxV71DDhCR8VJ3ora32hER3wsViGFZCJYaj7u8anMkRCRTUSsmJfANBbGf28Fbj1ckTQ7HCHm",
  "key15": "3WRbMtMEp9UnXynv5a9PELy68xqDvknq8dd3A6LkfRywAkPVqZJzAwRz9KJUXC1TaLJvKs4rkPYVQkPjJcRVRjyX",
  "key16": "BmbQ5DW5vBcjRjqp9LcvtXejmUBS456Meyc7eQrRSUACrrxt6FZ5w8ugqcN13cc7WVoYneGyMHZ5JbjjFtHKXP1",
  "key17": "3ywaZ15hBmX2yDHWnEpwJtZxaUiV8Fd5ejW6Y3yQNyQHUMp54zRJDjnstzfQkqvxPPTQ39WqpneuEp9KQ32YZCPx",
  "key18": "rWcryYkpHJssurRLiHa936UJWvTiBibpNjAGVMWzPS6CZSxcQtEKwEMzvYJMdSWhABNjYgJJhtg7n3nbgn9KmL3",
  "key19": "4TbD4RQmjGzaAFTCFWgZ4VozgYtfYwV9f71qFYXY6jPFJixZuQrJEL3Uh1koUYGQEV9yb4Jm27RWQ67F1y4eYuBH",
  "key20": "66BWQ9sF28DMrDqgM1xWhdpnUL6YBcQcVZB6y3Vpu32ahvWxY1xymwhDYyQy6uP6hm2Zj4uk3kwPavirRue8vAqR",
  "key21": "5kwPmjpiRbuqRBxbjfxZSfP44kKQJ6UPWJ8gFAuumzxj6e5TghXXtZ74zp7topqqmmXmVwCK4AkdbpfnbV26gMhF",
  "key22": "HbLfp4bXsAszgUMHsVgMZgtKDjPZZAXVVtHgTkG9m3SE9Jf2Mno6rzXZXhsZouG6CAm16gPaQWemVi9c8Pksawr",
  "key23": "4EUC9bDfRe6xHhsAXafPY27S2U78nvDN3Cmiwr6wwJATgEbvR2K32TJ8uMHJG91eX1tSeFDeyoXEFUDC5LcZj7JL",
  "key24": "3ptWd9Gxy4y95ApyTfRT5EYSRyjsxQYJeMHCXuM6exf3CudQAa5AtqzRPg5m5Qqw77XENg71YU7wQAxsQygfh4Qw",
  "key25": "xrXhFnPnQtXmDp62oPk5SBcaJ6pgXy4J3RsP8kSFuRtaaw5kJHrRRrWnhcffKiihVfaJ3gND29DXjxu7b5bWZoP",
  "key26": "2uoXZ7W7kKQD5tWr9UL17bpmstDVveLZNk8oyJMq9Dm7Ap8uokFQ5Bmq9q9Vi6h1ph5iyEtcvAC7cLuVpoTEWDnJ",
  "key27": "3kdorh9jnYq9AhvjpiuAB9LADSXFHL2ELUEnhHVoijM5UnaQV3MriWV2ymDxwdqTL5xLcJvLmkAToZLnPdm6TZjo",
  "key28": "32ShFd8Tdonh3xWoYoRPGsF5zMVAZTXZgMz2v2xtaZuBnQPt4TXf5vNTKQEJb6B51ZqKUezWsJC73G53MwmWx2N5",
  "key29": "V3xe2Y5koS79g8zryAxqR8VdeyALhDz42zMaARFSaGFUi3WCqcoFRLMtW9SJaE995dXAhC9BRsUqmMJPWXo52vS"
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
