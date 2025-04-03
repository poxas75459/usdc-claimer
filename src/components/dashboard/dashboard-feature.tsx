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
    "4MfJ1Xue5eefASCDZ8tty9AK4Uu4SMpLSrDpqjdR5x3tcuQ8Vq5NGe1mFmiWC12kftvQAM88BF99F71Wuv6aAUBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "345XXEvzuuCn95eJLwaZQwEo2Rom9ZNSQWPuMRjyxFor7mZwrpN8H84NQM11esiGXw4xAovVbzm1xNCQgAsHLDUT",
  "key1": "V7v1je4JvhN7tcUJLtAeTP3AfAnoJqZsuuckqocLV1gyHXWnroDxmSvKiVJMfLk2c7QEuSz8TmBHtBX8rGNGGPA",
  "key2": "5xKDpx6uYx284bstL4XNsvB35TFzD3HVLE19Q3nQwS81yVogFQxZ7PhKDmNeDuekB4ZpUNEaDfNXAnw3gyLr21yH",
  "key3": "5H4nHihr3dmmB8gqNedFwZnHNpmjKkPEFNuGvVEPZjG92rmGTbjwwbGEJtUwuBViw1e9izSqewMWacYsJf6QpTmb",
  "key4": "63GVRmMsWLGY7UoPRd6hjTmJc7ZTb9Tq39nHddH4gU6icW9cytpB7GxBWgCBmYcK4dKnkViGeyR9iZfBdZhxrb2n",
  "key5": "27FcRdBev5B6k1d5yV3dw4313K6dS4sxbST14bGkkdcRRqJtJpb718wh5PGDD2dwcmSNou5dfwAFnXNWtrGjmpCs",
  "key6": "5TQC5TEbQSrb6eDnFfj3cM9NC2BsZrzXCnmywWRcY5zzyVW8AVrpqkM4QPgENBd8Tu23qpLd9gkqNvyo1UF9MTv6",
  "key7": "45FpFw2G16LbJfC4svvpS9Km63TX4d9b4AZZpsVWMiCJao5DiruUKKjLg4TtCZUHuyaBuWYxFEk1faFMTyw6GvF1",
  "key8": "3eEeaeszPTbJyjGJ4s7H5RWiUcb7w3wk9havWKTJPoBUNXNnnh8gAnmLpRYuyXTEUooFVzUFFMjNA5hVEXjFkGne",
  "key9": "2sXGELT8mc4akSGB96VMtzXsZtUeiZHKD1G8zZkpvgd1pJZYsUYSQmxdRpgLLRC7C47TEnJzLBKVRbaKgkfUxkVy",
  "key10": "2mvxbcM7ktmms3Pnb2GZQPDibFKcUKaKtXFbZTjBw8KxresPoAZZoSNW3GP74gqi77HVN3LAc6y6kKzs2qTiQPem",
  "key11": "gUabnYemGw2XduuH1Gzp9cp1J9z5ZpnhSBmXCgEyR9RLhtoMg5A1hgPw1gwGWHkNbnhuz5eMXe63mPwiTkd1Eeu",
  "key12": "LjeM8ciGZY3BnTRRbVvkrjn5LAKxfMxE9jnxUmjzeP3W6DeSqDkg3iHfpXqhKzMBEm8xZcPmGwuLVZJ4sqLx5Mt",
  "key13": "59Gk33PVWp5kwciBBgu4rEiRZcuYNEKKygtNnQas3QFrfSvuov3PWspR2VG1T18hfG2yGrFbs4WYG4rzrpA1wdVf",
  "key14": "4EXnByXm2NPW3MPzrjC67Dk5H6hQHHhVxTKxhNiFytkmAbNZNTScLGsWhNkXSq2yYCzebxQZwCwZUDbq3ZQFG2Gg",
  "key15": "4nhUsAfZmbjk5r2dphU5ZukDsdA6aVS8mZcG67LAkqZnmkYLmQh4KAWVMFdLgZWHUZYs3xFa9TfC4C93b8AK1wu9",
  "key16": "4kiZY98oxmVzHGmhdS9sEMeEk5MDd54PEUTHcREo9SkU4dQEsf8EiSZnHtLa6ebTMVVmqhxbefWZdSAho8Pw3H7J",
  "key17": "3EZykX9vuW1L5DQ4qygDR2LJjQFbqebT17DoojknLwTCZcWLxGqDZq8eE8CNwEcPkpPGZurTaNzKRr3tSTwDA2i",
  "key18": "22caF3NXsF5UJUM87aXzfHTrSrbg5T4XWVZF3d3gd1JfQz5RR5sDDdPY4JdxjczobkwvQkjQXPbujZeWAxUmBtMj",
  "key19": "48j6X95ALZRXoudv1ppesx1pEs4cLytAfYAuxzfw8muzjZmszrGyaFNNwKyiNT2zFJnFwBGxY12SbK5e9xLvhGdD",
  "key20": "3iD78GkToqcoVasjRBK3DGp1YFpcWDXnGvKhrvyrko4s7jP8kJAN1HuxvXW3zyuHHPdxFpE5xpRPe2bmD8d1n5WG",
  "key21": "4UMc3RVE2dU4La7NQFng694ZBrtPn6io6dWAQMPLbXP9Y9gmSnaQBdLyDuKJzm4D652shZd9gcXmp1caYLe257tD",
  "key22": "3RGx6vDQW1ZVXfgcHPbkBDRLbw4eMf6B4K2Lu6iDkqNjUo5bYziWRceyi3FND5Ya9FtJuYDWNjty6VU7deWgWa38",
  "key23": "3Lqk6kfFaPqrvzTVUiCFxSrva3aiyoLBwkuML4M5GHnfhdyCoFtUU9TD4rAytqMqSN437psn3eDdheupPnnujKtS",
  "key24": "4H9TXFK8fdvZXshCmpcANYAvuFJsidvWUi7YGrZxzj7Ng2BHwKCW3oJwwWQRW6kX8NcdXFZtSEaUR8oQAbgbgspJ",
  "key25": "2krE4vGxPHuCFpb5oUoQ3uzQmsMa2vHgRWDbDxNegugkkVMJoPkHemJqVDyVATP8mVg3yfbtTjBFhunncZxsk6mc",
  "key26": "SA6XLrNMcVCBmo6a23UQJEAsAA2t42kUm3wgV2nvxy8PDsNGLVSjzrUoxYnjcBB77UMth9Hp69bNZzpERaeJJbe",
  "key27": "NokUTJWfrg4GsDUoxCiNozdyGwwvKHiQvNiZHreqUFHseH9trfWKzvSj5XyTdaNtHzMwq1dVWou7ws6qJfCtidw",
  "key28": "3gLYPsw84x2vg1dPBD1DTxXFg97HiwrmdJdGEARoFTpLGMiFGikmr8shk3BHeeHbkR578hXroV6VDfk87EZtP9dC",
  "key29": "5EPJVVw5jQgZWxzACVKx5koqaAJYJAMai4wXAyruDTH89Eoy1H1Gf9Pb9XUKX2TREYFtsfwujhaE6SaN5HjdEnhK",
  "key30": "3pNGshApdxtEtxs38pEPXpR7z9N3u3UFS9aZofjy9ERTw7agTTEQdSzvsLne2xXKJBXWvN2eJv4JaDyTzqqJtvnJ",
  "key31": "2t41QVMGcAebp5QcUoUvu2tKMAme4o62knqVznMMPFug73isGMYciNowfmEbhJF4epxTcoBQSRFTiUCdAxVACTqo",
  "key32": "4PRamvXW2541bWHkVQPmNnLbFbGSP7UqXn1EJjxq3aSpwUSLvqUzTyHHr3hkjEMqvhwAeuTbr9bgo8LFrWNCWzYE",
  "key33": "2NgL7Y8zgTez5WzPQpPBJUTpGx7zr4PEdmR2QCPcto2MgRfAMEzVg8BwKuUwFknA9Hwo31ujimtzLB3NX8hM1jGt",
  "key34": "4qRiCLPxRhfNNwoHFLoaEuEoEWpB8CcGGKeo8LVB3RXC3YYfZAoAQp4JkixfQjGALitLBNsUdZxnVwgv837dgyPH",
  "key35": "2crHAnZiGNN1MqqGMcchzfdhnrmhfiRkuutbZcgU1BozyoJz9bDBPzdDeHzbeEN74XZh8MiBATMLYwwUiEeMw13T",
  "key36": "2xt4DeccfYFrVeEVzUHN5BSbmMnqif8M14phzKm3fsrNCTfKB1SDSA68HcQfofuH2pReiGi1QdHQD4usVUpwwxAA",
  "key37": "4kcsbkr4yxDkjo8w5GmV7Ed7P4C3Lv42Ne84p9SB4R2ue4QkjiinrKP54PHaxRK3NrYZKKwJ3pf3WhKVpqmj4eZX",
  "key38": "4AiwEKeac6oy1nGVXBsmj3nkYbkVStp8VKdtgSoeC9bvaJXjrPjxLoWGgB5KKK3vAQEHLK5ksQK7HLrMcefVW7Hf"
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
