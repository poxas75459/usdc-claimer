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
    "2FpW3c4hB5x4NuqHGxRFFdkDQAW3YVWAVXNMZohRccEKU12QWAyTvjcW9kynmbZYuUD7mjVNfrzpq5xv3Sv7AFfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6EXEfhAcX5fkta1wBuXkhiQgdVMDyLQjSQex2qA4ZH7PV57psrMCcsWXHTTC3knV9eY6JUhNPFbjUKU1SYf5P8",
  "key1": "4vWJmoubX5nuUVDsMhTQVnvAG1VexhgdPjngbS9C1AmrYxpg7eDw4C137XQpLnEN7pcfUNSzPrNgEeeKQGqGFnii",
  "key2": "3bhtP7m8S64ehB8ye8ZAtgti21ZZf2AfGk4RZ6peWhMAiabVMDbZ2evMV4o7ReXWtS1NSUMx8tgXVYJgmHXkC7ts",
  "key3": "51ax38SzmbgDUe8baQ23HXSNZydF88Vv84AwHRtePG364zZfDRX83Cf9gAJxeNdTrQYgDdFZs7iikPUnMQ3VrEJd",
  "key4": "4zdBa2szPcmiNPiGurTtDmW9soWwK1BNrMi9bTKSXEzNgYQwbCsqaypmS6z2ociRrPA3wp3FRzVmskdLmPyHWcUi",
  "key5": "3V9iJquSgbUFXyfebY65ZWnfVfVNDPLXtjJNsMMhBDKPkAe66WhkMfSCxb8Mqh8kJwzTi5VMnPTmNFGjGjabaPQ3",
  "key6": "3YZoZAcLp2aLqCydQL8s61nzKhsnNUjs3gJny1vcoiW541XgW1goEe222hStCPXNUwtHTqcUYjs5ViH1En6dvRs6",
  "key7": "4psD2tGuF2nGM5hiv47LVkwcN5YCTbQ5Hg6r9LWhth7oyRjSRHWASRVqf63VZ8qKt43qhbKLAfuJsi9hD1Pj26Ag",
  "key8": "5RRk3e1QStvAv8w8PCJEzyjHUfHkUeRFdqR3BKTUokK8AWuctiGNoTw4pojJd8mm8j5WXD2gMdnnzmM1vRmqU6bU",
  "key9": "4UvVc2UWATZaDEWTgAjtV6vzoxzc8tYbZjVpj5SN1ZEeeMZ9pQtmYto3er7ALBZVd55NzxE6XEJktnrAsFg4zwuQ",
  "key10": "2mGpWNqQs26DFW5yC1qNKYcLwoeYxUaG7pgsQVtEPJcyTEZsuTAm8x7TEQpvj5EwdEhM37Y2MBtEXKVTFcQoBF1z",
  "key11": "54MuA6c16TWKi7SHvTPFYCfa8PKrfqoeYL234fN5asnn18ihsxagGTAD4Dd96KqXFqUVqMxivaRPijgQLEM8URYt",
  "key12": "343mFcsSombNawy3G8yyhk25vyBsRBSLp9VN7ALuU1f4KYoH3CUSYi6Ys25BRAuYJrKxu84fbcqrtDKTWiz87WHa",
  "key13": "2haoVeND2gAva1oTxmnDZRmDy13b1pd2Z9UcJPH1Ys3V9qQdyzAW1Tf2uuDar2cM1Enb1mwV3R5xUnUbP2F4YEpz",
  "key14": "3aPS7CdnpdUGbCgEQneiLgsGxRjnmXQ1NAxwCnEg1SvzUEeX8Nm8b3hGWKuxsZ8pJH4A5x8F5dCTLLxTQqowbo5H",
  "key15": "UXxGo3hDuWAX9K3AKnEjKGUPxb5ARSvJ3h11qRp3HjK83gGkhdXkoxMzKyj4uNHcfHfdMWYfwT2kyXb4ETu6aK9",
  "key16": "63tYSBYmfrjHXE1EmcpwCXxwofHyEwVHeNKEMkm9CDgQLD9vGJkVkqqqT9PMJUb8K9uYBMrAUKRHXM6xwRiuMrs",
  "key17": "3wV2Wbo2YAvLZty6BSTeiX2Rc6DMd7oKa8tpk1Kokzw2KEGSc7daoxkzzTjyqzZbqKhgP2ZHiX8Nuv9XvmeYrVBt",
  "key18": "4EmxwJUaySuzmaUnYqeHX4ng4NrKMp1sUvpycnu9sXFpnkyUSicPyT1q2wuqCqjXi7AY1KBFgYCLBJiMMYQgMy2W",
  "key19": "y8zeCURQmNw1jvAooHwWHNoFioH435oGk2ULmm9jRrb87WQXjgzaxB99uW3MKK3Epvrh9gFFRBiR3X2nfLjueEy",
  "key20": "2GrcvkQqZBJSLQ6RPE7nE5rSJP76DZwwB9QTtKT8mZYCouXaDTTVaBTfUvo9AGDrvcXN6CjE1JbXLbJgbH97sAdR",
  "key21": "2tsuWytufbFPPMdqAiUx6fELDVCduNsY2MdoLYXd2KFjJ6Z9eDq9B7Yf1UATst3RMsQPiv6rZo3wxnZipD3XiiFi",
  "key22": "5CUv5r9Vw8rnMwTNDpcWDSek1MqLHLXbYm3jMPqtjEvJHbgvUQqr9JiWZaM56UeKg8WqBbse4v1zeHkx3P2NbsaZ",
  "key23": "GUYcrF6LjLjCHAu74GmdQyHP3EiCM3Lphdox238WSv5mPqDWWafa71PeLga75JrVr4akAprS7XkoUKxxokZ8Fki",
  "key24": "2G139mR98bRGZSpaqoRk2sD3TDrE9wJ3KCp6XcPEVYckEVHvrxFdwECwmAtiY8eMVb2au1YrT92jhsotGnzGxSfA",
  "key25": "4QYxnppAEkCk38GFmrUcaXyaTiVmkt9dPV5npbDWC5KsWDeVpzUY7agVKfra1CtoAydVihT5X7pi3U84fdtDL5Nw",
  "key26": "5ME3efBpmQqE4ezoPY6KFrzeDcVjFdGyJyo9nHfmCa4Wg1sSCEpmN3qsFy3vZMK2GqACaQcNsPD2Es2DxXikbbqZ",
  "key27": "3eSuDWGuv8kbgnikwDS4NmAZcCNQQrnjQZQ416pmfwA2rS5biCJZ6Y31MxPcQubpRAQrMit2WoCmWeWGJvQCXnjR"
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
