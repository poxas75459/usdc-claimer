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
    "zzpqiBXvHixADedt75EbXEWyJK48nAtKdj3gFHchYYcyPC1NyVfQyaRateKXQJPKWczwcUyD7Qh5S2oiWrYE2oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gnXaDDfYSy2HEdPNR5VvkSSWTG161vLPiRLXUJbwLf9ZeNGhHAttgQvLGZm44uhi1ysTFB5tVRNQWKm2MntLLuR",
  "key1": "4iU62ZCPF14Q2gANVLLojzmsmEnRAa5Mn1DBJffKtm6GsYhkh2MW6bURYAwqHCwAyaLdpwUANvoyBjTDUoDzLFMA",
  "key2": "5EwKXXqnZe4EWQg2bFGPpXhWbkVhpfTo1baHSV13sJKJE1aW2xV2Jwf1F4BjdmekNwEozYKhw2B4TfYmXMKGzFHb",
  "key3": "4jknPXrvXsPRHTqwrnzbfdzMyan4Yf14nHKeVLsiMYerNyw2RUuNRcYcyZXPLUjhM48MrXtjNrutfx4dFdtWpv8o",
  "key4": "3zGGUH6seyPmm4wwKkQ1Q4PVMVuWnd2jKq3XmjbvDwKnLGNf6T9aVzLGfpk3CWhDYLzA4A2fntxTayNvwoz4MEg2",
  "key5": "5G1aK2qSdYH7WxAk7YxDtRc995SXjM8fmMiPcQk9tgt2osKmULoBXyP4Qk9wNsbbpBy7dYGqAytVZ5S6aARgh3Qn",
  "key6": "4MBiCLGonycVK8tZoPvBryQPUNdBgfLiG8zK2BMAs31YDJio2waaNPoVsZhNBr2E7ZaETs6JHa2zMkZ9dkK3hRxe",
  "key7": "2dsevcK2Qq2qmnvVWXDdX1aYP8UZJLJSrbLCzhHTRa3CaJUAGTMPL1UZDrUqx7M9CHKE46Mz5BZ5ML9me8W2DqBy",
  "key8": "5np3TSigHweBqjj8egaAw9wXV59qWhXpVvDiQzEjmCCMk85K9dLRxZXTd5MgftBKE87A9wZm1naNLt5S1gfEYKhB",
  "key9": "5DwUe9akMxa7vmQn5osthFNNfFRGJU1FtiSN7ws2tsBEMTETkFfiMwjur4faD7E5wSBdXTARSLNYJs7D4JMEvoh2",
  "key10": "3EQ6YEsgN9ETpT4xen3YgLuE5xXEfP1KzzhzNK9yTqQyNPkfpsrpCmg9U1ErThntaNDHjfz4M76uYuPBEAAhu7VJ",
  "key11": "3KYnHMGnH39f7ybjLdJSB9GdFtyKKnTimE7mx24zG43sX9iMz8DExoQUydisj66d19aZuvF2PZrVWT52CDtNac98",
  "key12": "3jHQLNvKrdX2VDwcqKcDGpj8ijSxv7TharzNejTggqabFPndsd4W12vzrddLzNHQt9L7oviwTBbgG2GcNM2gg7XH",
  "key13": "2nBXEQfoxrYtBxj9rZTgoCi95FmxCeJn5vqx8jQY7CExDXYRJ8ZdVAjBW2YC1a3sRLrSc7VRSGWc9ZCFwBYA9eY9",
  "key14": "45cz2VhSeYz8S7RmwGnxAZnExsQp5xPJ9rixXZgtF8RVGZLD37bCvDtrp7iS46FY6oBBoeEEM5665n9LfDukuHHP",
  "key15": "3NFmNtLXo8tQaqKLJCoJRntJwnnRMwu3hCJLMv288rNG4RrKrcCrkDjpL1vckeCFAGMFcMZK5nfq6Zg4XWnTjiSk",
  "key16": "3zXmbQUQNEorYjB9wLu1MC2DRHSxe9MKpZ4my67wpgK3vwtofsDoUvxKBSt8AYBeUY1HiLHqvg6WUwhN7u3w5kUK",
  "key17": "573waG31cnjMkWNqrbsf69YguqguBGUjJhdZnkQtVWjgFmwBNf6aEio8by7sCwVxCEDeH2TyDvfBUnjvRWh15phv",
  "key18": "2R3bfaReqVsgLZ8puknLeCr7eVBNPGetbyYXvZ6CRBsjJ5bGYVFoumUiBcFniq3dcSkPuTEMyNSdCBwdCyYHKvXZ",
  "key19": "4xTxP46yt4AfEVvaDU6bC5wYgzsbXzyo2voyu2wTWRp5HUbTD2JywfQLPY5jUrhmR8Jszyg9vwYA1Kd6ARq4vBLG",
  "key20": "2fjZXG6sQWVD5Q2ck8TZbkXdJS9yy1KzLeV2GiaFCHfGkzS3pnAPePuS5rcKXkSS9A4m5JQR8gZugTG3eaVoejhR",
  "key21": "YfFVFEKFKvE1twK5EG7WrmXsmLkLv7CHKAgYhAKJAK7zpZ8yqhHsRybiohwpZ7jDFrwyasV1YSvyhBmxkCpckhL",
  "key22": "3zVxShvaFeU2e9ehFRDoYkfyDTx4iJE8ZW8ekUUxz7utaxeiP8odXkPRUh9rdxiiBJ9csDzHEUHECNmFZLrFoPyH",
  "key23": "5Yj9HCN69cvet6mcZFETLUvYyC83QuF87Uzy7SzytSdBu1nJ72ZcTYgLXZ2UeA8k7eNjxevAvExCiL65KXu4nmwU",
  "key24": "5QwCMNWq6mFgKQ4QQkPu1qjMSRr1EU9X6S5SWDZbY815kYnfSxKf9XFPUdeE9fRmmQ7Cd4HeyRPvC5RvuTa6vgKk"
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
