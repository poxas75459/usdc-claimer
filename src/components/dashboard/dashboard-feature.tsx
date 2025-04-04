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
    "4K62VHjSyXS6HMH6YdSXChCrCSPrtFx6pckS4se9PJsw2PJChJmkDhMWNEQzisUEa5BTbLEv8rM21yeLBE6ysTBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nwND3f1dY9b8AG1eY48vf8uq5uU5LXUvHi6Si9UYwCdZ7bJpjqr1b5WahKw569eVBdMTqA9jeqiBtXiNd3xbq1i",
  "key1": "mKN65oPxhC53VCWZFbCQSxP4yzTLrD2eWsCSDwJW16MsLZcBspxu9yHvEdoL61sdsX7sHv7mFbuCDZn3aGDxHPs",
  "key2": "2dZvdwpxsQxFFz4LhrdDuvmdsJRMeSqCMv3pkqo8XiGq27nU88dD8k5BGYXJdkuxd4vAsQtxxzyZxGfNwcWp7xde",
  "key3": "2DXEqxSij6kwoTKBSgWjJAQXsXmdbPXUvVZBuHs24apLRjmsouMStav2EE6pDNwJU1aEQdDq5TFfXgpoPFtcD9TV",
  "key4": "c5xf2DbRevVwjer8jcg4AAVQ9acUqxBicpbUkz1reBTEzpNfMjmpwyVi7yrHGTooGoiAsVsBwnuQH6PG2YNvvTc",
  "key5": "4T8qWcvdak2hwxHbeNKQr1mwPDBXQ3vyWWZThZzfVy8wMZu7LmZcmUWrMe3HsmE6EPHCPH9MUqaCLbTXhrcNDyn1",
  "key6": "642J6PYb5Pz2fth6Huq8ChvC4cLwhbQiuCZUtKrSXrSCA1U2ynTX1HVbrNj6DnM6XyFadnCDCBDdv67rVD6C5NH7",
  "key7": "34U5a1x7LYmbFMXYTsw9u9wwiKHLCPAkYHLCJeqAjRrykQ5SUmo3iuLJnw51M9tmoEVLfJ6EqqqwGdX5kXKGfBLV",
  "key8": "46DXzcGi2mtqhkdQnMq94goNT61jBpihoVyNjoZ9Xkbq5UGgfAUNF3yrv8Fjfkq98VsAKQGwwkFGYYenmAgLHizA",
  "key9": "m7Ymver77hD5wVfSNUoimj3osCUbHoUDpvjTS6rL8EUtapUSy5EC97Q6XnVdTUb9zGABhnVTJVSvHt1tApXWtyU",
  "key10": "3Rue3KT1Gr1m1Jn5utKXYHnG8tnhv8HEAkt8rs84xGH3wKnC5Kr8LjQr6dbhYYeQv1EPxkWWeei7aWTRqoT7rtQW",
  "key11": "5sLJQt8qrjEiVNgtTmxZYP5wqd1Na9YoZyVPqDuXLQXCWattuG1fYKSWNoSXBRRz1y7yogQzFd8ZWbSHAVat5B6L",
  "key12": "66er16ivpvvASZj3KigoiRMwNBD7vuVCrjLGBQbFQsuWJ9sJHeYqUuBxyWJqrdz6x7GUaJHpks3sEBuUDk1zRfvh",
  "key13": "GPWhEnqBVZ5uo1KaDJzgupEfBzQUvh4Qg94nRhnXYajsbXapwtihNCJy9mrwi8QZjiVU9FaNJWhv7H3EqUWvSQz",
  "key14": "3efXpYECTNtny5QZpx1AoQxQu3RDuTMH3mcUatwZD9e5KUoBZayeUyxksiuQQFdvfD4UGaXTtFhtzQmbW5JGACVw",
  "key15": "5r6JQZjenGDbZY1DK5MPx87fKiHrJ4AxGXQw7vjffzWDL2ZwjVDueMZPC1hGzFocaoRPpqDoa1peozXJLViLWHnH",
  "key16": "2mzCLjrQtqVcKJjoeAK4QQFBufRvjPAPmffxm3oM1CKcrFzbCdCQK1gBDh4E6mUcKCEVdTFxWSpKMV69peVXDrZT",
  "key17": "5TP95mwwaCYRdQwcicDd3Bet4GHpbW3RMZsYhPUDacGR5QX8KaJVGuF8fzho4PXkarLd7SiFAokZ1JmXH6vDyvxM",
  "key18": "LErwpxe7nN9EhhrH17zEJ9B8szR1gJMUNvN11cSnERcw2UXziwPQqKpL124iYbnwhzavdGdr3SutNU1oFgCN1W9",
  "key19": "3tm6vhExLGv7yY49QeBVqpawdoiewWzmrviL1vJTSVW4kQWWiVG7EsNuWjbDahc8nYqktLVJCh9e4ZnbFPpNUCnt",
  "key20": "4kMXi4mUhVQMnihzcA4xpCNntdkXkjA7EQJst47SrFVbvepENUF3cgPoZhZu8pffamJtrk4tyUsqZGzAdtfTiP44",
  "key21": "29jYWw9fLdCGqUjpfQ2UNCzfTQSJN7G36qKG8Fw2xpJtRPCEr2qCPd21Ha71qQ4HipwDLh73gx9tdP1bWxRQEyRN",
  "key22": "3mVV7NExmW8en7usrWX1oxBrQjfPyp1neVXLCLFB8niWjPCXAK1nWFgaqonCvFgXfJ2ERN2FhNSDWZA9H2tNhks3",
  "key23": "WWvWatuui5f3JqeNvejXSPGZHJo6PxSyrFwmEjGFYwBDHrQ1FbbzBF5fZ6XQaXbHWWPqHdgREXy3WxLk8CJbBke",
  "key24": "5LVxmsaXzyY3mJ7626CyAykYvtLHE5wvqKxpMDC5qtutUow3QgsJkzRdbxhqm5gy98NMXksDaz1TyiPms3YLLPqd",
  "key25": "53fw6byRWgaM6XxarW4Jx7mpc5QgbNg4KVvn2kbSFxpJfHy97fRNY4K1hxJjQg7Tm911baM1wAshiyhM9s8fb7Pw",
  "key26": "P4dCk2aKaWPQyYZ6Dxevt2DDXfiyq2BstfKh4UcuvMis4PgXLmFzC7yHgypEYZa4i7NbEzemNMrzYf2dCuPHcRU",
  "key27": "48rPZjNPJi3uaNLEWP5i2fSuN41UeRrv8NvVKa6oAzyzr3GpSC4kc5UC79nmkBhwGhEbrXbfLWqxT1e6FR4ykWE8",
  "key28": "5xU84fTVCyLEgbBY6WihaUHVwdYJW23Abh6C3BhQpSUbE5j7DBtoNqiYiySSFTHsX1DRG7dhcg4dmhfqLbiiYU3L",
  "key29": "1y9KxhuKrdkxccVUGPPWa46oG6mJfGRLwtwFvUb1Ge4vERideF2XD3FYXSrrR8EGm6W5K9rvwS4osnZCPSz77Rt",
  "key30": "61jywqwX7tAjnceTY2neaPXbNZtxEc1nqw5yS2mUtPjGNQePtRr9d2Dd2e9CPxkAu41r8BtYh1jzuqTDbmwVFNua",
  "key31": "3uBDWo84ZMhrkxkNfydm5928c8t35MTRsGpR9idhz5HqNme6DbTSJhLNzXA6DAYTayDEQgXmaVRcskKXdnSSLmvL",
  "key32": "53iFkHPAgrEBrBSW5xXMznEgnjVwKnwdRWU22Mt1YCNagMPT2mhEbicBRN3RrGaXDdrcvdCTu95eLNNR3vCftajo",
  "key33": "2VLV9ZdUWfMF1QUaV6Wx2kgHACTEQsjA7xSGu4a1tkh5z8HtVDfLmSSbJvGox97g6PVL8JatbRd7WnVoMkSA74D1",
  "key34": "415MPvhYfHVRTSspmoTrB2SX9sWtijMCgyAkJdKUEGFriXrXymafheMA3oTzF6f6n9LmaetzpG1RC2wcGmgCSTUJ",
  "key35": "qRshutLKmxMLrC6GfCUe9gw6BUMAxrLgoVHZHVcpMZNagxRDq39UNJd9w36xuhVerRt5bSGYCieVFsn7yGN1TDy",
  "key36": "4NbGnnv6nxQzoPKiS57TGX6gC24FhYW8XezhiUcu41PGBYFaxsG1Jh4CtNUWBfN8ezzo723zz2X35eaSQfGFJwga"
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
