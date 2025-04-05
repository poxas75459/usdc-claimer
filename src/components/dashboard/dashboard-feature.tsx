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
    "3UmvUD148w7tdEqCLXDqSU5LgrnfzVQG8bqYzW4mYeFVeQtnCGvVh5qnzYDdhVsGrKzbvzD4rLrwWp5JncsnWFmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22aNFeGzLC1WpZkdyp5sPP1DJ48gHWasZxEfjfxqaWE9KPu8EbWNkXcvZEEuozQc24ULNbQUAaGsHxnvQTjuLz6o",
  "key1": "4Pgoqe9dUQVM9ddyYVHmbSwBXBeSTtMZ3gK8gwJtxdks2J78sFbrTCNP81dzAVARmKhGMQU26XNGe4aKU6R7TxsM",
  "key2": "3YqDu1XW8e5jcmovXhd3EQzra4WytPsyCePFcqFtv5tb6KZ9LkcAGUdnnbkqoi2xVYRAvr2Swcy7FTVE9bkSD4ym",
  "key3": "Tk88F4Jh3hRc5SxJhLKrM8Pd8tP39rDRjtR8msLpvjGChd8uJHJhfyDRu6MxaLnR35CsLCmQUs4zKNQcaoRC8YZ",
  "key4": "267NYduPfLoqmpZruDwUjBgFing8BRQpw9xXgSFnLu2c1xuw1yq7EEpEGw97U8x8gArpobnB1s7y6G3gyEaZPRc9",
  "key5": "2f4xshGfW4S9vHVGgFsY7NsqWbPobaogKZmjbaRVwgrXDfRiNPjwZXf2b7vNKe3V8gWGRypbPpMsUXUV7bRgePY1",
  "key6": "25qaoDYWc91yjCWAoq2mXNUrnxEPhNa8S6xLaw6X9QLW54pxquCUu4qP24JJsySmEv2DGzyLfdgjbU7YVvm8KphT",
  "key7": "4y6893WZqRDZR8r8J4fqEwh8L4ZJyF6uTHvrcY2rooyaFxUtLjqNDF9hM5evBSHA73C3zSWuKZ6qMkC43QcdBXQD",
  "key8": "4VT2AzpjY6eoHRNzAPogq7A3meCx1ipkTTUXZjJELRcagEE6ihe3vbcViiNEUxerRtokC3xotbKz1dhAyVcMcjQH",
  "key9": "4pQ6sEt6mTdQjWXp1kuyEKroar65gvjnipELoPRSCWnczFLST3fyzprcQafqji8cPF6Y6G5CyCtzKoevrmw9HGta",
  "key10": "5H7rBjEQv6qZ2rTXziVWa3WyXxXsQX5KyLBfqxy1SqCrCfABemQGBtZHSfQRm6TmLiLLA8qssE6Xcr5X74k7XWDg",
  "key11": "2tGGnC6bDz5wQKRZhGig1jvV6maAzfmHHF1xefvThWzaLuH7n1htEQ87V5B1q5nmVLR7xxpJa8y9PhpNHFzFbymG",
  "key12": "B8kgUGBwj8VDYAVcrdprSy9Yu1mtGgyMX4NeWzZKTTLTFfyYnaXJU7m7VoTqinGNiKtwhjAHzdv8dsD8EG3jwXe",
  "key13": "64s3B7zvCjTG2Q5RHcfHkfshjSNnbq2maUBKahwiJiCF9qHKy5WsfJxxnrQPqS4BKaFhtETP6vV1GRKFsVhHhsXD",
  "key14": "T7Me49qUnqr5KNsCuLKXbYvGr6F4cSnjaEbsFWtLxMzCJNT3nwgSb62ctyvKds54VdSvtAoLyypqkUdZ9uUM1Nv",
  "key15": "613dZSuH2Zmrizk2Jx9fN9WYfT7nmv7dMZJpwBFuVkjgiST1kTTeTz2aPgpW4wTLwRpdmVEEybSyezzhRm7HvsEr",
  "key16": "5mM5LiK79cgC47Ca8XtvM3tj2Tsod9Z9tZ8PYeqBAeWnCc8XqMJrwEWcdTkgWe84EgW4AcSrqa6dQHhRm4Bfh4D4",
  "key17": "ZJMNboxQdrBkv7PzqDFwvz76kHD7HmMbPSZteziUzTBwEJzVj6XhPE9Ryv44QYkJKFzm5QoRpZu4poYDYvtEUYN",
  "key18": "4QA4pp47KidkMj1C6HcPtrutXsjLhRVP9tviY6MD362Vny1oug1KvHSBBQqC4RqHYFd5cCfySXJp4MaRGJg2yD49",
  "key19": "Nq7N949V4YAbtbAWYzKdUy4WqunmTed4QzMwqiJaZ18n1ANTUz7b6mkW9FShUVocBJsa7zheB7cVzQUq2dVjHW3",
  "key20": "5x9dKX6s15HMPiubMWTm3gjgUN4VwvZey9WyeTo4YVNpVGtxHztxByS8faRvLpamUoa887wJ98zZ2QsL3GqdUY7j",
  "key21": "Rzm4USYbLyo1K4zFJCnBbSZ33mo5w18S4aehfBCYVjWQwBDdppSnF5ztkcELkkeZU7EitgptsRcG5mu5DFH4TfJ",
  "key22": "4uxKWfJ7Bj11wkbkNHsVA1gEoLpJSaZADThx3pLqDKbZMCrfjTWQPoEvajoJQGNVwfWA6QE1RUGqTpMDoFd6PNDF",
  "key23": "4sPt7bVUtvQKGC6iYhbAMMS8snEbW6ZTtJD5pCL5FSTafPPzE2jrWbRy6gVffKAcVJnXRyqBs8T9iS31v25WZ4dQ",
  "key24": "4dc5S1P4k4parsXhcsM7yvgtNgbAXE5W5wG6fT6fa1FNLkGMSHDrD7jTnP9G1iguUrrM7otQbnJwRKiqZWyJ7JFF",
  "key25": "2UhbQRig3tsVEeZv4FcHnZb6Y5wmNwPArAQam1L8fA2aCJXRpD7TPdNeYDTSC1H4q3xC5TZqfJhnRsqkvfT2GjpW"
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
