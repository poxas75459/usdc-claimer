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
    "1aayNnPr9tTzRcr6uee1GGGej9mXCWhBSS8DwmcZ9WZJA2tV5xpJE7f53G7vWDUpbSu549A4q4SHbzs2tJ1kBqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DB2npAQz84WnjvtKLjpqfz3DpDD85NiTvTpeJdczWQLqbmnKy39HxSHLqJaTTRcjnvgacFvvmxkzsqgLgjZ8Z4V",
  "key1": "5FLLxjVxexM8o4Eas4bJFrLQJKZUGFj3ozs7wT2rHr627nM3mUMPCx3Akfd7zie1c224YjMuFTtQzbmvwNMSa1fC",
  "key2": "4S2xB9FpBAhRcTz4aVJ8QJ3mWKPD9Sh8eq9Ye7uB2F1Y1Gf3beWx4wRqUp3majjtiGFwdKFAG2SsgiRJmgRynxbL",
  "key3": "5342dqRpaSESFgoL8hLHHE6fYx8RF3crZg1i5izfxAzBFSWBUtywt2GwKEiGMu38cx3XhWYunaF8sEZV2oZ88eQv",
  "key4": "4XRBPjZerGREcDfxssJxLQrPMNCmu2LMdu6d8YJ6SPBVVAmaTTycu9ZZkdUHdt3tZjyvzPkMS4HLWMjQh4VyNnEM",
  "key5": "3mpxbg1MB8zzJ9gisQBA3ndonQkDzUdaMrRccbCngB76jrhHbEWhTN4XBJszZ2rdVVKqCwyeiHrVGA1H7Rza7CiX",
  "key6": "25EiFjZXBbros12edCLdUJX7aCxBusdKAFHond6FTxH27nkgdPXXpM74DBnxuuLoV4vT9QJo2fdbrgsRcbtWwFz2",
  "key7": "4aCYEyHZzD85HsBXV2TvaT9uLnrboqGcHKy1ThvytHYtrcVVDPnHE8B6t3GaPTvbiFsG1eaA48UEvzibBQQ2CtC8",
  "key8": "5dFgmv8aCeL6oXUpXpD5ay1Zwwa74jhV7GuQ4SVUYUXiMTn3V1BUk7AjugqzxGR9GbBeDtCjjAa1GvY5yNxV6zeQ",
  "key9": "5UxczY15R63frXqBvxfzmZtqz24dJHSrk65jApNcXTPH9NoM167uRM88Z2tL5hoN8QUArDmp8rQPtrsUzzN1yvcP",
  "key10": "3yDJuacctUe4xTNSycXdRfQsRXRMfehyj2RH69sNwKkKpvQMyyCP1QJmWHQfmmWoFpswzgVSK7G6PLbsupKvAoQ8",
  "key11": "3ajuEL1Z8itisAzV6c9nYEA5K9ABtBsjxS9U2mST9FcrhycJxaz7a3xPzUpmPsHTxHZRXLPyMV77ZfVNzxowHvb3",
  "key12": "pu2Pxym2UP6so967zkzSxM6dH4wBdSwfoH4YMyovW63QY7KrE6GswXWfH22nhusipTzriBxvtZDFEZmU62FXxdC",
  "key13": "4cfrjnNbeznEVsaZZS6jvdnGMTJYsZjSjLU9KrQ9M8PwnxqB3hYj16n7g2ZkEQv3sohS8Tr5UBZyRyrJxA6UTYLu",
  "key14": "4odLmAFcSXefF1Ab9KYPXGPRMe5Hy3yPTt9eqAVm3fzt7sftMNtDG6ofwPgcyn2CsxgmhoNRnzY8bioBYyCCEWpZ",
  "key15": "3ESNqkhc53bios74TbXhxs9WuHSWmaJkMBEJP5fSLjoui4MMRj8pouKEMRUr7sfFQFbW3SDvM5kSH2Y7s9fSxZm5",
  "key16": "2ySCdzQxPpT15Kmi7AGDjbgz2131grsL5zTBVotz4FTTYVLEmnzKiDrrZ6KyVYDSBCN8HDXf5N7DyjQPkocL87kX",
  "key17": "379Gp484LKqHnR5pkZDWpxCVyM9zfmC8biXrkVnwooDWjREkecefp9b6kQwYobiHVZRUPKJgVM444aXdEaSwBpY6",
  "key18": "4Ao2x4nzmCNDttUGVcwv3nYbp3R3dWDT8FgHQUT9DTUchvYCkfz3FRsNcuZYvZjvS8QafAwSAAqSDMXCgutWYEZe",
  "key19": "22pdmMDdx3qAYcvviLRHaAiL9M8oufzq13Xg2VA6611m5Vj6VTsdJPbtyPRW9PrdEBqGEexHoAwV2ZT6eX9V4Gmk",
  "key20": "2oSFqGJxDocBdrubc9K1avN5eXWxB6oS37xCvaANUTEH12UtH3BBPiDLNGmfcpgFAnQFNGFEgpD6Q2PFDvCEMBny",
  "key21": "4JN29UYQHnGQ84Parq4RrwNYcCwWovjPpr54qaK93hvRCZBHaxBBr6EXyynekhZtAhSPGQTfk2ubFWKHjk8BXeTM",
  "key22": "8myk178ZS4rYGwqVHGTZwDU7bt7S1aB7nrSXB5PH15NLdAtYUXwYEXwtD3UxF1aeEsE5Uc3kont3Ut3eaQyexrU",
  "key23": "2MDJFej6bTTjEHu7f5YUCtRZyCvuRbyJiwoJTmjy3aYh9i5mSJwvbLonRyKZ3iV4iPEJhGiiUPuu7GGCUPTZLPZH",
  "key24": "gw4s8iVMguBSuRYidz8pwJZnbBigMFJCdfRss4b6seYZgm4QSJTMMaLzGJZY6YSSbcx2Sd9xqebmGscNnDe9ZJy",
  "key25": "4CkhNSS7VgWDyct3BjnhzXSKNH3nt1RC2PFJRnsDFDTigT7fZe3NtuPvdMPjbRz8vFf67RPyU3GRhCdBkQZKEMLR",
  "key26": "5BiqXeskNNW3VtrBA6a9mvZGsZcgLUb7CxQ5ZVvnhDYfwpm6TNXWYHZnxwcTef8ZrVSoVXPQyVdzfL8eU9LRu17L",
  "key27": "4rNWSBpiXDR8Crf8dPKwZGzAaVDtJUwKpUC3zKbYUtBNf7JyWoptAQrqBzeUKuhiPMEzGUt3XUihAT39qoHbkMGs",
  "key28": "48caLjZg2pcn8o6aPvspFxyi9f36ZwAZQaXDurXsTVzRm1BqqtifaW7paE5qAW9VFH6YCXZdkPE1uRahM4MJF3uZ",
  "key29": "5oLatRzh5fXrfWXMVedjMn28rnr6gufSbcAqKDqi5zbK2bYGYH4duaooBy45X4zskVidG6FkTLmqhPDyEKybUKHv"
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
