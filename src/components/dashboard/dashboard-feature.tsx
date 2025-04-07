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
    "3eKFhFJvuFdULk9pq1JYFyEQJmGurh8cXe7eYVP6jkVHJwUEVWKEJLmq1h4kgNm5tcShFFeYUstaDoGbFTG352Eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RESwWbTWPz8Xqhyc4W65UP1RkHUSk1NZG1gvja2v3LiMp5gdj8v4ajWNViQt33Sz3HMTdUqMBQYqs4SpHuN53Fj",
  "key1": "2JHunpD2FE7sLhffVStgAmLq34xhCDNgjzYL2BR1Ujdiwzox9xhCSuoCJzSgFrzVJkp89vHwfF7woChbzvUkp6qP",
  "key2": "4fdX4HHEPVSCgSrZVT5y2SKn1hFC9Va4brbqWKmUBtd5saWhjoxraje9Bi7zVTLU6zi3BvpdLU7pD2RebP2eWvJM",
  "key3": "46hELCp9hzTqhaBSh1weP8vgBFqD4RcFp76qWNjFtjB4piqwFjJBKqZYGRqF2DBDNJ1HtQ1PmMxoXhazuktqJ2do",
  "key4": "5UsvKLNbxfjF3ZXEPdHnfumgehAM6tELhgQZDHvuVao6a3fMwGgBEH3Dtb8Z9pJCL6DxU4yV576qkyhpe9umnE3L",
  "key5": "3wdBk6LWLBU3DAB8TTdwEUnmbZuuLMxn25cxiX251vpHYDn1sP8Rmj7x9QqqLVvc6uoHn9BYptSVUtUMQDNF7oWn",
  "key6": "5NB9ZEHsMY6PBCuMiiox1f92omJcqp9UiX5o9eBJHKzu3bqvcbzzN1KdCtaE9Tgw5MbRZcmaWK7kxdEyvjTCZUqg",
  "key7": "54KasTf4NNwcgUxMTxuD4nLXnioyafagAg8jtnCNFfjuk9nyimKx4t22Qt3cjpJDEUBEtibn6sWbuUZWtyKygy8b",
  "key8": "221zM947YhLybGx37eB6kujvM3csv41S65Ve1vQ4gX5m4d8fvBoBfmvSiQq4qBrcEhV3xiGh8jueDw5QzKWicGML",
  "key9": "8MRBXZcBBELfJ1So8pyTrfNb1PvWXPLHqtrbpkdp9ULn7tjPV5qmhAvkg3THCzPgbD2L2VQJCeFbpLS8oCXuKQJ",
  "key10": "2jJTVMuyG2RsLtptJU7CiB4SbpDTpdxoPohEkUmyqtjhpxAwoLxUDdEujHhSr3558MxKM36dAYag8nT7JDbwnvWY",
  "key11": "5PZXyNkBqEgTWJ1JZf77ci7vbG5Lqenjs3eCeZ9AJ6WzMiwWev92YjBmCXLzmeMgUwoHS3FhHjmRMPRK8TqUvRWj",
  "key12": "3mDmbcMGj4Hj1wRv2VdqNBTGi5yWjG2kcMfjYGgBj919SAAGWjEH9uWX8Jop9TeuXKD8zNTkxzV17qzuyZgcFuTd",
  "key13": "9Li4PE9gtxLuttqauZNE7TnqRzaGXPsmd4ZkZSW4LJopvurBYqLh5es1EtssZKaRVPv1jZQFdUqxHY1FR6FkLmv",
  "key14": "3HoYrgzrpKRKAjiJZeo4KF6exmNYRDj5a33XsJPhdS6AKqj79aT1Xp3c7asmXeM5sHyH3G33s9RfhUm6R1PeRnMN",
  "key15": "8xfnbD5g24arXhaPMNMocg3QsrUANjkj6dzK6AZxZAvBKKzdHLf9zM3oxA38Z7ebkHjbgd6XHgAQFPEB5Usgfar",
  "key16": "bcTJFKTUX6AbDJNh6S1KBaXPUdmCKG4zbQG2AR1qWigXzGq8xcYYYNsHkj3qiYnWoKizpeg3QfzYwCsjj7eNAEz",
  "key17": "5YgX5Vvq9aVsyQiWDZJEZQPEMyu3njt94TP1nUoJfrUiz1EaqWtpqCbpULaUGu4wBEzmoD72iERnYZWwq65ge7RW",
  "key18": "3pUaQ9j2eF2yH2XfUWWaWfpTXBcLcPv2u74hBxGHSibYzGNLy8iRdDTenSoJte2nj1jYvxmpGdVUwJKhksqWQpg",
  "key19": "cYgJU2B2adkgQfEXi2tbpWSf2T23QzqScqB3MZvNPeztVKipvCjwoAvuXZULQgmamUNLM6N1UmpgcQhkydFoF9K",
  "key20": "HVwFbPhWhEQ1Yi9MUsDdQBD5R44XyGL9unVq2WbsMRKM1qb1Mx8nKZYELcRwNwfPxHtRRvgmYYetUg1jMwHvtg1",
  "key21": "2rer1cRfyQhnRY4XgtALgLNJLw1fPdhfXAZh2FWMNqijYrxHNPy3Jp7eXFv2KLeZ8BaA9B5c7Fs9ZBZYN2i3uoeV",
  "key22": "3DjEdcveqTY7Zjzmje2MrrWGHd6ZbDVPsxsY9mJ5QXgfRFwHZyCTDsqrcXj6A378haVGtGcpLZod2KiU4pps2z9P",
  "key23": "5QVX6TAwH98JRFGoFt2VffiwTTBM2dZcLUSWcBSctox57sNn4kbNFGCiNYfYZevQHUktFoB3ZVwNwTv5uDEWMPE4",
  "key24": "39LHopLMCLRNkuAGT7ukVVbLb4fKcnK2pdFLwGs8doDbLyWY9iv4tpQMD2UsrMzToCSCR3WzN5k5ZKH4H6bLLu51",
  "key25": "5RQPLsnJgfS1C6h6THvJkyLLiMZR9HkZ85tnepv9TJWwT2sqsgVZyHetqCgchpjTykx7VSSa9ZUhpFCRkMyiHJWd",
  "key26": "5NvdbsNwCwxV13gS7y9AvkjkjcQBCrUxGHzKJP4AAsvfDPmqiyPm1v7BsRniwDxAYdAWSKr8eLZaxzbViN9t1JNb",
  "key27": "2MvcXaSNgWz9bngwdekJqPg4r9CdoStYxJw7PsyEAmovZMFdcgqzVrQsCtgAtxh7CzaRZGg75zUQtrct1LYG62n2",
  "key28": "2win3YHjEGnvDLJ5JiCtq1TWyNHL38wFifGoiLYaGiyaroGfnNtw1EZxSuHApBSgDiTM8enmEWDhcvkAELFJCCzn",
  "key29": "2vedjrpE7W8sfmsEr42X7C1bZnsimJF9sMiXcz3MBkzrAkQZPq7oadwSmA6RFbCZQPrwRCSbvf61PrhpiBQtSnMh",
  "key30": "2tYrv1kU4tMY6YGfr8jwJaCp8uySpp2K1FuLcCizN3pg9r5usPBhpvRSxvmM6MneBnVpEFMe6MmCvU8qW9qSBG7Z",
  "key31": "63URvw9SopcwFfkYqLSsd2uoizfw8DVLrxQNNQjwqWK9VSXSFXputPjuEGfpCRQDYaU2YAfXnS2r9teRHEnVcvuu",
  "key32": "qeaNB9bMbSwzgago9xx2i5feDCFaCEgaGDtCzH9TijYU4KujExV2yqdQC3g8PYhHA4hxzR66t7Xxrr63kUjdV42",
  "key33": "9WeQ82Ux4e4Cb3p9EP1xuCSm76vf9jRtEkuRdehUeAekjRA3LtxDKFBg7ChadCi4sEVnRchNL6zhbjAWyS8JZif"
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
