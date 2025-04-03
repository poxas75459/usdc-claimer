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
    "2uMxMt1WfJ9NrPThsyhR686fMu6R9c27KBfhSfTtrhPqLLYFSEaDwRjbjEwsD3qbypAVMAqY7AVjBKkbdRJLCQcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sr9XMzMkx7BVzou8ayzmVmDzqHiW1htZTSC9ErqUzpaHo7vq2U5urmeyyMymTuDRALcLSsvZCBZXwQh4HTj1phN",
  "key1": "2iUoWnADZjniPRBqqZ8ng4tsGhU1T9ZpiQ2NT1CYJxUbvmx7SquwSjnuVmLuGGp9PJCLW5TqHEjayvdrv6BZy5dy",
  "key2": "2yVohb6KKoumGDCAsQoimwyFLV2aM6GtwLmhdTGDRcnk4mGQpcLbYSAedL324BWGAA2ap5hhw8zyLGwpGLaL84eR",
  "key3": "4VMMghzn4E3xoqy4F8kVd3Mbnrnw4qvG9jbaa4Gk6SXDQjh7RLKaA1Yr9Ks7jZncJ1rftTWeS29R5XaZpLyXpJ1k",
  "key4": "653FtVucHzTkmJzUTrcWsSC93VXTC3i5A1usak1CAVttiBEVtH78fpQsmJZpqhQqxYXR2iS3gBMW3ZLqG1tTFKy8",
  "key5": "QyTLrJsKSdnMxD3BAZWqPZz4HXVhTm6CaTHV56TwvkuFkyiDeT6gfNeT3rKgELVmrcTy1nbDUEpDiwFbvWWTa9b",
  "key6": "kE9MRiJP4N58MfzY1sMwYuqgvaiZ4ebatCJjyw3qoBHmqTfSMD5pquRBH47sAfsfcRE6BZk99U5uYFPpvrBhrb3",
  "key7": "4Ghg4WofyxKDD8BW7yMXhpyBmdXdYwrtDJHp8nfpxgEwzC562h9joJRRaZYB6QqvaiVEJD54xua4d7dVP33DRYXS",
  "key8": "5uc1wUFrLd4Cx5wnKgmG1vsk5zJCZnEVH8KEikwvBe3xvm72pMLUuAhpDw8TK92yAyQvzRMqx8qZ2SZys2BvwdaW",
  "key9": "5RZS5zNNamYnsdYWucX8szNFLUdT2SNCKXN4mCXXN4QZ7wPsM9U15m1TiJxM1Jaqc1qVMBhf3P2sFwjGpEg8HRnB",
  "key10": "3eat9jWg7bjvVdvaYzwAJUboXdsqc89uPd3dneaUDXDoQQ1yEf1NcWK33TCQgXR6T1jmLJDFVHNZdWCMghPGdC1i",
  "key11": "3ifgDTHdt4LDkrP3j6WygnxjNBqqjHgTcRdB2VK6budS8dmiXt9McXbtJV6rX1D5t552gjzEiKa7wpxixiaaHWvR",
  "key12": "5EDzirx3tUUtZuoyAWa7GYjfVZTGWBEKGRLPJKyHLMoJg8DERG4UHpq6SRgNcXMUWttUa9FMKVNKKVvhTbjkQvLx",
  "key13": "2NgU7xbq1dK4qBF2AcKPp5dKrkQep7f7rEh9WF54rnVrdUtbJLhJ6p44WkM2v25pc9Yah3Npm5wqwtfZjymu3jJ",
  "key14": "w2dYK4Mph177TSScDkZdqU7q1Mjee5csJaJNLovv9cArToxdpXKKBq8r6H5tA7hKeiNLLftdusiyb3NvoTKdtJ9",
  "key15": "4y7ABGDdLTa4nCZhUcevb6VasmVdxCRarKKUZkrkj4bTbgYao83WkSfnACA3hyrDjt66gTJ11qHCrZFcqoHyj3rn",
  "key16": "bkzsYqkxjksWh8vvYjegzorjjzJuAoSZFeK6ufmBoKPczaoiD4rGmdHMSoSosn9gw486QgmFskC6ip92Axa6hKM",
  "key17": "3Z7Yd3SWXL4WJgQDJDpbXBnwSZg25m5ewQm5Pu6Teyu5gbfwYuhRoMSbntgfLxBtHJC245mXmLVogy5Gyk4szkQS",
  "key18": "5YAEBMxw7P4R6bX6AknZ2Ed7mELLSTwZs9A65c1RMpBoRzBzysAKRw2FpLWETDk4DDUzguA2w7CAh1vhRYvuceye",
  "key19": "4r86Yuc8whYyd3otBkZjJALZnj41QjZEqMMhE82ixZiQizmpY9m34KEfSMXTHTkZhafeS5gDS9HQkcbb4GUN8j8g",
  "key20": "652tVGSzEa6YDuGQfYkeGm9xJESSNiqpVRRQ5VSdmtMFokkEDJHVgX4vKbQ3FDEH2DMzg6243gjZJ5AMuvr4sWDP",
  "key21": "2oLMKQWNMzoqWTESXE1ZNzvXkgUZ6drWYk7nS95LXwkWCPHsAJswtqWCmb17uhKwRWypGHukYBKCmubPqnXSUVsA",
  "key22": "3gfUjK1QWsiKRhsQBa9SWvgdXtLR6by6aGyxJiT27Zpz52rZjQtPiZdMGKyKetnm48FQZH8KcZGLwvC6RM7J8XSp",
  "key23": "5cxJTDJcjGWU5Lv2vB9jfcSDVqPbqUzP8aaYRedMrr7vapKyZ5zXWLoKEVog7CRkd6aEzvwVAtD4zv7SFYfVHgge",
  "key24": "36BMyySv3xA2agkxpQveoGXpGqoZXYaANnKLHB52Axrnih6yiT6ji4oUUAqYznk3qU8Y69BwMM5P4KsfaTTTNNyJ",
  "key25": "38fCQZCziHy1XSLCmyESwBVn21WyFA1haSuDChUybxLw4eJi7KD6EyCJotitnx7o6Vw84AiLtBSnX2ELteL99mLt",
  "key26": "4ZSpjYD9MD974TA172mVBYGs8khJft7XbtDkkVCujPMMGtqEN6mVxgbCnPdh6igphcRt9QR6QVefnjbYCmzXwYoB",
  "key27": "3srbcCvi5KyGCVvABsgbhdKU6BMW1SgdYwyN59zahwThwcjzuM8ruSvYpidiMjmGQ7Z9TFXJo6dEk3yJzwd4XBPu",
  "key28": "3eUQ63fgYo67fawjcG2UA688ikBTsNKuJfYBk4i1ka97DYaS22k7u1e44rJnhipcq3KyPJPnMZoR2uLMJBtqprJ3",
  "key29": "52PXKxvrWw2ztXJ5ha2ezeoFdpY2tEyM2EH4PLmjbj6fKnX4WbPh2drsBygms6i5Rtgob2EtiA6Ytg84jhE1LPZD",
  "key30": "iAtz4Trkh6b1BK6j1ejaWz1uMG8kP4DyMyK5gSXVbsGX3iPvnriuw1cx2n5vZvJVFMdKmTVz2woQrXJb6VyFkmW",
  "key31": "2yumARYBmurhUN6q4uscv2yvMwP1Sn5BUkmEhKumZYRez3uBmBTCpuRMMkChLGMN1XBqH6RdxK7zx8bsq7SQb9K6",
  "key32": "3h8JyLAS5hB5oBw5sUqhs1JKWSuPsNVRp8sQULoKhu9sFhnP3KTDVxHECppo3yQoAPtz6BWGBTN8nKB7KYXC5ZJR",
  "key33": "qfj431Vi3RFH1SCsPQZasFZzfPaHiJgBVTjmwhnvcLbkdjSnakLdQdwxHJd4ogybke3yeey9AW2gycdAkExXUg9",
  "key34": "3z7ejUw2KF3norqtNjiZwPvq7Q3RyyYxvhJZFV4faWjFBRX6t6iU8SwviGYevCKF9a5d28Ey7FvseZQ1ma9dup2j",
  "key35": "3qkKvXuEo5k2WQjkCEyJm2cVN8CJEnZu7MYMNtLdZ1Ls611d8KvwCUsDR1sQJrh27BqgzoTZi1m4M3pQZmzBW48a",
  "key36": "5fCe29fNFn9BZW5cPqY3QzFQXbwa5rDY9TLd3KzESepNQKsFCCRwWB56wS98kgbc5iDLHVJ3Bj6HWsonLy57dCN3"
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
