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
    "3nvaEynMLt4SMxU7AUZvixvKKNQo4tkWEFJcE5XW9JunmeKnC9gE8UH2TLi8hpD5dmTuSqcPTppUoKwLBixs3aVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65QMs2cgbi2gXu1RhvnTZv1KTQkHiPnUU15UpdyUWZ7XG6vWXA6e8SHkq13faxaDEENWz16Lqeoqhm5spDSuqKNA",
  "key1": "5VmKuqU1gXkEuSyV6RW9MY5R5pNQ5sgoxE45JcDawUabRjsU7SKTX2u93a7fAs6VgqsM2UbQGsHjp3hKHt28RM74",
  "key2": "SFz4GowDZrrVXtcjsv9KeHT3wmHDukKyWzorDCrmd49NfZUTkjjmwK76ztEntEkLqZz8qSTZr9NqhzX2otERrVz",
  "key3": "5SkP88awvFSaP3r3YE7cqiBjaL7udgx4kBetT5p2Jr4nPnB1YeBeL9KvjHhDTc71aQuhJZYaqGyHv8DPvP7uMsMX",
  "key4": "3Hx6157Jmtd1BzRgddGPufj77df7NSRmY81vcfT8spD9NkDeSKwXkTVJMuXS4TfafAcFfcnhPFd5o5cfTMrwgDcB",
  "key5": "3mpfwmDVYHsz3U9d8LoSPoJHpTWkE7UfG3wTjZL3Lz3L2tzmMzRVjFTYhA9BAoXXTJVBCM7h6kXG4jJiPLM6RVR7",
  "key6": "5yDiam3VDjFWQwNiRFF5LJCTvvpstK4uhoTqT4p7SYi4qiR8hH3yndbnnH7x3c6mwdTuQ77K5gKDyLvxpvPVjG7z",
  "key7": "4HTsvYnneeocC5TKYwJEksb6pKEsBsjD3m79eAFkCGAUZbeKfYQQ45iYeH5f61o35KUgTfcqGGBue183cZPd66MH",
  "key8": "X3J4YRe8jGH6yaSTyCE3zxvdS1wkm34mRyCB1uNHu2LSyMzDm342FgB64Q3mo2PiiSw2JvpqtCHXAvmQcZbkDe3",
  "key9": "4je2ue2eH3Kd6HuYe679CucCPjnUaa26zcQ7x9YEtWw6mzUTrTwSMsn7P4scWFBE52u8QSs8jchDocELwoJiVyDA",
  "key10": "5pohUw47SUHatjcArzNnfMod1dyZSxZgZGighPBBTgbkjtR9QbEA5ZCvDyNvXFWjLkApCHtDR7jX4F3rLiVs6n45",
  "key11": "Gy8mUS4bQicPcKTx3sWa8CvoUffnCbZtZMxEUmvTaQyLTwyoXLEN8Ys5AKw4sgn4JqxpsXH4umSoXwnDgHugomd",
  "key12": "4pcRWuULDLVFrnSqxmttj7FHvWLsAqypLwtyEMr34DZADJk6RzqTr7r67LEWnLwQzSqTU5fkfJsA2B8A6mNz6qH6",
  "key13": "546ZSy34PQ43FddWykj2BNqwsEMUQKuZ4GBVwbnXjTFedRkBrPoqATRiwK9dP2kCBuxz7FuY33Rqtm6hGFZvRrf6",
  "key14": "5eywJM2HdUL6MQVqqGbkhMtY91n7Y1nGtdYUbpQcENkf1vsDx8U4k7fzsc7zqxCrTQX5Xcc9xiZ6rQEtU8JDf26B",
  "key15": "2jCdBTwKqxKpT54wmctagKAwFVsrNNTr4pkPCLRnztFh27wQtD1LfVYkZeYJD7P87ECPTeFGUSE1uAV8P7YB7zKi",
  "key16": "53naobjKsYKeX9rmgSaRQjVgvsw8KnMH9mDRMb3JqCawVxCYGUdFUsRgDzSZxQTvvZCjtnUQ4akoYWwLjbUoFuCv",
  "key17": "4bvTrAy4JevXdhMeeWfMSJqkhZz4bNSpwv5QoFtGjhd5C6n6efn2Ai2SYRjCpGVZUpLYu8u7bTFqGLYB7KD1HdxL",
  "key18": "3v1B5SZmU85ubCWNFfFjNLGGPGLzrgFa9dLMtFYrzycmvuP6c7L6D12BxabTY9gU8r14Lb26BNKiV3LY5Fs17Tx",
  "key19": "5VbyUq78Kq2u9a4JdX8oC4Q8XSBM3YKAp9NcgQ3Qzy84wqmWn8pmGxxCYdPBGPx2EQHBhKH7gbLMvDBorC5mmZ5g",
  "key20": "5GfT5LxAVzp7Sd5nLTmfgZdMsSYDCVELJFGYxVktS48mTvmPkXaYqpN1re1dZECZ42HbFbWau6c4EWtpjrJBTit",
  "key21": "5vXQxjrjrbHKUKcVqm6ENxH7qHXpminJtUeWfPqsC86dsNCAGU3fxppLLkEePp3J2DfYmma2EHQcmGSz3jeLtC8K",
  "key22": "2XXu7eVobcf1Kq1zXQ97rMkxLicAHw8nxgZjA9ZZTkKmjvRBY4eRjPjeJcKrLFva5MPcA5YyRfariQndxr17wswN",
  "key23": "4hrLiDzXtH5ZHU7TeK7TUFFkYa1dEaRSPgC7MMnYcLr9BmpmwxbBV8cNCyUaztfKc269nXrsuv3hYMMwptBPGKjQ",
  "key24": "2hTvtX1mc7bh2u8tXkbxWfYiRuMYts9TZfKsHBevenVhj3iycCUx9sZYBkQpx3tDU5wfAza4PeesUijRZFykgsSJ",
  "key25": "4tnbvF7YQ3eeN4EvHW9jy4CsHPjMXCQrbUdJ8uQNSTDwMBUNWVpk1hDN3s3KGuRBApTMg1fsR7bMG4BZ3bJ5U145",
  "key26": "41prCRTGgdyXVhgi9gd3bBpwKnDin4E9BZdBmyTou6ESyZBK5KBJfRK51ezNPhQYBh2QMkAgMPkY3PcHrtaW6Wjz",
  "key27": "56h7JX6v3VxpeFEGvMyQTCVLJt4HocMgWkZ8SSmvBbSVRn6N5rdAUNRNVrmKFpGJxEpjAkmP6SRi43qjpcjGEUjm",
  "key28": "61XAAnQh289YPrCsDwM4gBD9UD57hmpJdfgyyhyVLzy2N6UnzbVv2QVS5fGDD5Zimzjw9ZAtXpHAcVnfVkk2q9CP",
  "key29": "4fmkDhtNfAxDyFYTCsenzRyH8C5C62r75D9cNE5kQj8YnR98gkRsWDW8mA2t2rsCzmAohZGrvgrPGhXiKHieXvZG",
  "key30": "3vi2tb3ZBsqtk9sJ3aJq9et9HvgjiaSscdAXV87GvnVFSsDDq9f6ScX8uQAqBz8TfNBBbBP86ZkfwPuaCfG96WgJ",
  "key31": "5yd1u1xrij8rMoQxiTeV5PspTivg4WYR3BLHETos2Tf44NkDUiN695sif8m3j9Nn744oArrkNfZKF9FYh1VfBGye",
  "key32": "5Rh8XDj6f6wYYCAGmRSgrJ24qiNL5nV9n3s39hfH4zV89Ag3K5GicsZ8NVsDJnb8R1EdwZ43SBEQanJP43sTEc7y",
  "key33": "3dpD2eWdFD6EcHhwDVkWCv8UZWNpdY1qkP5y41Qao6QD2nvaCQ8AXnxovT3xNzoye6SjxtWJ6czwJn3yy4YzMAfa",
  "key34": "4u69WkSHKVGkUxPE8c2WSSodomU1nnAzGYFZvNMqNfsnezBxU79zwqoQdtp9T5ikDzNrVDp1YtMu9ye72kji7zrA",
  "key35": "5x76rjCxLy9pGsEqNjFQHSLTiBVsjCTkWyeSrXdg5SBngshHYnLdjfFd1Z6aECAdJqdJan8PbmfyMNV5kaQHpvLw"
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
