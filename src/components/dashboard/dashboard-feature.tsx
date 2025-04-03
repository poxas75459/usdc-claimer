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
    "4toRqnPkwN5kE4BYyNP6TZoLYJuCVgR6wC9XfxMf5RonMgXogQFMWgisp3v6mjC1eGKZpACC2jCJDfvowUHJWBxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SUAZFHZwfFyPUm9VwpJJcMYw8YcHUEa38Hisy38FRSdmVigc7Mk9vtkXgkVsRybFBWRyPQ3y4mLrTw1jYZFZR4Z",
  "key1": "3f2sY1r3gHgKeUgfwrJVZ3MfVaMyF9bCtQGsw19Lhr1y4S2vad84Nc1QHJrJNxgRPqvH9BgEEh6J3ffZUzFBLJSg",
  "key2": "5wnLvvNQQKqhZW5oCmReyLWwjH1Dmpq14xiEEJKCbbRJ26LNijSmA1aNakU2qq1irLYurecStty75qyW5yiy86RK",
  "key3": "5RgWCAiZ1v8KAbwp9pdjRsPiW8mp6BAHebJthSV7Sf1uXhQfLnAbwJQfNNGsNTFe5N1eqmNP8Y1mex8X2LjtDi6W",
  "key4": "4aXkf9F9UqNm5GVGyHRt1Ue7kWS89oUawqq48T46x8vHGf8quHESmmVzRjy4JQk5tdmyopD7x56igempRtuoyXLX",
  "key5": "44Qc23U2Nc6eV1B5KuwtUGvkF2xoJKc8HUVPuv4mTARhUNXvF6TwQi26wAAtUvULym8K3aRPTSYL4dNzEBjurwSU",
  "key6": "5auAhtDGZqFsJ6j8C5xUB2ABqmq855UAK7CprXTq3Bs4m3yVNoj5MCcoqaWrv21h4CsJSaKTp2ciC8fJgaFiairr",
  "key7": "3mDrbc5r2PDbTF1BHqTKa1wKJmFGLWyhkQ4wnADjDHTMPnR8qFJNbaEezbXg8rgWtLeXLw1YZn56cv3hywYXoHrr",
  "key8": "yeeLnndzZPLECknQq2nx5pPUxFnSFA8SyNsGUBbPtM4K84pA8Y2AZqTpKFyBJDz2gPEctrtTegZ6tF4KngorLwv",
  "key9": "5NPXPwb5HpPnbUANJtyeZBDqwio5F9a3EJHvBU3jjxjMKUx9QcC3YTwyhtd8Bbi5SiaaPRDxknb3vpxMgzd4XFT5",
  "key10": "2khA9TEFoaT2H3hnJKSezgo81RMbcVjdzmu3DzMn16R8yC353wBSCxCMbRPVRd9AZTbDMcK4jUN7AoJ7XTK45umz",
  "key11": "3EjtKVUJgfd3yBoT4wRujuiYG9wSK6qdxfG7hXr52oqnxRpHUr6Tm4caSj6Xt11eSMVbU6kYMYUcXWSmTnjSCW28",
  "key12": "58ZhK8bexNEPTi4X6sfTckbzwDqsLJWTSjJzCbr5JhdHGFVi5T9pybKtivmbQ5n7wAq2sKg1hjgzoKY6wvErk5yy",
  "key13": "5JGo4ZAsZh6LiPzsFfREZcsnFRaZYrQ1vbXNo4XgiL5phaHhB319Gf4zRd6aZADgM8tjiELiTh2qQT8KUo5xiE1u",
  "key14": "2nbbvFP7xQpFRtxioNUf4wy1RJpq5L2Lv8gjvJEkQY6jNvVfr9jsin8YwqdF5dxeekuEAHvgAXNAwCQR3vEn1XuK",
  "key15": "3nSC3pwwQKcKg1GTCdkrHRqDBdgGbxMu1Au6KeMMrUKnvtidMaqH7u39soctNENPySzVmVNsBBCk93RkpBwR8V8W",
  "key16": "3NytFQKAC4tYZn9vfoi6rHj5kcXDQMYcvtaoNpfC4zSP22fQk6geHfTy91z4HSmTr2F5rQVFAV4EAKZ7PFMYHkJ3",
  "key17": "4ZyUGhRiVBwZNjgs9hdZsKD5NcudNiQSGk3oJAE5Qw1yFWM3qL9GZEb6YF1yRjmTB7ViXYYorJFWRJR8bwHcg3mR",
  "key18": "5SjTS1BDWjF87SfLgx2PJjCoaCFmBVMUJ4dFifjUAEfiXmxPKLqsR6SYQk8u8jVLD9cZquWRTXD7TDjiXzeaKdDa",
  "key19": "5DknMcasgc4f64MauCXS5pG97rZJt8tsP7MjLF7qJC8CDuCM5MCkifxdy9vN97vippSgAkL2v92BaJ4Th2GGFgCP",
  "key20": "2Vb7eonDwC1CDmUbEkHxypWMgDgKERJ7xrriY1Z937cqtL4b8UppPENnXpvidRqibwFHgicBLWVUFyajA7uNutyb",
  "key21": "31XhnvxFkrbPvH2bQdXWQ4f563vgmwU1Y1ZNj9pxwrPy1GQYaUw8q8YjuAhRrx9xEaNq7fuwcUnUoD2PFwb8TjTB",
  "key22": "4EZVS218dsibpyYphuPJsPpvsjkA8wBuwKYGwf8SPza8Kvjkw9VynjXHDPtYfpAzanFVChMjZRCQJN3UgwHAB2nU",
  "key23": "2y4ywTTvAzgDkbDRVNsTtLNP2fvBjbeAKbvenpiPvMghAuPzBgCB2GbUu73a7U4BdajGU1wjzVa6vpZ5esmu5XuH",
  "key24": "3PD3W1J1XXqLk8g7Cn2bxoEuLrHmFU8jcwYRrfkTHvPQLNQZ8Wu4UGXNuFntMamuhxJG7vZ5AtD7M5PhsM7nhse8",
  "key25": "2NQCJp42QwjALT4YYVNmrRHZGouGwu9XKzNY9CtLndNdEBZV72xBf4CGZo5zMusKW8sozm6uUR2i8ANtHYsjc2r7",
  "key26": "wzJ6gvSojgAP1GswSC94UCoyQnngAUg7A12sKr7HsxfgHuCX57p3JwEpzic9bnM6GuVb7TBuWw6Gkx1yj3STysy",
  "key27": "JbTKXo5HyKvfP81ewXTRGT8QHpSE5HQt19ch2ZW83HXxoPXYqtyNGK7ghRTkPqczE3APYdeUnLa1MJ8WaGTgFg9",
  "key28": "4Dh2prVkYoS47hLCmJGrHibcnnNsX4uYpuBcdRSRT6p16CNr2j9AhKBnWJopqUAEfARwLYm5SrVCijYwZWkU93Pf",
  "key29": "3bsXRnF3eAixQwuEjmk5zQAsqmVKPFTkU3uSK2ixRpfJhifjaGLTbxMFPPEoMFZG4JqBkc78qByojnDSNgBndwaG",
  "key30": "3Zx1pxuGrg6P1tZBFuRMQWBg4pWxG6ZhJWGWkvE9w2RTwRi3Cim42Y6HSJEb7uChbz4TKSeqBwEo5pgZzFj5ms92"
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
