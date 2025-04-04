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
    "32UprbC89fLUjNfh2CuWaYMFqHfhzbZ6u1aR6uRS3r6C5nzGXk1V28ySEeKs8rq2494Tcs5EujZPzqHgEdjF78BW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WZgAQk5YGSfpssTqk4EX8pM1fRfu7csuRzrFyQKmAgEFJ2JcW1PxEDiM1Cva483FNURVpQh6ybVcw3Ye5NUsdwe",
  "key1": "eVrqVEwgnbqbUo65woU79VVkLPS2cNnK2gdDrfW8R3eDFGb4QTGXtA7j6QhNQDeexWwdexxoKevzgbXZLKedZo3",
  "key2": "zCWeWTCe3CuEiht2C4dvuRP55rwzZ2Bw69inHcZ873PSiYXVEtsaTin6Tu6tNwxbf33QwRMkZ2xAYEWe2QqWhWp",
  "key3": "4259saaRFy5jLncvg5DHR4rd3SqGTGdU9uLAMgKgXFGyqNwAniY8Z8APn1X3XCni8b9CDdMM3yoAuh3DmupQR96S",
  "key4": "2v9hLDAKLMyVzKV6jQjMefK67Zbn5yJLL6t9VGPe6Ej9TbHYhb9EPtpXdyfuf8azNWiPshZyNaL2HXkd3Se2pMtA",
  "key5": "5T3UCuXDZfMaf7mqSArnZcsmCAm9UPEqpBosTGEMdkBR4W5r3WrjcMKsPB94gAaXZBjifzsLjJ2mXyZ9p3weaTjt",
  "key6": "32UYwCQ5W1iFf9amJmHWHqaaL7KMfiSf9vfiQjpWwbAbdML7yCwKgmfPG9g7kff5Gq4GRfHW7fqtBr5CEdaLNdPM",
  "key7": "24b7Ygus1Cmutvu1q4j1m3UFc8SQ9ytyY1p3nKRscVzwX9P1y5NPTYnjMJ1SeJRsqYshFFpLmbueNWZcUTWYKrPa",
  "key8": "5QB8KihcuLME5S7LABumjgtsJKefa2LzAFT6xPcNqFPDM4wvmNUqr3KH5ejwKK2WMn2q1Atpf1LTZwBVrqNvrjZ1",
  "key9": "eUaLEAmnPmpdtxFDwesjGPiHgpvw43fqVeTvxxkQy94BYLeYc5TbrWU4bfwGck3EYQzSdWnxPKRx8brobyMCVwQ",
  "key10": "oP9FaZqPXvB6ZSs9D653ofm4bQ1uk47WXbk7arb9jVehatnP216UjkB5rZQV7CBtGX9DSbneaabarwbtYUf9jAV",
  "key11": "eAZ88A6Kmyg9ShyEWppkmQgNgcYuHXCxXn6H5mig6d63bSfDneie9n9wzLz61PRKJgYexRxcd3WUWCi2P73PFaK",
  "key12": "3WyCPPKZCoBHmijXGTrEmPsQsWLHdxXZxD59ANhNPDvW89rYWj1pxrH9orpGejcV4RTtabKXv9x9evw1i9uvJYrt",
  "key13": "3xXDarQG2PWnceH48ao26kAipgopqXbe7qQRzA8tcvQYvauWRFHWs7cKLMmdRopshhY1M8S9Zb6XbAZbakgchrhc",
  "key14": "3E32GbVUDJAxoTCwmpWYSUAqwgbJCnA5iuGSh3AqkoQoCTy2AKhkhXHwuib3as2LkLHWnB28LVPuB9dZY5Yrqm69",
  "key15": "4akGG6XCG8Jtpbs9sYSaaJH3dwwD6oYF74Z5wKx6eQAgmZfLXs9yac4zFQjqw5AGrbQkhN867p3whUggWfMAE8tk",
  "key16": "4DaQi2bvfVuHpc6Ke4tkyMqVaMhcUWvayYSoUiEPVmMrfvD7Sp8G5xxFHL6AYsaHZouAbjm1e6Xt5JMdSzXWdLoy",
  "key17": "28zo17Eq7MPhjVe36rZ18hwBLH5z9xK7Dr9jf9UQB2TK8CPC5mzXkYWzpANvzJuDHbaR56noJGScoNRXuhtBBfh8",
  "key18": "kzR7jc9ngp7ZMPLN2muQk6vKBEyyMb8GGLybR2Rx11pmMH6yJUMPSYnmN2CMKbDpaTmkAAcZGBteDCPARSU7VD6",
  "key19": "3JzhdqcWiTdyVHMJ89zMMdn9vY4HooAm68YRNWxFvF4pJ7AqSsk7UML3RgYMtbt49xzgwHkw1HN9oG8xhU6khgx7",
  "key20": "aKVvb5TXdRvy8jMWjaUmL1jRmwZVtcWJfGxcfnLPaPke8AqKk4nGnRM3hVZexnrkRN6s5izpFM4wc4xLtzVKjoC",
  "key21": "Dtn1Vveoo7MATd75ys6Mo8F7JwcqAQ53czmbgHvEoPDu7PcMqg8c5T4iK4xB2mEiK7FhPqXzDB17PafbyNwjDTL",
  "key22": "vmfZta7dgCJj4tGj7ZYSoJrtGQmAQE3o1dWHwbbno2FPaAx2NN1mFPDYqac8EJpmS3Lw7wZgCWS8xytByyawwe7",
  "key23": "57up2dV9WV1Z35XSQYNqTZTuEJvDmDNTTbZ73TjqqeJABsArwwLGKS2BsrirX4jCxKXci1WdQZtxeUEqyjkcjEKs",
  "key24": "2WhyWAf9qWSHfu7JKcp9KHPRzqsa3vuVXn7qpgAuQG3fyjGvt9FuDs1pGr7woxZMs3rAyJexTwDJ87BCBLhFxeW9",
  "key25": "3FFkoXE9Mk7EPLTDCnR9HvVNdhGFWY7KA2m1KFAcEjsnJ5pUwJCv2ukpErp1pdXs3krqrmEK8yC3D9amT4869Wbc"
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
