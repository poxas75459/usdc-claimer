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
    "53N3JC4sgg4BfFw2m8ZpiYXeVur7G9puvwWHRQpVEqW7MjXbtjAXBweLh9PPfxp6SYxhZzENKzHLaKuQtdnV3A5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CtTcKtVEFsUMcczzo9fU3TGmjEMQBt4gyNiAEXDFg2zCF5YkGhbstu45HnrTRGEEQnrcuQWAUXZKEVy6N5qvqsD",
  "key1": "5kZf92EHH4SJwgxTkepmpqw6nNYB5aKbhbyNBUeMUsVz9DZW9VMvVoHL39Xx7EJ11QaTJuKiG5tMfPrDyEeHWrTS",
  "key2": "f9VCGghAjcUDvELhpuLRTGUrxnrXkqA3kfHsgP7rh1wgeoZs27XqkohE3qz8ewDjXQAKd4GkGufNucYVu34Fv93",
  "key3": "2mGhVSvr4W6ShjWbV1a7LKg9of8kNoAqY27YYsm41FL7zbaqAToTo7rMcvguHwwX1Dvbnh1tdegVhKABNan6VYyv",
  "key4": "37VKwX2yrJhZG8xqqQwrtgKMVDsrxrSA3LNfjbobBKtHmyQ6F1a7BX7N7c4EwrUHo3x2TmFSoSpLNv1rxgStvVE1",
  "key5": "4PzZLWnWNpWxDWSpJqPoYKeob3Fdaoi6QLvZL33tbDDscro2uT8BxHMWzY4uGiszxdtc9Z1Dw2bChTwrda6s6UpV",
  "key6": "3qR8mEz7KNw2SU6wJhPWkm8HpxVSvuk2DLy8egj41RkPSKBu4UiCimyDjv9u8ymAck4PHXUmpZRNNT6q2QbJwN6Q",
  "key7": "3Wrb4xDtecsTDoF4ybKT8nuys5grhoaCE41U8YPQYkBMdJkdcDY62E1S49GAwYon38naEHdZNBz46cGJEqtc5bJX",
  "key8": "5tPA2CUcuoyGJ9RPFEWG9JcpSMyeRbYFBRiQXedEPF6h7snysbw8yDfcNWuEFTkg6W6VQs4V4p8jLnp9aADaKMxJ",
  "key9": "5YKzehmiudpjpkX2t65FXLWv8PT7JaXKCyHLx5CEmgwoeDsdnoEX4pfBMBhfZ621iBcUuGywTEh2RsVeDLLfNR4w",
  "key10": "2W5PrRLVAC9TwnDegGf4JE33JPUGQjkBwy5H1hiP6w5b4Dpb2qUH4uUfCHAWXqTkmiSJxEi17pXzawiP4GtQJhJj",
  "key11": "23xhpwbWeKo2JrxbYitJy7K7Li4Mr5yriJPwCNCrMc3hEb1RAji8Tf1jr4rC39cQdf5hGqCDyeiXVzS3pahTxq6C",
  "key12": "341ZEKA9X2wRwyCKyM3dVPAZF6KsA9Cms3kLPtGhE7hRjamqpC9JQsvmajZq5mbwoLusKMSzvYo9oMs5MmRtDKSM",
  "key13": "4bjd5XdsSSuuiThNKBLLNKVR5mCKv9bwgmwva5LbcgFfKPcG2XsN6M3dFG63CiGkuAijFBWVfCfwhXxaWiKX48yx",
  "key14": "3dacvtXJ6JuhSZHR7iG5eUendGa856XEGxeJtNz27nkq4QYgdQTkVbTYXwhjvHWJTsw6Z8jdrzXW3jpB3i4LfFke",
  "key15": "59nS2waUyp8phwLEbMUhpgAi47yRqrKgkUVanX1LcGajqBayhDLe9QyLyRqSexXcmrtW6SdEZH26bnbse5CnBJzS",
  "key16": "5CLNcNDjQ7gCqx25sdksbYSwLd2DPs4qb3y95udg3BK5812p5bCjKG7xnu76exCsJZGmDPSCKBQrqKPeBKVr7c7b",
  "key17": "2MS1YXWP2gkEFYBfDbAcdMofQ44u7ace8gQyokeGSnRzJkRE3KnqLWQh55aKSMRf8k7ucBNkzUssh5gTxCgQtCvg",
  "key18": "35jasDqpXqKgikCe94icWEBWauTVPLaR8kWDSwb1h7eCSFK6c2JX2eJmQYsfy6gsHGqzdgMYFNQ31myjVPpwLXVR",
  "key19": "5EPbEoAgKKdeVTfDRPcvRWR9RTVPEAq8UrXu2pMLmFVogRL2uUnuMS4WdFSQ4twtKFwtRBpz9c7HVhGYMKqEcCn1",
  "key20": "4kYQq82hSd3xBD1nEehjPW4NtRvCPvVnQ9NmJ6dSZ39zPpp2dTWxanH8L2pjkb3ZdVXRFNjamRFrv4FNnfSxJTN7",
  "key21": "3wxM1WPNxa6QQZHVbR8sfoG3JK9riV8xTrQgqTQxqh7vfkRS777kJzPfMpaxWaYpcBfRFF7J7QggMCuf1UAkJEhq",
  "key22": "6AyDcwdnNmzJ415uBntQeX4Zzx32Upna92Zs85izxHnX8PSVsQzwzEMHMFXuWiDxpkeGDmK4RBikwKCs7RsNyp8",
  "key23": "3jXaYfbX6XQuMCkzktFUABhkBpJqmUQbDdksCknURSUTQNLkjwtVVGBzyFhFjBqHSM2syZRvUogSquyhm2qPJcW2",
  "key24": "5xG8qvvXbrsnZxcSYh4uWNpA5e3zQKqA93YDZquhF6Ty2BnGUuRHqCkEAQ4aApzmCqnD4KAPKiWmCBBHSsgvNjdr",
  "key25": "4CYdZp1fbJLeGAm8FkDLZUbYSvj91w96y5Hjdh57i1pt9irZPmZXMPADV6JHMttF2aRynzd7Vhwf863ncdamBiVx"
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
