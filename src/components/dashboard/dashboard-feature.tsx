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
    "JSerHijY19bRYLR96aQknMgRZ4oddZo7Kwsmmddsw8CxMiXWSLVXiDjCcy31Gjc1QsoXw4RwRVqWHuCUZ7hW8WE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FvvBWYx2XT1QHStBbqz1LxSq9zRGecAMiG9aLyTdbecq9PGXZWGoqV3JJzRSze5aLsB23HjueobZRwHLnEzNgaQ",
  "key1": "kHBXkPpS5w6MENPSAm141feicCzL4GQpugcPcqhunrUUbGij6Y4exxiak4mvCbg7jPzdZxzr1ma9KqSQ2mHM8sz",
  "key2": "6DMyninarvVFQpYraMKDPwHcLFketZsYAoV2tJBHfmGxXb9JRXHFG2urAifXPFqLz5KoykhDr6vd9YF8AiXMLCy",
  "key3": "2df7USBqDirB2RFynkdQWUoQxQbudAs9Egyue5zzmv2Uf7X6ZpFiw6ZE3F7HKpvMK1R7eBvJz1WsXoFg7hfr2HBZ",
  "key4": "5BZba1VkiiACVc2RHUFxF8KJrHw6AqYrjwyBpxqpjHP95EatVgSrQtdZBd7QX1M8QgSdu5TEeXk2hhhxKKiXCkC5",
  "key5": "5jJMJfUjYZpLFe3ZtLhmksh4hxB582p5Dkz9sCzdX95N5iuxGEqJBTjjhe5kEFRePN1EJP1jgHqkdU35rxoCmiHP",
  "key6": "4snQjkGYSQod1LbnUZHERqDqVr4e3uAUg92o1fJfXcG4UMjXgTTpBjhv5W1QpC2STr6R5ysVZEex25EJyEye6NQt",
  "key7": "3w5NqyLuTyEtm6cKAVRE8SVPvPbwsbmEdXuxPZtduezPqJ7vp93ZSq6oXzmypciAsJ8tRNtNznFF3Du1GGvQWtcb",
  "key8": "5FZm74oVAq7jh6KVJ7KErnMWXD5pnPfyfqv2h4w3c5RiRq2UWrQx9vZ6JLfiUbZSfkq3X8kctBZc6UVjsDLQN1gp",
  "key9": "3CjQbH1nbCsVD9rvyQXzoPDrDkTcdoY4Z8ssjdRGD1XA1HV3YoXN7Ac8xiuXMSjEbePTKPbCC2zhP5jG1PNxh8b1",
  "key10": "2QHQywDuURqtM28B2CdYTPS4RknmMUzZznaYMcuHPoZVruEDiXcVswyTdcwCePp6c3Y1qCLTdKidqzE12gMoZotr",
  "key11": "4FC7dZPCRdVG2VADyRcHw9mU9GrqXp82bF3zQB8VPZDjrWfQ226yQhCtmA3vzcPnqTj4Dy4X3cPoAqTdQoMEdRct",
  "key12": "4wbgnpTrSUE3fDkvkPkjq2sRT91fRCkgTXCvFVUGzvdn1FkVhXChb6vmowB5dYumbTuL6mVhB9zrtWXzzhHcxHP2",
  "key13": "5ULfoo8Leevzjj8n9XGWscAdq5QcYhvJGfhbqYkgFE84w2y5zfDU3dUCQiEAk4azptFDUPaSXHThKYAvqU6ZjzMB",
  "key14": "31Rq5rEKLjUergctPMjMurhijDXnXLCYHSEYGUfhw64hGS7pKKZiVvzqWNwjcQ45WfpkWD5UXJBMTAyTbsnT87zH",
  "key15": "4sYBr7MGSMAsd8Gnair6mh9pWUnFLw172w8LcSTF2kJtzJRTQQpgfS8sZAueBRiELBCaNKCZ26BmTU9yAmqDcALe",
  "key16": "3pZTuTkFZSAFCDSSBBGJNxGmYmPReHzhYwGPt1XXWdcxNGuHroXUMguCM93G9K7N62Du3psUhoAfGokoAaUnoiYa",
  "key17": "2UjL5rbW8wfi9kTBgmDHv3LfkxpYyZBAxUz6NXDHgUhFE8pyyuaGTuKDmnHJBbZP5YzNTGrwFVD6YUhptyQayrs9",
  "key18": "5QZYA4H6eU8kQ3nDpKg3V2EoSb2rm3wcND5uC4SjGxhgdzccRhaNnx4uPz8innXPCeKy17keT3ZRwqgZkeZ9vZLp",
  "key19": "9mnrfkxaW3gik4HiyCHM8ccmH1BhyjZ7oVFakwyJVAHhXGcNWnfd7frNgmaMo59goDadAm2Ff9924S865KEGp42",
  "key20": "635U3hrh1dej25GM7dumBMYQmwVCqexFChzVTeVxm5G9N8nJC41Eo17XDzt3Vt5BBUgENSotujZ62vAnG3na93RS",
  "key21": "3kj4zWsfVFt8JVbaSL8Ekk8sQEpsmcTA34JzzWW8ATfWGpAf9w9AntCS4BDAJVG2WpdWA9JKyELPAjwNPpzQP9ED",
  "key22": "5j2W2EA5BRyu6rWat3y6TN4EztDyvv5yPmNuxU6ERyDWYDuGaafthZZJjsAu1CLD9AUg7eUS72233DmdYYKipLSP",
  "key23": "2RDABqMbc1Eth79DZpCGo1R63pxjyr8w54Dw7vXsqKQKn3eqap8edLgn3WHRrZLrfWQmH4TrfknHDwWkQ4ZSSfrk",
  "key24": "5NqxYPWdfoPqX15MqkHKUtfSw67NnNqPrAb9sE2N1DYSGEt7Sam4RYufcCB7WbBfBKPtNVnqMRXHk8Xi7qB1ocAm",
  "key25": "32FZZcDMjjJ9o4TA8XBnvyQfkBUbBzD6ogmUFKMfNCfKwFKicfAsKNK6BKFhPwHo6jmg6Wio51ioJtXWC6kPyRX4",
  "key26": "bBQkKKZdi2wtGpQZvUk8NDmnYqHdnaCskbSrfGGSAMsUj4DXUEykmkCZQt2EqpfuaCbo4b14bwKmsLPVXTi8k6d",
  "key27": "5zQeC78eprCFRTzZ8qpEsVcBRct2msGksFeL6wBiQjXWKU4mkKDcuEbiwo8WV71yyY2utgbV5QdAuhCHfMgvMfaZ",
  "key28": "vPQ8RsYUFeXY6NxzfFrqRxQcHuhsH264K4ZsEFNAhM2rFP1Jo1Ud77ZEo9uXCSWL58UCLjrQpJpfhmmdKDBsYee"
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
