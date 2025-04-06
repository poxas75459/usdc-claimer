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
    "2F5cvbFe43H1AZR4xzG5vdHa3KLxW1aNEve9zNSjVuJod9mgkCzQPpg1v8z7h6DF63AMJHGzVFyedsMaAXhq7wTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LoovRNCCBpKjjtuNbzDaFrbThp9Hdrp7agjG8NCmP9nQJ1YmRoMWrQxCyMFC1DK4SK9xo9pYKccPjtJ6c5LUGJ1",
  "key1": "jMudgvrc7NP6Ke2JgCwqof9zbctFKYyCrfzataQn5jZDSUPZhveSdT9p1yWXwv3WGsUKUy5wVQbvuvf3tKWsxv7",
  "key2": "uAUMZsUXXvjQkPjweFKD3dreT1e2vSyoENkD4JnFPYmuYeYViEvcWGC7QdXpiBoeKDeKeNm1wwmcyozFQHLFC2U",
  "key3": "41RWGKJad9Jf44AGHbpKogQRRuSaPNQs7nhC4YeJ4UZAR6B1Y2mVspdwKyATWdRbjdaY5sg4kTbAZrjiVxGhpLaH",
  "key4": "56AgrsF5VmyKAPLisrhZzENUGnB4FhVxBV1nFcqXsg5EZ6pumGtiZu6n5X1ZTyLveAcGQhKG5wSzEqW3zdy9waLu",
  "key5": "5pLUwPh3sF36ponRBRGb5si6MfLmiPCHY7vqGcL9S3tV2gY4o3k2k9yJqS8kbgLwo3KJpq1pSuFtw3fUSMScW8yg",
  "key6": "5MP6mHaU8jXUwJPfgRUwQu4zZ1VgHeMFGUJHn17Xjzj5ME5Sn9sEUS3FZnQeQYxqaTMLzP6gBhkzCsJqWpWYekTT",
  "key7": "4j6ys47zQHkpJUnfSGA3JpGCrqVqS4UFUoXF8P2m5LsqdNNsSzwXNAr9AfPdPKxdLGhauS43ZnBsdKqKYkTzTu99",
  "key8": "2b9ycYq3C6APHkYwDLHG9GvhGhRTc8mGMVwFHfxqNKpiPRcZeJbYyqqt1PDRuoyJQQLRKBt6qqMWvgwCgBEKX9eV",
  "key9": "2H53LEPLFjeyXkSGVjuZhoxHYGFy9AYthmraCU17B65HP1nP6DeTrmDXZRhhAbtBSbnhnQYPkX1CV4kH6QvE5jXG",
  "key10": "36UprMFMDHaEz8eS68LmkdY6wX42nxvn2P9W5aFjLTADAWdqKhKHQptbazwRK5PmXSQjbCHLDZAokmqQACTTp7aq",
  "key11": "4993hj69bbEeMovQfZ1jFurZmxmrjdsUSTMgWVRpzeKU66tKd8zaTft39X9Z7MEi589zcUZWpgYZYVUXNEBc4o8v",
  "key12": "2Bkz67GNjpDy5koVunTAMjnfCMvFfaLzvWfaHFFbn6MoDF8CuzUHfdXgb9v1PmK9KupDCbp8YmP7q5Lv6sEhC1rd",
  "key13": "56Hcx8NSh96dkkSo7oAhjrKX3azKm4gVBpSJdwVGURHteTkTJPrYVgu5zwojJer3QfVQcDnQ8uwQGERs5AAe2Rhr",
  "key14": "43CVubViyfy5yVvtVKGVHVKXBvYGTjzN9QtA9YJ2N3YzeKAJM46WtXzsfmd8MznNdLQhJnZbaMWJxUbaZjQeprVB",
  "key15": "5p9tmJQcbsbbDUNdtaQiJyPhEMN18oPktT8MydpBYDf2tRNT4srrmMqvsprZvJqz5SoqZV8fefczYqXX8JTUhdBy",
  "key16": "5BGsJStm4hRkmV5pQNasrrmv3Ca8xiGS8ssJnKdKqAF2yLGi6pWbLjEfu5G3qCteuAMsUAn1Fa1LLyf4yMakzQcC",
  "key17": "5QCPXY2xJYeabBwbw2Ek9w8CuJR4wwhcXTkEWQmTpuiEr9BUCxnjruwJGToZeFZABvG2Wd8Qz3TEmsDHbBan41sv",
  "key18": "5F953MrPTK2Go3M1WZAqAApRtMyTLTbjQVKm8X5choiDyqTLpu6ysKTt1dMXrGfcLNeAPTjF8GKnJ6HiWxpScvhh",
  "key19": "4MVuHW5221a5ReCSmhuS4ci2Ljak8aVZj993Xz5pzwFvijZffHdeGiMXswNm3uiKREuTJA4Gd6syva2Gq8JykJcL",
  "key20": "xj1SQqDxpqi44y7Q57sW7MvifFZZ1Us45ufQdKPS8Av24SWDbgnC8MXb7KMCKDpAxGdhkL8zagNAVUrboggxQH8",
  "key21": "4NVsnNdh3r1mBa9YFNEaLVWizRvpD922Xg393HkfWD4mGTg8WYRreAtVBacqJ56QfWP2iNEQ4TinoCtutwhGX1rz",
  "key22": "4h75yynn2r5Bd14vG8Jo8gKrt1c6f37hvZfEkuMzmvmMDjCEfpPWgx3EawtyofCoWTtUpSxu5PXKTnosEh3ghcXK",
  "key23": "27YF5QmrzL6YHBaPUZSQ2G4UT8C524tVQPw3YiBw14YTdbiuiKdx7GwvmFSEiFL9c2quCNwHT9RCpcSnUc4LyVcJ",
  "key24": "41q6orkUZhG2uzG1iKJs5Ltm1Z2E4AvUojjb49yTEH83X8zY6i7Xj24zmiTDtTbhXB7RPgNxpEBqa7buSLywhZss",
  "key25": "4SYFzU1kcfZXd3sWDSL75BZgdTFLxUtrUnhxKpfvqGK2Wf7snRjw3NjppdTECEGAC2DQRx1KBRTpP5VidyGY7dvF",
  "key26": "4vn3oqBBZLHtAcRmFoKsL3u9anH4uTbCRNFBNBcjoMcjSz488oSqv64NuGvDhF4xVsPqNJZeFZCjRHEL4CNRE5F8",
  "key27": "pddfTePBUTD6uCVLq8LZMr5EWqiHWUVC5b2ZNPMDMnVHcC4VayTquG3Gaaw2eJe744Eg2tchbgG6dQDjt7QyHn8",
  "key28": "4YLjfhYrd6gnPiRPuN3SKzgzrsE6UyMih9dgH3YmWp4eEpJQ1u2ChZDLfnkzBtkgdmZ2KCvb9bq4RdppB3ePMwr9"
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
