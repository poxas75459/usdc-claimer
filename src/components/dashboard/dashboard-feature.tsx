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
    "5o7mF6UzoXC4F1Z6dzVs2u8WDHoYo2TUjJmqU3meWHCzxB172hS13h6cva6uc1i6hUENF4cngEKzWHqG1UD9gTic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4NBR9TH7WRHLXmYZkSSz7Fvcjs5XNEkhfxkrrT6DRXwBophwmEYwRLfT3aRKtXVkmFYLQWmbvvMPngeoF5GYKD",
  "key1": "wQyRsb5Rk3sC38H81aP6vyfZLPTHrYXRqusBLhPZ2kzn2MNHzvJMcx2inC964nYJpvqAXJn8PL6xz1S17zcqGGS",
  "key2": "4BdBN1cMXXJtKjAUfinPM6TWtVEvUuhE9tZaHVk6vbk8oJs2UmEaaYuy9gkXwVLr6FCAaKPTQFHUp5N5NmDszvuN",
  "key3": "2EoY1hM7kfvVw5KaxVypcTmjFVotWghZUqT3x49QDjajSBebHtSDD1RDU3ZY5wGvYdkRs48wnq3ptHMVT26kebz8",
  "key4": "5WEvnK9y19c8BGiCmEjumMrNjqQ2B48LnFPZuNLNgtFADZNpRDoHgUK7eSX9mKLyagSFcPQRTGqJ9ByLp5TfbJQk",
  "key5": "2tED14Fb4WDYiuESfdu6Refu5tUW29MfSLb49S3KHvhMtkFU6yv1mLFf5TbT7drVa4uYrV7NGMShqpi1Z4E2HkvM",
  "key6": "3bFyqdtSrrXxQbsHUCLZs8HGxvmfyRuv4EoFKtSGSomasDnEGsdsoZXHWw4nnHLpvgVCP3ajvZfqsnRsrfCvLyj1",
  "key7": "2i9wbLXhAG7Fgw8cB55HB1F7HKCku4oKYPp8rmptJWCeTrzwMvk1oWD1ZKLFMYvDuzkVyzyzVyD9tiPJ4wkAh4Gq",
  "key8": "5A3evm1rFHHaUSDEEzmgLt8Syq4EnTFmgXh5xskYrBxyxEh44JTBPeHsJJzEh1udRHNLcKtmYwwki7cRrgypaEgA",
  "key9": "3VPFevBhxpyia1vFN3knCUHR19rNDRrbLF5Dq82kW5EW4tEkfKuGMaCjP5FqASXKTx5Ph365HjFgiBM6ECyRXUFF",
  "key10": "51B7fxsgCLymtXpLsr3W1VpgARb8QGLcKUDRaJ2KoKpN7WYLRkHK5VLNwAtZsdcro8BdTG19ZJj1vEL8fcNh5w2V",
  "key11": "56xWjKsKC1aX9M6BULnCZ2VHcAYc4KNRJ7WbVMuP7qmTGDpeHgcddtsuvS3DkvDPTJgc2UbJBAuymfJGRDaroaQn",
  "key12": "BD558M5ZuJetQ2m6uDygRB4QZ3XSfF4SJNjMFgA2wN7qDMLMHgABssFfcwWfyjMVVEgMS1SosBnyjiV9GX5iqPo",
  "key13": "GDGYgVt1oe7UnvVHyyWVvNQerKnZeFgb9G5S1H4zNMwuB7T5wcLZCuZ6YKmNoBJpRPtnm3kyswv8L4sJCQ3YPJv",
  "key14": "5oTZ98HJkuxf226gj15MWPARHB7CeQKfVh18izc3We1gtbGwfwz8aHEXXuChE6nTFWmNJ52r84hfe1PXCMg5GbE6",
  "key15": "1VsRQeBGg9VoE1LCC1BFi51DvdVEArGHMBBkRtS1dn7rWT1vDM8LBYYJLiQeeV6ypuJf6gmDCMnb63mAmfH6T6D",
  "key16": "8nAuTyuZxWkesSicBBPLhFTbrJNoWMRnpe5HELJWQAj7NuJHdyF7bhrgGMDjPBhZiKuJQAidTq3iMTp1ZTF6xhE",
  "key17": "221SEuxttY7R4AeiH2z994BuERiASFMavzN9P7ax9Apa482GPuAFbaPP7G7vjGCizr7iakzzxtGeS2AvtB2ejkZy",
  "key18": "5XohzF3sJ2PcMS3GJreMqeFgFUJKcUz8pXrb9v9aJDVu7rratSgPHHLDrwvVjtLbcm6aioPY119wwznoPHRwpeJJ",
  "key19": "RFbciqPThNitCjtP4x5wkm8aDv9nQcyUJ8LZ1dH3EtnqJTBrZk8MqZKx4GJ4aJV2SuUMgerBZR7eX2hVxweEVYo",
  "key20": "2psqnZyJCJaZCk35W3joQkc2C47mFnMfiCcdS2XKYADZtKNpitriGgKh8YoNYZTEeBaBznbiUM61n4pEBMVxKS2o",
  "key21": "2Fd3ajaP8cm5cDbeKTpgNoGMdtPxNLShrKmkwW2Rsv5ks79PCCWKLtgDR4RfDbAjpwFYbXf5aWkjFNCLWqc9NwDy",
  "key22": "5DmFotYNv1QFhRmG8MYj4MqqQSPKGGernR6EzCf3cRqBy86Ru4XaSpHthJL2bJ8k4rRHGm8YGgiqoLLHC3TFAB7j",
  "key23": "WdbV8Uc3ii2Uo886N49rgfcUwJgAVgXbffs3ZWbP2xfYFaCkTZEJBPYxHqcJXYYHqdxN7LpZj47b7bcgxt83xsR",
  "key24": "4AWhFumrbwXyoRvA3L4XnChVH25BRTr3D46Q7w1vqyZNgHssQwSbHSzRmjD2qTebU2tS2Xr4nzCU3ii7eqXi3N9g",
  "key25": "rYdgw7hoCfv6gN6xy4uLzvCMGhd8BdfecVB4s7uMRJEsDjHF9rzkEvgZeWnx4KV9ZyNR1XkG8KZzGjkgXWbWK7J",
  "key26": "qhAGwsYXibWgxy7ZbBGAGNQsSNPH82eJg41XpVTKSuYuqmkHjNziN4kvopTGeVNCu1BcYJqF4EwW1yPWzRXGDD6",
  "key27": "4jPaCWMrmVkWC1MFReBwv8Wrv9SFPCVyc1GmnK6TwssU2UWi1GrqwhHoZHtwgJV1mQdBqAu6rwqT5dhZskEztj3K",
  "key28": "321XBeCPYvghK3rn4vJFvBfCCZJyLq4mtxapWULdCgSHAZmjrwGiYB7Fv3RkcaagDcETkwvHVyGRZmuxAk2T1q9q",
  "key29": "2chB37ywwH6w5AGREZd7vqesYc39u7QQTZepQMjYwffP53DVMXpSEDHzG6MAubtphUFxYhmXNDdczEC8n45Qyf2f",
  "key30": "LVqS26QM9tTk7BMa2VFyhLJHUkvZUS8V7Poy19TU9csF1Jtk6NkmWrSqKztY85SWPYMizWYhSGQaPGcseWTirhD",
  "key31": "5UbeWQTF3PeE69hXrsUC5ac7gJzks722nNSa9jFg7DFFKxhzUnrqqMtkjGrU4AJvrjdeNUuDxUEru22XFUYciXKk",
  "key32": "4MSeu4mWtG2GuxY3XCNLM6b4bDus66Gmd9wLAsxrv6ZEHMGdMjUtUptvEx9sbXF4ao8uhxeLRtmbSxtMBjE97MLf",
  "key33": "5ZKZMdbkZxA3WXafGwuKd7cVfz7rbrGQVXgKgNVhW8YW3CJUungzg9toxW3H7xcsNNjn5NPVAcxjm2bcHQzPZPTp",
  "key34": "qTQAFF89gTWziSFc8U74KcTRnEAKJUUMVKHsu8oUcP3j5V7gJ4SZZhm8DoWztdtsvA44RHuMuwYrrSQsE8GJbsK",
  "key35": "3QGyvB91K43XecbDDLXJjRVC6DC4vu9Q71AnXGNZc3enJW1rDQegpBtAU3V1u9FW5qHMFAkjqe7AaHWgZ1aqHGxo",
  "key36": "42dQSpttkvRVXJa82YJtnbR1UzaYCj1erTuZ6S3VfK3c6QhStYGhThScE2kqmWW95j6gyd6vSY1yuTprvsK5AtVw",
  "key37": "5R8mcRcNiUSkir7gtDuLZ8u2rHExC6KLEdTtiAWqign31i2p3sKPtsNpJ135makHGRhw7dHmxUE7sCEDRZJdoiEZ",
  "key38": "Qs7uXbfCdU6ctesgSHKkdUk28A6rrpQixr5J1cYW5fw5wqcwu9G9F1GynuMTck8zeLD3YoaP6PUieP233bRVaZJ"
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
