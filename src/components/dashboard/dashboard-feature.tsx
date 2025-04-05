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
    "3GVrwrRQKKRc4R2hUzaFNDSiPTrHM12g8Y7eD5vZc94bo13aPsZ1vTKhah8muMHekxAUTj92NZxxeJyfSGnaJhT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FchUGZdUvdaJv4DiBFnJwvxYYERF7EV9K39UzwLtJ63tooeHBhGxSj1T1gW49iQ5NcJzU3fhJ2H5Ks7Zpweao5W",
  "key1": "3pTDQinCvr4sLiaWRnVJQDfSdtGgMy93mYkAqnPgt8TsxHfYgfSuUcEZBHxAM6cGv26szs7z4Ed7AyPW6bdLY6YN",
  "key2": "5ZikXy6seM4KxaaQjmq1WnacpFXTPQELSh4nungMJRrnLbGMkB9GcEWEuAf44xZPA1qA9F7azg2zBDLTbBznKn8e",
  "key3": "2vvT8LxFA6gentBRk44MTiUscSxYqvdtLUY2W8ucb23jpGSXRdDqVMWaWYgKmaPZA8XM2eJkQ1PRYwQfP5QfTUzs",
  "key4": "3jZfz7GnDTfZZTrR4oFmgfNxCQSCCgszvgdUEH9WsriBxe6Q4L6WLsfkATFG7jQZMenK2RznFN4bYZiFGYC8oq1D",
  "key5": "2RUApjzoHyX7GiSKzLKW8ZuDTzs5RLhZRw7SPVhMqfJ5VAnFhLYhCAG7S3hCTWWbJztzcjGyi8c4T9vmNxQCo8M3",
  "key6": "2ipN4A6S4pbijwfQQ7YbrWGY6UwEddsvngBHdMHUhvej1zq6P9KwT9xPMGoGES16HuCP9DF7GhQMi3cE4D4WD2ZK",
  "key7": "47jTjBntme1FxfWL9oQnumQ3qYgGW3BcmtuxXTenzWVcNWTi9L99h98nugvJUwZK9fSLDtbBmkBzEtr4Uk37C53i",
  "key8": "4DSJbpES1ZW2YTVt9NcqAtJtLDFxDQbdS22o1gAG3mcJkp4CXCQKyyAX3MaofeCmYH7G7mL7mcu5p7TqrpDV1b4c",
  "key9": "3WLBSoRMdfWj4gqRrA39k27m1yk4Ect9UcMVELbzeFwZ43JPA6WvhQVmLM25gCkwW1XkmRk1ZyBsgmXMM776V3LW",
  "key10": "3Rzz2TJ2JDRBr1fJtT89LTMwnWoGVszeKwh7F8XaPa2BknLsrgyDdmQm3isKTosqUxLtzrkmeJqzwD59orQHMB7L",
  "key11": "542drpjPp3UXz2bfWVg1oqEKo74xNdktEGDa9aRuMecbYQ5GwRpy7C1wMeu1X4jDtTby6gwKAmR8E2MJ79Gh7YRJ",
  "key12": "AQv89mfw1NXpxZF7vwJAMHvdqJGTc94a1o2TZ5rnqrBRRN4oYwGVM5D4EwQDYoyHfAn69fvez4yWWgjvtyKCwb8",
  "key13": "3sHbXUYNqou5hsd5pFnmJz93vCQcgTEbLNVKgkHAfKYfJhuXFRfi2Tzedyzh4k9dH6p1tn5A46tnuF3fvPg9MMJS",
  "key14": "q1xCYfKntgD1GusYJhcGfmAffBLPNz1voeZzutSzmBfqQJR7kpt3hyr2XVYcY6bAm3hNqheYDEZ4KCDHMZ49nFp",
  "key15": "4mi9gVN1Hj3LXJQtsZb6SRJZiR7LvawgaUYwHB5jmQCrFfkoy2fgYW5yYzisS8evgwPDzdyvJ6EDCsdahVZt5NDc",
  "key16": "4U3KXqfeSzDGYLLw2A7Rz34uMLXfFsaqDGrjBCyqG1iiepKcom1EPAqBsYGW9dYFShocNPtuNWV1NHYY5arDsahw",
  "key17": "3Te632zWL4asL4D16AydEp7vBMNvgWDsH7254SBhsp1MDsPoMgeTXcitZQwLV78sHjGVG5QCyG1ZnDg6F7oWMVFp",
  "key18": "4r5eNXwMt8j8PovVE2PakvuxHjkGBRXHPYMxnHQB6Yicj5N643yGBX2KJg5ryzQFL3tfRqBx8jwTu4GFP97MBduP",
  "key19": "65pM64MrmgDXPLVKhj2UJF5QgeejTnJJwdR7KNnDbki8m1Qk2yJrDjb8Y7mmp9w5uzVsJy8QuJJB4hH8Dkvradzu",
  "key20": "2fcHkGsLoy2YQ7kDPzouLb5TxZbBzQaRe6A3AxhFErQH63DhgANZpFry1hovtjg651dx7YLLqTvYSGYhUsGJC6yb",
  "key21": "2SFoZx8cwYsqooWToAa1smETsDg2FM3zWxW7qBxaFvASPAJt3CfcPWCdb8uxqEEQS9HbbYDLDd4mBQtXhkUzxrKd",
  "key22": "37XvykrqwFbrTbfzcuUjAatcWgEFm6yvXMaEZhBYzRUT1dEVcAFf9aYXpmdSB9L2yvXjLDLgMzwnB5tPbLhRyJqF",
  "key23": "2VBFfXESDz54uB7AANLUmpMJKtLDdmGHeN8gnVdQYwNBDcmWFj2HmdwZzC63MUNtr8H3dNT7h6i54tSkfdyu1Zn1",
  "key24": "mhbkv22vuNvcDHSkoLvPQVYmx1y15GZPFSXvsNMz5sBNTQN7pa8ttGmUrFitg7oJUPseeLFcP15gJe1RTya3oru",
  "key25": "67LKui1JFAgLAxCNqKQUhGkFBLFrihRDVzGPUbkaeH3PnBPZkusaaGmK5nzmXdAxFEgsS1q3cWqmXQudWmeJCvcS",
  "key26": "iPAUA25jrkz4FGKnvhCLzfyQeo1yx9dUtJ3YfAAEkz7ktP9Yb8GdYNULV2kx2udgFzqVVeEawHusmm8LRWHnt2g",
  "key27": "3XpM8P7p49AbDMA3ctiiKndEQcyRMWghrGimKmX8HeRMSptuqsKz8B1BxGCX24QzGK5V8kvTcQ855svF6JXWJvBt"
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
