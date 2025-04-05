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
    "SZZFNd733GKCkDhSBYTCdDptk3HZCzwHdrZ5gnMgF4ovyzn2rS2KhbmifRydnJunPJ8rsSXaq2kmWTB2rNto1uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1PXB68T662pHVz1HxyaRUH5X5hHvRgtVSJR65U1xhxoHdi27UeYADpmr1XYLQHYrNjUZGjLtUNFAgSq2PSYiwi",
  "key1": "5dcXSeyeH81hi6KG1K6wnH7qTHhjCb2tf4zdqf833LMBDw7vzodtvDFD9Dum7iTVBH6icsR3pEHRJabwbwEqbhLu",
  "key2": "2WUf3kTjRBb8gq9sysZtUjt3qa2k6cpaydT2kCTTifJhWgjTFrHH3p2pPRiqwqnjZ1a9YRXGFTk3CBEQzR58vExH",
  "key3": "5VrW9YeoGeuqgCw3D7cxy6mp4ed2E2s3ojSvxTPL4NAmG5hBBLF3dPqxjTptwdHjARsNxvwwgv1BAuhvMzimz5n5",
  "key4": "3ZAn96fAXA5igu7f6dU3xoKXzB4F3yCH8dArXFtPcwpmAgxgoYmwe2TSrTcWonv4YZQ5HGRVbK2UuujabLATPY6u",
  "key5": "vtuG5sztAvoBbYzMGSZ25We9cRTdJdPWAcdfxnSiKb6V2NCjLkwGyvNpvnnfD9gPR9FMZk12GJuQg7A81jkLskE",
  "key6": "4EneMk3vFRwVDXhJHU76iog3SkJctUWZ4ksLcy3kF7SzEDmcW2WDazNviNtXEfRAUKDW6TKPjRybb3J9eF2uBvwQ",
  "key7": "2o5tTyjruQGVJGR6vJxxGfqcALAWH5YxaXKUQ3XHzgYUW57VrG2KUwTpXgBXh1ybD3jU4n9GSsfrjgxKHraNGPM5",
  "key8": "2vQjAwYLMVLYyigL8FXeR4WxMjKtQPHWYB8h8m2Xgk34U45WXvFEHmw8oBhgJGKCHeAXERdmCzk1hwhtLpCHbs2L",
  "key9": "W7YpeJwcjR6UjKfcVcUD4YFndTbSKe9GFmzoMdRGiMKBsDDyhmXWNdvTndwXaqcdXEjY2KBXrGiN4TeZtMf6jca",
  "key10": "5mho2abpRP9aDKPXqUhJ59ssqMHvJFBBGtrEMcG2sJNtK9KViLpM8UCasgRyApm2eo3UVrzFe4SzYKvKEPuMSAoy",
  "key11": "3onYPUAAGVpUL7NKHNzWP9hb9vequ53nZdpm26qc1kXKkZhCWckwSkqDqJTjPDKczF9B3Pe6ejjkWU3ouC18CDcM",
  "key12": "2ZQPWTVCzrF8trvujNFMwAyPj9dBgeAvAzsXXwYH1jQUTyMnX8QQoWaxB1vxoHGGBLNh2y3jbrXG7JBPtKxVFaKB",
  "key13": "2PnTFKjgWnRS5wjnXmC7zHYBsu5zTXr13LW8SGzds9Wujj72kVsVZsPqJ6CGzySiQbWmFR8A6twdrRjXBCAddR2G",
  "key14": "2K7MGj5VvKeoC6qYHQHqt1Ldha3bvVEpgWk2B7XHhQXriEvWq126y8LXcrwHqfsB16AhEqFi8jmX2Kp4NAg1wDNa",
  "key15": "4FByHFqnBQQVKz2PDm9FAJXdkSs5biYqe5Ehqho7DYDbmXezAeEmpFfB4z4RAtGcoUCTkFKvPT45Kisshm967UUU",
  "key16": "2qcc1Jw2Hm3tvrn4qjhHWuh8MZFikYZ2kZ7c8X3nE8CmGKLmn7boWdaAT1WC6yb3hgQH3DFDyvYHTc7Ht8monjkT",
  "key17": "T7xogZivFM2s3NZ5nHVzMjF8PZNJiqTeHmQ8zNYBNWvQMABMrQem8GnccUx9DPeL1yNfy3dTUFbN2VRc4nJCGBr",
  "key18": "4KzVJisR4rLE2ftfRufie54X7JJsZe936NvxCgzMgNkxfjzFXzQB4AaHTsusPC3jCariGKsgd8xoqAhcxXyWHiyW",
  "key19": "53oz83SafJKnWiNMfNKHeZBcftvnMWM75QfeFEQyPQCH71HDQ7xgT43rzf1er3oCa7D6tFWvru5Y2twN1LCc8jJF",
  "key20": "498ksys2Y2WZ35S8uSNhwvehsmuJ4LpbrKQz6pEBmuCcSroyqDj9eGmwR3bzPnRNLK23VxZYxP71Z3VsmgvVzwU6",
  "key21": "5opQnywzjcUqnY7ovUu6priM5yaoR38mXGP58gGGTQzYT1SvN5ZqnE7iasDUbFW5ogFji3QXf28BgTH7FzM7sqdG",
  "key22": "2JH7rqrUmQuu7vdK1FLtTiXUNKCTy78DjZ4zd8aYeJDioSHPtLSfPc2iRzw8gyRiSqTzKbydB2XzF8AmbuHe3wuW",
  "key23": "SdJy1P4tinoR85JMSEv6NwNfL6NBS9iHCMiyMQqPiu4gMTQvC7Uw4axJUwSdkQCru7uJrAiMZVKxmqCtrgvszQK",
  "key24": "49w4sVp8zMgdgzsYoAQBCRQ2Ecfm1idonxGLBddH3zgNskbMdp9u3vqeGGXikzJmHqT9hBMY95VahgkAt1k1wn7H",
  "key25": "51KHNsQyT5oiZ8Ec5pvMkZ69Ymr6xS5uTRuDgBHp9JY1SBjAS9vAEpaee18g2CjxcYg2vyppzyxUca7FgcA3E1uv",
  "key26": "4HjrE2bFjyHhSugdCnRRMGkyMrSsU812ynYJNfiED7PYHR8pXn9XgUzUrVq9DtQcpAU6Rt7mTDizpU6E7Vbv1XpD",
  "key27": "wYUMjkvgyQebyKir77RJraZhW5PCiyaZTNGgsYk1LDsigv9HYyHRkRWCPJ6KLBP7Qhjkex6DTM3P34w79xjS74K",
  "key28": "9JE3GyqJo4xuioazqHf9qqzW6FqY2dA4JjxTy5pLPV8r8bC4PiiRBRmERvs4pTESf8y2bngQyzGGeJTiCApFCxW",
  "key29": "5VDzuFy6ijmoZC8x2fgodRXwtWSCZaXFwH59w7iqtHrRc1eR2egunoYPYCeQbRWrBVw9NpKmZBkMs57LJdj3EMew",
  "key30": "2jPv1vE8FZkkNnJcsRC6vYx3o5esfLSUk7tRew35bWszFSxGUmAcdKmKUiNc9bvWHyKtrPxdPfwbHQaHkdwJvsW7",
  "key31": "2TNeaYDuePN2kkBZfr4BYRBBiExxgaMbnkBhGtJtH1TSf1F6wVXtC2j7EXxGUNzYJfYBbVDLvPHVwenNzCt1HS9t",
  "key32": "MDCv1MaWJ8iaea1LYYSaCaBK7gWWRNNZBeZZUvwpLcxPNMW6J9JhcbGMC4LagtNHYRGwnZNLo8NZPdQNQRHVP9M",
  "key33": "5WpLv5PSaCM4BNbJ7qxYn84AbXtK4A2uxP4GbByQZYNHshmebSuWTVZynoawp4Dp5QdFGSQMkA5iviSPmgw2pWDH",
  "key34": "2h9uoHWnGhTRYL2VCkYc6XQRZHfwkjwi9hmkDvS3zoct26vkCXVL8UeYco4pX8YQ6EAYeT4ModABVukEyF9dfzRC"
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
