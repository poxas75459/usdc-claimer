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
    "5fPU1gBzU66gSZQ1BZvDt6zhPSdcyA57txKp9kKLDY47iQVPdBYGcHcoymN2TEz9yqUwAJ2FM1sU74f8RdXbLwyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELp8dtdUbv91KrhHCQ9vfP2uiWn8s7NBpz9AwTgfWeHE2xr25Y6XxtaXJVUc1619JHQH9HLRm4WNcCBHPpveSCh",
  "key1": "4uiMF5mxm5WV8VKZRVD45gfK5XP7ThS4PWZ7f7s3HCTsP1DwZso13zXDvsEwRTx6HHuUjJiaha7X9v6aN4JZGYhk",
  "key2": "522tyDPXWtCvZTerhuLaoBBMLUVYSggKePP6k9qrkbS67CkzCX1bVwrirUoHL8zNbXQYkTR95ttkRMB43oA4z4KY",
  "key3": "XtBBQ7f1kDcUgjATHSKQdyWXv2W91ogTTy7RTXc9FtWsNZNRpNiKHUg6QJWuBUHCch4Mp8v1BhQ2EPfzLLqRrdM",
  "key4": "Mr4cFcSnrraSjqrvwevSCg9CtvkGFMZeBK7BHUqbt2WxE5LogJRuXi7uR5M7e9Sp4BDFk2y4kTnE7JLPJMa3A52",
  "key5": "5AKeVAE9a3qp6CxMKJWetrEe3Eusb1i7jhNsx9m3psRnB4aaQjxTXmbJyJC9YwmJvjm8J21K1b1iFdyBH2GZw3P",
  "key6": "QXkXG4Gzdm5SpgMmWsksW8fu7BBbPhsj1zx4SxbjgJPRaqiqFfsqyneUwL5aJvYNJtJSLDmZUPNi611NjTCKba2",
  "key7": "3JKdy2quxXoH2L7wLUWNABDKnWapxW4V59oWtCwaj8XBsWRMT2DW7eYEeT2pkJsVJyUFCmng7cRX7Gz4dS9kpYSh",
  "key8": "5CyLYr81eYsghujwmgcSGhpwURPpcC7naCCyZ76r7ojo6avTPm9etMWLrzQwjdtNZVHEKX53nYSrdG43zePy4r6R",
  "key9": "31x7aUGuL88aPrzRzogZZiHd9NhTEgYeqG1agL1W7KKG3NqZjYc3zAC5Pa1FgKDrrupqk6mZaK1BEJtQBfvytjPt",
  "key10": "43Eo98JUPoqdK3P9REjzVVwMkLeu6prXsDwpBdtWtJAVBaqJQDk6toZTwHJH4RQWkkWri8BYDbZWjd76Ai4ScX3c",
  "key11": "4wuw2TPobhkhB9qg1LMuDoRZEL1krJxdDL1bbMguWX2vzeNtqgWtTUGo4JgP3r4CxYqftcmP5Rzhbn5oYjeYuu4V",
  "key12": "3tjTuaPeyKPE4uoUgEudPxSwBqZpT3yKfMkFr69AMYzcpTuvL8PNt3Qz9ws1sfvs62n4Cw4o14cRduQm5TvADjgk",
  "key13": "2s1KMvq3TULmPniGvC1UjobJdjNimbH1WbX98gGLDTZFoYQUUgBByKdgcebwGxgo5cvRY7PoW1nsx6xbhR8pH4Cb",
  "key14": "3J1axDURy2kUX21cjkeaXcY3QyVXSXhV2t87PqnLzHFFu8SdM91qYBCje9U6o36kSwy7EyiMKcmbFKXrVvrp4zzm",
  "key15": "3NfipLp5f2c8dKmjh3E83VwhM8d6GRYocMSSJY7PHpjgBJzXQTPZP8u4EKiyWVnAFgjhBhdLX8h7uNzURqNnRZYm",
  "key16": "4ZEc9bqCtcmHFNyKiP5nxJJKsM4FDUPrfuLR6WmbDihqGrygZAVB47Y3y8imFqxf2VGDtpzZbEXcvJTFCQ6rXbs1",
  "key17": "3dCM2dfMpNCDCs8DLsEGc7Fg5SxmTGy9TkvAZLCit9SKikA8n3ybF9mpjX4gq2SFp1AFHc6RzwKZnWCGdZuRC2wV",
  "key18": "125zwbf2PK6dDXsBUJs5C2wYpCXFdmRFtGdkFzzJ4DprtjShDBKoQoJG4VbpTMaL7rPxDkeG2vUocCsuZR4ewaBP",
  "key19": "3hTxhA34ECTWTf9xEnPjBcBa1kdaCko5qSMcw8hz9mEnxtPDnZwUcMJRuK93ysCMt7Pqys3bUS7Yb9PswXC7WM2D",
  "key20": "2qzYUJmPeZ35uonX3WRzDh6N2xRaFbynsromyb9TFi2yKLRzheaJiXBDg8fGo7zs22nKtGjhbPQenS6QeqZczwQo",
  "key21": "4P6R1k29y7TaP8FJnorz9NEjZkuoSurUAGERdyzurqx6wz3nRTdqbeMtiRk4MaZCWmFZoMTFCsqjsHYguLe3L3QL",
  "key22": "5AbLwLEiX7g8BT1P21QFBvqVUnzoSrqy4tsEfkct6Ds2vDekWgfqGnuUZHsQqbWgXz8aryGVs69r9DEpgW6DvSBz",
  "key23": "3GpfDm5orn6mpduCCJbMbquhNTZXfXcdM1tvmwwRTb7wuX5VFYGEeRdV7KdKTUqEiwJiR7DLU82SVVVwGFyERwZk",
  "key24": "4eNizq3eEkhYNRP6ZTeV2mHDzq2YrJCcaYQUGoxHyU2UeJKwHjqhRYjCg1CtuiE1FVJu8UBMVQToyt7a9YJU2rjt",
  "key25": "54pP9KXoGxMYMb4WyA7uLGfsPV2nd64yPUUhdffRgnAn5QB6YRBUh3uQJ1smiUam3v3HRxRK41JsbbbBVLK6Qriu",
  "key26": "5F24D3GJzLZG9BkBh8JHc4V6rdXrutn5shSaSvV2aZZSFpZRRo4RH2XbiVA3azMcT2pcm8B3zFYyFhXHh5M7wTC5",
  "key27": "5Y3Vi4r8HbYpoBUHt2QdzRg3tiJZSb46WE7YbQdtojBBB5enUmMQdHJHfCBm9cyd23bLj5xXsRZq9hGvgp8jkJrw",
  "key28": "43sEw8FKJ4bvfsG4UqXYGHWBhtJouPsnwSsdYniUZW2EchG39xjBvRUP4jSk3doSGP88V4n9QNipZC9t1n8yJhxP",
  "key29": "j6ezZwNFfkvfeCyHHsvz7mYBQR94dGCL6cZ2CG8iMLJTGYm75UWCJgZJxn6GsWFubQhAbrtLWZpFK8UGaFFNrx5",
  "key30": "ojK9M2f5Tw55BLKuzQmq7MkEStDwMskRW9FP6Wdv9PdAryH6FaTEGC1WnnZcR9cRvzVka2La2QRziscpH2kVsyL",
  "key31": "4wpxa83KpRFd9DGBBKYE7mCrniq1WS22r11BSC9AJJrtKKYANczjS2m9wijqfuN1rLHhogK5NmhSWnGSueqirTV8",
  "key32": "2NDuo6pL5tdHpSYYiXKFRTq8WsBvRzDGhRUubvbG6YzTuFKxWJ1GTEZRf8NnGMf3n6u4Vg9HahBHRNv4o5EAd5Ad",
  "key33": "3rjx5dehnBmGJKHdcd58ayWCd8zFohNtU4LaRyF4vk62DA8iAQS1BuUCZ38TFejM3fy4d1Gkr55GHFqf6LZyyEgA",
  "key34": "4zkHVzFDuQ4A9mDyDQXghCRgWegAJ813F3wrepAVuufjBJbtCG5Dpgr6FP5Uwg6V9BMaaxsjKEiQwJ8iiP7poN9r",
  "key35": "QKzgDc2Z6ktod65KGwUVQWj5yVSdrxF93FbzkyD2hjFZemWT7sCcYAU6xZXDpcYZTdiu7B45Vb4EWFfk7FaJduy",
  "key36": "3xsPs7pYXnQQdcXwrn5rVwgyzBX8UJZxP1jrTTbvv5DU6hU8X5fJgVJ9Q1w2cfRFYQT5GcCn1umDULsxsPaJTrZY",
  "key37": "5r5weDBaKWW4SJuY79ff1b97ntq3i72foWnZujaaoVYXGAR2cGSHKhYTGyqgnTQQz6oodtCw52iDKs4zjhThYkdL"
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
