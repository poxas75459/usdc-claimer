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
    "3qBDsMV5SSmmFndTHRH68niKWEQ47KcR6BwtTfs3RTW4BpwD3sTcZ475KEzmmEByQcUhr9r3sPkyU8mnoinyenav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twTWFiUsH99m7bczWfEGUgJdr9wP654DaJ7wV99bQRTFCMzuBpNSWXzRxjjWnHmrwR1ZK2Wnf88PqoE5MU3V2vK",
  "key1": "RtYo62fn4r7EWBNs3C9DbgdhPqAzUuorVax7enRkwPtYEf7j4PeDD7Ay2GSgPRgA3UyFG6osYFnQMBd1Zjxs1pJ",
  "key2": "5Sjy4ZRS4nVDnZ4DUoXbsBKws1YgCgBY3zX1hXRzhMDejWegfa3ZT1mSj8BMrpkHP9aRX7kUXjEdMPRgv5vko5cp",
  "key3": "3rsiVSsk2KwFAiWejNdJqtR15SH39co2LxyCjPXTYmedD7w11gnGg66GNxa1Sub9ft9b86Ekq9CzG7NwHfBevhDe",
  "key4": "2Q42UGGxTJS4Cb3mixzbq4T3xAKar3pfMZNAzXgJEhpowVmFbWueiuaj3zM13vu1wXho2sSJXfc6w3my7uaZgVES",
  "key5": "2chLus4yGaxYcHAQ1rZKA2fVKTanpqqK18FGPYsifKiTLLu8pophG52VGR5pTw5QM15CPN2jEpu2X2q8TtKPXsaT",
  "key6": "54eh86NyavuyUCoCJ2dgBYrZDGVNFCC22Zy2tY7gjRzfnGpnEFFNA2j4KV4XCLKC9YqMWjWoSuRaPEBV3x7wr4QY",
  "key7": "fY4Kpqhqorr3gLZ3btjBbHHG7rNKBxeEiRqNbXdJNoDYAAv1DV72yzsXqZsMFBqu5rUi52beE7WxGKi8jDjrDPv",
  "key8": "5PwPHqKmC63R1xPSFtsogo19cdxB78iigZLjTP1P2nJm8oiKTi44FFw5txb9MzZd73hCR1WMDGr9YwopXDLrvbQp",
  "key9": "3yNhotzpcQ1Nz3ApUCsL9toDQDsaKmxUtyCXYi3w2GZTBin42bawGLsvMPGWJECzwSok3FWd6qUXFKZQkU4vNCc5",
  "key10": "57wDm2oWH5aCZ9Q5qenSdsfLJHt6783G2aCDjK9k9DGDjCEei4R9pePtUv969RShrf5Yc2PprHxLaoTdM8VoG7E3",
  "key11": "Cj4abBPKQrEUa5XAczVvyruLAKxPY6wssBEzYujWZrDbGLrL3WyRFLnmGMdfdxEBWiKbnDBc6wwR8YAe2EMAJw9",
  "key12": "4BTkuFHoecCLgeo6sKRWgztyTR5xVSxny8eU9oM78dZKANLGFikH67A2F7xtDGMJfQDzLYmTQPieKvRQ88ZEoMQq",
  "key13": "BNVjHW12762fa9MaHNUWgTxMkkCjhrYcTy6VrTM1GotUQiuaRHvLiMrxb9prnsZG1XFd3cNE6qrvs6eS6CGMvDA",
  "key14": "2pMX3EGzQAnTDEgVB1NP69uL29NT8k31f47U21LMA9EDmAtCZDspsh8R8NKhfC6dzk81vzKRgk66okZ8x48VutgR",
  "key15": "3CkUJ9PoqXTRU8qnKugMrz6PsqKBd2gTgUQwGYvMzZnrDtPk5cZ6cpgikwqXHKDahQ2AqaAVpJZKR8uFhQrj8kvC",
  "key16": "5XbymiMqcJZEzWjNtPF1UHfyPiccS54YbwLcaXMkLdxPvFNJ3MEjh4gJ3iqK1WpR2yNbmpYSjKreTMSsyTwrwD98",
  "key17": "5pzjZmzaAgxUFG1wJbGoFeHQEcNPgJNVnqwG8dp7Qu47hgV4BA1mMJ7tVkdyppuxFNWaz76ciCEiVkmwL3x8o9mZ",
  "key18": "2TLAimrdoQ13xvDExhdSbfGQv9Vawapi6hZM16NqtzUz1tE3VKFBKD3h4TUpb8t7HHZns8b4y5CZHnzqvgbygrme",
  "key19": "393nu2YDeJGpG7rrBCV3FMCa5gaXD5wGEn4hHcG3pSYCPPq1uae61zgrvDDqnwJwqeCSA55KHa2TmJBkeKzUGjg8",
  "key20": "2KdgCL1mmebaRjKAGEdnDtgWWr7FQRy8YQXJo9TkQGetcxHH5RJ7mD6EcYwBpM3LGwf41uEpjtnSaH9gyEfPMW32",
  "key21": "49PDihZGMAyt7tGv6Nef75UwNwidGbJ1kBmmYEAuH8UMdoa7WwepzT57JdsJ8rG4ueSoJXKnbyPHYXWqQcUU6L9m",
  "key22": "w3kXwczvdQGFdSSWpWZ2geM6s4gtyJZLomWFvJDtV8mv8cfNyNb6wwBZgJCRyeA4QmFEYd48LwpYDTfBsy629fu",
  "key23": "5ZiZEFK7S6wAYBQsQdnVdzy2e4B2pwfVq6K7kLFr3ZVEyzu3DR8Cs9Cs7vcdaCkLtgZ7tC87uJqgRqvxMyMqdceo",
  "key24": "2cZm718i9okG8agmnMxZMtKTH48FpFMFULCHac7HTdSt8Ch7nfnAtL3q5Mm2oJx1PR6W9SVDzkZrMHoBzooqbjZ7",
  "key25": "iQLtaoEdLevJCndyeWALr7Ynys5spYJMDiiPr1bLJBXwJC29G8ZuAYoBRhTMtp1fqVwS5ZHYwoWhgJ5i87U9nuZ",
  "key26": "5sZu6r8GQQnCXba3iiRzD63U2gcSgufzDae3oJwFFwBaHxAhJYt4uyNLCgmQ9sYLrxwUwNvPTKEHdZpTk6jmW4xD",
  "key27": "P83wm2er2GXbQpQ73Z8aeSB3XhTMPSmvC5RwdEH6dEgKNTg66f17786e6XRLEKCf83Y7et6urNVAtqV53Mczvwz",
  "key28": "3DzchcEtM2q5Ei9m6XYgh3NB2D4sUWCPDMP2kED7wo9P3QSCjgbyw4jKYPC7CKfVXY2uPmd54f2zWTY9t1hswPMA",
  "key29": "3H71hgWF5RLEoYLQ47YFLCZD7b5pCMFkRtcuHfqxVwCYriNRNHpXFuH6Q6jC8LSA2wWE1wsEZbjhDKKcgA6iWKXr",
  "key30": "4KEZpryPhFmh71iKCVRb7Lwg8ruGfs7nn83YxS9oucBaSjWNeZz5BJZ7SBg7cFPsGwMqRExAqJSR2H7HkoacgNYY",
  "key31": "JPuUMaWJ5eUtGhFjdUK168TmQeFGhFn2wEkcqSt1MHSnpA55qFDagnnbtN4wFjKeRubgiLp99nCRebDjoZHYEoT"
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
