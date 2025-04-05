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
    "2x518iXor5MLNHY2a76u6MJKzCp1QF6bKwNxNRaLLXZuf1WBsWJQXk8kYWvAu2Ys2svMezUcuFzFPATKhafDGhqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HAziF7UVtrYjqy4PPjX3wDY5w128kkdRLzGfSBFcJXssPJGptAUkgpzN3J1dbc4q9L6xNyH7bVxtMvt3wz1Mkm",
  "key1": "24hfqxQ48Rx7vEFkJqstHnn8TRpJdAwpgU7E1S1BbvMn4eUwie5YGPsTv8mfYip3cSiedztH1zoJZnLXP6isk7TN",
  "key2": "2qPLyy4YwQbQNJh5yiQ1NAvRW9EjJevTTSKLWbnxwdkJTg8ihUKzjut5nXEpNAWY3739dxWw1pyNGRhyA2HFURnz",
  "key3": "3hBzXqAf4ey45jKemSBbJdLba1VvJCWEwDgcP1WHZF1JJVQPDDeMEYSn38D6TBjMSbdDf8MsVmQZesrbxhEa4DY1",
  "key4": "5sitWFyZoWNhnboCx2V1S5Fk2XyNpJsaQFbqapnk3Xb2jJxwsNEAm5ZANHAwKmePCXTENNqAnSgaYDPS45dfrq3B",
  "key5": "5yfRQkJ96EcP4REkpibVs54JueEYZZLYURhYn95U5XLos2LGFzodGrUB2WXeYgfkgmvDHZTJC1TEe5DLDxQPHUb",
  "key6": "4J7qy8zju33cZrLhSGNR4btbTNRVka8kn9u6voES3x1WMi196duWPPDrUfTWjGcPvQ5AXF3gJp3SDuUfpnpuwUz5",
  "key7": "VDpFvoP9ED7gW3JJyojx5WLXr2qVUdaAWvBtcMWru86672wjEDvzHuygLCYuHDQo4kEJJienyqX6q7UE2RQcvUk",
  "key8": "4ue3tDqtKPpHUMU4Rfs3zJyDEzB5v1PUFHPuTzicHiQbqa7XDLSN3D3U3Yq7Fg8isdgvP6pmCmvyB3hSqAirujuA",
  "key9": "4CZqaeT1fa1Dr4t74rLbY5dEivnFyXJDfTLXVXVBpi8qEZvYYMaZseVS3JYEQhUt79YEmM73SmU97EhyX1ySiiRn",
  "key10": "4djbG5fCUBybNC6xnRUf45Dr1vvmmLNvmFSGBMtL8oFf66opWdfZR2kuUpKjGzJ4PWqdpM5Ap3A12ZaVZ7bXFXy6",
  "key11": "5USgT1LoncyYbbnpdX7RCWCH5RBswVsP148gRTAi7BD81KZRSjduun9WQnKQ773S3zAbijDnJ8TzfJjUEXibZSeG",
  "key12": "BMN73A2dJofTD1FNETQAMdeCA5SY2vop7i6SJq3RWDiM6C9DkhZ8hoT37BLmjSyxTnsJDb1yRuo9f5ReTxnJzM1",
  "key13": "36L79wS6MyrHSD8uS7CdsJrZhUPN6eRhF1YUfUCxiTZiB2v1YqCsKkKmPcEApSsUDxh3CJp1eArRfNvdMrmwPL6E",
  "key14": "44ZuW6MsyFKeYaGjvcmqWQeRxh26UmByAmbCsZQTkErzCZbxtj4Lrjw8Mj5qHmMWLwSx3jS6TGG7s34EKGUwyuLx",
  "key15": "7rt5KBrKASw3GzRtTpqapF23b5ewExXDzgrHyE7C3S47MLrFPZBAWiQURLqLTvkqc6zAa1AhVSDJAwCteavGdkp",
  "key16": "5ZZrNYvCGcA6tqtwNw12Wix3ghD2r4KkK66ghMBmkLQsiumLaGDWW4JYbUd9b4bEh1hoXidWZQcECMiU3FdUArFs",
  "key17": "4SmPEhhcszLwTx91F9HpFSyLkx2YEks6N6GDhC2SLwoQcf6kvkgYiJqFEBtUTdKojMrx7vi6rdHVUSJdob8bESHu",
  "key18": "5dn3ghkHeaPrH6kiT3yNRrhDFYa7obkPLXznPZDgLCrJQmxc98GHf9ZtMyH2CTyGsHxcdKYqxcdZ58FEsQK7ppYF",
  "key19": "SH1vRXAZkV5eCgVznSPdpN8B181pYfx2MmG6mLpG5FUeWi8pfjjYvoGKcUUn4VXxKmG6aXDRPBKwggGmUZCQ3ZZ",
  "key20": "5nXZ8jFUgSQi6EL1bJb7FhgFkDs9awD2VZJA8NhsvbBCquohhpicU95V3cPfDu2vwMeeAxV7UmhJRa4tXUrDaNeC",
  "key21": "5DPcx1GfLvuHy23QpfRtp1vzDr2Ku5igweWiAfPXEn5wmqbEVkfVgY4Qb3TSXVfKwT79nfEpo3xnbb8L1ApEsmfM",
  "key22": "5KVL4xoXFTpQybE2712CAPiEpQrppPv5Y9okoKsgXhAtKboQcfWYBMrFr8nL8hTxFBJ9d7eEZfkSZKuQKf8ccqJe",
  "key23": "3BhXVAymBhAeSdiydvEwAykwFzNKLwAcHjsr3xFX6wCyqk3DnuxciMg4ZxGqWVansGvs44EBpae4Sz2FFUW2G35s",
  "key24": "5Qj5XS571cM3gJ8XHapX5r2nEWpmwxwcuZ13pwA1ucSSuK6yz4a9ogJ94oPj5oyW7uWPfCkRspUgZyg6NDntAY1c",
  "key25": "G1S2CiD4DWKsiVBtwi3r2BzVssCZ3rtm8myeM2eKCK9BVKnDcLnvL7g9SZ52BKyVDUC4o3Nb8dMiNchVym5AjYr",
  "key26": "3vZYue7AyA49mHDLHbBnCnmgtnAh3w1ryQP4SkqRpBaF9fQw6xneeUjYxjDBxgNijK6vMWDQEENvHWvTA1FjiYkr",
  "key27": "3NMFoV3xeTdq36nN5AkkLxr1iURiFUKiAPRWopSieT4NRBeV67aaX9QRc3sqLJXLHwDZb68fM9KcT8jZBMJ2t5zQ",
  "key28": "2rraZWS2iDwesLz9mKKsCQnKc1aXUrWXxKoFWJkEEaNx23MtfD19XDv2AVKCxpkKXkZUmKxfa7JXDBxcJXhLKGLw",
  "key29": "2rffXEEF6eYQWpqmv7GeqneBvSLQ2M8BUh5XSUhSqJv423L2i6FifGg22tt5KSi5GQ3HBTR8gZz9pa7urXYGn83H",
  "key30": "5X1akqhBgZ9i8PosxAZfQGWoKpCe5mLcHaYte519h5SexEV23QQLMhRgy7ZjM6kfZoWJhwExx2dCpoPzF54XhYEY",
  "key31": "3o1zTM7QoXCpnF1umS1dspdjfSaaznSM5qTSjPSiA1CymSyQmrLGWLq9q3iAkEwERbgvY3AULhcF4x78xKPszUds",
  "key32": "2FebHUnkjP3qoLmdJYjTPwcsmqHrjJvEYwx6N6gZ2NUK1RFmXhAc6GbCQ3VLoQSYFoqB99eK25VAGxQGJ6igaW5P",
  "key33": "4db7NigRpcCTSYPTUr2oqb3GTuAQPG4xF4zwGnnKJDEJcYfuDd4Z7JPXPoWsTD5mgB9Jc89oVchJccTuHbzpHf71",
  "key34": "8vAvX35FF57ivq6AYcmNUo9vUAcq59e9L9vmKg9RDM3wkYqujtq37m1N4uK7E2rspuTXZ979NNgt2KVMRXYuTmi",
  "key35": "CWFnfwh9xj2FcyGw8eDkgtdt2fSBkjsDcG88y2AokgbjUvAD9HuU26APXHzbvF2GRnjKEEE75jjzx84c1sRqWP8",
  "key36": "2oioAG4ZcHvFMyufWGfq4f3MfiHyqDXAVSSvMrohLK8tj6nVC9f4FktfAjJSFCdjktL7rrZpogn1stdXUWAETpeE",
  "key37": "5rHKpuxvoqtXyPpyPzxVSm8eMvsN8e9p9Ssh56KrJKbh9nwRuhKhebHGRRyrwjWHTK2TbeCvwLCnTEL5HRrCwFaQ"
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
