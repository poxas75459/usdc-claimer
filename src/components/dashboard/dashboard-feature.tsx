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
    "2RHJHCDYfBKRHth7renBUXVkKpwtCmEiWSPaHuBfaDmH2aJxkNcLzWTsgbbHVgKjCMTk72fu2MGQRPuy7LeXf3Bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251KyThTUQqd743WzGWhvhKpBoXu6iHwsyPMKtfraAziyTHxcUAcEFuqN2gh5BK3BUEPGQGTtWMcJ3YcMT1nXgDB",
  "key1": "ryG7NJLzpeoWY5xHyZWw1mhzvXzWsaWAmFBbTwAR8BJfHR5KNhoxJHxiPPboRMjkhu6cneytoiBUCuiotSvBNwr",
  "key2": "5NyKsYah5TzdndCUuc6p6GhNtMzsSBN17ivb7mDnPCy2qpv7eEhWEZRFuAWB4f5SmLps2ofjeHpTBVfTia7fXNvv",
  "key3": "yaUT6Lo3UJ5fhrogdHEZL95A8h8Am2gXu9ypwEziKS1X6x258H5VeuYxxYGkXb9cfjitxqtjYFTjDtEaAg5wBbt",
  "key4": "3ty1dqUUYQbMeqEzMAzs6ijk4G4EbHgSWZ4KQXnzwxsGCqgxWb8HayQd5GMpF3c1jRVjNrYcgQSF5t1Re2mBKMwt",
  "key5": "3Jcs4Ke1JEEbBRVUCxBQsn7Btf5xGWt9JD7GMLXeVw5nkJA7Nssf49HCVsL9QwKEdzvcvgUMiJNKkvxZPmKT8MXR",
  "key6": "4SqznijKos3tRSvmRtuBzTSUdKYikfsdzS79GojqBYe9h95a77xSTFXck8uMEnRdKYNZAn752mo2jLUBwffjuY51",
  "key7": "5stVdoz6ibo2biqP7q9LCTB54WMeJRaQJSN7DqQbGt6diydb9AJCgzArSwDHWFCSM6Mn3QMGRP5zq7U3Kkbxtt7F",
  "key8": "in7yYSjPR3PNM2bjqwhxKuPyvkYzQos3tKuGrMskZr9cfRJ1vY51T5TNABrXLL5BwkgBEsXMnmZmMfYPBWqzBYH",
  "key9": "51pd9dX1V7m6D3GB6nhFfASgvz7asYNKjhsxVYGGaFpMN2hGZ6172sy232kj2AAGmbLJjKg1fe9rxtRj6ohiJk5s",
  "key10": "3N6VXGEBqeo7TGJqafDaZyPj84apyjtBMAnhfhAJHd4djso2aEZo6pEkd5QNw1rXp5FUeZCxGtd8F3PEiLdCFgGU",
  "key11": "5Q9pmjf6VAJDkzbJZVL2DtDAB5BT73BscSGANG6go9LVyBUTSNzDB2RQhWT4BFATJBURVrW5qNFvVVwxoQSswpDK",
  "key12": "8eGSPR6bR5tms1QNFJcyNDM5RKBNHL5NfRqXfuzZQBGsBJfarGjEsTN43pFeMDgkUqoyfaYQWcytrF5LMjxPXsQ",
  "key13": "2ruKEVDuU7H8wJMabU5V7DCzE1Cw7DeidQJHy5tKrAkpZ7XdXJYuAbiRm9m1ULcsjqumSa77Run5JzPccFT9hTDx",
  "key14": "4FDcck3Jv812SkG65pNashxd2L6WfpKy2nPUr4aA7ANXigQdoLfXG9hAFRUiYUc9RbGhbwdkti8Dbb8uCVJNbKp3",
  "key15": "2TtM8izdC4nYSyhME3xhpWEJRj6qRDFmFLaBZtfBtEi7YyXwYEvn2o98H7hanNKr7A47Ba8eLaHSeBEkGXwzbCRV",
  "key16": "NXfhfyXnK6DWwPcKyzySjvEZU15vMQYWEZRmTaoCqZgd9UY1ceCxZBc85aG6VkmAzE2XWWVKaiqbHW9guws8n59",
  "key17": "5hv3uZUoLY1RhgijVW1sZxVVWd2b9h5xhvDBJ1Lehr6eqpyJQ9pDe28nnQh8TEEScSaNDFCeN4UaMrWMJiTXaP8F",
  "key18": "BQNiMzkTr7DkPBbkynetxKE1RUSXXQ8QAEQimkwFee6yJL9KbwGwNHfAXk2gzysA58JbHr3h9Bcs4rRZ9vD4EY3",
  "key19": "5dCndpJKKr93PYy12HXwKPVySRxd3udV4wFQtXnDTbHPXrPGJ4WyKFEf6txRGGNsSdQbf14A9PKWRUxVqQmBdTD7",
  "key20": "2vhFigcPtqBScibJxRgWh9JbM5jWxmzFZg2TjcLNnb2kYaT1BcujBxmmhwWhs6PSvPWLMXzT1gYbLTkpGTzgQMNY",
  "key21": "549x9onG1aJZP8VjEaTGiQU2rVa1Us6Ao6VgiVjwa6q3no1oDqDX23LwWAJ3DDzF3KPFa8CwUFHtF2UMJtCL7WMj",
  "key22": "5FS1HntW8dALCK1xHELgWbtYAov4mhjk55cojonMK44jhYYPggeQrRVLgXKbj3252kp17Qd1h7z6ReXFACs9EjcJ",
  "key23": "26U15DyCE58fpoJEkEka9m6WuG8AW7ZtpqyY5ZASJjrmqmxzhpVSVJfonLCySs8GxY9YtZke6M6Um4GAStxteXu1",
  "key24": "jfsdjqhuVTrA4sMDEcZgWibThLk16kmcdNgv7ReRezSmZLwg1s4SJGnPXkeihRCmad4cCNFbN4Ak4nrhsD7MLrr",
  "key25": "KrFVj7e1krEWUrvzVMWaiupwdhXZxgnbcwJCALM7QyRUNknciuS5CkWZ9fCKaaYyHmvZQKq61a7vi4UVruWPtui",
  "key26": "2BkWZ3SAGEzi2yPK7S4wfjqgBRSvf6rSvyt8eceS6NtNN2GvLYSAHDCaFqY6umqLxaCSorQAEFZSdkfMDrH3Egnk",
  "key27": "2sdL7t8L6WgKQ3HHKewAHDXn9bfQ4M1JNafZntS7RLtLGzudAumwzHx5ocGk2rfoqGTGwhMCGXYch1uv8ncEaKq1",
  "key28": "56HUTwnhMFFoZjkvBHpojc4wXg3wxp3yBr3RXE5mjMBK6JRDQBpngBm3mQFZJi5ugV5p1iSarJ8Rpq2QnfDuiyJM",
  "key29": "Hja9vKdNdV5MoGMDK2cbaPjvAoy3xca27x7CGGmuF6pCdwC1ktkEG79Dx8KQwZffpcNjsxB7yMPbnL9NaAwnLTH",
  "key30": "29JxY9omNNpavU9pq9aSSyD3Xg8c1P54ak4m6NWFVFryNWLXt7pLDX6euCkWENPDe8UGEv5aEVVRSaT2ckJTmEw1",
  "key31": "2WuRdQcG9eJ3VZFJag4kGcF6Zw6Do61VUT3VXXW5AgqcsVSZ7m9ngQ8azkBnVvKXQ2YDoT9CEWb65M3SP3bAW7Eq"
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
