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
    "2seevc3vF2a2Eve9VdvtZt5DxyTG3R5AH27dFbsS8FV59QugtaychFp3L495n96Yv35QcpKDk3ymjGEuQZigmnfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38VcKmGQjjb6u9nEVZWkPr1xBAzZLCQc3Lb2H8RUHvCC27zMfpbMx2qofNMdfKcfFbrVTDSroV1rXRUob3EsCLns",
  "key1": "3QHGiBGtXBvT8FdjMSXYdoyqm1yTbnhyrsprrdpeXUNqo5WtZRcLqoQZ9c3XiG4AkmKXLFNPTU3rASksefkWectL",
  "key2": "5KEn78WjsPPCGTFGvkrTeQKTGBQPduNUvTSE7LU9aJBRopc6qs9YK77cuwwofV57a8EEh4vTxdTGCcVEm9pGC442",
  "key3": "5Zv2r2tjRQbUHso7x4THNh7sQb7EciXuNszo6MxzjcHht2HTBp6ZUnKF2VZB4fU6QVedwZd31gGAC52fU9J4j7zP",
  "key4": "4gQoTpYWfwpzjRmTRxYBVSu5ZqM1h9LnqspVbgG8YRGgDPhszLWaqP5GGpJj6wEJfgjEThkgM1HV3XzsSTi5QrNu",
  "key5": "3tLTrCw1Gvw4EHeYhLqL2gv9fXUVU28ZdTU8hNoDZLTJgvxW46cCZkMefQgfopS1vrBW9x376KZLDqyZKczj64Jb",
  "key6": "2jmT3MTbSzPc1HaGEsDFM9KLP2rgL53EcPdLf1guxvx9UPzQPXKM7M7sdGNeNRCaaEDpu2De7mWq45Xz6MUseCoM",
  "key7": "2yoqtGNWMFbEfAQs1bdScz5Uxq7CB78dpQHrUqCXNwu7ptg7KwnB9WPYRkP7SVhd3gqYb7NMrc6ovBdmAMksWLLs",
  "key8": "HqD5KCFU6jtDUJERqk48empAYFFajc5axYZdpBEGxDYTEi49VDY2V9aQQDEMgC9E2BULX4Td4tqXa8ENZRSJbJm",
  "key9": "UCnFWH9DxQS6HjE3ouNK17pdNdnFrqGxkUtqhJJE7BL4HYTHxzoy1yBLEiY3WMHeEQPiN62FvVVs5mPX1PUp8CH",
  "key10": "3J2daL7KnBNxDwTU2TBSxPnUAZ3MXYYGUvni9vkzZ3gSZFQgQ7qGhKhWBDiJng9zX9QzvJ9G9WGRa23R52kPRmGy",
  "key11": "4DVtgsAL8YtcexKTrgb7ACqaRyymSaxsJiJDTuSzpG7xf5euLkhQVKz6GRu3KzknP1bTgJWTMyMbrC4Uyq9Cw8Bg",
  "key12": "xFHUcvj46ahKKXte1Unh61CSS7WKnMK2e5LyM8uB2B2UVXbYsP8ZpDW5x9Nvne1ysftySqbwW6zn5jkrRmFtAPn",
  "key13": "5EwmXfHbqPGcJPJif6NZtD1cR3GqJuBgxHNEGyvtertyQp6hFs2LTKwLRvG7ThyPc5qHfAe8fFxDyrX5ggX1pZoU",
  "key14": "5ta6k3jnKgnt3qjFWYwFQpQpfgtUgmtzoFEjLTRSR2UA1vCDj7GCCDjQLVjXfLTQJzKucTp9FVkG5of1kiKkS7a3",
  "key15": "Rivb1JzkFWBx6DufxtduSrgJV7RYDMRcEs9jPkHmYpYxfYNruUBkSZhi86aC4XEZjuo7wRTUSYkNDFX9Ls6Qxq2",
  "key16": "3GHnGbYaP2rzEGU3EdpZU1dDjZVKZAi1WxP4E6udL3rGLYrRFbKQx9gQgrZL5Tr4gnVJPrFZwHFr5JM7wwj9bASn",
  "key17": "5Nq8LRycSJwG5mhLujVRoEoqs93rTR7tykCXpjA62U9RW3Gmikk63PNp2xoav8fRCjhhyU4G38hMu5PAPoNe1Hpq",
  "key18": "8osRj5fxYfPAUg73UuSqj5aFGbPNLNuiYLE4zrqTDxCbL72RZHeb8iVbJdv1B7Aim3w8JK6SD1qPdCpFhbfnUMQ",
  "key19": "3Vk7VnjZUjohu7HNbo3379qiPpU8irU6yhEAQEHvyfr1YX8qRNZnk6VsVbXGSBrSBdgSo8hcKiHsXtuwKCoyZ3Hy",
  "key20": "4NPPndYQ4i7h1X2onAfEsJnKXmQiwfFvXM2CUi6SdTzNs4ZyxfjmXPANycDcRRzuHqNfgDXyRCRSDGMZ4mLS8y9v",
  "key21": "4WJybPkuw3719NHY5ML8F4VkSWZcAnrFBn94Dzjoy129JJiKoyPRYtGyexyRsYxYhMB8veCYf518qDh2sFfFAzCT",
  "key22": "3bVD6N3a7wRgoMUngEXUw2t2q1SWLKs7mLF9aGWjDvfp4eNjQCxgBxh92RaXteQ7FJZoC5Zy9qq9aufYWKHpyX6m",
  "key23": "SyCqosm42DJUJMEACVF4gDnCmqoV18v9tnzHwhL6KqE5cmCiMXYtZ25Hus79LkNqGGUCnFcNKV3M8pCQThuMjni",
  "key24": "53d2weFYs5wQ99EpixXNHgJDRwsuXS2kPV3NV5Xpqqhd3FfEx2BgmWkjjQy3hApoPMwE2nteBmu5r7gtVTtyQg98",
  "key25": "4vwea7p7qq4H3vctAUSF6yFPAPHyaJYVK2cCZ7Y6T9ay3qX2gHxWnAJrwMnPJy5aDxquVXpaPLg92S4YEFFd8DBv",
  "key26": "3ZNf6XH4dnENrmK8n65fWXts5tdDACvpPmF6nnju9DBViVbAQ5dfjvQ3aj2LwkoGmfCWvnCirBZYLJnAzAmqnRiL",
  "key27": "3qeQSBW8Dy6SKqrnbdrJDm4x6JZCCorXJ7a4mZTtpaD5Behk2fQS75Ku4ciQzDQBwmX3TUt1MAGnRXeBiWMmPeMK",
  "key28": "DG7tAWXTvNpAiHL5FqXz5yYMNuB2sfwMt2ntmC1oLtqcZNE9ET9DWLypse2ULsDxCWT77GMW7wsca2fHfpYRMJ9",
  "key29": "4srHDjjH1n4DVTipWHHsHGYZJ2cLJJERwLrpGcoXL5fDGsGtEZUjzB5jXDTAfMKnsUDxFn93hzAYn4RrrpjrLhaw",
  "key30": "4ASTnU91NCQ9HCiLLqybwNPdkPnBvgXbsGbctq5ht2Kqg5kmjH4pbpSe1b9wkh8ZTic3xCwauumHmRRQmtur1gR4",
  "key31": "pdThEuS7wLehQ2VKkPCWBS2JKURS2n9AToep4kz2YUSvbFDiugQawMTqGEH6hAY4pGgfAp2G2x3po82kdxMJRwp",
  "key32": "3vbxbyXdQZ65XnEQyBB2keQcoxWtnessREWsvo3gDzQm2soQZU5hEkuJFYmLiK8axLx4AtG4FtPFiNNLp5XzVG7L",
  "key33": "4RsJPkouhc5Y6G6uxvYtacwmT7yDHrwzYASChbMBbgZnjdvm1vDc1u49x854D8QHVcDqU6JHipDR1NLk8sbcnzA5",
  "key34": "5QEXSbqwaKk92bScNKmHD3TjWjQzAPcntRKEPnB7bjQS1FxYKFyxUnc2bttyrdE2M8xB8294nL4KEJ114g6HD378",
  "key35": "5bbcqvbiKkZGwckU26mFpXQjKaF9n5MJAwDwCFgQmYDmsufe3ZenpZssbhjfHiZTY8APmKiLLgNiTU2s9y9Xko8T",
  "key36": "4o1p8A4gVEdWNCX1waTSnGWyqmL2hZoyrf15DTnjerkdDUpMYyQnAXR76fo4qNSiLt5gPpbvQ8PzQu5XBb9ge9Zi",
  "key37": "pfR8FrGBg3XDDxshf7NKEh7y8xB8W1BniqKnt3vwrEx3zwjPAPHXqN8BARA4ZRzYpwgZgRvpJhv8WCnCi6jAU2w",
  "key38": "5va5cKyhy732SQJEnc9FW3pAojTWAkBYgREZgWWi3b3nRSU8gFpyqY6dh92XAq4ZW8GMLz6AKSS2CKbMCxfAQm5h",
  "key39": "5APysvnNWCKgeZ96XijjHKmDFrrGNEVhkWjk9ceQ6g4wH7r2Bgt1gie9QVnGoa9Ja2eYnf3qQWMvtmZsVFCjpi15"
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
