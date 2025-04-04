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
    "5RH8AnjYputm9isayVjpwuVTchHZz6kT6AT3yzHd5nfjMqjNivjGoEMbXA2tgqBns5ZH6u1y4aRtc7jPpt3BrTdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NgnitJw26w2XTSgQp88fdJeFRsgE7aes5Jp7L4TD2dxdH137tGPHwpcB32LBM2ji8T7rCTo3affm9JwixQX3o35",
  "key1": "3Hk2az3Ee4Bs4nXVZo52QDugVXCxjyHUPqkpqzehgWoUcEb5AnkwSKpmjTKgu51FWax1hcehD69A9zXhiiPUGLqy",
  "key2": "3kVHASfm9eSqM82bB855HMhQCLUhwzQucBFLrmtRjEMYN1YE3HSQSxBCduyb9yqbPxKXsSVTVAHJorxkS9diXDwa",
  "key3": "4G2NL4cKgimxBCiyHtT9U9FocKKEGZmEm9aZ3jNnhqrBvPxFLATB2nfAwxsK6HDkDwkWgmFnv6osKsrt1YguSq7D",
  "key4": "2mu6ZXLJtD4aWiE9EtxAdWEEcnSAkUjNnM1AqcDZpqfmf8hCVrs5S6dyqjLSf6kE5LuLJHu5XViRHydPFCNcZBKz",
  "key5": "3o8Msf82K3BYNo2Ti87xtLZ1EbHnRLmVBkn4DhF16bcEgRPY6uZGt5xMdiZrB71pCRF1vj9ukG7zhDgYz1MoQG7E",
  "key6": "3vBEGFScw1FCv4owRwbREMPsy45drg1jw417uqY1BikxhEdXhxi3SAgUr3KaN4vn34qxjoxM3SnNrvpYm7kzER3s",
  "key7": "4vPpiFgEnmSLsZ3nYyFrvA64BKKmcptbHUNrnvoDYDpNHkDwH8QFsHHNPCA3erYbFDVrvZtcGCTwp1HF6TMDTe85",
  "key8": "1GCHA9YX2Rk3VbYZv139M6NqZQgxfJZGDZAkA7A8TG2qqTfyVw5amABPQjcaVzy1kpF16VxTE4cUdB8QD41HBqv",
  "key9": "4sPfVDhDsjYy1QJQWvjJuWMfp3omK6Y6Wd8C96B9v85zzHd7AeNh7tQFRD4ZiH5LauuZHmSvdx2REjCRGv29yBQK",
  "key10": "EQ9WNy6j1y6emRDbawV7JE6erw7CfEx7GrJf8EKZaYrSspFD6rykitZkc7kbfCYzCGAeSgEJ5PFeUewtujaixk5",
  "key11": "2mxUNSWCu8mXXKY8xWJ8bphj24KPZNE3GSiAPs8K2ojJAfmtvzv8UvmewjkENi5S943aXqeq1yyBgsLWNVBhiDs1",
  "key12": "5CBzeRBGoCwbeFpjWZDiJsSzaQJPrPQgVqDA22PyTjnWm59VevDuAAapsy5ynoxQctjJ9X5ZFm2LNSKqr5cfUits",
  "key13": "3XrJQyhKBLvyAZMhYMDehdvdPnLtp9ufYDPzNBr5LUj4ZG9reesHwbWk9xraXkBuZgkjUCbZdr827PdHH8C3twFF",
  "key14": "2eoThmizY7sfDqndMacqFm9H8771FPrzcsFrK415Bww1LEv7Ekkfeq59WpA6DXUss8KN4QTxcvTvnRX2tdaFDjm9",
  "key15": "5nzxp7ZD5AyDTG6SkEK61Fo3R177L73uATsbK7Ruxkc5Gkwaj6X6hHUkNoZ5jNuXbYX1VcFpBpCrwxVBPRnQ6dEC",
  "key16": "5QT5s512BeZHcpzaKrMgyiKbbYvNN85XYZHA9XBBDpuaBmmjSBmJAzfCaRTJVPVCiDNPL71c7MG3aZ9aKnePiJuG",
  "key17": "4pLxfCfGLcbB7j3DbFPi5GJX9mwe5L5PHzTw7EF7AqfYY2sCf2L4GC9JAuFQG8LA5zc66Ah1RfhdBhNb3NnhkH7t",
  "key18": "R4JEQFRiJJdpfzQf9xnmLpUdbX7kGcZix2wEgZJkUB1LsqVGobQwVNw1fBPLsbZ6wmJCYtkzBM46jPjFccgv3E5",
  "key19": "3MNRsCNcbRhi7ncRE6VaDCahvkNzTT8uxC2hEv3qusEhmrZip3aAgscohmtgcryo6DDuf99mpmSM1DAcmLbSVmiW",
  "key20": "riEQHfedDMvyMsUwBpqpC2fHQRWydcAGjztxdEn2AZusvUfQLNKbYLEzE4FRsvSxyJqJrNPNJM8d4ARkjR5RUJ8",
  "key21": "2RMaePsVAQ9nWdJAfR55ENdYCCDzJzAMLN6UWpCZrLXLHAXJpM9vDghJYmDhPm4oNW1HYG2GrvoWmhapHgQtFAKa",
  "key22": "5Cs1kBnmqUTAuaCgtf1Qq7YPkLxyhPhzLJGBitE2zhh4Jwvf8bYsFMzxEXWQBzV4NAPKYA1Gbf67ARkdB9dCZWU",
  "key23": "3pzKBgr6ggDnHAppVZuzxxL4F8J69kz2EVD5DUAAunphk8LjnJehNJZn4mDhBpicLdzJUDcyzmvhJ4RYRxr9y1hz",
  "key24": "5xmxeHCRuMwrhXsCNY9qHmws27XVRcUogCWuM43neS8xzML1jbN1CE8UUue59uVK4bqa99xAs4cBwCkKgHa9Edhz",
  "key25": "45azCDonjf7r4rbvLCfpiyg266EAzRvDqiH6kxbCUWcGnHgjet3udqrTx5om6L2wzgqJdDgpYwpUxg5LcBSuhvQE",
  "key26": "58QMSDevkEee3hUc5eTJBxEaBgVdbu1NWqbuUiuVc7BdakywNVVxjHNxQ15CnvWokybg6bpuJ92X2BMof3KKB3aX",
  "key27": "4Ck9etzkbLnZTBF6Jg25tGTVuCxnkfcdqdvxXPGg38SgMocEK51eZYFunx2y6n8wpbQ486tSJGhpVo4m9zB33pzf",
  "key28": "4bVurKgcAFuCBBo79Lrg5WGVPzQ26Zr2wMPHeBMtsxKkZ5Q5dypTBzF1pAN1C4jCJkwWSAP5wEkReYtzwpFYMNyf",
  "key29": "5qTbKRtrWsHTknk3Lr6Pe6Cwh8nskmBUqnzL2dkr4tacf9ij5X4dgxP8E8RANfzRxwBn86Ce5bCN35Wrs4G1WMys",
  "key30": "4Et7CW7UcnTv8BBvMnq8jraMtqnZhzVPQDjbaS7RFJDPsoyLx6iBLpYk8m1VDurAQFZrv7iDyeL6yWE6RH7YwNGp",
  "key31": "3QZntqTGvB1gwfd23YSbUkSvXiA9k3nyRarhaNka6x6k4BW4AczysumGxvPNgWK6WgYxQch4p1vyVPqcEht9bRpe",
  "key32": "5Fdno2xyMZRjPweztswknmhSHMADmpbKDXU76GPvPDE47LacLdvUf8g3KBygMQSnfCoKH7gJ7G2Bq7ZPmmyd8gZn",
  "key33": "4R1NrEqHkxp9Z3YJshhgLusCPqCJUGdZfwe4HgUoUkGGhP5TAAbvsubHVUwoGPqEF3G1vWau9awNzYTCUKgunwXK",
  "key34": "4Gr93LzvdDyatn48WJ2AXV1XZb3V6E9hq8pmBXcxBK26rwaUt9kabXNJWFG9wwk6Cch2dVPneam7mXSZFhRryCfW",
  "key35": "43boGnfWukj3ccdo8PniYZ4aHyZ44HHaYmTa4r3pLRGD5uCEcRXnhpxU7vnq21KNevzHxapCpAGgixjJ7Y4L9t2u",
  "key36": "3jX15gr3axS1DqdKYyuTpGPT5jvXArfH2eR1qhumTQ5TXidJaNwGf6h6ku8wBqLg2zkRnaeU7S8xSZZBWkXz8iBA"
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
