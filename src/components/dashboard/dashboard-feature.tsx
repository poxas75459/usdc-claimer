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
    "3FPqTxWAkHgPTt6rfteKrJaFK6hhGkkWZHwGn7ix7VNL81S79fkRe5CQRm6fNiEx6vNHTQUsVYXyNRDrL9Yw14ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4TqCSNycxCeLX3Z1yo1b5cQaqooW8qXbA1PEfzTKuZYY7WhSpCJXfWXcnDxK4H1fnpD5N11fPskqJcS8JuiMHn",
  "key1": "5wMhxnkdFSBDS7cmFrh4EWsgRNtiijNWQtQqWugq1jmMBUfvRUA8fJgCwrNCVRe3PCBGCxnPaXcDKp9rbcsB3Qdw",
  "key2": "49ubx7GwSgsT34gXyJM263LpS3fkSsvdiCCnJ4CD4qDrRL1Y1UdK2iC8nYCS5FZ98moqXQqmKbwqcqf3WhEtRDk4",
  "key3": "25usnJTrVpHDToMRY34fYquMvd5Mjizu2hr52TvdcNM5bR1d92GLSnQ9jxLHcfPNLpnhrXnSkfssbLMmjdUMJRDc",
  "key4": "3byaEHECyA9ehY5uMSzKUeQojHriFJxGf5Y4i3SzANJrkTmcUwKyxYvZE6g6dxWkiF1dfH5FVsakLX5o5Z8dfpj6",
  "key5": "5ehQwm3kLtbXhZqpM1PiHkym5dV6txWok6NvUxGhnuwRE4VqouasrNQH3mjRgijw1DsAdp2XB8qebHU88K6G53Be",
  "key6": "27SeoSUTtgduwSQrP4SSgpenBUD4GpJtyXy9FAwAnaumJMTWG8qg7xuiH4UqBwKnEpXVhy8XBSwjVhU1dWqLogiw",
  "key7": "3KGA1UmPFxhKRE4mRJpKsWPrTndA9sXxLnwHFRW4xYtYCrbfXs36mraTYWv6ZrTYtJx63wF4LtT4fSoybXfMAybe",
  "key8": "4jfhZ182axpcwWSoPP47gPxdZgJQf56BFLVEbmq443Dv8PAGiXwavBqyqssYpe5dSpM1gPNjqxmdgpHfuSdqnvYD",
  "key9": "3PEZehuR955c1brgCUu9FkFTzFGPahHocMQpH1zCCgjgHVGPkP7HA2yYCzCTbMDcCn5xy3cu5tGMfsHJwTLxkScb",
  "key10": "2KkJ9j4KM57jR7yfrvqbdciD95fP8cLb5LKxbmtaLzXPfoECMCwwoVACqjpBNxBMAyevfSZyfNPxpa6r7txPsAAy",
  "key11": "2dCQ8yqopiHJiZntUGLepuZ5g4aixgvqqLfkEm7MNgEMp1nRmytf4ghuMcFrUBHTjsrQktsqx4w6wdsBx7Fs7E4",
  "key12": "5GXX7ZYER7DvoWYBM9nuHVT1YM9Wk7uYR86pZ9NPSmCAR6c1aHMMmmKE174RB8a4axFefHyFav9MxuJiB9jCPQf1",
  "key13": "5APvhGhf6N1GnnvV9uJutSJ5FDPi2Z3LJV9DGpyUyY42gp73JAqnPHgcagJy8bFdEYNTfuGKQkoPHQaDhmHV8cSt",
  "key14": "2DRZvU8NMfCyEcxut8iFbzVw7VroraP8KZprWUweibnyYaY9BHG71QQzaDMyUVdMvuN58AQAbNeZ9QcjhoJ9ATzy",
  "key15": "ccidB83RkD3KLQnAF7DnEWy2ppePaLmcjR1xthutEr8Y8DZmunNzD35Ne4K9BbxqsFCWgARQaGRQEtMBunBSmVK",
  "key16": "3nimVCqYFTEsGAXv4dCFtayQe2kfTZwwL6dNwn1cPd7WRzLNFdhvNxrehgoGNJcD8YokL9XiqG5EMs4Cp1YEHyEa",
  "key17": "4vVbWxfwXs1qCHaycTNbSz3h12aHep3VmFqmqhtyqRtgZ52P2yeVGeSjiFhKa16JndxBzHFVjdPPsFZ2a2Je5SLs",
  "key18": "4yGS1kiyhEeY5HGs4hdKopF5zcZNw56zvAngXMR3JTEytmHdwnTmL6hHgbbuk4K1nC1tD4xiixcznsBBxcAiNduB",
  "key19": "4mF64267fqGySe8C2wegKNnyaoCVSBT7VvqBHqZSroRkm16P3re9xy2GojzNi7osbTmCfLo2Zrxg6xcXb7T6BXpe",
  "key20": "5AqTbAf9op9mWt4yKPRhjF8rbjEA6QJsE72xSisqmvfYCyhZNSxE4hW5ywfHf5QGxpDiKx4UiXehcCkViczqcNZu",
  "key21": "3sgWUFpyrZpeE92ZyJALMU9kEYzYdFfSXviMq9FFQkjaq6uKGpS75pDoDZooo7KudNsJSHM9sC6KmpyD2nWVbszU",
  "key22": "2RpAyz3jcXshg62ibQD5Yw3iRn5ac6mN7vRFksq2wcNhS3VukKizsMAbEaFYtNGmwCWRx2fLWS8AVSmEYQ95QyyE",
  "key23": "3v2AHtAFoApoCUkiShv9FfjdLQBeGvWdPAvhTH6VqyKcXswpGxpDAhASNcBBtjgg8273MPtjNhcLJxsiRpMwusqg",
  "key24": "62ujbFLPhDQjQrnTN4GUhStYEtXUoPSkeugbsYZ8up5G6ZuQBQgk9u6tLynd83Sw3U2MSmtdCDhHqLKJHHE71AT4",
  "key25": "3bz7J2BLv1sRrbryZS8PwdewnR4vUTDjC1YepyouawKdYcgWfehvkbJJnF98aKPtQPerbWWbfJAC5wrn3dTbdBnq",
  "key26": "5N9JXqskpvksiTtxJBcvpFo7m94Fih41m9QvamQBbLTybGns1zrvoTMEa9zm7jGpGSQcWnad9AMqr1u3bhFQ8sGu"
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
