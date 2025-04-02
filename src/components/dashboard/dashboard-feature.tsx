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
    "5sGyUC1pTPaYTTDJ8LCmCm1p4Rc5XVyEQKK46TS3HNKnbC3P2966VAdo4HoLrkfyK6EANbpFYk4fgaHgkc1mBpqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZtSuMAK2mch16b8fkPPLpQAFp9VoyHtU4Z4UQYZzjRXA9U3CHaRgPZS1VKyyyUDzKzEJjBysHBeMvWQajh7nnc",
  "key1": "6EfM8mSEMAk2bf5AxtEpezw8NeaSjgADNKNLtkAPYPVroF4ig8ArpDBfe1HgYrVYn9CL6jahPYGttzfSWPL3FEb",
  "key2": "5F969qVR7QzKQG1tqrVQfAxUj74Ne6D8qpN1ZFdmsHRZDzCkgQmC8vJ6gYmfiSQCL5rzjJN4oH9R62Eu2x7jw3BN",
  "key3": "56FwUg2bchQuYgugeEAG1z4q826z1Rtzf12VXnn2M5B887SZtFt8UCgX2b9TM6WWejMPSXf56XoXu8f3cDMR2BAQ",
  "key4": "4myop9u9XHuvrr24mvkNxFd2gUQhiPC5Yd1sS2VJfDykfx3k5xAbQmsA3UM3peL4CwNJfMJh5NNJ78tCVJtNV216",
  "key5": "5y9LHYXNF6poPoZuFnYETix3DdFYTbdhBbmky2RHNnbq9LrmNJyx9kNqzN3dXMyDgEaL6oyEBEiYYGnkmsaKqDsR",
  "key6": "2w1b5Km7G8TQ6zhPB8aCZWEeHnkVeXybw9ETD5JCsYryE6U1Y3xMuTu84MwfnNqyuw4jsHkt377HhzU1E3xCkNRc",
  "key7": "4H85XhrfhWnUMeK1bkiphpdszgdmJmjn9oZq7mHCHxv7R7kchTP76zfpSrbmZpGpHXEqUttCHymined6qrGygLJy",
  "key8": "5fp2jnSyCEAEZTrJMRic2KMQ3GpfYzzvDhiRRhNaYsCH8NWZ5Z3BGmicjt3pw7H7oR3JsbfeZhZThsQL8E67Zrg1",
  "key9": "3ZJFLEVtLjxKBKvxLkCtkGdvwqXPESCGb48LXxfLZcNC3J2Q6u7neVjRaLRTYZP2fwjXnYGXU5F82EKNmc48X7fR",
  "key10": "3mki9U3egnJZrf1cqVH8r8ByXygD8nEvymFJWh6BQ73W5Ebc4X16BcJ2xXzfF9FGNKTkTHcPL8tMaZkqJqsQ9SzB",
  "key11": "4kCm4Z75PBkkQiLBYMpqrfWxLaaHZp9SVPLHMuNWcG2h1g1Hc1wxVJwZaqWt6E7TrLagukT7P93eHvRodbGcgYee",
  "key12": "38BZ56EMESkxF5zPKLEDAcrDc38xVRuNb57zN5y36LsBSE99oap2H15a8gwwi3cWNZEZS5in3XdYcTFCBUsfepmp",
  "key13": "8vpYEjJG9UpGhjeawW79qpufCJaqNc7vm4ZPJF6wa4x5WVFvnHdnmStHtJPi5ntFsVxQ7Vjx72XY6dFzPsYsxj8",
  "key14": "PvMYK4ZVG1kcz6QVNfn5g4w5LaRfajQykPcscQ8RFAAymR5DhgFDwwBRC69NHW1ip68ERq3aQMVsAXwdVTbgt8P",
  "key15": "2g5zKw1XW9iaSWdcGqjxcuy4QLRgNNXMJiMrLpzsXqk8Fg4F65EwhBLsP7f8wDNN6FAyLyQ45u12MrUHANQXKKA5",
  "key16": "GEacvW3jPmu6Czrncn7ZhkDKSqKQNy27SoPrPCqxZeQNnSpyU1ZXwN4F51VX1asNYv8PvBzGMKEdrCu3fedxFNB",
  "key17": "5TBj1PWXQoFSYoGRuoRtf9EKwNedxSSnh6wAaPzhBmF4y7cTzVMWmLFngBVJ5S68qv7t5SQnWkF3FZYVP4eF4CEQ",
  "key18": "3nZgmmuBfKPMzCJ67NeVAXD7JVFppgLDJXjx5CrRQDJTfwD1wYJ1VyPLMohHxmY7DZfGDJuCTVDR3RnbKDJBB123",
  "key19": "bYGdipe6BNLXnrQ3ZhSMWFVdjuSYXXnz7nXfMc9ZSSeJH2P2kiKESJvdg46SnDu7vD1swgzLqsJU9vR8nyqfxCA",
  "key20": "CPVFVg9W626L8nCrkAahWi8oVhC7kthhWmawubnP5vTPLy6aZMTdUe81A5mV7XYvcJqwiWtpw9ghReqph9y66iv",
  "key21": "81PnaJjWJnUswoA6P4xMbocCpJcnjJ7HZz69rV1DGKKSDqkwWkKbFsjpEEnZPyuGXJKPe3fs4VSgpFqHzLhWn6q",
  "key22": "29tuWEoQKCsEdE7RNrLeaDqKAGLAEj4V4TWZqsSFPFwKT1VZqfRAYrBBpnjKQFzkAayjB4oX3SmPkPQXnLadjuYE",
  "key23": "3XrMSEX6NYodzzywH5c4kWQSc9YrCHJE6im3au81bCgJ2nBjhWwZmHVj4ZyTkAagUGyg1z8iaA7LjcWucG9LzFbU",
  "key24": "4hqLHuGw9D9NmAUhL59tjJQ3qAyQ7ttK25eATkD957ovEgutUuBSYpLELCHtMSY4xT9ohhLiK6z7JUKNf2s7xAr4",
  "key25": "3M6F8AZmjtFRLK47CBauuu82KPFzojiXTmpd7RB8PYc97bX2epCsQqFeaRdXpZiQD48ipLtModcp9wTwWJxC8DHx",
  "key26": "4Kam5FyfZ9N3tP4ixLzNPFj7EZpP59c8P58a6apo5cEhCXQixueTTbzyy8B9e5LpYG1CRC9X6ye5A5JidXoyZRcV",
  "key27": "5ikBwxCYL9YYGckHPAhhXDuGTYN5nyNJBnMhFSm1dHVp5dqRV4J5nCkq7LDxxbbdaCgq596AR5V9UFnEXep88Ybi",
  "key28": "5Dn3ca5kiv4PtJxYgui9nGLpH4i698hTgrbU3RGUwXR43NCnwJHaATACiHYBzn8SH3Vb8v9hq3baFiHKCSJUcWXp",
  "key29": "4M32jvyaiNUvLzqCc1TbpTtaiW1FG7mdPuzH2qoQqSGSw2vKQTwwGFNDCo1R94aQwvLpNHk9DXSR59s7bi5fq1LW",
  "key30": "3rcrs8A1FiGWiFQxkX3fYVESfGdx6X4BcL9vAGQVfrcAYvXXLc2Crh8F2WJYHAGMoWUXk7P3zW2mE9XfvW41cMwh",
  "key31": "3Rtst53a77CT3hY4m5updGpMcWqAwYEfRof5CfquUqSMf6zyKLVUFgin9WWx3PPxm6wP85v2L76tSXmH6xY2eiq5",
  "key32": "2HztQSJmEXDKiHKiEz3EDexKgADLv6KnaM1dZniXnQ3ypthvyjfUvVAzmNMbWHqfdfRXEKGnWyDRmV8ZkkKmMDpV",
  "key33": "3NyCKiAQ3QpfAr19vyg6TqiksAZ5T3R3wXDTMf83E7xA9PUj5zpa41CUn7wGf4amJ1MV4FAzntmhpk5HudXcSvm6",
  "key34": "4umhJAw31c7Jn8ofd7xJhGL9g2rumdShJTLaDfpB3MPcKCnZGLTaTrfbSs7EH3H3ognngBTk32GfQ7hBYcYgEhRX",
  "key35": "349nthoscppF914EtU72T7p9mA2ujf5AYELuzHvXhTfiUzDRSZ3dhRDxhtYtDJYtkJKJG1DRWjcFFfF674Rdk9HR",
  "key36": "4giqZrPa9gs3GbKTNTmkzrSzY2wzL1M1fstzv2ZUhWFZ2JLbaFG2bBQsJnfi4pgGnFr3cvgeJgz9eEjwavqtXgk2",
  "key37": "4sXWZmJ12yxnSggy1R8MRSh8QYeu11Z5ZKogfdUA4WvqMJHzR6hnxWXsK7oJ4cFgMS6U6XLNoVf7oxryGrTFaDEP",
  "key38": "3EtyHfjtSLB7WKhXknSeEN29Cs3mRWUU35xk7a6D9amm92k4FDrWD4NQRFaqhwz8HpborACaA91N2YCeBwTG9add",
  "key39": "2fewCo1mGiTLB9aGq3CxgQ2S3db4bqCfFJFfdqWhaFbajLeRQfZD4NmEegrWF1Ue9uTGrhp6H6y52BxRUJEuneJp",
  "key40": "3fLCGYmGwfMS4AGBqsusWkuu7C32EGswLeYZAgzutPL8izEKRzpcL2HLtBbMoEbEsYd7fc4ZpcaYeTJhF6Hmf1wi",
  "key41": "39FUP7RYnUZQPF7B9KfBKM79yPRFWD9P42haT9ZSdxJgChCb2bpURkHJufsr2UScwEH45L1UXW8y4DLxLogL9W1F",
  "key42": "3V9nj57Sc7yzmX81ii2LFmSQgDsyXRUQ73voHA4gtJkmudxnhwTCgqa34dg6dkazRjTz39yNzY1ucCCML4NXFKSr"
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
