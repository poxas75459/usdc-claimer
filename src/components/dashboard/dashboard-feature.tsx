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
    "58dhpDefGH5HXCbiQd87SyyRvh45wuPzgLSD4zp4qBhSNTWFYx3QLZKpZWhQTocp7nwf8piRnAzgxcVgsr3qLj4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDPmEiuXiNgyKwGkzUiD8UvRRv9uvMkUY1SyJRrxvfnw8caZBu8F7nPXCsDBD7hCUYtnBjJtTc2f3oqn3D9iUVM",
  "key1": "63jqBYNRECKQ6j2zorPEP1zoRYVhPfY8wGypDXYXxYEyBa8dLemxzPcDTWCoVTFUVywornGDq3KnzFhAScwAJgoX",
  "key2": "45WyTEjUeMvJHun9BUb9Np2CnfWXioHxUCURxetjjbxYY29yXqBVBNsRLGJrS1EUX2QpCeXU1r4upab4BSP3qz4j",
  "key3": "5Mr99aVBAgdvCpcBzf93FhhcCSPorkHXteyCq3kQHzurgqzVKxATrYAuuz4e8YVACzk9QmH8P6znrpnhxCKZhsWd",
  "key4": "2xyjZBv4oewPu9pCjReb5KgeZE7k8nv3P9n473d6D7g9r9QdAwCVSUw8TDbeJGFHjoB62JDhztTDRXhYKjHZG8ev",
  "key5": "5UQVBkAsvi7cFapqffbqmHjZmeiPDLwEmMdhMdMmyaoyHnoL8sqFuRSuR3dPR5wNTvcPEgQ64e7TSxY8QDGzBNLj",
  "key6": "5168xJL3Mif26ea6KP7DFbiJ1PDWcJ2VyiFfJAzFiH8wb9gjykT29ovbTPua8e2PSqyabc7LxQPLQSWP6ZMpsmyo",
  "key7": "unSsjMpHEi5RTCQacBYsXeXnnnXoSqgLgfiBBRmiHGq76tA9CEzq8JGdmCFHvxcQcJEABLnMkV4EtajwF3oh5Uk",
  "key8": "5vd1xbmXg6BEoynQkzSkKE5fW1zmY5zyFjGEq3pkMwjyRn381yuAYvx4EATkL7HcSfphG9h3HzLhMGV8bMT4ZDnw",
  "key9": "25HRRn6asyFyMbaYzZJGpsNtNVErZRdaok2esLU1pAYnfUTVKVMiMaSkcFNJqxfVw5pfAgM27mvYCrgg1JLVkoin",
  "key10": "cwqsZVFuWxfQonGF1Hkf7RrbwFUnXtMpcz3aqJEmjuLYUKVh7XoUvNZ5jDgz7VK81uPFAtNCYRJYgy7rsMk8PQL",
  "key11": "2jWixEJXWkqfLkDdcoUkP6jKNNQRtdto5dGTjJsgvhcrTQpBm9BkvHY1s7BndNV5VLRmefSUJG1DQWXb2XTdGKL9",
  "key12": "59PCme4ma96AwwfrkU9o8SZDh19BiuKRWNghbNXFhnokuLEurivedjJQChUcTAwJB6aQrwGrBBK1pt5WeZ8ZSovU",
  "key13": "LLgn7VmnMTjucCPdU94yWfq7Vwo2d9nf2vhpjw9nmCTUWjGZUqgw1BoSn7zkrkXcgLRX3NU78WuC56bZnAsuyti",
  "key14": "ytUx47c9qFNhcADd8g2w8HAL842D5Tj8cuDvdRjhp2ff9mZ1WKqhTH2neFibXr2KWwtB8MjfRjWbY7i7mVwYqpL",
  "key15": "88uJEbZesWoHuNdCfri8ofJNEQc2tSHJsWEeohgyLv4e2v1vsXqcL7jKm4MPXufgt9Vc6sY2E8Lrf29xjUjLrUv",
  "key16": "8AsTiFZtQkYCXEw82JgDZMrPKvBH353WFuCSRGEUEiwk9bdyknAGkrKp6zQCdo4JACJkfgCoys9DCwW2u95m39e",
  "key17": "mN5U4ssxACeC496K7kzS8BMPyHiCZh5QVK4sHwMscbkipeuqKTzj9ffATHKFhFkDFoR1VSV8LFuuQ5thuxLzgDs",
  "key18": "AXcXdw4xmXJkgUQZ59bTAHD2Xcut2dKXPfUTEmLeHNEphsiMkZLzLvB1xeM97GsCLqUsAusVkqRAnNCXsyWLetZ",
  "key19": "3pSXfTpGVp2QBeVsSc7PivyAEb7NAnhwf315Cn8qNgVLed2vJbMdRqZmneKmrXgDQiZBqrkFiYGK6WzhuSqD8eug",
  "key20": "4UkdfNCHA9uvLGVyxnMs8KJvMnTp7buFKyZpZa4oUoNG9kGNnKDRsTshrr7AcrqzAfb5n3bN8tS4kbkeJtc2PNQY",
  "key21": "PEGUp4M1EE8wiDfxEwagd5YE4YCBkRKGxLdWpcdZYPpinqcaCNKRnkQicNKvw4Nk5YRx7bBHP4NyKgptVbsKYEx",
  "key22": "3pa3kz6adVsXJoGcWW7on5AHT5jMi7U9fvqv4ESLu6u4NGRn4BAa67unnN5VnWBrXhDkAiDZqN4Znz4SBUuwSCVg",
  "key23": "63xuZZmd98SFTZSUJ9gokXvejq1SjLssRNjZrSFxAfRjwdPziGsYChGm4EgLvf4ZguVSVewzdLyqsvkvfp6StUd4",
  "key24": "5iBGCCi573bqCeqETsGeqNJhCsHSGKpjuPPvJhYDZoNMqnGk8eyX1DUj13amQxPc8wHwMKXM3bTMhJKQqTJqyVoH",
  "key25": "4EWFrFUzifQog8cCyx9x8b2FWS8aEBTyG7vFwSnx7Y2DCt67cN948Kc6iMEC7b2PraWoUK65Zix7cN3WkVch4Nva",
  "key26": "2RZB4UqVmqVd3JsjKzNNzXzxs48hsKuqz5PGdLJjoXKJYwzWG36kd4E7Tt9pNHku7mtuBt8oXFszEDg5kh3ouHA7",
  "key27": "41EhCBWEJphTaX8JFCkoTuHh46zbc7fCpNfjXpLqqLrYnAptjDzhGzwNidFeWd3vjmtynqF3nZU843nKjS6pub34",
  "key28": "2ResxYQftiMuFXnZczhpE2wXPvQBYvgMfKGuvGJod9XLsHups98JtMqpVJ2uZxxqrmo1axSVFsgNLibNE2Gz3oYY",
  "key29": "3N77WNFneEwK9Uc891zivTadox8DVpReXwhxbxhcF8YM5iZ7hAzxWT1dM8hDC8jpqBKT9vtJJwZxcC2B8DK1e18v",
  "key30": "3yDzsR1ux3upGJKo5RQPG4XQPvB31vY3gyQ368WyWV4HpySx9YgfBmj6Uux5FS8Ci2WHsvMu5ugqn1aT96w2B4bL",
  "key31": "GEQcnuyMR6NmbG91Dw5QYJ3QKj3TTumyFqG6FmGsUJwF3xuF136zXBruFeqhERoKHY9DD9rsEykRFU9tVSvm84Q",
  "key32": "2V4v8fqvdgV4z4vwU9kMVt5bWPKW9su5p7eiDB94bYU5j4c93osu55v8cmt7AyoyhtSMtF13qZuVDCqUdyPoFeem",
  "key33": "EQYo3CW4QhMPJZS2zC6m7bF3rqcNTu3mxqYJoSQJcY7SKxqa5juNdVPAq3DHqc135SesuA8FAiGgjBh4PR2T5hB",
  "key34": "4vdDXpX4AA9tuKxHbeKVg53RxGJtLK4egC77dKoRzXy5nBs3uVFBtsnAzARfU68SBUBQUeCvZQKvKEZWV1KcRYeM",
  "key35": "2pArGKpNcBqfu8S3MpTbw64iDyumRcF5vdigyktHE7Kq5bxPTBjUxKLYGgFZSmMZL5f1MMH7MN8E9Mj7f8AXC9oF",
  "key36": "2wKf9b276ti2LcLHTSaUkfcrZEZwvwponJtKWRnofsy26mAimbwdTtV4tqFinut2LShChGwZ91xw4HHxo9LSmBXp",
  "key37": "53UVXPJXJxYQmr8JGs1zGLWRp9ZLcFCZZquqcQY6TjDqBnGFkgnhBm6FFCxdqTpDrcfdGye7V8ehPe63EsaXgwoy",
  "key38": "3K9MFBiwczQPZHk5ppD4TroDSxvVhTnyC93CF7LDU9Zbficd18bPQAWxTKKwqGrFNM2nt5tSrCZcHHCKsBJcaVjv",
  "key39": "2ddMAAvc8EadMvQ8wk2mWWTHUjQVYGzFJ2enGTSHsyHbYSABqeP3jrFCnMHGaD3HjQz3fbwPutXJyhSCSh5aWpaq",
  "key40": "5bLaxCvi765M5afMoYchmmySEr5zK7we1PSNpYh3qHizNWvQ9qPTMcLauzJS7VtAJFh6xz2RGHJk2cp6HNsq2vSQ",
  "key41": "YoAi26uK8p9m3U8CveRkRdXGMStxuG2a5LS96vJ8G7t8kFcmU9sKS3yyJTnzvpbrLGeMqWZKwDCQxu3QHrqgXAN",
  "key42": "4tfYa63SBjGNAM7HkthwDp2P9im4PChNrXaty3L2MKDFvYs45acPUbpJjkm5MPzd23LmKshwSGcSDJdi5dCXxov9",
  "key43": "45y2SrVsYeLkP4YFgR7jEG4nVp6ScEQejX2uMG5dq5U9pbcTn9iYErEEMZ1XKCNRqz3xRUTdDehnksLe7C29VSEZ",
  "key44": "2TXBeA753pfXbZaS95EsWeunJco6CTjsR2yzA9yjyujPgoeEB7L1Y9DZJ8WcGvS5GtAh7Mor57Cf6jh3NpPdgVwW",
  "key45": "2fihYwQmwSHCMJ8uTsmMNg5mZinyYfND2tWE8tzjRxFsn71YUj6TFQMwLTt68TksvT6Pz6D49DP8ThuGhKoDxneq"
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
