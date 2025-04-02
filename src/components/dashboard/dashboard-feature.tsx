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
    "4YQLU4YYvKdjgfDwfQprSna6MuymPZx2VQXm1E83MnMhJxZuyrGN3gzXjjyQ6aGuukyhiUaFb2U7WqSYxKN4ysxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zQNDAJQ8Mv3oYU8VVYFTffLAYbzRDQmm6ZQUu6RvzZvbvNXbTzJ43thPKBsMNw3VPXPik2dARKahCTZKYtoUU5R",
  "key1": "4vG1UwYFyrsRoANDTEsZKeYPuJ959tsrDaFJTTCJKw5i1NidHwLWAdjLQi1xfREvvcBKFF39Veh8pRnr8pX7eGqH",
  "key2": "2pMmzF3oSs7gXkuKrVHXrhsc2oLHMW8aLx4PuASZXgC91x3UStGU1pU5XtTHJVHkzMePkSYTMYN7c4TzTbDSHyFs",
  "key3": "5Kspww3Ro8whywKC1ysj6wATouP9U8Wz3E5ySjLyn9ENN9ZXKgosgyTEp7mpESWTfMPhvkVXKgu86ZhVoefpnGCH",
  "key4": "4uymdZwyEsDSY2AeGfLHGBPMpPaGPQ5yM6g9TFQRQTviDPV6TBwDMhxK1SkcJJcxtiQPm3JZWVFZzKLa7uamYnWU",
  "key5": "4RUHVVR5YEnjndYJmrYSDbtq9FLnAyDv44s6RDUogW71bjt3Jxz8TKh7QM8AnaQaX7o9CgJimQ8g4B8xXhQugeTS",
  "key6": "5PRzQk5jGSKVX9QLuj83zn6drFb5Na4WP7sFVBRc2HWUe4MELqLNi8Cir7VtDFofGpLaiYBqCCkwUvKxAMcHtiHk",
  "key7": "4xJcCjB2nBfWDWbGmU2L3qDTsMYT8ojQKmMqtM7A1zasGFM3MdKEjVU88rNjq5i4uN87LAdHdgjrJFD6wwvDnQzs",
  "key8": "uKZu43AYCnTU7rmepy4qo1torvDTR4bcSaUwNPBnkHPgiW9FgXJK8zz4PKPRcaiPwvhvpT2U9rPGJ6XqyWFC8BN",
  "key9": "fGfJCM3eWeNERVx4xDQmTTgqBKzVFTiXoQhb6F6oX2uYnNDRz9SBok3yoYgKA9xiPJLCEFkNojuhHSUsranjTYU",
  "key10": "2b8gGDFBk46YgeLE72aVUNjszSgDD1K1GnLHuZB6UkfNhPnUeujZdeHW8W9YT1CvgSumjQtMYiTeBtJ4dCobzgVf",
  "key11": "2HeKPymSiY3TBrHTWWTkvZjtBCCyXa1r333bwJAXqNRCHKC6Hoq2zP6BYwozrG57536u2NQi1LECsD24q4sgc6Q1",
  "key12": "3jJhKcxSAzNT5GZXBSc1fRxwDVxMtBowkJMmYdpfGgtDJdWoEQHx8yR9QaA2mYFB7RCTfRo9noKB1dAvswq2c8H5",
  "key13": "34qryo8i9MYxonbWWALN7w5TPttpGL2vR6BjJkGQ2StqxUkkB8KkZPfrrSeMY71tcAXpGGHy1ST9zdknCE81DvW4",
  "key14": "2DboTjx4L5zmwrydnikVyvAbmnvNtPKkkZV4TGrdVUzoPLAS4sayFpuiQftqWWK7UhWj7tt8a1rQ1ncCZC8UjSfp",
  "key15": "5siZSDKS36E3afmhjG4Pai3yN85XLBoPnSxuSGhfzypbckNsM7zQhZYE7sPqmZsmrs2ftgc7cgNf8fcqDPL3CLdT",
  "key16": "4RgL5CER1o7TqqqXvCaVCavKWVNtGtpkbDNmtXVwWMpm9P6vkFVSr2vPc9BNAiFVJbVz94MDThrGJjpjwhMWZxQi",
  "key17": "5nf7q5km57iRWtawWnSC26FuxEJ7Hq6dttzTpN1VLYnWVB2N7ppAc2yQq1cB6dcwHQ9ieGMPDQdxoeWEZjL1F4EW",
  "key18": "P82tsSzTYgStuXNcwYc5vkNWjWBeHDWq3UGSiVUoEfSgpZ7cUQFTYVGLMTGuKGappWGjGvMho2XbuNmDMeAWn83",
  "key19": "3Ek93QxBQKt6yLjxtBxyysstyaTWGSQhsSFeDSp2iNxXp6XYGRNTCxiatXt6gQJEbTtjxfhVzPGUgmZZrjXzySif",
  "key20": "4fxv2pLQafoSKDRPagCiyDBTAcskdUCRtDZ7CioVqU4skSws1HASgwQywUTw2b6XpTbZSwVSHdR6mhQUf1nmotFp",
  "key21": "3ejhbhj8rnWxg7yMjoCYQ5kAXFtMHXBGgnDGTmXuBHbox3NpvscWo6AfRREAMGJaLgMQqjwUk3irFYmHriMmKR7u",
  "key22": "23NZ93APRZ1ntGzWh48dYWyhahgGiQqtoHXeyMKv9dEbcAkQJJcjSVuHmsXLASCJZMMRDbwMLZNRb3zLYzjFWd8d",
  "key23": "2Qy8U5aCLGAF8vee9VbS2e1YppfTRVQsvZsfDY3pCrLKRJKgHLsZbQa3XSVhJUrphKBhG4Fex75AtPxUtL7E3mny",
  "key24": "5gj4VoLCxpRA5EFmKF2PBg8qV4kugBYGnsW1J38fDwCNRJqqeRSYt5YNaA8zgMupkWPPQfJYTQK6s8zj7zeep3rr",
  "key25": "5zTRYVernFyNVEFmwyjuqxdVnR8A6UeDN68Eb63G7Qqn4vZCMDkCxutbdEy4jEweW7jnp74sRCE6wCtpUTDZGeDE",
  "key26": "DiTx9sMYuDMBTGq5xw1RpZKpmsmAbNY8krFbAtWuW2AF7J5rMnH1iWqCnTeZPe9qZi7xiBcAgc2CtWDjx9ogpw3",
  "key27": "5pJFsfoHHXsTgqHBFHa2k7JDQpAf2NBk4sokcwwHaYWiXRUGi2SGoSTuHHUDYVnrL6wobMJyrWrkVUruw6kevcUv",
  "key28": "BASRigHZvqyMBj6smFLehh85gSNLxebQFPpCbJxihf6aUS8j3tk9BjveaAWzC5YUfFqDYUjS4HzHfnMQfJKmnwX",
  "key29": "5fADzKDiA2kUGeHucLMxDEjWEAW8ejF6iVEY2EKzny62trTY2n2A6qSL1WdCADcSyEQ9gHcJRcymGVUV5fh7KDpV",
  "key30": "5o4ioemrx6E2DLsMAFpBbeNYezt8XJup5yqn7LNtb8SXQ21XeYt2NQQ13rWqn3B4fLE1Gv8EoQbdru3PjxUFFn7F",
  "key31": "4SA3FGVLWias9bdKjFZcpwLdAiP7Y68W9nzjJL2Aa9hKoCXBy8pAEor94tizAbcmFWLRhbxRTg486pg2ZiW93xh6",
  "key32": "5jGEizhQ3xRE4N1mTgtVQ9DgqXbRAhakBKb6NbzURaxJ3GhnJBQdscbDt7WEqJwSSZ1LUxYcNAVdXdcZ3sCpsGNh",
  "key33": "45ooRidFkoA58paYzZncjFmpdeqZcpPH1Jw7WGw63G4JFN6jHwzTfq5fv3xgMvmD57v67JCHQYDL1PQ9iZCAVMEX",
  "key34": "3SUuTYatE89H7xSiSnMk6DEP7nS8hwp4rdT3zJb9C98X8JQFktn346nG47czDac268HtcEsUPosF2f8yS4m5yL16",
  "key35": "3fPpRDHHutMr7qEDRB2E176s53Z2BcaAJW6UN5HfFWJVeeLcUbtUNeZZFfj4PdMAsK5aXKYSQ4p2cQRXaSQtMmki",
  "key36": "2qYDdaoLQwH6UspYZ2pLGnY8PUVJ1ymURuuGR2XUQtgp73TbjdUXjJKNFJPUKGHjempx4KvjJAdp52WXF9yTBwiL",
  "key37": "5YvU9yk7NREtkr81GrQLDMu9oSE184eVCW8xWrNX5SeUA3tL4FzQFo3eLSSyj6MPvjyVvMcXiBx1dbgtxPHMmLg5"
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
